import type { Metadata } from "next";
import Script from "next/script";
import TravelBanner from "./components/TravelBanner";
import "./globals.css";

const siteName = "日本全国・旅びより｜楽天トラベルでめぐる厳選宿・観光マガジン";
const description = "日本全国の魅力的な温泉宿、リゾート、高級ホテル、美食宿を旅ライターの極上ルポでお届け。楽天トラベルの最新情報とアフィリエイトリンク付で、今すぐ行きたい憧れの旅プランを見つけましょう。";
const url = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: description,
  keywords: [
    "旅行", "観光", "温泉", "露天風呂", "高級宿", "リゾート", "ホテル", "グルメ", "女子旅", "ファミリー旅行", "楽天トラベル"
  ],
  authors: [{ name: "旅びより編集部" }],
  creator: "旅びより編集部",
  publisher: "旅びより",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: siteName,
    description: description,
    url: url,
    siteName: siteName,
    images: [
      {
        url: '/icon.png',
        width: 1024,
        height: 1024,
        alt: '旅びより',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: description,
    images: ['/icon.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.png?v=2',
    shortcut: '/icon.png?v=2',
    apple: '/apple-icon.png?v=2',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Noto+Sans+JP:wght@400;500;700;900&family=Noto+Serif+JP:wght@400;700;900&display=swap" rel="stylesheet" />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EPZG8ZHQ7T"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EPZG8ZHQ7T');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col selection:bg-teal-700 selection:text-white antialiased">

        {/* 日本旅行情緒を高めるインフォバー */}
        <div className="w-full text-center py-2.5 bg-gradient-to-r from-teal-800 via-emerald-700 to-amber-700 text-[10px] font-bold tracking-widest text-white uppercase">
          日本全国の隠れた名宿・憧れリゾートを毎日発信中 🧭 旅にでかけよう
        </div>

        {/* プレミアム和モダン風ヘッダー */}
        <header className="border-b border-emerald-950/10 glass-header sticky top-0 z-50 py-4 px-6 shadow-sm">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <a href="/" className="flex items-center gap-2.5 group">
              <span className="text-2xl font-black tracking-tight font-journal-serif bg-gradient-to-r from-teal-800 via-emerald-900 to-amber-700 bg-clip-text text-transparent group-hover:opacity-90 transition">
                旅びより
              </span>
              <span className="text-[9px] font-extrabold tracking-widest text-teal-800 border border-teal-800/20 px-2.5 py-0.5 rounded-full bg-teal-50">
                TRAVEL MAGAZINE
              </span>
            </a>
            <nav className="flex items-center gap-5 text-xs font-bold text-teal-900/60">
              <a href="/" className="hover:text-teal-800 transition">ホーム</a>
              <span className="text-emerald-950/20">/</span>
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2F" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-amber-600 transition flex items-center gap-1">
                楽天トラベル公式 ✈️
              </a>
            </nav>
          </div>
        </header>

        {/* メインコンテンツ */}
        <div className="flex-grow w-full relative flex justify-center items-start">
          {/* 左サイド追従バナー */}
          <aside className="hidden xl:flex flex-col fixed left-1 xl:left-[calc((100vw-1152px)/4-123px)] top-24 w-[270px] z-30 space-y-6 items-center">
            <TravelBanner
              imageSrc="/images/rakuten_furusato_travel.png"
              linkUrl="/posts/rakuten-furusato-travel"
              altText="楽天トラベル ふるさと納税クーポン"
            />
            <TravelBanner
              imageSrc="/images/rakuten_5and0_luxury.png"
              linkUrl="/posts/rakuten-5and0-luxury"
              altText="5と0のつく日 高級宿セール"
            />
            <TravelBanner
              imageSrc="/images/rakuten_service_debut.png"
              linkUrl="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fcamp%2Fstart%2F"
              altText="サービス初めて利用キャンペーン"
            />
          </aside>

          <main className="flex-grow max-w-6xl w-full mx-auto px-4 py-8 md:py-12">
            {children}
          </main>

          {/* 右サイド追従バナー */}
          <aside className="hidden xl:flex flex-col fixed right-4 xl:right-[calc((100vw-1152px)/4-135px)] top-24 w-[270px] z-30 space-y-6 items-center">
            <TravelBanner
              imageSrc="/images/rakuten_summer_sale_banner.png"
              linkUrl="/posts/summer-sale-2026"
              altText="楽天トラベル サマーセール"
            />
            <TravelBanner
              imageSrc="/images/noto_offers.png"
              linkUrl="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Fhokuriku%2F"
              altText="能登応援キャンペーン"
            />
            <TravelBanner
              imageSrc="/images/rakuten_cars_coupon.png"
              linkUrl="/posts/rakuten-cars-coupon"
              altText="楽天レンタカー割引クーポン"
            />
          </aside>
        </div>

        {/* 旅行雑誌の奥付をイメージしたフッター */}
        <footer className="border-t border-emerald-950/10 bg-white py-12 text-xs text-emerald-950/70 shadow-inner">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <p className="font-bold text-emerald-950 text-sm font-journal-serif">日本全国・旅びより ｜ 楽天トラベル厳選宿・観光マガジン</p>
              <p className="text-[10px] max-w-lg leading-relaxed text-emerald-950/50">
                当サイトでご紹介する宿泊施設情報、クチコミ、写真、プラン詳細等は楽天トラベルAPIより取得しています。宿泊状況やプラン内容については必ず遷移先の楽天トラベル詳細ページにて最終情報をご確認ください。
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold text-teal-900/60">
              <a href="/" className="hover:text-teal-800">ホーム</a>
              <span>•</span>
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2F" target="_blank" rel="noopener noreferrer" className="hover:text-teal-800">楽天トラベル公式</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
