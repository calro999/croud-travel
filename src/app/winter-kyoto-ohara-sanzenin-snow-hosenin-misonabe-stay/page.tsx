import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Snowflake, Waves, Sun, Flame, Mountain, Building, Coffee, ShoppingBag, ThermometerSun
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月京都】静寂の洛北・大原三千院の白銀雪景色と宝泉院「額縁庭園」冬参拝＆名物「地鶏味噌鍋」・大原温泉の隠れ家名宿5選",
  description: "11月下旬から1月、観光客で賑わう京都市内の喧騒を離れ、静寂と清冽な大気に包まれる洛北・大原の里。天台宗の古刹「三千院」では、青苔の「有清園」にしんしんと白雪が降り積もり、愛らしい「わらべ地蔵」や国宝阿弥陀三尊像を祀る「往生極楽院」が息を呑む幽玄の美を湛えます。隣接する宝泉院では、柱と鴨居を額縁に見立てた「額縁雪景色庭園（盤桓園）」でお抹茶をいただきながら冬の山水画を鑑賞。冷え切った身体を温めるのは、100年の伝統味噌で煮込む大原名物「京地鶏味噌鍋」や「天然ぼたん鍋」、そして弱アルカリ性の美肌名湯「大原温泉」。大人の冬の京都を静かに満喫する厳選名宿5選を徹底紹介します。",
  keywords: '大原三千院 冬 雪景色, 宝泉院 額縁庭園, 大原温泉 宿, 地鶏味噌鍋 京都, お宿 芹生, 大原の里, 民宿大原山荘, ザ・プリンス京都宝ヶ池, 貴船ふじや, 11月 12月 1月 京都 旅行',
  alternates: {
    canonical: 'https://croud-travel.com/winter-kyoto-ohara-sanzenin-snow-hosenin-misonabe-stay'
  },
  openGraph: {
    title: "【11・12・1月京都】静寂の洛北・大原三千院の白銀雪景色と宝泉院「額縁庭園」冬参拝＆名物「地鶏味噌鍋」・大原温泉の隠れ家名宿5選",
    description: "11月下旬から1月、観光客で賑わう京都市内の喧騒を離れ、静寂と清冽な大気に包まれる洛北・大原の里。天台宗の古刹「三千院」では、青苔の「有清園」にしんしんと白雪が降り積もり、愛らしい「わらべ地蔵」や国宝阿弥陀三尊像を祀る「往生極楽院」が息を呑む幽玄の美を湛えます。隣接する宝泉院では、柱と鴨居を額縁に見立てた「額縁雪景色庭園（盤桓園）」でお抹茶をいただきながら冬の山水画を鑑賞。冷え切った身体を温めるのは、100年の伝統味噌で煮込む大原名物「京地鶏味噌鍋」や「天然ぼたん鍋」、そして弱アルカリ性の美肌名湯「大原温泉」。大人の冬の京都を静かに満喫する厳選名宿5選を徹底紹介します。",
    url: 'https://croud-travel.com/winter-kyoto-ohara-sanzenin-snow-hosenin-misonabe-stay',
    type: 'article',
    images: [{ url: 'https://img.travel.rakuten.co.jp/share/HOTEL/143368/143368.jpg', width: 1200, height: 630, alt: '大原三千院雪景色と大原温泉・地鶏味噌鍋名宿' }]
  }
};

