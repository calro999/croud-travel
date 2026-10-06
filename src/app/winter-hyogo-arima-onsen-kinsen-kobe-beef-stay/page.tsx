import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Gem
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12月有馬温泉】日本最古の名湯で芯から温まる冬！名宿5選',
  description: '日本三古湯・三名泉の筆頭として豊臣秀吉もこよなく愛した兵庫・有馬温泉。11月の瑞宝寺公園の紅葉の余韻から。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '有馬温泉 宿泊 11月 12月, 有馬温泉 金泉 銀泉, 有馬温泉 神戸牛 旅館, 兵衛向陽閣 有馬グランドホテル, 有馬温泉 おすすめ 宿, 六甲山 夜景 有馬温泉, 有馬温泉 冬 モデルコース',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-hyogo-arima-onsen-kinsen-kobe-beef-stay/",
  },
  openGraph: {
    title: '【11・12月有馬温泉】日本最古の名湯で芯から温まる冬！名宿5選',
    description: '日本三古湯・三名泉の筆頭として豊臣秀吉もこよなく愛した兵庫・有馬温泉。11月の瑞宝寺公園の紅葉の余韻から。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-hyogo-arima-onsen-kinsen-kobe-beef-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月有馬温泉の金泉銀泉と六甲山夜景】日本最古の名湯で芯から温まる冬・最高峰神戸牛会席を味わう老舗宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月有馬温泉の金泉銀泉と六甲山夜景】日本最古の名湯で芯から温まる冬・最高峰神戸牛会席を味わう老舗宿5選",
    description: "日本三古湯・三名泉の筆頭として豊臣秀吉もこよなく愛した兵庫・有馬温泉。11月の瑞宝寺公園の紅葉の余韻から、12月の六甲山から望む澄み切った1000万ドルの冬夜景。海水の約2倍の塩分と鉄分を含み冬でも湯冷め知らずの赤茶色の名湯「金泉」と、世界最高峰「神戸牛」の贅沢なすき焼き・ステーキ会席を堪能する極上冬宿ガイド。",
  }
};

