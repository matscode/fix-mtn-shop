# Fix MTN Shop

Browser extension built with WXT + React to improve the MTN Shop experience on shop.mtn.ng.

## Download & Install

Download the latest release here:
https://github.com/matscode/fix-mtn-shop/releases

### Firefox (Desktop)

1. Download the latest Firefox .zip.
2. Open Firefox and go to about:addons.
3. Click the gear icon, choose “Install Add-on From File…”, and select the .zip.

### Edge

1. Download the latest Chrome/Chromium .zip.
2. Open Edge and go to edge://extensions.
3. Turn on “Developer mode”.
4. Click “Load unpacked”, unzip the file, and select the folder.

### Opera

1. Download the latest Chrome/Chromium .zip.
2. Open Opera and go to opera://extensions.
3. Turn on “Developer mode”.
4. Click “Load unpacked”, unzip the file, and select the folder.

### Chrome/Chromium (Self-distribution)

1. Download the latest Chrome/Chromium .zip.
2. Open Chrome and go to chrome://extensions.
3. Turn on “Developer mode”.
4. Click “Load unpacked”, unzip the file, and select the folder.

### Safari (macOS)

Safari requires a Safari app wrapper. Use the Safari build from GitHub Releases and follow the App Store version steps in the Safari section below.

## Development

```bash
yarn dev
```

```bash
yarn dev:firefox
```

## Build & Zip

```bash
yarn build
```

```bash
yarn zip
```

```bash
yarn zip:firefox
```

## Publishing

WXT provides commands to build ZIPs and submit to Firefox:

```bash
yarn zip:firefox
yarn wxt submit \
  --firefox-zip .output/*-firefox.zip \
  --firefox-sources-zip .output/*-sources.zip
```

### CI Secrets (Firefox)

The GitHub Actions workflow expects these secrets:

- FIREFOX_EXTENSION_ID
- FIREFOX_JWT_ISSUER
- FIREFOX_JWT_SECRET

### Release Trigger

Publishing runs when you push a tag in the format vX.Y.Z. The workflow verifies the tag version matches package.json.

### Firefox Source ZIP Notes

Firefox requires a sources ZIP so they can rebuild and review the extension. Ensure the output matches by running:

```bash
yarn zip:firefox
```

Then verify building inside the sources ZIP reproduces the same output as the main project.

## Edge Add-ons

### Build

```bash
yarn zip
```

### Submit

Use the Chrome ZIP for Edge and submit through WXT:

```bash
yarn wxt submit --edge-zip .output/*-chrome.zip
```

### CI Secrets (Edge)

- EDGE_PRODUCT_ID
- EDGE_CLIENT_ID
- EDGE_API_KEY

## Opera Add-ons

### Build

```bash
yarn zip
```

Upload the Chrome ZIP to Opera Add-ons. Opera accepts Chrome-compatible ZIPs.

## Safari

WXT does not support automated Safari publishing. Build a Safari extension and convert it with Apple’s converter:

```bash
yarn wxt build -b safari
xcrun safari-web-extension-converter .output/safari-mv2
```

Use the generated Xcode project to archive and submit via App Store Connect.

## Self Distribution

### Chrome/Chromium

```bash
yarn zip
```

Distribute the Chrome ZIP and instruct users to load it via Chrome’s Extensions page with Developer Mode.

### GitHub Releases

All browser artifacts are published on GitHub Releases:
https://github.com/matscode/fix-mtn-shop/releases

### Firefox

```bash
yarn zip:firefox
```

Distribute the Firefox ZIP for manual installation or unlisted AMO distribution.

## Release Automation

This repo uses release-please with Conventional Commits to automate version bumps and changelogs. Merge the release PR it opens to publish a new version and changelog.
