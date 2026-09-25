import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '澄んだ冬空の下で極上の外気浴！完全貸切プライベートサウナ＆天然水風呂完備ホテル ｜ 日本全国・旅宿クラウド',
  description: '富士山麓・野尻湖・知床など澄み切った冷気の中で最高のととのい体験。本格薪ストーブ・バレルサウナ・富士の伏流水風呂を備えた極上サウナ宿。',
  keywords: ["サウナ","バレルサウナ","ロウリュ","ととのい","富士山","プライベートサウナ"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/private-sauna-cold-bath-retreat-hotels',
  },
  openGraph: {
    title: '澄んだ冬空の下で極上の外気浴！完全貸切プライベートサウナ＆天然水風呂完備ホテル',
    description: '富士山麓・野尻湖・知床など澄み切った冷気の中で最高のととのい体験。本格薪ストーブ・バレルサウナ・富士の伏流水風呂を備えた極上サウナ宿。',
    url: 'https://croud-travel.pages.dev/private-sauna-cold-bath-retreat-hotels',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "澄んだ冬空の下で極上の外気浴！完全貸切プライベートサウナ＆天然水風呂完備ホテル",
    "description": "富士山麓・野尻湖・知床など澄み切った冷気の中で最高のととのい体験。本格薪ストーブ・バレルサウナ・富士の伏流水風呂を備えた極上サウナ宿。",
    "author": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド編集部"
    },
    "publisher": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "logo": {
        "@type": "ImageObject",
        "url": "https://croud-travel.pages.dev/icon.png"
      }
    },
    "datePublished": "2026-09-26",
    "dateModified": "2026-09-26",
    "mainEntityOfPage": "https://croud-travel.pages.dev/private-sauna-cold-bath-retreat-hotels"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "サウナ・ととのい旅の旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気のハイシーズンや週末・連休は2〜3ヶ月前からの予約が推奨されます。楽天トラベルの「5と0のつく日セール」や「ふるさと納税クーポン」を事前獲得しておくことで、最もお得に予約いただけます。"
        }
      },
      {
        "@type": "Question",
        "name": "楽天トラベルのクーポンやポイント還元は併用できますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、楽天トラベルのキャンペーンクーポンや楽天ポイント、ふるさと納税宿泊クーポンは規定の範囲内で組み合わせてご利用いただけます。"
        }
      }
    ]
  };

  const hotels = [
  {
    "hotelNo": 191841,
    "hotelName": "ＨＯＴＥＬ　＆　ＳＡＵＮＡ　ＦＵＪＩＮＯＳ",
    "hotelKanaName": "あんどさうなふじのす",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D191841",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D191841%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D191841",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D191841",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/191841/191841.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/191841.jpg",
    "roomImageUrl": "",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/191841/191841map.gif",
    "reviewCount": 112,
    "reviewAverage": 4.48,
    "userReview": "サウナが最高、荷物置き場の対応に感謝今回で3回目の利用となりますが相変わらずサウナが最高でした。テレビの影響なのか、今回は私の他に3名の方がいらっしゃっいましたが、特に窮屈な感じはなく、リラックス…　2026-09-12 17:16:17投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=191841\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 4275,
    "address1": "静岡県",
    "address2": "富士市横割4-8-24",
    "telephoneNo": "0545-67-2203",
    "access": "富士駅より徒歩約13分（JR東海道線・富士駅南口下車）｜新富士駅より徒歩約13分",
    "parkingInformation": "有り　１３台　無料　予約不要",
    "nearestStation": "富士",
    "hotelSpecial": "サウナとホテルの贅沢を一度に。至福のリトリート体験を、富士の巣で。　2024年8月新規OPEN！！",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F191841%2F191841.html"
  },
  {
    "hotelNo": 187535,
    "hotelName": "ＭＯＳＳ十里木キャンプリゾート",
    "hotelKanaName": "もすじゅうりぎきゃんぷりぞーと",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D187535",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D187535%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D187535",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D187535",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/187535/187535.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/187535.jpg",
    "roomImageUrl": "",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/187535/187535map.gif",
    "reviewCount": 41,
    "reviewAverage": 4.44,
    "userReview": "家族で大満足、アクティビティも充実!とても快適に過ごすことができ、全体的に大満足でした。レセプションの方も感じがよく、丁寧に対応してくださり、施設内の設備もきれいで清潔感があり、とても気持…　2026-08-29 06:32:12投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=187535\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 15100,
    "address1": "静岡県",
    "address2": "裾野市須山2427-1",
    "telephoneNo": "055-998-1700",
    "access": "御殿場駅よりお車にて約４０分",
    "parkingInformation": "無料で1台横付けできます。2台目以降1000円の追加料金がかかります。第2駐車場にお停めください。",
    "nearestStation": "御殿場",
    "hotelSpecial": "【天然温泉×貸切湯×サウナ】で心身をリセット。富士山麓の森でととのうグランピング。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187535%2F187535.html"
  },
  {
    "hotelNo": 183305,
    "hotelName": "ＴＯＣＯＲＯ．Ｍｔ．Ｆｕｊｉ　ＣＡＭＰ＆ＧＬＡＭＰＩＮＧ",
    "hotelKanaName": "ところまうんとふじきゃんぷあんどぐらんぴんぐ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D183305",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D183305%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D183305",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D183305",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/183305/183305.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/183305.jpg",
    "roomImageUrl": "",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/183305/183305map.gif",
    "reviewCount": 12,
    "reviewAverage": 4.5,
    "userReview": "",
    "hotelMinCharge": 19405,
    "address1": "山梨県",
    "address2": "南都留郡富士河口湖町大石2533-1",
    "telephoneNo": "0555-28-7305",
    "access": "河口湖駅から車で約20分　河口湖駅から施設までの無料送迎あり（要事前予約）ご利用の場合はご連絡下さい。",
    "parkingInformation": "無料駐車場有り　予約不要",
    "nearestStation": "河口湖",
    "hotelSpecial": "富士山展望、全天候型ハイグレードグランピング施設。ドームは冷暖房完備でホテルと同等の快適に過ごせます",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183305%2F183305.html"
  }
];

  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* パンくず */}
      <nav aria-label="Breadcrumb" className="text-xs font-bold text-teal-900/60 flex items-center flex-wrap gap-2">
        <Link href="/" className="hover:text-teal-800 transition">ホーム</Link>
        <span>/</span>
        <Link href="/features" className="hover:text-teal-800 transition">特集一覧</Link>
        <span>/</span>
        <span className="text-emerald-950/40 line-clamp-1">貸切サウナ＆水風呂リトリート</span>
      </nav>

      {/* ヒーローヘッダー */}
      <div className="border border-emerald-950/10 bg-white rounded-3xl p-6 md:p-12 shadow-sm space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-amber-100 text-amber-900 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
              サウナ・ととのい旅 特選ガイド
            </span>
            <span className="text-[10px] text-slate-400 font-bold">2026年最新版</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif text-emerald-950 leading-tight">
            澄んだ冬空の下で極上の外気浴！完全貸切プライベートサウナ＆天然水風呂完備ホテル
          </h1>
          <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium pt-2">
            サウナーなら誰もが憧れる、自然の中での完全プライベートサウナ。セルフロウリュで熱波を満喫した後は、天然の湧水掛け流し水風呂に身を沈め、澄み渡る冬空と大自然の風を浴びながらインフィニティチェアで外気浴。五感が研ぎ澄まされる本格サウナステイを提案します。
          </p>
        </div>

        {/* クーポン特大バナー */}
        <SpecialCouponBanner />

        {/* 厳選ホテル・宿ランキング比較一覧 */}
        <div className="space-y-8 pt-4">
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-emerald-950 flex items-center gap-2 border-b border-emerald-950/10 pb-3">
            <span>🏆</span>
            <span>編集部が厳選したおすすめ宿泊施設 TOP3</span>
          </h2>

          <div className="space-y-8">
            {hotels.map((h, idx) => (
              <div
                key={h.hotelNo}
                className="border border-emerald-950/10 rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-md transition space-y-4"
              >
                {/* 宿バッジ・タイトル */}
                <div className="bg-emerald-50/50 p-5 border-b border-emerald-950/5 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-amber-600 text-white font-black flex items-center justify-center text-sm">
                      {idx + 1}
                    </span>
                    <div>
                      <h3 className="text-base md:text-lg font-black text-emerald-950 font-journal-serif">
                        {h.hotelName}
                      </h3>
                      <p className="text-[11px] text-teal-900/60 font-medium">
                        {h.address1} {h.address2}
                      </p>
                    </div>
                  </div>
                  {h.reviewAverage > 0 && (
                    <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-amber-300 shadow-sm">
                      <span className="text-amber-500 font-black text-xs">⭐ {h.reviewAverage}</span>
                      <span className="text-[10px] text-slate-500 font-bold">({h.reviewCount}件)</span>
                    </div>
                  )}
                </div>

                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  {/* 画像 */}
                  <div className="md:col-span-1 aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 relative">
                    {h.hotelImageUrl ? (
                      <img
                        src={h.hotelImageUrl}
                        alt={h.hotelName}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs">No Image</div>
                    )}
                  </div>

                  {/* 宿の特徴・アクセス・料金 */}
                  <div className="md:col-span-2 space-y-4">
                    {h.hotelSpecial && (
                      <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium bg-teal-50/40 p-4 rounded-2xl border border-teal-900/10">
                        ✨ {h.hotelSpecial}
                      </p>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="space-y-1">
                        <span className="text-[10px] font-extrabold text-slate-400 uppercase">アクセス</span>
                        <p className="text-slate-700 font-medium">{h.access || h.nearestStation || '詳細はプランページをご確認ください'}</p>
                      </div>
                      {h.hotelMinCharge > 0 && (
                        <div className="space-y-1">
                          <span className="text-[10px] font-extrabold text-slate-400 uppercase">宿泊目安料金</span>
                          <p className="text-amber-700 font-black text-base">
                            ¥{Number(h.hotelMinCharge).toLocaleString()}〜 <span className="text-[10px] text-slate-500 font-normal">/ 人</span>
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="pt-2">
                      <a
                        href={h.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full sm:w-auto text-center px-6 py-3.5 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 hover:from-amber-500 hover:to-amber-700 text-white font-black text-xs md:text-sm rounded-2xl shadow-md transition transform hover:-translate-y-0.5"
                      >
                        ✈️ {h.hotelName} の最新空室＆宿泊プランを見る
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* シェアボタン */}
        <div className="pt-6 border-t border-emerald-950/5">
          <ShareButtons
            title="澄んだ冬空の下で極上の外気浴！完全貸切プライベートサウナ＆天然水風呂完備ホテル"
            url="https://croud-travel.pages.dev/private-sauna-cold-bath-retreat-hotels"
          />
        </div>

        {/* よくある質問 FAQ */}
        <div className="pt-8 border-t border-emerald-950/10 space-y-4">
          <h3 className="text-lg font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>❓</span>
            <span>サウナ・ととのい旅に関するよくある質問</span>
          </h3>
          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-teal-50/30 border border-teal-900/10 space-y-1.5">
              <h4 className="font-bold text-teal-950">Q. サウナ・ととのい旅の予約でお得な方法はありますか？</h4>
              <p className="text-emerald-950/80 leading-relaxed">
                楽天トラベルの「5と0のつく日セール」による最大20%割引や、実質2,000円の自己負担で宿泊できる「楽天ふるさと納税宿泊クーポン」の併用が最もお得でおすすめです。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-teal-50/30 border border-teal-900/10 space-y-1.5">
              <h4 className="font-bold text-teal-950">Q. キャンセル料や予約変更はどうなっていますか？</h4>
              <p className="text-emerald-950/80 leading-relaxed">
                各宿泊施設および予約プランによってキャンセル規定が異なります。ご予約完了前に楽天トラベルの詳細ページにてキャンセルポリシーを必ずご確認ください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
