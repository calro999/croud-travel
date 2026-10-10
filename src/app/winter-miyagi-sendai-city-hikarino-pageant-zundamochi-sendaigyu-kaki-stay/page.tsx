import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '冬の仙台市内・光のページェント厳選ガイド｜仙台牛・ずんだ・閖上牡蠣と都市型天然温泉宿',
  description: '12月に輝く定禅寺通の光のページェントから瑞鳳殿の初詣、仙台牛しゃぶしゃぶ・ずんだ餅・閖上牡蠣まで。宮城・仙台市内の冬旅を楽天トラベル人気宿とともに徹底解説。天然温泉付き宿も必見。',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-miyagi-sendai-city-hikarino-pageant-zundamochi-sendaigyu-kaki-stay/",
  },
  openGraph: {
    title: '冬の仙台市内・光のページェント厳選ガイド｜仙台牛・ずんだ・閖上牡蠣と都市型天然温泉宿',
    description: '12月に輝く定禅寺通の光のページェントから瑞鳳殿の初詣、仙台牛しゃぶしゃぶ・ずんだ餅・閖上牡蠣まで。宮城・仙台市内の冬旅を楽天トラベル人気宿とともに徹底解説。',
    url: 'https://croud-travel.pages.dev/winter-miyagi-sendai-city-hikarino-pageant-zundamochi-sendaigyu-kaki-stay',
    siteName: 'Croud Travel',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function Page() {
  const faqList = [
  {
    "q": "光のページェントはいつ開催され、どこで観るのがベストですか？",
    "a": "例年12月上旬〜31日にかけて、定禅寺通のケヤキ並木約600本が約60万球のLEDで彩られます。中でも市民広場付近から西公園方向を眺めるアングルは光のトンネルが際立ち、多くのカメラマンが集まるスポットです。無料で観覧でき、周辺に飲食店や露店も並ぶため、冬の仙台観光のハイライトとして外せません。"
  },
  {
    "q": "瑞鳳殿の初詣は元日から参拝できますか？混雑のピークはいつ頃？",
    "a": "仙台藩祖・伊達政宗公を祀る瑞鳳殿（ずいほうでん）は元日から参拝可能です。三が日の午前中が最も混み合うため、できれば1月2〜3日の夕方以降か、松の内（1月7日）を過ぎた落ち着いた時期がゆっくり参拝できます。拝殿前のフォトスポットで伊達武将隊が出陣することもあり、記念撮影も楽しめます。"
  },
  {
    "q": "仙台牛はどの部位がおすすめ？冬に食べるべき食べ方は？",
    "a": "仙台牛はA5等級しか認められないブランド牛。冬のおすすめはしゃぶしゃぶ（せり鍋との組み合わせも絶品）と焼肉です。特に赤身のランプやモモは脂と旨みのバランスが良く、すき焼きで卵と絡めると濃厚な甘みが際立ちます。国分町や一番町周辺に専門店が集中しているので、ホテルのコンシェルジュに予約を頼むと確実です。"
  },
  {
    "q": "閖上牡蠣（ゆりあげかき）はどこで食べられますか？",
    "a": "閖上港は仙台市の南・名取市にある漁港で、震災後に復活した活気あるかき小屋が有名です。毎年11月頃〜3月頃まで「閖上かき小屋」が営業し、炭火焼きで食べる採れたての牡蠣が楽しめます。仙台市内でも閖上産を扱う居酒屋やシーフードレストランは多く、牡蠣フライ・蒸し牡蠣・牡蠣鍋のいずれも絶品です。"
  },
  {
    "q": "ずんだ餅は土産として持ち帰れますか？賞味期限は？",
    "a": "ずんだ餅は生もちと枝豆の餡を使うため、生菓子タイプは当日〜翌日が賞味期限の商品が多いです。ただし、冷凍タイプや個包装タイプなら1〜2週間保つ商品もあり、お土産に向いています。仙台駅の土産店「ずんだ茶寮」「白謙かまぼこ店」などで購入可能。ずんだシェイクと合わせて楽しんでみてください。"
  },
  {
    "q": "仙台市内のホテルから定禅寺通への移動手段は？",
    "a": "仙台駅から定禅寺通まではバスで約10分、徒歩でも30分弱です。地下鉄東西線「大町西公園駅」を利用すると定禅寺通に直結するので便利。光のページェント期間中は交通規制が敷かれる区間もあるため、公共交通機関の利用をおすすめします。仙台駅周辺のホテルに滞在すれば、夕食後にぶらりと歩いて観に行けるのが魅力です。"
  }
];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://croud-travel.pages.dev' },
          { '@type': 'ListItem', position: 2, name: '冬の旅行特集', item: 'https://croud-travel.pages.dev/features' },
          { '@type': 'ListItem', position: 3, name: '冬の仙台・光のページェント×仙台牛×温泉宿', item: 'https://croud-travel.pages.dev/winter-miyagi-sendai-city-hikarino-pageant-zundamochi-sendaigyu-kaki-stay' },
        ],
      },
      {
        '@type': 'Article',
        headline: '冬の仙台市内・光のページェント厳選ガイド｜仙台牛・ずんだ・閖上牡蠣と都市型天然温泉宿',
        description: '12月に輝く定禅寺通の光のページェントから瑞鳳殿の初詣、仙台牛しゃぶしゃぶ・ずんだ餅・閖上牡蠣まで。宮城・仙台市内の冬旅を徹底解説。',
        url: 'https://croud-travel.pages.dev/winter-miyagi-sendai-city-hikarino-pageant-zundamochi-sendaigyu-kaki-stay',
        publisher: { '@type': 'Organization', name: 'Croud Travel', url: 'https://croud-travel.pages.dev' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqList.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  };


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">ホーム</Link>
          <span className="mx-2">›</span>
          <Link href="/features" className="hover:underline">冬の旅行特集</Link>
          <span className="mx-2">›</span>
          <span>冬の仙台市内・光のページェント×仙台牛×温泉宿</span>
        </nav>

        <h1 className="text-2xl font-bold mb-4 leading-snug">冬の仙台市内・光のページェント厳選ガイド<br /> <span className="text-lg font-normal text-gray-600">仙台牛・ずんだ・閖上牡蠣と都市型天然温泉宿</span></h1>

        <p className="text-gray-600 text-sm mb-8">
          更新日：2024年12月 ｜ 対象時期：11月〜1月
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-blue-500 pl-3">光のページェント——60万球が灯す12月の定禅寺通</h2>
          <p className="mb-4">
            「SENDAI光のページェント」は毎年12月初旬から大晦日まで開催される、東北最大規模のイルミネーションイベントだ。定禅寺通のケヤキ並木、全長約800メートルにわたって60万球以上のLEDが煌めく光のトンネルは、一度目にすると言葉を失う圧倒的なスケール感がある。
          </p>
          <p className="mb-4">
            点灯時間は日没後から23時ごろまで（年によって変動あり）。特に17〜19時台は通勤帰りの市民と観光客が混在し、ケヤキ並木全体が光と人熱れで包まれる。西公園方向に向かって歩くと奥行きが際立ち、写真映えする構図が自然と決まる。スマートフォンでも十分美しく撮れるが、三脚を持参してバルブ撮影すれば星型の光芒が美しく表現できる。
          </p>
          <p className="mb-4">
            沿道には屋台やキッチンカーも並び、仙台名物のずんだシェイクやホットチョコレートを手に持ちながらそぞろ歩くのが地元の定番スタイル。寒さ対策として手袋・マフラーに加え、使い捨てカイロは必携だ。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-blue-500 pl-3">瑞鳳殿——伊達政宗公が眠る桃山建築の荘厳な初詣</h2>
          <p className="mb-4">
            仙台市中心部から車で10分ほどの経ヶ峰に鎮座する瑞鳳殿（ずいほうでん）は、仙台藩初代藩主・伊達政宗公の霊廟として1637年に建立された。国の重要文化財に指定されているその姿は、豪壮な桃山文化の意匠が凝縮されており、石段を登り切った瞬間に目の前に広がる朱と黒の絢爛たる建築に息を呑む。
          </p>
          <p className="mb-4">
            年明けの初詣では藩主の霊に新年の安寧を祈る参拝者が絶えない。三が日は早朝から参拝できるよう特別開門されることが多く、朝一番に参拝してから仙台市内の朝食を楽しむ、という動線が体に優しい。境内には政宗公の等身大像もあり、記念撮影に立ち寄る人も多い。
          </p>
          <p className="mb-4">
            近隣には二代藩主・忠宗公の感仙殿、三代藩主・綱宗公の善応殿も並立しており、三霊廟をセットで回れば仙台藩の歴史の重みがひしひしと伝わってくる。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-blue-500 pl-3">仙台牛——A5一択のブランド牛と冬の食べ方</h2>
          <p className="mb-4">
            「仙台牛」は宮城県内で生産・肥育された黒毛和牛のうち、公正取引委員会が認める牛肉の格付でA5等級と評価されたもののみが冠することを許されるブランド牛だ。霜降りの入り方・きめ細かさ・融点の低さが特徴で、口に含んだ瞬間から甘みと旨みが広がる。
          </p>
          <p className="mb-4">
            冬の仙台でぜひ試してほしいのが、仙台牛のしゃぶしゃぶだ。ここに「せり」を合わせるのが宮城流。根っこまで丸ごと使うせり鍋は独特の爽やかな香気が鍋全体に立ち込め、仙台牛の濃厚な旨みと絶妙に絡み合う。国分町・一番町エリアには専門店が点在しているが、人気店は12月〜1月は特に予約が取りにくい。ホテルに到着したらすぐにコンシェルジュに相談するか、旅行前に予約を入れておくのが確実だ。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-blue-500 pl-3">ずんだ餅と閖上牡蠣——仙台の冬を彩る二大食文化</h2>
          <p className="mb-4">
            ずんだ餅は枝豆をすり潰した鮮やかな緑色の餡を、やわらかな白玉餅に絡めた仙台の伝統菓子。甘みが控えめで豆の風味が際立つのが本物の証だ。仙台駅構内にある「ずんだ茶寮」や「村上屋餅店」（本店は定禅寺通周辺）は地元で長年愛される名店で、行列ができることも珍しくない。
          </p>
          <p className="mb-4">
            一方、名取市の閖上港から水揚げされる閖上牡蠣（ゆりあげかき）は、東日本大震災後に地元漁師の手で見事に復活した宮城の味だ。松島湾産と並んで宮城を代表する牡蠣で、冬の旬の時期は身がふっくらと肥え、ミルキーな甘みと磯の香りが際立つ。名取市の「閖上かき小屋」では炭火で豪快に焼き牡蠣を楽しめ、仙台市内からも車で30分程度でアクセス可能だ。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 border-l-4 border-blue-500 pl-3">仙台市内のおすすめ宿——楽天トラベル人気ホテル5選</h2>
          <div className="space-y-8">
            
            <div className="border rounded-lg overflow-hidden shadow-sm">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F107740%2F107740.html" target="_blank" rel="noopener noreferrer sponsored">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/107740/107740.jpg"
                  alt="ウェスティンホテル仙台の外観"
                  width={800}
                  height={500}
                  className="w-full object-cover"
                  priority
                />
              </a>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">
                  <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F107740%2F107740.html" target="_blank" rel="noopener noreferrer sponsored" className="hover:underline text-blue-700">
                    ウェスティンホテル仙台
                  </a>
                </h3>
                <p className="text-sm text-gray-500 mb-2">📍 仙台市青葉区一番町1-9-1 ｜ 最寄り：仙台駅 ｜ ⭐ 4.47 ｜ 1泊〜¥17,710〜</p>
                <p className="text-sm text-gray-700 mb-3">ダイナミックな仙台市街の眺望を誇る最上級タワーホテル。洗練された客室と充実したレストランが自慢。</p>
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F107740%2F107740.html"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block bg-red-500 hover:bg-red-600 text-white text-sm font-bold py-2 px-5 rounded"
                >
                  楽天トラベルで空室を確認
                </a>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden shadow-sm">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F389%2F389.html" target="_blank" rel="noopener noreferrer sponsored">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/389/389.jpg"
                  alt="ホテルメトロポリタン仙台の外観"
                  width={800}
                  height={500}
                  className="w-full object-cover"
                  
                />
              </a>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">
                  <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F389%2F389.html" target="_blank" rel="noopener noreferrer sponsored" className="hover:underline text-blue-700">
                    ホテルメトロポリタン仙台
                  </a>
                </h3>
                <p className="text-sm text-gray-500 mb-2">📍 仙台市青葉区中央1-1-1 ｜ 最寄り：仙台駅 ｜ ⭐ 4.43 ｜ 1泊〜¥7,250〜</p>
                <p className="text-sm text-gray-700 mb-3">仙台駅直結の好立地。地元食材を活かしたレストランと快適な客室で、東北旅行の拠点として最適。</p>
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F389%2F389.html"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block bg-red-500 hover:bg-red-600 text-white text-sm font-bold py-2 px-5 rounded"
                >
                  楽天トラベルで空室を確認
                </a>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden shadow-sm">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1665%2F1665.html" target="_blank" rel="noopener noreferrer sponsored">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/1665/1665.jpg"
                  alt="ホテルＪＡＬシティ仙台の外観"
                  width={800}
                  height={500}
                  className="w-full object-cover"
                  
                />
              </a>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">
                  <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1665%2F1665.html" target="_blank" rel="noopener noreferrer sponsored" className="hover:underline text-blue-700">
                    ホテルＪＡＬシティ仙台
                  </a>
                </h3>
                <p className="text-sm text-gray-500 mb-2">📍 仙台市青葉区花京院1-2-12 ｜ 最寄り：仙台駅 ｜ ⭐ 4.21 ｜ 1泊〜¥4,950〜</p>
                <p className="text-sm text-gray-700 mb-3">仙台駅から徒歩圏内。使い勝手のよい設備と丁寧なサービスで、ビジネス・観光どちらにも人気の宿。</p>
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1665%2F1665.html"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block bg-red-500 hover:bg-red-600 text-white text-sm font-bold py-2 px-5 rounded"
                >
                  楽天トラベルで空室を確認
                </a>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden shadow-sm">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F912%2F912.html" target="_blank" rel="noopener noreferrer sponsored">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/912/912.jpg"
                  alt="仙台国際ホテルの外観"
                  width={800}
                  height={500}
                  className="w-full object-cover"
                  
                />
              </a>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">
                  <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F912%2F912.html" target="_blank" rel="noopener noreferrer sponsored" className="hover:underline text-blue-700">
                    仙台国際ホテル
                  </a>
                </h3>
                <p className="text-sm text-gray-500 mb-2">📍 仙台市青葉区中央4-6-1 ｜ 最寄り：仙台駅 ｜ ⭐ 4.15 ｜ 1泊〜¥5,400〜</p>
                <p className="text-sm text-gray-700 mb-3">仙台中心部に位置するシティホテル。地元宮城の食材を活かした料理と、落ち着いた空間が魅力。</p>
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F912%2F912.html"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block bg-red-500 hover:bg-red-600 text-white text-sm font-bold py-2 px-5 rounded"
                >
                  楽天トラベルで空室を確認
                </a>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden shadow-sm">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F57055%2F57055.html" target="_blank" rel="noopener noreferrer sponsored">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/57055/57055.jpg"
                  alt="天然温泉 萩の湯 ドーミーイン仙台駅前の外観"
                  width={800}
                  height={500}
                  className="w-full object-cover"
                  
                />
              </a>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">
                  <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F57055%2F57055.html" target="_blank" rel="noopener noreferrer sponsored" className="hover:underline text-blue-700">
                    天然温泉 萩の湯 ドーミーイン仙台駅前
                  </a>
                </h3>
                <p className="text-sm text-gray-500 mb-2">📍 仙台市青葉区本町1-5-38 ｜ 最寄り：仙台駅 ｜ ⭐ 4.19 ｜ 1泊〜¥6,780〜</p>
                <p className="text-sm text-gray-700 mb-3">仙台駅徒歩圏内の天然温泉付きビジネスホテル。夜鳴きそばや大浴場が評判で、コスパの高さが口コミで人気。</p>
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F57055%2F57055.html"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block bg-red-500 hover:bg-red-600 text-white text-sm font-bold py-2 px-5 rounded"
                >
                  楽天トラベルで空室を確認
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-blue-500 pl-3">アクセスと観光動線——仙台市内の歩き方</h2>
          <p className="mb-4">
            仙台市は東北の玄関口として交通インフラが充実しており、東京から東北新幹線で約90分でアクセス可能だ。市内の移動はJR・地下鉄・バスが網羅されており、定禅寺通へは地下鉄東西線「大町西公園駅」、瑞鳳殿へはバス「瑞鳳殿前」バス停が最寄りとなる。
          </p>
          <p className="mb-4">
            冬の仙台を一泊で楽しむなら、初日の午後に瑞鳳殿〜定禅寺通を散策してページェントを観覧、夜は国分町で仙台牛とせり鍋を堪能する動線が王道だ。二泊する場合は翌日に閖上かき小屋や松島の牡蠣処へ足を延ばすのがおすすめ。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-6 border-l-4 border-blue-500 pl-3">よくある質問</h2>
          <div className="space-y-5">
            {faqList.map((item, idx) => (
              <details key={idx} className="border rounded p-4">
                <summary className="font-bold cursor-pointer">{item.q}</summary>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">{item.a}</p>
              </details>
            ))}
          
      <HubRelatedPosts currentSlug="winter-miyagi-sendai-city-hikarino-pageant-zundamochi-sendaigyu-kaki-stay" />
</div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-blue-500 pl-3">関連記事——東北の冬旅をもっと深く</h2>
          <ul className="space-y-2 text-sm">
            <li>→ <Link href="/winter-miyagi-matsushima-onsen-kaki-matsushimawan-view-stay" className="text-blue-600 hover:underline">冬の松島・牡蠣と温泉で過ごす宮城の海絶景宿</Link></li>
            <li>→ <Link href="/winter-miyagi-naruko-onsen-yukimi-sendai-beef-stay" className="text-blue-600 hover:underline">冬の鳴子温泉・雪見露天と仙台牛の贅沢湯治旅</Link></li>
            <li>→ <Link href="/winter-miyagi-akiu-onsen-sendai-beef-serinabe-stay" className="text-blue-600 hover:underline">冬の秋保温泉・せり鍋と仙台牛で温まる名湯宿</Link></li>
            <li>→ <Link href="/winter-iwate-hiraizumi-chusonji-geibikei-maesawagyu-stay" className="text-blue-600 hover:underline">冬の平泉・世界遺産と前沢牛・わんこそばの岩手旅</Link></li>
            <li>→ <Link href="/winter-yamagata-ginzan-onsen-snow-taisho-stay" className="text-blue-600 hover:underline">冬の銀山温泉・大正ロマン雪見と山形牛の極上旅</Link></li>
          </ul>
        </section>
      </main>
    </>
  );
}
