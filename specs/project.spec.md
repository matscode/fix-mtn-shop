---
Project Name: Fix MTN Shop
Description: Browser extension built with WXT and React, featuring a popup UI plus background and content scripts.
Target Sites:
  - http://shop.mtn.ng/*
  - https://shop.mtn.ng/*
Tagline: Fix MTN Shop browser extension starter.
Browser Support:
  - Chrome (Chromium)
  - Firefox
Branding:
  Logos:
    - assets/fix-mtn-shop.svg
    - assets/fix-mtn-shop.png
    - assets/fix-mtn-shop-half.png
  Colors:
    - Primary: Not specified
    - Secondary: Not specified
  Fonts:
    - Not specified
Dependencies:
  Runtime:
    - react
    - react-dom
  Tooling:
    - wxt
    - @wxt-dev/module-react
    - typescript
    - @types/react
    - @types/react-dom
Coding Conventions:
  - TypeScript with ES modules
  - WXT entrypoints live in entrypoints/
  - Popup UI uses React in entrypoints/popup/
---
