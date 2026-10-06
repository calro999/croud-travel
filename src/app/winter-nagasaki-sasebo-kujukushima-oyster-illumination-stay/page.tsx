import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Sun, Sparkle, Flame, Landmark, Building, Castle, Waves, Heart
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12・1月長崎】冬の味覚「九十九島かき」焼き！名宿5選',
  description: '11月から1月、長崎県佐世保市・九十九島は、濃厚な甘みと旨味がギュッと詰まった旬の「九十九島かき」の焼き牡蠣小屋と。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '九十九島かき, ハウステンボス 光の王国, 佐世保 焼き牡蠣小屋, レモンステーキ, ホテルオークラJRハウステンボス, ホテルヨーロッパ, 弓張の丘ホテル, ホテル日航ハウステンボス, フラッグス佐世保九十九島, 九十九島温泉, 11月 12月 1月 長崎旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-nagasaki-sasebo-kujukushima-oyster-illumination-stay/"
  },
  openGraph: {
    title: '【11・12・1月長崎】冬の味覚「九十九島かき」焼き！名宿5選',
    description: '11月から1月、長崎県佐世保市・九十九島は、濃厚な甘みと旨味がギュッと詰まった旬の「九十九島かき」の焼き牡蠣小屋と。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-nagasaki-sasebo-kujukushima-oyster-illumination-stay',
    siteName: 'クラドトラベル',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: '冬の九十九島サンセットとハウステンボス光の王国'
      }
    ],
    locale: 'ja_JP',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月長崎】冬の味覚「九十九島かき」焼き牡蠣小屋と世界最大イルミ「ハウステンボス光の王国」・佐世保名物＆九十九島温泉リゾート宿5選",
    description: "11月から1月、長崎県佐世保市・九十九島は、濃厚な甘みと旨味がギュッと詰まった旬の「九十九島かき」の焼き牡蠣小屋と、世界最大1300万球が輝く「ハウステンボス光の王国」で一年で最もロマンチックな季節を迎えます。西海国立公園の島々を茜色に染める夕陽パノラマ、佐世保名物レモンステーキや元祖佐世保バーガー。九十九島温泉やハウステンボス直営の名宿5選と冬のモデルコースを徹底ガイドします。",
    images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function NagasakiSaseboKujukushimaWinterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "【11・12・1月長崎】冬の味覚「九十九島かき」焼き牡蠣小屋と世界最大イルミ「ハウステンボス光の王国」・佐世保名物＆九十九島温泉リゾート宿5選",
    description: "11月から1月、長崎県佐世保市・九十九島は、濃厚な甘みと旨味がギュッと詰まった旬の「九十九島かき」の焼き牡蠣小屋と、世界最大1300万球が輝く「ハウステンボス光の王国」で一年で最もロマンチックな季節を迎えます。西海国立公園の島々を茜色に染める夕陽パノラマ、佐世保名物レモンステーキや元祖佐世保バーガー。九十九島温泉やハウステンボス直営の名宿5選と冬のモデルコースを徹底ガイドします。",
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    datePublished: '2026-10-02',
    dateModified: '2026-10-02',
    author: {
      '@type': 'Organization',
      name: 'クラドトラベル編集部',
      url: 'https://croud-travel.pages.dev'
    },
    publisher: {
      '@type': 'Organization',
      name: 'クラドトラベル',
      logo: {
        '@type': 'ImageObject',
        url: 'https://croud-travel.pages.dev/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://croud-travel.pages.dev/winter-nagasaki-sasebo-kujukushima-oyster-illumination-stay'
    }
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ホーム',
        item: 'https://croud-travel.pages.dev'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '冬の特集一覧',
        item: 'https://croud-travel.pages.dev/features'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: '長崎・九十九島かき＆ハウステンボス特集',
        item: 'https://croud-travel.pages.dev/winter-nagasaki-sasebo-kujukushima-oyster-illumination-stay'
      }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "「九十九島かき」とは？一般的な牡蠣と何が違い、旬の時期はいつですか？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "九十九島（くじゅうくしま）かきは、長崎県佐世保市の西海国立公園・九十九島の内海で養殖される真牡蠣です。208もの島々が複雑に入り組むリアス式海岸には森のミネラルを含んだ湧水が豊富に流れ込み、植物プランクトンが密集しています。波が極めて穏やかな海で育つため、殻は小ぶりながらも身がギュッと引き締まり、加熱しても縮みにくいのが特徴です。旬は寒さが本格化する11月から2月下旬。一口頬張ると、ミルキーで濃厚な甘みと磯の香りが口いっぱいに広がり、雑味のない純粋な海の旨味が堪能できます。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の佐世保名物「九十九島かき食うカキ祭り」や焼き牡蠣小屋の楽しみ方は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "毎年11月と2月の土日祝日を中心に、九十九島パールシーリゾートの大芝生広場などで「九十九島かき食うカキ祭り」が開催されます。会場には数百台の炭火焼きバーベキューコンロがずらりと並び、殻付きの九十九島かき（1kg単位）やサザエ、イカなどを市場価格で購入してその場で炭火焼きにして食べられます。炭火の上でパチパチと音を立てて殻が開き、グツグツと煮立つ熱々の牡蠣にレモンやポン酢を垂らしてすする味は格別です。祭り期間以外でも、九十九島沿岸の牡蠣小屋や市内の海鮮食事処で冬中焼き牡蠣を楽しめます。"
        }
      },
      {
        '@type': 'Question',
        name: "ハウステンボス「光の王国」の冬の見どころと点灯時間は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "ハウステンボス「光の王国」は、全国イルミネーションランキングで11年連続日本一を獲得している世界最大級・1300万球の光の祭典です。冬（11月〜1月）は、ヨーロッパの街並みが純白の輝きに包まれる「白銀の世界」点灯式が毎夕開催され、荘厳なチャペルの鐘とともに一斉に銀世界へと光が切り替わる瞬間は圧巻です。さらに運河全体が七色に輝く「光と噴水の運河」、本場ヨーロッパさながらの「クリスマスマーケット」、氷上を滑る「運河アイススケート」など、冬限定のロマンチックな演出が満載です。点灯は日没頃から閉園（21時〜22時頃）まで楽しめます。"
        }
      },
      {
        '@type': 'Question',
        name: "佐世保の冬の二大名物グルメ「レモンステーキ」と「佐世保バーガー」とは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "「レモンステーキ」は、アメリカ海軍の影響を受けた佐世保で、日本人の味覚に合うよう考案されたご当地ステーキです。熱々の鉄板の上に薄切りの牛肉を敷き詰め、すき焼きのようにサッと両面を焼いた後、醤油ベースに新鮮なレモン果汁を加えた甘酸っぱい特製ソースをジュワッとかけていただきます。肉を食べ終えた後の鉄板に残ったソースと脂にご飯を投入して混ぜて食べるのが本場のスタイルです。一方の「佐世保バーガー」は、注文を受けてから手作りする巨大バーガーで、ジューシーなパティとベーコン、目玉焼き、新鮮レタスと甘いマヨネーズが絶妙に調和します。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の佐世保・九十九島旅行の気候、服装、アクセスのアドバイスは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "九州の西端に位置する佐世保ですが、冬場は東シナ海からの強い季節風が吹きつけるため、特に海沿いの九十九島や夜間のハウステンボス散策では体感温度が氷点下近くまで下がります。防風性の高いロングコートやダウン、マフラー、手袋、カイロを必ず準備しましょう。アクセスは、福岡（博多駅）からJR特急「みどり」または「ハウステンボス」で佐世保駅・ハウステンボス駅まで約1時間40分〜1時間50分。長崎空港からは連絡船（高速船）またはバスで直行でき、冬の女子旅やカップル旅行にも非常にスムーズです。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "ホテルオークラＪＲハウステンボス",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9057/9057.jpg",
              rating: 4.60,
              reviews: 3266,
              price: "¥5,750〜",
              access: "西九州自動車道　佐世保大塔ICより車で15分/長崎空港よりバスで70分／JR博多駅より特急ハウステンボス号で110分",
              special: "スタッフのおもてなしに心和らぎ、天然温泉が疲れを癒す魅力あるリゾートホテルです。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9057%2F9057.html",
              story: "ハウステンボスのウェルカムゲートすぐ前にそびえ立ち、オランダ・アムステルダム中央駅を模した優雅なルネサンス様式の外観が圧倒的な存在感を放つ「ホテルオークラＪＲハウステンボス」。パークへのアクセスが抜群であるだけでなく、館内には敷地内から湧出する源泉かけ流しの天然温泉「琴乃湯」を完備しています。鉄分と塩分を豊富に含んだ赤褐色の黄金の湯が、冬の夜風に吹かれたイルミネーション散策後の冷えた体を芯からポカポカに温めてくれます。夕食は和洋中多彩な名店レストランを完備。鉄板焼き「大島」では極上の長崎和牛サーロインや近海伊勢海老、冬の九十九島牡蠣をシェフが目の前でダイナミックに焼き上げ、贅沢を極めたディナーを堪能できます。",
              roomTip: "パークビューデラックスツイン。窓からハウステンボスの運河とヨーロッパ調の街並み、夜には世界最大級の光の王国イルミネーションを部屋にいながら独占できます。",
              gourmetTip: "「鉄板焼き・長崎和牛と九十九島牡蠣の冬コース」。柔らかな長崎和牛フィレ肉と大粒の九十九島かきを香ばしいバター醤油で焼き上げる逸品ディナー。",
              highlights: [
                "アムステルダム中央駅を模した優雅な外観・自家源泉の黄金天然温泉琴乃湯で温まる",
                "鉄板焼きで味わう長崎和牛と九十九島牡蠣・パークビュー客室から望む夜景イルミ",
                "駅直結・ハウステンボス公式ホテルならではの特典と上質なオークラホスピタリティ"
              ]
            },
            {
              id: 2,
              name: "ホテルヨーロッパ　ハウステンボス",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9159/9159.jpg",
              rating: 4.63,
              reviews: 2504,
              price: "¥17,500〜",
              access: "博多駅→特急約100分／長崎駅→快速約90分／長崎空港→高速船約45分・バス約60分",
              special: "ハウステンボス直営／ハウステンボス最上位ホテル。クラシカルな世界観と専用クルーズで贅沢なひと時を。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9159%2F9159.html",
              story: "ハウステンボスの最深部、静かな内海（運河）に面して建ち、宿泊者専用のカナルクルーザーで優雅にチェックインする最高峰のクラシックホテル「ホテルヨーロッパ ハウステンボス」。ロビーには季節の生花が贅沢に咲き誇り、夜には毎夜クラシックの生演奏が響く気品あふれる大人の社交場です。冬のハウステンボス「光の王国」の中心に位置し、一歩外に出れば純白のイルミネーションに包まれる別世界。夕食はメインダイニング「デ・アドミラル」にて、長崎・五島列島の冬魚介や地元野菜をふんだんに取り入れた至高のコンテンポラリーフレンチを提供。特別な記念日や夫婦の冬旅にふさわしい最高峰のリゾート体験をお約束します。",
              roomTip: "カナルビュースーペリアルーム。クラシカルなヨーロッパ直輸入の調度品と、窓の外に広がる穏やかな運河の夜景がロマンチックな雰囲気を醸成します。",
              gourmetTip: "「デ・アドミラル特製・冬のスペシャリテ」。九十九島牡蠣のポシェや平戸産天然ヒラメ、長崎牛のローストを厳選ソムリエワインとともに味わうフルコース。",
              highlights: [
                "専用カナルクルーザーで運河チェックイン・ロビー生演奏と至高のフレンチフルコース",
                "五島列島冬魚介や九十九島牡蠣フレンチ・世界最大級の光の王国に包まれる特別な宵",
                "花と音楽に彩られたヨーロッパの宮殿空間・記念日や大人の贅沢ステイに最高峰"
              ]
            },
            {
              id: 3,
              name: "弓張の丘ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7808/7808.jpg",
              rating: 4.42,
              reviews: 1748,
              price: "¥9,096〜",
              access: "佐世保中央ＩＣよりお車で約10分　 佐世保駅より無料シャトルバス運行",
              special: "【全客室リニューアル】◆佐世保の絶景を愉しむ贅沢な時間◆温泉・サウナ・駐車場完備◆朝食もさらに充実！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7808%2F7808.html",
              story: "佐世保市街の背後にそびえる弓張岳の山頂、標高約360mの高台に位置する南欧風絶景リゾートホテル「弓張の丘ホテル」。白亜の館からは、眼下に九十九島の多島美パノラマと佐世保港、夜には宝石箱を散りばめたような佐世保市街の夜景が180度の大パノラマで広がります。展望大浴場「潮の湯」では、肌がつるつるになるナトリウム-炭酸水素塩泉に浸かりながら、冬の澄んだ夕暮れのサンセットを鑑賞。夕食は佐世保名物の「レモンステーキ」をはじめ、近海で獲れた旬の海の幸をふんだんに使った和洋バイキングまたは会席コース。昼の青海原から夕暮れの茜色、夜の煌めきまで感動が続きます。",
              roomTip: "九十九島ビューツイン。専用テラスから夕陽に染まる九十九島の島影を一望でき、日没のドラマチックなグラデーションを客室から満喫できます。",
              gourmetTip: "「佐世保名物レモンステーキ＆地魚会席」。熱々の鉄板で薄切り牛を焼き上げ、爽やかな特製レモン醤油ソースをジュワッとかけて味わう絶品名物。",
              highlights: [
                "標高360m山頂パノラマ・展望露天風呂から見下ろす九十九島サンセットと佐世保夜景",
                "熱々鉄板で焼き上げる元祖レモンステーキと近海地魚・南欧風リゾートの寛ぎ",
                "佐世保駅無料シャトルバス運行・昼の多島美と夜のパノラマ夜景を一度に堪能"
              ]
            },
            {
              id: 4,
              name: "ホテル日航ハウステンボス",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1793/1793.jpg",
              rating: 4.45,
              reviews: 3121,
              price: "¥8,000〜",
              access: "●ＪＲハウステンボス駅から徒歩で10分●長崎市内から車で９０分●佐世保駅より車で30分",
              special: "ハウステンボスまでは徒歩３分♪花と緑に囲まれたリゾートホテル",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1793%2F1793.html",
              story: "ハウステンボスの入場ゲートまで徒歩わずか3分という好立地にありながら、緑豊かな自然に囲まれた「ホテル日航ハウステンボス」。中庭には冬の澄んだ夜空の下でプライベートなイルミネーションが灯り、パーク内の興奮そのままに心温まるホテルステイが叶います。館内には広々とした大浴場を完備し、歩き疲れた体をゆったりとリフレッシュ。夕食はレストラン「ラヴァンドル」での和洋バイキング。冬期は長崎県産真鯛のお造りや長崎和牛のロースト、九十九島牡蠣を使ったグラタンやサクサクのカキフライなど、長崎・九州の美味がずらりと並び、ファミリーやグループ旅行にも大好評です。",
              roomTip: "コンフォート和洋室。畳の寛ぎスペースを備えた広々とした客室で、小さなお子様連れのファミリーや3世代旅行にも使い勝手抜群の設計です。",
              gourmetTip: "「冬の長崎・九州美食バイキング」。揚げたての九十九島カキフライや本場長崎ちゃんぽん、目の前でカッティングするローストビーフが食べ放題。",
              highlights: [
                "ハウステンボス入場口徒歩3分・中庭イルミネーションと長崎・九州美食バイキング",
                "揚げたて九十九島カキフライや長崎ちゃんぽん・大浴場完備で家族旅行にも最適",
                "広々とした客室と充実のアメニティ・イルミネーション夜遅くまで思い切り満喫"
              ]
            },
            {
              id: 5,
              name: "ホテルフラッグス佐世保九十九島",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4783/4783.jpg",
              rating: 4.19,
              reviews: 1642,
              price: "¥6,160〜",
              access: "西九州自動車道佐世保中央ＩＣ車で１０分　/　ハウステンボスから車で２５分",
              special: "2025年5月1日『the BEKKAN』リニューアル！長崎グルメ満載な朝食＆夕食ビュッフェ！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4783%2F4783.html",
              story: "西海国立公園九十九島の玄関口、九十九島パールシーリゾートのすぐ目の前に位置するオーシャンリゾート「ホテルフラッグス佐世保九十九島」。九十九島観光船の発着所や水族館「海きらら」、冬の「九十九島かき食うカキ祭り」会場へ徒歩数分という最高のロケーションを誇ります。自家源泉の天然温泉「九十九島温泉」は、地下1,000mから湧く弱アルカリ性の美肌湯で、露天風呂からは潮風を感じながらのリラクゼーションが楽しめます。夕食は九十九島の海の恵みを凝縮した和食会席。冬限定の焼き牡蠣や牡蠣鍋、長崎名物豚角煮など、地元の味覚を心ゆくまで堪能できます。",
              roomTip: "オーシャンビューモダン和洋室。九十九島の海をイメージした落ち着いたブルーの客室で、窓から穏やかな海原と潮騒を感じられる心地よい空間です。",
              gourmetTip: "「九十九島かき尽くし会席」。生牡蠣、焼き牡蠣、カキフライ、牡蠣の土手鍋と、旬の九十九島かきを余すところなく味わい尽くす贅沢プラン。",
              highlights: [
                "九十九島パールシーリゾート目の前・かき小屋散策に最高の立地と美肌九十九島温泉",
                "焼き牡蠣や牡蠣土手鍋の九十九島かき尽くし会席・海風を感じる和モダン客室",
                "九十九島遊覧船乗り場へ徒歩すぐ・冬の多島美クルーズと温泉を満喫する拠点"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "「九十九島かき」とは？一般的な牡蠣と何が違い、旬の時期はいつですか？",
    "a": "九十九島（くじゅうくしま）かきは、長崎県佐世保市の西海国立公園・九十九島の内海で養殖される真牡蠣です。208もの島々が複雑に入り組むリアス式海岸には森のミネラルを含んだ湧水が豊富に流れ込み、植物プランクトンが密集しています。波が極めて穏やかな海で育つため、殻は小ぶりながらも身がギュッと引き締まり、加熱しても縮みにくいのが特徴です。旬は寒さが本格化する11月から2月下旬。一口頬張ると、ミルキーで濃厚な甘みと磯の香りが口いっぱいに広がり、雑味のない純粋な海の旨味が堪能できます。"
  },
  {
    "q": "冬の佐世保名物「九十九島かき食うカキ祭り」や焼き牡蠣小屋の楽しみ方は？",
    "a": "毎年11月と2月の土日祝日を中心に、九十九島パールシーリゾートの大芝生広場などで「九十九島かき食うカキ祭り」が開催されます。会場には数百台の炭火焼きバーベキューコンロがずらりと並び、殻付きの九十九島かき（1kg単位）やサザエ、イカなどを市場価格で購入してその場で炭火焼きにして食べられます。炭火の上でパチパチと音を立てて殻が開き、グツグツと煮立つ熱々の牡蠣にレモンやポン酢を垂らしてすする味は格別です。祭り期間以外でも、九十九島沿岸の牡蠣小屋や市内の海鮮食事処で冬中焼き牡蠣を楽しめます。"
  },
  {
    "q": "ハウステンボス「光の王国」の冬の見どころと点灯時間は？",
    "a": "ハウステンボス「光の王国」は、全国イルミネーションランキングで11年連続日本一を獲得している世界最大級・1300万球の光の祭典です。冬（11月〜1月）は、ヨーロッパの街並みが純白の輝きに包まれる「白銀の世界」点灯式が毎夕開催され、荘厳なチャペルの鐘とともに一斉に銀世界へと光が切り替わる瞬間は圧巻です。さらに運河全体が七色に輝く「光と噴水の運河」、本場ヨーロッパさながらの「クリスマスマーケット」、氷上を滑る「運河アイススケート」など、冬限定のロマンチックな演出が満載です。点灯は日没頃から閉園（21時〜22時頃）まで楽しめます。"
  },
  {
    "q": "佐世保の冬の二大名物グルメ「レモンステーキ」と「佐世保バーガー」とは？",
    "a": "「レモンステーキ」は、アメリカ海軍の影響を受けた佐世保で、日本人の味覚に合うよう考案されたご当地ステーキです。熱々の鉄板の上に薄切りの牛肉を敷き詰め、すき焼きのようにサッと両面を焼いた後、醤油ベースに新鮮なレモン果汁を加えた甘酸っぱい特製ソースをジュワッとかけていただきます。肉を食べ終えた後の鉄板に残ったソースと脂にご飯を投入して混ぜて食べるのが本場のスタイルです。一方の「佐世保バーガー」は、注文を受けてから手作りする巨大バーガーで、ジューシーなパティとベーコン、目玉焼き、新鮮レタスと甘いマヨネーズが絶妙に調和します。"
  },
  {
    "q": "冬の佐世保・九十九島旅行の気候、服装、アクセスのアドバイスは？",
    "a": "九州の西端に位置する佐世保ですが、冬場は東シナ海からの強い季節風が吹きつけるため、特に海沿いの九十九島や夜間のハウステンボス散策では体感温度が氷点下近くまで下がります。防風性の高いロングコートやダウン、マフラー、手袋、カイロを必ず準備しましょう。アクセスは、福岡（博多駅）からJR特急「みどり」または「ハウステンボス」で佐世保駅・ハウステンボス駅まで約1時間40分〜1時間50分。長崎空港からは連絡船（高速船）またはバスで直行でき、冬の女子旅やカップル旅行にも非常にスムーズです。"
  }
];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-orange-100 selection:text-orange-900 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero Header */}
      <header className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80" 
            alt="冬の九十九島サンセットとハウステンボス" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-orange-900/80 backdrop-blur-md text-orange-100 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-orange-400/30">
            <Sparkle className="w-4 h-4 text-orange-300" />
            11月・12月・1月 冬の西九州・九十九島かき小屋＆ハウステンボス光の王国特集
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
            【11・12・1月長崎】冬の味覚「九十九島かき」焼き牡蠣小屋と世界最大イルミ「ハウステンボス光の王国」・佐世保名物＆九十九島温泉リゾート宿5選
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            208の島々が織りなす西海国立公園「九十九島」。冬に濃厚な甘みを凝縮する「九十九島かき」の炭火焼き小屋と、世界最大1300万球が街を包む「ハウステンボス光の王国」。茜色に染まる多島美サンセット、熱々の元祖レモンステーキ、黄金の天然温泉。昼は海の幸と大自然、夜は世界一の光の魔法に酔いしれる冬の極上旅へご案内します。
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-orange-400" /> 旬の時期：11月上旬〜1月下旬（九十九島かき最盛期＆光の王国）</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-orange-400" /> エリア：長崎県佐世保市・九十九島・ハウステンボス</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-orange-400" /> 旬グルメ：九十九島かき・レモンステーキ・佐世保バーガー・長崎和牛・地魚</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-orange-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Introduction</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              夕陽に染まる208の多島美と、世界一の光が包み込むヨーロッパの街
            </h2>
          </div>
          
          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p>
              九州の西端、東シナ海へと続く複雑なリアス式海岸に208もの島々が浮かぶ西海国立公園「九十九島（くじゅうくしま）」。11月から1月にかけての冬、この地は空気が研ぎ澄まされ、一年の中で最も美しい夕暮れのパノラマと、冬の味覚の祝祭を迎えます。
            </p>
            <p>
              弓張岳や展海峰の展望台から見渡す冬の九十九島は、静まり返った群青の海に島々の影が浮かび、西の空が黄金色から茜色、紫へと移ろうサンセットが息を呑むほどドラマチックです。そして、このミネラル豊富な波静かな海で大切に育てられるのが、冬の真珠とも称される「九十九島かき」です。小ぶりながらも身がギュッと詰まり、加熱しても縮まない強い弾力と濃厚な甘みが自慢。11月に解禁を迎えると、沿岸の焼き牡蠣小屋からは香ばしい磯の香りとパチパチと炭火が爆ぜる音が立ち上り、冬の訪れを告げます。
            </p>
            <p>
              明治時代に旧日本海軍の鎮守府が開設されて以来、軍港都市として発展してきた佐世保は、戦後のアメリカ文化を吸収しながら独自の食とジャズカルチャーを育んできました。その異国情緒あふれる港町の空気感は、冬の澄んだ夜空の下で一層際立ちます。
            </p>
            <p>
              さらに佐世保の冬の夜を彩るのが、世界最大1300万球のイルミネーションが街全体を包み込む「ハウステンボス光の王国」です。オランダの街並みが純白の輝きに満たされる「白銀の世界」、運河全体が虹色に輝くプロジェクションマッピング、温かなホットワインが恋しくなるクリスマスマーケット。熱々の鉄板でジュワッと焼き上げる名物「レモンステーキ」や黄金色の天然温泉とともに、心も体も幸福感で満たされる冬のリゾートステイがここにあります。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-100">
            <div className="flex items-start gap-3 p-3.5 bg-orange-50/60 rounded-2xl border border-orange-100">
              <Utensils className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-stone-900 text-sm">九十九島かき小屋</h3>
                <p className="text-stone-600 text-xs mt-1">炭火でパチパチ焼いてすする濃厚ミルキーな旬の焼き牡蠣。</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3.5 bg-orange-50/60 rounded-2xl border border-orange-100">
              <Sparkles className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-stone-900 text-sm">ハウステンボス光の王国</h3>
                <p className="text-stone-600 text-xs mt-1">世界最大1300万球！11年連続日本一の白銀イルミネーション。</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3.5 bg-orange-50/60 rounded-2xl border border-orange-100">
              <Flame className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-stone-900 text-sm">佐世保名物レモンステーキ</h3>
                <p className="text-stone-600 text-xs mt-1">熱々鉄板の薄切り牛にさわやかレモン醤油ソースがジュワッ。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Dive Section: Gourmet & Illumination */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-8">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-orange-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Gourmet & Illumination</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              炭火で弾ける海のミルクと、1300万球が灯るヨーロッパの奇跡
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-700 leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <h3 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                <Utensils className="w-5 h-5 text-orange-600" />
                なぜ「九十九島かき」は格別に甘いのか
              </h3>
              <p>
                日本全国に牡蠣の産地は数あれど、九十九島かきほど「凝縮感」を感じさせる牡蠣は稀です。九十九島の内海は外海からの荒波が遮られた穏やかな海で、山林から注ぐ豊富な栄養塩により植物プランクトンが密集しています。
              </p>
              <p>
                通常よりも養殖期間を短めにして小ぶりな状態で水揚げするため、大味にならず旨味成分であるグリコーゲンやタウリンがギッシリと凝縮されます。炭火の網の上に乗せると、パカッと殻が開き、あふれ出す貝殻のスープがグツグツと沸騰。レモンを一搾りして熱々の身を頬張れば、プリッとした強い弾力とともに、クリーミーな甘みと磯の風味が口いっぱいに弾けます。
              </p>
              <p>
                また、佐世保の冬の食卓には、魚介と豚骨・鶏ガラの濃厚白湯スープにたっぷりの野菜と海鮮を太麺とともに煮込む「本場長崎ちゃんぽん」や、平戸産の焼きあご（トビウオ）出汁の滋味も加わり、体を芯から温めてくれます。
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                <Castle className="w-5 h-5 text-orange-600" />
                冬のハウステンボス「白銀の世界」の圧倒的感動
              </h3>
              <p>
                冬のハウステンボスは、年間で最もロマンチックなシーズンです。日没を迎えると、アムステルダム広場の中心に立つチャペルにて「白銀の世界」点灯式が厳粛に行われます。荘厳なパイプオルガンと鐘の音が響き渡り、プロのシンガーによる生歌が響く中、カウントダウンとともに広場一面が純白のイルミネーションへと一瞬にして変貌します。
              </p>
              <p>
                運河アイススケートリンクを滑りながら見上げる光のシャワーや、ヨーロッパから直輸入された木工芸品やホットチョコレートが並ぶクリスマスマーケットなど、日本にいながら本場ヨーロッパの冬の情緒を心ゆくまで満喫できます。
              </p>
              <p>
                夜が深まるにつれ、街角のバーから漏れる温かな光とジャズの旋律が旅情をかき立て、日常から完全に解き放たれた特別な冬の夜をお楽しみいただけます。
              </p>
            </div>
          </div>

          <div className="bg-amber-50/70 p-5 sm:p-6 rounded-2xl border border-amber-200/60">
            <h4 className="font-bold text-amber-950 text-base mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              佐世保港を望む美肌の湯「九十九島温泉」
            </h4>
            <p className="text-amber-900 text-xs sm:text-sm leading-relaxed">
              佐世保エリアには、地下深くから湧き出す天然温泉が点在しています。ホテルオークラJRハウステンボスの黄金の湯「琴乃湯」や、弓張の丘ホテルの「潮の湯」、ホテルフラッグスの「九十九島温泉」など、塩分や炭酸水素塩を豊富に含んだ湯が揃います。冬の夜風に吹かれながら露天風呂に浸かれば、肌がしっとり潤い、体の芯まで温もりが持続します。
            </p>
          </div>
        </section>

        {/* Hotel Recommendations Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-orange-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Accommodations</span>
            <h2 className="text-xl sm:text-3xl font-black text-stone-900">
              【長崎・佐世保＆九十九島】冬の牡蠣と光の王国を満喫する名宿5選
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1">
              ハウステンボス直営・公式ホテルや九十九島の絶景を望むオーシャンビュー温泉リゾート
            </p>
          </div>

          <div className="space-y-8">
            {hotelsData.map((h) => (
              <div key={h.id} className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 hover:border-orange-300 transition-all duration-300 space-y-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-2/5 shrink-0">
                    <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-stone-100 group">
                      <img 
                        src={h.img} 
                        alt={h.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>★ {h.rating}</span>
                        <span className="text-slate-400 text-[10px]">({h.reviews}件)</span>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-orange-600/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md">
                        {h.price}
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-3/5 space-y-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-orange-800 mb-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>九十九島・ハウステンボス・佐世保エリア</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-stone-900 leading-snug">
                        {h.name}
                      </h3>
                      <p className="text-stone-500 text-xs mt-1 flex items-center gap-1">
                        <Compass className="w-3.5 h-3.5" /> {h.access}
                      </p>
                      <p className="text-stone-700 text-xs sm:text-sm leading-relaxed mt-3">
                        {h.story}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-stone-100 text-xs">
                      <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200/60">
                        <span className="font-bold text-stone-800 block mb-0.5">客室のポイント</span>
                        <span className="text-stone-600">{h.roomTip}</span>
                      </div>
                      <div className="bg-orange-50/60 p-2.5 rounded-xl border border-orange-100">
                        <span className="font-bold text-orange-950 block mb-0.5">自慢の冬グルメ</span>
                        <span className="text-orange-900">{h.gourmetTip}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50/80 rounded-2xl p-4 border border-stone-200/60 space-y-2">
                  <span className="text-xs font-bold text-stone-700 uppercase tracking-wider block">宿のハイライト</span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs text-stone-600">
                    {h.highlights.map((hl: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <a 
                    href={h.url}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto"
                  >
                    <span>楽天トラベルでプラン・空室を見る</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 1泊2日モデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-orange-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の九十九島かき＆ハウステンボス光の王国 1泊2日満喫モデルコース
            </h2>
          </div>

          <div className="space-y-6">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-orange-200 space-y-6">
              <div className="relative">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-orange-600 border-4 border-white shadow-sm" />
                <span className="text-xs font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-md">1日目 11:30</span>
                <h3 className="font-bold text-stone-900 text-base mt-1">九十九島パールシーリゾートで「九十九島かき」炭火焼きランチ</h3>
                <p className="text-stone-600 text-xs sm:text-sm mt-1">
                  佐世保駅からバスで九十九島パールシーリゾートへ。焼き牡蠣小屋で獲れたての九十九島かきを炭火の上で香ばしく焼き、熱々の濃厚エキスをすする。サザエやヒオウギ貝も一緒に味わい、磯の香りを満喫。
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-orange-600 border-4 border-white shadow-sm" />
                <span className="text-xs font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-md">1日目 13:30</span>
                <h3 className="font-bold text-stone-900 text-base mt-1">九十九島遊覧船に乗船＆多島美クルーズ</h3>
                <p className="text-stone-600 text-xs sm:text-sm mt-1">
                  優雅な白い遊覧船「パールクィーン」または海賊船「みらい」に乗船。複雑に入り組む島々の間を縫うように航行し、冬の澄んだ海と島々の絶景をデッキから体感。
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-orange-600 border-4 border-white shadow-sm" />
                <span className="text-xs font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-md">1日目 15:30</span>
                <h3 className="font-bold text-stone-900 text-base mt-1">ハウステンボスへ移動＆ホテルチェックイン</h3>
                <p className="text-stone-600 text-xs sm:text-sm mt-1">
                  ハウステンボスへ移動し、ホテルにチェックイン。ヨーロッパ調の優雅な客室で荷物を置き、防寒対策を整えて夕暮れのパークへ繰り出す。
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-orange-600 border-4 border-white shadow-sm" />
                <span className="text-xs font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-md">1日目 17:30</span>
                <h3 className="font-bold text-stone-900 text-base mt-1">白銀の世界点灯式＆世界最大1300万球「光の王国」鑑賞</h3>
                <p className="text-stone-600 text-xs sm:text-sm mt-1">
                  アムステルダム広場で荘厳なチャペルの鐘とともに一斉に純白に輝く「白銀の世界」点灯式を目撃。光と噴水の運河クルーズやクリスマスマーケットでホットワインを楽しむ。
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-orange-600 border-4 border-white shadow-sm" />
                <span className="text-xs font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-md">1日目 20:30</span>
                <h3 className="font-bold text-stone-900 text-base mt-1">長崎和牛ディナー＆天然温泉で温まる</h3>
                <p className="text-stone-600 text-xs sm:text-sm mt-1">
                  ホテル内のレストランで長崎和牛の鉄板焼きや地元海鮮ディナーを堪能。赤褐色の黄金温泉に浸かり、冬の寒さで冷えた体を芯からほぐす至福の夜。
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-orange-600 border-4 border-white shadow-sm" />
                <span className="text-xs font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-md">2日目 10:30</span>
                <h3 className="font-bold text-stone-900 text-base mt-1">佐世保市街で元祖レモンステーキ＆佐世保バーガー</h3>
                <p className="text-stone-600 text-xs sm:text-sm mt-1">
                  佐世保市街へ移動。老舗洋食店でジュワッと音を立てる熱々の元祖レモンステーキを堪能。お土産に人気の佐世保バーガーをテイクアウトして帰路へ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-orange-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-orange-600" />
              冬の佐世保・九十九島旅行 よくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq, idx) => (
              <div key={idx} className="p-4 sm:p-5 bg-stone-50 rounded-2xl border border-stone-200/60 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-orange-600 font-black">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Link Section */}
        <section className="bg-gradient-to-br from-slate-900 to-stone-900 rounded-3xl p-6 sm:p-10 text-white space-y-6 shadow-xl">
          <div className="border-b border-slate-700 pb-4">
            <span className="text-orange-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Related Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              あわせて読みたい！全国の11・12・1月冬の温泉＆味覚特集
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              冬の牡蠣・避寒リゾート・イルミネーションを楽しむ至極の旅ガイド
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link 
              href="/winter-fukuoka-itoshima-oyster-hakata-fugu-stay"
              className="group p-4 bg-slate-800/70 hover:bg-slate-800 rounded-2xl border border-slate-700/80 hover:border-orange-400/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2 py-0.5 bg-orange-950/80 border border-orange-400/40 text-orange-300 text-[10px] font-bold rounded-md mb-2">
                  福岡・糸島＆博多
                </span>
                <h3 className="font-bold text-white text-sm group-hover:text-orange-300 transition-colors line-clamp-2">
                  冬の糸島カキ小屋めぐりと玄界灘天然とらふぐ・熱々博多もつ鍋名宿
                </h3>
              </div>
              <span className="text-xs text-orange-400 font-semibold mt-3 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                特集を見る →
              </span>
            </Link>

            <Link 
              href="/winter-okinawa-onna-motobu-whalewatching-agu-resort-stay"
              className="group p-4 bg-slate-800/70 hover:bg-slate-800 rounded-2xl border border-slate-700/80 hover:border-orange-400/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2 py-0.5 bg-orange-950/80 border border-orange-400/40 text-orange-300 text-[10px] font-bold rounded-md mb-2">
                  沖縄・恩納村＆本部
                </span>
                <h3 className="font-bold text-white text-sm group-hover:text-orange-300 transition-colors line-clamp-2">
                  冬の避寒リゾート！ホエールウォッチングと美ら海・あぐー豚しゃぶ名宿
                </h3>
              </div>
              <span className="text-xs text-orange-400 font-semibold mt-3 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                特集を見る →
              </span>
            </Link>

            <Link 
              href="/winter-nagasaki-unzen-onsen-jigoku-muhyo-unzen-beef-stay"
              className="group p-4 bg-slate-800/70 hover:bg-slate-800 rounded-2xl border border-slate-700/80 hover:border-orange-400/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2 py-0.5 bg-orange-950/80 border border-orange-400/40 text-orange-300 text-[10px] font-bold rounded-md mb-2">
                  長崎・雲仙温泉
                </span>
                <h3 className="font-bold text-white text-sm group-hover:text-orange-300 transition-colors line-clamp-2">
                  立ち上る雲仙地獄の白煙と冬の奇跡「霧氷」・極上雲仙牛と乳白色硫黄泉
                </h3>
              </div>
              <span className="text-xs text-orange-400 font-semibold mt-3 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                特集を見る →
              </span>
            </Link>

            <Link 
              href="/winter-okayama-hinase-ushimado-oyster-kakioko-stay"
              className="group p-4 bg-slate-800/70 hover:bg-slate-800 rounded-2xl border border-slate-700/80 hover:border-orange-400/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2 py-0.5 bg-orange-950/80 border border-orange-400/40 text-orange-300 text-[10px] font-bold rounded-md mb-2">
                  岡山・日生牡蠣＆牛窓
                </span>
                <h3 className="font-bold text-white text-sm group-hover:text-orange-300 transition-colors line-clamp-2">
                  瀬戸内冬の味覚「日生牡蠣」カキオコと牛窓オリーブ園夕陽＆絶景名宿
                </h3>
              </div>
              <span className="text-xs text-orange-400 font-semibold mt-3 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                特集を見る →
              </span>
            </Link>

            <Link 
              href="/winter-hiroshima-miyajima-etajima-oyster-onsen-stay"
              className="group p-4 bg-slate-800/70 hover:bg-slate-800 rounded-2xl border border-slate-700/80 hover:border-orange-400/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2 py-0.5 bg-orange-950/80 border border-orange-400/40 text-orange-300 text-[10px] font-bold rounded-md mb-2">
                  広島・宮島＆江田島
                </span>
                <h3 className="font-bold text-white text-sm group-hover:text-orange-300 transition-colors line-clamp-2">
                  雪化粧の厳島神社と瀬戸内「広島生牡蠣」炭火焼き＆絶景オーシャン名宿
                </h3>
              </div>
              <span className="text-xs text-orange-400 font-semibold mt-3 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                特集を見る →
              </span>
            </Link>

            <Link 
              href="/winter-kochi-city-tosa-kue-katsuo-akagyu-castle-stay"
              className="group p-4 bg-slate-800/70 hover:bg-slate-800 rounded-2xl border border-slate-700/80 hover:border-orange-400/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2 py-0.5 bg-orange-950/80 border border-orange-400/40 text-orange-300 text-[10px] font-bold rounded-md mb-2">
                  高知・天然クエ＆鰹
                </span>
                <h3 className="font-bold text-white text-sm group-hover:text-orange-300 transition-colors line-clamp-2">
                  冬の幻の高級魚「天然クエ鍋」と脂の乗る戻り鰹・高知城ライトアップ名宿
                </h3>
              </div>
              <span className="text-xs text-orange-400 font-semibold mt-3 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                特集を見る →
              </span>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-nagasaki-sasebo-kujukushima-oyster-illumination-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
