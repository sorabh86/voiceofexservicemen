import { randomUUID } from 'node:crypto';

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY?.trim(),
  projectId: process.env.VITE_FIREBASE_PROJECT_ID?.trim()
};

if (process.argv[2] !== 'confirm-write') {
  console.error('This writes synthetic test records to the live Firestore project.');
  console.error('Run with: npm run seed:test-members -- confirm-write');
  process.exitCode = 1;
} else if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
  console.error('Firebase connection test cannot start. Configure VITE_FIREBASE_API_KEY and VITE_FIREBASE_PROJECT_ID in .env.local.');
  process.exitCode = 1;
} else {
  const testMembers = [
    { fullName: 'TEST Member Alpha', email: 'test-member-alpha@example.com', phone: '+910000000001' },
    { fullName: 'TEST Member Bravo', email: 'test-member-bravo@example.com', phone: '+910000000002' },
    { fullName: 'TEST Member Charlie', email: 'test-member-charlie@example.com', phone: '+910000000003' }
  ];
  const createdDocumentIds = [];

  try {
    for (const member of testMembers) {
      const documentId = `test_member_${randomUUID().replaceAll('-', '')}`;
      const endpoint = new URL(
        `https://firestore.googleapis.com/v1/projects/${encodeURIComponent(firebaseConfig.projectId)}/databases/(default)/documents/members`
      );
      endpoint.searchParams.set('documentId', documentId);
      endpoint.searchParams.set('key', firebaseConfig.apiKey);

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fields: {
            ...Object.fromEntries(
              Object.entries(member).map(([key, value]) => [key, { stringValue: value }])
            ),
            isTestData: { booleanValue: true }
          }
        }),
        signal: AbortSignal.timeout(10000)
      });

      if (!response.ok) {
        const result = await response.json();
        const status = result.error?.status ?? `HTTP ${response.status}`;
        console.error(`Could not create test member (${status}).`);
        if (createdDocumentIds.length > 0) {
          console.error(`Previously created test document IDs: ${createdDocumentIds.join(', ')}`);
        }
        console.error('No security rules were changed. Writes may be blocked by the current Firestore rules.');
        process.exitCode = 1;
        break;
      }

      createdDocumentIds.push(documentId);
    }

    if (createdDocumentIds.length === testMembers.length) {
      console.log(`Created ${createdDocumentIds.length} synthetic test records in the members collection.`);
      console.log('All records are marked isTestData=true and use reserved example.com email addresses.');
      console.log(`Document IDs: ${createdDocumentIds.join(', ')}`);
      console.log('Delete these records from the Firebase Console when finished testing.');
    }
  } catch (error) {
    console.error(`Firestore test write failed (${error.name ?? 'unknown error'}).`);
    console.error(error.message);
    if (createdDocumentIds.length > 0) {
      console.error(`Previously created test document IDs: ${createdDocumentIds.join(', ')}`);
    }
    process.exitCode = 1;
  }
}
