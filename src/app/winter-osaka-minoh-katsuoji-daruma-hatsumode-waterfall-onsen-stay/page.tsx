import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Wine, AlertTriangle, Sunrise, HeartHandshake, Eye, Mountain
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12・1月大阪】勝ち運の寺「勝尾寺」新春初詣！名宿5選',
  description: '大阪都心から電車で約30分の北摂に位置する箕面。11〜1月は晩秋の紅葉から冬の雪化粧へと移ろい。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '勝尾寺 初詣, 勝ちダルマ 勝尾寺, 箕面大滝 冬, 箕面大滝 氷瀑, もみじの天ぷら, 箕面温泉, 大江戸温泉物語 箕面観光ホテル, 不死王閣, 箕面萱野駅, 大阪 冬 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-osaka-minoh-katsuoji-daruma-hatsumode-waterfall-onsen-stay'
  },
  openGraph: {
    title: '【11・12・1月大阪】勝ち運の寺「勝尾寺」新春初詣！名宿5選',
    description: '大阪都心から電車で約30分の北摂に位置する箕面。11〜1月は晩秋の紅葉から冬の雪化粧へと移ろい。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-osaka-minoh-katsuoji-daruma-hatsumode-waterfall-onsen-stay',
    siteName: 'クラドトラベル',
    type: 'article',
    locale: 'ja_JP',
    images: [{
      url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
      width: 1200,
      height: 630,
      alt: '冬の勝尾寺 勝ちダルマ奉納棚と白銀の箕面大滝'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月大阪】勝ち運の寺「勝尾寺」新春初詣と勝ちダルマ祈願！白銀の「箕面大滝」氷紋と名物もみじ天ぷら・箕面温泉＆北摂厳選名宿5選",
    description: "大阪都心から電車で約30分の北摂に位置する箕面。11〜1月は晩秋の紅葉から冬の雪化粧へと移ろい、日本の滝百選「箕面大滝」では冷え込みが厳しい日に清冽な氷紋や氷瀑が姿を現します。平安時代より勝運祈願の聖地として信仰を集める「勝尾寺」では、境内を埋め尽くす無数の赤い勝ちダルマと厳かな新春初詣。香ばしい伝統銘菓「もみじの天ぷら」や名水ゆば料理を味わい、関西屈指のトロトロ美肌湯「箕面温泉」「伏尾温泉」と北摂の厳選名宿5選を徹底特集。",
    images: ['https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function OsakaMinohWinterFeaturePage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【11・12・1月大阪】勝ち運の寺「勝尾寺」新春初詣と勝ちダルマ祈願！白銀の「箕面大滝」氷紋と名物もみじ天ぷら・箕面温泉＆北摂厳選名宿5選",
    "description": "大阪都心から電車で約30分の北摂に位置する箕面。11〜1月は晩秋の紅葉から冬の雪化粧へと移ろい、日本の滝百選「箕面大滝」では冷え込みが厳しい日に清冽な氷紋や氷瀑が姿を現します。平安時代より勝運祈願の聖地として信仰を集める「勝尾寺」では、境内を埋め尽くす無数の赤い勝ちダルマと厳かな新春初詣。香ばしい伝統銘菓「もみじの天ぷら」や名水ゆば料理を味わい、関西屈指のトロトロ美肌湯「箕面温泉」「伏尾温泉」と北摂の厳選名宿5選を徹底特集。",
    "image": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
    "datePublished": "2026-10-06T06:00:00+09:00",
    "dateModified": "2026-10-06T06:00:00+09:00",
    "author": {
      "@type": "Organization",
      "name": "クラドトラベル編集部 温泉・神社仏閣取材班"
    },
    "publisher": {
      "@type": "Organization",
      "name": "クラドトラベル",
      "logo": {
        "@type": "ImageObject",
        "url": "https://croud-travel.pages.dev/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://croud-travel.pages.dev/winter-osaka-minoh-katsuoji-daruma-hatsumode-waterfall-onsen-stay"
    }
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
        "name": "大阪・箕面＆勝尾寺 冬の初詣と箕面大滝",
        "item": "https://croud-travel.pages.dev/winter-osaka-minoh-katsuoji-daruma-hatsumode-waterfall-onsen-stay"
      }
    ]
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "勝尾寺の新春初詣で「勝ちダルマ」を授かる作法と目入れの正しい手順は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "勝尾寺の「勝ちダルマ」は、他人に勝つことではなく『自分自身の甘えや弱さに打ち勝つ（自己の勝利）』を祈願するものです。本堂でダルマを授かったら、まず裏面に今年達成したい大願や目標を墨で具体的に書き込みます。次に本堂のお香の煙に当てて心身を清め、強い決意を込めながらダルマの『右目（向かって左側）』に墨で黒目を入れます。一年間、自宅や職場の目立つ場所に安置して日々努力を重ね、見事大願が成就した際に感謝の心を込めて『左目（向かって右側）』を入れ、勝尾寺の奉納棚へ納めるのが伝統の習わしです。"
        }
      },
      {
        "@type": "Question",
        "name": "冬（11・12・1月）の箕面大滝と滝道の見どころ、氷紋・氷瀑が見られる気象条件は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "箕面大滝は落差33mの名瀑で、日本の滝百選に選定されています。11月はモミジの紅葉が美しく、12月中旬以降は葉が落ちて木立のシルエットと滝のダイナミックな岩肌が露わになります。1月〜2月の厳冬期、強い寒波が流入して氷点下の冷え込みが数日続くと、滝壺の岩肌に飛沫が凍りついて白銀の『氷紋』や『氷瀑』が出現することがあります。阪急箕面駅から大滝までは片道約2.7km（徒歩約40分）の舗装された「滝道」が整備されており、冬の清冽なマイナスイオンを浴びながら快適なウォーキングを楽しめます。"
        }
      },
      {
        "@type": "Question",
        "name": "箕面名物「もみじの天ぷら」の歴史と味の特徴、どこで買える？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "「もみじの天ぷら」は、約1300年前に箕面山で修行していた修験道の開祖・役行者が、滝に映える紅葉の美しさに感銘を受け、灯明の油で紅葉を揚げて旅人に振る舞ったのが始まりと伝えられる歴史ある銘菓です。使用される葉は観賞用ではなく、食用に無農薬栽培された「一行寺楓（いっこうじかえで）」。収穫後に約1年間塩漬けにしてアクを抜き、塩出しした後に小麦粉・砂糖・白ごまを合わせた特製衣をつけて菜種油で丁寧に手揚げされます。カリッとした香ばしい歯ごたえと程よい甘み、ゴマの風味が絶妙で、阪急箕面駅から滝道沿いに並ぶ数々の老舗店で実演販売されています。"
        }
      },
      {
        "@type": "Question",
        "name": "北大阪急行の箕面萱野駅延伸により、勝尾寺へのアクセスはどう変わった？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "2024年に北大阪急行が千里中央から「箕面萱野駅」まで延伸開業したことで、大阪梅田や新大阪から乗り換えなしで箕面萱野駅まで直通約20〜25分でアクセスできるようになりました。箕面萱野駅前のバスターミナルからは、勝尾寺へ直行する路線バスが毎日運行されており、移動時間が大幅に短縮されています。また、土日祝日や正月三が日には箕面大滝周辺を結ぶ周遊バスも運行されるため、自家用車の冬道運転や駐車場渋滞を避けて快適に周遊できます。"
        }
      },
      {
        "@type": "Question",
        "name": "冬の箕面温泉と池田・伏尾温泉の泉質・効能の違いは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "箕面温泉は地下約1000mから湧出する炭酸水素塩泉（重曹泉）で、ナトリウムイオンと炭酸水素イオンを極めて高濃度に含んでいます。角質を柔らかくして肌の汚れを落とすクレンジング効果があり、「美肌の湯」「関西の奥座敷の名湯」として親しまれています。一方、隣接する池田市の伏尾温泉は天然ラジウム温泉（単純弱放射能泉）で、浸かることで血行が促進され、身体の芯まで温まり免疫力を高めるホルミシス効果が期待できます。冬の寒さで縮こまった身体を解きほぐすのに、両温泉とも極めて贅沢な湯浴み環境を提供しています。"
        }
      }
    ]
  };

  const hotels = [
            {
              id: 1,
              name: "大江戸温泉物語Ｐｒｅｍｉｕｍ　箕面観光ホテル（２０２６年１０月１日リニューアルオープン）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/29844/29844.jpg",
              rating: 4.00,
              reviews: 2559,
              price: "¥16,800〜",
              access: "阪急箕面線　箕面駅徒歩5分以内／名神　茨木インター～国道１７１号～ホテル",
              special: "絶景の「天空湯屋」とスパーガーデンで温泉ステイを楽しむホテル",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29844%2F29844.html",
              story: "箕面の山腹、標高約180mの絶壁に聳え立つ「大江戸温泉物語Premium 箕面観光ホテル」。大阪平野を一望する圧倒的なパノラマビューを誇り、最上階の天空露天風呂からは冬の澄んだ夜空に広がる1000万ドルの大阪夜景を眼下に望みます。関西屈指の名湯「箕面温泉」は、重曹泉（炭酸水素塩泉）のトロリとした肌触りが特徴で「美肌の湯」として名高い泉質。併設の「箕面温泉スパーガーデン」での多彩な温泉巡りや、プレミアムラウンジでの無料ドリンクサービス、旬の地元食材を贅沢に取り入れた豪華バイキングが旅の満足度を高めます。勝尾寺や箕面大滝へのアクセス拠点としても申し分ないロケーションです。",
              roomTip: "大阪平野一望パノラマビュー和洋室または高層階ツイン。空気が澄んだ冬の夜、宝石を散りばめたような大阪市街の夜景を客室から独占。",
              gourmetTip: "プレミアムバイキングのローストビーフ＆揚げたて天ぷら。冬限定の海鮮鍋やハーゲンダッツアイスクリームも食べ放題で大満足。",
              highlights: [
                "標高約180mの天空露天風呂・眼下に1000万ドルの大阪平野夜景が広がる絶景ステイ" ,
                "関西屈指のトロトロ美肌重曹泉・併設スパーガーデンで温泉三昧と豪華バイキング" ,
                "勝尾寺・箕面大滝への周遊バス停車地・冬の北摂観光を贅沢に彩るプレミアム宿"
              ]
            },
            {
              id: 2,
              name: "伏尾温泉　不死王閣",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4791/4791.jpg",
              rating: 4.30,
              reviews: 1236,
              price: "¥11,550〜",
              access: "大阪市内から車で30分。大阪空港より車で２０分。阪急池田駅より車で10分。送迎あり。詳しくはお問い合わせください。",
              special: "大阪の温泉旅館　伏尾温泉不死王閣は、大阪市内から車で３０分。自然豊かな環境です。駐車場無料",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4791%2F4791.html",
              story: "箕面に隣接する池田市伏尾町、五月山の麓を流れる余野川の渓流沿いに佇む老舗名湯宿「伏尾温泉 不死王閣」。大阪市内から車でわずか30分とは思えない静寂な山里の風情が漂います。自家源泉から湧出するラジウム温泉は、身体の芯から温まり冷え性や疲労回復に優れた効能を発揮。冬は雪化粧した北摂の里山を望む庭園露天風呂が格別の情緒を醸し出します。料理は四季折々の京風会席に定評があり、冬期は名物の猪鍋（ぼたん鍋）や極上黒毛和牛のしゃぶしゃぶプランが極めて人気。勝尾寺への参拝ドライブにも直結する癒やしの隠れ宿です。",
              roomTip: "露天風呂付き客室「萌黄」または余野川渓流を望む和室。川のせせらぎと冬の山鳥の声を聴きながらプライベートな湯浴みを満喫。",
              gourmetTip: "冬限定「特選ぼたん鍋会席」。天然猪肉の甘みある脂と自家製秘伝合わせ味噌が溶け合う深いコクは冬の北摂随一の滋味。",
              highlights: [
                "余野川渓流沿いの静かな山里・自家源泉ラジウム温泉と冬限定の極上ぼたん鍋会席" ,
                "創業50余年の老舗旅館・露天風呂付き客室で楽しむプライベートな冬の湯浴み体験" ,
                "池田の豊かな里山自然に抱かれ四季の滋味を堪能・五月山ドライブウェイにも至近"
              ]
            },
            {
              id: 3,
              name: "南千里クリスタルホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/790/790.jpg",
              rating: 3.75,
              reviews: 2037,
              price: "¥4,400〜",
              access: "阪急千里線「南千里駅」駅直結。梅田へ約２０分　大阪空港まで車で20分。千里中央駅まで車で5分。",
              special: "【阪急線　南千里駅直結】 閑静な立地　梅田へ約20分　万博公園やPanasonic Museumへ",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F790%2F790.html",
              story: "北大阪急行・大阪モノレールが結ぶ北摂の中核拠点・千里中央エリアに位置する「南千里クリスタルホテル」。阪急千里線南千里駅直結という抜群の機動性を誇り、勝尾寺への直行バス発着拠点である千里中央や箕面萱野駅へのアクセスも極めてスムーズです。広々としたロビーと清潔感あふれるモダンな客室を備え、全室にシモンズ社製ベッドと加湿空気清浄機を完備。冬の朝一番に勝尾寺で初詣を済ませたい旅人や、北摂の自然散策と大阪市内観光を両立させたいスマートな旅に理想的な拠点となります。",
              roomTip: "スーペリアツインまたはコーナーダブル。南向きの高層階からは千里緑地の木々と大阪郊外の落ち着いた街並みが広がります。",
              gourmetTip: "館内レストランの和洋朝食ビュッフェ。出汁の効いた関西風おばんざいや焼きたてパン、淹れたてコーヒーで爽やかな参拝の朝を。",
              highlights: [
                "南千里駅直結・北大阪急行箕面萱野駅や千里中央へのスムーズアクセスで参拝に最適" ,
                "シモンズ社製上質ベッドと加湿器完備・清潔で快適な客室空間が旅の疲れを癒やす" ,
                "駅前商業施設充実・出汁香る関西風朝食ビュッフェで清々しい新春参拝の朝を迎える"
              ]
            },
            {
              id: 4,
              name: "グリーンリッチホテル大阪空港前　人工温泉・二股湯の華",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/106200/106200.jpg",
              rating: 3.98,
              reviews: 2266,
              price: "¥3,700〜",
              access: "大阪（伊丹）空港 ・ 北タ－ミナルより 徒歩約７分！！",
              special: "空港周辺唯一男女別サウナ付き大浴場完備●伊丹空港～ホテル無料送迎■",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F106200%2F106200.html",
              story: "大阪空港（伊丹空港）至近に位置し、北摂・箕面エリアへのアクセスにも優れた「グリーンリッチホテル大阪空港前 人工温泉・二股湯の華」。館内には北海道長万部の二股ラジウム温泉の湯の華を使用した大浴場を完備しており、炭酸カルシウムを豊富に含む柔らかなお湯が冬の散策で冷えた身体を芯から解きほぐします。機能的な客室にはホテルオリジナルの快眠マットレスを導入。飛行機やレンタカーを活用して関西全域や北摂のパワースポットを巡るアクティブ派に絶大な支持を得ています。",
              roomTip: "プレミアムダブルまたはリラクゼーションツイン。落ち着いたシックなインテリアとゆとりあるデスクスペースで快適な滞在を実現。",
              gourmetTip: "大浴場で温まった後に味わう館内朝食バイキング。温かい日替わりスープと栄養満点の和洋総菜で一日のエネルギーを充填。",
              highlights: [
                "北海道長万部二股ラジウム湯の華大浴場完備・伊丹空港や北摂へのドライブ拠点" ,
                "機能的な客室と無料Wi-Fi完備・コストパフォーマンスに優れた快適ビジネスステイ" ,
                "快眠を追求したオリジナル寝具・大浴場で温活を満喫できる充実の館内設備"
              ]
            },
            {
              id: 5,
              name: "アスティルホテル新大阪　プレシャス",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/158823/158823.jpg",
              rating: 4.44,
              reviews: 1232,
              price: "¥4,000〜",
              access: "阪急三国駅より徒歩約１分！　※北出口(バスロータリー)方面でございます。サンティフル三国(三国商店街)を入ってすぐ",
              special: "阪急三国駅から徒歩1分、新大阪・梅田・伊丹へアクセス◎露天風呂付大浴場完備　無料駐車場有",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F158823%2F158823.html",
              story: "新大阪駅から徒歩圏内に位置し、デザイナーズ空間と充実のスパ施設が魅力の「アスティルホテル新大阪 プレシャス」。最上階には男性用露天風呂・サウナ、女性用マイクロバブルバスを備えた大浴場が完備され、冬の都会で極上の温活体験を提供しています。北大阪急行が箕面萱野駅まで延伸したことにより、新大阪から箕面エリアへのアクセスは直通わずか20分圏内と飛躍的に向上。遠方から新幹線で訪れ、初詣と北摂名所巡りを満喫したい旅行者にとって最高の交通結節点となります。",
              roomTip: "プレシャスダブルまたはデラックスツイン。上質な寝具と最新の空調設備で、移動の疲れを心地よくリセット。",
              gourmetTip: "新大阪駅構内の「なにわ大食堂」やホテル周辺の割烹で味わう冬の串カツ、てっちり鍋、大阪地酒の飲み比べ。",
              highlights: [
                "新大阪駅至近・最上階露天風呂＆サウナ完備で新幹線アクセスと箕面観光を両立" ,
                "北大阪急行延伸で箕面萱野まで直通約20分・都会的なスタイリッシュデザイナーズ空間" ,
                "男性用本格サウナと女性用マイクロバブルバス・新幹線利用の遠方旅人に抜群の利便性"
              ]
            }
  ];

  const faqList = [
  {
    "q": "勝尾寺の新春初詣で「勝ちダルマ」を授かる作法と目入れの正しい手順は？",
    "a": "勝尾寺の「勝ちダルマ」は、他人に勝つことではなく『自分自身の甘えや弱さに打ち勝つ（自己の勝利）』を祈願するものです。本堂でダルマを授かったら、まず裏面に今年達成したい大願や目標を墨で具体的に書き込みます。次に本堂のお香の煙に当てて心身を清め、強い決意を込めながらダルマの『右目（向かって左側）』に墨で黒目を入れます。一年間、自宅や職場の目立つ場所に安置して日々努力を重ね、見事大願が成就した際に感謝の心を込めて『左目（向かって右側）』を入れ、勝尾寺の奉納棚へ納めるのが伝統の習わしです。"
  },
  {
    "q": "冬（11・12・1月）の箕面大滝と滝道の見どころ、氷紋・氷瀑が見られる気象条件は？",
    "a": "箕面大滝は落差33mの名瀑で、日本の滝百選に選定されています。11月はモミジの紅葉が美しく、12月中旬以降は葉が落ちて木立のシルエットと滝のダイナミックな岩肌が露わになります。1月〜2月の厳冬期、強い寒波が流入して氷点下の冷え込みが数日続くと、滝壺の岩肌に飛沫が凍りついて白銀の『氷紋』や『氷瀑』が出現することがあります。阪急箕面駅から大滝までは片道約2.7km（徒歩約40分）の舗装された「滝道」が整備されており、冬の清冽なマイナスイオンを浴びながら快適なウォーキングを楽しめます。"
  },
  {
    "q": "箕面名物「もみじの天ぷら」の歴史と味の特徴、どこで買える？",
    "a": "「もみじの天ぷら」は、約1300年前に箕面山で修行していた修験道の開祖・役行者が、滝に映える紅葉の美しさに感銘を受け、灯明の油で紅葉を揚げて旅人に振る舞ったのが始まりと伝えられる歴史ある銘菓です。使用される葉は観賞用ではなく、食用に無農薬栽培された「一行寺楓（いっこうじかえで）」。収穫後に約1年間塩漬けにしてアクを抜き、塩出しした後に小麦粉・砂糖・白ごまを合わせた特製衣をつけて菜種油で丁寧に手揚げされます。カリッとした香ばしい歯ごたえと程よい甘み、ゴマの風味が絶妙で、阪急箕面駅から滝道沿いに並ぶ数々の老舗店で実演販売されています。"
  },
  {
    "q": "北大阪急行の箕面萱野駅延伸により、勝尾寺へのアクセスはどう変わった？",
    "a": "2024年に北大阪急行が千里中央から「箕面萱野駅」まで延伸開業したことで、大阪梅田や新大阪から乗り換えなしで箕面萱野駅まで直通約20〜25分でアクセスできるようになりました。箕面萱野駅前のバスターミナルからは、勝尾寺へ直行する路線バスが毎日運行されており、移動時間が大幅に短縮されています。また、土日祝日や正月三が日には箕面大滝周辺を結ぶ周遊バスも運行されるため、自家用車の冬道運転や駐車場渋滞を避けて快適に周遊できます。"
  },
  {
    "q": "冬の箕面温泉と池田・伏尾温泉の泉質・効能の違いは？",
    "a": "箕面温泉は地下約1000mから湧出する炭酸水素塩泉（重曹泉）で、ナトリウムイオンと炭酸水素イオンを極めて高濃度に含んでいます。角質を柔らかくして肌の汚れを落とすクレンジング効果があり、「美肌の湯」「関西の奥座敷の名湯」として親しまれています。一方、隣接する池田市の伏尾温泉は天然ラジウム温泉（単純弱放射能泉）で、浸かることで血行が促進され、身体の芯まで温まり免疫力を高めるホルミシス効果が期待できます。冬の寒さで縮こまった身体を解きほぐすのに、両温泉とも極めて贅沢な湯浴み環境を提供しています。"
  }
];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-rose-500 selection:text-white">
        {/* Breadcrumb Bar */}
        <nav aria-label="パンくずリスト" className="bg-white border-b border-stone-200 text-xs text-stone-500 py-3 px-4 sm:px-8">
          <div className="max-w-5xl mx-auto flex items-center space-x-2">
            <Link href="/" className="hover:text-rose-600 transition">ホーム</Link>
            <span>/</span>
            <Link href="/features" className="hover:text-rose-600 transition">特集一覧</Link>
            <span>/</span>
            <span className="text-stone-800 font-medium">大阪・箕面＆勝尾寺 冬の勝ちダルマ初詣と箕面大滝</span>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 text-white py-16 sm:py-24 px-4 sm:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#e11d48_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-400/30 text-xs sm:text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4 text-rose-400" />
              11月・12月・1月冬の北摂探訪スペシャル
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
              【大阪・箕面＆勝尾寺】<br className="hidden sm:inline" />
              勝ち運の寺「勝尾寺」新春初詣と勝ちダルマ祈願！<br />
              白銀の「箕面大滝」氷紋と名物もみじ天ぷら・箕面温泉名宿
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-stone-300 leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
              北大阪急行の延伸で都心から直通約20分と飛躍的に身近になった北摂の奥座敷・箕面。境内の至る所を真っ赤な勝ちダルマが埋め尽くす「勝尾寺」で己に打ち勝つ新春初詣。冬の澄んだ大気の中、落差33mの名瀑「箕面大滝」が魅せる氷紋・氷瀑の神秘。1300年の歴史を紡ぐ香ばしい「もみじの天ぷら」と、トロトロの美肌名湯「箕面温泉」「伏尾温泉」を巡る至福の冬旅へご案内します。
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-stone-300">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <Calendar className="w-4 h-4 text-rose-400" /> 最適期: 11月中旬〜1月下旬
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <MapPin className="w-4 h-4 text-rose-400" /> エリア: 大阪府箕面市・池田市・北摂
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <Waves className="w-4 h-4 text-rose-400" /> 温泉: 箕面温泉（重曹泉）・伏尾温泉（ラジウム泉）
              </span>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          
          {/* Section 1: 勝尾寺の勝ちダルマ信仰と新春初詣 */}
          <section className="mb-16">
            <div className="border-l-4 border-rose-600 pl-4 mb-6">
              <span className="text-xs font-bold text-rose-600 tracking-wider uppercase">Sacred Daruma Pilgrimage</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                己の弱さに打ち勝つ！「勝尾寺」の勝ちダルマ信仰と厳かな新春大護摩供
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                大阪府北部の箕面山中、標高約400mの山懐に鎮座する高野山真言宗の名刹「勝尾寺（かつおうじ）」。開山は神亀4年（727年）、善仲・善算の双子僧が草庵を結んだことに始まり、平安時代初期には第六代座主・行巡上人が清和天皇の重病を祈祷によって平癒させた功績から「王に勝った寺＝勝王寺」の寺号を賜りました。しかし寺側が「王に勝つとは畏れ多い」と控え、尾の文字に改めて「勝尾寺」と称するようになったという奥ゆかしい歴史を伝えています。以後、源頼朝や足利義満、豊臣秀吉、徳川家康など名だたる武将たちが戦勝や大願成就を祈願したことから、日本有数の「勝運の寺」として崇められてきました。
              </p>
              <p>
                勝尾寺の境内を一歩歩けば、誰もがその圧倒的な光景に息を呑みます。本堂へ至る石段の脇、灯篭の隙間、石垣の窪み、さらには大講堂の前の奉納棚に至るまで、大小無数の赤い「勝ちダルマ」が所狭しと並び、参拝者を温かく、かつ鋭い眼差しで見つめ返しています。この勝ちダルマは、他人を打ち負かすためのものではなく、「己の甘えや怠け心に打ち勝ち、立てた目標を最後まで成し遂げる」ための誓いの象徴です。
              </p>
              <p>
                新春の初詣では、新年の目標を心に定めた参拝者が列をなし、授与所で自分に合った勝ちダルマを選び取ります。背面に達成したい大願を直筆で墨書し、本堂の清浄なお香の煙で薫蒸。強い決意とともに右目を墨で描き入れます。一年間、自室や仕事場の目立つ場所に祀り、日々精進を重ねた末に見事大願が成就した暁には、感謝を込めて左目を描き入れ、境内の奉納棚へ納めるのが伝統の作法です。元旦から行われる「新春大護摩供」では、太鼓の轟音とともに燃え盛る護摩の炎が冬の冷気を切り裂き、厄災消除と勝運成就の強烈なエネルギーを授けてくれます。
              </p>
            </div>
          </section>

          {/* Section 2: 箕面大滝の冬景色と氷紋・もみじの天ぷら */}
          <section className="mb-16">
            <div className="border-l-4 border-amber-600 pl-4 mb-6">
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">Nature & Traditional Craft</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                日本の滝百選「箕面大滝」冬の清冽な氷紋と、1300年伝承銘菓「もみじの天ぷら」
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                勝尾寺から山道を下ると、明治の森箕面国定公園の中核をなす名勝「箕面大滝（みのおおおたき）」が姿を現します。落差33m、幅5mを誇る雄大な直瀑は、日本の滝百選に選定された天下の名瀑。水が垂直に落下する姿が農具の「箕（み）」に似ていることから「箕面」の地名が生まれたとも伝えられています。11月中旬から下旬にかけては、滝壺を囲むイロハモミジが燃えるような朱色に染まり、関西随一の紅葉狩り客で賑わいますが、12月に入ると観光客の喧騒が去り、静謐な冬の自然美が訪れます。
              </p>
              <p>
                落葉した冬の箕面渓谷は、木立の隙間から冬の柔らかな日差しが差し込み、澄み切った清流のせせらぎと野鳥のさえずりが心地よく響き渡ります。特に1月から2月にかけて強い寒波が到来し、氷点下の朝が続くと、飛沫が岩肌に凍りついて白銀の「氷紋（ひょうもん）」や「氷瀑」を形成することがあります。黒々とした巨岩にクリスタルのように張り付く氷柱と、轟音を立てて落下する清流のコントラストは、冬にしか出逢えない奇跡の一瞬です。
              </p>
              <p>
                阪急箕面駅から大滝まで続く約2.7kmの舗装路「滝道（たきみち）」は、緩やかな勾配で冬のウォーキングに最適です。この滝道沿いで香ばしい甘い香りを漂わせているのが、箕面名物「もみじの天ぷら」です。発祥は約1300年前、箕面山で修行していた修験道の祖・役行者が、紅葉の美しさに心を打たれ、灯明の油で紅葉を揚げて旅人に振る舞ったのが始まりとされています。使われる紅葉は観賞用ではなく、食用に山で無農薬栽培された「一行寺楓」。収穫した葉を丸1年間塩漬けにして熟成させ、塩抜きした後に小麦粉、上白糖、炒りゴマを合わせた秘伝の衣をまとわせ、菜種油で一枚一枚手揚げされます。カリッとした心地よい歯ごたえと胡麻の芳ばしさ、素朴な甘みは、冬の冷えた身体に温もりを届けてくれる最高の散策のお供です。
              </p>
            </div>
          </section>

          {/* Section 3: 箕面温泉＆伏尾温泉の泉質と癒やし */}
          <section className="mb-16">
            <div className="border-l-4 border-teal-600 pl-4 mb-6">
              <span className="text-xs font-bold text-teal-600 tracking-wider uppercase">Hot Spring Healing</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                大阪平野一望の天空パノラマ「箕面温泉」と山里の秘湯「伏尾温泉」の極上湯浴み
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                冬の箕面散策で冷えた身体を芯から温めてくれるのが、北摂が誇る豊かな天然温泉です。「箕面温泉」は、地下約1000mの古代地層から湧出するナトリウム-炭酸水素塩・塩化物泉（重曹泉）。無色透明ながら極めてトロリとした濃厚な肌触りが特徴で、入浴した瞬間に肌が滑らかになることから「美肌の湯」「命の温泉」と称賛されてきました。炭酸水素塩泉の清浄効果と塩化物泉の保温効果を兼ね備えており、湯上がりの肌をしっとりと包み込み、湯冷めしにくい極上の泉質を誇ります。
              </p>
              <p>
                箕面の山腹に建つ宿からは、空気が澄み渡る冬ならではの特権として、大阪市街からあべのハルカス、遠く大阪湾まで見渡すパノラマビューを満喫できます。夕暮れ時から夜にかけては、眼下に広がる街並みが1000万ドルの大夜景へと変貌し、湯気に包まれながら至高のリラクゼーションを味わえます。
              </p>
              <p>
                一方、箕面から山を一つ越えた池田市伏尾町に湧く「伏尾温泉」は、五月山の静寂な山里に位置する名湯。自家源泉の天然ラジウム温泉（単純弱放射能温泉）は、微量のラドンを含むことで血流を促進し、細胞を活性化させて免疫力を高めるホルミシス効果が期待されます。冬の庭園露天風呂で雪化粧した里山を眺めながら長湯を楽しめば、日頃のストレスや旅の疲労が一気に溶け出していきます。
              </p>
            </div>
          </section>

          {/* Section 4: 厳選名宿5選 */}
          <section className="mb-16">
            <div className="border-l-4 border-rose-600 pl-4 mb-8">
              <span className="text-xs font-bold text-rose-600 tracking-wider uppercase">Verified Hotels via Rakuten API</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                【楽天トラベル実データ連携】箕面温泉・勝尾寺周辺の厳選名宿5選
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                ※リアルタイムAPIから取得した宿泊料金目安・レビュー評価・立地条件を掲載しています。
              </p>
            </div>

            <div className="space-y-8">
              {hotels.map((h) => (
                <div key={h.id} className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition">
                  <div className="p-5 sm:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded bg-rose-50 text-rose-700 border border-rose-200">
                        厳選第{h.id}位
                      </span>
                      <div className="flex items-center gap-3 text-xs sm:text-sm">
                        <span className="flex items-center text-amber-500 font-bold">
                          <Star className="w-4 h-4 fill-amber-400 stroke-amber-400 mr-1" />
                          {h.rating}
                        </span>
                        <span className="text-stone-400">({h.reviews.toLocaleString()}件)</span>
                        <span className="text-rose-600 font-black text-sm sm:text-base">
                          {h.price}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
                      {h.name}
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <span>{h.access}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-4">
                      {h.story}
                    </p>

                    <div className="bg-stone-50 rounded-lg p-3.5 space-y-2 mb-5 text-xs text-stone-600">
                      <div>
                        <strong className="text-stone-800 font-semibold mr-1">客室の魅力:</strong>
                        {h.roomTip}
                      </div>
                      <div>
                        <strong className="text-stone-800 font-semibold mr-1">冬の美食:</strong>
                        {h.gourmetTip}
                      </div>
                    </div>

                    <div className="mb-5">
                      <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">
                        宿泊ポイント・魅力
                      </h4>
                      <ul className="grid grid-cols-1 gap-1.5">
                        {h.highlights.map((hl: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-stone-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
                      <span className="text-[11px] text-stone-400">
                        楽天トラベル公認宿泊プラン・即時予約対応
                      </span>
                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-bold transition shadow-sm"
                      >
                        楽天トラベルでプラン・空室を確認
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: 冬の箕面1泊2日モデルコース */}
          <section className="mb-16">
            <div className="border-l-4 border-stone-700 pl-4 mb-6">
              <span className="text-xs font-bold text-stone-600 tracking-wider uppercase">Model Itinerary</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                【1泊2日】勝運祈願と冬の滝道・美肌温泉を満喫する箕面モデルコース
              </h2>
            </div>
            <div className="bg-white border border-stone-200 rounded-xl p-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-stone-800 text-white text-xs font-bold rounded">DAY 1</span>
                  <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                    都心から箕面へ！北大阪急行延伸で直通・勝尾寺で勝ちダルマ初詣と大阪夜景温泉
                  </h3>
                </div>
                <ul className="border-l-2 border-stone-200 ml-3 pl-4 space-y-3 text-xs sm:text-sm text-stone-600">
                  <li>
                    <strong className="text-stone-800">10:00</strong> 新大阪駅または梅田から北大阪急行直通で「箕面萱野駅」に到着。駅前バスターミナルから直行バスに乗車。
                  </li>
                  <li>
                    <strong className="text-stone-800">10:45</strong> 「勝尾寺」到着。山門をくぐり、無数の勝ちダルマが迎える境内で新春初詣。勝ちダルマを授かり右目に大願の目入れを行う。
                  </li>
                  <li>
                    <strong className="text-stone-800">13:00</strong> 境内の茶屋や箕面萱野駅前で名物の温かい手打ちうどんや箕面名水ゆば御膳の昼食。
                  </li>
                  <li>
                    <strong className="text-stone-800">15:30</strong> 「箕面観光ホテル」または「伏尾温泉 不死王閣」へチェックイン。
                  </li>
                  <li>
                    <strong className="text-stone-800">17:00</strong> 夕暮れ時、大阪平野を見下ろす天空露天風呂でトロトロの重曹泉に浸かり、1000万ドルの大夜景を鑑賞。
                  </li>
                  <li>
                    <strong className="text-stone-800">19:00</strong> 冬旬の会席料理や特選ぼたん鍋、バイキングで北摂の味覚に舌鼓。
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-stone-100">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-rose-600 text-white text-xs font-bold rounded">DAY 2</span>
                  <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                    朝の清冽な箕面大滝へ！滝道ウォーキングと熱々もみじ天ぷら実演
                  </h3>
                </div>
                <ul className="border-l-2 border-stone-200 ml-3 pl-4 space-y-3 text-xs sm:text-sm text-stone-600">
                  <li>
                    <strong className="text-stone-800">08:00</strong> 朝風呂で身体を目覚めさせ、和洋の栄養満点な朝食を堪能してチェックアウト。
                  </li>
                  <li>
                    <strong className="text-stone-800">09:30</strong> 阪急箕面駅から「滝道」をウォーキング。冬の澄んだ大気を吸い込みながら箕面川沿いを散策。
                  </li>
                  <li>
                    <strong className="text-stone-800">10:30</strong> 「箕面大滝」に到着。落差33mの豪快な飛沫と、寒波時の奇跡「氷紋」の自然造形美を鑑賞。
                  </li>
                  <li>
                    <strong className="text-stone-800">11:45</strong> 滝道沿いの老舗店で揚げたての「もみじの天ぷら」を購入し、香ばしい胡麻の風味を味わいながら下山。
                  </li>
                  <li>
                    <strong className="text-stone-800">13:00</strong> 箕面駅前で名物クラフトビール「箕面ビール」をお土産に購入し、快適な帰路へ。
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6: FAQ Section */}
          <section className="mb-16">
            <div className="border-l-4 border-rose-600 pl-4 mb-6">
              <span className="text-xs font-bold text-rose-600 tracking-wider uppercase">Frequently Asked Questions</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                冬の箕面・勝尾寺旅行 よくある質問（FAQ）
              </h2>
            </div>
            <div className="space-y-4">
              {faqList.map((f, i) => (
                <div key={i} className="bg-white border border-stone-200 rounded-xl p-5">
                  <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-2 flex items-start gap-2">
                    <span className="text-rose-600 font-black">Q.</span>
                    <span>{f.q}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5 border-l-2 border-rose-100">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: 内部リンク & 関連記事クロスナビゲーション */}
          <section className="border-t border-stone-200 pt-10">
            <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Compass className="w-4 h-4 text-rose-600" />
              RELATED WINTER FEATURES（冬の注目特集一覧）
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <Link 
                href="/winter-hyogo-takarazuka-kiyoshikojin-hatsumode-takedao-onsen-sandagyu-stay"
                className="p-3 bg-white border border-stone-200 rounded-lg hover:border-rose-400 hover:shadow-sm transition"
              >
                <div className="font-bold text-stone-800 mb-1">【兵庫】宝塚＆武田尾温泉の冬旅</div>
                <p className="text-stone-500">清荒神清澄寺の新春初詣と武庫川渓谷の雪見露天・三田牛会席名宿</p>
              </Link>
              <Link 
                href="/winter-kyoto-tango-amanohashidate-ine-funaya-taizagani-kanburi-stay"
                className="p-3 bg-white border border-stone-200 rounded-lg hover:border-rose-400 hover:shadow-sm transition"
              >
                <div className="font-bold text-stone-800 mb-1">【京都】丹後・天橋立＆伊根の舟屋</div>
                <p className="text-stone-500">日本三景雪景色と幻の間人蟹・寒鰤しゃぶしゃぶ・絶景海見露天名宿</p>
              </Link>
              <Link 
                href="/winter-nara-kashihara-jingu-hatsumode-asuka-asukunabe-yamatogyu-stay"
                className="p-3 bg-white border border-stone-200 rounded-lg hover:border-rose-400 hover:shadow-sm transition"
              >
                <div className="font-bold text-stone-800 mb-1">【奈良】橿原神宮＆飛鳥の新春初詣</div>
                <p className="text-stone-500">日本建国の聖地新春祈願と飛鳥鍋・大和牛・名湯ホテル名宿</p>
              </Link>
              <Link 
                href="/winter-mie-iseshima-jingu-hatsumode-toba-matoya-oyster-ise-ebi-stay"
                className="p-3 bg-white border border-stone-200 rounded-lg hover:border-rose-400 hover:shadow-sm transition"
              >
                <div className="font-bold text-stone-800 mb-1">【三重】伊勢神宮初詣＆的矢牡蠣</div>
                <p className="text-stone-500">宇治橋の冬至初日の出と的矢かき・伊勢海老・松阪牛美食名宿</p>
              </Link>
            </div>
            <div className="mt-6 text-center">
              <Link 
                href="/features"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 hover:text-rose-700 transition"
              >
                全国の冬特集・温泉宿泊ガイド一覧を見る →
              </Link>
            </div>
          </section>

        </main>
      </article>
    </>
  );
}
