import type { NextConfig } from "next";

// Detect if we are building on Vercel (Vercel sets the VERCEL env var).
// When running on Vercel we want the app at the root, so we omit basePath/assetPrefix.
// When building for GitHub Pages (static export) we keep the basePath so the site
// lives under https://<user>.github.io/<repo>/.

const isVercel = !!process.env.VERCEL;

const nextConfig: NextConfig = {
  output: "export",
  // Only apply the basePath for non‑Vercel builds (GitHub Pages).
  ...(isVercel
    ? {}
    : {
        basePath: "/My-Portfolio",
        assetPrefix: "/My-Portfolio/",
      }),
};

export default nextConfig;
