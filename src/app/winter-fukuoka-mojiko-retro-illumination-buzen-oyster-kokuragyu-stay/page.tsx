import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Snowflake, Waves, Sun, Flame, Mountain, Building, Coffee, ShoppingBag, ThermometerSun
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月福岡】門司港レトロ浪漫灯彩イルミネーション＆関門海峡！旬の「豊前海一粒牡蠣」と元祖焼きカレー・小倉牛を堪能する名宿5選",
  description: "冬の北九州・門司港は、大正ロマン薫る赤煉瓦洋館群が約30万球の光に包まれる「門司港レトロ浪漫灯彩」で幻想的な輝きを放ちます。関門海峡を行き交う船と対岸の夜景、小倉城の雪景色と新春初詣。11月に水揚げ解禁を迎える大粒で濃厚なブランド牡蠣「豊前海一粒牡蠣」の浜焼きや牡蠣小屋、門司港発祥の香ばしい熱々「焼きカレー」、関門ふく（ふぐ）、幻の銘牛「小倉牛」。海峡の潮風と歴史ロマン、極上の冬グルメに浸る厳選名宿5選を徹底案内します。",
  keywords: '門司港 ホテル, 門司港レトロ イルミネーション, 豊前海一粒牡蠣, 門司港 焼きカレー, プレミアホテル門司港, リーガロイヤルホテル小倉, 小倉牛, 関門海峡 夜景, 11月 12月 1月 福岡 観光',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-fukuoka-mojiko-retro-illumination-buzen-oyster-kokuragyu-stay/"
  },
  openGraph: {
    title: "【11・12・1月福岡】門司港レトロ浪漫灯彩イルミネーション＆関門海峡！旬の「豊前海一粒牡蠣」と元祖焼きカレー・小倉牛を堪能する名宿5選",
    description: "冬の北九州・門司港は、大正ロマン薫る赤煉瓦洋館群が約30万球の光に包まれる「門司港レトロ浪漫灯彩」で幻想的な輝きを放ちます。関門海峡を行き交う船と対岸の夜景、小倉城の雪景色と新春初詣。11月に水揚げ解禁を迎える大粒で濃厚なブランド牡蠣「豊前海一粒牡蠣」の浜焼きや牡蠣小屋、門司港発祥の香ばしい熱々「焼きカレー」、関門ふく（ふぐ）、幻の銘牛「小倉牛」。海峡の潮風と歴史ロマン、極上の冬グルメに浸る厳選名宿5選を徹底案内します。",
    url: 'https://croud-travel.com/winter-fukuoka-mojiko-retro-illumination-buzen-oyster-kokuragyu-stay',
    type: 'article',
    images: [{ url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=630', width: 1200, height: 630, alt: '門司港レトロ浪漫灯彩と関門海峡の冬夜景' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月福岡】門司港レトロ浪漫灯彩イルミネーション＆関門海峡！旬の「豊前海一粒牡蠣」と元祖焼きカレー・小倉牛を堪能する名宿5選",
    description: "冬の北九州・門司港は、大正ロマン薫る赤煉瓦洋館群が約30万球の光に包まれる「門司港レトロ浪漫灯彩」で幻想的な輝きを放ちます。関門海峡を行き交う船と対岸の夜景、小倉城の雪景色と新春初詣。11月に水揚げ解禁を迎える大粒で濃厚なブランド牡蠣「豊前海一粒牡蠣」の浜焼きや牡蠣小屋、門司港発祥の香ばしい熱々「焼きカレー」、関門ふく（ふぐ）、幻の銘牛「小倉牛」。海峡の潮風と歴史ロマン、極上の冬グルメに浸る厳選名宿5選を徹底案内します。"
  }
};

export default function FukuokaMojikoKokuraPage() {
  const hotels = [
            {
              id: 1,
              name: "プレミアホテル門司港",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/3164/3164.jpg",
              rating: 4.48,
              reviews: 3678,
              price: "¥7,735〜",
              access: "【JR】 門司港駅から徒歩約2分（JR小倉駅から3駅15分で門司港駅到着）、【車】九州自動車道門司ICから約8分",
              special: "関門海峡の絶景を望むデザイナーズホテル◆門司港駅へ徒歩2分！唐戸市場も好アクセス◆高評価朝食ブッフェ",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F3164%2F3164.html",
              story: "イタリア建築界の巨匠アルド・ロッシが設計を手掛け、門司港レトロ地区の中心に優雅に佇むランドマークホテル「プレミアホテル門司港」。関門海峡を一望する客室からは、ライトアップされた跳ね橋「ブルーウィングもじ」や旧門司税関、対岸の下関の煌めく夜景をまるで絵画のように眺められます。冬の澄んだ夜空の下で開催される「門司港レトロ浪漫灯彩」のイルミネーションを部屋からゆっくり鑑賞できる最高のロケーション。館内レストランでは地元名物の焼きカレーや関門海峡の冬フグ、豊前海一粒牡蠣を洗練された料理で味わえ、大正ロマンの風情漂う特別な冬の夜を演出してくれます。",
              roomTip: "海峡側スーペリアツイン。窓いっぱいに広がる関門海峡の冬夜景とイルミネーション。船の汽笛が心地よいプライベート空間。",
              gourmetTip: "「門司港名物焼きカレー＆海峡フグディナー」。特製スパイスと濃厚チーズを香ばしく焼き上げた絶品焼きカレーと関門フグの刺身。",
              highlights: [
                "イタリア巨匠アルド・ロッシ設計・門司港レトロ中央の跳ね橋と関門海峡を望む特等席",
                "門司港名物焼きカレーや関門フグ料理・豊前海一粒牡蠣を洗練された空間で堪能",
                "門司港レトロ浪漫灯彩（30万球イルミネーション）を部屋から鑑賞できる贅沢"
              ]
            },
            {
              id: 2,
              name: "リーガロイヤルホテル小倉",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/111/111.jpg",
              rating: 4.39,
              reviews: 5091,
              price: "¥7,827〜",
              access: "JR小倉駅新幹線口から直結徒歩3分、JR博多駅から新幹線で約15分、福岡空港からも好アクセス。",
              special: "【小倉駅直結♪徒歩3分とアクセス抜群！】 ～全室30平米以上～14階以上の高層階～",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F111%2F111.html",
              story: "新幹線停車駅のJR小倉駅新幹線口（北口）から空中回廊で直結、徒歩約3分という抜群のアクセスを誇る地上30階の超高層ホテル「リーガロイヤルホテル小倉」。全客室が14階以上の高層階に位置し、北九州のダイナミックな街並みや関門海峡、小倉城方面の美しい夜景を眼下に見下ろせます。広々とした客室はモダンで落ち着きがあり、冬の観光帰りに上質な休息を提供。最上階のレストランや鉄板焼きコーナーでは、年間出荷頭数が極めて少ない幻の黒毛和牛「小倉牛」の極上ステーキや冬の瀬戸内・響灘の旬魚を贅沢に堪能できます。",
              roomTip: "タワーフロア・エグゼクティブツイン。30階からの大パノラマ夜景を望み、専用アメニティと上質なベッドで至福のステイを約束。",
              gourmetTip: "「幻の銘牛・小倉牛ステーキ鉄板焼きディナー」。きめ細かなサシと芳醇な香りを誇る小倉牛フィレ肉と、旬の豊前海産冬魚のソテー。",
              highlights: [
                "JR小倉駅空中回廊直結・地上30階超高層タワーから関門海峡と北九州の夜景を一望",
                "年間出荷わずかな幻の黒毛和牛「小倉牛」ステーキ鉄板焼きディナーが自慢",
                "28階以上の特別フロア完備・リーガロイヤルならではの洗練されたおもてなし"
              ]
            },
            {
              id: 3,
              name: "ＪＲ九州ステーションホテル小倉",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/974/974.jpg",
              rating: 4.36,
              reviews: 4302,
              price: "¥7,160〜",
              access: "JR小倉駅上！！！駅直結で最高の立地。改札口を出てすぐにチェックイン。",
              special: "小倉駅改札口から86歩！駅直結入り口有。15時チェックイン11時チェックアウト★",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F974%2F974.html",
              story: "JR小倉駅ビル直結という究極の利便性を誇る「ＪＲ九州ステーションホテル小倉」。駅改札から天候を一切気にせず直行できるため、雨風や冬の寒さが厳しい日でも快適にチェックインできます。門司港レトロへは小倉駅からJR鹿児島本線で約13分とアクセス至便。客室は静粛性に優れ、高品質なシモンズ社製ベッドが旅の疲れを心地よく癒やしてくれます。朝食ビュッフェでは、福岡名物の明太子やがめ煮（筑前煮）、水炊き風スープなど九州の豊かな郷土料理が色鮮やかに並び、朝から元気なエネルギーをチャージできます。",
              roomTip: "スーペリアダブル・ツイン。駅直結とは思えない静寂な空間設計。小倉の夜景を眺めながらゆったりくつろげる開放的な客室。",
              gourmetTip: "「九州味めぐり朝食ビュッフェ」。博多辛子明太子やかしわ飯、九州産野菜の温かい鍋料理など、ご当地グルメを満喫。",
              highlights: [
                "小倉駅ビル直結の抜群の利便性・シモンズベッド完備で静粛性に優れた快適客室",
                "博多明太子やがめ煮など九州郷土色豊かな朝食ビュッフェで大満足",
                "悪天候や冬の寒さでも雨に濡れずチェックイン・門司港へJRで13分の拠点性"
              ]
            },
            {
              id: 4,
              name: "ダイワロイネットホテル小倉駅前",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/151178/151178.jpg",
              rating: 4.40,
              reviews: 1685,
              price: "¥6,700〜",
              access: "ＪＲ　小倉駅　小倉城口（南口）より徒歩にて約４分◆JR　博多駅から新幹線で約20分（ひと駅）◆モノレール沿い",
              special: "お得なクーポン配布中！◆ＪＲ小倉駅南口より徒歩４分◆",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F151178%2F151178.html",
              story: "JR小倉駅小倉城口（南口）から徒歩約1分、魚町銀天街や旦過市場にも近い抜群のロケーションに位置する「ダイワロイネットホテル小倉駅前」。清潔感あふれるモダンなデザインと機能性を両立させた客室は、ビジネスだけでなく冬の観光拠点として高い支持を集めています。全室に加湿空気清浄機やズボンプレッサー、広めのデスクを完備。フロントスタッフの温かなもてなしと細やかな配慮が、冬の冷え込んだ身体を優しく包みます。近隣には小倉発祥の焼きうどんや新鮮な海鮮居酒屋が軒を連ね、夜の街歩きグルメも存分に楽しめます。",
              roomTip: "スタンダードツインルーム。ワイドベッドと明るい照明、独立型の清潔な水回りを備え、快適な冬のステイをサポート。",
              gourmetTip: "「提携店朝食＆小倉ご当地グルメ巡り」。ホテル周辺の老舗割烹や名店で味わう豊前海一粒牡蠣の鍋や小倉発祥焼きうどん。",
              highlights: [
                "小倉駅南口徒歩1分・魚町銀天街や旦過市場至近・機能美あふれる上質ステイ",
                "加湿空気清浄機完備・周辺の焼きうどん発祥店や海鮮居酒屋へのアクセス抜群",
                "小倉城冬景色や八坂神社初詣の散策拠点・女性一人旅にも安心のセキュリティ"
              ]
            },
            {
              id: 5,
              name: "ホテルルートイン門司港",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/38274/38274.jpg",
              rating: 4.02,
              reviews: 1763,
              price: "¥4,975〜",
              access: "門司港駅より徒歩15～20分（車で２分）小倉駅より車で15分",
              special: "&amp;#128310;朝食バイキング無料&amp;#128310;展望大浴場&amp;#128310;コンビニ徒歩2分",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38274%2F38274.html",
              story: "関門橋の袂、関門海峡のダイナミックな景観を間近に臨む好立地にある「ホテルルートイン門司港」。館内最上階には関門海峡を一望する展望大浴場が完備されており、早朝や夕暮れ時に行き交う巨大な貨物船や関門橋のライトアップを眺めながら、温かいお湯に手足を伸ばして浸かる贅沢を満喫できます。門司港レトロ中心部への無料送迎バスも運行されており観光に大変便利。ヨーロッパ直輸入のヨーロピアンブレッドが自慢の無料和洋朝食バイキングや、平面駐車場完備でマイカーやレンタカーでの冬の海峡ドライブ旅行にも最適な一軒です。",
              roomTip: "海峡側コンフォートルーム。窓の向こうに関門橋の優美なアーチと海峡を行き交う船を眺められる旅情あふれる客室。",
              gourmetTip: "「展望大浴場後の無料バイキング朝食」。サクサクの焼きたてクロワッサンと温かい具だくさん味噌汁で身体の芯から温まる朝。",
              highlights: [
                "最上階に関門海峡を望む展望大浴場完備・門司港レトロ無料送迎バス運行",
                "無料焼きたてパン朝食バイキング・関門橋のライトアップを眺めながらの入浴",
                "平面駐車場完備でマイカーやレンタカーでの関門海峡ドライブに最適"
              ]
            }
  ];

  const faqList = [
  {
    "q": "「門司港レトロ浪漫灯彩（イルミネーション）」の開催期間や点灯時間、見どころは？",
    "a": "「門司港レトロ浪漫灯彩」は、例年11月中旬から翌年2月中旬〜3月上旬にかけて開催される北九州の冬の代表的なイルミネーションイベントです。点灯時間は毎日17時30分から早朝（または24時頃）まで。旧門司税関、旧大阪商船、国際友好記念図書館などの歴史的建造物が約30万球の温かな光でライトアップされます。特に歩行者専用の跳ね橋「ブルーウィングもじ」周辺の街路樹の光と、水面に反射するイルミネーション、対岸・下関の夜景が織りなすパノラマはロマンチックで必見です。"
  },
  {
    "q": "冬の北九州名物「豊前海一粒牡蠣（ぶぜんかいいちぶがき）」の特徴と美味しい時期は？",
    "a": "豊前海一粒牡蠣は、福岡県東部の豊かな栄養分が注ぎ込む豊前海で養殖されるブランド牡蠣です。毎年11月中旬に水揚げが解禁され、12月〜1月に身入りが最も良くなります。殻いっぱいにぷりっぷりと太った肉厚の身は、火を通しても縮みにくく、濃厚な甘みとクリーミーな旨みが凝縮されているのが大きな特徴です。門司港や北九州市内の牡蠣小屋、海鮮居酒屋で炭火焼きや牡蠣鍋、牡蠣フライとして熱々を味わえます。"
  },
  {
    "q": "門司港発祥の「焼きカレー」の歴史とおすすめの食べ方は？",
    "a": "焼きカレーは昭和30年代、門司港の喫茶店で余ったカレーに卵とチーズをのせてオーブンで焼いたところ、香ばしく絶品だったことから誕生したと伝えられています。ご飯の上にコク深い特製カレーソース、とろけるチーズ、半熟卵をトッピングして高温で香ばしく焼き上げます。スプーンを入れると半熟卵がとろりとあふれ出し、スパイシーな辛さとチーズのコク、卵のまろやかさが絶妙に調和。冬の海風で冷えた身体を一気に温めてくれる至高のソウルフードです。"
  },
  {
    "q": "冬の門司港・関門海峡エリアの気候とおすすめの服装・防寒対策は？",
    "a": "門司港や関門海峡周辺は海に面しているため、冬場（11月〜1月）は玄界灘や響灘からの強い北西の季節風が吹き付けます。実際の気温（5℃〜10℃前後）よりも体感温度がかなり低く感じられます。海沿いの夜間散策やイルミネーション観賞を楽しむ際は、防風性の高いダウンジャケットやコート、風を通さないマフラー、手袋、ニット帽などの防寒具をしっかり準備しましょう。足元も歩きやすく底の冷えない靴が適しています。"
  },
  {
    "q": "小倉駅から門司港レトロへの移動方法や、おすすめの冬の周遊モデルコースは？",
    "a": "JR小倉駅から門司港駅へは、JR鹿児島本線の快速・普通列車で直通わずか13〜15分。門司港駅は大正3年創建の木造駅舎で、国指定重要文化財の美しい駅舎自体が見どころです。おすすめコースは、昼前に門司港駅に到着し、大正ロマンの洋館群を散策しながら名物焼きカレーをランチに堪能。午後は関門連絡船（所要約5分）で対岸の唐戸市場へ渡り冬のフグを味わうか、門司港レトロ展望室から海峡パノラマを満喫。夕暮れから「浪漫灯彩」イルミネーションを楽しみ、夜は小倉へ戻って小倉牛や豊前海一粒牡蠣のディナーを楽しむプランが最適です。"
  }
];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'ホーム', 'item': 'https://croud-travel.com' },
          { '@type': 'ListItem', 'position': 2, 'name': '特集一覧', 'item': 'https://croud-travel.com/features' },
          { '@type': 'ListItem', 'position': 3, 'name': '門司港レトロイルミネーション＆小倉名宿', 'item': 'https://croud-travel.com/winter-fukuoka-mojiko-retro-illumination-buzen-oyster-kokuragyu-stay' }
        ]
      },
      {
        '@type': 'TouristDestination',
        'name': '門司港レトロ・関門海峡・小倉',
        'description': "冬の北九州・門司港は、大正ロマン薫る赤煉瓦洋館群が約30万球の光に包まれる「門司港レトロ浪漫灯彩」で幻想的な輝きを放ちます。関門海峡を行き交う船と対岸の夜景、小倉城の雪景色と新春初詣。11月に水揚げ解禁を迎える大粒で濃厚なブランド牡蠣「豊前海一粒牡蠣」の浜焼きや牡蠣小屋、門司港発祥の香ばしい熱々「焼きカレー」、関門ふく（ふぐ）、幻の銘牛「小倉牛」。海峡の潮風と歴史ロマン、極上の冬グルメに浸る厳選名宿5選を徹底案内します。",
        'touristType': ['歴史景観', '冬のイルミネーション', '海峡絶景', '美食探訪', '大正ロマン']
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': "「門司港レトロ浪漫灯彩（イルミネーション）」の開催期間や点灯時間、見どころは？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "「門司港レトロ浪漫灯彩」は、例年11月中旬から翌年2月中旬〜3月上旬にかけて開催される北九州の冬の代表的なイルミネーションイベントです。点灯時間は毎日17時30分から早朝（または24時頃）まで。旧門司税関、旧大阪商船、国際友好記念図書館などの歴史的建造物が約30万球の温かな光でライトアップされます。特に歩行者専用の跳ね橋「ブルーウィングもじ」周辺の街路樹の光と、水面に反射するイルミネーション、対岸・下関の夜景が織りなすパノラマはロマンチックで必見です。"
            }
          },
          {
            '@type': 'Question',
            'name': "冬の北九州名物「豊前海一粒牡蠣（ぶぜんかいいちぶがき）」の特徴と美味しい時期は？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "豊前海一粒牡蠣は、福岡県東部の豊かな栄養分が注ぎ込む豊前海で養殖されるブランド牡蠣です。毎年11月中旬に水揚げが解禁され、12月〜1月に身入りが最も良くなります。殻いっぱいにぷりっぷりと太った肉厚の身は、火を通しても縮みにくく、濃厚な甘みとクリーミーな旨みが凝縮されているのが大きな特徴です。門司港や北九州市内の牡蠣小屋、海鮮居酒屋で炭火焼きや牡蠣鍋、牡蠣フライとして熱々を味わえます。"
            }
          },
          {
            '@type': 'Question',
            'name': "門司港発祥の「焼きカレー」の歴史とおすすめの食べ方は？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "焼きカレーは昭和30年代、門司港の喫茶店で余ったカレーに卵とチーズをのせてオーブンで焼いたところ、香ばしく絶品だったことから誕生したと伝えられています。ご飯の上にコク深い特製カレーソース、とろけるチーズ、半熟卵をトッピングして高温で香ばしく焼き上げます。スプーンを入れると半熟卵がとろりとあふれ出し、スパイシーな辛さとチーズのコク、卵のまろやかさが絶妙に調和。冬の海風で冷えた身体を一気に温めてくれる至高のソウルフードです。"
            }
          },
          {
            '@type': 'Question',
            'name': "冬の門司港・関門海峡エリアの気候とおすすめの服装・防寒対策は？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "門司港や関門海峡周辺は海に面しているため、冬場（11月〜1月）は玄界灘や響灘からの強い北西の季節風が吹き付けます。実際の気温（5℃〜10℃前後）よりも体感温度がかなり低く感じられます。海沿いの夜間散策やイルミネーション観賞を楽しむ際は、防風性の高いダウンジャケットやコート、風を通さないマフラー、手袋、ニット帽などの防寒具をしっかり準備しましょう。足元も歩きやすく底の冷えない靴が適しています。"
            }
          },
          {
            '@type': 'Question',
            'name': "小倉駅から門司港レトロへの移動方法や、おすすめの冬の周遊モデルコースは？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "JR小倉駅から門司港駅へは、JR鹿児島本線の快速・普通列車で直通わずか13〜15分。門司港駅は大正3年創建の木造駅舎で、国指定重要文化財の美しい駅舎自体が見どころです。おすすめコースは、昼前に門司港駅に到着し、大正ロマンの洋館群を散策しながら名物焼きカレーをランチに堪能。午後は関門連絡船（所要約5分）で対岸の唐戸市場へ渡り冬のフグを味わうか、門司港レトロ展望室から海峡パノラマを満喫。夕暮れから「浪漫灯彩」イルミネーションを楽しみ、夜は小倉へ戻って小倉牛や豊前海一粒牡蠣のディナーを楽しむプランが最適です。"
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
      <header className="relative bg-gradient-to-br from-indigo-950 via-slate-900 to-amber-950 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-200 text-xs sm:text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-amber-300" />
            11月・12月・1月冬の特選旅｜福岡・門司港レトロ＆小倉
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white mb-6">
            門司港レトロ浪漫灯彩イルミネーション＆関門海峡！<br className="hidden sm:inline" />
            旬の「豊前海一粒牡蠣」と元祖焼きカレー・小倉牛の名宿5選
          </h1>
          <p className="text-base sm:text-lg text-amber-100/90 leading-relaxed max-w-4xl mb-8">
            大正モダニズムの赤煉瓦洋館群が約30万球の温かな光に浮かび上がる冬の門司港レトロ。荒波寄せる関門海峡のダイナミックな景観と対岸・下関の煌めく夜景、小倉城の雪景色と新春の賑わい。11月に解禁を迎える大粒濃厚なブランド牡蠣「豊前海一粒牡蠣」、オーブンで香ばしく焼き上げた元祖焼きカレー、関門ふぐ、そして幻の黒毛和牛「小倉牛」。歴史と異国情緒、冬の港町ならではの温かな美食を満喫できる名宿を詳しく解説します。
          </p>
          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-amber-200">
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-amber-400" /> 福岡県北九州市門司区・小倉北区</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-amber-400" /> 開催期：11月中旬〜2月下旬</span>
            <span className="flex items-center gap-1.5"><Waves className="w-4 h-4 text-amber-400" /> 浪漫灯彩＆豊前海一粒牡蠣</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Deep Dive Overview Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-amber-600 pl-4">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Destination Analysis</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              なぜ冬の門司港・小倉が旅人を魅了するのか？海峡イルミネーションと冬の港町美食文化
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              大正浪漫の赤煉瓦建築が放つノスタルジーと、関門海峡が育む奇跡の冬幸
            </p>
          </div>

          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              本州と九州を隔てる関門海峡。その九州側の玄関口として明治から大正にかけて国際貿易港として繁栄を極めた門司港は、今なお当時の壮麗な洋館群が立ち並ぶ九州屈指のノスタルジックスポットです。多くの観光地が静けさを取り戻す冬、門司港は一年のうちで最も華やかで情緒あふれる変貌を遂げます。11月中旬から始まる冬の風物詩「門司港レトロ浪漫灯彩」では、旧門司税関や旧大阪商船、大正3年創建の国指定重要文化財「門司港駅」周辺が約30万球の温かな光で照らし出されます。
            </p>
            <p>
              歩行者専用の跳ね橋「ブルーウィングもじ」周辺の水面にはイルミネーションの光が揺らめき、対岸の下関市街の灯りや巨大な関門橋のライトアップと重なり合って、日本屈指のドラマチックな海峡夜景を描き出します。潮風が心地よい冷たさを運ぶ夜、汽笛を鳴らしながらゆっくりと行き交う大型貨物船のシルエットを眺める時間は、港町特有の旅情に満ちています。
            </p>
            <p>
              そして冬の門司港・小倉を語る上で欠かせないのが、11月以降に解禁・最盛期を迎える極上グルメの数々です。福岡県東部の栄養豊富な豊前海で育つ「豊前海一粒牡蠣（ぶぜんかいいちぶがき）」は、11月中旬に水揚げが解禁されるブランド牡蠣。身入りが極めて良く、殻いっぱいに詰まった肉厚な身は火を通しても縮みにくく、噛みしめると濃厚なミルクのような旨みが口いっぱいに広がります。市内各所の牡蠣小屋や海鮮処で炭火でパチパチと音を立てて焼き上げる熱々の牡蠣は冬の醍醐味です。
            </p>
            <p>
              さらに、昭和の喫茶店から生まれたソウルフード「焼きカレー」は、スパイスの効いたカレーに卵とチーズをのせて香ばしく焼き上げる名物。冬の寒風で冷えた身体に、とろけるチーズと半熟卵のまろやかさが染み渡ります。小倉エリアに足を伸ばせば、出荷頭数が極めて少なく幻の銘牛と呼ばれる「小倉牛」のステーキや、下関から届く新鮮な関門フグなど、北九州ならではの贅沢な冬の味覚を心ゆくまで堪能できます。
            </p>
          </div>

          {/* 3 Pillar Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-amber-50/60 border border-amber-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-bold text-slate-900 text-base">30万球の浪漫灯彩イルミ</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                赤煉瓦洋館群と海峡の水面が淡い光に輝く幻想美。跳ね橋ブルーウィングもじと下関夜景のコラボレーション。
              </p>
            </div>

            <div className="bg-amber-50/60 border border-amber-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-bold text-slate-900 text-base">11月解禁！豊前海一粒牡蠣</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                殻いっぱいに詰まった肉厚でクリーミーな身。炭火焼き牡蠣小屋や牡蠣鍋で味わう冬の至高の海のミルク。
              </p>
            </div>

            <div className="bg-amber-50/60 border border-amber-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-bold text-slate-900 text-base">元祖焼きカレー＆幻の小倉牛</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                オーブンで焼き上げた熱々チーズ香る名物焼きカレーと、芳醇な霜降りを誇る最高級黒毛和牛「小倉牛」。
              </p>
            </div>
          </div>
        </section>

        {/* Month Guide */}
        <section className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-md space-y-6">
          <div className="border-l-4 border-amber-400 pl-4">
            <span className="text-amber-300 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Seasonal Calendar</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              11月・12月・1月の見どころカレンダー＆海峡気候ガイド
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-5 rounded-2xl border border-white/10 space-y-3">
              <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-md">11月（初冬）</span>
              <h3 className="font-bold text-white text-base">浪漫灯彩の点灯開始と牡蠣小屋オープン</h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                11月中旬にイルミネーションが点灯し、街全体が温かな光に包まれます。同時に豊前海一粒牡蠣の水揚げが始まり、牡蠣小屋の煙が立ち上る活気あるシーズンの幕開けです。
              </p>
            </div>

            <div className="bg-white/10 p-5 rounded-2xl border border-white/10 space-y-3">
              <span className="inline-block px-3 py-1 bg-rose-500/20 text-rose-300 text-xs font-bold rounded-md">12月（仲冬）</span>
              <h3 className="font-bold text-white text-base">クリスマスマーケットと海峡年越し花火</h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                レトロ建築と巨大クリスマスツリーの煌めき。大晦日の夜にはカウントダウン花火とともに海峡を航行する船が一斉に汽笛を鳴らす、港町ならではの年越しが体験できます。
              </p>
            </div>

            <div className="bg-white/10 p-5 rounded-2xl border border-white/10 space-y-3">
              <span className="inline-block px-3 py-1 bg-sky-500/20 text-sky-300 text-xs font-bold rounded-md">1月（厳冬）</span>
              <h3 className="font-bold text-white text-base">小倉城初詣と極上関門フグ・牡蠣のピーク</h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                小倉城の八坂神社や門司の甲宗八幡宮での新春初詣。寒風が吹き付ける1月は、熱々の焼きカレーや身の締まった関門フグ刺し、牡蠣鍋が最高に美味しくなる時期です。
              </p>
            </div>
          </div>
        </section>

        {/* Spot Highlights Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-8">
          <div className="border-l-4 border-amber-600 pl-4">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Must-Visit Winter Spots</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の門司港・小倉で外せない三大見どころ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-600" /> 門司港レトロ地区
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                旧門司税関、旧大阪商船、国際友好記念図書館など、大正浪漫の赤煉瓦建築が連なるエリア。跳ね橋ブルーウィングもじからは関門橋と海峡を行き交う船を一望できます。
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                アクセス：JR門司港駅下車すぐ。徒歩でゆっくり散策可能。
              </div>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Building className="w-5 h-5 text-indigo-600" /> 小倉城＆八坂神社
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                細川忠興が築城した名城・小倉城。天守閣最上階からは小倉市街を一望。隣接する八坂神社は小倉の総鎮守として新春初詣客で大いに賑わい、厄除け開運を祈願できます。
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                アクセス：JR小倉駅より徒歩約15分。紫川沿いの散策路も魅力。
              </div>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Waves className="w-5 h-5 text-sky-600" /> 関門海峡＆唐戸市場（連絡船）
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                門司港桟橋から関門連絡船に乗ればわずか約5分で対岸の下関・唐戸市場へ。冬の荒波を進むミニクルーズを楽しみつつ、下関本場のふぐ汁や握り寿司を堪能できます。
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                アクセス：門司港レトロ桟橋より約20分間隔で運航。片道約5分。
              </div>
            </div>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-8">
          <div className="border-l-4 border-amber-600 pl-4">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              門司港レトロ＆小倉の冬ステイを彩る厳選宿5選
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              海峡夜景・イルミネーション展望・大浴場・極上グルメを兼ね備えた名宿
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
                      <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                      厳選宿 #{h.id}
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
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
                            <Sun className="w-3.5 h-3.5 text-amber-600" /> 客室・眺望の魅力
                          </strong>
                          <span className="text-slate-600">{h.roomTip}</span>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                          <strong className="text-slate-900 block mb-1 flex items-center gap-1">
                            <Utensils className="w-3.5 h-3.5 text-rose-600" /> 冬の美食ポイント
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
                        <span className="text-xl sm:text-2xl font-extrabold text-amber-900">{h.price}</span>
                      </div>

                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-indigo-600 text-white font-bold text-sm shadow hover:from-amber-700 hover:to-indigo-700 transition-all"
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
          <div className="border-l-4 border-amber-600 pl-4">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の門司港・小倉を満喫する1泊2日モデルコース
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              大正レトロ散策、イルミネーション、牡蠣小屋、小倉城を巡る充実プラン
            </p>
          </div>

          <div className="space-y-6">
            <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/50">
              <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
                <span className="px-2.5 py-1 bg-amber-600 text-white text-xs rounded-md font-bold">1日目</span>
                門司港レトロ洋館めぐりと浪漫灯彩イルミネーション
              </h3>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-700 list-decimal list-inside leading-relaxed">
                <li><strong className="text-slate-900">11:30 JR門司港駅に到着</strong>：大正3年創建の木造重文駅舎を見学。駅前広場からレトロ散策へ出発。</li>
                <li><strong className="text-slate-900">12:30 名物「焼きカレー」ランチ</strong>：老舗喫茶店でスパイスと熱々とろけるチーズが絶妙な元祖焼きカレーを堪能。</li>
                <li><strong className="text-slate-900">14:00 関門連絡船で唐戸市場へ</strong>：桟橋から船で5分、下関唐戸市場で冬のフグ汁や海鮮を楽しみ、再び門司港へ。</li>
                <li><strong className="text-slate-900">16:00 門司港レトロ展望室へ</strong>：日本を代表する建築家・黒川紀章設計の高層タワーから関門海峡の夕景をパノラマ展望。</li>
                <li><strong className="text-slate-900">17:30 浪漫灯彩イルミネーション観賞</strong>：約30万球が灯るレトロ街を散策。ホテルへチェックインし、豊前海一粒牡蠣や小倉牛ディナーを満喫。</li>
              </ol>
            </div>

            <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/50">
              <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
                <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs rounded-md font-bold">2日目</span>
                小倉城初詣と旦過市場・焼きうどん探訪
              </h3>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-700 list-decimal list-inside leading-relaxed">
                <li><strong className="text-slate-900">08:30 ホテルで朝食</strong>：博多明太子やがめ煮など九州の郷土の味覚をバイキングで楽しむ。</li>
                <li><strong className="text-slate-900">09:45 JR鹿児島本線で小倉へ移動</strong>：約13分で小倉駅へ到着。荷物を預けて街歩きへ。</li>
                <li><strong className="text-slate-900">10:30 小倉城と八坂神社参拝</strong>：名城・小倉城の天守閣を見学し、隣接する八坂神社で新春開運の初詣。</li>
                <li><strong className="text-slate-900">12:30 鳥町食道街・旦過市場周辺でランチ</strong>：小倉発祥の「焼きうどん」や、北九州の市場グルメを味わう。</li>
                <li><strong className="text-slate-900">15:00 小倉駅より山陽新幹線で帰路へ</strong>：駅ビルでお土産（ネジチョコ、小倉日記など）を購入し帰路へ。</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Access and Sea Wind Notice */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-amber-600 pl-4">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Access & Winter Tips</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              門司港・小倉へのアクセスと冬の海風対策
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-700">
            <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Compass className="w-5 h-5 text-amber-600" /> 新幹線・電車・飛行機
              </h3>
              <ul className="space-y-2 list-disc list-inside leading-relaxed">
                <li><strong className="text-slate-900">新幹線</strong>：山陽新幹線「小倉駅」下車。小倉駅からJR鹿児島本線で門司港駅まで快速・普通で直通約13〜15分。</li>
                <li><strong className="text-slate-900">博多から</strong>：JR鹿児島本線の特急ソニック・きらめきで小倉まで約40分、新幹線なら約15分。</li>
                <li><strong className="text-slate-900">北九州空港から</strong>：小倉駅直行エアポートバスで約35分。羽田空港からのアクセスも良好。</li>
              </ul>
            </div>

            <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <ThermometerSun className="w-5 h-5 text-indigo-600" /> 海峡の強い季節風と防寒装備
              </h3>
              <ul className="space-y-2 list-disc list-inside leading-relaxed">
                <li><strong className="text-slate-900">海風への備え</strong>：関門海峡周辺は玄界灘からの北西季節風が強く吹き付けます。体感温度は氷点下近くまで下がることがあるため、防風仕様のコートやダウン、マフラー、手袋が必須です。</li>
                <li><strong className="text-slate-900">マイカードライブ</strong>：関門橋（関門自動車道）または関門トンネル経由で本州・下関へ車で渡るのも簡単。路面凍結は稀ですが強風時の運転には注意しましょう。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-amber-600 pl-4">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-2xl font-bold text-slate-900">
              冬の門司港・小倉旅行 よくある質問（FAQ）
            </h2>
          </div>
          <div className="space-y-6">
            {faqList.map((faq, index) => (
              <div key={index} className="pb-6 border-b border-slate-100 last:border-b-0 last:pb-0">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 flex items-start gap-2">
                  <span className="text-amber-600 font-extrabold">Q.</span>
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
            <Compass className="w-5 h-5 text-amber-600" />
            あわせて読みたい！九州の冬特集記事
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/winter-fukuoka-dazaifu-tenmangu-hatsumode-futsukaichi-beef-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-amber-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-amber-600 block"
            >
              【太宰府天満宮】新春初詣＆二日市温泉・博多和牛の名宿
            </Link>
            <Link
              href="/winter-fukuoka-itoshima-oyster-hakata-fugu-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-amber-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-amber-600 block"
            >
              【糸島】冬の焼き牡蠣小屋めぐり＆博多天然とらふぐ名宿
            </Link>
            <Link
              href="/winter-yamaguchi-shimonoseki-kawatana-onsen-torafugu-kawarasoba-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-amber-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-amber-600 block"
            >
              【下関・川棚温泉】関門海峡の本場とらふぐ＆名物瓦そば名宿
            </Link>
            <Link
              href="/winter-fukuoka-yanagawa-onsen-kotatsubune-unagi-seiromushi-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-amber-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-amber-600 block"
            >
              【柳川温泉】冬の風物詩こたつ舟下り＆本場うなぎのせいろ蒸し名宿
            </Link>
            <Link
              href="/winter-saga-karatsu-onsen-yobuko-ika-sagagyu-genkai-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-amber-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-amber-600 block"
            >
              【唐津・呼子】透明な呼子イカ活造り＆極上佐賀牛の名宿
            </Link>
            <Link
              href="/features"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-amber-300 hover:shadow-xs transition-all text-sm font-bold text-amber-700 block text-center flex items-center justify-center gap-1"
            >
              <span>全国の冬旅特集一覧を見る</span>
              <Compass className="w-4 h-4" />
            </Link>
          
      <HubRelatedPosts currentSlug="winter-fukuoka-mojiko-retro-illumination-buzen-oyster-kokuragyu-stay" />
</div>
        </section>
      </main>
    </article>
  );
}
