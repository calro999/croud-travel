import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Sun, Sunset, Fish, ThermometerSun, Footprints
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12月天草・下田温泉】冬の伊勢海老！名宿5選',
  description: '11月から12月にかけて東シナ海に沈む茜色の夕陽が最も美しく輝く熊本「天草」と開湯700年の名湯「下田温泉」。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '天草 下田温泉 宿泊, 下田温泉 11月 12月, 天草下田温泉 望洋閣, 天空の船, 五足のくつ, ホテル竜宮, アレグリアガーデンズ天草, 天草伊勢海老, 天草車海老, 東シナ海 夕陽 露天風呂, 﨑津集落 世界遺産',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-kumamoto-amakusa-shimoda-onsen-sunset-seafood-stay/",
  },
  openGraph: {
    title: '【11・12月天草・下田温泉】冬の伊勢海老！名宿5選',
    description: '11月から12月にかけて東シナ海に沈む茜色の夕陽が最も美しく輝く熊本「天草」と開湯700年の名湯「下田温泉」。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-kumamoto-amakusa-shimoda-onsen-sunset-seafood-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月天草・下田温泉の冬名湯と夕陽海鮮】東シナ海サンセット露天と白鷺古湯・冬の伊勢海老＆天然車海老会席の宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月天草・下田温泉の冬名湯と夕陽海鮮】東シナ海サンセット露天と白鷺古湯・冬の伊勢海老＆天然車海老会席の宿5選",
    description: "11月から12月にかけて東シナ海に沈む茜色の夕陽が最も美しく輝く熊本「天草」と開湯700年の名湯「下田温泉」。日本の夕陽百選に選ばれる海岸沿いの絶景露天風呂や100%源泉掛け流しの白鷺古湯、旬の極上「天草伊勢海老」「天然車海老」「天草とらふぐ」の豪快海鮮会席、世界遺産・﨑津集落の初冬風情を満喫する厳選名宿5選を徹底解説。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'],
  }
};

const faqList = [
  {
    "q": "天草・下田温泉の11月・12月の気候はどうですか？冬でも暖かいですか？",
    "a": "天草地域は九州西岸の海洋性気候に属し、年間を通して比較的温暖ですが、11月下旬から12月にかけては海風が吹くと体感温度が下がります。11月の日中最高気温は16℃〜18℃前後、朝晩は8℃〜10℃程度。12月に入ると最高気温は12℃〜14℃、最低気温は4℃〜6℃程度となります。雪が積もることは極めて稀ですが、東シナ海からの冷たい季節風に備えて、ウインドブレーカーや風を通さない厚手のコート、ストールを用意しておくと安心です。冬は空気が非常に澄むため、年間で最も夕陽が美しく見えるベストシーズンです。"
  },
  {
    "q": "天草下田温泉の歴史と泉質・特徴について教えてください。",
    "a": "天草下田温泉は、今から約700年前の正平年間、傷ついた一羽の白鷺が湧き出る湯に浸かって傷を癒やして飛び去ったのを見て村人が発見したと伝えられる古湯です。下田温泉の全ての旅館で「完全源泉掛け流し」が守られており、塩素消毒や循環ろ過を行わないピュアな温泉水が注がれています。泉質はナトリウム-炭酸水素塩・塩化物泉。無色透明で滑らかな湯触りがあり、切り傷や皮膚病に効く「白鷺の湯」として、国の国民保養温泉地にも指定されています。"
  },
  {
    "q": "11月・12月に天草で絶対に味わうべき旬の味覚は何ですか？",
    "a": "冬の天草はまさに『海鮮グルメの黄金期』です。筆頭は例年秋から冬にかけて解禁され、身がぎっしり詰まって甘みが増す「天草伊勢海老」。さらに天草が発祥の地とされる「車海老」は、冬に身が最も引き締まり、活きたまま殻を剥いて食べる踊り食いや塩焼きは絶品です。また、冬の高級魚「天草とらふぐ」の薄造りやてっちり鍋、幻の巨大地鶏「天草大王」の水炊き、熊本特産の「あか牛」ステーキなど、冬ならではの極上食材が目白押しです。"
  },
  {
    "q": "世界文化遺産『﨑津（さきつ）集落』とはどんな場所ですか？下田温泉からのアクセスは？",
    "a": "「長崎と天草地方の潜伏キリシタン関連遺産」の構成資産として2018年にユネスコ世界文化遺産に登録された﨑津集落は、禁教期にも日本の伝統的な漁村の中でアワビやタイラギの貝殻をマリア像に見立てて密かに信仰を守り続けた歴史的な集落です。漁港のすぐそばにゴシック様式の「﨑津教会」が凛と佇む光景は日本のどこにもない独特の風情を醸し出しています。下田温泉からは車で約20〜25分でアクセスでき、冬の静かな散策に最適です。"
  },
  {
    "q": "熊本市内や福岡方面から天草への行き方を教えてください。",
    "a": "熊本市内からは九州自動車道「松橋IC」を降りて国道266号・324号（天草五橋）を経由して下田温泉まで車で約2時間〜2時間半です。公共交通機関の場合、JR熊本駅から観光特急「A列車で行こう」または普通列車で三角駅へ向かい（約40分）、三角港から松島や本渡行きの定期航路・シークルーズやバスに乗り継ぐルートが風情豊かでおすすめです。また、福岡空港や熊本空港から天草エアライン（AMX）を利用すれば、天草空港までわずか30分で直行できます。"
  }
];

