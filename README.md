# Publish to the iOS App Store (Real-World Steps)

Yes — you can publish a game to the real App Store, but you must complete Apple account, signing, and review requirements.

## 1) Prerequisites

1. Enroll in the Apple Developer Program (paid).
2. Have a Mac with current Xcode installed.
3. Create your app record in App Store Connect.
4. Pick a unique Bundle ID (for example: `com.yourname.luchalibre`).
5. Prepare required legal/compliance info (privacy policy URL, data handling details, age rating answers).

## 2) Prepare your game build

1. Ensure the game runs correctly and has no obvious crashes.
2. Update app version and build number.
3. Add app icon(s), launch screen, and metadata.
4. Validate network/offline behavior and permissions prompts.

## 3) Configure signing in Xcode

1. Open the iOS project in Xcode.
2. Select the target and set the correct Team.
3. Confirm Bundle Identifier matches your App Store Connect app.
4. Enable "Automatically manage signing" (recommended) or configure provisioning profiles manually.
5. Build once on a real device to verify signing and runtime behavior.

## 4) Archive and upload

1. In Xcode, choose **Any iOS Device (arm64)** as destination.
2. Go to **Product > Archive**.
3. In Organizer, select the archive and click **Distribute App**.
4. Choose **App Store Connect** > **Upload**.
5. Complete export/upload and wait for processing in App Store Connect.

## 5) TestFlight first (recommended)

1. In App Store Connect, open your app > **TestFlight**.
2. Wait until the uploaded build appears as "Ready to Test".
3. Add internal testers first; then external testers if needed.
4. Fix crashes/issues and upload new builds until stable.

## 6) Submit for App Store review

1. Go to **App Store** tab and create a new version.
2. Fill in listing details:
   - Name/subtitle/description
   - Keywords/support URL/marketing URL
   - Screenshots for required device sizes
3. Complete App Privacy questionnaire and age rating.
4. Select the processed build.
5. Click **Submit for Review**.

## 7) After approval

1. Release manually or automatically.
2. Monitor crashes/analytics/reviews.
3. Ship updates with incremental build numbers.

## Common blockers to avoid

- Bundle ID mismatch between Xcode and App Store Connect.
- Missing privacy policy URL.
- Invalid/missing screenshots for required sizes.
- Incomplete App Privacy responses.
- App crashes on launch during reviewer testing.

## Quick timeline

- Account + setup: 1–2 days
- Integration/signing/archive fixes: 1–3 days
- TestFlight stabilization: 1–7 days
- App Review: usually 1–3 days (varies)

If you want, the next step is to add an actionable release checklist file with exact fields you can copy/paste for your specific app name, bundle ID, and URLs.
