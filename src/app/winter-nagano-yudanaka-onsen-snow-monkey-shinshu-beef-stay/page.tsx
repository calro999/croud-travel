import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves, Wine, ThermometerSun, Footprints, Mountain
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12月信州湯田中渋温泉郷】登録有形文化財風呂！名宿5選',
  description: '11月下旬から12月にかけて長野県・北信濃の志賀高原山麓に広がる湯田中渋温泉郷は、初雪が舞い始め。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '湯田中温泉 宿泊, 渋温泉 11月 12月, 地獄谷 スノーモンキー 宿, よろづや 桃山風呂, あぶらや燈千, 清風荘, 湯田中 島屋, 春蘭の宿さかえや, 信州牛 ステーキ, 九湯めぐり, 長野 冬 温泉',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-nagano-yudanaka-onsen-snow-monkey-shinshu-beef-stay/",
  },
  openGraph: {
    title: '【11・12月信州湯田中渋温泉郷】登録有形文化財風呂！名宿5選',
    description: '11月下旬から12月にかけて長野県・北信濃の志賀高原山麓に広がる湯田中渋温泉郷は、初雪が舞い始め。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-nagano-yudanaka-onsen-snow-monkey-shinshu-beef-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月信州湯田中渋温泉郷の雪中スノーモンキーと開湯1350年名湯】登録有形文化財風呂・信州プレミアム牛ステーキ＆雪見酒の宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月信州湯田中渋温泉郷の雪中スノーモンキーと開湯1350年名湯】登録有形文化財風呂・信州プレミアム牛ステーキ＆雪見酒の宿5選",
    description: "11月下旬から12月にかけて長野県・北信濃の志賀高原山麓に広がる湯田中渋温泉郷は、初雪が舞い始め、世界で唯一温泉に入るニホンザルが見られる「地獄谷野猿公苑（スノーモンキー）」の本格シーズンが開幕します。開湯から1350年以上の歴史を誇る湯田中温泉・渋温泉は、石畳の小径に湯煙が立ち上り、国の登録有形文化財に指定された壮麗な木造建築「桃山風呂」や9つの外湯めぐりが情緒豊か。湯上がりに味わう「信州プレミアム牛肉」の陶板ステーキや信州サーモン、名物信州そば、北信流の雪見地酒を堪能する至福の温泉旅名宿5選を徹底解説。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'],
  }
};

