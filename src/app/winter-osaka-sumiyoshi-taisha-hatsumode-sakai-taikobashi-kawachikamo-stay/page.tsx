import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  Star,
  MapPin,
  Calendar,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Info,
  HelpCircle,
  Thermometer,
  Car,
  Compass
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【国宝本殿と反橋・摂津国一宮 住吉大社新春初詣】2026-2027年冬の大阪・住吉＆堺！千利休の茶の湯と滋味河内鴨鍋名宿5選 | 旅行キュレーション',
  description: '200万人以上が訪れる全国住吉神社の総本社「住吉大社」新春初詣！太鼓橋（反橋）の冬の水鏡と国宝本殿の荘厳美、千利休ゆかりの堺の歴史と冬の極上ブランド肉「河内鴨鍋」・なにわ黒牛に心温まる大阪・堺の厳選名宿5選。',
  keywords: ['住吉・堺・天王寺', '冬旅行', '新春初詣', '温泉', '名宿', '大阪府観光', '楽天トラベル', 'ふるさと納税'],
  openGraph: {
    title: '【国宝本殿と反橋・摂津国一宮 住吉大社新春初詣】2026-2027年冬の大阪・住吉＆堺！千利休の茶の湯と滋味河内鴨鍋名宿5選',
    description: '200万人以上が訪れる全国住吉神社の総本社「住吉大社」新春初詣！太鼓橋（反橋）の冬の水鏡と国宝本殿の荘厳美、千利休ゆかりの堺の歴史と冬の極上ブランド肉「河内鴨鍋」・なにわ黒牛に心温まる大阪・堺の厳選名宿5選。',
    images: ['https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/Sumiyoshi-taisha%2C_keidai-2.jpg/1280px-Sumiyoshi-taisha%2C_keidai-2.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail'],
    type: 'article',
  },
};

