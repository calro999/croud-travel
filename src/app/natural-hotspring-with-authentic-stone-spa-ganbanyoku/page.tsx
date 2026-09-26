import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '【2026年】本格岩盤浴＆温活デトックス！天然鉱石の遠赤外線と美肌名湯で芯から整う温泉宿5選 ｜ 日本全国・旅宿クラウド',
  description: '2026年最新！天寿石・トルマリンなど天然鉱石の本格岩盤浴とロウリュサウナ、源泉掛け流し温泉でたっぷり汗を流しデトックスできる宿5選。',
  keywords: ["岩盤浴","温活","デトックス","美肌温泉","スパリゾート","楽天トラベル"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/natural-hotspring-with-authentic-stone-spa-ganbanyoku',
  },
  openGraph: {
    title: '【2026年】本格岩盤浴＆温活デトックス！天然鉱石の遠赤外線と美肌名湯で芯から整う温泉宿5選',
    description: '2026年最新！天寿石・トルマリンなど天然鉱石の本格岩盤浴とロウリュサウナ、源泉掛け流し温泉でたっぷり汗を流しデトックスできる宿5選。',
    url: 'https://croud-travel.pages.dev/natural-hotspring-with-authentic-stone-spa-ganbanyoku',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【2026年】本格岩盤浴＆温活デトックス！天然鉱石の遠赤外線と美肌名湯で芯から整う温泉宿5選",
    "description": "2026年最新！天寿石・トルマリンなど天然鉱石の本格岩盤浴とロウリュサウナ、源泉掛け流し温泉でたっぷり汗を流しデトックスできる宿5選。",
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/natural-hotspring-with-authentic-stone-spa-ganbanyoku"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "本格天然岩盤浴＆温活デトックス温泉宿の旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "本格天然岩盤浴＆温活デトックス温泉宿の宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = [
  {
    "hotelNo": 40786,
    "hotelName": "嬉野温泉　旅館　吉田屋",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D40786",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D40786%26f_flg%3DPLAN",
    "hotelMinCharge": 17600,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40786/40786.jpg",
    "userReview": "食事も温泉も最高、また必ず行きたい宿夕食、朝食どちらも本当においしかったです。味が本当に良い主人は夕食で追加して頼んだだし巻き卵が今まで食べた中で1番美味しいと感動してました。どの料理も美味し過ぎ…　2026-09-19 20:36:38投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=40786\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.32,
    "reviewCount": 1232,
    "address": "佐賀県嬉野市嬉野町岩屋川内甲379",
    "access": "博多駅～70分/長崎空港～車40分/SAGAアリーナ～車50分/御船山らかんの湯～車20分/ハウステンボス～車40分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40786%2F40786.html"
  },
  {
    "hotelNo": 31854,
    "hotelName": "黒川温泉　旅館　わかば",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D31854",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D31854%26f_flg%3DPLAN",
    "hotelMinCharge": 16500,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/31854/31854.jpg",
    "userReview": "夕食は少し重かったが、安定の満足感全体的には満足でしたが夕食の最後方で少し胸焼け...で食べきれなかったため星4とさせていただきました。黒川温泉の他の旅館にも今までかなり宿泊させて頂きましたが安心…　2026-08-31 21:47:59投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=31854\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.58,
    "reviewCount": 695,
    "address": "熊本県阿蘇郡南小国町満願寺6431",
    "access": "黒川温泉バス停　　※送迎希望は事前にお電話でのご予約をお願いいたします。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31854%2F31854.html"
  },
  {
    "hotelNo": 56702,
    "hotelName": "小鹿野温泉　香り豊かな花のおもてなし　須崎旅館",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D56702",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D56702%26f_flg%3DPLAN",
    "hotelMinCharge": 6000,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/56702/56702.jpg",
    "userReview": "美人の女将をはじめ老若男女のスタッフの皆さんの笑顔と気配りが素敵なお宿でした(    ` ) お料理もひとつひとつが丁寧に作られていてとても美味しく、夕食も朝食も完食しました! チェックイン時の上品な…　2026-09-16 22:06:19投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=56702\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.46,
    "reviewCount": 543,
    "address": "埼玉県秩父郡小鹿野町小鹿野1815",
    "access": "西武鉄道　西武秩父駅、または秩父駅より西武バス「小鹿野車庫行」にて「小鹿野町」下車、徒歩約１分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F56702%2F56702.html"
  },
  {
    "hotelNo": 5677,
    "hotelName": "あわら温泉　伝統旅館のぬくもり　灰屋",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D5677",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D5677%26f_flg%3DPLAN",
    "hotelMinCharge": 15950,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/5677/5677.jpg",
    "userReview": "丁寧な接客と美味しい食事、温泉に大満足接客が丁寧で食事もとても美味しかったです。温泉はぬるめで長く浸かるのにちょうど良い感じでした。宿泊したのは本館ですが、機会があれば庭付きの方にも泊まってみたい…　2026-09-12 07:21:40投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=5677\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.47,
    "reviewCount": 750,
    "address": "福井県あわら市温泉2-205",
    "access": "ＪＲ北陸本線芦原温泉駅から路線バスにて１５分/無料送迎あり。北陸道金津ＩＣより車で１５分。駐車場無料(係が案内します。)",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5677%2F5677.html"
  },
  {
    "hotelNo": 27908,
    "hotelName": "小野川温泉　扇屋旅館",
    "hotelInformationUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D27908",
    "planListUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D27908%26f_flg%3DPLAN",
    "hotelMinCharge": 11000,
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/27908/27908.jpg",
    "userReview": "食事が最高、食べ応え十分朝晩ともにお食事が良かったです。地元のものもあり、お肉もあり、食べ応えバッチリです。4人での食事ですが個室で、気兼ねなくのんびり食べることができました。部屋…　2026-09-10 11:56:08投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=27908\" class=\"3click\">つづきはこちら</a>",
    "reviewAverage": 4.4,
    "reviewCount": 154,
    "address": "山形県米沢市小野川町2432",
    "access": "ＪＲ米沢駅より白布温泉行バスで３０分（小野川温泉降車）　東北中央自動車道米沢中央ICより車で２０分",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F27908%2F27908.html"
  }
];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* パンくずリスト */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-stone-500 flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-700">ホーム</Link>
          <span>&gt;</span>
          <Link href="/features" className="hover:text-emerald-700">特集一覧</Link>
          <span>&gt;</span>
          <span className="text-stone-800 font-semibold truncate">本格天然岩盤浴×美肌温活デトックス</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>本格天然岩盤浴×美肌温活デトックス</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            【2026年】本格岩盤浴＆温活デトックス！天然鉱石の遠赤外線と美肌名湯で芯から整う温泉宿5選
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            天然鉱石から放射される遠赤外線とマイナスイオンで、体の芯からじんわりと温まり心地よい汗を流す本格岩盤浴。温まった体を源泉掛け流しの美肌湯で包み込み、日頃の老廃物とストレスを一気に洗い流す究極のデトックス＆リフレッシュステイ。
          </p>
          <div className="pt-2">
            <ShareButtons title="【2026年】本格岩盤浴＆温活デトックス！天然鉱石の遠赤外線と美肌名湯で芯から整う温泉宿5選" url="https://croud-travel.pages.dev/natural-hotspring-with-authentic-stone-spa-ganbanyoku" />
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-10">
        
        {/* クーポンバナー */}
        <SpecialCouponBanner />

        {/* 宿一覧 */}
        <section className="space-y-8">
          <div className="border-b-2 border-emerald-900/10 pb-3 flex items-center justify-between">
            <h2 className="text-xl md:text-2xl font-black font-journal-serif text-emerald-950 flex items-center gap-2">
              <span>🏆</span> 厳選おすすめ宿ランキング
            </h2>
            <span className="text-xs text-stone-500">楽天トラベル最新データ更新</span>
          </div>

          <div className="space-y-8">
            {hotels.map((hotel: any, index: number) => (
              <article key={hotel.hotelNo || index} className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6">
                  <div className="md:col-span-5 space-y-3">
                    <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-stone-100">
                      <img
                        src={hotel.hotelImageUrl}
                        alt={hotel.hotelName}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-emerald-900 text-amber-300 text-xs font-black px-2.5 py-1 rounded-md shadow">
                        第{index + 1}位
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-stone-600 bg-stone-50 px-3 py-2 rounded-lg border border-stone-100">
                      <div>総合評価: <strong className="text-amber-600 text-sm">★ {hotel.reviewAverage.toFixed(1)}</strong></div>
                      <div>クチコミ: <strong>{hotel.reviewCount}件</strong></div>
                    </div>
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg md:text-xl font-bold font-journal-serif text-emerald-950 leading-snug">
                        <a href={hotel.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow" className="hover:text-emerald-700">
                          {hotel.hotelName}
                        </a>
                      </h3>
                      <p className="text-xs text-stone-500">
                        📍 {hotel.address} | 🚃 {hotel.access}
                      </p>
                      <blockquote className="text-xs text-stone-700 bg-emerald-50/60 p-3 rounded-lg border-l-4 border-emerald-700 italic">
                        &ldquo;{hotel.userReview}&rdquo;
                      </blockquote>
                    </div>

                    <div className="space-y-3 pt-2 border-t border-stone-100">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-stone-500">最安参考料金（1名）</span>
                        <div className="text-right">
                          <span className="text-xs text-stone-400 mr-1">税込</span>
                          <span className="text-xl font-black text-rose-600">
                            {hotel.hotelMinCharge > 0 ? `${hotel.hotelMinCharge.toLocaleString()}円〜` : 'プラン一覧参照'}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <a
                          href={hotel.planListUrl || hotel.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="flex items-center justify-center py-2.5 px-4 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-sm transition"
                        >
                          空室・プラン確認 ❯
                        </a>
                        <a
                          href={hotel.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="flex items-center justify-center py-2.5 px-4 bg-emerald-900 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-sm transition"
                        >
                          写真・詳細を見る
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 旅のQ&A */}
        <section className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200 shadow-sm space-y-4">
          <h2 className="text-lg md:text-xl font-black font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>❓</span> よくある質問・失敗しない宿選び
          </h2>
          <div className="space-y-4 text-sm">
            <div className="border border-stone-100 rounded-xl p-4 bg-stone-50/50 space-y-2">
              <h3 className="font-bold text-emerald-900 flex items-center gap-1.5">
                <span className="text-emerald-700 font-black">Q.</span> おすすめの予約時期やタイミングは？
              </h3>
              <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
                人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。
              </p>
            </div>
            <div className="border border-stone-100 rounded-xl p-4 bg-stone-50/50 space-y-2">
              <h3 className="font-bold text-emerald-900 flex items-center gap-1.5">
                <span className="text-emerald-700 font-black">Q.</span> 宿選びで失敗しないためのポイントは？
              </h3>
              <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
                宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