export default function ArimaWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-hyogo-arima-onsen-kinsen-kobe-beef-stay#article",
        "headline": "【11・12月有馬温泉の金泉銀泉と六甲山夜景】日本最古の名湯で芯から温まる冬・最高峰神戸牛会席を味わう老舗宿5選",
        "description": "日本三古湯・三名泉の筆頭として豊臣秀吉もこよなく愛した兵庫・有馬温泉。11月の瑞宝寺公園の紅葉の余韻から、12月の六甲山から望む澄み切った1000万ドルの冬夜景。海水の約2倍の塩分と鉄分を含み冬でも湯冷め知らずの赤茶色の名湯「金泉」と、世界最高峰「神戸牛」の贅沢なすき焼き・ステーキ会席を堪能する極上冬宿ガイド。",
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
          "@id": "https://croud-travel.pages.dev/winter-hyogo-arima-onsen-kinsen-kobe-beef-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-hyogo-arima-onsen-kinsen-kobe-beef-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "有馬温泉の「金泉」と「銀泉」の泉質や効能の違いは何ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "有馬温泉には世界的に珍しい2つの特異な源泉があります。『金泉（きんせん）』は含鉄ナトリウム塩化物強塩高温泉で、湧出時は無色透明ですが空気に触れて鉄分が酸化し濃い赤茶色に変化します。海水の1.5〜2倍という極めて高い塩分を含み、皮膚に付着した塩分が放熱を防ぐため、抜群の保温・保湿効果があり冬の冷え性に最適です。一方、『銀泉（ぎんせん）』は無色透明の炭酸水素塩泉および放射能泉（ラドン泉）で、毛細血管を拡張させて血流を促し、高血圧や関節痛の改善、美肌効果が期待できます。"
            }
          },
          {
            "@type": "Question",
            "name": "有馬温泉の11月・12月の気候と六甲山からの夜景の見え方は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "有馬温泉は六甲山の北麓（標高約350〜400m）に位置するため、神戸市街地や大阪市内よりも気温が3〜5度低くなります。11月は朝晩の冷え込みが強く（5度前後）、12月に入ると朝晩は氷点下に近付きます。冬の六甲山頂（ロープウェーでアクセス可能）は空気が極限まで澄み渡るため、大阪湾から神戸港、紀伊半島まで見渡す『1000万ドルの冬夜景』が一年で最も鮮やかで美しく輝きます。厚手のダウンコートや手袋・マフラーを必ず着用してください。"
            }
          },
          {
            "@type": "Question",
            "name": "大阪や神戸・京都からのアクセス方法と所要時間は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "大阪駅（梅田・阪急三番街）からは直行の高速バス（阪急バス・西日本JRバス）で乗り換えなし約55分。神戸三宮駅からは直行バスで約30分、または神戸市営地下鉄・神戸電鉄を乗り継いで約35分です。京都駅八条口からも直行高速バスで約75分と、関西主要都市からのアクセスは極めて快適です。お車の場合は阪神高速7号北神戸線『有馬口IC』から約5分です。"
            }
          },
          {
            "@type": "Question",
            "name": "有馬温泉で味わうべき最高峰グルメは何ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "何と言っても世界に名だたる兵庫の誇り『神戸牛（但馬牛）』です。きめ細やかなサシが入った最高ランクの神戸牛をすき焼き、しゃぶしゃぶ、陶板ステーキで味わう会席は格別です。また、ピリリとした清涼感が特徴の伝統の『有馬山椒』を使った料理や、炭酸泉の恵みから生まれたパリッと香ばしい『炭酸煎餅』、手作りの『有馬麦酒（地ビール）』もお土産・食べ歩きの定番です。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.pages.dev/winter-hyogo-arima-onsen-kinsen-kobe-beef-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "有馬温泉　兵衛向陽閣",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8636%2F8636.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "有馬温泉　陶泉　御所坊",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F80572%2F80572.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "有馬温泉　銀水荘　兆楽",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18093%2F18093.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "有馬温泉　月光園　鴻朧館",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18252%2F18252.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "有馬温泉　有馬グランドホテル",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F25128%2F25128.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "有馬温泉　兵衛向陽閣",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8636/8636.jpg",
              rating: 4.56,
              reviews: 2607,
              price: "¥15,950〜",
              access: "神戸より電車で約３０分／神戸電鉄有馬温泉駅・バス有馬温泉駅より徒歩約６分／阪神高速道路北神戸線有馬口出口より約５分",
              special: "創業700年の老舗旅館。有馬温泉の高台に位置し、有馬最大級の悠々とした三大浴場でお寛ぎいただけます。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8636%2F8636.html",
              story: "創業700年の歴史を誇り、太閤秀吉から「兵衛」の名を授かったと伝わる有馬を代表する名門旅館「兵衛向陽閣」。有馬温泉の高台に位置し、館内には「一の湯」「二の湯」「三の湯」という趣の異なる3つの広大な大浴殿が広がります。すべての浴場で有馬名物の濃厚な赤茶色の「金泉」が贅沢に注がれており、海水の約1.5〜2倍という極めて濃い塩分と鉄分が、初冬の冷気で冷えた身体の芯まで驚くほど深く温めてくれます。老舗ならではの行き届いた伝統のおもてなしと、現代のラグジュアリーが調和した空間は、三世代旅行や大切な記念日にも最高の満足感をもたらします。",
              roomTip: "有馬の山並みを見晴らす西館・南館の広々とした和室や、露天風呂付き客室がおすすめ。夕暮れに染まる有馬の山あいの風景を静かに愛でることができます。",
              gourmetTip: "最高峰A5ランク「神戸牛」をメインとした豪華会席料理または伝統の和食ビュッフェ。きめ細やかな霜降りの神戸牛すき焼きやすきしゃぶ、旬の瀬戸内魚介のお造り、名物有馬山椒の香る逸品が食卓を贅沢に彩ります。",
              highlights: [
                "創業700年・秀吉ゆかりの名門旅館＆一の湯・二の湯・三の湯の3大浴殿巡り",
                "全浴殿に満ちる濃厚な自家源泉金泉＆保温効果抜群の冬の極上湯あみ",
                "最高峰A5ランク神戸牛すき焼き・すきしゃぶと瀬戸内旬魚の贅沢会席"
              ]
            },
            {
              id: 2,
              name: "有馬温泉　陶泉　御所坊",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/80572/80572.jpg",
              rating: 4.33,
              reviews: 312,
              price: "¥17,800〜",
              access: "神戸電鉄有馬温泉駅から徒歩5分／中国自動車道西宮北ＩＣより５ｋｍ／神戸空港より電車乗り継ぎで約60分",
              special: "鎌倉以来八百年　古式温泉館　有馬最古の湯宿で100％源泉掛け流しの新鮮な有馬の湯と風情を堪能",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F80572%2F80572.html",
              story: "創業1191年、鎌倉時代から800年以上の歴史を刻む有馬最古の宿の一つであり、谷崎潤一郎の小説『細雪』の舞台としても名高い「陶泉 御所坊」。滝川の畔に佇み、木造モダニズムと数寄屋建築の美学が融合した館内は、まるで昭和初期の文豪の別荘にタイムスリップしたかのような静謐な空気に満ちています。宿の名物は、温泉街で唯一の半混浴風の金泉露天風呂「金郷泉」。男女の湯船が低い竹垣で仕切られた独特の趣ある湯船には、空気に触れて濃い琥珀色に輝く純生源泉が満ち、川のせせらぎを聞きながら極上の湯あみが楽しめます。",
              roomTip: "文豪たちが愛した川沿いの数寄屋風客室や、アンティーク家具が配された和洋室が秀逸。木の温もりと川音に包まれ、静かな読書や語らいの時間を過ごせます。",
              gourmetTip: "契約牧場から一頭買いする但馬玄（たじまぐろ・最高峰但馬牛）の炭火焼きや温泉水を使ったしゃぶしゃぶ。無農薬野菜や自家製米とともに、素材の真髄を味わう滋味深い山家会席です。",
              highlights: [
                "創業1191年・谷崎潤一郎『細雪』の舞台＆半混浴風金泉露天風呂「金郷泉」",
                "木造モダニズムと数寄屋建築の美学＆純生源泉が注ぐ琥珀色の名湯",
                "一頭買いする但馬玄（たじまぐろ）炭火焼きと無農薬野菜の山家会席"
              ]
            },
            {
              id: 3,
              name: "有馬温泉　銀水荘　兆楽",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/18093/18093.jpg",
              rating: 4.60,
              reviews: 1030,
              price: "¥22,220〜",
              access: "☆無料送迎バス有☆　新神戸・三宮駅より電車で約40分／中国自動車道西宮北IC・阪神高速有馬口より車で10分",
              special: "有馬でも珍しい！金泉と銀泉のある宿★自然味たっぷりの露天風呂で評判の櫟林の湯宿☆",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18093%2F18093.html",
              story: "有馬の温泉街から少し離れた閑静な高台、約1万坪もの広大なクヌギの原生林に抱かれた隠れ家リゾート「銀水荘 兆楽」。有馬温泉でも数少ない、赤茶色の「金泉」と無色透明の「銀泉（ラドン炭酸泉）」の両方の自家源泉を敷地内に所有する贅沢な湯宿です。原生林の中に点在する露天風呂「紫貴」や大浴場では、鉄分と塩分が濃厚な金泉で体を芯から温めた後、ラドンを含む銀泉で肌をすっきりと引き締める贅沢な交互浴が可能。11月・12月の冷え込む夜、ライトアップされた森の木々と星空を眺めながら入る森林露天風呂はまさに別天地です。",
              roomTip: "クヌギの森を眼下に望むテラス付き客室や、専用の金泉・銀泉露天風呂を備えた離れ特別室が人気。誰にも気兼ねのないプライベートな休日を満喫できます。",
              gourmetTip: "熟練の料理人が一椀一皿に丹精を込める京風懐石料理。霜降り神戸牛の陶板焼きやしゃぶしゃぶ、明石浦から届く冬の真鯛やフグ、丹波の旬野菜など、関西の誇る山海の美味を堪能できます。",
              highlights: [
                "1万坪のクヌギ原生林に佇む閑静宿＆敷地内に金泉・銀泉2つの自家源泉",
                "原生林に包まれる森林露天風呂「紫貴」＆金泉銀泉の贅沢交互浴",
                "明石浦の冬真鯛・フグと神戸牛陶板焼きを味わう匠の京風懐石"
              ]
            },
            {
              id: 4,
              name: "有馬温泉　月光園　鴻朧館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/18252/18252.jpg",
              rating: 4.55,
              reviews: 1685,
              price: "¥15,180〜",
              access: "中国自動車道 西宮北ＩＣより有馬温泉方面約１０分／神戸電鉄「有馬温泉」駅下車 徒歩１０分（※毎日８時～１９時は無料送迎可",
              special: "ロビーや浴場等随所より壮大な景色がご覧頂ける有馬随一の立地条件。有馬の元湯をお楽しみくださいませ。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18252%2F18252.html",
              story: "有馬温泉の景勝地・落葉山と滝川の清流を目の前に望む絶好のロケーションに建つ「月光園 鴻朧館」。全客室から四季折々の落葉山のパノラマ渓谷美を望むことができ、11月下旬の遅咲きの紅葉や、12月の初冬の凛とした山肌を間近に感じられます。館内には広々とした金泉大浴場と檜露天風呂があり、川のせせらぎをBGMに贅沢な掛け流しの湯を堪能。隣接する姉妹館「遊月山荘」への湯めぐりも可能で、川沿いに造られた野趣あふれる露天風呂など、多彩な湯あみを心ゆくまで楽しめます。",
              roomTip: "落葉山と滝川を一望する大型ピクチャーウィンドウを備えた和室や露天風呂付き客室。四季の渓谷美を額縁の絵画のように眺められます。",
              gourmetTip: "神戸牛のサーロインやフィレを贅沢に使った割烹会席。職人が目の前で調理するプランもあり、極上の肉の甘みと有馬山椒のピリッとしたアクセントが絶妙なハーモニーを奏でます。",
              highlights: [
                "落葉山の雄大な渓谷美を正面に望む眺望＆滝川のせせらぎが響く名湯露天",
                "姉妹館「遊月山荘」への湯めぐりも無料＆落葉山を彩る晩秋初冬の景観",
                "神戸牛サーロインと有馬山椒が引き立てる繊細な割烹会席料理"
              ]
            },
            {
              id: 5,
              name: "有馬温泉　有馬グランドホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/25128/25128.jpg",
              rating: 4.65,
              reviews: 1778,
              price: "¥17,050〜",
              access: "有馬温泉駅（電車、バス、ロープウェイ）より送迎サービス有（要電話）　神戸電鉄有馬温泉駅より徒歩10分　",
              special: "小高い丘の上に立つ絶景のホテル。 最上階の展望大浴苑「雲海」からの景色は壮観です。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F25128%2F25128.html",
              story: "有馬温泉街を見下ろす高台に雄大に構え、敷地面積約1万7千坪という有馬屈指のスケールを誇るラグジュアリーホテル「有馬グランドホテル」。自慢はホテル最上階（9階）に位置する展望大浴殿「雲海」。金泉と銀泉の両方の露天風呂を備え、眼下に有馬の町並み、遠くに丹波の山並みを望む360度の大パノラマが広がります。特に初冬の澄み渡る夕暮れ時、茜色に染まる山並みと街の灯りを湯船から見下ろす瞬間は感動的。広大な敷地内にはアクアテラスや多彩なレストラン、エステサロンが完備され、上質なリゾートライフを満喫できます。",
              roomTip: "展望風呂付き特別室「別邸 墅（そ）」や高層階パノラマフロアが人気。広々としたリビングとバルコニーから、遮るもののない大パノラマを独占できます。",
              gourmetTip: "和食・洋食・中華のトップシェフが腕を競う多彩なダイニング。A5等級神戸牛ステーキをメインとした鉄板焼きや、伝統の日本料理会席、兵庫五国の旬の味覚を取り入れた贅沢なコースが選べます。",
              highlights: [
                "最上階9階の展望大浴殿「雲海」＆有馬の町並みと山並みを見晴らす360度パノラマ",
                "金泉露天と銀泉露天が揃う天空の湯処＆1万7千坪の広大なリゾート設備",
                "A5神戸牛鉄板焼きステーキや兵庫五国の山海の恵みを味わう多彩なコース"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-amber-900 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-950">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85"
          alt="冬の有馬温泉・湯けむり立ち上る赤茶色の金泉露天風呂と歴史ある温泉街の格子戸"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/90 text-amber-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-amber-800/50">
            <Gem className="w-4 h-4 text-amber-300" />
            <span>11月・12月限定 日本最古の名湯・金泉銀泉と最高峰神戸牛特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月有馬温泉の金泉銀泉と六甲山夜景】<br className="hidden sm:inline" />
            日本最古の名湯で芯から温まる冬・最高峰神戸牛会席を味わう老舗宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            神代より湧き出ずる日本最古の名湯。秀吉も傷と疲れを癒やした濃密な赤茶色の「金泉」は冬でも湯冷め知らず。澄み切った六甲山の1000万ドルの夜景と、霜降り美しき神戸牛の極上会席に酔いしれる週末の贅沢旅へ。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-amber-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-amber-400" /> 兵庫県神戸市北区有馬町（有馬温泉）</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
        
        {/* Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Imperial & Samurai Legacy</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                太閤秀吉が愛した日本最古の名湯。濃厚な「金泉」がもたらす冬の極楽
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            神戸の奥座敷、六甲山の北麓に静かに広がる有馬温泉。『日本書紀』や『古事記』にもその名が刻まれる日本最古の名湯であり、道後・白浜と並ぶ日本三古湯、そして草津・下呂と並ぶ日本三名泉の双方に名を連ねる唯一無二の格式を誇ります。戦国乱世を統一した豊臣秀吉は生涯に何度も有馬を訪れ、湯殿を築いて正室・ねねとともに湯治を楽しんだ歴史はあまりにも有名です。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            有馬の象徴である「金泉（きんせん）」は、プレートテクトニクスによって地下60キロメートルもの深部から湧き上がる地球の恵み。海水の約1.5倍から2倍という驚異的な高濃度塩分と鉄分を含み、湧出口では無色透明ですが、空気に触れた瞬間に鉄分が酸化して独特の濃い赤茶色（黄金色）へと変貌を遂げます。この塩分が皮膚に極薄の皮膜を形成するため、冷え込みの厳しい11月・12月でも湯上がり後数時間にわたって体がぽかぽかと温まり続け、「湯冷め知らずの湯」として絶大な信頼を集めています。さらに無色透明で血流を促す炭酸泉・ラジウム泉「銀泉（ぎんせん）」との交互浴は、自律神経を整え極上のリフレッシュをもたらします。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            11月下旬の瑞宝寺公園の錦秋の余韻から、12月の澄み切った初冬の空気へと移ろう季節。ロープウェーで登る六甲山頂からは、冬の澄んだ大気によって光の粒が一層輝きを増した「1000万ドルの夜景」が眼下に広がります。そして宿に戻れば、世界の美食家が熱狂する「神戸牛」のすき焼きや陶板ステーキ。極上のサシの甘みが口の中でとろけ、名物有馬山椒の爽やかな香りがアクセントを添える。歴史、泉質、夜景、美食のすべてが一流の冬旅がここにあります。
          </p>
          
          <div className="bg-amber-50/70 rounded-2xl p-5 border border-amber-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-800" />
                <span>冬の六甲山頂からの「1000万ドルの夜景」鑑賞</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                有馬温泉から六甲有馬ロープウェーで山頂駅へわずか12分。大気が澄み渡る11月・12月は大阪湾から関西国際空港まで見渡せる絶景シーズンです。
              </p>
            </div>
            <div className="px-4 py-2 bg-amber-800 text-white rounded-xl text-xs font-bold whitespace-nowrap shadow-sm">
              ロープウェー直結
            </div>
          </div>
        </section>

        {/* Feature Highlights Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center font-black text-xl">
              1
            </div>
            <h3 className="font-bold text-stone-900 text-base">海水の2倍の塩分！湯冷め知らずの「金泉」</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              地下60kmから湧く奇跡の濃密泉。塩分皮膜が熱を閉じ込め、冬の冷え切った体を芯から解きほぐす日本屈指の温まりの名湯。
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-800 flex items-center justify-center font-black text-xl">
              2
            </div>
            <h3 className="font-bold text-stone-900 text-base">世界最高峰ブランド「神戸牛」の極上会席</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              きめ細やかな霜降りととろける融点を持つA5ランク神戸牛。すき焼き・しゃぶしゃぶ・鉄板焼きステーキで味わう至高の贅。
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-800 flex items-center justify-center font-black text-xl">
              3
            </div>
            <h3 className="font-bold text-stone-900 text-base">大阪から約55分・三宮から約30分の好アクセス</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              主要都市から直行バスや電車で気軽に行ける関西最高峰の温泉リゾート。冬でも雪の心配が少なく快適にアクセス可能。
            </p>
          </div>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-widest bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200">
              Selected 5 Historic Ryokan
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              【11・12月】有馬温泉で泊まりたい極上老舗宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              創業700年の伝統を誇る兵衛向陽閣から、文豪ゆかりの御所坊、天空展望大浴場を備える有馬グランドホテルまで、本物の有馬を体感できる名宿を厳選。
            </p>
          </div>

          <div className="space-y-12">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col lg:flex-row group"
              >
                {/* Image Box */}
                <div className="lg:w-5/12 relative min-h-[300px] lg:min-h-[420px] overflow-hidden bg-stone-100">
                  <Image
                    src={hotel.img}
                    alt={hotel.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-stone-900/85 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    厳選宿 #{hotel.id}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-stone-950/90 via-stone-950/60 to-transparent p-3 rounded-2xl text-white text-xs">
                    <span className="font-semibold block text-stone-200 mb-0.5">参考宿泊料金目安:</span>
                    <span className="text-lg font-black text-amber-300">{hotel.price}</span>
                    <span className="text-stone-300 text-[11px] ml-1">（2名1室利用時・1名あたり/消費税込）</span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="lg:w-7/12 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                      <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-lg">
                        {hotel.access}
                      </span>
                      <div className="flex items-center gap-1.5 text-stone-700 text-xs sm:text-sm font-bold">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="text-stone-900 font-extrabold text-base">{hotel.rating}</span>
                        <span className="text-stone-400 font-normal">（{hotel.reviews}件のクチコミ）</span>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-amber-800 transition">
                      {hotel.name}
                    </h3>

                    <p className="text-stone-700 leading-relaxed text-sm">
                      {hotel.story}
                    </p>

                    {/* Room & Gourmet Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="bg-stone-50 rounded-2xl p-3.5 border border-stone-200/70">
                        <span className="text-[11px] font-extrabold text-stone-500 uppercase tracking-wider block mb-1">
                          客室のこだわり
                        </span>
                        <p className="text-xs text-stone-700 leading-relaxed">
                          {hotel.roomTip}
                        </p>
                      </div>

                      <div className="bg-amber-50/60 rounded-2xl p-3.5 border border-amber-200/70">
                        <span className="text-[11px] font-extrabold text-amber-800 uppercase tracking-wider block mb-1">
                          冬の美食会席
                        </span>
                        <p className="text-xs text-stone-700 leading-relaxed">
                          {hotel.gourmetTip}
                        </p>
                      </div>
                    </div>

                    {/* Highlights bullets */}
                    <div className="space-y-1.5 pt-1">
                      {hotel.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking CTA */}
                  <div className="pt-2 border-t border-stone-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <div className="text-xs text-stone-500 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-amber-700" />
                      <span>楽天トラベル公式連携・最低価格保証プランあり</span>
                    </div>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
                    >
                      <span>宿泊プラン・空室を確認する</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Model Course Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-8">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                【1泊2日】初冬の有馬温泉 金泉銀泉＆六甲山夜景・神戸牛満喫モデルコース
              </h2>
            </div>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-amber-200 space-y-8">
            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-amber-700 ring-4 ring-amber-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-amber-800 tracking-wider">1日目 13:00</span>
                <h3 className="text-base font-bold text-stone-900">有馬温泉街に到着・湯本坂のレトロ散策＆炭酸煎餅食べ歩き</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  高速バスまたは電車で有馬温泉へ。昔ながらの格子戸が連なるメインストリート「湯本坂」を散策。焼き立てでサクサク香ばしい名物の生炭酸煎餅や酒まんじゅうを頬張りながら温泉情緒を満喫。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-amber-700 ring-4 ring-amber-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-amber-800 tracking-wider">1日目 14:30</span>
                <h3 className="text-base font-bold text-stone-900">太閤の足湯＆妬泉源・御所泉源など源泉めぐり</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  温泉街に点在する源泉を散策。「金の湯」前にある無料の太閤の足湯で足先を温め、ゴボゴボと音を立てて湧出する妬泉源や炭酸泉源公園の天然炭酸水を観察します。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-amber-700 ring-4 ring-amber-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-amber-800 tracking-wider">1日目 15:30</span>
                <h3 className="text-base font-bold text-stone-900">宿へチェックイン・濃厚な「金泉」露天風呂で温まる</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  老舗宿へチェックイン。早速大浴場へ向かい、赤茶色の「金泉」に身を沈めます。海水の約2倍の塩分が全身を包み込み、初冬の冷気の中でも身体の芯から汗ばむほどの温もりを実感。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-amber-700 ring-4 ring-amber-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-amber-800 tracking-wider">1日目 17:00</span>
                <h3 className="text-base font-bold text-stone-900">六甲有馬ロープウェーで山頂へ・1000万ドルの冬夜景鑑賞</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  有馬温泉駅からロープウェーで六甲山頂へ。冬の澄み渡る夜空の下、眼下に広がる神戸市街から大阪平野、大阪湾へと連なる宝石箱をひっくり返したような奇跡の夜景を観賞します。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-amber-700 ring-4 ring-amber-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-amber-800 tracking-wider">1日目 19:00</span>
                <h3 className="text-base font-bold text-stone-900">夕食・最高峰A5ランク神戸牛すき焼きの極上会席</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  個室または食事処で夕食。きめ細やかなサシがとろける最高ランク神戸牛を、甘辛い特製割り下と有馬山椒の香るすき焼きで堪能。明石の冬の魚介とともに兵庫の美酒で乾杯。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-amber-700 ring-4 ring-amber-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-amber-800 tracking-wider">2日目 08:00</span>
                <h3 className="text-base font-bold text-stone-900">朝の「銀泉」で肌を引き締める＆丹波黒豆の健康朝食</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  朝風呂は透明な「銀泉」で肌をキュッと引き締め。朝食には炊きたてご飯と丹波黒豆の納豆、焼き魚、有馬豆腐の湯豆腐など、身体に優しい滋味豊かな和朝食をいただきます。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-amber-700 ring-4 ring-amber-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-amber-800 tracking-wider">2日目 10:30</span>
                <h3 className="text-base font-bold text-stone-900">瑞宝寺公園散策とお土産ショッピング</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  チェックアウト後、秀吉ゆかりの瑞宝寺公園を散策。温泉街でお土産に有馬山椒の佃煮や有馬麦酒を購入し、心地よい温もりを胸に帰路へ。
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
                有馬温泉の初冬旅行 よくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>有馬温泉の「金泉」と「銀泉」の泉質や効能の違いは何ですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                有馬温泉には世界的に珍しい2つの特異な源泉があります。『金泉（きんせん）』は含鉄ナトリウム塩化物強塩高温泉で、湧出時は無色透明ですが空気に触れて鉄分が酸化し濃い赤茶色に変化します。海水の1.5〜2倍という極めて高い塩分を含み、皮膚に付着した塩分が放熱を防ぐため、抜群の保温・保湿効果があり冬の冷え性に最適です。一方、『銀泉（ぎんせん）』は無色透明の炭酸水素塩泉および放射能泉（ラドン泉）で、毛細血管を拡張させて血流を促し、高血圧や関節痛の改善、美肌効果が期待できます。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>有馬温泉の11月・12月の気候と六甲山からの夜景の見え方は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                有馬温泉は六甲山の北麓（標高約350〜400m）に位置するため、神戸市街地や大阪市内よりも気温が3〜5度低くなります。11月は朝晩の冷え込みが強く（5度前後）、12月に入ると朝晩は氷点下に近付きます。冬の六甲山頂（ロープウェーでアクセス可能）は空気が極限まで澄み渡るため、大阪湾から神戸港、紀伊半島まで見渡す『1000万ドルの冬夜景』が一年で最も鮮やかで美しく輝きます。厚手のダウンコートや手袋・マフラーを必ず着用してください。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>大阪や神戸・京都からのアクセス方法と所要時間は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                大阪駅（梅田・阪急三番街）からは直行の高速バス（阪急バス・西日本JRバス）で乗り換えなし約55分。神戸三宮駅からは直行バスで約30分、または神戸市営地下鉄・神戸電鉄を乗り継いで約35分です。京都駅八条口からも直行高速バスで約75分と、関西主要都市からのアクセスは極めて快適です。お車の場合は阪神高速7号北神戸線『有馬口IC』から約5分です。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>有馬温泉で味わうべき最高峰グルメは何ですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                何と言っても世界に名だたる兵庫の誇り『神戸牛（但馬牛）』です。きめ細やかなサシが入った最高ランクの神戸牛をすき焼き、しゃぶしゃぶ、陶板ステーキで味わう会席は格別です。また、ピリリとした清涼感が特徴の伝統の『有馬山椒』を使った料理や、炭酸泉の恵みから生まれたパリッと香ばしい『炭酸煎餅』、手作りの『有馬麦酒（地ビール）』もお土産・食べ歩きの定番です。
              </p>
            </div>
          </div>
        </section>

        {/* Internal Link Mesh */}
        <section className="bg-stone-100 rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-amber-800 uppercase tracking-widest block">EXPLORE MORE WINTER DESTINATIONS</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              あわせて読みたい！11月・12月の冬特集＆関西・近畿名湯ガイド
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link 
              href="/winter-hyogo-kinosaki-onsen-matsuba-crab-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-amber-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-amber-800 uppercase block mb-1">兵庫の冬の王様</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-amber-800 transition line-clamp-2">
                【城崎温泉】冬の松葉ガニ解禁と七田外湯めぐり・浴衣そぞろ歩き宿
              </h3>
            </Link>

            <Link 
              href="/winter-kyoto-arashiyama-onsen-yudofu-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-amber-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-amber-800 uppercase block mb-1">京都の冬情緒</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-amber-800 transition line-clamp-2">
                【京都嵐山】渡月橋の初冬絶景と名物湯豆腐会席・静寂の名旅館
              </h3>
            </Link>

            <Link 
              href="/winter-ehime-dogo-onsen-taimeshi-heritage-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-amber-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-amber-800 uppercase block mb-1">日本三古湯の名湯</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-amber-800 transition line-clamp-2">
                【道後温泉】保存修理完了の本館と真鯛鯛めし・伊予牛会席の宿
              </h3>
            </Link>

            <Link 
              href="/winter-iseshima-ujibashi-sunrise-matoya-oyster-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-amber-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-amber-800 uppercase block mb-1">近畿・伊勢志摩</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-amber-800 transition line-clamp-2">
                【伊勢志摩】宇治橋の冬至日の出と的矢かき・伊勢海老会席の宿
              </h3>
            </Link>

            <Link 
              href="/winter-kue-gourmet-luxury-fish-onsen-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-amber-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-amber-800 uppercase block mb-1">紀州の幻の魚</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-amber-800 transition line-clamp-2">
                【天然クエ料理】冬の白浜・南紀で味わう幻の高級魚クエ鍋と名湯露天
              </h3>
            </Link>

            <Link 
              href="/winter-gifu-gero-onsen-fireworks-hida-beef-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-amber-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-amber-800 uppercase block mb-1">日本三名泉</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-amber-800 transition line-clamp-2">
                【下呂温泉】冬花火ミュージカルと日本三名泉美肌湯・飛騨牛会席
              </h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-hyogo-arima-onsen-kinsen-kobe-beef-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
