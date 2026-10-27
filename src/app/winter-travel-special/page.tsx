import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import fs from "fs";
import path from "path";
import { Metadata } from "next";
import Link from "next/link";
import WinterSpecialHubClient from "./WinterSpecialHubClient";
import winterPostsData from "@/data/winterFeaturesData.json";

export const metadata: Metadata = {
  title: "全国の冬の絶景温泉＆冬の美食満喫特集まとめ 500選",
  description: "越前ガニ・松葉ガニ、下関とらふぐ、雪見露天風呂、新春初詣、きらめくイルミネーション、白銀の絶景スキーリゾートまで！全国エリア別・目的別の冬の厳選特集記事500選を網羅！",
  keywords: ["冬旅行", "カニ宿", "雪見露天", "とらふぐ", "初詣 宿", "冬 イルミネーション", "楽天トラベル クーポン", "温泉旅行 冬"],
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-travel-special/"
  },
  openGraph: {
    title: "全国の冬の絶景温泉＆冬の美食満喫特集まとめ 500選",
    description: "カニ・ふぐ・雪見温泉・初詣・冬の味覚など、全国エリア別・目的別の冬旅特集を一挙網羅！",
    url: "https://croud-travel.pages.dev/winter-travel-special/",
    images: [
      {
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Shirakawa-go_%282017-07-22%29.jpg/3840px-Shirakawa-go_%282017-07-22%29.jpg",
        width: 1200,
        height: 630,
        alt: "冬の絶景温泉＆美食特集"
      }
    ]
  }
};

export const dynamic = 'force-static';

