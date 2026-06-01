import { Logo } from "@/components/Logo";

const FEATURES = [
  {
    title: "Live station map",
    body: "Find available chargers near you with real-time status, pricing, and connector types.",
  },
  {
    title: "Smart session control",
    body: "Start, monitor, and stop charging from your phone with session alerts and cost estimates.",
  },
  {
    title: "Unified wallet",
    body: "Pay across networks with one balance, receipts, and spending insights in a single place.",
  },
  {
    title: "Route planning",
    body: "Plan road trips with optimal charge stops based on range, traffic, and station reliability.",
  },
] as const;

const STORE_LINKS = {
  ios: "https://apps.apple.com/",
  android: "https://play.google.com/store",
} as const;

function StoreBadge({
  platform,
  href,
}: {
  platform: "ios" | "android";
  href: string;
}) {
  const isIos = platform === "ios";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-w-[10.5rem] flex-1 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:border-[#10b981]/40 hover:shadow-md sm:flex-none"
    >
      <svg className="h-8 w-8 shrink-0 text-slate-900" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        {isIos ? (
          <path d="M16.365 1.43c0 1.14-.493 2.27-1.277 3.09-.744.8-1.97 1.41-3.088 1.32-.12-1.1.48-2.26 1.165-3.01.77-.84 2.12-1.48 3.2-1.4zM20.88 17.13c-.57 1.31-.84 1.89-1.57 3.04-1.02 1.58-2.46 3.55-4.24 3.56-1.59.01-2-.99-4.07-1.01-2.07-.02-2.5 1.03-4.09 1.02-1.78-.01-3.14-1.72-4.16-3.3-2.86-4.12-3.16-8.95-1.39-11.5 1.26-1.84 3.25-2.92 5.12-2.92 1.9 0 3.09 1.03 4.66 1.03 1.5 0 2.42-1.03 4.58-1.03 1.64 0 3.38.9 4.64 2.45-4.08 2.22-3.42 8.02.93 9.66z" />
        ) : (
          <path d="M4.5 2.5v19l8.25-4.75L21 21.5V2.5L12.75 7.25 4.5 2.5zm1.5 14.88V5.62l6 3.45 6-3.45v11.76l-6-3.45-6 3.45z" />
        )}
      </svg>
      <span className="text-left leading-tight">
        <span className="block text-[10px] uppercase tracking-wide text-slate-500">
          {isIos ? "Download on the" : "Get it on"}
        </span>
        <span className="block text-sm font-semibold text-slate-900">
          {isIos ? "App Store" : "Google Play"}
        </span>
      </span>
    </a>
  );
}

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-slate-200 bg-white"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(16,185,129,0.12),transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 md:py-28">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#10b981]/25 bg-emerald-50 px-3 py-1 text-xs font-medium text-[#059669]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#10b981] animate-pulse" aria-hidden />
          EV charging, simplified
        </p>
        <h1
          id="hero-heading"
          className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl"
        >
          One app for every{" "}
          <span className="text-[#10b981]">charge</span> on the road.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
          VoltHUB connects drivers to stations, sessions, and payments in a
          premium mobile experience built for speed and clarity.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <StoreBadge platform="ios" href={STORE_LINKS.ios} />
          <StoreBadge platform="android" href={STORE_LINKS.android} />
        </div>
        <dl className="mt-14 grid grid-cols-3 gap-4 border-t border-slate-200 pt-10 sm:max-w-lg">
          {[
            { dt: "Networks", dd: "40+" },
            { dt: "Drivers", dd: "120K" },
            { dt: "Uptime", dd: "99.2%" },
          ].map((stat) => (
            <div key={stat.dt}>
              <dt className="text-xs text-slate-500">{stat.dt}</dt>
              <dd className="text-xl font-semibold text-slate-900">{stat.dd}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="max-w-2xl">
          <h2
            id="features-heading"
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Built for drivers who move fast
          </h2>
          <p className="mt-4 text-slate-600">
            Everything you need before, during, and after a session — without
            switching apps or guessing at availability.
          </p>
        </header>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {FEATURES.map((feature) => (
            <li
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#10b981]/30 hover:shadow-md"
            >
              <span
                className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-[#10b981]"
                aria-hidden
              >
                <svg viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor">
                  <path d="M8.5 2.5 4 11h3.5l-1.5 6.5L16 9h-3.5l1-6.5H8.5z" />
                </svg>
              </span>
              <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {feature.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function DownloadSection() {
  return (
    <section
      id="download"
      className="bg-white py-16 sm:py-20"
      aria-labelledby="download-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-[#10b981]/25 bg-gradient-to-br from-emerald-50 to-white p-8 shadow-sm sm:p-12">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#10b981]/15 blur-3xl"
            aria-hidden
          />
          <h2
            id="download-heading"
            className="relative max-w-lg text-2xl font-bold text-slate-900 sm:text-3xl"
          >
            Take VoltHUB wherever you charge
          </h2>
          <p className="relative mt-3 max-w-md text-slate-600">
            Install free on iOS and Android. Sign in once and manage every
            network from a single, secure hub.
          </p>
          <div className="relative mt-8 flex flex-col gap-3 sm:flex-row">
            <StoreBadge platform="ios" href={STORE_LINKS.ios} />
            <StoreBadge platform="android" href={STORE_LINKS.android} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-10 text-center text-sm text-slate-500">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:px-6">
        <Logo surface="on-light" className="h-8 w-auto opacity-80" />
        <p>
          © {year} VoltHub.PH. All rights reserved.
        </p>
        <p className="mt-2">
          <a href="mailto:hello@volthub.app" className="text-[#059669] hover:underline">
            hello@volthub.app
          </a>
        </p>
      </div>
    </footer>
  );
}
