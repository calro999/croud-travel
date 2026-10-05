import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, Flame, Landmark, Snowflake, ShieldCheck, Footprints, Coffee, Car
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月東京】六本木けやき坂イルミネーション＆麻布台ヒルズ！東京タワー冬夜景と美食に酔いしれるラグジュアリーホテル5選",
  description: "冬の東京の代名詞・六本木けやき坂を彩る約80万球のLED「SNOW & BLUE」と、正面にそびえる真紅の東京タワー。さらに東京ミッドタウンの幻想的な光の広場、注目の麻布台ヒルズの華やかなクリスマスマーケットが揃い踏みする11月・12月・1月。地上200mの天空ラウンジや客室バルコニーから大パノラマの冬夜景を独占し、世界最高峰のミシュラン美食に酔いしれる極上の都心ホテルステイ。楽天APIから最新取得した六本木・赤坂・虎ノ門・芝公園の最高峰ラグジュアリーホテル5選を徹底特集します。",
  keywords: '六本木 ホテル, けやき坂 イルミネーション, 東京タワー 夜景 ホテル, グランドハイアット東京, ザ リッツ カールトン東京, アンダーズ東京, ザ プリンス パークタワー東京, 麻布台ヒルズ クリスマス, 11月 12月 1月 東京 観光',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-tokyo-roppongi-hills-azabudai-keyakizaka-illumination-stay/"
  },
  openGraph: {
    title: "【11・12・1月東京】六本木けやき坂イルミネーション＆麻布台ヒルズ！東京タワー冬夜景と美食に酔いしれるラグジュアリーホテル5選",
    description: "冬の東京の代名詞・六本木けやき坂を彩る約80万球のLED「SNOW & BLUE」と、正面にそびえる真紅の東京タワー。さらに東京ミッドタウンの幻想的な光の広場、注目の麻布台ヒルズの華やかなクリスマスマーケットが揃い踏みする11月・12月・1月。地上200mの天空ラウンジや客室バルコニーから大パノラマの冬夜景を独占し、世界最高峰のミシュラン美食に酔いしれる極上の都心ホテルステイ。楽天APIから最新取得した六本木・赤坂・虎ノ門・芝公園の最高峰ラグジュアリーホテル5選を徹底特集します。",
    url: 'https://croud-travel.com/winter-tokyo-roppongi-hills-azabudai-keyakizaka-illumination-stay',
    siteName: '地域の宿探訪',
    locale: 'ja_JP',
    type: 'article',
    images: [{
      url: "https://img.travel.rakuten.co.jp/share/HOTEL/180552/180552.jpg",
      width: 1200,
      height: 630,
      alt: '六本木けやき坂イルミネーションと東京タワー冬夜景'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月東京】六本木けやき坂イルミネーション＆麻布台ヒルズ！東京タワー冬夜景と美食に酔いしれるラグジュアリーホテル5選",
    description: "冬の東京の代名詞・六本木けやき坂を彩る約80万球のLED「SNOW & BLUE」と、正面にそびえる真紅の東京タワー。さらに東京ミッドタウンの幻想的な光の広場、注目の麻布台ヒルズの華やかなクリスマスマーケットが揃い踏みする11月・12月・1月。地上200mの天空ラウンジや客室バルコニーから大パノラマの冬夜景を独占し、世界最高峰のミシュラン美食に酔いしれる極上の都心ホテルステイ。楽天APIから最新取得した六本木・赤坂・虎ノ門・芝公園の最高峰ラグジュアリーホテル5選を徹底特集します。",
    images: ["https://img.travel.rakuten.co.jp/share/HOTEL/180552/180552.jpg"]
  }
};

export default function TokyoRoppongiAzabudaiWinterPage() {
  const hotelsData = [
            {
              id: 1,
              name: "グランドハイアット東京",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/180552/180552.jpg",
              rating: 4.36,
              reviews: 93,
              price: "¥35,420〜",
              access: "東京メトロ日比谷線　六本木駅　１Ｃ番出口より徒歩にて約３分",
              special: "グローバルな雰囲気溢れるダイナミックな空間で、豊かな時間を創出する東京・六本木のラグジュアリーホテル",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F180552%2F180552.html",
              story: "六本木ヒルズの中心に位置し、けやき坂イルミネーションのメインストリートに直結する屈指のインターナショナルラグジュアリーホテル「グランドハイアット東京」。ホテルエントランスを一歩出れば、約400メートルにわたるけやき並木が白銀と青の光で染まる圧巻のイルミネーションが目の前に広がります。館内には200点を超える現代アートが配され、洗練された都会の美意識が漂います。全客室が広々とした間取りで、高級天然木やファブリックを用いた温かみのあるモダンデザイン。全10箇所の個性豊かなレストラン・バーを備え、オープンキッチンのステーキハウス「オーク ドア」や、江戸前寿司、鉄板焼きなど、冬の夜を格上げする至高のダイニング体験が待っています。さらに館内には広大な「Nagomi スパ アンド フィットネス」があり、御影石造りの美しいジャグジーやサウナで冬の街歩きの疲れを優雅に癒やすことができます。",
              roomTip: "クラブ キング／ツイン（シティビューまたは富士山側）。専用クラブラウンジでのアフタヌーンティーやイブニングカクテルサービスが受けられる特権ステイ。",
              gourmetTip: "「フレンチ キッチン」。朝食からディナーまで、厳選された旬の食材を使った本格ビストロ料理を提供。冬のトリュフや温かいシチュー料理は絶品。",
              highlights: [
                "六本木ヒルズ直結・けやき坂イルミネーション眼下・10箇所の多彩なレストラン＆バー",
                "全客室に天然木使用のモダンデザイン・Nagomiスパ＆フィットネス完備",
                "ステーキハウス「オークドア」・美術館や展望台TOKYO CITY VIEWへ直結"
              ]
            },
            {
              id: 2,
              name: "ザ・リッツ・カールトン東京",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/64045/64045.jpg",
              rating: 4.44,
              reviews: 114,
              price: "¥68,054〜",
              access: "地下鉄大江戸線・日比谷線「六本木駅」～直結、千代田線「乃木坂駅」～徒歩5分、南北線「六本木一丁目駅」～徒歩10分",
              special: "東京・六本木のランドマーク「東京ミッドタウン」に位置する世界屈指の高級ホテル",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F64045%2F64045.html",
              story: "東京ミッドタウンのシンボルタワー最上層（45〜53階）を占める世界最高峰ホテル「ザ・リッツ・カールトン東京」。地上約200メートルに位置する45階のメインロビーに降り立った瞬間、巨大なガラス窓の向こうに富士山や東京タワー、皇居外苑を見渡す息を呑む絶景パノラマが広がります。館内は和の伝統美と西洋の格式高い優雅さが融合した至高の空間。冬の澄み渡る夜空に煌めく都心のイルミネーションと宝石のような東京夜景を、全室52平米以上の贅沢な客室から優雅に見下ろすことができます。名門クラブラウンジでの1日5回のフードプレゼンテーションや、世界の一流セラピストによるスパトリートメントなど、記念日や自分への最高のご褒美にふさわしい至高の逗留が約束されます。足元に広がるミッドタウン芝生広場のイルミネーション鑑賞拠点としても唯一無二の存在です。",
              roomTip: "クラブ タワー ビュー キング。ベッドやバスルームの窓からライトアップされた冬の東京タワーを正面に望む、世界中から憧れを集める特等席。",
              gourmetTip: "「ザ・ロビーラウンジ」。地上200mの天空で奏でられる生演奏を背景に楽しむ季節のアフタヌーンティーや、オリジナルカクテル「ダイアモンド・イズ・フォーエバー」。",
              highlights: [
                "東京ミッドタウン最上層45〜53階・地上200mのパノラマ絶景・伝統ある至高のクラブラウンジ",
                "全室52平米以上・富士山と東京タワーを見晴らす天空の客室・至高のホスピタリティ",
                "ロビーラウンジのアフタヌーンティー・ミッドタウン芝生広場の光のアート至近"
              ]
            },
            {
              id: 3,
              name: "アンダーズ東京",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/181166/181166.jpg",
              rating: 4.00,
              reviews: 40,
              price: "¥57,769〜",
              access: "東京メトロ日比谷線 虎ノ門ヒルズ駅直結（中目黒方面）徒歩3分・東京メトロ銀座線 虎ノ門駅直結 徒歩5分",
              special: "虎ノ門ヒルズの上層階に位置する、ハイアットが手掛ける日本初のラグジュアリー ライフスタルホテル。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F181166%2F181166.html",
              story: "虎ノ門ヒルズ 森タワーの最上層（47〜52階）に位置するハイアット系列のライフスタイルラグジュアリーホテル「アンダーズ 東京」。日本の美意識である障子や行灯、漆器を現代風に昇華させたデザインが随所に光ります。客室はいずれも50平米以上のゆとりを持ち、足元から天井まで広がるフルハイトウインドウからは、大迫力の東京タワーや東京湾のウォーターフロント夜景が一望できます。最上階52階に位置する「ルーフトップ バー」は、セミオープンテラスで冬の澄んだ夜風を感じながら、東京タワーの温かな光とオリジナルミクソロジーカクテルを堪能できる都内屈指のナイトスポットです。麻布台ヒルズへも徒歩圏内という絶好のロケーションを誇ります。",
              roomTip: "タワービュー キング。客室の円形バスタブや窓辺のデイベッドから、夜空に浮かび上がる東京タワーの圧倒的な迫力を独占。",
              gourmetTip: "51階「ザ タヴァン グリル＆ラウンジ」。雪室でじっくり熟成させた国産牛のグリル料理など、日本の風土と西洋料理が融合した極上のシグネチャーディナー。",
              highlights: [
                "虎ノ門ヒルズ森タワー最上階・52階ルーフトップバー・床から天井までのフルハイトウインドウ",
                "日本の美意識を宿すモダン客室・円形バスタブから望む東京タワー夜景",
                "51階「ザ タヴァン」での雪室熟成肉グリル・麻布台ヒルズへのアクセス抜群"
              ]
            },
            {
              id: 4,
              name: "ザ・プリンス　パークタワー東京",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/67930/67930.jpg",
              rating: 4.52,
              reviews: 2935,
              price: "¥31,246〜",
              access: "都営大江戸線　赤羽橋駅より徒歩２分／三田線　芝公園駅より徒歩３分／ＪＲ・モノレール　浜松町駅より徒歩１２分",
              special: "記念日にはタワー側確約のプランで絶景を愉しむ滞在を",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67930%2F67930.html",
              story: "広大な芝公園の緑に囲まれ、東京タワーのすぐ足元にそびえ立つプレミアムホテル「ザ・プリンス パークタワー東京」。都心にいながら喧騒から隔絶された静寂に包まれ、バルコニー付き客室からは遮るもののない大迫力の東京タワーが目前に迫ります。館内地下2階には都心ホテルでは極めて貴重な天然温泉が湧出するスパ＆フィットネスを完備。冬の街歩きで冷えた体を、本格的な天然温泉とサウナでじっくり温めることができます。最上階33階の「スカイラウンジ ステラガーデン」では、目前に輝く東京タワーの光をグラスに映しながら、ジャズの音色とともにロマンチックな大人の夜を過ごせます。芝公園を散策しながら増上寺の厳かな大殿と東京タワーのコントラストを愛でる冬の朝も格別です。",
              roomTip: "プレミアムクラブルーム（東京タワー側バルコニー付き）。バルコニーに出て、冬の冷たく澄んだ夜気の中で東京タワーの圧倒的な光を間近に体感。",
              gourmetTip: "33階「スカイラウンジ ステラガーデン」。東京タワーをイメージしたオリジナルカクテルや、パティシエ特製の冬スイーツを絶景とともに堪能。",
              highlights: [
                "芝公園の緑と東京タワーの真下・都心屈指の天然温泉スパ完備・33階スカイラウンジ",
                "バルコニー付き客室完備・遮るもののない大迫力タワービュー・本格サウナ完備",
                "オリジナルタワーカクテル・芝公園の静寂に抱かれるプライベートオアシス"
              ]
            },
            {
              id: 5,
              name: "三井ガーデンホテル六本木プレミア",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/177558/177558.jpg",
              rating: 4.36,
              reviews: 192,
              price: "¥17,724〜",
              access: "東京メトロ日比谷線・都営地下鉄大江戸線「六本木」駅 5番出口より、徒歩約5分！",
              special: "「六本木」駅から徒歩５分。館内にフィットネスをご用意",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F177558%2F177558.html",
              story: "六本木交差点から徒歩約5分、六本木通りから一歩入った落ち着いたロケーションに誕生したハイエンドホテル「三井ガーデンホテル六本木プレミア」。日本の伝統工芸である組子細工や上質なファブリックをあしらったモダンジャパニーズデザインが特徴です。全客室がゆったりとした配置で、大きな窓からは六本木の街並みや東京タワーの頭頂部を望むことができます。最上階14階のメインダイニング「BALCON TOKYO」は、開放的なルーフトップテラスを備えた大人の社交場。冬の夜風を感じるテラス席やシックなバースペースで、厳選された肉料理やシャンパンを味わいながら六本木の夜景に浸ることができます。六本木ヒルズやミッドタウンへのアクセスも抜群のスタイリッシュな隠れ家です。",
              roomTip: "デラックスキング（タワービュー）。窓辺のスタイリッシュなソファから冬の東京タワー夜景をゆったり眺められる上質なプライベート空間。",
              gourmetTip: "最上階「BALCON TOKYO」。特製ローストビーフや季節のトリュフパスタ、朝食には素材にこだわった選べるメインプレートとハーフビュッフェを満喫。",
              highlights: [
                "六本木交差点至近・最上階テラスレストラン「BALCON TOKYO」・洗練されたモダン空間",
                "全室ゆとりのレイアウト・朝食からバータイムまで楽しめるスタイリッシュな社交場",
                "デザイン性の高い洗練された内装・ミシュラン星付き店や麻布十番グルメ散策拠点"
              ]
            }
  ];

  const faqData = [
  {
    "q": "六本木けやき坂イルミネーションの点灯期間・点灯時間とベスト撮影スポットは？",
    "a": "例年11月上旬から12月25日のクリスマスにかけて点灯されます（一部エリアは翌年2月頃まで継続）。点灯時間は17:00〜23:00が目安です。最も美しく撮影できるベストスポットは、けやき坂通りの連絡ブリッジ（六本木ヒルズ森タワーとレジデンスを結ぶ歩道橋の上）です。坂道に沿って広がる白銀と青のLED並木道の真正面に東京タワーが重なり、東京を代表する冬の絶景写真を撮影できます。"
  },
  {
    "q": "六本木ミッドタウンや麻布台ヒルズの冬のイベント見どころは？",
    "a": "東京ミッドタウンでは「MIDTOWN WINTER LIGHTS」として、芝生広場一面に光の演出が広がり、本物の氷を使用した都内最大級の屋外アイススケートリンクが登場します。また注目の「麻布台ヒルズ」では中央広場に本物のモミの木を使用した巨大クリスマスツリーが設置され、本場ドイツのオーナメントやホットチョコレートが並ぶ本格的なクリスマスマーケットが開催され、冬の散策に最適です。"
  },
  {
    "q": "冬の六本木・麻布台のレストラン予約のタイミングとドレスコードの注意点は？",
    "a": "11月下旬から12月のクリスマス期間、および年末年始の六本木・虎ノ門・麻布台エリアの有名レストランやホテルダイニングは非常に人気が高く、1〜2ヶ月前には満席になることが珍しくありません。特に東京タワーが見える窓側席やクリスマスディナーコースは早めのWeb予約が必須です。また、高級ホテルやファインダイニングではスマートカジュアル（男性はジャケット着用、ビーチサンダルや短パン不可）が推奨されます。"
  },
  {
    "q": "冬の都心散策（六本木〜麻布台〜東京タワー）の寒さ対策と歩きやすさは？",
    "a": "東京の11月〜1月はビル風（高層ビル群の間を吹き抜ける冷たい風）が強まるため、体感温度が実際の気温より数度低く感じられます。防風性のあるウールコートやダウン、マフラー、手袋を着用しましょう。六本木ヒルズから麻布台ヒルズ、東京タワーへは徒歩15〜20分圏内ですが、坂道が多いため歩きやすい上質なショートブーツやクッション性の高いスニーカーでの移動がおすすめです。"
  },
  {
    "q": "東京タワーの冬期限定ライトアップにはどのような種類がありますか？",
    "a": "冬の東京タワーは、温かみのあるオレンジ色の光で包む「ランドマークライト（冬バージョン）」が基本となります。さらに月曜日や木曜日などの特定夜やイベント時には、カラーの光が1時間ごとに変化する「インフィニティ・ダイヤモンドヴェール」が点灯します。クリスマスや新春元旦には特別ダイヤモンドヴェールやメッセージ表示も行われ、冬の夜空をドラマチックに彩ります。"
  }
];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-tokyo-roppongi-hills-azabudai-keyakizaka-illumination-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/winter-tokyo-roppongi-hills-azabudai-keyakizaka-illumination-stay"
        },
        "headline": "【11・12・1月東京】六本木けやき坂イルミネーション＆麻布台ヒルズ！東京タワー冬夜景と美食に酔いしれるラグジュアリーホテル5選",
        "description": "冬の東京の代名詞・六本木けやき坂を彩る約80万球のLED「SNOW & BLUE」と、正面にそびえる真紅の東京タワー。さらに東京ミッドタウンの幻想的な光の広場、注目の麻布台ヒルズの華やかなクリスマスマーケットが揃い踏みする11月・12月・1月。地上200mの天空ラウンジや客室バルコニーから大パノラマの冬夜景を独占し、世界最高峰のミシュラン美食に酔いしれる極上の都心ホテルステイ。楽天APIから最新取得した六本木・赤坂・虎ノ門・芝公園の最高峰ラグジュアリーホテル5選を徹底特集します。",
        "datePublished": "2026-10-04T00:00:00+09:00",
        "dateModified": "2026-10-04T00:00:00+09:00",
        "inLanguage": "ja",
        "publisher": {
          "@type": "Organization",
          "name": "地域の宿探訪",
          "url": "https://croud-travel.com"
        }
      },
      {
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
            "name": "六本木・麻布台・東京タワー冬特集",
            "item": "https://croud-travel.com/winter-tokyo-roppongi-hills-azabudai-keyakizaka-illumination-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      }
    ]
  };


  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-slate-950 via-purple-950 to-blue-950 text-white py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.18),transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs sm:text-sm font-medium">
            <Sparkles className="w-4 h-4 text-purple-300" />
            <span>11月・12月・1月冬の東京都心ラグジュアリー特集</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug sm:leading-tight mb-6">
            六本木けやき坂イルミネーション＆麻布台ヒルズ！<br className="hidden sm:inline" />
            東京タワー冬夜景と美食に酔いしれる名宿5選
          </h1>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mb-8">
            澄み渡る冬の夜空に浮かび上がる約80万球のLED並木道「SNOW & BLUE」と、温かな光を放つ東京タワーの奇跡の重なり。東京ミッドタウンの幻想的なスケートリンク、話題の麻布台ヒルズのクリスマスマーケットを巡り、天空のラグジュアリーホテルで極上の美食と東京夜景に浸る大人の冬旅をお届けします。
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-slate-200 border-t border-slate-700/60 pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-purple-400 shrink-0" />
              <span>期間：11月上旬〜1月下旬</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
              <span>けやき坂 SNOW & BLUE</span>
            </div>
            <div className="flex items-center gap-2">
              <Landmark className="w-4 h-4 text-purple-400 shrink-0" />
              <span>東京タワー冬の絶景夜景</span>
            </div>
            <div className="flex items-center gap-2">
              <Utensils className="w-4 h-4 text-purple-400 shrink-0" />
              <span>ミシュラン美食＆天空バー</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Section 1: エリア解説 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-purple-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Destination Guide</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-purple-500 shrink-0" />
              冬の六本木・麻布台・東京タワーが放つ圧倒的な輝き
            </h2>
          </div>

          <div className="text-slate-600 space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              冬の訪れとともに、東京の国際的カルチャーの中心地・六本木は一年で最もドラマチックな光に包まれます。六本木ヒルズの「けやき坂イルミネーション」は、約400メートルの並木道に約80万球のLEDが灯る冬の風物詩。白銀と青の光が織りなす「SNOW & BLUE」の並木道を下っていくと、その坂の正面にオレンジ色にライトアップされた冬の東京タワーがそびえ立つ光景は、誰もが足を止めて息を呑む東京の冬の代名詞です。
            </p>
            <p>
              さらに歩を進めれば、東京ミッドタウンの芝生広場に広がる「MIDTOWN WINTER LIGHTS」の光のドームや、本物の氷を使用した屋外アイススケートリンクが冬の夜を賑やかに盛り上げます。木々に囲まれた幻想的な空間でスケート靴を滑らせる体験は、まるでニューヨークのロックフェラーセンターを思わせる特別な高揚感をもたらしてくれます。
            </p>
            <p>
              そして今、国内外の注目を一手に集める最新街区「麻布台ヒルズ」では、中央広場を舞台に本場のクリスマスマーケットが開催され、スパイス香るグリューワインや焼き立てプレッツェル、クラフトオーナメントが並び、緑と光が調和した未来型都市の冬を体感できます。地上33階の展望スペース「スカイロビー」からは、目の前に迫る東京タワーと果てしなく広がる東京の大パノラマ夜景が広がり、訪れる人を圧倒します。
            </p>
            <p>
              この洗練された光の回廊を満喫した後は、世界最高峰のホスピタリティを誇るラグジュアリーホテルへ。地上数十階の客室から眼下に広がる光の絨毯と東京タワーを見下ろし、厳選されたワインや名門シェフのディナーに舌鼓を打つ。都会の洗練とロマンスが極まる至福の時間をお過ごしください。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="bg-purple-50/60 rounded-xl p-5 border border-purple-100">
              <div className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <span>けやき坂 SNOW & BLUE</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                400m続く約80万球の純白と青のLED並木。連絡橋から望む東京タワーとの奇跡のコラボレーションは圧巻。
              </p>
            </div>
            <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
              <div className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <Utensils className="w-5 h-5 text-amber-600" />
                <span>世界屈指のファインダイニング</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ミシュラン星付きレストランが集う六本木・麻布十番。熟成肉ステーキや季節のトリュフ、江戸前鮨の極み。
              </p>
            </div>
            <div className="bg-blue-50/60 rounded-xl p-5 border border-blue-100">
              <div className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-blue-600" />
                <span>東京タワー目の前の特等席</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                芝公園の天然温泉付きホテルや地上200mの天空ラウンジから、冬の澄んだ大気を通して輝くタワーを独占。
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: 厳選ホテル紹介 */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-purple-600 font-bold text-xs sm:text-sm tracking-wider uppercase">Verified Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              冬の六本木・麻布台・東京タワーを望む厳選ラグジュアリーホテル5選
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              楽天APIからリアルタイム取得した最新宿泊料金・クチコミ評価点に基づき、けやき坂直結・東京タワービュー・天空ラウンジ・絶品ダイニングを兼ね備えた名宿を厳選紹介。
            </p>
          </div>

          <div className="space-y-12">
            {hotelsData.map((hotel) => (
              <div 
                key={hotel.id}
                id={`hotel-${hotel.id}`}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Hotel Image */}
                  <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full">
                    <img 
                      src={hotel.img} 
                      alt={hotel.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                      <Building className="w-3.5 h-3.5 text-purple-400" />
                      <span>ラグジュアリー名宿 #{hotel.id}</span>
                    </div>
                  </div>

                  {/* Hotel Info */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                        <div className="flex items-center gap-1.5 text-amber-500">
                          <Star className="w-4 h-4 fill-amber-400" />
                          <span className="font-extrabold text-slate-900 text-sm sm:text-base">{hotel.rating}</span>
                          <span className="text-xs text-slate-500">（{hotel.reviews.toLocaleString()}件）</span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-slate-600 block">参考宿泊料金（1名）</span>
                          <span className="text-lg sm:text-2xl font-black text-purple-600">{hotel.price}</span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                        {hotel.name}
                      </h3>

                      <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                        <MapPin className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                        <span>{hotel.access}</span>
                      </div>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {hotel.story}
                      </p>

                      {/* Highlights */}
                      <div className="bg-slate-50 rounded-xl p-4 space-y-2 border border-slate-100">
                        <span className="text-xs font-bold text-slate-700 block">冬の宿泊注目ポイント</span>
                        <ul className="text-xs text-slate-600 space-y-1.5">
                          {hotel.highlights.map((h, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="bg-purple-50/50 p-3 rounded-lg border border-purple-100/60">
                          <span className="font-bold text-purple-950 block mb-1">客室選びのヒント</span>
                          <p className="text-slate-600">{hotel.roomTip}</p>
                        </div>
                        <div className="bg-amber-50/50 p-3 rounded-lg border border-amber-100/60">
                          <span className="font-bold text-amber-950 block mb-1">美食・バーの魅力</span>
                          <p className="text-slate-600">{hotel.gourmetTip}</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <a
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-md shadow-purple-600/20 group"
                      >
                        <span>楽天トラベルで空室・冬限定プランを見る</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2.5: 東京タワー冬ライトアップ＆美食探訪 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-purple-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Tokyo Tower & Fine Dining</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Landmark className="w-6 h-6 text-purple-500 shrink-0" />
              冬の澄んだ夜空に輝く東京タワーと極上ファインダイニング
            </h2>
          </div>

          <div className="text-slate-600 space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              冬の東京タワーは、10月上旬から温かみのあるオレンジ色の光で包まれる「ランドマークライト（冬バージョン）」へと切り替わります。真冬の澄み切った乾燥した空気を通して見るオレンジの光は、都会の夜空にまるで巨大なキャンドルが灯ったかのような格別の温もりを漂わせます。さらにクリスマスシーズンや特定日には、色彩豊かな「インフィニティ・ダイヤモンドヴェール」が点灯し、訪れる人々を魅了します。
            </p>
            <p>
              夜のディナーには、六本木や麻布十番に集結する世界最高峰のファインダイニングを。備長炭で香ばしく焼き上げる極上の黒毛和牛ステーキや、冬のトリュフを惜しみなく削った特製パスタ、江戸前の技を極めた名店寿司など、記念日や大人のデートにふさわしい至高の美食が揃います。食後はホテルのスカイラウンジやルーフトップバーへ移動し、東京タワーのライトアップを目前にカクテルグラスを傾ける時間は、東京の冬ならではの最上級の贅沢です。
            </p>
            <p>
              また、麻布十番商店街に点在する創業百年を超える老舗の「江戸前手打ち蕎麦」や、出汁の染みた熱々の「浪花おでん」、甘味処の「今川焼き・たい焼き」など、下町情緒を残す温かな冬のローカルグルメをつまみ食いしながら散策するのも、六本木・麻布エリアならではの粋な楽しみ方です。
            </p>
          </div>
        </section>

        {/* Section 3: 気候・服装ガイド */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-purple-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Climate & Style</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Snowflake className="w-6 h-6 text-purple-500 shrink-0" />
              11月・12月・1月の気温と東京都心のビル風対策＆スマート服装術
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
              <div className="font-bold text-purple-900 text-base flex items-center justify-between">
                <span>11月上旬〜下旬</span>
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">平均 12℃ / 最低 7℃</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                イチョウの黄葉とけやき坂イルミネーションの点灯が重なる爽やかな晩秋。ウールコートやトレンチコートに上質なマフラーを合わせるとホテルラウンジでも映えます。
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
              <div className="font-bold text-purple-900 text-base flex items-center justify-between">
                <span>12月（クリスマス）</span>
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">平均 7℃ / 最低 3℃</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                高層ビル群の間を吹き抜ける木枯らしで体感温度が下がります。仕立ての美しい厚手チェスターコートや上質ダウン、手袋、カシミヤストールを準備して優雅に散策しましょう。
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
              <div className="font-bold text-purple-900 text-base flex items-center justify-between">
                <span>1月（新春〜真冬）</span>
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">平均 5℃ / 最低 1℃</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                澄み渡る青空が広がる一方で、夜間は氷点下に迫る冷え込みに。防風インナーや足元を温めるブーツが必須。初詣や東京タワー参拝の際は携帯カイロがあると心強いです。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: モデルコース */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-purple-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Suggested Itinerary</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Compass className="w-6 h-6 text-purple-500 shrink-0" />
              1泊2日 六本木イルミネーション＆麻布台ヒルズ満喫ラグジュアリーコース
            </h2>
          </div>

          <div className="space-y-6">
            <div className="border-l-2 border-purple-500 pl-4 sm:pl-6 space-y-4">
              <div className="font-bold text-slate-900 text-base sm:text-lg flex items-center gap-2">
                <span className="bg-purple-600 text-white text-xs px-2.5 py-1 rounded-md">Day 1</span>
                <span>麻布台ヒルズ散策からけやき坂イルミネーション＆天空バー</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  <strong>13:00</strong> 六本木のホテルへチェックイン手続きと手荷物預け。
                </p>
                <p>
                  <strong>13:30</strong> 話題の「麻布台ヒルズ」へ。中央広場の巨大モミの木クリスマスツリーやギャラリー、緑豊かな建築を散策。
                </p>
                <p>
                  <strong>15:30</strong> ホテルのクラブラウンジまたはカフェで季節のアフタヌーンティーを優雅に堪能。
                </p>
                <p>
                  <strong>17:00</strong> 夕暮れ時、「けやき坂イルミネーション」が点灯。連絡ブリッジから東京タワーと光の並木道の絶景を撮影。
                </p>
                <p>
                  <strong>18:00</strong> 東京ミッドタウンの「MIDTOWN WINTER LIGHTS」芝生広場イルミネーションを散策。
                </p>
                <p>
                  <strong>19:30</strong> ホテルのシグネチャーレストランで冬の特選ディナーコースに舌鼓。
                </p>
                <p>
                  <strong>21:30</strong> 最上階のルーフトップバーで、東京タワーの温かなライトアップを見つめながらオリジナルカクテルを味わう。
                </p>
              </div>
            </div>

            <div className="border-l-2 border-indigo-500 pl-4 sm:pl-6 space-y-4">
              <div className="font-bold text-slate-900 text-base sm:text-lg flex items-center gap-2">
                <span className="bg-indigo-600 text-white text-xs px-2.5 py-1 rounded-md">Day 2</span>
                <span>絶景朝食から芝公園・東京タワー参拝＆麻布十番グルメ散策</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  <strong>08:30</strong> 富士山や東京の街並みを一望するレストランで、シェフ出来立ての朝食ビュッフェをゆっくり楽しむ。
                </p>
                <p>
                  <strong>10:30</strong> チェックアウト後、芝公園を散策しながら「増上寺」へ。徳川将軍家ゆかりの壮大な本堂と東京タワーの調和を参拝。
                </p>
                <p>
                  <strong>12:00</strong> 麻布十番商店街へ移動。老舗の手打ち蕎麦や、冬に温まる名物おでんランチを堪能。
                </p>
                <p>
                  <strong>14:00</strong> 六本木ヒルズ森美術館（Mori Art Museum）で最新の現代アートを鑑賞し、贅沢な東京冬旅を締めくくる。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-purple-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900">
              冬の六本木・麻布台・東京タワー旅行 よくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-5 bg-slate-50/30 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-purple-600 font-extrabold shrink-0">Q.</span>
                  <span>{item.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: 周遊内部リンク */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-purple-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Related Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              あわせて楽しむ！冬の首都圏＆人気イルミネーション名所特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <Link 
              href="/winter-tokyo-marunouchi-illumination-tokyo-station-hatsumode-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-purple-400 block mb-1">丸の内冬特集</span>
              <span className="font-bold text-white block">丸の内仲通りシャンパンゴールド＆東京駅夜景の名宿</span>
            </Link>

            <Link 
              href="/winter-kanagawa-yokohama-minatomirai-illumination-chinatown-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-purple-400 block mb-1">横浜冬特集</span>
              <span className="font-bold text-white block">赤レンガ倉庫クリスマスマーケット＆港夜景の名宿</span>
            </Link>

            <Link 
              href="/winter-tochigi-ashikaga-flowerpark-sano-yakuyoke-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-purple-400 block mb-1">足利冬特集</span>
              <span className="font-bold text-white block">あしかがフラワーパーク光の花の庭と佐野厄除け大師</span>
            </Link>
          </div>
        </section>

      </main>

      {/* Footer Navigation */}
      <footer className="max-w-5xl mx-auto px-4 sm:px-6 py-12 border-t border-slate-200 mt-16 text-center text-xs text-slate-500">
        <p>© 2026 地域の宿探訪 - 日本の四季と極上ホテル・旅館を巡る旅</p>
      </footer>
    
      <HubRelatedPosts currentSlug="winter-tokyo-roppongi-hills-azabudai-keyakizaka-illumination-stay" />
</div>
  );
}
