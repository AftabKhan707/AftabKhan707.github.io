import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Add basePath if your repository name is not your-username.github.io
  // basePath: '/portfolio-website',
  // assetPrefix: '/portfolio-website/',
};

export default nextConfig;
