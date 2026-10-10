import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '伊東温泉をふるさと納税でお得に旅する！相模湾の極上金目鯛＆豊富な自家源泉！東海館の風情薫る名湯宿ガイド｜青山やまと・ホテルラヴィエ川良・淘心庵米屋',
  description: '毎分3万リットル以上の湯量を誇る伊豆屈指の名湯・伊東温泉を楽天ふるさと納税でお得に旅する！昭和初期の木造建築・東海館のレトロな風情、相模湾の獲れたて金目鯛の姿煮や伊勢海老の美食、自家源泉掛け流しの名旅館を徹底紹介。青山やまと、ホテルラヴィエ川良、淘心庵米屋の魅力とクーポン活用法を網羅。',
  keywords: '伊東温泉 ふるさと納税,伊東 金目鯛 旅館,青山やまと ふるさと納税,伊東温泉 クーポン 宿泊,伊東市 ふるさと納税 楽天トラベル',
  openGraph: {
    title: '伊東温泉をふるさと納税でお得に旅する！相模湾の極上金目鯛＆豊富な自家源泉！東海館の風情薫る名湯宿ガイド｜青山やまと・ホテルラヴィエ川良・淘心庵米屋',
    description: '毎分3万リットル以上の湯量を誇る伊豆屈指の名湯・伊東温泉を楽天ふるさと納税でお得に旅する！昭和初期の木造建築・東海館のレトロな風情、相模湾の獲れたて金目鯛の姿煮や伊勢海老の美食、自家源泉掛け流しの名旅館を徹底紹介。青山やまと、ホテルラヴィエ川良、淘心庵米屋の魅力とクーポン活用法を網羅。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-ito-onsen-seafood-historic-stay',
  },
  alternates: {
    canonical: "https://croud-travel.pages.dev/furusato-tax-ito-onsen-seafood-historic-stay/",
  },
};

