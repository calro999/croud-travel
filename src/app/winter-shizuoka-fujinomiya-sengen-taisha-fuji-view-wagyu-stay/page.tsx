import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Snowflake, Waves, Sun, Flame, Mountain, Building, Coffee, ShoppingBag, ThermometerSun
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12・1月静岡】富士山本宮浅間大社新春初詣！名宿5選',
  description: '冬の静岡・富士宮は、年間で最も空気が澄み渡り、純白の雪をまとった霊峰富士が真っ青な空に最も美しく映える奇跡のシーズン。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '富士宮 ホテル, 富士山本宮浅間大社 初詣, 富士山 絶景 宿, 田貫湖 逆さ富士, 休暇村富士, 静岡そだち牛, 富士宮やきそば, 朝霧高原 冬, 11月 12月 1月 静岡 観光',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-shizuoka-fujinomiya-sengen-taisha-fuji-view-wagyu-stay/"
  },
  openGraph: {
    title: '【11・12・1月静岡】富士山本宮浅間大社新春初詣！名宿5選',
    description: '冬の静岡・富士宮は、年間で最も空気が澄み渡り、純白の雪をまとった霊峰富士が真っ青な空に最も美しく映える奇跡のシーズン。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-shizuoka-fujinomiya-sengen-taisha-fuji-view-wagyu-stay',
    type: 'article',
    images: [{ url: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=1200&q=630', width: 1200, height: 630, alt: '富士山本宮浅間大社と白雪富士山絶景' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月静岡】白雪の富士山絶景＆富士山本宮浅間大社新春初詣！田貫湖逆さ富士と特選「静岡そだち」牛を堪能する名宿5選",
    description: "冬の静岡・富士宮は、年間で最も空気が澄み渡り、純白の雪をまとった霊峰富士が真っ青な空に最も美しく映える奇跡のシーズン。全国1,300社を超える浅間神社の総本宮「富士山本宮浅間大社」での新春開運初詣と国指定特別天然記念物・湧玉池の神聖な湧水、鏡のような湖面に雪富士が映る田貫湖の白雪逆さ富士、氷瀑のような白糸の滝、雄大な朝霧高原。静岡が誇る特選黒毛和牛「静岡そだち」の極上すき焼きや熱々の名物富士宮やきそば、富士山を望む展望露天風呂に癒やされる冬の厳選名宿5選を徹底案内します。"
  }
};

export default function ShizuokaFujinomiyaPage() {
  const hotels = [
            {
              id: 1,
              name: "休暇村富士",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/76861/76861.jpg",
              rating: 4.52,
              reviews: 508,
              price: "¥12,000〜",
              access: "ＪＲ身延線　富士宮駅より休暇村富士行き路線バスにて約４５分",
              special: "富士山の西麓、田貫湖のほとりに立地する当館ではすべてのお部屋から美しい富士山を望むことができます。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F76861%2F76861.html",
              story: "田貫湖の湖畔に静かに佇み、全客室および露天風呂から白雪を冠した富士山の秀峰を真正面に望む唯一無二の絶景リゾート「休暇村富士」。冬の早朝、静まり返った湖面に朝日を浴びた赤富士や逆さ富士が映し出される光景は、息をのむほどの美しさを誇ります。冬の澄みきった冷気の中、富士山恵みの天然温泉露天風呂に浸かりながら雄大な姿を眺める時間は格別。夕食ビュッフェでは静岡県産ブランド牛「静岡そだち」や駿河湾の新鮮な海の幸、富士宮特産の富士山白糸マスなど地元食材をふんだんに使った贅沢な料理が並び、五感で富士の冬を味わい尽くせます。",
              roomTip: "富士山ビュー和室・洋室。大きなピクチャーウィンドウから、刻一刻と表情を変える冬の霊峰富士と田貫湖のパノラマを独り占めできます。",
              gourmetTip: "「駿河・富士恵みビュッフェ＆静岡そだちステーキ。」。静岡そだち牛の鉄板焼きや富士の清流で育ったニジマス、駿河湾直送の冬魚。",
              highlights: [
                "全客室・露天風呂から真正面に富士山を望む絶景ロケーション・田貫湖畔の静寂",
                "特選黒毛和牛「静岡そだち」や富士山白糸マス・駿河湾海の幸を贅沢に味わうビュッフェ",
                "早朝の田貫湖に映る白雪逆さ富士や紅富士の奇跡的パノラマを体感"
              ]
            },
            {
              id: 2,
              name: "富士宮　富士急ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/210/210.jpg",
              rating: 3.84,
              reviews: 751,
              price: "¥6,500〜",
              access: "ＪＲ身延線富士宮駅北口から徒歩約２分。 東海道新幹線新富士駅下車、車で４０分（駐車場は先着順・約30台収容）",
              special: "富士宮駅目の前！ビジネスや観光の拠点に！富士宮焼きそば等、地元食材を取り入れた無料朝食バイキング！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F210%2F210.html",
              story: "JR身延線・富士宮駅北口から徒歩約2分の好立地に位置する「富士宮 富士急ホテル」。富士山本宮浅間大社まで徒歩約10分と、新春初詣や門前町散策の拠点として抜群の利便性を誇ります。客室上層階やレストランからは天候に恵まれれば雪化粧した富士山の勇姿を一望。館内は清潔感と機能性に溢れ、富士山を仰ぎながら味わう和洋バイキングの朝食には、富士宮名物の焼きそばや地元朝霧高原の新鮮な卵・牛乳が揃います。冬の冷え込みが厳しい観光の後も、温かいもてなしと行き届いたサービスでほっとくつろげる安心のホテルです。",
              roomTip: "富士山側の上層階ツインルーム。窓から遮るものなく白雪の富士山が視界に広がり、朝日に輝く雄姿を部屋からゆったり鑑賞。",
              gourmetTip: "「朝食バイキング＆富士宮やきそば」。B級グルメの王道・富士宮やきそばのコシのある麺と肉かすの旨み、朝霧高原の濃厚な乳製品。",
              highlights: [
                "富士宮駅徒歩2分・浅間大社徒歩10分の好立地・上層階から冠雪富士を一望",
                "朝食バイキングで味わう本場富士宮やきそば＆朝霧高原の新鮮ミルク・卵",
                "富士山世界遺産センターや門前町食べ歩きスポットへのアクセス抜群"
              ]
            },
            {
              id: 3,
              name: "くれたけインプレミアム富士宮駅前",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/165088/165088.jpg",
              rating: 3.96,
              reviews: 1189,
              price: "¥4,400〜",
              access: "富士宮駅より徒歩にて約1分●お車：東名富士インターより約17分 、新東名新富士インターより約15分",
              special: "２/１５富士宮駅前にオープン！無料朝食バイキング＆ハッピーアワー（生ビールあり）＆露天風呂＆浴場完備",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F165088%2F165088.html",
              story: "JR富士宮駅南口から徒歩わずか1分、駅前ロータリーに面した「くれたけインプレミアム富士宮駅前」。館内には宿泊者専用の男女別天然温泉大浴場が完備されており、冬の富士宮観光で冷えた身体を芯からポカポカに温めてくれます。夕方には嬉しいウェルカムドリンクサービス（生ビールや地酒、ソフトドリンク）が用意され、旅の緊張を優しく解きほぐします。快適なベッドと高速Wi-Fi、機能的なワークスペースも整い、レジャーだけでなく冬のワーケーションにも最適。朝食には手作り惣菜や名物グルメが無料で提供され、コストパフォーマンスの高さも際立ちます。",
              roomTip: "プレミアムダブルルーム。広めのデスクとシモンズ社製ベッドを備え、冬の散策疲れを上質な眠りで癒やしてくれる快適空間。",
              gourmetTip: "「無料和洋朝食ビュッフェ＆ウェルカムワンドリンク。」。静岡茶や地元野菜を使った温かい惣菜と、夕暮れ時の地酒サービス。",
              highlights: [
                "富士宮駅南口徒歩1分・男女別天然温泉大浴場完備・ウェルカムドリンク付き",
                "シモンズ社製ベッドで快眠追求・無料朝食バイキングと静岡茶のおもてなし",
                "冬の観光や新春初詣で冷えた身体を天然温泉で芯から温める癒やし"
              ]
            },
            {
              id: 4,
              name: "ホテルクラウンヒルズ富士宮　西富士宮駅前（ＢＢＨホテルグループ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/40039/40039.jpg",
              rating: 3.81,
              reviews: 1050,
              price: "¥3,200〜",
              access: "ＪＲ身延線　『西富士宮駅前』（徒歩30秒） ＊富士宮駅とお間違いになられぬ様、御注意下さい。",
              special: "加湿機能付き空気清浄機レンタル開始しました♪ＪＲ身延線・西富士宮駅前でビジネスにも観光にも便利♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40039%2F40039.html",
              story: "JR西富士宮駅から徒歩約1分、富士山本宮浅間大社へも徒歩約8分の至近距離に位置する「ホテルクラウンヒルズ富士宮 西富士宮駅前（BBHホテルグループ）。」。参拝客で賑わうお正月やお札受けの時期もスムーズに初詣へ向かえるロケーションが魅力です。大浴場が完備されており、手足を伸ばして冬の温浴を堪能できるほか、無料のマッサージチェアや漫画コーナー、充実した貸出枕サービスなど滞在を心地よくする工夫が随所に施されています。朝食では日替わりの温かい家庭料理が提供され、親しみやすく温もりある滞在を叶えてくれます。",
              roomTip: "スーペリアシングル・ツイン。静かな環境でゆったり休めるベッド配置。浅間大社早朝参拝の拠点としても便利な落ち着いた客室。",
              gourmetTip: "「充実の手作り和洋朝食」。冬の朝に嬉しい温かい味噌汁と焼き魚、静岡茶の香りが広がる朝のエネルギーチャージ。",
              highlights: [
                "西富士宮駅徒歩1分・浅間大社徒歩8分の初詣至近・大浴場＆無料マッサージチェア",
                "充実の貸出枕＆日替わり手作り朝食・家庭的な温もりと快適な滞在環境",
                "無料大駐車場やレンタサイクルも完備・年末年始の長期滞在にも安心"
              ]
            },
            {
              id: 5,
              name: "スーパーホテル富士宮",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/149353/149353.jpg",
              rating: 4.33,
              reviews: 600,
              price: "¥3,715〜",
              access: "ＪＲ富士宮駅よりお車にて約７分　新東名高速新富士Ｉ．Ｃよりお車にて約９分　 東名高速富士Ｉ．Ｃよりお車にて約１１分",
              special: "おかげさまでJDパワー11年連続NO1！無料健康朝食、男女別天然温泉完備！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F149353%2F149353.html",
              story: "富士宮市街地にあり、名峰富士の勇姿を仰ぎながら天然温泉に浸かれる「スーパーホテル富士宮」。名湯「献上の湯」と名付けられた天然温泉は、肌あたりの柔らかい泉質で、冬の観光帰りの冷えた身体をじんわりと温め潤してくれます。ぐっすり眠れることを徹底追及した選べる快眠枕や防音設計の客室、オーガニックにこだわった健康朝食ビュッフェが自慢。朝食には名物富士宮やきそばや地元契約農家の冬野菜サラダ、焼きたてパンが並び、清々しい朝の目覚めをサポートしてくれます。環境に配慮したスマートなサービスも心地よい現代的な宿です。",
              roomTip: "エクストラエコノミールーム。防音性に優れた静かな設計で快眠を約束。窓外に雄大な富士の裾野を感じられる明るいインテリア。",
              gourmetTip: "「オーガニック健康朝食」。出来立ての富士宮やきそばと有機野菜のあったかスープ、焼きたてサクサクのクロワッサン。",
              highlights: [
                "天然温泉「献上の湯」完備・名物富士宮やきそば付きオーガニック健康朝食",
                "防音対策の客室と快眠枕でぐっすり・環境に優しいロハスなステイ体験",
                "富士山本宮浅間大社や白糸の滝へのドライブ観光に最適な国道沿いの立地"
              ]
            }
  ];

  const faqList = [
  {
    "q": "冬（11月〜1月）の富士宮で富士山が最も綺麗に見える時間帯や気象条件は？",
    "a": "富士宮エリアは冬型の気圧配置が決まる11月から1月にかけて、年間で最も晴天率が高くなります。特に早朝（日の出直後から午前9時頃まで）は空気中の水蒸気が少なく極めて澄み切っており、白雪を冠した富士山の稜線が青空にくっきりと浮かび上がります。田貫湖では風のない穏やかな早朝に、湖面に雪化粧の富士が映る「逆さ富士」や、朝日に赤く染まる「紅富士」が見られる確率が高くなります。正午を過ぎると気温上昇に伴い雲が湧きやすくなるため、朝一番の観賞が鉄則です。"
  },
  {
    "q": "富士山本宮浅間大社の新春初詣の混雑状況や見どころ、開門時間は？",
    "a": "富士山本宮浅間大社は全国に約1,300社ある浅間神社の総本宮であり、富士山をご神体とする徳川家康ゆかりの神聖な古社です。例年正月三が日には約30万人の参拝者が訪れます。本殿は徳川家康が寄進した壮麗な二重楼閣造り（浅間造り）で国指定重要文化財。境内奥には富士山の雪解け水が毎秒3.6トン湧き出る国指定特別天然記念物「湧玉池（わくたまのいけ）」があり、冬でも水温約13度と湯気を立てる神秘的な光景が見られます。混雑を避けるなら元日の早朝（6時〜8時）または夕方以降の参拝がスムーズです。"
  },
  {
    "q": "富士宮エリアの冬の気温や積雪、車でのアクセス時のスタッドレスタイヤの必要性は？",
    "a": "富士宮市街地（標高100〜150m前後）は温暖な太平洋側気候のため、積雪することは稀です。しかし朝霧高原や田貫湖周辺（標高600〜900m）は気温がぐっと下がり、12月〜1月の朝晩は氷点下5度近くまで冷え込みます。路面凍結（ブラックアイスバーン）や急な降雪のリスクがあるため、田貫湖や白糸の滝、朝霧高原方面へドライブする場合はスタッドレスタイヤの装着が必須です。東名高速・富士ICまたは新東名高速・新富士ICからは西富士道路経由で市街地まで約15分と高速アクセスは極めて快適です。"
  },
  {
    "q": "冬の富士宮で味わうべきご当地グルメは何ですか？",
    "a": "まずはB級グルメの頂点として名高い「富士宮やきそば」。富士山の湧水で練り上げた強いコシの蒸し麺に、豚の背脂を揚げた「肉かす」、仕上げに削り粉（イワシ・サバの魚粉）と青のりをたっぷり振りかける独特の製法は、香ばしさと旨みが絶品です。さらに冬は静岡県産黒毛和牛の最高峰「静岡そだち」のすき焼きやステーキ、富士山の冷涼な伏流水で丹精込めて育てられた「富士山白糸マス（ニジマス）」の塩焼きや刺身、朝霧高原の搾りたて牛乳を使った熱々のチーズフォンデュやホットミルクが格別です。"
  },
  {
    "q": "冬の富士宮旅行で立ち寄るべきおすすめ絶景スポットと周遊ルートは？",
    "a": "1日目はJR富士宮駅または新富士駅を出発し、まず「静岡県富士山世界遺産センター」で富士山信仰と自然の歴史を体感。徒歩で「富士山本宮浅間大社」へ参拝し、湧玉池の神聖な湧水で心を清めます。お宮横丁で熱々の富士宮やきそばを堪能した後は、名勝「白糸の滝・音止の滝」へ。マイナスイオンと富士山の絶景を楽しみ、田貫湖畔の宿へチェックイン。2日目の早朝は田貫湖で白雪逆さ富士を鑑賞し、朝霧高原の「まかいの牧場」や「あさぎりフードパーク」で富士山を背にお土産選びを楽しむ黄金ルートがおすすめです。"
  }
];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'ホーム', 'item': 'https://croud-travel.pages.dev' },
          { '@type': 'ListItem', 'position': 2, 'name': '特集一覧', 'item': 'https://croud-travel.pages.dev/features' },
          { '@type': 'ListItem', 'position': 3, 'name': '富士宮・浅間大社初詣と白雪富士山名宿', 'item': 'https://croud-travel.pages.dev/winter-shizuoka-fujinomiya-sengen-taisha-fuji-view-wagyu-stay' }
        ]
      },
      {
        '@type': 'TouristDestination',
        'name': '富士山本宮浅間大社・富士宮市',
        'description': "冬の静岡・富士宮は、年間で最も空気が澄み渡り、純白の雪をまとった霊峰富士が真っ青な空に最も美しく映える奇跡のシーズン。全国1,300社を超える浅間神社の総本宮「富士山本宮浅間大社」での新春開運初詣と国指定特別天然記念物・湧玉池の神聖な湧水、鏡のような湖面に雪富士が映る田貫湖の白雪逆さ富士、氷瀑のような白糸の滝、雄大な朝霧高原。静岡が誇る特選黒毛和牛「静岡そだち」の極上すき焼きや熱々の名物富士宮やきそば、富士山を望む展望露天風呂に癒やされる冬の厳選名宿5選を徹底案内します。",
        'touristType': ['歴史探訪', '温泉保養', '絶景鑑賞', '新春初詣', '冬の美食']
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': "冬（11月〜1月）の富士宮で富士山が最も綺麗に見える時間帯や気象条件は？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "富士宮エリアは冬型の気圧配置が決まる11月から1月にかけて、年間で最も晴天率が高くなります。特に早朝（日の出直後から午前9時頃まで）は空気中の水蒸気が少なく極めて澄み切っており、白雪を冠した富士山の稜線が青空にくっきりと浮かび上がります。田貫湖では風のない穏やかな早朝に、湖面に雪化粧の富士が映る「逆さ富士」や、朝日に赤く染まる「紅富士」が見られる確率が高くなります。正午を過ぎると気温上昇に伴い雲が湧きやすくなるため、朝一番の観賞が鉄則です。"
            }
          },
          {
            '@type': 'Question',
            'name': "富士山本宮浅間大社の新春初詣の混雑状況や見どころ、開門時間は？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "富士山本宮浅間大社は全国に約1,300社ある浅間神社の総本宮であり、富士山をご神体とする徳川家康ゆかりの神聖な古社です。例年正月三が日には約30万人の参拝者が訪れます。本殿は徳川家康が寄進した壮麗な二重楼閣造り（浅間造り）で国指定重要文化財。境内奥には富士山の雪解け水が毎秒3.6トン湧き出る国指定特別天然記念物「湧玉池（わくたまのいけ）」があり、冬でも水温約13度と湯気を立てる神秘的な光景が見られます。混雑を避けるなら元日の早朝（6時〜8時）または夕方以降の参拝がスムーズです。"
            }
          },
          {
            '@type': 'Question',
            'name': "富士宮エリアの冬の気温や積雪、車でのアクセス時のスタッドレスタイヤの必要性は？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "富士宮市街地（標高100〜150m前後）は温暖な太平洋側気候のため、積雪することは稀です。しかし朝霧高原や田貫湖周辺（標高600〜900m）は気温がぐっと下がり、12月〜1月の朝晩は氷点下5度近くまで冷え込みます。路面凍結（ブラックアイスバーン）や急な降雪のリスクがあるため、田貫湖や白糸の滝、朝霧高原方面へドライブする場合はスタッドレスタイヤの装着が必須です。東名高速・富士ICまたは新東名高速・新富士ICからは西富士道路経由で市街地まで約15分と高速アクセスは極めて快適です。"
            }
          },
          {
            '@type': 'Question',
            'name': "冬の富士宮で味わうべきご当地グルメは何ですか？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "まずはB級グルメの頂点として名高い「富士宮やきそば」。富士山の湧水で練り上げた強いコシの蒸し麺に、豚の背脂を揚げた「肉かす」、仕上げに削り粉（イワシ・サバの魚粉）と青のりをたっぷり振りかける独特の製法は、香ばしさと旨みが絶品です。さらに冬は静岡県産黒毛和牛の最高峰「静岡そだち」のすき焼きやステーキ、富士山の冷涼な伏流水で丹精込めて育てられた「富士山白糸マス（ニジマス）」の塩焼きや刺身、朝霧高原の搾りたて牛乳を使った熱々のチーズフォンデュやホットミルクが格別です。"
            }
          },
          {
            '@type': 'Question',
            'name': "冬の富士宮旅行で立ち寄るべきおすすめ絶景スポットと周遊ルートは？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "1日目はJR富士宮駅または新富士駅を出発し、まず「静岡県富士山世界遺産センター」で富士山信仰と自然の歴史を体感。徒歩で「富士山本宮浅間大社」へ参拝し、湧玉池の神聖な湧水で心を清めます。お宮横丁で熱々の富士宮やきそばを堪能した後は、名勝「白糸の滝・音止の滝」へ。マイナスイオンと富士山の絶景を楽しみ、田貫湖畔の宿へチェックイン。2日目の早朝は田貫湖で白雪逆さ富士を鑑賞し、朝霧高原の「まかいの牧場」や「あさぎりフードパーク」で富士山を背にお土産選びを楽しむ黄金ルートがおすすめです。"
            }
          }
        ]
      }
    ]
  };


  return (
    <article className="min-h-screen bg-slate-50 text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-sky-950 via-indigo-900 to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-200 text-xs sm:text-sm font-medium mb-6">
            <Snowflake className="w-4 h-4 text-sky-300" />
            11月・12月・1月冬の特選旅｜静岡・富士宮＆朝霧高原
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white mb-6">
            白雪の富士山絶景＆富士山本宮浅間大社新春初詣！<br className="hidden sm:inline" />
            田貫湖逆さ富士と特選「静岡そだち」牛の名宿5選
          </h1>
          <p className="text-base sm:text-lg text-sky-100/90 leading-relaxed max-w-4xl mb-8">
            太平洋側の澄み渡る青空に、純白の冠雪をまとった霊峰富士が最も鮮やかにそびえ立つ冬の富士宮。徳川家康が造営した全国浅間神社の総本宮「富士山本宮浅間大社」での清らかな新春初詣、鏡のような湖面に雪富士が映える田貫湖の逆さ富士、氷の芸術が煌めく白糸の滝。そして静岡が世界に誇る特選黒毛和牛「静岡そだち」の贅沢なすき焼きや名物富士宮やきそば。冬ならではの絶景と美食、極上の温もりに包まれる名宿を徹底案内します。
          </p>
          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-sky-200">
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-sky-400" /> 静岡県富士宮市・朝霧高原・田貫湖</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-sky-400" /> 見頃期：11月上旬〜1月下旬</span>
            <span className="flex items-center gap-1.5"><Mountain className="w-4 h-4 text-sky-400" /> 冠雪富士山＆新春開運初詣</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Deep Dive Overview Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-sky-600 pl-4">
            <span className="text-sky-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Destination Analysis</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              なぜ冬の富士宮が格別なのか？一年で最も澄み渡る大気と富士山信仰の深層
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              冠雪の霊峰が放つ神々しい迫力と、富士山の伏流水が育む冬の恵み
            </p>
          </div>

          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              日本人の心の故郷であり、世界文化遺産の頂点に君臨する霊峰富士。その南西麓に広がる静岡県富士宮市は、有史以来、富士山をご神体として崇める富士山信仰の中心地として栄えてきました。富士山を眺望するスポットは日本各地に点在しますが、富士宮からの眺めが特別なのは、標高3,776メートルの独立峰が裾野まで広大に広がり、遮るもののない圧倒的なスケール感で眼前に迫る点にあります。
            </p>
            <p>
              特に11月から1月にかけての冬期は、太平洋側特有の西高東低の気圧配置によって湿度が急激に低下し、大気中の塵や水蒸気が払われます。年間を通じて最も晴天率が高く、抜けるようなコバルトブルーの青空を背景に、山頂から中腹まで真っ白な雪化粧をまとった富士山の稜線が際立ちます。早朝には昇る朝日に照らされて山肌が淡い紅に染まる「紅富士（べにふじ）」、夕暮れには茜色の残照に浮かぶシルエットなど、一日のうちで刻々と表情を変える雄姿は、見る者の心を深く揺さぶります。
            </p>
            <p>
              富士宮の冬のもう一つの主役が、全国に1,300社以上ある浅間神社の総本宮「富士山本宮浅間大社」です。慶長9年（1604年）、関ヶ原の戦いに勝利した徳川家康がその神徳に感謝して寄進した壮麗な本殿・拝殿は国の重要文化財。正月三が日には約30万人の参拝者が新年の開運・厄除けを祈願して訪れます。境内に湧き出る「湧玉池（わくたまのいけ）」は、富士山に降り積もった雪や雨が幾重もの溶岩層を約数十年かけて通り抜けて湧き出す特別天然記念物。水温は年間を通じて約13度前後に保たれており、冷え込む冬の朝には水面から神秘的な湯気が立ち上り、神聖な静寂を演出します。
            </p>
            <p>
              さらに富士の伏流水は、この地に類まれな冬の食文化をもたらしました。富士宮名物の「富士宮やきそば」は、湧水で仕込んだコシの強い蒸し麺に豚の背脂から取った肉かすと削り粉を合わせた唯一無二の味わい。寒冷な気候と清流で育つ「富士山白糸マス」、朝霧高原の冷涼な大地で育まれる濃厚な牛乳やチーズ、そして静岡県産黒毛和牛の最高峰「静岡そだち」のすき焼き。冬の凛とした空気の中で味わう熱々の美味は、旅人の五臓六腑を温かく満たしてくれます。
            </p>
          </div>

          {/* 3 Pillar Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-sky-50/60 border border-sky-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-bold text-slate-900 text-base">年間最高透明度の白銀富士</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                冬晴れの日が続き、水蒸気が極限まで減る冬期。田貫湖や朝霧高原から望む冠雪富士は息をのむ美しさ。
              </p>
            </div>

            <div className="bg-sky-50/60 border border-sky-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-bold text-slate-900 text-base">総本宮浅間大社の新春初詣</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                徳川家康ゆかりの重文本殿と特別天然記念物湧玉池。富士山の雪解け水が毎秒3.6トン湧き出る聖域で開運祈願。
              </p>
            </div>

            <div className="bg-sky-50/60 border border-sky-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-bold text-slate-900 text-base">特選静岡そだち牛＆富士宮やきそば</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                きめ細やかな霜降り黒毛和牛「静岡そだち」の極上すき焼きと、蒸し麺・肉かす・削り粉が香る熱々やきそば。
              </p>
            </div>
          </div>
        </section>

        {/* Month Guide */}
        <section className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 shadow-md space-y-6">
          <div className="border-l-4 border-sky-400 pl-4">
            <span className="text-sky-300 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Seasonal Calendar</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              11月・12月・1月の見どころカレンダー＆気候・服装ガイド
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-5 rounded-2xl border border-white/10 space-y-3">
              <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-md">11月（初冬）</span>
              <h3 className="font-bold text-white text-base">白糸の滝紅葉と初冠雪の美しい共演</h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                白糸の滝周辺の紅葉がピークを迎え、雪化粧を始めた富士山山頂とのコントラストが絶妙。日中は15℃前後で散策に快適ですが、朝晩は5℃前後まで下がるためセーターや厚手の上着が必要です。
              </p>
            </div>

            <div className="bg-white/10 p-5 rounded-2xl border border-white/10 space-y-3">
              <span className="inline-block px-3 py-1 bg-sky-500/20 text-sky-300 text-xs font-bold rounded-md">12月（仲冬）</span>
              <h3 className="font-bold text-white text-base">田貫湖の静寂逆さ富士と冬至ダイヤモンド</h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                大気の透明度が最高潮に達し、風のない早朝の田貫湖には完璧な逆さ富士が映ります。朝霧高原の最低気温は氷点下5℃近くに達するため、防風ダウンコート、手袋、マフラー、滑りにくい靴が必須。
              </p>
            </div>

            <div className="bg-white/10 p-5 rounded-2xl border border-white/10 space-y-3">
              <span className="inline-block px-3 py-1 bg-rose-500/20 text-rose-300 text-xs font-bold rounded-md">1月（厳冬）</span>
              <h3 className="font-bold text-white text-base">新春浅間大社初詣と神々しい紅富士</h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                元旦から初詣客で賑わう富士山本宮浅間大社。朝焼けに染まる紅富士を拝む縁起の良い新年のスタート。田貫湖や朝霧高原方面の道路は路面凍結のリスクがあるためスタッドレスタイヤが必須です。
              </p>
            </div>
          </div>
        </section>

        {/* Spot Highlights Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-8">
          <div className="border-l-4 border-sky-600 pl-4">
            <span className="text-sky-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Must-Visit Winter Spots</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬に訪れるべき富士宮の三大名所と体験ポイント
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Mountain className="w-5 h-5 text-sky-600" /> 田貫湖（たぬきこ）
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                朝霧高原の一角に位置する周囲約3.3kmの人造湖。波のない穏やかな早朝、白雪の富士山が湖面にそのまま映り込む「逆さ富士」の聖地。南側展望デッキや休暇村前からのアングルが絶景です。
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                アクセス：富士宮駅から路線バスで約45分。無料駐車場完備。
              </div>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Flame className="w-5 h-5 text-rose-600" /> 富士山本宮浅間大社
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                富士山頂を奥宮とする本宮。徳川家康寄進の二重楼閣造り「浅間造」の本殿、神聖な湧玉池、樹齢500年超の信玄桜など見どころ多数。新春の福みくじやお札受けで運気を授かります。
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                アクセス：JR富士宮駅より徒歩約10分。西富士宮駅より徒歩約8分。
              </div>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Waves className="w-5 h-5 text-emerald-600" /> 白糸の滝・音止の滝
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                国の名勝・天然記念物。高さ20m、幅150mの湾曲した断崖から無数の絹糸を垂らしたように富士の伏流水が流れ落ちる名瀑。冬は澄んだ空気と水しぶきが白銀の光を放ち幻想的です。
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                アクセス：富士宮駅からバス約30分。滝見橋から滝と富士山を同時に展望。
              </div>
            </div>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-8">
          <div className="border-l-4 border-sky-600 pl-4">
            <span className="text-sky-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              冬の富士宮を満喫する厳選名宿5選
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              富士山眺望・天然温泉・初詣アクセス・地元グルメを兼ね備えた特選宿
            </p>
          </div>

          <div className="space-y-12">
            {hotels.map((h) => (
              <div key={h.id} className="bg-white rounded-3xl overflow-hidden shadow-xs border border-slate-200/80 hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
                    <img
                      src={h.img}
                      alt={h.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                      厳選宿 #{h.id}
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                          {h.special}
                        </span>
                        <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span>{h.rating}</span>
                          <span className="text-slate-400 text-xs">({h.reviews}件)</span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                        {h.name}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        {h.story}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-xs">
                        <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                          <strong className="text-slate-900 block mb-1 flex items-center gap-1">
                            <Sun className="w-3.5 h-3.5 text-sky-600" /> 客室・眺望の魅力
                          </strong>
                          <span className="text-slate-600">{h.roomTip}</span>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                          <strong className="text-slate-900 block mb-1 flex items-center gap-1">
                            <Utensils className="w-3.5 h-3.5 text-amber-600" /> 冬の美食ポイント
                          </strong>
                          <span className="text-slate-600">{h.gourmetTip}</span>
                        </div>
                      </div>

                      <ul className="space-y-1.5 mb-6 text-xs sm:text-sm text-slate-700">
                        {h.highlights.map((hl, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <span className="text-xs text-slate-500 block">宿泊料金の目安（1名あたり）</span>
                        <span className="text-xl sm:text-2xl font-extrabold text-sky-900">{h.price}</span>
                      </div>

                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 text-white font-bold text-sm shadow hover:from-sky-700 hover:to-indigo-700 transition-all"
                      >
                        <span>楽天トラベルでプランを見る</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Winter Itinerary Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-sky-600 pl-4">
            <span className="text-sky-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の富士宮を満喫する1泊2日王道モデルコース
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              絶景撮影、新春初詣、名物グルメ、温泉を無理なく巡る理想のスケジュール
            </p>
          </div>

          <div className="space-y-6">
            <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/50">
              <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
                <span className="px-2.5 py-1 bg-sky-600 text-white text-xs rounded-md font-bold">1日目</span>
                世界遺産センター・浅間大社初詣と白糸の滝巡り
              </h3>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-700 list-decimal list-inside leading-relaxed">
                <li><strong className="text-slate-900">11:00 JR富士宮駅に到着</strong>：駅前の「静岡県富士山世界遺産センター」へ。逆さ富士を模した木格子建築と水盤に映る本物の富士山の絶景を鑑賞。</li>
                <li><strong className="text-slate-900">12:30 お宮横丁でランチ</strong>：浅間大社前のお宮横丁で、鉄板で焼き上げる熱々の名物「富士宮やきそば」を食べ比べ。</li>
                <li><strong className="text-slate-900">13:30 富士山本宮浅間大社参拝</strong>：徳川家康寄進の本殿を参拝し、湧玉池の湧水で清めのひととき。新春限定の破魔矢やお守りを拝受。</li>
                <li><strong className="text-slate-900">15:30 名勝「白糸の滝」へ</strong>：車またはバスで白糸の滝へ。冬の澄んだ水しぶきと冠雪富士のコラボレーションを滝見橋から撮影。</li>
                <li><strong className="text-slate-900">17:00 田貫湖または市内宿にチェックイン</strong>：富士山を望む展望露天風呂で冷えた身体を温め、静岡そだち牛や富士山白糸マスの贅沢ディナーを堪能。</li>
              </ol>
            </div>

            <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/50">
              <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
                <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs rounded-md font-bold">2日目</span>
                田貫湖早朝逆さ富士と朝霧高原牧場ドライブ
              </h3>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-700 list-decimal list-inside leading-relaxed">
                <li><strong className="text-slate-900">06:45 田貫湖畔で日の出観賞</strong>：波のない早朝の湖畔へ。朝日に染まる紅富士と湖面に映る雪化粧の逆さ富士をじっくり鑑賞。</li>
                <li><strong className="text-slate-900">08:00 宿で朝食</strong>：名物やきそばや朝霧高原の新鮮ミルク、炊きたてご飯でエネルギーをチャージ。</li>
                <li><strong className="text-slate-900">10:00 朝霧高原「まかいの牧場」へ</strong>：雄大な富士山をバックに羊や馬とふれあい、濃厚ソフトクリームやチーズ作り体験を満喫。</li>
                <li><strong className="text-slate-900">12:30 あさぎりフードパークでランチとお土産選び</strong>：地酒酒蔵、お茶工房、チーズ工房が集まるスポットで地産グルメと限定お土産を購入。</li>
                <li><strong className="text-slate-900">15:00 新富士駅または富士宮駅より帰路へ</strong>：新東名高速または身延線経由で帰路へ。</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Access and Winter Driving Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-sky-600 pl-4">
            <span className="text-sky-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Access & Winter Driving</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              富士宮への交通アクセスと冬道運転の重要注意点
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-700">
            <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Compass className="w-5 h-5 text-sky-600" /> 電車・新幹線・高速バス
              </h3>
              <ul className="space-y-2 list-disc list-inside leading-relaxed">
                <li><strong className="text-slate-900">東京方面から</strong>：東海道新幹線で「新富士駅」下車、路線バスで富士宮駅まで約30分。またはJR東海道本線「富士駅」乗り換え、JR身延線で「富士宮駅」まで約20分。</li>
                <li><strong className="text-slate-900">名古屋方面から</strong>：東海道新幹線で「静岡駅」下車、東海道線富士駅経由で約1時間40分。</li>
                <li><strong className="text-slate-900">高速バス</strong>：東京駅八重洲口から富士宮駅直通の「やきそばEXPRESS」が毎日運行（所要約2時間30分）。</li>
              </ul>
            </div>

            <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <ThermometerSun className="w-5 h-5 text-amber-600" /> 車・レンタカー＆冬用タイヤ
              </h3>
              <ul className="space-y-2 list-disc list-inside leading-relaxed">
                <li><strong className="text-slate-900">高速道路IC</strong>：新東名高速「新富士IC」または東名高速「富士IC」から西富士道路（国道139号バイパス）経由で富士宮市街まで約15分。</li>
                <li><strong className="text-slate-900">朝霧高原・田貫湖方面の注意点</strong>：標高600〜900mに位置するため、市街地と比べて気温が5〜8℃低くなります。12月〜1月は路面凍結（ブラックアイスバーン）が頻発するため、スタッドレスタイヤ装着が必須です。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-sky-600 pl-4">
            <span className="text-sky-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-2xl font-bold text-slate-900">
              冬の富士宮旅行 よくある質問（FAQ）
            </h2>
          </div>
          <div className="space-y-6">
            {faqList.map((faq, index) => (
              <div key={index} className="pb-6 border-b border-slate-100 last:border-b-0 last:pb-0">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 flex items-start gap-2">
                  <span className="text-sky-600 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Link Network */}
        <section className="bg-slate-100 rounded-3xl p-6 sm:p-10 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Compass className="w-5 h-5 text-sky-600" />
            あわせて読みたい！近隣エリアの冬特集記事
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/winter-shizuoka-atami-onsen-winter-fireworks-kinmedai-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-sky-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-sky-600 block"
            >
              【熱海温泉】冬花火の特等席＆金目鯛の煮付けを堪能する名宿
            </Link>
            <Link
              href="/winter-yamanashi-kawaguchiko-onsen-fuji-view-koshu-beef-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-sky-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-sky-600 block"
            >
              【河口湖温泉】富士山雪景色と甲州牛会席を満喫する湖畔宿
            </Link>
            <Link
              href="/winter-shizuoka-hamanako-kanzanji-torafugu-unagi-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-sky-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-sky-600 block"
            >
              【浜名湖・舘山寺温泉】冬の天然とらふぐと極上うなぎ名宿
            </Link>
            <Link
              href="/winter-kanagawa-hakone-fuji-view-onsen-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-sky-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-sky-600 block"
            >
              【箱根温泉】雪化粧の富士山絶景露天風呂と冬懐石の名宿
            </Link>
            <Link
              href="/winter-yamanashi-yamanakako-oshino-diamond-fuji-houtou-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-sky-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-sky-600 block"
            >
              【山中湖・忍野】ダイヤモンド富士と名物熱々ほうとう名宿
            </Link>
            <Link
              href="/features"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-sky-300 hover:shadow-xs transition-all text-sm font-bold text-sky-700 block text-center flex items-center justify-center gap-1"
            >
              <span>全国の冬旅特集一覧を見る</span>
              <Compass className="w-4 h-4" />
            </Link>
          
      <HubRelatedPosts currentSlug="winter-shizuoka-fujinomiya-sengen-taisha-fuji-view-wagyu-stay" />
</div>
        </section>
      </main>
    </article>
  );
}
