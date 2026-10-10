import json
import os

with open('src/data/ibusuki_vs_kirishima_hotels.json', 'r', encoding='utf-8') as f:
    hotels = json.load(f)

ibusuki_hotels = [h for h in hotels if h['area'] == 'ibusuki']
kirishima_hotels = [h for h in hotels if h['area'] == 'kirishima']

editorial_stories = {
    "12529": {
        "tagline": "元禄風呂と松林に抱かれる日本屈指の温泉ミュージアム宿",
        "description": "広大な日本庭園と松林の先に錦江湾を望む、指宿を象徴する名門「指宿白水館」。最大の特徴は、江戸の湯小屋文化を再現した圧巻の1,000坪大浴場「元禄風呂」と、館内に完備された本格砂むし温泉。波音を聞きながら温かい砂に包まれ、じんわりと汗を流した後に楽しむ美肌の湯は極上のひと言です。薩摩藩の歴史や美術品を展示する「薩摩伝承館」を併設し、夕食には黒豚や錦江湾の鮮魚、黒毛和牛を活かした贅沢な薩摩会席が供されます。"
    },
    "14502": {
        "tagline": "錦江湾の波打ち際！温泉熱で揚げる名物「砂焼き料理」と天空露天風呂",
        "description": "指宿の海岸沿いに佇み、海と温泉の一体感を極めた名旅館「吟松」。最上階の天空野天風呂からは、青く広がる錦江湾と大隅半島が一望でき、まるで海に浮かんでいるかのような開放感に包まれます。夕食の「砂焼き会席」では、テーブル中央に敷かれた温泉砂利と源泉の熱を利用し、目の前で温泉卵や竹酒、旬のさつま揚げを熱々に仕上げる唯一無二の演出が旅の夜を最高潮に盛り上げます。"
    },
    "790": {
        "tagline": "全室オーシャンビュー！目の前に広がる海と気軽な砂むしリゾート",
        "description": "錦江湾の波打ち際に建ち、客室の窓いっぱいに南国の海景が広がる「指宿シーサイドホテル」。館内に備えられた砂むし温泉では、潮風を感じながらじっくりとデトックスを堪能。展望大浴場からも行き交う船や朝陽を拝むことができ、南国情緒に浸る贅沢な時間を過ごせます。きびなごや黒豚しゃぶしゃぶなど、鹿児島の郷土料理を手頃な価格で満喫できるコスパの良さも大きな魅力です。"
    },
    "25134": {
        "tagline": "原生林の静寂と野生の鹿！標高700mの絶景貸切露天風呂に心洗われる宿",
        "description": "霧島連山の麓、広大な自然林に囲まれた高原の名宿「旅行人山荘」。宿の代名詞は、原生林の中に点在する4つの貸切露天風呂「赤松の湯」など。落ち葉が浮かぶ木漏れ日の湯船に浸かっていると、野生の鹿がふらりと姿を現す奇跡のような瞬間に出逢えます。湯の花がびっしり舞う自噴の単純硫黄泉と、肌に優しい単純温泉の2つの源泉を持ち、夜には標高700mから満天の星と錦江湾・桜島の夜景を見下ろす贅沢が叶います。"
    },
    "1285": {
        "tagline": "14の源泉と圧倒的な湧出量！巨大な庭園大浴場に圧巻の温泉ワンダーランド",
        "description": "坂本龍馬とお龍の新婚旅行の地としても知られる霧島温泉郷のシンボル「霧島ホテル」。名物は14本もの異なる源泉から毎分湧き出る豊富な湯を贅沢に注ぎ込んだ「硫黄谷庭園大浴場」。体育館ほどの広大なドーム空間に、硫黄泉・明礬泉・塩化物泉・鉄泉の4つの異なる泉質が一度に楽しめます。霧島の深山で育まれた黒豚しゃぶしゃぶや薩摩地鶏など、鹿児島の山の幸を詰め込んだ会席も格別です。"
    },
    "1276": {
        "tagline": "桜島を望むパノラマ展望温泉と鹿児島の美食を味わう森のオーベルジュ",
        "description": "霧島温泉郷の中心に位置し、霧島の大自然と美食をスタイリッシュに楽しむ「AUBEGIO 霧島観光ホテル」。高台に位置するため、展望風呂や足湯テラスからは遠く錦江湾に浮かぶ雄大な桜島をパノラマで望むことができます。源泉かけ流しの天然温泉はもちろん、地元契約農家から仕入れる新鮮野菜や極上の鹿児島黒豚・黒毛和牛を使った創作和洋会席が評判。館内には焼酎バーやカフェスペースも充実しています。"
    }
}

