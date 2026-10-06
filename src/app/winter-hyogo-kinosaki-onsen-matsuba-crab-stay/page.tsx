import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Coffee, ShieldCheck, 
  Award, Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Info, Heart 
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11月解禁！城崎温泉の青タグ津居山ガニ】名物7つの外湯めぐりと極上活ズワイガニ会席宿5選",
  description: "11月6日のカニ漁解禁で熱狂に包まれる関西随一の名湯・城崎温泉！地元・津居山港直送の青いタグ付き活松葉ガニ（カニ刺し・焼きガニ・茹で姿ガニ・カニすき・甲羅酒）フルコースと、雪舞う柳並木を浴衣と下駄で歩く名物「7つの外湯めぐり」を堪能する至福の冬旅。",
  keywords: '城崎温泉 カニ 旅館, 城崎温泉 松葉ガニ 宿, 津居山ガニ 宿泊, 城崎温泉 外湯めぐり ホテル, 兵庫 11月 12月 旅行, 冬の城崎温泉, カニフルコース 旅館',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-hyogo-kinosaki-onsen-matsuba-crab-stay/",
  },
  openGraph: {
    title: "【11月解禁！城崎温泉の青タグ津居山ガニ】名物7つの外湯めぐりと極上活ズワイガニ会席宿5選",
    description: "11月6日のカニ漁解禁で熱狂に包まれる関西随一の名湯・城崎温泉！地元・津居山港直送の青いタグ付き活松葉ガニ（カニ刺し・焼きガニ・茹で姿ガニ・カニすき・甲羅酒）フルコースと、雪舞う柳並木を浴衣と下駄で歩く名物「7つの外湯めぐり」を堪能する至福の冬旅。",
    url: 'https://croud-travel.pages.dev/winter-hyogo-kinosaki-onsen-matsuba-crab-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11月解禁！城崎温泉の青タグ津居山ガニ】名物7つの外湯めぐりと極上活ズワイガニ会席宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11月解禁！城崎温泉の青タグ津居山ガニ】名物7つの外湯めぐりと極上活ズワイガニ会席宿5選",
    description: "11月6日のカニ漁解禁で熱狂に包まれる関西随一の名湯・城崎温泉！地元・津居山港直送の青いタグ付き活松葉ガニ（カニ刺し・焼きガニ・茹で姿ガニ・カニすき・甲羅酒）フルコースと、雪舞う柳並木を浴衣と下駄で歩く名物「7つの外湯めぐり」を堪能する至福の冬旅。",
  }
};

