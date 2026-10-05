"use client";

import { usePathname } from "next/navigation";
import TravelBanner from "./TravelBanner";
import SpecialCouponBanner from "./SpecialCouponBanner";
import Link from "next/link";

interface DynamicSidebarProps {
  side: "left" | "right";
}

export default function DynamicSidebar({ side }: DynamicSidebarProps) {
  const pathname = usePathname();

  const isOkinawa = pathname.includes("okinawa");
  const isHokkaido = pathname.includes("hokkaido");
  const isKyoto = pathname.includes("kyoto");
  const isOnsen = pathname.includes("onsen") || pathname.includes("spa") || pathname.includes("hotspring");
  const isWinter = pathname.includes("winter") || pathname.includes("snow") || pathname.includes("crab");

  if (side === "left") {
    return (
      <aside className="hidden xl:flex flex-col fixed left-1 xl:left-[calc((100vw-1152px)/4-127px)] top-24 w-[270px] z-30 space-y-5 items-center">
        {/* コンテキストに応じたおすすめナビカード */}
        <div className="w-[270px] bg-gradient-to-br from-teal-900 to-emerald-950 text-white rounded-2xl p-4 shadow-md border border-emerald-800/40 space-y-2">
          <span className="text-[10px] font-black text-amber-300 tracking-wider uppercase block">
            {isWinter ? "❄️ 冬旅・雪見温泉 特集" : isOkinawa ? "🌺 沖縄リゾート 特集" : isHokkaido ? "🦀 北海道グルメ 特集" : isKyoto ? "⛩️ 京都の古都ステイ 特集" : isOnsen ? "♨️ 日本の名湯温泉 特集" : "✨ 旅の目的から探す"}
          </span>
          <p className="text-xs text-emerald-100/80 leading-snug">
            {isWinter
              ? "旬のカニ懐石や雪見露天風呂を満喫できる全国の名旅館"
              : isOkinawa
              ? "オーシャンビュー客室とエメラルドブルーの海を満喫"
              : isHokkaido
              ? "海鮮バイキングと雄大な大自然のスパリゾート"
              : isOnsen
              ? "源泉かけ流しや露天風呂付き客室で過ごす極上の休日"
              : "旅ライター厳選の宿泊ルポと楽天トラベル特別プラン"}
          </p>
          <div className="pt-2">
            <Link
              href={isWinter ? "/?category=activity" : isOnsen ? "/?category=onsen" : "/features"}
              className="inline-block w-full py-2 text-center text-xs font-black text-teal-950 bg-gradient-to-r from-amber-300 to-yellow-300 hover:from-amber-200 hover:to-yellow-200 rounded-xl shadow transition"
            >
              特集をチェックする →
            </Link>
          </div>
        </div>

        <TravelBanner
          imageSrc="/images/rakuten_furusato_travel.png"
          linkUrl="/campaigns"
          altText="楽天トラベル ふるさと納税クーポン"
        />
        <TravelBanner
          imageSrc="/images/rakuten_5and0_luxury.png"
          linkUrl="/campaigns"
          altText="5と0のつく日 高級宿セール"
        />
      </aside>
    );
  }

  return (
    <aside className="hidden xl:flex flex-col fixed right-4 xl:right-[calc((100vw-1152px)/4-135px)] top-24 w-[270px] z-30 space-y-5 items-center">
      <SpecialCouponBanner variant="sidebar" />
      <TravelBanner
        imageSrc="/images/noto_offers.png"
        linkUrl="/campaigns"
        altText="能登応援キャンペーン"
      />
      <TravelBanner
        imageSrc="/images/rakuten_cars_coupon.png"
        linkUrl="/campaigns"
        altText="楽天レンタカー割引クーポン"
      />
    </aside>
  );
}
