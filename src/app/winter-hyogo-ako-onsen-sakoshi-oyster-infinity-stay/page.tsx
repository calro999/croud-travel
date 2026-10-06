import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves, Wine, ThermometerSun, Footprints, SunMedium, Anchor
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12月兵庫・播州赤穂温泉】瀬戸内インフィニティ絶景露天！名宿5選',
  description: '11月下旬を迎えると、瀬戸内海・播磨灘に面した兵庫県「播州赤穂温泉」は、名水百選千種川の森のミネラルが注ぎ込む坂越湾で育つ名物「坂越牡蠣（さ。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '赤穂温泉 宿泊, 赤穂温泉 11月 12月, 銀波荘 赤穂, 潮彩きらら祥吉, 呑海楼, 赤穂パークホテル, 鹿久居荘, 坂越牡蠣 宿, 赤穂義士祭 宿泊, インフィニティ露天風呂 赤穂',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-hyogo-ako-onsen-sakoshi-oyster-infinity-stay/"
  },
  openGraph: {
    title: '【11・12月兵庫・播州赤穂温泉】瀬戸内インフィニティ絶景露天！名宿5選',
    description: '11月下旬を迎えると、瀬戸内海・播磨灘に面した兵庫県「播州赤穂温泉」は、名水百選千種川の森のミネラルが注ぎ込む坂越湾で育つ名物「坂越牡蠣（さ。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-hyogo-ako-onsen-sakoshi-oyster-infinity-stay',
    siteName: 'クラドトラベル (Croud Travel)',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '冬の赤穂温泉と播磨灘のインフィニティ絶景露天風呂'
      }
    ]
  }
};

const faqList = [
  {
    "q": "赤穂温泉の11月・12月の気候や気温、海の様子はどうですか？",
    "a": "瀬戸内海特有の温暖な気候に恵まれた兵庫県赤穂市は、冬でも晴天率が非常に高く、東北や日本海側のような豪雪に見舞われることはありません。11月上旬から中旬の最高気温は15〜18℃、最低気温は7〜10℃前後で、日中は日差しがあれば上着なしでも散策できる穏やかさです。11月下旬から12月に入ると最高気温が10〜13℃、朝晩は2〜5℃まで冷え込みますが、氷点下になる日は稀です。ただし赤穂御崎の海沿いは播磨灘からの潮風が吹き付けるため、体感温度は低くなります。風を通さないウールコートやライトダウン、ストールなどをご準備いただくと、岬の散策や露天風呂の湯浴みを快適にお楽しみいただけます。"
  },
  {
    "q": "「坂越牡蠣（さこしかき）」はなぜ日本一美味しいと言われるのですか？",
    "a": "坂越牡蠣が育つ坂越湾は、名水百選に選ばれる清流「千種川（ちくさがわ）」が豊かな森のミネラルと良質な植物プランクトンを豊富に運び込む特別な海域です。さらに湾口が生島（国の天然記念物）や岬に守られて波が極めて穏やかなため、牡蠣にストレスがかかりません。通常2〜3年かかる牡蠣の成長が、坂越ではわずか1年（一年牡蠣）で大粒かつ丸々と肥育されます。1年物は殻が薄くて身がぎっしり詰まっており、加熱しても身が縮まないのが最大の特徴。特有の磯臭さやえぐみが一切なく、清らかな甘みとクリーミーなコクが際立ち、一度食べると他の牡蠣が食べられなくなると全国の美食家に絶賛されています。"
  },
  {
    "q": "12月14日に開催される「赤穂義士祭」とはどんなお祭りですか？",
    "a": "元禄15年（1702年）12月14日、赤穂藩の筆頭家老・大石内蔵助をはじめとする赤穂四十七士が吉良上野介邸へ討ち入りを果たした史実を称え、毎年12月14日に赤穂市全域で開催される市内最大の歴史伝統祭です。最大の見どころは「義士行列」で、大石内蔵助役の著名な俳優を先頭に、陣羽織に身を包んだ四十七士が市街地や赤穂城跡を堂々と練り歩きます。また、大名行列や義士娘パレード、忠臣蔵名場面の寸劇などが繰り広げられ、全国から十万人規模の忠臣蔵ファンや観光客が訪れ、城下町全体が江戸時代へとタイムスリップしたような熱気に包まれます。"
  },
  {
    "q": "京阪神や東京方面からのアクセス方法と周辺観光の回り方は？",
    "a": "鉄道アクセスが極めて良好です。JR山陽本線・東海道本線の新快速を利用すれば、JR大阪駅から播州赤穂駅まで乗り換えなし約1時間35分、三ノ宮駅から約1時間15分で到着します。東京方面からは東海道・山陽新幹線で姫路駅または相生駅まで行き、赤穂線に乗り換えて約25〜30分です。播州赤穂駅からは各旅館の送迎バスや路線バスで約10〜15分で赤穂御崎・温泉街に到着します。車の場合は山陽自動車道・赤穂ICより約10〜15分。赤穂城跡、大石神社、息継ぎ井戸、坂越の古い町並み（坂越浦）などをめぐるドライブや観光がスムーズに楽しめます。"
  },
  {
    "q": "赤穂温泉の泉質の特徴と「インフィニティ露天風呂」の夕日の見どころは？",
    "a": "赤穂温泉の泉質は「強塩・高張性弱アルカリ性カルシウム・ナトリウム-塩化物温泉」。地下深くから湧き出る源泉は塩分濃度が非常に高く、海水の成分に似たミネラルを豊富に含んでいます。この強塩泉は浸かるだけで皮膚表面に塩分の皮膜を作り、体内の熱を逃がさないため「熱の湯」と呼ばれ、冷え性や関節痛、美肌に優れた効果を発揮します。また、赤穂御崎は「日本の夕陽百選」に選定された絶景地。銀波荘をはじめとする海沿いのインフィニティ露天風呂に浸かると、夕方16時30分〜17時頃、海と空と浴槽が黄金色から茜色のグラデーションに染まり、奇跡のような夕景湯浴みが堪能できます。"
  }
];

