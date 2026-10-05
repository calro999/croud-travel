import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Wine, AlertTriangle, Sunrise, HeartHandshake, Eye
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月和歌山】本州最南端「潮岬」冬の太平洋初日の出と朝焼け「橋杭岩」絶景！発祥の地「近大マグロ」会席＆串本温泉リゾート名宿5選",
  description: "黒潮が洗う本州最南端の温暖な楽園・和歌山県串本の11〜1月冬紀行。紺碧の太平洋が弧を描く「潮岬」から望む元旦初日の出、国の天然記念物「橋杭岩」が朝焼けの茜色に染まる荘厳な奇岩パノラマ。世界初の完全養殖を成し遂げた発祥の地で味わう極上「近大マグロ（クロマグロ）」のトロと赤身、冬の伊勢海老やケンケン鰹。太平洋を見下ろすインフィニティ露天風呂や本州最南端リゾートで冬の寒さを忘れる贅沢な厳選名宿5選と旅の極意を徹底紹介。",
  keywords: '潮岬 初日の出, 橋杭岩 朝焼け, 近大マグロ 串本, 串本温泉 名宿, メルキュール和歌山串本, 大江戸温泉物語 南紀串本, フェアフィールド串本, 和歌山 冬旅行, 本州最南端 温泉',
  alternates: {
    canonical: 'https://croud-travel.com/winter-wakayama-kushimoto-shionomisaki-sunrise-hashiguiiwa-kindai-maguro-stay'
  },
  openGraph: {
    title: "【11・12・1月和歌山】本州最南端「潮岬」冬の太平洋初日の出と朝焼け「橋杭岩」絶景！発祥の地「近大マグロ」会席＆串本温泉リゾート名宿5選",
    description: "黒潮が洗う本州最南端の温暖な楽園・和歌山県串本の11〜1月冬紀行。紺碧の太平洋が弧を描く「潮岬」から望む元旦初日の出、国の天然記念物「橋杭岩」が朝焼けの茜色に染まる荘厳な奇岩パノラマ。世界初の完全養殖を成し遂げた発祥の地で味わう極上「近大マグロ（クロマグロ）」のトロと赤身、冬の伊勢海老やケンケン鰹。太平洋を見下ろすインフィニティ露天風呂や本州最南端リゾートで冬の寒さを忘れる贅沢な厳選名宿5選と旅の極意を徹底紹介。",
    url: 'https://croud-travel.com/winter-wakayama-kushimoto-shionomisaki-sunrise-hashiguiiwa-kindai-maguro-stay',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '冬の朝日に輝く本州最南端潮岬と橋杭岩の奇岩パノラマ'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月和歌山】本州最南端「潮岬」冬の太平洋初日の出と朝焼け「橋杭岩」絶景！発祥の地「近大マグロ」会席＆串本温泉リゾート名宿5選",
    description: "黒潮が洗う本州最南端の温暖な楽園・和歌山県串本の11〜1月冬紀行。紺碧の太平洋が弧を描く「潮岬」から望む元旦初日の出、国の天然記念物「橋杭岩」が朝焼けの茜色に染まる荘厳な奇岩パノラマ。世界初の完全養殖を成し遂げた発祥の地で味わう極上「近大マグロ（クロマグロ）」のトロと赤身、冬の伊勢海老やケンケン鰹。太平洋を見下ろすインフィニティ露天風呂や本州最南端リゾートで冬の寒さを忘れる贅沢な厳選名宿5選と旅の極意を徹底紹介。",
    images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export const dynamic = 'force-static';

export default function WakayamaKushimotoWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【11・12・1月和歌山】本州最南端「潮岬」冬の太平洋初日の出と朝焼け「橋杭岩」絶景！発祥の地「近大マグロ」会席＆串本温泉リゾート名宿5選",
    "description": "黒潮が洗う本州最南端の温暖な楽園・和歌山県串本の11〜1月冬紀行。紺碧の太平洋が弧を描く「潮岬」から望む元旦初日の出、国の天然記念物「橋杭岩」が朝焼けの茜色に染まる荘厳な奇岩パノラマ。世界初の完全養殖を成し遂げた発祥の地で味わう極上「近大マグロ（クロマグロ）」のトロと赤身、冬の伊勢海老やケンケン鰹。太平洋を見下ろすインフィニティ露天風呂や本州最南端リゾートで冬の寒さを忘れる贅沢な厳選名宿5選と旅の極意を徹底紹介。",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80",
    "datePublished": "2026-10-05T18:00:00+09:00",
    "dateModified": "2026-10-05T18:00:00+09:00",
    "author": {
      "@type": "Organization",
      "name": "旅宿クラウド 編集部",
      "url": "https://croud-travel.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "旅宿クラウド",
      "logo": {
        "@type": "ImageObject",
        "url": "https://croud-travel.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://croud-travel.com/winter-wakayama-kushimoto-shionomisaki-sunrise-hashiguiiwa-kindai-maguro-stay"
    }
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "ホーム",
        "item": "https://croud-travel.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "特集一覧",
        "item": "https://croud-travel.com/features"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "和歌山・串本＆本州最南端 冬特集",
        "item": "https://croud-travel.com/winter-wakayama-kushimoto-shionomisaki-sunrise-hashiguiiwa-kindai-maguro-stay"
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "冬（11・12・1月）の本州最南端「潮岬（しおのみさき）」初日の出と気候の特徴は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "和歌山県串本町に位置する潮岬は、北緯33度26分に位置する本州最南端の岬です。黒潮が接岸するため冬でも平均気温が10度前後と極めて温暖で、真冬でも雪が降ることは極めて稀です。潮岬望楼の芝（ぼうろうのしば）からは、地球の丸みを実感できる水平線270度以上の大パノラマが広がり、元旦には本州で最も早い部類の感動的な初日の出を拝むことができます。海風は強いため、風を通さない防風アウターやマフラーの持参が推奨されます。"
        }
      },
      {
        "@type": "Question",
        "name": "国の名勝・天然記念物「橋杭岩（はしぐいいわ）」の冬の朝焼け絶景と見どころは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "橋杭岩は吉野熊野国立公園に属し、串本から大島に向かって約850mにわたり大小約40個の巨岩が一直線に海上に立ち並ぶ奇岩群です。弘法大師空海と天邪鬼が一晩で大島まで橋を架けようと競い合った伝説が残ります。特に冬至から1月にかけての早朝は、岩の間から昇る太陽と朝焼けのグラデーションが海面を黄金色や茜色に染め上げ、日本百景・日本の朝日百選にも選ばれた圧巻の絶景を見せてくれます。干潮時には岩の根元近くまで歩いて散策することも可能です。"
        }
      },
      {
        "@type": "Question",
        "name": "串本が発祥の地である「近大マグロ（完全養殖クロマグロ）」の魅力と味覚は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "近畿大学水産研究所大島実験場（串本町）は、1970年から32年の歳月をかけて2002年に世界で初めてクロマグロの「完全養殖（人工孵化から親魚まで育て、その親から次の世代を卵から育てる）」に成功した世界的な聖地です。串本の清浄な海水と黒潮の激しい潮流で徹底した品質管理のもと育てられた近大マグロは、天然物と見紛うばかりの極上の肉質を誇ります。冬は大トロ・中トロの甘やかな脂が最も乗り、赤身の芳醇な旨味ときめ細やかな舌触りが絶品です。"
        }
      },
      {
        "@type": "Question",
        "name": "冬の串本温泉の泉質と周辺の冬の見どころは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "串本温泉はナトリウム・カルシウム-塩化物泉で、黒潮の海の恵みを含んだ塩分濃度の高い温泉です。入浴後は肌に塩分の皮膜が形成されて熱を逃がさないため、湯冷めしにくく筋肉疲労や冷え性に優れた効能を持ちます。周辺には本州最南端の白亜の灯台「潮岬灯台」、日本初の海中公園「串本海中公園」、トルコ軍艦エルトゥールル号遭難慰霊碑がある紀伊大島など、冬の澄んだ青空の下で巡りたい歴史と自然の名所が点在しています。"
        }
      },
      {
        "@type": "Question",
        "name": "大阪・名古屋・東京から串本への冬のアクセス方法は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "関西方面からは新大阪駅・天王寺駅からJR特急「くろしお」で乗り換えなし約3時間〜3時間30分でJR串本駅に到着します。車の場合は阪和自動車道・紀勢自動車道を利用し、すさみ南ICから国道42号を経由して約30分です。中京方面からは紀勢本線特急「南紀」または紀勢自動車道経由でアクセス可能。東京からは南紀白浜空港まで飛行機で約70分、空港からレンタカーや特急で約1時間の快適なアクセスルートもあります。路面凍結の心配が極めて少ない安心の冬ドライブコースです。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "メルキュール和歌山串本リゾート＆スパ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1537/1537.jpg",
              rating: 4.25,
              reviews: 3939,
              price: "¥4,586〜",
              access: "南紀白浜よりお車で約60分。那智勝浦からお車で約40分。JR串本駅からお車で約5分。無料送迎バス有",
              special: "本州最南端の地でオールインクルーシブステイ！幻想的な朝日・夕日を満喫できるオールインクルーシブホテル",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1537%2F1537.html",
              story: "本州最南端の町を見下ろす高台に建ち、太平洋の雄大な大海原と国の名勝「橋杭岩」を一望する絶景リゾート「メルキュール和歌山串本リゾート＆スパ」。館内は洗練されたフレンチモダンと南紀のエッセンスが融合し、宿泊料金にラウンジでのドリンクや夕朝食ビュッフェが含まれるオールインクルーシブステイを採用。冬の澄み切った朝には、露天風呂から水平線から昇る神々しい日の出を眺めることができます。夕食ビュッフェでは紀州の海の幸や郷土料理、近大マグロをはじめとする多彩な美食が並び、贅沢な冬の寛ぎを満喫できます。",
              roomTip: "オーシャンビュースーペリアルーム。大きな窓から太平洋の青いパノラマと、朝焼けに浮かび上がる橋杭岩の奇岩群を贅沢に独り占め。",
              gourmetTip: "「オールインクルーシブ・ビュッフェ」。紀州の海の幸、黒潮が育んだ魚介の握り寿司や創作ローカルディッシュ、厳選ワインのペアリング。",
              highlights: [
                "高台から見下ろす太平洋と橋杭岩のパノラマ・ドリンクや食事全て込みのオールインクルーシブ" ,
                "冬の水平線から昇る朝日を露天風呂から望む贅沢・地元食材を活かした極上フレンチビュッフェ" ,
                "太平洋を望む展望サウナ＆温泉ラウンジ・カップルや記念日ステイにも選ばれる優美な空間"
              ]
            },
            {
              id: 2,
              name: "大江戸温泉物語　南紀串本",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/166123/166123.jpg",
              rating: 3.84,
              reviews: 1643,
              price: "¥10,800〜",
              access: "紀勢本線　串本駅よりお車にて約５分　シャトルバスあり(事前予約制)",
              special: "気軽に何度でもお財布を気にせず楽しむオールインクルーシブ温泉宿 2/28迄の宿泊予定※延長の可能性有",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F166123%2F166123.html",
              story: "串本湾の波打ち際に佇み、全客室および露天風呂から太平洋と名勝・橋杭岩を望む絶景温泉宿「大江戸温泉物語 南紀串本」。開放感あふれる露天風呂は弱アルカリ性の串本温泉で、冬の冷たい海風を感じながら手足を伸ばして芯から温まることができます。夕食バイキングでは、南紀名物のマグロ料理やお造り、揚げたて天ぷら、季節の温かい鍋料理がずらりと並ぶ豪華な品揃え。漫画コーナーや無料マッサージチェアなど湯上がりサービスも充実し、家族連れからカップル、気軽な冬の一人旅まで圧倒的な支持を集めています。",
              roomTip: "海側和室または和洋室。朝の目覚めとともに窓一面に広がる穏やかな串本湾と、朝日に照らされる橋杭岩の絶景が迎えてくれます。",
              gourmetTip: "「南紀の味覚バイキング」。新鮮なマグロの解体ショーや舟盛り、冬の海鮮鍋など、黒潮の恵みを心ゆくまで味わう贅沢ビュッフェ。",
              highlights: [
                "串本湾を一望する絶景温泉露天風呂・マグロづくしと季節の海鮮夕食バイキング" ,
                "全室オーシャンビュー・冬の冷たい浜風を忘れる弱アルカリ性天然温泉の保温効果" ,
                "漫画コーナーや無料マッサージチェア・ファミリーやグループにも人気の海辺の温泉宿"
              ]
            },
            {
              id: 3,
              name: "フェアフィールド・バイ・マリオット・和歌山串本",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/182142/182142.jpg",
              rating: 4.58,
              reviews: 181,
              price: "¥5,899〜",
              access: "すさみ南ICより車で約37分、南紀白浜空港直通バスあり（空港から約75分）、JR「串本駅」から車で約5分。",
              special: "和歌山の自然や食を巡る旅の拠点に。洗練された心地よい空間で、ふっと肩の力が抜ける穏やかな滞在を。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182142%2F182142.html",
              story: "国の天然記念物「橋杭岩」の目の前に位置する道の駅「くしもと橋杭岩」に隣接し、マリオット基準の快適性と機能美を誇る「フェアフィールド・バイ・マリオット・和歌山串本」。スタイリッシュで無駄のない客室には、シモンズ製特注ベッドと心地よいレインシャワーを完備。ホテルのロビーや客室から徒歩数分で橋杭岩の海岸へ出られるため、冬の早朝、朝焼けと奇岩が織りなす神秘的な絶景撮影や散策の拠点としてこれ以上ないロケーションを誇ります。地域の飲食店で近大マグロや紀州割烹を自由に味わうスマートな旅に最適です。",
              roomTip: "オーシャンビューキングまたはツイン。窓の向こうに整然と並ぶ橋杭岩の巨岩群が広がり、夜の月明かりに照らされる海面も幻想的。",
              gourmetTip: "「朝食ボックス＆近隣名店ディナー」。道の駅や地元ベーカリーの朝食ボックス、夜は串本駅前の名店で活造りや近大マグロを堪能。",
              highlights: [
                "天然記念物「橋杭岩」の目の前・早朝の朝焼け撮影や海岸散策に最高のロケーション" ,
                "シモンズ製特注ベッドとレインシャワー完備・洗練されたマリオット品質のプライベートステイ" ,
                "道の駅くしもと橋杭岩隣接・地域の特産品やお土産選び、地元の名店での食事も軽快"
              ]
            },
            {
              id: 4,
              name: "本州最南端　暮らすように泊まる古民家　ＮＯＩＥ（旧：ＮＩＰＰＯＮＩＡ　串本熊野海道）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/183467/183467.jpg",
              rating: 4.29,
              reviews: 16,
              price: "¥4,950〜",
              access: "ＪＲ　串本駅より徒歩にて約１５分｜南紀白浜空港よりお車にて約６０分",
              special: "＜街全体をホテルに＞ 本州最南端の海まち串本に点在する趣異なる古民家を客室としてご利用いただきます。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183467%2F183467.html",
              story: "本州最南端の港町・串本の歴史ある街並みに溶け込み、築100年を超える登録有形文化財等の古民家を再生した分散型ブティックホテル「本州最南端 暮らすように泊まる古民家 ＮＯＩＥ（旧：ＮＩＰＰＯＮＩＡ 串本熊野海道）」。かつて熊野街道の要衝として栄えた往時の梁や柱、土壁の温もりをそのままに、現代の上質な家具や快適な水回りを導入。冬の静かな夜、潮騒の音と木々の香りに包まれながら、時間を忘れて読書や語らいに浸ることができます。夕食には串本港の獲れたて鮮魚や熊野牛を味わう特別なローカルガストロノミーが用意されます。",
              roomTip: "一棟貸し切りまたはスイート客室。日本家屋の伝統美とモダンデザインが調和した空間で、まるで別荘に暮らすようなプライベートな冬滞在。",
              gourmetTip: "「串本テロワール会席」。近大マグロの極上部位や熊野牛のロースト、冬の地魚を和歌山のクラフト地酒とともに味わう至高の晩餐。",
              highlights: [
                "築100年超の登録有形文化財を再生・暮らすように泊まる上質な分散型古民家リゾート" ,
                "熊野牛や近大マグロのテロワール会席・歴史ある港町の静寂に包まれる特別な冬の隠れ家" ,
                "一棟貸切スタイルで叶える完全なプライベート空間・歴史文化を愛する大人の冬旅に最適"
              ]
            },
            {
              id: 5,
              name: "洋風民宿ベイサイドイン串本館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/136150/136150.jpg",
              rating: 3.56,
              reviews: 116,
              price: "¥3,500〜",
              access: "JR串本駅から約2キロ　徒歩約20分・車約5分",
              special: "ベイサイドイン串本館は低価格で快適な宿泊をご提供を目指す洋風民宿です。観光・ビジネスにお勧めです。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F136150%2F136150.html",
              story: "串本港のほど近く、気さくで温かいおもてなしと海鮮の鮮度でダイバーや釣り人、リピーターに愛され続ける「洋風民宿ベイサイドイン串本館」。アットホームな館内は清潔に整えられ、一人旅からグループまで肩肘張らずに寛げる居心地の良さが魅力です。宿の最大の自慢は、串本港で揚がったばかりの地魚を惜しみなく振る舞う手作り夕食。脂ののった本マグロや冬のモチ鰹、地魚の煮付けなど、ボリューム満点の海の幸が並び、コストパフォーマンスの高さは串本随一。潮岬への初日の出ドライブの拠点としても便利です。",
              roomTip: "洋室ツインまたは和室。シンプルながら清潔で居心地がよく、冬の海風を感じながら静かに旅の夜を過ごすことができます。",
              gourmetTip: "「港町の手作り海鮮夕食」。冬の串本で揚がった旬のマグロ刺身や白身魚の煮付け、自家製のお味噌汁が旅人の胃袋を温かく満たします。",
              highlights: [
                "串本港の獲れたて地魚手作り夕食・アットホームで心温まるおもてなしと抜群のコスパ" ,
                "潮岬初日の出ドライブの拠点に最適・ダイバーや釣り人にも愛される清潔で機能的な客室" ,
                "新鮮な本マグロの刺身や郷土の煮魚・地元の温かさに触れる本州最南端の素朴な名宿"
              ]
            }
  ];

  const faqsData = [
    {
      q: "冬（11・12・1月）の本州最南端「潮岬（しおのみさき）」初日の出と気候の特徴は？",
      a: "和歌山県串本町に位置する潮岬は、北緯33度26分に位置する本州最南端の岬です。黒潮が接岸するため冬でも平均気温が10度前後と極めて温暖で、真冬でも雪が降ることは極めて稀です。潮岬望楼の芝（ぼうろうのしば）からは、地球の丸みを実感できる水平線270度以上の大パノラマが広がり、元旦には本州で最も早い部類の感動的な初日の出を拝むことができます。海風は強いため、風を通さない防風アウターやマフラーの持参が推奨されます。"
    },
    {
      q: "国の名勝・天然記念物「橋杭岩（はしぐいいわ）」の冬の朝焼け絶景と見どころは？",
      a: "橋杭岩は吉野熊野国立公園に属し、串本から大島に向かって約850mにわたり大小約40個の巨岩が一直線に海上に立ち並ぶ奇岩群です。弘法大師空海と天邪鬼が一晩で大島まで橋を架けようと競い合った伝説が残ります。特に冬至から1月にかけての早朝は、岩の間から昇る太陽と朝焼けのグラデーションが海面を黄金色や茜色に染め上げ、日本百景・日本の朝日百選にも選ばれた圧巻の絶景を見せてくれます。干潮時には岩の根元近くまで歩いて散策することも可能です。"
    },
    {
      q: "串本が発祥の地である「近大マグロ（完全養殖クロマグロ）」の魅力と味覚は？",
      a: "近畿大学水産研究所大島実験場（串本町）は、1970年から32年の歳月をかけて2002年に世界で初めてクロマグロの「完全養殖（人工孵化から親魚まで育て、その親から次の世代を卵から育てる）」に成功した世界的な聖地です。串本の清浄な海水と黒潮の激しい潮流で徹底した品質管理のもと育てられた近大マグロは、天然物と見紛うばかりの極上の肉質を誇ります。冬は大トロ・中トロの甘やかな脂が最も乗り、赤身の芳醇な旨味ときめ細やかな舌触りが絶品です。"
    },
    {
      q: "冬の串本温泉の泉質と周辺の冬の見どころは？",
      a: "串本温泉はナトリウム・カルシウム-塩化物泉で、黒潮の海の恵みを含んだ塩分濃度の高い温泉です。入浴後は肌に塩分の皮膜が形成されて熱を逃がさないため、湯冷めしにくく筋肉疲労や冷え性に優れた効能を持ちます。周辺には本州最南端の白亜の灯台「潮岬灯台」、日本初の海中公園「串本海中公園」、トルコ軍艦エルトゥールル号遭難慰霊碑がある紀伊大島など、冬の澄んだ青空の下で巡りたい歴史と自然の名所が点在しています。"
    },
    {
      q: "大阪・名古屋・東京から串本への冬のアクセス方法は？",
      a: "関西方面からは新大阪駅・天王寺駅からJR特急「くろしお」で乗り換えなし約3時間〜3時間30分でJR串本駅に到着します。車の場合は阪和自動車道・紀勢自動車道を利用し、すさみ南ICから国道42号を経由して約30分です。中京方面からは紀勢本線特急「南紀」または紀勢自動車道経由でアクセス可能。東京からは南紀白浜空港まで飛行機で約70分、空港からレンタカーや特急で約1時間の快適なアクセスルートもあります。路面凍結の心配が極めて少ない安心の冬ドライブコースです。"
    }
  ];

  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-b from-cyan-950 via-slate-900 to-slate-800 text-white py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-cyan-400 text-xs md:text-sm font-semibold tracking-wider uppercase mb-3">
            <Sunrise className="w-4 h-4 text-cyan-300" />
            <span>近畿・和歌山 紀南・黒潮路 冬の特別紀行（11月・12月・1月）</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6 font-journal-serif">
            本州最南端「潮岬」冬の太平洋初日の出と朝焼け「橋杭岩」絶景<br className="hidden md:inline" />
            発祥の地「近大マグロ」会席＆串本温泉リゾート名宿5選
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mb-6">
            本州で最も南に突き出し、激流・黒潮が直撃する温暖な海辺の町・和歌山県串本。北緯33度26分の潮岬から望む元旦の初日の出は、遮るもののない大海原の水平線から昇り、地球の丸みを実感させる神々しいパノラマを描き出します。弘法大師伝説が息づく国の名勝「橋杭岩」が朝焼けの茜色に染まる瞬間は、息をのむ冬の奇跡。そして世界初の完全養殖を成し遂げた聖地で味わう脂ののった「近大マグロ（クロマグロ）」の極上会席と、保温効果抜群の串本温泉。真冬の寒さを忘れさせる黒潮の暖かさに抱かれた、至福の冬旅へご案内します。
          </p>

          <div className="flex flex-wrap gap-3 text-xs md:text-sm text-slate-200">
            <span className="bg-cyan-900/60 border border-cyan-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Sunrise className="w-4 h-4 text-cyan-400" /> 潮岬（本州最南端・太平洋初日の出）
            </span>
            <span className="bg-cyan-900/60 border border-cyan-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Waves className="w-4 h-4 text-cyan-400" /> 橋杭岩（国の天然記念物・朝焼け奇岩パノラマ）
            </span>
            <span className="bg-cyan-900/60 border border-cyan-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Utensils className="w-4 h-4 text-cyan-400" /> 近大マグロ（完全養殖発祥地）＆串本温泉露天
            </span>
          </div>
        </div>
      </header>

      {/* Summary Box */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-cyan-600" />
            11・12・1月の串本・潮岬 冬旅ハイライト
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-600">
            <div className="space-y-2 border-l-2 border-cyan-500 pl-4">
              <h3 className="font-bold text-slate-900">本州最南端の初日の出</h3>
              <p className="text-xs md:text-sm leading-relaxed">
                潮岬望楼の芝から望む大海原。真冬でも平均気温10度前後の温暖な気候の中、水平線から昇る元旦の朝日を拝む感動。雪の心配がほとんどない快適な冬のドライブ旅が叶います。
              </p>
            </div>
            <div className="space-y-2 border-l-2 border-cyan-500 pl-4">
              <h3 className="font-bold text-slate-900">朝焼けに染まる名勝「橋杭岩」</h3>
              <p className="text-xs md:text-sm leading-relaxed">
                約850mにわたり海上に整然と並ぶ大小40個の巨岩。冬の澄んだ空気の中、日の出直前の群青から茜色、黄金色へと移り変わる空と海面のグラデーションは一生忘れられない絶景です。
              </p>
            </div>
            <div className="space-y-2 border-l-2 border-cyan-500 pl-4">
              <h3 className="font-bold text-slate-900">近大マグロと串本温泉の温もり</h3>
              <p className="text-xs md:text-sm leading-relaxed">
                完全養殖発祥の地・串本だからこそ味わえる極上の近大マグロ。大トロのとろける甘みと赤身の深み、冬の伊勢海老やケンケン鰹に舌鼓。塩分を豊富に含み湯冷めしない串本温泉で至福の寛ぎを。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">

        {/* Section 1: Deep Regional Culture & Geography */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-cyan-100 text-cyan-800 rounded-xl">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest block">GEOGRAPHY & OCEAN HERITAGE</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                黒潮が創り出した大自然の造形美：本州最南端・潮岬と神話が宿る橋杭岩
              </h2>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm md:text-base space-y-4">
            <p>
              紀伊半島の最南端、太平洋へ鋭く突き出した串本町は、北緯33度26分に位置する本州最南端の岬町です。南からは日本列島を暖める巨大な海流「黒潮（日本海流）」が本州で最も陸地に接近して激しくぶつかり、沖合には世界最北限のテーブルサンゴ群落が広がるなど、冬でも雪が降ることは極めて稀で、亜熱帯性の植物が自生する温暖な気候に恵まれています。
            </p>
            <p>
              その象徴である「潮岬」には、約3万坪に及ぶ広大な芝生広場「望楼の芝」が広がり、目の前には視界270度以上にわたって遮るもののない太平洋の大海原が展開します。かつて海軍の物見櫓が置かれたこの地は、現在では本州随一の初日の出スポットとして親しまれ、元旦の朝には紺碧の水平線の彼方から真っ赤な太陽が昇り、新年の光が大海原を黄金色に染め上げていく圧倒的な絶景を見せてくれます。岬の高台に立つ白亜の「潮岬灯台」は、明治6年に英国人技師リチャード・ヘンリー・ブラントンによって設計された日本最古級の石造り灯台で、国の登録有形文化財として今も航行する船の安全を見守り続けています。
            </p>
            <p>
              一方、串本港の北側に位置する「橋杭岩」は、国の名勝および天然記念物に指定された奇岩景勝地です。約850mにわたって沖合の紀伊大島に向かい、規則正しく直線上に約40個の巨岩が屹立する景観は、マグマの貫入岩層が海波によって侵食されて形成された地質学的奇跡です。伝承では、弘法大師空海が天邪鬼（あまのじゃく）と競い合い、大島まで一晩で橋を架けようとして杭を立てたものの、朝が来たと騙されたために杭だけが残されたと伝えられています。特に冬の朝は太陽が南寄りから昇るため、奇岩のシルエットと朝焼けのコントラストが劇的に際立ち、全国の写真愛好家を魅了してやみません。
            </p>
          </div>
        </section>

        {/* Section 2: Winter Food & Onsen */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-cyan-100 text-cyan-800 rounded-xl">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest block">GOURMET & THERMAL SPRINGS</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                世界を驚かせた完全養殖の結晶「近大マグロ」と冬の黒潮海鮮、名湯串本温泉
              </h2>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm md:text-base space-y-4">
            <p>
              串本を訪れる最大の食のハイライトは、世界で初めてクロマグロの完全養殖に成功した「近大マグロ」です。近畿大学水産研究所大島実験場が32年の歳月をかけて2002年に成し遂げたこの技術は、世界の水産業界に革命をもたらしました。黒潮の激しい潮流が直接流れ込む串本の外海生簀（いけす）で、徹底した水質と餌の管理のもと育てられたクロマグロは、運動量が豊富で身が引き締まり、冬になると驚くほどきめ細やかな脂を蓄えます。大トロ・中トロのとろけるような甘みと、天然物をも凌駕する澄んだ赤身の旨味は、串本の宿や名店でしか味わえない格別の贅沢です。
            </p>
            <p>
              さらに冬の南紀串本は、黒潮がもたらす多彩な海鮮の宝庫です。11月から身が太る紀州の「伊勢海老」、一本釣りで水揚げ後すぐに活け締めされるモチモチとした食感の「ケンケン鰹」、冬の高級魚クエ（九絵）鍋、さらには串本近海で獲れる新鮮なアオリイカやサザエなど、海辺の町ならではの豪快で鮮烈な味わいが食卓を彩ります。
            </p>
            <p>
              冬の散策で海風を受けた身体を優しく癒やすのが「串本温泉」です。弱アルカリ性のナトリウム・カルシウム-塩化物温泉は、海水のミネラルを豊富に含み、湯上がりの肌に薄い塩のベールをまとわせるため、湯冷めしにくくいつまでもポカポカとした温もりが持続します。太平洋や橋杭岩を望む露天風呂に浸かりながら、遠くを行き交う船の灯りや冬の満天の星空を眺める時間は、日常のストレスを完全に洗い流してくれる至福のひとときです。
            </p>
          </div>
        </section>

        {/* Section 3: Verified 5 Hotels */}
        <section className="space-y-8">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-100 text-cyan-900 rounded-full text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
              HOTEL SELECTION BY RAKUTEN API
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 font-journal-serif">
              本州最南端初日の出と近大マグロを満喫する厳選名宿5選
            </h2>
            <p className="text-slate-600 text-xs md:text-sm max-w-2xl mx-auto">
              楽天トラベルAPIより最新の空室状況・宿泊評価・公式写真を取得。潮岬や橋杭岩へのアクセス、絶景露天風呂、極上マグロ料理に秀でた屈指の宿泊施設を厳選しました。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {hotelsData.map((hotel) => (
              <div 
                key={hotel.id} 
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden hover:shadow-md transition duration-300 flex flex-col md:flex-row"
              >
                <div className="md:w-5/12 relative aspect-[4/3] md:aspect-auto">
                  <img 
                    src={hotel.img} 
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-md">
                    第{hotel.id}位
                  </div>
                </div>

                <div className="md:w-7/12 p-6 md:p-8 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold text-cyan-700 bg-cyan-50 px-2.5 py-0.5 rounded border border-cyan-200">
                        {hotel.access}
                      </span>
                      <div className="flex items-center gap-1 text-cyan-600 text-sm font-black">
                        <Star className="w-4 h-4 fill-cyan-500 text-cyan-500" />
                        <span>{hotel.rating}</span>
                        <span className="text-slate-400 text-xs font-normal">({hotel.reviews}件)</span>
                      </div>
                    </div>

                    <h3 className="text-lg md:text-xl font-black text-slate-900 leading-snug mb-2 font-journal-serif">
                      {hotel.name}
                    </h3>
                    <p className="text-xs text-slate-500 mb-3 line-clamp-2">
                      {hotel.special}
                    </p>

                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-4">
                      {hotel.story}
                    </p>

                    <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100 space-y-2 mb-4 text-xs">
                      <div>
                        <strong className="text-cyan-900 font-bold">客室のこだわり：</strong>
                        <span className="text-slate-600 ml-1">{hotel.roomTip}</span>
                      </div>
                      <div>
                        <strong className="text-cyan-900 font-bold">美食の極意：</strong>
                        <span className="text-slate-600 ml-1">{hotel.gourmetTip}</span>
                      </div>
                    </div>

                    <ul className="space-y-1.5 mb-4 text-xs text-slate-600">
                      {hotel.highlights.map((hl, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <span className="text-xs text-slate-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-base md:text-lg font-black text-cyan-700">{hotel.price}</span>
                    </div>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white font-bold text-xs md:text-sm rounded-xl shadow-sm transition"
                    >
                      <span>楽天トラベルでプランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: 2 Days 1 Night Model Course */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-cyan-100 text-cyan-800 rounded-xl">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest block">SUGGESTED ITINERARY</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                1泊2日 潮岬初日の出＆橋杭岩朝焼け・近大マグロ堪能モデルコース
              </h2>
            </div>
          </div>

          <div className="space-y-6 text-xs md:text-sm">
            {/* Day 1 */}
            <div className="border-l-2 border-cyan-500 pl-4 space-y-3">
              <h3 className="font-black text-slate-900 text-base flex items-center gap-2">
                <span className="bg-cyan-600 text-white px-2 py-0.5 rounded text-xs">1日目</span>
                南紀串本へ到着、天然記念物・橋杭岩散策と近大マグロランチ、絶景温泉
              </h3>
              <p className="text-slate-600 leading-relaxed">
                <strong>11:30 JR特急「くろしお」にてJR串本駅に到着（または南紀白浜空港より移動）</strong><br />
                駅前レンタカーを借りて串本市街へ。まずは串本港近くの名店で、世界初の完全養殖「近大マグロ」の海鮮丼や握り寿司を堪能。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>13:00 国の名勝「橋杭岩」へ、干潮時の巨岩群を間近に散策</strong><br />
                道の駅「くしもと橋杭岩」に立ち寄り、約850mにわたり海に並ぶ奇岩群を鑑賞。干潮時であれば岩のすぐそばまで歩いて自然の造形美を体感。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>15:00 串本大橋を渡り「紀伊大島」へドライブ、日米修好記念館やトルコ軍艦慰霊碑見学</strong><br />
                ループ橋が美しい串本大橋を渡り紀伊大島へ。エルトゥールル号遭難の歴史に触れ、樫野埼灯台からの紺碧の太平洋パノラマを満喫。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>16:30 串本温泉の宿にチェックイン、太平洋を望む露天風呂でリフレッシュ</strong><br />
                夕暮れ時の太平洋を眺めながら塩化物泉の温もりを堪能。夕食には近大マグロや紀州伊勢海老、熊野牛を味わい、波の音を聴きながら静かな夜を過ごす。
              </p>
            </div>

            {/* Day 2 */}
            <div className="border-l-2 border-emerald-500 pl-4 space-y-3">
              <h3 className="font-black text-slate-900 text-base flex items-center gap-2">
                <span className="bg-emerald-600 text-white px-2 py-0.5 rounded text-xs">2日目</span>
                本州最南端「潮岬」の水平線初日の出と潮岬灯台、南紀白浜・那智勝浦へ周遊
              </h3>
              <p className="text-slate-600 leading-relaxed">
                <strong>06:30 本州最南端「潮岬望楼の芝」へ、感動の太平洋初日の出を拝む</strong><br />
                冬の澄み渡る空気の中、視界270度の水平線から昇る太陽を拝する。新年の幸福を祈り、本州最南端到達の証明書を手に入れる。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>08:30 宿へ戻り地産朝食を味わいチェックアウト、潮岬灯台を見学</strong><br />
                白亜の潮岬灯台を参観し、螺旋階段を登って最上部から雄大な太平洋の波飛沫を見下ろす。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>11:30 那智勝浦へ足を伸ばし世界遺産「熊野那智大社」初詣＆那智の滝見学</strong><br />
                串本から車で約40分、熊野那智大社で新春の開運祈願。落差133mの名瀑・那智の滝の清冽な飛沫に心洗われる。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>14:30 JR紀伊勝浦駅または白浜駅より特急「くろしお」で帰路へ</strong><br />
                温暖な南紀の黒潮の風と神聖な祈りの余韻に包まれながら、心満たされる冬旅を締めくくる。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-cyan-100 text-cyan-800 rounded-xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest block">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                和歌山・串本＆本州最南端 冬の旅行 よくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, idx) => (
              <div key={idx} className="border border-slate-100 rounded-xl p-4 md:p-5 bg-slate-50/50">
                <h3 className="font-bold text-slate-900 text-sm md:text-base mb-2 flex items-start gap-2">
                  <span className="text-cyan-600 font-black">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Internal Links / Related Winter Guides */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-sky-100 text-sky-800 rounded-xl">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-sky-700 uppercase tracking-widest block">RELATED WINTER FEATURES</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                あわせて読みたい！全国の厳選「冬の初日の出＆絶景温泉・海鮮グルメ特集」
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
            <Link 
              href="/winter-wakayama-nanki-katsuura-onsen-tuna-cave-bath-stay"
              className="p-4 rounded-xl border border-slate-200 hover:border-cyan-400 hover:bg-cyan-50/30 transition block space-y-1"
            >
              <span className="font-bold text-cyan-950 block">【和歌山】南紀勝浦温泉洞窟風呂と生まぐろ・熊野古道名宿</span>
              <span className="text-slate-500 text-xs">大洞窟温泉「忘帰洞」と勝浦港水揚げの生マグロを味わう冬の南紀旅。</span>
            </Link>

            <Link 
              href="/winter-wakayama-nanki-shirahama-kue-hotspring-stay"
              className="p-4 rounded-xl border border-slate-200 hover:border-cyan-400 hover:bg-cyan-50/30 transition block space-y-1"
            >
              <span className="font-bold text-cyan-950 block">【和歌山】南紀白浜温泉と冬の幻の高級魚クエ鍋名宿</span>
              <span className="text-slate-500 text-xs">日本三古湯・白浜温泉の崎の湯露天風呂と白良浜のイルミネーション。</span>
            </Link>

            <Link 
              href="/winter-chiba-choshi-inubosaki-sunrise-kinmedai-hamaguri-stay"
              className="p-4 rounded-xl border border-slate-200 hover:border-cyan-400 hover:bg-cyan-50/30 transition block space-y-1"
            >
              <span className="font-bold text-cyan-950 block">【千葉】犬吠埼の日本一早い初日の出と銚子つりきんめ名宿</span>
              <span className="text-slate-500 text-xs">太平洋を望む関東最東端の日の出絶景と極上脂の寒金目鯛会席。</span>
            </Link>

            <Link 
              href="/winter-mie-toba-onsen-ise-ebi-matoya-oyster-stay"
              className="p-4 rounded-xl border border-slate-200 hover:border-cyan-400 hover:bg-cyan-50/30 transition block space-y-1"
            >
              <span className="font-bold text-cyan-950 block">【三重】鳥羽温泉郷と冬旬伊勢海老・的矢かき名宿</span>
              <span className="text-slate-500 text-xs">志摩半島の豊かな海の幸と伊勢神宮初詣を繋ぐ贅沢な冬のリゾートステイ。</span>
            </Link>
          </div>
        </section>

        {/* Internal Link CTA */}
        <section className="bg-gradient-to-r from-cyan-950 to-slate-900 text-white rounded-2xl p-8 text-center space-y-4">
          <h2 className="text-xl md:text-2xl font-black font-journal-serif">
            冬の日本全国・厳選特集をチェック
          </h2>
          <p className="text-slate-300 text-xs md:text-sm max-w-xl mx-auto">
            11月・12月・1月が旬の温泉郷、新春初詣、冬の味覚、雪景色を特集したオリジナル旅行ガイドを多数公開中。次の旅の目的地を見つけてください。
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link 
              href="/features" 
              className="px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 font-black text-xs md:text-sm rounded-xl shadow transition"
            >
              特集記事一覧を見る
            </Link>
            <Link 
              href="/" 
              className="px-6 py-3 bg-cyan-800 hover:bg-cyan-700 text-white font-black text-xs md:text-sm rounded-xl border border-cyan-600 transition"
            >
              トップページへ戻る
            </Link>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-4 text-center text-xs border-t border-slate-800 mt-16">
        <p>© 2026 旅宿クラウド (croud-travel.com). All rights reserved.</p>
        <p className="mt-2 text-slate-500">掲載の宿泊料金や施設情報は楽天トラベルAPIより取得した参考データです。最新のプラン内容は各宿泊施設ページをご確認ください。</p>
      </footer>
    </article>
  );
}
