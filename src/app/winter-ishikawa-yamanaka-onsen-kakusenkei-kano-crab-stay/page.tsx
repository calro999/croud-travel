import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves, Sparkle
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月加賀山中温泉の冬名湯と加能ガニ】鶴仙渓雪景色・芭蕉ゆかりの美肌湯と青タグ加能蟹＆能登牛会席の宿5選",
  description: "松尾芭蕉が「有馬・草津と並ぶ扶桑三名湯」と称賛した石川・加賀の名湯「山中温泉」。11月6日のズワイガニ漁解禁で歓喜に沸く北陸の冬。石川県産水揚げの証である「青いタグ」付き極上加能ガニや、内子外子をたっぷり抱えた香箱ガニ（セイコガニ）、極上能登牛を山中漆器の器で堪能。名勝・鶴仙渓の初冬雪景色と露天風呂を満喫する厳選名宿5選を徹底解説。",
  keywords: '山中温泉 宿泊, 加賀山中温泉 11月 12月, 吉祥やまなか, かがり吉祥亭, 花紫, 厨八十八, こおろぎ楼, 加能ガニ 青タグ, 香箱ガニ 山中温泉, 能登牛, 鶴仙渓 雪景色',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-ishikawa-yamanaka-onsen-kakusenkei-kano-crab-stay/",
  },
  openGraph: {
    title: "【11・12月加賀山中温泉の冬名湯と加能ガニ】鶴仙渓雪景色・芭蕉ゆかりの美肌湯と青タグ加能蟹＆能登牛会席の宿5選",
    description: "松尾芭蕉が「有馬・草津と並ぶ扶桑三名湯」と称賛した石川・加賀の名湯「山中温泉」。11月6日のズワイガニ漁解禁で歓喜に沸く北陸の冬。石川県産水揚げの証である「青いタグ」付き極上加能ガニや、内子外子をたっぷり抱えた香箱ガニ（セイコガニ）、極上能登牛を山中漆器の器で堪能。名勝・鶴仙渓の初冬雪景色と露天風呂を満喫する厳選名宿5選を徹底解説。",
    url: 'https://croud-travel.pages.dev/winter-ishikawa-yamanaka-onsen-kakusenkei-kano-crab-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月加賀山中温泉の冬名湯と加能ガニ】鶴仙渓雪景色・芭蕉ゆかりの美肌湯と青タグ加能蟹＆能登牛会席の宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月加賀山中温泉の冬名湯と加能ガニ】鶴仙渓雪景色・芭蕉ゆかりの美肌湯と青タグ加能蟹＆能登牛会席の宿5選",
    description: "松尾芭蕉が「有馬・草津と並ぶ扶桑三名湯」と称賛した石川・加賀の名湯「山中温泉」。11月6日のズワイガニ漁解禁で歓喜に沸く北陸の冬。石川県産水揚げの証である「青いタグ」付き極上加能ガニや、内子外子をたっぷり抱えた香箱ガニ（セイコガニ）、極上能登牛を山中漆器の器で堪能。名勝・鶴仙渓の初冬雪景色と露天風呂を満喫する厳選名宿5選を徹底解説。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'],
  }
};

const faqList = [
  {
    "q": "加賀山中温泉の『加能ガニ（かのうがに）』とは何ですか？青タグの意味は？",
    "a": "『加能ガニ』とは、石川県内の各漁港（橋立港、金沢港、輪島港など）で水揚げされたオスのズワイガニのブランドネームです。石川県で水揚げされた正真正銘の本物には、鮮やかな水色の『青いタグ』が脚に取り付けられます。厳しい品質・サイズ基準を満たした加能ガニは、ぎっしりと詰まった甘みのある身と、濃厚でコクのある蟹味噌が特徴。山中温泉の旅館では、橋立港や金沢港から直送された獲れたての青タグ加能ガニを刺身、炭火焼き、茹で、甲羅焼きなどで贅沢に提供してくれます。"
  },
  {
    "q": "11月・12月限定の『香箱ガニ（こうばこがに）』とはどのようなカニですか？",
    "a": "香箱ガニとは、北陸地方で獲れるメスのズワイガニの呼称です。資源保護のため漁期が非常に短く、例年11月6日の解禁から12月末までの約2ヶ月間しか味わえない冬の超希少グルメです。オスよりも小ぶりですが、お腹に抱えたプチプチとした食感の『外子（そとこ）』、甲羅の内側にある濃厚でクリーミーな『内子（うちこ）』、そして濃厚な蟹味噌がぎっしり詰まっており、カニ通が最も愛する味覚とされています。山中温泉の宿では、職人が身と内子・外子を丁寧に甲羅に美しく盛り付けた『面影（おもかげ）』として提供されます。"
  },
  {
    "q": "松尾芭蕉と山中温泉にはどのような歴史的なつながりがありますか？",
    "a": "江戸時代の元禄2年（1689年）、俳聖・松尾芭蕉は弟子の曾良とともに『奥の細道』の旅の途中で山中温泉を訪れました。芭蕉はその名湯に深く感銘を受け、予定を大幅に延ばして8泊9日もの間滞在しました。その際、有馬温泉や草津温泉と並び称して『扶桑三名湯』と称賛し、『山中や 菊は手折らじ 湯の匂ひ（山中の湯の香りを浴びれば、延命長寿の菊を手折る必要もないほど効能が高い）』という名句を残しました。温泉街には芭蕉の足跡を伝える『芭蕉の館』や記念碑が点在しています。"
  },
  {
    "q": "鶴仙渓（かくせんけい）の初冬の見どころと散策の注意点は？",
    "a": "鶴仙渓は山中温泉街に沿って流れる大聖寺川の渓谷で、北陸随一の渓谷美を誇ります。上流の総檜造り『こおろぎ橋』から、ワインレッドのS字橋『あやとり橋』、石造りのアーチが美しい『黒谷橋』まで約1.3kmの遊歩道が整備されています。11月中旬の晩秋の散り紅葉から、11月下旬〜12月にかけての初雪をまとった渓谷美はまさに水墨画の世界。初冬の遊歩道は落葉や雪、霜で滑りやすくなるため、スニーカーや滑りにくいブーツでの散策をおすすめします。"
  },
  {
    "q": "2024年の北陸新幹線延伸で、加賀山中温泉へのアクセスはどうなりましたか？",
    "a": "2024年春の北陸新幹線金沢〜敦賀間延伸開業により、最寄り駅の『加賀温泉駅（かがおんせんえき）』に新幹線が直接停車するようになりました。東京駅から直通新幹線『かがやき』『はくたか』で乗り換えなし約2時間40分で加賀温泉駅に到着します。関西・中京方面からも特急サンダーバードやしらさぎ号と敦賀新幹線乗り継ぎで約1時間50分〜2時間強とアクセスが大幅に向上しました。加賀温泉駅からは各旅館の無料送迎バスや路線バスで約20〜25分で温泉街に到着します。"
  }
];

