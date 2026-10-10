import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Wine, AlertTriangle, Sunrise, HeartHandshake, Eye, Mountain
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12・1月山梨】日蓮宗総本山「身延山久遠寺」！名宿5選',
  description: '山梨県南部、富士川の清流と峻嶺な山々に抱かれた身延・下部エリア。11〜1月は澄み渡る冬晴れの下、日蓮宗総本山「身延山久遠寺」が荘厳な冬景色に包まれます。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '身延山久遠寺 初詣, 奥之院思親閣 富士山, 身延山ロープウェイ 冬, 下部温泉 ぬる湯治, 下部ホテル, 旅館田中屋 身延山, 身延ゆば 会席, 富士川 冬 観光, 山梨 冬 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-yamanashi-minobusan-kuonji-hatsumode-shimobe-onsen-yuba-stay'
  },
  openGraph: {
    title: '【11・12・1月山梨】日蓮宗総本山「身延山久遠寺」！名宿5選',
    description: '山梨県南部、富士川の清流と峻嶺な山々に抱かれた身延・下部エリア。11〜1月は澄み渡る冬晴れの下、日蓮宗総本山「身延山久遠寺」が荘厳な冬景色に包まれます。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-yamanashi-minobusan-kuonji-hatsumode-shimobe-onsen-yuba-stay',
    siteName: 'クラドトラベル',
    type: 'article',
    locale: 'ja_JP',
    images: [{
      url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
      width: 1200,
      height: 630,
      alt: '冬の身延山久遠寺 三門と白銀の霊峰富士'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月山梨】日蓮宗総本山「身延山久遠寺」白銀の奥之院思親閣新春初詣と三門・千本杉！富士川冬景色・名物身延湯葉会席＆信玄隠し湯「下部温泉」ぬる湯治厳選名宿5選",
    description: "山梨県南部、富士川の清流と峻嶺な山々に抱かれた身延・下部エリア。11〜1月は澄み渡る冬晴れの下、日蓮宗総本山「身延山久遠寺」が荘厳な冬景色に包まれます。標高1153mの奥之院思親閣からは冠雪の富士山と駿河湾を一望し、樹齢400年を超える千本杉や国登録有形文化財の三門で迎える清冽な新春初詣。滋味豊かな伝統「身延山ゆば料理」を賞味し、武田信玄公が川中島の傷を癒やしたと伝わる名湯百選「下部温泉」のぬる湯治を満喫する、冬の開運紀行と厳選名宿5選。",
    images: ['https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function YamanashiMinobusanWinterFeaturePage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【11・12・1月山梨】日蓮宗総本山「身延山久遠寺」白銀の奥之院思親閣新春初詣と三門・千本杉！富士川冬景色・名物身延湯葉会席＆信玄隠し湯「下部温泉」ぬる湯治厳選名宿5選",
    "description": "山梨県南部、富士川の清流と峻嶺な山々に抱かれた身延・下部エリア。11〜1月は澄み渡る冬晴れの下、日蓮宗総本山「身延山久遠寺」が荘厳な冬景色に包まれます。標高1153mの奥之院思親閣からは冠雪の富士山と駿河湾を一望し、樹齢400年を超える千本杉や国登録有形文化財の三門で迎える清冽な新春初詣。滋味豊かな伝統「身延山ゆば料理」を賞味し、武田信玄公が川中島の傷を癒やしたと伝わる名湯百選「下部温泉」のぬる湯治を満喫する、冬の開運紀行と厳選名宿5選。",
    "image": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    "datePublished": "T09:00:00+09:00",
    "dateModified": "T09:00:00+09:00",
    "author": {
      "@type": "Organization",
      "name": "クラドトラベル編集部 温泉・神社仏閣取材班"
    },
    "publisher": {
      "@type": "Organization",
      "name": "クラドトラベル",
      "logo": {
        "@type": "ImageObject",
        "url": "https://croud-travel.pages.dev/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://croud-travel.pages.dev/winter-yamanashi-minobusan-kuonji-hatsumode-shimobe-onsen-yuba-stay"
    }
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
        "name": "山梨・身延山久遠寺＆下部温泉 冬の初詣とぬる湯治",
        "item": "https://croud-travel.pages.dev/winter-yamanashi-minobusan-kuonji-hatsumode-shimobe-onsen-yuba-stay"
      }
    ]
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "冬（11・12・1月）の身延山久遠寺で新春初詣を行う際の見どころと防寒対策は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "身延山久遠寺は標高約400mの山腹に位置し、山頂の奥之院思親閣は標高1153mに達するため、真冬の早朝や夜間は氷点下に冷え込みます。最大の見どころは、国登録有形文化財の三門、本堂での荘厳な読経（毎朝行われる朝勤）、そして身延山ロープウェイで登る奥之院思親閣からの富士山パノラマです。石段の「菩提梯（287段）」は傾斜が急で凍結の恐れもあるため、滑りにくい冬用トレッキングシューズの着用が必須。厚手のダウンコート、手袋、マフラー、使い捨てカイロを準備して参拝に臨むのが鉄則です。"
        }
      },
      {
        "@type": "Question",
        "name": "身延山ロープウェイの冬期運行状況と、奥之院思親閣からの富士山絶景のベスト時間帯は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "身延山ロープウェイは通年運行されており、久遠寺本堂裏手の山麓駅から奥之院駅まで高低差763mを片道約7分で結びます。冬（11〜1月）は空気が極めて澄み渡るため、年間を通じて最も富士山が美しく見える季節。特に午前9時〜11時頃の午前中は順光となり、白銀に輝く富士山と南アルプス、眼下を流れる富士川、遠く駿河湾まで広がる360度大パノラマをくっきりと拝めます。元旦には初日の出運行も実施されます。"
        }
      },
      {
        "@type": "Question",
        "name": "武田信玄の隠し湯「下部温泉」のぬる湯治（温冷交互浴）の正しい入浴法と効能は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "下部温泉の最大の特徴は、30度〜32度前後の冷鉱泉（アルカリ性単純温泉）と、約50度の高温泉（硫黄泉等）の2種類の源泉が存在することです。正しい入浴法は、まず加温されたあつ湯で身体を温めた後、ぬる湯（30度台）に20分〜30分ほどじっくり浸かります。体温に近いぬる湯は心臓や血管に負担をかけず副交感神経を優位にし、その後再びあつ湯に数分入る「温冷交互浴」を2〜3回繰り返すことで、末梢血管が拡張して驚くほどの血行促進・保温効果と免疫力向上効果が得られます。"
        }
      },
      {
        "@type": "Question",
        "name": "身延山名物「身延湯葉（ゆば）」の歴史と、他産地の湯葉との違いは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "身延湯葉の起源は鎌倉時代、日蓮聖人が身延山で草庵を結んだ際、弟子たちが師の健康と栄養を気遣って大豆から湯葉を作り献上したのが始まりと伝えられています。京都や日光の湯葉が薄手で繊細な食感を重んじるのに対し、身延山ゆばは良質な国産大豆と富士川水系の清らかな天然水を贅沢に使い、厚みがあり大豆の甘みと濃厚なコクが際立つのが特徴です。生湯葉のお造り、煮物、豆乳しゃぶしゃぶ、湯葉丼など多彩な調理法で親しまれています。"
        }
      },
      {
        "@type": "Question",
        "name": "冬の富士川沿い・身延エリアへのアクセスと、道路の積雪・凍結対策は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "鉄道を利用する場合、JR身延線の特急「ふじかわ」が甲府駅および静岡駅から直通運転しており、下部温泉駅や身延駅まで乗り換えなしで快適にアクセスできます。自動車を利用する場合、中部横断自動車道（下部温泉早川ICまたは身延山IC）により新東名高速や中央自動車道からスムーズに直結しています。平野部は降雪が比較的少ない地域ですが、山間部の朝晩や橋の上、トンネル出入口付近は路面凍結（ブラックアイスバーン）が発生しやすいため、12月〜2月はスタッドレスタイヤの装着が必須となります。"
        }
      }
    ]
  };

  const hotels = [
            {
              id: 1,
              name: "山梨県の温泉旅館　下部温泉郷　下部ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/40916/40916.jpg",
              rating: 4.36,
              reviews: 1297,
              price: "¥15,950〜",
              access: "ＪＲ身延線下部温泉駅徒歩１分／車：中部横断道下部温泉早川ＩＣより５分",
              special: "泉質の異なる「三種類の源泉」を、七つの露天風呂を含む大浴場など「十二の湯舟」でご堪能いただけます",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40916%2F40916.html",
              story: "身延線下部温泉駅の目前に広がる約1万坪の大庭園を有する「下部温泉郷 下部ホテル」。昭和初期より文人墨客や多くの旅人に愛されてきた老舗宿です。広大な庭園には冬の澄んだ大気の中で清らかな滝が流れ、夜にはかがり火が灯ります。館内自慢の湯処では、毎分豊富な湧出量を誇る自家源泉を含む3つの源泉から12の多彩な湯舟を楽しめます。約30度の冷鉱泉（アルカリ性単純温泉）と約50度のあつ湯（硫黄泉）を交互に浸かる「温冷交互浴」は、血行を極限まで高めて冬の冷えや筋肉のこわばりを芯から解消。甲州名物ほうとうやヤマメの塩焼き、霜降り甲州牛を取り入れた里山バイキングも高い評価を得ています。",
              roomTip: "庭園を望む和洋室「足湯・露天風呂付き客室」または本館純和室。窓外に広がる冬の日本庭園の雪吊りや木立の借景を眺めながらゆったりとくつろげます。",
              gourmetTip: "名物「甲州牛鉄板焼き＆揚げたて天ぷらバイキング。」。板前が目の前で焼き上げる極上肉と、冬に甘みを増す地野菜を贅沢に。",
              highlights: [
                "約1万坪の大庭園・3源泉12の多彩な湯舟で楽しむ本格温冷交互浴" ,
                "夜のかがり火演出と里山バイキング・甲州牛鉄板焼きやヤマメ塩焼きを堪能" ,
                "下部温泉駅徒歩1分の抜群アクセス・身延山参拝や富士川ドライブの理想拠点"
              ]
            },
            {
              id: 2,
              name: "身延山三門前　旅館田中屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/54648/54648.jpg",
              rating: 4.82,
              reviews: 85,
              price: "¥8,800〜",
              access: "中部横断自動車道経由、身延山ICより約10分。JR身延駅からも車で10分。無料送迎あり。新宿からの高速バスも便利です。",
              special: "■江戸時代創業■身延山三門徒歩30秒！朝のおつとめ体験が好評！身延駅無料送迎あり",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54648%2F54648.html",
              story: "身延山久遠寺の象徴である国登録有形文化財「三門」の真正面に位置する、大正12年創業の門前老舗割烹旅館「身延山三門前 旅館田中屋」。久遠寺総門をくぐり門前商店街の風情ある坂道を上がった特等席に佇み、本堂や奥之院への参拝拠点としてこれ以上ない立地を誇ります。宿に一歩足を踏み入れれば、木の温もりと静寂が旅人を包み込み、冬の凛とした門前町の空気が心地よく漂います。料理長自慢の料理は、身延山名物の生湯葉や手作り豆乳料理をふんだんに盛り込んだ「みのぶ門前ゆば会席」。早朝の久遠寺本堂「朝勤（お朝事）」への参列にも徒歩数分で参加でき、心洗われる新春の祈りのひとときを体験できます。",
              roomTip: "三門を間近に仰ぐ門前眺望和室。朝日に輝く巨大な三門の威容を客室から拝むことができ、新春の清々しい光を浴びながら目覚められます。",
              gourmetTip: "名物「本生ゆばづくし会席」。汲み上げ湯葉のお造り、豆乳湯葉鍋、湯葉真丈など、大豆の自然な甘みとコクが凝縮した逸品揃い。",
              highlights: [
                "身延山久遠寺三門の目の前・朝勤（お朝事）参列に最適な門前老舗割烹旅館" ,
                "名物本生ゆばづくし会席・大豆の甘みと職人技が光る繊細な豆乳湯葉料理" ,
                "大正12年創業の格式・客室から荘厳な三門の威容を仰ぐ唯一無二のロケーション"
              ]
            },
            {
              id: 3,
              name: "下部温泉　元湯　橋本屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/40448/40448.jpg",
              rating: 4.81,
              reviews: 56,
              price: "¥5,500〜",
              access: "中央自動車道　甲府南ＩＣより車で５０分／東名高速道路　富士ＩＣより車で７０分",
              special: "2種類の温泉で寛ぎ、ごはんを食べて、心身の湯治の旅へ。親しみやすい料金で、長期滞在にも好評♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40448%2F40448.html",
              story: "下部川のせせらぎ沿いに佇む「下部温泉 元湯 橋本屋」は、江戸時代から続く湯治の伝統を現代に受け継ぐ純和風の名旅館。わずか数室の贅沢なプライベート空間で、古き良き日本の湯治文化を静かに満喫できます。自慢のお風呂は、下部温泉本来の伝統泉質である31度前後の源泉を贅沢にかけ流す岩風呂と、適温に加温した浴槽の二段構え。肌に優しい柔らかなお湯は、長湯しても身体に負担がかからず、浸かるほどに自律神経が整い深い安らぎが得られます。夕食には南巨摩の清流で育った川魚料理や季節の山菜、手打ち蕎麦が並び、素材本来の素朴な味わいが身体の奥深くまで染み渡ります。",
              roomTip: "川のせせらぎが心地よい渓流沿いの純和室。冬の澄んだ夜、川音に耳を傾けながら文机で読書や思索にふける静謐な時間を過ごせます。",
              gourmetTip: "手作りの「山里薬膳湯治膳」。身体を温める根菜や地元産椎茸、清流ヤマメの骨酒とともに味わう滋味溢れる田舎料理。",
              highlights: [
                "江戸創業の純和風名湯宿・伝統31度冷鉱泉かけ流し岩風呂で極上のぬる湯治" ,
                "川のせせらぎが響く静寂空間・滋味豊かな山里薬膳湯治膳と清流魚料理" ,
                "身体に負担をかけない長時間入浴・自律神経を整える古式ゆかしい湯治体験"
              ]
            },
            {
              id: 4,
              name: "健康・旬彩の宿　下部温泉　ホテル守田",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/2501/2501.jpg",
              rating: 4.40,
              reviews: 260,
              price: "¥9,900〜",
              access: "ＪＲ身延線下部温泉駅下車（送迎車で3分）／中部横断自動車道下部温泉早川ＩＣよりＲ300号経由8分",
              special: "【薬石サウナも人気】あつ湯とぬる湯を交互に楽しむ「武田信玄のかくし湯」が有名",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2501%2F2501.html",
              story: "下部温泉街の中心部に位置し、健康と旬の味覚をテーマに掲げる温泉旅館「下部温泉 ホテル守田」。清潔感あふれる近代和風の館内には、信玄公の隠し湯として知られる下部の名湯を引く大浴場と、開放感抜群の庭園露天風呂を完備しています。アルカリ性単純温泉のお湯は刺激が極めて少なく、皮膚の角質をなめらかに整える効果があります。冬の冷たい外気を感じながら露天風呂に浸かれば、頭はすっきりと冴え渡り身体はポカポカと温まる極上の雪見風呂を満喫。旬の食材を彩り豊かに仕上げる創作会席料理は、目にも美しく旅の夜を華やかに演出します。",
              roomTip: "ゆったりとした広縁付きの10畳和室または禁煙和洋室。畳の香りに癒やされながら、冬の山並みを一望できる落ち着いた設え。",
              gourmetTip: "季節の特選会席「甲州牛と旬魚の饗宴」。きめ細やかな霜降りの甲州牛陶板焼きと、下部名水で仕込んだ手作り豆腐の優しい味わい。",
              highlights: [
                "下部温泉街中心の近代和風旅館・開放的な庭園露天風呂と彩り豊かな創作会席" ,
                "アルカリ性単純温泉の柔らかな湯触り・きめ細やかな霜降り甲州牛陶板焼き" ,
                "広縁付きのゆったり和室・冬の南巨摩の山並みを望む落ち着いた滞在環境"
              ]
            },
            {
              id: 5,
              name: "下部温泉　湯元ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8911/8911.jpg",
              rating: 3.54,
              reviews: 456,
              price: "¥6,350〜",
              access: "JR下部温泉駅より徒歩18分。駐車場あり。",
              special: "自家屋内に湯口を有し、湧出量は下部温泉 No,1。山間部の湯治旅館です。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8911%2F8911.html",
              story: "下部温泉発祥の地に佇む歴史の宿「下部温泉 湯元ホテル」。大正・昭和の面影を色濃く残す館内はどこか懐かしく、ノスタルジックな湯治旅を愛する温泉ファンから熱い支持を集めています。地下から自然湧出する伝統の「ぬる湯」は、飲泉所も設けられており内臓疾患や消化器系にも良いと評判。加温したあつ湯とぬる湯の交互浴を繰り返すことで、冬の冷えや慢性疲労がすっきりと解消されます。気取らない家庭的なおもてなしと、女将の手作り郷土料理が冷えた旅人の心をあたたかく包み込み、身も心も素朴な温もりに満たされます。",
              roomTip: "昭和レトロな趣を残す静かな和室。窓を開けると下部山峡の凛とした冬の空気が流れ込み、鳥のさえずりが響きます。",
              gourmetTip: "郷土の味覚「あったか甲州名物ほうとう鍋」。かぼちゃや山菜の旨味が溶け出した自家製味噌の出汁が太打ち麺に絡み、身体の芯まで温まります。",
              highlights: [
                "下部温泉発祥の歴史息づく湯元旅館・自噴ぬる湯と名物手作りほうとう鍋" ,
                "飲泉所完備の内臓デトックス・飾らない温もり溢れる女将の家庭的おもてなし" ,
                "昭和レトロな湯治情緒・リーズナブルな価格で本格的な源泉かけ流しを満喫"
              ]
            }
  ];

  const faqList = [
  {
    "q": "冬（11・12・1月）の身延山久遠寺で新春初詣を行う際の見どころと防寒対策は？",
    "a": "身延山久遠寺は標高約400mの山腹に位置し、山頂の奥之院思親閣は標高1153mに達するため、真冬の早朝や夜間は氷点下に冷え込みます。最大の見どころは、国登録有形文化財の三門、本堂での荘厳な読経（毎朝行われる朝勤）、そして身延山ロープウェイで登る奥之院思親閣からの富士山パノラマです。石段の「菩提梯（287段）」は傾斜が急で凍結の恐れもあるため、滑りにくい冬用トレッキングシューズの着用が必須。厚手のダウンコート、手袋、マフラー、使い捨てカイロを準備して参拝に臨むのが鉄則です。"
  },
  {
    "q": "身延山ロープウェイの冬期運行状況と、奥之院思親閣からの富士山絶景のベスト時間帯は？",
    "a": "身延山ロープウェイは通年運行されており、久遠寺本堂裏手の山麓駅から奥之院駅まで高低差763mを片道約7分で結びます。冬（11〜1月）は空気が極めて澄み渡るため、年間を通じて最も富士山が美しく見える季節。特に午前9時〜11時頃の午前中は順光となり、白銀に輝く富士山と南アルプス、眼下を流れる富士川、遠く駿河湾まで広がる360度大パノラマをくっきりと拝めます。元旦には初日の出運行も実施されます。"
  },
  {
    "q": "武田信玄の隠し湯「下部温泉」のぬる湯治（温冷交互浴）の正しい入浴法と効能は？",
    "a": "下部温泉の最大の特徴は、30度〜32度前後の冷鉱泉（アルカリ性単純温泉）と、約50度の高温泉（硫黄泉等）の2種類の源泉が存在することです。正しい入浴法は、まず加温されたあつ湯で身体を温めた後、ぬる湯（30度台）に20分〜30分ほどじっくり浸かります。体温に近いぬる湯は心臓や血管に負担をかけず副交感神経を優位にし、その後再びあつ湯に数分入る「温冷交互浴」を2〜3回繰り返すことで、末梢血管が拡張して驚くほどの血行促進・保温効果と免疫力向上効果が得られます。"
  },
  {
    "q": "身延山名物「身延湯葉（ゆば）」の歴史と、他産地の湯葉との違いは？",
    "a": "身延湯葉の起源は鎌倉時代、日蓮聖人が身延山で草庵を結んだ際、弟子たちが師の健康と栄養を気遣って大豆から湯葉を作り献上したのが始まりと伝えられています。京都や日光の湯葉が薄手で繊細な食感を重んじるのに対し、身延山ゆばは良質な国産大豆と富士川水系の清らかな天然水を贅沢に使い、厚みがあり大豆の甘みと濃厚なコクが際立つのが特徴です。生湯葉のお造り、煮物、豆乳しゃぶしゃぶ、湯葉丼など多彩な調理法で親しまれています。"
  },
  {
    "q": "冬の富士川沿い・身延エリアへのアクセスと、道路の積雪・凍結対策は？",
    "a": "鉄道を利用する場合、JR身延線の特急「ふじかわ」が甲府駅および静岡駅から直通運転しており、下部温泉駅や身延駅まで乗り換えなしで快適にアクセスできます。自動車を利用する場合、中部横断自動車道（下部温泉早川ICまたは身延山IC）により新東名高速や中央自動車道からスムーズに直結しています。平野部は降雪が比較的少ない地域ですが、山間部の朝晩や橋の上、トンネル出入口付近は路面凍結（ブラックアイスバーン）が発生しやすいため、12月〜2月はスタッドレスタイヤの装着が必須となります。"
  }
];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-indigo-600 selection:text-white">
        {/* Breadcrumb Bar */}
        <nav aria-label="パンくずリスト" className="bg-white border-b border-stone-200 text-xs text-stone-500 py-3 px-4 sm:px-8">
          <div className="max-w-5xl mx-auto flex items-center space-x-2">
            <Link href="/" className="hover:text-indigo-600 transition">ホーム</Link>
            <span>/</span>
            <Link href="/features" className="hover:text-indigo-600 transition">特集一覧</Link>
            <span>/</span>
            <Link href="/prefectures/yamanashi" className="hover:text-indigo-600 transition">山梨県</Link>
            <span>/</span>
            <span className="text-stone-800 font-medium">身延山久遠寺初詣＆下部温泉ぬる湯治</span>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-b from-stone-900 via-slate-900 to-stone-900 text-white py-16 sm:py-24 px-4 sm:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 text-xs sm:text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              11月・12月・1月冬の山梨・富士川探訪スペシャル
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
              【山梨・身延山久遠寺＆下部温泉】<br className="hidden sm:inline" />
              日蓮宗総本山「身延山久遠寺」白銀の奥之院新春初詣と三門！<br />
              富士川冬景色・名物身延湯葉会席＆信玄隠し湯「下部温泉」名宿
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-stone-300 leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
              峻嶺な山々と富士川の清流に抱かれた甲州の聖地・身延。冬晴れの澄んだ青空の下、標高1153mの身延山山頂「奥之院思親閣」から拝する雪化粧の富士山と駿河湾の大パノラマ。750年の歴史を紡ぐ日蓮宗総本山久遠寺の厳かな新春初詣と千本杉の静寂。大豆の旨味が凝縮した伝統の「身延山ゆば会席」に舌鼓を打ち、武田信玄公の隠し湯として名高い「下部温泉」のぬる湯治で心身を解きほぐす開運湯旅をご案内します。
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-stone-300">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <Calendar className="w-4 h-4 text-indigo-400" /> 最適期: 11月中旬〜1月下旬
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <MapPin className="w-4 h-4 text-indigo-400" /> エリア: 山梨県南巨摩郡身延町・富士川流域
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <Waves className="w-4 h-4 text-indigo-400" /> 温泉: 下部温泉（単純温泉・アルカリ性冷鉱泉）
              </span>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          
          {/* Section 1: 身延山久遠寺の歴史と奥之院思親閣の新春初詣 */}
          <section className="mb-16">
            <div className="border-l-4 border-indigo-600 pl-4 mb-6">
              <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase">Sacred Mountain Heritage</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                標高1153mの霊峰山頂から霊峰富士を仰ぐ！身延山久遠寺「奥之院思親閣」新春初詣
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                山梨県南巨摩郡身延町に位置する「身延山久遠寺（みのぶさんくおんじ）」は、鎌倉時代の文永11年（1274年）、日蓮聖人によって開かれた日蓮宗の総本山です。聖人が晩年の9年間を過ごし、法華経の読誦と門弟の育成に生涯を捧げた聖地として、全国から年間を通じて多くの巡礼者が足を運びます。冬の身延山は、山峡特有の冷涼で引き締まった空気が張り詰め、樹齢数百年を数える巨大な杉木立が天を衝く参道は、厳かな神聖さに満ち溢れています。
              </p>
              <p>
                身延山の玄関口にそびえ立つ国登録有形文化財の「三門（さんもん）」は、日本三大門の一つにも数えられる威容を誇ります。三門をくぐると現れるのが、本堂へと続く287段の急勾配な石段「菩提梯（ぼだいてい）」。一段一段登り切るごとに心の煩悩を払い、悟りへと近づく修行の道とされています。本堂に響き渡る大太鼓の力強いリズムと、数十名の僧侶による荘厳な読経が響く「朝勤（お朝事）」は、冬の夜明けの冷気を切り裂き、魂を揺さぶる感動的な祈りの儀式です。
              </p>
              <p>
                本堂裏手から身延山ロープウェイに乗車し、約7分で標高1153mの山頂駅へ降り立つと、そこには日蓮聖人が房州（千葉県小湊）に住む両親や師を想って幾度となく祈りを捧げた「奥之院思親閣（ししんかく）」が鎮座します。冬の山頂展望台からは、空気が透き通る11月〜1月ならではの奇跡的な大パノラマが展開。真っ白に雪化粧した富士山が青空にくっきりと浮かび上がり、駿河湾の青い海原、南アルプスの山並みまで一望できます。新春の澄み渡る陽光を浴びながらの初詣は、心身に新たな活力と強い開運エネルギーを与えてくれます。
              </p>
            </div>
          </section>

          {/* Section 2: 富士川冬景色と身延山ゆば会席 */}
          <section className="mb-16">
            <div className="border-l-4 border-amber-600 pl-4 mb-6">
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">Culinary Culture & Scenic River</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                日本三大急流「富士川」の冬情景と、日蓮聖人伝承の至高の滋味「身延山ゆば料理」
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                身延の東側を流れる「富士川」は、最上川・球磨川と並ぶ日本三大急流の一つ。冬の富士川は水量が落ち着き、翡翠色に透き通った水面が冬晴れの陽光を浴びてキラキラと輝きます。かつて富士川舟運で賑わった歴史を持つこの地は、駿河湾の塩や海産物、甲州の年貢米が行き交う交通の要衝でもありました。雪を戴く富士山を背景に蛇行する冬の富士川の景観は、山梨南部を訪れる旅人の心を穏やかに癒やしてくれます。
              </p>
              <p>
                この身延の地で750年以上にわたり受け継がれてきた伝統の名物が「身延山ゆば」です。その起源は日蓮聖人が身延山で暮らしていた折、弟子たちが聖人の衰弱した健康を案じ、貴重な栄養源として大豆から豆乳を絞り、湯葉を作って供したのが始まりと伝えられています。京都の繊細で薄い湯葉や日光の巻き湯葉とは異なり、身延山ゆばは良質な国産丸大豆と富士川水系の清らかな天然水を惜しみなく使用し、厚みがあって大豆本来の強い甘みと豊かなコクを存分に味わえるのが真骨頂です。
              </p>
              <p>
                門前町の割烹や宿で振る舞われる「みのぶ門前ゆば会席」では、できたての生湯葉をお造りとして本わさびと出汁醤油でいただく贅沢から始まります。さらに、滑らかな豆乳出汁で煮込む湯葉しゃぶしゃぶ、香ばしく揚げた湯葉真丈、ふっくらと炊き上げた湯葉御飯など、滋味溢れる大豆料理が並びます。植物性タンパク質とイソフラボンが豊富で胃腸に優しく、冬の冷えた身体の内側からじんわりと温もりを届けてくれます。
              </p>
            </div>
          </section>

          {/* Section 3: 下部温泉の歴史とぬる湯治 */}
          <section className="mb-16">
            <div className="border-l-4 border-teal-600 pl-4 mb-6">
              <span className="text-xs font-bold text-teal-600 tracking-wider uppercase">Medicinal Hot Spring Retreat</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                武田信玄公の隠し湯「下部温泉」！冷鉱泉×あつ湯が織りなす究極の温冷交互浴
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                身延山から車で約15分、下部川の清流沿いに山峡の風情をたたえる名湯が「下部温泉（しもべおんせん）」です。開湯は約1200年前と伝えられ、甲斐の戦国武将・武田信玄公が川中島の戦いで上杉謙信公の刃によって負った刀傷を癒やした「信玄公の隠し湯」として天下にその名を轟かせました。日本の名湯百選にも選定されており、古くから骨折や外傷、神経痛、胃腸病に卓効がある本格的な湯治場として栄えてきました。
              </p>
              <p>
                下部温泉の最大の特徴は、30度〜32度前後で湧出する伝統の「アルカリ性単純冷鉱泉（ぬる湯）」と、平成以降に湧出した約50度の「高温泉（あつ湯）」という、温度の異なる2つの源泉を併せ持つ点にあります。冷鉱泉は刺激が極めて少なく、まるでビロードのように滑らかな肌触り。体温よりもわずかに低いこのお湯に20分〜30分じっくりと身を委ねると、副交感神経が優位になり、深い瞑想状態のようなリラクゼーションへと誘われます。
              </p>
              <p>
                下部温泉の真骨頂は、ぬる湯とあつ湯を交互に行き来する「温冷交互浴」です。まずあつ湯で毛穴を開き身体を温めた後、ぬる湯に浸かることで自律神経が刺激され、末梢血管が拡張。これを数回繰り返すことで、血行が促進されて老廃物が排出され、湯上がりには驚くほど身体の芯からポカポカとした熱が持続します。冬の厳しい寒さで強張った筋肉や冷え性に悩む現代人にとって、下部温泉のぬる湯治は至高の自然療法となります。
              </p>
            </div>
          </section>

          {/* Section 4: 厳選名宿5選 */}
          <section className="mb-16">
            <div className="border-l-4 border-indigo-600 pl-4 mb-8">
              <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase">Verified Hotels via Rakuten API</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                【楽天トラベル実データ連携】身延山久遠寺・下部温泉の厳選名宿5選
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                ※公式リアルタイムAPIから取得した宿泊料金目安・レビュー評価・アクセス情報を掲載しています。
              </p>
            </div>

            <div className="space-y-8">
              {hotels.map((h) => (
                <div key={h.id} className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition">
                  <div className="p-5 sm:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
                        厳選第{h.id}位
                      </span>
                      <div className="flex items-center gap-3 text-xs sm:text-sm">
                        <span className="flex items-center text-amber-500 font-bold">
                          <Star className="w-4 h-4 fill-amber-400 stroke-amber-400 mr-1" />
                          {h.rating}
                        </span>
                        <span className="text-stone-400">({h.reviews.toLocaleString()}件)</span>
                        <span className="text-indigo-600 font-black text-sm sm:text-base">
                          {h.price}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
                      {h.name}
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                      <span>{h.access}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-4">
                      {h.story}
                    </p>

                    <div className="bg-stone-50 rounded-lg p-3.5 space-y-2 mb-5 text-xs text-stone-600">
                      <div>
                        <strong className="text-stone-800 font-semibold mr-1">客室の魅力:</strong>
                        {h.roomTip}
                      </div>
                      <div>
                        <strong className="text-stone-800 font-semibold mr-1">冬の美食:</strong>
                        {h.gourmetTip}
                      </div>
                    </div>

                    <div className="mb-5">
                      <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">
                        宿泊ポイント・魅力
                      </h4>
                      <ul className="grid grid-cols-1 gap-1.5">
                        {h.highlights.map((hl: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-stone-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-sm transition"
                      >
                        <span>楽天トラベルでプラン・空室を確認</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: 1泊2日モデルコース */}
          <section className="mb-16">
            <div className="border-l-4 border-indigo-600 pl-4 mb-6">
              <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                【1泊2日モデルコース】身延山初詣と下部温泉ぬる湯治・身延ゆば満喫ルート
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-stone-200 p-5 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">1</span>
                  1日目：身延山門前町散策と久遠寺本堂参拝・下部温泉ぬる湯治
                </h3>
                <ol className="relative border-l border-stone-200 ml-3 space-y-4 text-xs sm:text-sm text-stone-600">
                  <li className="pl-4">
                    <strong className="text-stone-800">11:30 JR身延駅到着・富士川舟運の歴史散策</strong><br />
                    JR特急ふじかわ号で身延駅へ。駅前しょうにん通りで名物「みのぶまんじゅう」をお土産に購入。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">12:30 身延山門前町で「みのぶ門前ゆば膳」ランチ</strong><br />
                    大正ロマン漂う門前町の割烹で、生湯葉のお造りと豆乳小鍋の贅沢な昼食を堪能。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">14:00 身延山久遠寺 三門・菩提梯（287段）・本堂参拝</strong><br />
                    三門の巨大な威容を仰ぎ、菩提梯の石段を登って本堂へ。天井画の墨龍や祖師堂の荘厳な美しさを拝観。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">16:30 下部温泉へ移動・チェックイン＆温冷交互浴</strong><br />
                    名湯百選の下部温泉の宿に到着。伝統の31度冷鉱泉とあつ湯を交互にじっくり浸かり、旅の疲れを完全にリセット。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">19:00 甲州牛と旬菜の贅沢会席ディナー</strong><br />
                    南巨摩の地酒を片手に、甲州牛の陶板焼きや清流川魚の塩焼き、手作りほうとうに舌鼓。
                  </li>
                </ol>
              </div>

              <div className="bg-white rounded-xl border border-stone-200 p-5 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">2</span>
                  2日目：身延山ロープウェイで奥之院思親閣へ・白銀富士山パノラマ
                </h3>
                <ol className="relative border-l border-stone-200 ml-3 space-y-4 text-xs sm:text-sm text-stone-600">
                  <li className="pl-4">
                    <strong className="text-stone-800">06:00 久遠寺本堂での朝勤（お朝事）参列（希望者）</strong><br />
                    凛とした冬の早朝、大太鼓と読経が響き渡る神秘的な儀式に参列し、新年の無病息災を祈願。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">08:00 宿で朝風呂と温かい田舎朝食</strong><br />
                    朝の澄んだ空気の中で露天風呂を満喫し、名水仕込みの出来立て豆腐と温泉粥で活力チャージ。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">09:30 身延山ロープウェイ乗車・奥之院思親閣へ</strong><br />
                    山麓駅から標高1153mの山頂へ空中散歩。奥之院思親閣を新春初詣し、樹齢700年の日蓮聖人手植え杉に触れる。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">11:00 山頂東展望台から冠雪の富士山・駿河湾大パノラマ</strong><br />
                    晴天率の高い冬ならではの純白の霊峰富士を正面に望み、旅の記念撮影。名物「くし団子」を味わう。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">13:30 富士川クラフトパークまたは道の駅富士川へ</strong><br />
                    広大な公園を散策し、山梨県産の冬野菜や甲州ワイン、身延ゆばを買い求めて帰路へ。
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* Section 6: 冬（11・12・1月）の参拝・旅行攻略 */}
          <section className="mb-16">
            <div className="border-l-4 border-rose-600 pl-4 mb-6">
              <span className="text-xs font-bold text-rose-600 tracking-wider uppercase">Travel Guide & Tips</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                【11・12・1月】身延山・下部温泉の気候・服装・混雑回避のポイント
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="bg-white rounded-xl border border-stone-200 p-5">
                <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-1.5 text-sm">
                  <Snowflake className="w-4 h-4 text-indigo-500" />
                  山頂と谷あいの厳しい冷え込み対策
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  身延山山頂（標高1153m）は麓よりも気温が約6〜8度低く、12月〜1月の日中でも氷点下近くまで下がることがあります。風を通さない防風ダウンコート、厚手の保温インナー、ニット帽、手袋を必ず着用してください。菩提梯や奥之院の散策路は急勾配のため、滑りにくいソールを備えた歩きやすい靴が必須です。
                </p>
              </div>

              <div className="bg-white rounded-xl border border-stone-200 p-5">
                <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-1.5 text-sm">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  正月三が日の交通規制と混雑回避
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  元旦から1月3日の正月三が日は、身延山久遠寺周辺で交通規制が敷かれ、門前町への車両進入が制限されます。臨時駐車場からシャトルバスが運行されますが、混雑を避けるなら午前8時前の早朝到着か、午後14時以降の参拝がスムーズです。下部温泉郷の宿に前泊して朝一番に参拝するのが最も賢明なルートです。
                </p>
              </div>

              <div className="bg-white rounded-xl border border-stone-200 p-5">
                <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-1.5 text-sm">
                  <Mountain className="w-4 h-4 text-teal-500" />
                  スタッドレスタイヤ装着と冬期運転
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  中部横断道や国道52号線は除雪体制が整っていますが、下部温泉の温泉街や身延山の山道は日陰が多く、夜間や早朝に路面凍結（ブラックアイスバーン）が発生します。ノーマルタイヤでの走行は極めて危険なため、12月〜2月の自動車利用時は必ずスタッドレスタイヤを装着してください。
                </p>
              </div>

              <div className="bg-white rounded-xl border border-stone-200 p-5">
                <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-1.5 text-sm">
                  <Sunrise className="w-4 h-4 text-rose-500" />
                  冬晴れの富士山撮影シャッターチャンス
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  冬の身延山は太平洋高気圧に覆われて晴天率が高く、富士山鑑賞のベストシーズンです。特に午前9時〜11時の時間帯は太陽が東南から差し込む順光となり、白銀の宝永山や山肌の雪稜がくっきりと陰影を帯びて撮影できます。ロープウェイのガラス越しではなく山頂展望デッキからの撮影が推奨されます。
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: FAQセクション */}
          <section className="mb-16">
            <div className="border-l-4 border-indigo-600 pl-4 mb-6">
              <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase">Frequently Asked Questions</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                身延山久遠寺初詣＆下部温泉旅行 よくある質問（FAQ）
              </h2>
            </div>

            <div className="space-y-4">
              {faqList.map((f, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-stone-200 p-5 sm:p-6 shadow-sm">
                  <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-2 flex items-start gap-2">
                    <span className="text-indigo-600 font-black">Q.</span>
                    <span>{f.q}</span>
                  </h3>
                  <div className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5 border-l-2 border-indigo-100 mt-2">
                    <p>{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8: まとめ＆内部リンク */}
          <section className="border-t border-stone-200 pt-10 text-center">
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-4">
              霊峰の神聖な祈りと名湯の温もりに包まれる、身延・下部への冬の開運旅へ
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto mb-8">
              白銀の富士山を仰ぐ身延山久遠寺の奥之院新春初詣、滋味深い身延山ゆば料理、そして信玄公ゆかりの下部温泉での極上ぬる湯治。冬の寒さを忘れさせてくれる豊かな歴史と名湯が、新年の清々しい門出を温かく祝福してくれます。
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
              <Link href="/features" className="px-4 py-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition">
                ← 特集一覧に戻る
              </Link>
              <Link href="/prefectures/yamanashi" className="px-4 py-2 rounded-full bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-semibold transition">
                山梨県の旅行ガイド・宿一覧
              </Link>
              <Link href="/" className="px-4 py-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition">
                クラドトラベル トップページ
              </Link>
            </div>
          </section>

        </main>
      </article>
    </>
  );
}
