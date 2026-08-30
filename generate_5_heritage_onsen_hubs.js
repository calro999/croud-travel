const fs = require('fs');
const path = require('path');

const heritageOnsenConfigs = [
  {
    slug: 'heritage-cultural-wooden-ryokan',
    badge: 'HERITAGE ARCHITECTURE RYOKAN GUIDE',
    title: '【登録有形文化財・名建築の宿】宮大工の木造建築・文豪が愛した老舗旅館 完全ガイド',
    metaDesc: '国登録有形文化財・宮大工の名建築旅館完全特化！釘を一本も使わない数寄屋造り、文豪が執筆に訪れた客室、歴史ある磨き上げられた廊下、日本庭園と伝統会席を味わう至高のクラシックステイを徹底解説。',
    heroDesc: '日本の美意識と宮大工の匠の技が息づく「登録有形文化財の宿」。明治・大正・昭和の文豪や皇族が愛した伝統木造建築、釘を使わない数寄屋造り、磨き抜かれた艶やかな廊下。時を超えて受け継がれる極上のおもてなしへ。',
    categoryKey: 'heritage-cultural-wooden-ryokan',
    areaGuides: [
      {
        key: 'tangible_cultural_heritage_ryokan',
        title: '1. 国登録有形文化財・数寄屋造り名旅館（宮大工の技が光る組子細工と漆黒の廊下）',
        timing: '通年（四季折々の日本庭園美と木造建築の温もり）',
        desc: '樹齢数百年の銘木を用い、釘を一本も使わずに組み上げられた木造多層階建築。欄間に施された精緻な組子細工や職人の手彫り彫刻。年月を経て黒光りする廊下や階段が、日本の伝統美と静寂を醸し出します。',
        spots: '客室の床の間・違い棚、職人手彫りの欄間彫刻、手吹きガラスの波打ち窓、大正ロマンの意匠',
        access: '修善寺、湯河原、箱根塔ノ沢、渋温泉、角館などの歴史ある宿場町・温泉街。',
        tip: '館内ツアーを実施している宿も多く、宮大工の隠された細工や建物の歴史について女将や支配人から解説を聞くことができます。'
      },
      {
        key: 'bungo_literary_master_stay',
        title: '2. 文豪が逗留した客室＆日本庭園（川端康成・夏目漱石・太宰治が愛した静寂）',
        timing: '通年（読書や思索にふける静かな執筆リトリート）',
        desc: '『伊豆の踊子』『城の崎にて』『雪国』など、日本文学史に輝く名作が執筆された客室。文豪が実際に使った文机や硯、直筆の書や原稿が残る宿。窓外に広がる手入れの行き届いた日本庭園を眺めながら過ごす贅沢。',
        spots: '文豪逗留客室、歴史資料展示室・ギャラリー、池泉回遊式日本庭園、書斎風ラウンジ',
        access: '城崎温泉、湯ヶ島温泉、湯河原温泉、越後湯沢温泉など。',
        tip: '文豪が好んだ銘菓や地酒をいただきながら、その宿で生まれた小説を読み返す時間は格別の体験です。'
      },
      {
        key: 'classic_hotel_modern_heritage',
        title: '3. 日本のクラシックホテル＆洋館（明治・大正の鹿鳴館時代を偲ぶクラシックステイ）',
        timing: '通年（重厚なメインダイニングと伝統フレンチ）',
        desc: '日光金谷ホテル、富士屋ホテル、奈良ホテル、東京ステーションホテルなど「日本クラシックホテルの会」加盟ホテル。格天井やアンティーク家具、高い天井に響く足音。歴代の総料理長から受け継がれる伝統のコンソメスープ。',
        spots: '格天井のメインダイニング、アンティークバー、ミュージアム、歴史的ロビー',
        access: '日光、箱根宮ノ下、軽井沢、横浜、奈良など。',
        tip: 'パスポート型「クラシックホテルパスポート」にスタンプを集めながら、全国の名門ホテルを巡る旅が大人の間で人気です。'
      }
    ]
  },
  {
    slug: 'pure-100-percent-kakenagashi-onsen-stay',
    badge: '100% PURE NATURAL ONSEN GUIDE',
    title: '【自家源泉かけ流し100%の宿】加水なし・加温なし・循環なし！本物の名湯 完全ガイド',
    metaDesc: '温泉通が選ぶ「自家源泉100%完全かけ流し」宿完全特化！加水なし・加温なし・循環ろ過なし・消毒なしの純生温泉。毎分数百リットルの湧出量、湯の花が舞う鮮度抜群の湯口、飲泉許可、湯守のこだわり宿を徹底解説。',
    heroDesc: '一切の妥協なし。湧き出たままの地球の恵みをダイレクトに味わう「自家源泉100%完全かけ流し」。加水・加温・循環・塩素消毒を一切行わない「純生温泉」。湯守が湯量を調整して保つ奇跡の適温と、濃厚な温泉成分を体感。',
    categoryKey: 'pure-100-percent-kakenagashi-onsen-stay',
    areaGuides: [
      {
        key: 'pure_natural_kakenagashi',
        title: '1. 純度100%の生源泉（加水・加温・循環・消毒一切なしの奇跡の湯船）',
        timing: '通年（温泉成分が最も濃い生まれたての湯を堪能）',
        desc: '温泉法で認められた加水や加温すら行わず、源泉の温度と湧出量のバランスだけで湯温を保つ究極の湯守の技術。湯口から絶え間なく溢れ出る生まれたての温泉。空気に触れる時間が短いため酸化せず、圧倒的な還元力と美肌効果を誇ります。',
        spots: '毎分数百リットル自噴の湯口、オーバーフローする湯船、湯の花が舞う天然温泉、檜風呂',
        access: '草津、万座、野沢、渋、奥飛騨、別府、霧島などの湯量豊富な名湯エリア。',
        tip: '湯船の縁から常に温泉がドバドバと床へ流れ出ている（オーバーフロー）のが、本物の完全かけ流しの証です。'
      },
      {
        key: 'footbath_bottom_spring',
        title: '2. 足元湧出（湯船の底の岩盤からポコポコと自噴する奇跡の温泉）',
        timing: '通年（空気に一切触れない日本屈指の鮮度）',
        desc: 'パイプを通すことなく、浴槽の底にある岩盤の割れ目から直接温泉が湧き出す「足元湧出」。全国でも数十箇所しか存在しない極めて貴重な温泉。生まれたての気泡が肌にまとわりつく極上の入浴体験。',
        spots: '足元湧出天然岩風呂、川底自噴露天風呂、混浴・女性専用時間ありの名湯',
        access: '酸ヶ湯、蔦温泉、法師温泉、湯抱温泉、壁湯温泉など。',
        tip: '足元から気泡とともに湧き上がる温もりを肌で感じながら、静かに目を閉じて浸かるのが足元湧出の真髄です。'
      },
      {
        key: 'onsen_sommelier_yumori',
        title: '3. 湯守の技＆飲泉処（温泉ソムリエも絶賛する鮮度と身体の内側からの治癒）',
        timing: '通年（本格的な現代湯治・デトックス滞在）',
        desc: '外気温や天候に合わせて湯量をミリ単位で調整する「湯守（ゆもり）」の存在。保健所の飲泉許可を取得した飲泉処で、新鮮な温泉水をコップに注いで飲む内臓ケア。身体の外からも中からも温泉成分を吸収する贅沢。',
        spots: '館内飲泉処、源泉蒸し風呂、温泉熱利用オンドル部屋、温泉卓球',
        access: '歴史ある湯治場・名湯温泉街。',
        tip: '飲泉は食前30分〜1時間前にゆっくり飲むのが効果的で、胃腸の調子を整え便秘や貧血を改善する効果が期待できます。'
      }
    ]
  },
  {
    slug: 'michelin-auberge-gourmet-onsen-stay',
    badge: 'MICHELIN AUBERGE ONEN GUIDE',
    title: '【極上美食オーベルジュ温泉宿】ミシュラン星付きシェフ監修・地産地消ディナー 完全ガイド',
    metaDesc: '食事を目的に旅する「美食オーベルジュ温泉宿」完全特化！ミシュラン星付きシェフ監修フレンチ＆イタリアン、自家菜園の朝摘み野菜、特選ブランド和牛・朝獲れ地魚、専属ソムリエのペアリングと源泉かけ流し温泉を徹底解説。',
    heroDesc: '泊まれるレストラン「オーベルジュ」。その土地の風土（テロワール）を一皿に表現する一流シェフの技と、至福の源泉かけ流し温泉の融合。厳選されたヴィンテージワインのペアリングとともに、記憶に刻まれる美食の夜を。',
    categoryKey: 'michelin-auberge-gourmet-onsen-stay',
    areaGuides: [
      {
        key: 'michelin_chef_auberge',
        title: '1. 一流シェフのフルコースディナー（土地の息吹を一皿に込めたアートな料理）',
        timing: '通年（四季折々の旬の食材を最も美味しく味わうコース）',
        desc: '有名フレンチレストランや本場ヨーロッパで研鑽を積んだトップシェフが腕を振るうメインダイニング。近海で獲れた新鮮な魚介、地元契約農家の無農薬野菜、熟成和牛を最新の調理技術で昇華させた至高のフルコース。',
        spots: 'オープンキッチンダイニング、シェフズテーブル、ワインセラー、テラス席',
        access: '軽井沢、箱根、伊豆高原、富良野、ニセコ、阿蘇などの自然豊かなリゾート。',
        tip: 'シェフの目の前で調理が見える「シェフズカウンター席」を事前リクエストすると、臨場感あふれる食のエンターテインメントが楽しめます。'
      },
      {
        key: 'terroir_local_gastronomy',
        title: '2. ローカルガストロノミー＆ワインペアリング（その土地でしか出逢えない奇跡の味）',
        timing: '通年（ジビエ・山菜・松茸・寒魚など季節ごとのテロワール）',
        desc: 'その土地の気候風土（テロワール）と食文化を再構築する「ローカルガストロノミー」。宿専属のソムリエが料理一皿ごとに合わせる日本ワインや銘醸地ワインのペアリング。食後は温泉露天風呂でゆったりと酔い覚まし。',
        spots: 'ワイナリー併設レストラン、自社農園・ハーブガーデン、テイスティングラウンジ',
        access: '信州ワインバレー、山梨・勝沼、十勝、新潟などの食とワインの銘醸地。',
        tip: 'ノンアルコール派の方には、自家製発酵ハーブティーや無添加果汁をブレンドした「モクテルペアリング」が人気です。'
      },
      {
        key: 'private_dining_villa_auberge',
        title: '3. 離れヴィラ＆インルームダイニング（プライベート空間で味わう贅沢な美食）',
        timing: '通年（特別な記念日や夫婦・カップルのおこもり旅行）',
        desc: '森や海に面した独立ヴィラ客室。専属シェフが客室のプライベートキッチンで仕上げるインルームディナーや、客室テラスでのBBQグリル。源泉かけ流しの露天風呂とプライベートプールを備えた最高峰の空間。',
        spots: 'プライベートプール＆ジャグジー、薪ストーブ、テラスダイニング、客室専用セラー',
        access: 'プライベート感あふれる隠れ家リゾート。',
        tip: '朝食もテラスやリビングに運ばれ、焼きたての自家製パンや絞りたてジュースをパジャマのままいただけます。'
      }
    ]
  },
  {
    slug: 'kominka-villa-kura-sauna-stay',
    badge: 'KOMINKA VILLA & KURA SAUNA GUIDE',
    title: '【古民家一棟貸し・蔵サウナの宿】築100年再生邸宅・プライベート薪サウナ 完全ガイド',
    metaDesc: '贅沢な古民家一棟貸し＆プライベートサウナ宿完全特化！築100年以上の重厚な古民家リノベーション、蔵を改装した本格セルフロウリュ薪サウナ、地下水掛け流し水風呂、囲炉裏炭火焼きと星空外気浴を徹底解説。',
    heroDesc: '築100年を超える豪農の屋敷や町家を贅沢に独占する「古民家一棟貸し」。太い梁と漆喰壁が包み込む歴史空間に、最新の快適設備とプライベート蔵サウナを完備。囲炉裏を囲んで炭火焼きを味わい、星空の下でととのう究極の休日。',
    categoryKey: 'kominka-villa-kura-sauna-stay',
    areaGuides: [
      {
        key: 'kominka_kura_sauna_villa',
        title: '1. 蔵サウナ＆地下水水風呂（100年の歴史を持つ蔵の中でととのう極上体験）',
        timing: '通年（冬の薪ストーブの暖かさと夏の澄んだ外気浴）',
        desc: '重厚な土壁の「蔵（くら）」をそのまま改装したプライベートサウナ。フィンランド製薪ストーブに地元のほうじ茶やアロマ水をかけてセルフロウリュ。天然地下水の冷水風呂から、庭園のインフィニティチェアで満天の星空外気浴。',
        spots: 'プライベート蔵サウナ、地下水掛け流し壺水風呂、星空ととのいデッキ、焚き火スペース',
        access: '長野、山梨、千葉・房総、兵庫・丹波篠山、高知などの自然豊かな里山エリア。',
        tip: 'サウナポンチョを着て焚き火を眺めながらの外気浴は、日常のストレスを完全にリセットしてくれます。'
      },
      {
        key: 'irori_charcoal_kominka',
        title: '2. 囲炉裏炭火焼き＆地元ジビエ会席（パチパチと爆ぜる炭火を囲む団らんの夜）',
        timing: '通年（秋〜冬の囲炉裏鍋・イワナの塩焼き・ジビエ炭火焼き）',
        desc: '部屋の中央に据えられた本格的な囲炉裏。自在鉤に鉄鍋を掛け、炭火でじっくり焼く川魚の塩焼きや地元産黒毛和牛、猪・鹿などの天然ジビエ。薪のはぜる音を聞きながら地酒を酌み交わす特別な夜。',
        spots: '本格囲炉裏の間、土間キッチン、羽釜ご飯炊き体験、縁側ラウンジ',
        access: '里山の古民家再生ヴィラ。',
        tip: '釜戸（かまど）や羽釜を使って自分で炊き上げる地元産コシヒカリのご飯は、おこげが香ばしく格別の美味しさです。'
      },
      {
        key: 'machiya_traditional_suite',
        title: '3. 京都・金沢の伝統町家ステイ（坪庭を望む檜風呂と暮らすような旅）',
        timing: '通年（静かな古都の風情と格子戸の美）',
        desc: '石畳の路地奥に佇む京町家や金沢の町家。格子戸や通り庭、坪庭を望む半露天の檜風呂。最新の床暖房やシモンズ製ベッドを備え、伝統の趣と現代の快適性を両立。早朝の観光名所を独占できる立地の良さ。',
        spots: '坪庭付き檜風呂、吹き抜けの火袋、格子戸の座敷、町家専用茶室',
        access: '京都（祇園・東山・西陣）、金沢（ひがし茶屋街・主計町）など。',
        tip: '老舗料亭からの仕出し料理（朝食・夕食）をお部屋に届けてもらうと、料亭の味をプライベート空間でゆっくり味わえます。'
      }
    ]
  },
  {
    slug: 'infinity-open-air-bath-ocean-view-stay',
    badge: 'INFINITY OPEN-AIR BATH GUIDE',
    title: '【絶景インフィニティ露天風呂の宿】海・空・湖と一体化する圧倒的パノラマ 完全ガイド',
    metaDesc: '視界を遮るものがない「絶景インフィニティ露天風呂」宿完全特化！湯船が海や湖の水面と溶け合うインフィニティ温泉、朝焼けのサンライズ・夕暮れのマジックアワー・満天の星空、絶景テラスと美食宿を徹底解説。',
    heroDesc: '湯船の縁がなく、視界一面の海や湖、大空と溶け合う奇跡の絶景「インフィニティ露天風呂」。まるで大自然に浮かんでいるかのような圧倒的な開放感。夕陽が水平線に沈む黄金のマジックアワーと、波音に包まれる至高の温泉体験。',
    categoryKey: 'infinity-open-air-bath-ocean-view-stay',
    areaGuides: [
      {
        key: 'infinity_ocean_view_bath',
        title: '1. オーシャンインフィニティ露天（海と一体化する水平線パノラマ）',
        timing: '通年（日の出サンライズ・夕暮れのマジックアワー・満月のムーンロード）',
        desc: '湯船の水面とどこまでも広がる大海原の境界線が消え去るインフィニティ設計。潮風を感じながら浸かる弱食塩泉や炭酸水素塩泉。波の音をBGMに、刻一刻と表情を変える空と海の色を眺める至福の時間。',
        spots: '屋上インフィニティ展望露天風呂、海辺のデッキチェア、展望足湯ラウンジ、ナイトライトアップ',
        access: '熱海、伊豆、勝浦、南紀白浜、淡路島、指宿、沖縄など海沿いのリゾート地。',
        tip: '満月の前後数日間に現れる、海面に月光が描く一本の光の道「ムーンロード」を湯船から眺めるのは奇跡的な絶景です。'
      },
      {
        key: 'infinity_lake_sky_bath',
        title: '2. レイク＆マウンテンインフィニティ（湖面に映る逆さ富士と雲上の絶景）',
        timing: '通年（早朝の朝霧と鏡のような湖面・夕暮れの赤富士）',
        desc: '河口湖や芦ノ湖、洞爺湖の水面、そして雄大な山並みと一体化する天空のインフィニティ温泉。無風の早朝には湖面に鏡のように山が映り込む「逆さ富士」や「逆さ連峰」。標高の高い山岳リゾートから見下ろす雲海。',
        spots: '湖畔パノラマ露天風呂、展望サウナ、水上テラス、パノラマバー',
        access: '河口湖、箱根芦ノ湖、日光中禅寺湖、洞爺湖、阿寒湖など。',
        tip: '風が止む早朝の露天風呂は、湖面が波立たず完全な鏡面反射となり、最も息をのむ絶景が広がります。'
      },
      {
        key: 'private_infinity_suite',
        title: '3. 客室専用インフィニティ露天スイート（誰にも邪魔されない特等席の絶景独占）',
        timing: '通年（大切なパートナーとの記念日やご褒美ステイ）',
        desc: '客室のテラスに備わる専用のインフィニティ露天風呂。好きな時間に何度でも、誰にも邪魔されることなく絶景を独占。湯上がりはテラスのデイベッドでシャンパンを傾け、星空を眺める究極のプライベートステイ。',
        spots: '客室専用インフィニティ露天風呂、テラスデイベッド、バイオエタノール暖炉、専用クラブラウンジ',
        access: '最高級温泉旅館やスモールラグジュアリーホテル。',
        tip: '夕暮れ時の15分間だけの「マジックアワー」に合わせて客室露天風呂に浸かると、言葉を失う美しさに包まれます。'
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
  keywords: ["${config.slug}", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
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

export default function HeritageOnsenHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = ${JSON.stringify(config.areaGuides, null, 2)};

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
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

      {/* テーマ別徹底ガイド＆おすすめ宿 */}
      <div className="space-y-16">
        {areaGuides.map((guide) => {
          const sectionData = sections[guide.key];
          const hotels = sectionData?.hotels || [];

          return (
            <section
              key={guide.key}
              id={guide.key}
              className="bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* テーマ見出し */}
              <div className="space-y-3 border-b border-emerald-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
                    ✨ {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-emerald-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 建築美・泉質・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 建築美・泉質・設備の魅力</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 代表的エリア＆アクセス</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 満足度を高める滞在のコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選名宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選名宿
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-emerald-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-emerald-50 border-b border-emerald-950/5">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-emerald-950/30 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded">
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
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-emerald-950 line-clamp-2">
                            {hotel.hotelName}
                          </h4>
                          {hotel.hotelSpecial && (
                            <p className="text-[11px] text-emerald-950/70 line-clamp-2 font-medium">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl shadow transition"
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
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-950 bg-white hover:bg-emerald-50 border border-emerald-950/20 px-8 py-3.5 rounded-2xl transition shadow-sm"
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

for (const cfg of heritageOnsenConfigs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated heritage onsen hub page: /${cfg.slug}`);
}