export default function AmakusaOnsenWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-kumamoto-amakusa-shimoda-onsen-sunset-seafood-stay#article",
        "headline": "【11・12月天草・下田温泉の冬名湯と夕陽海鮮】東シナ海サンセット露天と白鷺古湯・冬の伊勢海老＆天然車海老会席の宿5選",
        "description": "11月から12月にかけて東シナ海に沈む茜色の夕陽が最も美しく輝く熊本「天草」と開湯700年の名湯「下田温泉」。日本の夕陽百選に選ばれる海岸沿いの絶景露天風呂や100%源泉掛け流しの白鷺古湯、旬の極上「天草伊勢海老」「天然車海老」「天草とらふぐ」の豪快海鮮会席、世界遺産・﨑津集落の初冬風情を満喫する厳選名宿5選を徹底解説。",
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
          "@id": "https://croud-travel.pages.dev/winter-kumamoto-amakusa-shimoda-onsen-sunset-seafood-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-kumamoto-amakusa-shimoda-onsen-sunset-seafood-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "天草・下田温泉の11月・12月の気候はどうですか？冬でも暖かいですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "天草地域は九州西岸の海洋性気候に属し、年間を通して比較的温暖ですが、11月下旬から12月にかけては海風が吹くと体感温度が下がります。11月の日中最高気温は16℃〜18℃前後、朝晩は8℃〜10℃程度。12月に入ると最高気温は12℃〜14℃、最低気温は4℃〜6℃程度となります。雪が積もることは極めて稀ですが、東シナ海からの冷たい季節風に備えて、ウインドブレーカーや風を通さない厚手のコート、ストールを用意しておくと安心です。冬は空気が非常に澄むため、年間で最も夕陽が美しく見えるベストシーズンです。"
            }
          },
          {
            "@type": "Question",
            "name": "天草下田温泉の歴史と泉質・特徴について教えてください。",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "天草下田温泉は、今から約700年前の正平年間、傷ついた一羽の白鷺が湧き出る湯に浸かって傷を癒やして飛び去ったのを見て村人が発見したと伝えられる古湯です。下田温泉の全ての旅館で「完全源泉掛け流し」が守られており、塩素消毒や循環ろ過を行わないピュアな温泉水が注がれています。泉質はナトリウム-炭酸水素塩・塩化物泉。無色透明で滑らかな湯触りがあり、切り傷や皮膚病に効く「白鷺の湯」として、国の国民保養温泉地にも指定されています。"
            }
          },
          {
            "@type": "Question",
            "name": "11月・12月に天草で絶対に味わうべき旬の味覚は何ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "冬の天草はまさに『海鮮グルメの黄金期』です。筆頭は例年秋から冬にかけて解禁され、身がぎっしり詰まって甘みが増す「天草伊勢海老」。さらに天草が発祥の地とされる「車海老」は、冬に身が最も引き締まり、活きたまま殻を剥いて食べる踊り食いや塩焼きは絶品です。また、冬の高級魚「天草とらふぐ」の薄造りやてっちり鍋、幻の巨大地鶏「天草大王」の水炊き、熊本特産の「あか牛」ステーキなど、冬ならではの極上食材が目白押しです。"
            }
          },
          {
            "@type": "Question",
            "name": "世界文化遺産『﨑津（さきつ）集落』とはどんな場所ですか？下田温泉からのアクセスは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "「長崎と天草地方の潜伏キリシタン関連遺産」の構成資産として2018年にユネスコ世界文化遺産に登録された﨑津集落は、禁教期にも日本の伝統的な漁村の中でアワビやタイラギの貝殻をマリア像に見立てて密かに信仰を守り続けた歴史的な集落です。漁港のすぐそばにゴシック様式の「﨑津教会」が凛と佇む光景は日本のどこにもない独特の風情を醸し出しています。下田温泉からは車で約20〜25分でアクセスでき、冬の静かな散策に最適です。"
            }
          },
          {
            "@type": "Question",
            "name": "熊本市内や福岡方面から天草への行き方を教えてください。",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "熊本市内からは九州自動車道「松橋IC」を降りて国道266号・324号（天草五橋）を経由して下田温泉まで車で約2時間〜2時間半です。公共交通機関の場合、JR熊本駅から観光特急「A列車で行こう」または普通列車で三角駅へ向かい（約40分）、三角港から松島や本渡行きの定期航路・シークルーズやバスに乗り継ぐルートが風情豊かでおすすめです。また、福岡空港や熊本空港から天草エアライン（AMX）を利用すれば、天草空港までわずか30分で直行できます。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.pages.dev/winter-kumamoto-amakusa-shimoda-onsen-sunset-seafood-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "天草下田温泉　望洋閣",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13996%2F13996.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "天草　天空の船",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F143273%2F143273.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "石山離宮　五足のくつ",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F188033%2F188033.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "松島温泉　海のやすらぎ　ホテル竜宮",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16615%2F16615.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "天草温泉　ホテルアレグリアガーデンズ天草",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67290%2F67290.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "天草下田温泉　望洋閣",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13996/13996.jpg",
              rating: 4.43,
              reviews: 599,
              price: "¥8,500〜",
              access: "『松橋IC』より約110分／天草空港より車で約40分／鬼池港より車で40分",
              special: "【男女別サウナ完備♪】目の前は一面が東シナ海という抜群の立地！素敵な夕陽をご観賞頂けます！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13996%2F13996.html",
              story: "東シナ海（天草灘）を正面に見晴らす抜群のオーシャンフロントに建ち、全室および露天風呂から「日本の夕陽百選」に輝く感動的なサンセットを一望できる下田温泉の代表宿「天草下田温泉 望洋閣」。夕暮れ時、海と空が茜色から深い藍色へと移ろうトワイライトタイムに浸かる露天風呂は言葉を失う美しさ。開湯700年、傷ついた白鷺が傷を癒やしたと伝わるナトリウム・炭酸水素塩泉の源泉掛け流しの湯が、旅人の肌をしっとりと滑らかに包み込みます。",
              roomTip: "海側に面したオーシャンビュー和室または展望風呂付き客室。水平線にゆっくりと沈みゆく太陽と、夜の静かな波音を独占できる最高のロケーション。",
              gourmetTip: "11月〜12月に最盛期を迎える「天草伊勢海老」のお造りや鬼殻焼き、ピチピチと跳ねる「天草特産車海老」の踊り食い・塩焼き、冬の旬魚の舟盛りなど、天草の海が誇る最高峰の海の幸を贅沢に尽くした会席料理。",
              highlights: [
                "日本の夕陽百選・東シナ海を真正面に望むオーシャンフロント＆開湯700年白鷺古湯",
                "加水加温なしの純度100%源泉掛け流しナトリウム・炭酸水素塩泉で極上美肌",
                "11月・12月旬の天草伊勢海老お造り＆活き車海老踊り食い・冬旬魚豪快会席"
              ]
            },
            {
              id: 2,
              name: "天草　天空の船",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/143273/143273.jpg",
              rating: 4.68,
              reviews: 394,
              price: "¥31,460〜",
              access: "ＪＲ　三角駅よりお車にて約２５分／天草空港よりお車にて約５０分",
              special: "絶景・テラス＆露天風呂のゲストルームと天草の食材で創るイタリアンでお楽しみ下さい。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F143273%2F143273.html",
              story: "天草五橋を渡る松島温泉の丘の上に佇み、まるで大海原を航海する豪華客船のような斬新な建築美を誇るアイランドリゾート「天草 天空の船」。全客室に広々としたウッドデッキテラスと源泉掛け流しの天然温泉露天風呂が完備され、多島美広がる有明海と八代海の絶景を見渡せます。夕食は絶景レストランで、天草直送の極上魚介や熊本県産あか牛を独創的に仕立てた本格イタリアンコースが堪能できます。",
              roomTip: "パノラマビューのアイランドビューヴィラまたはプレステージスイート。海風を感じながらテラス露天風呂に浸かり、洗練された大人のリゾート時間を満喫。",
              gourmetTip: "地元天草の海の幸と熊本の大地が育む厳選食材を活かした天草イタリアン。伊勢海老や車海老のグリル、天草産真鯛やウニの自家製パスタ、熊本あか牛のビステッカなど、ワインとともに味わう至高の美食。",
              highlights: [
                "全室テラス＆客室露天風呂完備の豪華アイランドリゾート＆極上天草イタリアン",
                "有明海と八代海の多島美を見渡すパノラマビュー＆海に浮かぶような絶景デッキ",
                "天草伊勢海老・車海老と熊本あか牛ビステッカが彩る絶景レストランディナー"
              ]
            },
            {
              id: 3,
              name: "石山離宮　五足のくつ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/188033/188033.jpg",
              rating: 4.22,
              reviews: 47,
              price: "¥31,900〜",
              access: "熊本空港・熊本駅より車で約２時間30分。九州自動車道 松橋ICより車で2時間。天草空港より車で約40分。",
              special: "伊勢海老まつり｜東シナ海を望む山に広がるエキゾチックな異世界ー国立公園にある露天風呂付き離れの温泉宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F188033%2F188033.html",
              story: "東シナ海を見下ろす緑豊かな山間の敷地1万坪に、わずか15棟の離れが点在する幻の名宿「石山離宮 五足のくつ」。キリシタン文化と南蛮貿易が花開いた天草の歴史と異国情緒が館内随所に息づき、昭和初期の文人たちが旅した詩情を再現しています。全室に下田温泉の源泉掛け流し専用露天風呂が備わり、鳥のさえずりと潮騒の音だけに包まれる、完全なるプライベートな静寂が約束されています。",
              roomTip: "「Villa C」または「Villa B」の露天風呂付き離れ。アンティーク家具が配されたクラシカルな空間から海を遠望し、別世界に迷い込んだような滞在を堪能。",
              gourmetTip: "天草の海と里の恵みを融合させた創作懐石。天草灘で揚がった獲れたての天然地魚、伊勢海老の刺身、幻の地鶏「天草大王」の水炊き鍋や炭火焼きなど、器から盛り付けまで美意識が宿る逸品。",
              highlights: [
                "敷地1万坪にわずか15棟の独立離れ宿＆南蛮異国情緒と源泉掛け流し専用露天風呂",
                "文人墨客の歴史が息づく静寂の隠れ家＆天草灘の水平線を望む至高のプライベート",
                "天草灘の獲れたて地魚・伊勢海老と幻の地鶏「天草大王」の特選創作懐石"
              ]
            },
            {
              id: 4,
              name: "松島温泉　海のやすらぎ　ホテル竜宮",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/16615/16615.jpg",
              rating: 4.58,
              reviews: 1513,
              price: "¥18,700〜",
              access: "三角（１号橋）より20分／九州自動車道松橋ＩＣより天草方面に約60分。JR三角駅より定期船で15分。熊本駅よりバス90分",
              special: "海を眺めて入る絶景の温泉と新鮮な海の幸で天草を満喫するホテル をご堪能下さい。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16615%2F16615.html",
              story: "天草・松島の多島海を間近に臨み、夕暮れに染まる海の絶景と自慢の展望大浴場・貸切露天風呂が揃う温泉リゾート「海のやすらぎ ホテル竜宮」。天草五橋の風光明媚な景色を眺めながら入る露天風呂は、塩分を含むナトリウム-塩化物泉で保温効果抜群。海にせり出すように造られた展望ラウンジや足湯バーなど、海辺の寛ぎを追求した施設が充実しています。",
              roomTip: "海一望の露天風呂付き客室「さらさ館」または展望客室。夕陽に輝く天草の島々と橋のシルエットを眼下に望む贅沢なひととき。",
              gourmetTip: "職人が腕を振るう名物海鮮会席。冬の天草伊勢海老、車海老、アワビの踊り焼き、近海本マグロなど、天草の海の恵みをこれでもかと盛り込んだ豪快な海の幸づくし。",
              highlights: [
                "天草松島の多島海を一望する絶景露天風呂＆貸切風呂・展望足湯バー完備",
                "天草五橋の夕陽パノラマと塩化物泉の温まり湯で冷え知らずの贅沢温浴",
                "天草伊勢海老・車海老・アワビの踊り焼きが揃う豪華竜宮名物海鮮膳"
              ]
            },
            {
              id: 5,
              name: "天草温泉　ホテルアレグリアガーデンズ天草",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/67290/67290.jpg",
              rating: 4.48,
              reviews: 758,
              price: "¥9,000〜",
              access: "ＪＲ熊本駅から車で１５０分／本渡バスセンターから車で１０分／天草空港から車で１５分",
              special: "広大なリゾート、ゆっくりと楽しめる楽園、藍の島をお楽しみ下さい。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67290%2F67290.html",
              story: "有明海と天草の島々を見渡す小高い丘の上に建ち、5万平米もの広大な敷地に南欧風リゾートの開放感が広がる「ホテルアレグリアガーデンズ天草」。敷地内には天然温泉施設「ペルラの湯舟」があり、森に囲まれた露天風呂と海を望む大パノラマ露天風呂の2つの絶景湯浴みを楽しめます。美しい夕陽と夜の星空、朝の心地よい海風に包まれ、心身ともに深いリフレッシュを体感できます。",
              roomTip: "オーシャンビューのジュニアスイートまたは和洋室。バルコニーからどこまでも続く青い海と島並みを眺め、南欧リゾートの優雅な余暇を満喫。",
              gourmetTip: "天草近海の鮮魚や熊本県産黒毛和牛を取り入れた和食会席または欧風ディナー。冬に旬を迎える寒ブリやヒラメ、車海老、天草大王の旨みを多彩な料理法で贅沢に味わえます。",
              highlights: [
                "有明海を見晴らす丘の上の南欧風リゾート＆海と森の天然温泉「ペルラの湯舟」",
                "広大なリゾート敷地で楽しむ森林浴と海景露天風呂の2つの異なる湯浴み",
                "天草直送寒ブリやヒラメ・車海老と熊本県産黒毛和牛の贅沢季節会席"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-amber-950 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-slate-950">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85"
          alt="東シナ海の夕陽を望む天草下田温泉の露天風呂と日本の夕陽百選サンセット"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/90 text-amber-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-amber-800/50">
            <Sunset className="w-4 h-4 text-amber-300" />
            <span>11月・12月限定 東シナ海の初冬サンセットと天草伊勢海老・車海老海鮮旅</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月天草・下田温泉の冬名湯と夕陽海鮮】<br className="hidden sm:inline" />
            東シナ海サンセット露天と白鷺古湯・冬の伊勢海老＆天然車海老会席の宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            初冬の澄んだ水平線に沈みゆく日本の夕陽百選の落日。開湯700年を誇る天草下田温泉の100%源泉掛け流し露天風呂に浸かり、冬に最も甘みと身の締まりを極める天草伊勢海老・活車海老・とらふぐを堪能する至福の島旅。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-amber-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-amber-400" /> 熊本県天草市天草町・上天草市（天草空港車20〜40分）</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月天草・下田温泉】冬の伊勢海老！名宿5選","item":"https://croud-travel.pages.dev/winter-kumamoto-amakusa-shimoda-onsen-sunset-seafood-stay"}]}) }}
      />
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Sun className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Amakusa Shimoda Onsen Winter Sunset</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                白鷺が傷を癒やした700年の古湯、東シナ海の茜色に染まる至高のサンセット
              </h2>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            熊本県の西端、大小120余の島々からなる天草諸島。その西海岸に位置する「下田温泉」は、約700年前に一羽の傷ついた白鷺が湧き出るいで湯で傷を治したという伝説に由来する名湯です。九州有数の歴史を誇りながら、現在も温泉街の全宿で加水・加温・循環を一切行わない「100%源泉掛け流し」の純粋な温泉文化を守り続けています。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            下田温泉が位置する東シナ海（天草灘）沿岸は、「日本の夕陽百選」にも選定された絶景の海岸線。特に空気が澄み渡る11月から12月は、水平線にゆっくりと沈みゆく太陽が空と海を黄金色から燃えるような茜色、そして紫色のトワイライトへと染め上げる年間最高のサンセットシーズンです。露天風呂から波音に耳を傾けながら落日を眺める時間は、日常の喧騒を完全に忘れさせてくれます。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            そして冬の天草最大の魅力が、全国にその名を轟かせる極上の海の幸。黒潮と有明海の潮流が交差する豊かな漁場で育つ「天草伊勢海老」は、冬に身が最も甘く締まり、ピチピチと跳ねる「天然車海老」、冬の高級魚「天草とらふぐ」など、食通を唸らせる豪華海鮮が食卓を彩ります。世界遺産・﨑津集落の静寂な散策とともに、心洗われる冬の島旅を体感できます。
          </p>
          
          <div className="bg-amber-50/70 rounded-2xl p-5 border border-amber-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-700" /> 11月・12月の旅のハイライト
              </span>
              <p className="text-xs sm:text-sm text-amber-900 font-medium">
                東シナ海サンセット露天・白鷺古湯100%源泉掛け流し・天草伊勢海老＆車海老踊り食い
              </p>
            </div>
            <a 
              href="#hotels"
              className="px-5 py-2.5 rounded-xl bg-amber-900 hover:bg-amber-800 text-white text-xs sm:text-sm font-bold shadow-md transition shrink-0"
            >
              厳選名宿5選を見る
            </a>
          </div>
        </section>

        {/* Section: Spring Characteristics & Shirasagi Legend */}
        <section id="spring-and-legend" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-800">
              <ThermometerSun className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Pure Hot Spring Heritage</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                100%完全源泉掛け流しを守る「国民保養温泉地」下田温泉の魅力
              </h2>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            下田温泉が全国の温泉通から高く称賛される最大の理由は、すべての宿で「塩素消毒なし・循環ろ過なし・加水加温なし」の完全放流式掛け流しが徹底されている点です。地下約1,000mから自噴する温泉は湧出温度が約51℃と適温で、湧き出たそのままの鮮度で浴槽を満たしています。泉質はナトリウム-炭酸水素塩・塩化物泉。重曹成分が肌の汚れを落としてすべすべに整え、塩分が肌に薄いヴェールを作って入浴後の保温を持続させる「美肌＆温まり」のダブル効果を発揮します。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            また、上天草の松島温泉は有明海と八代海の多島美を望むロケーションにあり、こちらは良質なナトリウム-塩化物泉で保温効果が非常に高く、神経痛や筋肉痛を優しくほぐしてくれます。海風に吹かれながら東シナ海の落日を眺める下田温泉と、多島美を望む松島温泉の2つの異なる湯浴みを楽しむアイランドホッピングも天草ならではの醍醐味です。
          </p>
        </section>

        {/* Section: Sakitsu Heritage Guide */}
        <section id="sakitsu-heritage-guide" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-800">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">World Cultural Heritage Site</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の静けさに包まれる世界文化遺産『﨑津集落』教会と漁村の祈り
              </h2>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            下田温泉から車で南へ約20分。入り江の穏やかな海に面した「﨑津集落」は、2018年にユネスコ世界文化遺産に登録された歴史深い漁村です。江戸時代の過酷なキリシタン禁教期、潜伏キリシタンたちは日常の漁具やアワビ・タイラギなどの貝殻の内側の真珠光沢を聖母マリアに見立て、仏教徒や神道信者を装いながら密かに信仰を守り抜きました。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            集落の中心に建つ「﨑津教会」は、1934年にハルブ神父と地元信徒によって建てられたゴシック様式の教会で、国内でも極めて珍しい「畳敷きの教会堂」として知られます。教会の背後にある﨑津諏訪神社からは、瓦屋根が連なる伝統的な日本の漁村風景と教会の尖塔が調和した、世界中どこにもない唯一無二の景観を見渡すことができます。12月には集落周辺で温かなクリスマスライトアップも行われ、厳かな冬の旅情を深めてくれます。
          </p>
        </section>

        {/* Section 2: Highlights of Nov-Dec */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-800">
              <Sunset className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Seasonal Appeal</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の天草・下田温泉が特別な3つの理由
              </h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/70 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-bold text-slate-900 text-base">東シナ海を染める日本の夕陽百選</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                初冬の乾燥した大気が生み出すクリアな視界。水平線に沈みゆく太陽の光芒が海面に黄金の道を創り出し、客室や露天風呂から映画のワンシーンのような落日パノラマを楽しめます。
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/70 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-bold text-slate-900 text-base">天草伊勢海老＆天然車海老の旬</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                水温が下がる11月〜12月は海老の身が引き締まり甘みが凝縮するベストシーズン。ぷりっぷりの伊勢海老のお造りや車海老の踊り食い、香ばしい鬼殻焼きなど豪華絢爛な海鮮の極み。
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/70 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-bold text-slate-900 text-base">100%源泉掛け流しと世界遺産の祈り</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                塩素無添加の純度100%源泉掛け流しの湯で美肌を潤し、車で約20分の世界遺産「﨑津集落」へ。静かな漁港に佇むゴシック様式の教会と初冬の祈りの歴史に触れる感動的な島時間。
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Hotel Cards */}
        <section id="hotels" className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Featured Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              天草・下田温泉＆松島温泉 11月・12月におすすめの名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              楽天トラベルの最新API公式データをもとに、東シナ海の夕陽一望・源泉掛け流し・極上海老会席を誇る名宿を厳選。
            </p>
          </div>

          <div className="space-y-8">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-200/80 flex flex-col md:flex-row"
              >
                <div className="relative md:w-2/5 h-64 md:h-auto min-h-[260px] bg-slate-100">
                  <Image
                    src={hotel.img}
                    alt={hotel.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-slate-950/80 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
                    第{hotel.id}選
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold drop-shadow">
                    <span className="flex items-center gap-1 bg-amber-500/90 text-slate-950 px-2.5 py-1 rounded-md">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      {hotel.rating} ({hotel.reviews}件)
                    </span>
                    <span className="bg-slate-900/80 px-2.5 py-1 rounded-md text-amber-200">
                      目安 {hotel.price}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 md:w-3/5 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-amber-800 transition">
                        <a href={hotel.url} target="_blank" rel="noopener noreferrer">
                          {hotel.name}
                        </a>
                      </h3>
                      <p className="text-xs text-slate-500 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                        <span>{hotel.access}</span>
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {hotel.story}
                    </p>

                    <div className="space-y-2 pt-1 border-t border-slate-100 text-xs">
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded shrink-0">客室の魅力</span>
                        <span className="text-slate-600">{hotel.roomTip}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-rose-900 bg-rose-50 px-2 py-0.5 rounded shrink-0">冬の極上食</span>
                        <span className="text-slate-600">{hotel.gourmetTip}</span>
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-2">
                      {hotel.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                      楽天トラベル公認リンク・最新宿泊プラン
                    </span>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-900 hover:bg-amber-800 text-white text-xs sm:text-sm font-bold shadow transition group w-full sm:w-auto justify-center"
                    >
                      <span>空室・宿泊プランを確認</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Gourmet Guide */}
        <section id="gourmet" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-800">
              <Fish className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Amakusa Winter Seafood Splendor</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                4. 天草の初冬グルメ：天草伊勢海老・天然車海老・天草大王の至高の饗宴
              </h2>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            有明海・八代海・東シナ海という3つの豊かな海に囲まれた天草は、日本有数の水産物の宝庫。特に冬の初めに最盛期を迎える「天草伊勢海老」は、荒波に揉まれて身が引き締まり、透き通るような白身の強い甘みと濃厚な味噌が絶品です。殻ごと豪快に焼き上げる鬼殻焼きや、翌朝の朝食で味わう伊勢海老の出汁が利いた味噌汁は至福のひとときをもたらします。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            さらに天草が世界に誇る「車海老」は、活きたまま剥いて口に運ぶとプリッとした弾力とともに濃厚な甘みが広がり、塩焼きにすれば香ばしい殻の風味とともに丸ごと美味しくいただけます。さらに幻の日本最大級の地鶏「天草大王」の水炊きやタタキ、熊本特産のブランド和牛「あか牛」のステーキなど、冬の天草は肉と魚介の最高峰が競演します。
          </p>
        </section>

        {/* Section 5: Model Course */}
        <section id="itinerary" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-800">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Recommended Winter Course</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                5. 1泊2日 天草・下田温泉〜世界遺産﨑津集落・夕陽露天 王道モデルコース
              </h2>
            </div>
          </div>
          <div className="space-y-6">
            <div className="border-l-2 border-amber-800 pl-4 sm:pl-6 space-y-2">
              <span className="text-xs font-extrabold text-amber-800 uppercase tracking-wider">【1日目】天草五橋ドライブ〜世界遺産﨑津集落＆東シナ海サンセット露天</span>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                11:00 熊本市内または熊本空港出発 → 天草五橋を渡る絶景ドライブ
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                島々を結ぶ5つの橋を渡りながら美しい海と多島美を満喫。途中の松島で海鮮丼ランチ。
              </p>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base pt-2">
                14:00 世界文化遺産「﨑津集落」散策（﨑津教会と静かな漁村の祈り）
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                畳敷きの﨑津教会やトウヤ（細い路地）、資料館「みなと屋」をめぐり潜伏キリシタンの歴史に触れる。
              </p>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base pt-2">
                16:00 下田温泉の宿へチェックイン → 露天風呂から日本の夕陽百選を鑑賞
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                白鷺古湯の源泉掛け流しに浸かりながら、東シナ海が茜色に染まる荘厳な日没を堪能。
              </p>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base pt-2">
                19:00 天草伊勢海老・天然車海老の豪華海鮮会席ディナー
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                甘みたっぷりの活伊勢海老刺しや車海老の踊り食い、地魚の舟盛りを地酒とともに味わう贅沢。
              </p>
            </div>

            <div className="border-l-2 border-slate-300 pl-4 sm:pl-6 space-y-2 pt-2">
              <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">【2日目】朝の潮騒露天風呂〜妙見浦奇岩絶景＆天草イルカウォッチング</span>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                07:30 朝の波音を聴きながらの露天風呂 → 伊勢海老味噌汁の朝食
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                静かな朝の東シナ海を眺めながらの入浴。前夜の伊勢海老の頭を使った極上味噌汁で目覚める。
              </p>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base pt-2">
                09:30 国の名勝「妙見浦」の象岩奇岩美を鑑賞
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                波の浸食によってできた象のような形の巨大な洞門岩と荒波の絶景を展望所から見学。
              </p>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base pt-2">
                11:30 通詞島沖の年中会える「天草野生イルカウォッチング」
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                約200頭の野生のミナミハンドウイルカが船のすぐ側を泳ぎ回る大迫力のクルーズ。
              </p>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base pt-2">
                14:30 本渡または三角駅より帰路へ
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                天草サブレや海産物のお土産を購入し、心洗われた1泊2日の島旅を締めくくります。
              </p>
            </div>
          </div>
        </section>

        {/* Section: Climate, Clothing & Island Transport */}
        <section id="climate-transport" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-800">
              <Footprints className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Island Travel Preparation</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の気候・おすすめの服装・島巡りアクセスアドバイス
              </h2>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            天草は温暖な気候ですが、東シナ海に面した下田温泉や妙見浦、海沿いの展望スポットでは、初冬の冷たい季節風が強く吹き付けることがあります。日中は長袖シャツやセーターに薄手のコートで過ごせますが、夕暮れのサンセット鑑賞や夜の散策時には、防風性の高いウインドブレーカーや風を通さないコート、ストールを用意しておくと大変重宝します。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            島内の移動はレンタカーまたは自家用車が最も便利です。天草五橋（国道266号）は信号が少なく快適なシーサイドラインですが、初冬は夕暮れが早いため、16時台には宿に到着してチェックインし、日の入り（例年17時10分〜25分頃）に合わせて露天風呂やテラスで待機するのが最高の夕陽体験のコツです。また、福岡空港や熊本空港から天草エアライン（みぞか号）を利用すれば、わずか30分で天草空港へ到着できるため、遠方からのアクセスも快適です。
          </p>
        </section>

        {/* Section 6: FAQ */}
        <section id="faq" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-800">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Traveler's Q&A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                よくある質問（FAQ）と初冬の天草旅行アドバイス
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-amber-800 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Internal Links */}
        <section className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">Related Kyushu & Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい九州の名湯＆冬の海鮮・美食特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              11月・12月ならではの絶景露天風呂、温泉街の湯あかり、旬の郷土グルメを味わい尽くす全国の名宿ガイドを多数公開中。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-kumamoto-kurokawa-yuakari-illumination-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">熊本・黒川温泉</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">黒川温泉 冬の湯あかり竹灯籠と渓流露天風呂の宿</h3>
            </Link>
            <Link 
              href="/winter-saga-takeo-onsen-romon-saga-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">佐賀・武雄温泉</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">武雄温泉 国重文朱塗り楼門と最高峰A5佐賀牛会席の宿</h3>
            </Link>
            <Link 
              href="/winter-saga-ureshino-onsen-bihada-yudofu-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">佐賀・嬉野温泉</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">嬉野温泉 日本三大美肌の湯ととろける温泉湯豆腐の宿</h3>
            </Link>
            <Link 
              href="/winter-kagoshima-kirishima-onsen-ryoma-black-pork-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">鹿児島・霧島温泉</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">霧島温泉郷 龍馬ゆかりの硫黄泉と極上黒豚しゃぶしゃぶの宿</h3>
            </Link>
            <Link 
              href="/winter-yufuin-morning-mist-lake-kinrin-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">大分・由布院</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">由布院温泉 金鱗湖の幻想的な朝霧と由布岳雪景色の宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">全国の厳選温泉・宿特集まとめを見る</h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-kumamoto-amakusa-shimoda-onsen-sunset-seafood-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
