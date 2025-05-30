import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: isProd ? '/chilu-engineering' : '',
  assetPrefix: isProd ? '/chilu-engineering/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