export default function YamanakaWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-ishikawa-yamanaka-onsen-kakusenkei-kano-crab-stay#article",
        "headline": "【11・12月加賀山中温泉の冬名湯と加能ガニ】鶴仙渓雪景色・芭蕉ゆかりの美肌湯と青タグ加能蟹＆能登牛会席の宿5選",
        "description": "松尾芭蕉が「有馬・草津と並ぶ扶桑三名湯」と称賛した石川・加賀の名湯「山中温泉」。11月6日のズワイガニ漁解禁で歓喜に沸く北陸の冬。石川県産水揚げの証である「青いタグ」付き極上加能ガニや、内子外子をたっぷり抱えた香箱ガニ（セイコガニ）、極上能登牛を山中漆器の器で堪能。名勝・鶴仙渓の初冬雪景色と露天風呂を満喫する厳選名宿5選を徹底解説。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
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
          "@id": "https://croud-travel.pages.dev/winter-ishikawa-yamanaka-onsen-kakusenkei-kano-crab-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-ishikawa-yamanaka-onsen-kakusenkei-kano-crab-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "加賀山中温泉の『加能ガニ（かのうがに）』とは何ですか？青タグの意味は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "『加能ガニ』とは、石川県内の各漁港（橋立港、金沢港、輪島港など）で水揚げされたオスのズワイガニのブランドネームです。石川県で水揚げされた正真正銘の本物には、鮮やかな水色の『青いタグ』が脚に取り付けられます。厳しい品質・サイズ基準を満たした加能ガニは、ぎっしりと詰まった甘みのある身と、濃厚でコクのある蟹味噌が特徴。山中温泉の旅館では、橋立港や金沢港から直送された獲れたての青タグ加能ガニを刺身、炭火焼き、茹で、甲羅焼きなどで贅沢に提供してくれます。"
            }
          },
          {
            "@type": "Question",
            "name": "11月・12月限定の『香箱ガニ（こうばこがに）』とはどのようなカニですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "香箱ガニとは、北陸地方で獲れるメスのズワイガニの呼称です。資源保護のため漁期が非常に短く、例年11月6日の解禁から12月末までの約2ヶ月間しか味わえない冬の超希少グルメです。オスよりも小ぶりですが、お腹に抱えたプチプチとした食感の『外子（そとこ）』、甲羅の内側にある濃厚でクリーミーな『内子（うちこ）』、そして濃厚な蟹味噌がぎっしり詰まっており、カニ通が最も愛する味覚とされています。山中温泉の宿では、職人が身と内子・外子を丁寧に甲羅に美しく盛り付けた『面影（おもかげ）』として提供されます。"
            }
          },
          {
            "@type": "Question",
            "name": "松尾芭蕉と山中温泉にはどのような歴史的なつながりがありますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "江戸時代の元禄2年（1689年）、俳聖・松尾芭蕉は弟子の曾良とともに『奥の細道』の旅の途中で山中温泉を訪れました。芭蕉はその名湯に深く感銘を受け、予定を大幅に延ばして8泊9日もの間滞在しました。その際、有馬温泉や草津温泉と並び称して『扶桑三名湯』と称賛し、『山中や 菊は手折らじ 湯の匂ひ（山中の湯の香りを浴びれば、延命長寿の菊を手折る必要もないほど効能が高い）』という名句を残しました。温泉街には芭蕉の足跡を伝える『芭蕉の館』や記念碑が点在しています。"
            }
          },
          {
            "@type": "Question",
            "name": "鶴仙渓（かくせんけい）の初冬の見どころと散策の注意点は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "鶴仙渓は山中温泉街に沿って流れる大聖寺川の渓谷で、北陸随一の渓谷美を誇ります。上流の総檜造り『こおろぎ橋』から、ワインレッドのS字橋『あやとり橋』、石造りのアーチが美しい『黒谷橋』まで約1.3kmの遊歩道が整備されています。11月中旬の晩秋の散り紅葉から、11月下旬〜12月にかけての初雪をまとった渓谷美はまさに水墨画の世界。初冬の遊歩道は落葉や雪、霜で滑りやすくなるため、スニーカーや滑りにくいブーツでの散策をおすすめします。"
            }
          },
          {
            "@type": "Question",
            "name": "2024年の北陸新幹線延伸で、加賀山中温泉へのアクセスはどうなりましたか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "2024年春の北陸新幹線金沢〜敦賀間延伸開業により、最寄り駅の『加賀温泉駅（かがおんせんえき）』に新幹線が直接停車するようになりました。東京駅から直通新幹線『かがやき』『はくたか』で乗り換えなし約2時間40分で加賀温泉駅に到着します。関西・中京方面からも特急サンダーバードやしらさぎ号と敦賀新幹線乗り継ぎで約1時間50分〜2時間強とアクセスが大幅に向上しました。加賀温泉駅からは各旅館の無料送迎バスや路線バスで約20〜25分で温泉街に到着します。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.pages.dev/winter-ishikawa-yamanaka-onsen-kakusenkei-kano-crab-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "山中温泉　吉祥やまなか",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67124%2F67124.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "山中温泉　かがり吉祥亭",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68251%2F68251.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "山中温泉　花紫",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67297%2F67297.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "山中温泉　厨八十八",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68544%2F68544.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "みやこわすれの宿　こおろぎ楼",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F76914%2F76914.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "山中温泉　吉祥やまなか",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/67124/67124.jpg",
              rating: 4.73,
              reviews: 1657,
              price: "¥16,500〜",
              access: "加賀温泉駅・小松空港から無料送迎あり（要予約/定時便）【車】加賀ICより14分。金沢・福井へは車で1時間",
              special: "清流と名湯、美食に包まれるラグジュアリー宿。山中温泉の文化に触れ、心ほどける静寂の滞在。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67124%2F67124.html",
              story: "名勝・鶴仙渓の清流を望み、加賀の伝統工芸と上質なおもてなしが息づく極上の宿「吉祥やまなか」。天然温泉を注ぐ大浴場や露天風呂「白鷺の湯」からは、初冬の静まり返った渓谷と木々の雪吊りを眺めることができます。湯上がりには加賀プリンや地酒の振る舞いサービスがあり、女性に嬉しいアメニティも充実。山中塗の漆器や九谷焼の美しい器でいただく料理は、五感すべてで北陸の初冬を感じさせてくれます。",
              roomTip: "渓流を望む露天風呂付き客室や、加賀友禅・山中漆器をあしらった和モダン客室。せせらぎの音をBGMにプライベートな名湯浴みを満喫できます。",
              gourmetTip: "11月6日解禁の青タグ付き加能ガニと極上能登牛を主役に据えた加賀会席。目の前で焼き上げるズワイガニ炭火焼き、甲羅みそ焼き、甘みあふれるカニ刺し、能登牛の鉄板ステーキを贅沢に堪能できます。",
              highlights: [
                "鶴仙渓の清流を望む白鷺の湯露天風呂＆山中塗の器でいただく加賀極上会席",
                "松尾芭蕉が称賛した名湯を引く大浴場＆加賀プリンや地酒の嬉しい振る舞い",
                "11月解禁青タグ加能ガニ炭火焼き＆甲羅みそ焼き・A5能登牛鉄板ステーキ"
              ]
            },
            {
              id: 2,
              name: "山中温泉　かがり吉祥亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/68251/68251.jpg",
              rating: 4.64,
              reviews: 1890,
              price: "¥14,500〜",
              access: "加賀温泉駅・小松空港から無料送迎あり（要予約/定時便）【車】加賀ICより16分。金沢・福井へは車で1時間",
              special: "≪全室リバービュー・夕食時飲み放題≫渓流沿いの露天風呂と旬の加賀料理を堪能。こおろぎ橋・ゆげ街道すぐ",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68251%2F68251.html",
              story: "鶴仙渓のシンボル「こおろぎ橋」のすぐそばに佇み、渓流のダイナミックな景観と和の温もりを堪能できる「かがり吉祥亭」。立ち湯や露天風呂からは、初冬の澄んだ水面と渓谷の木々を眼下に望み、マイナスイオンと温泉の蒸気に包まれる癒やしのひとときを過ごせます。ロビーでの夕方のビール・郷土スイーツのハッピーアワーなど、滞在を楽しく彩るもてなしが評判です。",
              roomTip: "鶴仙渓を一望する和室や露天風呂付き客室。初冬の冷気を感じながら、湯船から渓谷の雪景色と清流のコントラストを静かに愛でることができます。",
              gourmetTip: "オープンキッチンで揚げたての天ぷらが食べ放題の加賀会席。冬限定の加能ガニ一杯付きプランや、メスの香箱ガニの甲羅盛り、能登牛のしゃぶしゃぶ鍋など、加賀の冬の贅を味わい尽くせます。",
              highlights: [
                "こおろぎ橋そばの絶好ロケーション＆渓流立ち湯露天風呂と揚げたて天ぷら",
                "初冬の冷気と渓谷美が心地よい露天風呂＆夕方のビールハッピーアワー",
                "冬の加能ガニ一杯付き会席＆メス香箱ガニ甲羅盛りと能登牛しゃぶしゃぶ"
              ]
            },
            {
              id: 3,
              name: "山中温泉　花紫",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/67297/67297.jpg",
              rating: 5.00,
              reviews: 408,
              price: "¥26,000〜",
              access: "◆JR加賀温泉駅より送迎車にて約15分（要予約）◆北陸自動車道-加賀IC、片山津ICより約20分◆小松空港より約25分",
              special: "コンセプトは日本の文化サロン。アートやお茶に浸り、対話を深める宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67297%2F67297.html",
              story: "鶴仙渓の豊かな自然に抱かれ、わずか全二十七室の洗練された大人の隠れ宿「花紫」。世界的アーティストが手がけたアート空間と日本の伝統美が調和した館内は、どこを切り取っても美しく静寂に包まれています。最上階の展望露天風呂からは初冬の山中渓谷をパノラマで見渡し、自家源泉の滑らかな美肌湯を堪能。客室やお風呂から眺める冬の山並みはまるで一幅の日本画のようです。",
              roomTip: "源泉かけ流しの半露天風呂を備えたスイートルーム。洗練された家具と広々としたテラスから初冬の鶴仙渓の静けさに浸る至福の休日。",
              gourmetTip: "約五十種類の旬のメニューから自分の好みに合わせて自由に選べる「アラカルト懐石」。青タグ加能ガニの炭火焼き、濃厚な香箱ガニ面影、能登牛ヒレ肉の網焼きなど、自分だけの究極の冬の献立を組み立てられます。",
              highlights: [
                "わずか27室の洗練された大人の隠れ家＆約50種から選ぶアラカルト懐石",
                "最上階展望露天風呂から初冬の鶴仙渓パノラマを一望する贅沢な湯浴み",
                "炭火焼き加能ガニ＆濃厚香箱ガニ面影・極上能登牛フィレ肉の網焼き"
              ]
            },
            {
              id: 4,
              name: "山中温泉　厨八十八",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/68544/68544.jpg",
              rating: 4.53,
              reviews: 221,
              price: "¥13,000〜",
              access: "加賀温泉駅より車で約20分（事前予約制の送迎がございます。時間など詳細よくある質問をご確認ください）",
              special: "温泉宿は日常から離れ、癒され、疲れをとり、鋭気を養うところ。ゆっくりと贅沢な時間をお楽しみください。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68544%2F68544.html",
              story: "宿の中心に本物の田んぼテラスを配し、日本の原風景である里山の優しさと贅を極めた名宿「厨八十八（くりややそはち）」。渓流沿いの竹林に囲まれた大浴場と野趣あふれる露天風呂では、初冬の澄んだ空気を胸いっぱいに吸い込みながら硫酸塩泉のまろやかな湯を堪能できます。全二十四室の落ち着いた空間と、米・出汁・水にとことんこだわった料理が高く評価されています。",
              roomTip: "竹林と鶴仙渓を望む露天風呂付き客室や、数寄屋造りの贅沢な和室。静寂のなかで竹の葉が擦れ合う音と川のせせらぎに癒やされます。",
              gourmetTip: "「厨（くりや）」の名が示す通り、料理人が技を尽くす極上の里山・日本海会席。獲れたて加能ガニのかにすき鍋や炭火焼き、山中漆器に盛られた寒魚のお造り、かまどで炊き上げる最高峰コシヒカリが感動の美味です。",
              highlights: [
                "田んぼテラスと竹林に囲まれた里山宿＆かまど炊きご飯と極上カニすき鍋",
                "米・出汁・水にこだわった料理人の技＆清流のせせらぎが響く静寂の客室",
                "加能ガニかにすき鍋＆旬魚寒魚お造り・山中漆器に盛られた季節会席"
              ]
            },
            {
              id: 5,
              name: "みやこわすれの宿　こおろぎ楼",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/76914/76914.jpg",
              rating: 5.00,
              reviews: 24,
              price: "¥26,000〜",
              access: "ＪＲ　加賀温泉駅よりバスにて３０分",
              special: "みやこわすれをテーマに料理と景色でゆっくりと寛いで頂ける、露天風呂付客室全6室のオーナシェフの宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F76914%2F76914.html",
              story: "鶴仙渓の最も名高い「こおろぎ橋」のたもとに佇み、創業より受け継がれる料理宿としての矜持を誇る「みやこわすれの宿 こおろぎ楼」。全六室のみの極上プライベート宿で、全室から鶴仙渓の渓谷美を間近に一望できます。料理長自らが毎朝金沢・橋立漁港へ足を運び、目利きした最高の加能ガニや海の幸を仕入れ、一品一品手作りで仕上げる料理は全国の美食家を唸らせています。",
              roomTip: "渓谷に張り出すように造られた客室露天風呂付き和洋室。こおろぎ橋と初冬の雪景色を目の前に望みながら、源泉かけ流しの湯を心ゆくまで独占。",
              gourmetTip: "橋立港・金沢港水揚げの極上加能ガニ尽くしコース。花咲く活ガニの刺身、炭火で香ばしく焼いた焼きガニ、甲羅みその甲羅酒、能登牛のステーキなど、素材の力と技が極まる至高の夕食です。",
              highlights: [
                "全6室のこおろぎ橋たもとの料理旅館＆橋立港直送の青タグ加能ガニ極上フルコース",
                "客室露天風呂からこおろぎ橋の雪景色を独占鑑賞＆美食家が集う名宿",
                "橋立港直送活ガニ刺し＆焼きガニ・甲羅酒・極上能登牛の完全手作り膳"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-rose-950 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-950">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85"
          alt="加賀山中温泉の鶴仙渓初冬雪見露天風呂と青タグ加能ガニ・香箱ガニ会席"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/90 text-rose-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-rose-800/50">
            <Sparkles className="w-4 h-4 text-rose-300" />
            <span>11月・12月限定 芭蕉称賛の名湯鶴仙渓と青タグ加能ガニ＆香箱ガニ甲羅盛り</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月加賀山中温泉の冬名湯と加能ガニ】<br className="hidden sm:inline" />
            鶴仙渓雪景色・芭蕉ゆかりの美肌湯と青タグ加能蟹＆能登牛会席の宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            11月6日のズワイガニ漁解禁で活気に沸く加賀の奥座敷「山中温泉」。松尾芭蕉が称えた渓流露天風呂で温まり、水色の青タグが誇らしい加能ガニと12月までの限定香箱ガニ、極上能登牛を山中漆器で味わう冬の極上旅。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-rose-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-rose-400" /> 石川県加賀市山中温泉（北陸新幹線加賀温泉駅送迎20分）</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-rose-100">
            <div className="p-2.5 rounded-2xl bg-rose-50 text-rose-800">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-rose-800 uppercase tracking-widest">Yamanaka Onsen Heritage & Crab Legacy</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                芭蕉が愛した扶桑三名湯と、11月解禁の青タグが輝く加能ガニの至福
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            奈良時代の高僧・行基によって開湯され、1300年もの長きにわたり人々を癒やしてきた石川・加賀の「山中温泉」。江戸時代の俳聖・松尾芭蕉は『奥の細道』の道中でこの地を訪れ、その効能の高さと清らかな渓流美に心奪われ、「有馬・草津と並ぶ名湯」と激賞。8泊9日もの逗留を果たし、「山中や 菊は手折らじ 湯の匂ひ」の名句を遺しました。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            山中温泉の泉質は、カルシウム・ナトリウム-硫酸塩泉。無色透明でさらりとした湯ざわりながら、肌の角質を柔らかくほぐし、入浴後にはしっとりと吸い付くような潤いをもたらす「美肌の湯」として定評があります。初冬の11月から12月、名勝・鶴仙渓の岸辺に造られた露天風呂に浸かると、清流の心地よい水音と雪化粧を始めた渓谷美が重なり合い、日々の喧騒が洗われていくような深い安らぎに包まれます。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            そして冬の山中温泉における最大の主役が、毎年11月6日に漁が解禁されるズワイガニです。石川県内の港で水揚げされた証である「青いタグ」を付けた「加能ガニ」は、ぎっしり詰まった極上の甘みと芳醇な蟹味噌が自慢。さらに、12月末までのわずか約2ヶ月間しか味わえないメスの「香箱ガニ（セイコガニ）」の内子・外子の濃厚な旨味、きめ細かな肉質の「能登牛」を、伝統工芸「山中漆器」や「九谷焼」の器で堪能する時間は、まさに日本の冬の極致です。
          </p>
          
          <div className="bg-rose-50/70 rounded-2xl p-5 border border-rose-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-rose-700" />
                11月・12月加賀山中温泉 旅のハイライト
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                11月6日解禁青タグ付き加能ガニ＆香箱ガニ甲羅盛り・鶴仙渓（こおろぎ橋）初冬雪見露天風呂・A5能登牛会席・芭蕉ゆかりの文化散策・北陸新幹線直通アクセス
              </p>
            </div>
            <a
              href="#hotels"
              className="px-5 py-2.5 bg-rose-800 hover:bg-rose-900 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors whitespace-nowrap shadow-sm"
            >
              厳選名宿5選を見る
            </a>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="bg-stone-100/80 rounded-2xl p-6 border border-stone-200">
          <h2 className="text-base font-bold text-stone-900 mb-4 flex items-center gap-2">
            <Compass className="w-5 h-5 text-rose-800" />
            目次・インデックス
          </h2>
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-stone-700">
            <a href="#spring-feature" className="hover:text-rose-800 hover:underline flex items-center gap-1.5">
              <span>1. 山中温泉の魅力：松尾芭蕉が称えた名湯と鶴仙渓の初冬渓谷美</span>
            </a>
            <a href="#kano-crab-guide" className="hover:text-rose-800 hover:underline flex items-center gap-1.5">
              <span>2. 11月6日解禁！青タグ付き「加能ガニ」と12月限定「香箱ガニ」の秘密</span>
            </a>
            <a href="#craft-culture" className="hover:text-rose-800 hover:underline flex items-center gap-1.5">
              <span>3. 山中漆器と九谷焼：器が引き立てる北陸の美食と湯の街文化</span>
            </a>
            <a href="#hotels" className="hover:text-rose-800 hover:underline flex items-center gap-1.5">
              <span>4. 11・12月に泊まりたい加賀山中温泉の厳選名宿5選</span>
            </a>
            <a href="#gourmet" className="hover:text-rose-800 hover:underline flex items-center gap-1.5">
              <span>5. 加賀の冬グルメ：加能ガニ炭火焼き・香箱ガニ甲羅盛り・能登牛</span>
            </a>
            <a href="#itinerary" className="hover:text-rose-800 hover:underline flex items-center gap-1.5">
              <span>6. 1泊2日 山中温泉〜鶴仙渓散策・ゆげ街道・那谷寺 王道モデルコース</span>
            </a>
            <a href="#faq" className="hover:text-rose-800 hover:underline flex items-center gap-1.5">
              <span>7. よくある質問（FAQ）と初冬の気候・服装・新幹線アクセス</span>
            </a>
          </nav>
        </section>

        {/* Section 1: Spring Feature */}
        <section id="spring-feature" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-rose-50 text-rose-800">
              <Waves className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-rose-800 uppercase tracking-widest">Basho's Beloved Hot Spring</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                1. 山中温泉の魅力：松尾芭蕉が称えた名湯と鶴仙渓の初冬渓谷美
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            山中温泉の最大の誇りは、1300年もの歴史を紡いできた清らかな硫酸塩泉です。温泉街の中心にある共同浴場「菊の湯」をはじめ、各旅館の大浴場には湯量豊かな美肌の湯が湛えられています。硫酸塩泉は肌をなめらかに整えるとともに、血液循環を促して冷えた体を内側から温めてくれるため、古くから湯治湯として絶大な信頼を集めてきました。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            温泉街に寄り添うように流れる「鶴仙渓」は、初冬になると木々の葉が落ち、奇岩と清流のコントラストが一段と鮮やかに際立ちます。総檜造りの「こおろぎ橋」や、あやとりを模したワインレッドの「あやとり橋」には初雪がうっすらと積もり、まるで水墨画のような静寂の美が広がります。渓流沿いの露天風呂からこの景色を眺めながら入浴する時間は、旅人だけの特別なご褒美です。
          </p>
        </section>

        {/* Section 2: Kano Crab Guide */}
        <section id="kano-crab-guide" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-rose-50 text-rose-800">
              <Sparkle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-rose-800 uppercase tracking-widest">Blue Tag Kano Crab & Kobako Crab</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                2. 11月6日解禁！青タグ付き「加能ガニ」と12月限定「香箱ガニ」の秘密
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            石川県の冬を告げる一大イベントが、毎年11月6日午前0時のズワイガニ漁解禁です。石川県内の橋立港や金沢港に水揚げされたオスのズワイガニには、本物の証として鮮やかな「青いタグ」が付けられ、「加能ガニ」として市場に出荷されます。北陸の寒流と暖流が交わる栄養豊かな漁場で育ったカニは、身がぎっしりと詰まり、甘みと旨味が凝縮しています。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            さらに注目すべきは、11月6日から12月末までのわずか約2ヶ月間しか味わえないメスのズワイガニ「香箱ガニ（こうばこがに）」です。オスの加能ガニよりも小ぶりながら、甲羅の中には濃厚なオレンジ色の「内子」と芳醇な蟹味噌がぎっしり詰まり、お腹にはプチプチとした食感がたまらない「外子」をたっぷり抱えています。山中温泉の料理人が手間暇を惜しまず仕立てる香箱ガニの甲羅盛りは、11月・12月に訪れた者だけが体験できる最高の贅沢です。
          </p>
        </section>

        {/* Section 3: Craft & Culture */}
        <section id="craft-culture" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-rose-50 text-rose-800">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-rose-800 uppercase tracking-widest">Artisan Crafts & Street Walk</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                3. 山中漆器と九谷焼：器が引き立てる北陸の美食と湯の街文化
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            山中温泉は、400年以上の歴史を誇る「山中漆器」のふるさとでもあります。木地師がろくろで削り出す美しい木目と、しっとりとした漆の肌触りは、温かい料理やお椀の美味しさを何倍にも引き立てます。さらに、色鮮やかな五彩で彩られた「九谷焼」の器も加わり、各旅館の会席料理はまるで工芸ギャラリーのような美しさを誇ります。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            温泉街のメインストリート「ゆげ街道」には、山中漆器や九谷焼のギャラリー、地酒屋、名物コロッケや草団子の店が連なり、初冬の湯上がり散策にうってつけです。冷たい風の中、できたての温かいコロッケを頬張りながら、職人の技が光る漆器の器を手にとってお土産を選ぶ時間は、山中温泉ならではの温かい思い出になります。
          </p>
        </section>

        {/* Section 4: Hotel Cards */}
        <section id="hotels" className="space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-rose-800 uppercase tracking-widest bg-rose-50 px-4 py-1.5 rounded-full border border-rose-200">
              Selected 5 Luxury Ryokan & Hotels
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              4. 11・12月に泊まりたい加賀山中温泉の厳選名宿5選
            </h2>
            <p className="text-sm text-stone-600 max-w-2xl mx-auto">
              鶴仙渓の初冬雪見露天風呂、青タグ加能ガニ炭火焼き、12月限定香箱ガニ甲羅盛り、能登牛会席を心ゆくまで堪能できる名旅館を厳選しました。
            </p>
          </div>

          <div className="space-y-8">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 hover:shadow-md transition duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full bg-stone-900">
                    <Image
                      src={hotel.img}
                      alt={hotel.name}
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute top-4 left-4 bg-rose-900/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md backdrop-blur-sm">
                      第{hotel.id}位 厳選宿
                    </div>
                  </div>
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 text-amber-500">
                          <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                          <span className="font-extrabold text-stone-900 text-lg">{hotel.rating}</span>
                          <span className="text-xs text-stone-500">({hotel.reviews}件のレビュー)</span>
                        </div>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-rose-50 text-rose-800 border border-rose-200">
                          {hotel.price}
                        </span>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                        {hotel.name}
                      </h3>
                      
                      <p className="text-xs text-stone-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" />
                        <span>{hotel.access}</span>
                      </p>

                      <p className="text-stone-700 text-sm leading-relaxed">
                        {hotel.story}
                      </p>

                      <div className="space-y-2 pt-2">
                        {hotel.highlights.map((h, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                            <CheckCircle2 className="w-4 h-4 text-rose-700 flex-shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                      <div className="bg-stone-50 rounded-2xl p-4 space-y-2 border border-stone-200/60 text-xs">
                        <div>
                          <strong className="text-stone-900 font-bold block sm:inline">客室の魅力: </strong>
                          <span className="text-stone-600">{hotel.roomTip}</span>
                        </div>
                        <div>
                          <strong className="text-stone-900 font-bold block sm:inline">冬の味覚: </strong>
                          <span className="text-stone-600">{hotel.gourmetTip}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between border-t border-stone-100">
                      <span className="text-xs text-stone-400">※楽天トラベル公式プラン提携</span>
                      <a
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-rose-800 hover:bg-rose-900 text-white text-sm font-bold rounded-xl transition duration-200 shadow-md group"
                      >
                        <span>空室・宿泊プランを確認</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Gourmet */}
        <section id="gourmet" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-rose-50 text-rose-800">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-rose-800 uppercase tracking-widest">Kaga Winter Gastronomy</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                5. 加賀の冬グルメ：加能ガニ炭火焼き・香箱ガニ甲羅盛り・能登牛
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            山中温泉の冬の膳の主役である加能ガニ。炭火の七輪で香ばしく焼き上げられた脚肉は、殻の芳ばしい香りと凝縮した甘みが絶品です。さらに熱々の甲羅みそにほぐし身を絡めて味わい、最後に辛口の加賀地酒「菊姫」「手取川」を注いで甲羅酒を楽しむのは、大人の冬旅の最高の贅沢と言えます。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            そして石川県が誇るブランド牛「能登牛（のとうし）」。能登半島の豊かな自然と澄んだ空気の中で育まれた能登牛は、肉質が柔らかくオレイン酸含有率が高いため、脂の後味がさっぱりとしていて上品な甘みが特徴です。山中漆器の器に盛り付けられた能登牛の陶板焼きやステーキは、カニ料理と並ぶ冬の膳のもう一つの最高峰です。
          </p>
        </section>

        {/* Section 6: Itinerary */}
        <section id="itinerary" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-rose-50 text-rose-800">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-rose-800 uppercase tracking-widest">Suggested 2-Day Plan</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                6. 1泊2日 山中温泉〜鶴仙渓散策・ゆげ街道・那谷寺 王道モデルコース
              </h2>
            </div>
          </div>
          <div className="space-y-6">
            <div className="border-l-2 border-rose-800 pl-4 sm:pl-6 space-y-2">
              <span className="text-xs font-extrabold text-rose-800 uppercase tracking-wider">【1日目】北陸新幹線で加賀温泉へ〜鶴仙渓雪景色と青タグ加能ガニ</span>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                13:15 北陸新幹線「加賀温泉駅」到着 → 送迎バスで山中温泉へ（約20分）
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                新幹線延伸で東京からも関西からもアクセス快適。宿にチェックインし荷物を預ける。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                14:30 鶴仙渓散策（こおろぎ橋〜あやとり橋）＆ゆげ街道散歩
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                初雪をまとったこおろぎ橋を鑑賞し、ゆげ街道の山中漆器店やコロッケ屋を巡る。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                16:30 宿の渓流露天風呂で芭蕉ゆかりの美肌湯を堪能
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                清流のせせらぎと初冬の冷気を感じながら、硫酸塩泉で身体の芯から温まる。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                18:30 青タグ加能ガニ＆香箱ガニ甲羅盛り・能登牛会席
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                焼きガニ、カニ刺し、香箱ガニ面影、能登牛ステーキを加賀地酒菊姫とともに味わい尽くす。
              </p>
            </div>

            <div className="border-l-2 border-stone-300 pl-4 sm:pl-6 space-y-2 pt-2">
              <span className="text-xs font-extrabold text-stone-500 uppercase tracking-wider">【2日目】朝風呂でリフレッシュ〜古刹那谷寺参拝＆加賀橋立港</span>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                08:00 朝の露天風呂 → 地元食材の加賀朝食
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                カニ出汁の味噌汁や加賀野菜の小鉢、炊きたてコシヒカリの温かい朝食で一日をスタート。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                09:30 名刹「那谷寺（なたでら）」参拝（車で約15分）
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                白山信仰の名刹。初冬の奇岩遊仙境の荘厳な雪景色を鑑賞し、心洗われる参拝。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                12:30 加賀橋立港の鮮魚市場でお土産購入 → 加賀温泉駅より帰路へ
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                水揚げされたばかりの加能ガニや香箱ガニ、地酒、山中漆器をお土産に帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        

        {/* Internal Links / Related Guides */}
        <section className="bg-stone-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-rose-300 uppercase tracking-widest">Related Hokuriku Winter Crab Guides</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい北陸・近畿の冬カニ温泉＆雪見名湯特集
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              11月・12月ならではの越前がに、松葉がに、加能ガニ、雪見露天風呂を味わい尽くす全国の名宿ガイドを多数公開中。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-ishikawa-kaga-yamashiro-kano-crab-stay"
              className="bg-stone-900/90 hover:bg-stone-800 p-4 rounded-2xl transition border border-stone-800 block group"
            >
              <span className="text-xs text-rose-300 font-semibold block mb-1">石川・加賀山代</span>
              <h3 className="text-sm font-bold group-hover:text-rose-200 transition">加賀山代温泉 魯山人ゆかりの名湯と極上カニ尽くしの宿</h3>
            </Link>
            <Link 
              href="/winter-kanazawa-kenrokuen-yukizuri-stay"
              className="bg-stone-900/90 hover:bg-stone-800 p-4 rounded-2xl transition border border-stone-800 block group"
            >
              <span className="text-xs text-rose-300 font-semibold block mb-1">石川・金沢</span>
              <h3 className="text-sm font-bold group-hover:text-rose-200 transition">金沢 兼六園の雪吊りと加能ガニ会席の宿</h3>
            </Link>
            <Link 
              href="/winter-fukui-awara-onsen-echizen-crab-stay"
              className="bg-stone-900/90 hover:bg-stone-800 p-4 rounded-2xl transition border border-stone-800 block group"
            >
              <span className="text-xs text-rose-300 font-semibold block mb-1">福井・あわら</span>
              <h3 className="text-sm font-bold group-hover:text-rose-200 transition">あわら温泉 黄色タグ付き越前がにと庭園露天風呂の宿</h3>
            </Link>
            <Link 
              href="/winter-toyama-unazuki-onsen-kurobe-snow-stay"
              className="bg-stone-900/90 hover:bg-stone-800 p-4 rounded-2xl transition border border-stone-800 block group"
            >
              <span className="text-xs text-rose-300 font-semibold block mb-1">富山・宇奈月</span>
              <h3 className="text-sm font-bold group-hover:text-rose-200 transition">宇奈月温泉 黒部峡谷雪景色と富山湾寒ブリ・紅ズワイガニの宿</h3>
            </Link>
            <Link 
              href="/winter-kyoto-amanohashidate-matsuba-crab-stay"
              className="bg-stone-900/90 hover:bg-stone-800 p-4 rounded-2xl transition border border-stone-800 block group"
            >
              <span className="text-xs text-rose-300 font-semibold block mb-1">京都・天橋立</span>
              <h3 className="text-sm font-bold group-hover:text-rose-200 transition">天橋立 日本三景の冬景色と幻の間人ガニ・松葉ガニの宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-stone-900/90 hover:bg-stone-800 p-4 rounded-2xl transition border border-stone-800 block group"
            >
              <span className="text-xs text-rose-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-rose-200 transition">全国の厳選温泉・宿特集まとめを見る</h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-ishikawa-yamanaka-onsen-kakusenkei-kano-crab-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