def render_hotel_cards(hotel_list, badge_bg, btn_bg, text_color):
    html = ""
    for h in hotel_list:
        no = str(h.get('hotelNo'))
        story = editorial_stories.get(no, {})
        tagline = story.get('tagline', '')
        desc = story.get('description', '')
        min_charge = int(h.get('hotelMinCharge') or 0)
        html += f'''
            <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="grid md:grid-cols-12 gap-6 p-6 sm:p-8">
                <div className="md:col-span-5 relative min-h-[220px] rounded-2xl overflow-hidden bg-stone-100">
                  <img
                    src="{h.get('hotelImageUrl') or '/images/no-image.jpg'}"
                    alt="{h.get('hotelName')}"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 {badge_bg} text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    {h.get('tag')}
                  </div>
                </div>
                <div className="md:col-span-7 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-stone-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" /> {h.get('address1')}{h.get('address2')}
                      </span>
                      <span className="text-xs font-bold {text_color} bg-stone-100 px-2.5 py-0.5 rounded-full">
                        ★ {h.get('reviewAverage')}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 leading-tight">
                      {h.get('hotelName')}
                    </h3>
                    <p className="{text_color} text-xs font-bold">
                      {tagline}
                    </p>
                    <p className="text-stone-700 text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4">
                    <div className="text-xs text-stone-500">
                      目安料金: <strong className="text-stone-900 text-lg font-black">¥{min_charge:,}</strong>〜/名
                    </div>
                    <a
                      href="{h.get('hotelInformationUrl')}"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 {btn_bg} text-white font-bold text-xs sm:text-sm rounded-xl transition shadow"
                    >
                      <span>楽天トラベルでプランを見る</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>'''
    return html

ibusuki_cards = render_hotel_cards(ibusuki_hotels, "bg-amber-600", "bg-amber-600 hover:bg-amber-700", "text-amber-800")
kirishima_cards = render_hotel_cards(kirishima_hotels, "bg-emerald-700", "bg-emerald-700 hover:bg-emerald-800", "text-emerald-800")

