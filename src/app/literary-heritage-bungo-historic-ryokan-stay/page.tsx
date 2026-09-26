import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '文豪たちが筆を走らせた名湯！名作誕生の舞台・文学ゆかりの歴史ある老舗旅館 ｜ 日本全国・旅宿クラウド',
  description: '城崎・伊豆湯ヶ島・道後など志賀直哉、川端康成、夏目漱石ら文豪が逗留し名作を執筆した老舗宿。当時の面影を残す客室や庭園、名湯を愛でる旅。',
  keywords: ["文豪の宿","城崎温泉","老舗旅館","文学旅","登録有形文化財","歴史の宿"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/literary-heritage-bungo-historic-ryokan-stay',
  },
  openGraph: {
    title: '文豪たちが筆を走らせた名湯！名作誕生の舞台・文学ゆかりの歴史ある老舗旅館',
    description: '城崎・伊豆湯ヶ島・道後など志賀直哉、川端康成、夏目漱石ら文豪が逗留し名作を執筆した老舗宿。当時の面影を残す客室や庭園、名湯を愛でる旅。',
    url: 'https://croud-travel.pages.dev/literary-heritage-bungo-historic-ryokan-stay',
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
    "datePublished": "2026-09-26",
    "dateModified": "2026-09-26",
    "mainEntityOfPage": "https://croud-travel.pages.dev/literary-heritage-bungo-historic-ryokan-stay"
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
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D196489",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D196489%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D196489",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D196489",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/196489/196489.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/196489.jpg",
    "roomImageUrl": "",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/196489/196489map.gif",
    "reviewCount": 135,
    "reviewAverage": 4.44,
    "userReview": "温泉と朝食に大満足、ゆっくり過ごせた温泉も大変よくまた朝の朝食も大変美味しく頂きました。本当にゆっくり出来るお宿でした。またお泊りしたいです。クチコミの詳細はこちらから　https://rev…　2026-09-08 06:39:26投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=196489\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 9900,
    "address1": "山梨県",
    "address2": "甲府市湯村3-10-14",
    "telephoneNo": "055-225-6828",
    "access": "甲府駅よりお車で約10分、中央自動車双葉ＩＣより約10分",
    "parkingInformation": "15台　無料　★要予約※駐車場所についてはご到着先着順です。近くの空地スペースになる場合がございます",
    "nearestStation": "甲府",
    "hotelSpecial": "2025年8月1日新規オ��プン！信玄の湯とこだわりの朝ごはんで心ほぐれるひと時を。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F196489%2F196489.html"
  },
  {
    "hotelNo": 70675,
    "hotelName": "田沢温泉　ますや旅館＜長野県小県郡＞",
    "hotelKanaName": "たざわおんせん　ますやりょかん　ながのけんちいさがたぐん",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D70675",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D70675%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D70675",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D70675",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/70675/70675.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/70675.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/70675/70675_f.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/70675/70675map.gif",
    "reviewCount": 130,
    "reviewAverage": 4.73,
    "userReview": "ほたる観賞と旬の筍料理を堪能できた旅6月下旬で、雨の後,曇りという好条件からほたるが見られました。筍も最後との事で美味しい食事も堪能して今回も素晴らしい滞在になりました。クチコミの詳細はこちら…　2026-07-02 07:47:09投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=70675\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 13750,
    "address1": "長野県",
    "address2": "小県郡青木村田沢温泉2686",
    "telephoneNo": "0268-49-2001",
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
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D6999",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D6999%26f_flg%3DPLAN",
    "dpPlanListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FIWrzP%2F%3FnoTomariHotel%3D6999",
    "reviewUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D6999",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/6999/6999.jpg",
    "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/6999.jpg",
    "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/6999/6999_room.jpg",
    "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/6999/6999map.gif",
    "reviewCount": 646,
    "reviewAverage": 4.52,
    "userReview": "落ち着いた大人向けの静かな空間若い世代よりも他の旅を楽しむ方が行くところかなクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/vo…　2026-09-13 20:24:42投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=6999\" class=\"3click\">つづきはこちら</a>",
    "hotelMinCharge": 15550,
    "address1": "群馬県",
    "address2": "利根郡みなかみ町谷川524-1",
    "telephoneNo": "0278-72-2468",
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
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif text-emerald-950 leading-tight">
            文豪たちが筆を走らせた名湯！名作誕生の舞台・文学ゆかりの歴史ある老舗旅館
          </h1>
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
            title="文豪たちが筆を走らせた名湯！名作誕生の舞台・文学ゆかりの歴史ある老舗旅館"
            url="https://croud-travel.pages.dev/literary-heritage-bungo-historic-ryokan-stay"
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
    </div>
  );
}
