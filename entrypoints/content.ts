export default defineContentScript({
  matches: ['http://shop.mtn.ng/*', 'https://shop.mtn.ng/*'],
  main() {
    const style = document.createElement('style');
    style.textContent =
      '[data-radix-popper-content-wrapper] > *{max-height:460px;overflow-y:auto;}';
    document.head.appendChild(style);
  },
});
