const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY?.trim(),
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN?.trim(),
  projectId: process.env.VITE_FIREBASE_PROJECT_ID?.trim(),
  appId: process.env.VITE_FIREBASE_APP_ID?.trim()
};

const missingKeys = Object.entries(firebaseConfig)
  .filter(([, value]) => !value)
  .map(([key]) => `VITE_FIREBASE_${key.replace(/[A-Z]/g, (letter) => `_${letter}`).toUpperCase()}`);

if (missingKeys.length > 0) {
  console.error(`Firebase connection test cannot start. Missing values: ${missingKeys.join(', ')}`);
  process.exitCode = 1;
} else {
  try {
    const documentPath = [
      'v1',
      'projects',
      encodeURIComponent(firebaseConfig.projectId),
      'databases',
      '(default)',
      'documents',
      'membershipApplications',
      'read-only-connectivity-probe'
    ].join('/');
    const url = new URL(`https://firestore.googleapis.com/${documentPath}`);
    url.searchParams.set('key', firebaseConfig.apiKey);

    const response = await fetch(url, { signal: AbortSignal.timeout(10000) });
    const result = await response.json();
    const errorStatus = result.error?.status;

    if (response.ok) {
      console.log('Firestore responded to a read-only connectivity probe.');
    } else if (response.status === 403 && errorStatus === 'PERMISSION_DENIED') {
      console.log('Firestore is reachable. As expected, security rules denied the read-only probe.');
    } else if (response.status === 404 && errorStatus === 'NOT_FOUND') {
      console.log('Firestore is reachable. The read-only probe document does not exist, as expected.');
    } else {
      console.error(`Firestore connectivity test received HTTP ${response.status}${errorStatus ? ` (${errorStatus})` : ''}.`);
      process.exitCode = 1;
    }
  } catch (error) {
    console.error(`Firestore connectivity test failed (${error.name ?? 'unknown error'}).`);
    console.error(error.message);
    process.exitCode = 1;
  }
}
