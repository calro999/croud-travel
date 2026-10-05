import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves, Wine, ThermometerSun, Footprints, Mountain
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月奥日光中禅寺温泉の初冬中禅寺湖と男体山雪絶景】乳白色硫黄泉露天風呂・極上とちぎ和牛＆日光湯波会席の宿5選",
  description: "11月から12月にかけて栃木県・奥日光は、標高2,486mの霊峰・男体山が初雪の白銀を纏い、湖面標高1,269mの澄み切った中禅寺湖が静寂の鏡のように冬景色を映し出します。日光開山の祖・勝道上人ゆかりの源泉・日光湯元から約12kmを引湯する硫黄泉は、湧出時はエメラルドグリーン、空気に触れて神秘的な乳白色へと変化する美肌の名湯。冬の湖畔を眺めながら温まる雪見露天風呂、とろけるような霜降りの「とちぎ和牛」サーロイン、日光伝統の生湯波（ゆば）会席や奥日光イワナを堪能する極上の奥日光名宿5選を徹底解説。",
  keywords: '奥日光 中禅寺温泉 宿泊, 中禅寺湖 11月 12月, 中禅寺湖 雪 男体山, 中禅寺温泉 にごり湯, 中禅寺金谷ホテル, ザリッツカールトン日光, ホテル花庵, ホテル四季彩, 日光山水, とちぎ和牛 ステーキ, 日光 湯波 宿',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-tochigi-okunikko-chuzenji-lake-onsen-snow-stay/",
  },
  openGraph: {
    title: "【11・12月奥日光中禅寺温泉の初冬中禅寺湖と男体山雪絶景】乳白色硫黄泉露天風呂・極上とちぎ和牛＆日光湯波会席の宿5選",
    description: "11月から12月にかけて栃木県・奥日光は、標高2,486mの霊峰・男体山が初雪の白銀を纏い、湖面標高1,269mの澄み切った中禅寺湖が静寂の鏡のように冬景色を映し出します。日光開山の祖・勝道上人ゆかりの源泉・日光湯元から約12kmを引湯する硫黄泉は、湧出時はエメラルドグリーン、空気に触れて神秘的な乳白色へと変化する美肌の名湯。冬の湖畔を眺めながら温まる雪見露天風呂、とろけるような霜降りの「とちぎ和牛」サーロイン、日光伝統の生湯波（ゆば）会席や奥日光イワナを堪能する極上の奥日光名宿5選を徹底解説。",
    url: 'https://croud-travel.com/winter-tochigi-okunikko-chuzenji-lake-onsen-snow-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月奥日光中禅寺温泉の初冬中禅寺湖と男体山雪絶景】乳白色硫黄泉露天風呂・極上とちぎ和牛＆日光湯波会席の宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月奥日光中禅寺温泉の初冬中禅寺湖と男体山雪絶景】乳白色硫黄泉露天風呂・極上とちぎ和牛＆日光湯波会席の宿5選",
    description: "11月から12月にかけて栃木県・奥日光は、標高2,486mの霊峰・男体山が初雪の白銀を纏い、湖面標高1,269mの澄み切った中禅寺湖が静寂の鏡のように冬景色を映し出します。日光開山の祖・勝道上人ゆかりの源泉・日光湯元から約12kmを引湯する硫黄泉は、湧出時はエメラルドグリーン、空気に触れて神秘的な乳白色へと変化する美肌の名湯。冬の湖畔を眺めながら温まる雪見露天風呂、とろけるような霜降りの「とちぎ和牛」サーロイン、日光伝統の生湯波（ゆば）会席や奥日光イワナを堪能する極上の奥日光名宿5選を徹底解説。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'],
  }
};

