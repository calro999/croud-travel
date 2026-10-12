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
  title: '西伊豆堂ヶ島温泉で過ごす冬の旅（11・12月）！伊勢海老！名宿5選',
  description: '11月から12月にかけて、西伊豆・堂ヶ島温泉は空気が澄み渡り、駿河湾の彼方に白雪を戴く雄大な富士山と。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '堂ヶ島温泉 宿泊, 西伊豆 温泉, 堂ヶ島ニュー銀水, 海辺のかくれ湯清流, 堂ヶ島温泉ホテル, 西伊豆クリスタルビューホテル, 西伊豆今宵, 高足ガニ 宿, 金目鯛姿煮, 伊勢海老, 夕陽百選, 11月 12月 西伊豆',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-shizuoka-nishiizu-dogashima-onsen-sunset-fuji-takaashigani-stay/"
  },
  openGraph: {
    title: '西伊豆堂ヶ島温泉で過ごす冬の旅（11・12月）！伊勢海老！名宿5選',
    description: '11月から12月にかけて、西伊豆・堂ヶ島温泉は空気が澄み渡り、駿河湾の彼方に白雪を戴く雄大な富士山と。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-shizuoka-nishiizu-dogashima-onsen-sunset-fuji-takaashigani-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '西伊豆堂ヶ島温泉の初冬夕景とオーシャンビュー名宿'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "静岡・西伊豆堂ヶ島温泉の夕陽百選＆駿河湾越しの雪化粧富士で過ごす冬の旅（11・12月）！名物戸田高足ガニ＆伊勢海老・地金目鯛会席を堪能する絶景オーシャンビュー名宿5選",
    description: "11月から12月にかけて、西伊豆・堂ヶ島温泉は空気が澄み渡り、駿河湾の彼方に白雪を戴く雄大な富士山と、日本屈指の美しさを誇る「夕陽百選」の黄金色の落日が重なる奇跡のベストシーズンを迎えます。奇岩が織りなす「伊豆の松島」堂ヶ島天窓洞や三四郎島の絶景、海辺に湧く肌触りなめらかな硫酸塩温泉。そして初冬に旬の最盛期を迎える駿河湾深海の名物「戸田の高足ガニ（タカアシガニ）」や伊勢海老、脂の乗った地金目鯛の姿煮を味わう絶景オーシャンビュー名宿5選を徹底解説します。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function WinterShizuokaDogashimaPage() {
  const hotels = [
            {
              id: 1,
              name: "堂ヶ島温泉　堂ヶ島ニュー銀水",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8648/8648.jpg",
              rating: 4.38,
              reviews: 3656,
              price: "¥13,750〜",
              access: "・伊豆急、下田駅より路線バスにて６０分（堂ヶ島バスターミナル）　・修善寺より車（駅前に楽天トラベルレンタカー参画店有）",
              special: "8/31～10/31黒毛和牛フェア！オールインクルーシブ◇約80種類のビュッフェとアルコール飲み放題",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8648%2F8648.html",
              story: "堂ヶ島の象徴である名勝・三四郎島と雄大な駿河湾を全客室・ロビーから見下ろす、西伊豆屈指のオーシャンフロント名門ホテル「堂ヶ島温泉 堂ヶ島ニュー銀水」。日本の渚百選にも選ばれたつば沢海岸の断崖に寄り添うように建ち、初冬の澄み渡る夕暮れ時には、海と空を黄金色から茜色へと劇的に染め上げる夕陽のパノラマショーが目の前で繰り広げられます。宿自慢の温泉は、海と一体になるかのような開放感抜群の展望大浴場と露天風呂。波音を耳にしながら肌にしっとり馴染む硫酸塩温泉に浸かれば、日頃の疲れが心地よくほどけていきます。夕食は駿河湾の恵みを贅沢に極めた磯会席。初冬に甘みと旨味が増す伊勢海老のお造りや鬼殻焼き、脂がたっぷり乗った地金目鯛の姿煮、鮑の踊り焼きなど、西伊豆の海の幸が華やかに膳を彩ります。伝統のきめ細やかなおもてなしとともに、特別な記念日や夫婦旅にふさわしい至高のリゾートステイが約束されます。",
              roomTip: "オーシャンフロント南館和室（または展望風呂付き客室）。窓一面に三四郎島と広大な駿河湾が広がり、夕暮れ時にはお部屋にいながら感動的な夕陽のグラデーションを独占できる最高のロケーション。",
              gourmetTip: "「冬の厳選磯会席・銀水極み膳」。近海産活伊勢海老のお造り、地金目鯛の秘伝甘辛姿煮、活鮑の酒蒸し陶板焼き、駿河湾旬魚の五種盛り、地場野菜と金目鯛の潮汁。",
              highlights: [
                "三四郎島と駿河湾を一望する断崖の特等席＆夕陽百選に輝く黄金色の夕景パノラマ",
                "活伊勢海老のお造り＆地金目鯛の秘伝甘辛姿煮と鮑の踊り焼きが彩る銀水極み会席",
                "伝統に裏打ちされた最高峰のおもてなし＆記念日・夫婦旅行に最適な極上ステイ"
              ]
            },
            {
              id: 2,
              name: "堂ヶ島温泉　海辺のかくれ湯　清流",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9387/9387.jpg",
              rating: 3.65,
              reviews: 1288,
              price: "¥8,250〜",
              access: "車：東名高速沼津I.C.より国道136号経由で約70km　／　鉄道：伊豆急行線「下田駅」よりバスにて60分",
              special: "堂ヶ島温泉の入り江に佇む絶景の湯宿。波打ち際の露天風呂は迫力満点。夕陽の絶景に心を揺さぶられます。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9387%2F9387.html",
              story: "波打ち際までわずか数メートルという奇跡のロケーションに建ち、荒波が削り出した奇岩群を間近に望む海辺の隠れ宿「堂ヶ島温泉 海辺のかくれ湯 清流」。館内に足を踏み入れた瞬間から心地よい潮騒が響き、海に浮かんでいるかのような非日常へと誘われます。この宿の最大の魅力は、海面とほぼ同じ目線で潮の満ち引きや波しぶきを体感できる野趣あふれる海辺露天風呂。初冬の凛とした海風を感じながら、源泉掛け流しのなめらかな湯に身を委ね、水平線へと沈みゆく夕陽を眺める湯浴みは言葉を失うほどの贅沢です。夕食は西伊豆の漁港から直接仕入れる新鮮な海の幸が主役。近隣の戸田（へだ）港から届く名物の深海甲殻類や、冬の荒波で身が引き締まった地魚の姿造り、濃厚な旨味の金目鯛しゃぶしゃぶなど、獲れたての鮮度をそのまま生かした豪快な漁師風会席を堪能できます。",
              roomTip: "波打ち際オーシャンビュー和洋室。寄せては返す波音をBGMに、刻一刻と表情を変える駿河湾の海景と夕焼け空を心ゆくまで堪能できるプライベート空間。",
              gourmetTip: "「初冬の海辺漁火会席」。駿河湾直送地魚の姿造り盛り合わせ、名物地金目鯛のしゃぶしゃぶ鍋、伊勢海老の陶板焼き、サザエのつぼ焼き、季節の釜飯。",
              highlights: [
                "海まで徒歩0分の海辺ロケーション＆波打ち際すれすれの野趣あふれるかくれ湯露天",
                "戸田港直送の深海魚や地魚姿造り＆ふっくら脂が乗った地金目鯛のしゃぶしゃぶ鍋",
                "寄せては返す波音に包まれる至福の湯浴み＆喧騒を離れた海辺の静寂なプライベート"
              ]
            },
            {
              id: 3,
              name: "堂ヶ島唯一の自家源泉掛流宿　堂ヶ島温泉ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8784/8784.jpg",
              rating: 3.90,
              reviews: 1652,
              price: "¥8,300〜",
              access: "JR特急踊り子号で伊豆急下田駅下車　路線バスで約60分",
              special: "東海バスフリーきっぷまたは西伊豆特急・快速バスの乗車券をご提示で2500円キャッシュバック♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8784%2F8784.html",
              story: "堂ヶ島温泉発祥の宿として昭和の文豪や皇族にも愛されてきた、地域で唯一の自家源泉を保有する老舗温泉旅館「堂ヶ島唯一の自家源泉掛流宿 堂ヶ島温泉ホテル。」。宿の敷地内から自噴する良質な源泉は、湯量豊富な「化粧の湯」として親しまれ、一切の加水・循環を行わない100%源泉掛け流し。肌を優しく包み込むアルカリ性単純温泉は、湯上がりの肌がつるつるになると評判です。海辺に佇む露天風呂からは、初冬の澄んだ空気の中に浮かぶ三四郎島と、干潮時に島へと道が現れる神秘的な「トンボロ現象」を眺めることができます。料理は、伊豆の伝統を大切にした素朴で力強い和会席。甘辛いタレでじっくり煮込んだ金目鯛の煮付けや、駿河湾の獲れたて鮮魚のお造り、静岡県産豚の陶板焼きなど、どこか懐かしく温もりのある味わいが旅人の身体と心を芯から満たします。",
              roomTip: "本館海側和室。目の前に堂ヶ島の奇岩と紺碧の海が広がり、開湯当時の面影を残す落ち着いた和の風情の中で静かに時を過ごせるお部屋。",
              gourmetTip: "「自家源泉の宿・初冬の味覚会席」。伝統のタレで炊き上げる金目鯛の姿煮付け、駿河湾産地魚のお造り三種、伊豆名産生わさびでいただく旬魚のしゃぶしゃぶ、季節の炊き込みご飯。",
              highlights: [
                "堂ヶ島唯一の自家源泉100%掛け流し「化粧の湯」＆三四郎島のトンボロ現象を望む絶景",
                "創業以来守り続ける秘伝ダレの金目鯛煮付け＆生わさびでいただく駿河湾地魚会席",
                "昭和の文豪も愛した歴史ある名門宿＆加水なし純度100%美肌温泉で芯から温まる"
              ]
            },
            {
              id: 4,
              name: "宇久須温泉　西伊豆クリスタルビューホテル（伊東園ホテルズ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/178912/178912.jpg",
              rating: 3.88,
              reviews: 648,
              price: "¥7,898〜",
              access: "修善寺駅よりお車にて約７５分",
              special: "クリスタルビーチを眼下に望む温泉リゾート。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F178912%2F178912.html",
              story: "堂ヶ島からほど近い宇久須（うぐす）の海岸沿いに位置し、夕陽に染まる駿河湾のパノラマを一望できるヨーロピアンリゾート「宇久須温泉 西伊豆クリスタルビューホテル。」。ホテルはアジアンテイストとヨーロピアンクラシックが融合した洗練された空間で、広々としたロビーやラウンジの全面ガラス窓からは黄金色の西伊豆のサンセットが一望できます。温泉は、開放感あふれる檜造りの大浴場「クリスタル風呂」や、巨石を配した野趣あふれる庭園露天風呂など多彩。初冬の冷たい風を心地よく受けながら、豊かな効能を誇る天然温泉を満喫できます。食事は伊豆の味覚をカジュアルかつ贅沢に楽しめるバイキングスタイル、または旬の味覚を盛り込んだ特選和食会席。地魚の刺身や金目鯛料理、季節の天ぷらなどを地酒や生ビールとともに心ゆくまで味わえるコストパフォーマンスの高さも大きな魅力です。",
              roomTip: "オーシャンビューデラックスツイン。ゆったりとした広さのベッドとバルコニーが備わり、初冬の静かな海と夕景を眺めながら優雅なリゾート気分に浸れるお部屋。",
              gourmetTip: "「初冬の伊豆味覚バイキング＆別注金目鯛姿煮。」。新鮮な地魚の握り寿司や刺身、揚げたて天ぷら、伊豆郷土料理に加えて、ふっくら脂が乗った特選金目鯛の煮付けを堪能。",
              highlights: [
                "ヨーロピアンリゾートの優雅な佇まい＆広々とした檜クリスタル大浴場と庭園露天",
                "地魚刺身や揚げたて天ぷらバイキング＆別注の特選金目鯛姿煮とアルコール飲み放題",
                "ファミリーからグループ旅行まで安心＆堂ヶ島・恋人岬観光の拠点に抜群の利便性"
              ]
            },
            {
              id: 5,
              name: "和モダンで愉しむ西伊豆ダイニング　西伊豆　今宵",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/147768/147768.jpg",
              rating: 4.40,
              reviews: 552,
              price: "¥9,240〜",
              access: "お車：東名沼津IC～戸田（約90分）、電車：踊り子号：東京～修善寺～戸田港（約2時間） ※戸田港から送迎可",
              special: "【KOYOI流のおもてなし】月替わりの繊細な創作会席と夕陽の絶景。夕暮れ時ラウンジでワインサービス",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147768%2F147768.html",
              story: "西伊豆の海辺高台に佇み、大人の隠れ家として静謐な時間を約束するスタイリッシュな和モダン旅館「和モダンで愉しむ西伊豆ダイニング 西伊豆 今宵。」。モダンなインテリアと間接照明が心地よい館内は、喧騒から切り離された大人のためのリラクゼーション空間です。最上階の展望ラウンジからは、初冬の空に広がる西伊豆の雄大な夕景と、遠く駿河湾の向こうに連なる南アルプスの山影まで見渡せます。大浴場と露天風呂には効能豊かな塩化物温泉が注がれ、湯冷めしにくく冬の身体をポカポカに保ちます。この宿の真骨頂は、オープンキッチンを備えたダイニングでいただく創作和食コース。伊豆のブランド牛や駿河湾の新鮮な海の幸を目の前で焼き上げる鉄板焼き、金目鯛や伊勢海老を独創的なアレンジで仕立てた料理の数々は、五感を刺激する至福のディナータイムを演出します。",
              roomTip: "露天風呂付き和モダン客室。プライベートなテラスに設えられた湯船から海と夕暮れを眺め、好きな時に好きなだけ名湯に浸かる極上のプライベートステイ。",
              gourmetTip: "「今宵特選・西伊豆創作ダイニングコース」。特選国産牛の鉄板ステーキ、伊勢海老と地魚の創作カルパッチョ仕立て、地金目鯛のポワレ・伊豆山葵ソース、彩り冬野菜の蒸し物。",
              highlights: [
                "海辺高台の大人の和モダン隠れ家宿＆最上階展望ラウンジから望む南アルプスと夕景",
                "オープンキッチン鉄板焼きステーキ＆五感で楽しむ西伊豆創作和食フルコース",
                "露天風呂付き客室で過ごす贅沢な大人の休日＆洗練されたバーラウンジで味わう地酒"
              ]
            }
  ];

  const faqList = [
  {
    "q": "11月・12月の西伊豆・堂ヶ島温泉の夕陽や富士山の見頃時間・おすすめ絶景スポットは？",
    "a": "西伊豆は「日本の夕陽百選」に選定されている日本屈指の夕景の名所です。11月〜12月は空気が一段と澄み渡るため、水平線に沈む夕陽が年間で最も美しく輝きます。日の入り時間は11月上旬で16:50頃、12月下旬で16:35頃となります。日没の約30分前から空が茜色から紫色へと移り変わる「マジックアワー」が見どころです。おすすめスポットは、堂ヶ島天窓洞周辺の遊歩道、奇岩と富士山が望める「黄金崎」、富士山と駿河湾を海越しに一望する「大瀬崎」「煌めきの丘」、そして恋人の聖地として名高い「恋人岬」です。天候が良ければ、雪を戴いた白銀の富士山が夕陽に照らされて赤く染まる「紅富士」を海越しに望むことができます。"
  },
  {
    "q": "11月・12月の堂ヶ島・西伊豆の気候や気温、おすすめの服装や車の冬用タイヤの必要性は？",
    "a": "西伊豆・堂ヶ島は黒潮の影響を受けるため、日中の最高気温は11月で15〜18℃、12月でも12〜14℃前後と、東日本の中では比較的温暖です。ただし、海沿いは西風（季節風）が強く吹き付ける日が多く、体感温度は数字以上に低く感じられます。風を通さない防風性のあるダウンジャケットやウィンドブレーカー、マフラーが必須です。また、車でアクセスする場合、沿岸部の国道136号線は凍結の心配はほぼありませんが、内陸の天城峠（国道414号）や修善寺・船原峠（国道136号バイパス）、西伊豆スカイラインなどの山間部を経由する場合は、12月中旬以降、朝晩を中心に路面凍結や降雪の可能性があります。山越えルートを通る場合は、必ずスタッドレスタイヤの装着またはチェーン携行を推奨します。"
  },
  {
    "q": "初冬の西伊豆で旬を迎える名物グルメは何ですか？戸田の高足ガニや金目鯛の特徴は？",
    "a": "西伊豆の冬の味覚を代表するのが、世界最大の甲殻類として知られる「高足ガニ（タカアシガニ）」です。水深500mを超える日本一深い駿河湾に面した戸田（へだ）港が本場であり、9月から5月にかけて漁が行われ、特に11月〜12月は身がぎっしり詰まり、濃厚なカニミソが格別の美味しさとなります。蒸しガニやカニしゃぶで味わうのが醍醐味です。また、冬に向けて脂の乗りが最高潮を迎える「地金目鯛」のこってりとした甘辛姿煮やしゃぶしゃぶ、秋に解禁されたばかりのぷりぷりとした「伊勢海老」のお造りや鬼殻焼き、西伊豆伝統の保存食「潮かつお（塩鰹）」を使った郷土料理など、駿河湾の豊穣な海の幸が目白押しです。"
  },
  {
    "q": "堂ヶ島名物の「天窓洞」遊覧船クルーズや「三四郎島のトンボロ現象」は冬も楽しめますか？",
    "a": "「堂ヶ島洞くつめぐり遊覧船」は年中無休で運航しており、天然記念物の「天窓洞」の天井から差し込む光が海面をエメラルドグリーンに照らす神秘的な光景を楽しめます。冬は海水の透明度が年間で最も高くなるため、洞窟内の水の色が一層鮮やかに輝きます。ただし、西風が強く波が高い日は欠航となる場合があるため、当日の朝に運航状況を公式サイト等で確認するのが確実です。また、干潮時に海の中から瀬が現れて三四郎島まで歩いて渡れる「トンボロ現象」は、主に春から秋の大潮の干潮時に見られますが、冬場でも潮位が低くなる日の昼間や早朝に浅瀬が現れることがあります。宿のフロントで当日の潮汐表を確認してみましょう。"
  },
  {
    "q": "東京・名古屋方面から堂ヶ島温泉への主なアクセスルートと所要時間は？",
    "a": "車を利用する場合、東京方面からは東名高速・新東名高速を経由し、長泉沼津ICから伊豆縦貫自動車道、修善寺道路を経由して国道136号線を南下、約2時間半〜3時間で到着します。名古屋方面からは新東名・新富士ICまたは沼津ICから同様のルートとなります。公共交通機関を利用する場合は、JR東海道新幹線で熱海駅または三島駅へ。三島駅から伊豆箱根鉄道駿豆線で終点・修善寺駅まで約35分、修善寺駅前から東海バス（松崎・堂ヶ島行き）で約1時間30分です。また、JR伊東線・伊豆急行線で伊豆急下田駅まで行き、下田駅前から東海バス（堂ヶ島行き）に乗車して約50分というルートも景観が美しくおすすめです。"
  }
];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://croud-travel.pages.dev/winter-shizuoka-nishiizu-dogashima-onsen-sunset-fuji-takaashigani-stay#article',
        'isPartOf': {
          '@type': 'WebSite',
          '@id': 'https://croud-travel.pages.dev/#website',
          'name': 'クラドトラベル',
          'url': 'https://croud-travel.pages.dev/'
        },
        'headline': "【11・12月静岡・西伊豆堂ヶ島温泉の夕陽百選＆駿河湾越しの雪化粧富士】名物戸田高足ガニ＆伊勢海老・地金目鯛会席を堪能する絶景オーシャンビュー名宿5選",
        'description': "11月から12月にかけて、西伊豆・堂ヶ島温泉は空気が澄み渡り、駿河湾の彼方に白雪を戴く雄大な富士山と、日本屈指の美しさを誇る「夕陽百選」の黄金色の落日が重なる奇跡のベストシーズンを迎えます。奇岩が織りなす「伊豆の松島」堂ヶ島天窓洞や三四郎島の絶景、海辺に湧く肌触りなめらかな硫酸塩温泉。そして初冬に旬の最盛期を迎える駿河湾深海の名物「戸田の高足ガニ（タカアシガニ）」や伊勢海老、脂の乗った地金目鯛の姿煮を味わう絶景オーシャンビュー名宿5選を徹底解説します。",
        'inLanguage': 'ja',
        'mainEntityOfPage': 'https://croud-travel.pages.dev/winter-shizuoka-nishiizu-dogashima-onsen-sunset-fuji-takaashigani-stay',
        'datePublished': 'T00:00:00+09:00',
        'dateModified': 'T00:00:00+09:00',
        'publisher': {
          '@type': 'Organization',
          'name': 'クラドトラベル編集部',
          'url': 'https://croud-travel.pages.dev/'
        }
      },
      {
        '@type': 'TouristDestination',
        '@id': 'https://croud-travel.pages.dev/winter-shizuoka-nishiizu-dogashima-onsen-sunset-fuji-takaashigani-stay#destination',
        'name': '西伊豆堂ヶ島温泉郷',
        'description': '駿河湾に面した奇岩美と夕陽百選の名勝地。11月から12月は雪化粧の富士山と黄金色の落日が重なる絶景シーズン。',
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 34.7766,
          'longitude': 138.7758
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://croud-travel.pages.dev/winter-shizuoka-nishiizu-dogashima-onsen-sunset-fuji-takaashigani-stay#faq',
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
        '@id': 'https://croud-travel.pages.dev/winter-shizuoka-nishiizu-dogashima-onsen-sunset-fuji-takaashigani-stay#hotellist',
        'name': '西伊豆堂ヶ島温泉のおすすめ名宿5選',
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
            <span className="text-white font-medium">静岡・西伊豆堂ヶ島温泉</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-200 text-xs sm:text-sm font-semibold tracking-wide">
            <Sun className="w-4 h-4 text-amber-300" />
            11月・12月 夕陽百選＆駿河湾深海グルメ特集
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">静岡・西伊豆堂ヶ島温泉で過ごす冬の旅（11・12月）！夕陽百選＆駿河湾越しの雪化粧富士 <span className="block text-teal-300 text-lg sm:text-2xl mt-3 font-normal"> 名物戸田高足ガニ＆伊勢海老・地金目鯛会席を堪能する絶景オーシャンビュー名宿5選 </span></h1>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-4xl">
            11月から12月にかけて、西伊豆・堂ヶ島温泉は空気が澄み渡り、駿河湾の彼方に白雪を戴く雄大な富士山と、日本屈指の美しさを誇る「夕陽百選」の黄金色の落日が重なる奇跡のベストシーズンを迎えます。奇岩が織りなす「伊豆の松島」堂ヶ島天窓洞や三四郎島の絶景、海辺に湧く肌触りなめらかな硫酸塩温泉。そして初冬に旬の最盛期を迎える駿河湾深海の名物「戸田の高足ガニ（タカアシガニ）」や伊勢海老、脂の乗った地金目鯛の姿煮を味わう絶景オーシャンビュー名宿5選を徹底解説します。
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs sm:text-sm text-teal-200">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>ベストシーズン: 11月上旬〜12月下旬</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Fish className="w-4 h-4 text-teal-300" />
              <span>旬の味覚: 戸田高足ガニ・地金目鯛・活伊勢海老</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Sparkles className="w-4 h-4 text-sky-300" />
              <span>泉質: カルシウム・ナトリウム-硫酸塩温泉（美肌の湯）</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月西伊豆堂ヶ島温泉】伊勢海老！名宿5選","item":"https://croud-travel.pages.dev/winter-shizuoka-nishiizu-dogashima-onsen-sunset-fuji-takaashigani-stay"}]}) }}
      />
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-slate-100 space-y-6">
          <div className="inline-flex items-center gap-2 text-teal-800 text-sm font-bold bg-teal-50 px-3 py-1 rounded-full">
            <Landmark className="w-4 h-4" />
            西伊豆の初冬の魅力
          </div>
          <h2 className="text-xl sm:text-3xl font-bold text-slate-900 leading-snug">
            茜色に染まる黄金の海と雪化粧富士。初冬の西伊豆堂ヶ島温泉が旅人を惹きつける理由
          </h2>
          <div className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-4">
            <p>
              伊豆半島の西海岸、リアス海岸が創り出す無数の島々と海食崖が織りなす「堂ヶ島（どうがしま）」は、古くから「伊豆の松島」と称えられてきた風光明媚な景勝地です。春や夏の賑わいが落ち着きを見せる11月から12月にかけて、この地は1年で最もドラマチックな美しさに包まれます。晩秋から初冬にかけて大陸から吹き渡る冷涼な季節風によって大気中の水蒸気が払われ、駿河湾の水平線はどこまでもクリアに見渡せるようになります。
            </p>
            <p>
              この時期の堂ヶ島を訪れる最大の歓びは、夕刻の劇的なサンセットです。「日本の夕陽百選」にも選定されたその光景は、青い空と海が刻一刻とオレンジ、真紅、深い紫色へとグラデーションを描きながら沈みゆく天体ショー。天候に恵まれた日には、駿河湾越しに冠雪した富士山が夕陽を浴びて淡い紅白色に染まる「紅富士」の奇跡的な美しさを同時に拝むことができます。海辺の露天風呂に浸かりながら、波音と夕陽のグラデーションに身を委ねる時間は、まさに日常の煩わしさを忘れさせる特別な癒やしです。
            </p>
            <p>
              さらに、初冬は駿河湾の海の恵みが最も豊かに実を結ぶ美食の季節でもあります。水深が急深な駿河湾を拠点とする戸田港からは、冬の深海から水揚げされる世界最大の蟹「戸田の高足ガニ（タカアシガニ）」が届き、ぎっしり詰まった上品な甘みの身と濃厚なカニミソが食通を唸らせます。さらに秋に解禁されたぷりぷりの伊勢海老、冬に向けて丸々と脂を蓄えた「地金目鯛」のこってりとした甘辛姿煮など、西伊豆ならではの贅沢な海鮮料理が旅の夜を華やかに彩ります。
            </p>
          </div>
        </section>

        {/* 3 Pillars Section */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              11月・12月の西伊豆堂ヶ島温泉を満喫する3つの醍醐味
            </h2>
            <p className="text-sm text-slate-500">
              冬の訪れとともに輝きを増す、堂ヶ島だけの贅沢な体験
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                夕陽百選の黄金落日と雪化粧富士
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                澄み切った初冬の空に広がる茜色のサンセット。黄金崎や恋人岬、堂ヶ島遊歩道から望む海越しの白雪の富士山は息を呑む絶景です。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600">
                <Fish className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                戸田高足ガニ＆地金目鯛の冬美味
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                駿河湾深海の名物「戸田の高足ガニ」の蒸しガニやカニしゃぶ、脂が乗った地金目鯛の秘伝姿煮、伊勢海老の活造りを地酒とともに満喫。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600">
                <Waves className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                海と一体になる波打ち際露天風呂
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                カルシウム・ナトリウム硫酸塩泉のなめらかな美肌湯。冷たい海風を感じながら温かい湯船に浸かり、潮騒を聴く至福の湯浴み。
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
              西伊豆堂ヶ島温泉の絶景オーシャンビュー名宿厳選5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              楽天トラベルの最新APIから取得した実在データに基づく、確かな評価と魅力を誇る厳選宿泊施設
            </p>
          </div>

          <div className="space-y-12">
            {hotels.map((hotel) => (
              <div 
                key={hotel.id}
                id={'hotel-' + hotel.id}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="flex flex-col">
                  {/* Hotel Image */}
                  <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
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
                  <div className="w-full p-5 sm:p-7 flex flex-col justify-between space-y-4">
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
              初冬の西伊豆堂ヶ島を満喫する1泊2日おすすめモデルコース
            </h2>
          </div>
          <div className="space-y-6 text-slate-700">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                <span className="px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">1日目</span>
                沼津・修善寺から西伊豆海岸ドライブ＆黄金崎・堂ヶ島夕陽露天
              </div>
              <p className="leading-relaxed text-xs sm:text-sm text-slate-600">
                午前中は長泉沼津ICから伊豆縦貫道を経由して修善寺を抜け、西伊豆・土肥温泉方面へドライブ。海沿いに出たら「黄金崎」に立ち寄り、初冬の澄んだ海風を感じながら駿河湾越しに冠雪した富士山を眺望します。午後は恋人岬を巡り、15:00過ぎに堂ヶ島温泉の宿へチェックイン。16:30頃の日没に合わせて展望ラウンジや客室テラス、または海辺露天風呂に移動し、水平線に沈みゆく黄金色の夕陽と空の紫紅のグラデーションを満喫。夜は戸田港直送の高足ガニや地金目鯛の姿煮、伊勢海老会席を心ゆくまで堪能します。
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                <span className="px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">2日目</span>
                朝風呂＆天窓洞遊覧船クルーズ・松崎なまこ壁通り歴史散策
              </div>
              <p className="leading-relaxed text-xs sm:text-sm text-slate-600">
                朝は潮騒を聴きながら硫酸塩温泉の朝露天風呂で爽快にリフレッシュ。金目鯛の干物や地場産新米が並ぶ和朝食を味わった後、10:00にチェックアウト。宿の目の前から出航する「堂ヶ島洞くつめぐり遊覧船」に乗船し、冬の透明度抜群の海と天窓洞から差し込む神秘的なエメラルドの光を鑑賞。続いて車で約10分の松崎町へ移動し、明治期の商家建築が残る「なまこ壁通り」を散策。名物の「しおかつおうどん」や桜葉スイーツを味わい、充実の思い出とともに帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* Winter Gourmet Guide */}
        <section className="bg-gradient-to-br from-teal-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-white space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-700/60">
            <Utensils className="w-6 h-6 text-amber-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              西伊豆・堂ヶ島の初冬グルメ完全ガイド！深海甲殻類と地金目鯛
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-200">
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-2">
              <h3 className="font-bold text-teal-300 text-base flex items-center gap-1.5">
                <Fish className="w-4 h-4 text-amber-300" />
                戸田の高足ガニ（タカアシガニ）
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                駿河湾の深海500mから水揚げされる世界最大の蟹。11月〜12月は身入りが良く、ふっくらとした肉厚の脚肉と濃厚なカニミソが格別。丸ごと豪快に蒸し上げた「蒸しガニ」やカニしゃぶで至福の旨味を味わえます。
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-2">
              <h3 className="font-bold text-teal-300 text-base flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-orange-300" />
                極上地金目鯛の秘伝甘辛姿煮
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                初冬の冷たい海水で身が引き締まり、脂乗りが年間最高潮を迎える「地金目鯛」。醤油・みりん・地酒でこってりと炊き上げた煮付けは、ふっくらとした白身に濃厚なタレが絡み、ご飯もお酒も止まらない西伊豆の王道名物です。
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-2">
              <h3 className="font-bold text-teal-300 text-base flex items-center gap-1.5">
                <Wine className="w-4 h-4 text-rose-300" />
                伝統の潮かつお＆伊豆生わさび
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                西伊豆町田子に伝わる伝統保存食「潮かつお（塩鰹）」を刻んでふりかけた名物「しおかつおうどん」は香ばしい出汁の風味が絶品。天城山麓の清流が育んだ本生わさびとともにいただく新鮮な地魚刺身も欠かせません。
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
            11月・12月の西伊豆堂ヶ島温泉 交通アクセス＆散策のアドバイス
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Compass className="w-4 h-4 text-teal-600" />
                アクセス方法と峠道の注意点
              </h3>
              <p>
                東京方面からは東名高速・新東名高速の長泉沼津ICより伊豆縦貫道・修善寺道路を経由して国道136号線を南下。所要時間は約2時間半〜3時間です。沿岸部は降雪が極めて稀ですが、内陸の天城峠や船原峠などの山間部を経由する場合は、12月中旬以降の夜間や早朝に路面凍結の可能性があります。冬用タイヤの装着を推奨します。
              </p>
              <p>
                公共交通機関の場合は、三島駅から伊豆箱根鉄道で修善寺駅へ向かい、修善寺駅前より東海バス（松崎・堂ヶ島行き）で約90分。または伊豆急下田駅より東海バスで約50分です。
              </p>
            </div>

            <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-amber-600" />
                気候と防寒対策・夕暮れ散策
              </h3>
              <p>
                西伊豆は黒潮の恩恵を受けるため、日中の最高気温は11月で15〜18℃、12月でも12〜14℃と比較的過ごしやすい陽気です。ただし、海沿い特有の西風（季節風）が吹くと体感温度がぐっと下がるため、風を通さない防風ダウンやウィンドブレーカー、手袋、ストールが重宝します。
              </p>
              <p>
                夕陽の沈む時間は16:30〜17:00頃と早いため、チェックインは15:30頃までに済ませ、宿のラウンジや露天風呂、または海辺の遊歩道で夕暮れの空の移ろいをゆったり待つスケジュールがベストです。
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
            初冬の西伊豆堂ヶ島温泉旅行 FAQ
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
              あわせて読みたい全国の冬温泉・旬の味覚特集
            </h3>
            <p className="text-xs sm:text-sm text-teal-200">
              冬の味覚や雪見露天、イルミネーションを満喫する全国各地の厳選旅ガイド
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-shizuoka-atagawa-onsen-ocean-sunrise-kinmedai-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">東伊豆・熱川</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                熱川温泉の湯けむり櫓と水平線日の出露天＆地金目鯛姿煮宿
              </h4>
              <p className="text-[11px] text-teal-100 line-clamp-2">
                100度の高温泉櫓が立ち上る温泉情緒と相模灘オーシャンビューを満喫。
              </p>
            </Link>

            <Link 
              href="/winter-shizuoka-shimoda-onsen-kinmedai-ocean-view-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">南伊豆・下田</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                下田温泉の水平線オーシャンビュー露天と極上金目鯛会席宿
              </h4>
              <p className="text-[11px] text-teal-100 line-clamp-2">
                爪木崎の水仙まつりと黒船来航の歴史ロマン、極上金目鯛を味わう。
              </p>
            </Link>

            <Link 
              href="/winter-kanagawa-hakone-fuji-view-onsen-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">神奈川・箱根</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                箱根温泉の白雪富士ビュー露天風呂と伝統会席宿
              </h4>
              <p className="text-[11px] text-teal-100 line-clamp-2">
                澄んだ初冬の芦ノ湖と雪化粧富士を望む天下の名湯リゾートステイ。
              </p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-shizuoka-nishiizu-dogashima-onsen-sunset-fuji-takaashigani-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
