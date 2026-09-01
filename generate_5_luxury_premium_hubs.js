const fs = require('fs');
const path = require('path');

const luxuryConfigs = [
  {
    slug: 'japan-luxury-private-pool-suite-villa-stay',
    badge: 'PRIVATE POOL VILLA GUIDE',
    title: '【客室プライベートプール付きオールスイートヴィラ】沖縄・奄美・宮古・関東 完全ガイド',
    metaDesc: '誰にも邪魔されない完全プライベートな極上バカンス！客室専用温水プール付きオールスイートヴィラ完全特化！沖縄本島・宮古島・石垣島・奄美大島、関東近郊のインフィニティプール付きラグジュアリーヴィラを徹底解説。',
    heroDesc: 'リビングの扉を開ければ、そこは自分たちだけの青く輝くプライベートプール。沖縄・宮古島のエメラルドグリーンの海を望むインフィニティプールや、温水対応で一年中泳げる贅沢。バトラーサービスとシェフ出張ディナーで過ごす最高峰の休日へ。',
    categoryKey: 'japan-luxury-private-pool-suite-villa-stay',
    areaGuides: [
      {
        key: 'okinawa_miyakojima_pool_villa',
        title: '1. 宮古島＆沖縄本島・宮古ブルーを独占する最高峰プールヴィラ',
        timing: '通年（温水プール完備ヴィラなら冬期でも快適に遊泳可能）',
        desc: '東洋一美しい海を望む宮古島や恩納村の海岸線に佇むオールスイートヴィラ。リビングと直結した大型プライベートプール。ガゼボでのシャンパンタイム、専属バトラーによる手厚いおもてなし。夕暮れ時のサンセットプライベートBBQ。',
        spots: 'ザ・シギラ、フェリスヴィラスイート宮古島・上野、ハレクラニ沖縄（クリフヴィラ）、ジ・ウザテラス ビーチクラブヴィラズ',
        access: '宮古空港または那覇空港より送迎車・レンタカー。',
        tip: 'プライベートプール付きヴィラでは、夜間に水中ライトアップを点灯させ、満天の星空を眺めながらナイトプールを楽しむのが最高の贅沢です。'
      },
      {
        key: 'ishigaki_amami_secluded_villa',
        title: '2. 石垣島＆奄美大島・手つかずの亜熱帯大自然に抱かれる秘境ヴィラ',
        timing: '通年（石垣島川平湾・奄美クレーターの碧い海）',
        desc: '国立公園に隣接する手つかずの原生林と白砂ビーチの境界に建つ隠れ家ヴィラ。テラスから直接砂浜へ降りられるオンザビーチ設計。奄美大島の大島紬や伝統建築の意匠を取り入れたモダンインテリア。波音だけが響く静寂の極致。',
        spots: 'JUSANDI（ユサンディ石垣島）、Miru Amami、伝泊 The Beachfront MIJORA',
        access: '新石垣空港または奄美空港よりレンタカー・送迎車。',
        tip: '奄美大島の「伝泊 The Beachfront MIJORA」では、ガラス一面に広がる穏やかな海を眺めながら、島のハーブを使ったアロマバスや出張シマ料理を堪能できます。'
      },
      {
        key: 'kanto_shizuoka_heated_pool_villa',
        title: '3. 関東近郊・千葉房総＆静岡伊豆（温泉×温水プールで一年中愉しむ別邸）',
        timing: '通年（都心から車で90〜120分の好アクセス）',
        desc: '千葉・館山や南房総、静岡・伊豆高原に広がるプライベートヴィラ。客室専用の天然温泉露天風呂と温水プライベートプールが一体となった至高の空間。愛犬と同伴可能なドッグラン付きヴィラや、炭火BBQグリル完備。',
        spots: 'THE CHIKURA COAST villa、オーベルジュ オー・ミラドー（箱根）、伊豆高原プライベートヴィラ',
        access: '都心より車で約90〜120分。',
        tip: '温泉付き温水プールヴィラなら、温水プールでしっかり泳いだ後にそのまま源泉かけ流しの温泉露天風呂で身体を温める極上のスパ体験が叶います。'
      }
    ]
  },
  {
    slug: 'japan-traditional-kominka-heritage-luxury-stay',
    badge: 'KOMINKA LUXURY GUIDE',
    title: '【一棟貸し古民家・登録有形文化財宿】築100年以上の歴史建築＆モダンラグジュアリー 完全ガイド',
    metaDesc: '日本の美意識と現代の快適性が調和する最高峰の隠れ家！一棟貸し古民家・登録有形文化財リノベーション宿完全特化！京都町家、信州・飛騨の豪農屋敷、瀬戸内・出雲の蔵サウナ付き邸宅、出張料理人付き古民家宿を徹底解説。',
    heroDesc: '太い梁、黒光りする柱、土壁と坪庭。百年の時を紡ぐ日本建築の美しさをそのままに、最高級ベッドや檜風呂、薪ストーブを備えた「一棟貸し古民家ラグジュアリー宿」。誰にも邪魔されないプライベート空間で、本物の和の贅沢を味わう旅へ。',
    categoryKey: 'japan-traditional-kominka-heritage-luxury-stay',
    areaGuides: [
      {
        key: 'kyoto_machiya_heritage_luxury',
        title: '1. 京都・坪庭と数寄屋建築を独占する一棟貸しプレミアム町家',
        timing: '通年（桜の春・新緑の初夏・紅葉の秋・静寂の雪景色）',
        desc: '祇園や東山、西陣の路地奥に佇む伝統町家。職人の手による漆喰壁と網代天井。手入れの行き届いた坪庭を眺める高野槇風呂。ミシュラン星付き料亭からの仕出し会席や、専属シェフが目の前の町家キッチンで腕を振るう出張割烹。',
        spots: '祇園・宮川町の町家宿、nazuna 京都 椿通、Nazuna 京都 二条城、町家レジデンスイン京都',
        access: 'JR京都駅よりタクシー約10〜15分。',
        tip: '一棟貸し町家では、早朝の観光客がいない静寂な京都の路地を散策し、老舗茶舗の抹茶を坪庭の前で点てていただく優雅な時間を過ごせます。'
      },
      {
        key: 'shinshu_hida_mansion_kominka',
        title: '2. 信州・飛騨・東北・築200年の豪農屋敷＆蔵サウナ付き古民家ヴィラ',
        timing: '通年（薪ストーブの炎が揺れる冬期は格別の情緒）',
        desc: '豪雪地帯の巨大なケヤキの梁を活かした重厚な古民家。かつて米蔵や酒蔵として使われていた蔵を本格フィンランドサウナへ改装。囲炉裏を囲んで味わうジビエ鍋や信州牛の炭火焼き。現代アートと古家具が調和する空間。',
        spots: 'Satoyama villa DEN（松本）、BYAKU Narai（奈良井宿）、ヤマガタ サウナ ヴィラ',
        access: '中央道または北陸道経由、車でのアクセス。',
        tip: '蔵を改装したプライベートサウナでは、セルフロウリュを楽しんだ後、清らかな雪解け水の水風呂に入り、満天の星空の下で外気浴ができます。'
      },
      {
        key: 'setouchi_sanin_ocean_kominka',
        title: '3. 瀬戸内＆山陰・重要文化財リノベーション＆海を望む歴史邸宅',
        timing: '通年（穏やかな瀬戸内海の多島美と山陰の城下町）',
        desc: '瀬戸内の港町や出雲・石見の旧商家・船宿を再生した高級宿。国の登録有形文化財に指定された格式高い建築。海を見渡すウッドデッキ、地元漁師から直接仕入れる新鮮な魚介を使った地産地消ディナー。',
        spots: 'Azumi Setoda（生口島）、せとうち 湊のやど（尾道）、NIPPONIA 出雲平田 木綿街道',
        access: '山陽新幹線・広島空港または出雲空港より車。',
        tip: 'アマンの創業者エイドリアン・ゼッカが手掛けた「Azumi Setoda」では、築140年の豪商邸宅の意匠と世界最高峰のホスピタリティが融合した体験が味わえます。'
      }
    ]
  },
  {
    slug: 'japan-michelin-star-auberge-winery-stay',
    badge: 'MICHELIN AUBERGE & WINERY GUIDE',
    title: '【ミシュラン星付きシェフ監修＆ワイナリー宿】極上オーベルジュ・美食ステイ 完全ガイド',
    metaDesc: '「食べるために泊まる」至福のガストロノミーツーリズム！ミシュラン星付きシェフ監修の極上オーベルジュ＆ワイナリーホテル完全特化！北海道余市・山梨勝沼・長野千曲川ワインバレー、美食とワインのペアリング宿を徹底解説。',
    heroDesc: 'ぶどう畑を見下ろす丘の上、料理人の情熱が一皿ごとに咲き誇る「極上オーベルジュ＆ワイナリーホテル」。テロワールを表現したモダンフレンチや薪火料理。ソムリエが提案する完璧なワインペアリング。部屋に戻ってそのまま眠りにつく美食の頂点へ。',
    categoryKey: 'japan-michelin-star-auberge-winery-stay',
    areaGuides: [
      {
        key: 'hokkaido_yoichi_auberge_winery',
        title: '1. 北海道余市＆ニセコ・世界が注目するブティックワイナリーオーベルジュ',
        timing: '通年（秋のぶどう収穫祭・冬の白銀雪景色ディナー）',
        desc: '世界的評価を受けるワイン産地「余市・仁木」。なだらかな丘陵に広がるぶどう畑の中に佇むわずか数室のオーベルジュ。余市産の雲丹や蝦夷鹿、日本海の魚介と、入手困難なドメーヌの希少ワインをペアリングで味わう至高の時間。',
        spots: '余市ワイナリー、仁木町オーベルジュ、ニセコ高級リゾート、ドメーヌ タカヒコ周辺',
        access: '新千歳空港より車で約1時間40分。JR函館本線「余市駅」周辺。',
        tip: 'ワイナリー併設宿では、醸造責任者（ヴィニュロン）によるプライベートなセラー案内や、樽からの直接テイスティングなど特別な体験が楽しめます。'
      },
      {
        key: 'yamanashi_katsunuma_wine_resort',
        title: '2. 山梨勝沼＆八ヶ岳・日本ワイン発祥の地で味わう甲州ワインとフレンチ',
        timing: '通年（秋のワイン新酒まつり・初夏の爽やかな高原）',
        desc: '約30軒のワイナリーが集積する勝沼ぶどう郷。ぶどう棚を渡る風を感じながら味わう和の柑橘が香る「甲州ワイン」と創作フレンチ。天然温泉付きスイートルームから望む甲府盆地の夜景や南アルプスの山並み。',
        spots: '星野リゾート リゾナーレ八ヶ岳、勝沼ぶどう郷ワイナリー群、笛吹川温泉 坐忘（ワイナリー併設）',
        access: 'JR中央本線「勝沼ぶどう郷駅」または「甲府駅」より車。中央道勝沼ICすぐ。',
        tip: '「坐忘」では、併設された「まるき葡萄酒（日本最古のワイナリー）」の地下セラーでヴィンテージワインのテイスティングツアーが毎日開催されています。'
      },
      {
        key: 'shinshu_chikuma_wine_valley_stay',
        title: '3. 信州千曲川ワインバレー・薪火料理とシャルドネの極上マリアージュ',
        timing: '通年（千曲川流域のテロワールを味わう旅）',
        desc: '日照時間が長く少雨の気候が育む長野県「千曲川ワインバレー（上田・東御・小諸・高山）」。地元農家が育てる有機野菜と信州プレミアム牛を薪火で焼き上げる薪火料理。小規模ブティックワイナリーの個性豊かなワイン。',
        spots: 'ヴィラデスト ガーデンファームアンドワイナリー、小諸マンズワイン、軽井沢オーベルジュ',
        access: '北陸新幹線「上田駅」または「軽井沢駅」より車。',
        tip: 'オープンキッチンのカウンター席でシェフが薪火で肉を焼き上げるパチパチという音とスモーキーな香りを五感で楽しむディナーは忘れられない思い出になります。'
      }
    ]
  },
  {
    slug: 'japan-exclusive-detached-villa-private-onsen-stay',
    badge: 'ALL DETACHED ONSEN VILLA GUIDE',
    title: '【全室離れ・源泉かけ流し露天風呂付き隠れ家宿】大人の静寂＆名門温泉割烹 完全ガイド',
    metaDesc: '静寂とプライベートを極めた大人のための聖域！全室離れ・客室専用源泉かけ流し露天風呂付き名旅館完全特化！由布院・黒川温泉・箱根・伊豆・飛騨高山、誰にも会わずに部屋食と名湯を堪能する極上宿を徹底解説。',
    heroDesc: '門をくぐれば、回廊の先に佇む独立した「離れ」の客室。24時間いつでも好きな時に湯浴みができる源泉かけ流しの専用露天風呂。部屋出しの本格京懐石やブランド牛尽くし。チェックインからアウトまで誰にも会わない究極のプライベートステイへ。',
    categoryKey: 'japan-exclusive-detached-villa-private-onsen-stay',
    areaGuides: [
      {
        key: 'kyushu_yufuin_kurokawa_detached_villa',
        title: '1. 九州・由布院＆黒川温泉・クヌギ林と清流に抱かれる全室離れ名旅館',
        timing: '通年（由布岳の朝霧が立ち込める秋冬は特に幻想的）',
        desc: '広大な敷地にわずか数室〜十数室のみの離れを配置した由布院や黒川温泉の最高峰旅館。茅葺き屋根の重厚な佇まい。リビングから直接続く巨石をくり抜いた源泉かけ流し露天風呂。豊後牛やすっぽん、山菜を使った繊細な会席。',
        spots: '由布院 御三家（亀の井別荘・由布院玉の湯・山荘無量塔）、黒川温泉 山みず木別邸 深山山荘、竹ふえ（白川温泉）',
        access: '大分空港または熊本空港より車・特急バス。',
        tip: '白川温泉の「竹ふえ」では、約4,000坪の広大な竹林にわずか12室の離れのみが点在し、専用露天風呂に浮かべられる竹筒アイスや地酒サービスが人気です。'
      },
      {
        key: 'hakone_izu_luxury_detached_villa',
        title: '2. 箱根＆伊豆・竹林と早川渓谷のせせらぎに癒やされる極上の数寄屋離れ',
        timing: '通年（都心からロマンスカー・新幹線で約1時間の別天地）',
        desc: '名建築家が手掛けた数寄屋造りの数々。宮ノ下・強羅・仙石原の静寂な森に佇む名門離れ宿。箱根十七湯の美肌温泉を独占。伊豆・修善寺の竹林小径沿いの老舗旅館別邸。相模湾と駿河湾の朝獲れ海鮮を部屋食で味わう贅沢。',
        spots: '箱根・強羅花壇、金乃竹 仙石原、修善寺温泉 あさば（能舞台を望む名旅館）',
        access: '小田急ロマンスカー「箱根湯本駅」または東海道新幹線「三島駅」よりタクシー・送迎車。',
        tip: '「強羅花壇」は旧閑院宮別邸跡地に建ち、伝統的な和の美とモダンな機能性、ミシュラン星付き級の本格懐石料理が世界中のセレブに愛されています。'
      },
      {
        key: 'kansai_tokai_private_onsen_villa',
        title: '3. 有馬温泉＆飛騨高山・日本最古の名湯「金泉」と飛騨牛を味わう離れ別邸',
        timing: '通年（有馬の紅葉・高山の古い町並みと雪景色）',
        desc: '鉄分と塩分が濃厚な有馬温泉の「金泉」を客室専用露天風呂に贅沢に引湯した離れ宿。飛騨高山の奥座敷・福地温泉の囲炉裏付き古民家離れ。A5等級飛騨牛の炭火焼きや神戸牛のしゃぶしゃぶ。専属仲居によるきめ細やかなおもてなし。',
        spots: '有馬温泉 欽山（大人の隠れ家料亭旅館）、中の坊 瑞苑、奥飛騨温泉郷 隠庵 ひだ路',
        access: '新神戸駅またはJR高山駅より車・送迎バス。',
        tip: '有馬温泉の離れ宿では、赤褐色の濃厚な金泉と無色透明の炭酸泉・銀泉の両方を客室で入り比べできる贅沢なプランが用意されている宿もあります。'
      }
    ]
  },
  {
    slug: 'japan-luxury-island-resort-charter-cruise-stay',
    badge: 'LUXURY ISLAND & CRUISE GUIDE',
    title: '【プライベートクルーズ＆離島ラグジュアリーリゾート】瀬戸内・伊勢志摩・八重山 完全ガイド',
    metaDesc: '陸路では辿り着けない碧碧たる楽園！プライベートクルーズ・ヘリ送迎対応の最高峰アイランドリゾート完全特化！瀬戸内・ベネッセハウス・ガンツウ、伊勢志摩・アマネム・英虞湾クルーズ、八重山諸島プライベートヨット宿を徹底解説。',
    heroDesc: '穏やかな波を切り進む専用クルーザーでチェックイン。世界最高峰のリゾートブランド「アマン」が手掛けたアマネム、瀬戸内海に浮かぶ動くラグジュアリーホテル「ガンツウ」、アートと建築が共鳴する直島ベネッセハウス。非日常の極致へ。',
    categoryKey: 'japan-luxury-island-resort-charter-cruise-stay',
    areaGuides: [
      {
        key: 'iseshima_amanemu_luxury_resort',
        title: '1. 伊勢志摩・アマネム（英虞湾の真珠筏を望むアマン初の温泉リゾート）',
        timing: '通年（真珠のように穏やかな英虞湾のパノラマ）',
        desc: '世界的なラグジュアリーリゾート「アマン」が伊勢志摩国立公園内にオープンした「アマネム（AMANEMU）」。約2,000平米の広大なサーマルスプリング（温泉水プール）。英虞湾を巡るプライベートボートクルーズと伊勢海老・松阪牛ディナー。',
        spots: 'アマネム（サーマルスプリング・ダイニング）、志摩観光ホテル ザ クラシック/ザ ベイスイート、賢島カンツリークラブ',
        access: '近鉄「賢島駅」より専用車送迎約15分。ヘリコプターチャーター運行あり。',
        tip: 'アマネムの水着着用で入る広大な屋外サーマルスプリングでは、ミネラル豊富な天然温泉に浮かびながら英虞湾の森と空を仰ぐ極上のリフレッシュが体験できます。'
      },
      {
        key: 'setouchi_art_island_guntu_stay',
        title: '2. 瀬戸内・直島ベネッセハウス（安藤忠雄建築×現代アート×多島美）',
        timing: '通年（瀬戸内国際芸術祭の舞台・穏やかな気候）',
        desc: '安藤忠雄氏が設計した「美術館の中に泊まる」ホテル・ベネッセハウス（ミュージアム・オーバル・パーク・ビーチ）。夜間宿泊者だけが独占できる美術館鑑賞。専用チャーターボートで豊島・犬島を巡るアイランドホッピング。',
        spots: 'ベネッセハウス（オーバル専用モノレール）、地中美術館、草間彌生「南瓜」、家プロジェクト',
        access: '高松港または宇野港よりフェリー・高速船で宮浦港へ。ホテル専用シャトルバス運行。',
        tip: 'ベネッセハウス「オーバル」は山頂のわずか6室のみの特別室で、専用モノレールで登る円形水盤の中庭は宿泊者しか立ち入れない究極のアート空間です。'
      },
      {
        key: 'yaeyama_kohamajima_hoshinoya_stay',
        title: '3. 八重山諸島・星のや竹富島＆小浜島（琉球赤瓦の集落と日本最大の珊瑚礁）',
        timing: '通年（国内初の星空保護区に認定された満天の天の川）',
        desc: '竹富島の伝統的建造物群保存地区のルールに従って造られた一棟一組の赤瓦ヴィラ「星のや竹富島」。珊瑚の石垣に囲まれたプライベート空間。小浜島の日本最大の珊瑚礁「石西礁湖」でのプライベートヨットクルーズやシュノーケリング。',
        spots: '星のや竹富島、はいむるぶし（小浜島）、コンドイビーチ、カイジ浜（星砂の浜）',
        access: '石垣港離島ターミナルより高速船で約10〜30分。',
        tip: '星のや竹富島では、夕暮れ時に「水牛車」に乗って三線の音色を聞きながら集落を巡る特別なオプショナルツアーが用意されています。'
      }
    ]
  }
];

