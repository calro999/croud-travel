import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Snowflake, Eye, Waves, ThermometerSun, Heart, ShoppingBag, Shield, Mountain, Landmark
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月奈良】雪化粧の提灯灯る木造行者宿・大峯山麓洞川温泉の名物ぼたん鍋＆名水とうふ・極上大和牛を味わう隠れ宿5選",
  description: "11月から1月、奈良県吉野郡天川村・大峯山（八経ヶ岳・山上ヶ岳）の麓に位置する「洞川温泉（どろがわおんせん）」は、標高約820mの高冷地ならではの純白の雪に包まれます。修験道の開祖・役行者の時代から1300年以上にわたり山伏たちを迎え入れてきた温泉街には、縁側や格子戸を備えた大正・昭和初期の木造3階建て旅館が連なり、雪の夕暮れ時に軒先の赤提灯が一斉に灯れば、まるで異世界へタイムスリップしたかのような幽玄の景観へ。日本名水百選「ごろごろ水」が湧くこの地は冬の滋味の宝庫で、極上の天然猪肉を特製味噌出汁で煮込む冬の名物「ぼたん鍋」をはじめ、名水仕込みの湯豆腐や濃厚な胡麻豆腐、きめ細かな霜降りを誇るブランド和牛「大和牛」の陶板焼きが旅人の体を芯から温めます。弱アルカリ性の柔らかな名湯と静寂の雪景色に癒やされる厳選5宿を詳しく紹介します。",
  keywords: '洞川温泉 宿泊, 洞川温泉 ぼたん鍋, 洞川温泉 雪景色, 角甚 洞川, 花屋徳兵衛 洞川, ごろごろ水 天川村, 大和牛 宿, 11月 12月 1月 奈良旅行, 陀羅尼助丸',
  alternates: {
    canonical: 'https://croud-travel.com/winter-nara-dorogawa-onsen-snow-botannabe-stay'
  },
  openGraph: {
    title: "【11・12・1月奈良】雪化粧の提灯灯る木造行者宿・大峯山麓洞川温泉の名物ぼたん鍋＆名水とうふ・極上大和牛を味わう隠れ宿5選",
    description: "11月から1月、奈良県吉野郡天川村・大峯山（八経ヶ岳・山上ヶ岳）の麓に位置する「洞川温泉（どろがわおんせん）」は、標高約820mの高冷地ならではの純白の雪に包まれます。修験道の開祖・役行者の時代から1300年以上にわたり山伏たちを迎え入れてきた温泉街には、縁側や格子戸を備えた大正・昭和初期の木造3階建て旅館が連なり、雪の夕暮れ時に軒先の赤提灯が一斉に灯れば、まるで異世界へタイムスリップしたかのような幽玄の景観へ。日本名水百選「ごろごろ水」が湧くこの地は冬の滋味の宝庫で、極上の天然猪肉を特製味噌出汁で煮込む冬の名物「ぼたん鍋」をはじめ、名水仕込みの湯豆腐や濃厚な胡麻豆腐、きめ細かな霜降りを誇るブランド和牛「大和牛」の陶板焼きが旅人の体を芯から温めます。弱アルカリ性の柔らかな名湯と静寂の雪景色に癒やされる厳選5宿を詳しく紹介します。",
    url: 'https://croud-travel.com/winter-nara-dorogawa-onsen-snow-botannabe-stay',
    siteName: 'クラドトラベル',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: '雪化粧の提灯灯る奈良洞川温泉街'
      }
    ],
    locale: 'ja_JP',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月奈良】雪化粧の提灯灯る木造行者宿・大峯山麓洞川温泉の名物ぼたん鍋＆名水とうふ・極上大和牛を味わう隠れ宿5選",
    description: "11月から1月、奈良県吉野郡天川村・大峯山（八経ヶ岳・山上ヶ岳）の麓に位置する「洞川温泉（どろがわおんせん）」は、標高約820mの高冷地ならではの純白の雪に包まれます。修験道の開祖・役行者の時代から1300年以上にわたり山伏たちを迎え入れてきた温泉街には、縁側や格子戸を備えた大正・昭和初期の木造3階建て旅館が連なり、雪の夕暮れ時に軒先の赤提灯が一斉に灯れば、まるで異世界へタイムスリップしたかのような幽玄の景観へ。日本名水百選「ごろごろ水」が湧くこの地は冬の滋味の宝庫で、極上の天然猪肉を特製味噌出汁で煮込む冬の名物「ぼたん鍋」をはじめ、名水仕込みの湯豆腐や濃厚な胡麻豆腐、きめ細かな霜降りを誇るブランド和牛「大和牛」の陶板焼きが旅人の体を芯から温めます。弱アルカリ性の柔らかな名湯と静寂の雪景色に癒やされる厳選5宿を詳しく紹介します。",
    images: ['https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function NaraDorogawaOnsenPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-nara-dorogawa-onsen-snow-botannabe-stay#article",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://croud-travel.com/#website",
          "name": "クラドトラベル",
          "url": "https://croud-travel.com"
        },
        "headline": "【11・12・1月奈良】雪化粧の提灯灯る木造行者宿・大峯山麓洞川温泉の名物ぼたん鍋＆名水とうふ・極上大和牛を味わう隠れ宿5選",
        "description": "11月から1月、奈良県吉野郡天川村・大峯山（八経ヶ岳・山上ヶ岳）の麓に位置する「洞川温泉（どろがわおんせん）」は、標高約820mの高冷地ならではの純白の雪に包まれます。修験道の開祖・役行者の時代から1300年以上にわたり山伏たちを迎え入れてきた温泉街には、縁側や格子戸を備えた大正・昭和初期の木造3階建て旅館が連なり、雪の夕暮れ時に軒先の赤提灯が一斉に灯れば、まるで異世界へタイムスリップしたかのような幽玄の景観へ。日本名水百選「ごろごろ水」が湧くこの地は冬の滋味の宝庫で、極上の天然猪肉を特製味噌出汁で煮込む冬の名物「ぼたん鍋」をはじめ、名水仕込みの湯豆腐や濃厚な胡麻豆腐、きめ細かな霜降りを誇るブランド和牛「大和牛」の陶板焼きが旅人の体を芯から温めます。弱アルカリ性の柔らかな名湯と静寂の雪景色に癒やされる厳選5宿を詳しく紹介します。",
        "image": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
        "datePublished": "2026-10-01T00:00:00+09:00",
        "dateModified": "2026-10-01T00:00:00+09:00",
        "author": {
          "@type": "Organization",
          "name": "クラドトラベル編集部"
        },
        "publisher": {
          "@type": "Organization",
          "name": "クラドトラベル",
          "url": "https://croud-travel.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.com/logo.png"
          }
        },
        "mainEntityOfPage": "https://croud-travel.com/winter-nara-dorogawa-onsen-snow-botannabe-stay"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.com/winter-nara-dorogawa-onsen-snow-botannabe-stay#breadcrumb",
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
            "name": "奈良・洞川温泉の冬ぼたん鍋と木造行者宿特集",
            "item": "https://croud-travel.com/winter-nara-dorogawa-onsen-snow-botannabe-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/winter-nara-dorogawa-onsen-snow-botannabe-stay#faq",
        "mainEntity": [{"@type":"Question","name":"冬（11月〜1月）の洞川温泉の積雪量や路面状況はどうですか？ノーマルタイヤで行けますか？","acceptedAnswer":{"@type":"Answer","text":"洞川温泉は標高約820mの山間高原に位置するため、11月下旬から冷え込みが厳しくなり、12月中旬から1月にかけては本格的な積雪や路面凍結が発生します。ノーマルタイヤでの冬の走行は極めて危険であり絶対にできません。自家用車やレンタカーで訪れる場合は、必ずスタッドレスタイヤ（4WD推奨）を装着し、万一の大雪に備えてタイヤチェーンを携行してください。国道309号から天川村へ向かう主要ルート（県道21号など）は除雪車が入りますが、日陰や橋の上、トンネル出入り口はブラックアイスバーンになりやすいため十分な減速運転が必要です。公共交通機関を利用する場合は、近鉄下市口駅から運行されている奈良交通の路線バス（洞川温泉行き）を利用するのが安全で確実です。"}},{"@type":"Question","name":"洞川温泉の名物「ぼたん鍋」とはどのような料理ですか？","acceptedAnswer":{"@type":"Answer","text":"「ぼたん鍋」は、吉野の奥山で獲れた野生の猪肉（イノシシ肉）を、大皿にボタンの花のように美しく盛り付け、味噌仕立ての特製出汁で煮込む冬の伝統鍋料理です。冬のイノシシはドングリや栗などをたっぷり食べて冬眠に備えるため、上質な脂をたっぷりと蓄えています。猪肉は煮込むほどに柔らかくなり、良質な脂は豚肉や牛肉よりもサラリとしていてコラーゲンも豊富。大峯山麓の名水「ごろごろ水」で作った地元の味噌出汁に、ごぼう、白菜、ネギ、きのこ、そして名物の洞川豆腐を一緒に煮込んで食べれば、体の芯からポカポカと温まります。"}},{"@type":"Question","name":"洞川温泉の名水「ごろごろ水」とは何ですか？冬でも汲めますか？","acceptedAnswer":{"@type":"Answer","text":"「ごろごろ水」は、大峯山系のカルスト地形（五代松鍾乳洞周辺）の地下深くから湧き出る天然のミネラルウォーターで、名水百選に選定されています。巨大な鍾乳洞の奥から水が流れる際、「ゴロゴロ」と音を立てて響いていたことからその名が付きました。弱アルカリ性でカルシウムやマグネシウムなどのミネラル分を豊富に含み、お茶やコーヒー、料理の味を劇的に引き立てます。洞川温泉街の近くに「ごろごろ水採水場（有料駐車場）」があり、冬でも凍結対策が施されていて持参したポリタンクやペットボトルに名水を汲むことができます。"}},{"@type":"Question","name":"洞川温泉の泉質と効能、温泉街の夜の雰囲気はどうですか？","acceptedAnswer":{"@type":"Answer","text":"洞川温泉の泉質は「弱アルカリ性単純温泉」。無色透明で匂いもなく、刺激が少ない肌に優しいまろやかなお湯です。筋肉痛、関節痛、冷え性、疲労回復に優れた効果があり、古くから大峯山（山上ヶ岳）へ登拝する過酷な山伏たちの疲れを癒やす湯治場として栄えてきました。冬の夜、雪がしんしんと降り積もる温泉街では、木造3階建ての旅館の軒先に赤提灯やガス灯調の街灯が灯り、水墨画のような白銀の世界に温かいオレンジ色の光が浮かび上がります。静寂の中、下駄の音を響かせながら散策する時間は忘れられない旅の思い出になります。"}},{"@type":"Question","name":"洞川名物の伝統和漢胃腸薬「陀羅尼助（だらにすけ）」とは何ですか？どこで買えますか？","acceptedAnswer":{"@type":"Answer","text":"「陀羅尼助（だらにすけ丸）」は、1300年前に修験道の開祖・役行者が大峯山で修行中、疫病に苦しむ人々を救うためにキハダ（オウバク）の樹皮を煎じて作ったとされる日本最古級の和漢胃腸薬です。名前の由来は、僧侶が眠気を覚ますために「陀羅尼（だらに）」という経文を唱えながら苦い薬を口に含んだことから。苦味が健胃作用を促し、食べ過ぎ・飲み過ぎ・二日酔い・食欲不振に抜群の効果を発揮します。洞川温泉街には「銭谷小角堂」をはじめ風情ある陀羅尼助の老舗本舗が軒を連ねており、レトロな木製看板や薬箪笥を眺めながら購入できます。"}}]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "洞川温泉　行者の宿　角甚",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9273/9273.jpg",
              rating: 4.70,
              reviews: 298,
              price: "¥23,000〜",
              access: "近鉄電車下市口駅より、奈良交通バスで約８０分。タクシ-で４０分。南阪奈道路　橿原終点より車で約７０分。",
              special: "昔ながらの縁側、旅籠の風情を残す全８室の和空間。露天風呂付客室人気",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9273%2F9273.html",
              story: "創業三百三十余年、大峯山を巡礼する修験者たちを温かくもてなし続けてきた老舗行者宿「行者の宿 角甚」。温泉街の中心に位置し、重厚な木造建築の門構えをくぐると、歴史を感じさせる調度品と現代的な快適さが調和した空間が広がります。館内には洞川温泉の柔らかな湯を湛えた大浴場や信楽焼の貸切露天風呂があり、雪が舞う庭園を眺めながらの雪見風呂は格別の風情。夕食は角甚伝統の「極上天然ぼたん鍋会席」。地元吉野の山々で獲れた良質な天然猪肉を、秘伝の合わせ味噌と名水「ごろごろ水」で煮込むぼたん鍋は、驚くほど柔らかく上品な甘みが口いっぱいに広がります。名水豆腐や大和牛の鉄板焼きも絶品です。",
              roomTip: "半露天風呂付き和洋室。檜の浴槽から雪化粧した中庭を望み、好きな時に何度でも名湯を楽しめる贅沢なプライベート空間。",
              gourmetTip: "「角甚秘伝・天然猪肉ぼたん鍋＆大和牛会席」。名水仕込みの特製味噌が出汁に溶け込み、猪肉の脂の甘みと地場野菜の旨味が完璧に調和します。",
              highlights: [
                "創業330余年の歴史を誇る老舗行者宿＆半露天風呂付き客室で過ごす至高の雪見湯浴み",
                "秘伝の特製味噌で煮込む名物「天然猪肉ぼたん鍋」＆最高級大和牛鉄板焼き",
                "夜の提灯灯る温泉街散策に絶好の立地＆名薬「陀羅尼助丸」本舗めぐり"
              ]
            },
            {
              id: 2,
              name: "洞川（どろがわ）温泉☆後鬼の湯・宿　花屋徳兵衛",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8054/8054.jpg",
              rating: 4.69,
              reviews: 358,
              price: "¥13,000〜",
              access: "【バス】近鉄下市口駅～洞川温泉行きバス約80分/【車】南阪奈道路～京奈和道路御所南ICより約70分",
              special: "創業500年☆一番の老舗温泉旅館【貸切温泉有】リピーターの多い宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8054%2F8054.html",
              story: "創業五百余年、洞川温泉で最も古い歴史を誇る名門宿「花屋徳兵衛」。木造建築の風情を色濃く残した館内は、磨き上げられた廊下や階段、囲炉裏スペースがあり、大正ロマンの温もりに満ちています。名物の大浴場「後鬼（ごき）の湯」は、半露天の石造り風呂で、冬になると窓の外に積もる雪景色を眺めながらのんびりと湯浴みを楽しめます。料理は名水「ごろごろ水」をふんだんに使った手作り懐石。とろけるような名水豆腐の小鍋や、香ばしい川魚の塩焼き、冬限定のぼたん鍋、大和牛のステーキなど、代々受け継がれてきた素朴で上質な山里の馳走を心ゆくまで堪能できます。",
              roomTip: "温泉街を望む街側客室。夕暮れ時に雪化粧した木造旅館街に赤提灯が灯るノスタルジックな風景を窓から眺められます。",
              gourmetTip: "「花屋徳兵衛名物・名水とうふ鍋とぼたん鍋懐石」。大豆の甘みが凝縮された名水豆腐と、滋味豊かな猪肉のコクが体にじんわり染み渡ります。",
              highlights: [
                "洞川温泉最古の創業500年＆大正ロマン漂う磨き廊下と半露天「後鬼の湯」",
                "名水ごろごろ水仕込みの名水とうふ懐石＆脂の乗った天然ぼたん鍋",
                "囲炉裏スペースで寛ぐ冬の夕べ＆縁側付き木造建築のレトロな街並みビュー"
              ]
            },
            {
              id: 3,
              name: "洞川温泉　光緑園西清",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8661/8661.jpg",
              rating: 4.79,
              reviews: 167,
              price: "¥17,900〜",
              access: "近鉄吉野線下市口駅下車、奈良交通バス洞川温泉行90分  (電気自動車充電可）",
              special: "豊かな自然と・・・ぬくもり  名水の郷",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8661%2F8661.html",
              story: "大正・昭和の文人墨客や多くの著名人に愛されてきた格式ある数寄屋造りの名宿「光緑園西清」。手入れの行き届いた日本庭園を囲むように配置された客室からは、冬になると白銀に染まる雪庭の静寂美を一望できます。大浴場には大きな窓が配され、雪景色を眺めながら弱アルカリ性単純温泉の柔らかな湯に浸かってリラックス。食事は料理長が腕を振るう本格的な季節の京風会席。吉野の冬の味覚であるぼたん鍋はもちろん、美しいサシが入った「大和牛」の陶板焼き、名水ごま豆腐、天川村特産の鮎料理など、見た目も華やかな器と繊細な味付けで贅沢な美食の時間を演出します。",
              roomTip: "日本庭園ビューの数寄屋風純和室。床の間の掛け軸や季節の花が美しく整えられ、しんしんと降る雪を眺めながら静かな読書時間を過ごせます。",
              gourmetTip: "「大和牛陶板焼き＆吉野ぼたん鍋の贅沢冬会席」。選び抜かれた大和牛の芳醇な肉汁と、名水で仕立てた猪鍋の深いコクをダブルで楽しめます。",
              highlights: [
                "文人墨客ゆかりの数寄屋建築＆雪化粧した日本庭園を眺める静寂の大人の宿",
                "選び抜かれた大和牛陶板焼きと吉野ぼたん鍋＆季節を映す繊細な京風会席",
                "静かな雪景色に包まれる純和風の贅沢＆吉野杉の温もりあふれる館内"
              ]
            },
            {
              id: 4,
              name: "洞川温泉　さら徳旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/14563/14563.jpg",
              rating: 4.12,
              reviews: 98,
              price: "¥13,500〜",
              access: "近鉄南大阪線下市口駅より奈良交通バス洞川温泉行利用／南阪奈自動車道葛城ＩＣよりバイパス、Ｒ１６９、３０９経由",
              special: "家庭的雰囲気でお迎え致します　大自然を満喫して下さい",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14563%2F14563.html",
              story: "大峯の雄大な山並みを望む高台に建ち、温かな家庭的もてなしと展望風呂が評判の「さら徳旅館」。館内は素朴で清潔感にあふれ、一人旅から夫婦、家族連れまで気兼ねなく寛げるアットホームな雰囲気が魅力です。最上階の展望風呂からは、冬の白銀に輝く山上ヶ岳や大峯の山並みが一望でき、湯煙の向こうに広がる壮大な雪景色に心が洗われます。夕食は天川村の山の恵みが詰まった手作りの山里膳。冬の名物ぼたん鍋をはじめ、名水豆腐の湯奴、川魚の甘露煮、地元農家が丹精込めた根菜の炊き合わせなど、素朴ながらも一つひとつ丁寧に作られた料理が旅人の胃袋を温かく満たします。",
              roomTip: "マウンテンビュー和室。大峯の雪山を窓辺のこたつから望むことができ、静寂に包まれた冬山の情緒をじっくり味わえます。",
              gourmetTip: "「天川村の恵み・手作りぼたん鍋と名水湯豆腐膳」。秘伝の味噌仕立てのスープが猪肉の旨味を最大限に引き出し、最後はおじやで〆る至福の鍋です。",
              highlights: [
                "最上階展望風呂から望む冬の大峯雪山パノラマ＆心温まる家庭的なおもてなし",
                "天川村の山の幸手作りぼたん鍋＆熱々の名水湯豆腐と川魚甘露煮",
                "こたつでぬくぬく過ごす雪国時間＆気兼ねなく楽しめるリーズナブルな連泊"
              ]
            },
            {
              id: 5,
              name: "洞川温泉　あたらしや旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8805/8805.jpg",
              rating: 4.51,
              reviews: 304,
              price: "¥11,800〜",
              access: "近鉄吉野線下市口駅よりバスで80分",
              special: "くつろぎの時間",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8805%2F8805.html",
              story: "清流・山上川のほとりに佇み、木造の温もりとモダンなセンスが調和する人気の温泉旅館「あたらしや旅館」。川側に面した客室からは、雪化粧した渓流のせせらぎと対岸の木々の冬景色を望むことができます。広々とした大浴場では、神経痛や疲労回復に効能豊かな洞川の天然温泉に浸かり、旅の疲れを心地よく癒やせます。料理への評価も非常に高く、吉野ジビエのぼたん鍋やすき焼き、厳選された大和牛のステーキ、名水で打った手打ちそばなど、郷土の味覚をスタイリッシュにアレンジした会席料理が好評。朝食の名水粥も体に染み渡る優しい味わいです。",
              roomTip: "川側和モダン客室。窓の外に流れる清流と雪の渓谷美を眺めながら、畳敷きのリビングでゆったりとくつろげる空間。",
              gourmetTip: "「吉野ジビエぼたん鍋＆大和牛ステーキ創作会席」。臭みが一切ない厳選猪肉と、柔らかな大和牛の旨味を同時に味わえる贅沢な献立です。",
              highlights: [
                "清流・山上川を望む木造楼閣の風情＆吉野ジビエと大和牛を味わう創作料理",
                "厳選吉野ジビエぼたん鍋＆大和牛ステーキと名水仕込みの手打ちそば",
                "雪の渓流とせせらぎに癒やされる滞在＆朝食の名水粥が体に染み渡る朝"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "冬（11月〜1月）の洞川温泉の積雪量や路面状況はどうですか？ノーマルタイヤで行けますか？",
    "a": "洞川温泉は標高約820mの山間高原に位置するため、11月下旬から冷え込みが厳しくなり、12月中旬から1月にかけては本格的な積雪や路面凍結が発生します。ノーマルタイヤでの冬の走行は極めて危険であり絶対にできません。自家用車やレンタカーで訪れる場合は、必ずスタッドレスタイヤ（4WD推奨）を装着し、万一の大雪に備えてタイヤチェーンを携行してください。国道309号から天川村へ向かう主要ルート（県道21号など）は除雪車が入りますが、日陰や橋の上、トンネル出入り口はブラックアイスバーンになりやすいため十分な減速運転が必要です。公共交通機関を利用する場合は、近鉄下市口駅から運行されている奈良交通の路線バス（洞川温泉行き）を利用するのが安全で確実です。"
  },
  {
    "q": "洞川温泉の名物「ぼたん鍋」とはどのような料理ですか？",
    "a": "「ぼたん鍋」は、吉野の奥山で獲れた野生の猪肉（イノシシ肉）を、大皿にボタンの花のように美しく盛り付け、味噌仕立ての特製出汁で煮込む冬の伝統鍋料理です。冬のイノシシはドングリや栗などをたっぷり食べて冬眠に備えるため、上質な脂をたっぷりと蓄えています。猪肉は煮込むほどに柔らかくなり、良質な脂は豚肉や牛肉よりもサラリとしていてコラーゲンも豊富。大峯山麓の名水「ごろごろ水」で作った地元の味噌出汁に、ごぼう、白菜、ネギ、きのこ、そして名物の洞川豆腐を一緒に煮込んで食べれば、体の芯からポカポカと温まります。"
  },
  {
    "q": "洞川温泉の名水「ごろごろ水」とは何ですか？冬でも汲めますか？",
    "a": "「ごろごろ水」は、大峯山系のカルスト地形（五代松鍾乳洞周辺）の地下深くから湧き出る天然のミネラルウォーターで、名水百選に選定されています。巨大な鍾乳洞の奥から水が流れる際、「ゴロゴロ」と音を立てて響いていたことからその名が付きました。弱アルカリ性でカルシウムやマグネシウムなどのミネラル分を豊富に含み、お茶やコーヒー、料理の味を劇的に引き立てます。洞川温泉街の近くに「ごろごろ水採水場（有料駐車場）」があり、冬でも凍結対策が施されていて持参したポリタンクやペットボトルに名水を汲むことができます。"
  },
  {
    "q": "洞川温泉の泉質と効能、温泉街の夜の雰囲気はどうですか？",
    "a": "洞川温泉の泉質は「弱アルカリ性単純温泉」。無色透明で匂いもなく、刺激が少ない肌に優しいまろやかなお湯です。筋肉痛、関節痛、冷え性、疲労回復に優れた効果があり、古くから大峯山（山上ヶ岳）へ登拝する過酷な山伏たちの疲れを癒やす湯治場として栄えてきました。冬の夜、雪がしんしんと降り積もる温泉街では、木造3階建ての旅館の軒先に赤提灯やガス灯調の街灯が灯り、水墨画のような白銀の世界に温かいオレンジ色の光が浮かび上がります。静寂の中、下駄の音を響かせながら散策する時間は忘れられない旅の思い出になります。"
  },
  {
    "q": "洞川名物の伝統和漢胃腸薬「陀羅尼助（だらにすけ）」とは何ですか？どこで買えますか？",
    "a": "「陀羅尼助（だらにすけ丸）」は、1300年前に修験道の開祖・役行者が大峯山で修行中、疫病に苦しむ人々を救うためにキハダ（オウバク）の樹皮を煎じて作ったとされる日本最古級の和漢胃腸薬です。名前の由来は、僧侶が眠気を覚ますために「陀羅尼（だらに）」という経文を唱えながら苦い薬を口に含んだことから。苦味が健胃作用を促し、食べ過ぎ・飲み過ぎ・二日酔い・食欲不振に抜群の効果を発揮します。洞川温泉街には「銭谷小角堂」をはじめ風情ある陀羅尼助の老舗本舗が軒を連ねており、レトロな木製看板や薬箪笥を眺めながら購入できます。"
  }
];

  return (
    <article className="min-h-screen bg-stone-50/50 pb-20 text-stone-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-30 mix-blend-overlay overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1920&q=80" 
            alt="雪化粧の洞川温泉木造旅館街背景" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-bold border border-red-400/30">
            <Snowflake className="w-3.5 h-3.5" />
            11月・12月・1月限定 大峯山麓雪景色＆ぼたん鍋特集
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            【奈良・洞川温泉】雪化粧の提灯灯る木造行者宿・大峯山麓洞川温泉の名物ぼたん鍋＆名水とうふ・極上大和牛を味わう隠れ宿5選
          </h1>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed pt-2">
            標高820mの修験の聖地に佇む木造3階建ての宿場町。雪が舞い散る夕暮れ、軒先に灯る赤提灯の幽玄美。日本名水「ごろごろ水」仕込みの名物ぼたん鍋と名水豆腐、大和牛を味わう静寂の冬籠もりへ。
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-stone-400 pt-2 border-t border-stone-700/60">
            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> 2026年10月最新取材</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> 奈良県吉野郡天川村（洞川温泉郷）</span>
            <span className="flex items-center gap-1.5"><Landmark className="w-3.5 h-3.5" /> 開湯1300年・大峯山修験道行者宿</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-12">

        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-red-950 font-bold text-sm tracking-wide bg-red-100/60 px-3 py-1 rounded-full">
              <Sparkles className="w-4 h-4 text-red-800" />
              初冬から厳冬期の洞川温泉が旅人を魅了する理由
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              白銀に浮かぶ大正・昭和のノスタルジーと名水が醸す至高の冬鍋
            </h2>
          </div>

          <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            <p>
              紀伊山地の霊峰・大峯山の登山口に広がる天川村「洞川温泉（どろがわおんせん）」。標高約820mの高冷地に位置するため、11月下旬になると木々が霜で白く染まり、12月から1月には純白の雪が温泉街をすっぽりと包み込みます。夏の避暑地として賑わう季節とは打って変わり、冬の洞川は凛とした静寂に支配された特別な世界です。
            </p>
            <p>
              この街の最大の魅力は、縁側や格子窓が続く木造3階建てのレトロな行者宿の建築美。しんしんと雪が降る夕暮れ時、各旅館の軒先に吊るされた赤い提灯にポッと灯りが灯ると、まるでジブリ映画の世界に迷い込んだかのような幻想的な情景が広がります。下駄を鳴らしながら歩く雪の小径や、名薬「陀羅尼助丸」の老舗の灯りなど、訪れる人の心を優しく解きほぐす情緒に満ちています。
            </p>
            <p>
              そして冬の洞川の醍醐味が、吉野の奥山が育む極上ジビエ「ぼたん鍋」。日本名水百選に輝く「ごろごろ水」と特製味噌で仕立てるスープに、脂の乗った天然猪肉や名水豆腐をくぐらせて味わえば、寒さで縮こまった体が芯から温まります。弱アルカリ性の柔らかな名湯で温まり、大和牛や名水料理に舌鼓を打つ極上の5宿をご紹介します。
            </p>
          </div>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-red-800 font-bold text-xs sm:text-sm tracking-wider uppercase bg-red-50 px-3 py-1 rounded-full border border-red-100">
              <ShieldCheck className="w-4 h-4" />
              厳選宿泊施設ガイド
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
              雪景色とぼたん鍋に癒やされる洞川温泉の名宿5選
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm">
              全宿楽天トラベル公式APIより最新宿泊プラン＆空室情報をリアルタイム取得中
            </p>
          </div>

          <div className="space-y-8">
            {hotelList.map((h: any) => (
              <div 
                key={h.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xs border border-stone-200/80 hover:shadow-md transition duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                  <div className="md:col-span-5 relative min-h-[240px] md:min-h-full">
                    <img 
                      src={h.img} 
                      alt={h.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                      第{h.id}位
                    </div>
                  </div>

                  <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center gap-2 text-red-600 text-xs font-bold mb-1">
                        <Flame className="w-3.5 h-3.5" />
                        開湯1300年 木造行者宿＆天然ぼたん鍋
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                        {h.name}
                      </h3>
                      <div className="flex items-center gap-3 mt-2 text-xs text-stone-500">
                        <span className="flex items-center gap-1 text-amber-600 font-bold">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          {h.rating}
                        </span>
                        <span>({h.reviews}件のクチコミ)</span>
                        <span className="font-bold text-stone-800">{h.price}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mt-3">
                        {h.story}
                      </p>

                      <div className="bg-stone-50 rounded-xl p-3 mt-3 border border-stone-100 space-y-1.5 text-xs text-stone-600">
                        <div className="flex items-start gap-1.5">
                          <span className="font-bold text-stone-800 shrink-0">お部屋のポイント:</span>
                          <span>{h.roomTip}</span>
                        </div>
                        <div className="flex items-start gap-1.5">
                          <span className="font-bold text-stone-800 shrink-0">冬の味覚:</span>
                          <span>{h.gourmetTip}</span>
                        </div>
                      </div>

                      <ul className="mt-3 space-y-1 text-xs text-stone-600">
                        {h.highlights.map((hl: string, idx: number) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                      <div className="text-[11px] text-stone-500 truncate max-w-[200px]">
                        {h.access}
                      </div>
                      <a 
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-4 py-2 rounded-xl shadow-xs transition"
                      >
                        楽天トラベルで空室・プランを見る
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 1 Night 2 Days Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-red-950 font-bold text-sm tracking-wide bg-red-100/60 px-3 py-1 rounded-full">
              <Compass className="w-4 h-4 text-red-800" />
              1泊2日おすすめモデルコース
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              木造行者宿の提灯灯りと名水ぼたん鍋を堪能する冬籠もり旅
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-4">
              <h3 className="font-bold text-red-950 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-red-700" />
                【1日目】下市口駅から洞川温泉へ・提灯の温泉街散策
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-red-600 shrink-0 mt-1" />
                  <span><strong>12:00 近鉄吉野線・下市口駅到着：</strong>駅前で名物「柿の葉寿司」を購入し、奈良交通の洞川温泉行きバスに乗車。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-red-600 shrink-0 mt-1" />
                  <span><strong>13:20 洞川温泉バス停に到着：</strong>雪化粧した木造旅館街へ足を踏み入れる。澄み切った山の空気が清々しい。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-red-600 shrink-0 mt-1" />
                  <span><strong>14:00 名水とうふ店めぐり＆名薬「陀羅尼助」本舗：</strong>銭谷小角堂など歴史ある薬屋を見学し、出来立て名水豆腐を味わう。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-red-600 shrink-0 mt-1" />
                  <span><strong>15:30 木造行者宿にチェックイン：</strong>こたつに入って一息つき、大浴場や露天風呂で冷えた体を芯から温める。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-red-600 shrink-0 mt-1" />
                  <span><strong>17:30 夕暮れの赤提灯散策：</strong>各宿の軒先に吊るされた提灯が一斉に灯り、雪の街並みが息を呑むほど幻想的に。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-red-600 shrink-0 mt-1" />
                  <span><strong>18:30 名物「天然ぼたん鍋」ディナー：</strong>味噌出汁で煮込む熱々の猪肉と名水豆腐、吉野杉の樽酒を味わう至福の夜。</span>
                </li>
              </ul>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-4">
              <h3 className="font-bold text-red-950 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-red-700" />
                【2日目】静寂の名水採水と冬の大峯山麓巡り
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-red-600 shrink-0 mt-1" />
                  <span><strong>07:30 朝の雪見風呂と温かい名水粥朝食：</strong>静寂に包まれた朝の湯浴み。名水で炊いたおかゆと川魚の甘露煮で朝食。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-red-600 shrink-0 mt-1" />
                  <span><strong>09:30 「ごろごろ水採水場」立ち寄り：</strong>日本名水百選に選ばれた清らかな湧き水をボトルに汲む。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-red-600 shrink-0 mt-1" />
                  <span><strong>10:30 面不動鍾乳洞（モノレール）見学：</strong>レトロなモノレールで登り、冬でも10℃前後に保たれた神秘の鍾乳洞を探検。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-red-600 shrink-0 mt-1" />
                  <span><strong>12:00 温泉街の茶屋で手打ちそばランチ：</strong>名水で打ったコシのあるざる蕎麦や温かい鴨南蛮そばをすする。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-red-600 shrink-0 mt-1" />
                  <span><strong>13:30 路線バスで下市口駅・帰路へ：</strong>名水ごま豆腐や陀羅尼助をお土産に買い込み、近鉄特急で帰路へ。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Local Souvenir & Spot Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-red-950 font-bold text-sm tracking-wide bg-red-100/60 px-3 py-1 rounded-full">
              <ShoppingBag className="w-4 h-4 text-red-800" />
              洞川温泉の冬名物＆おみやげ手帖
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              行者の里で手に入れたい伝統銘品と冬のおすすめ立ち寄り処
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-red-700" />
                1300年の秘薬「陀羅尼助丸」＆名水ごま豆腐
              </h3>
              <p>
                役行者以来の歴史を持つ胃腸薬「陀羅尼助丸」は、キハダの苦味成分が胃腸を健やかに整える家庭の常備薬として全国にファンを持ちます。また、名水ごろごろ水と上質な吉野本葛、白胡麻で作られる「名水ごま豆腐」は、もっちりとした濃厚な食感と香ばしさが絶品でお土産の定番です。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-700" />
                日本名水百選「ごろごろ水」＆吉野杉の木工芸品
              </h3>
              <p>
                カルスト鍾乳洞から湧き出る「ごろごろ水」は、コーヒーやお茶を淹れると雑味がなくまろやかな極上の味に仕上がります。さらに、吉野杉の清々しい芳香が漂うお箸やコースター、ぐい呑みなどの木工芸品も、大峯の豊かな森林文化を感じられるお土産として喜ばれます。
              </p>
            </div>
          </div>
        </section>

        {/* Deep Dive Knowledge Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-red-950 font-bold text-sm tracking-wide bg-red-100/60 px-3 py-1 rounded-full">
              <ThermometerSun className="w-4 h-4 text-red-800" />
              修験道行者宿の建築美とカルスト名水の深層解説
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              なぜ洞川温泉は「時が止まった宿場町」と呼ばれるのか
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
              <Landmark className="w-4 h-4 text-red-700" />
              修験者たちを受け入れてきた「縁側開口」の独特な木造旅館建築
            </h3>
            <p>
              洞川温泉の街並みを歩いて誰もが驚くのが、道路に面して長く伸びた「縁側（えんがわ）」の開放的な造りです。かつて過酷な山岳修行を終えて山を下りてきた山伏（行者）たちが、靴（草鞋）を脱いで足を投げ出し、宿の人々や仲間と談笑しながら泥を落とした名残です。大正から昭和初期にかけて建て替えられた木造3階建ての楼閣建築群は、現在も当時の手吹きガラスや格子戸をそのまま残し、雪が降る冬には一段とノスタルジックな陰影を深めます。
            </p>

            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 pt-2">
              <Waves className="w-4 h-4 text-red-700" />
              カルスト台地の天然フィルターが育む「ごろごろ水」の奇跡
            </h3>
            <p>
              洞川一帯は、石灰岩が侵食されてできたカルスト地形で、地下には数多くの鍾乳洞（五代松鍾乳洞や面不動鍾乳洞）が網の目のように広がっています。大峯山系に降った雪や雨は、数十年の歳月をかけて石灰岩の地層をゆっくりと浸透。天然のフィルターによって極限まで濾過され、同時にカルシウムをはじめとする良質なミネラルを豊富に溶かし込みます。この超清純な湧水が、洞川名物の湯豆腐や手打ち蕎麦、出汁の美味しさを支える決定的な秘密なのです。
            </p>

            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 pt-2">
              <Flame className="w-4 h-4 text-red-700" />
              冷えた体を優しく癒やす弱アルカリ性単純温泉の包容力
            </h3>
            <p>
              洞川温泉の源泉は、地下約1,000mから湧出する弱アルカリ性単純温泉。刺激が少なく肌あたりが非常に柔らかいため、敏感肌の方や長湯を楽しみたい方にも最適です。熱めの湯に浸かると、雪道散策で冷え切った手足の先まで血液が巡り、関節痛や神経痛を和らげます。湯上がりに浴衣を着てこたつに潜り込むと、ポカポカとした温もりが朝まで持続し、深い安眠へと導いてくれます。
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-red-950 font-bold text-sm tracking-wide bg-red-100/60 px-3 py-1 rounded-full">
              <HelpCircle className="w-4 h-4 text-red-800" />
              よくある質問
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初冬・厳冬期の洞川温泉旅行 Q&A
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq, idx) => (
              <div key={idx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-red-700 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Features & Internal Links */}
        <section className="bg-stone-100 rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-6">
          <div className="flex items-center gap-2 text-red-950 font-bold text-sm tracking-wide">
            <Sparkles className="w-4 h-4 text-red-800" />
            あわせて読みたい関西・近畿の冬温泉＆美食特集
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            <Link 
              href="/winter-nara-yamatoji-wakakusayama-yamatogyu-asukabeef-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-red-700 font-bold block text-[10px]">奈良・大和路</span>
              <p className="font-bold text-stone-800 line-clamp-2">若草山焼きの冬絶景と古都の雪景色・大和牛と飛鳥鍋を堪能する名宿</p>
            </Link>
            <Link 
              href="/winter-wakayama-ryujin-onsen-bihada-botannabe-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-red-700 font-bold block text-[10px]">和歌山・龍神温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">日本三美人の湯と渓谷雪景色・極上ぼたん鍋と熊野牛を味わう名湯</p>
            </Link>
            <Link 
              href="/winter-kyoto-yunohana-onsen-unkai-botan-nabe-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-red-700 font-bold block text-[10px]">京都・湯の花温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">亀岡の幻想雲海と冬のぼたん鍋・京都奥座敷の露天風呂付き隠れ宿</p>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
