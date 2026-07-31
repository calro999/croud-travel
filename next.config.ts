import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  outputFileTracingRoot: __dirname,
  trailingSlash: true,
  images: {
    unoptimized: true, // 静的エクスポート時には画像の自動最適化を無効化する
  },
};

export default nextConfig;
