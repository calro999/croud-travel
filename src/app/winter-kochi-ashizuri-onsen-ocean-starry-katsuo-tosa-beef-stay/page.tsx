import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Fish, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Snowflake, Sparkle, Map
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月高知・足摺温泉郷の初冬黒潮絶景と満天星空】戻り鰹藁焼きタタキ＆幻の土佐あかうし会席を堪能する名宿5選",
  description: "11月から12月にかけて、四国最南端の足摺岬・足摺温泉郷は、初冬でも黒潮の暖流により温暖な気候に恵まれ、紺碧の太平洋が広がるダイナミックな断崖絶景と、澄み渡る夜空一面に広がる満天の星空・天の川の絶好の観賞シーズンを迎えます。弘法大師ゆかりの千二百年の歴史を誇る「あしずり温泉」は、美肌と保温に優れた名湯。夕食には脂がたっぷりと乗った冬の戻り鰹を豪快な炎で焼き上げる本場藁焼きタタキ、引き締まった身が絶品の清水サバ、赤身の芳醇な旨味が凝縮した幻の和牛「土佐あかうし」を味わう厳選名宿5選を徹底解説します。",
  keywords: '足摺温泉 宿泊, 足摺岬 ホテル, 戻り鰹 藁焼き 高知, 土佐あかうし, 足摺 星空 11月 12月, 足摺国際ホテル, TheMana Village, アシズリテルメ, 足摺サニーサイドホテル, 味彩の宿 南国',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-kochi-ashizuri-onsen-ocean-starry-katsuo-tosa-beef-stay/"
  },
  openGraph: {
    title: "【11・12月高知・足摺温泉郷の初冬黒潮絶景と満天星空】戻り鰹藁焼きタタキ＆幻の土佐あかうし会席を堪能する名宿5選",
    description: "11月から12月にかけて、四国最南端の足摺岬・足摺温泉郷は、初冬でも黒潮の暖流により温暖な気候に恵まれ、紺碧の太平洋が広がるダイナミックな断崖絶景と、澄み渡る夜空一面に広がる満天の星空・天の川の絶好の観賞シーズンを迎えます。弘法大師ゆかりの千二百年の歴史を誇る「あしずり温泉」は、美肌と保温に優れた名湯。夕食には脂がたっぷりと乗った冬の戻り鰹を豪快な炎で焼き上げる本場藁焼きタタキ、引き締まった身が絶品の清水サバ、赤身の芳醇な旨味が凝縮した幻の和牛「土佐あかうし」を味わう厳選名宿5選を徹底解説します。",
    url: 'https://croud-travel.pages.dev/winter-kochi-ashizuri-onsen-ocean-starry-katsuo-tosa-beef-stay',
    siteName: 'クラドトラベル (Croud Travel)',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬の足摺岬と黒潮太平洋絶景露天風呂'
      }
    ]
  }
};