export default function KinosakiWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-hyogo-kinosaki-onsen-matsuba-crab-stay#article",
        "headline": "【11月解禁！城崎温泉の青タグ津居山ガニ】名物7つの外湯めぐりと極上活ズワイガニ会席宿5選",
        "description": "11月6日のカニ漁解禁で熱狂に包まれる関西随一の名湯・城崎温泉！地元・津居山港直送の青いタグ付き活松葉ガニ（カニ刺し・焼きガニ・茹で姿ガニ・カニすき・甲羅酒）フルコースと、雪舞う柳並木を浴衣と下駄で歩く名物「7つの外湯めぐり」を堪能する至福の冬旅。",
        "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
        "datePublished": "2026-09-27T00:00:00+09:00",
        "dateModified": "2026-09-27T00:00:00+09:00",
        "author": {
          "@type": "Organization",
          "name": "日本全国・旅宿クラウド 編集部",
          "url": "https://croud-travel.pages.dev"
        },
        "publisher": {
          "@type": "Organization",
          "name": "日本全国・旅宿クラウド",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.pages.dev/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-hyogo-kinosaki-onsen-matsuba-crab-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-hyogo-kinosaki-onsen-matsuba-crab-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "城崎温泉のカニ漁解禁日と最も美味しい時期はいつですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "日本海のズワイガニ漁は毎年11月6日に一斉解禁されます。11月上旬から12月下旬にかけては初物の活ズワイガニが出回り、身の引き締まりと甘みが最高潮に達するベストシーズンです。特に地元・津居山港で日帰り操業の小型船が水揚げする「津居山ガニ（青タグ付き）」は抜群の鮮度を誇ります。"
            }
          },
          {
            "@type": "Question",
            "name": "「津居山ガニ（青色タグ）」と一般的なズワイガニの違いは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "津居山（ついやま）ガニは、城崎温泉から車で約10分の津居山港で水揚げされる松葉ガニです。漁場が港から近いため、獲れたその日のうちに生きたまま港へ戻る「日帰り漁」が行われており、鮮度落ちが極めて少ないのが最大の特徴。厳しい品質基準をクリアした活ガニにのみ青いプラスチックタグが装着され、最高峰のブランドガニとして全国の料亭で重宝されています。"
            }
          },
          {
            "@type": "Question",
            "name": "城崎温泉の名物「7つの外湯めぐり」の利用方法と料金は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "城崎温泉の旅館に宿泊すると、チェックイン時に「ゆめぱ（デジタル外湯入浴券）」が渡されます。このパスがあれば、宿泊当日のチェックインから翌朝10:00（または15:30）まで、温泉街にある7つの外湯（一の湯、御所の湯、鴻の湯、さとの湯、地蔵湯、柳湯、まんだら湯）に何度でも無料で入り放題となります。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の城崎温泉の外湯めぐりで湯冷めしないコツと持ち物は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "冬の夜は雪が舞い気温が氷点下近くまで下がります。浴衣の上に必ず宿の丹前や半纏（はんてん）を羽織り、首元にマフラーを巻きましょう。湯冷めを防ぐポイントは「上がる直前に熱めの湯船にしっかり浸かること」。また、宿のフェイスタオル、バスタオル、濡れたタオルを入れる防水巾着袋、小銭入れを忘れずにご持参ください。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.pages.dev/winter-hyogo-kinosaki-onsen-matsuba-crab-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "城崎温泉　医食同源の宿　かに庵",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147534%2F147534.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "城崎温泉　網元の宿　蟹宿むつの屋",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19708%2F19708.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "城崎温泉　料理旅館　よしはる",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F79381%2F79381.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "城崎温泉　つちや旅館",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8766%2F8766.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "城崎温泉　みつわ旅館",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F41857%2F41857.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "城崎温泉　医食同源の宿　かに庵",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/147534/147534.jpg",
              rating: 4.28,
              reviews: 116,
              price: "¥9,900〜",
              access: "ＪＲ　城崎温泉駅より徒歩にて約７分。　大阪方面より中国道～舞鶴道～北近畿豊岡自動車道～但馬空港ＩＣ下車　約30分",
              special: "但馬牛や松葉かになど、地産地消を基本にグルメと健康を両立した6室の宿でございます。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147534%2F147534.html",
              story: "城崎温泉の温泉街中心部に位置し、その名の通りカニ料理への深い愛情とこだわりを貫く料理自慢の宿。11月の解禁とともに、地元津居山港や柴山港で水揚げされた選りすぐりの活松葉ガニを仕入れ、職人が見事な手際で捌き分けます。透き通るような身が花を咲かせる「活カニ刺し」は、口に含んだ瞬間に上品な甘みが広がり、炭火で香ばしく焼き上げる「焼きガニ」は芳醇な磯の香りが鼻腔をくすぐります。外湯めぐりの拠点としても抜群の立地で、名湯「一の湯」や「御所の湯」へも下駄を鳴らして歩いてすぐの好ロケーションです。",
              roomTip: "落ち着いた純和風の客室は畳の清々しい香りに包まれ、冬の冷え込みを感じさせない暖かな設え。グループやご家族でもゆったり寛げます。",
              gourmetTip: "名物「津居山ガニづくし会席」。カニ刺し、焼きガニ、茹でガニ、カニすき鍋、そしてカニ味噌を炭火で煮立てて地酒を注ぐ「甲羅酒」まで、一切の妥協なきカニ尽くしを堪能できます。",
              highlights: [
                "カニ料理専門の料理宿＆津居山港直送活松葉ガニフルコース",
                "一の湯・御所の湯まで徒歩すぐの好立地と自家源泉の温もり",
                "炭火で香ばしく焼き上げる焼きガニと濃厚なカニ味噌甲羅酒"
              ]
            },
            {
              id: 2,
              name: "城崎温泉　網元の宿　蟹宿むつの屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/19708/19708.jpg",
              rating: 3.90,
              reviews: 39,
              price: "¥18,030〜",
              access: "ＪＲ城崎駅より徒歩１０分、最寄りIC：日高神鍋高原IC",
              special: "四季を通じて新鮮な海の幸をお召し上がりいただけます。外湯めぐり（外湯巡り券付き）にも便利です。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19708%2F19708.html",
              story: "カニの目利きに絶対の自信を持つ仲買人直営の網元の宿。セリ場から直接買い付けるからこそ実現できる圧倒的な鮮度とボリュームが、全国のカニ好きリピーターを惹きつけてやみません。生け簀から直前に揚げる活ガニは身詰まり抜群で、ぷりぷりとした弾力と凝縮された甘みはまさに本物の証。館内はどこか懐かしい昭和レトロな温もりに満ち、気取らないアットホームなおもてなしに心が和みます。外湯めぐり用の「湯めぐりパス（デジタル外湯券）」が付いており、7つの外湯をチェックインから翌朝まで何度でも無料で湯巡りできます。",
              roomTip: "素朴で清潔な和室。窓を開ければ城崎の温泉街の情緒が漂い、カランコロンと響く下駄の音を聞きながら風情ある夜を過ごせます。",
              gourmetTip: "活松葉ガニのフルコースに加え、但馬が誇る幻のブランド和牛「但馬牛」の陶板ステーキが付く贅沢プランも大人気。海の王者と陸の王者を同時に味わい尽くせます。",
              highlights: [
                "仲買人直営の圧倒的な目利きと鮮度＆7つの外湯めぐりパス付き",
                "生け簀から直前の活け締めカニ刺し＆但馬牛ステーキセット",
                "昭和レトロな落ち着く館内と温泉街散策に便利な無料下駄貸出"
              ]
            },
            {
              id: 3,
              name: "城崎温泉　料理旅館　よしはる",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/79381/79381.jpg",
              rating: 4.85,
              reviews: 260,
              price: "¥17,930〜",
              access: "ＪＲ　城崎温泉駅より徒歩にて３分",
              special: "楽天トラベルアワード2012受賞★口コミ5つ星！城崎温泉駅徒歩３分。貸切風呂・男女デザイン浴衣もあり",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F79381%2F79381.html",
              story: "楽天トラベルで4.8点台という驚異的な高評価を誇る、城崎温泉屈指の美食旅館。料理長が毎朝仕入れる活ズワイガニは、傷ひとつない極上のタグ付きガニのみを厳選。一品一品丁寧に仕上げられる懐石料理は、カニの旨味を最大限に引き出す絶妙な火入れと美しい盛り付けで、訪れる美食家たちを唸らせています。館内には信楽焼の陶器風呂と檜風呂の2つの貸切温泉風呂があり、宿泊者は無料でプライベートな湯浴みが可能。贅沢な料理と心温まるおもてなしが記念日旅行にも最適です。",
              roomTip: "木の温もりを大切にした上質な和室。ふかふかのお布団と加湿空気清浄機が完備され、冬の乾燥する夜でも快適な熟睡が叶います。",
              gourmetTip: "茹でたて熱々の姿ガニは味噌の濃厚なコクと引き締まった身の甘みが絶品。最後はカニの出汁がたっぷり染み出たスープで作る「黄金のカニ雑炊」で至福の締めくくり。",
              highlights: [
                "クチコミ評価4.8点台の超人気美食宿＆無料の貸切温泉風呂完備",
                "タグ付き活松葉ガニと職人の火入れ技が光る至高の懐石料理",
                "出汁の旨味が凝縮された絶品カニすき鍋と黄金のカニ雑炊"
              ]
            },
            {
              id: 4,
              name: "城崎温泉　つちや旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8766/8766.jpg",
              rating: 4.66,
              reviews: 247,
              price: "¥13,200〜",
              access: "【電車】JR城崎温泉駅から旅館組合無料乗合バスで5～10分【車】北近畿豊岡自動車道・豊岡出石ICから約20分　無料Pあり",
              special: "2025温泉宿総選挙全国第3位　 但馬牛をはじめ、旬を極める料理旅館",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8766%2F8766.html",
              story: "城崎温泉の象徴である大谿川（おおたにがわ）の柳並木通りに面した、創業からの伝統を受け継ぐ数寄屋造りの名門旅館。太鼓橋と柳並木、そして初冬の雪景色が織りなす城崎屈指の絶景ロケーションを目の前に望みます。浴衣に丹前を羽織り、カランコロンと下駄を鳴らして外湯めぐりへ出かけるには最高の立地。館内の内湯には城崎温泉の源泉が引かれ、外湯の賑わいを楽しんだ後は宿の静かな湯船で心ゆくまでリラックスできます。",
              roomTip: "川側の客室からは、ライトアップされた柳並木と大谿川の川面に映る雪景色が一望でき、城崎ならではのノスタルジックな情緒に浸れます。",
              gourmetTip: "お部屋食または個室食事処でゆったりといただくカニフルコース。香ばしい焼きガニの香りに包まれながら、地酒「香住鶴」とともに贅沢な時間を過ごせます。",
              highlights: [
                "柳並木通りに面した絶景の立地＆数寄屋造りの老舗でお部屋食カニ会席",
                "太鼓橋と大谿川の雪景色を望む客室と香住鶴の地酒ペアリング",
                "浴衣に丹前を羽織って巡る情緒あふれる冬の城崎温泉街散策"
              ]
            },
            {
              id: 5,
              name: "城崎温泉　みつわ旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/41857/41857.jpg",
              rating: 4.88,
              reviews: 210,
              price: "¥6,800〜",
              access: "山陰本線　城崎温泉駅より徒歩２～３分",
              special: "日本海の新鮮な魚介類を使ったお料理を満足していただけます。城崎を満喫するならこんな家庭的な宿がいい",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F41857%2F41857.html",
              story: "城崎温泉の中心街にひっそりと佇む、心安らぐ全客室少人数の隠れ家宿。リーズナブルな価格設定でありながら、提供されるカニ料理の質とボリュームには定評があり、コストパフォーマンスの高さで高いクチコミ評価を獲得しています。宿の貸切風呂は家族やカップルで気兼ねなく利用でき、温泉街の散策にも便利な好立地。若女将をはじめとするスタッフの親身で温かい接客が、初めての城崎温泉旅行でも心地よい安心感を与えてくれます。",
              roomTip: "コンパクトながら清潔感にあふれた心地よい和室。一人旅からカップル、家族旅行まで気兼ねなく寛げるプライベート空間です。",
              gourmetTip: "冬の味覚を詰め込んだ「お手軽カニ会席」から「活ガニ贅沢づくし」まで多彩なプランが用意され、予算に合わせて本場のカニ料理を心ゆくまで満喫できます。",
              highlights: [
                "城崎中心街のアットホームな隠れ家＆コスパ抜群のカニ料理と温かいもてなし",
                "気兼ねなく入れる無料貸切風呂とカップル・一人旅にも優しい宿泊プラン",
                "予算に合わせて選べるカニ会席とリピーター多数の温かいホスピタリティ"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-cyan-700 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-900">
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85"
          alt="冬の城崎温泉・雪舞う大谿川の柳並木と太鼓橋を歩く浴衣姿の旅人"
          fill
          priority
          className="object-cover object-center opacity-45 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-900/90 text-cyan-100 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-cyan-700/40">
            <Utensils className="w-4 h-4 text-amber-300" />
            <span>11月解禁！冬の味覚の王様・津居山ガニ</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11月解禁！城崎温泉の青タグ津居山ガニ】<br className="hidden sm:inline" />
            名物7つの外湯めぐりと極上活ズワイガニ会席宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            11月6日解禁の青タグ付き津居山ガニを、カニ刺し・焼きガニ・茹で姿・カニすきで食べ尽くす贅沢。雪舞う柳並木を浴衣と下駄でカラコロ歩く「7大外湯めぐり」へ。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-cyan-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-cyan-400" /> 兵庫県豊岡市（城崎温泉・津居山港）</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11月解禁！城崎温泉の青タグ津居山ガニ】名物7つの外湯めぐりと極上活ズワイガニ会席宿5選","item":"https://croud-travel.pages.dev/winter-hyogo-kinosaki-onsen-matsuba-crab-stay"}]}) }}
      />
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-700">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">King of Winter Flavors</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                「街全体が一つの大きな温泉宿」。冬の城崎温泉が放つ唯一無二の旅情
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            毎年11月6日、日本海の冬の味覚の王様「松葉ガニ（ズワイガニ）」の漁が一斉に解禁されると、関西を代表する名湯・城崎温泉は一年で最も華やかで熱気にあふれる季節を迎えます。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            城崎の温泉街の大きな誇りが、車でわずか10分の地元・津居山（ついやま）港で水揚げされる「津居山ガニ」です。漁場が近いため、生きたまま港へ戻る日帰り操業が可能で、その身の透明感と凝縮された甘みはまさに別格。厳しい選別の証である「青色のブランドタグ」が付けられた活ガニは、職人の見事な包丁さばきによって、花が咲くようなカニ刺し、香ばしい炭火焼き、濃厚な味噌を湛えた茹で姿ガニ、熱々のカニすき鍋へと昇華します。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            そして城崎温泉といえば、「駅は玄関、道路は廊下、宿は客室、外湯は大浴場」と称される独特の温泉文化。宿で色鮮やかな浴衣に着替え、木製の下駄をカランコロンと鳴らしながら、大谿川沿いの柳並木と風情ある太鼓橋をそぞろ歩きます。初冬の冷たい夜風に吹かれながら巡る「7つの外湯めぐり」は、日本人の旅情を最も美しく満たしてくれる体験です。
          </p>
          <div className="bg-cyan-50/70 rounded-2xl p-5 border border-cyan-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-5 h-5 text-cyan-700" />
                特急こうのとり・はまかぜ直通！カニの季節は早期予約必須
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                大阪・京都から特急電車で約2時間半。カニ解禁後の11月・12月は週末を中心に予約が殺到するため、早めのプラン確保が鉄則です。
              </p>
            </div>
            <a 
              href="#hotel-list" 
              className="px-5 py-2.5 rounded-xl bg-cyan-800 hover:bg-cyan-900 text-white font-bold text-xs sm:text-sm whitespace-nowrap shadow-sm transition-all"
            >
              城崎温泉のカニ名宿5選を見る ↓
            </a>
          </div>
        </section>

        {/* 3 Core Highlights */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">Winter Highlights</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の城崎温泉で心震える3つの至福体験
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold text-lg">
                01
              </div>
              <h3 className="text-lg font-bold text-stone-900">青タグ付き！活津居山ガニ会席</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                地元津居山港直送のブランド松葉ガニ。花咲くカニ刺し、炭火焼き、濃厚な甲羅味噌の甲羅酒まで贅を尽くしたフルコース。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-lg">
                02
              </div>
              <h3 className="text-lg font-bold text-stone-900">浴衣と下駄で巡る名物7大外湯</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                宿泊者無料の「ゆめぱ」で7つの個性豊かな外湯に入り放題。雪舞う柳並木を歩きながら温かい湯船をハシゴする至福。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-lg">
                03
              </div>
              <h3 className="text-lg font-bold text-stone-900">但馬牛ステーキ＆香住鶴の地酒</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                カニだけでなく神戸ビーフの素牛である「但馬牛」のステーキも絶品。生酛仕込みの名酒「香住鶴」が料理を引き立てます。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel List Section */}
        <section id="hotel-list" className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">Recommended Ryokan</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              本場松葉ガニと外湯めぐりを満喫する城崎の名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              楽天トラベルで高評価を獲得している城崎温泉の厳選宿。カニの鮮度・仕入れルート、外湯へのアクセス、おもてなしの質で選び抜きました。
            </p>
          </div>

          <div className="space-y-12">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-md border border-stone-200 hover:border-cyan-400 transition-all duration-300 flex flex-col lg:flex-row"
              >
                {/* Hotel Image Container */}
                <div className="lg:w-2/5 relative min-h-[280px] lg:min-h-full">
                  <Image
                    src={hotel.img}
                    alt={hotel.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-stone-950/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                    <Award className="w-3.5 h-3.5 text-cyan-400" />
                    <span>厳選 #{hotel.id}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-stone-950/90 via-stone-950/60 to-transparent p-3 rounded-2xl text-white text-xs">
                    <p className="font-semibold flex items-center gap-1 text-cyan-300">
                      <Star className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />
                      評価 {hotel.rating} / 5.0
                    </p>
                    <p className="text-[11px] text-stone-300 line-clamp-1">{hotel.access}</p>
                  </div>
                </div>

                {/* Hotel Content */}
                <div className="lg:w-3/5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-bold text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded-md border border-cyan-200">
                        {hotel.special}
                      </span>
                      <span className="text-xs font-semibold text-stone-500">
                        宿泊目安: <strong className="text-stone-900 text-sm">{hotel.price}</strong> /名
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug hover:text-cyan-800 transition-colors">
                      <a href={hotel.url} target="_blank" rel="noopener noreferrer">
                        {hotel.name}
                      </a>
                    </h3>

                    <p className="text-stone-700 text-sm leading-relaxed">
                      {hotel.story}
                    </p>

                    {/* Room & Gourmet Tips */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="bg-stone-50 p-3 rounded-xl border border-stone-200/70 text-xs space-y-1">
                        <strong className="text-cyan-900 flex items-center gap-1 font-bold">
                          <Coffee className="w-3.5 h-3.5 text-cyan-700" /> お部屋・外湯アクセス
                        </strong>
                        <p className="text-stone-600 leading-relaxed">{hotel.roomTip}</p>
                      </div>
                      <div className="bg-stone-50 p-3 rounded-xl border border-stone-200/70 text-xs space-y-1">
                        <strong className="text-cyan-900 flex items-center gap-1 font-bold">
                          <Utensils className="w-3.5 h-3.5 text-cyan-700" /> 津居山ガニ・料理の技
                        </strong>
                        <p className="text-stone-600 leading-relaxed">{hotel.gourmetTip}</p>
                      </div>
                    </div>

                    {/* Highlights Badges */}
                    <div className="space-y-1.5 pt-1">
                      {hotel.highlights.map((hl, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking CTA Button */}
                  <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-stone-500 text-center sm:text-left">
                      ※ 11月・12月はカニ解禁の最盛期のため、早期の満室が予想されます。
                    </div>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-800 hover:bg-cyan-900 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all transform active:scale-98"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 1泊2日おすすめモデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">Suggested Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              【1泊2日】津居山ガニと7大外湯めぐりを満喫する城崎温泉王道モデルコース
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              JR特急でアクセス抜群！浴衣と下駄で温泉街をそぞろ歩き、熱々のカニ会席に酔いしれる理想の滞在スケジュール。
            </p>
          </div>

          <div className="relative border-l-2 border-cyan-200 ml-4 pl-6 space-y-8">
            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-cyan-700 border-4 border-white shadow" />
              <span className="text-xs font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded">1日目 13:30</span>
              <h3 className="text-base font-bold text-stone-900">JR城崎温泉駅到着 〜 下駄を鳴らして温泉街へ</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                特急こうのとり・はまかぜ号で城崎温泉駅へ到着。駅前の飲泉場で温かい温泉を一杯。大谿川沿いの柳並木を歩きながら宿へ向かい、早めにチェックイン。
              </p>
            </div>

            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-cyan-700 border-4 border-white shadow" />
              <span className="text-xs font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded">1日目 15:00</span>
              <h3 className="text-base font-bold text-stone-900">浴衣に着替えて「外湯めぐり」第1弾！一の湯＆御所の湯</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                宿で色鮮やかな浴衣と下駄を選び、デジタル外湯パス「ゆめぱ」を持って出発。洞窟風呂が名物の「一の湯」と、滝を望む野趣あふれる露天風呂「御所の湯」でまずはひと風呂。
              </p>
            </div>

            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-cyan-700 border-4 border-white shadow" />
              <span className="text-xs font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded">1日目 17:00</span>
              <h3 className="text-base font-bold text-stone-900">温泉街散策 〜 カニ最中や地ビールで夕涼み</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                湯上がりの火照った身体に心地よい冬風を感じながら、城崎地ビールを一杯。クラシックな木造建築が並ぶ商店街で、カニの形をした名物最中をおやつに。
              </p>
            </div>

            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-cyan-700 border-4 border-white shadow" />
              <span className="text-xs font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded">1日目 18:30</span>
              <h3 className="text-base font-bold text-stone-900">夕食：青タグ付き活津居山ガニのフルコース会席</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                待ちに待ったカニ宴会！透明なカニ刺し、炭火で香ばしく焼く焼きガニ、甘みがぎっしり詰まった茹で姿ガニ、熱々のカニすき鍋。甲羅味噌に地酒を注ぐ「甲羅酒」で乾杯。
              </p>
            </div>

            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-cyan-700 border-4 border-white shadow" />
              <span className="text-xs font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded">1日目 21:00</span>
              <h3 className="text-base font-bold text-stone-900">夜の雪見外湯めぐり「鴻の湯」＆温泉街の夜景</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                夕食後は庭園露天風呂が美しい「鴻の湯」へ。ライトアップされた太鼓橋と雪舞う柳並木を眺めながら歩く夜の城崎は、息を呑むほどロマンチックです。
              </p>
            </div>

            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-cyan-700 border-4 border-white shadow" />
              <span className="text-xs font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded">2日目 07:30</span>
              <h3 className="text-base font-bold text-stone-900">朝の清々しい空気の中で「さとの湯」＆カニ身入り味噌汁朝食</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                駅前にある展望露天風呂「さとの湯」で朝風呂。宿へ戻り、カニの身が入った熱々のお味噌汁や焼き魚、炊きたてご飯の朝食を堪能します。
              </p>
            </div>

            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-cyan-700 border-4 border-white shadow" />
              <span className="text-xs font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded">2日目 10:30</span>
              <h3 className="text-base font-bold text-stone-900">城崎ロープウェイで山頂へ 〜 海産物市場でお土産カニ購入</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                大師山山頂から日本海と城崎温泉街のパノラマを一望。駅前の海産物直売所で新鮮なタグ付きズワイガニをお土産に発送し、満足感いっぱいで帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* 旬の城崎・但馬名物グルメガイド */}
        <section className="bg-stone-100/70 rounded-3xl p-6 sm:p-10 border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-800 text-white">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Seafood & Wagyu</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                冬の城崎温泉で絶対に食べ尽くしたい贅沢グルメ4選
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-cyan-700">●</span> 津居山港直送「青タグ活松葉ガニ」
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                日帰り小型船が獲るため鮮度抜群。繊維一本一本が瑞々しく弾けるカニ刺しと、炭火で水分を飛ばし旨味を凝縮させた焼きガニは究極の美味。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-cyan-700">●</span> 濃厚芳醇な「カニ味噌の甲羅酒」
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                甲羅に残った新鮮なカニ味噌を炭火でフツフツと温め、そこに熱々の辛口地酒を注ぐ大人の贅沢。香ばしい香りと濃厚なコクが喉を通り抜けます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-cyan-700">●</span> 黒毛和牛のルーツ「但馬牛ステーキ」
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                神戸牛や松阪牛の血統の母体となる但馬牛。赤身の力強い旨味と繊細なサシの脂が、海の幸の合間に極上のアクセントを添えてくれます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-cyan-700">●</span> 生酛仕込みの名醸「香住鶴」
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                但馬の厳しい冬に伝統の生酛造りで醸される辛口酒。カニの繊細な甘みを引き立て、口の中の油分を心地よくリフレッシュしてくれます。
              </p>
            </div>
          </div>
        </section>

        {/* よくある質問 (FAQ) */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-100 text-cyan-800">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">Q&A Guide</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                冬の城崎温泉カニ旅行 よくある質問と外湯攻略法
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                11月・12月の城崎温泉の雪の状況と車のタイヤ規制は？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                例年11月中旬までは平野部での積雪は稀ですが、12月中旬以降は強い寒波の到来とともに日本海側のドカ雪（積雪20〜50cm）に見舞われることがあります。車でお越しの場合は12月以降スタッドレスタイヤの装着が必須です。雪道に不慣れな方は、遅延の少ないJR特急（大阪・京都直通）の利用を強くおすすめします。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                7つの外湯すべてに入ることはできますか？おすすめの回り方は？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                1泊2日ですべての外湯（7箇所）を制覇することは十分可能ですが、湯あたりを防ぐために1回あたりの入浴は10分程度にし、水分補給をこまめに行うのが鉄則です。中でも人気が高いのは、滝が見える開放的な「御所の湯」、洞窟風呂の「一の湯」、庭園露天風呂の「鴻の湯」の3つ。まずはこの3湯を軸に回るのがおすすめです。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                カニの「活ガニ」と「冷凍カニ」はどう見分ければいいですか？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                宿泊プランに「活ガニ（活ズワイガニ・活松葉ガニ）」と明記されているか、また「タグ付き」と記載されているかをご確認ください。活ガニは直前まで生け簀で生きていたもので、カニ刺しにした時に花が美しく開き、身離れが良く甘みが強いのが特徴です。冷凍ガニのプランは価格がリーズナブルになるメリットがありますので、予算に合わせて選びましょう。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                外湯めぐりの際に持って行くべき必須アイテムは？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                外湯にはシャンプーやボディソープは備え付けられていますが、タオル類はありません。宿から提供される「外湯めぐり用フェイスタオル・バスタオル」と、濡れたタオルを入れる「ビニール巾着袋」を必ず持参してください。また、脱衣所のロッカー用（一部返却式）の小銭や、宿の鍵を入れる小さなポシェットがあると便利です。
              </p>
            </div>
          </div>
        </section>

        {/* 内部リンク網羅（GEOリンク＆関連冬特集） */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">Related Guides & Areas</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の旅をさらに広げる関連特集＆エリア別ガイド
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              日本全国・旅宿クラウドが厳選する、11月・12月の冬旅行特集や近隣エリアの温泉宿ガイドをチェック。
            </p>
          </div>

          {/* 関連特集リンクカード */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link 
              href="/winter-tottori-misasa-onsen-matsuba-crab-stay"
              className="p-4 rounded-2xl bg-stone-50 hover:bg-cyan-50/60 border border-stone-200 hover:border-cyan-300 transition-all space-y-1.5 group"
            >
              <span className="text-[11px] font-bold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded">山陰カニ名湯</span>
              <h3 className="font-bold text-stone-900 text-sm group-hover:text-amber-900 transition-colors">
                鳥取松葉ガニと世界屈指の三朝ラジウム温泉宿
              </h3>
              <p className="text-xs text-stone-500 line-clamp-2">
                境港直送の活松葉ガニフルコースと高濃度ラジウム泉の奇跡の治癒力。
              </p>
            </Link>

            <Link 
              href="/winter-echizen-crab-taiza-luxury-stay"
              className="p-4 rounded-2xl bg-stone-50 hover:bg-cyan-50/60 border border-stone-200 hover:border-cyan-300 transition-all space-y-1.5 group"
            >
              <span className="text-[11px] font-bold text-rose-800 bg-rose-100/80 px-2 py-0.5 rounded">幻の最高峰ガニ</span>
              <h3 className="font-bold text-stone-900 text-sm group-hover:text-rose-900 transition-colors">
                越前ガニ・間人ガニ（たいざがに）極上高級宿
              </h3>
              <p className="text-xs text-stone-500 line-clamp-2">
                黄色いタグの越前ガニと幻の間人ガニを味わう一生に一度の贅沢ステイ。
              </p>
            </Link>

            <Link 
              href="/winter-kue-gourmet-luxury-fish-onsen-stay"
              className="p-4 rounded-2xl bg-stone-50 hover:bg-cyan-50/60 border border-stone-200 hover:border-cyan-300 transition-all space-y-1.5 group"
            >
              <span className="text-[11px] font-bold text-teal-800 bg-teal-100/80 px-2 py-0.5 rounded">幻の高級魚鍋</span>
              <h3 className="font-bold text-stone-900 text-sm group-hover:text-teal-900 transition-colors">
                和歌山白浜・日高の本クエ鍋と絶景露天風呂宿
              </h3>
              <p className="text-xs text-stone-500 line-clamp-2">
                冬の南紀が誇る幻の高級魚クエ！ぷりぷりゼラチン質と濃厚クエ鍋。
              </p>
            </Link>
          </div>

          {/* 都道府県GEOリンク */}
          <div className="pt-4 border-t border-stone-100 space-y-3">
            <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              関西・山陰・全国の都道府県別おすすめ宿
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              <Link href="/prefectures/hyogo" className="px-3 py-1.5 bg-stone-100 hover:bg-cyan-100 text-stone-700 hover:text-cyan-900 rounded-lg transition-colors font-medium">兵庫県の宿一覧</Link>
              <Link href="/prefectures/kyoto" className="px-3 py-1.5 bg-stone-100 hover:bg-cyan-100 text-stone-700 hover:text-cyan-900 rounded-lg transition-colors font-medium">京都府の宿一覧</Link>
              <Link href="/prefectures/tottori" className="px-3 py-1.5 bg-stone-100 hover:bg-cyan-100 text-stone-700 hover:text-cyan-900 rounded-lg transition-colors font-medium">鳥取県の宿一覧</Link>
              <Link href="/prefectures/osaka" className="px-3 py-1.5 bg-stone-100 hover:bg-cyan-100 text-stone-700 hover:text-cyan-900 rounded-lg transition-colors font-medium">大阪府の宿一覧</Link>
              <Link href="/prefectures/fukui" className="px-3 py-1.5 bg-stone-100 hover:bg-cyan-100 text-stone-700 hover:text-cyan-900 rounded-lg transition-colors font-medium">福井県の宿一覧</Link>
              <Link href="/prefectures/shimane" className="px-3 py-1.5 bg-stone-100 hover:bg-cyan-100 text-stone-700 hover:text-cyan-900 rounded-lg transition-colors font-medium">島根県の宿一覧</Link>
              <Link href="/prefectures/okayama" className="px-3 py-1.5 bg-stone-100 hover:bg-cyan-100 text-stone-700 hover:text-cyan-900 rounded-lg transition-colors font-medium">岡山県の宿一覧</Link>
            </div>
          
      <HubRelatedPosts currentSlug="winter-hyogo-kinosaki-onsen-matsuba-crab-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
