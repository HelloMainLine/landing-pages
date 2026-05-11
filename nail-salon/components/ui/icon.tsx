"use client";

/** Shared SVG icon component — single definition used across all pages. Use `aria-hidden="true"` by default since icons are decorative. If you need screen-reader-accessible icons, pass an `aria-label` prop. */
export function Icon({
  d,
  extra = "",
  size = 20,
  "aria-label": ariaLabel,
}: {
  d: string;
  extra?: string;
  size?: number;
  "aria-label"?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={ariaLabel ? undefined : "true"}
      aria-label={ariaLabel}
      role={ariaLabel ? "img" : undefined}
    >
      <path d={d} />
      {extra && <g dangerouslySetInnerHTML={{ __html: extra }} />}
    </svg>
  );
}
