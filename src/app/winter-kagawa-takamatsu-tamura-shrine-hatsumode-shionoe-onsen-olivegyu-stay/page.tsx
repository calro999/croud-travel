import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Wine, AlertTriangle, Sunrise, HeartHandshake, Eye
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月香川】讃岐一ノ宮「田村神社」新春初詣と栗林公園の冬雪吊り！奥座敷「塩江温泉郷」＆熱々しっぽくうどん・オリーブ牛名宿5選",
  description: "龍神信仰息づく讃岐国一ノ宮「田村神社（たむらじんじゃ）」が約20万人の新春参拝客を迎える11〜1月の冬旅特集。国の特別名勝「栗林公園」で見事な枝ぶりを誇る冬の雪吊りと名松美、屋島から見晴らす冬の瀬戸内海の夕景、行基開湯・奈良時代から続く高松の奥座敷「塩江温泉郷」の湯浴み、冬野菜をたっぷり煮込んだ讃岐の冬名物「しっぽくうどん」と極上の「讃岐オリーブ牛」。高松市街＆塩江温泉の滞在拠点に最適な厳選ホテル・名宿5選を徹底解説します。",
  keywords: '田村神社 初詣, 栗林公園 雪吊り, しっぽくうどん 香川, 塩江温泉 冬, 讃岐オリーブ牛, クレメント高松, ロイヤルパークホテル高松, 香川 初詣 温泉',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-kagawa-takamatsu-tamura-shrine-hatsumode-shionoe-onsen-olivegyu-stay/"
  },
  openGraph: {
    title: "【11・12・1月香川】讃岐一ノ宮「田村神社」新春初詣と栗林公園の冬雪吊り！奥座敷「塩江温泉郷」＆熱々しっぽくうどん・オリーブ牛名宿5選",
    description: "龍神信仰息づく讃岐国一ノ宮「田村神社（たむらじんじゃ）」が約20万人の新春参拝客を迎える11〜1月の冬旅特集。国の特別名勝「栗林公園」で見事な枝ぶりを誇る冬の雪吊りと名松美、屋島から見晴らす冬の瀬戸内海の夕景、行基開湯・奈良時代から続く高松の奥座敷「塩江温泉郷」の湯浴み、冬野菜をたっぷり煮込んだ讃岐の冬名物「しっぽくうどん」と極上の「讃岐オリーブ牛」。高松市街＆塩江温泉の滞在拠点に最適な厳選ホテル・名宿5選を徹底解説します。",
    url: 'https://croud-travel.com/winter-kagawa-takamatsu-tamura-shrine-hatsumode-shionoe-onsen-olivegyu-stay',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '冬の特別名勝栗林公園の雪吊りと田村神社の新春情景'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月香川】讃岐一ノ宮「田村神社」新春初詣と栗林公園の冬雪吊り！奥座敷「塩江温泉郷」＆熱々しっぽくうどん・オリーブ牛名宿5選",
    description: "龍神信仰息づく讃岐国一ノ宮「田村神社（たむらじんじゃ）」が約20万人の新春参拝客を迎える11〜1月の冬旅特集。国の特別名勝「栗林公園」で見事な枝ぶりを誇る冬の雪吊りと名松美、屋島から見晴らす冬の瀬戸内海の夕景、行基開湯・奈良時代から続く高松の奥座敷「塩江温泉郷」の湯浴み、冬野菜をたっぷり煮込んだ讃岐の冬名物「しっぽくうどん」と極上の「讃岐オリーブ牛」。高松市街＆塩江温泉の滞在拠点に最適な厳選ホテル・名宿5選を徹底解説します。",
    images: ['https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export const dynamic = 'force-static';

export default function KagawaTakamatsuWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【11・12・1月香川】讃岐一ノ宮「田村神社」新春初詣と栗林公園の冬雪吊り！奥座敷「塩江温泉郷」＆熱々しっぽくうどん・オリーブ牛名宿5選",
    "description": "龍神信仰息づく讃岐国一ノ宮「田村神社（たむらじんじゃ）」が約20万人の新春参拝客を迎える11〜1月の冬旅特集。国の特別名勝「栗林公園」で見事な枝ぶりを誇る冬の雪吊りと名松美、屋島から見晴らす冬の瀬戸内海の夕景、行基開湯・奈良時代から続く高松の奥座敷「塩江温泉郷」の湯浴み、冬野菜をたっぷり煮込んだ讃岐の冬名物「しっぽくうどん」と極上の「讃岐オリーブ牛」。高松市街＆塩江温泉の滞在拠点に最適な厳選ホテル・名宿5選を徹底解説します。",
    "image": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&h=630&q=80",
    "datePublished": "2026-10-05T12:00:00+09:00",
    "dateModified": "2026-10-05T12:00:00+09:00",
    "author": {
      "@type": "Organization",
      "name": "旅宿クラウド 編集部",
      "url": "https://croud-travel.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "旅宿クラウド",
      "logo": {
        "@type": "ImageObject",
        "url": "https://croud-travel.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://croud-travel.com/winter-kagawa-takamatsu-tamura-shrine-hatsumode-shionoe-onsen-olivegyu-stay"
    }
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "ホーム",
        "item": "https://croud-travel.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "特集一覧",
        "item": "https://croud-travel.com/features"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "香川・高松＆塩江温泉 冬特集",
        "item": "https://croud-travel.com/winter-kagawa-takamatsu-tamura-shrine-hatsumode-shionoe-onsen-olivegyu-stay"
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "冬（11・12・1月）の「田村神社（たむらじんじゃ）」初詣の見どころと名物「日曜うどん」とは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "田村神社は讃岐国一ノ宮として古くから篤い信仰を集め、正月三が日には高松市内最多となる約20万人の参拝客で賑わいます。境内奥の「定水井（底なしの深淵）」には龍神が棲むという伝説があり、黄金の巨大龍神像や金運・開運のパワースポットとしても有名です。また、地元住民や参拝客に愛されているのが境内で日曜の朝に振る舞われる名物「日曜うどん」。本格的な手打ち讃岐うどんを驚きのリーズナブルさで味わえます（※年始特別営業は日程要確認）。三が日の混雑回避には、早朝（午前7〜9時頃）または夕方16時以降の参拝がおすすめです。"
        }
      },
      {
        "@type": "Question",
        "name": "特別名勝「栗林公園（りつりんこうえん）」の冬の見どころと「雪吊り」の鑑賞期間は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "国の特別名勝に指定されている栗林公園は、ミシュラン・グリーンガイド・ジャポンで最高評価の三つ星を獲得した大名庭園です。毎年11月上旬から職人の手作業によって松の枝に「雪吊り（ゆきづり）」が施され、3月上旬頃までその美しい幾何学的な縄模様を鑑賞できます。冬の澄み渡る青空と白壁、紫雲山を借景にした冬枯れの庭園美は息を呑む静けさです。園内の茶屋「掬月亭（きくげつてい）」で、南湖の水面を眺めながら温かいお抹茶と季節の和菓子をいただくのが冬ならではの贅沢です。"
        }
      },
      {
        "@type": "Question",
        "name": "香川の冬の郷土料理「しっぽくうどん」とはどのようなうどんですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "しっぽくうどんは、寒さが本格化する晩秋から冬にかけて香川県の讃岐うどん店や家庭で食べられる冬の代表的な郷土料理です。大根、里芋、人参、ごぼうなどの冬の根菜類、油揚げ、椎茸、鶏肉などを、煮干し（いりこ）の効いた出汁でじっくり煮込み、茹でたての温かいうどんに豪快に具材と汁をかけます。野菜の甘みと旨味が染み出した滋味深い出汁が太めのうどんに絡み、体の芯から温まる冬の讃岐のソウルフードです。"
        }
      },
      {
        "@type": "Question",
        "name": "高松の奥座敷「塩江温泉郷（しおのえおんせんきょう）」の歴史と泉質の特徴は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "塩江温泉郷は高松市街から南へ約30km、徳島県境に近い阿讃山脈の山あいに位置する温泉地です。奈良時代の神亀年間（約1300年前）に行基菩薩が発見し、弘法大師空海が湯治の地として伝えたと伝えられる讃岐最古の名湯です。泉質は単純硫黄泉や炭酸水素塩泉で、肌に触れるとヌルヌルとしたとろみがあり、古い角質を落として肌をすべすべにする「美肌の湯」として親しまれています。冬は渓谷の澄んだ空気の中で楽しむ露天風呂が格別です。"
        }
      },
      {
        "@type": "Question",
        "name": "高松空港・JR高松駅から田村神社・栗林公園・塩江温泉への冬のアクセス方法は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "高松空港から田村神社へは空港リムジンバスまたはタクシーで約15分、塩江温泉へも車・タクシーで約20分と極めて近距離です。JR高松駅からは、ことでん琴平線で栗林公園駅（約5分）、一宮駅（田村神社の最寄り駅・徒歩約10分、高松駅から約15分）と電車での移動が非常にスムーズです。塩江温泉へはJR高松駅・ことでん瓦町駅から路線バス（塩江線）で約60分です。冬期でも平野部は積雪の心配がほとんどありませんが、塩江温泉などの山間部へ車で行く場合は念のため冬用タイヤ装着が安心です。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "ＪＲホテルクレメント高松",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/14862/14862.jpg",
              rating: 4.50,
              reviews: 4331,
              price: "¥7,300〜",
              access: "ＪＲ高松駅徒歩１分　高松空港よりバスにて４５分　タクシーにて３０分　サンポートホール隣接　レクザムホール徒歩８分",
              special: "高松駅徒歩1分　瀬戸内海や高松市内を一望出来る地上２０階建てのシティホテル。ＷｉＦｉ＆有線ＬＡＮ完備",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14862%2F14862.html",
              story: "JR高松駅および高松港フェリー乗り場から徒歩約1分、瀬戸内海の青い海と高松市街を一望するランドマークホテル「JRホテルクレメント高松」。シティホテルの格調高い設えと洗練されたホスピタリティを誇り、新春の田村神社初詣や栗林公園散策の拠点として最高峰の安心感を誇ります。客室は高層階に位置し、海側客室からは冬の澄み切った瀬戸内海の多島美と行き交う船を眺望。館内には本格的な日本料理レストラン「瀬戸」や鉄板焼「舫」を備え、冬が旬のオリーブハマチや讃岐オリーブ牛の極上ディナーを優雅に堪能できます。",
              roomTip: "コーナースイートまたはデラックスツイン（ハーバービュー）。瀬戸内海の冬景色をパノラマで満喫。",
              gourmetTip: "「日本料理 瀬戸の冬会席」。讃岐オリーブ牛のすき焼き小鍋と冬の瀬戸内鮮魚のお造りが絶品。",
              highlights: [
                "JR高松駅徒歩1分・高層階から瀬戸内海の多島美を望むランドマークホテル" ,
                "本格日本料理レストランで味わう冬のオリーブハマチ刺身と讃岐オリーブ牛会席" ,
                "高松港フェリー乗り場すぐ・小豆島や直島へのアート周遊にも抜群の拠点"
              ]
            },
            {
              id: 2,
              name: "ロイヤルパークホテル高松",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9486/9486.jpg",
              rating: 4.37,
              reviews: 1961,
              price: "¥8,600〜",
              access: "ＪＲ高松駅より車で７分、徒歩３０分/高松空港よりＪＲ高松駅行リムジンバス瓦町下車　徒歩５分",
              special: "四国初のオールクラブフロアが叶える、ワンランク上の寛ぎ空間。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9486%2F9486.html",
              story: "高松市の繁華街・瓦町駅近くに位置し、アール・デコ様式の気品と上質なプライベート感を湛えるスモールラグジュアリーホテル「ロイヤルパークホテル高松」。全館がクラシックモダンな調度品で統一され、宿泊者専用のプレミアムラウンジでは冬のティータイムやカクテルアワーを優雅に過ごせます。シモンズ社製最高級ベッドと加湿空気清浄機を完備した客室は静寂に包まれ、冬の参拝や散策の疲れを優しく解きほぐします。地元の旬食材を美しく仕立てた和洋朝食も宿泊者から絶賛を集めています。",
              roomTip: "エグゼクティブフロア客室。専用ラウンジアクセス付きで、冬の夕暮れに温かいドリンクやワインを嗜む至福の時間。",
              gourmetTip: "「ライブラリーラウンジの朝食」。讃岐コーチンの卵料理や温かい野菜スープ、焼きたてペストリーが朝を彩ります。",
              highlights: [
                "瓦町駅徒歩すぐ・アールデコ調の上質空間とプレミアムラウンジ完備のラグジュアリーステイ" ,
                "シモンズ最高級ベッド＆個別空調完備・静寂と気品あふれる大人の隠れ家" ,
                "田村神社初詣や高松市内グルメ散策のハブとして最高の利便性と居心地"
              ]
            },
            {
              id: 3,
              name: "ダイワロイネットホテル高松",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/136268/136268.jpg",
              rating: 4.22,
              reviews: 1909,
              price: "¥4,916〜",
              access: "高松空港より空港バスで約35分「県庁通り中央公園前」下車、徒歩約5分。JR「高松駅」よりバスで「五番町」下車、徒歩約5分",
              special: "高松市の繁華街の商業施設「丸亀町グリーン」内にあり、ショッピングやグルメ店が揃う。観光・ビジネスに！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F136268%2F136268.html",
              story: "高松市中心部の丸亀町商店街に直結し、観光にもショッピングにも圧倒的な利便性を誇る「ダイワロイネットホテル高松」。天井が高く開放的な客室には、ゆったりとしたワイドデスクと独立型バスルーム（一部客室）を備え、冬の連泊でもストレスフリーな滞在を約束します。全室に加湿機能付き空気清浄機と充実のアメニティを完備。栗林公園へはことでん瓦町駅から1駅、田村神社へも車や電車でスムーズにアクセスできる機動力抜群のシティホテルです。",
              roomTip: "モデレートダブルまたはデラックスツイン。ゆとりある広さで冬のコートや参拝荷物もすっきり収納。",
              gourmetTip: "「朝食ビュッフェ」。讃岐うどんのセルフ茹でコーナーや地魚の焼き物など、讃岐の朝の味覚を気軽に満喫。",
              highlights: [
                "丸亀町商店街直結・ゆとりの客室とセルフ讃岐うどんが楽しめる人気朝食バイキング" ,
                "栗林公園や瓦町へのアクセス抜群・ビジネスから観光まで高い信頼性" ,
                "清潔感あふれる最新設備と親切なフロント対応で高評価レビュー多数"
              ]
            },
            {
              id: 4,
              name: "ハイパーリゾート　ヴィラ塩江",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/111216/111216.jpg",
              rating: 4.26,
              reviews: 1043,
              price: "¥7,400〜",
              access: "大阪方面から　脇町IC～国道193号線約30分、岡山方面から　高松西IC～県道12号線～国道193号線約45分",
              special: "自然豊かなリゾートで季節の味覚と名湯を満喫　7/18～8/30屋外プール営業！！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F111216%2F111216.html",
              story: "高松市街から南へ車で約40分、山あいの静かなダム湖畔に佇むリゾートホテル「ハイパーリゾート ヴィラ塩江」。高松の奥座敷・塩江温泉の柔らかな湯を、自然の渓谷美を望む露天風呂や大浴場で心ゆくまで堪能できます。客室は全室レイクビューで、冬の澄んだ湖面と山並みが心を穏やかに癒やします。夕食には讃岐オリーブ牛のステーキや地元契約農家の冬野菜をふんだんに使った創作フレンチ・和洋会席を提供。喧騒を離れて静かな冬の温泉リトリートを楽しみたい方に最適です。",
              roomTip: "レイクビュースーペリアツイン。バルコニーから冬霧が漂う湖畔の幻想的な朝景色を眺められます。",
              gourmetTip: "「讃岐オリーブ牛と旬野菜のグリルディナー」。香ばしく焼き上げた赤身肉の旨味とワインのマリアージュ。",
              highlights: [
                "高松の奥座敷・塩江温泉のレイクビュー露天風呂と讃岐オリーブ牛フレンチディナー" ,
                "全室バルコニー付きレイクビュー・冬の澄んだ星空と朝霧のパノラマ絶景" ,
                "市街地の喧騒を離れたリゾート空間・カップルや夫婦の冬旅行に最適"
              ]
            },
            {
              id: 5,
              name: "塩江温泉　新樺川観光ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7032/7032.jpg",
              rating: 3.95,
              reviews: 541,
              price: "¥6,600〜",
              access: "高松中央ＩＣ、脇町ＩＣより車で30分。JR高松駅路線バスより60分。高松空港からタクシーで１５分。",
              special: "塩江温泉唯一！全客室風呂で24時間温泉を楽しめる「ココロとカラダをほぐし健やかになれる宿」",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7032%2F7032.html",
              story: "奈良時代に行基菩薩が開湯したと伝わる名湯・塩江温泉郷の歴史を今に伝える老舗宿「塩江温泉 新樺川観光ホテル」。香東川の清流沿いに建ち、自家源泉のぬめり感ある美肌の湯を緑豊かな渓流露天風呂で贅沢に楽しめます。冬は湯煙の向こうに山里の静寂が広がり、温泉情緒満点。夕食には讃岐牛の陶板焼きや川魚の塩焼き、冬の滋味あふれる猪鍋やしっぽく鍋が並び、どこか懐かしい温かなもてなしが心を満たします。",
              roomTip: "渓流側の和室12畳。川のせせらぎを聴きながら畳で足を伸ばし、冬の温泉情緒を心ゆくまで満喫。",
              gourmetTip: "「讃岐冬の味覚・しっぽく鍋会席」。根菜の甘みとお出汁のコクが溶け合った熱々の鍋料理で体の芯からポカポカに。",
              highlights: [
                "行基開湯1300年の名湯・香東川の渓流露天風呂と冬のしっぽく鍋会席が心に染みる老舗宿" ,
                "とろみのある美肌の自家源泉・畳敷きの純和室で足を伸ばして寛ぐ冬の湯治情趣" ,
                "自然豊かな塩江渓谷の静けさ・三世代旅行や温泉好きにおすすめの名門旅館"
              ]
            }
  ];

  const faqsData = [
    {
      q: "冬（11・12・1月）の「田村神社（たむらじんじゃ）」初詣の見どころと名物「日曜うどん」とは？",
      a: "田村神社は讃岐国一ノ宮として古くから篤い信仰を集め、正月三が日には高松市内最多となる約20万人の参拝客で賑わいます。境内奥の「定水井（底なしの深淵）」には龍神が棲むという伝説があり、黄金の巨大龍神像や金運・開運のパワースポットとしても有名です。また、地元住民や参拝客に愛されているのが境内で日曜の朝に振る舞われる名物「日曜うどん」。本格的な手打ち讃岐うどんを驚きのリーズナブルさで味わえます（※年始特別営業は日程要確認）。三が日の混雑回避には、早朝（午前7〜9時頃）または夕方16時以降の参拝がおすすめです。"
    },
    {
      q: "特別名勝「栗林公園（りつりんこうえん）」の冬の見どころと「雪吊り」の鑑賞期間は？",
      a: "国の特別名勝に指定されている栗林公園は、ミシュラン・グリーンガイド・ジャポンで最高評価の三つ星を獲得した大名庭園です。毎年11月上旬から職人の手作業によって松の枝に「雪吊り（ゆきづり）」が施され、3月上旬頃までその美しい幾何学的な縄模様を鑑賞できます。冬の澄み渡る青空と白壁、紫雲山を借景にした冬枯れの庭園美は息を呑む静けさです。園内の茶屋「掬月亭（きくげつてい）」で、南湖の水面を眺めながら温かいお抹茶と季節の和菓子をいただくのが冬ならではの贅沢です。"
    },
    {
      q: "香川の冬の郷土料理「しっぽくうどん」とはどのようなうどんですか？",
      a: "しっぽくうどんは、寒さが本格化する晩秋から冬にかけて香川県の讃岐うどん店や家庭で食べられる冬の代表的な郷土料理です。大根、里芋、人参、ごぼうなどの冬の根菜類、油揚げ、椎茸、鶏肉などを、煮干し（いりこ）の効いた出汁でじっくり煮込み、茹でたての温かいうどんに豪快に具材と汁をかけます。野菜の甘みと旨味が染み出した滋味深い出汁が太めのうどんに絡み、体の芯から温まる冬の讃岐のソウルフードです。"
    },
    {
      q: "高松の奥座敷「塩江温泉郷（しおのえおんせんきょう）」の歴史と泉質の特徴は？",
      a: "塩江温泉郷は高松市街から南へ約30km、徳島県境に近い阿讃山脈の山あいに位置する温泉地です。奈良時代の神亀年間（約1300年前）に行基菩薩が発見し、弘法大師空海が湯治の地として伝えたと伝えられる讃岐最古の名湯です。泉質は単純硫黄泉や炭酸水素塩泉で、肌に触れるとヌルヌルとしたとろみがあり、古い角質を落として肌をすべすべにする「美肌の湯」として親しまれています。冬は渓谷の澄んだ空気の中で楽しむ露天風呂が格別です。"
    },
    {
      q: "高松空港・JR高松駅から田村神社・栗林公園・塩江温泉への冬のアクセス方法は？",
      a: "高松空港から田村神社へは空港リムジンバスまたはタクシーで約15分、塩江温泉へも車・タクシーで約20分と極めて近距離です。JR高松駅からは、ことでん琴平線で栗林公園駅（約5分）、一宮駅（田村神社の最寄り駅・徒歩約10分、高松駅から約15分）と電車での移動が非常にスムーズです。塩江温泉へはJR高松駅・ことでん瓦町駅から路線バス（塩江線）で約60分です。冬期でも平野部は積雪の心配がほとんどありませんが、塩江温泉などの山間部へ車で行く場合は念のため冬用タイヤ装着が安心です。"
    }
  ];

  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-b from-teal-950 via-slate-900 to-slate-800 text-white py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-teal-400 text-xs md:text-sm font-semibold tracking-wider uppercase mb-3">
            <Sunrise className="w-4 h-4 text-teal-300" />
            <span>讃岐国・香川 冬の特別紀行（11月・12月・1月）</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6 font-journal-serif">
            讃岐一ノ宮「田村神社」新春初詣と栗林公園の冬雪吊り<br className="hidden md:inline" />
            奥座敷・塩江温泉の美肌湯＆熱々しっぽくうどん・オリーブ牛名宿
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mb-6">
            瀬戸内海の穏やかな潮風と阿讃山脈の懐に抱かれた香川県高松市。約20万人が新春の開運を祈る讃岐国一ノ宮「田村神社」、国の特別名勝「栗林公園」で見事な枝ぶりを誇る冬の雪吊りと名松、行基開湯1300年の歴史を誇る奥座敷「塩江温泉郷」の湯煙。冬野菜をたっぷり煮込んだ讃岐の冬の味覚「しっぽくうどん」と極上の「讃岐オリーブ牛」を味わう、心温まる冬の讃岐旅へご案内します。
          </p>

          <div className="flex flex-wrap gap-3 text-xs md:text-sm text-slate-200">
            <span className="bg-teal-900/60 border border-teal-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-teal-400" /> 田村神社（讃岐国一ノ宮・龍神信仰）
            </span>
            <span className="bg-teal-900/60 border border-teal-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Flower2 className="w-4 h-4 text-teal-400" /> 栗林公園（三つ星庭園・冬の雪吊り）
            </span>
            <span className="bg-teal-900/60 border border-teal-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Utensils className="w-4 h-4 text-teal-400" /> 冬名物「しっぽくうどん」＆讃岐オリーブ牛
            </span>
          </div>
        </div>
      </header>

      {/* Summary Box */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b pb-3">
            <CheckCircle2 className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span>本特集でわかること（11・12・1月の高松・塩江温泉旅行の要点）</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-700">
            <div className="bg-teal-50/60 p-4 rounded-xl border border-teal-100">
              <span className="font-bold text-teal-950 block mb-1">① 田村神社 新春初詣と龍神伝説</span>
              讃岐国一ノ宮に約20万人が集う新春祈祷。御神体・定水井の底なし井戸と黄金龍神像。名物日曜うどんの楽しみ方と早朝参拝の魅力。
            </div>
            <div className="bg-teal-50/60 p-4 rounded-xl border border-teal-100">
              <span className="font-bold text-teal-950 block mb-1">② しっぽくうどん＆讃岐オリーブ牛</span>
              冬大根や里芋をいりこ出汁で煮込んだ熱々「しっぽくうどん」。オリーブ果実で育つ極上「讃岐オリーブ牛」の軽やかな甘みと旨味。
            </div>
            <div className="bg-teal-50/60 p-4 rounded-xl border border-teal-100">
              <span className="font-bold text-teal-950 block mb-1">③ 栗林公園雪吊り＆塩江温泉</span>
              ミシュラン三つ星庭園の冬の雪吊り松美と掬月亭の抹茶。行基開湯1300年の奥座敷・塩江温泉の美肌湯浴みで心身を解きほぐす旅。
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 py-4 text-xs text-slate-500 flex items-center gap-2">
        <Link href="/" className="hover:text-teal-800 transition">ホーム</Link>
        <span>/</span>
        <Link href="/features" className="hover:text-teal-800 transition">特集一覧</Link>
        <span>/</span>
        <span className="text-slate-700 font-medium">香川・高松＆塩江温泉 冬特集</span>
      </nav>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">

        {/* Section 1: Overview and Atmosphere */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-teal-100 text-teal-900 rounded-xl">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest block">SANUKI WINTER LANDSCAPE</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                名木が雪吊りに護られる三つ星庭園と、龍神宿る一ノ宮に響く新春の祈り
              </h2>
            </div>
          </div>

          <div className="text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
            <p>
              瀬戸内海を臨む香川県高松市は、冬でも晴天が多く、穏やかな気候が旅人を迎えてくれます。冬の冷気配が凛と立ち込める11月から1月、高松の街は一年で最も趣深い静寂と活気に包まれます。
            </p>
            <p>
              国の特別名勝「栗林公園」では、歴代の高松藩主が百余年の歳月をかけて手入れを施した千数百本の銘松が、冬の雪吊りをまとって見事な幾何学模様を描き出します。紫雲山を背景にした名園の静寂に身を浸した後は、龍神信仰が息づく讃岐国一ノ宮「田村神社」へ。境内奥の神聖な井戸に宿る龍神に新年の福徳開運を祈願し、新春の活気を感じ取ることができます。さらに市街地から南の山あいに進めば、行基開湯・空海ゆかりの古湯「塩江温泉郷」が湯煙を上げて迎えてくれます。
            </p>
            <p>
              冬の冷え込んだ身体にとろみのある美肌の湯が染み渡り、熱々の具だくさん「しっぽくうどん」をすする——心身の芯まで温もりで満たされる、至福の冬旅がここにあります。瀬戸内の冬の穏やかな陽光と、阿讃山脈の清らかな空気が織りなす旅情は、新しい年の始まりに清々しい息吹を吹き込んでくれます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-100">
              <h3 className="font-bold text-teal-950 text-sm mb-1 flex items-center gap-1.5">
                <Sunrise className="w-4 h-4 text-teal-700" /> 田村神社 新春初詣
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                讃岐国一ノ宮。黄金の龍神像と神聖な定水井を祀り、開運・金運・交通安全を祈る高松隨一の初詣霊場。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-100">
              <h3 className="font-bold text-teal-950 text-sm mb-1 flex items-center gap-1.5">
                <Flower2 className="w-4 h-4 text-teal-700" /> 栗林公園 冬の雪吊り
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                ミシュラン三つ星の大名庭園。職人の技が光る雪吊りと松の造形美。掬月亭でいただく抹茶も格別。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-100">
              <h3 className="font-bold text-teal-950 text-sm mb-1 flex items-center gap-1.5">
                <Waves className="w-4 h-4 text-teal-700" /> 塩江温泉郷 美肌の湯
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                高松の奥座敷として愛される開湯1300年の名湯。とろみのある良泉が冬の冷えた体を芯から温める。
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Winter Gourmet Focus */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-amber-100 text-amber-900 rounded-xl">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest block">SANUKI GASTRONOMY</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                冬の讃岐の魂「しっぽくうどん」と、芳醇な霜降り「讃岐オリーブ牛」
              </h2>
            </div>
          </div>

          <div className="text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
            <p>
              香川の冬の風物詩として県民に愛され続ける「しっぽくうどん」。冬に甘みを増す大根や里芋、人参、ごぼう、椎茸、油揚げ、鶏肉を、いりこの豊かな香りが立つ出汁で煮込み、茹でたての温かいうどんにたっぷりと具材ごと注ぎます。煮崩れ寸前の根菜から染み出た滋味深い旨味がスープに溶け込み、もちもちの手打ち麺と絡み合って一口ごとに幸福感が広がります。おろし生姜や七味唐辛子を少し効かせると、冷え切った体がぽかぽかと温まります。
            </p>
            <p>
              小豆島特産のオリーブ搾り果実を加熱処理して与え育てられた香川県のプレミアム黒毛和牛「讃岐オリーブ牛」。オリーブに含まれるオレイン酸と抗酸化成分の働きにより、脂っこさが全くなく、驚くほど軽やかで上品な甘みが特徴です。冬の夜には、すき焼きや陶板焼きステーキで味わうのが格別。口に入れた瞬間に広がる芳醇な肉汁と、さっぱりとした後味の余韻は、一度食べたら忘れられない感動の味わいです。
            </p>
            <p>
              さらに冬の讃岐では、11月〜1月にかけて脂の乗りが最高潮に達するブランド魚「オリーブハマチ」も見逃せません。オリーブの葉粉末を添加した飼料で育てられたハマチは、身の締まりが抜群で酸化しにくく、さっぱりとした極上の旨味を刺身やしゃぶしゃぶで堪能できます。
            </p>
          </div>
        </section>

        {/* Section 3: Sightseeing Spots & Winter Attractions */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-teal-100 text-teal-900 rounded-xl">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest block">ISLAND & SHORE HIGHLIGHTS</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                屋島からの冬夕景と、ことでん電車に揺られる大人の冬散歩
              </h2>
            </div>
          </div>

          <div className="text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
            <p>
              高松市街の東に位置する台形状の溶岩台地「屋島（やしま）」は、源平合戦の古戦場として名高い景勝地です。山頂の展望台「獅子の霊巌（ししのれいがん）」からは、冬の澄んだ大気の向こうに瀬戸内海の多島美と沈みゆく夕日が一望できます。茜色から紫紺へと移り変わる夕暮れのグラデーションは、息を呑むほどの美しさです。
            </p>
            <p>
              また、高松の街歩きには地元で「ことでん」と親しまれる高松琴平電気鉄道の利用がおすすめです。レトロな車両に揺られながら、栗林公園や田村神社のある一宮駅、仏生山（ぶっしょうざん）の古い門前町をのんびり訪ね歩く時間は、冬の旅の温かなアクセントになります。仏生山には日帰り温泉施設や古民家カフェも点在しており、気ままな途中下車が楽しめます。
            </p>
            <p>
              高松港周辺の「サンポート高松」では、冬の夜に海風を感じながらライトアップされた赤灯台（せとしるべ）やシンボルタワーを散策。海沿いの洗練された空間と、昔ながらの讃岐うどん店の素朴な活気が共存する高松の街は、訪れる旅人に多彩な魅力を届けてくれます。
            </p>
          </div>
        </section>

        {/* Section 4: Travel Practical Tips */}
        <section className="bg-slate-100/80 rounded-2xl p-6 md:p-8 border border-slate-200 space-y-4">
          <h2 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span>冬の高松・塩江温泉 旅の実践アドバイス（気候・服装・うどん巡り）</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-slate-700">
            <div>
              <strong className="block text-slate-900 font-bold mb-1">【気候と防寒】</strong>
              瀬戸内海側は比較的温暖ですが、海沿いの高松港や標高の高い屋島山頂は風が強く体感温度が下がります。マフラーや防風性のあるコートを用意しましょう。塩江温泉などの山間部は朝晩の冷え込みが厳しく路面凍結の可能性があるため、冬用タイヤ装着が安心です。
            </div>
            <div>
              <strong className="block text-slate-900 font-bold mb-1">【讃岐うどん巡りの注意点】</strong>
              人気うどん店は午前中〜昼過ぎ（14時頃）で営業終了・玉切れ閉店することが多い傾向です。冬限定の「しっぽくうどん」は数量限定の店舗もあるため、午前11時前後の早めの来店が確実です。年末年始は各店の休業日を事前に確認しておきましょう。
            </div>
          </div>
        </section>

        {/* Section 5: Verified Hotels */}
        <section className="space-y-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-black text-teal-800 uppercase tracking-widest bg-teal-100 px-3 py-1 rounded-full inline-block">
              SELECTED ACCOMMODATIONS
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 font-journal-serif">
              田村神社参拝＆塩江温泉を満喫する厳選名宿5選
            </h2>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              楽天トラベルAPIより最新の空室・料金・レビュー情報を取得。瀬戸内海を望む駅前ランドマークホテルから、商店街直結の快適ホテル、塩江温泉の渓谷露天風呂リゾートまで厳選しました。
            </p>
          </div>

          <div className="space-y-8">
            {hotelsData.map((hotel) => (
              <div 
                key={hotel.id} 
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Hotel Image */}
                  <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
                    <img 
                      src={hotel.img} 
                      alt={hotel.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{hotel.rating}</span>
                      <span className="text-slate-300">({hotel.reviews}件)</span>
                    </div>
                  </div>

                  {/* Hotel Content */}
                  <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-extrabold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200">
                          厳選宿 #{hotel.id}
                        </span>
                        <span className="text-sm font-black text-rose-600">
                          参考宿泊料: {hotel.price}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-black text-slate-900 hover:text-teal-800 transition">
                        <a href={hotel.url} target="_blank" rel="noopener noreferrer">
                          {hotel.name}
                        </a>
                      </h3>

                      <p className="text-xs text-slate-500 flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>{hotel.access}</span>
                      </p>

                      <p className="text-slate-700 text-xs md:text-sm leading-relaxed">
                        {hotel.story}
                      </p>

                      {/* Tips */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                          <strong className="block text-slate-900 font-bold mb-1 text-[11px] uppercase tracking-wider text-teal-800">
                            🛌 客室選びのヒント
                          </strong>
                          <span className="text-slate-600">{hotel.roomTip}</span>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                          <strong className="block text-slate-900 font-bold mb-1 text-[11px] uppercase tracking-wider text-amber-800">
                            🥢 冬の特選グルメ
                          </strong>
                          <span className="text-slate-600">{hotel.gourmetTip}</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-1.5 pt-2 text-xs text-slate-600">
                        {hotel.highlights.map((hl, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Booking Button */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-400">楽天トラベル公認リンク</span>
                      <a 
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-black text-xs md:text-sm rounded-xl shadow-md hover:shadow-lg transition transform active:scale-95"
                      >
                        <span>プラン詳細・空室確認</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: 1-Night 2-Days Model Course */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-teal-100 text-teal-900 rounded-xl">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest block">MODEL ITINERARY</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                田村神社初詣＆栗林公園・塩江温泉 1泊2日冬の黄金モデルコース
              </h2>
            </div>
          </div>

          <div className="space-y-6 text-xs md:text-sm">
            {/* Day 1 */}
            <div className="border-l-2 border-teal-500 pl-4 space-y-3">
              <h3 className="font-black text-slate-900 text-base flex items-center gap-2">
                <span className="bg-teal-600 text-white px-2 py-0.5 rounded text-xs">1日目</span>
                栗林公園の冬雪吊りを愛で、名物しっぽくうどんを味わう
              </h3>
              <p className="text-slate-600 leading-relaxed">
                <strong>11:00 高松空港またはJR高松駅に到着</strong><br />
                高松市内の名店で熱々の「しっぽくうどん」を昼食に。根菜の出汁が染みた温かい一杯で旅の活力を充填。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>13:00 特別名勝「栗林公園」を散策</strong><br />
                冬の雪吊りが施された千数百本の名松と大名庭園の静けさを愛でる。掬月亭で温かいお抹茶と上生菓子をいただきながら庭園を一望。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>16:00 高松市内または塩江温泉のホテルにチェックイン</strong><br />
                塩江温泉の渓谷露天風呂または高松市街の展望ホテルへ。夕食は讃岐オリーブ牛のすき焼きやステーキ、冬のオリーブハマチ刺身を堪能。
              </p>
            </div>

            {/* Day 2 */}
            <div className="border-l-2 border-emerald-500 pl-4 space-y-3">
              <h3 className="font-black text-slate-900 text-base flex items-center gap-2">
                <span className="bg-emerald-600 text-white px-2 py-0.5 rounded text-xs">2日目</span>
                讃岐一ノ宮「田村神社」で新春祈願、屋島から冬の瀬戸内海を一望
              </h3>
              <p className="text-slate-600 leading-relaxed">
                <strong>08:30 田村神社へ新春初詣</strong><br />
                龍神が棲む定水井や黄金の龍神像に手を合わせ、新年の開運と福徳を祈願。日曜なら名物の境内手打ちうどんも楽しむ。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>11:30 屋島（獅子の霊巌・屋島寺）へ</strong><br />
                源平合戦の舞台となった屋島へドライブ。展望台から澄み渡る冬の瀬戸内海の多島美をパノラマで満喫。名物のかわらけ投げで厄払い。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>14:30 高松駅または高松空港から帰路へ</strong><br />
                讃岐うどんや和三盆糖のお土産を購入し、飛行機や新幹線で帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: FAQ */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-purple-100 text-purple-900 rounded-xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-purple-800 uppercase tracking-widest block">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                高松・塩江温泉 冬の旅行 よくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, idx) => (
              <div key={idx} className="border border-slate-100 rounded-xl p-4 md:p-5 bg-slate-50/50">
                <h3 className="font-bold text-slate-900 text-sm md:text-base mb-2 flex items-start gap-2">
                  <span className="text-teal-600 font-black">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Link CTA */}
        <section className="bg-gradient-to-r from-teal-950 to-slate-900 text-white rounded-2xl p-8 text-center space-y-4">
          <h2 className="text-xl md:text-2xl font-black font-journal-serif">
            冬の日本全国・厳選特集をチェック
          </h2>
          <p className="text-slate-300 text-xs md:text-sm max-w-xl mx-auto">
            11月・12月・1月が旬の温泉郷、新春初詣、冬の味覚、雪景色を特集したオリジナル旅行ガイドを多数公開中。次の旅の目的地を見つけてください。
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link 
              href="/features" 
              className="px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 font-black text-xs md:text-sm rounded-xl shadow transition"
            >
              特集記事一覧を見る
            </Link>
            <Link 
              href="/" 
              className="px-6 py-3 bg-teal-800 hover:bg-teal-700 text-white font-black text-xs md:text-sm rounded-xl border border-teal-600 transition"
            >
              トップページへ戻る
            </Link>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-4 text-center text-xs border-t border-slate-800 mt-16">
        <p>© 2026 旅宿クラウド (croud-travel.com). All rights reserved.</p>
        <p className="mt-2 text-slate-500">掲載の宿泊料金や施設情報は楽天トラベルAPIより取得した参考データです。最新のプラン内容は各宿泊施設ページをご確認ください。</p>
      </footer>
    </article>
  );
}