const faqList = [
  {
    "q": "奥日光中禅寺湖の11月・12月の気候や気温は？初雪はいつ頃降りますか？",
    "a": "中禅寺湖畔は標高約1,269mに位置し、日光市街地（日光駅周辺）と比べて気温が約6〜8℃低くなります。11月上旬から最低気温が0℃を下回る日が増え、11月中旬から下旬には男体山（標高2,486m）が初冠雪を迎えます。12月に入ると最高気温でも3〜5℃前後、朝晩はマイナス5℃以下まで冷え込み、湖畔にも雪が積もり始めます。ダウンジャケット、ニット帽、厚手の手袋、滑り止めの効いた防寒ブーツが必須です。"
  },
  {
    "q": "中禅寺温泉のお湯（泉質）の特徴と、日光湯元温泉からの引湯について教えてください。",
    "a": "中禅寺温泉のお湯は、奥日光のさらに奥にある日光湯元温泉（湯ノ平湿原）の源泉から、約12kmのパイプを通して引湯されています。泉質は「含硫黄-ナトリウム・カルシウム-硫酸塩・炭酸水素塩温泉（硫化水素型）」。湧出時は透明なエメラルドグリーンですが、引湯される過程で空気に触れ、硫黄微粒子が白濁して美しい乳白色の湯となります。古い角質を落とすピーリング作用と、保湿・血行促進効果が高く、冷え性改善や美肌作りに最適です。"
  },
  {
    "q": "冬期にいろは坂を車で運転する際の注意点は？ノーマルタイヤでも行けますか？",
    "a": "11月中旬以降の中禅寺湖・いろは坂方面は、ノーマルタイヤでの走行は非常に危険です。特に「第2いろは坂（上り）」「第1いろは坂（下り）」の急カーブや日陰、橋の上などは、見た目には濡れているように見えても凍結している「ブラックアイスバーン」が発生しやすくなります。11月中旬から4月上旬までは、必ずスタッドレスタイヤを装着するかタイヤチェーンを携行してください。運転に不安のある方は、JR・東武日光駅から頻発している東武路線バスの利用をおすすめします。"
  },
  {
    "q": "奥日光名物「日光湯波（ゆば）」と京都の湯葉の違い、おすすめの冬グルメは？",
    "a": "京都では「湯葉」と書き、豆乳の膜の端から1枚で引き上げるため薄くて繊細な食感ですが、日光では「湯波」と書き、膜の中央に串を入れて2つ折りに引き上げるため、厚みがあり中央に豆乳の旨味が凝縮されてふっくらジューシーなのが大きな特徴です。冬の奥日光では、熱々の出汁で炊いた「湯波の煮物」や「生湯波の刺身」、湯波を使った温かい豆乳鍋が格別です。また、地元銘柄牛「とちぎ和牛」のステーキや、中禅寺湖名産のヒメマス・八汐鱒の料理も冬の必食グルメです。"
  },
  {
    "q": "11月・12月の中禅寺湖周辺でおすすめの観光スポットや見どころは？",
    "a": "初冬の中禅寺湖は、秋の紅葉ラッシュが去り、静かで澄み切った大人の絶景を楽しめる季節です。日本三名瀑のひとつ「華厳の滝」では、落差97mの滝水が初冬の冷気で凍り始める「初期氷瀑」の造形美が見事です。また、日光二荒山神社中宮祠の厳かな参拝、イギリス大使館別荘記念公園・イタリア大使館別荘記念公園周辺の湖畔散策、男体山を望む歌ヶ浜からの夕日鑑賞など、冬ならではの澄んだ空気と水鏡の絶景を満喫できます。"
  }
];

export default function OkunikkoChuzenjiWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-tochigi-okunikko-chuzenji-lake-onsen-snow-stay#article",
        "headline": "【11・12月奥日光中禅寺温泉の初冬中禅寺湖と男体山雪絶景】乳白色硫黄泉露天風呂・極上とちぎ和牛＆日光湯波会席の宿5選",
        "description": "11月から12月にかけて栃木県・奥日光は、標高2,486mの霊峰・男体山が初雪の白銀を纏い、湖面標高1,269mの澄み切った中禅寺湖が静寂の鏡のように冬景色を映し出します。日光開山の祖・勝道上人ゆかりの源泉・日光湯元から約12kmを引湯する硫黄泉は、湧出時はエメラルドグリーン、空気に触れて神秘的な乳白色へと変化する美肌の名湯。冬の湖畔を眺めながら温まる雪見露天風呂、とろけるような霜降りの「とちぎ和牛」サーロイン、日光伝統の生湯波（ゆば）会席や奥日光イワナを堪能する極上の奥日光名宿5選を徹底解説。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "datePublished": "2026-09-28T00:00:00+09:00",
        "dateModified": "2026-09-28T00:00:00+09:00",
        "author": {
          "@type": "Organization",
          "name": "日本全国・旅宿クラウド 編集部",
          "url": "https://croud-travel.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "日本全国・旅宿クラウド",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.com/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/winter-tochigi-okunikko-chuzenji-lake-onsen-snow-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/winter-tochigi-okunikko-chuzenji-lake-onsen-snow-stay#faq",
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
              name: "日光中禅寺温泉　中禅寺金谷ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/28759/28759.jpg",
              rating: 4.51,
              reviews: 890,
              price: "¥14,750〜",
              access: "日光宇都宮有料道路清滝IC～車で約25分（いろは坂経由）東武日光駅～無料送迎バス有（運行時間変動有）日光東照宮迄車40分",
              special: "日光国立公園内、中禅寺湖畔に建つログハウス風洋式ホテル。露天温泉「空ぶろ－ＳＯＲＡＢＵＲＯ－」有り。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28759%2F28759.html",
              story: "中禅寺湖畔の豊かなミズナラやカラマツの原生林に囲まれ、カナディアン・ログハウス調の温もりあふれる外観が美しいクラシックリゾート「中禅寺金谷ホテル」。日本最古のリゾートホテル・日光金谷ホテルの伝統を受け継ぎ、冬の奥日光ならではの静寂と優雅な時間を提供しています。宿最大の自慢は、木立の向こうに星空を仰ぐ温泉露天風呂「空ぶろ（そらぶろ）」。日光湯元から引かれる源泉掛け流しの硫黄泉は、初冬の冷気の中で白濁し、湯の花が舞う極上の湯心地。暖炉ラウンジで味わうオリジナルカクテルや珈琲も格別のひとときです。",
              roomTip: "スタンダードツインまたはデラックスツイン（中禅寺湖側バルコニー付き）。全室ウッドデッキ付きで、初冬の静まり返った湖畔の木立と湖面のグラデーションを客室から静かに鑑賞できます。",
              gourmetTip: "ダイニングルーム「みずなら」での伝統フレンチディナー。金谷ホテル伝統のコンソメスープをはじめ、とちぎ和牛フィレ肉のステーキ、中禅寺湖産ヒメマスや虹鱒のソテーなど、歴史と気品が薫るフルコースを堪能できます。",
              highlights: [
                "カラマツ林に囲まれたログ調クラシック宿＆満天の星を仰ぐ白濁硫黄露天「空ぶろ」",
                "金谷ホテル伝統のコンソメスープ＆とちぎ和牛フィレ肉とヒメマスの特選フレンチ",
                "暖炉の火が揺らめくクラシックラウンジで味わうオリジナルカクテルや珈琲"
              ]
            },
            {
              id: 2,
              name: "ザ・リッツ・カールトン日光",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/179618/179618.jpg",
              rating: 4.38,
              reviews: 71,
              price: "¥82,225〜",
              access: "『東武日光駅』『JR日光駅』から湯元温泉行バスで約40分　ザ・リッツ・カールトン日光下車",
              special: "都会の喧騒から離れた奥日光の静寂にたたずむリゾートにて、心身を満たすひとときをお過ごしください。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F179618%2F179618.html",
              story: "中禅寺湖畔の特等席、男体山を真正面に望む敷地に誕生した世界最高峰のラグジュアリーホテル「ザ・リッツ・カールトン日光」。客室はすべて57平米以上のゆとりを持ち、日本の伝統木工工芸「鹿沼組子」を取り入れたモダンジャパニーズデザインが息をのむ美しさです。ブランドとして世界で初めて導入された天然温泉大浴場には、日光湯元の濃厚な硫黄泉が注がれ、内湯・露天風呂ともに洗練を極めた空間。初冬の澄み切った冷気の中、雪化粧した霊峰・男体山を湯船から仰ぐ体験は、まさに唯一無二の至福です。",
              roomTip: "男体山ビューキングまたは中禅寺湖ビュースイート。プライベートバルコニーに配された縁側風ラウンジエリアから、初冬の澄んだ陽光に輝く中禅寺湖や雪を被った男体山の雄姿を独り占めできます。",
              gourmetTip: "「日本料理 BY ザ・リッツ・カールトン日光」での会席ディナー、または「レークハウス」での薪火グリル。厳選されたA5ランクとちぎ和牛の炭火焼きや日光生湯波、那須の冬野菜を五感で味わう芸術的キュイジーヌ。",
              highlights: [
                "全室57平米以上の極上空間＆日光湯元の濃厚硫黄泉を引く世界初の温泉大浴場",
                "鹿沼組子の伝統美を取り入れたモダンジャパニーズ客室＆A5とちぎ和牛炭火会席",
                "プライベートバルコニーの縁側ラウンジから望む初冬の湖水と雪化粧の男体山"
              ]
            },
            {
              id: 3,
              name: "日光中禅寺湖温泉　ホテル花庵",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/54978/54978.jpg",
              rating: 4.64,
              reviews: 1291,
              price: "¥15,500〜",
              access: "ＪＲ日光駅又は東武日光駅より中禅寺温泉方面行きバス「中禅寺温泉バス停」下車。バス停より徒歩5分。日光東照宮より車で25分",
              special: "全２０室の全ての客室から広大な中禅寺湖を眺める事が可能でございます。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54978%2F54978.html",
              story: "中禅寺湖大鳥居のすぐ近く、全室から中禅寺湖を一望できる湖畔のブティック宿「日光中禅寺湖温泉 ホテル花庵（はなあん）」。奥日光で唯一、日光湯元から引く「白濁の硫黄泉」と、肌に優しい「アルカリ性単純温泉」という泉質の異なる2種類の天然温泉を一度に楽しめるのが最大の魅力です。館内は女性目線のアメニティやインテリアが行き届き、和モダンで温かみあふれる雰囲気。夕暮れどき、湖面が茜色から藍色へと染まりゆく幻想的なトワイライトタイムを客室やロビーから一望できます。",
              roomTip: "展望風呂付きスーペリアルームまたはプレミアムレイクビュー和洋室。大きな窓いっぱいに広がる中禅寺湖のパノラマビューを眺めながら、客室専用のお風呂でプライベートな湯浴みを楽しめます。",
              gourmetTip: "地産地消にこだわった創作和会席。旬の食材を20種類以上の栃木県産冬野菜とともにヘルシーに仕立て、日光名物の引き上げ生湯波やとちぎ和牛の豆乳しゃぶしゃぶなど、心も身体も温まる逸品が揃います。",
              highlights: [
                "全室中禅寺湖ビュー＆白濁硫黄泉とアルカリ単純泉の贅沢な2種湯めぐり",
                "夕暮れの茜色に染まる湖面パノラマ＆地元野菜20種以上と日光生湯波の創作ディナー",
                "女性にも大人気の充実アメニティ＆肌を引き締めて潤すダブル美肌温泉体験"
              ]
            },
            {
              id: 4,
              name: "奥日光　ホテル四季彩",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13462/13462.jpg",
              rating: 4.33,
              reviews: 2427,
              price: "¥11,000〜",
              access: "【車】日光道清滝IC～120号25分【電車】東武：北千住～日光1時間半JR：宇都宮～日光50分【バス】日光駅～当館45分",
              special: "四季折々で愉しめる天然硫黄泉と会席料理が自慢の温泉宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13462%2F13462.html",
              story: "中禅寺湖から少し離れた白樺とカラマツの森の奥深くにひっそりと佇む、大人の隠れ家「奥日光 ホテル四季彩」。初冬の森の静寂に包まれた館内には、日光湯元から湧き出る濃厚な硫黄泉を掛け流す広々とした露天風呂があり、夜には満天の星空が頭上に広がります。湧出時は透き通った淡い緑色、空気に触れて白濁へと変化するお湯は、角質を柔らかくして肌をつるつるにする名湯。喧騒から完全に隔絶された静かな森の中で、心洗われる休日を過ごせます。",
              roomTip: "半露天風呂付き和洋室またはモダンツイン。森に面した大きな窓から木立の雪景色を望み、好きな時間に源泉掛け流しの湯浴みを堪能できる贅沢な造りです。",
              gourmetTip: "月替わりの本格会席料理。ブランド牛「とちぎ和牛」の陶板ステーキをメインに、日光名産の引き上げ湯波、日光八汐鱒（やしおます）のお造り、下野の郷土料理を取り入れた滋味豊かなディナーを提供。",
              highlights: [
                "白樺の静寂な森に佇む隠れ家リゾート＆白濁源泉掛け流し露天風呂と創作会席",
                "森の静寂に包まれた半露天付き客室＆日光八汐鱒のお造りととちぎ和牛陶板ステーキ",
                "夜空に煌めく冬の満天の星と森の澄んだ空気を肌で感じる極上の癒やしタイム"
              ]
            },
            {
              id: 5,
              name: "中禅寺温泉　湖畔の見える露天風呂　日光山水",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/28764/28764.jpg",
              rating: 5.00,
              reviews: 185,
              price: "¥12,000〜",
              access: "ＪＲまたは東武日光駅より中禅寺・湯元温泉行バス　中禅寺温泉下車徒歩１０分",
              special: "日光中禅寺湖の目の前に建ち湖を一望できる宿。素朴な自然の味覚を用いた料理が好評！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28764%2F28764.html",
              story: "中禅寺湖畔の遊覧船乗り場すぐそばに位置し、アットホームなおもてなしと湖畔の絶景露天風呂が評判の「中禅寺温泉 湖畔の見える露天風呂 日光山水」。自慢の露天風呂からは、男体山と中禅寺湖の雄大なパノラマを遮るものなく一望できます。日光湯元温泉から引湯する源泉掛け流しの乳白色硫黄泉は成分が濃厚で、身体の芯までぽかぽかに温めてくれます。一人旅からカップル、家族連れまで気兼ねなく寛げる、奥日光の温かな湖畔宿です。",
              roomTip: "レイクビュー和室。畳の部屋から中禅寺湖の穏やかな湖面と対岸の山並みを眺めることができ、朝日に輝く湖面の水鏡は息をのむ美しさです。",
              gourmetTip: "手作りの和食膳。日光名物の生湯波を使った刺身や煮物、奥日光の清流で育ったイワナの塩焼き、栃木県産コシヒカリの炊きたてご飯など、素朴ながら素材の良さが際立つ温かい手料理。",
              highlights: [
                "中禅寺湖と男体山を望む湖畔絶景露天風呂＆日光名物生湯波とアットホームなもてなし",
                "湧出地直送の濃厚な硫黄泉で芯から温まる朝湯＆中禅寺湖を真正面に望む畳の和室",
                "奥日光清流のイワナ塩焼きと手作り生湯波料理を味わう滋味豊かな夕食膳"
              ]
            }
  ];

  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-teal-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-slate-950 via-teal-950 to-slate-900 text-white overflow-hidden py-16 sm:py-24 border-b border-teal-900/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.15),transparent_50%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs sm:text-sm font-medium backdrop-blur-sm">
            <Snowflake className="w-4 h-4 text-teal-400 animate-spin-slow" />
            <span>11月・12月 冬の奥日光・中禅寺湖特集</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【11・12月奥日光中禅寺温泉の初冬中禅寺湖と男体山雪絶景】乳白色硫黄泉露天風呂・極上とちぎ和牛＆日光湯波会席の宿5選
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-4xl">
            11月から12月にかけて、栃木県・奥日光は標高2,486mの聖峰・男体山が初雪の純白を纏い、湖面標高1,269mに広がる中禅寺湖は静寂の青い水鏡となって冬の空を映し出します。秋の喧騒が去った奥日光の静けさの中、日光湯元から引かれる源泉掛け流しの乳白色硫黄泉に浸かる贅沢。湯煙の向こうに広がる湖畔と山々の雪景色、極上ブランド牛「とちぎ和牛」のサーロインや日光伝統の引き上げ生湯波料理を心ゆくまで味わう、至高の奥日光名宿を厳選してご紹介します。
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-teal-400" /> 11月中旬〜12月がベスト</span>
            <span className="flex items-center gap-1.5"><Mountain className="w-4 h-4 text-teal-400" /> 男体山初雪＆中禅寺湖水鏡</span>
            <span className="flex items-center gap-1.5"><Waves className="w-4 h-4 text-teal-400" /> 日光湯元引湯・乳白色硫黄泉</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-teal-400" /> とちぎ和牛・日光生湯波</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* Section 1: Seasonal Overview */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Sublime Winter Beauty</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の奥日光・中禅寺湖がもたらす静寂と神秘の絶景
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              日本屈指の標高（海抜1,269m）を誇る中禅寺湖は、かつて男体山の噴火によって湯川が堰き止められて誕生した風光明媚な火山性堰止湖です。秋の紅葉シーズンが終わる11月中旬以降、奥日光は一気に冬の装いへと移行します。観光客で賑わった湖畔の遊歩道は静まり返り、湖面を渡る初冬の冷たい風が水面の波紋を消し去り、男体山の雪嶺を鏡のように映し出す「静寂の水鏡（みずかがみ）」の奇跡的な美しさが現れます。
            </p>
            <p>
              この時期の中禅寺湖滞在を格別なものにしているのが、奥日光の最深部・日光湯元温泉から引湯される「乳白色の硫黄泉」です。日光を開山した勝道上人が延暦7年（788年）に発見したと伝わる名湯で、含硫黄-ナトリウム・カルシウム-硫酸塩・炭酸水素塩温泉の成分が豊富に溶け込んでいます。冷え込む初冬の露天風呂に浸かると、ほのかな硫黄の香りと肌を包み込むようななめらかな湯ざわりが身体の芯から温めてくれ、湯上がりには肌がしっとりと潤い、長時間の保温効果が続きます。
            </p>
            <p>
              また、奥日光の冬は美食の宝庫でもあります。きめ細やかなサシと芳醇な旨味を誇る栃木の最高峰「とちぎ和牛」、日光の社寺とともに受け継がれてきた伝統の「日光生湯波（ゆば）」、清らかな伏流水で育つ日光八汐鱒（やしおます）やヒメマスなど、この地ならではの豊かな味覚が宿の膳を彩ります。暖炉の火が静かに揺れるラウンジで冬の夜を過ごす贅沢は、日頃の喧騒を忘れさせてくれる至高のヒーリング体験です。
            </p>
            <p>
              中禅寺湖畔は明治から昭和初期にかけて、英国やイタリアなど欧米諸国の大使館別荘が次々と建てられ、「夏の外務省」と称されるほど国際的なリゾート文化が花開いた特別な歴史を持ちます。初冬には大使館別荘記念公園のクラシックな木造洋館が白銀の木立の中に静かに佇み、まるでヨーロッパのアルプス湖畔に佇んでいるかのような格調高い異国情緒が漂います。日本の伝統的な名湯文化と洋の気品ある美意識が見事に調和した優雅なリトリート滞在が叶います。
            </p>
          </div>
        </section>

        {/* Section 2: Onsen & Gastronomy Science */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Waves className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Thermal Spring & Culinary Heritage</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                12kmを旅する乳白色硫黄泉と、日光「手繰り生湯波」の歴史
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Flame className="w-4 h-4 text-teal-700" />
              <span>日光湯元から注ぐエメラルドから乳白色への泉質変化と血行促進の妙</span>
            </h3>
            <p>
              中禅寺温泉のお湯は、奥日光の最奥・日光湯元温泉（湯ノ平湿原）に位置する湧出地から、標高差を利用した専用送湯管を通じて約12kmの距離を引湯されています。湧出時点では淡いエメラルドグリーンの透明な温泉ですが、長い配管を旅しながら空気中の酸素に触れることで、溶存する硫化水素イオン（HS-）が酸化反応を起こし、微細な単体硫黄微粒子（コロイド粒子）となってお湯全体に分散します。
            </p>
            <p>
              これが中禅寺温泉特有の神秘的なミルキーホワイト（乳白色）のにごり湯の正体です。泉質は「含硫黄-ナトリウム・カルシウム-硫酸塩・炭酸水素塩温泉」。硫黄成分が末梢血管を拡張して血流を劇的に促進し、硫酸塩泉の引き締め効果と炭酸水素塩泉の清浄効果が相乗して、肌の古い角質をやさしく落としながらしっとり潤いを与えます。氷点下に達する初冬の中禅寺湖畔にあっても、湯上がりは湯冷め知らずの心地よいポカポカ感が長く持続します。
            </p>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 pt-2">
              <Utensils className="w-4 h-4 text-teal-700" />
              <span>日光修験道が育んだ二重巻き「日光湯波」とA5ランク「とちぎ和牛」</span>
            </h3>
            <p>
              食卓の主役である「日光湯波」は、日光の山岳信仰修験者や東照宮・輪王寺の僧侶たちの貴重なタンパク源として鎌倉時代から発達した精進料理の伝統です。京都の湯葉が膜の端から一重で薄く引き上げられるのに対し、日光の湯波は豆乳膜の中央に竹串を入れて二つ折りに引き上げるため、厚みがあり、噛むほどに大豆の濃厚な甘みとコクが溢れ出ます。
            </p>
            <p>
              初冬には、上品な出汁をたっぷり含ませた煮物や、わさび醤油でいただく生湯波の刺身、そして豆乳鍋が格別の美味しさです。さらに、澄んだ空気と清流、指定生産者の情熱によって肥育される「とちぎ和牛」は、きめ細やかなサシと芳醇な赤身の旨味が自慢。サーロインの陶板ステーキですっきりと焼き上げ、地元日光八汐鱒（やしおます）のお造りとともに味わう夜の膳は、まさに奥日光の冬の至福です。
            </p>
          </div>
        </section>

        {/* Section 3: Hotel Cards */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Selected Ryokans & Hotels</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              奥日光・中禅寺湖の魅力を極める厳選宿5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              湖畔クラシック、世界最高峰ラグジュアリー、2種の泉質めぐり、森の隠れ家まで、11・12月の中禅寺湖を満喫する至極の5宿。
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
                    <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md text-teal-300 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm">
                      <Star className="w-3.5 h-3.5 fill-teal-400 text-teal-400" />
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
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-teal-50 text-teal-800 border border-teal-200">
                          第{h.id}位 奥日光厳選名宿
                        </span>
                        <div className="text-right">
                          <span className="text-xs text-slate-500 block">参考宿泊料金（目安）</span>
                          <span className="text-lg font-bold text-teal-700">{h.price}</span>
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
                          <Sparkles className="w-3.5 h-3.5 text-teal-700" />
                          <span>この宿の宿泊ハイライト</span>
                        </h4>
                        <ul className="grid grid-cols-1 gap-1.5 text-xs text-slate-600">
                          {h.highlights.map((hl: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1">
                          <span className="font-bold text-slate-800 flex items-center gap-1">
                            <Eye className="w-3.5 h-3.5 text-teal-700" /> 客室選びのコツ
                          </span>
                          <p className="text-slate-600 text-[11px] leading-relaxed">{h.roomTip}</p>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1">
                          <span className="font-bold text-slate-800 flex items-center gap-1">
                            <Utensils className="w-3.5 h-3.5 text-teal-700" /> 夕食の注目ポイント
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
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow-sm transition-colors duration-200"
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
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Winter Lake Tour</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月 中禅寺湖絶景と乳白色硫黄泉を巡る1泊2日モデルコース
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-700">
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200/70">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-teal-700 text-white flex items-center justify-center text-xs">1</span>
                <span>1日目：いろは坂を登り神秘の湖畔へ</span>
              </h3>
              <ul className="space-y-2.5 pl-2">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-teal-800 shrink-0">11:00</span>
                  <span>東武日光駅から東武バスでいろは坂を登り、明智平展望台へ。初雪を纏った男体山と華厳の滝を遠望。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-teal-800 shrink-0">12:30</span>
                  <span>中禅寺温泉バスターミナル到着。湖畔の食事処で熱々の「日光湯波そば」または「ヒメマス定食」の昼食。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-teal-800 shrink-0">13:45</span>
                  <span>エレベーターで「華厳の滝」観瀑台へ。初冬の冷気で凍り始める滝柱の豪快な造形美を間近に体感。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-teal-800 shrink-0">15:30</span>
                  <span>湖畔の名宿にチェックイン。白濁した源泉掛け流し露天風呂に身を沈め、初冬の湖畔の静けさに癒やされる。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-teal-800 shrink-0">18:30</span>
                  <span>とちぎ和牛のステーキと日光生湯波をふんだんに取り入れた特選ディナーを堪能。</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200/70">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-teal-700 text-white flex items-center justify-center text-xs">2</span>
                <span>2日目：男体山朝焼けと大使館別荘記念公園</span>
              </h3>
              <ul className="space-y-2.5 pl-2">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-teal-800 shrink-0">06:45</span>
                  <span>朝の静まり返った湖畔を眺めながらの朝湯。朝日に照らされピンク色に染まる男体山を仰ぎ見る。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-teal-800 shrink-0">08:00</span>
                  <span>宿の朝食。手作り豆腐や湯波の茶碗蒸し、栃木県産コシヒカリと地元味噌の味噌汁で温まる。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-teal-800 shrink-0">10:00</span>
                  <span>チェックアウト後、歌ヶ浜方面へ。イタリア・イギリス大使館別荘記念公園の湖畔遊歩道を散策。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-teal-800 shrink-0">12:00</span>
                  <span>日光二荒山神社中宮祠を参拝。男体山の登山口であり、冬の静かな境内で旅の安全を祈願。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-teal-800 shrink-0">14:00</span>
                  <span>東武バスでいろは坂を下り日光市街へ。世界遺産・日光東照宮周辺を巡り、お土産を購入して帰路へ。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Practical Travel Advice */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Travel Checklist</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の奥日光旅行で知っておくべき重要注意点
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-teal-700" />
                <span>標高1,269mの極寒対策と防寒着</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                中禅寺湖周辺は11月下旬から真冬並みの厳しい寒さになります。12月の朝晩はマイナス5℃以下まで冷え込み、日中でも風が吹くと体感温度は氷点下になります。風を通さない防寒ダウン、厚手のマフラー、手袋、耳当て、保温インナーを必ず着用してください。滑り止めの効いた防水スノーブーツが安全です。
              </p>
            </div>
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Footprints className="w-4 h-4 text-teal-700" />
                <span>いろは坂の冬用タイヤ規制とバス利用</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                11月中旬以降、いろは坂の日陰やカーブ、橋梁部は路面凍結（ブラックアイスバーン）が多発します。マイカー利用の場合は必ずスタッドレスタイヤを装着してください。雪道運転に不慣れな方は、JR日光駅・東武日光駅から発着する東武バスを利用するのが最も安全で快適です。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Traveler's Q&A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                中禅寺温泉冬旅のよくある質問（FAQ）
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-teal-800 font-extrabold">Q.</span>
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
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">Related Hot Springs & Heritage Features</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい北関東・東北の冬名湯＆雪見露天特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              11月・12月の初雪や雪景色、極上グルメを味わう人気の厳選特集もぜひご覧ください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-tochigi-kinugawa-onsen-valley-snow-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">栃木・鬼怒川温泉</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">鬼怒川渓谷美と雪見露天・とちぎ和牛ステーキの宿</h3>
            </Link>
            <Link 
              href="/winter-tochigi-nasu-onsen-shikanoyu-snow-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">栃木・那須温泉郷</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">名湯鹿の湯と那須高原の白濁雪見露天・那須牛会席の宿</h3>
            </Link>
            <Link 
              href="/winter-gunma-kusatsu-onsen-yubatake-joshu-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">群馬・草津温泉</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">湯畑ライトアップと天下の名湯・上州牛すき焼きの宿</h3>
            </Link>
            <Link 
              href="/winter-fukushima-bandai-atami-onsen-bihada-swan-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">福島・磐梯熱海温泉</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">猪苗代湖の白鳥と美肌の名湯・福島牛ステーキ会席の宿</h3>
            </Link>
            <Link 
              href="/winter-gunma-minakami-onsen-tanigawa-yukimi-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">群馬・水上温泉郷</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">谷川岳雪景色の渓流露天風呂と上州名物グルメの宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">全国の厳選温泉・旬旅特集まとめを見る</h3>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
