// Browser shim: Next.js internals bundled into _ds_bundle.js read process.env.*
// (NEXT_RUNTIME, __NEXT_ROUTER_BASEPATH, …) — only NODE_ENV is defined at build
// time, so a bare `process` reference throws in the browser. Listed first in
// cfg.extraEntries so it evaluates before every other module in the bundle.
const g = globalThis as { process?: { env: Record<string, string | undefined> } };
if (typeof g.process === 'undefined') {
  g.process = { env: { NODE_ENV: 'production' } };
}

// The components hardcode root-relative image paths into the site's public/
// dir (e.g. Header/Footer logos, `unoptimized` so no loader runs). Outside
// the deployed site those 404. Rewrite ONLY the site's known public-asset
// prefixes to the production origin — never other root-relative URLs, which
// may belong to the page hosting the bundle.
const SITE = 'https://www.weiweizipper.com';
const PREFIXES = ['/brand/', '/hero/', '/products/', '/social/'];
if (typeof document !== 'undefined') {
  const fix = (el: Element) => {
    if (el.tagName !== 'IMG') return;
    const src = el.getAttribute('src') ?? '';
    if (PREFIXES.some((p) => src.startsWith(p))) el.setAttribute('src', SITE + src);
  };
  new MutationObserver((muts) => {
    for (const m of muts) {
      if (m.type === 'attributes') fix(m.target as Element);
      for (const n of m.addedNodes) {
        if (n.nodeType !== 1) continue;
        fix(n as Element);
        for (const img of (n as Element).querySelectorAll?.('img') ?? []) fix(img);
      }
    }
  }).observe(document.documentElement, {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: ['src'],
  });
}
export {};
