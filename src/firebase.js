const requiredFirebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY?.trim(),
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN?.trim(),
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID?.trim(),
  appId: import.meta.env.VITE_FIREBASE_APP_ID?.trim(),
  appCheckSiteKey: import.meta.env.VITE_FIREBASE_APP_CHECK_SITE_KEY?.trim()
};

const {
  appCheckSiteKey,
  ...firebaseAppConfig
} = requiredFirebaseConfig;

const missingFirebaseConfig = Object.entries(requiredFirebaseConfig)
  .filter(([, value]) => !value)
  .map(([key]) => `VITE_FIREBASE_${key.replace(/[A-Z]/g, (letter) => `_${letter}`).toUpperCase()}`);

export const firebaseConfigured = missingFirebaseConfig.length === 0;

let appCheckInitialization;

export async function submitMembershipApplication(application) {
  if (!firebaseConfigured) {
    throw new Error('Firebase is not configured for membership applications.');
  }

  const [firebaseAppSdk, firestoreSdk] = await Promise.all([
    import('firebase/app'),
    import('firebase/firestore/lite')
  ]);
  const firebaseApp = firebaseAppSdk.getApps().length > 0
    ? firebaseAppSdk.getApp()
    : firebaseAppSdk.initializeApp(firebaseAppConfig);
  const appCheckSdk = await import('firebase/app-check');
  appCheckInitialization ??= Promise.resolve().then(() => appCheckSdk.initializeAppCheck(firebaseApp, {
    provider: new appCheckSdk.ReCaptchaV3Provider(appCheckSiteKey),
    isTokenAutoRefreshEnabled: true
  }));
  await appCheckInitialization;
  const firestore = firestoreSdk.getFirestore(firebaseApp);

  return firestoreSdk.addDoc(
    firestoreSdk.collection(firestore, 'membershipApplications'),
    { ...application, submittedAt: firestoreSdk.serverTimestamp() }
  );
}
