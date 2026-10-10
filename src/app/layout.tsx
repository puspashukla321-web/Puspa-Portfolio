import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://puspa-shukla.vercel.app"
).replace(/\/$/, "");

const siteDescription =
  "Portfolio of Puspa Shukla, a BCA student in Kathmandu, Nepal, learning and building in web development, practical AI, and IT systems support.";
const socialImage = {
  url: new URL("/og-image.png", siteUrl).toString(),
  width: 1200,
  height: 630,
  alt: `${DATA.name} portfolio preview`,
};

const cabinetGrotesk = localFont({
  src: "../../public/fonts/CabinetGrotesk-Medium.ttf",
  variable: "--font-sans",
  weight: "500",
  display: "swap",
});

const clashDisplay = localFont({
  src: "../../public/fonts/ClashDisplay-Semibold.ttf",
  variable: "--font-clash",
  weight: "600",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${DATA.name} | BCA Student in Kathmandu, Nepal`,
    template: `%s | ${DATA.name}`,
  },
  description: siteDescription,
  openGraph: {
    title: `${DATA.name}`,
    description: siteDescription,
    url: siteUrl,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
    images: [socialImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name} | BCA Student in Kathmandu, Nepal`,
    card: "summary_large_image",
    description: siteDescription,
    images: [socialImage.url],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen overflow-x-hidden bg-background font-sans antialiased",
          cabinetGrotesk.variable,
          clashDisplay.variable,
        )}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Person",
                  name: DATA.name,
                  description:
                    "BCA student in Kathmandu, Nepal, learning and building in web development, practical AI, and IT systems support.",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Kathmandu",
                    addressCountry: "NP",
                  },
                  sameAs: [
                    DATA.contact.social.LinkedIn.url,
                    DATA.contact.social.GitHub.url,
                  ],
                }),
              }}
            />
            <div className="mx-auto w-full pb-24">
              {children}
            </div>
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
