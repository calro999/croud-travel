import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true, // 静的エクスポート時には画像の自動最適化を無効化する
  },
  experimental: {
    turbo: {
      root: __dirname,
    },
  },
};

export default nextConfig;
