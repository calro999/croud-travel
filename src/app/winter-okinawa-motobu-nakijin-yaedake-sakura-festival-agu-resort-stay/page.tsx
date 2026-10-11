import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, Landmark, Snowflake, ShieldCheck, Footprints, Coffee, Camera, Sun, Flower2
} from 'lucide-react';

export const metadata: Metadata = {
  title: '沖縄で過ごす冬の旅（1月）！本部！名宿5選',
  description: '本州が真冬の寒波に包まれる1月中旬、沖縄・やんばるの森から日本一早い春が始まります。標高453mの八重岳を濃いピンク色に染め上げる約7,00。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '本部 ホテル, 今帰仁 ホテル, 八重岳桜まつり, 今帰仁城跡 桜, オリオンモトブリゾート, アラマハイナコンドホテル, 美ら海水族館 ホテル, ヒルトン沖縄瀬底リゾート, 1月 沖縄 観光',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-okinawa-motobu-nakijin-yaedake-sakura-festival-agu-resort-stay/"
  },
  openGraph: {
    title: '沖縄で過ごす冬の旅（1月）！本部！名宿5選',
    description: '本州が真冬の寒波に包まれる1月中旬、沖縄・やんばるの森から日本一早い春が始まります。標高453mの八重岳を濃いピンク色に染め上げる約7,00。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-okinawa-motobu-nakijin-yaedake-sakura-festival-agu-resort-stay',
    siteName: '地域の宿探訪',
    locale: 'ja_JP',
    type: 'article',
    images: [{
      url: "https://img.travel.rakuten.co.jp/share/HOTEL/145419/145419.jpg",
      width: 1200,
      height: 630,
      alt: 'もとぶ八重岳桜まつりの濃いピンク寒緋桜とエメラルドグリーンの美ら海'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "沖縄で過ごす冬の旅（1月）！本部＆今帰仁・名護！日本一早い春を告げる八重岳桜まつり＆今帰仁城跡ライトアップと美ら海リゾート・島豚アグー・本部牛を味わう名宿5選",
    description: "本州が真冬の寒波に包まれる1月中旬、沖縄・やんばるの森から日本一早い春が始まります。標高453mの八重岳を濃いピンク色に染め上げる約7,000本の寒緋桜（琉球彼岸桜）を愛でる「もとぶ八重岳桜まつり」、世界遺産・今帰仁城跡の城壁に映える幻想的な夜桜ライトアップ「今帰仁グスク桜まつり」。冬期ならではの圧倒的な透明度を誇るエメラルドグリーンの東シナ海、混雑の落ち着いた沖縄美ら海水族館、極上のやんばる島豚アグーしゃぶしゃぶと黒毛和牛本部牛。南国の桜と海に癒やされる冬の本部・今帰仁の名宿5選を徹底解説します。",
    images: ["https://img.travel.rakuten.co.jp/share/HOTEL/145419/145419.jpg"]
  }
};

export default function OkinawaMotobuWinterPage() {
  const hotelsData = [
            {
              id: 1,
              name: "オリオンホテル　モトブリゾート＆スパ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/145419/145419.jpg",
              rating: 4.57,
              reviews: 959,
              price: "¥26,400〜",
              access: "那覇空港からお車で高速利用約100分。空港バス利用約150分ホテル前停車。美ら海水族館へ徒歩7分、海洋博公園隣接",
              special: "【楽天トラベル ブロンズアワード2024受賞】「しぜんとしぜんに」を体現する洗練された南国リゾート",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F145419%2F145419.html",
              story: "「沖縄美ら海水族館」まで徒歩約7分、エメラルドビーチの真正面に広がる白亜のラグジュアリーリゾート「オリオンホテル モトブリゾート＆スパ」。全室がバルコニー付きのオーシャンフロント仕様となっており、客室の窓からは水平線に浮かぶ伊江島の城山（タッチュー）とグラデーションを描く東シナ海の大パノラマが広がります。館内には沖縄本島では大変希少な天然温泉「ジュラ紀温泉 美ら海の湯（地下1,500mから湧出）。」を備え、海を見渡す展望風呂で冬の冷えた体を芯から温める贅沢を堪能。オリオンビール直営ホテルならではの「オリオン生ビール飲み放題」やテイスティングサービスも大人気。夕食は鉄板焼きやバーベキュー、島食材をふんだんに取り入れた琉球ビュッフェで、本部牛ステーキや新鮮な島魚を味わえます。",
              roomTip: "オーシャンキッズまたはオーシャンウイング・ジュニアスイート。一面ガラス張りのバルコニーから冬のエメラルドビーチと伊江島の夕日を独占。",
              gourmetTip: "鉄板焼「カペラ」。極上の本部牛サーロインやあぐー豚をシェフの華麗な手さばきで焼き上げる、海を望むプライベートディナー。",
              highlights: [
                "美ら海水族館徒歩7分・全室バルコニー付きオーシャンフロント・地下1500m天然温泉",
                "オリオンビール飲み放題サービス・鉄板焼「カペラ」の本部牛・伊江島夕日パノラマ",
                "沖縄屈指のハイクラスリゾート・冬の澄んだ海を満喫・ゆったり上質な休日"
              ]
            },
            {
              id: 2,
              name: "アラマハイナ　コンドホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/166935/166935.jpg",
              rating: 4.60,
              reviews: 580,
              price: "¥16,950〜",
              access: "那覇空港よりお車にて約１１０分",
              special: "「楽天トラベルアワード2024」ブロンズアワード受賞！全室オーシャンビュー、大浴場にプール、ジム完備",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F166935%2F166935.html",
              story: "やんばるの玄関口・本部半島のハナサキマルシェに隣接するハイクラス・コンドミニアムリゾート「アラマハイナ コンドホテル」。全客室がリビング・ダイニング・キッチンを備えた広々としたスイートタイプで、自宅のように寛げるロングステイに最適です。最上階（11階）に位置する展望大浴場とインフィニティプール（冬期は温水ジャグジー等）からは、本部港と名護湾の青い海がどこまでも広がる圧倒的な絶景を満喫。隣接する複合商業施設「オキナワ ハナサキマルシェ」には、沖縄のクラフトビールやジェラート、人気ベーカリー、お洒落なショップが集結し、暮らすようなリゾート体験が叶います。冬は八重岳の桜まつり会場まで車で約15分という抜群のアクセスも魅力です。",
              roomTip: "インフィニティスイート。大きな窓から水平線を見渡す広々としたリビングと独立ベッドルームで、長期滞在にも快適な贅沢時間。",
              gourmetTip: "メインダイニング「やんばるビストロ LUANA」。地元の契約農家から届く島野菜や近海魚、やんばる島豚アグーを使った創作ビストロ料理。",
              highlights: [
                "全室キッチン付きスイートコンド・最上階展望大浴場・ハナサキマルシェ隣接",
                "暮らすような長期滞在・八重岳桜まつり車15分・やんばるビストロLUANA",
                "新しく清潔なモダン空間・自由度の高いコンドホテルステイ・女子旅や家族に大好評"
              ]
            },
            {
              id: 3,
              name: "ロイヤルビューホテル美ら海",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/15062/15062.jpg",
              rating: 4.20,
              reviews: 1122,
              price: "¥4,380〜",
              access: "空港より「やんばる急行バス」で２時間２０分。路線バスの場合は空港→名護ＢＴまで１時間４５分、乗換「石川入口」まで５５分。",
              special: "目の前は美ら海水族館！沖縄美ら海水族館、エメラルドビーチまでは徒歩圏内と絶好のロケーションです。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15062%2F15062.html",
              story: "海洋博公園・沖縄美ら海水族館まで徒歩わずか5分という屈指のロケーションを誇る「ロイヤルビューホテル美ら海」。水族館を朝一番の開館直後や夕方の空いている時間帯にゆったり見学したい旅人に絶大な人気を誇ります。広大な敷地内にはヤシの木が揺れるトロピカルなガーデンが広がり、本館・別館の客室からはエメラルドグリーンの東シナ海や伊江島を展望。館内にはキッズパークやファミリー向け設備が充実しており、三世代旅行や小さな子ども連れでも安心して滞在できます。夕食ビュッフェでは、島豚アグーのしゃぶしゃぶやゴーヤーチャンプルー、紅芋スイーツなど沖縄の伝統郷土料理をバラエティ豊かに楽しめます。",
              roomTip: "オーシャンビューファミリールーム。畳スペースを備えたお部屋もあり、小さな子ども連れでも靴を脱いでリラックスして過ごせます。",
              gourmetTip: "レストラン「チスラ」。冬限定のやんばる島豚アグーの温かいしゃぶしゃぶや、沖縄そばの実演コーナーが並ぶ充実のディナービュッフェ。",
              highlights: [
                "美ら海水族館徒歩5分・エメラルドビーチ至近・ファミリー＆三世代旅行に最適",
                "やんばる島豚アグーしゃぶしゃぶビュッフェ・キッズパーク完備・抜群のコスパ",
                "朝一番の水族館観光に最高の立地・広大なガーデンプール・気兼ねない滞在"
              ]
            },
            {
              id: 4,
              name: "ホテルマハイナ　ウェルネスリゾートオキナワ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/14584/14584.jpg",
              rating: 3.99,
              reviews: 1520,
              price: "¥5,970〜",
              access: "美ら海水族館、エメラルドビーチ車で5分（無料送迎バス有）／那覇空港～車で約100分（沖縄自動車道経由）（有料高速バス有）",
              special: "オーシャンビューの客室、大型プール、大浴場等、リゾートを快適に過ごす施設が整っています。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14584%2F14584.html",
              story: "本部半島の丘の上に建ち、全室オーシャンビューのバルコニーから名護湾の碧い海を一望する大型リゾート「ホテルマハイナ ウェルネスリゾートオキナワ。」。館内中央には開放感あふれるアトリウムラウンジがあり、南国の陽光と心地よい海風が吹き抜けます。自慢の大浴場「マハイナ塩温泉」は、海水成分を含むミネラル豊富な泉質で、湯上がり後も肌がぽかぽかと温まり冷めにくいのが特徴です。美ら海水族館や備瀬のフクギ並木への無料送迎シャトルバスが運行されており、フットワークも抜群。夕食は和洋琉ビュッフェのほか、本格炭火焼肉店が併設されており、最高級のやんばる和牛やあぐー豚を香ばしい炭火焼きで堪能できます。",
              roomTip: "オーシャンビュースーペリアファミリー。広々としたバルコニーから海と夕日を眺め、畳スペースで手足を伸ばして寛げる居心地の良い客室。",
              gourmetTip: "炭火焼肉「やんばる」。厳選された本部牛カルビや厚切りあぐー豚、島野菜を無煙ロースターでじっくり香ばしく焼き上げるスタミナディナー。",
              highlights: [
                "全室オーシャンビュー・ミネラル豊富なマハイナ塩温泉・炭火焼肉やんばる",
                "本部牛炭火焼肉・美ら海水族館無料送迎シャトル運行・広いファミリールーム",
                "大浴場完備で旅の疲れを癒やす・リピーター多数の安心感・やんばる観光の拠点"
              ]
            },
            {
              id: 5,
              name: "ヒルトン沖縄瀬底リゾート",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/179299/179299.jpg",
              rating: 4.39,
              reviews: 198,
              price: "¥15,375〜",
              access: "空港ーホテル直行バス運行中（要予約）。 那覇空港よりレンタカーで約90分。ご宿泊様用無料送迎あり（要予約）",
              special: "沖縄本島北部・車で行ける離島「瀬底島」のビーチリゾート。瀬底ビーチまで徒歩2分、土曜の打ち上げ花火も",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F179299%2F179299.html",
              story: "沖縄本島から瀬底大橋を渡ってアクセスする離島・瀬底島の白砂ビーチに佇む極上ホテル「ヒルトン沖縄瀬底リゾート」。息を呑むほど美しい瀬底ビーチに直結し、透明度の高いエメラルドグリーンの海と伊江島、水納島（みんなじま）を一望できる世界的ラグジュアリーリゾートです。客室はモダンで洗練されたコンテンポラリーデザインで、プライベートバルコニーから眺める冬の夕日は息を呑む美しさ。屋内温水プールやフィットネスセンター、上質なスパを完備し、天候に左右されず優雅なホテルライフを満喫できます。オールデイダイニング「アマハジ」では、沖縄の伝統食材を現代風に昇華させた極上のディナーコースや贅沢な朝食ビュッフェを楽しめます。",
              roomTip: "プレミアムオーシャンビュー（高層階）。瀬底ブルーの海と白い砂浜、夕暮れのグラデーションをパノラマで独占できる特等席。",
              gourmetTip: "イタリアンレストラン「セマーレ」。沖縄の新鮮な魚介や旬の柑橘、本部牛を用いた本格イタリアンディナーを厳選ワインとともに。",
              highlights: [
                "瀬底島ビーチ直結・全室バルコニー・屋内温水プール＆スパ完備のヒルトンリゾート",
                "瀬底ブルーの絶景・イタリアン「セマーレ」の極上ディナー・洗練のグローバル基準",
                "離島ならではの静寂と白砂ビーチ・サンセットカクテル・非日常のプライベートリゾート"
              ]
            }
  ];

  const faqData = [
  {
    "q": "「もとぶ八重岳桜まつり」と「今帰仁グスク桜まつり」の開催時期と開花の特徴は？",
    "a": "例年1月中旬〜2月上旬にかけて開催されます。本州のソメイヨシノと異なり、沖縄の桜は「寒緋桜（カンヒザクラ／琉球彼岸桜）」という品種で、濃いピンク色の釣鐘状の花が下を向いて咲きます。また、寒さに反応して開花するため「山頂から山麓に向かって咲き下りていく」のが大きな特徴です。八重岳（標高453m）の山頂へと続く約4kmのドライブウェイには約7,000本が咲き誇り、世界遺産・今帰仁城跡では夜間に平郎門から本丸跡までの石畳と寒緋桜がライトアップされ、幻想的な夜桜を楽しめます。"
  },
  {
    "q": "1月の沖縄の気候と気温、服装の注意点は？海には入れますか？",
    "a": "1月の沖縄（名護・本部エリア）は平均気温約17℃、最高気温は20℃前後まで上がります。日差しがある日中は長袖シャツや薄手のパーカーで快適に過ごせますが、北風が吹き抜ける日は体感温度が下がるため、風を通さないウインドブレーカーや秋・春用のジャケットが一枚あると重宝します。海での遊泳は冬期オフシーズン（水温21〜22℃前後）のためウェットスーツ着用のアクティビティ（シュノーケリングやダイビング）に限られますが、ホテルの屋内温水プールや天然温泉・展望風呂で快適にリフレッシュできます。"
  },
  {
    "q": "冬の「沖縄美ら海水族館」の混雑状況とおすすめの見学時間帯は？",
    "a": "夏休みやGWに比べて冬は観光客が落ち着いており、館内を最もゆっくり鑑賞できるベストシーズンです。特に「黒潮の海」大水槽のジンベエザメやナンヨウマンタを最前列でゆったり眺められます。おすすめの時間帯は、開館直後（8:30〜10:00）または夕方（16:00以降）。近隣のホテル（オリオンモトブやロイヤルビュー美ら海など）に宿泊していれば、朝一番に徒歩でスムーズに入館し、混雑知らずで大水槽を独占できます。"
  },
  {
    "q": "冬のやんばる・本部半島で食べるべきご当地グルメは何ですか？",
    "a": "冬の沖縄で最もおすすめなのは「やんばる島豚アグーのしゃぶしゃぶ」です。上質な脂身の甘みと旨味が凝縮されたアグー豚を出汁にくぐらせ、島野菜とともにいただく鍋料理は、冬の冷えた夜に最高のご馳走です。また、地元本部町が誇るブランド黒毛和牛「本部牛（もとぶ牛）」のステーキや焼肉、名護・本部の名物「沖縄そば（手打ちきしもと食堂の木灰そば等）。」、柑橘「やんばるシークヮーサー」や「タンカン（1月下旬が旬）」も外せません。"
  },
  {
    "q": "那覇空港から本部・今帰仁エリアへのアクセス方法とレンタカーのポイントは？",
    "a": "那覇空港から沖縄自動車道（那覇IC〜許田IC）を経由し、国道58号・国道449号を通って約90〜100分で到着します。冬期はレンタカーの予約が比較的取りやすいですが、空港周辺の営業所での出発手続きに時間がかかる場合があるため、余裕を持ったスケジュールを組むのがおすすめです。運転をしない場合は、那覇空港からホテル直行の「やんばる急行バス」や「空港リムジンバス」が運行されており、乗り換えなしで快適にアクセスできます。"
  }
];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-okinawa-motobu-nakijin-yaedake-sakura-festival-agu-resort-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-okinawa-motobu-nakijin-yaedake-sakura-festival-agu-resort-stay"
        },
        "headline": "【1月沖縄】本部＆今帰仁・名護！日本一早い春を告げる八重岳桜まつり＆今帰仁城跡ライトアップと美ら海リゾート・島豚アグー・本部牛を味わう名宿5選",
        "description": "本州が真冬の寒波に包まれる1月中旬、沖縄・やんばるの森から日本一早い春が始まります。標高453mの八重岳を濃いピンク色に染め上げる約7,000本の寒緋桜（琉球彼岸桜）を愛でる「もとぶ八重岳桜まつり」、世界遺産・今帰仁城跡の城壁に映える幻想的な夜桜ライトアップ「今帰仁グスク桜まつり」。冬期ならではの圧倒的な透明度を誇るエメラルドグリーンの東シナ海、混雑の落ち着いた沖縄美ら海水族館、極上のやんばる島豚アグーしゃぶしゃぶと黒毛和牛本部牛。南国の桜と海に癒やされる冬の本部・今帰仁の名宿5選を徹底解説します。",
        "datePublished": "T00:00:00+09:00",
        "dateModified": "T00:00:00+09:00",
        "inLanguage": "ja",
        "publisher": {
          "@type": "Organization",
          "name": "地域の宿探訪",
          "url": "https://croud-travel.pages.dev"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "ホーム",
            "item": "https://croud-travel.pages.dev"
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
            "name": "本部＆今帰仁・八重岳桜特集",
            "item": "https://croud-travel.pages.dev/winter-okinawa-motobu-nakijin-yaedake-sakura-festival-agu-resort-stay"
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
      <header className="relative bg-gradient-to-br from-pink-950 via-slate-900 to-teal-950 text-white py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(244,114,182,0.25),transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 border border-pink-400/30 text-pink-300 text-xs sm:text-sm font-medium">
            <Flower2 className="w-4 h-4 text-pink-300" />
            <span>1月沖縄！日本一早い春を告げる八重岳桜まつり＆美ら海リゾート特集</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug sm:leading-tight mb-6">本部＆今帰仁・名護！<br className="hidden sm:inline" /> 日本一早い春を告げる八重岳桜まつり＆今帰仁城跡ライトアップと美ら海リゾート・島豚アグー・本部牛を味わう名宿5選</h1>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mb-8">
            日本で最も早く春が訪れる沖縄。1月中旬、八重岳の山頂から山麓へ向けて約7,000本の濃いピンク色に染まる寒緋桜が咲き乱れる「もとぶ八重岳桜まつり」、世界遺産・今帰仁城跡の石垣と夜桜のライトアップ。冬期ならではの澄み切ったエメラルドグリーンの東シナ海、混雑知らずの沖縄美ら海水族館、極上のやんばる島豚アグー豚と本部牛。南国の桜と海に癒やされる冬の本部・今帰仁リゾートステイをお届けします。
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-slate-200 border-t border-slate-700/60 pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-pink-400 shrink-0" />
              <span>見頃：1月中旬〜2月上旬</span>
            </div>
            <div className="flex items-center gap-2">
              <Flower2 className="w-4 h-4 text-pink-400 shrink-0" />
              <span>八重岳7,000本の寒緋桜</span>
            </div>
            <div className="flex items-center gap-2">
              <Landmark className="w-4 h-4 text-pink-400 shrink-0" />
              <span>世界遺産今帰仁城跡夜桜</span>
            </div>
            <div className="flex items-center gap-2">
              <Waves className="w-4 h-4 text-pink-400 shrink-0" />
              <span>冬の美ら海水族館＆温泉</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Section 1: エリア解説 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-pink-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Destination Guide</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Flower2 className="w-6 h-6 text-pink-500 shrink-0" />
              日本一早い春！冬の本部・今帰仁が魅せるピンクの桜並木と美ら海
            </h2>
          </div>

          <div className="text-slate-600 space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              日本列島が厳しい寒波に包まれる1月、沖縄本島北部・やんばるの本部半島では、全国に先駆けて桜前線がスタートします。本部町の八重岳（標高453m）に咲く桜は、本土の淡いソメイヨシノとは一味違う、鮮やかな濃いピンク色の花弁を下向きに咲かせる「寒緋桜（カンヒザクラ）」。山頂付近の冷え込みに反応して開花するため、全国的にも極めて珍しい「山頂から麓へと桜前線が下りてくる」神秘的なグラデーションを描きます。曲がりくねる約4kmの山道両脇を彩る約7,000本の桜並木ドライブは、息を呑む感動をもたらします。
            </p>
            <p>
              さらに足を伸ばせば、世界遺産「今帰仁城跡（なきじんぐすくじょうあと）」の城壁を舞台にした「今帰仁グスク桜まつり」が旅人を魅了します。堅牢な琉球石灰岩の城壁と平郎門へ続く石畳の参道が幻想的なライトアップで浮かび上がり、深紅の夜桜と青い照明が織りなす光景は、琉球王国の悠久の歴史とロマンを感じさせてくれます。
            </p>
            <p>
              そして冬の本部半島のもう一つの主役は、夏よりも圧倒的に透明度が増すエメラルドグリーンの海です。海洋博公園の「沖縄美ら海水族館」は、夏の喧騒が落ち着き、巨大アクリルパネル「黒潮の海」の前に佇んでゆったりとジンベエザメやナンヨウマンタを眺める至福の時間を過ごせます。温泉や展望風呂付きの極上オーシャンリゾートで、南国の春を先取りする特別な休日をお楽しみください。
            </p>
          </div>
        </section>

        {/* Section 2: 厳選5ホテル詳細 */}
        <section className="space-y-8">
          <div className="border-l-4 border-pink-600 pl-4">
            <span className="text-pink-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Verified Accommodations</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900">
              冬の本部・今帰仁を満喫する美ら海リゾート＆天然温泉名宿5選
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              楽天トラベルAPIより最新の空室・プラン情報、クチコミ評価を取得。桜まつりアクセス・オーシャンビュー・やんばる美食に優れた宿を厳選
            </p>
          </div>

          <div className="space-y-12">
            {hotelsData.map((h) => (
              <article 
                key={h.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 flex flex-col"
              >
                <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-slate-100 overflow-hidden">
                  <img 
                    src={h.img} 
                    alt={h.name}
                    className="w-full h-full object-cover absolute inset-0"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-pink-900/90 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
                    第{h.id}位 厳選名宿
                  </div>
                </div>

                <div className="lg:w-3/5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <div>
                        <span className="text-xs font-semibold text-pink-600 block mb-0.5">{h.access}</span>
                        <h3 className="text-lg sm:text-2xl font-bold text-slate-900 leading-snug">
                          {h.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-lg border border-amber-200">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="font-extrabold text-amber-900 text-sm">{h.rating}</span>
                        <span className="text-xs text-amber-700">({h.reviews.toLocaleString()}件)</span>
                      </div>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {h.story}
                    </p>

                    <div className="bg-slate-50 rounded-xl p-4 space-y-2 border border-slate-100 text-xs sm:text-sm">
                      <div className="flex items-start gap-2">
                        <Waves className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-800">客室・温泉の魅力：</strong>
                          <span className="text-slate-600">{h.roomTip}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Utensils className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-800">美食ポイント：</strong>
                          <span className="text-slate-600">{h.gourmetTip}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-xs font-bold text-slate-700 block">宿の注目ハイライト：</span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                        {h.highlights.map((item: string, idx: number) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-pink-600 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-slate-400 block">参考宿泊料金（目安）</span>
                      <span className="text-lg sm:text-xl font-black text-pink-950">{h.price}</span>
                      <span className="text-[10px] text-slate-400 ml-1">/ 1名あたり（2名1室利用時）</span>
                    </div>

                    <div className="w-full sm:w-auto">
                      <a 
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto py-3 px-6 rounded-xl bg-gradient-to-r from-pink-600 to-teal-600 hover:from-pink-500 hover:to-teal-500 text-white font-bold text-sm shadow-sm hover:shadow transition-all text-center"
                      >
                        <span>楽天トラベルで宿泊プランを確認</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section 3: 気候・服装ガイド */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-pink-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Climate & Packing</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Sun className="w-6 h-6 text-pink-500 shrink-0" />
              1月の沖縄・本部半島の気候推移と快適な服装・持ち物ガイド
            </h2>
          </div>

          <div className="text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              1月の沖縄は平均気温が約17℃と本土の春（4月頃）のような心地よい気候ですが、北寄りの季節風（ミーニシ）が吹くと体感温度が下がります。八重岳の山頂展望台や今帰仁城跡の夜桜散策では、風を防ぐアウターが快適さの鍵を握ります。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
              <div className="font-bold text-pink-950 text-base flex items-center justify-between">
                <span>日中の気候（晴天時）</span>
                <span className="text-xs bg-pink-100 text-pink-800 px-2 py-0.5 rounded">最高 19〜22℃</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                太陽が顔を出すとポカポカと温かく、長袖シャツや薄手のカットソー1枚で快適に八重岳ドライブやビーチ散策を楽しめます。紫外線対策用のサングラスや日焼け止めがあると安心です。
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
              <div className="font-bold text-pink-950 text-base flex items-center justify-between">
                <span>朝晩＆八重岳山頂</span>
                <span className="text-xs bg-pink-100 text-pink-800 px-2 py-0.5 rounded">最低 13〜15℃</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                標高453mの八重岳山頂や、夜間の今帰仁城跡ライトアップ鑑賞時は北風で肌寒く感じられます。防風性のあるマウンテンパーカーやウインドブレーカー、ストールを必ず羽織りましょう。
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
              <div className="font-bold text-pink-950 text-base flex items-center justify-between">
                <span>足元・おすすめ装備</span>
                <span className="text-xs bg-pink-100 text-pink-800 px-2 py-0.5 rounded">歩きやすさ重視</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                今帰仁城跡の石畳や備瀬のフクギ並木の未舗装路を散策するため、ヒールやサンダルは避け、履き慣れたスニーカーがベスト。雨上がりの石畳は滑りやすいため注意してください。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: 桜＆美ら海フォトスポット攻略 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-pink-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Photography Guide</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Camera className="w-6 h-6 text-pink-500 shrink-0" />
              ピンクと青の対比を撮る！八重岳桜並木＆今帰仁城跡の絶景撮影テクニック
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-600">
            <div className="border border-slate-200 rounded-xl p-5 space-y-2.5 bg-slate-50/50">
              <h3 className="font-bold text-pink-950 text-sm sm:text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-pink-600" />
                八重岳の桜のトンネル
              </h3>
              <p className="leading-relaxed">
                午前中の順光時に山頂付近のヘアピンカーブから撮影するのがベスト。濃いピンク色の寒緋桜が覆い尽くす道路を望遠気味に狙うと、桜の圧縮効果で密度感あふれる華やかな並木道が撮影できます。
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 space-y-2.5 bg-slate-50/50">
              <h3 className="font-bold text-pink-950 text-sm sm:text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-pink-600" />
                今帰仁城跡の城壁と夜桜ライトアップ
              </h3>
              <p className="leading-relaxed">
                夕暮れのブルーアワーから点灯直後が狙い目。世界遺産の流麗な石垣の曲線と、青や紫のライトに照らされる寒緋桜を重ねると、琉球王国の神秘的な夜の静寂がドラマチックに写し出されます。
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 space-y-2.5 bg-slate-50/50">
              <h3 className="font-bold text-pink-950 text-sm sm:text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-pink-600" />
                冬の美ら海水族館「黒潮の海」
              </h3>
              <p className="leading-relaxed">
                混雑の少ない開館直後（8:30〜9:30）に大水槽前へ。巨大なアクリルガラス越しに泳ぐジンベエザメのシルエットと、水槽の青いグラデーションをローアングルから広角で捉える構図が美しく決まります。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: 冬の美食＆やんばるお土産ガイド */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-pink-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Gourmet & Souvenirs</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Utensils className="w-6 h-6 text-pink-500 shrink-0" />
              やんばるの豊かな恵み＆本部・名護の厳選冬特産品・お土産
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600">
            <div className="border border-slate-100 rounded-xl p-5 bg-gradient-to-br from-slate-50 to-pink-50/30 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-pink-500" />
                極上の脂の甘み「やんばる島豚アグーの出汁しゃぶしゃぶ」
              </h3>
              <p className="leading-relaxed">
                コレステロール値が低く、一般豚の数倍の旨味成分（グルタミン酸）を含む沖縄の宝「アグー豚」。澄んだ出汁にさっとくぐらせると、真っ白な脂身がとろけるような甘みに変わり、口いっぱいに上品なコクが広がります。たっぷりの島ネギや海ぶどうとともに味わう鍋は、冬の沖縄旅で絶対に味わいたい至高の逸品です。
              </p>
            </div>

            <div className="border border-slate-100 rounded-xl p-5 bg-gradient-to-br from-slate-50 to-pink-50/30 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-pink-500" />
                冬が旬のタンカン＆老舗の生沖縄そばセット
              </h3>
              <p className="leading-relaxed">
                1月下旬から収穫が始まる沖縄の柑橘「タンカン」は、濃厚な甘みと果汁たっぷりのジューシーさが特徴で冬の沖縄土産の一番人気。さらに本部町の老舗「きしもと食堂」の特製出汁付き生そばや、ハナサキマルシェの島チョコレート、名護のクラフトビールなど、やんばるならではの上質なお土産が揃います。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: 1泊2日モデルコース */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-pink-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-3xl font-bold text-white flex items-center gap-2">
              <Compass className="w-6 h-6 text-pink-400 shrink-0" />
              八重岳桜まつりと美ら海水族館を満喫する1泊2日モデルコース
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/80 rounded-xl p-6 space-y-4 border border-slate-700">
              <div className="flex items-center gap-2 font-bold text-pink-300 text-lg">
                <span className="bg-pink-600 text-white text-xs px-2.5 py-1 rounded-md">Day 1</span>
                <span>八重岳桜まつりドライブ＆今帰仁城跡の夜桜ライトアップ</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>11:30</strong> 那覇空港からレンタカーで出発。沖縄自動車道を経由して名護・本部へ。
                </p>
                <p>
                  <strong>13:30</strong> 本部町「八重岳桜の森公園」へ。約7,000本の濃いピンクの寒緋桜が咲き誇る山頂ドライブを満喫。
                </p>
                <p>
                  <strong>16:00</strong> リゾートホテルへチェックイン。客室バルコニーから冬のエメラルドブルーの海を一望。
                </p>
                <p>
                  <strong>18:00</strong> 世界遺産・今帰仁城跡へ移動。「今帰仁グスク桜まつり」の幻想的な城壁夜桜ライトアップを鑑賞。
                </p>
                <p>
                  <strong>20:00</strong> 宿で熱々のやんばる島豚アグーしゃぶしゃぶや本部牛ディナーをオリオンビールとともに堪能。
                </p>
              </div>
            </div>

            <div className="bg-slate-800/80 rounded-xl p-6 space-y-4 border border-slate-700">
              <div className="flex items-center gap-2 font-bold text-pink-300 text-lg">
                <span className="bg-pink-600 text-white text-xs px-2.5 py-1 rounded-md">Day 2</span>
                <span>朝一番の沖縄美ら海水族館＆備瀬のフクギ並木散策</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>08:30</strong> 開館直後の「沖縄美ら海水族館」へ徒歩または車ですぐ入館。「黒潮の海」の大水槽前を独占してジンベエザメを鑑賞。
                </p>
                <p>
                  <strong>11:00</strong> 「備瀬のフクギ並木」へ。冬の穏やかな木漏れ日が差し込む緑のトンネルをのんびり散策。
                </p>
                <p>
                  <strong>12:30</strong> オキナワ ハナサキマルシェや海沿いカフェで沖縄そばランチ＆ジェラート。
                </p>
                <p>
                  <strong>14:30</strong> 瀬底大橋を渡って瀬底ビーチの白い砂浜を歩いた後、那覇空港へ向けて出発。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: FAQ */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-pink-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900">
              冬の本部・八重岳桜まつり旅行 よくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-5 bg-slate-50/30 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-pink-600 font-extrabold shrink-0">Q.</span>
                  <span>{item.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: 周遊内部リンク */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-pink-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Related Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              あわせて楽しむ！沖縄の人気リゾート＆冬特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <Link 
              href="/winter-okinawa-miyakojima-shigira-resort-sunrisepoint-miyakogyu-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-pink-400 block mb-1">宮古島冬特集</span>
              <span className="font-bold text-white block">シギラリゾート＆東平安名崎初日の出！宮古牛ラグジュアリー名宿</span>
            </Link>

            <Link 
              href="/winter-okinawa-naha-naminoe-shrine-hatsumode-agu-resort-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-pink-400 block mb-1">那覇・波上宮冬特集</span>
              <span className="font-bold text-white block">琉球八社・波上宮初詣と国際通り！アグー豚と那覇シティ名宿</span>
            </Link>

            <Link 
              href="/winter-okinawa-onna-motobu-whalewatching-agu-resort-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-pink-400 block mb-1">恩納村・ホエールウォッチング特集</span>
              <span className="font-bold text-white block">冬のホエールウォッチング開幕！恩納村ビーチフロントリゾート名宿</span>
            </Link>
          </div>
        </section>

      </main>

      {/* Footer Navigation */}
      <footer className="max-w-5xl mx-auto px-4 sm:px-6 py-12 border-t border-slate-200 mt-16 text-center text-xs text-slate-500">
        <p>© 2026 地域の宿探訪 - 日本の四季と極上ホテル・旅館を巡る旅</p>
      </footer>
    
      <HubRelatedPosts currentSlug="winter-okinawa-motobu-nakijin-yaedake-sakura-festival-agu-resort-stay" />
</div>
  );
}
