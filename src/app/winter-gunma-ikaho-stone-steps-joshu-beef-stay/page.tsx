import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Footprints, Mountain
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12月伊香保温泉】365段の石段街と黄金の湯！名宿5選',
  description: '11月から12月にかけて榛名山の澄み切った初冬の空気に包まれる群馬・伊香保温泉。365段の風情ある石段街に灯る温かな提灯、鉄分を豊富に含み体を芯から温める茶褐色の「黄金の湯」と柔らかな「白銀の湯」。とろける上州牛のすき焼きや名物水沢うどんの美食を堪能する極上冬旅ガイド。',
  keywords: '伊香保温泉 宿泊 11月 12月, 伊香保 石段街 旅館, 伊香保 黄金の湯 白銀の湯, 上州牛 温泉 宿, 伊香保温泉 おすすめ 冬, 水沢うどん 伊香保, 伊香保 モデルコース',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-gunma-ikaho-stone-steps-joshu-beef-stay/",
  },
  openGraph: {
    title: '【11・12月伊香保温泉】365段の石段街と黄金の湯！名宿5選',
    description: '11月から12月にかけて榛名山の澄み切った初冬の空気に包まれる群馬・伊香保温泉。365段の風情ある石段街に灯る温かな提灯、鉄分を豊富に含み体を芯から温める茶褐色の「黄金の湯」と柔らかな「白銀の湯」。とろける上州牛のすき焼きや名物水沢うどんの美食を堪能する極上冬旅ガイド。',
    url: 'https://croud-travel.pages.dev/winter-gunma-ikaho-stone-steps-joshu-beef-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月伊香保温泉の初冬散策】365段の石段街と黄金の湯・上州牛会席を味わう名旅館5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月伊香保温泉の初冬散策】365段の石段街と黄金の湯・上州牛会席を味わう名旅館5選",
    description: "11月から12月にかけて榛名山の澄み切った初冬の空気に包まれる群馬・伊香保温泉。365段の風情ある石段街に灯る温かな提灯、鉄分を豊富に含み体を芯から温める茶褐色の「黄金の湯」と柔らかな「白銀の湯」。とろける上州牛のすき焼きや名物水沢うどんの美食を堪能する極上冬旅ガイド。",
  }
};

