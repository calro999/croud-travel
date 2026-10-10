import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import seasonalData from '@/data/all_seasonal_rakuten_hotels.json';

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/shakyo-meditation-mindfulness-sacred-temple-stay/" },
  title: '写経・写仏＆瞑想マインドフルネス宿厳選ガイド「出羽三山・お遍路・鎌倉」 | クラウドトラベル',
  description: '出羽三山（羽黒山）山伏修行ゆかりの宿坊、四国八十八ヶ所霊場のお遍路寺院、古都鎌倉の禅寺ゆかりの宿を特集。墨をすり一文字ずつ仏の言葉をなぞる写経、阿字観瞑想でマインドフルネスを体感する旅。',
  openGraph: {
    title: '写経・写仏＆瞑想マインドフルネス宿厳選ガイド「出羽三山・お遍路・鎌倉」 | クラウドトラベル',
    description: '出羽三山（羽黒山）山伏修行ゆかりの宿坊、四国八十八ヶ所霊場のお遍路寺院、古都鎌倉の禅寺ゆかりの宿を特集。墨をすり一文字ずつ仏の言葉をなぞる写経、阿字観瞑想でマインドフルネスを体感する旅。',
    type: 'article',
  },
};

export default function Page() {
  const secData = (seasonalData as any)['shakyo-meditation-mindfulness-sacred-temple-stay'] || {};


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "写経・写仏＆瞑想マインドフルネス宿完全ガイド【出羽三山・お遍路・鎌倉】 | クラウドトラベル",
    "description": "出羽三山（羽黒山）山伏修行ゆかりの宿坊、四国八十八ヶ所霊場のお遍路寺院、古都鎌倉の禅寺ゆかりの宿を特集。墨をすり一文字ずつ仏の言葉をなぞる写経、阿字観瞑想でマインドフルネスを体感する旅。",
    "url": "https://croud-travel.pages.dev/shakyo-meditation-mindfulness-sacred-temple-stay/",
    "publisher": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "logo": { "@type": "ImageObject", "url": "https://croud-travel.pages.dev/icon.png" }
    }
  };
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://croud-travel.pages.dev" },
      { "@type": "ListItem", "position": 2, "name": "写経・写仏＆瞑想マインドフルネス宿完全ガイド【出羽三山・お遍路・鎌倉】 | クラウドトラベル", "item": "https://croud-travel.pages.dev/shakyo-meditation-mindfulness-sacred-temple-stay/" }
    ]
  };

  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"「羽黒山 三光院」へのアクセスや移動方法について","acceptedAnswer":{"@type":"Answer","text":"「羽黒山 三光院」へは、庄内空港より車で約35分／JR羽越本線鶴岡駅下車、車で約25分・バスで約40分／山形自動車道・庄内あさひICより約30分。最寄りの鶴岡駅からの経路案内も充実しています。"}},{"@type":"Question","name":"「羽黒山 三光院」の魅力や予約時のポイントは？","acceptedAnswer":{"@type":"Answer","text":"「羽黒山 三光院」は『羽黒山の玄関「隋神門」まで徒歩約7分の宿坊。東北の山岳信仰の中心地で自然と伝統をじっくり体』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。"}},{"@type":"Question","name":"プラン選びや宿の比較で意識すべき点は？","acceptedAnswer":{"@type":"Answer","text":"「羽黒山 三光院」と「旅館 羽黒館」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。"}}]}) }}
      />
      <div className="max-w-5xl mx-auto">
        {/* パンくずリスト */}
        <nav className="text-xs md:text-sm text-stone-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-stone-900 underline transition">ホーム</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">写経・写仏・瞑想特化</span>
        </nav>

        {/* ヘッダーバナー */}
        <header className="bg-gradient-to-r from-stone-900 via-stone-850 to-amber-950 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-lg border border-amber-900/30">
          <div className="inline-block px-3 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            写経・写仏・瞑想特化
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">写経・写仏＆瞑想マインドフルネス宿厳選ガイド「出羽三山・お遍路・鎌倉」</h1>
          <p className="text-stone-300 text-base md:text-lg leading-relaxed max-w-3xl">
            静寂に包まれた寺院の一室、すずりに水を垂らしてゆっくりと墨をすり、筆先を整えて般若心経の文字をなぞる「写経（しゃきょう）」。また、下絵の仏様を丁寧に筆で写し取る「写仏（しゃぶつ）」。文字や絵にひたすら集中することで、日々の不安や雑念が消え去り、心が驚くほど穏やかに整っていきます。自分自身を取り戻す、静寂のマインドフルネス宿へご案内します。
          </p>
        </header>

        {/* メインコンテンツセクション */}
        
        {/* セクション: dewasanzan_mountain_ascetic_stay */}
        <section className="mb-16 bg-white rounded-2xl shadow-sm border border-stone-200/80 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold tracking-wider">
              生まれ変わりの旅・羽黒山修験宿坊
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            {secData['dewasanzan_mountain_ascetic_stay']?.label || '生まれ変わりの旅・羽黒山修験宿坊'}
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            山形県・出羽三山（羽黒山・月山・湯殿山）の門前に連なる歴史ある宿坊街「手向（とうげ）」。山伏が案内する国宝五重塔の杉木立参道、山の恵みをいただく伝統の精進料理、そして白装束に身を包んで行う写経や瞑想で、魂の再生（生まれ変わり）を体感できます。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['dewasanzan_mountain_ascetic_stay']?.hotels && secData['dewasanzan_mountain_ascetic_stay'].hotels.length > 0 ? (
              secData['dewasanzan_mountain_ascetic_stay'].hotels.map((hotel: any) => (
                <div
                  key={hotel.hotelNo}
                  className="group bg-stone-50/70 border border-stone-200 rounded-xl overflow-hidden hover:shadow-md transition duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-52 w-full overflow-hidden bg-stone-200">
                    <img
                      src={hotel.hotelImageUrl || hotel.roomImageUrl || '/images/no-image.jpg'}
                      alt={hotel.hotelName}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-stone-900/80 backdrop-blur text-amber-300 text-xs font-bold px-2.5 py-1 rounded shadow">
                      ★ {hotel.reviewAverage ? hotel.reviewAverage.toFixed(1) : '好評'}
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-stone-900 text-lg mb-2 line-clamp-2 font-serif group-hover:text-amber-800 transition">
                        {hotel.hotelName}
                      </h3>
                      <p className="text-stone-600 text-xs mb-3 flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-stone-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="line-clamp-1">{hotel.address1}{hotel.address2}</span>
                      </p>
                      <p className="text-stone-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                        {hotel.hotelSpecial || hotel.userReview || '日本の美意識と伝統文化を肌で感じる、心洗われる特別な宿泊体験をお楽しみいただけます。'}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
                      <div className="text-xs text-stone-500">
                        {hotel.hotelMinCharge ? (
                          <span>目安: <strong className="text-stone-900 text-base font-bold">{hotel.hotelMinCharge.toLocaleString()}</strong>円〜</span>
                        ) : (
                          <span>プラン一覧で確認</span>
                        )}
                      </div>
                      <a
                        href={hotel.affiliateUrl || hotel.hotelInformationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-4 py-2 bg-stone-900 hover:bg-amber-900 text-amber-100 rounded-lg text-xs font-bold transition"
                      >
                        詳細・宿泊プラン
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 p-6 bg-stone-100 rounded-xl text-center text-stone-600 text-sm">
                現在、該当条件に合うおすすめ宿泊施設を精選更新中です。
              </div>
            )}
          </div>
        </section>

        {/* セクション: shikoku_henro_pilgrimage_stay */}
        <section className="mb-16 bg-white rounded-2xl shadow-sm border border-stone-200/80 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold tracking-wider">
              同行二人・四国八十八ヶ所霊場
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            {secData['shikoku_henro_pilgrimage_stay']?.label || '同行二人・四国八十八ヶ所霊場'}
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            弘法大師空海の足跡を辿る四国遍路。お遍路さんを迎える札所寺院の宿坊では、本堂での写経体験や納経、早朝の勤行が行われます。お遍路装束に身を包み、自分自身の人生を見つめ直す静謐な祈りの時間が過ごせます。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['shikoku_henro_pilgrimage_stay']?.hotels && secData['shikoku_henro_pilgrimage_stay'].hotels.length > 0 ? (
              secData['shikoku_henro_pilgrimage_stay'].hotels.map((hotel: any) => (
                <div
                  key={hotel.hotelNo}
                  className="group bg-stone-50/70 border border-stone-200 rounded-xl overflow-hidden hover:shadow-md transition duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-52 w-full overflow-hidden bg-stone-200">
                    <img
                      src={hotel.hotelImageUrl || hotel.roomImageUrl || '/images/no-image.jpg'}
                      alt={hotel.hotelName}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-stone-900/80 backdrop-blur text-amber-300 text-xs font-bold px-2.5 py-1 rounded shadow">
                      ★ {hotel.reviewAverage ? hotel.reviewAverage.toFixed(1) : '好評'}
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-stone-900 text-lg mb-2 line-clamp-2 font-serif group-hover:text-amber-800 transition">
                        {hotel.hotelName}
                      </h3>
                      <p className="text-stone-600 text-xs mb-3 flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-stone-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="line-clamp-1">{hotel.address1}{hotel.address2}</span>
                      </p>
                      <p className="text-stone-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                        {hotel.hotelSpecial || hotel.userReview || '日本の美意識と伝統文化を肌で感じる、心洗われる特別な宿泊体験をお楽しみいただけます。'}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
                      <div className="text-xs text-stone-500">
                        {hotel.hotelMinCharge ? (
                          <span>目安: <strong className="text-stone-900 text-base font-bold">{hotel.hotelMinCharge.toLocaleString()}</strong>円〜</span>
                        ) : (
                          <span>プラン一覧で確認</span>
                        )}
                      </div>
                      <a
                        href={hotel.affiliateUrl || hotel.hotelInformationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-4 py-2 bg-stone-900 hover:bg-amber-900 text-amber-100 rounded-lg text-xs font-bold transition"
                      >
                        詳細・宿泊プラン
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 p-6 bg-stone-100 rounded-xl text-center text-stone-600 text-sm">
                現在、該当条件に合うおすすめ宿泊施設を精選更新中です。
              </div>
            )}
          </div>
        </section>

        {/* セクション: kamakura_zen_mindfulness_stay */}
        <section className="mb-16 bg-white rounded-2xl shadow-sm border border-stone-200/80 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold tracking-wider">
              山稜に抱かれた古都の禅寺ステイ
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            {secData['kamakura_zen_mindfulness_stay']?.label || '山稜に抱かれた古都の禅寺ステイ'}
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            建長寺や円覚寺など禅の歴史が色濃く残る鎌倉。谷戸（やと）の自然に囲まれたホテルや旅館では、寺院と連携した早朝の写経・写仏ワークショップや、坐禅・マインドフルネスプログラムが充実。都心から気軽に行ける週末リトリートとして人気です。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['kamakura_zen_mindfulness_stay']?.hotels && secData['kamakura_zen_mindfulness_stay'].hotels.length > 0 ? (
              secData['kamakura_zen_mindfulness_stay'].hotels.map((hotel: any) => (
                <div
                  key={hotel.hotelNo}
                  className="group bg-stone-50/70 border border-stone-200 rounded-xl overflow-hidden hover:shadow-md transition duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-52 w-full overflow-hidden bg-stone-200">
                    <img
                      src={hotel.hotelImageUrl || hotel.roomImageUrl || '/images/no-image.jpg'}
                      alt={hotel.hotelName}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-stone-900/80 backdrop-blur text-amber-300 text-xs font-bold px-2.5 py-1 rounded shadow">
                      ★ {hotel.reviewAverage ? hotel.reviewAverage.toFixed(1) : '好評'}
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-stone-900 text-lg mb-2 line-clamp-2 font-serif group-hover:text-amber-800 transition">
                        {hotel.hotelName}
                      </h3>
                      <p className="text-stone-600 text-xs mb-3 flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-stone-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="line-clamp-1">{hotel.address1}{hotel.address2}</span>
                      </p>
                      <p className="text-stone-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                        {hotel.hotelSpecial || hotel.userReview || '日本の美意識と伝統文化を肌で感じる、心洗われる特別な宿泊体験をお楽しみいただけます。'}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
                      <div className="text-xs text-stone-500">
                        {hotel.hotelMinCharge ? (
                          <span>目安: <strong className="text-stone-900 text-base font-bold">{hotel.hotelMinCharge.toLocaleString()}</strong>円〜</span>
                        ) : (
                          <span>プラン一覧で確認</span>
                        )}
                      </div>
                      <a
                        href={hotel.affiliateUrl || hotel.hotelInformationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-4 py-2 bg-stone-900 hover:bg-amber-900 text-amber-100 rounded-lg text-xs font-bold transition"
                      >
                        詳細・宿泊プラン
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 p-6 bg-stone-100 rounded-xl text-center text-stone-600 text-sm">
                現在、該当条件に合うおすすめ宿泊施設を精選更新中です。
              </div>
            )}
          </div>
        </section>

        {/* よくある質問 FAQ */}
        <section className="mb-16 bg-white rounded-2xl shadow-sm border border-stone-200/80 p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-6 font-serif flex items-center gap-2">
            <span className="w-2 h-7 bg-amber-700 rounded-full inline-block"></span>
            よくある質問・伝統文化体験＆宿坊の楽しみ方
          </h2>
          <div className="space-y-4">
            
            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200/70">
              <h3 className="text-base md:text-lg font-bold text-stone-900 mb-2 flex items-start gap-2">
                <span className="text-amber-700 font-serif font-black text-lg">Q.</span>
                <span>字が下手でも写経をすることはできますか？</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-6">
                写経は文字の美しさを競うものではなく、一文字一文字に心を込めて向き合う行為そのものが大切です。薄く印刷された手本の上をなぞる形式が一般的ですので、筆を持ったことがない初心者の方でも安心して取り組めます。
              </p>
            </div>

            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200/70">
              <h3 className="text-base md:text-lg font-bold text-stone-900 mb-2 flex items-start gap-2">
                <span className="text-amber-700 font-serif font-black text-lg">Q.</span>
                <span>写経したお経の用紙はどうすればよいですか？</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-6">
                書き終えた写経用紙は、宿泊寺院の本堂に奉納して祈祷してもらうか、旅の記念やお守りとして自宅へ持ち帰ることができます。奉納料が含まれているプランも多くあります。
              </p>
            </div>

            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200/70">
              <h3 className="text-base md:text-lg font-bold text-stone-900 mb-2 flex items-start gap-2">
                <span className="text-amber-700 font-serif font-black text-lg">Q.</span>
                <span>所要時間はどのくらいかかりますか？</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-6">
                般若心経（262文字）をすべて書く場合は約40分〜1時間程度が目安です。短縮版のお経や一文字写経、仏様の姿をなぞる写仏など、時間や好みに合わせて選べる施設も多くあります。
              </p>
            </div>
          </div>
        </section>

        {/* 関連リンク */}
        <section className="bg-stone-200/70 rounded-2xl p-6 md:p-8 text-center border border-stone-300">
          <h3 className="text-xl font-bold text-stone-900 mb-3 font-serif">
            他の伝統文化・リトリート宿を探す
          </h3>
          <p className="text-stone-600 text-sm mb-6">
            坐禅・精進料理宿坊、本格茶室茶道、写経マインドフルネス、武家屋敷、伝統工芸体験など、日本の美意識を体感する宿泊ガイド。
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/zen-meditation-shojin-cuisine-temple-retreat-stay"
              className="px-4 py-2 bg-white text-stone-800 rounded-full text-xs md:text-sm font-semibold hover:bg-amber-100 border border-stone-300 transition shadow-sm"
            >
              🧘‍♂️ 禅寺坐禅＆精進料理宿坊
            </Link>
            <Link
              href="/tea-ceremony-authentic-chashitsu-matcha-ryokan-stay"
              className="px-4 py-2 bg-white text-stone-800 rounded-full text-xs md:text-sm font-semibold hover:bg-amber-100 border border-stone-300 transition shadow-sm"
            >
              🍵 本格茶室＆茶道体験宿
            </Link>
            <Link
              href="/shakyo-meditation-mindfulness-sacred-temple-stay"
              className="px-4 py-2 bg-white text-stone-800 rounded-full text-xs md:text-sm font-semibold hover:bg-amber-100 border border-stone-300 transition shadow-sm"
            >
              ✍️ 写経・写仏＆瞑想宿
            </Link>
            <Link
              href="/samurai-katana-armor-buke-yashiki-heritage-stay"
              className="px-4 py-2 bg-white text-stone-800 rounded-full text-xs md:text-sm font-semibold hover:bg-amber-100 border border-stone-300 transition shadow-sm"
            >
              ⚔️ 武家屋敷＆サムライ体験宿
            </Link>
            <Link
              href="/traditional-crafts-pottery-gold-leaf-washi-stay"
              className="px-4 py-2 bg-white text-stone-800 rounded-full text-xs md:text-sm font-semibold hover:bg-amber-100 border border-stone-300 transition shadow-sm"
            >
              🏺 金箔・和紙・陶芸工芸宿
            </Link>
          </div>
        </section>
      </div>
    
        {/* Model Course Section */}
                {/* Model Course Section */}
                {/* Model Course Section */}
                {/* Model Course Section */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              【1泊2日】羽黒山 三光院を拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> 鶴岡駅よりアクセス。庄内空港より車で約35分／JR羽越本線鶴岡駅下車、車で約25分・バスで約40分／山形自動車道・庄内あさひICより約30分。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「羽黒山 三光院」にチェックイン。羽黒山の玄関「隋神門」まで徒歩約7分の宿坊。東北の山岳信仰の中心地で自然と伝統をじっくり体験などの宿の特徴に期待を高めつつ客室へ。</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> 「羽黒山 三光院」の湯処へ。羽黒山の玄関「隋神門」まで徒歩約7分の宿坊。東北の山岳信仰の中心地で自とともに、夕暮れの特別な寛ぎを満喫。</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> 「羽黒山 三光院」でいただく旬の夕食。地場産の味覚を取り入れたおもてなし料理を五感でじっくり味わう贅沢なひととき。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜周辺散策と帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の光が差し込む「羽黒山 三光院」の湯船へ。清々しい空気の中で手足を伸ばし、心地よい目覚めを迎える。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 「羽黒山 三光院」こだわりの朝食を堪能。炊きたてのごはんや身体に優しい料理で、一日のエネルギーをチャージ。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後は近隣エリアを観光。本記事でご紹介した「旅館 羽黒館」の周辺スポットや名産店に立ち寄り、お土産を選んで帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と羽黒山 三光院の滞在ポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「羽黒山 三光院」へのアクセスや移動方法について</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「羽黒山 三光院」へは、庄内空港より車で約35分／JR羽越本線鶴岡駅下車、車で約25分・バスで約40分／山形自動車道・庄内あさひICより約30分。最寄りの鶴岡駅からの経路案内も充実しています。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「羽黒山 三光院」の魅力や予約時のポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「羽黒山 三光院」は『羽黒山の玄関「隋神門」まで徒歩約7分の宿坊。東北の山岳信仰の中心地で自然と伝統をじっくり体』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. プラン選びや宿の比較で意識すべき点は？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「羽黒山 三光院」と「旅館 羽黒館」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。
              </p>
            </details>
          </div>
        </section>

        {/* Internal Link Mesh: Related Features & Prefectures */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              あわせて読みたい人気特集＆全国エリアガイド
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">

          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/miyagi"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                宮城県の宿・温泉
              </Link>
              <Link
                href="/prefectures/kanagawa"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                神奈川県の宿・温泉
              </Link>
              <Link
                href="/prefectures/tottori"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                鳥取県の宿・温泉
              </Link>
              <Link
                href="/prefectures/kyoto"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                京都府の宿・温泉
              </Link>
            </div>
          
      <HubRelatedPosts currentSlug="shakyo-meditation-mindfulness-sacred-temple-stay" />
</div>
        </section>

      </main>
  );
}
