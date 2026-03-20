import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  manifest: {
    name: 'Fix MTN Shop',
    short_name: 'Fix MTN Shop',
    description: 'I fixed what the MTN UI team left behind, so you can shop in peace.',
    icons: {
      16: 'icon/16.png',
      32: 'icon/32.png',
      48: 'icon/48.png',
      96: 'icon/96.png',
      128: 'icon/128.png',
    },
    browser_specific_settings: {
      gecko: {
        id: 'fix-mtn-shop@addons.matsco.de',
        data_collection_permissions: {
          required: ['none'],
          optional: [],
        },
      },
    },
  } as any,
  webExt: {
    binaries: {
      firefox: 'firefoxdeveloperedition',
    },
  },
});