export default function Page() {
  const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "【国宝本殿と反橋・摂津国一宮 住吉大社新春初詣】2026-2027年冬の大阪・住吉＆堺！千利休の茶の湯と滋味河内鴨鍋名宿5選",
      "description": "200万人以上が訪れる全国住吉神社の総本社「住吉大社」新春初詣！太鼓橋（反橋）の冬の水鏡と国宝本殿の荘厳美、千利休ゆかりの堺の歴史と冬の極上ブランド肉「河内鴨鍋」・なにわ黒牛に心温まる大阪・堺の厳選名宿5選。",
      "image": [
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/Sumiyoshi-taisha%2C_keidai-2.jpg/1280px-Sumiyoshi-taisha%2C_keidai-2.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "https://img.travel.rakuten.co.jp/share/HOTEL/144947/144947.jpg"
      ],
      "datePublished": "2026-10-08",
      "dateModified": "2026-10-08",
      "author": {
        "@type": "Organization",
        "name": "Japan Travel Curations"
      }
    },
    {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Hotel",
            "name": "大阪マリオット都ホテル",
            "description": "大阪のランドマーク「あべのハルカス」の高層フロアに位置する世界水準のラグジュアリーホテル。すべての客室が地上約100m以上の天空にあり、足元から広がる巨大な窓からは、大阪平野から遠く明石海峡大橋まで一望する息を呑むような大パノラマが広がります。天王寺駅直結という利便性に加え、駅前の路面電車「阪堺電車」に乗れば、レトロな車窓に揺られながら住吉大社前まで情緒たっぷりのショートトリップが可能。高層階レストランでの上質なディナーとともに、一生の記憶に残る新春の記念ステイが叶います。",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/144947/144947.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "大阪府",
              "streetAddress": "大阪府 大阪市阿倍野区阿倍野筋1-1-43"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.69",
              "reviewCount": "1186"
            },
            "priceRange": "¥25,910〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Hotel",
            "name": "スイスホテル南海大阪",
            "description": "南海なんば駅の直上に位置し、関西国際空港や住吉大社へのフットワークが抜群の国際派ラグジュアリーホテル。南海本線に乗ればわずか9分で住吉大社駅に到着できるため、初詣の拠点としてこれ以上ない利便性を誇ります。客室はスイスの機能美と和の落ち着きが調和した上質なインテリアで統一され、広々としたバスタブで旅の疲れを心地よくリセット。最上階のレストランでは世界各国の美食や極上のワインが楽しめ、華やかな大阪の夜を優雅に締めくくることができます。",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/1181/1181.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "大阪府",
              "streetAddress": "大阪府 大阪市中央区難波5-1-60"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.62",
              "reviewCount": "2143"
            },
            "priceRange": "¥16,500〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Hotel",
            "name": "シェラトン都ホテル大阪",
            "description": "古くからの歴史と文化が香る上本町に佇み、長年多くの賓客をもてなしてきた格式ある名門ホテル。近鉄上本町駅に直結し、地下鉄谷町線への乗り換えもスムーズで、住吉大社や四天王寺へのアクセスも快適です。客室は上品で落ち着きのある色彩でコーディネートされ、都会の中にありながら静かな安らぎを提供。ホテル内には伝統の技が光る日本料理や中国料理レストランが充実しており、家族での三世代新春旅行や大切な記念日にも安心して選べる名宿です。",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/1144/1144.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "大阪府",
              "streetAddress": "大阪府 大阪市天王寺区上本町6-1-55"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.41",
              "reviewCount": "6013"
            },
            "priceRange": "¥11,310〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Hotel",
            "name": "ダイワロイネットホテル堺東",
            "description": "堺の行政・商業の中心地である南海高野線「堺東駅」の目の前に位置するハイクオリティホテル。千利休ゆかりの茶の湯スポットや世界遺産・百舌鳥古墳群、伝統の堺刃物の町並みを巡る観光拠点として絶好のロケーションを誇ります。客室は明るくモダンなデザインで、ワイドなベッドと独立したライティングデスクを備え、旅の疲れを癒やす快適な環境が整っています。周辺には老舗の郷土料理店や河内鴨を味わえる名店が多数点在し、堺の夜のグルメ散策にも困りません。",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/111247/111247.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "大阪府",
              "streetAddress": "大阪府 堺市堺区新町5-13"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.35",
              "reviewCount": "2497"
            },
            "priceRange": "¥4,800〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "Hotel",
            "name": "ホテル　アゴーラ　リージェンシー　大阪堺",
            "description": "かつて海外貿易で栄えた堺旧港のウォーターフロントに位置し、南海本線堺駅に直結する大型シティリゾートホテル。住吉大社駅へは南海本線でわずか2駅（約5分）という圧倒的なアクセスの良さを誇り、新春の早朝初詣にも最高の立地です。広々としたロビーや客室からは堺の港町のパノラマや大阪湾の夕景が望め、リゾート感あふれる滞在が楽しめます。館内には本格鉄板焼きレストランやバーラウンジが完備され、大人の上質な冬の休日を演出してくれます。",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/105/105.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "大阪府",
              "streetAddress": "大阪府 堺市堺区戎島町4丁45番地の1"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.32",
              "reviewCount": "3320"
            },
            "priceRange": "¥3,562〜"
          }
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "住吉大社の初詣で反橋（太鼓橋）を渡る際の注意点は？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "反橋は非常に傾斜が急で、中央部分には段差があります。初詣の混雑時には一方通行規制（渡り専用・下りは迂回ルート）が敷かれることがあります。雨や夜露で滑りやすくなるため、足元に十分注意し、手すりを持ちながらゆっくりと渡りましょう。車椅子や足元に不安がある方は、橋の脇にある平坦な参道ルートを通ってお参りできます。"
          }
        },
        {
          "@type": "Question",
          "name": "住吉大社で人気の「五大力（ごだいりき）」の石のお守りとは？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "境内の第一本宮南側にある「五所御前（ごしょごぜん）」の玉砂利の中から、「五」「大」「力」と墨書きされた3つの小石を探し出し、専用のお守り袋に入れて身につけると、体力・智力・財力・福力・寿力の5つの運を授かると伝えられる人気の開運祈願です。新春の願掛けとして多くの参拝客が真剣に小石を探す姿が見られます。"
          }
        },
        {
          "@type": "Question",
          "name": "本場の「河内鴨」料理を味わうためのおすすめの予約方法は？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "河内鴨は生産量が限られた希少なブランド鴨のため、堺市街や大阪市内の専門店・割烹での事前予約が必須です。特に12月〜1月の忘年会・新年会シーズンは鴨鍋コースの予約が埋まりやすいため、宿泊予約と合わせて早めのディナー予約をおすすめします。"
          }
        }
      ]
    }
  ]
};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-stone-50 text-stone-800 pb-20">
        {/* ヒーローヘッダー */}
        <header className="relative bg-gradient-to-b from-stone-900 via-stone-850 to-stone-800 text-white pt-16 pb-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs text-stone-300">
              <Link href="/" className="hover:text-white transition-colors">ホーム</Link>
              <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
              <Link href="/features" className="hover:text-white transition-colors">厳選特集</Link>
              <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
              <Link href="/prefectures/osaka" className="hover:text-white transition-colors">大阪府</Link>
              <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
              <span className="text-cyan-400 font-medium">住吉・堺・天王寺</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-900/60 border border-cyan-700/50 text-cyan-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>2026-2027年冬（11月・12月・1月）最新厳選ガイド</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight text-white">
              【国宝本殿と反橋・摂津国一宮 住吉大社新春初詣】2026-2027年冬の大阪・住吉＆堺！千利休の茶の湯と滋味河内鴨鍋名宿5選
            </h1>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-3xl pt-2">
              200万人以上が訪れる全国住吉神社の総本社「住吉大社」新春初詣！太鼓橋（反橋）の冬の水鏡と国宝本殿の荘厳美、千利休ゆかりの堺の歴史と冬の極上ブランド肉「河内鴨鍋」・なにわ黒牛に心温まる大阪・堺の厳選名宿5選。
            </p>
          </div>
        </header>

        {/* リード文セクション */}
        <section className="max-w-4xl mx-auto px-4 -mt-10 relative z-10 mb-12">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
            <div className="flex items-center gap-2 text-cyan-900 font-bold text-sm sm:text-base border-b border-stone-100 pb-2">
              <Compass className="w-5 h-5 text-cyan-700" />
              <span>冬の住吉・堺・天王寺探訪：静寂と温もりに包まれる旅の魅力</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              商都・大阪の活気と、古代からの神話・歴史が息づく大阪南部・堺エリア。年の初めに200万人を超える初詣客で賑わうのが、全国に約2,300社ある住吉神社の総本宮「摂津国一之宮 住吉大社」です。神功皇后の御代に創建されたと伝わる境内には、海上の守護神・和歌の神・農耕の神として祀られる四棟の国宝本殿が鎮座。日本最古の神社建築様式のひとつ「住吉造」の荘厳な姿を今に伝えます。参道で圧倒的な存在感を放つのが、最大傾斜約48度を誇る象徴的な「反橋（太鼓橋）」。冬の澄んだ水面に朱塗りの橋が鏡のように映り込む景観は息を呑む美しさで、「渡るだけで心身の罪や穢れが祓い清められる」という信仰から、新春の開運を願う参拝者が列をなします。そして住吉大社から紀州街道を下れば、千利休が生まれ茶の湯文化が大成した自由都市・堺。冬の大阪の味覚の頂点に君臨するのが、明治初期から合鴨の改良を重ねて生み出された極上のブランド鴨肉「河内鴨（かわちがも）」。ストレスのない環境で長期飼育された河内鴨は、臭みが一切なく、赤身の芳醇な旨味と口の中で甘く溶ける上質な脂が特徴。特製出汁と冬の極太根深ねぎで煮込む「河内鴨すき鍋」や鴨南蛮は、一度味わえば忘れられない冬の至福の滋味です。世界遺産・百舌鳥古墳群の壮大な歴史、大阪平野を見渡す高層ホテルの夜景とともに、味わい深い大阪の冬旅へご案内します。
            </p>
          </div>
        </section>

        {/* なぜ冬に訪れるべきかの3ポイント */}
        <section className="max-w-4xl mx-auto px-4 mb-14 space-y-4">
          <div className="border-l-4 border-cyan-800 pl-3">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              この冬、住吉・堺・天王寺を訪れるべき3つの理由
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 pt-0.5">
              11月〜1月ならではの幻想的な光景、開運初詣、そして冬が一番美味しい旬の味覚
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/80 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  1
                </span>
                <h3 className="text-base sm:text-lg font-bold text-stone-900">
                  渡るだけでお祓いになる朱塗りの反橋と国宝四棟本殿！200万人が集う「住吉大社」新春初詣
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                全国の住吉神社の総本社であり、摂津国一宮として古代から崇敬される名社。急勾配の反橋（太鼓橋）を渡り、檜皮葺の切妻屋根が連なる国宝本殿四棟に参拝する初詣は関西屈指の伝統行事。境内奥の「五所御前」で小石を探す「五大力（寿・福・力・智・財）」の開運守り集めも大人気です。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/80 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  2
                </span>
                <h3 className="text-base sm:text-lg font-bold text-stone-900">
                  明治より受け継がれる最高峰ブランド肉「河内鴨」の絶品鴨鍋と大阪の美食文化
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                大阪が全国に誇る極上肉「河内鴨」。無投薬で丁寧に育てられた肉質は驚くほど柔らかく、噛み締めるほどに深いコクが溢れ出します。冬に甘みを増す青ねぎとともに味わう鴨すき鍋や鴨刺し、なにわ黒牛のステーキなど、食い倒れの街の神髄を味わい尽くす冬の晩餐が楽しめます。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/80 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  3
                </span>
                <h3 className="text-base sm:text-lg font-bold text-stone-900">
                  千利休ゆかりの堺・茶の湯文化と世界遺産百舌鳥古墳群の歴史散歩
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                黄金の日日を誇った中世の自治都市・堺。千利休屋敷跡や「さかい利晶の杜」での本格的な茶の湯体験、世界遺産・仁徳天皇陵古墳（百舌鳥・古市古墳群）を巡る歴史探訪など、大阪中心部の喧騒から離れた奥深い大人の文化体験を満喫できます。
              </p>
            </div>
          </div>
        </section>

        {/* アクセス・気候・服装ガイド */}
        <section className="max-w-4xl mx-auto px-4 mb-14">
          <div className="bg-cyan-950/5 border border-cyan-800/20 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2">
              <Thermometer className="w-5 h-5 text-cyan-800" />
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                アクセス・気候・冬の服装ガイド
              </h2>
            </div>
            <div className="text-xs sm:text-sm text-stone-700 leading-relaxed whitespace-pre-line bg-white/70 p-5 rounded-xl border border-stone-200/60">
              【エリアへのアクセス】