function generatePageTsx(config) {
  return `import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "${config.title} ｜ 日本全国・旅宿クラウド",
  description: "${config.metaDesc}",
  keywords: ["${config.slug}", "宿泊予約", "高級リゾート", "記念日ホテル", "ラグジュアリーステイ", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["${config.categoryKey}"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for ${config.categoryKey}", e);
  }
  return {};
}

export default function LuxuryPremiumHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = ${JSON.stringify(config.areaGuides, null, 2)};

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-950 via-amber-950 to-stone-900 text-white p-8 md:p-14 shadow-2xl border border-amber-400/20">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-amber-300 to-amber-500 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block shadow">
            ${config.badge}
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            ${config.title}
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            ${config.heroDesc}
          </p>
        </div>
      </div>

      {/* テーマ別徹底ガイド＆厳選宿 */}
      <div className="space-y-16">
        {areaGuides.map((guide) => {
          const sectionData = sections[guide.key];
          const hotels = sectionData?.hotels || [];

          return (
            <section
              key={guide.key}
              id={guide.key}
              className="bg-white border border-amber-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* テーマ見出し */}
              <div className="space-y-3 border-b border-amber-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
                    💎 {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-stone-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 特徴・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">👑 代表的な宿・建築の特徴</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
                  <span className="font-bold text-stone-950 block text-[11px]">🛥️ アクセス＆送迎案内</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">✨ 極上ステイを叶えるポイント</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選プレミアム宿カード */}
              <div className="space-y-4 pt-4 border-t border-amber-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-stone-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの最高峰宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-amber-900 bg-amber-100/70 border border-amber-300 px-3 py-1 rounded-full">
                    極上プレミアム
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-amber-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-stone-100 border-b border-stone-200">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-stone-400 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-stone-950/90 text-amber-300 px-2 py-0.5 rounded border border-amber-400/30">
                              ¥{Number(hotel.hotelMinCharge).toLocaleString()}〜
                            </span>
                          )}
                        </div>

                        <div className="p-4 space-y-2">
                          {hotel.reviewAverage > 0 && (
                            <div className="flex items-center justify-between text-[9px] font-bold text-amber-600">
                              <span>⭐ {hotel.reviewAverage}点（{hotel.reviewCount}件）</span>
                            </div>
                          )}
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-stone-950 line-clamp-2">
                            {hotel.hotelName}
                          </h4>
                          {hotel.hotelSpecial && (
                            <p className="text-[11px] text-stone-600 line-clamp-2 font-medium">
                              {hotel.hotelSpecial}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="p-4 pt-0">
                        <a
                          href={hotel.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-600 hover:to-amber-800 rounded-xl shadow transition"
                        >
                          ✈️ 楽天トラベルで宿泊プラン・空室を見る
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 47都道府県トップへのリンク */}
      <div className="text-center pt-8">
        <Link
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-stone-950 bg-white hover:bg-stone-50 border border-stone-300 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
`;
}

for (const cfg of luxuryConfigs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated luxury premium hub page: /${cfg.slug}`);
}
