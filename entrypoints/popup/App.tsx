import fixMtnShopLogo from '@/assets/fix-mtn-shop.png';

function App() {
  return (
    <div className="w-[280px] border border-slate-200 bg-slate-100/70 px-3 py-3 text-slate-900">
      <div className="rounded-lg border border-slate-200/70 bg-white/70 px-3 py-3">
        <div className="flex items-center">
          <img
            alt="Fix MTN Shop logo"
            className="h-11 w-11 rounded-lg border border-slate-200/70 bg-white object-contain p-1"
            src={fixMtnShopLogo}
          />
        </div>
        <p className="mt-3 text-base font-medium text-slate-700">
          I fixed what the MTN UI team left behind, so you can shop in peace.
        </p>
        <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-mono text-slate-700 shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-400"></span>
          shop.mtn.ng
        </div>
        <div className="mt-4 flex flex-col gap-3">
          <a
            className="text-sm font-medium text-slate-700 underline underline-offset-4"
            href="https://matsco.de"
            rel="noreferrer"
            target="_blank"
          >
            Something not working? Tell me
          </a>
          <a
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            href="https://paystack.shop/pay/matscode"
            rel="noreferrer"
            target="_blank"
          >
            Support my work
          </a>
        </div>
        <p className="mt-4 text-xs text-slate-500">
          Only works on the MTN Shop website.
        </p>
      </div>
    </div>
  );
}

export default App;
