import Link from "next/link";
import { Logo } from "@/components/Logo";

const NAV_DESKTOP = [
  { href: "#features", label: "Features" },
  { href: "#partner", label: "Partner" },
] as const;

export default function Navigation() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 backdrop-blur-md bg-slate-950/75">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 md:h-16">
        <Link
          href="#top"
          className="inline-flex shrink-0 items-center"
          aria-label="VoltHub.PH home"
        >
          <Logo priority surface="on-dark" className="h-8 w-auto sm:h-9 md:h-10" />
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {NAV_DESKTOP.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-[#10b981]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#download"
          className="inline-flex items-center justify-center rounded-full bg-[#10b981] px-3.5 py-2 text-xs font-semibold text-[#020617] transition hover:bg-[#34d399] md:hidden"
        >
          Get App
        </Link>
        <Link
          href="#partner"
          className="hidden items-center justify-center rounded-full bg-[#10b981] px-5 py-2.5 text-sm font-semibold text-[#020617] transition hover:bg-[#34d399] md:inline-flex"
        >
          Partner with us
        </Link>
      </div>
    </header>
  );
}