const faqList = [
  {
    "q": "11月・12月の足摺岬で「戻り鰹（もどりかつお）」が絶品と言われる理由は？",
    "a": "春に黒潮に乗って北上した鰹は、三陸や北海道沖で豊富なエサを食べて丸々と太り、秋から初冬にかけて水温の低下とともに南下してきます。これが「戻り鰹（下り鰹）」です。春の初鰹が爽やかな赤身の風味を楽しむのに対し、11月〜12月の戻り鰹は「トロ鰹」とも呼ばれるほど脂がたっぷりと乗り、濃厚でまろやかな旨味が凝縮されています。足摺岬周辺の宿では、注文が入ってから強い火力で一気に焼き上げる本場の「藁焼きタタキ」が振る舞われ、皮目は香ばしくパリッと、中はしっとりレアでジューシーな最高の状態で堪能できます。"
  },
  {
    "q": "11月・12月の足摺岬・足摺温泉郷の気候と気温、おすすめの服装は？",
    "a": "足摺岬は四国の最南端に位置し、年間を通じて温暖な亜熱帯性植物が自生する温暖地域です。11月の平均最高気温は18〜20℃前後、最低気温は10〜12℃前後と、本州の都市部と比べると寒さが非常に緩やかです。12月に入っても日中は14〜16℃近くまで上がり、晴天の日には日差しがぽかぽかと暖かく感じられます。ただし、岬の先端や展望台、夜間の星空観察ツアーでは強い海風が吹くため体感温度が下がります。風を通さないウィンドブレーカーやダウンジャケット、手袋を用意しておくと、快適に夜空観賞や遊歩道散策を楽しめます。"
  },
  {
    "q": "足摺岬の「冬の星空・天の川観賞」が有名な理由は？",
    "a": "足摺岬は四国最南端の突き出た半島であり、南側は一面の太平洋が広がるため、光害（人工の明かり）がほとんど存在しません。さらに11月から12月にかけての初冬は空気が非常に澄み渡り、大気中の水蒸気が減るため、星空の観察条件が年間で最も優れた季節となります。夜になると頭上いっぱいに天の川や冬の大三角、満天の無数の星座がくっきりと浮かび上がり、まるで天然のプラネタリウムの中にいるような感動的な体験ができます。足摺国際ホテルなど一部の宿では毎晩無料のスターウォッチングツアーも開催されています。"
  },
  {
    "q": "足摺温泉の泉質や歴史、効能について教えてください。",
    "a": "足摺温泉の歴史は古く、平安時代の弘仁13年（822年）、弘法大師空海が足摺岬に四国霊場第38番札所「金剛福寺」を開創した際、谷川から湧き出る湯で旅の疲れを癒やしたのが始まりと伝えられています。泉質は微量のラドンを含有する「単純弱放射能冷鉱泉（低張性・弱アルカリ性）」など。無色透明で肌触りがやわらかく、刺激が少ないため子供から高齢者まで安心して入浴できます。放射能泉（ラドン温泉）は「万病の湯」とも呼ばれ、血流の改善、筋肉痛や関節痛の緩和、冷え性の改善、美肌効果など多彩な効能が期待されます。"
  },
  {
    "q": "高知市内や主要空港から足摺岬へのアクセス方法は？",
    "a": "公共交通機関を利用する場合、JR高知駅から特急「あしずり」で土佐くろしお鉄道の中村駅まで約1時間40分、そこから高知西南交通の路線バス（足摺岬行き）に乗り換えて約1時間30分〜1時間40分で足摺岬各ホテルに到着します。車でアクセスする場合は、高知自動車道を利用して四万十町中央ICまで行き、そこから国道56号・321号（足摺サニーロード）を経由して高知市内から約2時間40分〜3時間です。沿道の足摺サニーロードは青い海とヤシの木が続く絶好のドライブコースで、初冬の快適なツーリングやレンタカードライブに最適です。"
  }
];

