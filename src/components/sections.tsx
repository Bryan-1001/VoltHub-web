import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Logo } from "@/components/Logo";

function IconMap({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A2 2 0 0 1 2 15.382V6.618a2 2 0 0 1 1.553-1.948L9 2m0 18 6-3m-6 3V2m6 15 5.447-2.724A2 2 0 0 0 22 15.382V6.618a2 2 0 0 0-1.553-1.948L15 2m0 13V2m0 0L9 2" />
    </svg>
  );
}

function IconBolt({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function IconWallet({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2z" />
    </svg>
  );
}

function IconPlug({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 2v6m6-6v6M7 8h10v4a5 5 0 0 1-10 0V8zM12 17v5" />
    </svg>
  );
}

const FEATURES = [
  {
    title: "Live station map",
    body: "Find available chargers near you with real-time status, pricing, and connector types.",
    image: "/features/find-charger.webp",
    alt: "VoltHub app showing nearby EV charging stations on a map",
    Icon: IconMap,
  },
  {
    title: "Smart session control",
    body: "Start, monitor, and stop charging from your phone with session alerts and cost estimates.",
    image: "/features/manage.webp",
    alt: "Managing an active EV charging session in the VoltHub app",
    Icon: IconBolt,
  },
  {
    title: "Unified wallet",
    body: "Pay across networks with one balance, receipts, and spending insights in a single place.",
    image: "/features/pay.webp",
    alt: "VoltHub unified wallet and payment screen",
    Icon: IconWallet,
  },
  {
    title: "Seamless charging",
    body: "Plug in and charge with fewer taps — reliable sessions from start to finish on every network.",
    image: "/features/charge-seamless.webp",
    alt: "EV charging seamlessly with the VoltHub mobile app",
    Icon: IconPlug,
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
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:hidden">
          <StoreBadge platform="ios" href={STORE_LINKS.ios} />
          <StoreBadge platform="android" href={STORE_LINKS.android} />
        </div>
        <Link
          href="#partner"
          className="mt-10 hidden rounded-full border border-[#10b981] px-6 py-3 text-sm font-semibold text-[#059669] transition hover:bg-emerald-50 md:inline-flex"
        >
          Partner with us
        </Link>
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
      className="border-b border-slate-200/80 bg-gradient-to-b from-slate-50 to-white py-16 sm:py-24"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#059669]">
            Why VoltHub.PH
          </p>
          <h2
            id="features-heading"
            className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Built for drivers who move fast
          </h2>
          <p className="mt-4 text-slate-600">
            Scroll through how the app works — no clutter, just what you need on
            the road.
          </p>
          <Link
            href="#download"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#10b981] px-6 py-3 text-sm font-semibold text-[#020617] transition hover:bg-[#34d399] md:hidden"
          >
            Get the app — it&apos;s free
          </Link>
          <Link
            href="#partner"
            className="mt-8 hidden items-center justify-center rounded-full bg-[#10b981] px-6 py-3 text-sm font-semibold text-[#020617] transition hover:bg-[#34d399] md:inline-flex"
          >
            Partner with us
          </Link>
        </header>

        <ul className="mt-20 flex flex-col gap-20 sm:gap-28 lg:gap-32">
          {FEATURES.map((feature, index) => {
            const imageRight = index % 2 === 1;
            return (
              <li
                key={feature.title}
                className={`flex flex-col items-center gap-10 lg:flex-row lg:gap-14 xl:gap-20 ${
                  imageRight ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="relative w-full flex-1 lg:max-w-xl">
                  <div
                    className={`pointer-events-none absolute -inset-6 rounded-[3rem] bg-emerald-200/40 blur-3xl ${
                      imageRight ? "-left-4" : "-right-4"
                    }`}
                    aria-hidden
                  />
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    width={720}
                    height={450}
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="relative h-auto w-full rounded-[1.75rem] object-cover object-top"
                  />
                </div>

                <div className="w-full flex-1 lg:max-w-md">
                  <div className="flex items-end justify-between gap-4">
                    <span
                      className="text-7xl font-black leading-none tracking-tighter text-[#10b981] sm:text-8xl"
                      aria-hidden
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="mb-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-[#059669] ring-1 ring-[#10b981]/25 sm:h-16 sm:w-16">
                      <feature.Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                    </span>
                  </div>
                  <h3 className="mt-5 flex items-center gap-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    <span className="sr-only">Step {index + 1}: </span>
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                    {feature.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="mt-20 text-center text-slate-600 md:hidden">
          Ready to try it?{" "}
          <Link
            href="#download"
            className="font-semibold text-[#059669] underline-offset-4 hover:underline"
          >
            Download for iOS or Android
          </Link>
        </p>
        <p className="mt-20 hidden text-center text-slate-600 md:block">
          Interested in working together?{" "}
          <Link
            href="#partner"
            className="font-semibold text-[#059669] underline-offset-4 hover:underline"
          >
            Partner with us
          </Link>
        </p>
      </div>
    </section>
  );
}

export function DownloadSection() {
  return (
    <section
      id="download"
      className="bg-white py-16 sm:py-20 md:hidden"
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

const CONTACT_LINKS = [
  {
    label: "info@volthub.ph",
    href: "mailto:info@volthub.ph",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
      </svg>
    ),
  },
  {
    label: "facebook.com/volthub.ph",
    href: "https://facebook.com/volthub.ph",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "instagram.com/volthub.ph",
    href: "https://instagram.com/volthub.ph",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
] as const;

const HEAR_ABOUT_OPTIONS = [
  "Search engine",
  "Social media",
  "Referral",
  "Event or conference",
  "Other",
] as const;

function FieldLabel({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-slate-200">
      {children}
      {required && <span className="text-[#10b981]"> *</span>}
    </label>
  );
}

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-[#10b981]/50 focus:ring-2 focus:ring-[#10b981]/20";

export function PartnerSection() {
  return (
    <section
      id="partner"
      className="relative hidden overflow-hidden bg-[#0f172a] py-16 text-white md:block"
      aria-labelledby="partner-heading"
    >
      <div
        className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#10b981]/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-slate-700/40 blur-3xl"
        aria-hidden
      />

      {/* Static form for Netlify build-time detection */}
      <form name="partner" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
        <input name="fullName" />
        <input name="email" />
        <input name="company" />
        <input name="source" />
        <input name="subject" />
        <textarea name="message" />
      </form>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-8">
        <div>
          <Logo surface="on-dark" className="h-9 w-auto" />
          <h2
            id="partner-heading"
            className="mt-8 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Get started with VoltHub.PH
          </h2>
          <p className="mt-3 text-slate-400">Follow us for more updates</p>

          <ul className="mt-8 space-y-4">
            {CONTACT_LINKS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-3 text-sm text-slate-300 transition hover:text-[#10b981]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-[#10b981]">
                    {item.icon}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-10 max-w-md rounded-2xl bg-white/5 p-5 text-sm leading-relaxed text-slate-400 backdrop-blur-sm">
            Need help? Email us at{" "}
            <a
              href="mailto:support@volthub.ph"
              className="font-medium text-[#10b981] underline-offset-2 hover:underline"
            >
              support@volthub.ph
            </a>{" "}
            for customer support.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white">Partner With Us</h3>
          <form
            name="partner"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="mt-6 space-y-4"
          >
            <input type="hidden" name="form-name" value="partner" />
            <p className="hidden">
              <label>
                Don&apos;t fill this out: <input name="bot-field" />
              </label>
            </p>

            <div>
              <FieldLabel htmlFor="fullName" required>
                Full Name
              </FieldLabel>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                placeholder="Enter your full name"
                className={inputClass}
              />
            </div>

            <div>
              <FieldLabel htmlFor="email" required>
                Email Address
              </FieldLabel>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="email@domain.com"
                className={inputClass}
              />
            </div>

            <div>
              <FieldLabel htmlFor="company">Company Name</FieldLabel>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Enter your company name"
                className={inputClass}
              />
            </div>

            <div>
              <FieldLabel htmlFor="source" required>
                How did you hear about us?
              </FieldLabel>
              <select id="source" name="source" required className={inputClass} defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                {HEAR_ABOUT_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} className="bg-slate-900">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <FieldLabel htmlFor="subject" required>
                Subject
              </FieldLabel>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="Enter a subject"
                className={inputClass}
              />
            </div>

            <div>
              <FieldLabel htmlFor="message" required>
                Message
              </FieldLabel>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                maxLength={1000}
                placeholder="How can we help?"
                className={`${inputClass} resize-y`}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#10b981] py-3 text-sm font-semibold text-[#020617] transition hover:bg-[#34d399]"
            >
              Send Message
            </button>

            <p className="text-xs text-slate-500">
              By proceeding, you agree to our Terms &amp; Conditions and Privacy
              Policy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-10 text-center text-sm text-slate-500 md:border-slate-800 md:bg-[#020617] md:text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:px-6">
        <Logo surface="on-light" className="h-8 w-auto opacity-80 md:hidden" />
        <p>© {year} VoltHub.PH. All rights reserved.</p>
        <p>
          <a
            href="mailto:info@volthub.ph"
            className="text-[#059669] hover:underline md:text-[#10b981]"
          >
            info@volthub.ph
          </a>
        </p>
      </div>
    </footer>
  );
}
