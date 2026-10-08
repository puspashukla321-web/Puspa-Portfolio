"use client";

import type { MouseEvent, ReactNode } from "react";

type OpenAndDownloadLinkProps = {
  children: ReactNode;
  href: string;
  filename: string;
  className?: string;
  ariaLabel?: string;
};

export function OpenAndDownloadLink({
  children,
  href,
  filename,
  className,
  ariaLabel,
}: OpenAndDownloadLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    window.open(href, "_blank", "noopener,noreferrer");

    const downloadLink = document.createElement("a");
    downloadLink.href = href;
    downloadLink.download = filename;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    downloadLink.remove();
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </a>
  );
}