export default function WinterTravelSpecialPage() {
  return (
    <div className="space-y-10 max-w-6xl mx-auto px-4 py-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"全国の冬の絶景温泉＆冬の美食満喫特集まとめ 500選\",\"description\":\"越前ガニ・松葉ガニ、下関とらふぐ、雪見露天風呂、新春初詣、きらめくイルミネーション、白銀の絶景スキーリゾートまで！全国エリア別・目的別の冬の厳選特集記事500選を網羅！\",\"url\":\"https://croud-travel.pages.dev/winter-travel-special/\",\"datePublished\":\"2026-10-18T12:00:00+09:00\",\"dateModified\":\"2026-10-19T07:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"日本全国・旅宿クラウド 編集部\",\"url\":\"https://croud-travel.pages.dev/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"日本全国・旅宿クラウド\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://croud-travel.pages.dev/icon.png\"}}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://croud-travel.pages.dev/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"特集一覧\",\"item\":\"https://croud-travel.pages.dev/features/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"全国の冬の絶景温泉＆冬の美食満喫特集まとめ 500選\",\"item\":\"https://croud-travel.pages.dev/winter-travel-special/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"ItemList\",\"name\":\"全国の冬の絶景温泉＆冬の美食満喫特集まとめ 500選\",\"numberOfItems\":2,\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"🏨 注目宿のクチコミ・アクセス詳細\",\"url\":\"https://croud-travel.pages.dev/winter-travel-special/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"🗺️ 合わせて訪れたい日本の代表的観光名所ガイド\",\"url\":\"https://croud-travel.pages.dev/winter-travel-special/\"}]}" }} />
      {/* パンくずナビ */}
      <nav aria-label="Breadcrumb" className="text-xs font-bold text-teal-900/60 flex items-center gap-2">
        <Link href="/" className="hover:text-teal-800 transition">ホーム</Link>
        <span>/</span>
        <Link href="/features/" className="hover:text-teal-800 transition">特集・まとめ記事一覧</Link>
        <span>/</span>
        <span className="text-sky-950 font-bold">冬の絶景温泉＆美食特集 500選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-sky-950 to-indigo-950 p-8 md:p-12 text-white shadow-xl space-y-4 border border-sky-500/20">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-block text-[10px] font-black tracking-widest bg-sky-500/20 border border-sky-400/40 px-3.5 py-1 rounded-full uppercase text-sky-200">
            WINTER SPECIAL & HOT SPRINGS ❄️
          </span>
          <span className="inline-block text-[10px] font-black bg-sky-400 text-sky-950 px-3 py-1 rounded-full">
            全国{winterPostsData.length}特集 網羅
          </span>
        </div>
        <h1 className="text-2xl md:text-4xl font-black font-journal-serif leading-snug">
          全国の冬の絶景温泉＆冬の美食満喫特集
        </h1>
        <p className="text-sky-100/95 text-xs md:text-sm max-w-3xl leading-relaxed font-medium">
          北陸・山陰の本場松葉ガニ・越前ガニ、下関の極上とらふぐ、しんしんと雪降る情緒ある雪見露天風呂、新年の福を招く有名神社・寺院の初詣旅、きらめく街の冬イルミネーションなど！
          目的や地方エリアで迷わずスムーズにお好みの個別特集記事へアクセスできます。
        </p>

        {/* 秋特集・キャンペーンへの切り替え導線 */}
        <div className="pt-2 flex flex-wrap gap-3">
          <Link
            href="/campaigns/autumn-gourmet-travel/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-600/90 hover:bg-amber-700 text-amber-50 hover:text-white text-xs font-bold rounded-2xl border border-amber-400/40 backdrop-blur-sm transition shadow-sm"
          >
            <span>🍁 秋の味覚＆紅葉温泉宿特集を見る →</span>
          </Link>
          <Link
            href="/campaigns/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-2xl border border-white/20 backdrop-blur-sm transition shadow-sm"
          >
            <span>🏷️ 楽天トラベルお得クーポン特集</span>
          </Link>
        </div>
      </section>

      {/* 目的別＆エリア別インタラクティブ絞り込みナビゲーション */}
      <WinterSpecialHubClient posts={winterPostsData} />

      {/* ボトム案内・秋特集導線 */}
      <section className="bg-gradient-to-r from-amber-700 to-orange-800 rounded-3xl p-8 text-white shadow-xl space-y-4">
        <span className="inline-block text-[10px] font-black tracking-wider bg-white/20 px-3 py-0.5 rounded-full uppercase">
          AUTUMN GOURMET 🍁
        </span>
        <h2 className="text-xl md:text-2xl font-black font-journal-serif">
          秋の旬を味わい尽くす！秋の味覚＆紅葉温泉宿特集
        </h2>
        <p className="text-amber-100 text-xs md:text-sm max-w-2xl leading-relaxed">
          松茸、シャインマスカット、採れたて新米、伊勢海老、ブランド和牛など、実りの秋を満喫する厳選旅館特集もぜひチェックしてください。
        </p>
        <div className="pt-2">
          <Link
            href="/campaigns/autumn-gourmet-travel/"
            className="inline-block px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-amber-950 text-xs md:text-sm font-black rounded-2xl shadow-lg transition"
          >
            秋の味覚特集まとめを見る 🍁 →
          </Link>
        </div>
      </section>
    
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-6 my-10 max-w-5xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900">📊 全国の冬の絶景温泉＆冬の美食満喫特集まとめ 500選：楽天トラベル高評価宿スペック比較表＆クチコミ徹底解説</h2>
          <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
            楽天トラベル公式APIから取得した全国の高評価宿データ（所在地・最寄り駅・駐車場・総合評価・参考最安料金）と実際の宿泊者レビューを整理しました。ふるさと納税の旅行クーポンや早期割引プランと併用することで、ワンランク上の滞在をお得に実現できます。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse bg-white rounded-xl overflow-hidden border border-stone-200">
              <thead>
                <tr className="bg-stone-900 text-white font-bold">
                  <th className="p-3">宿名</th><th className="p-3">所在地</th><th className="p-3">アクセス</th><th className="p-3">駐車場</th><th className="p-3">評価</th><th className="p-3">最安目安</th><th className="p-3">予約</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">1. ホテル　インターコンチネンタル東京ベイ　ｂｙ　ＩＨＧ</td>
                <td className="p-3 text-stone-600">東京都港区海岸1-16-2</td>
                <td className="p-3 text-stone-600">浜松町</td>
                <td className="p-3 text-stone-600">有り　177台　3000円（税込）</td>
                <td className="p-3 font-bold text-amber-600">★4.61（4212件）</td>
                <td className="p-3 font-bold text-rose-600">¥19,334〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1799%2F1799.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">プラン確認</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 白馬五竜　ホテル　ステラベラ</td>
                <td className="p-3 text-stone-600">長野県北安曇郡白馬村神城22201-5</td>
                <td className="p-3 text-stone-600">白馬</td>
                <td className="p-3 text-stone-600">有り</td>
                <td className="p-3 font-bold text-amber-600">★4.43（48件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,555〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1844%2F1844.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">プラン確認</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 熱海温泉　湯の宿　平鶴（ひらつる）</td>
                <td className="p-3 text-stone-600">静岡県熱海市下多賀493</td>
                <td className="p-3 text-stone-600">網代</td>
                <td className="p-3 text-stone-600">有り　５０台　有料　乗用車1台1泊700円（税別）</td>
                <td className="p-3 font-bold text-amber-600">★4.54（1103件）</td>
                <td className="p-3 font-bold text-rose-600">¥14,200〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1854%2F1854.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">プラン確認</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. グランドニッコー東京　台場</td>
                <td className="p-3 text-stone-600">東京都港区台場2-6-1</td>
                <td className="p-3 text-stone-600">台場</td>
                <td className="p-3 text-stone-600">●宿泊者は1滞在￥2,000（税込）※予告なく変更となる場合がございます。</td>
                <td className="p-3 font-bold text-amber-600">★4.58（9840件）</td>
                <td className="p-3 font-bold text-rose-600">¥17,520〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1917%2F1917.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">プラン確認</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 三朝温泉　三朝館</td>
                <td className="p-3 text-stone-600">鳥取県東伯郡三朝町山田174</td>
                <td className="p-3 text-stone-600">倉吉</td>
                <td className="p-3 text-stone-600">有り　１００台</td>
                <td className="p-3 font-bold text-amber-600">★4.45（2254件）</td>
                <td className="p-3 font-bold text-rose-600">¥10,395〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1939%2F1939.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">プラン確認</a></td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-bold text-stone-900">🏨 注目宿のクチコミ・アクセス詳細</h3>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-2 text-xs text-stone-700 leading-relaxed">
              <h4 className="text-sm font-bold text-stone-900">1. ホテル　インターコンチネンタル東京ベイ　ｂｙ　ＩＨＧ（東京都・★4.61）</h4>
              <p><strong>【特徴】</strong>隅田川越しに広がる摩天楼とレインボーブリッジ輝く東京ベイの2つの景観が魅力のウォーターフロントホテル</p>
              <p><strong>【交通・駐車場】</strong>ゆりかもめ竹芝駅直結・JR浜松町駅徒歩8分・羽田空港から30分・成田空港リムジンバス120分。 ／ 駐車場：有り　177台　3000円（税込）</p>
              <p className="italic text-stone-600">💬 宿泊者レビュー：「誕生日記念誕生日記念でクラブラウンジにアクセスできるお部屋に泊まりました。リバービューでしたがスカイツリーが見えて夜景がとても綺麗でした。ラウンジでチェックイン後シャンパンとアフタヌーンティーを出…　2026-08-29 19:11:13投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=17」</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-2 text-xs text-stone-700 leading-relaxed">
              <h4 className="text-sm font-bold text-stone-900">2. 白馬五竜　ホテル　ステラベラ（長野県・★4.43）</h4>
              <p><strong>【特徴】</strong>信州白馬のモダンなホテル！巨大樽の露天風呂、２４H営業の天然温泉もあり。シェフこだわりのお食事も♪</p>
              <p><strong>【交通・駐車場】</strong>JR神城駅,白馬五竜バス停(送迎：要事前予約）安曇野ICより車で45分 ／ 駐車場：有り</p>
              <p className="italic text-stone-600">💬 宿泊者レビュー：「」</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-2 text-xs text-stone-700 leading-relaxed">
              <h4 className="text-sm font-bold text-stone-900">3. 熱海温泉　湯の宿　平鶴（ひらつる）（静岡県・★4.54）</h4>
              <p><strong>【特徴】</strong>熱海で最も海に近い貸切露天風呂【アンケート★4.5以上】海に浮かぶ露天風呂と源泉掛流し温泉が人気</p>
              <p><strong>【交通・駐車場】</strong>国道１３５号線を熱海より伊東方面へ７ｋｍ　ＪＲ伊東線網代駅下車徒歩５分　海は目の前　国道よりも海よりの温泉旅館 ／ 駐車場：有り　５０台　有料　乗用車1台1泊700円（税別）</p>
              <p className="italic text-stone-600">💬 宿泊者レビュー：「新鮮お刺身と潮騒香る露天風呂大好きな、お宿です。2年ぶり3回目の宿泊、今時の流行りオールインクルーシブとかお洒落ラウンジが有る訳じゃ無いけど...新鮮お刺身の夕飯やザ日本食の朝ご飯で幸せ、潮騒香る…　2026-10-10 15:17:13投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/hs/RmfmX/?f_hotel_no=18」</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-2 text-xs text-stone-700 leading-relaxed">
              <h4 className="text-sm font-bold text-stone-900">4. グランドニッコー東京　台場（東京都・★4.58）</h4>
              <p><strong>【特徴】</strong>東京湾ベイエリアに位置するランドマークホテル。エグゼクティブフロアやプレミアフロアがおすすめ！</p>
              <p><strong>【交通・駐車場】</strong>ゆりかもめで新橋より15分「台場駅」直結／羽田空港からリムジンバス約20分／品川駅からお台場レインボーバス約20分 ／ 駐車場：●宿泊者は1滞在￥2,000（税込）※予告なく変更となる場合がございます。</p>
              <p className="italic text-stone-600">💬 宿泊者レビュー：「さすがのサービスと安定のクオリティさすがニッコー様ですクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/1917?re…　2026-10-06 20:11:38投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/hs/RmfmX/?f_hotel_no=1917」</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-2 text-xs text-stone-700 leading-relaxed">
              <h4 className="text-sm font-bold text-stone-900">5. 三朝温泉　三朝館（鳥取県・★4.45）</h4>
              <p><strong>【特徴】</strong>多彩な湯処とあたたかなおもてなしの心が通う“にほんの宿”</p>
              <p><strong>【交通・駐車場】</strong>中国道院庄ＩＣ下車、国道１７９号利用７０分／倉吉駅～三朝温泉行バスにて約２０分・タクシーで約１５分 ／ 駐車場：有り　１００台</p>
              <p className="italic text-stone-600">💬 宿泊者レビュー：「ロビーの飲み物と大浴場の扉に改善希望気持ち良く滞在できました。ロビーの飲み物をもう少し充実してほしいです。大浴場の扉を自動で閉まるように改良してほしいです。閉めない人が多かったです。…　2026-09-01 13:00:25投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=1939&quot; cla」</p>
            </div>
          </div>
          <div className="space-y-3 pt-4 border-t border-stone-200">
            <h3 className="text-base font-bold text-stone-900">🗺️ 合わせて訪れたい日本の代表的観光名所ガイド</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-1">
              <h4 className="text-sm font-bold text-stone-900">📍 清水寺</h4>
              <p className="text-xs text-stone-600 leading-relaxed">「清水の舞台」で世界的に有名な古都京都の象徴。「清水の舞台から飛び下りる」の語源となった木造大舞台からの京都市街の眺望と音羽の滝が名高いです。</p>
            </div>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-1">
              <h4 className="text-sm font-bold text-stone-900">📍 函館山（夜景）</h4>
              <p className="text-xs text-stone-600 leading-relaxed">世界三大夜景の一つに数えられる絶景スポット。津軽海峡と函館湾に挟まれたくびれが生み出す、宝石をちりばめたような眩い夜景は一生に一度は見たい感動のロケーションです。</p>
            </div>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-1">
              <h4 className="text-sm font-bold text-stone-900">📍 横浜みなとみらい21</h4>
              <p className="text-xs text-stone-600 leading-relaxed">ランドマークタワーや大観覧車「コスモクロック21」、赤レンガ倉庫が立ち並ぶ近代都市リゾート。港町の海風を感じながらショッピングや夜景を楽しめます。</p>
            </div>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-1">
              <h4 className="text-sm font-bold text-stone-900">📍 国宝 姫路城（白鷺城）</h4>
              <p className="text-xs text-stone-600 leading-relaxed">鮮やかな白漆喰の城壁が羽ばたく白鷺のように美しい日本初のユネスコ世界文化遺産。大天守をはじめ保存状態が完璧な城郭建築の最高峰です。</p>
            </div>
            </div>
          </div>
        </section>

</div>
  );
}