export default function KochiAshizuriWinterFeature() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-kochi-ashizuri-onsen-ocean-starry-katsuo-tosa-beef-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-kochi-ashizuri-onsen-ocean-starry-katsuo-tosa-beef-stay"
        },
        "headline": "【11・12月高知・足摺温泉郷の初冬黒潮絶景と満天星空】戻り鰹藁焼きタタキ＆幻の土佐あかうし会席を堪能する名宿5選",
        "description": "11月から12月にかけて、四国最南端の足摺岬・足摺温泉郷は、初冬でも黒潮の暖流により温暖な気候に恵まれ、紺碧の太平洋が広がるダイナミックな断崖絶景と、澄み渡る夜空一面に広がる満天の星空・天の川の絶好の観賞シーズンを迎えます。弘法大師ゆかりの千二百年の歴史を誇る「あしずり温泉」は、美肌と保温に優れた名湯。夕食には脂がたっぷりと乗った冬の戻り鰹を豪快な炎で焼き上げる本場藁焼きタタキ、引き締まった身が絶品の清水サバ、赤身の芳醇な旨味が凝縮した幻の和牛「土佐あかうし」を味わう厳選名宿5選を徹底解説します。",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "2026-09-28T13:00:00+09:00",
        "dateModified": "2026-09-28T13:00:00+09:00",
        "publisher": {
          "@type": "Organization",
          "name": "Croud Travel",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.pages.dev/logo.png"
          }
        },
        "author": {
          "@type": "Organization",
          "name": "Croud Travel 四国・黒潮紀行取材班"
        },
        "inLanguage": "ja"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.pages.dev/winter-kochi-ashizuri-onsen-ocean-starry-katsuo-tosa-beef-stay#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "ホーム",
            "item": "https://croud-travel.pages.dev/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "特集一覧",
            "item": "https://croud-travel.pages.dev/features"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "高知・足摺温泉郷 初冬黒潮絶景と戻り鰹の宿",
            "item": "https://croud-travel.pages.dev/winter-kochi-ashizuri-onsen-ocean-starry-katsuo-tosa-beef-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-kochi-ashizuri-onsen-ocean-starry-katsuo-tosa-beef-stay#faq",
        "mainEntity": faqList.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      }
    ]
  };

  const hotels = [
            {
              id: 1,
              name: "あしずり温泉郷　足摺国際ホテル　　",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8329/8329.jpg",
              rating: 4.41,
              reviews: 758,
              price: "¥9,240〜",
              access: "高知自動車道四万十町中央ICより国道56号線経由で140分／土佐くろしお鉄道中村駅よりバス100分、タクシー60分",
              special: "四国最南端、あしずり温泉郷にあって果てしなく広がる真っ青な大空と紺碧の太平洋がお出迎え致します。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8329%2F8329.html",
              story: "足摺岬の突端、太平洋の大パノラマを見下ろす断崖の上に建つ名門リゾート旅館「あしずり温泉郷 足摺国際ホテル」。館内の至る所からコバルトブルーの海原と地球の丸さを実感できる地平線が一望でき、波の轟きと潮風が旅情をかき立てます。自慢の露天風呂では、弘法大師が足摺山を開創した際に湧き出たと伝わる名湯に浸かりながら、初冬の澄んだ海風と波音に包まれる至福の湯浴みが叶います。毎晩開催される「スターウォッチングツアー」は大人気で、周囲に明かりのない四国最南端ならではの息を呑む満天の星空をホテルスタッフの解説とともに楽しめます。夕食は豪快な炎で一気に焼き上げる本場カツオの藁焼きタタキ、清水サバのお造り、土佐あかうしの陶板焼きなど、土佐の山海の美味が咲き乱れます。",
              roomTip: "太平洋一望のオーシャンフロント和洋室。朝陽が水平線から昇る感動のサンライズを、お部屋の大きな窓から遮るものなくゆったり鑑賞。",
              gourmetTip: "「土佐名物・極み藁焼き鰹と土佐あかうし会席」。焼き立て熱々の藁焼きタタキを粗塩とニンニクスライスで。土佐あかうしのジューシーな赤身ステーキも絶品。",
              highlights: [
                "断崖から太平洋を一望する老舗リゾート＆毎晩開催の満天星空スターウォッチング",
                "炎上がる本場藁焼き鰹タタキ＆弘法大師ゆかりの千二百年名湯あしずり温泉",
                "足摺岬灯台や白山洞門への遊歩道散策に抜群の立地＆地球の丸さを体感する地平線"
              ]
            },
            {
              id: 2,
              name: "ＴｈｅＭａｎａ　Ｖｉｌｌａｇｅ（ザマナ　ヴィレッジ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/74616/74616.jpg",
              rating: 4.37,
              reviews: 762,
              price: "¥11,000〜",
              access: "車（四万十町中央ICまたは津島高田ICより）足摺岬方面へ。または、電車とバス「TheMana Village前」へ。",
              special: "ロビー・露天風呂から眼前に広がる水平線と大海原の迫力♪満天の星空★彡と絶景露天は一度体験する価値有！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F74616%2F74616.html",
              story: "四国最南端の広大な国立公園内に位置し、アジア有数のスモールラグジュアリーリゾートとして大改装された話題の極上宿「TheMana Village（ザマナ ヴィレッジ）」。息を呑むような太平洋の断崖絶景を独占するロケーションにあり、洗練されたモダン建築と手付かずの雄大な大自然が見事に調和しています。海にせり出すように造られたインフィニティ露天風呂からは、青い海と空が溶け合う絶景パノラマが広がり、夜には降るような満天の冬星を見上げる極上のリラクゼーションが体験できます。食事は海辺のテラスレストランで楽しむイタリアンまたは厳選和食会席。土佐清水港直送の新鮮な魚介、地元柑橘や幻の土佐あかうしを使った独創的な皿が並びます。",
              roomTip: "プライベートサウナ＆露天風呂付きスイートルーム。雄大な太平洋の水平線を眺めながらの外気浴と温泉浴で、日常を忘れる極上のととのい体験。",
              gourmetTip: "「TheManaディナーコース」。土佐清水港水揚げ鮮魚のアクアパッツァ、土佐あかうしの薪火グリル、四万十栗と土佐ジロー卵のデザート。",
              highlights: [
                "四国最南端のラグジュアリーリゾート＆水平線と溶け合うインフィニティ露天風呂",
                "プライベートサウナ付きスイート＆四万十や土佐清水の厳選食材が彩るイタリアン",
                "都会の喧騒を離れた完全な非日常空間＆太平洋の潮騒に包まれるリトリート"
              ]
            },
            {
              id: 3,
              name: "アシズリテルメ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/193166/193166.jpg",
              rating: 3.80,
              reviews: 124,
              price: "¥6,600〜",
              access: "車（四万十中央ＩＣから約２時間）または公共交通機関（最終連絡はバス）にて足摺岬まで",
              special: "「海・星・サウナ。すべてが満ちる、太平洋を望む極上の休日」",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F193166%2F193166.html",
              story: "足摺半島の丘の上に佇み、白亜の洗練された北欧風デザインが初冬の青空に美しく映えるデザイナーズ温泉ホテル「アシズリテルメ」。全館が自然光あふれる開放的な空間となっており、ドームテントが並ぶグランピング施設や、太平洋と亜熱帯植物の森を見渡す絶景サウナが完備されています。温泉はラドンを豊富に含む天然温泉で、じんわりと体の芯まで温まり旅の疲労を優しく解き放ちます。サウナ後の外気浴デッキからは、初冬の澄み渡る太平洋の水平線と原生林のコントラストが広がり、心地よい潮風が吹き抜けます。食事は高知の豊かな食材を現代的な感性で再構築したモダン会席。戻り鰹のカルパッチョや土佐和牛のローストがテーブルを鮮やかに彩ります。",
              roomTip: "オーシャンビュープレミアムツインまたはグランピングドーム。初冬の澄んだ大気の下、夜空にきらめく無数の星屑と水平線の漁火を静かに眺めるひととき。",
              gourmetTip: "「高知テロワール・冬の特選コース」。藁焼き鰹と土佐清水産鮮魚のコンフィ、土佐あかうしランプ肉のロースト、高知名産文旦のグラニテ。",
              highlights: [
                "白亜の北欧風デザイナーズ建築＆太平洋パノラマ絶景サウナと現代的モダン会席",
                "自然光あふれるグランピング＆天然ラドン温泉で旅の疲れを解き放つ癒やしステイ",
                "海と原生林を見渡す外気浴デッキで最高のととのい＆カップルや女子旅に好評"
              ]
            },
            {
              id: 4,
              name: "あしずり温泉郷　足摺サニーサイドホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/14660/14660.jpg",
              rating: 4.10,
              reviews: 574,
              price: "¥7,000〜",
              access: "中村駅よりバス１００分（足摺岬行き）　タクシー６０分／高知自動車道　四万十町中央ＩＣよりＲ５６、Ｒ３２１経由110分",
              special: "水平線に沈む夕陽が一望出来るレストラン！黒潮の海鮮と土佐のならではの郷土料理をどうぞ♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14660%2F14660.html",
              story: "足摺岬の西海岸、断崖絶壁に寄り添うように建ち、黒潮が打ち寄せる雄大な波しぶきを間近に感じる臨場感あふれる宿「あしずり温泉郷 足摺サニーサイドホテル」。海に面した展望大浴場や露天風呂からは、初冬の夕暮れ時に空と海が燃えるような茜色から紫紺へと移り変わる奇跡のマジックアワーが一望できます。温泉は肌にやさしく馴染むアルカリ性の名湯。湯上がりの肌がしっとりと潤い、冷え性にも高い効果を発揮します。夕食は土佐清水港で水揚げされたばかりの新鮮な魚介類が豪快に並ぶ郷土海鮮会席。脂の乗った戻り鰹のタタキはもちろん、コリコリとした歯ごたえがたまらないブランド鯖「清水サバ」の姿造りや、四万十ポークのしゃぶしゃぶを存分に堪能できます。",
              roomTip: "夕日を一望するサンセットビュー和室。夕暮れ時に水平線へと沈みゆく太陽が海面を黄金色の道のように照らす圧巻のトワイライトを満喫。",
              gourmetTip: "「清水サバと戻り鰹の海鮮会席」。新鮮だからこそ味わえる清水サバの活造り、藁の香ばしさが際立つカツオのタタキ、旬魚の煮付け。",
              highlights: [
                "夕暮れの茜色マジックアワー絶景露天＆豪快な黒潮の波しぶきを望む断崖の宿",
                "新鮮な清水サバの活造りと四万十ポークしゃぶしゃぶ＆アットホームなおもてなし",
                "太平洋に沈みゆく夕日のドラマチックなグラデーション＆コスパ抜群の温泉旅行"
              ]
            },
            {
              id: 5,
              name: "土佐清水　味彩の宿　南国",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/39256/39256.jpg",
              rating: 4.57,
              reviews: 110,
              price: "¥8,800〜",
              access: "中村駅より車で50分/竜串バスセンターより徒歩15秒/四万十町中央ICより約2時間00分",
              special: "鮮魚はもちろん、自家製や地元の野菜を使用したお料理が自慢！ご当地体験や皿鉢料理も楽しめる♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39256%2F39256.html",
              story: "土佐清水の市街地に位置し、「食の宝庫・土佐清水の真髄を味わう」をコンセプトに温かいおもてなしで旅人を迎える割烹旅館「土佐清水 味彩の宿 南国」。宿の最大の誇りは、熟練の料理長が土佐清水港のセリ権を持ち、毎朝市場で直接目利きして仕入れる最高品質の魚介類です。初冬に最も脂が乗り旨味が極まる「清水サバ」をはじめ、クエ、戻り鰹、伊勢海老など、他では味わえない鮮度抜群の海鮮料理が並びます。さらに赤身肉の芳醇な香りとジューシーな旨味が際立つ「幻の和牛・土佐あかうし」のすき焼きやステーキも絶品。館内は清潔感あふれる落ち着いた和の空間で、観光や四国八十八ヶ所巡礼の拠点としても絶大な信頼を集めています。",
              roomTip: "落ち着いたモダン和室。畳の香りに癒やされながら、土佐清水の港町の穏やかな静けさの中でぐっすりと旅の疲れを癒やす快適ステイ。",
              gourmetTip: "「名物・清水サバ姿造りと土佐あかうし極み会席」。透き通るような清水サバの刺身、香ばしい鰹タタキ、土佐あかうしの溶岩焼きステーキの豪華共演。",
              highlights: [
                "土佐清水港セリ権を持つ料理長の極上海鮮会席＆清水サバ姿造りと土佐あかうし",
                "アットホームな割烹旅館の温もり＆四国八十八ヶ所金剛福寺参拝の拠点にも最適",
                "地元漁師からも愛される本物の土佐清水の味覚＆旬の地魚を味わい尽くす贅沢"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Banner */}
      <header className="relative w-full h-[360px] sm:h-[480px] flex items-end justify-center bg-slate-900 text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
          alt="四国最南端・足摺岬の太平洋絶景と露天風呂"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold">
            <Sparkle className="w-4 h-4" />
            11月・12月 四国最南端黒潮＆満天星空特集｜高知・足摺温泉郷
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            初冬の黒潮絶景と満天の星空<br className="hidden sm:inline" />
            戻り鰹藁焼きタタキ＆幻の土佐あかうし会席を堪能する名宿5選
          </h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            四国最南端を洗う黒潮の温暖な風と、光害ゼロの夜空に降り注ぐ天の川。脂の乗った極上戻り鰹の藁焼きタタキと弘法大師ゆかりの千二百年名湯に浸かる、初冬の高知の贅沢旅。
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300 pt-2">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-blue-400" /> 11月〜12月は星空＆戻り鰹の旬</span>
            <span className="flex items-center gap-1"><Waves className="w-4 h-4 text-blue-400" /> 太平洋断崖露天＆弘法大師古湯</span>
            <span className="flex items-center gap-1"><Flame className="w-4 h-4 text-blue-400" /> 豪快炎の藁焼きタタキ＆土佐あかうし</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        
        {/* Section 1: Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-blue-100">
            <div className="p-2.5 rounded-2xl bg-blue-50 text-blue-800">
              <Sun className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-blue-800 uppercase tracking-widest">Southernmost Kuroshio & Stargazing</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                黒潮が包む常春の岬と宇宙の瞬き｜11月・12月に足摺岬を訪れるべき理由
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              四国の南端、太平洋へ向かって鋭く突き出た足摺岬（あしずりみさき）。日本列島が冬の寒さに覆われる11月から12月にかけても、すぐ足元を流れる世界最大級の暖流「黒潮」のおかげで、この地は驚くほど穏やかで温暖な気候に包まれています。断崖にはビロウ樹や椿の常緑樹が生い茂り、展望台に立てば視界270度をコバルトブルーの太平洋がぐるりと取り囲み、水平線が弓なりに湾曲する「地球の丸さ」をダイレクトに体感できます。
            </p>
            <p>
              初冬の足摺岬が旅人を惹きつけてやまないもう一つの大きな魅力が、日本屈指の美しさを誇る「満天の星空」です。南に向かって大きく開けた岬の突端には人工の街明かりがほとんど届かず、大気中の水蒸気が減る初冬は夜空の透明度が極限まで高まります。日没後、海が群青から漆黒へと沈むと、頭上一面に降り注ぐような天の川や冬の大三角、無数の星屑が瞬き、まるで宇宙の真ん中に浮かんでいるかのような息を呑む絶景が広がります。
            </p>
            <p>
              そして美食の観点でも、初冬の高知はまさに黄金期を迎えます。初夏に太平洋を北上し、北の豊かな海でたっぷりと栄養を蓄えて南下してきた「戻り鰹（下り鰹）」は、別名「トロ鰹」とも称されるほど濃厚な脂を蓄えています。客の目の前で燃え盛る藁の炎で一気に焼き上げる本場タタキは、香ばしい燻製香と温かいレアの身、とろける脂の甘みが混然一体となった至高の逸品。さらに、土佐清水港限定のブランド魚「清水サバ」の活造りや、年間数百頭しか出荷されない幻の和牛「土佐あかうし」のジューシーな赤身肉など、高知が誇る食の宝が惜しみなく並びます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-blue-900 text-sm">
                <Flame className="w-4 h-4 text-blue-600" />
                本場豪快藁焼き・極上戻り鰹
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                初冬の南下でトロ鰹と呼ばれる濃厚な脂を蓄えた戻り鰹。燃え盛る藁火で香ばしく焼き上げる本場タタキは絶品。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-blue-900 text-sm">
                <Sparkles className="w-4 h-4 text-blue-600" />
                四国最南端・光害ゼロの星空
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                太平洋へ突き出た足摺岬は人工の明かりが極少。澄み渡る初冬の夜空に降り注ぐ天の川や冬の星座を満喫。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-blue-900 text-sm">
                <Waves className="w-4 h-4 text-blue-600" />
                弘法大師開湯・あしずり温泉
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                平安初期に空海が発見したとされる千二百年の古湯。天然ラドンを含む単純弱放射能泉が疲労と冷えを癒やす。
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Deep Dive Geography & Terroir */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-blue-100">
            <div className="p-2.5 rounded-2xl bg-blue-50 text-blue-800">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-blue-800 uppercase tracking-widest">Kuroshio Marine Terroir & History</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                黒潮が打ち寄せる断崖のジオパークと幻の和牛「土佐あかうし」の秘密
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              足摺岬を含む土佐清水市一帯は、全域が「四国西予ジオパーク」や国立公園に指定されたダイナミックな地球の鼓動を感じられる大地です。花崗岩が太平洋の荒波に削り取られてできた日本最大級の海蝕洞「白山洞門」や、高さ80メートルにも及ぶ断崖絶壁が連なる海岸線は、悠久の自然の営みを肌で感じさせます。沖合を流れる暖流・黒潮は年間を通じて海水温が約20℃前後と極めて温かく、沿岸に独自の亜熱帯植物群落（ビロウ樹・アオノリュウゼツラン等）を育んでいます。
            </p>
            <p>
              この黒潮の激しい潮流にもまれて育つのが、全国の食通を唸らせるブランド魚「清水サバ（ごまさば）」です。土佐清水の立縄漁（一本釣り）で丁寧に釣り上げられ、生きたまま港へ運ばれるため、一般的なサバでは考えられないコリコリとした弾力と上品な甘みを楽しめます。秋から初冬にかけては脂の乗りが最高潮を迎え、活造りやタタキで味わうその旨さは格別です。
            </p>
            <p>
              さらに、高知県内でしかほぼ生産されない希少な和牛「土佐あかうし（褐毛和種高知系）」は、年間わずか数千頭しか出荷されないまさに「幻の和牛」。黒毛和牛のような過剰なサシ（脂）に頼らず、赤身肉そのものにアミノ酸やグルタミン酸といった旨味成分が黒毛和牛の2倍以上も凝縮されています。程よい霜降りと芳醇な香りは、炭火焼きや陶板ステーキで噛み締めるほどにジューシーな肉汁が溢れ出し、重さを感じさせない最高の満足感をもたらします。
            </p>
          </div>
        </section>

        {/* Section 3: Hotel Cards */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-blue-800 uppercase tracking-widest">Selected Ocean View Retreats</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              11月・12月の足摺温泉郷を満喫する厳選名宿5選
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto">
              豪快な藁焼き鰹タタキと幻の土佐あかうし、四国最南端の絶景露天風呂と満天の星空を誇る、楽天トラベル高評価の特選宿をご紹介します。
            </p>
          </div>

          <div className="space-y-8">
            {hotels.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition duration-300 flex flex-col md:flex-row"
              >
                {/* Hotel Image */}
                <div className="relative w-full md:w-2/5 h-64 md:h-auto min-h-[260px] bg-slate-100 flex-shrink-0">
                  <Image
                    src={hotel.img}
                    alt={hotel.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>{hotel.rating}</span>
                    <span className="text-slate-400">({hotel.reviews.toLocaleString()}件)</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-blue-700/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                    第{hotel.id}選
                  </div>
                </div>

                {/* Hotel Content */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow space-y-5">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-blue-800 transition">
                        <a href={hotel.url} target="_blank" rel="noopener noreferrer">
                          {hotel.name}
                        </a>
                      </h3>
                      <div className="text-right">
                        <span className="text-xs text-slate-500 block">参考宿泊料金（2名1室時1名）</span>
                        <span className="text-xl font-extrabold text-blue-800">{hotel.price}</span>
                      </div>
                    </div>

                    <p className="text-xs text-blue-800 font-semibold bg-blue-50 px-3 py-1.5 rounded-xl inline-block">
                      {hotel.special}
                    </p>

                    <p className="text-sm text-slate-700 leading-relaxed pt-1">
                      {hotel.story}
                    </p>

                    {/* Room & Gourmet Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100 space-y-1">
                        <span className="text-xs font-bold text-slate-900 flex items-center gap-1">
                          <Eye className="w-3.5 h-3.5 text-blue-700" /> おすすめ客室・眺望
                        </span>
                        <p className="text-xs text-slate-600 leading-normal">
                          {hotel.roomTip}
                        </p>
                      </div>
                      <div className="bg-amber-50/60 p-3.5 rounded-2xl border border-amber-100/80 space-y-1">
                        <span className="text-xs font-bold text-amber-900 flex items-center gap-1">
                          <Flame className="w-3.5 h-3.5 text-amber-700" /> 冬の特選グルメ
                        </span>
                        <p className="text-xs text-slate-700 leading-normal">
                          {hotel.gourmetTip}
                        </p>
                      </div>
                    </div>

                    {/* Highlights Points */}
                    <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                      {hotel.highlights.map((hl: string, idx: number) => (
                        <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {hotel.access}
                    </span>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow transition duration-200"
                    >
                      <span>空室状況・プラン詳細（楽天トラベル）</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: 1泊2日のおすすめモデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-blue-100">
            <div className="p-2.5 rounded-2xl bg-blue-50 text-blue-800">
              <Map className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-blue-800 uppercase tracking-widest">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                【11月・12月】四国最南端の絶景と美食を満喫する1泊2日モデルコース
              </h2>
            </div>
          </div>
          <div className="space-y-6 text-sm text-slate-700">
            <div className="border-l-2 border-blue-600 pl-4 sm:pl-6 space-y-3">
              <div className="font-bold text-blue-900 text-base flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">1日目</span>
                足摺サニーロードのドライブ・白山洞門散策と満天星空鑑賞
              </div>
              <p className="leading-relaxed text-xs sm:text-sm">
                午前中に高知駅または高知龍馬空港を出発し、レンタカーで高知自動車道を経て西南へ。四万十川の沈下橋を眺めつつ、ヤシの木が続く国道321号「足摺サニーロード」を快適ドライブ。土佐清水市街で名物の清水サバ丼ランチを堪能。午後は足摺岬に到着し、花崗岩のアーチ「白山洞門」や弘法大師ゆかりの金剛福寺を参拝。15時半頃に足摺岬の宿へチェックイン。夕暮れに茜色に染まる太平洋の水平線を露天風呂から眺め、夜は炎上がる本場藁焼き鰹のタタキと土佐あかうしのディナー。食後はホテルのスターウォッチングツアーに参加し、光害ゼロの夜空に降り注ぐ天の川と冬の星座に感動します。
              </p>
            </div>
            <div className="border-l-2 border-blue-600 pl-4 sm:pl-6 space-y-3">
              <div className="font-bold text-blue-900 text-base flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">2日目</span>
                地球の丸さを感じる足摺岬展望台・竜串海岸ジオパーク巡り
              </div>
              <p className="leading-relaxed text-xs sm:text-sm">
                朝、水平線から昇るドラマチックな朝日を眺めながら朝風呂を満喫し、土佐の恵み豊かな朝食をいただきます。10時にチェックアウト後、白亜の足摺岬灯台と展望台へ。視界270度の丸い水平線を実感したら、奇岩が連なる「竜串海岸（たつくしかいがん）」へ移動。グラスボートでサンゴ礁や熱帯魚を観察し、自然が造形した奇岩地帯を散策。海の駅あしずりでお土産に名物宗田節（そうだぶし）や鰹タタキ、地酒を買い求め、午後のドライブで高知市内または空港へと向かいます。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Travel Tips */}
        <section className="bg-gradient-to-br from-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-6 shadow-md">
          <div className="flex items-center gap-3 pb-3 border-b border-blue-800">
            <Compass className="w-6 h-6 text-blue-400" />
            <h2 className="text-xl sm:text-2xl font-bold">
              11月・12月の足摺温泉旅行を満喫する実践ガイド
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="space-y-2 bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/10">
              <h3 className="font-bold text-blue-300 flex items-center gap-1.5">
                <ThermometerSun className="w-4 h-4" /> 気候・星空観察の服装
              </h3>
              <p className="text-slate-200 text-xs leading-relaxed">
                日中は日差しがあり15〜18℃と暖かいですが、夜間の星空観察や岬の展望台では海風が吹くため体感温度が一気に下がります。防風性の高いジャケットやフリース、マフラーを持参すると快適です。
              </p>
            </div>
            <div className="space-y-2 bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/10">
              <h3 className="font-bold text-blue-300 flex items-center gap-1.5">
                <Footprints className="w-4 h-4" /> 白山洞門と金剛福寺散策
              </h3>
              <p className="text-slate-200 text-xs leading-relaxed">
                花崗岩が波の浸食で削られた日本最大級の海蝕洞「白山洞門」や、四国霊場第38番札所の金剛福寺、白亜の足摺岬灯台など見どころ多数。スニーカーなど歩きやすい靴での散策がおすすめです。
              </p>
            </div>
            <div className="space-y-2 bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/10">
              <h3 className="font-bold text-blue-300 flex items-center gap-1.5">
                <Fish className="w-4 h-4" /> 旬魚と土佐あかうしの美味
              </h3>
              <p className="text-slate-200 text-xs leading-relaxed">
                脂の乗った戻り鰹のタタキは塩タタキが本場の味。さらに土佐清水ならではのブランド魚「清水サバ」や、希少な黒毛和牛「土佐あかうし」を味わう特選会席プランの予約がイチオシです。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-blue-100">
            <div className="p-2.5 rounded-2xl bg-blue-50 text-blue-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-blue-800 uppercase tracking-widest">Frequently Asked Questions</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の足摺温泉郷旅行 よくある質問
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2">
                  <span className="text-blue-700 font-extrabold flex-shrink-0">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Related Links / Mesh */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-blue-100">
            <Compass className="w-6 h-6 text-blue-800" />
            <h2 className="text-xl font-bold text-slate-900">
              あわせて読みたい！冬の温泉・美食旅行特集
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link 
              href="/winter-tokushima-naruto-onsen-uzushio-naruto-tai-stay"
              className="group p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/60 border border-slate-100 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-blue-700 bg-blue-100/60 px-2 py-0.5 rounded-full inline-block">徳島・鳴門</span>
              <h4 className="text-xs font-bold text-slate-800 group-hover:text-blue-800 transition line-clamp-2">
                鳴門温泉の初冬鳴門海峡絶景と名物鳴門鯛づくし会席宿
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-2">
                引き締まった鳴門鯛の旨味と渦潮の雄大なパノラマを堪能。
              </p>
            </Link>
            <Link 
              href="/winter-kagawa-kotohira-onsen-konpira-olive-beef-stay"
              className="group p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/60 border border-slate-100 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-blue-700 bg-blue-100/60 px-2 py-0.5 rounded-full inline-block">香川・琴平</span>
              <h4 className="text-xs font-bold text-slate-800 group-hover:text-blue-800 transition line-clamp-2">
                ことひら温泉の初冬こんぴら参拝と極上オリーブ牛会席宿
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-2">
                金刀比羅宮の初冬参拝と讃岐の名湯、オリーブ牛の贅沢ステイ。
              </p>
            </Link>
            <Link 
              href="/winter-ehime-dogo-onsen-taimeshi-heritage-stay"
              className="group p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/60 border border-slate-100 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-blue-700 bg-blue-100/60 px-2 py-0.5 rounded-full inline-block">愛媛・道後</span>
              <h4 className="text-xs font-bold text-slate-800 group-hover:text-blue-800 transition line-clamp-2">
                道後温泉本館全館営業再開と冬の鯛めし・伊予牛会席宿
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-2">
                日本最古の名湯の歴史ロマンと瀬戸内の極上鯛めしに舌鼓。
              </p>
            </Link>
            <Link 
              href="/winter-miyazaki-aoshima-onsen-miyazakigyu-iseebi-resort-stay"
              className="group p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/60 border border-slate-100 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-blue-700 bg-blue-100/60 px-2 py-0.5 rounded-full inline-block">宮崎・青島</span>
              <h4 className="text-xs font-bold text-slate-800 group-hover:text-blue-800 transition line-clamp-2">
                青島温泉の初冬パームビーチ絶景と宮崎牛・伊勢海老宿
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-2">
                南国リゾートの心地よい潮風と極上の宮崎牛を味わう海辺ステイ。
              </p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-kochi-ashizuri-onsen-ocean-starry-katsuo-tosa-beef-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
