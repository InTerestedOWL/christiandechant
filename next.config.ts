import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'img.icons8.com' },
      { protocol: 'https', hostname: 'le-cdn.website-editor.net' },
    ],
  },
};

export default nextConfig;
