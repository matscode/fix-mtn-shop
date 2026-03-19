# Fix MTN Shop

Browser extension built with WXT + React to improve the MTN Shop experience on shop.mtn.ng.

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

WXT provides commands to build ZIPs and submit to Chrome/Firefox stores:

```bash
yarn zip
yarn zip:firefox
yarn wxt submit \
  --chrome-zip .output/*-chrome.zip \
  --firefox-zip .output/*-firefox.zip \
  --firefox-sources-zip .output/*-sources.zip
```

### CI Secrets

The GitHub Actions workflow expects these secrets:

- CHROME_EXTENSION_ID
- CHROME_CLIENT_ID
- CHROME_CLIENT_SECRET
- CHROME_REFRESH_TOKEN
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

## Release Automation

This repo uses release-please with Conventional Commits to automate version bumps and changelogs. Merge the release PR it opens to publish a new version and changelog.
