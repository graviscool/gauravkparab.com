import type { Metadata } from "next";
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
  icons: "images/gp-logo.png",
  keywords: ["portfolio", "personal website"],
  authors: { name: "Gaurav" },
  metadataBase: new URL("https://gauravkparab.com"),
  openGraph: {
    title: "Gaurav Parab",
    description: "A portfolio website for Gaurav",
    images: "images/gp-logo.png",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    images: "images/gp-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${roboto.className}`}>
        <Providers>{children}</Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
