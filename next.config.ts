import type { NextConfig } from "next";

// Determine when to apply a basePath.
//   - When running on Vercel (process.env.VERCEL) we serve at the root.
//   - During local development (process.env.NODE_ENV === "development") we also serve at the root.
//   - For the static export that will be deployed to GitHub Pages we need a basePath
//     (the repo name) so that URLs are prefixed correctly.

const isVercel = !!process.env.VERCEL;
const isDev = process.env.NODE_ENV === "development";

// Only add basePath/assetPrefix for the static export (production, not Vercel, not dev).
const useBasePath = !(isVercel || isDev);

const nextConfig: NextConfig = {
  output: "export",
  ...(useBasePath
    ? {
        basePath: "/My-Portfolio",
        assetPrefix: "/My-Portfolio/",
      }
    : {}),
};

export default nextConfig;
