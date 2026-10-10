import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Sunrise, Waves, Sun, Flame, Landmark, Building, Trees, ShoppingBag, ThermometerSun
} from 'lucide-react';

export const metadata: Metadata = {
  title: '11・12・1月長野：星野エリアもみの木イルミネーション！名宿5選',
  description: '11月から1月、浅間山の南麓に位置する避暑地・軽井沢は、観光の喧騒が去り、澄み切った青空と白銀の静寂に包まれる最も美しい季節を迎えます。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '軽井沢 冬 旅行, 星野エリア イルミネーション, 星野温泉 トンボの湯, 軽井沢高原教会 キャンドルナイト, ハルニレテラス 冬, 軽井沢プリンスホテル イースト, ホテルインディゴ軽井沢, ルシアン旧軽井沢, 軽井沢プリンスホテル ウエスト, 旧軽井沢ホテル音羽ノ森, 信州プレミアム牛 薪火, 11月 12月 1月 長野旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-nagano-karuizawa-hoshino-illumination-tonbonoyu-shinshugyu-stay/"
  },
  openGraph: {
    title: '11・12・1月長野：星野エリアもみの木イルミネーション！名宿5選',
    description: '11月から1月、浅間山の南麓に位置する避暑地・軽井沢は、観光の喧騒が去り、澄み切った青空と白銀の静寂に包まれる最も美しい季節を迎えます。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-nagano-karuizawa-hoshino-illumination-tonbonoyu-shinshugyu-stay',
    siteName: 'クラドトラベル',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: '冬の軽井沢の森と星野エリアのイルミネーション'
      }
    ],
    locale: 'ja_JP',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: "11・12・1月長野：冬の軽井沢高原リゾート・星野エリアもみの木イルミネーション＆星野温泉トンボの湯雪見風呂・信州プレミアム牛薪火ディナーを満喫する極上高原名宿5選",
    description: "11月から1月、浅間山の南麓に位置する避暑地・軽井沢は、観光の喧騒が去り、澄み切った青空と白銀の静寂に包まれる最も美しい季節を迎えます。星野エリアに輝く高さ10mの天然もみの木イルミネーション、湯煙漂う美肌の湯「星野温泉 トンボの湯」の雪見露天風呂、せせらぎ沿いに薪ストーブが灯るハルニレテラス、そして冬の寒気の中で味わう信州プレミアム牛の薪火グリルや本格フレンチ。冬の軽井沢の洗練されたリゾートステイを叶える厳選名宿5選と1泊2日の冬のモデルコースを徹底解説します。",
    images: ['https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function NaganoKaruizawaHoshinoWinterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "11・12・1月長野：冬の軽井沢高原リゾート・星野エリアもみの木イルミネーション＆星野温泉トンボの湯雪見風呂・信州プレミアム牛薪火ディナーを満喫する極上高原名宿5選",
    description: "11月から1月、浅間山の南麓に位置する避暑地・軽井沢は、観光の喧騒が去り、澄み切った青空と白銀の静寂に包まれる最も美しい季節を迎えます。星野エリアに輝く高さ10mの天然もみの木イルミネーション、湯煙漂う美肌の湯「星野温泉 トンボの湯」の雪見露天風呂、せせらぎ沿いに薪ストーブが灯るハルニレテラス、そして冬の寒気の中で味わう信州プレミアム牛の薪火グリルや本格フレンチ。冬の軽井沢の洗練されたリゾートステイを叶える厳選名宿5選と1泊2日の冬のモデルコースを徹底解説します。",
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
    datePublished: '',
    dateModified: '',
    author: {
      '@type': 'Organization',
      name: 'クラドトラベル編集部',
      url: 'https://croud-travel.pages.dev'
    },
    publisher: {
      '@type': 'Organization',
      name: 'クラドトラベル',
      logo: {
        '@type': 'ImageObject',
        url: 'https://croud-travel.pages.dev/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://croud-travel.pages.dev/winter-nagano-karuizawa-hoshino-illumination-tonbonoyu-shinshugyu-stay'
    }
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ホーム',
        item: 'https://croud-travel.pages.dev'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '冬の特集一覧',
        item: 'https://croud-travel.pages.dev/features'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: '冬の軽井沢星野イルミネーション＆温泉特集',
        item: 'https://croud-travel.pages.dev/winter-nagano-karuizawa-hoshino-illumination-tonbonoyu-shinshugyu-stay'
      }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "冬（11月・12月・1月）の軽井沢の気温・気候と降雪・路面凍結の状況は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "軽井沢は標高約1,000メートルの高原に位置するため、冬の寒さは非常に厳しく、11月下旬から氷点下の冬日が増えます。12月から1月にかけては最高気温が0度〜4度程度、最低気温は氷点下10度前後にまで冷え込みます。降雪量は日本海側に比べると多くありませんが、降った雪が完全に凍結する「アイスバーン」が発生しやすいため、車で訪れる場合は必ずスタッドレスタイヤの装着が必要です。徒歩での観光時も、靴底に滑り止めの溝がある防寒ブーツを選びましょう。"
        }
      },
      {
        '@type': 'Question',
        name: "「星野エリア」の天然もみの木イルミネーションと「ハルニレテラス」の冬の営業時間は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "星野エリアでは、毎年11月中旬から1月にかけて「ケラ池スケートリンク」のオープンや「もみの木広場」の巨大天然もみの木イルミネーションが点灯します。高さ10メートルを超える本物のもみの木に温かな光が灯り、夕暮れ時から22時頃までロマンチックな雪景色を楽しめます。湯川の清流沿いに建つ「ハルニレテラス」では、各レストランやカフェに薪ストーブやテラスヒーターが設置され、熱々のホットチョコレートや信州そば、本格イタリアンが味わえます。店舗により営業時間は異なりますが、通常10:00〜21:00頃まで営業しています。"
        }
      },
      {
        '@type': 'Question',
        name: "美肌の湯「星野温泉 トンボの湯」の泉質・冬の雪見露天風呂の魅力は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "星野温泉 トンボの湯は、大正4年に開湯した歴史ある名湯で、北原白秋や与謝野晶子など多くの文豪にも愛されてきました。泉質はナトリウム-炭酸水素塩・塩化物泉（弱アルカリ性低張性高温泉）で、軟らかく肌に吸い付くような「美肌の湯」として知られます。冬は周囲の森が白銀に染まり、立ちのぼる白い湯煙と浅間山麓の冷気の中で入る雪見露天風呂が最大の醍醐味です。湯上がりには開放的なラウンジで信州クラフトビールや地サイダーを楽しむことができます。"
        }
      },
      {
        '@type': 'Question',
        name: "軽井沢高原教会の「クリスマスキャンドルナイト」の開催時期と予約方法は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "大正時代から続く歴史を持つ軽井沢高原教会では、毎年11月下旬から12月25日にかけて「星降る森のクリスマス（クリスマスキャンドルナイト）。」が開催されます。教会前の森一面に無数のランタンキャンドルが灯され、満天の星空とともに幻想的な光の森が出現します。大変な人気イベントのため、混雑防止と環境保全の観点から事前抽選予約制が導入されています。公式サイトで秋頃から予約受付が開始されるため、冬の軽井沢旅行を計画する際は早めの予約確認をおすすめします。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の軽井沢旅行に最適な服装・持ち物と新幹線アクセスの利便性は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "氷点下の冷気が肌を刺す冬の軽井沢では、都市部よりもワンランク上の完全防寒が必要です。防風性のあるロングダウンコート、発熱インナー、厚手のセーター、マフラー、ニット帽、裏起毛の手袋、耳あて、カイロを準備してください。アクセス面では、東京駅から北陸新幹線（あさま・はくたか）で約1時間と圧倒的な早さ。新幹線を利用すれば雪道運転の心配がなく、軽井沢駅からはホテルやスキー場への無料シャトルバス、星野エリア行きの路線バスが発着しているため、車がなくても快適に冬のリゾート観光を満喫できます。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "軽井沢プリンスホテル　イースト",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/181343/181343.jpg",
              rating: 4.41,
              reviews: 219,
              price: "¥18,500〜",
              access: "軽井沢駅南口より8：00～21：00時の間、約30分間隔にて無料シャトルバスを随時運行☆",
              special: "「森の中、物語を見つけに。」温泉、スポーツ、ショッピングなど自由な滞在を楽しむ高原リゾート",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F181343%2F181343.html",
              story: "軽井沢駅南口の広大な敷地に広がる「軽井沢プリンスホテル イースト」。軽井沢プリンスホテルスキー場が目の前に広がり、冬の白銀のアクティビティと温泉リゾートを同時に楽しめる最高峰のロケーションです。館内には宿泊者専用の天然温泉「森のホットスプリング＆スパ」を完備。浅間山麓から湧き出るやわらかな湯に浸かりながら、雪化粧したから松の森を眺める湯浴みは格別の癒しです。客室は木の温もりを基調とした洗練された北欧風デザイン。夕食は信州の豊かな大地が育んだ信州プレミアム牛肉や冬の根菜を薪火で豪快かつ繊細に焼き上げるグリル料理が振る舞われ、上質な大人の冬旅を華やかに彩ります。",
              roomTip: "フォレストツインルーム。大きなピクチャーウィンドウから雪化粧した軽井沢の針葉樹の森を一望でき、静かなプライベート時間を過ごせます。",
              gourmetTip: "「信州プレミアム牛の薪火グリルコース」。薪の香ばしい燻香をまとった極上信州牛のサーロインと地元ワイナリーの赤ワインが絶品です。",
              highlights: [
                "スキー場＆森の温泉スパ直結・雪見露天風呂と北欧調の温もりあふれる上質リゾート",
                "夕食に信州プレミアム牛肉の薪火グリル・地元ワイナリー厳選ワインとの至高のマリアージュ",
                "軽井沢駅南口からのアクセス抜群・冬のスキー＆スノーボード旅行の最高峰の拠点"
              ]
            },
            {
              id: 2,
              name: "ホテルインディゴ軽井沢　ｂｙ　ＩＨＧ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/183829/183829.jpg",
              rating: 4.47,
              reviews: 348,
              price: "¥17,534〜",
              access: "JR北陸新幹線・しなの鉄道線「軽井沢」駅下車。南口よりタクシーもしくはホテルシャトルバスで約5分",
              special: "ぬくもりある別荘に着想を得た、隠れ家のような空間「ホテルインディゴ軽井沢」",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183829%2F183829.html",
              story: "軽井沢の別荘文化と英国の趣を融合させたデザインホテル「ホテルインディゴ軽井沢 by IHG」。浅間山の雄大な稜線を背景に、穏やかな小川が流れる敷地内にヴィラのように棟が点在します。館内には炭酸泉やサウナを備えたスタイリッシュな大浴場スパがあり、冬の冷えた体を心地よく温めてくれます。メインダイニング「KAGARIBI」では、中央に配された本格薪火オーブンで焼き上げる信州産食材のイタリアンを提供。ジューシーな信州牛や薪でローストした地元契約農家の冬野菜など、五感を刺激する美食体験が待っています。焚き火ラウンジで揺らめく炎を眺めながら過ごす冬の夜はロマンチックそのものです。",
              roomTip: "リバービューキングルーム。小川のせせらぎと雪景色を望むプライベートバルコニーを備え、クラフトマンシップが息づくアートなインテリアが魅力。",
              gourmetTip: "「KAGARIBI 薪火イタリアンディナー。」。薪火でじっくり火入れした信州産黒毛和牛と、長野県産小麦の手打ちパスタの豊かな風味が楽しめます。",
              highlights: [
                "浅間山を望む小川沿いのヴィラ様式・中央の薪火オーブンで焼き上げる本格イタリアン",
                "炭酸泉とドライサウナ完備の大浴場スパ・焚き火ラウンジで過ごす幻想的な冬の夜",
                "全室プライベートバルコニー付・洗練されたアート空間で過ごす特別な記念日ステイ"
              ]
            },
            {
              id: 3,
              name: "ルシアン旧軽井沢（共立リゾート）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/164648/164648.jpg",
              rating: 4.66,
              reviews: 807,
              price: "¥19,140〜",
              access: "車/上信越自動車道「碓氷軽井沢IC」より20分　電車/しなの鉄道線または北陸新幹線のJR軽井沢駅下車徒歩15分",
              special: "閑静な旧軽井沢の南仏薫るホテルで心地よい休日を愛犬と一緒にお過ごし下さい。ワンちゃん2頭目まで無料。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F164648%2F164648.html",
              story: "旧軽井沢銀座通りへも徒歩圏内、閑静な別荘地の木立に抱かれたヨーロピアンリゾート「ルシアン旧軽井沢」。フランス語で「犬」を意味する館名通り、愛犬家からも絶大な支持を集めるとともに、上質な大人の隠れ家としても名高いホテルです。館内には天然温泉の露天風呂付き大浴場に加え、趣の異なる2つの無料貸切風呂を備え、カップルやご夫婦で気兼ねなく雪見の湯浴みを楽しめます。夕食は南仏プロヴァンス地方の伝統を受け継ぐ洗練されたフレンチフルコース。信州サーモンや信州牛、冬のジビエを取り入れた繊細なひと皿が、冬の旧軽井沢の静寂な夜をエレガントに演出します。",
              roomTip: "前庭付きデラックスツイン。落ち着きのあるフレンチシックな調度品とゆったりしたリビングスペースで、冬の軽井沢の別荘気分を味わえます。",
              gourmetTip: "「フレンチフルコースディナー」。信州の冬野菜をあしらった前菜から、柔らかく煮込んだ信州牛フィレ肉のローストまで優雅な美食が揃います。",
              highlights: [
                "旧軽井沢の静寂な別荘地・天然温泉露天風呂と2つの無料貸切風呂でプライベート湯浴み",
                "南仏の伝統が香るエレガントなフレンチフルコース・信州サーモンや冬のジビエ",
                "丁寧で行き届いたホスピタリティ・愛犬同伴対応フロア完備で愛犬家にも大人気"
              ]
            },
            {
              id: 4,
              name: "軽井沢プリンスホテル　ウエスト",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/29249/29249.jpg",
              rating: 4.35,
              reviews: 2978,
              price: "¥7,329〜",
              access: "軽井沢駅南口より8：00～21：00時の間、約30分間隔にて無料シャトルバスを随時運行。",
              special: "四季を通じ多彩なスタイルで親子三代が楽しめる一大リゾートエリア",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29249%2F29249.html",
              story: "雄大な浅間山を望む森の中に位置し、2021年に温泉棟「MOMIJI HOT-SPRING」が誕生した「軽井沢プリンスホテル ウエスト」。大きなガラス窓の向こうにもみじ山と雪景色が広がる露天風呂は、四季の移ろいを肌で感じる極上の癒し空間です。広々とした客室棟のほか、森の中に点在する独立型コテージも充実しており、ファミリーやグループ旅行にも最適。館内の「All Day Dining Karuizawa Grill。」では、信州豚や信州サーモン、信州牛を鉄板やオーブンで焼き上げる多彩なグリルメニューが楽しめます。軽井沢・プリンスショッピングプラザへのアクセスも至便で、冬のショッピングとリゾートを両立できます。",
              roomTip: "ウエスト本館デラックステラスツイン。開放的なテラスから冬の澄んだ森を望み、天然温泉棟へのアクセスも良好な快適ルームです。",
              gourmetTip: "「信州恵みのディナーブッフェ」。ローストビーフのカッティングサービスや信州そば、地元野菜の温製料理などバラエティ豊かな美味が並びます。",
              highlights: [
                "温泉棟MOMIJI HOT-SPRING完備・もみじ山の雪景色を望む開放的な露天風呂",
                "軽井沢プリンスショッピングプラザ至近・冬のバーゲンとスキー＆温泉三昧",
                "森に佇むコテージも充実・ファミリーやグループで気兼ねなく過ごせる冬の高原ステイ"
              ]
            },
            {
              id: 5,
              name: "旧軽井沢　ホテル音羽ノ森",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/50619/50619.jpg",
              rating: 4.62,
              reviews: 395,
              price: "¥11,781〜",
              access: "鉄道：軽井沢駅北口タクシー約3分、徒歩約１２分。車：東京方面、碓氷軽井沢ＩＣ約２０分。長野・愛知方面、小諸ＩＣ約３０分",
              special: "軽井沢駅・旧軽井沢銀座まで徒歩約13分。自然豊かな旧軽井沢の景観と伝統を兼ね備えた隠れ家ホテル。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F50619%2F50619.html",
              story: "旧軽井沢の三笠通り沿い、木漏れ日と静けさに包まれる英国調のクラシックホテル「旧軽井沢 ホテル音羽ノ森」。国の重要文化財である旧三笠ホテルの優美な建築様式をモチーフに建てられ、クラシカルな重厚感と温かいホスピタリティが創業以来愛され続けています。館内には落ち着いたバーや暖炉の温もりが心地よいラウンジがあり、冬の静かな軽井沢で読書やお酒を楽しむ贅沢な時間を約束。レストラン「桂姫」では、フランスで研鑽を積んだシェフによる本格フレンチが提供され、軽井沢の冬の風土に寄り添うクラシックで深みのある料理を堪能できます。",
              roomTip: "ロイヤルスイートルームまたはクラシックツイン。アンティーク調の家具と高い天井、エレガントなファブリックが非日常の寛ぎを演出します。",
              gourmetTip: "「レストラン桂姫・クラシックフレンチ」。代々受け継がれるコンソメスープや、信州牛の赤ワイン煮込みなど、冬の夜に温まる正統派フレンチ。",
              highlights: [
                "重要文化財旧三笠ホテルの美学を継ぐ英国調洋館・暖炉と名門フレンチ「桂姫」の滋味",
                "旧軽井沢銀座通りまで徒歩圏内・歴史ある教会や木立に囲まれた静寂の大人の隠れ家",
                "伝統のコンソメスープや信州牛の赤ワイン煮込みなど心温まるクラシックフレンチ"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "冬（11月・12月・1月）の軽井沢の気温・気候と降雪・路面凍結の状況は？",
    "a": "軽井沢は標高約1,000メートルの高原に位置するため、冬の寒さは非常に厳しく、11月下旬から氷点下の冬日が増えます。12月から1月にかけては最高気温が0度〜4度程度、最低気温は氷点下10度前後にまで冷え込みます。降雪量は日本海側に比べると多くありませんが、降った雪が完全に凍結する「アイスバーン」が発生しやすいため、車で訪れる場合は必ずスタッドレスタイヤの装着が必要です。徒歩での観光時も、靴底に滑り止めの溝がある防寒ブーツを選びましょう。"
  },
  {
    "q": "「星野エリア」の天然もみの木イルミネーションと「ハルニレテラス」の冬の営業時間は？",
    "a": "星野エリアでは、毎年11月中旬から1月にかけて「ケラ池スケートリンク」のオープンや「もみの木広場」の巨大天然もみの木イルミネーションが点灯します。高さ10メートルを超える本物のもみの木に温かな光が灯り、夕暮れ時から22時頃までロマンチックな雪景色を楽しめます。湯川の清流沿いに建つ「ハルニレテラス」では、各レストランやカフェに薪ストーブやテラスヒーターが設置され、熱々のホットチョコレートや信州そば、本格イタリアンが味わえます。店舗により営業時間は異なりますが、通常10:00〜21:00頃まで営業しています。"
  },
  {
    "q": "美肌の湯「星野温泉 トンボの湯」の泉質・冬の雪見露天風呂の魅力は？",
    "a": "星野温泉 トンボの湯は、大正4年に開湯した歴史ある名湯で、北原白秋や与謝野晶子など多くの文豪にも愛されてきました。泉質はナトリウム-炭酸水素塩・塩化物泉（弱アルカリ性低張性高温泉）で、軟らかく肌に吸い付くような「美肌の湯」として知られます。冬は周囲の森が白銀に染まり、立ちのぼる白い湯煙と浅間山麓の冷気の中で入る雪見露天風呂が最大の醍醐味です。湯上がりには開放的なラウンジで信州クラフトビールや地サイダーを楽しむことができます。"
  },
  {
    "q": "軽井沢高原教会の「クリスマスキャンドルナイト」の開催時期と予約方法は？",
    "a": "大正時代から続く歴史を持つ軽井沢高原教会では、毎年11月下旬から12月25日にかけて「星降る森のクリスマス（クリスマスキャンドルナイト）。」が開催されます。教会前の森一面に無数のランタンキャンドルが灯され、満天の星空とともに幻想的な光の森が出現します。大変な人気イベントのため、混雑防止と環境保全の観点から事前抽選予約制が導入されています。公式サイトで秋頃から予約受付が開始されるため、冬の軽井沢旅行を計画する際は早めの予約確認をおすすめします。"
  },
  {
    "q": "冬の軽井沢旅行に最適な服装・持ち物と新幹線アクセスの利便性は？",
    "a": "氷点下の冷気が肌を刺す冬の軽井沢では、都市部よりもワンランク上の完全防寒が必要です。防風性のあるロングダウンコート、発熱インナー、厚手のセーター、マフラー、ニット帽、裏起毛の手袋、耳あて、カイロを準備してください。アクセス面では、東京駅から北陸新幹線（あさま・はくたか）で約1時間と圧倒的な早さ。新幹線を利用すれば雪道運転の心配がなく、軽井沢駅からはホテルやスキー場への無料シャトルバス、星野エリア行きの路線バスが発着しているため、車がなくても快適に冬のリゾート観光を満喫できます。"
  }
];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-teal-100 selection:text-teal-900 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero Header */}
      <header className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 opacity-35 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1800&q=80" 
            alt="冬の軽井沢の森と星野エリアのイルミネーション" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-teal-900/80 backdrop-blur-md text-teal-100 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-teal-400/30">
            <Trees className="w-4 h-4 text-teal-300" />
            11月・12月・1月 冬の長野・軽井沢星野リゾート＆温泉特集
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">「11・12・1月長野」冬の軽井沢高原リゾート・星野エリアもみの木イルミネーション＆星野温泉トンボの湯雪見風呂・信州プレミアム牛薪火ディナーを満喫する極上高原名宿5選</h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            浅間山麓の澄んだ冷気の中で輝く星野エリアの巨大な天然もみの木イルミネーション、森一面にキャンドルが灯る軽井沢高原教会、湯煙が立ちのぼる星野温泉トンボの湯の雪見露天風呂。薪ストーブの暖炉が揺れるハルニレテラスの散策と、薪火で香ばしく焼き上げる極上の信州プレミアム牛肉。静寂と洗練が支配する冬の軽井沢で、極上の大人の休日を約束する名宿をご案内します。
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-teal-400" /> 最適時期：11月中旬〜1月下旬（キャンドルナイト・天然もみの木イルミ）</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-teal-400" /> エリア：長野県軽井沢町（星野エリア・中軽井沢・旧軽井沢・南軽井沢）</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-teal-400" /> 名物：信州プレミアム牛薪火料理・ハルニレテラスグルメ・信州ワイン</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Introduction</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              喧騒が去った冬こそが軽井沢の真骨頂。凛とした大気と灯火が織りなす白銀の森へ
            </h2>
          </div>
          
          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p>
              明治時代にカナダ出身の宣教師A.C.ショーによって「屋根のない病院」と称賛され、西洋式の避暑地として発展を遂げた軽井沢。夏の華やかな賑わいも魅力ですが、この高原の真の魅力に魅せられた旅人や別荘族が口を揃えて愛するのが、11月から1月にかけての冬の季節です。落葉した針葉樹の森にはどこまでも澄み渡る「浅間ブルー」の青空が広がり、標高1,000メートルの張り詰めた冷気が頬を撫でます。観光地の喧騒が潮が引くように去り、訪れる者に静寂と上質な休息をもたらしてくれます。
            </p>
            <p>
              冬の軽井沢を象徴するスポットが、中軽井沢の森に広がる「星野エリア」です。もみの木広場には、高さ10メートルを超える本物のモミの木が温かなイルミネーションで彩られ、夕暮れの白銀の森に浮かび上がります。すぐ隣の湯川沿いには、9棟のモダンな木造テラスが連なる「ハルニレテラス」が佇み、薪ストーブの芳ばしい煙と柔らかなランプの明かりが旅人を優しく出迎えます。テラスヒーターの効いたベンチで温かいスパイスココアを味わいながら川のせせらぎに耳を澄ませる時間は、冬ならではの贅沢です。
            </p>
            <p>
              冷えた体を包み込んでくれるのが、大正4年の開湯以来、北原白秋や島崎藤村ら多くの文豪に愛されてきた「星野温泉 トンボの湯」です。毎分400リットル湧き出る源泉は、とろみのある弱アルカリ性の美肌の湯。湯煙がもうもうと立ち込める広大な雪見露天風呂に肩まで浸かると、頭上には浅間山麓の澄んだ夜空に瞬く満天の星が広がり、冷たい外気と熱い温泉のコントラストが全身を極上のととのいへと誘います。
            </p>
            <p>
              そしてディナータイムには、冬の軽井沢が誇る薪火料理と信州牛の極上のマリアージュが待っています。長野県が誇るトップブランド「信州プレミアム牛肉」は、オレイン酸を豊富に含み、薪の芳醇な薫煙をまといながら表面は香ばしく中はしっとりとロゼ色に焼き上げられます。地元小諸や塩尻の冷涼な気候が育んだメルローやシャルドネを傾けながら、暖炉の炎を見つめて語らう夜。冬の軽井沢には、大人の感性を深く満たす洗練された時間が流れています。
            </p>
          </div>
        </section>

        {/* 3 Key Highlights Section */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block">Highlights</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の軽井沢で体験すべき3つの白銀ハイライト
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              11月〜1月の軽井沢だからこそ出逢える、光と温泉と極上薪火グルメ。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-teal-700 font-bold">
                <Trees className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                1. 星野エリアの天然もみの木イルミネーション
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                自生する高さ10mの巨大モミの木が優しい黄金色の灯りに包まれる星野エリアの冬の風物詩。ケラ池スケートリンクでの氷上散歩やハルニレテラスの薪ストーブ散策が楽しめます。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center text-sky-700 font-bold">
                <Waves className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                2. 文豪が愛した星野温泉トンボの湯「雪見露天」
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                源泉かけ流しの美肌の湯を誇るトンボの湯。白銀の森に囲まれ、湯煙越しに冬の星空を仰ぐ開放的な雪見露天風呂は、日頃のストレスや旅の疲労を芯から解き放ちます。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 font-bold">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                3. 信州プレミアム牛薪火グリルと暖炉フレンチ
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                パチパチと薪がはぜる暖炉のある名宿レストランで味わう信州牛の薪火焼き。薪の香ばしい燻香と凝縮された肉汁、そして信州産の極上ワインとのペアリングに酔いしれます。
              </p>
            </div>
          </div>
        </section>

        {/* Model Course Section */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-teal-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Course</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              【1泊2日】白銀の森と光の星野エリア・冬の軽井沢洗練リゾートモデルコース
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              東京から北陸新幹線で約1時間。車がなくても巡れる冬の軽井沢プレミアム滞在プラン。
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-teal-500/40 space-y-6">
              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-teal-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-teal-400 tracking-wider uppercase">DAY 1 午前〜午後</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  11:30 北陸新幹線で軽井沢駅へ到着 ➔ 雲場池の初冬散策＆旧軽井沢銀座でカフェタイム
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  新幹線を降り立つと広がる澄んだ高原の空気。まずは静寂に包まれた「スワンレイク」こと雲場池へ。水面に映る雪化粧の針葉樹の凛とした美しさに息をのみます。その後、旧軽井沢銀座通りを散策し、老舗ベーカリーの温かいアップルパイや名物ロイヤルミルクティーでほっと一息。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-teal-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-teal-400 tracking-wider uppercase">DAY 1 夕刻</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  15:30 憧れの高原リゾートホテルへチェックイン ➔ 星野エリア「ハルニレテラス」へ
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  厳選宿にチェックインし、暖炉の灯るロビーでウェルカムドリンク。夕暮れに合わせてシャトルバス等で星野エリアへ移動。小川のせせらぎ沿いに薪ストーブが灯るハルニレテラスのショップを巡り、北欧雑貨や地元作家のクラフトをセレクト。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-teal-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-teal-400 tracking-wider uppercase">DAY 1 夜</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  17:30 天然もみの木イルミネーション観賞 ➔ トンボの湯雪見風呂＆薪火ディナー
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  暗闇の中に浮かび上がる高さ10mの天然もみの木の温かな輝きを観賞。「星野温泉 トンボの湯」の雪見露天風呂で冷えた体を芯から解きほぐします。ホテルに戻り、暖炉の炎が揺れるダイニングで信州プレミアム牛肉の薪火グリルディナーと信州ワインを堪能。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-teal-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-teal-400 tracking-wider uppercase">DAY 2 朝</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  08:00 白銀の森を望むモーニングビュッフェ ➔ 雪景色の散策路で森林浴
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  ピクチャーウィンドウから雪景色を眺めながら、信州の高原野菜や焼きたてパン、搾りたて信州牛乳を味わう優雅な朝食。朝の澄み切った大気の中、ホテル敷地内の森の散策路を歩き、冬の光を浴びてキラキラと輝く樹氷を楽しみます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-teal-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-teal-400 tracking-wider uppercase">DAY 2 午前〜午後</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  10:30 軽井沢・プリンスショッピングプラザ ➔ 冬のバーゲン＆信州グルメお買い物
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  軽井沢駅南口に広がる日本最大級のリゾート型アウトレットへ。広大な芝生広場と池を望む開放的なロケーションで、冬のセールを楽しみながら、信州そばや地元産ジャム、チーズなどのお土産を買い集め、午後の新幹線でゆったりと東京へ戻ります。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の軽井沢ステイを格上げする厳選高原名宿5選
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-1">
              森の温泉スパ完備の大型リゾートから、薪火料理が自慢のブティックホテル、クラシックな英国調洋館まで。
            </p>
          </div>

          <div className="space-y-10">
            {hotelsData.map((h) => (
              <div key={h.id} className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-auto min-h-[260px]">
                    <img 
                      src={h.img} 
                      alt={h.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">
                      厳選第 {h.id} 位
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200/60">
                          {h.access}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-stone-600">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="font-bold text-stone-900 text-sm">{h.rating}</span>
                          <span>({h.reviews}件のクチコミ)</span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                        {h.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-500 font-medium">
                        {h.special}
                      </p>

                      <p className="text-sm text-stone-700 leading-relaxed pt-2">
                        {h.story}
                      </p>
                    </div>

                    <div className="space-y-3 bg-stone-50 rounded-2xl p-4 border border-stone-200/70 text-xs sm:text-sm text-stone-700">
                      <div className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-teal-600" />
                        この宿の注目ポイント
                      </div>
                      <ul className="space-y-1.5 list-disc list-inside text-stone-600">
                        {h.highlights.map((hl: string, idx: number) => (
                          <li key={idx} className="leading-relaxed">{hl}</li>
                        ))}
                      </ul>
                      <div className="pt-2 border-t border-stone-200/60 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="font-bold text-stone-900">客室の提案：</span>
                          <span className="text-stone-600">{h.roomTip}</span>
                        </div>
                        <div>
                          <span className="font-bold text-stone-900">料理の提案：</span>
                          <span className="text-stone-600">{h.gourmetTip}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-stone-100">
                      <div>
                        <span className="text-xs text-stone-500 block">参考宿泊料金（1名あたり）</span>
                        <span className="text-xl sm:text-2xl font-black text-teal-900">{h.price}</span>
                      </div>

                      <a 
                        href={h.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-700 to-slate-900 hover:from-teal-800 hover:to-slate-950 text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all text-sm group"
                      >
                        <span>楽天トラベルで空室・プランを見る</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Local Gourmet & Culture Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Gourmet & Souvenir Guide</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の軽井沢を彩る美食カルチャーと厳選ギフト
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-700 text-sm leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-teal-700" />
                薪火料理と信州プレミアム牛肉の魅力
              </h3>
              <p>
                軽井沢の冬の食のトレンドを牽引しているのが「薪火（まきび）料理」です。ガスや炭火とは異なり、広葉樹の薪から放たれる柔らかな遠赤外線と水分を含んだ炎が、信州プレミアム牛肉の表面を均一に焼き締め、旨味を閉じ込めます。ほのかな木の香りが肉の甘みを一層引き立て、地元ワイナリーの重厚なカベルネやメルローと抜群の相性を誇ります。ハルニレテラスのベーカリーカフェ「沢村」の焼きたてカンパーニュと煮込みシチューも冬の定番です。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-teal-700" />
                冬の軽井沢お土産と信州クラフトビール
              </h3>
              <p>
                お土産には、丸山珈琲の季節限定ブレンドや、浅間山麓の新鮮なミルクを使った「アトリエ・ド・フロマージュ」の熟成チーズと焼きチーズカレーパイが大人気。また、寒冷地ならではのクリアな水で醸造される「よなよなエール」やヤッホーブルーイングの限定ビール、地元の老舗ワイナリーのワイン、完熟りんごを丸ごと閉じ込めたアップルパイなど、豊かな大地と洗練された職人技が光る逸品が揃っています。
              </p>
            </div>
          </div>
        </section>

        {/* Winter Travel Practical Tips & Access Guide */}
        <section className="bg-teal-50/60 rounded-3xl p-6 sm:p-10 border border-teal-200/60 space-y-6">
          <div className="border-b border-teal-200/80 pb-4">
            <span className="text-teal-900 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Practical Guide</span>
            <h2 className="text-xl sm:text-2xl font-bold text-teal-950">
              冬の軽井沢旅行を安全・快適に楽しむための装備とアクセス注意点
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-teal-950">
            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <ThermometerSun className="w-4 h-4 text-teal-700" />
                標高1,000mの寒さ対策
              </div>
              <p className="leading-relaxed text-stone-700">
                12月〜1月の軽井沢は日中でも氷点下に達することがあります。厚手のダウンコート、保温性の高いインナー、手袋、マフラー、耳あてを必ず用意してください。また、室内は暖房で乾燥するため、保湿クリームやリップクリームも携行しましょう。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <Compass className="w-4 h-4 text-teal-700" />
                新幹線と公共交通の利用
              </div>
              <p className="leading-relaxed text-stone-700">
                東京駅から北陸新幹線で約1時間。軽井沢駅からは星野エリアやプリンスホテルへの無料送迎シャトルバスが運行されており、雪道運転の不安なくノーストレスで移動できます。レンタカーを利用する場合はスタッドレスタイヤ必須です。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <CheckCircle2 className="w-4 h-4 text-teal-700" />
                冬期の営業時間と定休日
              </div>
              <p className="leading-relaxed text-stone-700">
                冬期の旧軽井沢エリアや一部の個人経営カフェは、水曜・木曜定休や冬期休業に入る店舗があります。訪れたいお目当てのレストランやギャラリーがある場合は、事前に冬期営業スケジュールを確認しておくのが安心です。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">FAQ</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の軽井沢観光・宿泊に関するよくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq: { q: string; a: string }, idx: number) => (
              <div key={idx} className="border border-stone-200/70 rounded-2xl p-5 hover:border-teal-300 transition-colors bg-stone-50/50">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-teal-800 text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
                    Q
                  </span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mt-3 pl-9">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Features & Internal Links Section */}
        <section className="border-t border-stone-200 pt-10 space-y-6">
          <div className="space-y-1">
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block">Explore More Winter Travels</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              あわせて読みたい信州・全国の冬特集・名湯宿ガイド
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <Link 
              href="/winter-nagano-hakuba-onsen-powder-snow-alps-shinshu-beef-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-teal-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-teal-800 font-bold text-xs block mb-1">長野・白馬温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-teal-900 transition-colors line-clamp-2">
                白馬パウダースノーと北アルプス絶景・信州プレミアム牛を堪能する極上リゾート
              </span>
            </Link>

            <Link 
              href="/winter-nagano-hirugami-onsen-starry-sky-shinshugyu-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-teal-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-teal-800 font-bold text-xs block mb-1">長野・昼神温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-teal-900 transition-colors line-clamp-2">
                日本一の星空ナイトツアーと美肌湯・信州牛すき焼きを味わう南信州の名湯宿
              </span>
            </Link>

            <Link 
              href="/winter-nagano-shibu-onsen-nine-sotoyu-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-teal-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-teal-800 font-bold text-xs block mb-1">長野・渋温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-teal-900 transition-colors line-clamp-2">
                レトロな石畳と厄除け九湯めぐり・地獄谷スノーモンキーと信州牛の湯宿
              </span>
            </Link>

            <Link 
              href="/winter-yamanashi-kiyosato-yatsugatake-starry-sky-winebeef-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-teal-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-teal-800 font-bold text-xs block mb-1">山梨・清里八ヶ岳</span>
              <span className="text-stone-900 font-bold group-hover:text-teal-900 transition-colors line-clamp-2">
                八ヶ岳ブルーと満天の星空観賞・甲州ワインビーフと高原リゾート名宿
              </span>
            </Link>

            <Link 
              href="/winter-mie-ise-jingu-hatsumode-okageyokocho-iseebi-matsusaka-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-teal-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-teal-800 font-bold text-xs block mb-1">三重・伊勢神宮</span>
              <span className="text-stone-900 font-bold group-hover:text-teal-900 transition-colors line-clamp-2">
                新春初詣とおかげ横丁・五十鈴川の朝霧と冬の伊勢海老・松阪牛会席の名宿
              </span>
            </Link>

            <Link 
              href="/features" 
              className="p-4 rounded-2xl bg-stone-100 border border-stone-200 hover:border-teal-400 transition-all group flex flex-col justify-center text-center"
            >
              <span className="text-stone-900 font-bold group-hover:text-teal-900 transition-colors">
                冬の特集記事一覧をすべて見る ➔
              </span>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-nagano-karuizawa-hoshino-illumination-tonbonoyu-shinshugyu-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