const faqList = [
  {
    "q": "地獄谷野猿公苑（スノーモンキー）の11月・12月の見頃や開園状況は？",
    "a": "地獄谷野猿公苑は年中無休で営業していますが、ニホンザルが気持ちよさそうに温泉に浸かる姿（スノーモンキー）が最も頻繁に見られるのは、気温が氷点下になる「11月下旬から3月」の冬期です。特に11月下旬以降は志賀高原山麓に初雪が降り、雪景色の中で湯煙を立てる露天風呂に群れで入浴する姿が世界中から注目されます。駐車場（上林温泉側）から野猿公苑までは、未舗装の山道を片道約1.6km（徒歩約30分）歩くため、防水・防滑のスノーブーツと完全防寒着が必須です。"
  },
  {
    "q": "湯田中温泉と渋温泉の違いや歴史、泉質の特徴について教えてください。",
    "a": "湯田中渋温泉郷は、開湯から1350年以上の歴史を誇る北信濃の名湯です。湯田中温泉は長野電鉄の終着駅「湯田中駅」を中心に広がる大型旅館や老舗が揃う温泉街で、弱アルカリ性単純温泉が多く、肌当たりが優しく湯冷めしにくいのが特徴です。一方、隣接する渋温泉は、石畳の小径に三階建ての木造旅館が立ち並ぶレトロな風情が色濃く残り、ナトリウム・カルシウム-硫酸塩・塩化物泉など源泉ごとに異なる濃厚な泉質を持ちます。どちらも豊富な湯量を誇り、街全体で湯めぐりが楽しめます。"
  },
  {
    "q": "渋温泉名物の「厄除け巡浴九湯めぐり（外湯めぐり）」とは何ですか？",
    "a": "渋温泉には、地元の人々が日常的に守り続けている9つの共同浴場（外湯）があります。渋温泉の宿泊客には各宿で「外湯の合鍵」が貸し出され、初湯から九番湯「大湯」までの九湯すべてを無料で巡ることができます。手ぬぐいに各湯のスタンプを押しながら九湯すべてを巡り、最後に渋高薬師へ参拝すると「満願成就」「厄除け」「不老長寿」のご利益があるとされています。湯田中温泉に泊まる場合でも、外湯めぐり付きプランや日帰り入浴可能な外湯があります。"
  },
  {
    "q": "冬の湯田中温泉・志賀高原周辺で味わうべき信州グルメは何ですか？",
    "a": "信州の最高峰ブランド牛「信州プレミアム牛肉」は絶対に味わいたい逸品です。長野県独自の厳格な基準（サシの入り具合とオレイン酸含有率）をクリアした黒毛和牛で、とろけるような食感と芳醇な香りが自慢です。また、千曲川の清流で育つ「信州サーモン」のお造り、冬の寒さで甘みが増す地元中野市特産の「エノキ・シメジなどのキノコ鍋」、石臼挽きの「手打ち信州そば」、そして北信流の搾りたて雪見地酒（志賀高原ビールや渓流など）が最高の組み合わせです。"
  },
  {
    "q": "東京や大阪・名古屋から湯田中温泉への冬のアクセス方法は？",
    "a": "首都圏からは、北陸新幹線「かがやき」「あさま」でJR長野駅まで約1時間20分。長野駅から長野電鉄の特急「スノーモンキー号」または「ゆけむり号」に乗り換えて約45分で終点「湯田中駅」に到着します。駅から各温泉街へは徒歩数分〜無料送迎バスですぐ。車利用の場合、上信越自動車道「信州中野IC」から約15分ですが、11月中旬以降は降雪や路面凍結が発生するため、必ずスタッドレスタイヤを装着してください。"
  }
];

