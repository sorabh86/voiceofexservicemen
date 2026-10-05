# Voice of Ex-Servicemen React SPA

The website is a React single-page application built with Vite and React Router. All app source and npm configuration live at the repository root; static images and vendor files are in `public/`.

Navigation uses clean browser routes. When deployed to GitHub Pages, the app is available under `/voiceofexservicemen/`, with pages such as `/voiceofexservicemen/policy` and `/voiceofexservicemen/news`. The GitHub Pages `404.html` fallback preserves direct links and refreshes on nested routes.

## Development

Run from the repository root. Vite serves the app under the same project path used by GitHub Pages:

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

The deployable static site is generated in `dist/`. Publish the contents of that folder to the `gh-pages` branch or configure GitHub Pages to deploy it from your chosen workflow.

## Deploy to GitHub Pages

Configure GitHub Pages for the repository to publish from the `gh-pages` branch, then run:

```sh
npm run deploy
```

This builds the site and publishes `dist/` to the `gh-pages` branch on the `origin` remote. The command pushes to GitHub, so run it only when you are ready to publish the current working tree.

## PayU donation checkout

The donation form submits these URL-encoded fields to the endpoint configured at build time:
`firstname`, `email`, `phone`, and `amount`.

Set `VITE_PAYU_INITIATE_URL` in the deployment environment (or in a local `.env.local` file) to an HTTPS endpoint controlled by the Society. For example:

```sh
VITE_PAYU_INITIATE_URL=https://your-server.example/api/payu/donations
```

That backend endpoint must validate the submitted fields, create a unique transaction, and use the PayU merchant credentials stored only on the server to create the signed checkout request. It should respond with an HTML page that auto-submits the required payment fields to PayU's hosted checkout. The backend must also validate PayU's response hash and transaction details on its success/failure callback before treating a donation as paid. Do not put a merchant key, salt, or other payment secret in this frontend or in any `VITE_` variable.

Until `VITE_PAYU_INITIATE_URL` is configured and the backend is deployed, the donation form will not submit a payment; it displays a notice instead. The current project is a static React/Vite site and does not itself provide the required payment backend.

## Firebase membership applications

The membership page can save application enquiries in the Firestore collection `membershipApplications`, including required acceptance of the membership terms and an optional donation amount (minimum ₹500 when provided). Copy `.env.example` to `.env.local` and add the Firebase web app configuration values from the Firebase Console:

```sh
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_APP_ID=...
VITE_FIREBASE_APP_CHECK_SITE_KEY=...
```

Create a Firebase project, register a web app, enable Cloud Firestore, and register the app with Firebase App Check using the reCAPTCHA v3 provider. Add your development/deployment domains to the reCAPTCHA configuration and copy its public site key into `VITE_FIREBASE_APP_CHECK_SITE_KEY`. Deploy the included restrictive Firestore rules from the repository root with the Firebase CLI:

```sh
firebase deploy --only firestore:rules
```

The rules allow a validated application to be created but deny all client reads, updates, and deletes. Review applications in the Firebase Console with an authorised staff account; never add Firebase Admin credentials to this frontend. Web app configuration values are public identifiers, but Firestore security comes from the rules, not from hiding those values.

In the Firebase Console, enable App Check enforcement for Cloud Firestore after verifying that the web app is receiving valid tokens. The form asks for consent and should only collect information the Society needs to respond. Restrict staff access to the Firebase project and define an appropriate retention/deletion process for submitted personal data.

The form remains disabled and displays the missing Firebase environment values until configured. Restart the development server or rebuild after changing `.env.local`.

### Test Firebase connectivity

With `.env.local` configured, run this read-only Firestore probe:

```sh
npm run test:firebase
```

The probe reads a reserved, nonexistent document in `membershipApplications` and never writes an application. A `permission-denied` response is reported as a successful connectivity check because the rules intentionally prohibit public reads.

To explicitly try writing three synthetic records into the `members` collection, run:

```sh
npm run test:members -- confirm-write
```

This writes to the configured Firestore project, labels each document `isTestData: true`, and uses reserved `example.com` emails. The current rules do not allow writes to `members`, so expect `PERMISSION_DENIED` until an authorised administrator configures an appropriate rule. Do not open public writes to the collection just to make this test pass; prefer an authenticated, admin-only seed process for real member records.
