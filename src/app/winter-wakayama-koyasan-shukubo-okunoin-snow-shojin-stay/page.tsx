import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Snowflake, Waves, Sun, Flame, Mountain, Building, Coffee, ShoppingBag, ThermometerSun
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月和歌山】世界遺産・高野山の白銀「壇上伽藍＆奥之院」雪景色と宿坊阿字観体験＆冬の滋味精進料理・新春初詣名宿5選",
  description: "11月から1月、標高約800mの山上盆地に位置する真言密教の聖地・世界遺産「高野山」は、厳かな白銀の雪化粧に包まれる静謐な季節を迎えます。弘法大師空海が開創した「壇上伽藍」根本大塔の雪景色、樹齢数百年の杉巨木が立ち並ぶ「奥之院」参道の白銀古道。歴史ある由緒寺院の宿坊に泊まり、心を整える阿字観（瞑想）や早朝の勤行・護摩祈祷を体験。冬の身体に優しく染み渡る胡麻豆腐や高野豆腐をはじめとする伝統の「冬の精進料理」と、新春の初詣。俗世の喧騒を離れ、心身を清める冬の高野山宿坊ステイ5選をお届けします。",
  keywords: '高野山 冬 宿坊, 奥之院 雪景色, 壇上伽藍 根本大塔, 高野山 精進料理 冬, 宿坊 不動院, 一乗院 高野山, 恵光院 阿字観, 高野山 初詣, 11月 12月 1月 和歌山旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-wakayama-koyasan-shukubo-okunoin-snow-shojin-stay/"
  },
  openGraph: {
    title: "【11・12・1月和歌山】世界遺産・高野山の白銀「壇上伽藍＆奥之院」雪景色と宿坊阿字観体験＆冬の滋味精進料理・新春初詣名宿5選",
    description: "11月から1月、標高約800mの山上盆地に位置する真言密教の聖地・世界遺産「高野山」は、厳かな白銀の雪化粧に包まれる静謐な季節を迎えます。弘法大師空海が開創した「壇上伽藍」根本大塔の雪景色、樹齢数百年の杉巨木が立ち並ぶ「奥之院」参道の白銀古道。歴史ある由緒寺院の宿坊に泊まり、心を整える阿字観（瞑想）や早朝の勤行・護摩祈祷を体験。冬の身体に優しく染み渡る胡麻豆腐や高野豆腐をはじめとする伝統の「冬の精進料理」と、新春の初詣。俗世の喧騒を離れ、心身を清める冬の高野山宿坊ステイ5選をお届けします。",
    url: 'https://croud-travel.com/winter-wakayama-koyasan-shukubo-okunoin-snow-shojin-stay',
    siteName: 'クラドトラベル',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: '冬の世界遺産高野山・壇上伽藍と奥之院の雪景色'
      }
    ],
    locale: 'ja_JP',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月和歌山】世界遺産・高野山の白銀「壇上伽藍＆奥之院」雪景色と宿坊阿字観体験＆冬の滋味精進料理・新春初詣名宿5選",
    description: "11月から1月、標高約800mの山上盆地に位置する真言密教の聖地・世界遺産「高野山」は、厳かな白銀の雪化粧に包まれる静謐な季節を迎えます。弘法大師空海が開創した「壇上伽藍」根本大塔の雪景色、樹齢数百年の杉巨木が立ち並ぶ「奥之院」参道の白銀古道。歴史ある由緒寺院の宿坊に泊まり、心を整える阿字観（瞑想）や早朝の勤行・護摩祈祷を体験。冬の身体に優しく染み渡る胡麻豆腐や高野豆腐をはじめとする伝統の「冬の精進料理」と、新春の初詣。俗世の喧騒を離れ、心身を清める冬の高野山宿坊ステイ5選をお届けします。",
    images: ['https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function WakayamaKoyasanShukuboWinterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "【11・12・1月和歌山】世界遺産・高野山の白銀「壇上伽藍＆奥之院」雪景色と宿坊阿字観体験＆冬の滋味精進料理・新春初詣名宿5選",
    description: "11月から1月、標高約800mの山上盆地に位置する真言密教の聖地・世界遺産「高野山」は、厳かな白銀の雪化粧に包まれる静謐な季節を迎えます。弘法大師空海が開創した「壇上伽藍」根本大塔の雪景色、樹齢数百年の杉巨木が立ち並ぶ「奥之院」参道の白銀古道。歴史ある由緒寺院の宿坊に泊まり、心を整える阿字観（瞑想）や早朝の勤行・護摩祈祷を体験。冬の身体に優しく染み渡る胡麻豆腐や高野豆腐をはじめとする伝統の「冬の精進料理」と、新春の初詣。俗世の喧騒を離れ、心身を清める冬の高野山宿坊ステイ5選をお届けします。",
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80',
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
      url: 'https://croud-travel.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://croud-travel.com/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://croud-travel.com/winter-wakayama-koyasan-shukubo-okunoin-snow-shojin-stay'
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
        item: 'https://croud-travel.com/'
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
        name: '高野山＆奥之院 白銀聖地と冬の宿坊精進料理・初詣名宿',
        item: 'https://croud-travel.com/winter-wakayama-koyasan-shukubo-okunoin-snow-shojin-stay'
      }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "冬（11月〜1月）の高野山の気候と積雪状況・服装の注意点は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "高野山は標高約800mの山上に位置するため、平野部（大阪や和歌山市）と比べて気温が約5〜7度低くなります。11月中旬には初雪が降ることがあり、12月〜1月は完全な氷点下となり積雪や路面凍結が発生します。服装はしっかりとした防寒対策が必須で、厚手のダウンコート、機能性インナー、マフラー、手袋、ニット帽を着用してください。また、奥之院参道や寺院境内は石畳が凍結して滑りやすいため、溝の深いスノーブーツや防寒ウォーキングシューズでお越しください。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の「奥之院」と「壇上伽藍」の雪景色の見どころは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "世界文化遺産に登録された高野山の二大聖地。奥之院では、一の橋から御廟へと続く約2kmの参道に樹齢数百年のスギ巨木が約20万基の墓石とともに立ち並び、冬には純白の雪をかぶった神秘的な静寂の世界が広がります。弘法大師空海が今も瞑想を続けているとされる「御廟」前では、冬の澄んだ空気の中に灯籠の光が揺らめき、息を呑む崇高さを感じられます。一方、壇上伽藍では、朱色の「根本大塔」に真っ白な雪が降り積もるコントラストが息を呑む美しさです。"
        }
      },
      {
        '@type': 'Question',
        name: "宿坊寺院での冬の宿泊体験（暖房設備・お風呂・服装）はどのようなものですか？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "「宿坊は冬寒いのではないか」と心配される方も多いですが、現代の多くの宿坊寺院（特に不動院や一乗院など）では全館暖房や床暖房、石油ファンヒーター、ホットカーペットが完備されており、室内は大変暖かく快適に過ごせます。また広々とした大浴場も完備され、冬の冷えた身体をしっかりと温めることができます。ただし、朝の勤行（お勤め）を行う本堂は広く冷え込むため、厚手の靴下やフリース、羽織るものを持参して参列するのが快適に過ごすポイントです。"
        }
      },
      {
        '@type': 'Question',
        name: "宿坊でいただく「冬の精進料理」の特徴と名物は何ですか？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "高野山の精進料理は、肉や魚、五葷（ネギ・ニンニク・ニラなど）を一切使わず、大豆製品、野菜、山菜、海藻を「五味・五色・五法」の原則に則って調理する伝統料理です。冬の精進料理の主役は、白胡麻と吉野葛を丹念に練り上げた滑らかで濃厚な「胡麻豆腐」や、冬の寒風にさらして作られた伝統の「高野豆腐（凍み豆腐）」の含め煮。さらに聖護院大根や根菜の温かい炊き合わせ、豆乳鍋など、身体に優しく滋味深い料理が並びます。"
        }
      },
      {
        '@type': 'Question',
        name: "冬に車や公共交通機関で高野山へアクセスする際の注意点は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "公共交通機関を利用する場合、難波駅から南海高野線の特急「こうや」で極楽橋駅へ行き、そこから高野山ケーブルカーに乗車して約5分で高野山駅に到着します。南海電鉄・ケーブルカーは冬期も基本的に安定して運行しており、最も安全で快適なアクセス方法です。車で訪れる場合、国道370号線や国道480号線の山岳道路は12月〜1月に路面凍結や積雪が発生するため、必ずスタッドレスタイヤを装着し、チェーンを携行してください。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "宿坊　不動院",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/107848/107848.jpg",
              rating: 4.67,
              reviews: 163,
              price: "¥28,000〜",
              access: "南海電鉄高野山駅下車、南海りんかんバスで１５分（蓮花谷下車徒歩３分）",
              special: "出来たての精進料理が自慢の心安らぐ静寂の宿坊。皆様のご来山をお待ち申し上げております。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F107848%2F107848.html",
              story: "高野山谷上地区の閑静な聖域に佇み、豊かな自然林と池泉回遊式庭園を抱く格式高き宿坊寺院「宿坊 不動院」。鳥のさえずりと清らかな静寂に包まれた館内は、隅々まで磨き上げられた廊下と美しい襖絵が並び、日常の喧騒から完全に解き放たれます。冬には雪吊りの施された庭園が白銀に輝き、客室の縁側から眺める雪景色は一幅の絵画のよう。夕食には四季折々の厳選素材を用いた伝統の精進料理。濃厚でなめらかな名物「生胡麻豆腐」や、冬の根菜をじっくり炊き上げた煮物など、五味五色五法に則った滋味あふれる美味を味わえます。",
              roomTip: "庭園側特別和室。四季折々の表情を見せる名勝庭園の雪景色を望み、床暖房や暖房設備完備で真冬でも暖かく寛げます。",
              gourmetTip: "「不動院伝承・極上冬の精進料理」。手練りの生胡麻豆腐や旬の聖護院大根、湯葉料理が美しい漆器に並ぶ心尽くしの御膳。",
              highlights: [
                "名勝庭園を望む格式高き宿坊寺院・雪吊りの庭園美と全館行き届いた静謐な空間",
                "手練り生胡麻豆腐と冬の根菜精進料理・暖房完備の快適な客室で過ごす静かな時間",
                "クチコミ高評価4.6超の安心滞在・カップルや一人旅の冬のリトリートに最適"
              ]
            },
            {
              id: 2,
              name: "一乗院",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4737/4737.jpg",
              rating: 4.52,
              reviews: 623,
              price: "¥55,000〜",
              access: "南海高野線極楽橋駅～高野山駅迄ケーブルカーで５分。　高野山駅前～千手院橋バス停迄南海りんかんバスで約20分、下車徒歩5分",
              special: "高野山の中央に位置する宿坊寺院です。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4737%2F4737.html",
              story: "高野山のほぼ中央に位置し、洗練された数寄屋造りの雅な建築美と現代的な最高峰のホスピタリティで国内外のVIPを魅了する宿坊「一乗院」。館内は全館暖房や床暖房が行き届き、真冬の高野山とは思えない快適な滞在が約束されています。毎朝の本堂での勤行や護摩祈祷への参列は、炎と声明が織りなす荘厳な祈りの世界。夕食の精進料理は「宿坊の概念を変える」と称賛される芸術的な仕上がり。旬の冬野菜、きのこ、豆類を巧みに使い、出汁の繊細な風味と美しい盛り付けで五感を魅了します。",
              roomTip: "書院造り和室。伝統的な障子や格調高い欄間が施され、雪の庭園を愛でながら静謐な時間を過ごせます。",
              gourmetTip: "「一乗院特選・冬の美食精進懐石」。できたて熱々の胡麻豆腐の餡掛けや、冬野菜の天ぷら、豆乳仕立ての温かい小鍋。",
              highlights: [
                "全館床暖房完備の最高峰デザイナーズ宿坊・芸術的な極上精進懐石と毎朝の護摩祈祷",
                "宿坊の概念を変える美食精進懐石・国内外VIPに愛される格式高いホスピタリティ",
                "人生の節目に訪れたい特別な聖地ステイ・洗練された書院造りの客室"
              ]
            },
            {
              id: 3,
              name: "恵光院",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13751/13751.jpg",
              rating: 4.56,
              reviews: 594,
              price: "¥35,000〜",
              access: "南海『難波駅』より南海電鉄高野線で『高野山駅』より南海バス10分",
              special: "霊峰高野山。静か��宿坊でのひとときが心を癒します。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13751%2F13751.html",
              story: "一の橋から奥之院参道へと続く入り口近くに位置し、毎朝の迫力ある護摩祈祷や阿字観（瞑想）、奥之院ナイトツアーなど多彩な文化体験で圧倒的人気を誇る名刹「恵光院」。千百年の歴史を誇る寺院でありながら、全館Wi-Fiや快適な暖房設備、大浴場を完備。冬の夕暮れには本堂で阿字観体験が行われ、呼吸を整えて心を無にする静寂の時間を過ごせます。夕食には高野山伝統の精進料理がお部屋食で提供され、精進揚げや高野豆腐、季節の和え物など滋味豊かな味わいを気兼ねなく楽しめます。",
              roomTip: "和モダン洋室または庭園和室。機能的なベッドスペースと和の落ち着きを融合させた、冬でも温かく快適な客室です。",
              gourmetTip: "「高野山伝統・本膳精進料理」。古来の製法を守る高野豆腐の含め煮や、風味豊かな胡麻豆腐を味わう心身清まる膳。",
              highlights: [
                "奥之院参道入口至近・阿字観（瞑想）や写経・護摩祈祷など充実の密教文化体験",
                "お部屋食で楽しむ高野豆腐と精進揚げ・大浴場完備で冬の冷えた身体を温める",
                "奥之院ナイトツアーにも参加しやすい立地・観光と修行体験を両立できる宿坊"
              ]
            },
            {
              id: 4,
              name: "高野山別格本山　宿坊　西門院",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/105973/105973.jpg",
              rating: 4.00,
              reviews: 95,
              price: "¥20,800〜",
              access: "南海高野山駅より「奥の院」行きバスで１３分。「小田原通り」下車すぐ前。タクシーで約８分。",
              special: "高野山街の中央.お買い物や各所観光に便利な宿坊。手作りごま豆腐と伝統の「精進料理」は好評です。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F105973%2F105973.html",
              story: "弘法大師空海が高野山を開創した際、最初に草庵を結んだとされる由緒ある別格本山「高野山別格本山 宿坊 西門院」。町の中心部にありながら、一歩山門をくぐると杉木立に囲まれた静寂の空間が広がります。館内には歴史ある寺宝や文化財が所蔵され、格式高い寺院建築の佇まいを肌で感じることができます。冬の澄んだ大気のもとで行われる朝のお勤めは、厳かな読経と木魚の音が本堂に響き渡り、心が洗われる思いがします。夕食には素材本来の味を最大限に引き出した温かな精進料理が振る舞われます。",
              roomTip: "本館和室。落ち着いた純和風の客室で、障子越しに差し込む柔らかな光と冬の静けさに包まれて過ごせます。",
              gourmetTip: "「西門院伝承・冬の精進膳」。素朴ながらも出汁の効いた煮物や、手作りの胡麻豆腐、冬の根菜汁で身体を内側から温める料理。",
              highlights: [
                "弘法大師草庵の由緒ある別格本山・町の中心に位置しながら静寂を守る歴史ある寺院",
                "本堂に響く荘厳な声明と読経・冬の心身を浄化する本物の信仰体験",
                "壇上伽藍や金剛峯寺へのアクセス抜群・冬の高野山散策に最適な好立地"
              ]
            },
            {
              id: 5,
              name: "高野山　宿坊　無量光院",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/187093/187093.jpg",
              rating: 4.00,
              reviews: 5,
              price: "¥15,000〜",
              access: "高野山駅より南海りんかんバス経由で高野警察前バス停下車後徒歩1分",
              special: "上杉謙信、織田信長所縁の伝統院。広大な庭園が随所から拝観でき全室WI-FI完備。本格的勤行も圧巻",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187093%2F187093.html",
              story: "高野山のメインストリートに面しながら、白壁と美しい木造建築が静かに佇む真言密教の伝統道場「高野山 宿坊 無量光院」。白砂と苔が美しい枯山水庭園を有し、冬には雪をまとった石組みと木々が幽玄な世界を作り出します。毎朝の勤行では、古式に則った本格的な密教儀礼を間近で体感することができ、厳粛な祈りの力に圧倒されます。夕食の精進料理は、高野山の湧水と厳選された大豆・野菜で作られ、滋味深く身体に染み渡る味わい。素朴で飾り気のない本物の宿坊体験を求める旅人に最適な宿です。",
              roomTip: "庭園向き和室。雪化粧した枯山水庭園を縁側から静かに見つめながら、心を整える読書や瞑想にふけることができます。",
              gourmetTip: "「密教道場伝統の精進料理」。高野山特産の生麩や高野豆腐、旬の冬野菜をシンプルかつ丁寧に調理した滋味あふれる御膳。",
              highlights: [
                "白砂の枯山水庭園を望む本格密教道場・素朴で滋味あふれる伝統の精進料理と早朝勤行",
                "高野山の湧水と厳選素材で仕立てる精進膳・気取らないアットホームなおもてなし",
                "コストパフォーマンスに優れた宿坊滞在・静寂の中で自己と向き合う贅沢"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "冬（11月〜1月）の高野山の気候と積雪状況・服装の注意点は？",
    "a": "高野山は標高約800mの山上に位置するため、平野部（大阪や和歌山市）と比べて気温が約5〜7度低くなります。11月中旬には初雪が降ることがあり、12月〜1月は完全な氷点下となり積雪や路面凍結が発生します。服装はしっかりとした防寒対策が必須で、厚手のダウンコート、機能性インナー、マフラー、手袋、ニット帽を着用してください。また、奥之院参道や寺院境内は石畳が凍結して滑りやすいため、溝の深いスノーブーツや防寒ウォーキングシューズでお越しください。"
  },
  {
    "q": "冬の「奥之院」と「壇上伽藍」の雪景色の見どころは？",
    "a": "世界文化遺産に登録された高野山の二大聖地。奥之院では、一の橋から御廟へと続く約2kmの参道に樹齢数百年のスギ巨木が約20万基の墓石とともに立ち並び、冬には純白の雪をかぶった神秘的な静寂の世界が広がります。弘法大師空海が今も瞑想を続けているとされる「御廟」前では、冬の澄んだ空気の中に灯籠の光が揺らめき、息を呑む崇高さを感じられます。一方、壇上伽藍では、朱色の「根本大塔」に真っ白な雪が降り積もるコントラストが息を呑む美しさです。"
  },
  {
    "q": "宿坊寺院での冬の宿泊体験（暖房設備・お風呂・服装）はどのようなものですか？",
    "a": "「宿坊は冬寒いのではないか」と心配される方も多いですが、現代の多くの宿坊寺院（特に不動院や一乗院など）では全館暖房や床暖房、石油ファンヒーター、ホットカーペットが完備されており、室内は大変暖かく快適に過ごせます。また広々とした大浴場も完備され、冬の冷えた身体をしっかりと温めることができます。ただし、朝の勤行（お勤め）を行う本堂は広く冷え込むため、厚手の靴下やフリース、羽織るものを持参して参列するのが快適に過ごすポイントです。"
  },
  {
    "q": "宿坊でいただく「冬の精進料理」の特徴と名物は何ですか？",
    "a": "高野山の精進料理は、肉や魚、五葷（ネギ・ニンニク・ニラなど）を一切使わず、大豆製品、野菜、山菜、海藻を「五味・五色・五法」の原則に則って調理する伝統料理です。冬の精進料理の主役は、白胡麻と吉野葛を丹念に練り上げた滑らかで濃厚な「胡麻豆腐」や、冬の寒風にさらして作られた伝統の「高野豆腐（凍み豆腐）」の含め煮。さらに聖護院大根や根菜の温かい炊き合わせ、豆乳鍋など、身体に優しく滋味深い料理が並びます。"
  },
  {
    "q": "冬に車や公共交通機関で高野山へアクセスする際の注意点は？",
    "a": "公共交通機関を利用する場合、難波駅から南海高野線の特急「こうや」で極楽橋駅へ行き、そこから高野山ケーブルカーに乗車して約5分で高野山駅に到着します。南海電鉄・ケーブルカーは冬期も基本的に安定して運行しており、最も安全で快適なアクセス方法です。車で訪れる場合、国道370号線や国道480号線の山岳道路は12月〜1月に路面凍結や積雪が発生するため、必ずスタッドレスタイヤを装着し、チェーンを携行してください。"
  }
];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-indigo-100 selection:text-indigo-900 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero Header */}
      <header className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 opacity-35 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1800&q=80" 
            alt="冬の高野山・雪の壇上伽藍根本大塔と奥之院" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-indigo-950/80 backdrop-blur-md text-indigo-200 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-indigo-500/30">
            <Snowflake className="w-4 h-4 text-indigo-300" />
            11月・12月・1月 冬の世界遺産高野山・白銀の壇上伽藍＆奥之院と宿坊精進料理特集
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
            【11・12・1月和歌山】世界遺産・高野山の白銀「壇上伽藍＆奥之院」雪景色と宿坊阿字観体験＆冬の滋味精進料理・新春初詣名宿5選
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            弘法大師空海が1200年前に開創した真言密教の聖地・高野山。標高約800mの山上盆地に位置するこの地は、11月から1月にかけて凛とした冷気と純白の雪に包まれます。朱色の根本大塔と白銀の雪が織りなす「壇上伽藍」、樹齢数百年のスギ巨木が立ち並ぶ「奥之院」参道の静寂古道。格式ある宿坊寺院に宿泊し、心を清める阿字観（瞑想）や早朝勤行、護摩祈祷を体験。胡麻豆腐や高野豆腐など、冬の身体を内側から浄化する伝統精進料理と新春初詣へご案内します。
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-indigo-400" /> 最適時期：11月中旬〜1月下旬（白銀雪景色・宿坊阿字観体験・新春初詣）</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-indigo-400" /> エリア：和歌山県伊都郡高野町（高野山・壇上伽藍・奥之院）</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-indigo-400" /> 名物：高野山精進料理・生胡麻豆腐・高野豆腐・笹すし・厄除けみろく石</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-indigo-900 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Overview</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              白銀に鎮もる天空の聖域と、千二百年の祈りに抱かれる冬の宿坊
            </h2>
          </div>
          
          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p>
              紀伊山地の険しい山々を登りつめた標高約800メートルの高地に、突如として広がる盆地・高野山。平安時代初期の弘法大師空海による開創以来、真言密教の根本道場として、また日本仏教の聖地として数多の人々の祈りを受け止めてきました。
            </p>
            <p>
              四季折々に異なる美しさを見せる高野山ですが、11月下旬から1月にかけて訪れる冬の静寂は格別です。平野部より格段に冷え込む山上には粉雪が舞い降り、寺院の瓦屋根や杉の巨木を真っ白に染め上げます。密教のシンボルである壇上伽藍の「根本大塔」は、朱色と純白の雪が鮮烈なコントラストを描き出し、その崇高な姿は息を呑むほどです。
            </p>
            <p>
              一の橋から弘法大師御廟へと続く「奥之院」の約2キロメートルの参道は、冬の朝、足音ひとつ響かない静寂の世界となります。樹齢数百年の巨大な杉並木と、苔むした無数の墓石や慰霊碑が雪をまとい、木漏れ日の中に神秘的な光の筋が差し込む。今も弘法大師が生きているかの如く瞑想を続けているとされる御廟の前で静かに手を合わせれば、日頃の悩みや雑念がすっと消え去っていくような清浄な感覚に満たされます。
            </p>
            <p>
              夜は高野山に50箇所以上ある「宿坊寺院」での滞在へ。暖房が行き届いた清潔な客室で、心を鎮める「阿字観（瞑想）」や写経に取り組み、夕食には古来の智慧が詰まった「精進料理」をいただきます。手練りの生胡麻豆腐や、冬の寒風で熟成された高野豆腐の含め煮、出汁の効いた旬の根菜料理は、身体に優しく染み渡る極上の味わい。翌朝、本堂で響き渡る僧侶の声明と護摩祈祷の炎に包まれる時間は、新たな1年を迎えるための最高のエネルギーを与えてくれます。
            </p>
          </div>
        </section>

        {/* 3 Major Winter Highlights */}
        <section className="space-y-6">
          <div className="border-b border-stone-200 pb-3">
            <span className="text-indigo-900 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Highlights</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の高野山を満喫する3大感動体験
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-800">
                <Mountain className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                1. 白銀の奥之院参道と壇上伽藍の雪景色
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                樹齢数百年の杉巨木が雪をまとう奥之院の神秘的な参道。朱色の根本大塔と白銀の雪が織りなす壇上伽藍の鮮烈な美しさに圧倒される聖地体験。
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-800">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                2. 宿坊での阿字観瞑想体験＆早朝護摩祈祷
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                呼吸を整えて心を無にする阿字観や写経体験。翌朝、本堂で燃え上がる護摩の炎と僧侶の荘厳な読経・声明に包まれ、新年の無事と開運を祈る祈りの時間。
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                3. 冬の身体に染み渡る本格「精進料理」
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                手練り生胡麻豆腐、伝統の高野豆腐含め煮、温かい根菜鍋など、五味五色五法の妙を極めた滋味あふれる料理。身体を内側から浄化する至高の美味。
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Timeline Model Course Section */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-indigo-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              【1泊2日】白銀の高野山と宿坊体験を巡る天空の祈り旅黄金モデルコース
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              南海難波駅を起点に、特急こうやとケーブルカーを利用して冬の聖地リトリートを安全・快適に体験するプラン。
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-500/40 space-y-6">
              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase">DAY 1 昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  12:00 高野山駅到着 ➔ 門前通りで温かい精進うどんランチ
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  極楽橋駅からケーブルカーで高野山駅へ。路線バスで山内中心部へ移動し、門前のお食事処で高野豆腐や山菜が入った熱々の精進うどんや名物笹すしを味わい、身体を温めます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase">DAY 1 午後</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  13:30 壇上伽藍＆総本山金剛峯寺拝観 ➔ 白銀の根本大塔と蟠龍庭
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  雪化粧した朱色の根本大塔、金堂が並ぶ壇上伽藍を散策。続いて総本山金剛峯寺へ。日本最大の石庭「蟠龍庭」の白砂と巨石が雪をまとう雄大な雪景色を鑑賞します。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase">DAY 1 夕刻〜夜</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  15:30 宿坊寺院チェックイン ➔ 阿字観（瞑想）体験＆伝統精進懐石ディナー
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  暖房完備の静謐な宿坊へ。夕暮れの本堂で僧侶の手ほどきを受け阿字観瞑想を体験し、心を整えます。夕食は手練り生胡麻豆腐や高野豆腐含め煮など、滋味豊かな精進料理をお部屋食で堪能。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase">DAY 2 朝〜昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  06:30 本堂朝の勤行＆護摩祈祷 ➔ 白銀の奥之院参拝・弘法大師御廟へ
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  早朝、本堂で燃え上がる護摩の炎と声明に包まれ新春の開運祈祷。精進朝食後は雪の奥之院へ。杉巨木が雪をまとう静寂の参道を歩き、御廟で感謝の祈りを捧げて帰路へ就きます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Gastronomy & Culture Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-indigo-900 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Local Gastronomy & Culture</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              密教の精神が宿る「精進料理」と高野山伝統の食の知恵
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-700 text-sm leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-indigo-800" />
                五味五色五法の妙・生胡麻豆腐と凍み豆腐の誕生秘話
              </h3>
              <p>
                高野山の精進料理は、甘・辛・酸・苦・鹹（塩）の「五味」、赤・黄・青・黒・白の「五色」、生・煮る・焼く・揚げる・蒸すの「五法」を調和させる高度な食文化です。中でも白胡麻と吉野葛をすり鉢で丹念に練り上げる「胡麻豆腐」は、クリーミーで濃厚なコクが特徴。また、冬の厳しい寒風を利用して豆腐を凍結・乾燥させて保存性を高めた「高野豆腐」は、高野山の僧侶たちが生み出した日本を代表する伝統保存食です。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-indigo-800" />
                弘法大師ゆかりの銘菓「みろく石」と高野槙の香り
              </h3>
              <p>
                奥之院の御影堂近くにある重さを量る霊石「みろく石」にちなんだ名菓「みろく石」は、粒あんを風味豊かな求肥で包んだ素朴な銘菓でお土産に最適です。また、高野山では仏前に供える神聖な木として「高野槙（こうやまき）」が重宝され、清々しい木の香りが漂うお香や数珠など、聖地ならではの心洗われる品々が門前通りに並びます。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel Recommendations Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-indigo-900 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Selected Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の高野山で心身を清める厳選宿坊名宿5選
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-1">
              楽天トラベル公式APIより取得した最新データに基づく、由緒・精進料理・暖房設備が高評価の宿。
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
                        <span className="text-xs font-bold text-indigo-950 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200/60">
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
                        <Sparkles className="w-4 h-4 text-indigo-700" />
                        この宿坊の注目ポイント
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
                          <span className="font-bold text-stone-900">精進料理の提案：</span>
                          <span className="text-stone-600">{h.gourmetTip}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-stone-100">
                      <div>
                        <span className="text-xs text-stone-500 block">参考宿泊料金（1名あたり）</span>
                        <span className="text-lg sm:text-xl font-black text-indigo-950">{h.price}</span>
                      </div>

                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-indigo-900 hover:bg-indigo-950 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-xs transition-colors"
                      >
                        楽天トラベルで空室・プランを見る
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Tips Section */}
        <section className="bg-indigo-50/60 rounded-3xl p-6 sm:p-10 border border-indigo-200/60 space-y-6">
          <div className="border-b border-indigo-200/80 pb-4">
            <span className="text-indigo-900 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Traveler Tips</span>
            <h2 className="text-xl sm:text-2xl font-bold text-indigo-950">
              冬の高野山を快適に巡るための実践アドバイス
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-indigo-950">
            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <ThermometerSun className="w-4 h-4 text-indigo-700" />
                標高800mの気温と防寒対策
              </div>
              <p className="leading-relaxed text-stone-700">
                山上は平野部より5〜7度気温が低く、冬の朝晩は氷点下まで下がります。宿坊客室は暖房完備ですが、本堂での朝の勤行時は足元が冷えるため、厚手の靴下やインナーダウン、ひざ掛けを準備しましょう。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <Compass className="w-4 h-4 text-indigo-700" />
                奥之院参道の石畳凍結注意
              </div>
              <p className="leading-relaxed text-stone-700">
                奥之院参道の石畳や橋の上は日陰が多く、雪解け水が凍結して滑りやすくなります。革靴やハイヒールは厳禁です。滑り止めの効いたスノーブーツや防寒ウォーキングシューズを着用してください。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <CheckCircle2 className="w-4 h-4 text-indigo-700" />
                宿坊のマナーとタイムスケジュール
              </div>
              <p className="leading-relaxed text-stone-700">
                宿坊はホテルとは異なり信仰の道場でもあります。夕食時間（通常17:30〜18:00頃）や門限（21:00頃）が定められていることが多いため、チェックイン時間は余裕を持って早めに到着しましょう。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-indigo-900 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の高野山・宿坊滞在＆参拝に関するよくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq: { q: string; a: string }, idx: number) => (
              <div key={idx} className="border border-stone-200/70 rounded-2xl p-5 hover:border-indigo-300 transition-colors bg-stone-50/50">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-indigo-900 text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
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
            <span className="text-indigo-900 font-bold text-xs sm:text-sm tracking-wider uppercase block">Explore More Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              あわせて読みたい全国の冬景色・聖地・温泉特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <Link 
              href="/winter-wakayama-kawayu-yunomine-onsen-senninburo-kumanogyu-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-indigo-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-indigo-900 font-bold text-xs block mb-1">和歌山・熊野古道</span>
              <span className="text-stone-900 font-bold group-hover:text-indigo-950 transition-colors line-clamp-2">
                川湯温泉の巨大仙人風呂と世界遺産湯の峰温泉つぼ湯・熊野牛名宿
              </span>
            </Link>

            <Link 
              href="/winter-wakayama-nanki-shirahama-kue-hotspring-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-indigo-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-indigo-900 font-bold text-xs block mb-1">和歌山・南紀白浜</span>
              <span className="text-stone-900 font-bold group-hover:text-indigo-950 transition-colors line-clamp-2">
                幻の高級魚クエ鍋と白良浜イルミネーション・絶景海辺温泉名宿
              </span>
            </Link>

            <Link 
              href="/winter-nara-dorogawa-onsen-snow-botannabe-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-indigo-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-indigo-900 font-bold text-xs block mb-1">奈良・洞川温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-indigo-950 transition-colors line-clamp-2">
                大峯山麓の雪景色・縁側が美しいノスタルジック温泉街と名物ぼたん鍋
              </span>
            </Link>

            <Link 
              href="/winter-mie-ise-jingu-hatsumode-okageyokocho-iseebi-matsusaka-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-indigo-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-indigo-900 font-bold text-xs block mb-1">三重・伊勢神宮</span>
              <span className="text-stone-900 font-bold group-hover:text-indigo-950 transition-colors line-clamp-2">
                新春の伊勢神宮初詣とおかげ横丁・伊勢海老＆松阪牛会席名宿
              </span>
            </Link>

            <Link 
              href="/winter-kyoto-arashiyama-onsen-yudofu-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-indigo-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-indigo-900 font-bold text-xs block mb-1">京都・嵐山温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-indigo-950 transition-colors line-clamp-2">
                冬の渡月橋雪景色と静寂の竹林の小径・名物嵯峨野湯豆腐名宿
              </span>
            </Link>

            <Link 
              href="/winter-miyazaki-takachiho-night-kagura-beef-onsen-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-indigo-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-indigo-900 font-bold text-xs block mb-1">宮崎・高千穂</span>
              <span className="text-stone-900 font-bold group-hover:text-indigo-950 transition-colors line-clamp-2">
                神話の里・高千穂の冬の夜神楽と天岩戸神社初詣・高千穂牛名宿
              </span>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-wakayama-koyasan-shukubo-okunoin-snow-shojin-stay" />
</div>
        </section>
      </main>
    </article>
  );
}
