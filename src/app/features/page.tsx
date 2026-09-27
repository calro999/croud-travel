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
              slug: 'winter-gunma-minakami-onsen-tanigawa-yukimi-stay',
              title: "みなかみ谷川岳初冠雪利根川雪見露天＆宝川上州牛舞茸",
              desc: "11月下旬から12月にかけて谷川連峰が白銀の初冠雪を纏い、利根川源流の渓…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-nagasaki-unzen-onsen-jigoku-mist-beef-stay',
              title: "雲仙普賢岳霧氷＆地獄の湯煙白濁硫黄泉雲仙あかね牛",
              desc: "11月下旬から12月にかけて雲仙普賢岳や仁田峠を純白に染める自然の芸術「…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-kumamoto-amakusa-shimoda-onsen-sunset-seafood-stay',
              title: "天草下田東シナ海夕陽百選露天＆伊勢海老車海老とらふぐ",
              desc: "11月から12月にかけて東シナ海に沈む茜色の夕陽が最も美しく輝く熊本「天…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-nagano-suwa-onsen-lake-view-shinshu-beef-stay',
              title: "上諏訪湖畔パノラマ露天千人風呂＆諏訪五蔵新酒信州牛",
              desc: "11月から12月にかけて冷涼な澄み切った大気の中に冠雪の八ヶ岳と富士山が…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-iwate-tsunagi-onsen-koiwai-illumination-stay',
              title: "盛岡つなぎ御所湖岩手山初冠雪＆小岩井銀河イルミ前沢牛",
              desc: "11月下旬から12月にかけて東北最大級のウインターイルミネーション「小岩…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-saga-takeo-onsen-romon-saga-beef-stay',
              title: "武雄国重文朱塗り楼門美肌古湯＆最高峰A5佐賀牛",
              desc: "1300年の歴史を誇り、東京駅を設計した辰野金吾が手がけた国重要文化財「…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-fukushima-bandai-atami-onsen-bihada-swan-stay',
              title: "磐梯熱海萩姫美肌ぬる湯＆猪苗代湖白鳥極上福島牛",
              desc: "南北朝時代の萩姫伝説が息づく郡山の奥座敷「磐梯熱海温泉」。pH9を超える…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-ishikawa-yamanaka-onsen-kakusenkei-kano-crab-stay',
              title: "山中鶴仙渓雪景色＆青タグ加能ガニ香箱ガニ能登牛",
              desc: "松尾芭蕉が「有馬・草津と並ぶ扶桑三名湯」と称賛した石川・加賀の名湯「山中…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-yamagata-tendo-onsen-lafrance-yamagata-beef-stay',
              title: "天童将棋の里奥羽山脈雪見露天＆旬ラフランス山形牛",
              desc: "将棋駒の生産量日本一を誇る山形の名湯「天童温泉」。11月から12月にかけ…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-hokkaido-hakodate-yunokawa-onsen-isaribi-seafood-stay',
              title: "函館湯の川津軽海峡漁火露天＆冬イカ毛蟹大沼牛",
              desc: "11月から12月にかけて津軽海峡にイカ釣り漁船の幻想的な漁火（いさりび）…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-kagoshima-kirishima-onsen-ryoma-black-pork-stay',
              title: "霧島連山湯煙パノラマ泥湯＆かごしま黒豚しゃぶ黒毛和牛",
              desc: "坂本龍馬とおりょうが日本初の新婚旅行で訪れた九州屈指の名湯「霧島温泉郷」…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-hyogo-awajishima-sumoto-3year-torafugu-stay',
              title: "淡路島洲本紀淡海峡朝日露天＆淡路島3年とらふぐ淡路牛",
              desc: "鳴門海峡の激流が育む冬の最高峰ブランド「淡路島3年とらふぐ」。通常2年の…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-niigata-tsukioka-onsen-emerald-bihada-stay',
              title: "月岡エメラルド硫黄泉雪見露天＆村上牛寒ブリ新酒",
              desc: "国内第2位の硫黄含有量を誇り、神秘のエメラルドグリーンに輝く越後の名湯「…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-shimane-tamatsukuri-onsen-kamiarizuki-matsuba-crab-stay',
              title: "玉造出雲神在月美肌湯＆山陰松葉がにしまね和牛",
              desc: "全国の八百万の神々が集う11月の出雲「神在月」。奈良時代の風土記に「神の…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-fukui-awara-onsen-echizen-crab-stay',
              title: "あわら庭園露天風呂＆黄色タグ越前がに若狭牛",
              desc: "11月6日の越前がに解禁で歓喜に沸く福井の名湯「あわら温泉」。明治の開湯…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-tochigi-nasu-onsen-shikanoyu-snow-stay',
              title: "那須茶臼岳雪景色鹿の湯＆最高峰那須与一牛高原会席",
              desc: "白鹿が傷を癒やした伝説から千三百年余。皇室の那須御用邸が置かれ、茶臼岳の…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-yamaguchi-nagato-yumoto-onsen-fugu-stay',
              title: "長門湯本音信川冬灯り＆下関直送本とらふぐやまぐち和牛",
              desc: "室町時代に住吉大明神の神託により開かれた山口県最古の名湯「長門湯本温泉」…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-nagano-shirahone-onsen-milky-snow-stay',
              title: "白骨北アルプス乳白色霊泉＆信州プレミアム牛投汁そば",
              desc: "北アルプス乗鞍岳の山懐、標高1,400メートルの深い原生林に抱かれた日本…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-hokkaido-jozankei-onsen-snow-keikoku-stay',
              title: "定山渓豊平川雪渓谷＆北海道三大蟹道産和牛",
              desc: "修験僧・美泉定山がアイヌの人々に導かれ拓いた札幌の奥座敷「定山渓温泉」。…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-toyama-unazuki-onsen-kurobe-snow-stay',
              title: "宇奈月黒部峡谷雪景色＆富山湾寒ブリ紅ズワイガニ",
              desc: "北アルプス黒部川の清流が刻んだ断崖絶壁に広がる宇奈月温泉。11月中旬の晩…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-saga-ureshino-onsen-bihada-yudofu-stay',
              title: "嬉野日本三大美肌湯＆とろける温泉湯豆腐佐賀牛",
              desc: "神功皇后の伝説が息づく「日本三大美肌の湯」嬉野温泉。冬の寒さを優しく包む…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-tottori-kaike-onsen-matsuba-crab-stay',
              title: "皆生松葉ガニ解禁＆大山雪景色鳥取和牛",
              desc: "11月6日、日本海屈指のカニ水揚げを誇る境港で冬の松葉ガニ漁が一斉解禁。…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-wakayama-nanki-shirahama-kue-hotspring-stay',
              title: "白浜太平洋夕陽＆幻の天然本クエ鍋熊野牛",
              desc: "万葉集の昔から歴代天皇が湯治に訪れた日本三古湯・南紀白浜温泉。11月から…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-miyagi-akiu-onsen-sendai-beef-serinabe-stay',
              title: "秋保磊々峡初冬景観＆仙台せり鍋仙台牛",
              desc: "皇室ゆかりの「日本三御湯」にして伊達政宗公の湯浴み御殿の歴史を誇る秋保温…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-tochigi-kinugawa-onsen-valley-snow-stay',
              title: "鬼怒川初冬渓谷美＆日光ゆばとちぎ和牛",
              desc: "日光東照宮領の御用温泉として大名や高僧のみに入湯が許された鬼怒川温泉。1…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-kyoto-amanohashidate-matsuba-crab-stay',
              title: "天橋立カニ解禁＆間人ガニ寒ブリ",
              desc: "日本三景の筆頭・京都府丹後天橋立。11月6日のズワイガニ漁解禁とともに美…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-iwate-hanamaki-onsen-yukimi-maesawa-beef-stay',
              title: "花巻温泉郷白銀雪見＆前沢牛白金豚",
              desc: "宮沢賢治が愛したイーハトーブの地・岩手県花巻温泉郷。11月下旬の初雪から…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-kanagawa-yugawara-onsen-bungo-kaiseki-stay',
              title: "奥湯河原晩秋紅葉＆相模湾伊勢海老",
              desc: "万葉集に唯一詠まれた関東最古の名湯・湯河原温泉。11月下旬から12月上旬…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-nagano-shibu-onsen-nine-sotoyu-stay',
              title: "渋温泉九湯めぐり＆金具屋ライトアップ",
              desc: "開湯1300年、下駄の音が心地よく響く長野県・信州渋温泉。宿泊者限定のマ…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-gifu-okuhida-onsen-yukimi-roten-stay',
              title: "奥飛騨雪見露天＆飛騨牛朴葉味噌",
              desc: "北アルプス穂高連峰の麓に広がる日本屈指の温泉天国・奥飛騨温泉郷。11月下…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-ishikawa-kaga-yamashiro-kano-crab-stay',
              title: "加賀温泉加能ガニ解禁＆九谷焼会席",
              desc: "11月6日のズワイガニ漁解禁で美食の最盛期を迎える石川・加賀温泉郷。開湯…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-hyogo-arima-onsen-kinsen-kobe-beef-stay',
              title: "有馬金泉銀泉＆六甲山夜景神戸牛",
              desc: "日本三古湯・三名泉の筆頭・有馬温泉。海水の約2倍の塩分を含み冬でも湯冷め…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-niigata-echigo-yuzawa-snow-sake-stay',
              title: "越後湯沢雪国＆南魚沼新米地酒",
              desc: "東京から新幹線で最速約70分、川端康成『雪国』の舞台・新潟越後湯沢温泉。…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-hokkaido-noboribetsu-onsen-snow-jigokudani-stay',
              title: "登別地獄谷雪景色＆冬毛ガニ白老牛",
              desc: "11月下旬の初雪から12月の白銀世界へと移ろう北海道・登別温泉。もうもう…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-kumamoto-kurokawa-onsen-yuakari-stay',
              title: "黒川湯あかり竹灯籠＆阿蘇あか牛",
              desc: "11月から12月にかけて阿蘇外輪山の冷涼な風が吹き抜ける熊本・黒川温泉。…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-yamanashi-isawa-onsen-wine-koshu-beef-stay',
              title: "石和美肌湯＆山梨ヌーボー甲州牛",
              desc: "11月3日の山梨ヌーボー解禁とともに華やぐ甲州・石和温泉。雪化粧の富士山…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-fukushima-aizu-higashiyama-snow-heritage-stay',
              title: "会津東山雪見露天＆極上馬刺し",
              desc: "11月下旬の初雪から12月の白銀世界へと移ろう会津の奥座敷・東山温泉。開…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-ehime-dogo-onsen-taimeshi-heritage-stay',
              title: "道後温泉本館＆瀬戸内鯛めし",
              desc: "保存修理工事を終えて完全復活した日本最古の名湯・道後温泉本館。11月・1…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-shizuoka-shuzenji-late-momiji-bamboo-stay',
              title: "修善寺竹林紅葉＆伊豆牛",
              desc: "日本で最も遅い11月下旬〜12月上旬の紅葉美を誇る修善寺温泉。桂川沿いの…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-gunma-ikaho-stone-steps-joshu-beef-stay',
              title: "伊香保石段街＆上州牛会席",
              desc: "11月から12月にかけて澄み切った初冬の空気に包まれる伊香保温泉。365…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-akita-nyuto-onsen-yukimi-kiritanpo-stay',
              title: "乳頭温泉郷雪見露天＆きりたんぽ",
              desc: "11月中旬からブナの原生林が純白の雪に包まれる乳頭温泉郷。乳白色の湯けむ…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-kanagawa-hakone-fuji-view-onsen-stay',
              title: "芦ノ湖富士山絶景＆箱根名湯",
              desc: "年間で最も晴天率が高い初冬の芦ノ湖。紺碧の湖面に映る雪化粧の白銀富士と平…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-nagano-achimura-hirugami-starry-sky-stay',
              title: "阿智村日本一の星空＆昼神美肌湯",
              desc: "環境省認定「日本一星が輝いて見える場所」阿智村。空気が最も澄み切る初冬の…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-gifu-gero-onsen-fireworks-hida-beef-stay',
              title: "下呂冬花火＆飛騨牛朴葉味噌",
              desc: "12月の毎週土曜夜に冬空を華麗に染める「下呂温泉花火ミュージカル冬公演」…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-yamagata-ginzan-onsen-snow-taisho-stay',
              title: "銀山温泉ガス灯＆尾花沢牛",
              desc: "11月下旬の初雪から12月の白銀世界へと移ろう銀山温泉。銀山川沿いに並ぶ…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-shizuoka-izukogen-granillumi-ito-onsen-stay',
              title: "伊豆高原グランイルミ＆金目鯛",
              desc: "11月中旬から本格シーズン！全国第1位の体験型ナイトエンターテインメント…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-hyogo-kinosaki-onsen-matsuba-crab-stay',
              title: "城崎青タグ津居山ガニ＆7外湯",
              desc: "11月6日解禁！地元・津居山港直送の青タグ付き活松葉ガニフルコース（カニ…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-yamagata-onogawa-yonezawa-beef-stay',
              title: "米沢牛すき焼き＆小野川美肌湯",
              desc: "11月下旬から里山が白銀に包まれる米沢の奥座敷「小野川温泉」。小野小町ゆ…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-tochigi-okunikko-yumoto-snow-onsen-stay',
              title: "奥日光雪見にごり湯＆湯波",
              desc: "11月中旬から雪化粧が始まり12月には純白の世界が広がる標高1500mの…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-kyoto-arashiyama-onsen-yudofu-stay',
              title: "嵐山雪景色＆名物湯豆腐",
              desc: "晩秋の紅葉から冬の静寂へと表情を変える京都・嵐山と嵯峨野。渡月橋にかかる…",
              badge: '11・12月特集'
            },
            {
              slug: 'winter-fukuoka-hakata-christmas-advent-gourmet-stay',
              title: '🎄 福岡クリスマス＆博多もつ鍋温泉',
              desc: '博多駅前・天神の光の街と本場もつ鍋・天然温泉ホテル',
              badge: '11・12月特集'
            },
            {
              slug: 'winter-nagasaki-huistenbosch-christmas-lights-stay',
              title: '🏰 ハウステンボス1300万球イルミ',
              desc: '日本一の光の街のクリスマスとヨーロッパ風リゾート宿',
              badge: '11・12月特集'
            },
            {
              slug: 'winter-iseshima-ujibashi-sunrise-matoya-oyster-stay',
              title: '🌅 伊勢神宮冬至朝日＆的矢かき温泉',
              desc: '宇治橋大鳥居の奇跡の日の出と冬至参拝・的矢かき名宿',
              badge: '11・12月特集'
            },
            {
              slug: 'winter-nagano-nozawa-onsen-powder-snow-sotoyu-stay',
              title: '⛷️ 野沢温泉パウダースノー＆13外湯',
              desc: '天然雪100%ゲレンデと名物外湯めぐり・信州牛美食宿',
              badge: '12月開幕'
            },
            {
              slug: 'winter-tottori-misasa-onsen-matsuba-crab-stay',
              title: '🦀 鳥取タグ付き松葉ガニ＆三朝温泉',
              desc: '11月解禁！境港直送の活カニフルコースと世界屈指のラジウム泉',
              badge: '11月解禁'
            },
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
            {
              slug: 'autumn-leaves-illuminated-night-onsen-stay',
              title: '🍁 紅葉ライトアップ＆夜景庭園露天風呂宿',
              desc: '京都・箱根の漆黒の夜空に浮かび上がる燃える紅葉と名湯の競演',
              badge: '紅葉温泉'
            },
            {
              slug: 'art-museum-stay-contemporary-architecture-resort',
              title: '🎨 名建築＆現代アートに泊まる温泉リゾート',
              desc: '直島・箱根の名建築家が手がけた洗練デザインとアート鑑賞ステイ',
              badge: 'アートホテル'
            },
            {
              slug: 'super-panoramic-ropeway-mountain-top-hotel-stay',
              title: '🚠 雲上マウンテンビュー＆山頂展望温泉ホテル',
              desc: 'ロープウェイ直結！標高1,000m超の雲海とパノラマ絶景露天風呂',
              badge: '雲上パノラマ'
            },
            {
              slug: 'retro-showa-nostalgic-hotspring-inn-stay',
              title: '📻 昭和レトロ＆ノスタルジック秘湯宿',
              desc: '渋温泉・四万温泉の木造建築・タイル風呂と温かい郷土料理の癒やし',
              badge: '昭和レトロ'
            },
            {
              slug: 'craft-gin-whisky-distillery-boutique-stay',
              title: '🥃 銘酒ウイスキー＆本格BARホテル',
              desc: '暖炉のある重厚なバーで楽しむシングルモルトと大人の夜長ステイ',
              badge: '美酒BAR'
            },
            {
              slug: 'private-beach-secluded-cove-luxury-villa-stay',
              title: '🏖️ プライベートビーチ直結＆完全貸切ヴィラ',
              desc: '客室から白砂のビーチへ直結！波打ち際を独占する最高峰オーシャンヴィラ',
              badge: 'プライベート海'
            },
            {
              slug: 'ancient-jomon-forest-cave-onsen-stay',
              title: '🪨 天然洞窟風呂＆巨岩露天の秘境宿',
              desc: '岩盤をくり抜いた神秘の洞窟温泉と太古の地球エネルギーを体感する旅',
              badge: '天然洞窟風呂'
            },
            {
              slug: 'matcha-green-tea-experience-onsen-stay',
              title: '🍵 銘茶の香り＆本格茶室・茶湯温泉宿',
              desc: '宇治・静岡の数寄屋造り茶室体験とカテキン茶湯露天・特製茶懐石',
              badge: 'お茶旅温泉'
            },
            {
              slug: 'super-panoramic-footbath-cafe-resort-stay',
              title: '☕ 絶景足湯カフェ＆テラスBAR付きホテル',
              desc: '海や山を眺めながら足湯に浸かりクラフトビールやスイーツを楽しむ宿',
              badge: '足湯カフェ'
            },
            {
              slug: 'organic-farm-stay-vegetable-gastronomy-resort',
              title: '🥗 自家農園オーガニック＆ローカル美食宿',
              desc: '朝採れ無農薬野菜とハーブのファーム・トゥ・テーブル会席と美肌湯',
              badge: '農園美食'
            },
            {
              slug: 'ski-in-ski-out-powder-snow-luxury-resort',
              title: '🎿 ゲレンデ直結スキーイン・スキーアウト宿',
              desc: 'ホテルから直接パウダースノーへ！滑り終えたら展望露天風呂へ直行',
              badge: 'ゲレンデ直結'
            },
            {
              slug: 'candle-night-lantern-floating-romantic-stay',
              title: '🕯️ キャンドルナイト＆幻想ランタン温泉宿',
              desc: '無数の竹灯籠やキャンドルが灯る回廊と幻想的な夜を彩るロマンティック宿',
              badge: 'キャンドル灯り'
            },
            {
              slug: 'luxury-a5-matsusaka-yonezawa-beef-shabu-sukiyaki-stay',
              title: '🥩 A5ブランド牛すき焼き・しゃぶしゃぶ宿',
              desc: '松阪牛・米沢牛のとろける霜降り肉と秘伝割り下の極上肉会席',
              badge: 'A5ブランド牛'
            },
            {
              slug: 'traditional-japanese-sweet-wagashi-matcha-onsen-stay',
              title: '🍡 老舗和菓子＆抹茶BAR付き和スイーツ宿',
              desc: '出来立て生和菓子や本わらび餅、点てたての抹茶を味わう大人の茶寮',
              badge: '和スイーツ'
            },
            {
              slug: 'super-panoramic-canyon-train-onsen-stay',
              title: '🚂 絶景トロッコ列車旅＆峡谷沿線温泉宿',
              desc: '黒部峡谷・嵯峨野の爽快トロッコ旅と清流露天風呂のマイナスイオン',
              badge: 'トロッコ旅'
            },
            {
              slug: 'private-observatory-planetarium-luxury-villa-stay',
              title: '🌌 プラネタリウム＆星空シアター宿',
              desc: '館内プラネタリウムや星空解説、天の川を望む露天風呂の宇宙ステイ',
              badge: 'プラネタリウム'
            },
            {
              slug: 'natural-hotspring-with-authentic-stone-spa-ganbanyoku',
              title: '🪨 本格天然岩盤浴＆温活デトックス温泉宿',
              desc: '天然鉱石の遠赤外線スパと源泉掛け流し美肌湯で芯から整うリセット旅',
              badge: '岩盤浴デトックス'
            },
            {
              slug: 'historic-samurai-residence-castle-town-stay',
              title: '🏯 武家屋敷＆城下町歴史ロマン温泉宿',
              desc: '重厚な薬医門や格式高い日本庭園、江戸の風情を残す城下町の名宿',
              badge: '武家屋敷'
            },
            {
              slug: 'luxury-chartered-yacht-cruising-resort-stay',
              title: '⛵ プライベートクルーズ＆マリーナリゾート',
              desc: '専用クルーザーでのサンセットクルーズと波音露天風呂の極上休日',
              badge: 'クルーズリゾート'
            },
            {
              slug: 'traditional-soba-making-experience-onsen-stay',
              title: '🥢 本格そば打ち体験＆打ちたて十割蕎麦宿',
              desc: '信州・出雲の名水で打つ！手打ちそば体験と揚げたて天ぷら・名湯の旅',
              badge: 'そば打ち体験'
            },
            {
              slug: 'super-panoramic-gondola-ski-snow-resort',
              title: '❄️ 山頂ゴンドラ直結＆暖炉ラウンジ宿',
              desc: 'ホテル前からゴンドラで絶景ゲレンデへ直行！暖炉と雪見露天風呂ステイ',
              badge: 'ゴンドラ直結'
            },
            {
              slug: 'organic-wine-fermentation-spa-vineyard-stay',
              title: '🍷 ワイン風呂＆ぶどう畑ワイナリー温泉宿',
              desc: 'ルビー色のワイン風呂と自家醸造ワインペアリングを愉しむ大人の休日',
              badge: 'ワイン風呂'
            },
            {
              slug: 'firefly-squid-toyama-spring-gourmet-onsen-stay',
              title: '🦐 春の富山湾・ホタルイカ＆白エビ会席宿',
              desc: '富山湾の神秘ホタルイカと宝石白エビ尽くし会席＆宇奈月温泉の贅',
              badge: '富山湾グルメ'
            },
            {
              slug: 'traditional-tatami-scenic-zen-temple-garden-stay',
              title: '🪨 枯山水名園＆畳の静寂・禅リトリート宿',
              desc: '白砂の枯山水庭園と朝の座禅・写経体験で心を整えるマインドフルネス',
              badge: '枯山水名園'
            },
            {
              slug: 'luxury-private-onsen-with-grand-piano-stay',
              title: '🎹 ピアノ生演奏＆音楽ラウンジ温泉リゾート',
              desc: '吹き抜けラウンジの生演奏とカクテル・美肌名湯の優雅なマリアージュ',
              badge: 'ピアノ音楽'
            },
            {
              slug: 'traditional-clay-pot-cooked-rice-gourmet-stay',
              title: '🍚 土鍋炊き銀シャリ＆究極の朝ごはん宿',
              desc: '魚沼産コシヒカリを専用土鍋で炊き上げるツヤツヤご飯と名水美食',
              badge: '土鍋銀シャリ'
            },
            {
              slug: 'super-panoramic-cliff-edge-ocean-onsen-stay',
              title: '🌊 断崖絶壁・海一望パノラマ露天風呂宿',
              desc: '海にせり出す断崖から見下ろす水平線と打ち寄せる波のダイナミック絶景',
              badge: '断崖海絶景'
            },
            {
              slug: 'organic-citrus-yuzu-mikan-aroma-spa-stay',
              title: '🍊 特産柑橘アロマ風呂＆ビタミン美肌湯宿',
              desc: '湯船いっぱいに浮かぶ柚子やみかんの香りと天然アロマトリートメント',
              badge: '柑橘アロマ'
            },
            {
              slug: 'cherry-blossom-viewing-private-bath-spring-stay',
              title: '🌸 お花見客室露天風呂＆春の桜ステイ宿',
              desc: '満開の桜を客室露天風呂から独り占め！春の旬を味わう桜会席の贅',
              badge: 'お花見温泉'
            },
            {
              slug: 'traditional-kimono-yukata-rental-hotspring-town-stay',
              title: '👘 選べる色浴衣＆外湯めぐり温泉街の宿',
              desc: '数十種の色浴衣と下駄で街歩き！射的や足湯カフェ、外湯めぐり満喫',
              badge: '色浴衣散策'
            },
            {
              slug: 'luxury-private-cinema-theater-room-resort-stay',
              title: '🎬 客室シアタールーム＆映画没入温泉宿',
              desc: '大画面プロジェクターと高音質スピーカーで映画三昧＆美肌名湯ステイ',
              badge: '客室シアター'
            },
            {
              slug: 'traditional-ayu-sweetfish-charcoal-grill-stay',
              title: '🐟 天然鮎の炭火塩焼き＆清流川床会席宿',
              desc: '長良川・四万十川の香ばしい鮎塩焼き・鮎雑炊と爽快な渓流露天風呂',
              badge: '天然鮎会席'
            },
            {
              slug: 'super-panoramic-canyon-bridge-bungy-stay',
              title: '🚣 爽快アクティビティ＆癒やしの天然温泉宿',
              desc: 'ラフティングやキャニオニングで大自然を満喫した後の極上天然温泉',
              badge: 'アウトドア温泉'
            },
            {
              slug: 'organic-honey-bee-farm-sweet-spa-stay',
              title: '🍯 天然はちみつ＆ハニースパエステ宿',
              desc: '巣蜜トーストや国産ハチミツ食べ比べと極上保湿ハニースパの癒やし',
              badge: 'ハニースパ'
            },
            {
              slug: 'summer-hydrangea-temple-garden-healing-stay',
              title: '💠 紫陽花名所めぐり＆あじさい庭園露天宿',
              desc: '青や紫のあじさい小径散策と湯船に浮かぶ水中花を眺める初夏ステイ',
              badge: 'あじさい温泉'
            },
            {
              slug: 'traditional-fireworks-festival-view-room-stay',
              title: '🎆 客室から花火観賞＆夜景温泉ホテル',
              desc: '部屋のテラスや露天風呂から大迫力の花火を独占観賞する特等席ステイ',
              badge: '花火観賞宿'
            },
            {
              slug: 'luxury-private-onsen-with-artisan-coffee-bar',
              title: '☕ 自家焙煎珈琲×カフェラウンジ温泉宿',
              desc: '専属バリスタのスペシャリティコーヒーとブックカフェ・美肌名湯',
              badge: '自家焙煎珈琲'
            },
            {
              slug: 'traditional-sea-bream-rice-taimeshi-gourmet-stay',
              title: '🐟 名物鯛めし＆天然真鯛会席の温泉宿',
              desc: '愛媛・明石・鳴門の身の引き締まった天然真鯛尽くしと瀬戸内絶景露天',
              badge: '名物鯛めし'
            },
            {
              slug: 'super-panoramic-sunset-dune-resort-stay',
              title: '🏜️ 大砂丘パノラマ＆サンセット温泉リゾート',
              desc: '黄金色の風紋と日本海に沈む夕陽、満天の天の川に包まれる砂丘ステイ',
              badge: '大砂丘絶景'
            },
            {
              slug: 'organic-herbal-steam-bed-ayurveda-resort',
              title: '🌿 本格アーユルヴェーダ＆薬草温活スパ宿',
              desc: '極上シロダーラとハーブスチームバス、薬膳料理で心身を再生する休日',
              badge: 'アーユルヴェーダ'
            },
            {
              slug: 'autumn-chestnut-gourmet-montblanc-stay',
              title: '🌰 搾りたて生モンブラン＆極上和栗宿',
              desc: '小布施・丹波の極細生モンブランやホクホク栗おこわを味わう秋旅',
              badge: '和栗モンブラン'
            },
            {
              slug: 'traditional-bamboo-forest-path-quiet-onsen-stay',
              title: '🎋 竹林ライトアップ＆静寂露天風呂宿',
              desc: '青竹が風にそよぐ小径と幻想的なライトアップに包まれる大人の隠れ家',
              badge: '竹林の静寂'
            },
            {
              slug: 'luxury-private-onsen-with-art-gallery-stay',
              title: '🖼️ 館内アートギャラリー＆美の空間温泉宿',
              desc: '現代アートの企画展や陶芸ギャラリーを併設したミュージアムステイ',
              badge: 'アートギャラリー'
            },
            {
              slug: 'traditional-eel-unagi-charcoal-kabayaki-stay',
              title: '🍱 炭火うなぎ蒲焼き＆極上ひつまぶし宿',
              desc: '浜名湖・三島・柳川の秘伝タレで焼き上げる香ばしいうな重と名湯',
              badge: 'うなぎ蒲焼き'
            },
            {
              slug: 'super-panoramic-lake-canoe-kayak-resort-stay',
              title: '🛶 湖畔カヌー・SUP＆レイクビュー温泉リゾート',
              desc: '透明な湖面に漕ぎ出すカヌー体験と湖畔の展望露天風呂で自然と一体に',
              badge: '湖畔カヌー'
            },
            {
              slug: 'organic-flower-bath-rose-herb-spa-stay',
              title: '🌹 生バラ風呂＆ローズアロマ温泉宿',
              desc: '湯船いっぱいに浮かぶ生バラの花びらと甘く高貴な香りの華やかステイ',
              badge: '生バラ風呂'
            },
            {
              slug: 'winter-hot-pot-gibier-wild-game-satoyama-stay',
              title: '🐗 天然猪肉ぼたん鍋＆里山ジビエ温泉宿',
              desc: '丹波篠山の熟成味噌で煮込む熱々ぼたん鍋と里山の恵み・名湯の旅',
              badge: 'ぼたん鍋'
            },
            {
              slug: 'traditional-craft-lacquerware-wajima-aizu-stay',
              title: '🥣 伝統漆器と手仕事美＆名湯の宿',
              desc: '輪島塗・会津塗の本漆器で味わう優美な会席料理と匠の技に触れる旅',
              badge: '伝統漆器'
            },
            {
              slug: 'luxury-private-onsen-with-starry-sky-terrace-hammock',
              title: '🌌 星空ハンモック×テラス露天風呂宿',
              desc: '客室専用ウッドテラスのハンモックで満天の天の川と夜風に癒やされる',
              badge: '星空ハンモック'
            },
            {
              slug: 'traditional-sakura-ebi-shirasu-suruga-bay-stay',
              title: '🦐 桜えびかき揚げ×生しらす会席宿',
              desc: '駿河湾の宝石・桜えび生かき揚げと獲れたて生しらす・富士山パノラマ',
              badge: '桜えび会席'
            },
            {
              slug: 'super-panoramic-cloud-sea-glamping-stay',
              title: '☁️ 早朝雲海パノラマ×天空グランピング',
              desc: '標高1,000mの天空ドームテントから望む一面の雲海と絶景展望温泉',
              badge: '天空雲海'
            },
            {
              slug: 'organic-medicinal-herb-sauna-detox-stay',
              title: '🌿 薬草スチームサウナ×薬膳温活宿',
              desc: '和漢生薬を蒸留した薬草サウナと濃厚薬草湯・薬膳料理で心身デトックス',
              badge: '薬草温活'
            },
            {
              slug: 'winter-ise-ebi-lobster-luxury-gourmet-stay',
              title: '🦞 特大活伊勢海老×極上鬼殻焼き会席宿',
              desc: '伊勢志摩・南紀のぷりぷり活伊勢海老お造り・鬼殻焼き・濃厚出汁雑炊',
              badge: '伊勢海老会席'
            },
            {
              slug: 'traditional-gold-leaf-craft-kanazawa-stay',
              title: '✨ 加賀金箔工芸×金箔風呂名宿',
              desc: '金沢の伝統工芸・金箔貼り体験と金箔がキラキラ舞う優美な金箔風呂',
              badge: '金沢金箔'
            },
            {
              slug: 'luxury-private-onsen-with-infinity-edge-footbath',
              title: '🌊 インフィニティ足湯×絶景テラス宿',
              desc: '水盤と空が一体化するインフィニティ足湯テラスでドリンクと夕景を愉しむ',
              badge: 'インフィニティ足湯'
            },
            {
              slug: 'traditional-hida-beef-houba-miso-grill-stay',
              title: '🥩 飛騨牛朴葉味噌焼き×日本三名泉宿',
              desc: '朴の葉の上で香ばしく焼ける特製味噌とA5飛騨牛の極上会席＆下呂美肌湯',
              badge: '飛騨牛朴葉味噌'
            },
            {
              slug: 'super-panoramic-sunset-coastal-cliff-villa',
              title: '🌅 サンセットオーシャン×夕日一望ヴィラ',
              desc: '水平線に沈む黄金の夕日とマジックアワーを客室露天から独占する絶景宿',
              badge: '夕日一望ヴィラ'
            },
            {
              slug: 'organic-forest-sauna-cold-water-stream-stay',
              title: '🌲 清流ダイブ水風呂×森林薪サウナ宿',
              desc: '薪サウナでロウリュ後に澄んだ天然清流へ飛び込む究極のととのい体験',
              badge: '清流ダイブサウナ'
            },
            {
              slug: 'spring-cherry-blossom-illuminated-river-cruise-stay',
              title: '🌸 夜桜ライトアップ×川沿い花見温泉宿',
              desc: '川沿いの満開桜並木ライトアップと浴衣散策、春の彩り豊かな桜会席',
              badge: '夜桜ライトアップ'
            },
            {
              slug: 'traditional-edo-cut-glass-kiriko-craft-stay',
              title: '💎 伝統切子工芸×銘酒BARの宿',
              desc: '薩摩切子や江戸切子の美しいカットガラス酒器で厳選地酒を味わう特別な夜',
              badge: '伝統切子工芸'
            },
            {
              slug: 'traditional-sado-gold-mine-onsen-stay',
              title: '🥇 佐渡金山世界遺産×日本海海の幸宿',
              desc: '世界遺産・佐渡金山巡りと南蛮エビ・活カニ会席、七浦海岸の夕日温泉',
              badge: '佐渡金山世界遺産'
            },
            {
              slug: 'luxury-private-onsen-with-records-vinyl-lounge',
              title: '📻 アナログレコード×真空管アンプ温泉宿',
              desc: 'ヴィンテージレコードと名機スピーカーの音色、地酒バーで寛ぐ大人の隠れ家',
              badge: 'レコード音楽宿'
            },
            {
              slug: 'spring-mountain-vegetable-sansai-tempura-stay',
              title: '🌱 春の山菜天ぷら×山里の秘湯宿',
              desc: '雪解けが育む摘みたて山菜天ぷらと山菜尽くし会席、源泉掛け流し秘湯でデトックス',
              badge: '春の山菜天ぷら'
            },
            {
              slug: 'super-panoramic-canyon-rafting-retreat-stay',
              title: '🚣 爽快ラフティング×渓谷露天風呂宿',
              desc: '吉野川・保津川等の激流ラフティング後に渓谷露天風呂とサウナで極上ととのう',
              badge: '清流ラフティング'
            },
            {
              slug: 'organic-olive-farm-mediterranean-spa-stay',
              title: '🫒 小豆島オリーブ美食×瀬戸内海スパ宿',
              desc: '小豆島産搾りたてオリーブオイル会席と天然美肌スパ、多島美の夕日露天',
              badge: '小豆島オリーブ宿'
            },
            {
              slug: 'traditional-washi-paper-craft-onsen-stay',
              title: '🏮 手漉き和紙あかり×伝統工芸体験宿',
              desc: '越前・美濃・土佐の手漉き和紙あかりに包まれる和モダン空間と紙漉き体験',
              badge: '手漉き和紙の宿'
            },
            {
              slug: 'traditional-sanuki-udon-gourmet-onsen-stay',
              title: '🍜 讃岐うどん巡礼×こんぴら温泉宿',
              desc: '本場讃岐うどん巡りと金刀比羅宮参拝、讃岐牛会席＆こんぴら名湯に浸る',
              badge: '讃岐うどん巡り'
            },
            {
              slug: 'luxury-private-onsen-with-tea-ceremony-lounge',
              title: '🍵 本格茶室お点前×日本庭園名湯宿',
              desc: '静謐な茶室でいただく抹茶と上生菓子、四季の日本庭園露天風呂で心洗われる休日',
              badge: '茶室お点前体験'
            },
            {
              slug: 'super-panoramic-paragliding-sky-resort-stay',
              title: '🪂 大空パラグライダー×絶景パノラマ露天宿',
              desc: '白馬や阿蘇の雄大な空を舞うフライト体験と山絶景展望露天リゾート',
              badge: '大空パラグライダー'
            },
            {
              slug: 'spring-takenoko-bamboo-shoot-kaiseki-stay',
              title: '🎍 朝採り筍会席×幻想竹林露天の宿',
              desc: '朝掘り新鮮タケノコの焼き筍・筍ご飯会席とライトアップされた竹林露天風呂',
              badge: '朝採り筍会席'
            },
            {
              slug: 'organic-wine-vineyard-retreat-spa-stay',
              title: '🍷 ワイナリー直営ペアリング×ブドウ畑温泉宿',
              desc: '勝沼や余市のワイナリー直営マリアージュディナーとブドウ畑ビューの天然温泉',
              badge: 'ワイナリーリゾート'
            },
            {
              slug: 'traditional-kutani-ware-ceramic-art-onsen-stay',
              title: '🎨 九谷焼ギャラリー×加賀会席名湯宿',
              desc: '五彩の九谷焼の器で味わう加賀旬会席と絵付け体験、加賀温泉郷の極上名湯',
              badge: '九谷焼ギャラリー'
            },
            {
              slug: 'traditional-shinshu-soba-kaiseki-onsen-stay',
              title: '🥢 信州手打ち蕎麦会席×北アルプス展望宿',
              desc: '挽きたて十割蕎麦や蕎麦がき会席と北アルプス雪形を望む絶景展望露天風呂',
              badge: '信州手打ち蕎麦'
            },
            {
              slug: 'luxury-private-onsen-with-starry-astronomy-deck',
              title: '🔭 日本一の阿智村星空×昼神美肌温泉宿',
              desc: '天体観測専用デッキや星空ナイトツアー、トロトロの昼神美肌湯を満喫する極上宿',
              badge: '阿智村満天星空'
            },
            {
              slug: 'super-panoramic-canyon-stand-up-paddle-stay',
              title: '🏄 爽快レイクSUP×水辺インフィニティ露天宿',
              desc: '本栖湖や中禅寺湖の爽快SUPクルージング後に水辺露天風呂とサウナでととのう',
              badge: '爽快レイクSUP'
            },
            {
              slug: 'spring-biwa-fruit-loquat-spa-retreat-stay',
              title: '🍈 房州びわスイーツ×びわ葉温浴スパ宿',
              desc: 'ジューシーな大粒房州びわ尽くしデザートとびわ葉温浴、太平洋一望の絶景温泉',
              badge: '房州びわスイーツ'
            },
            {
              slug: 'organic-craft-beer-taproom-brewery-stay',
              title: '🍺 醸造所クラフトビール×源泉掛け流し宿',
              desc: '併設ブルワリーから注がれる出来立てビール飲み放題と自家源泉掛け流し名湯',
              badge: 'クラフトビール宿'
            },
            {
              slug: 'traditional-aomori-tsugaru-shamisen-onsen-stay',
              title: '🪕 津軽三味線生ライブ×陸奥湾海鮮会席宿',
              desc: '毎夜開催される迫力の津軽三味線生演奏と陸奥湾ホタテ会席、青森の名湯を満喫',
              badge: '津軽三味線ライブ'
            },
            {
              slug: 'traditional-yonezawa-beef-sukiyaki-onsen-stay',
              title: '🥩 A5米沢牛すき焼き会席×山形名湯宿',
              desc: 'とろける霜降り米沢牛すき焼き・しゃぶしゃぶと白布・小野川温泉の極上掛け流し',
              badge: 'A5米沢牛すき焼き'
            },
            {
              slug: 'luxury-private-onsen-with-onsen-sommelier-guide',
              title: '♨️ 純度100%源泉掛け流し×湯守の宿',
              desc: '加水・加温・循環なし！温泉ソムリエや湯守が守る濃厚にごり湯・硫黄泉の名宿',
              badge: '純度100%源泉'
            },
            {
              slug: 'super-panoramic-cable-car-ropeway-mountain-stay',
              title: '🚠 雲上パノラマ露天×山頂リゾートホテル',
              desc: 'ロープウェイ直結の標高1,000m超リゾート！雲海テラスと絶景展望露天風呂',
              badge: '雲上パノラマ露天'
            },
            {
              slug: 'spring-kyoto-bamboo-grove-arashiyama-stay',
              title: '🎋 嵐山竹林散策×極上京懐石の名旅館',
              desc: '嵐山・嵯峨野の竹林の小径散策と出汁香る旬の京懐石、とろとろ嵐山温泉',
              badge: '嵐山竹林京懐石'
            },
            {
              slug: 'organic-citrus-spa-ocean-view-stay',
              title: '🍊 特産みかんアロマスパ×オーシャン露天宿',
              desc: '愛媛・湯河原のフレッシュみかんオイルエステと青い海を一望する絶景温泉',
              badge: 'みかんアロマスパ'
            },
            {
              slug: 'traditional-kagoshima-shochu-kurobuta-stay',
              title: '🍶 かごしま黒豚しゃぶ×芋焼酎BARの宿',
              desc: '極上黒豚しゃぶしゃぶと百種プレミアム芋焼酎BAR、指宿砂むし＆霧島硫黄泉',
              badge: '黒豚しゃぶ焼酎BAR'
            },
            {
              slug: 'traditional-hakata-mizutaki-gourmet-stay',
              title: '🍲 博多水炊き×呼子イカと福岡温泉宿',
              desc: '濃厚白湯スープの博多水炊きと呼子イカ活造り、天然温泉＆サウナで寛ぐ美食旅',
              badge: '博多水炊き名宿'
            },
            {
              slug: 'luxury-private-onsen-with-tatami-bath-deck',
              title: '🎋 全面畳敷き風呂×純和風モダン名湯宿',
              desc: '足元ふんわり温かい畳風呂！滑りにくく安心の浴場で三世代・赤ちゃん連れにも人気',
              badge: '安心の全面畳風呂'
            },
            {
              slug: 'super-panoramic-lake-kayak-morning-stay',
              title: '🚣 早朝レイクカヤック×湖畔露天リゾート',
              desc: '朝霧立つ静寂の湖へカヤックで漕ぎ出す爽快体験と湖畔インフィニティ露天風呂',
              badge: '早朝レイクカヤック'
            },
            {
              slug: 'spring-yatsugatake-highland-strawberry-stay',
              title: '🍓 八ヶ岳完熟いちご狩り×高原温泉リゾート',
              desc: '糖度抜群のプレミアム完熟いちご狩り＆特製パフェ、南アルプス連峰を望む高原温泉',
              badge: '八ヶ岳完熟いちご'
            },
            {
              slug: 'organic-detox-herb-garden-spa-stay',
              title: '🌿 自家製ハーブ美食×ハーバルサウナ宿',
              desc: '自家菜園ハーブ料理と朝摘みハーブティー、天然ハーブスチームサウナのリトリート',
              badge: 'ハーバル薬草サウナ'
            },
            {
              slug: 'traditional-ehime-towel-and-dogo-onsen-stay',
              title: '🧖 今治プレミアムタオル×道後温泉名旅館',
              desc: '最高級今治タオルアメニティに包まれる極上ステイと道後名湯・瀬戸内鯛めし会席',
              badge: '今治タオル道後宿'
            },
            {
              slug: 'traditional-okinawa-ishigaki-beef-stay',
              title: '🥩 石垣牛ディナー×川平湾リゾート',
              desc: '最高峰の石垣牛ステーキ・焼肉ディナーと川平湾・竹富島を望むオーシャンリゾート',
              badge: '石垣牛リゾート'
            },
            {
              slug: 'luxury-private-onsen-with-scenic-creek-view',
              title: '🏞️ 渓流専用露天風呂×清流マイナスイオン宿',
              desc: 'せせらぎの音がBGM！客室専用の渓流露天風呂と川床料理で心洗われる隠れ家',
              badge: '渓流専用露天風呂'
            },
            {
              slug: 'super-panoramic-sand-dune-camel-stay',
              title: '🐪 鳥取砂丘絶景×日本海活松葉ガニ名湯宿',
              desc: '鳥取砂丘の神秘的な風紋散策と水揚げされたばかりの活松葉ガニ・三朝ラジウム温泉',
              badge: '鳥取砂丘松葉ガニ'
            },
            {
              slug: 'spring-izu-cherry-blossom-and-onsen-stay',
              title: '🌸 早咲き河津桜×名物金目鯛姿煮の宿',
              desc: '濃密ピンクの河津桜並木散策と甘辛い金目鯛姿煮・海一望露天風呂を満喫する春旅',
              badge: '早咲き河津桜宿'
            },
            {
              slug: 'organic-forest-aromatherapy-villa-stay',
              title: '🌲 森林浴ヴィラ×ヒノキ天然精油アロマ宿',
              desc: '天然ヒノキ・クロモジ精油のトリートメントと森に囲まれたプライベート温泉ヴィラ',
              badge: '森林浴アロマヴィラ'
            },
            {
              slug: 'traditional-kyoto-fushimi-sake-brewery-stay',
              title: '🍶 京都伏見酒蔵巡り×名水仕込み京料理宿',
              desc: '十石舟が行き交う伏見の白壁酒蔵巡りと名水京料理・日本酒利き酒ペアリング',
              badge: '伏見酒蔵京料理'
            },
            {
              slug: 'traditional-hokkaido-kaisen-don-morning-stay',
              title: '🦐 いくら盛り放題海鮮朝食×北海道名湯宿',
              desc: '朝からいくら・ウニ・ホタテかけ放題の豪華勝手丼バイキングと最上階天然温泉',
              badge: 'いくら盛り放題'
            },
            {
              slug: 'luxury-private-onsen-with-scenic-cliffside-view',
              title: '🌊 断崖絶壁パノラマ露天×海絶景インフィニティ宿',
              desc: '空と海にせり出すスリルと開放感！水平線パノラマを一望するテラス露天風呂',
              badge: '断崖絶壁露天'
            },
            {
              slug: 'super-panoramic-lake-biwa-sup-cruise-stay',
              title: '⛵ 琵琶湖湖上SUP×おごと温泉リゾート',
              desc: '白髭神社の湖上鳥居を目指す絶景SUP体験と近江牛ディナー・湖畔温泉露天',
              badge: '琵琶湖SUPクルーズ'
            },
            {
              slug: 'spring-tanba-sasayama-botan-nabe-stay',
              title: '🐗 丹波篠山ぼたん鍋×城下町古民家ホテル',
              desc: '本場丹波篠山の天然猪肉ぼたん鍋と黒豆スイーツ、城下町の風情ある古民家ステイ',
              badge: '丹波篠山ぼたん鍋'
            },
            {
              slug: 'organic-rooftop-infinity-pool-spa-stay',
              title: '🏊 ルーフトッププール×都会の天然温泉ホテル',
              desc: '摩天楼の夜景を見渡す屋上インフィニティプールと本格天然温泉大浴場のアーバンステイ',
              badge: 'ルーフトッププール'
            },
            {
              slug: 'traditional-iwate-nanbu-ironware-onsen-stay',
              title: '🍵 伝統南部鉄器×花巻温泉郷の風情名宿',
              desc: '四百年の技・南部鉄器の鉄瓶で淹れるまろやかなお茶と前沢牛会席、名湯花巻温泉',
              badge: '南部鉄器名湯宿'
            },
            {
              slug: 'traditional-mie-matsusaka-beef-steak-stay',
              title: '🥩 特選松阪牛会席×伊勢志摩オーシャン宿',
              desc: '肉の芸術品・最高ランク松阪牛ステーキ＆すき焼きと鳥羽・賢島オーシャンビュー露天',
              badge: '特選松阪牛会席'
            },
            {
              slug: 'luxury-private-onsen-with-cave-bath-spa',
              title: '🪨 天然洞窟風呂×神秘の地底名湯宿',
              desc: '岩肌に包まれる幻想的な洞窟風呂！薄明かりと源泉掛け流し秘湯で極上の非日常',
              badge: '天然洞窟風呂'
            },
            {
              slug: 'super-panoramic-sunset-dune-coastal-stay',
              title: '🌅 夕日百選サンセット×白砂オーシャン宿',
              desc: '水平線に沈むドラマチックな夕日！波打ち際の展望露天風呂と獲れたて海の幸会席',
              badge: '夕日百選サンセット'
            },
            {
              slug: 'spring-okayama-white-peach-parfait-stay',
              title: '🍑 岡山特産白桃スイーツ×倉敷・湯原温泉宿',
              desc: '芳醇な清水白桃パフェと倉敷美観地区の白壁町家、名湯湯原温泉で寛ぐ晴れの国ステイ',
              badge: '岡山白桃パフェ'
            },
            {
              slug: 'organic-forest-treehouse-glamping-stay',
              title: '🏡 ツリーハウス秘密基地×森林薪サウナ宿',
              desc: '大木の上のツリーハウスと本格バレルサウナ・BBQ！童心に帰る大自然グランピング',
              badge: 'ツリーハウスサウナ'
            },
            {
              slug: 'traditional-gunma-daruma-craft-onsen-stay',
              title: '🎯 高崎だるま体験×伊香保石段街黄金の湯宿',
              desc: '縁起物だるま絵付け体験と365段の石段街散策、茶褐色の名湯「黄金の湯」掛け流し',
              badge: 'だるま絵付け伊香保'
            },
            {
              slug: 'traditional-okinawa-agu-pork-shabu-stay',
              title: '🥓 あぐー豚しゃぶ×美ら海オーシャン宿',
              desc: '旨味と甘み極まる幻の島豚あぐー豚しゃぶしゃぶと古宇利島・美ら海リゾート',
              badge: 'あぐー豚しゃぶ'
            },
            {
              slug: 'luxury-private-onsen-with-mud-bath-spa',
              title: '💆 天然泥パック×極上美肌泥湯の宿',
              desc: '大地のミネラルを豊富に含む天然泥湯・泥パック！古い角質を落としすべすべ美肌へ',
              badge: '天然泥パック温泉'
            },
            {
              slug: 'super-panoramic-lake-towada-autumn-leaf-stay',
              title: '🛶 十和田湖カヌー×奥入瀬渓流名湯リゾート',
              desc: '神秘のカルデラ湖畔早朝カヌーと奥入瀬渓流散策、青森ヒバ香る温泉大浴場',
              badge: '十和田湖カヌー'
            },
            {
              slug: 'spring-kumamoto-sweet-melon-kaiseki-stay',
              title: '🍈 肥後グリーンメロン×阿蘇あか牛溶岩焼き宿',
              desc: '糖度抜群の熊本ブランドメロンとあか牛溶岩焼きステーキ、阿蘇カルデラ絶景露天',
              badge: '肥後グリーンメロン'
            },
            {
              slug: 'organic-nordic-barrel-sauna-lakeside-stay',
              title: '🔥 北欧バレルサウナ×天然湖ダイブ水風呂宿',
              desc: 'ヒノキ香る丸いバレルサウナでセルフロウリュ！目の前の天然湖へ飛び込む究極のととのい',
              badge: 'バレルサウナ湖ダイブ'
            },
            {
              slug: 'traditional-gifu-mino-washi-lantern-stay',
              title: '🏮 長良川鵜飼い篝火×美濃和紙あかり名湯宿',
              desc: '夕闇に揺れる鵜飼いの篝火と美濃和紙あかりアート、茶褐色の名湯長良川温泉と飛騨牛',
              badge: '長良川鵜飼い和紙'
            },
            {
              slug: 'traditional-shizuoka-unagi-kabayaki-stay',
              title: '🍱 浜名湖うなぎ尽くし会席×舘山寺レイク露天宿',
              desc: '炭火で香ばしく焼き上げた肉厚浜名湖うなぎ蒲焼き・白焼き・ひつまぶしと湖畔名湯',
              badge: '浜名湖極上海鰻'
            },
            {
              slug: 'luxury-private-onsen-with-scenic-cherry-blossom-view',
              title: '🌸 客室専用お花見露天×夜桜ライトアップ極上宿',
              desc: '湯船のすぐそばに咲き誇る満開の桜！客室露天から独占お花見と春の旬彩会席',
              badge: '客室専用お花見露天'
            },
            {
              slug: 'super-panoramic-canyon-bungee-jumping-stay',
              title: '🧗 爽快バンジー体験×みなかみ渓谷名湯宿',
              desc: '高さ100mの吊り橋バンジー体験と利根川のせせらぎを聴く渓谷露天風呂・サウナ',
              badge: '爽快バンジー名湯'
            },
            {
              slug: 'spring-miyazaki-mango-parfait-stay',
              title: '🥭 太陽のタマゴ完熟マンゴー×青島オーシャン宿',
              desc: '最高級宮崎マンゴーパフェと宮崎牛ステーキ、青島・太平洋を一望する展望温泉',
              badge: '太陽のタマゴマンゴー'
            },
            {
              slug: 'organic-forest-floating-tent-glamping-stay',
              title: '⛺ 空中テント星空ドーム×森林サウナ宿',
              desc: '宙に浮かぶ空中テントや星空ドーム！プライベートテントサウナと贅沢BBQ',
              badge: '空中テントサウナ'
            },
            {
              slug: 'traditional-aomori-nebuta-craft-onsen-stay',
              title: '👹 ねぶた光アート×青森ヒバ名湯・大間マグロ宿',
              desc: '極彩色のねぶたアート空間と祭り囃子、大間マグロ・陸奥湾ホタテ会席と青森ヒバ風呂',
              badge: 'ねぶた光アート宿'
            },
            {
              slug: 'traditional-nagasaki-champon-gourmet-stay',
              title: '🍜 長崎卓袱料理×雲仙地獄白濁名湯宿',
              desc: '海鮮ちゃんぽん＆伝統卓袱料理と立ち上る白煙の雲仙地獄・小浜温泉の夕日露天',
              badge: '長崎卓袱料理名宿'
            },
            {
              slug: 'luxury-private-onsen-with-scenic-waterfall-view',
              title: '🌊 滝見プライベート露天×マイナスイオン秘湯宿',
              desc: '目の前に迫るダイナミックな滝の姿と水飛沫！大自然の轟音に包まれる滝見露天風呂',
              badge: '滝見プライベート露天'
            },
            {
              slug: 'super-panoramic-canyon-canyoning-adventure-stay',
              title: '🏄 爽快キャニオニング×森林パノラマ露天宿',
              desc: '天然ウォータースライダーを体一つで滑走！大自然アドベンチャーと森林露天風呂',
              badge: '爽快キャニオニング'
            },
            {
              slug: 'spring-yamagata-cherry-picking-stay',
              title: '🍒 山形佐藤錦さくらんぼ×天童・かみのやま名湯宿',
              desc: '初夏の宝石・佐藤錦さくらんぼ狩り食べ放題と山形牛会席、天童・かみのやま温泉',
              badge: '佐藤錦さくらんぼ'
            },
            {
              slug: 'organic-nordic-smoke-sauna-retreat-stay',
              title: '🪵 本場フィンランドサウナ×ログハウス温泉宿',
              desc: 'フィンランド直輸入の本格木造サウナとセルフロウリュ！白樺ヴィヒタと天然水風呂',
              badge: 'フィンランドサウナ'
            },
            {
              slug: 'traditional-okinawa-bingata-textile-stay',
              title: '🌺 琉球紅型アート×読谷やちむんオーシャン宿',
              desc: '伝統染物「琉球紅型」体験とやちむんの器で味わう創作会席、残波岬の絶景リゾート',
              badge: '琉球紅型リゾート'
            },
            {
              slug: 'traditional-hokkaido-furano-lavender-stay',
              title: '🪻 富良野ラベンダー絶景×ふらの和牛リゾート',
              desc: '一面紫色のラベンダー畑パノラマと十勝岳展望露天風呂、ふらの和牛ディナー',
              badge: '富良野ラベンダー'
            },
            {
              slug: 'luxury-private-onsen-with-footbath-cafe-deck',
              title: '☕ 絶景足湯カフェBAR×和モダン名湯宿',
              desc: '湯けむりと珈琲・カクテルの至福！水盤テラスや渓流沿いの足湯デッキで寛ぐ大人の休日',
              badge: '足湯カフェBAR'
            },
            {
              slug: 'super-panoramic-canyon-bridge-walk-stay',
              title: '🌉 祖谷のかずら橋×ケーブルカー谷底秘湯宿',
              desc: '日本三大秘境の吊り橋スリル体験と断崖ケーブルカーで下る谷底露天風呂・囲炉裏会席',
              badge: '祖谷のかずら橋'
            },
            {
              slug: 'spring-niigata-echigo-hime-strawberry-stay',
              title: '🍓 新潟特産越後姫×月岡温泉エメラルド美肌宿',
              desc: '新潟限定ブランドいちご「越後姫」パフェと国内屈指の美肌の湯・月岡エメラルド硫黄泉',
              badge: '越後姫いちご月岡'
            },
            {
              slug: 'organic-forest-cliffside-sauna-stay',
              title: '⛰️ 天空パノラマサウナ×絶壁インフィニティ水風呂宿',
              desc: 'ガラス張りパノラマサウナから海と山を見下ろす！絶壁インフィニティ水風呂と天空外気浴',
              badge: '天空絶景サウナ'
            },
            {
              slug: 'traditional-ishikawa-wajima-nuri-lacquer-stay',
              title: '🍣 輪島塗漆器美食×和倉温泉七尾湾オーシャン宿',
              desc: '堅牢優美な輪島塗の器で味わう能登前握り寿司・のどぐろ会席と七尾湾一望の名湯',
              badge: '輪島塗能登前寿司'
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