export default function NaganoYudanakaWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-nagano-yudanaka-onsen-snow-monkey-shinshu-beef-stay#article",
        "headline": "【11・12月信州湯田中渋温泉郷の雪中スノーモンキーと開湯1350年名湯】登録有形文化財風呂・信州プレミアム牛ステーキ＆雪見酒の宿5選",
        "description": "11月下旬から12月にかけて長野県・北信濃の志賀高原山麓に広がる湯田中渋温泉郷は、初雪が舞い始め、世界で唯一温泉に入るニホンザルが見られる「地獄谷野猿公苑（スノーモンキー）」の本格シーズンが開幕します。開湯から1350年以上の歴史を誇る湯田中温泉・渋温泉は、石畳の小径に湯煙が立ち上り、国の登録有形文化財に指定された壮麗な木造建築「桃山風呂」や9つの外湯めぐりが情緒豊か。湯上がりに味わう「信州プレミアム牛肉」の陶板ステーキや信州サーモン、名物信州そば、北信流の雪見地酒を堪能する至福の温泉旅名宿5選を徹底解説。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "datePublished": "T00:00:00+09:00",
        "dateModified": "T00:00:00+09:00",
        "author": {
          "@type": "Organization",
          "name": "日本全国・旅宿クラウド 編集部",
          "url": "https://croud-travel.pages.dev"
        },
        "publisher": {
          "@type": "Organization",
          "name": "日本全国・旅宿クラウド",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.pages.dev/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-nagano-yudanaka-onsen-snow-monkey-shinshu-beef-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-nagano-yudanaka-onsen-snow-monkey-shinshu-beef-stay#faq",
        "mainEntity": faqList.map(item => ({
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

  const hotels = [
            {
              id: 1,
              name: "湯田中温泉　よろづや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/52848/52848.jpg",
              rating: 4.60,
              reviews: 1204,
              price: "¥16,000〜",
              access: "長野電鉄 湯田中駅より 徒歩7分　【地獄谷野猿公苑入口まで車で20分】",
              special: "歴史に触れる宿へようこそ。登録有形文化財「桃山風呂」で、ゆっくり寛ぎの一時を",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52848%2F52848.html",
              story: "創業寛政年間、開湯から220年以上の歴史を誇り、国の登録有形文化財に指定された大浴場「桃山風呂」を擁する信州屈指の老舗純和風旅館「湯田中温泉 よろづや」。日本の温泉建築の最高峰と讃えられる桃山風呂は、釘を一本も使わない純木造の伽藍建築で、神社仏閣を思わせる折上格天井と重厚な柱、名工が手掛けた彫刻が圧巻の迫力です。自家源泉から滾々と湧き出る掛け流しの名湯に浸かり、中庭の雪景色と庭園露天風呂を眺めるひとときは、まさに日本の温泉文化の真髄。皇族や文人墨客にも愛された歴史の風格が息づいています。",
              roomTip: "本館登録有形文化財客室「松籟荘（しょうらいそう）」または温泉露天風呂付き客室。職人の匠の技が光る数寄屋造りの空間で、初冬の静寂と日本庭園の雪景色を静かに愛でることができます。",
              gourmetTip: "信州四季彩会席。信州の大自然で育った最高級「信州プレミアム牛肉」の陶板焼きやしゃぶしゃぶ、清流育ちの信州サーモンのお造り、香り高い地元の手打ち信州そばなど、信州の恵みを繊細に仕立てた絶品料理。",
              highlights: [
                "国登録有形文化財・純木造伽藍建築「桃山風呂」＆自家源泉掛け流し庭園露天風呂",
                "創業寛政年間の歴史が息づく数寄屋造り客室「松籟荘」＆信州四季彩会席" ,
                "釘を一本も使わない折上格天井の圧倒的スケールと初冬の雪見露天の静寂"
              ]
            },
            {
              id: 2,
              name: "湯田中温泉　燈火、旬遊の宿　あぶらや燈千",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5141/5141.jpg",
              rating: 4.56,
              reviews: 1498,
              price: "¥9,405〜",
              access: "上信越自動車道信州中野ＩＣから車で約15分で無料駐車場あり。電車は長野電鉄湯田中駅から徒歩8分。無料送迎は要事前予約",
              special: "21年8月露天風呂付客室（ロウリュウサウナ＋シェフズテーブル）オープン★屋上バー、夕食は完全個室！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5141%2F5141.html",
              story: "夜間瀬川の清流を望む温泉街の中心に位置し、7階屋上に誕生した開放感あふれるルーフトップバー「雪月花」や贅沢な貸切露天風呂で進化を続けるモダンリゾート「湯田中温泉 燈火、旬遊の宿 あぶらや燈千（とうせん）。」。館内にはあたたかな灯火が揺らめき、洗練された和モダンのホスピタリティが広がります。冬の澄んだ夜空の下、ルーフトップバーで焚き火やヒーターに温まりながら信州産ワインや地酒を味わい、美肌の自家源泉露天風呂で手足を伸ばす時間は、大人の冬旅にふさわしい贅沢なひとときです。",
              roomTip: "露天風呂付き客室「千の旅」またはコーナースイート。客室専用の信楽焼露天風呂から北信濃の冠雪した山並みや川の流れを望み、好きな時間にプライベートな湯浴みを楽しめます。",
              gourmetTip: "名物「あぶらやフォンデュ」と特選信州プレミアム牛ステーキ。揚げたての地場野菜や串を特製出汁で楽しむ創作料理や、柔らかくジューシーな信州牛を鉄板で香ばしく焼き上げた極上ディナー。",
              highlights: [
                "7階屋上ルーフトップバー「雪月花」＆夜間瀬川一望の貸切露天風呂",
                "露天風呂付きモダン客室「千の旅」＆名物あぶらやフォンデュと信州牛ステーキ" ,
                "澄み切った冬の星空と焚き火ラウンジで味わう信州産ワインと地酒のペアリング"
              ]
            },
            {
              id: 3,
              name: "信州・湯田中温泉　清風荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/41634/41634.jpg",
              rating: 4.13,
              reviews: 108,
              price: "¥11,000〜",
              access: "長野電鉄　湯田中駅より徒歩２分／上信越自動車道　信州中野ＩＣよりＲ２９２経由で１５分。",
              special: "★無料貸切風呂や天然温泉の露天風呂。卓球台もあります。人気の信州牛も☆食事は個室",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F41634%2F41634.html",
              story: "湯田中温泉の閑静な高台に佇み、自家源泉から湧出する豊富な弱アルカリ性単純温泉を100%源泉掛け流しで贅沢に注ぐ名湯宿「信州・湯田中温泉 清風荘」。家庭的で心温まるおもてなしと、素朴ながら滋味あふれる料理が多くのリピーターに愛されています。広々とした大浴場と庭園露天風呂は、初冬の北風の中で熱い名湯がじんわりと身体に染み渡り、疲労回復や神経痛に高い効果を発揮します。地獄谷野猿公苑へのアクセスも良好で、スノーモンキー観光の拠点として最適です。",
              roomTip: "庭園を望む和室10畳または和洋室。畳の温もりが心地よく、窓の外には初冬の庭木や温泉街の湯煙が漂う風情ある景色が広がります。",
              gourmetTip: "信州牛陶板焼き会席。地元の契約農家から届く新鮮な冬野菜やキノコ、厳選された信州牛の陶板焼き、名物信州そばを温かい出汁で楽しむ、信州の家庭の温もりを感じる手作り会席膳。",
              highlights: [
                "自家源泉100%掛け流し弱アルカリ単純泉＆アットホームな老舗の温もり",
                "信州牛陶板焼きと旬の冬野菜会席＆湯田中高台からの静かな温泉街パノラマ" ,
                "肌にしっとり馴染む美肌の湯で冷えた身体を芯から温める癒やしの長湯"
              ]
            },
            {
              id: 4,
              name: "湯田中温泉　島屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/2157/2157.jpg",
              rating: 5.00,
              reviews: 113,
              price: "¥9,100〜",
              access: "信州中野ＩＣより15ｋｍ約15分・湯田中駅より徒歩で８～１０分。 山岳登山、鉄道写真、等　お客様のご趣味を応援します。",
              special: "源泉かけ流し！檜香る大浴場＆貸切風呂で至福の時間■国内外のバックパッカーに人気の気取らない宿です★",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2157%2F2157.html",
              story: "湯田中駅前の温泉街に位置し、100%源泉掛け流しの天然温泉と、地獄谷野猿公苑（スノーモンキー）への無料送迎サービスで世界中の旅行者から高い評価を得ている老舗温泉旅館「湯田中温泉 島屋」。館内の大浴場と展望露天風呂には、微炭酸を含む良質な源泉が24時間掛け流されており、柔らかい肌ざわりで芯まで温まります。ペット同伴可能な客室も備え、家族のように温かく迎えてくれるアットホームな宿主の気配りが旅の緊張を優しく解きほぐしてくれます。",
              roomTip: "露天風呂付き和室または広々とした本館和室。木の温もりを感じる落ち着いた空間で、温泉街の散策後やスノーモンキー見学後に手足を伸ばしてぐっすり休息できます。",
              gourmetTip: "北信濃の郷土味覚膳。信州牛のすき焼きをはじめ、地元中野市特産のキノコをたっぷり使った鍋料理、信州サーモンのお刺身、手打ちそばなど、郷土色豊かでボリューム満点の夕食。",
              highlights: [
                "地獄谷野猿公苑への無料送迎あり＆微炭酸を含む良質な源泉掛け流し名湯",
                "駅近の好立地と心温まるおもてなし＆信州牛すき焼きとキノコ鍋の郷土膳" ,
                "海外観光客にも大人気の親切なスノーモンキーガイド案内＆ペット同伴対応"
              ]
            },
            {
              id: 5,
              name: "渋温泉　春蘭の宿　さかえや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/3139/3139.jpg",
              rating: 4.88,
              reviews: 1248,
              price: "¥16,720〜",
              access: "上信越自動車道信州中野ＩＣより車で１５分、ＪＲ湯田中駅よりバス",
              special: "【ロウリュサウナ付き貸切風呂と高気圧酸素カプセルルーム】源泉かけ流しで至福のひとときを。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F3139%2F3139.html",
              story: "石畳の小径に下駄の音が響く渋温泉街の中心に位置し、伝統的な湯治場の情緒と洗練された美食を兼ね備えた大人の隠れ宿「渋温泉 春蘭の宿 さかえや（さかえや）」。館内には地元の竹や木をあしらったモダンな空間が広がり、渋温泉の源泉を引いた露天風呂では、初冬の澄んだ空気を感じながら肌に優しい弱アルカリ性の名湯を堪能できます。宿泊者は渋温泉名物の「厄除け巡浴九湯めぐり」の鍵を借りて、外湯をすべて無料で巡ることが可能。湯巡りの後にいただく創作懐石は芸術的な美しさです。",
              roomTip: "和モダンベッド客室または温泉半露天風呂付きスイート。シモンズ製ベッドを配置した快適な寝室と、渋温泉の情緒ある街並みを眼下に見下ろす窓辺のラウンジが魅力です。",
              gourmetTip: "全国料理コンクールでも受賞歴を誇る「信州創作懐石」。信州プレミアム牛肉の炭火焼きをメインに、地元の契約農家直送の冬野菜や北信州の山菜・川魚を、モダンな技法と美しい盛り付けで提供。",
              highlights: [
                "渋温泉の石畳中心に佇む美食宿＆「厄除け巡浴九湯めぐり」全湯無料手形付き",
                "全国コンクール受賞の本格創作懐石＆信州プレミアム牛炭火焼きディナー" ,
                "下駄の音響く石畳の温泉街散策と湯上がりに寛ぐシモンズベッド和モダン客室"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-indigo-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white overflow-hidden py-16 sm:py-24 border-b border-indigo-900/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_50%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs sm:text-sm font-medium backdrop-blur-sm">
            <Snowflake className="w-4 h-4 text-indigo-400 animate-spin-slow" />
            <span>11月・12月 冬の信州・湯田中渋温泉郷特集</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【11・12月信州湯田中渋温泉郷の雪中スノーモンキーと開湯1350年名湯】登録有形文化財風呂・信州プレミアム牛ステーキ＆雪見酒の宿5選
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-4xl">
            11月下旬から12月にかけて、北信濃・志賀高原山麓の湯田中渋温泉郷は初雪が舞い降り、世界で唯一温泉に浸かる野生ザル「スノーモンキー」の感動的なシーズンを迎えます。開湯1350年の歴史が息づく石畳の小径、国の登録有形文化財に指定された壮麗な純木造「桃山風呂」や九湯めぐりの風情。白銀の山並みを眺めながら浸かる源泉掛け流しの雪見露天風呂、極上銘柄牛「信州プレミアム牛」の陶板ステーキや信州サーモン、名物信州そばと雪見酒に酔いしれる、至高の冬名宿を厳選してご紹介します。
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-indigo-400" /> 11月下旬〜12月がベスト</span>
            <span className="flex items-center gap-1.5"><Snowflake className="w-4 h-4 text-indigo-400" /> 地獄谷スノーモンキー絶景</span>
            <span className="flex items-center gap-1.5"><Landmark className="w-4 h-4 text-indigo-400" /> 登録有形文化財「桃山風呂」</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-indigo-400" /> 信州プレミアム牛・手打ちそば</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月信州湯田中渋温泉郷】登録有形文化財風呂！名宿5選","item":"https://croud-travel.pages.dev/winter-nagano-yudanaka-onsen-snow-monkey-shinshu-beef-stay"}]}) }}
      />

        {/* Section 1: Seasonal Overview */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-indigo-100">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-800">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Heritage & Nature Wonder</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の湯田中渋温泉郷：雪中スノーモンキーと開湯1350年の情緒
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              長野県北東部、上信越高原国立公園の志賀高原の麓に位置する「湯田中渋温泉郷（ゆだなかしぶおんせんきょう）。」は、天智天皇の時代（7世紀）に開湯したと伝えられる日本屈指の古湯です。夜間瀬川の渓谷沿いに湯田中、新湯田中、渋、安代、星川など個性豊かな温泉地が連なり、昔ながらの射的場や木造建築、石畳の路地に下駄の音が響くノスタルジックな風景が広がっています。
            </p>
            <p>
              11月下旬から12月にかけて、この地が世界中から熱い視線を集める最大の理由が、横湯川渓谷の奥深くに位置する「地獄谷野猿公苑（スノーモンキー）」です。厳しい冬の寒さを凌ぐため、野生のニホンザルが人間と同じように湯煙を上げる露天風呂に気持ちよさそうに身を沈める姿は、世界でここだけの奇跡的な光景。初雪が積もる白銀の渓谷の中で、目を細めて温まるサルたちのユーモラスで愛らしい姿は、訪れる人々に生涯忘れられない感動を与えてくれます。
            </p>
            <p>
              温泉街に戻れば、日本の温泉建築の至宝として名高い「よろづや」の国登録有形文化財「桃山風呂」や、渋温泉の「厄除け巡浴九湯めぐり」など、歴史ある名湯三昧の時間が待っています。初冬の冷気に包まれた身体を弱アルカリ性の掛け流し名湯で温め、夜は長野県独自のプレミアム基準を満たした「信州プレミアム牛」や手打ち信州そば、地元の銘酒に酔いしれる。日本の古き良き湯治文化と大自然の神秘が調和した、最高の冬旅がここにあります。
            </p>
          </div>
        </section>

        {/* Section 2: Onsen & Gastronomy Science */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-indigo-100">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-800">
              <Waves className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Heritage Architecture & Shinshu Terroir</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                桃山風呂の建築美と、オレイン酸香る「信州プレミアム牛肉」の極み
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Flame className="w-4 h-4 text-indigo-700" />
              <span>釘を使わない純木造格天井の建築美と、肌をいたわる弱アルカリ単純泉</span>
            </h3>
            <p>
              湯田中温泉の象徴である「よろづや 桃山風呂」は、昭和初期の日本の宮大工の技が結集した純木造伽藍建築の傑作です。釘を一本も使わずに組み上げられた折上格天井（おりあげごうてんじょう）は高さ数メートルに達し、立ち上る湯煙が自然換気によって天井高く抜ける立体設計となっています。湯室内は常に清々しい木造の香りと湯気に満たされ、入浴自体が神聖な儀式のように感じられます。
            </p>
            <p>
              注がれるお湯は、敷地内の自家源泉から滾々と湧き出る無色透明の弱アルカリ性単純温泉。刺激が少なく肌にやさしい泉質で、赤ちゃんから高齢者まで安心して長湯を楽しめます。弱アルカリ性の成分が肌表面の角質を優しくなめらかに整え、入浴後も湯冷めしにくく、神経痛や筋肉痛、冬の冷え性に優れた効能をもたらします。雪見露天風呂の石造りの湯船からは、雪化粧した日本庭園の松や灯籠を眺めながら静かな瞑想の湯浴みが叶います。
            </p>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 pt-2">
              <Utensils className="w-4 h-4 text-indigo-700" />
              <span>オレイン酸基準クリアの極上「信州プレミアム牛」と手打ち信州そばの贅</span>
            </h3>
            <p>
              ディナーの主役となる「信州プレミアム牛肉」は、長野県が全国に先駆けて導入した美味しさの科学的基準（オレイン酸含有率55%以上かつサシ基準を満たすもの）をクリアした極上の黒毛和牛です。オレイン酸を豊富に含む脂は融点が約16℃と極めて低いため、口の中に入れた瞬間に体温でスッと溶け、舌の上に脂っぽさが残らず芳醇な甘みとナッツのような香ばしさが広がります。
            </p>
            <p>
              陶板ステーキですっきりと焼き上げ、安曇野産本わさびや地元リンゴ入りの特製醤油だれでいただく味わいはまさに格別。さらに、清流で育つ「信州サーモン」のお造りや、地元中野市特産のキノコをたっぷり使った鍋料理、石臼挽きの手打ち信州そば、そして北信州の冬限定搾りたて地酒の熱燗を合わせることで、五感が喜ぶ冬の信州の贅沢が極まります。
            </p>
          </div>
        </section>

        {/* Section 3: Hotel Cards */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Selected Ryokans & Hotels</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              湯田中渋温泉郷の魅力を極める厳選宿5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              登録有形文化財の老舗宿、ルーフトップバーモダン宿、自家源泉100%宿、スノーモンキー送迎宿、九湯めぐり美食宿まで徹底比較。
            </p>
          </div>

          <div className="space-y-10">
            {hotels.map((h) => (
              <div 
                key={h.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/90 hover:shadow-md transition-shadow duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
                    <img 
                      src={h.img} 
                      alt={h.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md text-indigo-300 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm">
                      <Star className="w-3.5 h-3.5 fill-indigo-400 text-indigo-400" />
                      <span>{h.rating}</span>
                      <span className="text-slate-400 font-normal">({h.reviews}件)</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-3 rounded-2xl text-white text-xs">
                      <p className="font-semibold line-clamp-1">{h.special}</p>
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-800 border border-indigo-200">
                          第{h.id}位 湯田中渋厳選名宿
                        </span>
                        <div className="text-right">
                          <span className="text-xs text-slate-500 block">参考宿泊料金（目安）</span>
                          <span className="text-lg font-bold text-indigo-700">{h.price}</span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                        {h.name}
                      </h3>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {h.story}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-indigo-700" />
                          <span>この宿の宿泊ハイライト</span>
                        </h4>
                        <ul className="grid grid-cols-1 gap-1.5 text-xs text-slate-600">
                          {h.highlights.map((hl: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 mt-0.5 shrink-0" />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1">
                          <span className="font-bold text-slate-800 flex items-center gap-1">
                            <Eye className="w-3.5 h-3.5 text-indigo-700" /> 客室選びのコツ
                          </span>
                          <p className="text-slate-600 text-[11px] leading-relaxed">{h.roomTip}</p>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1">
                          <span className="font-bold text-slate-800 flex items-center gap-1">
                            <Utensils className="w-3.5 h-3.5 text-indigo-700" /> 夕食の注目ポイント
                          </span>
                          <p className="text-slate-600 text-[11px] leading-relaxed">{h.gourmetTip}</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="text-[11px] text-slate-500 flex items-center gap-1 self-start sm:self-center">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="line-clamp-1">{h.access}</span>
                      </div>

                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-700 hover:bg-indigo-800 text-white font-bold text-sm shadow-sm transition-colors duration-200"
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

        {/* Section 4: Model Itinerary */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-indigo-100">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Snow Monkey Route</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月 スノーモンキーと桃山風呂を満喫する1泊2日モデルコース
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-700">
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200/70">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-indigo-700 text-white flex items-center justify-center text-xs">1</span>
                <span>1日目：雪中の地獄谷スノーモンキーと温泉街</span>
              </h3>
              <ul className="space-y-2.5 pl-2">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-indigo-800 shrink-0">11:00</span>
                  <span>北陸新幹線・長野駅から長野電鉄特急スノーモンキー号で湯田中駅へ。駅前で手打ち信州そばの昼食。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-indigo-800 shrink-0">12:30</span>
                  <span>路線バスまたはタクシーで上林温泉口へ。雪景色の山道を歩き「地獄谷野猿公苑」へ。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-indigo-800 shrink-0">13:15</span>
                  <span>野猿公苑に到着。雪が舞う露天風呂に気持ちよさそうに浸かる野生のサル（スノーモンキー）をじっくり観察・撮影。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-indigo-800 shrink-0">15:30</span>
                  <span>温泉宿へチェックイン。国の登録有形文化財「桃山風呂」や雪見露天風呂に浸かり冷えた身体を芯まで温める。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-indigo-800 shrink-0">18:30</span>
                  <span>信州プレミアム牛肉の陶板ステーキや信州サーモン、地酒の熱燗を味わう贅沢な夕食膳を堪能。</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200/70">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-indigo-700 text-white flex items-center justify-center text-xs">2</span>
                <span>2日目：渋温泉石畳散策と九湯めぐり</span>
              </h3>
              <ul className="space-y-2.5 pl-2">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-indigo-800 shrink-0">07:00</span>
                  <span>朝の澄んだ空気の中での朝湯。湯気立ち上る露天風呂から北信濃の山々の朝焼けを望む。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-indigo-800 shrink-0">08:00</span>
                  <span>宿の朝食。温泉卵、手作り味噌の味噌汁、長野県産コシヒカリの炊きたてご飯を味わう。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-indigo-800 shrink-0">09:30</span>
                  <span>チェックアウト後、渋温泉の石畳通りを散策。厄除け九湯めぐりの「大湯」や渋高薬師を参拝。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-indigo-800 shrink-0">11:30</span>
                  <span>温泉街の和菓子処で名物の温泉まんじゅうを食べ歩き。足湯に浸かりながらひと休み。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-indigo-800 shrink-0">13:30</span>
                  <span>湯田中駅から特急ゆけむり号に乗車し長野駅へ。善光寺参拝やお土産（野沢菜・八幡屋礒五郎七味）を購入し帰路へ。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Practical Travel Advice */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-indigo-100">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-800">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Travel Checklist</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の湯田中渋温泉郷旅行で知っておくべき重要アドバイス
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-indigo-700" />
                <span>地獄谷野猿公苑散策の足元と防寒装備</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                上林温泉の駐車場から地獄谷野猿公苑までは約1.6kmの未舗装山道（遊歩道）を歩きます。11月下旬以降は雪やぬかるみ、凍結が発生するため、革靴やヒールは厳禁です。滑り止めの効いた防水スノーブーツまたはトレッキングシューズ、厚手のダウンジャケット、ニット帽、手袋を必ず着用してください。
              </p>
            </div>
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Footprints className="w-4 h-4 text-indigo-700" />
                <span>冬期タイヤ規制と公共交通機関の利便性</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                志賀高原山麓の道路は11月中旬以降、朝晩を中心に路面凍結が発生します。マイカー利用の場合は必ずスタッドレスタイヤを装着してください。長野駅からは長野電鉄特急が直通運行しており、雪道運転の不安なくスムーズに移動できるため、電車・バスの利用が非常に快適です。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-indigo-100">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Traveler's Q&A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                湯田中渋温泉郷冬旅のよくある質問（FAQ）
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-indigo-800 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Internal Links */}
        <section className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Related Alpine & Snow Retreats</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい信州・甲信越の冬名湯＆雪見露天特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              11月・12月の初雪やパウダースノー、信州プレミアム牛を味わう厳選特集もぜひご覧ください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-nagano-hakuba-onsen-powder-snow-alps-shinshu-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-indigo-300 font-semibold block mb-1">長野・白馬山麓温泉</span>
              <h3 className="text-sm font-bold group-hover:text-indigo-200 transition">白銀北アルプス絶景露天＆pH11超美肌湯・信州牛の宿</h3>
            </Link>
            <Link 
              href="/winter-nagano-nozawa-onsen-powder-snow-sotoyu-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-indigo-300 font-semibold block mb-1">長野・野沢温泉</span>
              <h3 className="text-sm font-bold group-hover:text-indigo-200 transition">極上パウダースノーと13の外湯めぐり・信州牛すき焼きの宿</h3>
            </Link>
            <Link 
              href="/winter-nagano-suwa-onsen-lake-view-shinshu-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-indigo-300 font-semibold block mb-1">長野・諏訪湖温泉</span>
              <h3 className="text-sm font-bold group-hover:text-indigo-200 transition">諏訪湖一望の展望露天風呂と諏訪五蔵地酒・信州プレミアム牛の宿</h3>
            </Link>
            <Link 
              href="/winter-gunma-kusatsu-onsen-yubatake-joshu-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-indigo-300 font-semibold block mb-1">群馬・草津温泉</span>
              <h3 className="text-sm font-bold group-hover:text-indigo-200 transition">湯畑ライトアップと天下の名湯・上州牛すき焼きの宿</h3>
            </Link>
            <Link 
              href="/winter-niigata-echigo-yuzawa-snow-sake-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-indigo-300 font-semibold block mb-1">新潟・越後湯沢温泉</span>
              <h3 className="text-sm font-bold group-hover:text-indigo-200 transition">川端康成ゆかりの雪国名湯と魚沼産コシヒカリ・越後地酒の宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-indigo-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-indigo-200 transition">全国の厳選温泉・旬旅特集まとめを見る</h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-nagano-yudanaka-onsen-snow-monkey-shinshu-beef-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