export default function AkoOnsenWinterFeature() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-hyogo-ako-onsen-sakoshi-oyster-infinity-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-hyogo-ako-onsen-sakoshi-oyster-infinity-stay"
        },
        "headline": "【11・12月兵庫・播州赤穂温泉の播磨灘夕景と11月解禁坂越牡蠣】赤穂義士祭の歴史情緒・瀬戸内インフィニティ絶景露天の宿5選",
        "description": "11月下旬を迎えると、瀬戸内海・播磨灘に面した兵庫県「播州赤穂温泉」は、名水百選千種川の森のミネラルが注ぎ込む坂越湾で育つ名物「坂越牡蠣（さこしかき）」の本格解禁とともに一年で最も美食の熱気に沸き立ちます。大粒で火を通しても縮まず、甘く濃厚なミルキーさを誇る坂越牡蠣の焼き・蒸し・鍋・フライのフルコースを堪能。さらに12月14日は赤穂浪士討ち入りの「赤穂義士祭」が開催され、城下町全体が歴史絵巻の賑わいに包まれます。波打ち際すれすれのインフィニティ露天風呂で瀬戸内の夕日と海に溶け込む至福の湯浴みを満喫する厳選旅館5選を徹底解説。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "2026-09-28T07:00:00+09:00",
        "dateModified": "2026-09-28T07:00:00+09:00",
        "publisher": {
          "@type": "Organization",
          "name": "Croud Travel",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.pages.dev/logo.png"
          }
        },
        "author": {
          "@type": "Organization",
          "name": "Croud Travel 瀬戸内名湯・海鮮美食取材班"
        },
        "inLanguage": "ja"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.pages.dev/winter-hyogo-ako-onsen-sakoshi-oyster-infinity-stay#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "ホーム",
            "item": "https://croud-travel.pages.dev/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "特集一覧",
            "item": "https://croud-travel.pages.dev/features"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "兵庫・播州赤穂温泉 播磨灘夕景と坂越牡蠣・インフィニティ露天の宿",
            "item": "https://croud-travel.pages.dev/winter-hyogo-ako-onsen-sakoshi-oyster-infinity-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-hyogo-ako-onsen-sakoshi-oyster-infinity-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "赤穂温泉の11月・12月の気候や気温、海の様子はどうですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "瀬戸内海特有の温暖な気候に恵まれた兵庫県赤穂市は、冬でも晴天率が非常に高く、東北や日本海側のような豪雪に見舞われることはありません。11月上旬から中旬の最高気温は15〜18℃、最低気温は7〜10℃前後で、日中は日差しがあれば上着なしでも散策できる穏やかさです。11月下旬から12月に入ると最高気温が10〜13℃、朝晩は2〜5℃まで冷え込みますが、氷点下になる日は稀です。ただし赤穂御崎の海沿いは播磨灘からの潮風が吹き付けるため、体感温度は低くなります。風を通さないウールコートやライトダウン、ストールなどをご準備いただくと、岬の散策や露天風呂の湯浴みを快適にお楽しみいただけます。"
            }
          },
          {
            "@type": "Question",
            "name": "「坂越牡蠣（さこしかき）」はなぜ日本一美味しいと言われるのですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "坂越牡蠣が育つ坂越湾は、名水百選に選ばれる清流「千種川（ちくさがわ）」が豊かな森のミネラルと良質な植物プランクトンを豊富に運び込む特別な海域です。さらに湾口が生島（国の天然記念物）や岬に守られて波が極めて穏やかなため、牡蠣にストレスがかかりません。通常2〜3年かかる牡蠣の成長が、坂越ではわずか1年（一年牡蠣）で大粒かつ丸々と肥育されます。1年物は殻が薄くて身がぎっしり詰まっており、加熱しても身が縮まないのが最大の特徴。特有の磯臭さやえぐみが一切なく、清らかな甘みとクリーミーなコクが際立ち、一度食べると他の牡蠣が食べられなくなると全国の美食家に絶賛されています。"
            }
          },
          {
            "@type": "Question",
            "name": "12月14日に開催される「赤穂義士祭」とはどんなお祭りですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "元禄15年（1702年）12月14日、赤穂藩の筆頭家老・大石内蔵助をはじめとする赤穂四十七士が吉良上野介邸へ討ち入りを果たした史実を称え、毎年12月14日に赤穂市全域で開催される市内最大の歴史伝統祭です。最大の見どころは「義士行列」で、大石内蔵助役の著名な俳優を先頭に、陣羽織に身を包んだ四十七士が市街地や赤穂城跡を堂々と練り歩きます。また、大名行列や義士娘パレード、忠臣蔵名場面の寸劇などが繰り広げられ、全国から十万人規模の忠臣蔵ファンや観光客が訪れ、城下町全体が江戸時代へとタイムスリップしたような熱気に包まれます。"
            }
          },
          {
            "@type": "Question",
            "name": "京阪神や東京方面からのアクセス方法と周辺観光の回り方は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "鉄道アクセスが極めて良好です。JR山陽本線・東海道本線の新快速を利用すれば、JR大阪駅から播州赤穂駅まで乗り換えなし約1時間35分、三ノ宮駅から約1時間15分で到着します。東京方面からは東海道・山陽新幹線で姫路駅または相生駅まで行き、赤穂線に乗り換えて約25〜30分です。播州赤穂駅からは各旅館の送迎バスや路線バスで約10〜15分で赤穂御崎・温泉街に到着します。車の場合は山陽自動車道・赤穂ICより約10〜15分。赤穂城跡、大石神社、息継ぎ井戸、坂越の古い町並み（坂越浦）などをめぐるドライブや観光がスムーズに楽しめます。"
            }
          },
          {
            "@type": "Question",
            "name": "赤穂温泉の泉質の特徴と「インフィニティ露天風呂」の夕日の見どころは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "赤穂温泉の泉質は「強塩・高張性弱アルカリ性カルシウム・ナトリウム-塩化物温泉」。地下深くから湧き出る源泉は塩分濃度が非常に高く、海水の成分に似たミネラルを豊富に含んでいます。この強塩泉は浸かるだけで皮膚表面に塩分の皮膜を作り、体内の熱を逃がさないため「熱の湯」と呼ばれ、冷え性や関節痛、美肌に優れた効果を発揮します。また、赤穂御崎は「日本の夕陽百選」に選定された絶景地。銀波荘をはじめとする海沿いのインフィニティ露天風呂に浸かると、夕方16時30分〜17時頃、海と空と浴槽が黄金色から茜色のグラデーションに染まり、奇跡のような夕景湯浴みが堪能できます。"
            }
          }
        ]
      }
    ]
  };

  const hotels = [
            {
              id: 1,
              name: "赤穂温泉　絶景露天風呂の宿　銀波荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/19403/19403.jpg",
              rating: 4.43,
              reviews: 1383,
              price: "¥13,200〜",
              access: "JR山陽本線・播州赤穂駅より路線バス約20分「御崎バス停」より徒歩1分・無料送迎あり／山陽自動車道・赤穂ＩＣより約10分",
              special: "ＴＶや雑誌でも多数掲載！海と温泉が一体になって全身を包みこむ体験を堪能できる絶景露天風呂が自慢の宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19403%2F19403.html",
              story: "瀬戸内海国立公園の岬の突端、波打ち際の岩肌にせり出すように建つ赤穂温泉の象徴的絶景宿「赤穂温泉 絶景露天風呂の宿 銀波荘（ぎんぱそう）」。全国の温泉ファンを虜にする名物インフィニティ露天風呂「天海の湯」では、浴槽の湯面と播磨灘の海面が継ぎ目なく一体化し、まるで海に浮かんでいるかのような神秘的な浮遊感に包まれます。特に11月・12月は空気が澄み渡り、夕暮れ時には瀬戸内海を茜色から群青色へと染め上げる奇跡のマジックアワーが眼前に展開。夕食には11月下旬に解禁されたばかりの坂越牡蠣を贅沢に使った「特選牡蠣会席」が並び、ぷりぷりの生牡蠣や宝楽焼き、牡蠣鍋の至福の旨味に酔いしれます。",
              roomTip: "播磨灘を一望するオーシャンビュー和洋室または温泉露天風呂付き客室。波の音を間近に聴きながら、朝焼けに輝く瀬戸内海を独占する優雅な朝。",
              gourmetTip: "「坂越牡蠣フルコース会席」。大粒の坂越牡蠣を使った焼き牡蠣、牡蠣フライ、土手鍋、牡蠣釜飯。赤穂名産の粗塩を添えた旬魚の造りも絶品。",
              highlights: [
                "海面と一体化する名物インフィニティ露天風呂「天海の湯」＆夕暮れ時の播磨灘マジックアワー",
                "11月下旬解禁の極上坂越牡蠣フルコース（焼き・蒸し・鍋・釜飯）＆波打ち際すれすれの圧倒的浮遊感",
                "播州赤穂駅からの無料送迎バス運行＆日本の夕陽百選・赤穂御崎の絶景フロントシート"
              ]
            },
            {
              id: 2,
              name: "赤穂温泉　潮彩きらら　祥吉",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/19404/19404.jpg",
              rating: 4.41,
              reviews: 1366,
              price: "¥9,900〜",
              access: "ＪＲ赤穂線播州赤穂駅～『亀の井ホテル』行きバスで「御崎」バス停、下車１分／山陽道赤穂ＩＣ（ＥＴＣ専用）より約１０分",
              special: "★5年連続楽天アワード受賞★2016年ミシュラン兵庫特別版掲載宿★瀬戸内の景色を望む絶景料理宿！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19404%2F19404.html",
              story: "「塩のまち赤穂」の歴史と海辺の風情を随所に散りばめた風雅な海辺宿「赤穂温泉 潮彩きらら 祥吉（しょうきち）」。海と空が溶け合う展望大浴場「蒼海の湯」と「爽天の湯」には、播磨灘の潮風が心地よく吹き抜け、強塩泉の名湯が身体を芯の芯までポカポカと温めてくれます。宿の自慢は、塩マイスターが選び抜いた世界各国の天然塩と赤穂伝統の塩でいただく独創的な瀬戸内会席。冬の目玉である坂越牡蠣の会席料理は、素材の瑞々しさとミルキーな甘みを最大限に引き出す職人の技が光り、美食通のリピーターから絶大な支持を集めています。",
              roomTip: "海側に面したワイドスパンの和風客室。夕刻には家島諸島や小豆島のシルエットが夕陽に浮かび上がり、旅情を優しく刺激します。",
              gourmetTip: "「祥吉流・冬の坂越牡蠣と瀬戸内旬魚会席」。大粒牡蠣の塩釜焼きや酒蒸し、赤穂塩で味わう鯛や鰆の造り、風味豊かな牡蠣雑炊。",
              highlights: [
                "夕景パノラマ展望大浴場「蒼海の湯」＆塩マイスターが選び抜くこだわり赤穂塩と坂越牡蠣会席",
                "大粒牡蠣の塩釜焼きや酒蒸しと旬魚の造り＆潮風が心地よい露天風呂と洗練されたもてなし",
                "全館に漂う和モダンな寛ぎ空間＆カップルの記念日や夫婦の大人の休日に愛される名宿"
              ]
            },
            {
              id: 3,
              name: "赤穂温泉　料理旅館　呑海楼",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/147688/147688.jpg",
              rating: 4.44,
              reviews: 755,
              price: "¥12,100〜",
              access: "ＪＲ　播州赤穂駅よりお車にて約１０分（無料送迎バス有り）。",
              special: "美しい瀬戸内海を望む全室オーシャンビュー赤穂温泉の宿。趣向を凝らした料理と絶景露天風呂を是非。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147688%2F147688.html",
              story: "赤穂御崎の高台に凛として佇み、全室から播磨灘の雄大な水平線をパノラマで見渡せる料理自慢の隠れ宿「赤穂温泉 料理旅館 呑海楼（どんかいろう）」。敷地内の高台から見下ろす瀬戸内海の夕景は息をのむ美しさで、夜には遠く行き交う船の漁火や対岸の夜景がロマンチックに揺らめきます。数奇屋造りの落ち着いた館内には、料理旅館ならではの細やかな気配りが満ちており、坂越牡蠣尽くしの特別会席では、揚げたての牡蠣天ぷらや濃厚な牡蠣味噌鍋など、一品一品が丁寧な手仕事で仕上げられています。",
              roomTip: "最上階の絶景パノラマ和室。どこまでも広がる海原と島影をパノラマで眺め、日常を忘れて読書や物思いに耽る贅沢な時間。",
              gourmetTip: "「呑海楼特選・冬の坂越牡蠣づくし会席」。生牡蠣、焼き牡蠣、牡蠣グラタン、牡蠣釜飯まで、大粒牡蠣の美味しさをあらゆる調理法で味わい尽くす贅沢。",
              highlights: [
                "赤穂御崎の高台から見下ろす播磨灘パノラマ＆全室オーシャンビューと熟練割烹の牡蠣づくし",
                "揚げたて牡蠣天ぷらや牡蠣グラタンなど多彩な創作料理＆夜の播磨灘に灯る漁火のロマンチックな眺め",
                "静寂に包まれた数奇屋造りの落ち着いた客室＆美食と絶景をじっくり楽しむ大人の隠れ家"
              ]
            },
            {
              id: 4,
              name: "赤穂温泉　赤穂パークホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/823/823.jpg",
              rating: 4.23,
              reviews: 1506,
              price: "¥5,800〜",
              access: "ＪＲ赤穂線「播州赤穂駅」から車で７分／山陽自動車道　赤穂I..C から車で７分／無料送迎バスあり（事前予約制）",
              special: "新鮮な赤穂の牡蠣が1年中食べられる！お料理自慢の天然温泉つきホテル。駐車場無料。Wi-Fi完備。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F823%2F823.html",
              story: "赤穂海浜公園に隣接し、手入れの行き届いた近代的な快適性と豊かな天然温泉をリーズナブルに享受できる「赤穂温泉 赤穂パークホテル」。自家源泉から引き湯する天然温泉「さくらの湯」は、塩分とミネラルが濃厚に溶け込んだ良質な強塩泉。美肌作用と高い温まり効果を誇り、観光やビジネスの疲れをすっきりとリフレッシュしてくれます。館内レストランで提供される冬限定の坂越牡蠣会席は、地元漁港から毎朝直送される鮮度抜群の牡蠣を惜しみなく使用しており、コストパフォーマンスの高さでも圧倒的な人気を誇ります。",
              roomTip: "清潔感あふれるモダン洋室または広々とした和室。ゆったりとしたベッドと静かな環境で、心地よいプライベートな夜を過ごせます。",
              gourmetTip: "「冬の坂越牡蠣御膳」。サクサクのジューシーな牡蠣フライと熱々の牡蠣鍋、牡蠣ご飯がセットになった冬限定の味覚膳。",
              highlights: [
                "天然温泉「さくらの湯」の温まり強塩泉＆手頃な料金で味わう冬限定の本格坂越牡蠣会席",
                "赤穂海浜公園隣接の快適な環境＆ビジネスから観光・家族旅行まで幅広く対応する上質ステイ",
                "山陽道赤穂ICから車で10分の快適ドライブアクセス＆コストパフォーマンス抜群の温泉旅"
              ]
            },
            {
              id: 5,
              name: "赤穂温泉　割烹旅館　鹿久居荘　赤穂店",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/18924/18924.jpg",
              rating: 3.85,
              reviews: 585,
              price: "¥11,860〜",
              access: "ＪＲ播州赤穂。送迎バスの御利用は、お電話でお申し込み下さい。　お迎え15時４0分・16時４0分　朝送り10時",
              special: "元禄浪漫漂う義士の街赤穂。瀬戸内海をそのまま包んだ水族館料理で、新鮮な海の幸をご堪能下さい。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18924%2F18924.html",
              story: "館内に備えられた巨大ないけすに瀬戸内海の旬魚が泳ぎ、新鮮な海の幸をその場で調理して提供する海鮮自慢の割烹旅館「赤穂温泉 割烹旅館 鹿久居荘（かくいそう）赤穂店」。獲れたての鮮魚を熟練の板前が豪快に捌く料理は圧巻で、11月下旬からの坂越牡蠣シーズンには、地元ならではの圧倒的なボリュームと驚きの鮮度で牡蠣料理が並びます。ナトリウム・カルシウム-塩化物温泉にゆっくりと浸かった後、いけす料理と地酒で乾杯する贅沢は、魚好き・牡蠣好きの旅人にとってたまらない冬の醍醐味です。",
              roomTip: "落ち着きある純和風客室。家族旅行やグループ旅行でもゆったりと足を伸ばして寛げる広めの間取りが好評。",
              gourmetTip: "「いけす割烹・坂越牡蠣と天然地魚会席」。ピチピチと跳ねる活魚の造りと、ぷりっぷりの坂越牡蠣を陶板焼きや小鍋で楽しむ豪快ディナー。",
              highlights: [
                "館内巨大いけすから揚げるピチピチ活魚料理＆大粒坂越牡蠣を豪快に味わう海鮮割烹旅館",
                "熟練の板前が目の前で捌く新鮮魚介＆ナトリウム・カルシウム強塩泉のポカポカ温まり湯浴み",
                "気取らず美味しい海の幸をお腹いっぱい満喫できるアットホームで心温まるおもてなし"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Banner */}
      <header className="relative w-full h-[360px] sm:h-[480px] flex items-end justify-center bg-slate-900 text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
          alt="冬の播州赤穂温泉と播磨灘の夕日"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/20 backdrop-blur-md border border-sky-400/30 text-sky-300 text-xs sm:text-sm font-semibold">
            <Anchor className="w-4 h-4" />
            11月・12月 冬の美食＆絶景特集｜兵庫・播州赤穂温泉
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【11・12月兵庫・播州赤穂温泉】<br className="hidden sm:inline" />
            播磨灘夕景と11月解禁坂越牡蠣・インフィニティ絶景露天の宿5選
          </h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            11月下旬の解禁を迎えた名物「坂越牡蠣」のミルキーな甘みと、12月14日赤穂義士祭の歴史絵巻。瀬戸内海の波打ち際と一体化するインフィニティ露天風呂で夕日に抱かれる極上ステイ。
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12">

        {/* Section 1: Seasonal Overview */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-sky-100">
            <div className="p-2.5 rounded-2xl bg-sky-50 text-sky-800">
              <SunMedium className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-sky-800 uppercase tracking-widest">Harima Sunset & Sakoshi Oyster Season</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月下旬解禁の「坂越牡蠣」と、忠臣蔵の魂が蘇る12月「赤穂義士祭」
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              兵庫県南西端、岡山県との境に位置し、播磨灘（瀬戸内海）の穏やかな海原を望む赤穂御崎（あこうみさき）。赤穂藩浅野家五万石の城下町として、そして「赤穂の塩」で日本全国に名を馳せたこの歴史ある街は、11月から12月にかけて一年で最も輝かしい美食と歴史のピークシーズンを迎えます。
            </p>
            <p>
              その第一の主役が、11月下旬に水揚げが本格解禁される「坂越牡蠣（さこしかき）」です。赤穂市東部の坂越湾は、名水百選・千種川が運ぶ植物プランクトンが極めて豊富で、わずか1年で殻いっぱいに丸々と育つ奇跡の海域。火を通しても決して縮まず、口に含めば濃厚なミルクのようなコクと清らかな甘みが弾け飛びます。焼き牡蠣、蒸し牡蠣、牡蠣鍋、牡蠣フライなど、宿の膳に並ぶ牡蠣フルコースはまさに冬の至福そのものです。
            </p>
            <p>
              そして12月14日、赤穂四十七士の吉良邸討ち入りを記念する「赤穂義士祭」が盛大に斎行されます。義士行列が城下町を練り歩き、歴史ファンのみならず多くの観光客で街中が熱気に包まれます。初冬の澄んだ大気のもと、夕暮れに赤く染まる播磨灘を眺めながら、名湯強塩泉のインフィニティ露天風呂に浸かるひとときは、心と身体を極上の贅沢で満たしてくれます。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Utensils className="w-5 h-5 text-sky-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">11月下旬解禁 坂越牡蠣</div>
              <div className="text-xs text-slate-600">加熱しても縮まないぷりぷりの身。特有の臭みがなく甘み濃厚な極上一年牡蠣。</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Waves className="w-5 h-5 text-sky-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">海と一体のインフィニティ露天</div>
              <div className="text-xs text-slate-600">播磨灘の海面と湯舟が溶け合う奇跡の視点。夕暮れのマジックアワーは圧巻。</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Landmark className="w-5 h-5 text-sky-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">12月14日 赤穂義士祭</div>
              <div className="text-xs text-slate-600">大石内蔵助率いる義士行列の雄姿。忠臣蔵の舞台・赤穂城跡と歴史散策。</div>
            </div>
          </div>
        </section>

        {/* Section 2: Onsen Qualities */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-sky-100">
            <div className="p-2.5 rounded-2xl bg-sky-50 text-sky-800">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-sky-800 uppercase tracking-widest">High Saline Healing Thermal Springs</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                「塩のベールが熱を逃がさない」赤穂温泉の強塩泉メカニズム
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              赤穂温泉の泉質は「含弱放射能-カルシウム・ナトリウム-塩化物強塩低温泉（高張性中性温泉）」。塩の産地として名高い赤穂の地下深くから湧出する源泉は、海水のミネラル成分を凝縮したかのような高い塩分濃度を誇ります。
            </p>
            <p>
              この強塩泉の最大の特徴は、入浴することで皮膚の表面に微細な塩分結晶の被膜を形成することです。この塩のベールが汗の蒸発を完全にブロックし、体内の温もりを逃がさない強力な「保温効果」を発揮します。初冬の海風が吹く露天風呂であっても、湯上がり後はポカポカとした暖かさが何時間も持続し、「熱の湯」として冷え性の劇的な改善や関節痛、神経痛の緩和をもたらします。
            </p>
            <p>
              さらにカルシウムイオンが豊富に含まれるため、肌を鎮静化させて引き締める美肌効果も抜群。瀬戸内の大自然が生み出した天然のタラソテラピー（海洋療法）として、日頃のストレスや旅の疲労を根本から解きほぐしてくれます。
            </p>
          </div>
        </section>

        {/* Section 3: Winter Gourmet */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-sky-100">
            <div className="p-2.5 rounded-2xl bg-sky-50 text-sky-800">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-sky-800 uppercase tracking-widest">Sakoshi Oyster & Seto Gastronomy</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月解禁坂越牡蠣を堪能し尽くす｜焼き・蒸し・土手鍋・牡蠣フライの饗宴
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              全国のオイスターラバーから「最高峰の生牡蠣」と讃えられる坂越牡蠣。その一番の魅力は、水揚げしたばかりの新鮮な殻付き牡蠣を炭火で香ばしく焼き上げる「焼き牡蠣」や、日本酒でふっくらと蒸し上げる「酒蒸し」です。熱を加えることで身がぷっくりと膨らみ、一口噛めばジュワッと溢れ出るミルキーなエキスは、雑味がなく驚くほど上品な甘みを湛えています。
            </p>
            <p>
              宿の会席料理では、赤穂特産の天然塩をパラリと振っていただく大粒牡蠣の天ぷら、特製味噌と牡蠣の旨味が絡み合う「牡蠣の土手鍋」、サクサクの衣の中にジューシーな旨味を閉じ込めた「牡蠣フライ」、そしてお米の一粒一粒に牡蠣のエキスが染み込んだ「牡蠣釜飯」まで、多彩な調理法でテーブルを埋め尽くします。さらに、播磨灘で獲れる冬の天然真鯛、脂が乗った寒鰆（サワラ）、赤穂伝統の塩味饅頭など、瀬戸内の海の恵みと伝統の技が織りなすディナーは、まさに冬旅のクライマックスです。
            </p>
          </div>
        </section>

        {/* Section 3.5: Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-sky-100">
            <div className="p-2.5 rounded-2xl bg-sky-50 text-sky-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-sky-800 uppercase tracking-widest">Ako Heritage & Coastal Scenic Route</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の赤穂散策モデルコース｜赤穂城跡・大石神社と坂越浦レトロ通り
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              JR播州赤穂駅から始まる初冬の赤穂旅。まずは赤穂四十七士の精神が今なお息づく「国史跡・赤穂城跡」と、大石内蔵助ら四十七義士を祀る「大石神社」へ。重厚な大手門や本丸庭園を散策し、宝物殿に展示された討ち入りゆかりの武具や書状に触れれば、忠臣蔵の壮大な人間ドラマが胸に迫ります。
            </p>
            <p>
              続いて東へ車を走らせ、牡蠣の聖地「坂越（さこし）」へ。北前船の寄港地として栄えた坂越浦には、白壁の酒蔵や古い町家が美しく保存された「大道（だいどう）」と呼ばれるレトロな通りが続きます。奥藤酒造の酒蔵や坂越まち並み館を見学し、港で水揚げされる坂越牡蠣の活気を感じることができます。
            </p>
            <p>
              午後遅くには赤穂御崎の「きらきら坂」へ。海へと続く石畳の階段にはお洒落なカフェやガラス工房が並び、瀬戸内海の青い海と空が広がる絶好の写真スポット。夕暮れの時刻に合わせて赤穂温泉の宿へチェックインし、インフィニティ露天風呂から茜色に染まる播磨灘の夕日を眺めるのが、至高のモデルコースです。
            </p>
          </div>
        </section>

        {/* Section 4: 5 Selected Inns */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-sky-700 uppercase tracking-widest">Featured Oceanview & Luxury Ryokan</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              海と夕日に抱かれる絶景宿｜播州赤穂温泉の厳選旅館5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              すべて楽天トラベルで高評価を獲得し、インフィニティ露天や坂越牡蠣会席に強いこだわりを持つ本物の名宿だけを厳選。
            </p>
          </div>

          <div className="space-y-8">
            {hotels.map((h) => (
              <div
                key={h.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition duration-300 flex flex-col md:flex-row"
              >
                <div className="md:w-5/12 relative h-64 md:h-auto min-h-[260px] bg-slate-100 flex-shrink-0">
                  <Image
                    src={h.img}
                    alt={h.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20">
                    <span className="text-sky-400 font-extrabold">#{h.id}</span>
                    <span>赤穂の名宿</span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    目安料金: {h.price}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                        {h.name}
                      </h3>
                      <div className="flex items-center gap-1 bg-amber-50 text-amber-900 px-2.5 py-1 rounded-full text-xs font-semibold border border-amber-200/60">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{h.rating}</span>
                        <span className="text-slate-500 font-normal">({h.reviews}件)</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {h.story}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3.5 rounded-2xl bg-sky-50/60 border border-sky-100/80 space-y-1">
                        <div className="text-[11px] font-bold text-sky-900 flex items-center gap-1.5">
                          <Landmark className="w-3.5 h-3.5 text-sky-700" />
                          客室・滞在のこだわり
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {h.roomTip}
                        </p>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-100/80 space-y-1">
                        <div className="text-[11px] font-bold text-amber-900 flex items-center gap-1.5">
                          <Utensils className="w-3.5 h-3.5 text-amber-700" />
                          旬の極上グルメ
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {h.gourmetTip}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-sky-700" />
                        この宿のおすすめポイント
                      </div>
                      <ul className="space-y-1.5">
                        {h.highlights.map((item, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-sky-700 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="text-[11px] text-slate-500">
                      <span>交通: {h.access}</span>
                    </div>
                    <a
                      href={h.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-sky-700 hover:bg-sky-800 text-white font-bold text-sm px-6 py-3 rounded-2xl shadow-sm hover:shadow transition group flex-shrink-0"
                    >
                      <span>楽天トラベルでプランを見る</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Travel Advice */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-sky-100">
            <div className="p-2.5 rounded-2xl bg-sky-50 text-sky-800">
              <Snowflake className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-sky-800 uppercase tracking-widest">Travel Planning & Climate</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の赤穂冬旅｜温暖な瀬戸内気候と海風対策・JR新快速の利便性
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-sky-800" />
                穏やかな瀬戸内気候と夕刻の海風
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                赤穂市は晴天に恵まれる日が多く、雪の心配はほとんどありません。ただし赤穂御崎の海岸沿いは播磨灘からの海風が吹くため、日没前後は急激に肌寒くなります。露天風呂や岬の散策を楽しむ際は、風を遮るコートやストールをご用意ください。
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <Footprints className="w-4 h-4 text-sky-800" />
                JR新快速で大阪・三ノ宮から直通の快適アクセス
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                JR大阪駅から新快速で乗り換えなし約1時間35分、三ノ宮駅から約1時間15分と関西主要都市からのアクセスが抜群です。駅からは旅館の送迎バスが運行しており、冬道の運転に不安がある方でも手軽に絶景温泉と坂越牡蠣を満喫できます。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-sky-100">
            <div className="p-2.5 rounded-2xl bg-sky-50 text-sky-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-sky-800 uppercase tracking-widest">Traveler's Q&A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                兵庫播州赤穂温泉冬旅のよくある質問（FAQ）
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-sky-800 font-extrabold">Q.</span>
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
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">Related Winter Features & Kansai Onsen</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい兵庫・関西の冬名湯＆極上海鮮グルメ特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              11月・12月の松葉ガニ、3年とらふぐ、名湯金泉をめぐる人気の厳選特集もぜひご覧ください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-hyogo-awajishima-sumoto-3year-torafugu-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-sky-300 font-semibold block mb-1">兵庫・淡路島温泉</span>
              <h3 className="text-sm font-bold group-hover:text-sky-200 transition">鳴門海峡の荒波が育む淡路島3年とらふぐフルコースと美肌露天の宿</h3>
            </Link>
            <Link 
              href="/winter-hyogo-arima-onsen-kinsen-kobe-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-sky-300 font-semibold block mb-1">兵庫・有馬温泉</span>
              <h3 className="text-sm font-bold group-hover:text-sky-200 transition">日本三古湯の赤湯金泉・銀泉と極上神戸牛ステーキを味わう老舗宿</h3>
            </Link>
            <Link 
              href="/winter-hyogo-kinosaki-onsen-matsuba-crab-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-sky-300 font-semibold block mb-1">兵庫・城崎温泉</span>
              <h3 className="text-sm font-bold group-hover:text-sky-200 transition">七つの外湯めぐりと11月解禁津居山ガニ・但馬牛を堪能する名宿</h3>
            </Link>
            <Link 
              href="/winter-hyogo-kasumi-onsen-shibayama-crab-matsuba-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-sky-300 font-semibold block mb-1">兵庫・香住温泉郷</span>
              <h3 className="text-sm font-bold group-hover:text-sky-200 transition">最高峰柴山ガニと香住ガニの食べ比べ・日本海雪見露天の宿</h3>
            </Link>
            <Link 
              href="/winter-kagawa-shodoshima-onsen-kankakei-olive-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-sky-300 font-semibold block mb-1">香川・小豆島温泉</span>
              <h3 className="text-sm font-bold group-hover:text-sky-200 transition">寒霞渓の初冬パノラマと瀬戸内オリーブ牛・海辺絶景露天の宿</h3>
            </Link>
            <Link 
              href="/winter-kyoto-tango-yuhigaura-matsuba-crab-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-sky-300 font-semibold block mb-1">京都・夕日ヶ浦温泉</span>
              <h3 className="text-sm font-bold group-hover:text-sky-200 transition">夕陽百選の浜詰海岸と11月解禁松葉ガニ・美人の湯に癒やされる宿</h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-hyogo-ako-onsen-sakoshi-oyster-infinity-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
