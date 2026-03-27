"use client";

import { ParallaxProvider } from "react-scroll-parallax";
import { ThemeProvider } from "@/src/contexts/ThemeContext";
import { ErrorBoundary } from "@/src/components/ErrorBoundary";

export function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <div id="main-content" tabIndex={-1}>
          <ParallaxProvider>{children}</ParallaxProvider>
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