template = """import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Flame,
  Waves,
  Mountain,
  Compass,
  CheckCircle2,
  Calendar,
  Sparkles,
  MapPin,
  Utensils,
  Car,
  Clock,
  HeartHandshake
} from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/ibusuki-vs-kirishima-which-stay/" },
  title: "指宿 vs 霧島 どっちに泊まる？泉質・砂むし・絶景・観光スタイルで選ぶ鹿児島の二大温泉地比較ガイド",
  description: "鹿児島旅行で迷う「指宿温泉」と「霧島温泉」はどっちがおすすめ？海沿いの天然砂むし温泉と開聞岳ドライブの指宿か、原生林の硫黄泉と霧島神宮パワースポットの霧島か。泉質・宿タイプ・グルメ・アクセスをプロ目線で徹底比較！",
  keywords: ["指宿 霧島 どっち", "指宿温泉 霧島温泉 比較", "鹿児島 温泉 おすすめ", "指宿 白水館", "霧島 旅行人山荘", "砂むし温泉", "鹿児島旅行 モデルコース"],
  openGraph: {
    title: "指宿 vs 霧島 どっちに泊まる？泉質・砂むし・絶景・観光スタイルで選ぶ鹿児島の二大温泉地比較ガイド",
    description: "鹿児島旅行で迷う「指宿温泉」と「霧島温泉」はどっちがおすすめ？海沿いの天然砂むし温泉と開聞岳ドライブの指宿か、原生林の硫黄泉と霧島神宮パワースポットの霧島か。泉質・宿タイプ・グルメ・アクセスをプロ目線で徹底比較！",
    url: "https://croud-travel.pages.dev/ibusuki-vs-kirishima-which-stay/",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "鹿児島 指宿温泉と霧島温泉の比較"
      }
    ]
  }
};

export default function IbusukiVsKirishimaPage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "指宿 vs 霧島 どっちに泊まる？泉質・砂むし・絶景・観光スタイルで選ぶ鹿児島の二大温泉地比較ガイド",
    "description": "鹿児島旅行で迷う「指宿温泉」と「霧島温泉」はどっちがおすすめ？海沿いの天然砂むし温泉と開聞岳ドライブの指宿か、原生林の硫黄泉と霧島神宮パワースポットの霧島か。泉質・宿タイプ・グルメ・アクセスをプロ目線で徹底比較！",
    "url": "https://croud-travel.pages.dev/ibusuki-vs-kirishima-which-stay/",
    "publisher": {
      "@type": "Organization",
      "name": "クラドトラベル編集部",
      "logo": { "@type": "ImageObject", "url": "https://croud-travel.pages.dev/icon.png" }
    }
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "指宿と霧島、温泉旅行なら結局どっちがおすすめ？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "「唯一無二のデトックス体験や南国オーシャンビューを楽しみたいなら指宿」、「白濁した濃厚な硫黄泉や森林浴、神秘的な歴史・パワースポットを重視するなら霧島」がおすすめです。日程に余裕があれば、鹿児島空港を拠点に霧島で1泊、南下して指宿で1泊の2泊3日ハシゴ旅が最高の鹿児島満喫コースです。"
        }
      },
      {
        "@type": "Question",
        "name": "鹿児島空港からのアクセスはどちらが便利ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "鹿児島空港からは「霧島温泉」が圧倒的に近いです。空港から車や直行バスで約30〜40分で到着します。一方、「指宿温泉」は空港から車や高速バスで約1時間40分〜2時間程度かかります。初日に飛行機で遅く到着する場合は霧島、鹿児島市内観光（桜島・天文館）と組み合わせるなら指宿がスムーズです。"
        }
      },
      {
        "@type": "Question",
        "name": "指宿の砂むし温泉と霧島の泥湯温泉の違いは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "指宿の「砂むし温泉」は、海岸から湧き出る温泉熱で温められた砂を体全体にかける温熱療法で、通常の入浴の約3〜4倍のデトックス効果と血流改善が期待されます。霧島の「泥湯」は、温泉成分を含んだ天然の微細な泥を肌に塗りパックする美容体験で、古い角質を落としてツルツルの美肌へと導く効果があります。"
        }
      }
    ]
  };

  return (
    <article className="min-h-screen bg-stone-50 text-stone-900 antialiased font-sans selection:bg-amber-100 selection:text-amber-900 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* Hero Header */}
      <header className="relative w-full bg-stone-900 text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>鹿児島二大温泉地・徹底比較エディトリアル</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-amber-50">
            指宿 vs 霧島 どっちに泊まる？<br className="hidden sm:inline" />
            泉質・砂むし・絶景・観光スタイルで選ぶ鹿児島の極上温泉旅
          </h1>
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-3xl">
            南国の潮風と海岸線に湧く天然砂むし温泉の「指宿（いぶすき）」か、原生林の山懐に白濁の硫黄泉が自噴する天孫降臨の地「霧島（きりしま）」か。鹿児島を代表する二大温泉地それぞれの圧倒的な魅力と、あなたに最適な宿選びを紐解きます。
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">

        {/* GEO Summary Answer Box for Bing/ChatGPT/Google */}
        <section className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-2 text-amber-900 font-black text-lg sm:text-xl mb-4">
            <CheckCircle2 className="w-6 h-6 text-amber-600 shrink-0" />
            <span>【結論】指宿と霧島、あなたはどっちを選ぶべき？</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 text-sm sm:text-base leading-relaxed text-stone-800">
            <div className="bg-white p-5 rounded-2xl border border-amber-200 space-y-2">
              <h3 className="font-bold text-amber-800 flex items-center gap-1.5 text-lg">
                <Waves className="w-5 h-5 text-amber-600" /> 指宿温泉が向いている人
              </h3>
              <ul className="space-y-1.5 text-stone-700 text-sm">
                <li>✔ 世界唯一の「天然砂むし温泉」で極上のデトックスと発汗を味わいたい</li>
                <li>✔ 錦江湾や開聞岳（薩摩富士）を望む開放的なオーシャンビューが好き</li>
                <li>✔ 知覧特攻平和会館や池田湖、長崎鼻など海沿いのドライブを満喫したい</li>
                <li>✔ 鹿児島市内（桜島フェリー・黒豚とんかつ）とセットで旅を組み立てたい</li>
              </ul>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-amber-200 space-y-2">
              <h3 className="font-bold text-emerald-800 flex items-center gap-1.5 text-lg">
                <Mountain className="w-5 h-5 text-emerald-600" /> 霧島温泉が向いている人
              </h3>
              <ul className="space-y-1.5 text-stone-700 text-sm">
                <li>✔ 乳白色の濃厚な硫黄泉や、原生林に佇む野趣あふれる秘湯露天が好き</li>
                <li>✔ 鹿児島空港からのアクセスを最優先し、移動疲れなく宿に入りたい</li>
                <li>✔ 国宝・霧島神宮や霧島連山の雄大な自然からパワーをもらいたい</li>
                <li>✔ 森に佇むプライベート離れ宿や上質なオーベルジュで静かに籠もりたい</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Detailed Comparison Table */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-stone-900 flex items-center gap-2">
            <Compass className="w-7 h-7 text-amber-600" /> 指宿と霧島の徹底スペック比較
          </h2>
          <div className="overflow-x-auto bg-white rounded-2xl border border-stone-200 shadow-xs">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                  <th className="p-4 w-1/4">比較項目</th>
                  <th className="p-4 w-3/8 text-amber-900 bg-amber-50/50">指宿温泉（いぶすき）</th>
                  <th className="p-4 w-3/8 text-emerald-900 bg-emerald-50/50">霧島温泉（きりしま）</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-700">
                <tr>
                  <td className="p-4 font-bold bg-stone-50">ロケーション</td>
                  <td className="p-4">薩摩半島最南端・錦江湾沿岸（温暖な南国リゾート）</td>
                  <td className="p-4">霧島連山の山麓・高原地帯（標高600〜800mの清涼な森）</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-stone-50">主な泉質・特徴</td>
                  <td className="p-4">ナトリウム塩化物泉（保温・美肌効果抜群、天然砂むし）</td>
                  <td className="p-4">単純硫黄泉・明礬泉・泥湯（濃厚な白濁湯と硫黄の香気）</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-stone-50">空港・駅アクセス</td>
                  <td className="p-4">鹿児島中央駅から特急「指宿のたまて箱」で約50分<br/>空港から車で約100分</td>
                  <td className="p-4">鹿児島空港から車・直行バスでわずか約30〜40分<br/>霧島温泉駅からバス約30分</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-stone-50">代表的グルメ</td>
                  <td className="p-4">砂焼き会席、錦江湾の旬魚・きびなご、温たまらん丼</td>
                  <td className="p-4">鹿児島黒豚しゃぶしゃぶ、霧島サーモン、薩摩地鶏炭火焼</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-stone-50">主な観光スポット</td>
                  <td className="p-4">砂むし会館 砂楽、西大山駅、開聞岳、池田湖、知覧</td>
                  <td className="p-4">国宝 霧島神宮、大浪池、丸尾滝、高千穂河原、霧島アートの森</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 1: Ibusuki Hotels */}
        <section className="space-y-8">
          <div className="border-b-2 border-amber-600 pb-3">
            <div className="text-xs font-bold text-amber-700 tracking-wider uppercase">Ibusuki Hot Springs</div>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
              指宿温泉で泊まるべき厳選名宿3選
            </h2>
            <p className="text-stone-600 text-sm mt-1">
              楽天トラベル公式連携の最新空室状況・宿泊プランをリアルタイム反映
            </p>
          </div>

          <div className="grid gap-8">
            __IBUSUKI_CARDS__
          </div>
        </section>

        {/* Section 2: Kirishima Hotels */}
        <section className="space-y-8">
          <div className="border-b-2 border-emerald-600 pb-3">
            <div className="text-xs font-bold text-emerald-700 tracking-wider uppercase">Kirishima Hot Springs</div>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
              霧島温泉で泊まるべき厳選名宿3選
            </h2>
            <p className="text-stone-600 text-sm mt-1">
              原生林の秘湯から14源泉の温泉ワンダーランドまで、森と星空に抱かれる名宿
            </p>
          </div>

          <div className="grid gap-8">
            __KIRISHIMA_CARDS__
          </div>
        </section>

        {/* Section 3: Recommended 2-Night Itinerary */}
        <section className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-950 text-white rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-400 bg-amber-400/20 px-3 py-1 rounded-full inline-block">
              王道モデルコース
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              迷ったらこれ！2泊3日で指宿と霧島を両方ハシゴする至福の鹿児島満喫ルート
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              「どちらか一方に絞りきれない！」という方は、鹿児島空港を起点に霧島と指宿を1泊ずつ巡るゴールデンルートが最もおすすめです。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 pt-4">
            <div className="bg-white/10 rounded-2xl p-5 border border-white/10 space-y-2">
              <span className="text-amber-400 font-bold text-xs">DAY 1</span>
              <h4 className="font-bold text-base text-white">空港到着 ➔ 霧島ステイ</h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                鹿児島空港から車で霧島神宮へ参拝。原生林の秘湯旅館（旅行人山荘など）にチェックインし、濃厚な硫黄泉と黒豚ディナーを堪能。
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-5 border border-white/10 space-y-2">
              <span className="text-amber-400 font-bold text-xs">DAY 2</span>
              <h4 className="font-bold text-base text-white">桜島フェリー ➔ 指宿へ南下</h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                桜島を望みながら鹿児島市内へ。名物白熊や黒豚ランチを楽しんだ後、海沿いを指宿へ。白水館や吟松で波音と砂むし温泉を満喫。
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-5 border border-white/10 space-y-2">
              <span className="text-amber-400 font-bold text-xs">DAY 3</span>
              <h4 className="font-bold text-base text-white">知覧散策 ➔ 空港へ</h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                朝の錦江湾を眺め、開聞岳ドライブや知覧武家屋敷群・特攻平和会館を巡り、九州自動車道で鹿児島空港から帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* HubRelatedPosts */}
        <section className="pt-6">
          <HubRelatedPosts currentSlug="ibusuki-vs-kirishima-which-stay" />
        </section>

      </main>
    </article>
  );
}
"""

final_code = template.replace('__IBUSUKI_CARDS__', ibusuki_cards).replace('__KIRISHIMA_CARDS__', kirishima_cards)

os.makedirs('src/app/ibusuki-vs-kirishima-which-stay', exist_ok=True)
with open('src/app/ibusuki-vs-kirishima-which-stay/page.tsx', 'w', encoding='utf-8') as f:
    f.write(final_code)

print("Created src/app/ibusuki-vs-kirishima-which-stay/page.tsx successfully!")
