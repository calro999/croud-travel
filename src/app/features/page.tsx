import fs from "fs";
import path from "path";
import { Metadata } from "next";
import Link from "next/link";
import FeaturesGrid, { FeaturePost } from "./FeaturesGrid";

export const metadata: Metadata = {
  title: "厳選！特集・まとめ記事一覧 ｜ 日本全国・旅宿クラウド",
  description: "楽天トラベルで人気の高級宿、絶景リゾート、温泉旅館、カップル旅行、ファミリー向けホテルなどを旅の目的別にまとめた特設ページです。",
  keywords: ["特集", "まとめ", "楽天トラベル", "おすすめ宿", "リゾート", "温泉", "高級ホテル"],
  openGraph: {
    title: "厳選！特集・まとめ記事一覧",
    description: "人気の高級宿、絶景リゾート、温泉旅館、カップル旅行、ファミリー向けホテルなどを旅の目的別にまとめた特設ページです。",
  }
};

export const dynamic = 'force-static';

async function getFeaturePosts(): Promise<FeaturePost[]> {
  const postsDir = path.join(process.cwd(), "src", "data", "posts");
  if (!fs.existsSync(postsDir)) {
    return [];
  }
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith(".json"));
  const posts: FeaturePost[] = [];

  for (const file of files) {
    try {
      const data = JSON.parse(fs.readFileSync(path.join(postsDir, file), "utf-8"));
      // is_special_feature === true のもののみ抽出
      if (data.is_special_feature === true) {
        posts.push({
          id: data.id,
          title: data.title,
          image: data.image || (data.other_images && data.other_images[0]) || "",
          date: data.date,
          categories: data.categories || [],
          description: data.description || "",
          prefecture: data.prefecture || "全国",
        });
      }
    } catch (e) {
      console.error(`Error reading ${file}:`, e);
    }
  }

  // 新しい順（降順）にソート
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export default async function FeaturesPage() {
  const posts = await getFeaturePosts();

  return (
    <div className="space-y-10 max-w-6xl mx-auto">
      {/* パンくずナビゲーション */}
      <nav aria-label="Breadcrumb" className="text-xs font-bold text-teal-900/60 flex items-center gap-2">
        <Link href="/" className="hover:text-teal-800 transition">ホーム</Link>
        <span>/</span>
        <span className="text-emerald-950 font-bold">特集・まとめ記事一覧</span>
      </nav>

      {/* ヒーローヘッダー */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-teal-800 via-emerald-800 to-teal-900 p-8 md:p-12 text-white shadow-md space-y-4">
        <span className="inline-block text-[10px] font-extrabold tracking-widest bg-white/20 border border-white/30 px-3.5 py-1 rounded-full uppercase">
          EDITOR&apos;S PICK 💎
        </span>
        <h1 className="text-2xl md:text-4xl font-black font-journal-serif leading-snug">
          厳選！特集・まとめ記事一覧
        </h1>
        <p className="text-teal-100/90 text-xs md:text-sm max-w-2xl leading-relaxed font-medium">
          「特別な記念日に行きたい高級旅館」や「赤ちゃん連れでも安心のウェルカムベビーのお宿」「話題のサウナ付き絶景ホテル」など、旅の目的やテーマに合わせて厳選した最高品質のまとめ記事をお届けします。気になるタグをクリックして、あなたにぴったりの旅行プランを見つけてください。
        </p>
      </section>

      {/* 🍁 秋の行楽・美食温泉宿35選 特設まとめバナー */}
      <section className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 rounded-3xl p-6 md:p-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="inline-block text-[10px] font-black tracking-wider bg-white/20 px-3 py-0.5 rounded-full uppercase">
            季節の超特別企画 🍁
          </span>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif">
            【2026年最新】全国の秋の味覚＆紅葉を満喫する絶品温泉宿35選 まとめ
          </h2>
          <p className="text-amber-100 text-xs md:text-sm max-w-2xl leading-relaxed">
            北海道のカニ食べ放題から、丹波松茸、シャインマスカット狩り、伊勢海老・車海老、ブランド和牛まで！全国エリア別の秋限定グルメ＆名湯旅館を一挙公開。
          </p>
        </div>
        <Link
          href="/campaigns/autumn-gourmet-travel"
          className="w-full md:w-auto px-8 py-4 bg-white text-amber-900 hover:bg-amber-50 font-black text-xs md:text-sm rounded-2xl shadow-md transition text-center whitespace-nowrap"
        >
          秋の味覚 35選まとめを見る →
        </Link>
      </section>

      {/* ❄️ 先回り！秋冬〜春の超人気目的別・厳選比較特集 */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-emerald-950/10 pb-3">
          <div>
            <span className="text-[10px] font-extrabold text-teal-800 uppercase tracking-widest block">SEARCH TREND TOPICS</span>
            <h2 className="text-lg md:text-xl font-black font-journal-serif text-emerald-950 flex items-center gap-2">
              <span>🔥</span> <span>注目検索トレンド！テーマ別・厳選宿比較ランキング特集</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              slug: 'winter-crab-gourmet-luxury-inn-ranking',
              title: '🦀 冬の活蟹・カニ尽くし名宿',
              desc: '城崎・三国・皆生のタグ付き松葉ガニ＆越前ガニ会席',
              badge: '冬グルメ'
            },
            {
              slug: 'snow-viewing-open-air-bath-secret-hotsprings',
              title: '❄️ 雪見露天＆にごり湯秘湯',
              desc: '乳頭温泉・万座・奥飛騨の白銀パノラマ露天風呂',
              badge: '雪見温泉'
            },
            {
              slug: 'new-year-sunrise-ocean-view-resorts',
              title: '🌅 初日の出・海一望リゾート',
              desc: '客室から太平洋の初日の出を拝む年末年始ステイ',
              badge: '正月旅行'
            },
            {
              slug: 'welcome-baby-family-indoor-pool-hotels',
              title: '👶 子連れ・温水プールリゾート',
              desc: '那須・熱海など室内プール＆ウェルカムベビー宿',
              badge: 'ファミリー'
            },
            {
              slug: 'couples-anniversary-private-villa-hanare',
              title: '💍 大人の離れ・客室露天宿',
              desc: '由布院・箱根の全室離れプライベートヴィラ＆部屋食',
              badge: '記念日'
            },
            {
              slug: 'private-sauna-cold-bath-retreat-hotels',
              title: '🧖 貸切サウナ＆水風呂リトリート',
              desc: '富士山・野尻湖の薪ストーブ＆湧水水風呂サウナ宿',
              badge: 'サウナ旅'
            },
            {
              slug: 'shinkansen-station-direct-ski-onsen-resorts',
              title: '🚅 新幹線駅直結スキー温泉',
              desc: '越後湯沢・軽井沢など雪道運転不要の駅直結スノー宿',
              badge: '車なし旅'
            },
            {
              slug: 'solo-travel-in-room-dining-peaceful-hotsprings',
              title: '🍵 一人旅・お部屋食の静寂温泉',
              desc: '四万・別所温泉の部屋食＆客室風呂ソロリトリート',
              badge: '一人旅'
            },
            {
              slug: 'award-winning-breakfast-gourmet-hotel-ranking',
              title: '🍳 朝食日本一・海鮮ビュッフェ',
              desc: '函館・金沢のいくら盛り放題＆焼きたてパン名門ホテル',
              badge: '絶品朝食'
            },
            {
              slug: 'golf-resort-natural-hotspring-luxury-stay',
              title: '⛳ 名門ゴルフ＆天然温泉リゾート',
              desc: '川奈・軽井沢のチャンピオンコース併設温泉ホテル',
              badge: 'ゴルフ旅'
            },
            {
              slug: 'cultural-property-heritage-sukiya-ryokan-stay',
              title: '🏛️ 登録有形文化財・名建築旅館',
              desc: '修善寺・渋温泉の宮大工の技が息づく百年の歴史宿',
              badge: '建築美'
            },
            {
              slug: 'pet-friendly-private-dogrun-luxury-villa',
              title: '🐶 愛犬同伴・ドッグラン付きヴィラ',
              desc: '伊豆高原・那須の専用ドッグラン＆客室露天風呂宿',
              badge: 'ペット旅'
            },
            {
              slug: 'early-spring-kawazu-sakura-plum-blossom-hotsprings',
              title: '🌸 早咲き河津桜＆梅まつり温泉',
              desc: '伊豆河津・熱海のひと足早い春の絶景花見露天風呂',
              badge: '春先取り'
            },
            {
              slug: 'craft-beer-brewery-hotel-ranking-stay',
              title: '🍺 クラフトビール＆ブルワリー宿',
              desc: '軽井沢・修善寺の醸造所直結＆出来立て生ビール宿',
              badge: 'ビール旅'
            },
            {
              slug: 'dark-sky-starry-observatory-resort-stay',
              title: '🌌 星空保護区・天体観測リゾート',
              desc: '阿智村・八ヶ岳の満天の天の川＆大型天体望遠鏡ホテル',
              badge: '星空ツアー'
            },
            {
              slug: 'infinity-ocean-onsen-panoramic-luxury-stay',
              title: '🌊 インフィニティ露天風呂名宿',
              desc: '熱海・南紀白浜の海と空に溶け込むパノラマ温泉',
              badge: '絶景温泉'
            },
            {
              slug: 'girls-trip-afternoon-tea-luxury-spa-stay',
              title: '🫖 アフタヌーンティー＆極上スパ',
              desc: '京都・横浜の三段スタンドスイーツ＆アロマリゾート',
              badge: '女子旅'
            },
            {
              slug: 'sea-of-clouds-sky-terrace-resort-stay',
              title: '☁️ 雲海テラス＆天空パノラマ宿',
              desc: 'トマム・志賀高原の早朝雲上デッキ＆天空露天風呂',
              badge: '天空ホテル'
            },
            {
              slug: 'private-onsen-sauna-charter-luxury-villa',
              title: '🏡 一棟貸切・温泉＆サウナ付きヴィラ',
              desc: '白馬・那須の完全貸切プライベートサウナ＆源泉掛け流し',
              badge: '一棟貸し'
            },
            {
              slug: 'winery-vineyard-auberge-wine-pairing-stay',
              title: '🍇 ワイナリー＆ワインオーベルジュ',
              desc: '勝沼・余市の葡萄畑パノラマ＆日本ワインペアリング宿',
              badge: 'ワイン旅'
            },
            {
              slug: 'traditional-irori-charcoal-hearth-satoyama-stay',
              title: '🔥 囲炉裏料理＆里山名湯古民家宿',
              desc: '奥飛騨・白川郷の炭火焼き岩魚・ジビエとノスタルジー宿',
              badge: '囲炉裏会席'
            },
            {
              slug: 'medicinal-carbonated-mud-springs-healing-stay',
              title: '🫧 炭酸泉＆泥湯・美肌薬湯治宿',
              desc: '長湯温泉・別府のシュワシュワ天然泡＆濃厚泥パック',
              badge: '美肌湯治'
            },
            {
              slug: 'aquarium-themepark-official-family-hotel-stay',
              title: '🐬 水族館＆テーマパーク直結ホテル',
              desc: '鴨川・美ら海などパーク直結のパスポート付き宿',
              badge: 'パーク直結'
            },
            {
              slug: 'sunset-magic-hour-oceanview-onsen-stay',
              title: '🌇 夕日絶景・マジックアワー海宿',
              desc: '西伊豆・夕日ヶ浦の水平線に沈む黄金の夕陽露天風呂',
              badge: '夕日絶景'
            },
            {
              slug: 'car-free-train-access-girls-trip-stay',
              title: '🚆 車なし・駅近アクセス女子旅宿',
              desc: '金沢・松本の新幹線・特急駅から徒歩で行ける温泉ホテル',
              badge: '車なし旅'
            },
            {
              slug: 'book-hotel-library-reading-retreat-stay',
              title: '📚 ブックホテル＆読書リトリート',
              desc: '箱根・京都の泊まれる図書館＆本に囲まれる静寂の宿',
              badge: '読書旅'
            },
            {
              slug: 'kuroge-wagyu-teppanyaki-gourmet-luxury-stay',
              title: '🥩 黒毛和牛鉄板焼き＆美食宿',
              desc: '松阪牛・近江牛をシェフが目の前で焼く極上カウンター',
              badge: '肉グルメ'
            },
            {
              slug: 'sulfur-springs-milky-white-onsen-town-stay',
              title: '♨️ 乳白色硫黄泉＆温泉街情緒宿',
              desc: '草津・蔵王・野沢温泉の濃厚にごり湯＆湯めぐり街歩き',
              badge: 'にごり湯'
            },
            {
              slug: 'three-generation-family-large-room-luxury-stay',
              title: '👨‍👩‍👧‍👦 3世代家族・大型客室＆離れ宿',
              desc: '熱海・那須のコネクティングルーム＆露天風呂付き離れ',
              badge: '3世代旅行'
            },
            {
              slug: 'scenic-railway-sl-trolley-train-onsen-stay',
              title: '🚂 観光列車・SL＆トロッコ温泉宿',
              desc: '黒部峡谷・大井川鐵道の絶景鉄道旅と沿線名湯旅館',
              badge: '鉄道旅'
            },
            {
              slug: 'waterfall-gorge-healing-forest-onsen-stay',
              title: '🍃 滝見露天風呂＆森林セラピー宿',
              desc: '奥入瀬・天城湯ヶ島のマイナスイオン溢れる清流滝見温泉',
              badge: '森林浴'
            },
            {
              slug: 'sake-bar-free-flow-tasting-onsen-stay',
              title: '🍶 地酒BAR＆日本酒飲み比べ宿',
              desc: '越後湯沢・赤湯の常時数十種の銘酒サーバー＆会席ペアリング',
              badge: '日本酒旅'
            },
            {
              slug: 'winter-fugu-pufferfish-gourmet-onsen-stay',
              title: '🐡 とらふぐ会席＆ひれ酒名宿',
              desc: '下関・日間賀島の天然とらふぐ刺し・白子焼き・ひれ酒の贅',
              badge: 'ふぐ美食'
            },
            {
              slug: 'limestone-cave-underground-lake-adventure-stay',
              title: '💎 鍾乳洞探検＆地底湖アドベンチャー宿',
              desc: '龍泉洞・秋芳洞のドラゴンブルー地底湖と周辺名湯旅館',
              badge: '地底探検'
            },
            {
              slug: 'private-pool-luxury-resort-villa-stay',
              title: '🏊 専用プール付きラグジュアリーヴィラ',
              desc: '宮古島・淡路島の24時間泳げるプライベートプール邸宅',
              badge: 'プールヴィラ'
            },
            {
              slug: 'temple-shukubo-shojin-cuisine-mindfulness-stay',
              title: '🪷 古刹宿坊＆本格精進料理ステイ',
              desc: '高野山・善光寺の朝のお勤め体験と滋味あふれる精進料理',
              badge: 'マインドフルネス'
            },
            {
              slug: 'scenic-cycling-shimanami-lake-resort-stay',
              title: '🚴 しまなみ＆ビワイチ絶景サイクリング宿',
              desc: '尾道・しまなみ海道の部屋持ち込み対応＆展望温泉ホテル',
              badge: 'サイクリング'
            },
            {
              slug: 'literary-heritage-bungo-historic-ryokan-stay',
              title: '📖 文豪ゆかりの老舗温泉旅館',
              desc: '城崎・湯河原・伊豆の太宰治や川端康成が愛した静寂の宿',
              badge: '文豪ステイ'
            },
            {
              slug: 'terraced-rice-fields-satoyama-healing-onsen-stay',
              title: '🌾 日本の原風景・棚田と里山温泉宿',
              desc: '十日町・能登の黄金の棚田を望む秘湯と郷土野菜会席',
              badge: '里山癒やし'
            },
            {
              slug: 'spring-water-soba-tofu-gourmet-onsen-stay',
              title: '🥢 名水仕込みの十割蕎麦＆湯豆腐会席宿',
              desc: '安曇野・京都嵐山・黒川の清冽な名水グルメと美肌湯',
              badge: '名水美食'
            },
            {
              slug: 'japan-historic-classic-hotel-heritage-stay',
              title: '🏨 日本の名門クラシックホテル',
              desc: '日光・箱根・軽井沢の明治・大正の薫り漂う有形文化財ホテル',
              badge: '名門ホテル'
            },
            {
              slug: 'winter-kue-gourmet-luxury-fish-onsen-stay',
              title: '🍲 幻の高級魚・天然本クエ鍋会席宿',
              desc: '南紀白浜・平戸のコラーゲンたっぷり極上クエ尽くしと絶景露天',
              badge: '冬のクエ鍋'
            },
            {
              slug: 'mt-fuji-view-private-open-air-bath-luxury-stay',
              title: '🗻 霊峰富士ビュー・客室露天風呂宿',
              desc: '河口湖・山中湖の部屋から雄大な富士山を独占する絶景ステイ',
              badge: '富士山絶景'
            },
            {
              slug: 'ocean-view-seafood-bbq-hamayaki-onsen-stay',
              title: '🦐 絶景海一望＆海鮮浜焼き・磯料理宿',
              desc: '南房総・伊豆のサザエやエビを豪快に焼く浜焼きとオーシャンビュー',
              badge: '海鮮浜焼き'
            },
            {
              slug: 'valley-gorge-suspension-bridge-secret-onsen-stay',
              title: '🌉 エメラルド渓谷美＆吊り橋秘境露天宿',
              desc: '祖谷・寸又峡の絶景吊り橋とマイナスイオンあふれる渓流温泉',
              badge: '渓谷秘湯'
            },
            {
              slug: 'seasonal-flower-garden-botanical-healing-onsen-stay',
              title: '🌷 四季の花畑＆日本名園の花巡り温泉宿',
              desc: '伊豆・箱根の四季折々の草花と広大な日本庭園に癒やされるステイ',
              badge: '名園花巡り'
            },
            {
              slug: 'luxury-pastry-chef-sweets-dessert-gourmet-stay',
              title: '🍰 専属パティシエ特製スイーツ＆デザート宿',
              desc: '軽井沢・箱根の一流シェフのデザートビュッフェ＆優美なリゾート',
              badge: '極上スイーツ'
            },
            {
              slug: 'private-sauna-self-loyly-barrel-sauna-stay',
              title: '🧖 客室専用サウナ＆セルフロウリュ宿',
              desc: '富士・八ヶ岳の完全プライベート空間で極上外気浴＆ととのい',
              badge: '客室サウナ'
            },
            {
              slug: 'stargazing-telescope-planetarium-night-sky-resort',
              title: '🔭 本格天体望遠鏡＆満天星空リゾート',
              desc: '南阿蘇・野辺山の天の川観測ツアーと高原プラネタリウム宿',
              badge: '天体観測'
            },
            {
              slug: 'luxury-glamping-dome-tent-private-onsen-stay',
              title: '⛺ 温泉付きドームテント＆星空グランピング',
              desc: '冷暖房完備ドームテントと専用温泉露天＆BBQのアウトドア宿',
              badge: '星空グランピング'
            },
            {
              slug: 'traditional-kaiseki-in-room-open-air-bath-kyoto',
              title: '🍵 京都町家情緒＆京会席・客室露天風呂宿',
              desc: '嵐山・東山の風情ある数寄屋造りと坪庭・出汁香る京会席の贅',
              badge: '京都名宿'
            },
            {
              slug: 'onsen-ryokan-with-oceanfront-infinity-pool-stay',
              title: '🏊 海直結インフィニティプール＆展望温泉',
              desc: '海と一体化する幻想プールと絶景展望露天風呂の極上リゾート',
              badge: 'インフィニティ'
            },
            {
              slug: 'hot-spring-cure-modern-toji-wellness-stay',
              title: '🌿 現代湯治＆ウェルネス温泉リトリート',
              desc: '成分濃厚な名湯と自然食・温冷交代浴で心身を根本から整える宿',
              badge: '現代湯治'
            },
            {
              slug: 'firefly-viewing-summer-stream-night-walk-stay',
              title: '🌌 初夏のホタル観賞＆清流の涼名湯宿',
              desc: '敷地内で蛍が乱舞する幻想的な夜と涼やかな川床料理を楽しむ旅',
              badge: 'ホタル観賞'
            },
            {
              slug: 'traditional-craft-pottery-artisan-village-stay',
              title: '🏺 名窯元の陶芸体験＆手仕事の器と名湯宿',
              desc: '益子・有田・信楽などの焼き物の里で陶芸ろくろ体験と美味会席',
              badge: '陶芸の里'
            },
            {
              slug: 'luxury-rooftop-infinity-spa-city-hotel-stay',
              title: '🌆 都会の摩天楼・ルーフトップ温泉ホテル',
              desc: '最上階から夜景と星空を一望するインフィニティスパ＆極上シティリゾート',
              badge: 'ルーフトップ温泉'
            },
            {
              slug: 'isolated-island-remote-paradise-resort-stay',
              title: '🏝️ 日本の離島リゾート＆隠れ家ビーチ温泉',
              desc: '小豆島・屋久島・奄美大島の手つかずの自然と海・島時間に包まれる宿',
              badge: '離島リゾート'
            },
            {
              slug: 'geothermal-hell-steamed-cuisine-onsen-stay',
              title: '♨️ 源泉温泉蒸気・絶品「地獄蒸し」料理宿',
              desc: '別府・鉄輪の高温蒸気で素材の旨味を凝縮したヘルシー美食と名湯',
              badge: '地獄蒸し美食'
            },
            {
              slug: 'forest-cabin-nordic-wood-stove-retreat-stay',
              title: '🪵 薪ストーブ＆北欧ログキャビン温泉宿',
              desc: 'パチパチ爆ぜる炎の温もりと森林浴・薪サウナで癒やされるコテージ',
              badge: '薪ストーブ'
            },
            {
              slug: 'ancient-cedar-forest-unesco-world-heritage-stay',
              title: '⛩️ 世界遺産・熊野古道＆聖地巡礼の名湯宿',
              desc: '千年以上の歴史を誇る湯峰温泉や川湯温泉で祈りの道を歩く癒やしの旅',
              badge: '世界遺産・聖地'
            },
            {
              slug: 'historical-merchant-town-machiya-hotel-stay',
              title: '🏘️ 商家町・蔵の町に泊まる分散型古民家ホテル',
              desc: '重伝建地区の町全体がホテルに！築百年以上の旧家・蔵を改装した上質空間',
              badge: '分散型古民家'
            },
          ].map(item => (
            <Link
              key={item.slug}
              href={`/${item.slug}`}
              className="group bg-white p-5 rounded-2xl border border-emerald-950/10 hover:border-teal-700/40 hover:shadow-md transition space-y-2 block"
            >
              <span className="text-[9px] font-extrabold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-full inline-block">
                {item.badge}
              </span>
              <h3 className="text-sm font-bold text-emerald-950 group-hover:text-teal-800 transition line-clamp-1">
                {item.title}
              </h3>
              <p className="text-xs text-emerald-950/70 line-clamp-2">
                {item.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* 特集記事グリッド（クライアントコンポーネント） */}
      <FeaturesGrid initialPosts={posts} />
    </div>
  );
}
