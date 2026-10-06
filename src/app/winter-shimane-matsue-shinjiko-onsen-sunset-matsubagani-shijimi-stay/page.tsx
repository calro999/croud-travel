import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Fish, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Snowflake, Sparkle, Map
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12月島根・松江しんじ湖温泉】解禁松葉ガニ！名宿5選',
  description: '11月から12月にかけて、水の都・松江の宍道湖畔に湧く松江しんじ湖温泉は、澄み切った初冬の空に広がる「夕日百選」宍道湖の真紅のサンセットと。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '松江しんじ湖温泉 宿泊, なにわ一水, ホテル一畑, 松平閣, 大橋館, ニューアーバンホテル, 宍道湖 夕日, 松葉ガニ 宿, 寒シジミ, しまね和牛, 堀川遊覧船 こたつ船, 11月 12月 松江',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-shimane-matsue-shinjiko-onsen-sunset-matsubagani-shijimi-stay/"
  },
  openGraph: {
    title: '【11・12月島根・松江しんじ湖温泉】解禁松葉ガニ！名宿5選',
    description: '11月から12月にかけて、水の都・松江の宍道湖畔に湧く松江しんじ湖温泉は、澄み切った初冬の空に広がる「夕日百選」宍道湖の真紅のサンセットと。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-shimane-matsue-shinjiko-onsen-sunset-matsubagani-shijimi-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '松江しんじ湖温泉の宍道湖夕日レイクビューと冬の味覚名宿'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月島根・松江しんじ湖温泉の宍道湖夕日絶景と冬の味覚】解禁松葉ガニ＆寒シジミ鍋・しまね和牛会席を愉しむ湖畔レイクビュー名宿5選",
    description: "11月から12月にかけて、水の都・松江の宍道湖畔に湧く松江しんじ湖温泉は、澄み切った初冬の空に広がる「夕日百選」宍道湖の真紅のサンセットと、11月に解禁を迎えた冬の味覚の王者「松葉ガニ」が揃う最高のハイシーズンを迎えます。湖上を茜色に染める夕景と飛来する冬鳥のシルエット、国宝・松江城の堀川遊覧船「こたつ船」で温まる城下町巡り、77度を超える高温良質なナトリウム・カルシウム硫酸塩泉のレイクビュー露天風呂。旨味あふれる松葉ガニフルコースや、ぷっくり肥えた宍道湖産寒シジミ鍋、極上しまね和牛を堪能する湖畔の厳選名宿5選を徹底解説します。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function WinterShimaneMatsuePage() {
  const hotels = [
            {
              id: 1,
              name: "松江しんじ湖温泉　なにわ一水",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/52116/52116.jpg",
              rating: 4.70,
              reviews: 893,
              price: "¥13,850〜",
              access: "ＪＲ　松江駅より車で約１０分",
              special: "ようこそ、極上の湖畔ステイへ―――上質を知る、大人のための温泉宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52116%2F52116.html",
              story: "宍道湖の北岸、遮るもののない湖畔フロントに佇み、全客室のテラスや展望風呂から刻一刻と表情を変える宍道湖の絶景を見下ろす大人のラグジュアリー旅館「松江しんじ湖温泉 なにわ一水」。館内は和の伝統と洗練されたモダンデザインが美しく調和し、エントランスに足を踏み入れた瞬間から広大なレイクビューが広がります。全23室のうち大半に客室露天風呂や展望風呂が完備され、77度の良質な自家源泉から引かれた美肌の湯に浸かりながら、初冬の湖面を茜色から深い藍色へと染め上げる夕陽を独り占めできます。夕食は山陰の冬の味覚を贅沢極めた特選会席。11月に解禁されたばかりのタグ付き活松葉ガニの茹で上げやカニ刺し、炭火焼きガニ、さらに肉質日本一にも輝いたブランド牛「しまね和牛」のフィレステーキ、宍道湖名物の寒シジミの土鍋ご飯など、器と盛り付けにもこだわった至高の美味が並びます。",
              roomTip: "温泉露天風呂付き和洋室「MINAMO」または「みずの」。宍道湖の水面を間近に見下ろす広々としたテラスと湯船を備え、夕暮れ時から朝靄の湖景まで至福のプライベートを満喫。",
              gourmetTip: "「初冬の山陰美味極み・活松葉ガニ＆しまね和牛会席」。活松葉ガニの焼きガニ・花咲くカニ刺し・甲羅味噌焼き、しまね和牛フィレステーキ、宍道湖産大粒寒シジミの土鍋ご飯。",
              highlights: [
                "全室テラス付きレイクビュー＆客室露天風呂から望む夕陽百選宍道湖の奇跡のグラデーション",
                "活松葉ガニの焼きガニ・カニ刺し＆しまね和牛フィレステーキと寒シジミ土鍋ご飯",
                "全23室の大人の隠れ家リゾート＆記念日や特別な夫婦旅に選ばれ続ける最高峰の宿"
              ]
            },
            {
              id: 2,
              name: "松江しんじ湖温泉　ホテル一畑",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8921/8921.jpg",
              rating: 4.38,
              reviews: 3453,
              price: "¥9,000〜",
              access: "JR松江駅よりタクシーで10分・バスで20分 ／出雲空港より連絡バスで３０分／お車で山陰道松江西ランプより約15分",
              special: "宍道湖を眺める広々レストランで愉しむ季節替わりのバイキングが人気！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8921%2F8921.html",
              story: "宍道湖畔の広大な敷地に建ち、皇族の御定宿としても格式を誇る松江しんじ湖温泉を代表する大型名門ホテル「松江しんじ湖温泉 ホテル一畑」。最上階の6階に設けられた展望大浴場「天遊の湯」からは、雄大な宍道湖のパノラマと遠く連なる中国山地の山並みが一望でき、初冬の澄んだ夕刻には湖上を真紅に染める夕陽のグラデーションに息を呑みます。注がれる天然温泉は、保湿力と保温性に優れた弱アルカリ性の硫酸塩温泉で、冷えた身体を芯からポカポカに温めて肌をしっとり整えます。夕食は和食レストラン「カメリア」や料亭でいただく本格会席、または山陰の海の幸・山の幸を贅沢に味わえるディナービュッフェ。山陰沖で水揚げされた新鮮な日本海の旬魚や紅ズワイガニ、しまね和牛料理など、幅広いニーズに応えるハイレベルなおもてなしが魅力です。",
              roomTip: "レイクビュープレミアムツイン（最上階フロア）。大きなピクチャーウィンドウから宍道湖の雄大な景観を絵画のように望み、快適なベッドで寛げる上質空間。",
              gourmetTip: "「初冬の一畑特選和食会席」。山陰沖獲れたて旬魚のお造り盛り合わせ、島根県産黒毛和牛の陶板焼き、冬の味覚カニ鍋、宍道湖産シジミ汁、季節のデザート。",
              highlights: [
                "皇族御定宿の格式と広大な敷地＆最上階展望大浴場「天遊の湯」から見下ろす大パノラマ",
                "山陰沖直送旬魚と島根県産黒毛和牛陶板焼き会席＆冬の味覚カニ鍋とシジミ汁の美味",
                "和食会席からディナービュッフェまで多彩な食事＆松江城や堀川遊覧船へ好アクセス"
              ]
            },
            {
              id: 3,
              name: "松江しんじ湖温泉　松平閣",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/28281/28281.jpg",
              rating: 4.50,
              reviews: 481,
              price: "¥15,730〜",
              access: "ＪＲ松江駅より車で１０分　または　松江しんじ湖温泉駅下車徒歩３分／山陰道松江西ランプより１０分",
              special: "宍道湖のほとりに位置する当館では　小川を配した日本庭園越しに　水の都の風流をお楽しみ頂けます。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28281%2F28281.html",
              story: "松江藩の歴史と格式を受け継ぎ、数寄屋造りの格調高い建築美と美しい日本庭園が旅情を誘う純和風の老舗名門旅館「松江しんじ湖温泉 松平閣（しょうへいかく）」。手入れの行き届いた中庭には池と緑が配され、初冬の静寂の中でしっとりとした情緒を醸し出しています。大浴場と庭園露天風呂には、77度の高温良質な天然温泉が掛け流され、豊かな湯けむりに包まれながら贅沢な湯浴みが楽しめます。食事は創業以来受け継がれる伝統の茶懐石の流れを汲む本格会席料理。冬の松葉ガニをはじめ、日本海の寒ブリ、ノドグロ、しまね和牛、そして宍道湖七珍を織り交ぜた料理の数々は、料理人の繊細な包丁技と出汁の旨味が際立ちます。お部屋食または個室食事処で、松江の歴史と文化に浸りながらゆったりと極上の美味を味わえます。",
              roomTip: "庭園望む数寄屋風純和室。宮大工の技が光る格調高い欄間や床柱が美しく、畳の香りに包まれながら静かな時間の流れを心ゆくまで愉しめるお部屋。",
              gourmetTip: "「初冬の松平特選会席・松葉ガニと島根牛」。山陰産松葉ガニの酢物と焼きガニ、しまね和牛のすき焼き小鍋、ノドグロの塩焼き、宍道湖寒シジミの釜飯。",
              highlights: [
                "松江藩の歴史を受け継ぐ数寄屋造りの名門宿＆手入れの行き届いた中庭と茶懐石の美",
                "山陰産松葉ガニ料理としまね和牛すき焼き＆ノドグロ塩焼きを個室や部屋食で堪能",
                "77度自家源泉掛け流しの名湯露天風呂＆静寂な大人の時間を約束するおもてなし"
              ]
            },
            {
              id: 4,
              name: "松江しんじ湖温泉　大橋館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/38817/38817.jpg",
              rating: 4.63,
              reviews: 624,
              price: "¥9,240〜",
              access: "ＪＲ　松江駅より車にて５分、徒歩にて１５分",
              special: "部屋からは大橋川と宍道湖を一望できる。街中にあり観光に便利。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38817%2F38817.html",
              story: "松江のシンボルである大橋川にかかる松江大橋のたもとに佇み、明治17年創業の歴史を誇る文豪ゆかりの老舗旅館「松江しんじ湖温泉 大橋館」。小泉八雲（ラフカディオ・ハーン）をはじめ多くの文人墨客が定宿としたことで知られ、館内には八雲直筆の書や往時の資料が展示されています。川と湖の交わる水辺に面した客室からは、大橋川の穏やかな水面と行き交う船、初冬の朝霧に包まれる情緒あふれる松江の街並みが一望できます。館内の大浴場には松江しんじ湖温泉の天然温泉が引かれ、歴史の重みに浸りながら旅の疲れを心地よく癒やすことができます。夕食は松江の郷土の味覚を大切にした伝統会席。宍道湖七珍を取り入れた小鉢や、日本海の冬魚、島根和牛の陶板焼きなど、派手さよりも素材の滋味を重んじた料理が旅人の心を深く満たします。",
              roomTip: "リバー＆レイクビュー和室。窓から大橋川の水辺と松江の街並みを眺め、小泉八雲が愛した水の都の静かな風情を追体験できるお部屋。",
              gourmetTip: "「八雲ゆかりの初冬郷土会席」。宍道湖七珍の前菜盛り合わせ、日本海直送寒魚のお造り、島根県産牛のすき焼き風小鍋、宍道湖産シジミの澄まし汁、季節のご飯。",
              highlights: [
                "明治17年創業・小泉八雲ゆかりの歴史宿＆大橋川の水辺を望む風情ある純和風客室",
                "宍道湖七珍と日本海寒魚のお造り会席＆素材本来の滋味を味わう八雲ゆかりの味覚",
                "大橋川の朝霧と行き交う船を眺望＆松江城下町散策の拠点として文人に愛された名宿"
              ]
            },
            {
              id: 5,
              name: "松江しんじ湖温泉　ニューアーバンホテル本館・別館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5005/5005.jpg",
              rating: 4.28,
              reviews: 4546,
              price: "¥4,250〜",
              access: "★ＪＲ松江駅より『松江市営バス北循環線外回り』で７分須衛都久神社前下車下車徒歩１分　★私鉄松江しんじ湖温泉駅より徒歩５分",
              special: "★ルーフトップのSKYTOPTERRACEがOPEN！天然温泉浴場と地元食材の手作り朝食で癒しステイ",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5005%2F5005.html",
              story: "宍道湖の湖畔に建ち、ビジネスや一人旅から観光まで抜群の利便性と充実の温泉施設を兼ね備えた近代的なホテル「松江しんじ湖温泉 ニューアーバンホテル本館・別館」。最上階の展望温泉大浴場からは、広大な宍道湖のパノラマを一望でき、初冬の澄んだ夕空に沈む夕陽や、早朝の白鳥の飛来を湯船に浸かりながら眺めることができます。ナトリウム・カルシウム硫酸塩泉の天然温泉は身体の芯から温まり、冬の冷え性にも効果的。別館最上階のレストラン「フォーシーズン」では、湖を見下ろしながら山陰の海の幸やしまね和牛、地元の冬野菜を味わえる和洋バイキングやディナーコースが好評。松江城や県立美術館へも徒歩圏内という絶好の立地で、コストパフォーマンス高く松江を満喫したいスマートな旅行者に選ばれ続けています。",
              roomTip: "レイクビューツイン（本館または別館）。窓から宍道湖のパノラマレイクビューが広がり、手頃な料金で快適なホテルステイを満喫できる人気のお部屋。",
              gourmetTip: "「初冬の宍道湖バイキング＆別注しまね和牛ステーキ」。新鮮な地魚の刺身や郷土料理バイキングに加えて、とろける甘みのしまね和牛陶板ステーキを堪能。",
              highlights: [
                "宍道湖畔に建つ展望温泉ホテル＆最上階大浴場と宍道湖眺望レストランの抜群コスパ",
                "新鮮地魚と郷土料理バイキング＆別注しまね和牛ステーキで味わう充実ディナー",
                "一人旅からビジネス・観光までスマート対応＆松江しんじ湖温泉駅徒歩圏の抜群の立地"
              ]
            }
  ];

  const faqList = [
  {
    "q": "11月・12月の宍道湖の夕陽の見頃時間やおすすめ鑑賞スポット・ベストな天候は？",
    "a": "宍道湖は「日本の夕陽百選」に選定されている日本有数の夕日鑑賞スポットです。11月〜12月の日の入り時刻は、11月上旬で17:05頃、12月下旬で16:55〜17:00頃となります。日没の約30分前から始まるマジックアワーは、湖面と空が茜色から紫色へと美しく染まり、嫁ヶ島（よめがしま）や袖師地蔵のシルエットが浮かび上がります。おすすめ鑑賞スポットは、松江しんじ湖温泉街の湖畔プロムナード、とるぱ（夕日絶景ポイント）、そして島根県立美術館の屋外テラスや芝生広場（美術館ロビーからも鑑賞可能）です。冬場は晴天率が春や秋よりやや下がりますが、寒冷前線通過後の澄み渡った冬晴れの日の夕陽は年間で最も鮮やかでドラマチックです。"
  },
  {
    "q": "11月・12月の松江しんじ湖温泉の気候や気温、おすすめの服装や雨雪対策は？",
    "a": "松江の初冬は典型的な山陰・日本海側気候で、山陰には「弁当忘れても傘忘れるな」という言葉があるほど天気が変わりやすく時雨（しぐれ）やすいのが特徴です。11月の平均最高気温は15〜17℃、最低気温は6〜8℃程度ですが、12月に入ると最高気温9〜12℃、最低気温2〜5℃前後まで下がり、初雪が舞う日もあります。また、宍道湖や日本海からの強い北西の季節風が吹き抜けるため、体感温度は一段と寒く感じられます。風を通さない防風ダウンジャケット、マフラー、手袋などの防寒具に加えて、頑丈な折りたたみ傘やレインコートを必ず携行してください。"
  },
  {
    "q": "11月に解禁される「松葉ガニ」や宍道湖名物の「寒シジミ」「宍道湖七珍」とは？",
    "a": "山陰地方で水揚げされる雄のズワイガニは「松葉ガニ（まつばがに）」と呼ばれ、毎年11月6日に漁が解禁されます。11月から12月は身がぎっしり詰まり、繊細な甘みのカニ刺し、炭火で香ばしく焼いた焼きガニ、濃厚な甲羅味噌焼きなど、冬の味覚の王様として最高の時期を迎えます。また、宍道湖は淡水と海水が混ざり合う汽水湖で、日本一の漁獲量を誇るヤマトシジミの産地です。特に冬の「寒シジミ（かんしじみ）」は、冷たい水底で旨味成分のコハク酸を蓄え、身が肥えて濃厚な出汁が出ます。さらに「宍道湖七珍（すずき、もろげえび、うなぎ、あまさぎ、しらうお、こい、しじみ）」を使った伝統料理も必食です。"
  },
  {
    "q": "国宝・松江城の「堀川遊覧船」は冬も運航していますか？「こたつ船」とは？",
    "a": "はい、松江城を囲む堀を小舟でめぐる「ぐるっと松江 堀川めぐり」は年中無休で運航しています。特に11月上旬から翌年4月上旬までは、冬の風物詩である「こたつ船（豆炭こたつを積んだ遊覧船）」として運航されます。乗客は温かいこたつに足を入れてぬくぬく温まりながら、船頭さんの名調子の解説や舟歌を聴き、国宝松江城の天守閣や石垣、武家屋敷の雪景色を眺めることができます。途中、低い橋の下をくぐる際に屋根が自動で下がり、乗客が一斉に体をかがめるスリリングなアトラクションも大人気です。"
  },
  {
    "q": "出雲大社や出雲空港から松江しんじ湖温泉へのアクセス方法や所要時間は？",
    "a": "出雲空港（出雲縁結び空港）からは、松江駅・松江しんじ湖温泉行きの空港連絡バスが飛行機の発着に合わせて運行されており、約40分で松江しんじ湖温泉駅に直行できます。米子鬼太郎空港からも松江駅行きの連絡バスで約45分です。また、出雲大社から松江しんじ湖温泉へ向かう場合は、一畑電車（ばたでん）を利用するのが風情があってお勧めです。出雲大社前駅から川跡駅で乗り換えて松江しんじ湖温泉駅まで約60分、宍道湖の北岸沿いをのんびり走るローカル列車の旅を楽しめます。車の場合は山陰自動車道を経由して約45分で結ばれています。"
  }
];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://croud-travel.pages.dev/winter-shimane-matsue-shinjiko-onsen-sunset-matsubagani-shijimi-stay#article',
        'isPartOf': {
          '@type': 'WebSite',
          '@id': 'https://croud-travel.pages.dev/#website',
          'name': 'クラドトラベル',
          'url': 'https://croud-travel.pages.dev/'
        },
        'headline': "【11・12月島根・松江しんじ湖温泉の宍道湖夕日絶景と冬の味覚】解禁松葉ガニ＆寒シジミ鍋・しまね和牛会席を愉しむ湖畔レイクビュー名宿5選",
        'description': "11月から12月にかけて、水の都・松江の宍道湖畔に湧く松江しんじ湖温泉は、澄み切った初冬の空に広がる「夕日百選」宍道湖の真紅のサンセットと、11月に解禁を迎えた冬の味覚の王者「松葉ガニ」が揃う最高のハイシーズンを迎えます。湖上を茜色に染める夕景と飛来する冬鳥のシルエット、国宝・松江城の堀川遊覧船「こたつ船」で温まる城下町巡り、77度を超える高温良質なナトリウム・カルシウム硫酸塩泉のレイクビュー露天風呂。旨味あふれる松葉ガニフルコースや、ぷっくり肥えた宍道湖産寒シジミ鍋、極上しまね和牛を堪能する湖畔の厳選名宿5選を徹底解説します。",
        'inLanguage': 'ja',
        'mainEntityOfPage': 'https://croud-travel.pages.dev/winter-shimane-matsue-shinjiko-onsen-sunset-matsubagani-shijimi-stay',
        'datePublished': '2026-09-28T00:00:00+09:00',
        'dateModified': '2026-09-28T00:00:00+09:00',
        'publisher': {
          '@type': 'Organization',
          'name': 'クラドトラベル編集部',
          'url': 'https://croud-travel.pages.dev/'
        }
      },
      {
        '@type': 'TouristDestination',
        '@id': 'https://croud-travel.pages.dev/winter-shimane-matsue-shinjiko-onsen-sunset-matsubagani-shijimi-stay#destination',
        'name': '松江しんじ湖温泉',
        'description': '水の都・松江の宍道湖畔に広がる名湯。11月・12月は夕日百選のサンセットと解禁松葉ガニ、寒シジミ鍋が絶品の季節。',
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 35.4744,
          'longitude': 133.0483
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://croud-travel.pages.dev/winter-shimane-matsue-shinjiko-onsen-sunset-matsubagani-shijimi-stay#faq',
        'mainEntity': faqList.map((f) => ({
          '@type': 'Question',
          'name': f.q,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': f.a
          }
        }))
      },
      {
        '@type': 'ItemList',
        '@id': 'https://croud-travel.pages.dev/winter-shimane-matsue-shinjiko-onsen-sunset-matsubagani-shijimi-stay#hotellist',
        'name': '松江しんじ湖温泉のおすすめ名宿5選',
        'itemListElement': hotels.map((h, idx) => ({
          '@type': 'ListItem',
          'position': idx + 1,
          'name': h.name,
          'url': h.url
        }))
      }
    ]
  };


  return (
    <article className="min-h-screen bg-gradient-to-b from-slate-50 via-teal-50/20 to-slate-50 text-slate-800 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-r from-teal-900 via-sky-900 to-indigo-950 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative max-w-5xl mx-auto space-y-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-teal-200">
            <Link href="/" className="hover:underline hover:text-white transition">ホーム</Link>
            <span>/</span>
            <Link href="/features" className="hover:underline hover:text-white transition">特集一覧</Link>
            <span>/</span>
            <span className="text-white font-medium">島根・松江しんじ湖温泉</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-200 text-xs sm:text-sm font-semibold tracking-wide">
            <Sun className="w-4 h-4 text-amber-300" />
            11月・12月 宍道湖夕日絶景＆解禁松葉ガニ特集
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【11・12月島根・松江しんじ湖温泉】宍道湖夕日絶景と冬の味覚
            <span className="block text-teal-300 text-lg sm:text-2xl mt-3 font-normal">
              解禁松葉ガニ＆寒シジミ鍋・しまね和牛会席を愉しむ湖畔レイクビュー名宿5選
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-4xl">
            11月から12月にかけて、水の都・松江の宍道湖畔に湧く松江しんじ湖温泉は、澄み切った初冬の空に広がる「夕日百選」宍道湖の真紅のサンセットと、11月に解禁を迎えた冬の味覚の王者「松葉ガニ」が揃う最高のハイシーズンを迎えます。湖上を茜色に染める夕景と飛来する冬鳥のシルエット、国宝・松江城の堀川遊覧船「こたつ船」で温まる城下町巡り、77度を超える高温良質なナトリウム・カルシウム硫酸塩泉のレイクビュー露天風呂。旨味あふれる松葉ガニフルコースや、ぷっくり肥えた宍道湖産寒シジミ鍋、極上しまね和牛を堪能する湖畔の厳選名宿5選を徹底解説します。
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs sm:text-sm text-teal-200">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>ベストシーズン: 11月上旬〜12月下旬（松葉ガニ解禁＆夕日）</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Fish className="w-4 h-4 text-teal-300" />
              <span>旬の味覚: 松葉ガニ・宍道湖寒シジミ・しまね和牛</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Sparkles className="w-4 h-4 text-sky-300" />
              <span>泉質: ナトリウム・カルシウム-硫酸塩・塩化物泉（77度美肌高温源泉）</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月島根・松江しんじ湖温泉】解禁松葉ガニ！名宿5選","item":"https://croud-travel.pages.dev/winter-shimane-matsue-shinjiko-onsen-sunset-matsubagani-shijimi-stay"}]}) }}
      />
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-slate-100 space-y-6">
          <div className="inline-flex items-center gap-2 text-teal-800 text-sm font-bold bg-teal-50 px-3 py-1 rounded-full">
            <Landmark className="w-4 h-4" />
            松江しんじ湖温泉の初冬の魅力
          </div>
          <h2 className="text-xl sm:text-3xl font-bold text-slate-900 leading-snug">
            真紅に染まる宍道湖の夕陽と解禁の松葉ガニ。水の都・松江で味わう初冬の極上レイクサイドステイ
          </h2>
          <div className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-4">
            <p>
              島根県の県庁所在地であり、国宝・松江城を中心とした城下町の風情を色濃く残す「水の都」松江。その西側に広がる周囲約45kmの汽水湖・宍道湖の北岸に湧くのが「松江しんじ湖温泉」です。昭和46年に地下1,250mから湧出した源泉は、77度という高温を誇り、メタケイ酸やカルシウム、硫酸イオンを豊富に含む弱アルカリ性の美肌・温まりの湯。湖畔に沿って並ぶ温泉宿からは、日本屈指の広大なレイクビューが一望できます。
            </p>
            <p>
              初冬の11月から12月は、松江しんじ湖温泉を訪れる上で最もおすすめしたい特別な季節です。この時期の夕刻、冷たく澄んだ空気の中で沈みゆく夕陽は、湖面を真紅から茜色、黄金色へと染め上げ、湖上に浮かぶ嫁ヶ島の松の木々や、越冬のためにシベリア方面から飛来した水鳥たちの美しいシルエットをドラマチックに描き出します。「夕陽百選」に輝くその情景は、宿の展望露天風呂や客室のテラスから眺めると、言葉を失うほどの感動をもたらします。
            </p>
            <p>
              そして旅人を虜にするもう一つの主役が、11月6日に本格解禁を迎える冬の味覚の王者「山陰の松葉ガニ（ズワイガニ）」です。日本海の冷たい荒波で身が引き締まった松葉ガニは、繊細な甘みのカニ刺し、香ばしい焼きガニ、濃厚なコクの甲羅味噌焼きなど、一度口にすれば虜になる味わい。さらに冬の寒さで身が肥え旨味が凝縮した「宍道湖の寒シジミ鍋」や、全国和牛能力共進会で最高評価を受けた「しまね和牛」のステーキなど、山陰屈指の美食が揃い踏み。堀川遊覧船の「こたつ船」で温まりながら城下町をめぐり、夜は名湯とカニ会席に酔いしれる、至高の冬旅がここにあります。
            </p>
          </div>
        </section>

        {/* 3 Pillars Section */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              11月・12月の松江しんじ湖温泉を満喫する3つの醍醐味
            </h2>
            <p className="text-sm text-slate-500">
              夕日絶景と解禁カニ、歴史情緒を堪能する冬の休日
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                夕陽百選・宍道湖の真紅のサンセット
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                澄み渡る初冬の夕暮れ、湖面を茜色に染める劇的な夕景。嫁ヶ島のシルエットと飛来する白鳥の群れを望む奇跡のパノラマ。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600">
                <Fish className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                解禁松葉ガニ＆宍道湖寒シジミ鍋
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                11月解禁の活松葉ガニフルコース（刺し・焼き・甲羅味噌）と、旨味凝縮の寒シジミ土鍋ご飯、極上しまね和牛を堪能。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                77度良質高温源泉＆こたつ船巡り
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                冷え性を芯から温める良質な硫酸塩温泉。冬の風物詩・松江城堀川の「こたつ船」で温まりながら巡る風情ある城下町散策。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-10">
          <div className="border-l-4 border-teal-800 pl-4 space-y-1">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-teal-800 uppercase">
              Selected Accommodations
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900">
              島根・松江しんじ湖温泉の湖畔レイクビュー名宿厳選5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              楽天トラベル最新APIから取得した実在データに基づく、確かな評価と魅力を誇る厳選宿泊施設
            </p>
          </div>

          <div className="space-y-12">
            {hotels.map((hotel) => (
              <div 
                key={hotel.id}
                id={'hotel-' + hotel.id}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Hotel Image */}
                  <div className="lg:col-span-5 relative min-h-[280px] sm:min-h-[340px] bg-slate-100 overflow-hidden">
                    <img
                      src={hotel.img}
                      alt={hotel.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-teal-900/90 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md backdrop-blur-xs flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      厳選名宿 第{hotel.id}位
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-slate-950/75 text-white p-3 rounded-xl backdrop-blur-xs text-xs space-y-1">
                      <div className="flex items-center gap-1 text-teal-300 font-semibold">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span className="line-clamp-1">{hotel.access}</span>
                      </div>
                    </div>
                  </div>

                  {/* Hotel Information */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md">
                          {hotel.special}
                        </span>
                        <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span>{hotel.rating}</span>
                          <span className="text-slate-400 text-xs font-normal">({hotel.reviews}件のクチコミ)</span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                        {hotel.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {hotel.story}
                      </p>
                    </div>

                    {/* Room & Gourmet Tips */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                      <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 space-y-1">
                        <span className="font-bold text-teal-800 flex items-center gap-1">
                          <Eye className="w-3.5 h-3.5 text-teal-600" />
                          おすすめの客室
                        </span>
                        <p className="text-slate-600 leading-relaxed">
                          {hotel.roomTip}
                        </p>
                      </div>

                      <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 space-y-1">
                        <span className="font-bold text-teal-800 flex items-center gap-1">
                          <Utensils className="w-3.5 h-3.5 text-teal-600" />
                          おすすめの料理プラン
                        </span>
                        <p className="text-slate-600 leading-relaxed">
                          {hotel.gourmetTip}
                        </p>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2 pt-1">
                      <span className="text-xs font-bold text-slate-700 tracking-wider">
                        この宿の注目ポイント
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {hotel.highlights.map((hl, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-700 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Booking Button */}
                    <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <span className="text-[11px] text-slate-400 block">参考宿泊料金（1名あたり / 税込）</span>
                        <span className="text-xl sm:text-2xl font-black text-slate-900">{hotel.price}</span>
                      </div>

                      <a
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-700 to-teal-800 hover:from-teal-800 hover:to-teal-900 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5"
                      >
                        <span>空室・料金プランを確認</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 1 Night 2 Days Itinerary Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <Compass className="w-6 h-6 text-teal-800" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              初冬の松江しんじ湖温泉を満喫する1泊2日おすすめモデルコース
            </h2>
          </div>
          <div className="space-y-6 text-slate-700">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                <span className="px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">1日目</span>
                国宝松江城と冬の「こたつ船」濠めぐり＆宍道湖夕日露天と松葉ガニ会席
              </div>
              <p className="leading-relaxed text-xs sm:text-sm text-slate-600">
                出雲空港または松江駅からスタートし、まずは現存十二天守の一つである国宝「松江城」へ。天守最上階から冬の宍道湖と城下町を一望した後、城の周囲をめぐる堀川遊覧船「こたつ船」に乗船。温かいこたつに入りながら白壁土塀の雪景色を船上から眺めます。15:30に松江しんじ湖温泉の湖畔宿へチェックイン。16:30頃、島根県立美術館のテラスや宿の展望露天風呂から、夕陽百選に選ばれた宍道湖の真紅のサンセットを満喫。夜は11月に解禁されたばかりの活松葉ガニフルコースやしまね和牛ステーキ、寒シジミ鍋を堪能します。
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                <span className="px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">2日目</span>
                宍道湖朝霧風呂と寒シジミ朝食・小泉八雲旧居散策と出雲大社参拝
              </div>
              <p className="leading-relaxed text-xs sm:text-sm text-slate-600">
                朝は湖面を漂う朝霧と水鳥の羽ばたきを眺めながら77度の美肌源泉で朝風呂。宍道湖産寒シジミの濃厚な味噌汁を味わった後、10:00にチェックアウト。小泉八雲記念館や塩見縄手の武家屋敷通りを散策し、松江の歴史ある和菓子店で抹茶と伝統の銘菓（若草・山川）をいただきます。午後は一畑電車に乗って宍道湖の北岸を走りながら出雲大社へ向かい、初冬の厳かな空気に包まれた神前で参拝を済ませて帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* Winter Gourmet Guide */}
        <section className="bg-gradient-to-br from-teal-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-white space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-700/60">
            <Utensils className="w-6 h-6 text-amber-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              松江しんじ湖温泉の初冬グルメ完全ガイド！松葉ガニと寒シジミ
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-200">
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-2">
              <h3 className="font-bold text-teal-300 text-base flex items-center gap-1.5">
                <Fish className="w-4 h-4 text-amber-300" />
                解禁！山陰の活松葉ガニ
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                11月6日に漁が解禁される山陰の冬の最高峰「松葉ガニ」。甘み際立つカニ刺し、炭火で香ばしく焼き上げる焼きガニ、濃厚な旨味が詰まった甲羅味噌焼きなど、一度味わえば忘れられない冬の味覚を贅沢に味わえます。
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-2">
              <h3 className="font-bold text-teal-300 text-base flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-orange-300" />
                宍道湖産大粒寒シジミ鍋＆土鍋ご飯
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                冷たい湖底で旨味成分コハク酸をたっぷりと蓄えた冬の「寒シジミ」。ぷっくり肥えた身から染み出る滋味深い出汁は、小鍋仕立てや土鍋の炊き込みご飯、味噌汁でいただくと、身体の隅々まで温かい滋養が行き渡ります。
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-2">
              <h3 className="font-bold text-teal-300 text-base flex items-center gap-1.5">
                <Wine className="w-4 h-4 text-rose-300" />
                極上しまね和牛＆松江の茶湯文化
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                全国和牛能力共進会で日本一に輝いた「しまね和牛」のサーロインやフィレステーキ。きめ細やかな霜降りのとろける甘みは格別。食後には松江藩主・不昧公（ふまいこう）が育んだ伝統の茶の湯と四季の上生菓子を堪能。
              </p>
            </div>
          </div>
        </section>

        {/* Access & Travel Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-slate-100 space-y-6">
          <div className="inline-flex items-center gap-2 text-teal-800 text-sm font-bold bg-teal-50 px-3 py-1 rounded-full">
            <Compass className="w-4 h-4" />
            旅の計画ガイド
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            11月・12月の松江しんじ湖温泉 交通アクセス＆散策のアドバイス
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Compass className="w-4 h-4 text-teal-600" />
                アクセス方法と周遊のポイント
              </h3>
              <p>
                飛行機を利用する場合は、出雲縁結び空港より連絡バスで約40分、米子鬼太郎空港より約45分で松江駅・松江しんじ湖温泉へアクセスできます。鉄道の場合はJR山陰本線松江駅よりバス・タクシーで約10〜15分、一畑電車利用なら「松江しんじ湖温泉駅」より徒歩圏内です。
              </p>
              <p>
                出雲大社へは一畑電車で宍道湖沿いの景色を眺めながら約60分で移動可能。松江城や武家屋敷、島根県立美術館へは市内循環バス「ぐるっと松江レイクライン」が便利です。
              </p>
            </div>

            <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-amber-600" />
                初冬の山陰気候・防寒と雨具の準備
              </h3>
              <p>
                12月の松江は最高気温10℃前後、朝晩は2〜5℃まで冷え込み、日本海からの北西風が吹くため体感温度は低くなります。防風ダウンジャケット、マフラー、手袋が必須です。
              </p>
              <p>
                また、山陰地方特有の変わりやすい天気（時雨）に備えて折りたたみ傘を常備しましょう。日没は16:50〜17:00頃と早いため、夕日を見るなら16:20頃には湖畔や展望露天風呂に待機しておくのがベストです。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-slate-100 space-y-6">
          <div className="inline-flex items-center gap-2 text-teal-800 text-sm font-bold bg-teal-50 px-3 py-1 rounded-full">
            <HelpCircle className="w-4 h-4" />
            よくある質問
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            初冬の島根・松江しんじ湖温泉旅行 FAQ
          </h2>
          <div className="space-y-4">
            {faqList.map((faq, fIdx) => (
              <div key={fIdx} className="bg-slate-50 rounded-2xl p-5 border border-slate-100 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2">
                  <span className="text-teal-700 shrink-0 font-black">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Link Section */}
        <section className="bg-gradient-to-br from-teal-900 to-slate-900 text-white rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Map className="w-5 h-5 text-teal-300" />
              あわせて読みたい山陰・中国地方の冬温泉特集
            </h3>
            <p className="text-xs sm:text-sm text-teal-200">
              冬のカニ会席や雪見露天、神話の里を巡る山陰の厳選旅ガイド
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-shimane-tamatsukuri-onsen-kamiarizuki-matsuba-crab-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">島根・玉造温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                玉造温泉の神の湯美肌露天と松葉ガニ・しまね和牛会席宿
              </h4>
              <p className="text-[11px] text-teal-100 line-clamp-2">
                日本最古の美肌温泉と冬の山陰グルメを心ゆくまで堪能。
              </p>
            </Link>

            <Link 
              href="/winter-tottori-kaike-onsen-matsuba-crab-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">鳥取・皆生温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                皆生温泉の日本海オーシャンビュー雪見露天と松葉ガニ宿
              </h4>
              <p className="text-[11px] text-teal-100 line-clamp-2">
                美保湾越しに望む白雪の大山と境港直送の獲れたて松葉ガニ。
              </p>
            </Link>

            <Link 
              href="/winter-tottori-misasa-onsen-matsuba-crab-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">鳥取・三朝温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                三朝温泉の世界屈指ラジウム泉雪見湯治と松葉ガニ宿
              </h4>
              <p className="text-[11px] text-teal-100 line-clamp-2">
                三朝橋の河原露天風呂とホルミシス効果、極上カニ鍋を堪能。
              </p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-shimane-matsue-shinjiko-onsen-sunset-matsubagani-shijimi-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
