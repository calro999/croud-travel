import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Anchor, AlertTriangle, Trophy, Sparkle
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月大阪】箕面＆能勢・池田！日本の滝百選「箕面大滝」の冬情趣と勝運の寺「勝尾寺」初詣・冬の極上味覚「能勢の天然猪鍋（ぼたん鍋）」＆箕面温泉名宿5選",
  description: "冬の静寂に包まれる日本の滝百選「箕面大滝」と、境内一面に無数の勝ちダルマが並ぶ勝運の寺「勝尾寺」での新春初詣を巡る11〜1月の大阪・箕面＆北摂・能勢特集。箕面大滝への滝道散策で味わう名物「もみじの天ぷら」や、厳冬期限定の能勢の極上「天然猪鍋（ぼたん鍋）」・池田牛。そして大阪平野の夜景を一望する天空露天風呂や「関西の奥座敷」箕面温泉・伏尾温泉の極上美肌湯に癒やされる厳選宿5選を徹底特集します。",
  keywords: '勝尾寺 初詣, 箕面大滝 冬, 箕面温泉 ホテル, 能勢 ぼたん鍋 宿, 伏尾温泉 不死王閣, もみじの天ぷら 箕面, 勝ちダルマ 勝尾寺, 11月 12月 1月 大阪 旅行, 箕面観光ホテル',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-osaka-minoo-katsuo-ji-daruma-botannabe-stay/"
  },
  openGraph: {
    title: "【11・12・1月大阪】箕面＆能勢・池田！日本の滝百選「箕面大滝」の冬情趣と勝運の寺「勝尾寺」初詣・冬の極上味覚「能勢の天然猪鍋（ぼたん鍋）」＆箕面温泉名宿5選",
    description: "冬の静寂に包まれる日本の滝百選「箕面大滝」と、境内一面に無数の勝ちダルマが並ぶ勝運の寺「勝尾寺」での新春初詣を巡る11〜1月の大阪・箕面＆北摂・能勢特集。箕面大滝への滝道散策で味わう名物「もみじの天ぷら」や、厳冬期限定の能勢の極上「天然猪鍋（ぼたん鍋）」・池田牛。そして大阪平野の夜景を一望する天空露天風呂や「関西の奥座敷」箕面温泉・伏尾温泉の極上美肌湯に癒やされる厳選宿5選を徹底特集します。",
    url: 'https://croud-travel.com/winter-osaka-minoo-katsuo-ji-daruma-botannabe-stay',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '冬の大阪・箕面大滝と勝尾寺勝ちダルマ初詣'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月大阪】箕面＆能勢・池田！日本の滝百選「箕面大滝」の冬情趣と勝運の寺「勝尾寺」初詣・冬の極上味覚「能勢の天然猪鍋（ぼたん鍋）」＆箕面温泉名宿5選",
    description: "冬の静寂に包まれる日本の滝百選「箕面大滝」と、境内一面に無数の勝ちダルマが並ぶ勝運の寺「勝尾寺」での新春初詣を巡る11〜1月の大阪・箕面＆北摂・能勢特集。箕面大滝への滝道散策で味わう名物「もみじの天ぷら」や、厳冬期限定の能勢の極上「天然猪鍋（ぼたん鍋）」・池田牛。そして大阪平野の夜景を一望する天空露天風呂や「関西の奥座敷」箕面温泉・伏尾温泉の極上美肌湯に癒やされる厳選宿5選を徹底特集します。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function OsakaMinooWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "【11・12・1月大阪】箕面＆能勢・池田！日本の滝百選「箕面大滝」の冬情趣と勝運の寺「勝尾寺」初詣・冬の極上味覚「能勢の天然猪鍋（ぼたん鍋）」＆箕面温泉名宿5選",
        "description": "冬の静寂に包まれる日本の滝百選「箕面大滝」と、境内一面に無数の勝ちダルマが並ぶ勝運の寺「勝尾寺」での新春初詣を巡る11〜1月の大阪・箕面＆北摂・能勢特集。箕面大滝への滝道散策で味わう名物「もみじの天ぷら」や、厳冬期限定の能勢の極上「天然猪鍋（ぼたん鍋）」・池田牛。そして大阪平野の夜景を一望する天空露天風呂や「関西の奥座敷」箕面温泉・伏尾温泉の極上美肌湯に癒やされる厳選宿5選を徹底特集します。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "2026-10-05T00:00:00+09:00",
        "dateModified": "2026-10-05T00:00:00+09:00",
        "author": {
          "@type": "Organization",
          "name": "旅クラウド編集部",
          "url": "https://croud-travel.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "旅クラウド",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.com/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/winter-osaka-minoo-katsuo-ji-daruma-botannabe-stay"
        }
      },
      {
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
            "name": "冬の旅特集一覧",
            "item": "https://croud-travel.com/features"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "大阪・箕面＆能勢 勝尾寺初詣と天然ぼたん鍋名宿",
            "item": "https://croud-travel.com/winter-osaka-minoo-katsuo-ji-daruma-botannabe-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "勝運の寺「勝尾寺（かつおじ）」の初詣の見どころと「勝ちダルマ」の奉納作法は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "大阪府箕面市に鎮座する「勝尾寺（勝王寺）」は、平安時代に清和天皇の病気平癒を祈祷して「王に勝った寺」として勝王寺の号を賜り、後に「勝尾寺」と改めた千三百年余の歴史を誇る勝運祈願の根本道場です。境内には参拝者が願いを込めて奉納した無数の赤い「勝ちダルマ（勝運ダルマ）」が石垣や堂塔に所狭しと並び、圧倒的な景観を作り出しています。初詣では「自分自身の弱さに勝つ」勝運ダルマを授かり、目標を念じながらダルマの右目に墨を入れ、願いが成就した際に左目を入れて寺に奉納する風習があります。正月三が日には国内外から多くの参拝客が訪れ、新年の大願成就を祈願します。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の「箕面大滝」と滝道散策の見どころ・名物「もみじの天ぷら」とは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "日本の滝百選に選定されている「箕面大滝（みのおのおおたき）」は、落差33メートルのダイナミックな名瀑です。冬期は紅葉の喧騒が去り、澄み切った冷気の中で水しぶきを上げる滝の白糸と岩肌が織りなす静寂な絶景を楽しめます。阪急箕面駅から大滝へと続く約2.7km（徒歩約40分）の滝道沿いには、1300年以上の歴史を持つ銘菓「もみじの天ぷら」の実演販売店が並びます。無農薬栽培された食用もみじの葉を1年間塩漬けにし、秘伝の甘い衣をつけて香ばしい菜種油で丁寧に揚げたもみじの天ぷらは、カリッとした香ばしい歯ごたえと上品な甘みが特徴で、冬の散策のお供に最適です。"
            }
          },
          {
            "@type": "Question",
            "name": "能勢名物「天然猪鍋（ぼたん鍋）」が冬に絶品とされる理由は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "大阪の奥座敷・能勢町は豊かな山林に囲まれ、どんぐりや栗など自然の木の実を豊富に食べて育つ天然の猪（イノシシ）の好猟場です。猪肉の旬は脂が最も乗る11月中旬の狩猟解禁から2月にかけての厳冬期。牡丹（ボタン）の花のように美しく皿に盛り付けられた猪肉は、豚肉や牛肉に比べて低カロリー・高タンパクで、コラーゲンやビタミンB群が豊富です。特製の赤味噌・白味噌をブレンドした秘伝出汁で煮込むと、煮込むほどに柔らかく甘みが増し、臭みは一切ありません。熱々の猪鍋は冬の寒さを芯から吹き飛ばしてくれる至高のご馳走です。"
            }
          },
          {
            "@type": "Question",
            "name": "北大阪急行延伸（箕面萱野駅開業）による箕面・勝尾寺へのアクセス向上は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "2024年に北大阪急行線（Osaka Metro御堂筋線直通）が千里中央駅から「箕面船場阪大前駅」「箕面萱野（みのおかやの）駅」まで延伸開業したことにより、新大阪駅や梅田駅から箕面エリアへのアクセスが劇的に向上しました。新大阪駅から箕面萱野駅までは直通電車でわずか約19分。箕面萱野駅前からは勝尾寺や箕面大滝方面への直行路線バスが運行されており、公共交通機関を利用した冬の初詣や温泉観光がこれまで以上に快適かつスムーズに行えるようになっています。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の箕面・能勢・池田を巡る1泊2日のおすすめ観光モデルコースは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "【1日目】新大阪駅または大阪市内を出発 → 阪急宝塚線池田駅で下車し「カップヌードルミュージアム大阪池田」でオリジナルカップヌードル作り体験 → 池田城跡公園で冬の庭園を鑑賞 → 箕面市へ移動し箕面駅前から滝道を歩いて「箕面大滝」へ（名物もみじの天ぷらを食べ歩き） → 箕面観光ホテルまたは能勢温泉・伏尾温泉にチェックイン → 天空露天風呂で大阪夜景を眺めながら湯浴み、極上バイキングや天然ぼたん鍋を堪能。【2日目】宿を出発し勝運の寺「勝尾寺」へ初詣・勝ちダルマ祈願と境内散策 → 能勢町の里山カフェや道の駅能勢（くりの郷）で特産品のお土産購入 → 帰路へ。"
            }
          }
        ]
      }
    ]
  };

  const hotelsList = [
            {
              id: 1,
              name: "大江戸温泉物語Ｐｒｅｍｉｕｍ　箕面観光ホテル（２０２６年１０月１日リニューアルオープン）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/29844/29844.jpg",
              rating: 3.91,
              reviews: 2558,
              price: "¥16,800〜",
              access: "阪急箕面線　箕面駅徒歩5分以内／名神　茨木インター～国道１７１号～ホテル",
              special: "絶景の「天空湯屋」とスパーガーデンで温泉ステイを楽しむホテル",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29844%2F29844.html",
              story: "箕面国定公園の玄関口にそびえ立ち、大阪平野から遠く大阪湾まで見渡す大パノラマ絶景と関西屈指の規模を誇る温泉エンターテインメント施設「箕面温泉スパーガーデン」を併設した名門ホテル「大江戸温泉物語Premium 箕面観光ホテル」。標高約180mの最上階に位置する宿泊者専用「天空露天風呂」からは、冬の澄み渡る夜空の下に煌めく大阪1000万ドルの大パノラマ夜景が足元いっぱいに広がります。泉質は「美人の湯」として全国に名を馳せるナトリウム―炭酸水素塩・塩化物温泉。とろとろとした濃密な湯触りが冬の乾燥した肌をしっとりスベスベに整え、冷え切った身体を芯からポカポカに温め上げます。夕食は豪華バイキングまたはプレミアム会席で、季節の厳選食材を使った多彩な料理やライブキッチンから出来立ての牛ロースステーキ・揚げたて天ぷらが振る舞われます。勝尾寺や箕面大滝へのアクセス拠点としても抜群の利便性を誇り、家族旅行からカップルの記念日旅まで幅広く支持されています。",
              roomTip: "大阪平野パノラマ夜景ビュー和洋室。ワイドな窓から宝石を散りばめたような大阪市街の夜景を客室から寛ぎながら満喫できます。",
              gourmetTip: "「プレミアムディナーバイキング」。目の前で焼き上げる牛ロースステーキや揚げたての天ぷら、冬の海鮮握り寿司が食べ放題の豪華饗宴。",
              highlights: [
                "標高180mの天空露天風呂から望む大阪1000万ドルの夜景＆濃密美肌天然温泉",
                "豪華プレミアムディナーバイキング・牛ロースステーキ＆揚げたて天ぷら",
                "箕面大滝・勝尾寺観光の拠点・箕面スパーガーデンで大衆演劇も満喫"
              ]
            },
            {
              id: 2,
              name: "能勢温泉",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/130199/130199.jpg",
              rating: 4.30,
              reviews: 245,
              price: "¥6,050〜",
              access: "阪急電鉄 池田駅より当館無料送迎バス45分 / 能勢電鉄山下駅より当館の無料送迎バスで約20分(要予約)",
              special: "大阪市内から約60分！近場で天然温泉と旬の季節料理、豊かな自然を楽しめるのが魅力です。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F130199%2F130199.html",
              story: "大阪府最北端・「大阪のてっぺん」と呼ばれる能勢町の長閑な里山に佇み、自家源泉の天然ラジウム温泉と極上の冬の味覚で多くの食通を魅了する「能勢温泉」。地下深くから湧出する天然温泉は、身体を芯から温めて免疫力を高めるラドンを豊富に含む単純弱放射能温泉。冬の澄んだ空気と里山の静寂に包まれながら浸かる庭園露天風呂は、日頃のストレスを一気に忘れさせてくれます。宿の冬の真骨頂は、能勢の山々で獲れた新鮮な天然猪肉を使った「極上天然ぼたん鍋」。特製のコク深い秘伝味噌出汁で煮込む猪肉は、全く臭みがなく、脂身の甘みと赤身の深いコクが口いっぱいに広がる至高の冬の味覚です。山里ならではの心温まるもてなしと滋味あふれる郷土料理が、訪れる旅人の心と体を優しく癒やします。",
              roomTip: "里山庭園ビュー和室。四季折々の表情を見せる日本庭園を眺めながら、鳥のさえずりと静寂に包まれる癒やしのひととき。",
              gourmetTip: "「能勢天然ぼたん鍋特選会席」。厳選された天然猪肉の美しい花盛りと、地元能勢産の新鮮冬野菜、しめの雑炊まで猪の旨味を余すところなく堪能。",
              highlights: [
                "里山に佇む自家源泉ラジウム温泉・庭園露天風呂と能勢名物天然猪鍋",
                "能勢山中で獲れた極上天然猪肉のぼたん鍋会席＆地元冬野菜の旨味",
                "「大阪のてっぺん」能勢の豊かな自然・鳥のさえずりに癒やされる静寂"
              ]
            },
            {
              id: 3,
              name: "伏尾温泉　不死王閣",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4791/4791.jpg",
              rating: 4.30,
              reviews: 1234,
              price: "¥11,550〜",
              access: "大阪市内から車で30分。大阪空港より車で２０分。阪急池田駅より車で10分。送迎あり。詳しくはお問い合わせください。",
              special: "大阪の温泉旅館　伏尾温泉不死王閣は、大阪市内から車で３０分。自然豊かな環境です。駐車場無料",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4791%2F4791.html",
              story: "池田市の奥座敷・伏尾温泉に佇み、大阪市内から車でわずか30分とは思えない豊かな自然と静寂に包まれた高級温泉旅館「伏尾温泉 不死王閣（ふしおうかく）」。平安時代からの歴史を伝える名湯は、美肌効果と疲労回復効果が高い天然ラジウム温泉。緑豊かな庭園露天風呂や大浴場では、冬の凛とした澄んだ空気の中で優雅な湯浴みが愉しめます。夕食は、伝統の技を受け継ぐ料理長が腕を振るう本格京風会席。冬期限定のぼたん鍋や、地元大阪・能勢のブランド黒毛和牛を使ったすき焼き・しゃぶしゃぶなど、厳選された旬の美食が並びます。勝尾寺や箕面大滝、カップヌードルミュージアム大阪池田へのアクセスも抜群で、プライベート露天風呂付き客室で過ごす贅沢な時間は格別の思い出になります。",
              roomTip: "露天風呂付き客室「風光庵」。客室専用の露天風呂から伏尾の自然林を眺め、誰にも邪魔されない贅沢なプライベート温泉を満喫できます。",
              gourmetTip: "「冬の特選黒毛和牛＆ぼたん鍋会席」。きめ細やかな霜降り和牛と旨味たっぷりの猪肉を両方味わえる贅沢極まる冬の特選プラン。",
              highlights: [
                "大阪市内から車30分の温泉リゾート・庭園露天風呂と露天風呂付き客室",
                "本格京風会席＆特選黒毛和牛すき焼き・冬期限定ぼたん鍋の贅沢膳",
                "カップヌードルミュージアムや五月山至近・ファミリーやカップルに人気"
              ]
            },
            {
              id: 4,
              name: "グリーンリッチホテル大阪空港前　人工温泉・二股湯の華",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/106200/106200.jpg",
              rating: 3.98,
              reviews: 2256,
              price: "¥3,700〜",
              access: "大阪（伊丹）空港 ・ 北タ－ミナルより 徒歩約７分！！",
              special: "空港周辺唯一男女別サウナ付き大浴場完備●伊丹空港～ホテル無料送迎■",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F106200%2F106200.html",
              story: "大阪国際空港（伊丹空港）のすぐそば、池田市に位置し、人工炭酸カルシウム温泉の大浴場とサウナを完備したスタイリッシュなホテル「グリーンリッチホテル大阪空港前 人工温泉・二股湯の華」。北海道の二股ラジウム温泉の鉱石を使用した大浴場は、炭酸カルシウムが豊富に溶け込み、疲労回復や冷え性に優れた効果を発揮します。シンプルでモダンな客室には、快眠を追求したオリジナルマットレスを完備。空港連絡バスや阪急宝塚線池田駅へのアクセスが良く、箕面大滝や勝尾寺、能勢方面への冬のドライブ旅の拠点として高いコストパフォーマンスを誇ります。旅の疲れを大浴場で流した後は、清潔感あふれるお部屋でゆったりとお寛ぎいただけます。",
              roomTip: "プレミアムダブル／ツインルーム。清潔感溢れるモダンインテリアとゆったりサイズのベッドで、快適な睡眠を約束します。",
              gourmetTip: "「和洋朝食ビュッフェ」。焼き魚や出汁巻き卵、炊き立てご飯、温かいスープなど、朝の活力となるバランスの取れた朝食。",
              highlights: [
                "大阪空港至近・二股ラジウム人工温泉大浴場＆サウナ完備で快適リフレッシュ",
                "シモンズ製ベッドで快眠・和洋朝食ビュッフェと無料Wi-Fi完備",
                "無料駐車場完備・伊丹空港・新大阪・梅田からのアクセス良好"
              ]
            },
            {
              id: 5,
              name: "南千里クリスタルホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/790/790.jpg",
              rating: 3.75,
              reviews: 2028,
              price: "¥4,950〜",
              access: "阪急千里線「南千里駅」駅直結。梅田へ約２０分　大阪空港まで車で20分。千里中央駅まで車で5分。",
              special: "【阪急線　南千里駅直結】 閑静な立地　梅田へ約20分　万博公園やPanasonic Museumへ",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F790%2F790.html",
              story: "北大阪急行・大阪モノレール千里中央駅や阪急宝塚線豊中駅エリアに位置し、北摂エリアの観光やビジネスの拠点として長年愛されている都市型ホテル「南千里クリスタルホテル」。阪急電鉄や大阪モノレール、延伸開業した北大阪急行箕面萱野駅を利用して箕面・千里中央・万博記念公園へスムーズにアクセスできる機動性が魅力です。清潔で機能的な客室には高速Wi-Fiや個別空調が完備され、冬の北摂観光を快適にサポート。周辺には北摂ならではの洗練されたレストランやカフェが充実しており、夜のグルメ散策も気軽に楽しめます。手頃な料金設定で、勝尾寺初詣や箕面大滝ハイキングの拠点に最適です。",
              roomTip: "スタンダードツインルーム。明るく落ち着いた配色の客室で、観光の荷物を広げてもゆとりあるレイアウト。",
              gourmetTip: "「モーニングセット」。サクサクのトーストと挽きたてコーヒー、新鮮サラダで爽やかな朝のスタートを切れます。",
              highlights: [
                "北摂観光・勝尾寺アクセスの拠点・リーズナブルで快適な都市型ホテル",
                "周辺に北摂の洗練レストラン多数・ビジネスから観光まで使い勝手抜群",
                "駅近で機動性抜群・万博記念公園や箕面萱野駅へのアクセス便利"
              ]
            }
  ];

  const faqs = [
    {
      q: "勝運の寺「勝尾寺（かつおじ）」の初詣の見どころと「勝ちダルマ」の奉納作法は？",
      a: "大阪府箕面市に鎮座する「勝尾寺（勝王寺）」は、平安時代に清和天皇の病気平癒を祈祷して「王に勝った寺」として勝王寺の号を賜り、後に「勝尾寺」と改めた千三百年余の歴史を誇る勝運祈願の根本道場です。境内には参拝者が願いを込めて奉納した無数の赤い「勝ちダルマ（勝運ダルマ）」が石垣や堂塔に所狭しと並び、圧倒的な景観を作り出しています。初詣では「自分自身の弱さに勝つ」勝運ダルマを授かり、目標を念じながらダルマの右目に墨を入れ、願いが成就した際に左目を入れて寺に奉納する風習があります。正月三が日には国内外から多くの参拝客が訪れ、新年の大願成就を祈願します。"
    },
    {
      q: "冬の「箕面大滝」と滝道散策の見どころ・名物「もみじの天ぷら」とは？",
      a: "日本の滝百選に選定されている「箕面大滝（みのおのおおたき）」は、落差33メートルのダイナミックな名瀑です。冬期は紅葉の喧騒が去り、澄み切った冷気の中で水しぶきを上げる滝の白糸と岩肌が織りなす静寂な絶景を楽しめます。阪急箕面駅から大滝へと続く約2.7km（徒歩約40分）の滝道沿いには、1300年以上の歴史を持つ銘菓「もみじの天ぷら」の実演販売店が並びます。無農薬栽培された食用もみじの葉を1年間塩漬けにし、秘伝の甘い衣をつけて香ばしい菜種油で丁寧に揚げたもみじの天ぷらは、カリッとした香ばしい歯ごたえと上品な甘みが特徴で、冬の散策のお供に最適です。"
    },
    {
      q: "能勢名物「天然猪鍋（ぼたん鍋）」が冬に絶品とされる理由は？",
      a: "大阪の奥座敷・能勢町は豊かな山林に囲まれ、どんぐりや栗など自然の木の実を豊富に食べて育つ天然の猪（イノシシ）の好猟場です。猪肉の旬は脂が最も乗る11月中旬の狩猟解禁から2月にかけての厳冬期。牡丹（ボタン）の花のように美しく皿に盛り付けられた猪肉は、豚肉や牛肉に比べて低カロリー・高タンパクで、コラーゲンやビタミンB群が豊富です。特製の赤味噌・白味噌をブレンドした秘伝出汁で煮込むと、煮込むほどに柔らかく甘みが増し、臭みは一切ありません。熱々の猪鍋は冬の寒さを芯から吹き飛ばしてくれる至高のご馳走です。"
    },
    {
      q: "北大阪急行延伸（箕面萱野駅開業）による箕面・勝尾寺へのアクセス向上は？",
      a: "2024年に北大阪急行線（Osaka Metro御堂筋線直通）が千里中央駅から「箕面船場阪大前駅」「箕面萱野（みのおかやの）駅」まで延伸開業したことにより、新大阪駅や梅田駅から箕面エリアへのアクセスが劇的に向上しました。新大阪駅から箕面萱野駅までは直通電車でわずか約19分。箕面萱野駅前からは勝尾寺や箕面大滝方面への直行路線バスが運行されており、公共交通機関を利用した冬の初詣や温泉観光がこれまで以上に快適かつスムーズに行えるようになっています。"
    },
    {
      q: "冬の箕面・能勢・池田を巡る1泊2日のおすすめ観光モデルコースは？",
      a: "【1日目】新大阪駅または大阪市内を出発 → 阪急宝塚線池田駅で下車し「カップヌードルミュージアム大阪池田」でオリジナルカップヌードル作り体験 → 池田城跡公園で冬の庭園を鑑賞 → 箕面市へ移動し箕面駅前から滝道を歩いて「箕面大滝」へ（名物もみじの天ぷらを食べ歩き） → 箕面観光ホテルまたは能勢温泉・伏尾温泉にチェックイン → 天空露天風呂で大阪夜景を眺めながら湯浴み、極上バイキングや天然ぼたん鍋を堪能。【2日目】宿を出発し勝運の寺「勝尾寺」へ初詣・勝ちダルマ祈願と境内散策 → 能勢町の里山カフェや道の駅能勢（くりの郷）で特産品のお土産購入 → 帰路へ。"
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-800">
        {/* Breadcrumb Navigation */}
        <nav aria-label="パンくずリスト" className="bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 py-3 text-xs md:text-sm text-slate-600 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-blue-600">ホーム</Link>
            <span>&gt;</span>
            <Link href="/features" className="hover:text-blue-600">特集一覧</Link>
            <span>&gt;</span>
            <span className="text-slate-900 font-semibold">大阪・箕面＆能勢 勝尾寺初詣＆ぼたん鍋名宿</span>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-r from-red-950 via-rose-950 to-slate-950 text-white py-16 md:py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-rose-500/30 border border-rose-300/40 text-rose-200 text-xs md:text-sm px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>11月・12月・1月冬の関西・北摂旅情特集</span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6 text-white drop-shadow-md">
              大阪・箕面＆能勢・池田<br className="hidden sm:inline" />
              日本の滝百選「箕面大滝」の冬情趣と勝運の寺「勝尾寺」初詣<br className="hidden sm:inline" />
              冬の極上味覚「能勢の天然猪鍋（ぼたん鍋）」＆箕面温泉名宿5選
            </h1>
            <p className="max-w-3xl mx-auto text-sm md:text-lg text-rose-100 leading-relaxed drop-shadow">
              冬の静寂に水しぶきが輝く箕面大滝と、無数の勝ちダルマが並ぶ勝運祈願の聖地「勝尾寺」での新春初詣。名物もみじの天ぷらをつまみながら滝道を歩き、能勢の極上天然猪鍋や大阪平野の煌めく夜景を一望する美肌温泉で心身を温める冬の大阪旅をお届けします。
            </p>
          </div>
        </header>

        {/* Article Summary Box */}
        <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
            <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b pb-3">
              <CheckCircle2 className="w-5 h-5 text-rose-600 flex-shrink-0" />
              <span>本特集でわかること（11・12・1月の大阪・箕面旅行の要点）</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-700">
              <div className="bg-rose-50/60 p-4 rounded-xl border border-rose-100">
                <span className="font-bold text-rose-900 block mb-1">① 勝尾寺初詣＆勝ちダルマ</span>
                1300年の歴史を誇る勝運根本道場。自分自身の弱さに勝つ「勝ちダルマ」祈願と境内を埋め尽くすダルマの壮観。
              </div>
              <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-100">
                <span className="font-bold text-amber-900 block mb-1">② 能勢天然ぼたん鍋＆もみじ天</span>
                狩猟解禁の冬が一番旨い能勢の天然猪肉鍋と、1300年の伝統銘菓「もみじの天ぷら」のカリッとした香ばしさ。
              </div>
              <div className="bg-indigo-50/60 p-4 rounded-xl border border-indigo-100">
                <span className="font-bold text-indigo-900 block mb-1">③ 大阪夜景一望の天空温泉</span>
                標高180mから大阪1000万ドルの夜景を見下ろす天空露天風呂や、天然ラジウム伏尾温泉の極上湯浴み名宿。
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">
          
          {/* Section 1: 勝尾寺初詣と箕面大滝の冬情趣 */}
          <section className="space-y-6">
            <div className="border-l-4 border-rose-600 pl-4">
              <span className="text-rose-600 font-bold text-sm tracking-wider uppercase">Spiritual Daruma & Waterfall</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
                勝運の寺「勝尾寺」の勝ちダルマ初詣と日本の滝百選「箕面大滝」の冬静寂
              </h2>
            </div>
            
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
              <p>
                大阪市内から北へわずか約30分、豊かな自然林に抱かれた箕面国定公園に位置する「勝尾寺（かつおじ）」は、神亀4年（727年）の開山以来、勝運祈願の根本道場として全国にその名を轟かせる名刹です。平安時代、清和天皇の玉体安穏を祈祷して「王に勝った寺＝勝王寺」の号を賜り、後に王の字を尾に改めたという由緒を持ち、源頼朝や徳川家康ら歴代の天下人もこぞって戦勝を祈願しました。
              </p>
              <p>
                勝尾寺の境内を訪れると、石垣や灯籠、本堂の回廊に至るまで、参拝者が目標を託して奉納した無数の赤い「勝ちダルマ」が整然と並ぶ圧巻の光景が目に飛び込んできます。このダルマは他人に勝つためではなく「自分自身の甘えや弱さに打ち勝つ」ためのもの。初詣では自らの目標や志を念じながらダルマの右目に墨を入れ、日々努力を重ねて願いが成就した際に左目を入れて寺に奉納します。新年の清々しい決意を固める初詣客で境内は厳かな熱気に包まれます。
              </p>
              <p>
                勝尾寺と並ぶ箕面のシンボルが、日本の滝百選に選定されている「箕面大滝（みのおのおおたき）」です。落差33メートルの大岩壁を豪快に流れ落ちる滝は、冬期には周囲の紅葉の喧騒が静まり返り、凛とした冷気の中に清流が白く輝く幻想的な冬景色を見せてくれます。阪急箕面駅から大滝まで続く約2.7kmの滝道は歩きやすく整備されており、箕面川のせせらぎを聞きながら冬枯れの木漏れ日を浴びる散策は格別の爽快感をもたらします。
              </p>
              <p>
                2024年には北大阪急行線が箕面萱野駅まで延伸開業し、新大阪駅や梅田駅からのアクセスが直通約19分と劇的に向上しました。新駅前からは勝尾寺や箕面大滝方面への路線バスも運行されており、公共交通機関を利用した冬の初詣や温泉観光がこれまで以上に快適かつスムーズに行えるようになっています。
              </p>
            </div>
          </section>

          {/* Section 2: 冬の能勢ぼたん鍋と名物もみじの天ぷら */}
          <section className="space-y-6">
            <div className="border-l-4 border-amber-500 pl-4">
              <span className="text-amber-600 font-bold text-sm tracking-wider uppercase">Winter Feast & Gourmet</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
                狩猟解禁の冬が一番旨い！「能勢の天然猪鍋（ぼたん鍋）」と伝統「もみじの天ぷら」
              </h2>
            </div>
            
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
              <p>
                箕面の滝道を散策しながら絶対に味わいたいのが、箕面名物「もみじの天ぷら」です。その歴史は役行者が箕面山で修行していた約1300年前に始まるとされ、滝に映える紅葉の美しさに感銘を受けて灯明油で揚げて旅人に振る舞ったのが起源と伝わります。専用の自家農園で育てられた食用もみじ（一行寺楓）の葉を1年間塩漬けにし、丁寧に塩抜きした後に小麦粉・砂糖・白胡麻を合わせた秘伝の衣をつけて香ばしい菜種油で一枚ずつ揚げた逸品は、サクサクとした心地よい歯ごたえと上品な甘みがクセになります。
              </p>
              <p>
                そして冬の北摂・能勢エリアで主役を張るのが、11月中旬の狩猟解禁とともに登場する「天然猪鍋（ぼたん鍋）」です。能勢の山々でドングリや栗など自然の恵みをたっぷり食べて育った天然猪肉は、豚肉や牛肉よりもヘルシーで上質な脂身の甘みが特徴。大皿に牡丹の花のように美しく盛り付けられた猪肉を、特製のコク深い秘伝味噌仕立ての出汁で地元産の冬根菜とともにじっくり煮込んで味わえば、身体の芯から温まる至高の幸福感が広がります。
              </p>
              <p>
                さらに、池田市や能勢町で丹精込めて育てられる極上の黒毛和牛「池田牛・能勢黒牛」のすき焼きやステーキなど、大阪の豊かな山里が育んだ最高峰の肉料理も冬の旅を贅沢に彩ってくれます。
              </p>
              <p>
                また、箕面温泉の「美人の湯」と称される濃厚な炭酸水素塩泉や、伏尾温泉・能勢温泉の天然ラジウム温泉は、冷えた身体を芯からポカポカに温め、旅の疲れを極上に癒やしてくれます。
              </p>
            </div>
          </section>

          {/* Section 3: 厳選宿5選 */}
          <section className="space-y-8">
            <div className="border-l-4 border-rose-600 pl-4">
              <span className="text-rose-600 font-bold text-sm tracking-wider uppercase">Recommended Accommodations</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
                勝尾寺初詣と箕面大滝・天然ぼたん鍋を愉しむ厳選名宿5選
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                楽天トラベルAPIから最新の空室状況・宿泊プラン・宿泊者レビューをリアルタイム取得して厳選紹介しています。
              </p>
            </div>

            <div className="space-y-8">
              {hotelsList.map((hotel) => (
                <div 
                  key={hotel.id}
                  className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-6 md:p-8 space-y-6">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="bg-rose-600 text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                            宿 {hotel.id}
                          </span>
                          <span className="text-xs text-slate-500 flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-slate-400" />
                            {hotel.access.split('、')[0]}
                          </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                          {hotel.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-amber-500 justify-end">
                            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                            <span className="font-bold text-slate-800 text-sm md:text-base">{hotel.rating}</span>
                          </div>
                          <span className="text-xs text-slate-500">（{hotel.reviews}件のクチコミ）</span>
                        </div>
                        <div className="bg-rose-50 text-rose-900 px-3 py-1.5 rounded-xl border border-rose-100 text-right">
                          <span className="text-[10px] block text-rose-600 font-semibold">参考目安</span>
                          <span className="font-bold text-sm md:text-base">{hotel.price}</span>
                        </div>
                      </div>
                    </div>

                    {/* Story & Description */}
                    <div className="text-slate-700 text-sm md:text-base leading-relaxed">
                      {hotel.story}
                    </div>

                    {/* Highlights */}
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                      <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-rose-600" />
                        <span>この宿の特長・おすすめポイント</span>
                      </h4>
                      <ul className="space-y-1.5">
                        {hotel.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="text-xs md:text-sm text-slate-700 flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Room & Gourmet Tips */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
                      <div className="bg-rose-50/50 p-3.5 rounded-xl border border-rose-100">
                        <span className="font-bold text-rose-900 block mb-1 flex items-center gap-1">
                          <Building className="w-3.5 h-3.5 text-rose-600" />
                          おすすめ客室タイプ
                        </span>
                        <p className="text-slate-700">{hotel.roomTip}</p>
                      </div>
                      <div className="bg-amber-50/50 p-3.5 rounded-xl border border-amber-100">
                        <span className="font-bold text-amber-900 block mb-1 flex items-center gap-1">
                          <Utensils className="w-3.5 h-3.5 text-amber-600" />
                          おすすめ夕食プラン
                        </span>
                        <p className="text-slate-700">{hotel.gourmetTip}</p>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-2 flex justify-end">
                      <a
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-sm md:text-base px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                      >
                        <span>楽天トラベルでプラン・空室を確認</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: 11〜1月冬の1泊2日モデルコース */}
          <section className="space-y-6">
            <div className="border-l-4 border-rose-600 pl-4">
              <span className="text-rose-600 font-bold text-sm tracking-wider uppercase">Itinerary Guide</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
                冬の箕面・能勢・池田を満喫する1泊2日王道モデルコース
              </h2>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-slate-200 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full">1日目</span>
                  <h3 className="font-bold text-slate-900 text-base md:text-lg">池田散策と箕面大滝ハイキング・天空露天風呂で夜景鑑賞</h3>
                </div>
                <div className="pl-4 border-l-2 border-rose-200 space-y-3 text-sm text-slate-700">
                  <p><strong>10:00 阪急池田駅に到着</strong> - 「カップヌードルミュージアム 大阪池田」でオリジナルカップヌードル作り体験。チキンラーメン誕生の歴史を学ぶ。</p>
                  <p><strong>12:00 池田市内でランチ</strong> - 地元ブランド牛「池田牛」の肉うどんや手打ちそば、郷土料理を堪能。</p>
                  <p><strong>13:30 阪急箕面駅へ移動・滝道ハイキング開始</strong> - 箕面川沿いの滝道（約2.7km・徒歩約40分）を歩きながら、老舗の店先で名物「もみじの天ぷら」を揚げたてで購入。</p>
                  <p><strong>14:30 日本の滝百選「箕面大滝」の冬景色を鑑賞</strong> - 澄み切った冷気の中で勢いよく流れ落ちる落差33mの名瀑を鑑賞し、冬のマイナスイオンを浴びてリフレッシュ。</p>
                  <p><strong>16:30 宿にチェックイン</strong> - 箕面観光ホテルまたは伏尾温泉・能勢温泉へ。標高180mの天空露天風呂から大阪1000万ドルの大パノラマ夜景を一望し、美肌名湯でぽかぽかに温まる。夕食は能勢の天然猪鍋（ぼたん鍋）または豪華プレミアムバイキングに舌鼓。</p>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">2日目</span>
                  <h3 className="font-bold text-slate-900 text-base md:text-lg">勝運の寺「勝尾寺」初詣で勝ちダルマ祈願と能勢の里山グルメ</h3>
                </div>
                <div className="pl-4 border-l-2 border-amber-200 space-y-3 text-sm text-slate-700">
                  <p><strong>09:00 朝食後に出発・「勝尾寺」へ新春初詣</strong> - 境内に無数に並ぶ赤い勝ちダルマを拝観し、本堂で新年の勝運祈願。自分自身の弱さに勝つ誓いを立てて「勝ちダルマ」の右目に墨入れを行う。</p>
                  <p><strong>11:30 能勢町へドライブ</strong> - 長閑な里山風景を走りながら「道の駅 能勢（くりの郷）」で新鮮な冬根菜や特製味噌、地酒、栗スイーツなどをお土産に購入。</p>
                  <p><strong>12:30 能勢温泉や古民家食事処で天然猪鍋（ぼたん鍋）ランチ</strong> - 濃厚な味噌出汁で煮込んだ熱々の天然猪肉と冬野菜を味わい、身体の芯から温まる。</p>
                  <p><strong>15:00 箕面萱野駅または千里中央駅へ移動</strong> - 2024年延伸の北大阪急行線で新大阪・梅田方面へ快適に帰路へ。</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: 冬のアクセス＆注意点 */}
          <section className="space-y-6">
            <div className="border-l-4 border-slate-600 pl-4">
              <span className="text-slate-600 font-bold text-sm tracking-wider uppercase">Travel Tips & Weather</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
                冬の箕面・能勢旅行の気候・服装とアクセスのアドバイス
              </h2>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-slate-200 space-y-4 text-slate-700 text-sm md:text-base leading-relaxed">
              <div className="flex items-start gap-3">
                <Trophy className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">北大阪急行延伸で勝尾寺へのアクセスが劇的に便利に</h3>
                  <p className="text-slate-600 text-sm">
                    2024年の北大阪急行延伸開業により、新大阪駅から「箕面萱野駅」まで直通約19分で結ばれました。箕面萱野駅前バスターミナルからは勝尾寺行きの直行バスが運行されており、初詣や観光のアクセスが格段に向上しています。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <AlertTriangle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">山間部（能勢・箕面山中）の防寒と道路状況</h3>
                  <p className="text-slate-600 text-sm">
                    箕面大滝や勝尾寺、能勢町は大阪市街地よりも気温が3〜5度低く、冬の山風が吹きます。暖かいコートや防寒インナーを着用してください。能勢方面へ車で向かう場合、寒波襲来時の早朝・夜間は山道で路面凍結のおそれがあるため、スタッドレスタイヤの装着をおすすめします。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: FAQ Section */}
          <section className="space-y-6">
            <div className="border-l-4 border-rose-600 pl-4">
              <span className="text-rose-600 font-bold text-sm tracking-wider uppercase">Frequently Asked Questions</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
                箕面・勝尾寺初詣＆冬の北摂旅行に関するよくある質問
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base md:text-lg mb-2 flex items-start gap-2">
                    <span className="text-rose-600 font-black">Q.</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-slate-700 text-sm md:text-base leading-relaxed pl-6 border-l-2 border-rose-100">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: 内部リンク＆関連特集 */}
          <section className="bg-gradient-to-br from-slate-900 to-rose-950 rounded-3xl p-8 text-white space-y-6 shadow-xl">
            <div>
              <span className="text-rose-400 text-xs font-bold uppercase tracking-wider">Related Destinations</span>
              <h2 className="text-xl md:text-2xl font-bold mt-1">
                あわせて読みたい関西・冬の厳選旅特集
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                href="/winter-osaka-castle-nakanoshima-illumination-tenmangu-stay"
                className="bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/10 transition-colors block"
              >
                <span className="text-amber-400 text-xs font-bold block mb-1">大阪市内特集</span>
                <span className="font-bold text-sm block mb-1">大阪城＆中之島光のルネサンスと大阪天満宮初詣名宿</span>
                <span className="text-xs text-slate-300">光の祭典イルミネーションと大阪都心のラグジュアリーホテル…</span>
              </Link>
              <Link
                href="/features"
                className="bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/10 transition-colors block"
              >
                <span className="text-cyan-400 text-xs font-bold block mb-1">特集一覧</span>
                <span className="font-bold text-sm block mb-1">全国の冬シーズン・年末年始旅行特集一覧</span>
                <span className="text-xs text-slate-300">全国47都道府県の厳選温泉・初詣・冬の味覚特集を網羅…</span>
              </Link>
              <Link
                href="/"
                className="bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/10 transition-colors block"
              >
                <span className="text-emerald-400 text-xs font-bold block mb-1">トップページ</span>
                <span className="font-bold text-sm block mb-1">旅クラウド | 国内旅行・ホテル予約比較</span>
                <span className="text-xs text-slate-300">楽天トラベルAPIと連携した安心の宿泊予約ポータル…</span>
              </Link>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