export default function IkahoWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-gunma-ikaho-stone-steps-joshu-beef-stay#article",
        "headline": "【11・12月伊香保温泉の初冬散策】365段の石段街と黄金の湯・上州牛会席を味わう名旅館5選",
        "description": "11月から12月にかけて榛名山の澄み切った初冬の空気に包まれる群馬・伊香保温泉。365段の風情ある石段街に灯る温かな提灯、鉄分を豊富に含み体を芯から温める茶褐色の「黄金の湯」と柔らかな「白銀の湯」。とろける上州牛のすき焼きや名物水沢うどんの美食を堪能する極上冬旅ガイド。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "datePublished": "T00:00:00+09:00",
        "dateModified": "T00:00:00+09:00",
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
          "@id": "https://croud-travel.pages.dev/winter-gunma-ikaho-stone-steps-joshu-beef-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-gunma-ikaho-stone-steps-joshu-beef-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "伊香保温泉の11月・12月の気候と服装、雪の心配はありますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "伊香保温泉は標高約700m前後の榛名山中腹に位置するため、平野部（前橋や高崎）よりも気温が約4〜5度低くなります。11月の平均気温は約8〜10度、朝晩は5度を下回ります。12月に入ると最高気温が10度未満、朝晩は氷点下に達することもあります。防寒性の高い厚手のコートやダウンジャケット、手袋やマフラーが必須です。降雪は11月は稀ですが、12月中旬以降は雪が降ることがあるため、お車の場合は必ずスタッドレスタイヤを装着してください。"
            }
          },
          {
            "@type": "Question",
            "name": "伊香保温泉の「黄金の湯」と「白銀の湯」の違いは何ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "伊香保温泉には2つの異なる源泉があります。「黄金の湯（こがねのゆ）」は開湯以来湧き続ける硫酸塩泉で、湧出時は無色透明ですが空気に触れると鉄分が酸化して茶褐色に変化します。刺激が少なく体を芯から温めて血行を促すため『子宝の湯』としても古くから愛されています。一方、「白銀の湯（しろがねのゆ）」は近年湧出が確認されたメタけい酸を豊富に含む単純温泉で、無色透明でさらりとした肌触りが特徴。肌の新陳代謝を整える美肌の湯として評判です。"
            }
          },
          {
            "@type": "Question",
            "name": "石段街の365段を歩く際の所要時間や見どころは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "石段街の最下段から最上段の伊香保神社までは、普通に歩いて約15〜20分程度です。途中には射的場、足湯（辰の湯）、温泉まんじゅう発祥の店、お土産処などが立ち並び、立ち寄りながら散策すると約1時間〜1時間半ほど楽しめます。11月・12月の夕暮れ時（16時半頃）からは提灯に明かりが灯り、ノスタルジックで温かい情緒あふれる風景が広がります。"
            }
          },
          {
            "@type": "Question",
            "name": "伊香保温泉の名物グルメにはどのようなものがありますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "群馬が誇る最高峰ブランド黒毛和牛「上州牛」のすき焼きやステーキ、日本三大うどんの一つに数えられるコシの強い「水沢うどん」、茶褐色の生地で漉し餡を包んだ「湯の花まんじゅう（温泉まんじゅう）」、群馬特産の刺身こんにゃくや下仁田葱、岩魚の塩焼きなどが代表的です。特に冬の時期は熱々のすき焼きや鍋料理が各旅館で大人気です。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.pages.dev/winter-gunma-ikaho-stone-steps-joshu-beef-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "伊香保温泉　ホテル木暮",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6266%2F6266.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "伊香保温泉　福一",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28606%2F28606.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "岸権旅館　石段街隣接　希少源泉「黄金の湯」の宿",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6267%2F6267.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "伊香保温泉　如心の里　ひびき野",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38250%2F38250.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "伊香保温泉　千明仁泉亭（ちぎらじんせんてい）",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147464%2F147464.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "伊香保温泉　ホテル木暮",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/6266/6266.jpg",
              rating: 4.75,
              reviews: 2006,
              price: "¥19,800〜",
              access: "関越道渋川伊香保ＩＣから車２０分　ＪＲ上越線渋川駅から路線バス３０分　バス下車後お電話頂ければバス停までお迎えに参ります",
              special: "★2024年楽天お風呂評価_全国２位★北関東最大級1300坪_庭園露天付き大浴場",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6266%2F6266.html",
              story: "榛名山の雄大な大自然を望む高台に建ち、伊香保温泉随一の広大さと湯量を誇る「ホテル木暮」。天正年間から続く歴史を受け継ぐ老舗でありながら、現代のラグジュアリーな快適性を追求した温泉リゾートです。圧巻は総面積約400坪を誇る大浴殿「子の湯千両」。伊香保の伝統源泉である茶褐色の「黄金の湯」が毎分数百リットルという圧倒的なスケールで源泉かけ流しされており、広々とした露天風呂からは上州の山々が初冬の澄んだ青空にくっきりと浮かび上がります。客室も多彩で、贅沢な源泉露天風呂付き客室から落ち着きある和洋室まで、心から寛げるプライベート空間が整っています。",
              roomTip: "最上階や高層階の客室がおすすめ。初冬の朝、雪化粧を始めた赤城山や日光連山が朝日に照らされる息をのむ大パノラマを窓越しに独占できます。",
              gourmetTip: "夕食は上州の山海の恵みを贅沢に盛り込んだ創作会席。きめ細やかな霜降りと上品な甘みが特徴の「上州牛」のサーロインステーキまたは陶板すき焼きをメインに、群馬県産の新鮮な高原野菜や蒟蒻料理が彩りを添えます。",
              highlights: [
                "伊香保随一の湯量を誇る400坪の大浴殿＆上州連山パノラマ",
                "黄金の湯を源泉かけ流しで満たす多彩な露天風呂とプライベート客室風呂",
                "霜降り上州牛のサーロインや陶板すき焼きを味わう贅沢創作会席"
              ]
            },
            {
              id: 2,
              name: "伊香保温泉　福一",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/28606/28606.jpg",
              rating: 4.30,
              reviews: 1714,
              price: "¥9,636〜",
              access: "渋川駅より伊香保温泉行きバス30分、終点伊香保温泉下車。新宿駅新南口発着の高速バス有※バス停から徒歩数分バス停まで送迎有",
              special: "創業440年。石段街最上段「黄金の湯」「白銀の湯」二湯を有す数少ない宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28606%2F28606.html",
              story: "伊香保温泉のシンボルである石段街の最上段、第365段のすぐそばに佇む「福一」。創業440余年の歴史を紡ぐ伊香保を代表する名門旅館です。宿の最大の特権は、伊香保に湧く2つの源泉「黄金の湯（こがねのゆ）」と「白銀の湯（しろがねのゆ）」の両方を館内で贅沢に湯めぐりできること。鉄分を豊富に含む茶褐色の黄金の湯で身体の芯までぽかぽかに温まり、メタけい酸を豊富に含む無色透明の白銀の湯でしっとりと肌を潤す至福の入浴体験が叶います。石段街への専用出入口も備わっており、夕暮れ時の提灯散策や伊香保神社への参拝も寒さを気にせず気軽に出かけられます。",
              roomTip: "数寄屋造りの趣を今に伝える「万葉館」または眺望に優れた「千寿館」が人気。静寂に包まれた和の美意識の中で、贅沢な時間を過ごせます。",
              gourmetTip: "熟練の料理人が一椀一皿に技を尽くす季節の和会席。厳選された最高ランク上州牛のしゃぶしゃぶや炙り焼きに加え、旬の根菜や上州名物の手打ちうどんなど、滋味豊かな冬の味覚を心ゆくまで堪能できます。",
              highlights: [
                "石段最上段の好立地＆伊香保の二大名湯「黄金の湯・白銀の湯」両方を満喫",
                "創業440余年の格式とおもてなし＆石段街への専用出入口で散策抜群",
                "最高ランク上州牛のしゃぶしゃぶと群馬の旬菜を堪能する匠の和会席"
              ]
            },
            {
              id: 3,
              name: "岸権旅館　石段街隣接　希少源泉「黄金の湯」の宿",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/6267/6267.jpg",
              rating: 4.47,
              reviews: 1682,
              price: "¥9,900〜",
              access: "関越自動車道　渋川伊香保ＩＣから車で２０分　上越線渋川駅下車バスで３０分、タクシー１５分",
              special: "露天・大浴場・貸切など全てが「黄金の湯」地産地消にこだわった創作会席と絶景が自慢の老舗旅館",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6267%2F6267.html",
              story: "伊香保石段街のほぼ中間、第212段に面して堂々と構える「岸権旅館」。室町時代の天正4（1576）年創業という、伊香保屈指の歴史を誇る老舗宿です。宿の誇りは何と言っても、伊香保の貴重な本物の生源泉「黄金の湯」を100％贅沢に完全かけ流しで楽しめること。大浴場「又左衛門の湯」や展望露天風呂「離れの湯・権左衛門」を満たす湯は、空気に触れて濃い茶褐色に輝き、独特の鉄分とミネラルの香りが旅情をそそります。玄関を出ればそこは石段街のど真ん中。射的場や温泉まんじゅう店が連なるレトロな街並みを浴衣と丹前姿でそぞろ歩くにはこれ以上ない最高のロケーションです。",
              roomTip: "石段街を眼下に見下ろす街側客室や、遠く上州連山を望む山側客室が選べます。夜に提灯の灯りが連なる石段街の眺めは旅情満点です。",
              gourmetTip: "群馬のブランド肉「上州牛」と「上州銘柄豚」を食べ比べる会席プランが絶品。地元の契約農家から届く新鮮な冬野菜と合わせ、出汁の効いた鍋仕立てで温まります。",
              highlights: [
                "創業天正4年の歴史＆石段街ど真ん中に位置する100％黄金の湯完全かけ流し",
                "大浴場「又左衛門の湯」や展望露天「離れの湯」など本物の源泉力",
                "上州牛と上州銘柄豚の贅沢食べ比べ＆地産地消のこだわり会席膳"
              ]
            },
            {
              id: 4,
              name: "伊香保温泉　如心の里　ひびき野",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/38250/38250.jpg",
              rating: 4.20,
              reviews: 2625,
              price: "¥9,350〜",
              access: "JR上越線「渋川駅」よりバスまたはタクシーで15分",
              special: "静かでおだやかな空気,ゆっくりと流れる時間,ここで至福のひと時を。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38250%2F38250.html",
              story: "伊香保の温泉街中心から少し離れた静かな森の中に佇み、約1万5千坪もの広大な自然庭園に囲まれた「如心の里 ひびき野」。喧騒を離れて静かに温泉と自然に向き合いたい大人のための隠れ宿です。館内には伊香保が誇る二大名湯「黄金の湯」と「白銀の湯」の双方が引かれており、檜の香る大浴場や開放感あふれる庭園露天風呂で贅沢な湯あみを満喫できます。初冬の澄んだ夜空の下、ライトアップされた庭園の木々と星空を眺めながら浸かる露天風呂は至福そのもの。バリアフリー設計やプライベート貸切風呂も充実しており、三世代旅行やご夫婦の記念日旅行にも高い支持を得ています。",
              roomTip: "広大な庭園の木立を間近に望むテラス付き客室や、畳とベッドが融合したモダン和洋室が快適。木々のざわめきと小鳥の声に癒されます。",
              gourmetTip: "目にも鮮やかな季節の前菜から始まる創作会席料理。とろける上州牛の陶板焼きをはじめ、地元群馬の旬の恵みをふんだんに散りばめたヘルシーかつ贅沢な会席膳を個室ダイニングでゆったりいただけます。",
              highlights: [
                "1万5千坪の広大な自然庭園＆黄金と白銀の二大名湯を愉しむ静寂の隠れ宿",
                "喧騒から離れた大人の癒し空間＆広々としたバリアフリー対応客室",
                "個室ダイニングでいただく上州牛陶板焼きと旬の彩り前菜"
              ]
            },
            {
              id: 5,
              name: "伊香保温泉　千明仁泉亭（ちぎらじんせんてい）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/147464/147464.jpg",
              rating: 4.59,
              reviews: 595,
              price: "¥13,200〜",
              access: "伊香保石段街から徒歩1分☆渋川伊香保IC～車で約２５分♪東京方面からは新宿駅新南口より高速バス約2時間♪",
              special: "【立地＆風呂5つ星★】伊香保随一の湯量を誇る「黄金の湯」かけ流しをお楽しみ下さい。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147464%2F147464.html",
              story: "伊香保石段街の中段に位置し、明治の文豪・徳冨蘆花が逗留し小説『不如帰（ほととぎす）』を執筆した宿としても知られる「千明仁泉亭（ちぎらじんせんてい）」。創業500年余、伊香保の歴史とともに歩んできた風格ある純和風旅館です。宿の自慢は、伊香保で最も湧出量の多い黄金の湯の源泉分湯権「四ツ桶」の筆頭を保持していること。加水・加温・循環を一切行わない本物の純生源泉が、名物「仁乃湯」や趣の異なる4つの無料貸切風呂に惜しげもなく注がれています。大正から昭和初期の木造建築の美学を受け継ぐ館内は、どこを切り取っても絵になるノスタルジーに満ちています。",
              roomTip: "昔ながらの職人技が光る数寄屋造りの本館客室、または石段街を見下ろす眺望和室がおすすめ。歴史の重みと木の温もりに包まれます。",
              gourmetTip: "創業以来受け継がれてきた伝統の出汁を基本とする本格会席。上州牛のすき焼きやロースト、利根川水系の清流で育った川魚、地元の旬野菜など、滋味深く心温まる料理が一膳ずつ丁寧に運ばれます。",
              highlights: [
                "創業500年の文豪ゆかりの宿＆黄金の湯生源泉を注ぐ4つの無料貸切風呂",
                "加水・加温・循環一切なしの純生源泉＆数寄屋造りの趣ある建築美",
                "創業以来の伝統出汁が引き立てる上州牛すき焼きと郷土会席料理"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-amber-800 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-950">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85"
          alt="初冬の伊香保温泉・提灯灯る365段の石段街と湯けむり"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-900/90 text-amber-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-amber-700/50">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>11月・12月限定 関東名湯・初冬の石段情緒特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月伊香保温泉の初冬散策】<br className="hidden sm:inline" />
            365段の石段街と黄金の湯・上州牛会席を味わう名旅館5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            榛名山麓の澄み渡る初冬の青空に、湯けむりがまっすぐ立ち上る。夕暮れに赤く灯る石段街の提灯、鉄分香る茶褐色の名湯「黄金の湯」に浸かり、極上の上州牛すき焼きに舌鼓を打つ至福の週末旅へ。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-amber-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-amber-400" /> 群馬県渋川市（伊香保温泉）</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月伊香保温泉】365段の石段街と黄金の湯！名宿5選","item":"https://croud-travel.pages.dev/winter-gunma-ikaho-stone-steps-joshu-beef-stay"}]}) }}
      />
        
        {/* Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Mountain className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Atmosphere & Heritage</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                澄み渡る初冬の風と提灯の温もり。400余年の歴史が息づく石段の街
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            群馬県榛名山の中腹、標高約700メートルに広がる伊香保温泉。万葉集の東歌にもその名が詠まれた古い歴史を持ち、現在の温泉街の骨格である「365段の石段街」は、戦国時代の天正4（1576）年に武田勝頼の命を受けた真田昌幸らによって築かれた日本最初の計画温泉都市と伝えられています。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            11月に入ると、榛名山を取り巻く木々の紅葉が深まり、下旬から12月にかけては山頂付近から初雪の便りが舞い込みます。初冬の伊香保は、関東平野を見下ろす圧倒的な視界の抜けの良さが最大の魅力。冷涼で澄み切った大気の中、石段の中央を流れる源泉水路「小間口（こまぐち）」から立ち上る湯けむりが、どこか懐かしく温かな風情を醸し出します。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            伊香保の命とも言えるのが「黄金の湯（こがねのゆ）」。カルシウム・ナトリウム―硫酸塩・炭酸水素塩・塩化物温泉の泉質を持ち、空気に触れて独特の茶褐色へと変化する生源泉は、冷え切った身体の末梢血管まで拡張させ、芯まで熱をじんわりと染み渡らせます。さらに平成に入って湧出が確認された無色透明の「白銀の湯（しろがねのゆ）」と合わせた二大名湯の湯めぐりは、美肌と疲労回復を求める温泉好きにはたまりません。石段街の散策後に宿で味わう、甘辛い割り下で煮立てた「上州牛のすき焼き」と日本三大うどん「水沢うどん」の喉越しは、冬旅の最高のクライマックスです。
          </p>
          
          <div className="bg-amber-50/70 rounded-2xl p-5 border border-amber-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-700" />
                <span>11月・12月 伊香保温泉の旅のハイライト</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                1年365日繁栄を願う365段の石段・夕暮れの提灯点灯・茶褐色の黄金の湯源泉かけ流し・A5ランク上州牛
              </p>
            </div>
            <span className="px-3.5 py-1.5 rounded-full bg-amber-800 text-white font-bold text-xs whitespace-nowrap shadow-sm">
              東京から車で約2時間
            </span>
          </div>
        </section>

        {/* Climate & Travel Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-stone-100 text-stone-700">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Travel Planning Guide</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                11月・12月の気候・服装＆快適アクセスのコツ
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <span className="text-xs font-bold text-amber-800 flex items-center gap-1.5">
                <Snowflake className="w-4 h-4 text-amber-700" /> 気温と防寒対策
              </span>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                11月平均気温は約9℃、12月は約3℃まで低下。朝晩は氷点下に冷え込みます。石段街は風が通りやすいため、風を通さないダウンやウールコート、マフラー、手袋が必須です。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <span className="text-xs font-bold text-amber-800 flex items-center gap-1.5">
                <Footprints className="w-4 h-4 text-amber-700" /> 石段歩きの足元対策
              </span>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                365段の石段は段差や勾配があり、早朝や夜間は霜や結露で滑りやすくなります。歩きやすいスニーカーや滑りにくいブーツでの散策を強く推奨します。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <span className="text-xs font-bold text-amber-800 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-700" /> 雪道とタイヤ規制
              </span>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                関越道渋川伊香保ICから約20分。11月はノーマルタイヤでも走行可能な日が多いですが、12月中旬以降は急な降雪や早朝の路面凍結に備えスタッドレスタイヤ必須です。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel List */}
        <section className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-extrabold text-amber-800 uppercase tracking-widest bg-amber-100/60 px-3.5 py-1 rounded-full">
              SELECTED HOTELS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900">
              【11・12月】伊香保温泉の極上滞在を叶える名旅館5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto">
              楽天トラベルで4.2以上の高評価を獲得している、本物の黄金の湯源泉・上州牛会席・石段街アクセスのすべてを兼ね備えた名宿を厳選しました。
            </p>
          </div>

          <div className="space-y-12">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-md border border-stone-200/80 hover:shadow-xl transition-all duration-300 flex flex-col lg:flex-row"
              >
                {/* Image Box */}
                <div className="lg:w-5/12 relative min-h-[300px] lg:min-h-full bg-stone-100">
                  <Image
                    src={hotel.img}
                    alt={hotel.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-stone-900/85 backdrop-blur-md text-amber-300 font-extrabold px-3 py-1.5 rounded-xl text-xs sm:text-sm shadow-md border border-amber-500/30">
                    第{hotel.id}位 厳選名宿
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-stone-200/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-500 font-bold block">楽天トラベル評価</span>
                      <div className="flex items-center gap-1.5 text-amber-800 font-extrabold text-base">
                        <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                        <span>{hotel.rating}</span>
                        <span className="text-[11px] text-stone-400 font-normal">({hotel.reviews}件)</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-stone-500 font-bold block">参考宿泊料金（1名）</span>
                      <span className="text-stone-900 font-black text-sm sm:text-base text-amber-900">{hotel.price}</span>
                    </div>
                  </div>
                </div>

                {/* Content Box */}
                <div className="lg:w-7/12 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div>
                      <span className="text-[11px] text-amber-800 font-bold tracking-wider uppercase block mb-1">
                        {hotel.special}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                        {hotel.name}
                      </h3>
                      <p className="text-xs text-stone-500 mt-1 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-amber-700" />
                        <span>{hotel.access}</span>
                      </p>
                    </div>

                    <p className="text-stone-700 text-sm leading-relaxed">
                      {hotel.story}
                    </p>

                    {/* Room & Gourmet Tips */}
                    <div className="space-y-2.5 pt-2">
                      <div className="bg-amber-50/60 rounded-xl p-3 border border-amber-200/60 text-xs leading-relaxed text-stone-700">
                        <strong className="text-amber-900 font-bold flex items-center gap-1 mb-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" /> おすすめ客室の選び方:
                        </strong>
                        {hotel.roomTip}
                      </div>
                      <div className="bg-stone-50 rounded-xl p-3 border border-stone-200 text-xs leading-relaxed text-stone-700">
                        <strong className="text-stone-900 font-bold flex items-center gap-1 mb-0.5">
                          <Utensils className="w-3.5 h-3.5 text-amber-700" /> 夕食・ご当地美食のこだわり:
                        </strong>
                        {hotel.gourmetTip}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block">この宿の注目ポイント</span>
                      <ul className="space-y-1">
                        {hotel.highlights.map((item: string, hIdx: number) => (
                          <li key={hIdx} className="text-xs text-stone-600 flex items-start gap-1.5">
                            <span className="text-amber-700 font-bold mt-0.5">✔</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Booking Link */}
                  <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-stone-500 hidden sm:inline">
                      ※空室状況・最新プランは楽天トラベル公式でご確認ください
                    </span>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-amber-950 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                    >
                      <span>楽天トラベルでプラン・空室を見る</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 1泊2日 理想の初冬モデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Model Course</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                【1泊2日】初冬の伊香保温泉を満喫する王道モデルコース
              </h2>
            </div>
          </div>

          <div className="relative border-l-2 border-amber-300 ml-4 pl-6 space-y-8 my-6">
            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-amber-700 ring-4 ring-amber-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-amber-800 tracking-wider">1日目 12:00</span>
                <h3 className="text-base font-bold text-stone-900">水沢うどん街道で本場のコシと舞茸天ぷらを堪能</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  関越道渋川伊香保ICから車で約15分。日本三大うどんの一つ「水沢うどん」の老舗が軒を連ねる街道へ。透き通るような白さと強いコシを持つ冷水で締められたざるうどんを、風味豊かな胡麻だれとサクサクの舞茸天ぷらとともに味わいます。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-amber-700 ring-4 ring-amber-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-amber-800 tracking-wider">1日目 14:00</span>
                <h3 className="text-base font-bold text-stone-900">榛名神社参拝と榛名湖の初冬絶景ドライブ</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  どんな願いも叶えるパワースポットとして名高い榛名神社へ。巨岩・奇岩に囲まれた杉木立の参道を歩き清澄な空気に包まれます。その後、榛名富士が湖面に映る榛名湖畔へドライブ。12月上旬には湖畔の澄んだ空気に雪化粧の山肌が映えます。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-amber-700 ring-4 ring-amber-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-amber-800 tracking-wider">1日目 16:00</span>
                <h3 className="text-base font-bold text-stone-900">宿にチェックイン＆茶褐色「黄金の湯」で冷えた身体を温める</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  宿に到着後、まずは冷え切った身体を名湯「黄金の湯」に沈めます。湯口から注がれる豊富な生源泉がじんわりと手足の先まで温め、湯上がり後もずっとポカポカが持続します。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-amber-700 ring-4 ring-amber-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-amber-800 tracking-wider">1日目 17:00</span>
                <h3 className="text-base font-bold text-stone-900">夕暮れの石段街そぞろ歩きと熱々の湯の花まんじゅう</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  提灯が灯り始めた石段街へ。射的やスマートボールに興じ、蒸したての湯の花まんじゅうを食べ歩き。365段の頂上にある伊香保神社で旅の安全を祈願します。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-amber-700 ring-4 ring-amber-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-amber-800 tracking-wider">1日目 19:00</span>
                <h3 className="text-base font-bold text-stone-900">極上上州牛のすき焼き会席と地酒に舌鼓</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  夕食は群馬が誇る黒毛和牛「上州牛」の霜降りすき焼き会席。とろける肉の甘みと群馬県産の下仁田葱や白滝が絶妙に絡み合います。群馬の地酒「浅間山」や「谷川岳」とともに贅沢な宵を過ごします。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-amber-700 ring-4 ring-amber-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-amber-800 tracking-wider">2日目 07:30</span>
                <h3 className="text-base font-bold text-stone-900">朝の露天風呂から望む赤城山パノラマと健康朝食</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  爽快な冬晴れの朝露天風呂へ。朝日に染まる赤城山や上州連山を眺めながらの入浴は格別です。朝食には炊きたての白米と温泉卵、上州の味噌汁で元気をチャージ。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-amber-700 ring-4 ring-amber-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-amber-800 tracking-wider">2日目 10:30</span>
                <h3 className="text-base font-bold text-stone-900">伊香保ロープウェイで物聞山へ・関東平野の絶景パノラマ</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  温泉街の不如帰駅からロープウェイで約4分、標高約955mの見晴下駅へ。上の平周辺の展望台からは遠く谷川連峰や日光白根山、どこまでも広がる関東平野の絶景を見晴らせます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Q & A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                伊香保温泉の初冬旅行 よくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>伊香保温泉の11月・12月の気候と服装、雪の心配はありますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                伊香保温泉は標高約700m前後の榛名山中腹に位置するため、平野部（前橋や高崎）よりも気温が約4〜5度低くなります。11月の平均気温は約8〜10度、朝晩は5度を下回ります。12月に入ると最高気温が10度未満、朝晩は氷点下に達することもあります。防寒性の高い厚手のコートやダウンジャケット、手袋やマフラーが必須です。降雪は11月は稀ですが、12月中旬以降は雪が降ることがあるため、お車の場合は必ずスタッドレスタイヤを装着してください。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>伊香保温泉の「黄金の湯」と「白銀の湯」の違いは何ですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                伊香保温泉には2つの異なる源泉があります。「黄金の湯（こがねのゆ）」は開湯以来湧き続ける硫酸塩泉で、湧出時は無色透明ですが空気に触れると鉄分が酸化して茶褐色に変化します。刺激が少なく体を芯から温めて血行を促すため『子宝の湯』としても古くから愛されています。一方、「白銀の湯（しろがねのゆ）」は近年湧出が確認されたメタけい酸を豊富に含む単純温泉で、無色透明でさらりとした肌触りが特徴。肌の新陳代謝を整える美肌の湯として評判です。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>石段街の365段を歩く際の所要時間や見どころは？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                石段街の最下段から最上段の伊香保神社までは、普通に歩いて約15〜20分程度です。途中には射的場、足湯（辰の湯）、温泉まんじゅう発祥の店、お土産処などが立ち並び、立ち寄りながら散策すると約1時間〜1時間半ほど楽しめます。11月・12月の夕暮れ時（16時半頃）からは提灯に明かりが灯り、ノスタルジックで温かい情緒あふれる風景が広がります。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>伊香保温泉の名物グルメにはどのようなものがありますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                群馬が誇る最高峰ブランド黒毛和牛「上州牛」のすき焼きやステーキ、日本三大うどんの一つに数えられるコシの強い「水沢うどん」、茶褐色の生地で漉し餡を包んだ「湯の花まんじゅう（温泉まんじゅう）」、群馬特産の刺身こんにゃくや下仁田葱、岩魚の塩焼きなどが代表的です。特に冬の時期は熱々のすき焼きや鍋料理が各旅館で大人気です。
              </p>
            </div>
          </div>
        </section>

        {/* Internal Link Mesh */}
        <section className="bg-stone-100 rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-amber-800 uppercase tracking-widest block">EXPLORE MORE WINTER DESTINATIONS</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              あわせて読みたい！11月・12月の冬特集＆周辺名湯ガイド
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link 
              href="/winter-gunma-kusatsu-yukimi-onsen-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-amber-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-amber-800 uppercase block mb-1">群馬の冬名湯</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-amber-800 transition line-clamp-2">
                【草津温泉】湯畑の冬景色と雪見露天風呂・名湯湯もみ体験
              </h3>
            </Link>

            <Link 
              href="/winter-kanagawa-hakone-fuji-view-onsen-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-amber-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-amber-800 uppercase block mb-1">関東の冬絶景</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-amber-800 transition line-clamp-2">
                【箱根芦ノ湖】冬晴れの雪化粧富士を望む絶景露天風呂＆極上宿
              </h3>
            </Link>

            <Link 
              href="/winter-tochigi-okunikko-yumoto-snow-onsen-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-amber-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-amber-800 uppercase block mb-1">北関東の雪見秘湯</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-amber-800 transition line-clamp-2">
                【奥日光湯元温泉】乳白色のにごり湯と白銀の静寂・雪見露天宿
              </h3>
            </Link>

            <Link 
              href="/winter-yamagata-ginzan-onsen-snow-taisho-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-amber-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-amber-800 uppercase block mb-1">東北の初雪特集</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-amber-800 transition line-clamp-2">
                【銀山温泉】白銀の温泉街に灯るガス灯と尾花沢牛会席・極上雪見宿
              </h3>
            </Link>

            <Link 
              href="/winter-gifu-gero-onsen-fireworks-hida-beef-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-amber-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-amber-800 uppercase block mb-1">東海の冬花火</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-amber-800 transition line-clamp-2">
                【下呂温泉】冬花火ミュージカルと日本三名泉美肌湯・飛騨牛会席
              </h3>
            </Link>

            <Link 
              href="/winter-nagano-achimura-hirugami-starry-sky-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-amber-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-amber-800 uppercase block mb-1">信州の星空名湯</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-amber-800 transition line-clamp-2">
                【阿智村・昼神温泉】日本一の満天星空ナイトツアーと極上美肌湯
              </h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-gunma-ikaho-stone-steps-joshu-beef-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
