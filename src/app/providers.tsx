"use client";

import { ParallaxProvider } from "react-scroll-parallax";
import { ThemeProvider } from "@/src/contexts/ThemeContext";

export function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider>
      <ParallaxProvider>{children}</ParallaxProvider>
    </ThemeProvider>
  );
}
