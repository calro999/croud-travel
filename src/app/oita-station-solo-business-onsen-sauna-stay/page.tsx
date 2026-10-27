import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/oita-station-solo-business-onsen-sauna-stay/" },
  title: '大分駅前出張・天然温泉サウナ：日本一のおんせん県・天然温泉白糸の湯・豊後とり天！九州東部ビジネスを制する厳選3宿',
  description: '大分空港からリムジンバス直行・JR大分駅前！最上階天然温泉露天風呂と本格高温サウナを誇る「ドーミーイン大分」、駅徒歩すぐで天然温泉大浴場と地元郷土朝食の「アリストンホテル大分」、都町繁華街至近で天然温泉大浴場完備の「ホテルクラウンヒルズ大分」を徹底比較。',
  keywords: '大分 出張 ホテル,大分駅 天然温泉 ホテル,ドーミーイン大分,アリストンホテル大分,ホテルクラウンヒルズ大分,大分 とり天 一人旅',
  openGraph: {
    title: '大分駅前出張・天然温泉サウナ：日本一のおんせん県・天然温泉白糸の湯・豊後とり天！九州東部ビジネスを制する厳選3宿',
    description: '大分空港からリムジンバス直行・JR大分駅前！最上階天然温泉露天風呂と本格高温サウナを誇る「ドーミーイン大分」、駅徒歩すぐで天然温泉大浴場と地元郷土朝食の「アリストンホテル大分」、都町繁華街至近で天然温泉大浴場完備の「ホテルクラウンヒルズ大分」を徹底比較。',
    url: 'https://croud-travel.pages.dev/oita-station-solo-business-onsen-sauna-stay/',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '大分駅前出張・天然温泉サウナ：日本一のおんせん県・天然温泉白糸の湯・豊後とり天！九州東部ビジネスを制する厳選3宿',
    description: '大分空港からリムジンバス直行・JR大分駅前！最上階天然温泉露天風呂と本格高温サウナを誇る「ドーミーイン大分」、駅徒歩すぐで天然温泉大浴場と地元郷土朝食の「アリストンホテル大分」、都町繁華街至近で天然温泉大浴場完備の「ホテルクラウンヒルズ大分」を徹底比較。',
    author: {
      '@type': 'Organization',
      name: 'クラウドトラベル ひとり旅・出張調査班',
      url: 'https://croud-travel.pages.dev/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'クラウドトラベル',
      logo: {
        '@type': 'ImageObject',
        url: 'https://croud-travel.pages.dev/logo.png',
      },
    },
    datePublished: '2026-10-18T00:00:00+09:00',
    dateModified: '2026-10-19T00:00:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/oita-station-solo-business-onsen-sauna-stay/',
  };


  return (
    <main className="min-h-screen bg-stone-50 text-stone-800 antialiased font-sans pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"「日本一のおんせん県・天然温泉白糸の湯・豊後とり天！九州東部ビジネスを制する厳選3宿」を効率よく巡るコツは？","acceptedAnswer":{"@type":"Answer","text":"大分駅前出張・天然温泉サウナ：日本一のおんせん県・天然温泉白糸の湯・豊後とり天！九州東部ビジネスを制する厳選3宿エリアでは、「天然温泉　白糸の湯　ドーミーイン大分（ドーミーイン・御宿野乃　ホテルズグループ）」（楽天評価★4.49・クチコミ1676件、所在地：大分県大分市末広町1-2-1）をはじめとする宿を拠点にし、最寄り駅（大分）やアクセス条件（JR大分駅府内中央口より徒歩約１分！大分空港行リムジンバス乗り場へは徒歩1分の好立地♪）に合わせて午前中に周辺観光名所を巡り、15時のチェックイン後に温泉や夕食会席を堪能するスケジュールが最も効率的です。"}},{"@type":"Question","name":"事前準備や持ち物で注意すべきポイントは？","acceptedAnswer":{"@type":"Answer","text":"宿泊予約時は最安料金目安（例：「天然温泉　アリストンホテル大分」は1名あたり¥3,600〜）や駐車場条件（立体駐車場2基完備。全68台収容可能。すべて先着順となります。1泊1,500円(税込)。）を事前に確認しましょう。連休や紅葉・年末年始シーズンは早期に満室となるため、楽天トラベルの早期割引プランやクーポンの活用がおすすめです。"}}]}) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features/"},{"@type":"ListItem","position":3,"name":"【大分駅前出張・天然温泉サウナ】日本一のおんせん県・天然温泉白糸の湯・豊後とり天！九州東部ビジネスを制する厳選3宿","item":"https://croud-travel.pages.dev/oita-station-solo-business-onsen-sauna-stay/"}]}) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* パンくずリスト */}
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:underline">ホーム</Link>
        <span>/</span>
        <span className="text-stone-700 font-medium">大分・大分駅前天然温泉＆サウナ出張特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【大分駅前出張・天然温泉サウナ】日本一のおんせん県・天然温泉白糸の湯・豊後とり天！九州東部ビジネスを制する厳選3宿</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-10">
        <div className="inline-block bg-amber-700 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 tracking-wider">
          ひとり旅・出張・サウナ＆名湯特集
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 leading-tight mb-4">「大分駅前出張・天然温泉サウナ」日本一のおんせん県・天然温泉白糸の湯・豊後とり天！九州東部ビジネスを制する厳選3宿</h1>
        <div className="flex flex-wrap items-center text-xs text-stone-500 gap-4 border-b border-stone-200 pb-4">
          <time dateTime="">2026.09.13 更新</time>
          <span>執筆：クラウドトラベル ひとり旅・出張調査班</span>
          <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-medium">楽天トラベル公式API提携</span>
        </div>

        {/* リード文 */}
        <div className="mt-6 bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 shadow-sm leading-relaxed text-stone-700 space-y-3 text-sm sm:text-base">
          <p className="font-semibold text-stone-900 text-base sm:text-lg">
            「おんせん県おおいた」の中枢都市・大分。別府や由布院の名湯文化を駅前で享受し、名物とり天と豊後水道の鮮魚でととのう
          </p>
          <p>
            臨海工業地帯が広がり、九州東部の経済・産業を牽引する大分市。温泉湧出量・源泉数ともに日本一を誇る大分県らしく、県庁所在地の中心駅前ホテルでも贅沢な天然温泉と本格サウナが当たり前のように楽しめます。
          </p>
          <p>
            最上階の露天風呂から夜空を仰げる都市型温泉ホテルから、コスパ抜群で朝食にりゅうきゅうやとり天が並ぶビジネスホテルまで、楽天トラベル公式APIより直接取得した最新データをもとに厳選紹介します。
          </p>
        </div>
      </header>

      {/* 目次インデックス */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
        <div className="bg-stone-100 p-5 rounded-xl border border-stone-200">
          <h2 className="text-base font-bold text-stone-900 mb-3 flex items-center gap-2">
            <span>📑</span> 本記事でご紹介する厳選ホテル
          </h2>
          <ul className="space-y-2 text-sm text-stone-700">
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 天然温泉　白糸の湯　ドーミーイン大分（ドーミーイン・御宿野乃　ホテルズグループ）（★4.49 / 最低目安：6,497円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. 天然温泉　アリストンホテル大分（★3.99 / 最低目安：3,600円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 天然温泉　都の湯　ホテルクラウンヒルズ大分（ＢＢＨホテルグループ）（★3.86 / 最低目安：3,400円〜）</a></li>
            <li>
              <a href="#area-tips" className="text-amber-800 hover:underline">
                ▶ 大分出張・一人滞在を満喫する現地TIPS
              </a>
            </li>
            <li>
              <a href="#faq" className="text-amber-800 hover:underline">
                ▶ よくある質問（Q&amp;A）
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* ホテル紹介セクション */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-16">
        <article id="hotel-1" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第1位</span>
              <span className="text-xs text-stone-500 font-medium">大分県 大分市末広町1-2-周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              天然温泉　白糸の湯　ドーミーイン大分（ドーミーイン・御宿野乃　ホテルズグループ）
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.49 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">6,497円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/166556/166556.jpg"
                  alt="天然温泉　白糸の湯　ドーミーイン大分（ドーミーイン・御宿野乃　ホテルズグループ） 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="bg-stone-50 rounded-xl p-4 sm:p-5 mb-6 border border-stone-100">
              <h3 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-1.5">
                <span>🌟</span> ひとり滞在・出張で選ばれる理由
              </h3>
              <ul className="text-xs sm:text-sm text-stone-700 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>最上階12階に天然温泉大浴場・露天風呂・高温サウナ完備＜水風呂付き＞！★夜鳴きそばサービス実施中！</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-200 pt-4 mb-6">
              <dl className="grid grid-cols-1 sm:grid-cols-4 gap-y-2 text-xs sm:text-sm">
                <dt className="text-stone-500 font-medium">所在地</dt>
                <dd className="sm:col-span-3 text-stone-800">大分県大分市末広町1-2-1</dd>
                <dt className="text-stone-500 font-medium">アクセス</dt>
                <dd className="sm:col-span-3 text-stone-800">JR大分駅府内中央口より徒歩約１分！大分空港行リムジンバス乗り場へは徒歩1分の好立地♪</dd>
              </dl>
            </div>

            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F166556%2F166556.html"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3.5 rounded-xl shadow transition transform hover:-translate-y-0.5 text-sm sm:text-base gap-2"
              >
                <span>楽天トラベルでプラン・空室・最新料金を見る</span>
                <span className="text-xs">▶</span>
              </a>
            </div>
          </div>
        </article>

        <article id="hotel-2" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第2位</span>
              <span className="text-xs text-stone-500 font-medium">大分県 大分市金池町1-2-周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              天然温泉　アリストンホテル大分
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 3.99 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">3,600円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/193114/193114.jpg"
                  alt="天然温泉　アリストンホテル大分 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="bg-stone-50 rounded-xl p-4 sm:p-5 mb-6 border border-stone-100">
              <h3 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-1.5">
                <span>🌟</span> ひとり滞在・出張で選ばれる理由
              </h3>
              <ul className="text-xs sm:text-sm text-stone-700 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>大分駅から徒歩２分！天然温泉と大分郷土料理の朝ごはんバイキング</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-200 pt-4 mb-6">
              <dl className="grid grid-cols-1 sm:grid-cols-4 gap-y-2 text-xs sm:text-sm">
                <dt className="text-stone-500 font-medium">所在地</dt>
                <dd className="sm:col-span-3 text-stone-800">大分県大分市金池町1-2-1</dd>
                <dt className="text-stone-500 font-medium">アクセス</dt>
                <dd className="sm:col-span-3 text-stone-800">大分駅から徒歩２分</dd>
              </dl>
            </div>

            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F193114%2F193114.html"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3.5 rounded-xl shadow transition transform hover:-translate-y-0.5 text-sm sm:text-base gap-2"
              >
                <span>楽天トラベルでプラン・空室・最新料金を見る</span>
                <span className="text-xs">▶</span>
              </a>
            </div>
          </div>
        </article>

        <article id="hotel-3" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第3位</span>
              <span className="text-xs text-stone-500 font-medium">大分県 大分市都町4-3-1周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              天然温泉　都の湯　ホテルクラウンヒルズ大分（ＢＢＨホテルグループ）
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 3.86 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">3,400円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/104513/104513.jpg"
                  alt="天然温泉　都の湯　ホテルクラウンヒルズ大分（ＢＢＨホテルグループ） 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="bg-stone-50 rounded-xl p-4 sm:p-5 mb-6 border border-stone-100">
              <h3 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-1.5">
                <span>🌟</span> ひとり滞在・出張で選ばれる理由
              </h3>
              <ul className="text-xs sm:text-sm text-stone-700 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>朝食バイキング無料！すぐそこ繁華街、天然温泉大浴場併設、客室も天然温泉♪</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-200 pt-4 mb-6">
              <dl className="grid grid-cols-1 sm:grid-cols-4 gap-y-2 text-xs sm:text-sm">
                <dt className="text-stone-500 font-medium">所在地</dt>
                <dd className="sm:col-span-3 text-stone-800">大分県大分市都町4-3-12</dd>
                <dt className="text-stone-500 font-medium">アクセス</dt>
                <dd className="sm:col-span-3 text-stone-800">大分空港より高速バスにて約60分(荷揚町下車)。 大分自動車道・大分インターチェンジより車で10分。</dd>
              </dl>
            </div>

            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F104513%2F104513.html"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3.5 rounded-xl shadow transition transform hover:-translate-y-0.5 text-sm sm:text-base gap-2"
              >
                <span>楽天トラベルでプラン・空室・最新料金を見る</span>
                <span className="text-xs">▶</span>
              </a>
            </div>
          </div>
        </article>
      </div>

      {/* 現地滞在TIPS */}
      <section id="area-tips" className="max-w-4xl mx-auto px-4 sm:px-6 mt-16">
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2 border-b border-stone-200 pb-3">
            <span>💡</span> 大分出張・一人滞在を満喫する現地TIPS
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">大分名物「とり天」と郷土料理「りゅうきゅう」</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">サクサクの衣にポン酢とからしをつける「とり天」や、新鮮なブリやサバを特製醤油ダレとゴマで和えた「りゅうきゅう」。一人居酒屋や駅ナカで絶品です。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">大分駅ビル「JRおおいたシティ」の屋上庭園散策</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">日本最大級の駅上屋上庭園。鉄道神社や展望テラスがあり、出張の合間に別府湾や高崎山の景色を眺めて気分転換ができます。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">大分駅から別府温泉へ電車でわずか10分の寄り道</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">JR日豊本線でわずか約10〜15分で別府駅へアクセス可能。出張前後の空き時間に別府の共同浴場や地獄めぐりを一人でサクッと楽しめます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ セクション */}
      <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 mt-16">
        <div className="bg-stone-100 p-6 sm:p-8 rounded-2xl border border-stone-200">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2 border-b border-stone-300 pb-3">
            <span>❓</span> 滞在に関するよくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>大分駅前で天然温泉とサウナのクオリティが最も高いホテルは？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「天然温泉 白糸の湯 ドーミーイン大分」はJR大分駅府内中央口から徒歩約1分。最上階に天然温泉大浴場、露天風呂、サウナ、夜鳴きそばを完備しています。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>朝食バイキングで大分の郷土料理を楽しめるホテルは？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「天然温泉 アリストンホテル大分」は天然温泉大浴場を備え、朝食バイキングで名物とり天やりゅうきゅう丼を味わえると出張者に人気です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 予約案内バナー */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mt-16">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-6 sm:p-8 rounded-2xl shadow-md text-center">
          <h3 className="text-lg sm:text-xl font-bold mb-2">
            楽天トラベルで最新の空室状況・限定ポイントキャンペーンをチェック
          </h3>
          <p className="text-sm text-amber-100 mb-6 max-w-2xl mx-auto">
            平日限定の一人旅割引や、早期割・直前割など、楽天トラベルならではの特典プランが多数用意されています。人気日程は早めの予約がおすすめです。
          </p>
          <a
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2F"
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-amber-900 font-bold px-8 py-3 rounded-xl shadow-lg hover:bg-amber-50 transition transform hover:-translate-y-0.5 text-sm sm:text-base"
          >
            楽天トラベルで宿泊プラン・空室を探す
          </a>
        </div>
      </section>
        

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と日本一のおんせん県・天然温泉白糸の湯・豊後とり天！九州東部ビジネスを制する厳選3宿の旅ノウハウ
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「日本一のおんせん県・天然温泉白糸の湯・豊後とり天！九州東部ビジネスを制する厳選3宿」を効率よく巡るコツは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 大分駅前出張・天然温泉サウナ：日本一のおんせん県・天然温泉白糸の湯・豊後とり天！九州東部ビジネスを制する厳選3宿では、最寄り駅からの送迎バス運行時間やチェックイン時刻（通常15:00）から逆算し、午前中に主要な景勝地・寺社・市場を巡り、午後は宿の天然温泉や地元食材の会席料理をゆっくり堪能する行程が最も満足度の高い回り方です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 事前準備や持ち物で注意すべきポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 楽天トラベルで予約する際は、無料駐車場の台数・予約要否、露天風呂付き客室や部屋食プランの有無、そして5と0のつく日クーポンや早期割引プランの対象期間を事前に比較確認しておくと安心です。
              </p>
            </details>
          </div>
        </section>

      
        {/* Enriched Rakuten API & Wikipedia Tourist Guide */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 大分駅前出張・天然温泉サウナ：日本一のおんせん県・天然温泉白糸の湯・豊後とり天！九州東部ビジネスを制する厳選3宿：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「大分駅前出張・天然温泉サウナ：日本一のおんせん県・天然温泉白糸の湯・豊後とり天！九州東部ビジネスを制する厳選3宿」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 天然温泉　白糸の湯　ドーミーイン大分（ドーミーイン・御宿野乃　ホテルズグループ）</td>
                <td className="p-3 text-stone-600">大分県大分市末広町1-2-1</td>
                <td className="p-3 text-stone-600">大分駅周辺</td>
                <td className="p-3 text-stone-600">立体駐車場2基完備。全68台収容可能。すべて先着順となります。1泊1,500円(税込)。</td>
                <td className="p-3 font-bold text-amber-600">★4.49（1676件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,037〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F166556%2F166556.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 天然温泉　アリストンホテル大分</td>
                <td className="p-3 text-stone-600">大分県大分市金池町1-2-1</td>
                <td className="p-3 text-stone-600">大分駅周辺</td>
                <td className="p-3 text-stone-600">有り 8台 1泊1,000円(税込) 先着順　提携駐車場有り(先着順)</td>
                <td className="p-3 font-bold text-amber-600">★3.98（433件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,600〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F193114%2F193114.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 天然温泉　都の湯　ホテルクラウンヒルズ大分（ＢＢＨホテルグループ）</td>
                <td className="p-3 text-stone-600">大分県大分市都町4-3-12</td>
                <td className="p-3 text-stone-600">大分駅周辺</td>
                <td className="p-3 text-stone-600">ホテル立体駐車場（高1.55m幅1.85m長5.00mまで）無料　提携駐車場900円</td>
                <td className="p-3 font-bold text-amber-600">★3.84（1919件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F104513%2F104513.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">天然温泉　白糸の湯　ドーミーイン大分（ドーミーイン・御宿野乃　ホテルズグループ）</h3>
                  <span className="text-xs text-stone-400 ml-2">（てんねんおんせん　しらいとのゆ　どーみーいんおおいた）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,037〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/166556/166556.jpg" alt="天然温泉　白糸の湯　ドーミーイン大分（ドーミーイン・御宿野乃　ホテルズグループ） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>最上階12階に天然温泉大浴場・露天風呂・高温サウナ完備＜水風呂付き＞！★夜鳴きそばサービス実施中！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 大分県大分市末広町1-2-1 ／ 最寄り駅：大分 ／ 交通案内：JR大分駅府内中央口より徒歩約１分！大分空港行リムジンバス乗り場へは徒歩1分の好立地♪</p>
                  <p><strong>【駐車場・マイカー利用】</strong>立体駐車場2基完備。全68台収容可能。すべて先着順となります。1泊1,500円(税込)。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.47 ／ 立地 ★4.46 ／ 部屋 ★4.46 ／ 設備 ★4.46 ／ 風呂 ★4.53 ／ 食事 ★4.51</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「深夜の到着でも丁寧に対応してくれた大変満足です。遅い到着でしたが、しっかり対応して頂きました。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp…　2026-10-09 23:47:14投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">天然温泉　アリストンホテル大分</h3>
                  <span className="text-xs text-stone-400 ml-2">（てんねんおんせん　ありすとんほてるおおいた）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,600〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/193114/193114.jpg" alt="天然温泉　アリストンホテル大分 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>大分駅から徒歩２分！天然温泉と大分郷土料理の朝ごはんバイキング</p>
                  <p><strong>【所在地・アクセス】</strong>〒 大分県大分市金池町1-2-1 ／ 最寄り駅：大分 ／ 交通案内：大分駅から徒歩２分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り 8台 1泊1,000円(税込) 先着順　提携駐車場有り(先着順)</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「朝食のとり天が絶品で大満足朝食のとり天が美味しかったクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/193114?r…　2026-08-09 09:02:03投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">天然温泉　都の湯　ホテルクラウンヒルズ大分（ＢＢＨホテルグループ）</h3>
                  <span className="text-xs text-stone-400 ml-2">（てんねんおんせん　みやこのゆ　ほてるくらうんひるずおおいた）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/104513/104513_ru.jpg" alt="天然温泉　都の湯　ホテルクラウンヒルズ大分（ＢＢＨホテルグループ） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>朝食バイキング無料！すぐそこ繁華街、天然温泉大浴場併設、客室も天然温泉♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 大分県大分市都町4-3-12 ／ 最寄り駅：大分 ／ 交通案内：大分空港より高速バスにて約60分(荷揚町下車)。 大分自動車道・大分インターチェンジより車で10分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>ホテル立体駐車場（高1.55m幅1.85m長5.00mまで）無料　提携駐車場900円</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「無料サービスが充実、コスパ重視なら納得ウェルカムコーヒー、夜間のお茶漬け、温泉、朝食無料サービスがあり、部屋は狭いですが、コスパはいいと思います。駐車場の高さ制限があり、施設内の無料駐車場は利用で…　2026-08-22 21:38:14投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=104513&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！大分県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、大分県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">別府地獄めぐり</h3>
                <p className="text-xs text-stone-600 leading-relaxed">源泉数・湧出量日本一を誇る別府温泉の代表的観光コース。コバルトブルーの「海地獄」や真っ赤な「血の池地獄」、噴気で蒸す地獄蒸し料理が楽しめます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/Yufuin_Onsen_-Mus%C5%8Den_02.jpg/1280px-Yufuin_Onsen_-Mus%C5%8Den_02.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="由布院（金鱗湖・辻馬車）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">由布院（金鱗湖・辻馬車）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">由布岳の麓に広がる全国屈指のおしゃれな温泉リゾート。清水と温泉が湧き出て朝霧が立ち込める「金鱗湖」や湯の坪街道のスイーツ巡りが女性に大人気です。 由布院温泉（ゆふいんおんせん）は、大分県由布市（旧国豊後国速見郡）にある温泉。由布岳（標高1,584m）の麓に広がる温泉地である。 温泉湧出量、源泉数ともに全国2位の豊富な湯量を誇る。1959年5月5日に湯平温泉とともに「湯布院温泉」として国民保養温泉地に指定され、2019年10月4日には、由布市内の塚原温泉・庄内温泉・挾間温泉を含めた「湯布院温泉郷」として…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">九重“夢”大吊橋</h3>
                <p className="text-xs text-stone-600 leading-relaxed">水面からの高さ173m、全長390mを誇る日本一高い歩行者専用吊り橋。橋の上からは「日本の滝百選」の震動の滝や九酔渓の壮大なパノラマを見渡せます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">宇佐神宮</h3>
                <p className="text-xs text-stone-600 leading-relaxed">全国に40,000社以上ある八幡社の総本宮。豊かな原生林に包まれた広大な敷地に朱塗りの本殿が建ち、伊勢神宮に並ぶ二拝四拍手一拝の参拝様式が特徴です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 大分県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 大分県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      </main>
  );
}