・電車・私鉄・JR：南海本線「住吉大社駅」より東へ徒歩3分、南海高野線「住吉東駅」より西へ徒歩5分、阪堺電車（路面電車）阪堺線「住吉鳥居前駅」下車すぐ。なんば駅から南海本線急行・普通で住吉大社駅まで約9分。新大阪駅からJR特急または地下鉄御堂筋線経由で天王寺駅まで約20分。
・堺方面へのアクセス：住吉大社駅から南海本線で「堺駅」まで約5分。南海高野線で「堺東駅」まで約10分。
・車・マイカー：阪神高速15号堺線「住之江出口」または「玉出出口」より住吉大社まで約5分。阪神高速4号湾岸線「大浜出口」より堺駅周辺まで約5分。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月下旬〜1月下旬（住吉大社新春初詣、冬の澄んだ水鏡の太鼓橋、河内鴨鍋の旬）。
・気温の目安：大阪湾に面した平野部のため雪は滅多に降りませんが、冬の海風が吹き抜け、朝晩は4〜6℃前後まで冷え込みます。日中は9〜13℃前後。
・服装のポイント：反橋（太鼓橋）は最大傾斜約48度の急な太鼓橋で、足元が滑りやすいため、ヒールの高い靴は避け、底のしっかりしたスニーカーや歩きやすい革靴が必須です。防寒コートやマフラーでお出かけください。
            </div>
          </div>
        </section>

        {/* 近隣名所アーカイブ（Wikipedia連携） */}
        <section className="max-w-4xl mx-auto px-4 mb-14">
          <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl text-white p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
              <MapPin className="w-4 h-4" />
              <span>近隣名所アーカイブ＆公式百科事典連携</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 rounded-xl overflow-hidden bg-stone-800">
                <img
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/Sumiyoshi-taisha%2C_keidai-2.jpg/1280px-Sumiyoshi-taisha%2C_keidai-2.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                  alt="摂津国一宮・住吉大社（国宝四棟本殿・渡るだけでお祓いになる反橋太鼓橋）"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <div>
                  <span className="text-[11px] text-cyan-300 font-mono">Spot Spotlight</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    摂津国一宮・住吉大社（国宝四棟本殿・渡るだけでお祓いになる反橋太鼓橋）
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed mt-2">
                    住吉大社（すみよしたいしゃ）は、大阪府大阪市住吉区住吉にある神社。式内社（名神大社）、摂津国一宮、二十二社（中七社）の一つ。旧社格は官幣大社で、現在は神社本庁の別表神社。全国にある住吉神社の総本社である。本殿4棟は国宝に指定されている。 山口県下関市の住吉神社、福岡県福岡市の住吉神社ともに「三大住吉」の1つに数えられる。
                  </p>
                </div>
                <div className="text-[11px] text-stone-400 pt-2 border-t border-stone-700 flex items-center justify-between">
                  <span>出典：ウィキペディア（Wikipedia）公式情報</span>
                  <a
                    href="https://ja.wikipedia.org/wiki/住吉大社"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    <span>詳細百科事典</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 厳選名宿一覧 */}
        <section className="max-w-4xl mx-auto px-4 space-y-6 mb-14">
          <div className="border-l-4 border-cyan-800 pl-3">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              住吉・堺・天王寺 厳選の温泉＆名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 pt-0.5">
              楽天トラベルの最新実データより厳選。料理・温泉・立地に秀でた極上宿
            </p>
          </div>

          <div className="space-y-6">
            {/* 宿1: 大阪マリオット都ホテル */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 1
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.69</span>
                    <span className="text-stone-400 text-xs font-normal">（1186件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    大阪マリオット都ホテル
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    あべのハルカス高層階の天空ホテル・息を呑む大阪パノラマ夜景
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/144947/144947.jpg"
                      alt="大阪マリオット都ホテル"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      大阪のランドマーク「あべのハルカス」の高層フロアに位置する世界水準のラグジュアリーホテル。すべての客室が地上約100m以上の天空にあり、足元から広がる巨大な窓からは、大阪平野から遠く明石海峡大橋まで一望する息を呑むような大パノラマが広がります。天王寺駅直結という利便性に加え、駅前の路面電車「阪堺電車」に乗れば、レトロな車窓に揺られながら住吉大社前まで情緒たっぷりのショートトリップが可能。高層階レストランでの上質なディナーとともに、一生の記憶に残る新春の記念ステイが叶います。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>日本屈指の高さを誇る超高層ビル「あべのハルカス」38階〜57階の超高層ステイ</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>床から天井までの巨大なパノラマ窓から見晴らす宝石のような大阪夜景</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>住吉大社へは天王寺駅から阪堺電車（路面電車）1本で直通アクセス</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「ラウンジの食事と夜景に感動、次は連泊したいクラブフロアのラウンジがとても良かったです。カクテルタイムのラウンジはおつまみ程度を想像していたのですが、しっかりとしたお料理が並んでいて、美味しかったで… つづきはこちら」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 25,910円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F144947%2F144947.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-800 hover:bg-cyan-900 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 宿2: スイスホテル南海大阪 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 2
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.62</span>
                    <span className="text-stone-400 text-xs font-normal">（2143件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    スイスホテル南海大阪
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    南海なんば駅直結の最高級ホテル・住吉大社へ南海本線で1本直通
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/1181/1181.jpg"
                      alt="スイスホテル南海大阪"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      南海なんば駅の直上に位置し、関西国際空港や住吉大社へのフットワークが抜群の国際派ラグジュアリーホテル。南海本線に乗ればわずか9分で住吉大社駅に到着できるため、初詣の拠点としてこれ以上ない利便性を誇ります。客室はスイスの機能美と和の落ち着きが調和した上質なインテリアで統一され、広々としたバスタブで旅の疲れを心地よくリセット。最上階のレストランでは世界各国の美食や極上のワインが楽しめ、華やかな大阪の夜を優雅に締めくくることができます。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>南海電鉄なんば駅の真上にそびえる抜群のアクセス！住吉大社駅へ直通約9分</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>スイスの洗練された美意識と日本の伝統が融合したモダンラグジュアリー空間</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>最上階36階のレストラン＆スカイラウンジから望む圧巻の大阪夜景</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「部屋の選定ミス、浴室の配慮が足りない毎年、連泊で利用してますが、部屋の選定を間違えました。浴室の気配りが無い。来年はこの部屋は利用しません。クチコミの詳細はこちらから https://… つづきはこちら」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 16,500円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1181%2F1181.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-800 hover:bg-cyan-900 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 宿3: シェラトン都ホテル大阪 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 3
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.41</span>
                    <span className="text-stone-400 text-xs font-normal">（6013件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    シェラトン都ホテル大阪
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    大阪の歴史と文化が息づく上本町の名門・落ち着きある寛ぎの空間
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/1144/1144.jpg"
                      alt="シェラトン都ホテル大阪"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      古くからの歴史と文化が香る上本町に佇み、長年多くの賓客をもてなしてきた格式ある名門ホテル。近鉄上本町駅に直結し、地下鉄谷町線への乗り換えもスムーズで、住吉大社や四天王寺へのアクセスも快適です。客室は上品で落ち着きのある色彩でコーディネートされ、都会の中にありながら静かな安らぎを提供。ホテル内には伝統の技が光る日本料理や中国料理レストランが充実しており、家族での三世代新春旅行や大切な記念日にも安心して選べる名宿です。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>近鉄大阪上本町駅直結！天王寺・住吉方面や奈良・伊勢方面への観光にも便利</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>伝統と格式に裏打ちされた細やかなホスピタリティとゆったりとした客室</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>本格的な日本料理や中国料理・バイキングが揃う充実のレストラン群</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「交通の便が良く、四川料理とワインに大満足交通の便が良い。夕食の四川料理に満足しました。ワインも料理に合わせて選んで下さいました。是非、又宿泊したいホテル。クチコミの詳細はこちらから https… つづきはこちら」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 11,310円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1144%2F1144.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-800 hover:bg-cyan-900 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 宿4: ダイワロイネットホテル堺東 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 4
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.35</span>
                    <span className="text-stone-400 text-xs font-normal">（2497件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    ダイワロイネットホテル堺東
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    堺東駅前徒歩2分の好立地！利休のふるさと堺観光のベストハブ
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/111247/111247.jpg"
                      alt="ダイワロイネットホテル堺東"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      堺の行政・商業の中心地である南海高野線「堺東駅」の目の前に位置するハイクオリティホテル。千利休ゆかりの茶の湯スポットや世界遺産・百舌鳥古墳群、伝統の堺刃物の町並みを巡る観光拠点として絶好のロケーションを誇ります。客室は明るくモダンなデザインで、ワイドなベッドと独立したライティングデスクを備え、旅の疲れを癒やす快適な環境が整っています。周辺には老舗の郷土料理店や河内鴨を味わえる名店が多数点在し、堺の夜のグルメ散策にも困りません。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>南海高野線「堺東駅」西口から徒歩2分の抜群のロケーション</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>全室広々としたデスクと快適ベッド・加湿空気清浄機完備の清潔空間</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>百舌鳥古墳群や堺の歴史スポット・刃物ミュージアムへの周遊に最適</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「リピです。周辺環境が便利で清掃も行き届いた快適な部屋駅、飲食店、スーパー、コンビニが5分圏内で全てあり便利です。お風呂はUBなので評価はしてませんが、お部屋全てに清掃が行き届いています。アメニティ… つづきはこちら」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 4,800円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F111247%2F111247.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-800 hover:bg-cyan-900 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 宿5: ホテル　アゴーラ　リージェンシー　大阪堺 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 5
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.32</span>
                    <span className="text-stone-400 text-xs font-normal">（3320件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    ホテル　アゴーラ　リージェンシー　大阪堺
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    南海本線堺駅直結のフルサービスホテル・ベイエリアを望む優雅な滞在
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/105/105.jpg"
                      alt="ホテル　アゴーラ　リージェンシー　大阪堺"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      かつて海外貿易で栄えた堺旧港のウォーターフロントに位置し、南海本線堺駅に直結する大型シティリゾートホテル。住吉大社駅へは南海本線でわずか2駅（約5分）という圧倒的なアクセスの良さを誇り、新春の早朝初詣にも最高の立地です。広々としたロビーや客室からは堺の港町のパノラマや大阪湾の夕景が望め、リゾート感あふれる滞在が楽しめます。館内には本格鉄板焼きレストランやバーラウンジが完備され、大人の上質な冬の休日を演出してくれます。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>南海本線「堺駅」西口直結！住吉大社駅まで電車でわずか約5分</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>堺のウォーターフロントを見晴らす開放的な客室と洗練された館内空間</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>鉄板焼き・日本料理・中国料理など多彩な美食と充実のホテルバー</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「駅近で大阪周辺への移動が非常に便利駅から近く大阪周辺地域への移動がとても便利でした。クチコミの詳細はこちらから https://review.travel.rakuten.co.jp/hote… つづきはこちら」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 3,562円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F105%2F105.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-800 hover:bg-cyan-900 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ふるさと納税セクション */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent rounded-2xl p-6 sm:p-8 border border-amber-500/20 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="bg-amber-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                Furusato Tax
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                楽天ふるさと納税で実質2,000円！お得に泊まる賢い旅行術
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 max-w-xl leading-relaxed">
                旅行先の自治体へ寄付することで、最大30%相当の楽天トラベル宿泊クーポンが返礼品として付与されます。予約済みの日程にも「あとから割引」で適用可能！
              </p>
            </div>
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl flex items-center gap-2 flex-shrink-0 transition-colors shadow-md shadow-amber-600/20"
            >
              <span>対象宿・クーポンを見る</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* FAQセクション */}
        <section className="max-w-4xl mx-auto px-4 mb-14">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-cyan-700" />
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                冬の住吉・堺・天王寺旅行 よくある質問（FAQ）
              </h2>
            </div>
            <div className="space-y-3">
            <div className="bg-white rounded-xl p-5 border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-cyan-800 font-black">Q.</span>
                <span>住吉大社の初詣で反橋（太鼓橋）を渡る際の注意点は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                反橋は非常に傾斜が急で、中央部分には段差があります。初詣の混雑時には一方通行規制（渡り専用・下りは迂回ルート）が敷かれることがあります。雨や夜露で滑りやすくなるため、足元に十分注意し、手すりを持ちながらゆっくりと渡りましょう。車椅子や足元に不安がある方は、橋の脇にある平坦な参道ルートを通ってお参りできます。
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-cyan-800 font-black">Q.</span>
                <span>住吉大社で人気の「五大力（ごだいりき）」の石のお守りとは？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                境内の第一本宮南側にある「五所御前（ごしょごぜん）」の玉砂利の中から、「五」「大」「力」と墨書きされた3つの小石を探し出し、専用のお守り袋に入れて身につけると、体力・智力・財力・福力・寿力の5つの運を授かると伝えられる人気の開運祈願です。新春の願掛けとして多くの参拝客が真剣に小石を探す姿が見られます。
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-cyan-800 font-black">Q.</span>
                <span>本場の「河内鴨」料理を味わうためのおすすめの予約方法は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                河内鴨は生産量が限られた希少なブランド鴨のため、堺市街や大阪市内の専門店・割烹での事前予約が必須です。特に12月〜1月の忘年会・新年会シーズンは鴨鍋コースの予約が埋まりやすいため、宿泊予約と合わせて早めのディナー予約をおすすめします。
              </p>
            </div>
            </div>
          </div>
        </section>

        {/* 内部リンク・関連回遊ナビゲーション */}
        <section className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-6 border border-stone-200 space-y-4">
            <h3 className="text-sm font-bold text-stone-900 border-b border-stone-100 pb-2">
              あわせて読みたい関連旅行ガイド
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <Link
                href="/prefectures/osaka"
                className="p-3 rounded-xl bg-stone-50 hover:bg-cyan-50 hover:text-cyan-800 transition-colors flex items-center justify-between font-medium text-stone-700 border border-stone-200/60"
              >
                <span>大阪府のおすすめ温泉宿・ホテル一覧</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </Link>
              <Link
                href="/features"
                className="p-3 rounded-xl bg-stone-50 hover:bg-cyan-50 hover:text-cyan-800 transition-colors flex items-center justify-between font-medium text-stone-700 border border-stone-200/60"
              >
                <span>全国の季節・目的別厳選特集一覧</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </Link>
              <Link
                href="/furusato-tax-luxury-hotspring-ryokan-stay"
                className="p-3 rounded-xl bg-stone-50 hover:bg-cyan-50 hover:text-cyan-800 transition-colors flex items-center justify-between font-medium text-stone-700 border border-stone-200/60"
              >
                <span>実質2,000円で泊まる高級温泉旅館ガイド</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </Link>
              <Link
                href="/furusato-tax-local-gourmet-inn-stay"
                className="p-3 rounded-xl bg-stone-50 hover:bg-cyan-50 hover:text-cyan-800 transition-colors flex items-center justify-between font-medium text-stone-700 border border-stone-200/60"
              >
                <span>ご当地グルメを堪能する全国美食旅特集</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
