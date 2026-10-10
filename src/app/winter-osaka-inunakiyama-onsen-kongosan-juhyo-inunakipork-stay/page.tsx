import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Calendar, ExternalLink, HelpCircle, ChevronRight, ShieldCheck, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: '静寂の渓谷露天と金剛山樹氷：2026-2027年冬の大阪・犬鳴山温泉！犬鳴ポークと名湯宿5選 | クラウドトラベル',
  description: '都心から約50分で辿り着く大阪随一の秘境「犬鳴山温泉」と金剛山の幻想的な冬の樹氷！修験道の歴史薫る渓流露天風呂、ブランド豚「犬鳴ポーク」のしゃぶしゃぶや冬のぼたん鍋を堪能する大人の冬籠もり名宿5選。',
  keywords: ['大阪府冬旅行', '犬鳴山温泉・泉佐野・南河内', '冬温泉', '2026', '2027', '雪景色', '冬の味覚', '楽天トラベル', 'ふるさと納税'],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-osaka-inunakiyama-onsen-kongosan-juhyo-inunakipork-stay',
  },
  openGraph: {
    title: '静寂の渓谷露天と金剛山樹氷：2026-2027年冬の大阪・犬鳴山温泉！犬鳴ポークと名湯宿5選',
    description: '都心から約50分で辿り着く大阪随一の秘境「犬鳴山温泉」と金剛山の幻想的な冬の樹氷！修験道の歴史薫る渓流露天風呂、ブランド豚「犬鳴ポーク」のしゃぶしゃぶや冬のぼたん鍋を堪能する大人の冬籠もり名宿5選。',
    url: 'https://croud-travel.pages.dev/winter-osaka-inunakiyama-onsen-kongosan-juhyo-inunakipork-stay',
    siteName: 'クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '静寂の渓谷露天と金剛山樹氷：2026-2027年冬の大阪・犬鳴山温泉！犬鳴ポークと名湯宿5選',
    description: '都心から約50分で辿り着く大阪随一の秘境「犬鳴山温泉」と金剛山の幻想的な冬の樹氷！修験道の歴史薫る渓流露天風呂、ブランド豚「犬鳴ポーク」のしゃぶしゃぶや冬のぼたん鍋を堪能する大人の冬籠もり名宿5選。',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TouristAttraction',
        name: '犬鳴山修験道（七宝瀧寺と静寂の渓谷美）',
        description: '犬鳴山（いぬなきさん）は、大阪府泉佐野市大木犬鳴の犬鳴川渓谷を中心として、そこへ流れ込む燈明ヶ岳（標高558m、西ノ燈明ヶ岳ともいう）等の山域全体の総称。「犬鳴山」という名称の山があるわけではない。',
        image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/%E7%8A%AC%E9%B3%B4%E5%B1%B1%E6%B8%93%E8%B0%B7_2013.11.23_-_panoramio.jpg/1280px-%E7%8A%AC%E9%B3%B4%E5%B1%B1%E6%B8%93%E8%B0%B7_2013.11.23_-_panoramio.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
        address: {
          '@type': 'PostalAddress',
          addressRegion: '大阪府',
          addressCountry: 'JP'
        }
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: "犬鳴山温泉の冬の道路は積雪や凍結の心配がありますか？",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "犬鳴山温泉街（府道62号線沿い）は標高がそれほど高くないため、普段の冬期は積雪することは稀です。ただし強い寒波が到来した日の早朝や夜間は日陰部分が路面凍結することがあります。冬季にマイカーで訪れる際はスタッドレスタイヤの装着をおすすめします。金剛山登山口へ向かう山道は積雪・凍結の可能性が高いため冬用タイヤが必須です。"
            }
          },
          {
            '@type': 'Question',
            name: "日帰りで名物「犬鳴ポーク」や温泉入浴を楽しむことは可能ですか？",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "はい、不動口館やみ奈美亭など主要旅館では、昼食（犬鳴ポーク鍋や会席料理）と日帰り入浴がセットになった日帰りプランが提供されています。ただし冬期や週末は人気が高いため、事前に公式予約や電話確認をしておくことを推奨します。"
            }
          },
          {
            '@type': 'Question',
            name: "七宝瀧寺の参道トレッキングは冬でも歩けますか？",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "はい、参道は整備されており、冬でも歩行可能です。片道約30〜40分の緩やかな登り道となっており、行者の滝や義犬の墓など歴史ある史跡が点在しています。ただし冬場は木の根や石段が凍結している箇所があるため、防寒対策を万全にし、底の溝がしっかりした歩きやすい靴でお出かけください。"
            }
          }
        ]
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'ホーム',
            item: 'https://croud-travel.pages.dev/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: '大阪府旅行特集',
            item: 'https://croud-travel.pages.dev/prefectures/osaka'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: '【静寂の渓谷露天と金剛山樹氷】2026-2027年冬の大阪・犬鳴山温泉！犬鳴ポークと名湯宿5選',
            item: 'https://croud-travel.pages.dev/winter-osaka-inunakiyama-onsen-kongosan-juhyo-inunakipork-stay'
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-stone-50/50 pb-20">
        {/* パンくずリスト */}
        <nav className="max-w-4xl mx-auto px-4 py-4 text-xs text-stone-500 flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-cyan-700 transition">ホーム</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <Link href="/prefectures/osaka" className="hover:text-cyan-700 transition">大阪府</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-stone-800 font-medium truncate max-w-[200px] sm:max-w-none">犬鳴山温泉・泉佐野・南河内 冬の厳選宿</span>
        </nav>

        {/* ヘッダーエリア */}
        <header className="max-w-4xl mx-auto px-4 pt-4 pb-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-cyan-100 text-cyan-800">
              2026-2027年冬 厳選特集
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-stone-200 text-stone-700 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-stone-500" />
              犬鳴山温泉・泉佐野・南河内（大阪府）
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-600" />
              楽天API公式連携
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 leading-tight">「静寂の渓谷露天と金剛山樹氷」2026-2027年冬の大阪・犬鳴山温泉！犬鳴ポークと名湯宿5選</h1>

          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pt-1">
            都心から約50分で辿り着く大阪随一の秘境「犬鳴山温泉」と金剛山の幻想的な冬の樹氷！修験道の歴史薫る渓流露天風呂、ブランド豚「犬鳴ポーク」のしゃぶしゃぶや冬のぼたん鍋を堪能する大人の冬籠もり名宿5選。
          </p>
        </header>

        {/* 導入解説セクション */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-stone-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-700"></span>
                冬の犬鳴山温泉・泉佐野・南河内探訪：静寂と温もりに包まれる旅の魅力
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                大阪難波や関西国際空港から車や電車で約45〜50分という距離にありながら、大自然の深い静寂と修験道の神聖な空気に包まれる大阪府唯一の秘境温泉郷「犬鳴山（いぬなきさん）温泉」。役行者が開山したと伝わる名刹・七宝瀧寺へ続く渓谷沿いには、手つかずの照葉樹林と奇岩、清らかな犬鳴川のせせらぎが広がり、11月から1月の冬期は凛と張り詰めた冷気の中に白煙が立ち上る幻想的な情景を見せます。近隣の南河内にそびえる名峰・金剛山では冬限定の美しい樹氷や霧氷の世界が出現し、新春の初詣登山や雪ハイキングを楽しむ旅人を迎えます。冬の犬鳴山温泉の醍醐味は、冷え切った身体をじんわり解きほぐす天然の純重曹泉（弱アルカリ性単純温泉）のぬくもりと、地元泉州の大自然で育まれたブランド銘柄豚「犬鳴ポーク」の極上しゃぶしゃぶ、さらには冬の野趣あふれるぼたん鍋。喧騒を離れて静寂に浸る、大人の隠れ家冬ごもりへと誘います。
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-sm sm:text-base font-bold text-stone-800">
                この冬、犬鳴山温泉・泉佐野・南河内を訪れるべき3つの理由
              </h3>
              <div className="grid grid-cols-1 gap-3">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                  都心から1時間圏内で出逢う奥深い修験の渓谷美と七宝瀧寺の新春初詣
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  大阪市内からわずかな移動時間で別世界のような山深い渓谷へ。日本最古の修験根本道場である犬鳴山七宝瀧寺は、新春の厄除けや諸願成就の祈祷で名高く、冬の澄んだ大気の中で鳴り響く護摩の炎と読経の響きが心を清めてくれます。
                </p>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                  湯上がり肌がすべすべになる名湯「美肌の純重曹泉」と渓流露天風呂
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  犬鳴山の源泉は全国的にも珍しい純重曹泉系。とろみのあるやわらかな湯触りで、角質をやさしく落とし保温・保湿効果に優れるため「美人の湯」として親しまれています。冬の寒風を感じながら渓流のせせらぎを眼下に望む雪見露天風呂は至福のひとときです。
                </p>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                  極上ブランド豚「犬鳴ポーク」の旨味と冬限定ぼたん鍋の贅沢な味わい
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  大阪唯一の幻のブランド豚「犬鳴ポーク」。パンや牛乳を与えて手塩にかけて育てられた肉質は、脂身が驚くほど甘くあっさりとしています。特製出汁にくぐらせる豚しゃぶや、冬の猪肉を使った味噌仕立てのぼたん鍋、泉州玉ねぎとの相性は抜群です。
                </p>
              </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-cyan-50/60 border border-cyan-100 space-y-2 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <h3 className="font-bold text-cyan-950 flex items-center gap-1.5 text-sm">
                <Calendar className="w-4 h-4 text-cyan-700" />
                アクセス・気候・おすすめの服装
              </h3>
              <div className="whitespace-pre-line text-xs text-stone-600">
                【エリアへのアクセス】
・電車・バス：JR阪和線「日根野駅」または南海本線「泉佐野駅」より、南海ウイングバス「犬鳴山」行きに乗車し約25〜30分、終点「犬鳴山」バス停下車すぐ。各温泉宿への無料送迎バス（要予約）を運行している宿もあります。
・車：阪和自動車道「上之郷IC」より府道62号線経由で約10〜15分。関西国際空港からも車で約25〜30分と抜群のアクセス。
・金剛山方面へのアクセス：犬鳴山から車で国道170号（外環状線）・国道310号を経由して金剛山登山口まで約50〜60分。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月中旬〜1月下旬（金剛山の樹氷・霧氷鑑賞、七宝瀧寺の新春初詣、温泉と鍋料理の最盛期）。
・気温の目安：犬鳴山渓谷は大阪市街地よりも2〜4℃気温が低く、真冬の朝晩は0℃前後まで冷え込みます。金剛山山頂（標高1,125m）は氷点下となり、積雪や凍結が日常的に発生します。
・服装のポイント：犬鳴山の散策には防風性の高いコートやダウンジャケット、マフラー、手袋が必須。渓谷沿いの遊歩道や七宝瀧寺参道は石段や濡れた岩場があるため、滑りにくいスニーカーやトレッキングシューズを着用してください。金剛山樹氷登山を予定される場合は、本格的な防寒着と軽アイゼン（6本爪以上推奨）の携行が必要です。
              </div>
            </div>
          </div>
        </section>

        {/* Wikipedia公式連携スポットセクション */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                近隣名所アーカイブ：犬鳴山修験道（七宝瀧寺と静寂の渓谷美）
              </h2>
              <span className="text-[11px] text-stone-400">Wikipedia公式情報連携</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 overflow-hidden rounded-xl border border-stone-200 bg-stone-100">
                <img
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/%E7%8A%AC%E9%B3%B4%E5%B1%B1%E6%B8%93%E8%B0%B7_2013.11.23_-_panoramio.jpg/1280px-%E7%8A%AC%E9%B3%B4%E5%B1%B1%E6%B8%93%E8%B0%B7_2013.11.23_-_panoramio.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                  alt="犬鳴山修験道（七宝瀧寺と静寂の渓谷美）"
                  className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-7 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                  犬鳴山修験道（七宝瀧寺と静寂の渓谷美） の見どころと歴史
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  犬鳴山（いぬなきさん）は、大阪府泉佐野市大木犬鳴の犬鳴川渓谷を中心として、そこへ流れ込む燈明ヶ岳（標高558m、西ノ燈明ヶ岳ともいう）等の山域全体の総称。「犬鳴山」という名称の山があるわけではない。
                </p>
                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                  <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                  <span className="text-cyan-700 font-semibold">冬の探訪推奨スポット</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 宿一覧セクション */}
        <section className="max-w-4xl mx-auto px-4 space-y-8 mb-12">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              犬鳴山温泉・泉佐野・南河内 厳選の温泉＆名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              楽天トラベルの最新空室・クチコミ・宿泊料金データをリアルタイム連携しています
            </p>
          </div>

          {/* 宿カード 1: 犬鳴山温泉　不動口館 */}
          <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-5 relative min-h-[240px]">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/104779/104779.jpg"
                  alt="犬鳴山温泉　不動口館"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white px-2.5 py-1 rounded-full text-xs font-semibold">
                  第1位
                </div>
              </div>
              <div className="md:col-span-7 p-5 sm:p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-50 text-cyan-800 border border-cyan-200 mb-2">
                    犬鳴川渓流沿い・全室リバービューの隠れ家名旅館
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    犬鳴山温泉　不動口館
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 4.19
                    </span>
                    <span>クチコミ 109件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">税込 19,360円〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    犬鳴山温泉の奥深くに佇み、創業以来多くの旅人に愛されてきた名旅館。全客室が犬鳴川の渓流に面しており、窓を開ければ心地よい水の音と澄んだ山の空気が部屋を満たします。自慢の露天風呂は渓流へとせり出すように造られており、冬のひんやりとした風を感じながら弱アルカリ性のやわらかな美肌湯に肩まで浸かる贅沢を満喫できます。夕食には地元が誇る「犬鳴ポーク」を自家製ポン酢や特製胡麻ダレで味わうしゃぶしゃぶ鍋を中心に、季節の鮮魚や山の恵みを美しく盛り込んだ会席が並びます。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 犬鳴川の清流を真下に見下ろす絶好のロケーション</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 川のせせらぎと冬木立を望む開放的な展望露天風呂</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 大阪産犬鳴ポークの雪見鍋や旬の創作会席料理</li>
                  </ul>

                  <div className="mt-3 p-3 bg-stone-50 rounded-lg border border-stone-200/60 text-xs text-stone-600 italic">
                    <p className="font-semibold text-[11px] text-stone-500 not-italic mb-0.5">宿泊者のクチコミ抜粋：</p>
                    「川を望むロビーと温泉、細やかな心配りに満足チェックインより早い時間に到着しましたが、チェックインまで川が眼下に望めるロビーでゆったり過ごさせていただけました。部屋には茶菓子のほか、ドリップコーヒー。」
                  </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 大阪府泉佐野市大木7</p>
                    <p>🚆 JR日根野駅より南海バス「犬鳴山行」にて20分/南海泉佐野駅より南海バス「犬鳴山行」にて40分/無料送迎バス有（要予約）</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F104779%2F104779.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-700 to-cyan-800 hover:from-cyan-800 hover:to-cyan-900 text-white font-bold text-xs sm:text-sm shadow transition-all"
                  >
                    <span>楽天トラベルで空室・プラン・クチコミを見る</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* 宿カード 2: 犬鳴山温泉　み奈美亭 */}
          <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-5 relative min-h-[240px]">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/109452/109452.jpg"
                  alt="犬鳴山温泉　み奈美亭"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white px-2.5 py-1 rounded-full text-xs font-semibold">
                  第2位
                </div>
              </div>
              <div className="md:col-span-7 p-5 sm:p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-50 text-cyan-800 border border-cyan-200 mb-2">
                    天然重曹泉の大浴場・多彩な客室とぼたん鍋が名物の老舗
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    犬鳴山温泉　み奈美亭
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 3.45
                    </span>
                    <span>クチコミ 247件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">税込 12,100円〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    犬鳴山温泉の入り口近くに位置し、ゆったりとした佇まいが魅力の老舗温泉旅館。広々とした大浴場には自慢の天然重曹泉が贅沢に注がれ、湯上がりには肌が絹のようにしっとり潤うと女性客からも高い支持を集めています。冬の料理の目玉は、秘伝の合わせ味噌で煮込む「天然ぼたん鍋」。臭みが全くない上質な猪肉とたっぷりの根菜が体の芯から温めてくれます。また犬鳴ポークのステーキやすき焼きなど肉料理の充実度も際立っており、冬の温泉美食旅に最適です。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 自然石を配した広々とした大浴場と緑を望む露天風呂</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 冬季限定の特製味噌仕立て極上ぼたん鍋と犬鳴ポーク料理</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 落ち着きある純和風客室と真心のこもった老舗のおもてなし</li>
                  </ul>

                  <div className="mt-3 p-3 bg-stone-50 rounded-lg border border-stone-200/60 text-xs text-stone-600 italic">
                    <p className="font-semibold text-[11px] text-stone-500 not-italic mb-0.5">宿泊者のクチコミ抜粋：</p>
                    「スタッフの気配りと温泉に癒やされた旅スタッフの方も親切で、夕食の時にキープした焼酎を部屋に持ち帰ったら、何も言っていないのに、その後にグラスや氷を部屋に持って来てくれました。アルコール類が高かった。」
                  </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 大阪府泉佐野市大木2236</p>
                    <p>🚆 南海泉佐野駅から南海バス「犬鳴山行」にて３０分、ＪＲ日根野駅から南海バス「犬鳴山行」にて２０分（無料送迎バス有・要予約）</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F109452%2F109452.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-700 to-cyan-800 hover:from-cyan-800 hover:to-cyan-900 text-white font-bold text-xs sm:text-sm shadow transition-all"
                  >
                    <span>楽天トラベルで空室・プラン・クチコミを見る</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* 宿カード 3: 関空温泉ホテルガーデンパレス */}
          <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-5 relative min-h-[240px]">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/222/222.jpg"
                  alt="関空温泉ホテルガーデンパレス"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white px-2.5 py-1 rounded-full text-xs font-semibold">
                  第3位
                </div>
              </div>
              <div className="md:col-span-7 p-5 sm:p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-50 text-cyan-800 border border-cyan-200 mb-2">
                    天然温泉スパ完備・関空アクセス抜群の癒やしのシティリゾート
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    関空温泉ホテルガーデンパレス
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 4.43
                    </span>
                    <span>クチコミ 2,198件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">税込 5,500円〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    泉佐野の市街地に位置しながら、敷地内から湧き出る天然温泉大浴場を備えた本格派スパホテル。犬鳴山温泉の散策や金剛山方面へのドライブ拠点としても極めて至便な立地を誇ります。大浴場は手入れの行き届いた清潔な空間で、サウナやジェットバスも完備。フライト前後や冬の観光で冷えた身体を温かい温泉でじっくりと癒やすことができます。客室はシングルからファミリー向けまで多彩で、ベッドの寝心地にも定評があります。朝食は種類豊富な和洋ビュッフェが楽しめます。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 地下から湧出する弱アルカリ性天然温泉大浴場とジェットバス</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 関西国際空港への無料シャトルバス運行で前後泊にも最適</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 四季折々の和洋バイキングと広々としたモダン客室</li>
                  </ul>

                  <div className="mt-3 p-3 bg-stone-50 rounded-lg border border-stone-200/60 text-xs text-stone-600 italic">
                    <p className="font-semibold text-[11px] text-stone-500 not-italic mb-0.5">宿泊者のクチコミ抜粋：</p>
                    「食事は最高だがマッサージ機の点検を希望2台あるマッサージ機の左側の左足は、また骨折級に締め付けました。点検の頻度をあげて欲しいです。食事はサイコーでした。」
                  </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 大阪府泉佐野市中町1-3-51</p>
                    <p>🚆 関西空港からホテル（運休中）　ホテルから関西空港（無料バスあり）　最寄り駅からホテル間（無料送迎バスあり：～２０時まで）</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F222%2F222.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-700 to-cyan-800 hover:from-cyan-800 hover:to-cyan-900 text-white font-bold text-xs sm:text-sm shadow transition-all"
                  >
                    <span>楽天トラベルで空室・プラン・クチコミを見る</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* 宿カード 4: ホテルニューユタカ */}
          <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-5 relative min-h-[240px]">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/1316/1316.jpg"
                  alt="ホテルニューユタカ"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white px-2.5 py-1 rounded-full text-xs font-semibold">
                  第4位
                </div>
              </div>
              <div className="md:col-span-7 p-5 sm:p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-50 text-cyan-800 border border-cyan-200 mb-2">
                    泉佐野駅前至近・機能的な客室と温かいサービスが自慢
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    ホテルニューユタカ
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 3.73
                    </span>
                    <span>クチコミ 133件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">税込 3,500円〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    泉佐野の中心街に位置し、犬鳴山方面への路線バス乗り場や駅へのアクセスが軽快なビジネス＆観光ホテル。シンプルながら必要な設備が整った客室は、冬の一人旅や自由なドライブ旅行の拠点として高いコストパフォーマンスを誇ります。フロントスタッフの親身な対応も心地よく、周辺の飲食店案内や観光アドバイスも丁寧。夜は駅前の割烹や居酒屋で泉州沖で獲れた新鮮な地魚や泉州がに、名物料理を堪能し、翌朝早くから犬鳴山や金剛山へ出発するアクティブな旅にぴったりです。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 南海本線「泉佐野駅」から徒歩圏内！ビジネス＆観光の拠点</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 無料Wi-Fi・個別空調完備の機能的で清潔なゲストルーム</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 周辺には泉州の地魚や居酒屋グルメが楽しめる名店が多数</li>
                  </ul>

                  <div className="mt-3 p-3 bg-stone-50 rounded-lg border border-stone-200/60 text-xs text-stone-600 italic">
                    <p className="font-semibold text-[11px] text-stone-500 not-italic mb-0.5">宿泊者のクチコミ抜粋：</p>
                    「送迎バス利用でゆっくり過ごしたいホテル当日予約で1泊しました立地に関してコンビニ等がすぐ近くにはないので正直不便を感じると思います車移動の旅行なら使いやすいかとでも部屋から一歩もでない。」
                  </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 大阪府泉佐野市中庄915-1</p>
                    <p>🚆 ※熊取駅　泉佐野駅まで無料お迎えバス運行したします（3月20日より）</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1316%2F1316.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-700 to-cyan-800 hover:from-cyan-800 hover:to-cyan-900 text-white font-bold text-xs sm:text-sm shadow transition-all"
                  >
                    <span>楽天トラベルで空室・プラン・クチコミを見る</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* 宿カード 5: スターゲイトホテル関西エアポート（ＳｉＳ　ＳＴＡＲＧＡＴＥ　ＨＯＴＥＬ） */}
          <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-5 relative min-h-[240px]">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/197/197.jpg"
                  alt="スターゲイトホテル関西エアポート（ＳｉＳ　ＳＴＡＲＧＡＴＥ　ＨＯＴＥＬ）"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white px-2.5 py-1 rounded-full text-xs font-semibold">
                  第5位
                </div>
              </div>
              <div className="md:col-span-7 p-5 sm:p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-50 text-cyan-800 border border-cyan-200 mb-2">
                    地上54階の超高層ランドマーク・パノラマ夜景と極上ホテルステイ
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    スターゲイトホテル関西エアポート（ＳｉＳ　ＳＴＡＲＧＡＴＥ　ＨＯＴＥＬ）
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 4.38
                    </span>
                    <span>クチコミ 4,932件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">税込 4,000円〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    関西国際空港の対岸にそびえ立つ西日本屈指の超高層ホテル。客室はすべて高層階に位置し、冬の澄んだ夜空に輝く大阪市街の夜景や関西国際空港連絡橋、煌めく大阪湾のパノラマを独り占めできます。館内には本格的な日本料理や鉄板焼き、夜景を望むスカイラウンジなど多彩なレストランが揃い、冬の記念日旅行やラグジュアリーステイにふさわしい贅沢な時間を演出。近隣のりんくうプレミアム・アウトレットでのショッピングと犬鳴山温泉探訪を組み合わせた極上の冬旅が叶います。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> りんくうタウン駅直結！大阪湾と関空を一望する息を呑む超高層ビュー</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> 天井高のある上質な客室と洗練されたホテルダイニング</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">✓</span> りんくうプレミアム・アウトレットでの冬のショッピングにも最適</li>
                  </ul>

                  <div className="mt-3 p-3 bg-stone-50 rounded-lg border border-stone-200/60 text-xs text-stone-600 italic">
                    <p className="font-semibold text-[11px] text-stone-500 not-italic mb-0.5">宿泊者のクチコミ抜粋：</p>
                    「43階からの絶景と便利な立地で大満足絶景のお部屋(43階)43階のお部屋に宿泊しましたが、とにかく部屋からの夜景が本当に美しくて感動しました!もちろん朝の景色も素晴らしく、部屋にいるだけで特別。」
                  </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 大阪府泉佐野市りんくう往来北1番地</p>
                    <p>🚆 JR・南海「りんくうタウン」駅（関西空港から1駅・5分）「3番」出口直結</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F197%2F197.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-700 to-cyan-800 hover:from-cyan-800 hover:to-cyan-900 text-white font-bold text-xs sm:text-sm shadow transition-all"
                  >
                    <span>楽天トラベルで空室・プラン・クチコミを見る</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* ふるさと納税クーポンセクション */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 rounded-2xl p-6 sm:p-8 text-white shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/20 border border-white/30">
                  楽天トラベル×ふるさと納税
                </span>
                <h3 className="text-xl sm:text-2xl font-bold">
                  大阪府の宿に実質2,000円で泊まる賢い方法
                </h3>
                <p className="text-xs sm:text-sm text-white/90 max-w-xl leading-relaxed">
                  楽天ふるさと納税の宿泊クーポンを活用すれば、寄付額に応じて宿泊代金が大幅割引。予約済みの宿泊にも「あとから割引」が適用可能です。憧れの露天風呂付き客室や旬の特別会席プランもお手軽に予約できます。
                </p>
              </div>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-6 py-3 rounded-xl bg-white text-amber-700 font-bold text-sm shadow hover:bg-amber-50 transition-colors"
              >
                ふるさと納税対象宿を探す
              </a>
            </div>
          </div>
        </section>

        {/* よくある質問 (FAQ) */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-cyan-600" />
              冬の犬鳴山温泉・泉佐野・南河内旅行でよくある質問（FAQ）
            </h2>

            <div className="space-y-4">
              <details className="group border border-stone-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden bg-stone-50/50">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-stone-900 text-xs sm:text-sm">
                  <span>Q. 犬鳴山温泉の冬の道路は積雪や凍結の心配がありますか？</span>
                  <span className="transition group-open:-rotate-180 text-stone-400">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                  犬鳴山温泉街（府道62号線沿い）は標高がそれほど高くないため、普段の冬期は積雪することは稀です。ただし強い寒波が到来した日の早朝や夜間は日陰部分が路面凍結することがあります。冬季にマイカーで訪れる際はスタッドレスタイヤの装着をおすすめします。金剛山登山口へ向かう山道は積雪・凍結の可能性が高いため冬用タイヤが必須です。
                </p>
              </details>
              <details className="group border border-stone-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden bg-stone-50/50">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-stone-900 text-xs sm:text-sm">
                  <span>Q. 日帰りで名物「犬鳴ポーク」や温泉入浴を楽しむことは可能ですか？</span>
                  <span className="transition group-open:-rotate-180 text-stone-400">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                  はい、不動口館やみ奈美亭など主要旅館では、昼食（犬鳴ポーク鍋や会席料理）と日帰り入浴がセットになった日帰りプランが提供されています。ただし冬期や週末は人気が高いため、事前に公式予約や電話確認をしておくことを推奨します。
                </p>
              </details>
              <details className="group border border-stone-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden bg-stone-50/50">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-stone-900 text-xs sm:text-sm">
                  <span>Q. 七宝瀧寺の参道トレッキングは冬でも歩けますか？</span>
                  <span className="transition group-open:-rotate-180 text-stone-400">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                  はい、参道は整備されており、冬でも歩行可能です。片道約30〜40分の緩やかな登り道となっており、行者の滝や義犬の墓など歴史ある史跡が点在しています。ただし冬場は木の根や石段が凍結している箇所があるため、防寒対策を万全にし、底の溝がしっかりした歩きやすい靴でお出かけください。
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* 内部リンク・関連特集セクション */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-stone-100 rounded-2xl p-6 sm:p-8 border border-stone-200 space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-stone-900">あわせて読みたい大阪府＆冬の厳選温泉特集</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <Link href="/prefectures/osaka" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>大阪府のおすすめ観光名所＆温泉宿一覧</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </Link>
              <Link href="/features" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>全国の季節・目的別旅行特集一覧</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </Link>
              <Link href="/furusato-tax-luxury-hotspring-ryokan-stay" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>実質2,000円で泊まる名湯・高級温泉旅館ガイド</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </Link>
              <Link href="/furusato-tax-local-gourmet-inn-stay" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>ご当地グルメを堪能する全国美食旅特集</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
