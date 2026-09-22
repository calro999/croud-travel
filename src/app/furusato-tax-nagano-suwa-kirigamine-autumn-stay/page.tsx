import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '長野・諏訪湖の秋風情＆霧ヶ峰高原！上諏訪温泉の自家源泉と信州諏訪美酒・信州牛会席 | クラウドトラベルふるさと納税',
  description: '10月・11月の長野・諏訪＆霧ヶ峰特集！黄金色に輝くススキが広がる霧ヶ峰高原の秋晴れパノラマ、夕陽に染まる諏訪湖を一望する上諏訪温泉の豊富な自家源泉、諏訪五蔵の銘酒と信州プレミアム牛をふるさと納税トラベルクーポンでお得に楽しむ信州秋旅。',
  keywords: ["諏訪湖・上諏訪温泉・霧ヶ峰 紅葉 観光","長野県 10月 11月 旅行","上諏訪温泉諏訪湖紅葉＆信州プレミアム牛","ふるさと納税 温泉宿泊券","信州・上諏訪温泉　琥珀色の自家源泉を持つ宿【ホテル鷺乃湯】","上諏訪温泉　ホテル紅や","上諏訪温泉　ＲＡＫＯ華乃井ホテル","楽天ふるさと納税 宿泊クーポン"],
  alternates: {
    canonical: 'https://croud-travel.com/furusato-tax-nagano-suwa-kirigamine-autumn-stay',
  },
  openGraph: {
    title: '長野・諏訪湖の秋風情＆霧ヶ峰高原！上諏訪温泉の自家源泉と信州諏訪美酒・信州牛会席',
    description: '10月・11月の長野・諏訪＆霧ヶ峰特集！黄金色に輝くススキが広がる霧ヶ峰高原の秋晴れパノラマ、夕陽に染まる諏訪湖を一望する上諏訪温泉の豊富な自家源泉、諏訪五蔵の銘酒と信州プレミアム牛をふるさと納税トラベルクーポンでお得に楽しむ信州秋旅。',
    url: 'https://croud-travel.com/furusato-tax-nagano-suwa-kirigamine-autumn-stay',
    siteName: 'クラウドトラベル (croud-travel.com)',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "長野・諏訪湖の秋風情＆霧ヶ峰高原！上諏訪温泉の自家源泉と信州諏訪美酒・信州牛会席",
    "description": "10月・11月の長野・諏訪＆霧ヶ峰特集！黄金色に輝くススキが広がる霧ヶ峰高原の秋晴れパノラマ、夕陽に染まる諏訪湖を一望する上諏訪温泉の豊富な自家源泉、諏訪五蔵の銘酒と信州プレミアム牛をふるさと納税トラベルクーポンでお得に楽しむ信州秋旅。",
    "author": {
      "@type": "Organization",
      "name": "クラウドトラベル編集部"
    },
    "publisher": {
      "@type": "Organization",
      "name": "クラウドトラベル",
      "logo": {
        "@type": "ImageObject",
        "url": "https://croud-travel.com/logo.png"
      }
    },
    "datePublished": "2026-09-23",
    "dateModified": "2026-09-23",
    "mainEntityOfPage": "https://croud-travel.com/furusato-tax-nagano-suwa-kirigamine-autumn-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "長野・諏訪＆霧ヶ峰高原の秋（10月〜11月）のベストシーズン・見どころはいつですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "例年10月中旬〜11月下旬（霧ヶ峰ススキ・紅葉・秋の諏訪新酒）（霧ヶ峰高原ススキと八ヶ岳冠雪・諏訪湖サンセット・諏訪大社四社秋巡り）が見頃のピークとなります。山々や高原・湖畔の鮮やかなグラデーションとともに、旬を迎える極上の地場食材を心ゆくまで満喫いただけます。"
        }
      },
      {
        "@type": "Question",
        "name": "楽天ふるさと納税のトラベルクーポンは予約時にすぐ使えますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、楽天ふるさと納税で対象自治体に寄付を行うと、即時〜翌営業日にはアカウントに楽天トラベルクーポンが付与され、そのまま楽天トラベルでの宿泊予約時に割引としてご利用いただけます。"
        }
      },
      {
        "@type": "Question",
        "name": "長野・諏訪＆霧ヶ峰高原へのアクセスや秋旅の注意点はありますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "秋季は朝夕の寒暖差が大きくなるため、脱ぎ着しやすい上着や防寒着の準備が推奨されます。また人気スポット周辺は紅葉シーズンに混雑が予想されるため、早朝観光や平日のご滞在がおすすめです。"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ヘッダーナビゲーション */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight text-emerald-800 hover:opacity-80 transition">
            クラウドトラベル
          </Link>
          <div className="flex items-center space-x-4 text-xs font-medium text-stone-600">
            <Link href="/" className="hover:text-emerald-700">トップ</Link>
            <span>/</span>
            <Link href="/sitemap" className="hover:text-emerald-700">特集一覧</Link>
            <span>/</span>
            <span className="text-stone-400">秋のふるさと納税特集</span>
          </div>
        </div>
      </header>

      {/* ヒーローセクション */}
      <section className="relative bg-stone-900 text-white py-16 px-4 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block bg-amber-500 text-stone-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            10月・11月秋季限定 絶景＆味覚特集
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold leading-tight text-white">
            長野・諏訪湖の秋風情＆霧ヶ峰高原！上諏訪温泉の自家源泉と信州諏訪美酒・信州牛会席
          </h1>
          <p className="text-sm md:text-base text-stone-300 max-w-2xl mx-auto leading-relaxed">
            10月・11月の長野・諏訪＆霧ヶ峰特集！黄金色に輝くススキが広がる霧ヶ峰高原の秋晴れパノラマ、夕陽に染まる諏訪湖を一望する上諏訪温泉の豊富な自家源泉、諏訪五蔵の銘酒と信州プレミアム牛をふるさと納税トラベルクーポンでお得に楽しむ信州秋旅。
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2 text-xs text-stone-300">
            <span className="bg-stone-800/80 px-3 py-1 rounded border border-stone-700">エリア: 長野・諏訪＆霧ヶ峰高原</span>
            <span className="bg-stone-800/80 px-3 py-1 rounded border border-stone-700">見頃: 10月中旬〜11月下旬（霧ヶ峰ススキ・紅葉・秋の諏訪新酒）</span>
            <span className="bg-stone-800/80 px-3 py-1 rounded border border-stone-700">楽天ポイント還元対応</span>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto px-4 py-12 space-y-12 leading-relaxed">
        {/* イントロダクション */}
        <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-stone-200 space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 border-l-4 border-amber-600 pl-3">
            秋の長野・諏訪＆霧ヶ峰高原を旅する魅力と贅沢なふるさと納税活用法
          </h2>
          <p className="text-stone-700 leading-relaxed">
            秋風が心地よく吹き抜け、木々が鮮やかに色づく10月・11月。日本各地がもっとも美しく、実り豊かな季節を迎えます。なかでも「長野・諏訪＆霧ヶ峰高原」は、霧ヶ峰高原ススキと八ヶ岳冠雪・諏訪湖サンセット・諏訪大社四社秋巡りなど、この時期にしか出逢えない息を呑む絶景と旬の味覚が凝縮された屈指の名所です。
          </p>
          <p className="text-stone-700 leading-relaxed">
            さらに賢く贅沢に旅を楽しむ方法として今もっとも注目されているのが「楽天ふるさと納税トラベルクーポン」の活用です。地域の自治体に寄付を行うことで返礼品として宿泊割引クーポンを獲得でき、実質自己負担2,000円で憧れの高級旅館やリゾートホテルへの宿泊が実現します。
          </p>
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg mt-4">
            <h3 className="font-bold text-amber-900 text-sm mb-1">【秋旅のポイント】ふるさと納税トラベルクーポンの特徴</h3>
            <ul className="list-disc list-inside text-xs md:text-sm text-amber-800 space-y-1">
              <li>寄付金額に応じた宿泊補助（最大30%相当のクーポン付与）</li>
              <li>楽天ポイントも通常通り付与（お買い物マラソンやSPUでさらにお得）</li>
              <li>予約時に即時利用可能で、現地での支払い負担を大幅に軽減</li>
            </ul>
          </div>
        </section>

        {/* 季節の見どころと味覚 */}
        <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-stone-200 space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 border-l-4 border-amber-600 pl-3">
            10月・11月に訪れたい絶景スポットと秋の味覚
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-stone-50 p-5 rounded-lg border border-stone-200">
              <h3 className="text-base font-bold text-stone-900 mb-2 flex items-center">
                <span className="text-amber-600 mr-2">◆</span> 周辺の見どころ・名所
              </h3>
              <ul className="text-sm text-stone-600 space-y-2">
                <li className="flex items-start"><span className="text-amber-500 mr-2">•</span>諏訪大社（上社本宮・前宮・下社秋宮・春宮）</li>
                <li className="flex items-start"><span className="text-amber-500 mr-2">•</span>霧ヶ峰高原・車山高原（ススキとパノラマ）</li>
                <li className="flex items-start"><span className="text-amber-500 mr-2">•</span>立石公園（諏訪湖一望夕景名所）</li>
                <li className="flex items-start"><span className="text-amber-500 mr-2">•</span>高島城（紅葉ライトアップ）</li>
                <li className="flex items-start"><span className="text-amber-500 mr-2">•</span>諏訪五蔵酒蔵めぐり</li>
              </ul>
            </div>
            <div className="bg-stone-50 p-5 rounded-lg border border-stone-200">
              <h3 className="text-base font-bold text-stone-900 mb-2 flex items-center">
                <span className="text-amber-600 mr-2">◆</span> 旬の味覚・ご当地グルメ
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed mb-3">
                信州プレミアム牛ステーキ・信州サーモンのお造り・諏訪湖産ワカサギ唐揚げ・信州新そば・諏訪五蔵利き酒
              </p>
              <h3 className="text-base font-bold text-stone-900 mb-1 flex items-center">
                <span className="text-amber-600 mr-2">◆</span> 温泉の特徴
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed">
                上諏訪温泉（単純温泉・ナトリウム塩化物泉、湯量豊富な琥珀色自家源泉）と諏訪湖レイクビュー展望露天風呂
              </p>
            </div>
          </div>
        </section>

        {/* 厳選おすすめ宿 1 */}
        <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-stone-200 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b pb-4">
            <div>
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">厳選宿 1</span>
              <h3 className="text-xl md:text-2xl font-bold text-stone-900 mt-2">
                信州・上諏訪温泉　琥珀色の自家源泉を持つ宿【ホテル鷺乃湯】
              </h3>
              <p className="text-xs text-stone-500 mt-1">長野県諏訪市湖岸通り3-2-14</p>
            </div>
            <div className="mt-3 md:mt-0 flex items-center space-x-2">
              <div className="bg-amber-100 text-amber-800 font-bold px-3 py-1 rounded-full text-sm">
                ★ 総合評価: 4.51
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            
            <div className="relative h-64 rounded-lg overflow-hidden border border-stone-200 bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/5209/5209.jpg"
                alt="信州・上諏訪温泉　琥珀色の自家源泉を持つ宿【ホテル鷺乃湯】"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-stone-900 text-sm">宿の魅力と秋の過ごし方</h4>
              <p className="text-sm text-stone-700 leading-relaxed">
                露天風呂付客室も有。芯から温まる自家源泉と心を癒す日本庭園をもつ百余年の歴史が香る宿。
              </p>
              <div className="bg-stone-50 p-3 rounded text-xs text-stone-600 space-y-1">
                <p><span className="font-semibold text-stone-800">アクセス:</span> ＪＲ上諏訪駅より徒歩８分、諏訪ＩＣより１５分</p>
                <p><span className="font-semibold text-stone-800">目安料金:</span> 1泊1名 ￥10,230〜</p>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5209%2F5209.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold rounded-lg shadow-md transition text-sm text-center"
            >
              楽天トラベルで空室・プラン・ふるさと納税クーポンを見る →
            </a>
          </div>
        </section>

        {/* 厳選おすすめ宿 2 */}
        <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-stone-200 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b pb-4">
            <div>
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">厳選宿 2</span>
              <h3 className="text-xl md:text-2xl font-bold text-stone-900 mt-2">
                上諏訪温泉　ホテル紅や
              </h3>
              <p className="text-xs text-stone-500 mt-1">長野県諏訪市湖岸通り２－７－２１</p>
            </div>
            <div className="mt-3 md:mt-0 flex items-center space-x-2">
              <div className="bg-amber-100 text-amber-800 font-bold px-3 py-1 rounded-full text-sm">
                ★ 総合評価: 4.31
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            
            <div className="relative h-64 rounded-lg overflow-hidden border border-stone-200 bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/2880/2880.jpg"
                alt="上諏訪温泉　ホテル紅や"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-stone-900 text-sm">宿の魅力と秋の過ごし方</h4>
              <p className="text-sm text-stone-700 leading-relaxed">
                温泉展望浴場や岩盤浴など施設充実の温泉リゾート。和室・洋室選べるお部屋プランも多彩。
              </p>
              <div className="bg-stone-50 p-3 rounded text-xs text-stone-600 space-y-1">
                <p><span className="font-semibold text-stone-800">アクセス:</span> 【電車】上諏訪駅下車徒歩10分（予約制無料送迎）【お車】諏訪ICから車で15分または諏訪湖スマートICから車で10分</p>
                <p><span className="font-semibold text-stone-800">目安料金:</span> 1泊1名 ￥10,100〜</p>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2880%2F2880.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold rounded-lg shadow-md transition text-sm text-center"
            >
              楽天トラベルで空室・プラン・ふるさと納税クーポンを見る →
            </a>
          </div>
        </section>

        {/* 厳選おすすめ宿 3 */}
        <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-stone-200 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b pb-4">
            <div>
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">厳選宿 3</span>
              <h3 className="text-xl md:text-2xl font-bold text-stone-900 mt-2">
                上諏訪温泉　ＲＡＫＯ華乃井ホテル
              </h3>
              <p className="text-xs text-stone-500 mt-1">長野県諏訪市高島2-1200-3</p>
            </div>
            <div className="mt-3 md:mt-0 flex items-center space-x-2">
              <div className="bg-amber-100 text-amber-800 font-bold px-3 py-1 rounded-full text-sm">
                ★ 総合評価: 4.25
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            
            <div className="relative h-64 rounded-lg overflow-hidden border border-stone-200 bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/28001/28001.jpg"
                alt="上諏訪温泉　ＲＡＫＯ華乃井ホテル"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-stone-900 text-sm">宿の魅力と秋の過ごし方</h4>
              <p className="text-sm text-stone-700 leading-relaxed">
                絶景ロケーション！屋上テラス新設。諏訪湖を眺む露天風呂、地酒風呂、貸切風呂が人気。全室アウト11時。
              </p>
              <div className="bg-stone-50 p-3 rounded text-xs text-stone-600 space-y-1">
                <p><span className="font-semibold text-stone-800">アクセス:</span> 中央道諏訪IC(車8分)/JR上諏訪駅より予約制シャトル有</p>
                <p><span className="font-semibold text-stone-800">目安料金:</span> 1泊1名 ￥7,438〜</p>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28001%2F28001.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold rounded-lg shadow-md transition text-sm text-center"
            >
              楽天トラベルで空室・プラン・ふるさと納税クーポンを見る →
            </a>
          </div>
        </section>

        {/* 1泊2日おすすめモデルコース */}
        <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-stone-200 space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 border-l-4 border-amber-600 pl-3">
            【秋旅モデルコース】長野・諏訪＆霧ヶ峰高原を満喫する1泊2日の極上周遊ルート
          </h2>
          <div className="space-y-6">
            <div className="border-l-2 border-amber-500 pl-4 space-y-3">
              <h3 className="font-bold text-stone-900 text-base">【1日目】錦秋の絶景巡りと極上温泉チェックイン</h3>
              <ul className="text-sm text-stone-700 space-y-2">
                <li><span className="font-semibold text-amber-700">10:00</span> - 現地到着後、諏訪大社（上社本宮・前宮・下社秋宮・春宮）を散策。澄んだ秋空と鮮やかな景観を堪能</li>
                <li><span className="font-semibold text-amber-700">12:30</span> - ご当地名店にて旬の味覚（信州プレミアム牛ステーキなど）の贅沢ランチ</li>
                <li><span className="font-semibold text-amber-700">14:30</span> - 霧ヶ峰高原・車山高原（ススキとパノラマ）へ移動。午後の柔らかな木漏れ日の中で絶景撮影</li>
                <li><span className="font-semibold text-amber-700">16:30</span> - 厳選宿へチェックイン。名湯で旅の疲れを心地よく癒やす</li>
                <li><span className="font-semibold text-amber-700">18:30</span> - 料理長特製の秋会席膳。地酒とともに旬の美味に舌鼓</li>
              </ul>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4 space-y-3">
              <h3 className="font-bold text-stone-900 text-base">【2日目】朝の清涼な空気と名所・お土産巡り</h3>
              <ul className="text-sm text-stone-700 space-y-2">
                <li><span className="font-semibold text-emerald-700">07:30</span> - 朝風呂で爽やかな目覚め＆地場産食材が並ぶ和朝食</li>
                <li><span className="font-semibold text-emerald-700">09:30</span> - チェックアウト後、立石公園（諏訪湖一望夕景名所）を訪問</li>
                <li><span className="font-semibold text-emerald-700">11:30</span> - 高島城（紅葉ライトアップ）にてお土産選びと散策</li>
                <li><span className="font-semibold text-emerald-700">13:30</span> - 旅の締めくくりに地元の名物グルメを堪能し帰路へ</li>
              </ul>
            </div>
          </div>
        </section>

        {/* よくある質問（FAQ） */}
        <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-stone-200 space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 border-l-4 border-amber-600 pl-3">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm md:text-base">Q. 長野・諏訪＆霧ヶ峰高原の秋（10月〜11月）のベストシーズン・見どころはいつですか？</h3>
              <p className="text-xs md:text-sm text-stone-700 mt-2">
                例年10月中旬〜11月下旬（霧ヶ峰ススキ・紅葉・秋の諏訪新酒）（霧ヶ峰高原ススキと八ヶ岳冠雪・諏訪湖サンセット・諏訪大社四社秋巡り）が見頃のピークとなります。山々や高原・湖畔の鮮やかなグラデーションとともに、旬を迎える極上の地場食材を心ゆくまで満喫いただけます。
              </p>
            </div>
            <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm md:text-base">Q. 楽天ふるさと納税のトラベルクーポンは予約時にすぐ使えますか？</h3>
              <p className="text-xs md:text-sm text-stone-700 mt-2">
                はい、楽天ふるさと納税で対象自治体に寄付を行うと、即時〜翌営業日にはアカウントに楽天トラベルクーポンが付与され、そのまま楽天トラベルでの宿泊予約時に割引としてご利用いただけます。
              </p>
            </div>
            <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm md:text-base">Q. 長野・諏訪＆霧ヶ峰高原へのアクセスや秋旅の注意点はありますか？</h3>
              <p className="text-xs md:text-sm text-stone-700 mt-2">
                秋季は朝夕の寒暖差が大きくなるため、脱ぎ着しやすい上着や防寒着の準備が推奨されます。また人気スポット周辺は紅葉シーズンに混雑が予想されるため、早朝観光や平日のご滞在がおすすめです。
              </p>
            </div>
          </div>
        </section>

        {/* 関連特集リンク */}
        <section className="bg-amber-50/50 p-6 rounded-xl border border-amber-200 space-y-4">
          <h2 className="text-lg font-bold text-stone-900">こちらもチェック！秋のふるさと納税特集</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm">
            <Link href="/furusato-tax-aizu-urabandai-goshikinuma-autumn-stay" className="text-emerald-800 hover:underline">
              → 福島・裏磐梯五色沼＆桧原湖（五色沼紅葉＆会津牛）特集
            </Link>
            <Link href="/furusato-tax-saga-ureshino-takeo-autumn-stay" className="text-emerald-800 hover:underline">
              → 佐賀・嬉野温泉＆武雄温泉（美肌の湯＆佐賀牛）特集
            </Link>
            <Link href="/furusato-tax-awaji-sunset-onsen-autumn-stay" className="text-emerald-800 hover:underline">
              → 兵庫・淡路島サンセット温泉＆鳴門海峡（3年とらふぐ）特集
            </Link>
            <Link href="/furusato-tax-shimane-tamatsukuri-izumo-autumn-stay" className="text-emerald-800 hover:underline">
              → 島根・玉造温泉＆出雲（神在月参拝＆美肌泉）特集
            </Link>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-stone-900 text-stone-400 py-8 px-4 text-center text-xs space-y-2 border-t border-stone-800">
        <p>© 2026 クラウドトラベル All Rights Reserved.</p>
        <p>※掲載のホテル情報・料金・評価は楽天トラベルAPIより取得した最新データに基づきます。最新の空室状況はリンク先の各プラン詳細をご確認ください。</p>
      </footer>
    </div>
  );
}
