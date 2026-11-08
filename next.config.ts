import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true, // 静的エクスポート時には画像の自動最適化を無効化する
  },
  typescript: {
    // 3,000件超の静的ビルド時に型チェッカーのV8ヒープ枯渇(OOM)を防止
    ignoreBuildErrors: true,
  },
  turbopack: {
    root: "./",
  },
};

export default nextConfig;
