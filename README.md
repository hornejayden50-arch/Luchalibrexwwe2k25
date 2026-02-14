# AAA x WWE 2K Trios Showcase

A browser-based lucha libre trios game inspired by AAA presentation and WWE 2K match pacing.

## What was upgraded for app-store publishing
- Installable PWA support via `manifest.webmanifest`.
- Offline support via `service-worker.js` app-shell caching.
- Mobile wrapper configuration via Capacitor (`capacitor.config.ts`, `package.json`).
- Store-submission checklist and metadata templates in `app-store/`.

## Run locally
```bash
python3 -m http.server 4173
```
Then open `http://localhost:4173`.

## Prepare mobile builds for stores
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create native projects:
   ```bash
   npx cap add android
   npx cap add ios
   npx cap sync
   ```
3. Open projects:
   ```bash
   npx cap open android
   npx cap open ios
   ```
4. Build signed binaries in Android Studio / Xcode and submit to Google Play / App Store Connect.

## Notes
Actual submission to Google Play / Apple App Store requires your developer accounts, signing keys/certificates, legal details, and payment setup, which must be completed in your own publisher accounts.