export default function FurusatoTaxArticle() {

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【伊東温泉×ふるさと納税】相模湾の極上金目鯛＆豊富な自家源泉！東海館の風情薫る名湯宿ガイド｜青山やまと・ホテルラヴィエ川良・淘心庵米屋",
    "description": "毎分3万リットル以上の湯量を誇る伊豆屈指の名湯・伊東温泉を楽天ふるさと納税でお得に旅する！昭和初期の木造建築・東海館のレトロな風情、相模湾の獲れたて金目鯛の姿煮や伊勢海老の美食、自家源泉掛け流しの名旅館を徹底紹介。青山やまと、ホテルラヴィエ川良、淘心庵米屋の魅力とクーポン活用法を網羅。",
    "url": "https://croud-travel.pages.dev/furusato-tax-ito-onsen-seafood-historic-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【伊東温泉×ふるさと納税】相模湾の極上金目鯛＆豊富な自家源泉！東海館の風情薫る名湯宿ガイド｜青山やまと・ホテルラヴィエ川良・淘心庵米屋", "item": "https://croud-travel.pages.dev/furusato-tax-ito-onsen-seafood-historic-stay/" }
    ]
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 leading-relaxed font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"「伊東温泉 青山やまと」へのアクセスや移動方法について","acceptedAnswer":{"@type":"Answer","text":"「伊東温泉 青山やまと」へは、JR伊東駅より車で10分。最寄りの伊東駅からの経路案内も充実しています。"}},{"@type":"Question","name":"「伊東温泉 青山やまと」の魅力や予約時のポイントは？","acceptedAnswer":{"@type":"Answer","text":"「伊東温泉 青山やまと」は『100%源泉掛け流し温泉とこだわりの部屋食が魅力。伊東エリア屈指のプレミアム宿。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。"}},{"@type":"Question","name":"プラン選びや宿の比較で意識すべき点は？","acceptedAnswer":{"@type":"Answer","text":"「伊東温泉 青山やまと」と「伊東温泉 ホテル ラヴィエ川良」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。"}}]}) }}
      />
      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-amber-50 py-16 px-4 md:px-8 border-b border-amber-900/50 shadow-2xl">
        <div className="max-w-4xl mx-auto space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-wider border border-amber-400/30 mb-2">
            <span>楽天ふるさと納税 宿泊クーポン完全攻略</span>
            <span>•</span>
            <span>自治体公認 宿泊割引</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white font-serif leading-tight">伊東温泉をふるさと納税でお得に旅する！相模湾の極上金目鯛＆豊富な自家源泉！東海館の風情薫る名湯宿ガイド｜青山やまと・ホテルラヴィエ川良・淘心庵米屋</h1>
          <p className="text-stone-300 text-sm md:text-base max-w-2xl mx-auto pt-2 leading-relaxed">
            毎分3万リットル以上の湯量を誇る伊豆屈指の名湯・伊東温泉を楽天ふるさと納税でお得に旅する！昭和初期の木造建築・東海館のレトロな風情、相模湾の獲れたて金目鯛の姿煮や伊勢海老の美食、自家源泉掛け流しの名旅館を徹底紹介。青山やまと、ホテルラヴィエ川良、淘心庵米屋の魅力とクーポン活用法を網羅。
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-400">
            <span>対象自治体: <strong className="text-amber-300">静岡県伊東市</strong></span>
            <span>•</span>
            <span>還元率: 寄付額の最大30%</span>
            <span>•</span>
            <span>有効期限: クーポン獲得から3年間</span>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 border-l-4 border-amber-700 pl-4">
            豊富な湯量を誇る名湯、相模湾が育む金目鯛の旨味、昭和レトロの川辺散歩——伊東温泉で過ごす贅沢ステイとふるさと納税ガイド
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            静岡県・伊豆半島の東海岸に位置する伊東温泉は、別府・熱海と並ぶ日本屈指の湯量を誇る名湯です。市内には数百本もの源泉が存在し、毎分3万リットルを超える豊富な温泉が街中を潤しています。松川沿いには大正から昭和初期にかけて建てられた木造三階建ての温泉旅館「東海館」をはじめとする歴史的建造物が残り、夜になると川沿いの遊歩道に竹あかりが灯り、ノスタルジックな温泉情緒を醸し出します。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            伊東のもう一つの大きな醍醐味が、目の前に広がる相模湾の新鮮な海の幸です。特に脂ののった「金目鯛」の姿煮やしゃぶしゃぶ、伊勢海老、アワビなどの高級魚介は、全国の食通を唸らせる絶品。都心から特急踊り子号で約1時間40分というアクセスの良さも魅力です。静岡県伊東市へのふるさと納税を利用すれば、30%相当のトラベルクーポンにより高級旅館への滞在がぐっと身近になり、贅を尽くした伊豆旅行をお得に満喫できます。
          </p>
          <div className="bg-amber-50 rounded-2xl p-4 sm:p-5 border border-amber-200/80 text-amber-950 text-xs sm:text-sm space-y-2">
            <h3 className="font-bold text-amber-900 flex items-center gap-2">
              <span>💡</span> この記事でわかること
            </h3>
            <ul className="grid sm:grid-cols-2 gap-2 text-stone-800 list-disc list-inside">
              <li>ふるさと納税で泊まれる名門宿のリアルな魅力と特徴</li>
              <li>楽天トラベルクーポンを使った最大割引予約の手順</li>
              <li>失敗しない現地観光モデルルート＆名物グルメ</li>
              <li>予約済みでも間に合う「クーポンあとから適用」のやり方</li>
            </ul>
          </div>
        </section>

        {/* 楽天トラベル クーポン獲得バナー導線 */}
        <div className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white rounded-2xl p-6 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-xs uppercase tracking-widest font-bold text-amber-200">Rakuten Travel Furusato Tax</p>
            <h3 className="text-lg sm:text-xl font-bold font-serif">静岡県伊東市のふるさと納税クーポンをチェック</h3>
            <p className="text-xs text-rose-100">寄付額の最大30%オフ！3年間有効・予約済み日程にも適用可能</p>
          </div>
          <a
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white text-rose-700 font-extrabold px-6 py-3 rounded-xl shadow hover:bg-stone-100 transition text-sm flex items-center gap-1.5"
          >
            <span>クーポン一覧を見る</span>
            <span>→</span>
          </a>
        </div>

        {/* 厳選ホテル徹底解剖 */}
        <section className="space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
              ふるさと納税で泊まる厳選名宿3選
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm">
              実際に楽天トラベルで圧倒的な高評価を獲得している名門ホテル・老舗旅館をピックアップ
            </p>
          </div>


          {/* ホテル 1 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/1376/1376.jpg"
                alt="伊東温泉　青山やまと"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.58（口コミ 635件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">静岡県伊東市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  伊東温泉　青山やまと
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  伊東の街と海を見下ろす丘の上の名門和風旅館！100％源泉掛け流しの展望露天風呂と金目鯛姿煮の極上会席
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  伊東温泉 青山やまと —— 静寂の高台に佇む癒しの数寄屋宿。細やかなもてなしと絶景パノラマ温泉
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 街並みと相模湾を一望する展望大浴場＆露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">伊東市街を見下ろす高台に位置し、大浴場や露天風呂からは街の灯りと青い海が広がります。肌触り柔らかな弱アルカリ性単純泉がたっぷりと注がれ、朝夕で異なる絶景湯浴みを楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 選べるメインと秘伝のタレで煮付けた名物金目鯛
                    </h5>
                    <p className="text-stone-600 leading-relaxed">夕食は伊豆の味覚が詰まった本格会席。丸ごと一尾じっくり煮付けた金目鯛の姿煮は、濃厚な甘辛タレとふっくら柔らかな白身の旨味が絶品で、多くの宿泊者を虜にしています。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 選べる浴衣とアロマサービス、上質なプライベート空間
                    </h5>
                    <p className="text-stone-600 leading-relaxed">女性用色浴衣の無料サービスやお部屋でのアロマ芳香器の用意など、女性や記念日旅行に嬉しいきめ細やかな配慮。バリアフリー設計の客室も備え、三世代旅行にも最適です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.58点。丘の上からの眺望の素晴らしさ、スタッフの洗練されたおもてなし、そして金目鯛をはじめとする料理の美味しさに絶賛の口コミが寄せられています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 静岡県 伊東市岡203</div>
                <div>最寄り駅・アクセス: JR伊東駅より車で10分。13:30～17:30は30分間隔で送迎有り（予約不要）</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥14,300〜</span></div>
                <div>ホテル番号: No.1376</div>
              </div>

              {/* 予約プラン確認ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1376%2F1376.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold py-3 px-6 rounded-xl shadow transition text-sm flex items-center justify-center gap-2"
                >
                  <span>楽天トラベルで空室・プランを見る</span>
                  <span>→</span>
                </a>
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold py-3 px-6 rounded-xl transition text-sm flex items-center justify-center gap-1.5"
                >
                  <span>ふるさと納税クーポン獲得</span>
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/14377/14377.jpg"
                alt="伊東温泉　ホテル　ラヴィエ川良"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.01（口コミ 1982件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">静岡県伊東市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  伊東温泉　ホテル　ラヴィエ川良
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  毎分660リットル・8本の自家源泉を贅沢に満喫！アワビや金目鯛が並ぶ豪華海鮮バイキングと湯量自慢の大型旅館
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  伊東温泉 ホテルラヴィエ川良 —— 自家源泉の湯量とバイキングの贅沢。ファミリーやグループに愛される王道温泉ホテル
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 8本の自家源泉から湧き出る毎分660リットルの名湯
                    </h5>
                    <p className="text-stone-600 leading-relaxed">館内大浴場や露天風呂、サウナはもちろん、全客室の蛇口やお風呂からも天然温泉が出る贅沢な湯量。湯量豊富な伊東温泉ならではの贅沢を体感できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> アワビ・金目鯛・ステーキが食べ放題の豪華ディナーバイキング
                    </h5>
                    <p className="text-stone-600 leading-relaxed">ライブキッチンで焼き上げる牛ステーキや新鮮な刺身、季節限定の豪華海鮮料理が並ぶ人気のバイキング。好きなものを心ゆくまで味わえる楽しさが宿泊者の満足度を高めています。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 伊東駅から徒歩約5分の好立地と充実の館内施設
                    </h5>
                    <p className="text-stone-600 leading-relaxed">伊東駅から徒歩圏内に位置し、観光や街歩きの拠点に最適。館内には室内温水プール（季節営業）やカラオケ、売店なども完備され、幅広い世代で楽しく過ごせます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.01点、レビュー約2000件。湯量豊富な温泉の心地よさ、バイキングの充実度、駅からのアクセスの良さで、家族旅行やグループ旅行から根強い人気を集めています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 静岡県 伊東市竹の内1-1-3</div>
                <div>最寄り駅・アクセス: JR伊東線「伊東駅」下車 徒歩７分／車で東名高速沼津ICから1時間20分・厚木ICから1時間40分／送迎バスあり</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥5,000〜</span></div>
                <div>ホテル番号: No.14377</div>
              </div>

              {/* 予約プラン確認ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14377%2F14377.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold py-3 px-6 rounded-xl shadow transition text-sm flex items-center justify-center gap-2"
                >
                  <span>楽天トラベルで空室・プランを見る</span>
                  <span>→</span>
                </a>
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold py-3 px-6 rounded-xl transition text-sm flex items-center justify-center gap-1.5"
                >
                  <span>ふるさと納税クーポン獲得</span>
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/29763/29763.jpg"
                alt="淘心庵　米屋（共立リゾート）"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.83（口コミ 539件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">静岡県伊東市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  淘心庵　米屋（共立リゾート）
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  竹林の小径に佇む全十七室の大人の隠れ家！全室源泉掛け流し客室露天風呂と本格会席料理を味わう美食料亭旅館
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  淘心庵 米屋（共立リゾート） —— 竹林の静寂と優美な数寄屋建築。プライベートな湯浴みと四季折々の料亭懐石
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 全室に源泉掛け流しの専用風呂を完備した贅沢空間
                    </h5>
                    <p className="text-stone-600 leading-relaxed">客室はわずか17室。すべての部屋に天然温泉を引いた客室露天風呂または半露天風呂が備えられ、竹林の揺れる音を聞きながら誰にも邪魔されない至極の入浴を楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 旬の味覚を繊細に盛り付けた本格料亭会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">夕食は落ち着いた個室風のお食事処で提供。相模湾の新鮮な地魚や旬の野菜を熟練の料理人が一皿一皿丁寧に仕上げ、目と舌の両方で愉しむ贅沢なひとときを約束します。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 竹林を望む大浴場と共立リゾート名物の夜鳴きそば
                    </h5>
                    <p className="text-stone-600 leading-relaxed">大浴場や無料の貸切風呂も完備。湯上がり処でのアイスやドリンクサービス、夜食のあっさり醤油ラーメン「夜鳴きそば」など、嬉しいおもてなしが充実しています。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.83点の高評価。全室客室風呂のプライベート感、竹林庭園の静けさ、スタッフの丁寧な接客、そして料理の完成度の高さが絶賛され、記念日ステイの定番宿として選ばれています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 静岡県 伊東市鎌田280</div>
                <div>最寄り駅・アクセス: 伊東駅より無料送迎　14時半15時半16時半17時半／東名厚木ＩＣ→小田原厚木道路小田原西ＩＣ→Ｒ135にて約45ｋｍ</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥23,650〜</span></div>
                <div>ホテル番号: No.29763</div>
              </div>

              {/* 予約プラン確認ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29763%2F29763.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold py-3 px-6 rounded-xl shadow transition text-sm flex items-center justify-center gap-2"
                >
                  <span>楽天トラベルで空室・プランを見る</span>
                  <span>→</span>
                </a>
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold py-3 px-6 rounded-xl transition text-sm flex items-center justify-center gap-1.5"
                >
                  <span>ふるさと納税クーポン獲得</span>
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* 周辺観光・グルメガイド */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 border-l-4 border-amber-700 pl-4">
            伊東温泉街・大室山＆城ヶ崎海岸観光モデルルート
          </h2>
          <div className="grid gap-4">

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 東海館の見学と松川遊歩道の川端散策
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">伊東温泉の中心を流れる松川沿いに佇む「東海館」は、昭和3年に建てられた貴重な木造建築。職人が腕を競った銘木や欄間の彫刻、三階の展望楼から眺める街並みなど見応え抜群です。夜の竹あかりライトアップも幻想的です。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 大室山のリフトと城ヶ崎海岸の門脇吊橋
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">伊東温泉から少し足を伸ばせば、すり鉢状の美しい山容を誇る「大室山」へ。リフトで山頂に登ると富士山や伊豆諸島を一望する360度パノラマが広がります。また、断崖絶壁に架かる「城ヶ崎海岸の門脇吊橋」のスリルと絶景も必見です。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 伊東マリンタウンと伊豆高原スイーツめぐり
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">海沿いの道の駅「伊東マリンタウン」では、足湯に浸かりながらマリーナを眺めたり、海鮮丼や名物の干物をお土産に購入できます。伊豆高原エリアにはお洒落なカフェや美術館が点在し、女子旅やドライブにも最適です。</p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              静岡県伊東市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 1: 伊東市の返礼品「楽天トラベルクーポン」を取得</div>
              <p className="text-stone-200 leading-relaxed">楽天ふるさと納税で「静岡県伊東市」のトラベルクーポン（寄付額の30%相当補助）を申し込みます。寄付完了後、即座に楽天アカウントにクーポンが付与されます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 2: 3年間の有効期間内で週末や連休の旅行を計画</div>
              <p className="text-stone-200 leading-relaxed">有効期間が3年間あるため、金目鯛が最も脂の乗る冬期や、海が心地よい夏休み、連休のドライブ旅行など、自分の都合に合わせて予約できます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 3: 楽天トラベル予約画面でクーポンを適用して即時値引き</div>
              <p className="text-stone-200 leading-relaxed">青山やまと、ホテルラヴィエ川良、淘心庵米屋などの対象宿を予約する際、確認画面でクーポンを選択。宿泊代金から30%相当額がダイレクトに割り引かれます。</p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-amber-500 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg hover:opacity-95 transition"
            >
              <span>楽天ふるさと納税トラベルクーポンを獲得する</span>
              <span>→</span>
            </a>
          </div>
        </section>

        {/* 内部リンク・ハブ導線 */}
        <section className="border-t border-stone-200 pt-8 space-y-4">
          <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900">
            関連するふるさと納税トラベル特集
          </h3>
          <ul className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-600">
            <li>
              <Link href="/travel-savings-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> ふるさと納税×旅行 完全攻略ハブページトップ
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-travel-after-booking-discount-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 予約済みでも間に合う！楽天トラベル「あとから適用」ガイド
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-travel-beginners-complete-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 超初心者向け ふるさと納税で旅行に安く泊まるマニュアル
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-gero-onsen-bihada-luxury-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 日本三名泉・下呂温泉 美肌の湯名宿ステイ特集
              </Link>
            </li>
          </ul>
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
              【1泊2日】伊東温泉 青山やまとを拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> 伊東駅よりアクセス。JR伊東駅より車で10分。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「伊東温泉 青山やまと」にチェックイン。100%源泉掛け流し温泉とこだわりの部屋食が魅力。伊東エリア屈指のプレミアム宿。などの宿の特徴に期待を高めつつ客室へ。</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> 「伊東温泉 青山やまと」の湯処へ。100%源泉掛け流し温泉とこだわりの部屋食が魅力。伊東エリア屈指のプレとともに、夕暮れの特別な寛ぎを満喫。</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> 「伊東温泉 青山やまと」でいただく旬の夕食。地場産の味覚を取り入れたおもてなし料理を五感でじっくり味わう贅沢なひととき。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜周辺散策と帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の光が差し込む「伊東温泉 青山やまと」の湯船へ。清々しい空気の中で手足を伸ばし、心地よい目覚めを迎える。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 「伊東温泉 青山やまと」こだわりの朝食を堪能。炊きたてのごはんや身体に優しい料理で、一日のエネルギーをチャージ。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後は近隣エリアを観光。本記事でご紹介した「伊東温泉 ホテル ラヴィエ川良」の周辺スポットや名産店に立ち寄り、お土産を選んで帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と伊東温泉 青山やまとの滞在ポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「伊東温泉 青山やまと」へのアクセスや移動方法について</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「伊東温泉 青山やまと」へは、JR伊東駅より車で10分。最寄りの伊東駅からの経路案内も充実しています。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「伊東温泉 青山やまと」の魅力や予約時のポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「伊東温泉 青山やまと」は『100%源泉掛け流し温泉とこだわりの部屋食が魅力。伊東エリア屈指のプレミアム宿。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. プラン選びや宿の比較で意識すべき点は？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「伊東温泉 青山やまと」と「伊東温泉 ホテル ラヴィエ川良」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。
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
                href="/prefectures/shiga"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                滋賀県の宿・温泉
              </Link>
              <Link
                href="/prefectures/saga"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                佐賀県の宿・温泉
              </Link>
              <Link
                href="/prefectures/osaka"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                大阪府の宿・温泉
              </Link>
              <Link
                href="/prefectures/hiroshima"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                広島県の宿・温泉
              </Link>
            </div>
          
      <HubRelatedPosts currentSlug="furusato-tax-ito-onsen-seafood-historic-stay" />
</div>
        </section>

      </main>
  );
}
