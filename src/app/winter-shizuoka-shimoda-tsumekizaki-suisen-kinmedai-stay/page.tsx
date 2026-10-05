import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Snowflake, Waves, Sun, Flame, Mountain, Building, Coffee, ShoppingBag, ThermometerSun
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【12・1月静岡】300万本が咲き誇る爪木崎水仙まつりと富士山絶景・下田港直送極上「一本釣り地金目鯛」を堪能する下田・南伊豆の名宿5選",
  description: "12月中旬から1月下旬、静岡県伊豆半島の南端・下田の須崎半島「爪木崎」では、海を見下ろす岬一面に約300万本もの野水仙が咲き乱れる「爪木崎水仙まつり」が開催されます。甘い水仙の香りと真っ赤なアロエの花、コバルトブルーの太平洋が織りなす冬のコントラストは圧巻。さらに冬は下田港水揚げの一本釣り「地金目鯛（じきんめ）」に最も上質な脂が乗る美食の最高潮。温暖な南伊豆の気候と美肌の名湯に癒やされる厳選名宿5選とモデルコースをお届けします。",
  keywords: '爪木崎 水仙まつり, 下田 地金目鯛 宿泊, 下田温泉 名宿, 下田東急ホテル, 下田大和館, 下田ビューホテル, 下田セントラルホテル, 下田プリンスホテル, ペリーロード 冬, 南伊豆 旅行, 12月 1月 静岡観光',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-shizuoka-shimoda-tsumekizaki-suisen-kinmedai-stay/"
  },
  openGraph: {
    title: "【12・1月静岡】300万本が咲き誇る爪木崎水仙まつりと富士山絶景・下田港直送極上「一本釣り地金目鯛」を堪能する下田・南伊豆の名宿5選",
    description: "12月中旬から1月下旬、静岡県伊豆半島の南端・下田の須崎半島「爪木崎」では、海を見下ろす岬一面に約300万本もの野水仙が咲き乱れる「爪木崎水仙まつり」が開催されます。甘い水仙の香りと真っ赤なアロエの花、コバルトブルーの太平洋が織りなす冬のコントラストは圧巻。さらに冬は下田港水揚げの一本釣り「地金目鯛（じきんめ）」に最も上質な脂が乗る美食の最高潮。温暖な南伊豆の気候と美肌の名湯に癒やされる厳選名宿5選とモデルコースをお届けします。",
    url: 'https://croud-travel.com/winter-shizuoka-shimoda-tsumekizaki-suisen-kinmedai-stay',
    siteName: 'クラドトラベル',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: '冬の静岡県下田・爪木崎水仙と青い海の風景'
      }
    ],
    locale: 'ja_JP',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: "【12・1月静岡】300万本が咲き誇る爪木崎水仙まつりと富士山絶景・下田港直送極上「一本釣り地金目鯛」を堪能する下田・南伊豆の名宿5選",
    description: "12月中旬から1月下旬、静岡県伊豆半島の南端・下田の須崎半島「爪木崎」では、海を見下ろす岬一面に約300万本もの野水仙が咲き乱れる「爪木崎水仙まつり」が開催されます。甘い水仙の香りと真っ赤なアロエの花、コバルトブルーの太平洋が織りなす冬のコントラストは圧巻。さらに冬は下田港水揚げの一本釣り「地金目鯛（じきんめ）」に最も上質な脂が乗る美食の最高潮。温暖な南伊豆の気候と美肌の名湯に癒やされる厳選名宿5選とモデルコースをお届けします。",
    images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function ShizuokaShimodaTsumekizakiWinterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "【12・1月静岡】300万本が咲き誇る爪木崎水仙まつりと富士山絶景・下田港直送極上「一本釣り地金目鯛」を堪能する下田・南伊豆の名宿5選",
    description: "12月中旬から1月下旬、静岡県伊豆半島の南端・下田の須崎半島「爪木崎」では、海を見下ろす岬一面に約300万本もの野水仙が咲き乱れる「爪木崎水仙まつり」が開催されます。甘い水仙の香りと真っ赤なアロエの花、コバルトブルーの太平洋が織りなす冬のコントラストは圧巻。さらに冬は下田港水揚げの一本釣り「地金目鯛（じきんめ）」に最も上質な脂が乗る美食の最高潮。温暖な南伊豆の気候と美肌の名湯に癒やされる厳選名宿5選とモデルコースをお届けします。",
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    datePublished: '2026-10-02',
    dateModified: '2026-10-02',
    author: {
      '@type': 'Organization',
      name: 'クラドトラベル編集部',
      url: 'https://croud-travel.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'クラドトラベル',
      logo: {
        '@type': 'ImageObject',
        url: 'https://croud-travel.com/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://croud-travel.com/winter-shizuoka-shimoda-tsumekizaki-suisen-kinmedai-stay'
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
        item: 'https://croud-travel.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '冬の特集一覧',
        item: 'https://croud-travel.com/features'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: '下田爪木崎水仙＆地金目鯛特集',
        item: 'https://croud-travel.com/winter-shizuoka-shimoda-tsumekizaki-suisen-kinmedai-stay'
      }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "下田・爪木崎水仙まつりの見頃時期とアクセス方法、見どころは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "下田・爪木崎水仙まつりは、例年12月20日前後から翌年1月31日にかけて開催されます。須崎半島の先端に位置する爪木崎には、約300万本もの野生の水仙（野水仙）が群生しており、例年1月上旬から中旬にかけて満開のピークを迎えます。岬の丘一面に広がる白と黄色の可憐な水仙の花と甘い芳香、同時に見頃を迎える鮮やかな赤いアロエの花、そしてコバルトブルーの太平洋のコントラストは圧巻です。アクセスは伊豆急下田駅の定期バス10番乗り場から東海バス「爪木崎行き」に乗車して約15分（終点下車すぐ）。車の場合は有料駐車場（約200台収容）が整備されています。"
        }
      },
      {
        '@type': 'Question',
        name: "下田名物の「地金目鯛（じきんめ）」とは？通常の金目鯛との違いやおすすめの食べ方は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "下田港は金目鯛の水揚げ量が日本一を誇ります。その中でも特に最高峰とされるのが、神津島や新島周辺の日帰り漁場で小型漁船によって一本釣りされる「地金目鯛（じきんめ・日戻り金目）」です。傷がつかないよう一本ずつ丁寧に釣り上げられ、釣り上げたその日のうちに港へ戻るため鮮度が抜群。特に12月〜2月の真冬は産卵前で最も脂が乗り、白身でありながらマグロのトロに匹敵する脂の甘みと旨味を蓄えます。料理としては、甘辛い濃厚なタレでふっくら照り煮にした「金目鯛の姿煮」が王道。さらにサッと出汁にくぐらせる「金目鯛しゃぶしゃぶ」や、皮目をバーナーで炙って香ばしさを引き出した「炙り刺身」も絶品です。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の伊豆下田の気候・気温と、観光時の服装の注意点は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "南伊豆・下田エリアは黒潮暖流の影響を強く受けるため、本州の中でも非常に温暖な気候です。12月〜1月の平均最高気温は12〜15度前後あり、日中の日なたではコートを脱ぎたくなるほど暖かく感じられます。ただし、爪木崎灯台や海岸線などの岬周辺では太平洋からの海風が強く吹くため、風を通さないウインドブレーカーや軽めのダウンジャケット、ストールなど風対策ができる上着があると快適です。また、爪木崎の遊歩道や俵磯の柱状節理周辺を歩く際はスニーカーなど歩きやすい靴が適しています。"
        }
      },
      {
        '@type': 'Question',
        name: "冬に車で下田・南伊豆へ行く際、天城越えの道路凍結やスタッドレスタイヤの必要性は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "下田市街や海岸沿いの道路は冬でもほとんど積雪や凍結の心配はありません。しかし、東京・東名方面から伊豆半島中央部を経由して国道414号で天城峠（天城トンネル周辺）を越えるルートでは、強い寒波が来た日の早朝や夜間に路面凍結や降雪が発生することがあります。12月下旬〜1月に車で訪れる場合は、事前に伊豆スカイラインや天城峠の道路ライブカメラ・凍結情報を確認し、スタッドレスタイヤを装着するかタイヤチェーンを携行することをおすすめします。雪道を完全に避けたい場合は、熱海・東伊豆海岸沿いを通る国道135号線ルートを選ぶと比較的安心です。"
        }
      },
      {
        '@type': 'Question',
        name: "爪木崎水仙まつりとあわせて巡るべき下田の冬の立ち寄り観光スポットは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "水仙観賞の前後にぜひ訪れたいのが、幕末の開国ロマンが息づく「ペリーロード」です。平滑川沿いに石畳とガス灯、なまこ壁の古民家が続き、お洒落なカフェやアンティークショップが点在しています。また、日米下田条約が締結された名刹「了仙寺」や、下田ロープウェイで登る「寝姿山自然公園」の山頂展望台からは、下田港や爪木崎、伊豆諸島を一望する息を呑む絶景パノラマが楽しめます。下田港の「道の駅 開国下田みなと」では、新鮮な金目鯛の干物や地場産柑橘のお土産選びに最適です。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "下田東急ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4615/4615.jpg",
              rating: 4.46,
              reviews: 1034,
              price: "¥8,266〜",
              access: "伊豆急下田駅より車で６分。（無料シャトルバス定時運行 ）　※カーナビで最短距離（LAWSON左折）の道順は狭いので要注意",
              special: "海を一望！伊豆の南の豊かな自然の恵みを、温泉と食で満喫する格式と伝統の本格的リゾートホテル。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4615%2F4615.html",
              story: "下田湾を見下ろす高台に優雅に佇み、海外のリゾートホテルのような気品と開放感を放つ「下田東急ホテル」。全客室から青く輝く太平洋や下田港の美しい景観を望み、南国情緒豊かな椰子の木と手入れの行き届いた庭園が迎えてくれます。冬の澄み切った朝には、水平線から昇る朝日が客室や露天風呂を黄金色に照らし出します。ホテル自慢の温泉大浴場では、肌当たり柔らかな単純温泉に浸かりながら冬の海風を心地よく肌で感じることができます。夕食はフレンチと和食から選べ、冬限定の地金目鯛料理は絶品。シェフが丁寧にポワレに仕立てた金目鯛や、伝統の煮付けなど、洗練された美食体験を満喫できます。",
              roomTip: "オーシャンビューデラックスツイン。高台からの壮大な太平洋パノラマを眼下に収め、バルコニーで冬の穏やかな陽光を浴びながら寛げます。",
              gourmetTip: "「冬の伊豆フレンチ〜地金目鯛のポワレと特選牛フィレ肉〜」。香ばしく焼き上げた金目鯛の皮目とふっくらジューシーな身の旨味が凝縮された一皿です。",
              highlights: [
                "下田湾を見下ろす高台リゾート・絶景オーシャンビュー露天風呂と洗練されたフレンチ＆和食",
                "手入れの行き届いた椰子の木の庭園と南国ムード・伊豆急下田駅から無料シャトル運行",
                "下田港直送の金目鯛ポワレや伊豆牛など記念日やご褒美旅行にも最適な美食"
              ]
            },
            {
              id: 2,
              name: "下田温泉　下田大和館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8265/8265.jpg",
              rating: 4.53,
              reviews: 1814,
              price: "¥9,900〜",
              access: "車：新東名長泉沼津IC～伊豆縦貫道～R414～下田駅通過後R136を南下約2.6ｋm　電車：伊豆急下田駅(送迎有)",
              special: "すべての客室を全面禁煙とさせていただきます。館内の喫煙所をご利用くださいませ。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8265%2F8265.html",
              story: "白砂の海岸として名高い多々戸浜のビーチサイドに位置し、全客室がオーシャンビューを誇る和風リゾート旅館「下田温泉 下田大和館」。ロビーや客室のテラスからは、寄せては返す冬の白波と青い海が広がり、波音のヒーリング効果に包まれます。最上階に位置するパラダリウム露天風呂や貸切露天風呂「波流花」では、冬の澄んだ星空や夕暮れの茜色の空を眺めながらの名湯三昧。夕食のメインを飾るのは、下田港で一本釣りされた極上地金目鯛を丸ごと煮付けた豪快な姿煮。コク深い秘伝の甘辛ダレが脂の乗った白身にしっかりと絡み、ご飯もお酒も止まらなくなる至福の美味しさです。",
              roomTip: "露天風呂付き客室。波の音を間近に聴きながら、テラスの専用露天風呂で誰にも邪魔されないプライベートな湯浴みを満喫できます。",
              gourmetTip: "「地金目鯛姿煮＆炭火焼き会席」。脂乗り抜群の丸ごと一本の金目鯛姿煮に加え、伊勢海老やサザエの炭火焼きを豪快に味わえる冬一番人気プラン。",
              highlights: [
                "多々戸浜の波打ち際に佇む純和風リゾート・名物地金目鯛丸ごと一本姿煮と展望風呂",
                "客室テラスから波音に包まれる極上の癒やし・貸切露天風呂や多彩な湯処を完備",
                "伊勢海老やサザエの炭火焼きプランなど豪快な海の恵みを堪能できる宿泊プラン"
              ]
            },
            {
              id: 3,
              name: "下田温泉　下田ビューホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1922/1922.jpg",
              rating: 4.04,
              reviews: 1660,
              price: "¥11,511〜",
              access: "伊豆急線伊豆急下田駅より車で６分（無料送迎バスは、事前のご予約制です。）、東名沼津ＩＣより75KM・約100分",
              special: "伊豆七島を望む下田随一の絶景をお楽しみいただけます。 天然温泉と旬の味覚をお楽しみください。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1922%2F1922.html",
              story: "外浦海岸の高台にそびえ立ち、全室から雄大な太平洋と外浦湾の絶景パノラマを見渡せる絶景ホテル「下田温泉 下田ビューホテル」。ギリシャのサントリーニ島を思わせる白い外観が青い海に映え、南国リゾートの非日常感を演出しています。館内の大浴場と露天風呂からも海を一望でき、朝には水平線から昇る日の出を湯船の中から拝むことができます。冬の料理は下田ならではの海の幸をふんだんに盛り込んだ海鮮会席。脂の乗った金目鯛のしゃぶしゃぶは、熱々の特製昆布出汁にサッとくぐらせることで余分な脂が落ち、甘みと旨味が引き立つ極上の味わい。冬の澄んだ大気と絶景、そして美食に満たされるひとときを過ごせます。",
              roomTip: "オーシャンビュー和洋室。大きな窓から外浦湾のエメラルドグリーンの海を見下ろし、畳の寛ぎとベッドの快適性を両立した贅沢な空間です。",
              gourmetTip: "「金目鯛しゃぶしゃぶ＆伊勢海老お造り会席」。繊細な薄切り金目鯛を出汁に潜らせていただくしゃぶしゃぶは、上品な脂の甘みが口いっぱいに広がります。",
              highlights: [
                "外浦海岸の高台から望む太平洋パノラマ・絶品金目鯛しゃぶしゃぶと日の出を望む露天風呂",
                "サントリーニ島を思わせる白い洋風リゾート意匠と広々とした和洋室の快適性",
                "朝風呂で水平線から昇る朝日を拝む贅沢・カップルやファミリーにも大好評"
              ]
            },
            {
              id: 4,
              name: "里山の別邸　下田セントラルホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/25287/25287.jpg",
              rating: 4.72,
              reviews: 1085,
              price: "¥22,000〜",
              access: "伊豆急下田駅より無料送迎あり（要予約・定時運行）／東名高速沼津ＩＣより伊豆縦貫道→天城峠→県道１５号利用",
              special: "温泉、料理、おもてなし、クチコミ高評価！伊豆の下田『相玉温泉』を唯一自家源泉とする一軒宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F25287%2F25287.html",
              story: "下田市街の喧騒から離れた静かな里山、飲泉可能な豊かな自家源泉を持つ隠れ家旅館「里山の別邸 下田セントラルホテル」。海のリゾートとは一味違う、日本の原風景のような田園と竹林に囲まれた静寂が心を洗い流してくれます。毎分数百リットルの豊富な湧出量を誇るアルカリ性単純温泉は、化粧水のようにまろやかで肌に吸い付く「美肌の湯」。庭園露天風呂で澄み切った冬の星空を眺めながらの長湯は至福のひとときです。夕食には下田港直送の金目鯛料理をはじめ、伊豆の旬の野菜や天城山麓の猪肉など、山海の滋味を繊細に仕立てた里山会席を提供。静けさと名湯、本物の寛ぎを求める大人の旅に最適です。",
              roomTip: "源泉露天風呂付き和洋室。専用の庭園と客室露天風呂を備え、掛け流しの名湯に24時間いつでも浸かれる贅沢なプライベートステイが叶います。",
              gourmetTip: "「金目鯛と旬の里山旬彩会席」。下田港の金目鯛煮付けと、伊豆の原木椎茸や冬根菜を使った丁寧な手仕事が光る滋味あふれる料理が並びます。",
              highlights: [
                "毎分豊富な湯量を誇る飲泉可能な自家源泉・静寂の里山に佇む大人の隠れ家露天風呂付き客室",
                "化粧水のように肌に吸い付く美肌のアルカリ性単純泉と山海の恵みを凝縮した里山会席",
                "都会の喧騒を完全に遮断したプライベート空間・クチコミ高評価の極上ホスピタリティ"
              ]
            },
            {
              id: 5,
              name: "下田温泉　下田プリンスホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/56802/56802.jpg",
              rating: 4.08,
              reviews: 1835,
              price: "¥5,910〜",
              access: "下田駅より車で１０分  ※無料送迎バス　下田駅発3:00P.M.と4:00P.M.【要電話予約】",
              special: "全室オーシャンビュー！南伊豆の豊かな自然につつまれた、四季を通して太陽と海のやすらぎのリゾート！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F56802%2F56802.html",
              story: "白砂青松が広がる白浜海岸の波打ち際に建ち、全室がオーシャンフロントの圧倒的なロケーションを誇る「下田温泉 下田プリンスホテル」。雄大な太平洋に面した客室バルコニーからは、遠く伊豆大島や利島などの伊豆諸島を望み、寄せては返す波音が心地よい時間を刻みます。海を一望する展望温泉大浴場では、地下から湧き出る天然温泉に浸かりながら、冬の澄んだ水平線から昇る感動的な日の出を鑑賞できます。ディナーでは下田港の金目鯛を使った和食コースや洋食コースを用意。ホテルから白浜海岸へ直接出られるため、澄んだ冬の朝に爽やかなビーチウォーキングを楽しむのもおすすめです。",
              roomTip: "オーシャンツイン。窓いっぱいに広がる白浜の青い海と波の音に癒やされ、プリンスホテルならではの機能的で清潔感あふれる滞在が約束されます。",
              gourmetTip: "「伊豆海鮮和食ディナー」。下田港直送の金目鯛の煮付けや近海で水揚げされた新鮮な地魚のお造りを、落ち着いたレストランで堪能できます。",
              highlights: [
                "白浜海岸直結のオーシャンフロント・伊豆諸島を望むパノラマ客室と水平線からの感動の日の出",
                "清潔感あふれるプリンスホテル品質と冬の白浜海岸を散策できる至高のビーチフロント立地",
                "リーズナブルな価格設定で冬の南伊豆ドライブや連泊旅行にも抜群のコストパフォーマンス"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "下田・爪木崎水仙まつりの見頃時期とアクセス方法、見どころは？",
    "a": "下田・爪木崎水仙まつりは、例年12月20日前後から翌年1月31日にかけて開催されます。須崎半島の先端に位置する爪木崎には、約300万本もの野生の水仙（野水仙）が群生しており、例年1月上旬から中旬にかけて満開のピークを迎えます。岬の丘一面に広がる白と黄色の可憐な水仙の花と甘い芳香、同時に見頃を迎える鮮やかな赤いアロエの花、そしてコバルトブルーの太平洋のコントラストは圧巻です。アクセスは伊豆急下田駅の定期バス10番乗り場から東海バス「爪木崎行き」に乗車して約15分（終点下車すぐ）。車の場合は有料駐車場（約200台収容）が整備されています。"
  },
  {
    "q": "下田名物の「地金目鯛（じきんめ）」とは？通常の金目鯛との違いやおすすめの食べ方は？",
    "a": "下田港は金目鯛の水揚げ量が日本一を誇ります。その中でも特に最高峰とされるのが、神津島や新島周辺の日帰り漁場で小型漁船によって一本釣りされる「地金目鯛（じきんめ・日戻り金目）」です。傷がつかないよう一本ずつ丁寧に釣り上げられ、釣り上げたその日のうちに港へ戻るため鮮度が抜群。特に12月〜2月の真冬は産卵前で最も脂が乗り、白身でありながらマグロのトロに匹敵する脂の甘みと旨味を蓄えます。料理としては、甘辛い濃厚なタレでふっくら照り煮にした「金目鯛の姿煮」が王道。さらにサッと出汁にくぐらせる「金目鯛しゃぶしゃぶ」や、皮目をバーナーで炙って香ばしさを引き出した「炙り刺身」も絶品です。"
  },
  {
    "q": "冬の伊豆下田の気候・気温と、観光時の服装の注意点は？",
    "a": "南伊豆・下田エリアは黒潮暖流の影響を強く受けるため、本州の中でも非常に温暖な気候です。12月〜1月の平均最高気温は12〜15度前後あり、日中の日なたではコートを脱ぎたくなるほど暖かく感じられます。ただし、爪木崎灯台や海岸線などの岬周辺では太平洋からの海風が強く吹くため、風を通さないウインドブレーカーや軽めのダウンジャケット、ストールなど風対策ができる上着があると快適です。また、爪木崎の遊歩道や俵磯の柱状節理周辺を歩く際はスニーカーなど歩きやすい靴が適しています。"
  },
  {
    "q": "冬に車で下田・南伊豆へ行く際、天城越えの道路凍結やスタッドレスタイヤの必要性は？",
    "a": "下田市街や海岸沿いの道路は冬でもほとんど積雪や凍結の心配はありません。しかし、東京・東名方面から伊豆半島中央部を経由して国道414号で天城峠（天城トンネル周辺）を越えるルートでは、強い寒波が来た日の早朝や夜間に路面凍結や降雪が発生することがあります。12月下旬〜1月に車で訪れる場合は、事前に伊豆スカイラインや天城峠の道路ライブカメラ・凍結情報を確認し、スタッドレスタイヤを装着するかタイヤチェーンを携行することをおすすめします。雪道を完全に避けたい場合は、熱海・東伊豆海岸沿いを通る国道135号線ルートを選ぶと比較的安心です。"
  },
  {
    "q": "爪木崎水仙まつりとあわせて巡るべき下田の冬の立ち寄り観光スポットは？",
    "a": "水仙観賞の前後にぜひ訪れたいのが、幕末の開国ロマンが息づく「ペリーロード」です。平滑川沿いに石畳とガス灯、なまこ壁の古民家が続き、お洒落なカフェやアンティークショップが点在しています。また、日米下田条約が締結された名刹「了仙寺」や、下田ロープウェイで登る「寝姿山自然公園」の山頂展望台からは、下田港や爪木崎、伊豆諸島を一望する息を呑む絶景パノラマが楽しめます。下田港の「道の駅 開国下田みなと」では、新鮮な金目鯛の干物や地場産柑橘のお土産選びに最適です。"
  }
];

  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-cyan-100 selection:text-cyan-900 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero Header */}
      <header className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 opacity-35 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80" 
            alt="冬の静岡・南伊豆下田の海と爪木崎水仙まつりの風景" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-emerald-900/80 backdrop-blur-md text-emerald-100 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-emerald-400/30">
            <Sun className="w-4 h-4 text-emerald-300" />
            12月・1月 冬の伊豆半島・爪木崎300万本水仙まつり＆一本釣り地金目鯛特集
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
            【12・1月静岡】300万本が咲き誇る爪木崎水仙まつりと富士山絶景・下田港直送極上「一本釣り地金目鯛」を堪能する下田・南伊豆の名宿5選
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            真冬でも黒潮の暖流により温暖な風が吹き抜ける南伊豆・下田。須崎半島の突端「爪木崎」では、海を見渡す丘一面に300万本の野水仙が甘い香りを放ち、真っ赤なアロエの花と青い海の圧巻のパノラマが広がります。そして冬は下田港名物の一本釣り「地金目鯛」に上質な脂が乗る最高の季節。歴史あるペリーロードを散策し、海を望む名湯に浸り、濃厚な金目鯛の姿煮と海の幸に舌鼓を打つ極上の冬旅へご案内します。
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-emerald-400" /> 最適時期：12月中旬〜1月下旬（水仙まつり・地金目鯛旬）</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-emerald-400" /> エリア：静岡県下田市・須崎半島爪木崎</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-emerald-400" /> 名物：一本釣り地金目鯛の姿煮・金目鯛しゃぶしゃぶ・伊勢海老・サザエ・伊豆柑橘</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-emerald-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Overview</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の訪れを忘れる陽光の岬と、甘い水仙の香りに包まれる南伊豆の至福
            </h2>
          </div>
          
          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p>
              日本列島が厳しい寒気に覆われる12月から1月、伊豆半島の南端に位置する下田市は、黒潮がもたらす温暖な海洋性気候に包まれ、まるで一足早い春が訪れたかのような穏やかな陽光に恵まれます。真冬でも日中の気温が15度近くまで上がるこの温暖な地で、冬の伊豆を象徴する一大風物詩が「爪木崎水仙まつり」です。
            </p>
            <p>
              須崎半島の先端に突き出た爪木崎の斜面には、約300万本もの野生の水仙が群生し、12月下旬から1月中旬にかけて純白の花を一斉に咲かせます。岬に一歩足を踏み入れると、潮風に乗って甘く清々しい水仙の芳香がふわりと漂い、訪れる者の心を優しく解きほぐします。水仙の群生の足元には、南国の植物であるキダチアロエの鮮烈な赤い花が咲き競い、青い太平洋と白亜の爪木埼灯台、そして遠く伊豆諸島を望むコントラストは、他では決して見ることのできない南伊豆だけの冬の絶景です。
            </p>
            <p>
              そして、下田の冬のもう一つの主役が、下田港に水揚げされる極上の「地金目鯛（じきんめ）」です。下田港は金目鯛の水揚げ量で日本一を誇りますが、その中でも伊豆諸島近海の漁場で小型船により一本釣りされ、その日のうちに水揚げされる地金目鯛はまさに別格。12月から1月の真冬は、脂の乗りが年間で最もピークに達し、身はふっくらと柔らかく、上品な甘みとコクが凝縮されます。
            </p>
            <p>
              下田の宿で味わう伝統の「金目鯛の姿煮」は、濃厚な秘伝ダレで照りよく煮付けられ、黄金色の脂がタレに溶け出した至高の味わい。さらに薄切りにした身を出汁にくぐらせる「金目鯛のしゃぶしゃぶ」や、香ばしい「炙り刺身」など、本場だからこそ味わえる贅沢な料理が旅人の舌を唸らせます。幕末の開国ロマンが色濃く残るペリーロードの街歩き、海を望む下田温泉の柔らかな湯に浸かり、冬の美食と絶景を心ゆくまで満喫する旅が始まります。
            </p>
          </div>
        </section>

        {/* 3 Key Highlights Section */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-emerald-800 font-bold text-xs sm:text-sm tracking-wider uppercase block">Highlights</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の下田・爪木崎で体感すべき3つのプレミアムな魅力
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              12月〜1月だからこそ出逢える、一面の水仙群生と本場の地金目鯛、温暖な美肌温泉。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                1. 岬を埋め尽くす300万本の野水仙と赤いアロエの花
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                須崎半島の爪木崎一面に広がる300万本の野生水仙。甘い香りに包まれながら、青い海と白亜の灯台、鮮やかなアロエの花が織りなすパノラマ絶景を堪能。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-700 font-bold">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                2. 冬に脂が乗る下田港直送「一本釣り地金目鯛」の姿煮
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                水揚げ量日本一の下田港が誇る日戻り地金目鯛。真冬の極上の脂が乗った身を丸ごと照り煮にした姿煮や、しゃぶしゃぶ、炙り刺身の贅沢な饗宴。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-700 font-bold">
                <Waves className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                3. 海洋美肌の下田温泉とレトロなペリーロード散策
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                太平洋の海原や白砂のビーチを望む美肌の温泉露天風呂。湯上がりに石畳となまこ壁が美しいペリーロードを歩き、幕末の開国ロマンに浸れます。
              </p>
            </div>
          </div>
        </section>

        {/* Model Course Section */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-emerald-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              【1泊2日】爪木崎水仙まつりとペリーロード・極上地金目鯛を味わう南伊豆王道ドライブ
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              伊豆急下田駅を拠点に、冬の花と絶景、そして名物グルメを贅沢に巡る冬のドライブコース。
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-emerald-500/40 space-y-6">
              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">DAY 1 昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  12:00 下田到着 ➔ 下田港の魚市場食堂で名物「金目鯛バーガー」または「金目鯛海鮮丼」ランチ
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  特急踊り子号またはドライブで伊豆急下田駅へ到着。「道の駅 開国下田みなと」周辺の海鮮料理店で、揚げたての金目鯛カツを挟んだ下田バーガーや、厚切り金目鯛が乗った海鮮丼でランチ。港の活気と潮の香りを感じます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">DAY 1 午後</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  13:30 須崎半島へドライブ ➔ 300万本の花が咲き誇る「爪木崎水仙まつり」を散策
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  下田市街から車で約15分、須崎半島の爪木崎へ。岬の斜面一面に咲き乱れる野水仙の甘い香りに包まれ、白亜の爪木埼灯台までハイキング。赤いアロエの花と青い海のコントラストを楽しみ、俵磯の柱状節理の奇岩景観を鑑賞します。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">DAY 1 夕刻〜夜</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  16:00 下田の温泉宿にチェックイン ➔ オーシャンビュー露天風呂＆「一本釣り地金目鯛姿煮」
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  宿にチェックインし、海を望む露天風呂へ。夕暮れの海原と潮風を感じながら美肌の湯を堪能。夕食には下田港直送の一本釣り地金目鯛の姿煮や金目鯛しゃぶしゃぶ、伊豆の地酒が並ぶ豪華会席を心ゆくまで味わいます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">DAY 2 朝〜昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  09:30 ペリーロードとなまこ壁の街並み散策 ➔ 寝姿山ロープウェイで絶景展望
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  朝食後は下田旧市街へ。平滑川沿いのペリーロードを散策し、レトロなカフェでひと休み。下田ロープウェイで寝姿山の山頂へ登り、下田港や爪木崎、伊豆諸島を一望する大パノラマを堪能して、大満足の帰路へ就きます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-emerald-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Featured Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の下田爪木崎水仙と極上地金目鯛を堪能する厳選名宿5選
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-1">
              楽天トラベル公式APIより取得した最新データに基づく、海景色・温泉・料理が高評価の宿。
            </p>
          </div>

          <div className="space-y-10">
            {hotelsData.map((h) => (
              <div key={h.id} className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-auto min-h-[260px]">
                    <img 
                      src={h.img} 
                      alt={h.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">
                      厳選第 {h.id} 位
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-bold text-emerald-900 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60">
                          {h.access}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-stone-600">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="font-bold text-stone-900 text-sm">{h.rating}</span>
                          <span>({h.reviews}件のクチコミ)</span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                        {h.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-500 font-medium">
                        {h.special}
                      </p>

                      <p className="text-sm text-stone-700 leading-relaxed pt-2">
                        {h.story}
                      </p>
                    </div>

                    <div className="space-y-3 bg-stone-50 rounded-2xl p-4 border border-stone-200/70 text-xs sm:text-sm text-stone-700">
                      <div className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-emerald-600" />
                        この宿の注目ポイント
                      </div>
                      <ul className="space-y-1.5 list-disc list-inside text-stone-600">
                        {h.highlights.map((hl: string, idx: number) => (
                          <li key={idx} className="leading-relaxed">{hl}</li>
                        ))}
                      </ul>
                      <div className="pt-2 border-t border-stone-200/60 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="font-bold text-stone-900">客室の提案：</span>
                          <span className="text-stone-600">{h.roomTip}</span>
                        </div>
                        <div>
                          <span className="font-bold text-stone-900">料理の提案：</span>
                          <span className="text-stone-600">{h.gourmetTip}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-stone-100">
                      <div>
                        <span className="text-xs text-stone-500 block">参考宿泊料金（1名あたり）</span>
                        <span className="text-xl sm:text-2xl font-black text-emerald-950">{h.price}</span>
                      </div>

                      <a 
                        href={h.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-800 to-slate-900 hover:from-emerald-900 hover:to-slate-950 text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all text-sm group"
                      >
                        <span>楽天トラベルで空室・プランを見る</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Local Gourmet & Culture Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-emerald-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Local Gastronomy & Culture</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              下田の港町が育んだ一本釣りの誇りと柑橘の恵み
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-700 text-sm leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-emerald-700" />
                漁師の情熱が生む「日戻り一本釣り地金目鯛」
              </h3>
              <p>
                下田の金目鯛漁は、魚体に傷をつけず品質を最上級に保つため、深海延縄による「一本釣り」にこだわっています。中でも早朝に出港してその日の夕方に帰港する「日戻り地金目鯛」は、鮮度の良さと脂の質が桁違いです。熱を通すと身がふっくらと膨らみ、皮の下に蓄えられた良質な脂がジュワッと溢れ出します。煮付けのタレをご飯にかけて食べる漁師飯も絶品の極みです。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-emerald-700" />
                伊豆柑橘「ニューサマーオレンジ」と開国銘菓
              </h3>
              <p>
                南伊豆の温暖な傾斜地では、冬から初春にかけて様々な柑橘類が実を結びます。爽やかな酸味と上品な甘みが特徴の「ニューサマーオレンジ（日向夏）」を使ったゼリーやドレッシングはお土産に大人気。また、ペリー来航にちなんだ開国銘菓「黒船来航カステラ」や、地元酒蔵「白隠正宗」「萬燿」の地酒も、下田の歴史と旅情を感じさせる逸品です。
              </p>
            </div>
          </div>
        </section>

        {/* Practical Tips Section */}
        <section className="bg-emerald-50/60 rounded-3xl p-6 sm:p-10 border border-emerald-200/60 space-y-6">
          <div className="border-b border-emerald-200/80 pb-4">
            <span className="text-emerald-900 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Traveler Tips</span>
            <h2 className="text-xl sm:text-2xl font-bold text-emerald-950">
              冬の下田・爪木崎を心地よく旅するための装備とアドバイス
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-emerald-950">
            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <ThermometerSun className="w-4 h-4 text-emerald-700" />
                岬の強風対策と歩きやすい靴
              </div>
              <p className="leading-relaxed text-stone-700">
                爪木崎は太平洋に突き出た岬のため、晴れていても海からの突風が吹くことがあります。帽子が飛ばされないよう注意し、風を通さない上着を持参しましょう。水仙園の遊歩道は階段や傾斜があるため歩きやすいスニーカーが必須です。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <Compass className="w-4 h-4 text-emerald-700" />
                水仙まつりの駐車場と時間帯
              </div>
              <p className="leading-relaxed text-stone-700">
                水仙まつり期間中の土日祝日は、午前11時〜午後14時頃にかけて爪木崎の有料駐車場が混雑します。午前9時〜10時頃の早い時間に訪れると、澄んだ朝の光の中で美しく咲く水仙を落ち着いて鑑賞できます。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                天城峠の早朝・深夜凍結に留意
              </div>
              <p className="leading-relaxed text-stone-700">
                下田市街地は温暖ですが、修善寺から天城峠（国道414号）を越えるルートは標高が高いため、冷え込みが厳しい早朝や夜間に凍結することがあります。マイカー利用の場合はライブカメラを確認し、慎重な運転を心がけてください。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-emerald-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の下田・爪木崎水仙まつりに関するよくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq: { q: string; a: string }, idx: number) => (
              <div key={idx} className="border border-stone-200/70 rounded-2xl p-5 hover:border-emerald-300 transition-colors bg-stone-50/50">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-800 text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
                    Q
                  </span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mt-3 pl-9">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Features & Internal Links Section */}
        <section className="border-t border-stone-200 pt-10 space-y-6">
          <div className="space-y-1">
            <span className="text-emerald-800 font-bold text-xs sm:text-sm tracking-wider uppercase block">Explore More Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              あわせて読みたい東日本・伊豆半島の冬景色・グルメ特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <Link 
              href="/winter-kanagawa-miura-misaki-maguro-suisen-fuji-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-emerald-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-emerald-800 font-bold text-xs block mb-1">神奈川・三浦＆三崎</span>
              <span className="text-stone-900 font-bold group-hover:text-emerald-900 transition-colors line-clamp-2">
                冬の城ヶ島30万本水仙まつりと富士山絶景・三崎まぐろ尽くし名宿
              </span>
            </Link>

            <Link 
              href="/winter-chiba-kamogawa-seaworld-kominato-kinmedai-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-emerald-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-emerald-800 font-bold text-xs block mb-1">千葉・鴨川＆小湊</span>
              <span className="text-stone-900 font-bold group-hover:text-emerald-900 transition-colors line-clamp-2">
                冬の鴨川シーワールドシャチと外房寒金目鯛姿煮＆房総伊勢海老名宿
              </span>
            </Link>

            <Link 
              href="/winter-ibaraki-fukuroda-waterfall-ice-onsen-shamo-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-emerald-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-emerald-800 font-bold text-xs block mb-1">茨城・袋田＆奥久慈</span>
              <span className="text-stone-900 font-bold group-hover:text-emerald-900 transition-colors line-clamp-2">
                日本三名瀑・袋田の滝の完全凍結「氷瀑」と奥久慈軍鶏鍋＆常陸牛名宿
              </span>
            </Link>

            <Link 
              href="/winter-tottori-sakaiminato-kaike-onsen-matsubagani-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-emerald-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-emerald-800 font-bold text-xs block mb-1">鳥取・境港＆皆生温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-emerald-900 transition-colors line-clamp-2">
                山陰松葉ガニ解禁！境港水産物市場と皆生温泉「塩の湯」名宿
              </span>
            </Link>

            <Link 
              href="/winter-okinawa-ishigaki-kabilabay-starrysky-beef-resort-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-emerald-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-emerald-800 font-bold text-xs block mb-1">沖縄・石垣島＆川平湾</span>
              <span className="text-stone-900 font-bold group-hover:text-emerald-900 transition-colors line-clamp-2">
                星空保護区の南十字星と川平湾ブルー・石垣牛炭火焼肉リゾート名宿
              </span>
            </Link>

            <Link 
              href="/features" 
              className="p-4 rounded-2xl bg-gradient-to-br from-emerald-900 to-slate-950 text-white hover:opacity-95 transition-all group block flex flex-col justify-between"
            >
              <div>
                <span className="text-emerald-300 font-bold text-xs block mb-1">特集ポータル</span>
                <span className="font-bold group-hover:text-emerald-200 transition-colors">
                  全国の季節旅・目的別おすすめ特集一覧を見る
                </span>
              </div>
              <span className="text-xs text-emerald-300 mt-2 block font-medium">全特集をチェック ➔</span>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
