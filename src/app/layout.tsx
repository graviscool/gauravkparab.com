import type { Metadata, Viewport } from "next";
import { Inter, Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../../styles/globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Gaurav Parab",
    template: "%s - Gaurav Parab",
  },
  description: "A portfolio website for Gaurav",
  metadataBase: new URL("https://gauravkparab.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/gp-logo.png",
    apple: "/images/gp-logo.png",
  },
  keywords: ["portfolio", "personal website", "software engineer", "developer"],
  authors: [{ name: "Gaurav" }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  openGraph: {
    title: "Gaurav Parab",
    description: "A portfolio website for Gaurav",
    url: "https://gauravkparab.com",
    siteName: "Gaurav Parab",
    images: [
      {
        url: "/images/gp-logo.png",
        width: 1200,
        height: 630,
        alt: "Gaurav Parab",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav Parab",
    description: "A portfolio website for Gaurav",
    images: ["/images/gp-logo.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#212529" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${roboto.className}`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Providers>{children}</Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
