import Image from "next/image";

/** Brand mark — `public/volthub-logo-white-text.webp` */
export const LOGO = {
  src: "/volthub-logo-white-text.webp",
  alt: "VoltHub.PH",
  width: 280,
  height: 56,
} as const;

type LogoProps = {
  className?: string;
  priority?: boolean;
  /** White wordmark asset — use `on-light` on pale backgrounds */
  surface?: "on-dark" | "on-light";
};

export function Logo({
  className = "h-9 w-auto md:h-10",
  priority = false,
  surface = "on-dark",
}: LogoProps) {
  return (
    <Image
      src={LOGO.src}
      alt={LOGO.alt}
      width={LOGO.width}
      height={LOGO.height}
      priority={priority}
      className={`${surface === "on-light" ? "brightness-0" : ""} ${className}`}
    />
  );
}
