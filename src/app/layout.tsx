import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "../../styles/global-bootstrap.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gaurav Parab",
  description: "A portfolio website for Gaurav",
  icons: "images/gp-logo.png",
  keywords: ["portfolio", "personal website"],
  authors: { name: "Gaurav" },
  metadataBase: new URL("https://gauravkparab.com"),
  openGraph: {
    title: "Gaurav Parab's website",
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
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
