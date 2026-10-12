import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Snowflake, Eye, Waves, ThermometerSun, Heart, ShoppingBag, Shield, Mountain, Landmark, Trees
} from 'lucide-react';

export const metadata: Metadata = {
  title: '11・12・1月金沢：兼六園の雪吊り冬景色と奥金沢！名宿5選',
  description: '11月から1月、古都・金沢は日本三名園「兼六園」の雪吊りと白銀の金沢城、ひがし茶屋街の格子窓に舞い散る雪が息を呑む情緒を醸し出す最高の冬旅シ。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '兼六園 雪吊り 冬, 金沢 香箱ガニ 宿泊, 湯涌温泉 百楽荘, 湯涌温泉 お宿やました, 湯涌温泉 湯の出旅館, 加能ガニ 旅館 金沢, 治部煮 金沢おでん, 11月 12月 1月 金沢旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-ishikawa-kanazawa-yuwaku-onsen-koubako-crab-stay/"
  },
  openGraph: {
    title: '11・12・1月金沢：兼六園の雪吊り冬景色と奥金沢！名宿5選',
    description: '11月から1月、古都・金沢は日本三名園「兼六園」の雪吊りと白銀の金沢城、ひがし茶屋街の格子窓に舞い散る雪が息を呑む情緒を醸し出す最高の冬旅シ。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-ishikawa-kanazawa-yuwaku-onsen-koubako-crab-stay',
    siteName: 'クラドトラベル',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: '白銀に雪化粧した金沢兼六園の雪吊りと唐崎松'
      }
    ],
    locale: 'ja_JP',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: "11・12・1月金沢：兼六園の雪吊り冬景色と奥金沢「湯涌温泉」の秘湯情緒・冬限定香箱ガニ＆加能ガニ・金沢おでん・治部煮を味わう名宿5選",
    description: "11月から1月、古都・金沢は日本三名園「兼六園」の雪吊りと白銀の金沢城、ひがし茶屋街の格子窓に舞い散る雪が息を呑む情緒を醸し出す最高の冬旅シーズンを迎えます。金沢人が一年で最も熱狂する11月6日解禁の冬の味覚、わずか2ヶ月弱しか味わえない幻の「香箱ガニ（こうばこがに）」の内子・外子の濃厚な旨味、身入りの良い「加能ガニ」、伝統の郷土料理「治部煮」や温かい「金沢おでん」。金沢市街から車でわずか20分、加賀藩主の前田家歴代が湯治に訪れ、大正の詩人画家・竹久夢二も愛した奥金沢の秘湯「湯涌温泉（ゆわくおんせん）」の雪見露天風呂と極上加賀料理を堪能できる厳選5宿を紹介します。",
    images: ['https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function IshikawaKanazawaYuwakuWinterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "11・12・1月金沢：兼六園の雪吊り冬景色と奥金沢「湯涌温泉」の秘湯情緒・冬限定香箱ガニ＆加能ガニ・金沢おでん・治部煮を味わう名宿5選",
    description: "11月から1月、古都・金沢は日本三名園「兼六園」の雪吊りと白銀の金沢城、ひがし茶屋街の格子窓に舞い散る雪が息を呑む情緒を醸し出す最高の冬旅シーズンを迎えます。金沢人が一年で最も熱狂する11月6日解禁の冬の味覚、わずか2ヶ月弱しか味わえない幻の「香箱ガニ（こうばこがに）」の内子・外子の濃厚な旨味、身入りの良い「加能ガニ」、伝統の郷土料理「治部煮」や温かい「金沢おでん」。金沢市街から車でわずか20分、加賀藩主の前田家歴代が湯治に訪れ、大正の詩人画家・竹久夢二も愛した奥金沢の秘湯「湯涌温泉（ゆわくおんせん）」の雪見露天風呂と極上加賀料理を堪能できる厳選5宿を紹介します。",
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
    datePublished: '',
    dateModified: '',
    author: {
      '@type': 'Organization',
      name: 'クラドトラベル編集部',
      url: 'https://croud-travel.pages.dev'
    },
    publisher: {
      '@type': 'Organization',
      name: 'クラドトラベル',
      logo: {
        '@type': 'ImageObject',
        url: 'https://croud-travel.pages.dev/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://croud-travel.pages.dev/winter-ishikawa-kanazawa-yuwaku-onsen-koubako-crab-stay'
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
        item: 'https://croud-travel.pages.dev'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '冬の特集一覧',
        item: 'https://croud-travel.pages.dev/features'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: '金沢兼六園雪吊りと湯涌温泉香箱ガニ名宿',
        item: 'https://croud-travel.pages.dev/winter-ishikawa-kanazawa-yuwaku-onsen-koubako-crab-stay'
      }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "金沢の「兼六園の雪吊り」はいつから見られますか？雪景色やライトアップの時期は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "兼六園の冬の風物詩「雪吊り（ゆきづり）」は、毎年11月1日に有名な唐崎松（からさきまつ）から縄を張る作業が始まり、12月中旬までに園内すべての松や樹木に施されます。金沢市街に本格的な雪が積もり、雪吊りと白銀の庭園が織りなす絶景が見られる確率が高いのは12月下旬から1月下旬です。また、例年1月下旬から2月上旬にかけては「金沢城・兼六園四季物語 冬の段」として夜間無料開放と幻想的な雪吊りライトアップが実施され、夜空に浮かび上がる幾何学的な縄の美しさと白雪のコントラストを鑑賞できます。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の金沢名物「香箱ガニ（こうばこがに）」とは何ですか？旬の時期はいつまでですか？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "香箱ガニとは、北陸地方で水揚げされるメスのズワイガニの呼称です。オス（加能ガニ）に比べて小ぶりですが、資源保護のため漁期が「11月6日の解禁から12月29日頃までの約2ヶ月弱。」と極めて短く、地元金沢市民がオスのカニ以上に楽しみにしている冬の至宝です。最大の特徴は、甲羅の中に詰まった朱色の未成熟卵「内子（うちこ）」の芳醇な旨味、お腹に抱えた粒々の「外子（そとこ）」のプチプチした食感、そして濃厚なカニ味噌です。職人が甲羅の中に身と卵を美しく詰め直した「カニ面（めん）」は、金沢おでんや旅館の会席で必食の名物です。"
        }
      },
      {
        '@type': 'Question',
        name: "「湯涌温泉（ゆわくおんせん）」はどのような温泉地ですか？金沢市街からのアクセスは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "湯涌温泉は金沢市街から南東へ約15km、白山山系に連なる医王山の麓、浅野川の上流に位置する「金沢の奥座敷」です。養老2年（718年）の開湯と伝わり、江戸時代には加賀藩主・前田公の指定湯治場（隠し湯）として栄えました。大正時代には詩人画家・竹久夢二が最愛の女性・笠井彦乃と約3週間滞在し、数々の名作を残したロマンの地でもあります。泉質は肌に優しい無色透明のナトリウム・カルシウム-硫酸塩・塩化物泉で、保温・美肌効果に優れます。JR金沢駅東口から北陸鉄道バス（湯涌温泉行き）で約45分、車やタクシーなら約20〜25分でアクセスできます。"
        }
      },
      {
        '@type': 'Question',
        name: "冬（11月〜1月）の金沢の気候や雪の状況、服装・靴の選び方を教えてください。",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "11月の金沢は最高気温15℃前後、最低気温7℃前後で肌寒く、12月〜1月になると最高気温5〜7℃、最低気温0〜2℃まで冷え込みます。北陸の冬は「弁当忘れても傘忘れるな」と言われるほど天気が変わりやすく、湿った雪や冷たい雨、みぞれが頻繁に降ります。そのため、撥水加工されたフード付きダウンジャケットや折りたたみ傘（風に強いもの）が必須です。また、金沢市街の道路や兼六園の園路、ひがし茶屋街の石畳は消雪用の散水パイプ（地下水）によって濡れていることが多いため、スニーカーや革靴は厳禁。防水性・滑り止め機能の高いスノーブーツやレインブーツが不可欠です。"
        }
      },
      {
        '@type': 'Question',
        name: "金沢市街と湯涌温泉を組み合わせた冬のおすすめ観光ルートは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "1日目は金沢駅に到着後、近江町市場で冬の活気を感じながら海鮮丼や香箱ガニを味わい、兼六園の雪吊りと金沢城公園の白銀の石垣を散策。夕方に湯涌温泉へ移動し、雪見露天風呂と加能ガニ・治部煮の会席を堪能します。2日目は湯涌温泉街の「竹久夢二金沢記念館」や夢二の散策路を歩いた後、金沢市街へ戻り「ひがし茶屋街」や「主計町茶屋街」で雪化粧した格子戸の街並みを散策。金沢21世紀美術館でアート鑑賞を楽しみ、夕食には熱々の「金沢おでん」を味わうルートが最も人気です。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "金沢湯涌温泉　百楽荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/153452/153452.jpg",
              rating: 4.70,
              reviews: 788,
              price: "¥22,066〜",
              access: "★金沢中心街より車で20分★「金沢駅・兼六園」より“無料送迎”！お帰りは金沢駅近くへ荷物お届けサービス◎手ぶら観光もOK",
              special: "2022楽天ゴールドアワード＆日本の宿47☆ダブル受賞",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F153452%2F153452.html",
              story: "奥金沢・湯涌温泉の清らかな浅野川沿い、広大な敷地に「別邸 神楽（かぐら）」と「本館 彩心（いろは）」の2つの館を構えるラグジュアリー旅館「金沢湯涌温泉 百楽荘」。白銀に染まる竹林や雪景色を望むプライベート貸切露天風呂をはじめ、美肌効果抜群の弱アルカリ性単純温泉が体を芯から温めてくれます。夕食は金沢屈指の呼び声高い至高の懐石料理。冬限定の「香箱ガニ」を丸ごと使った甲羅盛り（カニ面）をはじめ、青いタグが輝く活加能ガニの炭火焼き、特選A5能登牛の石焼きなど、金沢の粋と冬の贅を尽くした料理が並びます。贅沢な大人の冬籠もりにふさわしい極上の空間です。",
              roomTip: "別邸神楽・半露天風呂付スイート客室。雪化粧した奥金沢の森と川のせせらぎを眺めながら、客室専用の湯船で誰にも邪魔されない至福の時間を過ごせます。",
              gourmetTip: "「冬の北陸二大蟹会席（活加能ガニ炭火焼き＆香箱ガニ甲羅盛り）。」。濃厚なカニ味噌とプチプチ食感の外子、香ばしい焼きガニの甘みが絶品です。",
              highlights: [
                "奥金沢に佇む憧れの極上宿＆雪景色を望むプライベート半露天風呂付き客室",
                "活加能ガニの炭火焼きと冬限定香箱ガニ甲羅盛り＆特選A5能登牛石焼き会席",
                "竹久夢二ゆかりのロマン漂う湯涌温泉街散策＆美白効果の高い弱アルカリ性単純泉"
              ]
            },
            {
              id: 2,
              name: "お宿　やました",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/130490/130490.jpg",
              rating: 4.75,
              reviews: 105,
              price: "¥11,600〜",
              access: "金沢駅よりバス45分、小松空港よりバス乗り継ぎ100分、北陸自動車道～金沢環状道路経由車30分",
              special: "当日予約歓迎！素泊・朝食付18時まで予約可！口コミ★5★24時間入浴可能な美人の湯と朝夕部屋食",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F130490%2F130490.html",
              story: "湯涌温泉街の中心、開湯1300年の歴史を今に伝える老舗宿「お宿 やました」。館内はどこか懐かしく温かな純和風の木造建築で、雪に覆われた山懐の静けさに心から寛ぐことができます。大浴場と露天風呂には、湯量豊富な自家源泉の天然温泉が惜しみなく注がれ、湯冷めしにくくお肌がつるつるになると評判。料理は地元近江町市場から毎日仕入れる新鮮な魚介と加賀野菜を職人が丹精込めて仕立てる本格加賀会席。11月〜12月限定の香箱ガニ、冬の寒ブリ大根、鴨肉の旨味が染みわたる名物「治部煮」など、金沢の伝統の味をゆったり部屋食または個室食事処で味わえます。",
              roomTip: "落ち着いた純和風客室。大きな窓から雪化粧した湯涌の温泉街と山並みを眺め、畳の香りに包まれてゆったり読書やお茶を楽しめます。",
              gourmetTip: "「金沢の冬味覚・香箱ガニ付き郷土加賀会席」。とろりとした餡が鴨肉と麩に絡む熱々の治部煮と、繊細な甘みの香箱ガニが冬の旅情を誘います。",
              highlights: [
                "開湯1300年の名湯を自家源泉かけ流しで堪能＆純和風の木造建築に漂う懐かしさ",
                "冬の香箱ガニと鴨肉治部煮＆近江町市場直送の寒ブリや加賀野菜会席",
                "金沢市街から車で20分の好立地＆湯冷めしにくい良質な温泉で心身を癒やす"
              ]
            },
            {
              id: 3,
              name: "金沢湯涌温泉　湯の出旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/30835/30835.jpg",
              rating: 4.67,
              reviews: 485,
              price: "¥17,325〜",
              access: "兼六園より車で25分、金沢駅より車で約40分。金沢森本I.Cから山側環状経由で30分。",
              special: "金沢市街から車で15分～20分。金沢の奥座敷。温泉と料理と趣贅沢にお愉しみいただける宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30835%2F30835.html",
              story: "数寄屋造りの洗練された建築美と、静謐な日本庭園が雪景色に映える「金沢湯涌温泉 湯の出旅館」。客室はわずか10室のみで、全館に行き届いたきめ細やかなおもてなしとプライベート感が保たれています。手入れの行き届いた日本庭園には雪吊りが施され、客室の窓や露天風呂からはまるで一幅の掛軸のような冬の幽玄美を鑑賞できます。お風呂は肌触りの柔らかな湯涌の名湯。夕食は金沢の茶懐石の流れを汲む本格懐石料理。器には伝統の九谷焼や山中塗が用いられ、加能ガニの洗い、香箱ガニ、のどぐろの塩焼きなど、目にも舌にも華やかな冬の芸術品を堪能できます。",
              roomTip: "庭園側次の間付き和室。白銀に覆われた雪吊りの松と庭園灯籠を眺め、静寂の中で凛とした金沢の冬の美意識を感じることができます。",
              gourmetTip: "「加賀の贅・活加能ガニ尽くしと高級魚のどぐろ懐石。」。脂の乗ったのどぐろを香ばしく焼き上げ、甘みたっぷりのカニ刺しとともに味わう至極の膳です。",
              highlights: [
                "わずか10室限定の静寂数寄屋造り＆雪吊りが施された名庭園を一望する絶景",
                "加能ガニ洗いと高級魚のどぐろ塩焼き＆九谷焼や山中塗の器で彩る本格茶懐石",
                "全館に行き届くきめ細やかなおもてなし＆雪景色の日本庭園を眺める優雅な休日"
              ]
            },
            {
              id: 4,
              name: "金沢湯涌温泉　日本料理　さかえや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/109160/109160.jpg",
              rating: 4.22,
              reviews: 177,
              price: "¥14,300〜",
              access: "金沢西ＩＣよりお車で約30分 / 金沢駅より「湯涌温泉行バス」約40分",
              special: "全7室、部屋食で四季を味わう金沢の宿。ミシュラン『最上級の快適』を受賞。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F109160%2F109160.html",
              story: "「料理自慢の小宿」として全国の食通から高い支持を集める「金沢湯涌温泉 日本料理 さかえや」。1日わずか7組限定の贅沢な隠れ家で、料理長が毎朝近江町市場で厳選した最高品質の冬食材だけを使って腕を振るいます。冬の目玉はなんといっても11月に解禁される「香箱ガニ」と「加能ガニ」。職人が手作業で丁寧に身と内子・外子を取り出して甲羅に美しく盛り付けたカニ面は、一口ごとに濃厚な旨味が口いっぱいに広がります。大浴場では湯涌のやさしい単純温泉を貸切感覚で満喫でき、静かに美食と向き合いたい大人旅に最適です。",
              roomTip: "和モダン洋室または数寄屋和室。無駄を削ぎ落とした清潔感あふれる空間で、上質な寝具と静かな夜のひとときを満喫できます。",
              gourmetTip: "「さかえや名物・特選香箱ガニ懐石」。職人の精緻な技で仕立てられたカニ面と、旬の寒ブリしゃぶしゃぶ、地酒のペアリングが格別です。",
              highlights: [
                "1日7組限定の料理宿＆職人が手作業で仕立てる冬限定香箱ガニ甲羅盛りの極み",
                "近江町市場直送の特選香箱ガニ会席＆寒ブリしゃぶしゃぶと厳選石川地酒",
                "貸切感覚で浸かる湯涌のやさしい名湯＆大人の静かな美食旅に最適な空間"
              ]
            },
            {
              id: 5,
              name: "金沢湯涌温泉　山音（やまね）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/19996/19996.jpg",
              rating: 3.97,
              reviews: 251,
              price: "¥19,140〜",
              access: "JR金沢駅よりお車で30分",
              special: "露天風呂と、囲炉裏ダイニングで北陸の山海の幸を楽しめる宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19996%2F19996.html",
              story: "奥金沢の清流・浅野川のせせらぎを間近に臨み、心安らぐ木造りの温もりに包まれた隠れ宿「金沢湯涌温泉 山音（やまね）」。自然豊かなロケーションを活かし、館内には心地よい静けさが漂います。大浴場や露天風呂からは、雪が降り積もる渓流と木々を望み、冷たい冬の空気の中でじっくりと天然温泉に浸かる贅沢を味わえます。料理は海の幸だけでなく、白山麓の山の幸やジビエ、加賀蓮根や源助大根などの加賀野菜を取り入れた滋味あふれる里山会席。冬は猪鍋や能登牛すき焼き、冬の旬魚がテーブルを彩り、体の芯から温まる滞在を約束してくれます。",
              roomTip: "渓流側客室。窓の外に広がる浅野川の白銀の雪景色とせせらぎの音に癒やされ、秘湯ならではのプライベートな冬籠もりを実感できます。",
              gourmetTip: "「能登牛すき焼きと冬の日本海鮮魚会席」。きめ細やかな能登牛の霜降りを特製割下で煮込み、旬の刺身や郷土鍋とともに堪能できます。",
              highlights: [
                "浅野川の清流を臨む渓流沿いの隠れ家＆美肌温泉と里山の滋味あふれる料理",
                "きめ細やかなサシが入る能登牛すき焼き＆冬の日本海鮮魚と郷土鍋料理",
                "白銀の山々に包まれた奥座敷で雪見風呂＆日常から完全に解き放たれる滞在"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "金沢の「兼六園の雪吊り」はいつから見られますか？雪景色やライトアップの時期は？",
    "a": "兼六園の冬の風物詩「雪吊り（ゆきづり）」は、毎年11月1日に有名な唐崎松（からさきまつ）から縄を張る作業が始まり、12月中旬までに園内すべての松や樹木に施されます。金沢市街に本格的な雪が積もり、雪吊りと白銀の庭園が織りなす絶景が見られる確率が高いのは12月下旬から1月下旬です。また、例年1月下旬から2月上旬にかけては「金沢城・兼六園四季物語 冬の段」として夜間無料開放と幻想的な雪吊りライトアップが実施され、夜空に浮かび上がる幾何学的な縄の美しさと白雪のコントラストを鑑賞できます。"
  },
  {
    "q": "冬の金沢名物「香箱ガニ（こうばこがに）」とは何ですか？旬の時期はいつまでですか？",
    "a": "香箱ガニとは、北陸地方で水揚げされるメスのズワイガニの呼称です。オス（加能ガニ）に比べて小ぶりですが、資源保護のため漁期が「11月6日の解禁から12月29日頃までの約2ヶ月弱。」と極めて短く、地元金沢市民がオスのカニ以上に楽しみにしている冬の至宝です。最大の特徴は、甲羅の中に詰まった朱色の未成熟卵「内子（うちこ）」の芳醇な旨味、お腹に抱えた粒々の「外子（そとこ）」のプチプチした食感、そして濃厚なカニ味噌です。職人が甲羅の中に身と卵を美しく詰め直した「カニ面（めん）」は、金沢おでんや旅館の会席で必食の名物です。"
  },
  {
    "q": "「湯涌温泉（ゆわくおんせん）」はどのような温泉地ですか？金沢市街からのアクセスは？",
    "a": "湯涌温泉は金沢市街から南東へ約15km、白山山系に連なる医王山の麓、浅野川の上流に位置する「金沢の奥座敷」です。養老2年（718年）の開湯と伝わり、江戸時代には加賀藩主・前田公の指定湯治場（隠し湯）として栄えました。大正時代には詩人画家・竹久夢二が最愛の女性・笠井彦乃と約3週間滞在し、数々の名作を残したロマンの地でもあります。泉質は肌に優しい無色透明のナトリウム・カルシウム-硫酸塩・塩化物泉で、保温・美肌効果に優れます。JR金沢駅東口から北陸鉄道バス（湯涌温泉行き）で約45分、車やタクシーなら約20〜25分でアクセスできます。"
  },
  {
    "q": "冬（11月〜1月）の金沢の気候や雪の状況、服装・靴の選び方を教えてください。",
    "a": "11月の金沢は最高気温15℃前後、最低気温7℃前後で肌寒く、12月〜1月になると最高気温5〜7℃、最低気温0〜2℃まで冷え込みます。北陸の冬は「弁当忘れても傘忘れるな」と言われるほど天気が変わりやすく、湿った雪や冷たい雨、みぞれが頻繁に降ります。そのため、撥水加工されたフード付きダウンジャケットや折りたたみ傘（風に強いもの）が必須です。また、金沢市街の道路や兼六園の園路、ひがし茶屋街の石畳は消雪用の散水パイプ（地下水）によって濡れていることが多いため、スニーカーや革靴は厳禁。防水性・滑り止め機能の高いスノーブーツやレインブーツが不可欠です。"
  },
  {
    "q": "金沢市街と湯涌温泉を組み合わせた冬のおすすめ観光ルートは？",
    "a": "1日目は金沢駅に到着後、近江町市場で冬の活気を感じながら海鮮丼や香箱ガニを味わい、兼六園の雪吊りと金沢城公園の白銀の石垣を散策。夕方に湯涌温泉へ移動し、雪見露天風呂と加能ガニ・治部煮の会席を堪能します。2日目は湯涌温泉街の「竹久夢二金沢記念館」や夢二の散策路を歩いた後、金沢市街へ戻り「ひがし茶屋街」や「主計町茶屋街」で雪化粧した格子戸の街並みを散策。金沢21世紀美術館でアート鑑賞を楽しみ、夕食には熱々の「金沢おでん」を味わうルートが最も人気です。"
  }
];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-rose-100 selection:text-rose-900 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero Header */}
      <header className="relative bg-stone-900 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1800&q=80" 
            alt="白銀の金沢兼六園雪吊り" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-rose-900/80 backdrop-blur-md text-rose-100 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-rose-400/30">
            <Snowflake className="w-4 h-4 text-rose-200" />
            11月・12月・1月 加賀百万石の冬情緒＆冬限定カニ美食特集
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">「11・12・1月金沢」兼六園の雪吊り冬景色と奥金沢「湯涌温泉」の秘湯情緒・冬限定香箱ガニ＆加能ガニ・金沢おでん・治部煮を味わう名宿5選</h1>
          <p className="text-stone-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            日本三名園「兼六園」の松に施される幾何学美の雪吊り、初雪に白く染まるひがし茶屋街、そして11月6日解禁のわずか2ヶ月しか味わえない幻の「香箱ガニ」。加賀藩主の隠し湯として栄え、竹久夢二も愛した奥金沢・湯涌温泉の雪見露天風呂と加賀懐石を堪能する名宿を厳選紹介します。
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs sm:text-sm text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-rose-400" /> 旬の時期：11月上旬〜1月下旬（香箱ガニは12月末まで）</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-rose-400" /> エリア：石川県金沢市（兼六園・ひがし茶屋街・奥金沢湯涌温泉）</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-rose-400" /> 旬グルメ：香箱ガニ・加能ガニ・治部煮・のどぐろ・金沢おでん</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-rose-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Introduction</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              雪吊りが描く幾何学美と、冬限定の至宝「香箱ガニ」に酔いしれる金沢の冬
            </h2>
          </div>
          
          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p>
              加賀百万石の栄華を今に伝える城下町・金沢。11月を迎えると、日本三名園の一つ「兼六園」では名木・唐崎松をはじめとする園内の松やツツジに、重く湿った雪から枝を守るための伝統技法「雪吊り（ゆきづり）」が施されます。何百本もの円錐形の縄が青空や鉛色の雲を背景に凛と張られた姿は、金沢の冬の到来を告げる荘厳な芸術です。初雪が降り、雪吊りの縄や白壁の土塀、ひがし茶屋街の出格子に純白の雪が積もる光景は、一幅の水墨画のような静けさと情緒を湛えています。
            </p>
            <p>
              そして11月6日、日本海のカニ漁が解禁されると、金沢の街は独特の高揚感に包まれます。オスのズワイガニ「加能ガニ」も堂々たる美味ですが、金沢市民が何より待ち焦がれるのが、メスのズワイガニである「香箱ガニ（こうばこがに）」です。資源保護のため漁期は12月29日頃までのわずか2ヶ月弱。小ぶりな甲羅の中に凝縮された朱色の未成熟卵「内子（うちこ）」の芳醇なコク、お腹に抱えた「外子（そとこ）」の小気味よい食感、そして濃厚なカニ味噌と繊細な身肉が一体となった味わいは、この時期だけの奇跡の美味です。
            </p>
            <p>
              金沢の冬をさらに奥深く楽しむなら、金沢市街から車でわずか20分ほどの山懐に抱かれた「湯涌温泉（ゆわくおんせん）」への宿泊が理想的です。奈良時代に開湯し、江戸期には加賀藩主・前田公の湯治場として栄えた名湯。大正時代には詩人画家・竹久夢二が最愛の女性と静かな逢瀬を楽しんだロマンの郷でもあります。浅野川のせせらぎを聞きながら雪見露天風呂に浸かり、九谷焼の器に美しく盛られた香箱ガニや熱々の治部煮を味わう時間は、一生記憶に残る贅沢な冬の思い出となるはずです。
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="bg-rose-50/50 rounded-2xl p-4 border border-rose-100 space-y-2">
              <div className="flex items-center gap-2 text-rose-900 font-bold text-sm">
                <Trees className="w-4 h-4 text-rose-700" />
                兼六園の雪吊りと冬の段
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                職人技が光る唐崎松の雪吊り。夜には金沢城と兼六園のライトアップが幻想的な白銀世界を演出。
              </p>
            </div>
            <div className="bg-rose-50/50 rounded-2xl p-4 border border-rose-100 space-y-2">
              <div className="flex items-center gap-2 text-rose-900 font-bold text-sm">
                <Utensils className="w-4 h-4 text-rose-700" />
                2ヶ月限定の幻「香箱ガニ」
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                内子・外子・カニ味噌が詰まった香箱ガニの甲羅盛り（カニ面）と、甘みたっぷりの活加能ガニ。
              </p>
            </div>
            <div className="bg-rose-50/50 rounded-2xl p-4 border border-rose-100 space-y-2">
              <div className="flex items-center gap-2 text-rose-900 font-bold text-sm">
                <Landmark className="w-4 h-4 text-rose-700" />
                奥金沢・湯涌温泉の静寂
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                加賀藩主の隠し湯・竹久夢二ゆかりの湯涌温泉。白銀の渓谷美を望む雪見露天風呂で心身を温める。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <div className="inline-flex items-center gap-2 text-rose-950 font-bold text-sm tracking-wide bg-rose-100/60 px-3 py-1 rounded-full">
              <Sparkles className="w-4 h-4 text-rose-800" />
              楽天トラベル公式連携・厳選宿
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-stone-900 mt-2">
              兼六園雪景色と湯涌温泉の雪見露天＆香箱ガニを堪能する名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              ※表示料金は楽天トラベルAPIより取得した参考最低価格です。時期やプランにより変動します。
            </p>
          </div>

          <div className="space-y-10">
            {hotelsData.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xs border border-stone-200 hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                {/* Hotel Image */}
                <div className="w-full relative aspect-[16/9] sm:aspect-[21/9]">
                  <img 
                    src={hotel.img} 
                    alt={hotel.name}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-400" />
                    厳選宿 {hotel.id}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-stone-900 text-xs font-bold px-3 py-1 rounded-lg shadow-xs flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    {hotel.rating} <span className="text-stone-400 font-normal">({hotel.reviews}件)</span>
                  </div>
                </div>

                {/* Hotel Details */}
                <div className="p-6 md:p-8 w-full flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs text-stone-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-rose-700" />
                        {hotel.access}
                      </span>
                      <span className="text-rose-800 font-extrabold text-base sm:text-lg">
                        {hotel.price} <span className="text-xs font-normal text-stone-500">（税込目安）</span>
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-2xl font-bold text-stone-900 leading-snug">
                      {hotel.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {hotel.story}
                    </p>

                    {/* Highlights bullet points */}
                    <div className="space-y-1.5 bg-stone-50 rounded-2xl p-4 border border-stone-100">
                      {hotel.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Room & Gourmet tips */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                      <div className="bg-rose-50/40 p-3 rounded-xl border border-rose-100/60">
                        <span className="font-bold text-rose-900 block mb-1">【客室の選び方】</span>
                        <p className="text-stone-600 leading-relaxed">{hotel.roomTip}</p>
                      </div>
                      <div className="bg-amber-50/40 p-3 rounded-xl border border-amber-100/60">
                        <span className="font-bold text-amber-900 block mb-1">【冬の味覚おすすめ】</span>
                        <p className="text-stone-600 leading-relaxed">{hotel.gourmetTip}</p>
                      </div>
                    </div>
                  </div>

                  {/* Booking CTA Button */}
                  <div className="pt-2">
                    <a 
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-rose-700 to-rose-900 hover:from-rose-800 hover:to-rose-950 text-white font-bold py-3.5 px-6 rounded-2xl shadow-sm hover:shadow transition text-sm tracking-wide"
                    >
                      <span>楽天トラベルで空室・冬限定プランを見る</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2-Day Winter Model Course Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-rose-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Route</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の金沢・兼六園雪吊りと奥金沢湯涌温泉 2泊3日風雅モデルコース
            </h2>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-stone-700">
            {/* Day 1 */}
            <div className="relative pl-6 border-l-2 border-rose-700 space-y-2">
              <div className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-rose-700" />
              <h3 className="font-bold text-stone-900 text-base">
                1日目：近江町市場のカニ熱気と兼六園雪吊り散策
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                午前、北陸新幹線でJR金沢駅に到着。まずは「金沢市民の台所」近江町市場へ。店頭にずらりと並ぶ真っ赤な加能ガニや香箱ガニの活気ある掛け声を楽しみながら、旬の海鮮丼でランチ。午後は日本三名園「兼六園」へ。青空に映える唐崎松の雪吊りや霞ヶ池、徽軫灯籠（ことじとうろう）の冬景色をじっくり観賞。夕暮れにバスまたはタクシーで奥金沢・湯涌温泉へ。チェックイン後は雪見露天風呂に浸かり、夕食には名物の香箱ガニ甲羅盛りと鴨肉の治部煮会席を味わいます。
              </p>
            </div>

            {/* Day 2 */}
            <div className="relative pl-6 border-l-2 border-rose-700 space-y-2">
              <div className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-rose-700" />
              <h3 className="font-bold text-stone-900 text-base">
                2日目：竹久夢二の足跡を辿る湯涌散歩と雪の茶屋街巡り
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                朝の清澄な空気の中、湯涌温泉街を散策。「金沢湯涌夢二館」で竹久夢二の抒情画の世界に浸り、薬師堂や白鷺の足湯で温まります。昼前に金沢市街へ戻り、「ひがし茶屋街」の雪化粧した紅殻格子（べんがらごうし）の町並みを歩き、金箔ソフトや抹茶で一服。午後は金沢21世紀美術館で現代アートに触れ、夕方には雪吊りライトアップが行われる兼六園へ再訪。夜は金沢名物「金沢おでん」の名店で車麩やバイ貝、カニ面を地酒とともに堪能します。
              </p>
            </div>

            {/* Day 3 */}
            <div className="relative pl-6 border-l-2 border-rose-700 space-y-2">
              <div className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-rose-700" />
              <h3 className="font-bold text-stone-900 text-base">
                3日目：金沢城公園の白銀石垣と加賀の伝統工芸土産選び
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                最終日は金沢城公園へ。菱櫓・五十間長屋・橋爪門続櫓の純白の雪と黒い瓦屋根が織りなす荘厳な城郭建築を拝観。長町武家屋敷跡の雪除け「こも掛け」が施された土塀の小路を散策し、武士の街の風情を感じます。金沢駅構内の「あんと」で九谷焼の箸置きや加賀棒茶、カニ煎餅、銘酒「菊姫」「手取川」を買い求め、新幹線で帰路につきます。
              </p>
            </div>
          </div>
        </section>

        {/* Local Winter Practical Tips */}
        <section className="bg-rose-950 text-white rounded-3xl p-6 sm:p-10 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-rose-300 font-bold text-xs sm:text-sm tracking-wider uppercase">
            <ThermometerSun className="w-4 h-4 text-rose-300" />
            現地リアルアドバイス
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">
            冬の金沢・湯涌温泉を快適に過ごすための服装と足元対策
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-rose-100 leading-relaxed pt-2">
            <div className="space-y-2 bg-stone-900/60 p-4 rounded-2xl border border-rose-800/60">
              <span className="font-bold text-white block">【雨雪兼用・防水ブーツが鉄則】</span>
              <p>
                冬の金沢は雪だけでなくみぞれや冷たい雨が多く降ります。また、道路や歩道には消雪パイプから水が撒かれているため、路面は常に濡れています。革靴や布製スニーカーは数分で浸水してしまうため、完全防水のレインブーツやスノーブーツを必ず着用してください。
              </p>
            </div>
            <div className="space-y-2 bg-stone-900/60 p-4 rounded-2xl border border-rose-800/60">
              <span className="font-bold text-white block">【香箱ガニの提供期間に注意】</span>
              <p>
                香箱ガニ（メスのズワイガニ）の漁期は法律で12月29日頃までと厳格に定められています。1月に入ると生のカニは市場から姿を消し、冷凍保存や加工品が中心となります。獲れたて茹でたてのジューシーな香箱ガニを堪能したい場合は、必ず「11月中旬〜12月下旬」の旅程を組むことを強く推奨します。
              </p>
            </div>
          </div>
        </section>

        {/* Local Souvenir & Spot Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-rose-950 font-bold text-sm tracking-wide bg-rose-100/60 px-3 py-1 rounded-full">
              <ShoppingBag className="w-4 h-4 text-rose-800" />
              金沢・兼六園・湯涌温泉の冬名物＆おみやげ手帖
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              城下町の美意識が息づく冬限定の美食工芸と加賀銘菓
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-rose-700" />
                近江町市場の香箱ガニ甲羅盛りクール便＆冬仕込み新酒「菊姫・手取川」
              </h3>
              <p>
                近江町市場の鮮魚通りでは、茹でたての香箱ガニや職人が手作業で仕立てた「カニ面」を地方発送できます。12月末までの短い旬だからこそ、お歳暮や年末年始の特別なごちそうとして喜ばれます。また、霊峰白山の伏流水で厳冬期に寒仕込みされる金沢・加賀の地酒「菊姫」「手取川」「黒帯」のしぼりたて新酒は、キリッとした辛口の中に米のふくよかな旨味が広がり、カニ料理や治部煮と最高の相性を誇ります。
              </p>
            </div>
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-rose-700" />
                縁起物「加賀八幡起上り」と加賀藩御用菓子「森八・柴舟小出」
              </h3>
              <p>
                湯涌温泉の白鷺伝説とも縁の深い伝統工芸「加賀八幡起上り（かがはちまんおきあがり）。」。鮮やかな朱色の絵付けが施された愛らしい起き上がり小法師は、無病息災・家内安全を願うお守りとして人気です。お菓子では、寛永年間創業「森八」の日本三名菓「長生殿（ちょうせいでん）」や、生姜のピリッとした辛みと白砂糖の甘みが冬の体に染みる「柴舟小出」の煎餅、香り高い「加賀棒茶（ほうじ茶）」が旅の定番手土産です。
              </p>
            </div>
          </div>
        </section>

        {/* Deep Dive Knowledge Section */}
        <section className="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-200 pb-4">
            <div className="inline-flex items-center gap-2 text-rose-950 font-bold text-sm tracking-wide bg-rose-100/60 px-3 py-1 rounded-full">
              <Compass className="w-4 h-4 text-rose-800" />
              加賀百万石の美意識・ディープダイブ解説
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              兼六園の「雪吊り」の職人技と、香箱ガニが金沢人を魅了する理由
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-2 bg-white p-5 rounded-2xl border border-stone-100 shadow-2xs">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Trees className="w-4 h-4 text-rose-700" />
                800本以上の縄が織りなす「りんご吊り」の構造力学
              </h3>
              <p>
                北陸の雪は水分を多く含み、非常に重い「湿り雪」です。何もしなければ松の大枝が雪の重みで折れてしまうため、庭師たちが一本の太い芯柱を立て、その頭頂部から四方八方へと縄を放射状に張り巡らせます。最も有名な唐崎松では、5本の芯柱から約800本もの縄が引かれ、円錐形の美しい幾何学模様を描きます。実用的な防災技術でありながら、冬の景観そのものを世界最高峰の庭園芸術へと昇華させた加賀前田家の美意識がここに息づいています。
              </p>
            </div>

            <div className="space-y-2 bg-white p-5 rounded-2xl border border-stone-100 shadow-2xs">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Utensils className="w-4 h-4 text-rose-700" />
                なぜ香箱ガニは12月末までの「わずか50日」なのか？
              </h3>
              <p>
                メスのズワイガニである香箱ガニは、将来のズワイガニ資源を産み育てる大切な母ガニです。そのため省令により資源保護を徹底する目的で、漁期が11月6日から12月29日頃までの約50日間に厳格に制限されています。この短い期間に獲れる香箱ガニは、硬い甲羅の内側に朱色に輝く卵巣「内子」がぎっしりと詰まり、チーズやウニにも似た濃厚なコクと芳醇なアミノ酸の旨味を持っています。わずかな期間しか食べられない「幻の希少性」が、金沢の人々を虜にし続けています。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-rose-950 font-bold text-sm tracking-wide bg-rose-100/60 px-3 py-1 rounded-full">
              <HelpCircle className="w-4 h-4 text-rose-800" />
              よくある質問
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初冬・厳冬期の金沢・湯涌温泉旅行 Q&A
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq, idx) => (
              <div key={idx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-rose-700 font-extrabold">Q.</span>
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
          <div className="flex items-center gap-2 text-rose-950 font-bold text-sm tracking-wide">
            <Sparkles className="w-4 h-4 text-rose-800" />
            あわせて読みたい北陸・加賀の冬温泉＆カニ特集
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            <Link 
              href="/winter-kanazawa-kenrokuen-yukizuri-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-rose-700 font-bold block text-[10px]">石川・金沢兼六園</span>
              <p className="font-bold text-stone-800 line-clamp-2">兼六園雪吊り冬景色と金沢城・冬の味覚加能ガニを味わう加賀名宿</p>
            </Link>
            <Link 
              href="/winter-ishikawa-awazu-onsen-kanogani-notogyu-kaga-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-rose-700 font-bold block text-[10px]">石川・加賀粟津温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">開湯1300年粟津温泉の美肌湯と加能ガニ・能登牛を堪能する老舗宿</p>
            </Link>
            <Link 
              href="/winter-toyama-amaharashi-shinminato-tateyama-crab-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-rose-700 font-bold block text-[10px]">富山・雨晴海岸＆新湊</span>
              <p className="font-bold text-stone-800 line-clamp-2">冠雪立山連峰の奇跡絶景と新湊昼セリ本ズワイガニ・寒ブリを満喫する宿</p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-ishikawa-kanazawa-yuwaku-onsen-koubako-crab-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