export default function KyotoOharaSanzeninPage() {
  const hotelsData = [
            {
              id: 1,
              name: "大原温泉湯元　旬味草菜　お宿　芹生",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/143368/143368.jpg",
              rating: 4.78,
              reviews: 41,
              price: "¥38,582〜",
              access: "地下鉄　国際会館駅よりバスにて２５分",
              special: "大原三千院畔、大原温泉の料理旅館。美しい庭園と山菜、地野菜、川魚など。自然食材を活かしたお料理が自慢",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F143368%2F143368.html",
              story: "大原三千院の門前すぐ、手入れの行き届いた数寄屋造りと美しい庭園に抱かれた最高峰の料理旅館「大原温泉湯元 旬味草菜 お宿 芹生（せりょう）」。ミシュランガイドにも掲載された実績を誇る名門宿です。冬の冷え込みが厳しい夜、自家源泉の大原温泉を引く露天風呂からは、雪化粧の庭園が静かに広がり、身も心も芯から温まります。名物の夕食は、京都洛北の旬の山菜や地野菜、厳選された京地鶏や丹波牛を上品に仕立てた「草菜懐石」。四季の移ろいを繊細に映し出す出汁の技と器の美しさが、冬の大原ステイを忘れられない思い出にしてくれます。",
              roomTip: "庭園を望む露天風呂付き客室。雪が静かに舞い降りるプライベートな日本庭園を眺めながら、極上の湯浴みと静寂の夜を独占。",
              gourmetTip: "「名物・草菜懐石＆大原温泉湯豆腐」。大原の清らかな水で仕込んだ手作り豆腐や旬の京野菜、極上牛の小鍋仕立て。",
              highlights: [
                "三千院門前徒歩すぐ・ミシュラン掲載の数寄屋料理旅館と雪見庭園露天風呂",
                "大原の旬野菜と川魚・丹波牛の草菜懐石・繊細な出汁と手作り豆腐の極み",
                "露天風呂付き客室で過ごすプライベート雪見・夫婦や大人の記念日旅に最高峰"
              ]
            },
            {
              id: 2,
              name: "京都大原の民宿～１００年続く希少味噌～大原温泉　大原の里",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/14574/14574.jpg",
              rating: 4.19,
              reviews: 506,
              price: "¥8,800〜",
              access: "JR京都駅より京都バス 大原行きで「大原」下車 徒歩１２分★「四条河原町」～「大原」はバスで約５０分♪",
              special: "大原温泉湯元。露天・五右衛門風呂がある大原名物「味噌鍋」本家の民宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14574%2F14574.html",
              story: "大原ののどかな田園風景の中に佇み、100年以上受け継がれる秘伝の希少味噌と大原温泉が自慢の心温まる民宿「大原温泉 大原の里」。テレビや雑誌でも数多く取り上げられる名物「味噌鍋」の本家として知られます。冬の寒さの中、自家製無添加味噌の芳醇な香りが漂う鍋には、引き締まった京地鶏や旬の冬野菜、きのこがたっぷり。庭園の五右衛門露天風呂に浸かれば、大原の雪景色と澄み切った満天の星空が広がり、日常のストレスがすっと消え去るような素朴で贅沢な温もりに満たされます。",
              roomTip: "素朴で清潔な和室。窓外に広がる大原の里山雪景色と、畳の温もりに包まれて田舎に帰ったような安らぎを実感。",
              gourmetTip: "「元祖・大原名物味噌鍋会席」。100年伝承の自家製味噌の出汁に京地鶏の旨みが溶け出す熱々鍋。締めのおじやも絶品。",
              highlights: [
                "100年続く自家製味噌と名物味噌鍋の本家・五右衛門露天風呂で星空雪見湯",
                "京地鶏と冬根菜の元祖味噌鍋・濃厚な味噌出汁で身体の芯から温まる郷土料理",
                "アットホームな民宿の温もり・冬の一人旅や女子旅にも大人気の癒やし宿"
              ]
            },
            {
              id: 3,
              name: "大原温泉　湯元のお宿　民宿大原山荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/71953/71953.jpg",
              rating: 4.45,
              reviews: 371,
              price: "¥8,250〜",
              access: "京都バス　大原バス停より田舎道をきれいな景色を眺めながらブラブラ歩いて約１５分。午後３時以降大原バス停より送迎あります。",
              special: "京都駅から一時間程、静かな洛北の地で山々とせせらぎに包まれて普段より湯っくり湯ったりお過ごし下さい。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F71953%2F71953.html",
              story: "寂光院への参道沿いに位置し、大原温泉の自家源泉を保有するくつろぎの宿「大原温泉 湯元のお宿 民宿大原山荘」。開放感あふれる木造りの内湯と、冬の冷気の中で湯煙が立ち上る岩露天風呂が旅人を癒やします。併設された「足湯カフェ」では、大原特産の紫蘇ジュースや温かいハーブティーを楽しみながら旅の疲れをほぐせます。夕食には地元契約農家の冬野菜と地鶏を使った名物鍋料理が並び、自家製の特製ポン酢や胡麻ダレとともに、冬ならではの素朴で力強い大原の美味を堪能できます。",
              roomTip: "和室10畳。窓から雪に煙る大原の里山風景を望み、静かな夜のひとときを家族や友人とゆったり寛げます。",
              gourmetTip: "「自家製野菜と地鶏鍋会席」。朝採れの大原冬野菜と柔らかな地鶏を特製出汁で煮込む温かな家庭鍋。自家製米のご飯が進みます。",
              highlights: [
                "自家源泉大原温泉の岩露天風呂・足湯カフェ完備で里山の温もりに癒やされる宿",
                "朝採れ冬野菜と地鶏鍋会席・手作り特製ポン酢で味わう素朴な大原の味",
                "寂光院参道沿いの好立地・大原の冬散策や里山歩きの拠点にぴったり"
              ]
            },
            {
              id: 4,
              name: "ザ・プリンス　京都宝ヶ池、オートグラフコレクション",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1471/1471.jpg",
              rating: 4.44,
              reviews: 2291,
              price: "¥11,612〜",
              access: "【地下鉄烏丸線】京都駅から国際会館駅まで乗り換えなし20分。④-2出入口より徒歩3分【車】京都東I.C.から平常時35分",
              special: "京都駅から乗り換えなし20分。都会の喧騒から離れてこころ穏やかなひとときをお過ごしください。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1471%2F1471.html",
              story: "大原へのアクセス拠点となる地下鉄・国際会館駅近く、宝ヶ池の豊かな自然に抱かれた「ザ・プリンス 京都宝ヶ池、オートグラフコレクション」。日本建築界の巨匠・村野藤吾が設計した有機的な曲線美を誇る名建築ホテルです。広々とした中庭を取り囲む円形フォルムの客室は、都会の喧騒を完全に遮断した静寂のサンクチュアリ。冬の朝、雪化粧をまとった洛北の山々を眺めながら味わうブレックファストは優雅そのもの。大原三千院へはホテル前からバスで直通約20分と、静寂と極上の快適性を両立させたい旅に最適です。",
              roomTip: "クラブフロア・デラックスルーム。村野藤吾のデザイン哲学が宿る上質なインテリアと、専用ラウンジでのアフタヌーンティー＆カクテルタイム。",
              gourmetTip: "「メインダイニング いと冬のフレンチディナー」。京都近郊の冬野菜や厳選和牛を取り入れた、洗練されたイノベーティブフレンチ。",
              highlights: [
                "村野藤吾設計の傑作建築ホテル・洛北宝ヶ池の静寂に佇むラグジュアリーステイ",
                "京都産冬食材を駆使したモダンフレンチ・円形建築が魅せる美しい中庭ディナー",
                "地下鉄国際会館駅から徒歩すぐ・大原三千院への直通バス乗り場も至近で便利"
              ]
            },
            {
              id: 5,
              name: "京都“元祖川床”発祥の老舗料理旅館　貴船ふじや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/67265/67265.jpg",
              rating: 4.69,
              reviews: 147,
              price: "¥33,100〜",
              access: "叡山電車鞍馬線　貴船口駅より徒歩２０分（送迎有り・事前予約不要。当日お電話いただければお迎えに参ります。）",
              special: "貴船・川床の元祖【創業天保年間】貴船神社門前に佇み、洛北の四季を盛り込んだ川魚生簀料理が自慢。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67265%2F67265.html",
              story: "大原と同じく洛北の奥座敷、貴船神社の鳥居前に佇む「元祖川床」発祥の老舗料理旅館「貴船ふじや」。夏は川床で知られますが、冬は白雪が積もる貴船川のせせらぎと静寂に包まれる知る人ぞ知る極上の隠れ家です。創業天保年間、歴代の料理人が磨き上げた冬の看板料理は、上質な天然猪肉を贅沢に使った「特製ぼたん鍋」やすっぽん鍋、そして清流で育った川魚料理。雪景色の貴船神社参拝とあわせて、洛北の冬の神聖な空気を全身で感じる特別な宿泊体験を提供してくれます。",
              roomTip: "貴船川を望む純和風客室。窓を開けると雪が舞う清流のせせらぎが聞こえ、凛とした冬の京都の風情を間近に体感。",
              gourmetTip: "「老舗伝承の天然ぼたん鍋会席」。上質な天然猪肉を秘伝の出汁味噌でじっくり煮込み、旬の京野菜と川魚の塩焼きとともに味わう極上膳。",
              highlights: [
                "貴船神社鳥居前の老舗料理旅館・冬の白雪清流を望む純和風客室と特製ぼたん鍋",
                "天然猪肉の秘伝ぼたん鍋会席・天保年間から受け継ぐ伝統川魚料理の饗宴",
                "貴船神社の雪景色ライトアップ参拝に最適・静寂の洛北奥座敷リトリート"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "冬（11月〜1月）の京都・大原三千院の積雪頻度と雪景色を見る狙い目の時期は？",
    "a": "大原は京都市内中心部（四条や京都駅周辺）と比べて標高が高く山に囲まれているため、気温が約3〜5度低くなります。11月下旬は晩秋の散り紅葉が苔庭を赤く染め、12月中旬から1月にかけて雪が降る頻度が高まります。特に強い冬型の気圧配置となった朝や寒波到来時は、市内中心部に雪がなくても大原では10cm前後の積雪となることが珍しくありません。一面の白銀に包まれた三千院の有清園やわらべ地蔵を見たい場合は、12月下旬〜1月の早朝（開門直後の9時）が最も美しい雪景色に出会える狙い目です。"
  },
  {
    "q": "三千院と宝泉院の見どころと冬参拝の楽しみ方は？",
    "a": "三千院の見どころは、国宝阿弥陀三尊像が安置された「往生極楽院」と、青苔に降り積もる雪から顔を覗かせる可愛らしい「わらべ地蔵」です。一方、三千院の奥に位置する宝泉院（ほうせんいん）は、柱と鴨居を額縁に見立てた「額縁雪景色庭園（盤桓園）」が圧巻。樹齢約700年の五葉松が雪をまとう姿を、温かいお抹茶と季節の和菓子をいただきながら柱越しに静かに眺めるひとときは、冬の京都でしか味わえない贅沢な癒やしです。澄んだ音色を奏でる「水琴窟」も必聴です。"
  },
  {
    "q": "大原名物「地鶏味噌鍋」とは？大原温泉の泉質と特徴は？",
    "a": "大原は良質な地下水と冷涼な気候に恵まれ、古くから味噌造りや柴漬けなどの発酵文化が根付いた地です。「地鶏味噌鍋」は、100年以上伝承される大原の無添加味噌を出汁に溶き、弾力ある京地鶏や白菜・ネギ・山の芋などの冬野菜を煮込んだ郷土鍋。味噌の深いコクと地鶏の脂が調和し、身体の芯から温まります。また、2004年に開湯した「大原温泉」はpH8.7前後の弱アルカリ性単純温泉で、肌の角質を優しく落とす美肌の湯として女性客にも大好評です。"
  },
  {
    "q": "京都駅から大原へのアクセス方法と冬道運転の注意点は？",
    "a": "公共交通機関の場合、JR京都駅前バスターミナルから京都バス（17系統・大原行き）で直通約60分、または地下鉄烏丸線で終点「国際会館駅」まで行き、そこから京都バス（19系統）に乗り換えて約20分で大原バス停に到着します。冬期に車で訪れる場合は、国道367号（鯖街道）の途中越え付近や山陰のカーブで路面凍結が発生することがあるため、スタッドレスタイヤの装着が安心です。"
  },
  {
    "q": "冬の大原散策で外せない周辺スポットや立ち寄り処は？",
    "a": "平家物語のヒロイン・建礼門院徳子が生涯を過ごした「寂光院（じゃっこういん）」の雪の石段、天台声明（仏教音楽）発祥の道場である「勝林院」、そして大原街道沿いに点在する名物「志ば久」や「土井志ば漬本舗」での伝統的な漬物・味噌の試食と買い物散策がおすすめです。参道沿いの茶屋でいただく熱々の甘酒や草餅も冬の散策の醍醐味です。"
  }
];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemPage',
    name: "【11・12・1月京都】静寂の洛北・大原三千院の白銀雪景色と宝泉院「額縁庭園」冬参拝＆名物「地鶏味噌鍋」・大原温泉の隠れ家名宿5選",
    description: "11月下旬から1月、観光客で賑わう京都市内の喧騒を離れ、静寂と清冽な大気に包まれる洛北・大原の里。天台宗の古刹「三千院」では、青苔の「有清園」にしんしんと白雪が降り積もり、愛らしい「わらべ地蔵」や国宝阿弥陀三尊像を祀る「往生極楽院」が息を呑む幽玄の美を湛えます。隣接する宝泉院では、柱と鴨居を額縁に見立てた「額縁雪景色庭園（盤桓園）」でお抹茶をいただきながら冬の山水画を鑑賞。冷え切った身体を温めるのは、100年の伝統味噌で煮込む大原名物「京地鶏味噌鍋」や「天然ぼたん鍋」、そして弱アルカリ性の美肌名湯「大原温泉」。大人の冬の京都を静かに満喫する厳選名宿5選を徹底紹介します。",
    url: 'https://croud-travel.com/winter-kyoto-ohara-sanzenin-snow-hosenin-misonabe-stay',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://croud-travel.com/' },
        { '@type': 'ListItem', position: 2, name: '冬の特集一覧', item: 'https://croud-travel.com/features/' },
        { '@type': 'ListItem', position: 3, name: '大原三千院雪景色＆地鶏味噌鍋・大原温泉ステイ', item: 'https://croud-travel.com/winter-kyoto-ohara-sanzenin-snow-hosenin-misonabe-stay' }
      ]
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: hotelsData.map((h, idx) => ({
        '@type': 'Hotel',
        position: idx + 1,
        name: h.name,
        image: h.img,
        priceRange: h.price,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: h.rating,
          reviewCount: h.reviews
        },
        address: {
          '@type': 'PostalAddress',
          addressRegion: '京都府',
          addressLocality: '京都市左京区'
        }
      }))
    }
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqListItems.map((item: { q: string; a: string }) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a
      }
    }))
  };

  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-emerald-100 selection:text-emerald-900 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 text-white overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-semibold tracking-wide">
            <Snowflake className="w-4 h-4 text-emerald-300" />
            11月・12月・1月 洛北の静寂雪景色＆名湯・郷土味噌鍋特集
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight sm:leading-snug text-stone-100 font-serif">
            白銀の苔庭に佇むわらべ地蔵と額縁庭園の冬美<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-teal-200 to-amber-200">
              静寂の洛北・大原三千院雪景色＆宝泉院冬参拝と名物地鶏味噌鍋・大原温泉の名宿
            </span>
          </h1>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-light">
            京都の冬の真髄が宿る洛北・大原の里。しんしんと白雪が積もる三千院の有清園、愛らしいわらべ地蔵、宝泉院の柱を額縁に見立てた一幅の山水画のような雪景色。冷え切った身体に染み渡る100年伝承の「京地鶏味噌鍋」、弱アルカリ性の美肌名湯「大原温泉」に浸かる大人の隠れ家ステイをご案内します。
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-xs sm:text-sm text-stone-300">
            <span className="flex items-center gap-1.5 bg-stone-800/80 px-3 py-1.5 rounded-lg border border-stone-700">
              <Calendar className="w-4 h-4 text-emerald-400" /> 旬の時期：11月下旬〜1月（厳冬期）
            </span>
            <span className="flex items-center gap-1.5 bg-stone-800/80 px-3 py-1.5 rounded-lg border border-stone-700">
              <Utensils className="w-4 h-4 text-emerald-400" /> 京地鶏味噌鍋・草菜懐石・ぼたん鍋
            </span>
            <span className="flex items-center gap-1.5 bg-stone-800/80 px-3 py-1.5 rounded-lg border border-stone-700">
              <Flame className="w-4 h-4 text-emerald-400" /> 大原温泉・雪見庭園露天風呂
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Feature Overview Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-emerald-600 pl-4">
            <span className="text-emerald-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Overview</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              冬の大原三千院が魅せる「静謐の極致」と里山の温もり
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm mt-1">
              観光客の喧騒が消え去り、白雪と天台声明の静寂が包み込む大人の京都旅
            </p>
          </div>

          <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
            <p>
              京都市街地の北東、比叡山の麓に広がる洛北・大原。古くから隠棲の地として知られ、平安時代の貴族や僧侶たちが世の喧騒を離れて祈りを捧げた聖地です。秋の紅葉シーズンが終わりを迎える11月下旬、大原の里は深い静寂を取り戻します。12月中旬から1月にかけては、市街地より気温が3〜5度低い大原に白雪が舞い降り、天台宗の名刹「三千院」は一面の銀世界へと姿を変えます。杉木立が聳える庭園「有清園」の緑の絨毯の上にふんわりと雪が積もり、雪帽子をかぶった愛らしい「わらべ地蔵」が静かに微笑む姿は、見る者の心を優しく洗い流してくれます。国宝阿弥陀三尊像が鎮座する往生極楽院の堂宇も、冬の澄んだ光に照らされて極楽浄土の荘厳さを醸し出します。
            </p>
            <p>
              三千院の門前を抜けて奥へと進むと、声明の根本道場「勝林院」や、大原屈指の美庭として名高い「宝泉院（ほうせんいん）」が佇みます。宝泉院の客殿に腰を下ろすと、柱と鴨居がまるで額縁のように機能し、樹齢約700年の五葉松と雪景色の大原の山々が一幅の絵画となって目の前に迫ります。水滴が甕に落ちて澄んだ響きを奏でる「水琴窟」の涼やかな音色に耳を澄ませながら、温かい抹茶と和菓子をいただく時間は、冬の京都でしか味わえない至高の瞑想空間です。さらに、寂光院へと続く石段や、のどかな里山のあぜ道に雪が残る風景は、日本の原風景の温もりをそのまま今に伝えています。
            </p>
            <p>
              散策の後は、大原の里山文化が生んだ温かいご馳走が待っています。良質な伏流水と冷涼な気候が育んだ100年の伝統味噌で煮込む「京地鶏味噌鍋」は、濃厚な味噌の甘みと地鶏のジューシーな旨みが身体の芯まで染み渡る冬の名物。また、2004年に湧出した弱アルカリ性の美肌温泉「大原温泉」の内湯や雪見露天風呂に浸かれば、冬の冷気で強張った身体がじんわりと解きほぐされていきます。喧騒から遠く離れ、心静かに冬の美と温もりに浸る。本当の京都の奥深さを知る旅が、ここにあります。
            </p>
          </div>

          {/* Highlights 3-column Box */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-emerald-50/50 border border-emerald-200/60 rounded-2xl p-5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-bold text-stone-900 text-base">三千院の雪景色とわらべ地蔵</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                有清園の青苔に降り積もる白雪。雪帽子をかぶった愛らしいわらべ地蔵と国宝往生極楽院が醸し出す幽玄の美。
              </p>
            </div>

            <div className="bg-emerald-50/50 border border-emerald-200/60 rounded-2xl p-5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-bold text-stone-900 text-base">宝泉院「額縁雪景色庭園」とお抹茶</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                柱を額縁に見立てた樹齢700年の五葉松雪景色。水琴窟の澄んだ響きとお抹茶を静かに味わう至極の瞑想時間。
              </p>
            </div>

            <div className="bg-emerald-50/50 border border-emerald-200/60 rounded-2xl p-5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-bold text-stone-900 text-base">名物地鶏味噌鍋＆大原温泉雪見露天</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                100年伝統味噌で仕込む京地鶏鍋。弱アルカリ性美肌名湯の大原温泉で雪見風呂を満喫する隠れ家ステイ。
              </p>
            </div>
          </div>
        </section>

        {/* Local Gastronomy & Culture Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-emerald-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Local Gastronomy & Culture</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              天台声明の聖地と、100年の伝承味噌が育む冬の里山文化
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-700 text-sm leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-emerald-700" />
                天台声明の響きと宝泉院「盤桓園」の額縁美学
              </h3>
              <p>
                大原は平安時代初期、慈覚大師円仁によって天台声明（仏教の声楽曲）が伝えられた聖地です。声明の根本道場「勝林院」やその子院である「宝泉院」には、音が清らかに響く独特の空間が保たれています。宝泉院の庭園「盤桓園（ばんかんえん）」は「立ち去りがたい庭」を意味し、客殿の柱と鴨居を額縁に見立てて眺めることで、計算された遠近感と冬の山水画のような静寂の美が生まれます。雪が降る日に水琴窟の微かな滴の音に耳を傾けながらお抹茶をいただく体験は、古都の冬の静寂の象徴です。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-emerald-700" />
                100年続く伝承味噌と「京地鶏味噌鍋」・大原温泉の美肌湯
              </h3>
              <p>
                比叡山の清らかな伏流水と厳しい冬の寒暖差に恵まれた大原は、古くから無添加の味噌造りや柴漬けなどの発酵食文化が栄えてきました。100年以上受け継がれる木桶仕込みの希少味噌を贅沢に使った「京地鶏味噌鍋」は、引き締まった地鶏の旨みと冬根菜の甘みが味噌出汁に溶け合い、身体を芯から温めます。さらに2004年に湧出した「大原温泉」は、pH8.7前後の弱アルカリ性単純温泉で、肌の汚れをやさしく落とす美肌の湯。雪見の露天風呂に浸かりながら、心身ともに清められるひとときを過ごせます。
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Timeline Model Course Section */}
        <section className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="border-b border-stone-800 pb-4">
            <span className="text-emerald-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-serif">
              【1泊2日】大原三千院雪景色と宝泉院額縁庭園・地鶏味噌鍋を巡る黄金モデルコース
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm mt-1">
              京都市街の喧騒を離れ、白銀の洛北で古刹参拝と名物鍋料理・名湯を満喫する旅路。
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-emerald-500/40 space-y-6">
              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">DAY 1 午前〜昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  10:00 京都駅または国際会館からバスで大原へ ➔ 門前茶屋で熱々にしんそばランチ
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  JR京都駅または地下鉄烏丸線・国際会館駅から京都バスに乗車し、山間の雪景色を眺めながら大原バス停へ。門前の茶屋で名物の温かいにしんそばや甘酒で一息。冷え込んだ冬の空気に包まれながら、三千院の表参道へと歩みを進めます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">DAY 1 昼〜午後</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  11:30 三千院有清園の雪景色＆わらべ地蔵拝観 ➔ 宝泉院「額縁庭園」とお抹茶
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  大原三千院へ参拝。白雪が積もる有清園の杉木立の中、雪帽子をかぶった愛らしい「わらべ地蔵」に心癒やされ、国宝往生極楽院で阿弥陀三尊像に合掌。続いて宝泉院へ向かい、柱を額縁に見立てた盤桓園の樹齢700年五葉松雪景色を眺めながら、温かいお抹茶と和菓子を味わいます。水琴窟の澄んだ響きに耳を傾け、心静かな時間を過ごします。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">DAY 1 夕刻〜夜</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  15:30 大原温泉の隠れ家宿へチェックイン ➔ 名物「京地鶏味噌鍋」と雪見露天
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  三千院門前のお宿芹生や味噌鍋本家の大原の里へチェックイン。弱アルカリ性の大原温泉雪見露天風呂に浸かり、身体の芯までぽかぽかに温まります。夕食は100年伝承の自家製味噌で仕込んだ熱々の「京地鶏味噌鍋」や草菜懐石。京都の銘酒とともに、静寂に包まれる洛北の冬夜を満喫します。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">DAY 2 朝〜昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  08:30 朝霧の里山散歩 ➔ 平家物語ゆかりの「寂光院」雪の石段参拝とお買い物
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  朝風呂と大原野菜たっぷりの朝食を楽しんだ後、のどかな里山のあぜ道を歩いて建礼門院ゆかりの「寂光院」へ。雪化粧の風情ある石段を登り本堂を参拝。門前の漬物街道で名物の生志ば久や伝統味噌を買い求め、バスで京都駅方面へ戻り帰路へつきます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hotels Section */}
        <section className="space-y-8">
          <div className="border-l-4 border-emerald-600 pl-4">
            <span className="text-emerald-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Accommodations</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              大原三千院参拝と洛北の冬を満喫する厳選名宿5選
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm mt-1">
              三千院門前の名門旅館から味噌鍋本家の民宿、洛北ラグジュアリーホテルまで
            </p>
          </div>

          <div className="space-y-8">
            {hotelsData.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl border border-stone-200/80 overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Hotel Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-stone-100 pb-5">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs font-bold">
                          {hotel.id}
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                          厳選名宿
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
                        {hotel.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-500 flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                        {hotel.access}
                      </p>
                    </div>

                    <div className="text-right sm:shrink-0 bg-emerald-50/50 p-3 sm:p-4 rounded-2xl border border-emerald-100">
                      <div className="flex items-center sm:justify-end gap-1 text-emerald-600 font-bold text-sm sm:text-base">
                        <Star className="w-4 h-4 fill-current text-emerald-500" />
                        <span>{hotel.rating}</span>
                        <span className="text-stone-400 text-xs font-normal">（{hotel.reviews}件）</span>
                      </div>
                      <div className="text-xs text-stone-500 mt-1">宿泊目安（1名/税込）</div>
                      <div className="text-lg sm:text-xl font-black text-emerald-700">{hotel.price}</div>
                    </div>
                  </div>

                  {/* Hotel Story Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={hotel.img} 
                        alt={hotel.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="lg:col-span-7 space-y-4">
                      <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                        {hotel.story}
                      </p>

                      <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200/60 space-y-2 text-xs sm:text-sm">
                        <div className="flex items-start gap-2">
                          <Building className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <div><strong className="text-stone-900">客室の魅力：</strong><span className="text-stone-600">{hotel.roomTip}</span></div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Utensils className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <div><strong className="text-stone-900">冬の極上美食：</strong><span className="text-stone-600">{hotel.gourmetTip}</span></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="bg-stone-50/70 rounded-2xl p-4 sm:p-5 border border-stone-200/60">
                    <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">おすすめのポイント</div>
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-stone-700">
                      {hotel.highlights.map((item: string, hIdx: number) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Booking CTA Button */}
                  <div className="pt-2 text-center sm:text-right">
                    <a 
                      href={hotel.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/20 hover:shadow-lg transition-all w-full sm:w-auto"
                    >
                      <span>楽天トラベルでプランと空室を見る</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Winter Travel Tips */}
        <section className="bg-emerald-50/60 rounded-3xl p-6 sm:p-10 border border-emerald-200/80 space-y-6">
          <div className="border-l-4 border-emerald-600 pl-4">
            <span className="text-emerald-800 font-bold text-xs uppercase tracking-wider block">Winter Travel Advice</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              冬の大原・洛北旅行で注意したい気候・服装・靴のポイント
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-stone-700">
            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <ThermometerSun className="w-4 h-4 text-emerald-700" />
                京都市街より3〜5度低い冷え込み
              </div>
              <p className="leading-relaxed">
                大原は山沿いの盆地地形のため、朝晩は氷点下に冷え込みます。厚手のダウンコート、手袋、マフラーを着用し、堂内の板の間を歩くために厚手の靴下や携帯カイロを持参しましょう。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <Compass className="w-4 h-4 text-emerald-700" />
                参道の積雪・凍結と歩きやすい靴
              </div>
              <p className="leading-relaxed">
                バス停から三千院や寂光院への参道は坂道や石畳が多く、雪が降ると滑りやすくなります。革靴やヒールは避け、滑り止めの溝がある防水スニーカーやスノーブーツでお出かけください。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <Waves className="w-4 h-4 text-emerald-700" />
                公共バスとマイカーの使い分け
              </div>
              <p className="leading-relaxed">
                京都駅や国際会館駅からの路線バスは本数が多く冬でも安心して利用できます。車で訪れる場合は国道367号線の凍結に備え、必ずスタッドレスタイヤを装着してください。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-emerald-600 pl-4">
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider block">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              大原三千院の冬参拝・味噌鍋に関するよくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq: { q: string; a: string }, idx: number) => (
              <div key={idx} className="border border-stone-200/70 rounded-2xl p-5 hover:border-emerald-300 transition-colors bg-stone-50/50">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
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
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              あわせて読みたい京都・関西の冬景色・名湯特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <Link 
              href="/winter-kyoto-kifune-kurama-snow-lightup-botannabe-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-emerald-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-emerald-700 font-bold text-xs block mb-1">京都・貴船＆鞍馬</span>
              <span className="text-stone-900 font-bold group-hover:text-emerald-800 transition-colors line-clamp-2">
                雪の貴船神社ライトアップと名物ぼたん鍋・冬の奥座敷名宿
              </span>
            </Link>

            <Link 
              href="/winter-kyoto-arashiyama-onsen-yudofu-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-emerald-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-emerald-700 font-bold text-xs block mb-1">京都・嵐山温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-emerald-800 transition-colors line-clamp-2">
                渡月橋雪景色と竹林の小径・名物湯豆腐と嵐山温泉露天風呂名宿
              </span>
            </Link>

            <Link 
              href="/winter-shiga-hieizan-enryakuji-ogoto-onsen-omigyu-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-emerald-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-emerald-700 font-bold text-xs block mb-1">滋賀・比叡山＆おごと温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-emerald-800 transition-colors line-clamp-2">
                世界遺産比叡山延暦寺の冬参拝＆不滅の法灯と琵琶湖一望近江牛名宿
              </span>
            </Link>

            <Link 
              href="/winter-hyogo-tanba-sasayama-botannabe-castle-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-emerald-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-emerald-700 font-bold text-xs block mb-1">兵庫・丹波篠山</span>
              <span className="text-stone-900 font-bold group-hover:text-emerald-800 transition-colors line-clamp-2">
                本場ぼたん鍋発祥の味＆雪化粧の篠山城下町・丹波篠山牛名宿
              </span>
            </Link>

            <Link 
              href="/winter-nara-hasedera-winter-peony-oomiwa-yamatogyu-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-emerald-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-emerald-700 font-bold text-xs block mb-1">奈良・長谷寺＆大神神社</span>
              <span className="text-stone-900 font-bold group-hover:text-emerald-800 transition-colors line-clamp-2">
                花の御寺・長谷寺の冬牡丹と三輪山大神神社初詣・極上大和牛名宿
              </span>
            </Link>

            <Link 
              href="/winter-kyoto-yunohana-onsen-unkai-botan-nabe-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-emerald-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-emerald-700 font-bold text-xs block mb-1">京都・湯の花温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-emerald-800 transition-colors line-clamp-2">
                亀岡霧の雲海露天風呂と冬の名物ぼたん鍋を味わう隠れ家名宿
              </span>
            </Link>
          </div>
        </section>
      </main>
    </article>
  );
}
