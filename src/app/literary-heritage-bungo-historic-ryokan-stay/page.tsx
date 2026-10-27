import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '文豪たちが筆を走らせた名湯！名作誕生の舞台・文学ゆかりの歴史ある老舗旅館',
  description: '城崎・伊豆湯ヶ島・道後など志賀直哉、川端康成、夏目漱石ら文豪が逗留し名作を執筆した老舗宿。当時の面影を残す客室や庭園、名湯を愛でる旅。',
  keywords: ["文学ゆかりの歴史ある老舗旅館", "温泉宿", "宿泊予約", "楽天トラベル", "国内旅行", "観光ガイド"],
  alternates: {
    canonical: "https://croud-travel.pages.dev/literary-heritage-bungo-historic-ryokan-stay/",
  },
  openGraph: {
    title: '文豪たちが筆を走らせた名湯！名作誕生の舞台・文学ゆかりの歴史ある老舗旅館',
    description: '城崎・伊豆湯ヶ島・道後など志賀直哉、川端康成、夏目漱石ら文豪が逗留し名作を執筆した老舗宿。当時の面影を残す客室や庭園、名湯を愛でる旅。',
    url: 'https://croud-travel.pages.dev/literary-heritage-bungo-historic-ryokan-stay/',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "文豪たちが筆を走らせた名湯！名作誕生の舞台・文学ゆかりの歴史ある老舗旅館",
    "description": "城崎・伊豆湯ヶ島・道後など志賀直哉、川端康成、夏目漱石ら文豪が逗留し名作を執筆した老舗宿。当時の面影を残す客室や庭園、名湯を愛でる旅。",
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
    "datePublished": "",
    "dateModified": "",
    "mainEntityOfPage": "https://croud-travel.pages.dev/literary-heritage-bungo-historic-ryokan-stay/"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "文学散歩・文豪ゆかりの名宿の旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の週末や見頃シーズンは満室になりやすいため、2〜3ヶ月前からの予約が安心です。楽天トラベルの『5と0のつく日セール』や『ふるさと納税宿泊クーポン』を活用すると最もお得に予約いただけます。"
        }
      },
      {
        "@type": "Question",
        "name": "楽天トラベルのポイント還元やクーポンは予約後にも使えますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "楽天トラベルの『あとからクーポン適用』対象施設であれば、予約完了後でも条件を満たすクーポンを適用して割引を受けることができます。"
        }
      }
    ]
  };

  const hotels = [
  {
    "hotelNo": 196489,
    "hotelName": "信玄の湯　湯村温泉　旅館明治　太宰治ゆかりの宿",
    "hotelKanaName": "しんげんのゆ　ゆむらおんせん　りょかんめいじ　だざいおさむゆかりのやど（２０２５ねん８がつおーぷん）",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F196489%2F196489.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F196489%2F196489.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D196489",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D196489",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/196489/196489.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/196489.jpg",
    "roomImageUrl": "",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/196489/196489map.gif",
    "reviewCount": 135,
    "reviewAverage": 4.44,
    "userReview": "温泉と朝食に大満足、ゆっくり過ごせた温泉も大変よくまた朝の朝食も大変美味しく頂きました。本当にゆっくり出来るお宿でした。またお泊りしたいです。",
    "hotelMinCharge": 9900,
    "address1": "山梨県",
    "address2": "甲府市湯村3-10-14",
    "telephoneNo": "055-225-6828",
    "access": "甲府駅よりお車で約10分、中央自動車双葉ＩＣより約10分",
    "parkingInformation": "15台　無料　★要予約※駐車場所についてはご到着先着順です。近くの空地スペースになる場合がございます",
    "nearestStation": "甲府",
    "hotelSpecial": "新規オープン！信玄の湯とこだわりの朝ごはんで心ほぐれるひと時を。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F196489%2F196489.html"
  },
  {
    "hotelNo": 70675,
    "hotelName": "田沢温泉　ますや旅館＜長野県小県郡＞",
    "hotelKanaName": "たざわおんせん　ますやりょかん　ながのけんちいさがたぐん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70675%2F70675.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70675%2F70675.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D70675",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D70675",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/70675/70675.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/70675.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/70675/70675_f.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/70675/70675map.gif",
    "reviewCount": 130,
    "reviewAverage": 4.73,
    "userReview": "ほたる観賞と旬の筍料理を堪能できた旅6月下旬で、雨の後,曇りという好条件からほたるが見られました。筍も最後との事で美味しい食事も堪能して今回も素晴らしい滞在になりました。",
    "hotelMinCharge": 13750,
    "address1": "長野県",
    "address2": "小県郡青木村田沢温泉2686",
    "telephoneNo": "01",
    "access": "上信越自動車道上田菅平ＩＣ若しくは長野自動車道麻績より30分／新幹線上田駅下車、バスで30分（タクシー20分）青木行",
    "parkingInformation": "有り　５０台　無料　予約不要",
    "nearestStation": "上田（長野）",
    "hotelSpecial": "■全国旅行支援利用の際はクーポンを獲得下さい■最大5000円オフ＋地域クーポン券最大3,000円分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70675%2F70675.html"
  },
  {
    "hotelNo": 6999,
    "hotelName": "水上温泉郷　谷川温泉　旅館たにがわ",
    "hotelKanaName": "みなかみおんせんきょう　たにがわおんせん　りょかんたにがわ",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6999%2F6999.html",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6999%2F6999.html%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D6999",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D6999",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/6999/6999.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/6999.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/6999/6999_room.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/6999/6999map.gif",
    "reviewCount": 646,
    "reviewAverage": 4.52,
    "userReview": "落ち着いた大人向けの静かな空間若い世代よりも他の旅を楽しむ方が行くところかな。",
    "hotelMinCharge": 15550,
    "address1": "群馬県",
    "address2": "利根郡みなかみ町谷川524-1",
    "telephoneNo": "68",
    "access": "ＪＲ水上駅より車で７分（送迎あり）、関越自動車道水上ＩＣより１５分",
    "parkingInformation": "有り　５０台　無料",
    "nearestStation": "水上",
    "hotelSpecial": "太宰治ゆかりの宿【スタッフの笑顔と創作料理・おもてなしの心】・貸切露天風呂・足湯も大好評",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6999%2F6999.html"
  }
];


  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features/"},{"@type":"ListItem","position":3,"name":"文豪たちが筆を走らせた名湯！名作誕生の舞台・文学ゆかりの歴史ある老舗旅館 ｜ 日本全国・旅宿クラウド","item":"https://croud-travel.pages.dev/literary-heritage-bungo-historic-ryokan-stay/"}]}) }}
      />
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
        <Link href="/features/" className="hover:text-teal-800 transition">特集一覧</Link>
        <span>/</span>
        <span className="text-emerald-950/40 line-clamp-1">文豪ゆかりの名湯・老舗旅館</span>
      </nav>

      {/* ヒーローヘッダー */}
      <div className="border border-emerald-950/10 bg-white rounded-3xl p-6 md:p-12 shadow-sm space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-amber-100 text-amber-900 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
              文学散歩・文豪ゆかりの名宿 特選ガイド
            </span>
            <span className="text-[10px] text-slate-400 font-bold">2026年最新版</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif text-emerald-950 leading-tight">文豪たちが筆を走らせた名湯！名作誕生の舞台・文学ゆかりの歴史ある老舗旅館</h1>
          <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium pt-2">
            かつて数多くの文豪たちが静けさと名湯を求め、数週間から数ヶ月にわたって逗留した歴史ある老舗旅館。障子越しに差し込む柔らかな光、手入れの行き届いた日本庭園、そして文豪たちが愛した湯船。物語の息吹を今なお色濃く残す空間で、贅沢な知の余白を味わう旅へ。
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
                  <div className="md:col-span-1 aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-slate-100 relative">
                    {h.hotelImageUrl ? (
                      <img
                        src={h.hotelImageUrl}
                        alt={h.hotelName}
                        className="w-full h-full object-cover"
                        loading="eager" fetchPriority="high"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs">No Image</div>
                    )}
                  </div>

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
                        rel="sponsored noopener noreferrer"
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
            title="文豪たちが筆を走らせた名湯！名作誕生の舞台・文学ゆかりの歴史ある老舗旅館"
            url="https://croud-travel.pages.dev/literary-heritage-bungo-historic-ryokan-stay/"
          />
        </div>

        {/* よくある質問 FAQ */}
        <div className="pt-8 border-t border-emerald-950/10 space-y-4">
          <h3 className="text-lg font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>❓</span>
            <span>文学散歩・文豪ゆかりの名宿に関するよくある質問</span>
          </h3>
          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-teal-50/30 border border-teal-900/10 space-y-1.5">
              <h4 className="font-bold text-teal-950">Q. 文学散歩・文豪ゆかりの名宿の予約でお得な方法はありますか？</h4>
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
    
      
        {/* Enriched Rakuten API & Wikipedia Tourist Guide */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 文豪たちが筆を走らせた名湯！名作誕生の舞台・文学ゆかりの歴史ある老舗旅館：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「文豪たちが筆を走らせた名湯！名作誕生の舞台・文学ゆかりの歴史ある老舗旅館」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse bg-white rounded-xl overflow-hidden border border-stone-200">
              <thead>
                <tr className="bg-stone-900 text-white font-bold">
                  <th className="p-3">宿名</th>
                  <th className="p-3">所在地</th>
                  <th className="p-3">最寄り駅・交通</th>
                  <th className="p-3">駐車場情報</th>
                  <th className="p-3">楽天評価</th>
                  <th className="p-3">最安目安</th>
                  <th className="p-3">予約・詳細</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">1. 信玄の湯　湯村温泉　旅館明治　太宰治ゆかりの宿</td>
                <td className="p-3 text-stone-600">山梨県甲府市湯村3-10-14</td>
                <td className="p-3 text-stone-600">甲府駅よりお車で約10分、中央自動車双葉ＩＣより約10分</td>
                <td className="p-3 text-stone-600">15台　無料　★要予約※駐車場所についてはご到着先着順です。近くの空地スペースになる場合がございます</td>
                <td className="p-3 font-bold text-amber-600">★4.43（132件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F196489%2F196489.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 田沢温泉　ますや旅館＜長野県小県郡＞</td>
                <td className="p-3 text-stone-600">長野県小県郡青木村田沢温泉2686</td>
                <td className="p-3 text-stone-600">上田（長野）駅周辺</td>
                <td className="p-3 text-stone-600">有り　５０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.73（134件）</td>
                <td className="p-3 font-bold text-rose-600">¥11,550〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70675%2F70675.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 水上温泉郷　谷川温泉　旅館たにがわ</td>
                <td className="p-3 text-stone-600">群馬県利根郡みなかみ町谷川524-1</td>
                <td className="p-3 text-stone-600">水上駅周辺</td>
                <td className="p-3 text-stone-600">有り　５０台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.53（654件）</td>
                <td className="p-3 font-bold text-rose-600">¥15,550〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6999%2F6999.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-amber-600 pl-3">
              🏨 各宿の宿泊者リアルクチコミ・客室イメージ・項目別評価データ
            </h3>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #1</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">信玄の湯　湯村温泉　旅館明治　太宰治ゆかりの宿</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,900〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/196489/196489.jpg" alt="信玄の湯　湯村温泉　旅館明治　太宰治ゆかりの宿 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>2025年8月1日新規オープン！信玄の湯とこだわりの朝ごはんで心ほぐれるひと時を。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山梨県甲府市湯村3-10-14 ／ 最寄り駅：主要駅 ／ 交通案内：甲府駅よりお車で約10分、中央自動車双葉ＩＣより約10分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>15台　無料　★要予約※駐車場所についてはご到着先着順です。近くの空地スペースになる場合がございます</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「温泉と朝食に大満足、ゆっくり過ごせた温泉も大変よくまた朝の朝食も大変美味しく頂きました。本当にゆっくり出来るお宿でした。またお泊りしたいです。クチコミの詳細はこちらから　https://rev…　2026-09-08 06:39:26投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">田沢温泉　ますや旅館＜長野県小県郡＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（たざわおんせん　ますやりょかん　ながのけんちいさがたぐん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥11,550〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/70675/70675_f.jpg" alt="田沢温泉　ますや旅館＜長野県小県郡＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>■全国旅行支援利用の際はクーポンを獲得下さい■最大5000円オフ＋地域クーポン券最大3,000円分</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長野県小県郡青木村田沢温泉2686 ／ 最寄り駅：上田（長野） ／ 交通案内：上信越自動車道上田菅平ＩＣ若しくは長野自動車道麻績より30分／新幹線上田駅下車、バスで30分（タクシー20分）青木行</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　５０台　無料　予約不要</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.81 ／ 立地 ★4.54 ／ 部屋 ★4.62 ／ 設備 ★4.44 ／ 風呂 ★4.62 ／ 食事 ★4.77</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「文化財の建物とマツタケ料理に感動文化財となっているだけあって、素晴らしい建物でした。お部屋をグレードアップしてくださり、ゆったりゆっくりできました。木造で階段が多いので、HPにあった通り足腰の弱い…　2026-10-05 17:31:11投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">水上温泉郷　谷川温泉　旅館たにがわ</h3>
                  <span className="text-xs text-stone-400 ml-2">（みなかみおんせんきょう　たにがわおんせん　りょかんたにがわ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥15,550〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/6999/6999_room.jpg" alt="水上温泉郷　谷川温泉　旅館たにがわ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>太宰治ゆかりの宿【スタッフの笑顔と創作料理・おもてなしの心】・貸切露天風呂・足湯も大好評</p>
                  <p><strong>【所在地・アクセス】</strong>〒 群馬県利根郡みなかみ町谷川524-1 ／ 最寄り駅：水上 ／ 交通案内：ＪＲ水上駅より車で７分（送迎あり）、関越自動車道水上ＩＣより１５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　５０台　無料</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.53 ／ 立地 ★4.3 ／ 部屋 ★4.49 ／ 設備 ★4.37 ／ 風呂 ★4.37 ／ 食事 ★4.47</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「スタッフの対応と食事が最高、常宿にしたいスタッフの方々が皆さん明るく親切でした。夕食も個室でゆっくりお料理を堪能できました。部屋も清潔感がありコンセントもたくさんあったので使い勝手が良く過ごしやす…　2026-10-07 17:59:15投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！群馬県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、群馬県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Yubatake_%28Kusatsu_Onsen%29.jpg/1280px-Yubatake_%28Kusatsu_Onsen%29.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="草津温泉（湯畑）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">草津温泉（湯畑）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本三名泉の一つで自然湧出量日本一を誇る温泉街のシンボル。毎分4,000リットルの源泉が湯滝となって湧き出し、湯もみ体験や夜のライトアップも人気です。 草津温泉（くさつおんせん）は、群馬県吾妻郡草津町草津界隈（江戸時代における上野国吾妻郡草津村界隈、幕藩体制下の上州御料草津村界隈〈初期は沼田藩知行〉）に所在する温泉である。草津白根山東麓に位置する。 毎分3万2300リットル以上の自然湧出量は日本一。室町時代には万里集九が有馬温泉や下呂温泉とともに「三名泉」とし、江戸時代には林羅山もこれらの三温泉を「天下の三…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Ikaho_Onsen_03.jpg/1280px-Ikaho_Onsen_03.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="伊香保温泉（石段街）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">伊香保温泉（石段街）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">365段の石段が続く情緒溢れる温泉街。石段の両脇には射的場や土産物店、足湯が立ち並び、温泉まんじゅう発祥の地としても知られています。 伊香保温泉（いかほおんせん）は、群馬県渋川市伊香保町にある温泉。草津温泉と並んで県を代表する名湯で、上毛かるたでは「伊香保温泉 日本の名湯」と歌われている。 「伊香保温泉」として地域団体商標に登録されている。…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">富岡製糸場</h3>
                <p className="text-xs text-stone-600 leading-relaxed">明治政府が設立した日本初の本格的な製糸工場であり、世界文化遺産。木骨レンガ造りの巨大な繰糸所や蚕室が良好に保存されており、日本の近代化の足跡を辿れます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">吹割の滝（ふきわれのたき）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">「東洋のナイアガラ」と称されるダイナミックな滝。巨大な岩盤が割れ目の中に河川の水が吸い込まれるように流れ落ちる迫力ある景観が魅力です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 群馬県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 群馬県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      <HubRelatedPosts currentSlug="literary-heritage-bungo-historic-ryokan-stay" />
</div>
  );
}
