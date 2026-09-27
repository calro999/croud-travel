import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Mountain, Trees, ThermometerSun, Footprints
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月みなかみ温泉郷の冬名湯と谷川岳雪見風呂】利根川渓谷露天と谷川岳初冠雪・極上上州牛＆旬きのこ会席の宿5選",
  description: "11月下旬から12月にかけて谷川連峰が白銀の初冠雪を纏い、利根川源流の渓谷に初冬の静寂が広がる群馬「みなかみ温泉郷」。ルレ・エ・シャトー加盟の世界最高峰旅館から天下一の広さを誇る宝川温泉の雪見大露天風呂、清流を望む全室露天風呂付きモダンホテルまで、極上ブランド肉「上州牛」やすき焼き、地元特産の肉厚舞茸きのこ会席を堪能する厳選名宿5選を徹底解説。",
  keywords: 'みなかみ温泉 宿泊, 水上温泉 11月 12月, 松乃井 大江戸温泉, 別邸 仙寿庵, 宝川温泉 汪泉閣, あらたし みなかみ, みなかみホテルジュラク, 谷川岳 雪見露天風呂, 上州牛 すき焼き, 利根川 渓谷 温泉',
  alternates: {
    canonical: 'https://croud-travel.com/winter-gunma-minakami-onsen-tanigawa-yukimi-stay',
  },
  openGraph: {
    title: "【11・12月みなかみ温泉郷の冬名湯と谷川岳雪見風呂】利根川渓谷露天と谷川岳初冠雪・極上上州牛＆旬きのこ会席の宿5選",
    description: "11月下旬から12月にかけて谷川連峰が白銀の初冠雪を纏い、利根川源流の渓谷に初冬の静寂が広がる群馬「みなかみ温泉郷」。ルレ・エ・シャトー加盟の世界最高峰旅館から天下一の広さを誇る宝川温泉の雪見大露天風呂、清流を望む全室露天風呂付きモダンホテルまで、極上ブランド肉「上州牛」やすき焼き、地元特産の肉厚舞茸きのこ会席を堪能する厳選名宿5選を徹底解説。",
    url: 'https://croud-travel.com/winter-gunma-minakami-onsen-tanigawa-yukimi-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月みなかみ温泉郷の冬名湯と谷川岳雪見風呂】利根川渓谷露天と谷川岳初冠雪・極上上州牛＆旬きのこ会席の宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月みなかみ温泉郷の冬名湯と谷川岳雪見風呂】利根川渓谷露天と谷川岳初冠雪・極上上州牛＆旬きのこ会席の宿5選",
    description: "11月下旬から12月にかけて谷川連峰が白銀の初冠雪を纏い、利根川源流の渓谷に初冬の静寂が広がる群馬「みなかみ温泉郷」。ルレ・エ・シャトー加盟の世界最高峰旅館から天下一の広さを誇る宝川温泉の雪見大露天風呂、清流を望む全室露天風呂付きモダンホテルまで、極上ブランド肉「上州牛」やすき焼き、地元特産の肉厚舞茸きのこ会席を堪能する厳選名宿5選を徹底解説。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'],
  }
};

const faqList = [
  {
    "q": "みなかみ温泉郷の11月・12月の気候や積雪状況はどうですか？車のタイヤ規制は？",
    "a": "みなかみ町は三国山脈（谷川連峰）を境に新潟県と接しているため、11月下旬から12月にかけて日本海側からの寒気の影響で本格的な降雪が始まります。11月の日中最高気温は10℃前後ですが、朝晩は0℃〜3℃近くまで冷え込みます。12月に入ると最高気温も5℃以下となり、水上温泉街や奥利根地域（宝川・湯の小屋方面）は一面の銀世界へと変わります。11月中旬以降にお車で訪れる場合は、必ずスタッドレスタイヤ（冬用タイヤ）の装着またはタイヤチェーンの携行が必須です。雪道の運転が不安な方は、上越新幹線（上毛高原駅）や上越線（水上駅）からの旅館送迎バスや路線バスの利用が安心です。"
  },
  {
    "q": "みなかみ温泉郷にはどんな温泉地が含まれますか？それぞれの特徴は？",
    "a": "みなかみ温泉郷は「みなかみ18湯」とも呼ばれ、利根川沿いに広がる水上温泉をはじめ、谷川岳の麓に湧く静寂の谷川温泉、天下一の大露天風呂で有名な宝川温泉、白壁の湯治情緒が残る法師温泉、雄大な赤谷湖畔に広がる猿ヶ京温泉など、個性豊かな18の温泉地で構成されています。泉質は主にカルシウム・ナトリウム-硫酸塩・塩化物泉や単純温泉で、無色透明で肌に優しく、保湿・保温効果に優れており、初冬の冷えや筋肉の緊張をほぐす「温まりの湯」として親しまれています。"
  },
  {
    "q": "宝川温泉の『汪泉閣』の大露天風呂は混浴ですか？女性でも安心して入れますか？",
    "a": "宝川温泉汪泉閣には、「摩訶の湯」「般若の湯」「子宝の湯」という3つの巨大な混浴露天風呂と、女性専用の「摩耶の湯」の計4つの大露天風呂があります。混浴露天風呂では、男女ともに専用の「湯浴み着（ゆあみぎ）」の着用が義務付けられており、透けにくい厚手の素材で作られているため、女性やカップル、ご家族連れでも安心して混浴大露天風呂の開放感を満喫できます。また、女性専用の露天風呂も約100畳もの広さがあり、プライベートに雪見風呂を楽しみたい女性にも大好評です。"
  },
  {
    "q": "東京方面からみなかみ温泉郷へのアクセス方法は？",
    "a": "お車の場合、関越自動車道「練馬IC」から「水上IC」まで約1時間40分〜2時間と、首都圏からのアクセスが極めて良好です。電車の場合、JR上越新幹線「東京駅」から「上毛高原駅」まで最短約66分。上毛高原駅からは各方面への路線バスや各旅館の送迎バスが運行されています。また、在来線の上越線を利用すれば「水上駅」へ直行でき、水上温泉街の中心部へは徒歩や無料送迎でスムーズにアクセスできます。"
  },
  {
    "q": "冬のみなかみ温泉郷で絶対に味わうべき地元グルメは何ですか？",
    "a": "冬のみなかみで外せないのが、上州の豊かな大自然と清らかな水で育まれたブランド黒毛和牛「上州牛」です。引き締まった赤身と甘みのある脂のバランスが絶妙で、すき焼きや陶板ステーキで極上の旨みを堪能できます。また、みなかみ町は全国有数の「舞茸（まいたけ）」の産地。肉厚で香りが極めて強い朝採れ舞茸の天ぷらや土鍋ご飯、きのこ鍋は一度食べたら忘れられない美味しさです。さらに利根川源流の清流イワナ・ヤマメの塩焼き、上州麦豚、地元酒蔵の搾りたて地酒など、冬の山里の美食が旅人を温かく迎えてくれます。"
  }
];

export default function MinakamiOnsenWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-gunma-minakami-onsen-tanigawa-yukimi-stay#article",
        "headline": "【11・12月みなかみ温泉郷の冬名湯と谷川岳雪見風呂】利根川渓谷露天と谷川岳初冠雪・極上上州牛＆旬きのこ会席の宿5選",
        "description": "11月下旬から12月にかけて谷川連峰が白銀の初冠雪を纏い、利根川源流の渓谷に初冬の静寂が広がる群馬「みなかみ温泉郷」。ルレ・エ・シャトー加盟の世界最高峰旅館から天下一の広さを誇る宝川温泉の雪見大露天風呂、清流を望む全室露天風呂付きモダンホテルまで、極上ブランド肉「上州牛」やすき焼き、地元特産の肉厚舞茸きのこ会席を堪能する厳選名宿5選を徹底解説。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "datePublished": "2026-09-27T00:00:00+09:00",
        "dateModified": "2026-09-27T00:00:00+09:00",
        "author": {
          "@type": "Organization",
          "name": "日本全国・旅宿クラウド 編集部",
          "url": "https://croud-travel.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "日本全国・旅宿クラウド",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.com/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/winter-gunma-minakami-onsen-tanigawa-yukimi-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/winter-gunma-minakami-onsen-tanigawa-yukimi-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "みなかみ温泉郷の11月・12月の気候や積雪状況はどうですか？車のタイヤ規制は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "みなかみ町は三国山脈（谷川連峰）を境に新潟県と接しているため、11月下旬から12月にかけて日本海側からの寒気の影響で本格的な降雪が始まります。11月の日中最高気温は10℃前後ですが、朝晩は0℃〜3℃近くまで冷え込みます。12月に入ると最高気温も5℃以下となり、水上温泉街や奥利根地域（宝川・湯の小屋方面）は一面の銀世界へと変わります。11月中旬以降にお車で訪れる場合は、必ずスタッドレスタイヤ（冬用タイヤ）の装着またはタイヤチェーンの携行が必須です。雪道の運転が不安な方は、上越新幹線（上毛高原駅）や上越線（水上駅）からの旅館送迎バスや路線バスの利用が安心です。"
            }
          },
          {
            "@type": "Question",
            "name": "みなかみ温泉郷にはどんな温泉地が含まれますか？それぞれの特徴は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "みなかみ温泉郷は「みなかみ18湯」とも呼ばれ、利根川沿いに広がる水上温泉をはじめ、谷川岳の麓に湧く静寂の谷川温泉、天下一の大露天風呂で有名な宝川温泉、白壁の湯治情緒が残る法師温泉、雄大な赤谷湖畔に広がる猿ヶ京温泉など、個性豊かな18の温泉地で構成されています。泉質は主にカルシウム・ナトリウム-硫酸塩・塩化物泉や単純温泉で、無色透明で肌に優しく、保湿・保温効果に優れており、初冬の冷えや筋肉の緊張をほぐす「温まりの湯」として親しまれています。"
            }
          },
          {
            "@type": "Question",
            "name": "宝川温泉の『汪泉閣』の大露天風呂は混浴ですか？女性でも安心して入れますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "宝川温泉汪泉閣には、「摩訶の湯」「般若の湯」「子宝の湯」という3つの巨大な混浴露天風呂と、女性専用の「摩耶の湯」の計4つの大露天風呂があります。混浴露天風呂では、男女ともに専用の「湯浴み着（ゆあみぎ）」の着用が義務付けられており、透けにくい厚手の素材で作られているため、女性やカップル、ご家族連れでも安心して混浴大露天風呂の開放感を満喫できます。また、女性専用の露天風呂も約100畳もの広さがあり、プライベートに雪見風呂を楽しみたい女性にも大好評です。"
            }
          },
          {
            "@type": "Question",
            "name": "東京方面からみなかみ温泉郷へのアクセス方法は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "お車の場合、関越自動車道「練馬IC」から「水上IC」まで約1時間40分〜2時間と、首都圏からのアクセスが極めて良好です。電車の場合、JR上越新幹線「東京駅」から「上毛高原駅」まで最短約66分。上毛高原駅からは各方面への路線バスや各旅館の送迎バスが運行されています。また、在来線の上越線を利用すれば「水上駅」へ直行でき、水上温泉街の中心部へは徒歩や無料送迎でスムーズにアクセスできます。"
            }
          },
          {
            "@type": "Question",
            "name": "冬のみなかみ温泉郷で絶対に味わうべき地元グルメは何ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "冬のみなかみで外せないのが、上州の豊かな大自然と清らかな水で育まれたブランド黒毛和牛「上州牛」です。引き締まった赤身と甘みのある脂のバランスが絶妙で、すき焼きや陶板ステーキで極上の旨みを堪能できます。また、みなかみ町は全国有数の「舞茸（まいたけ）」の産地。肉厚で香りが極めて強い朝採れ舞茸の天ぷらや土鍋ご飯、きのこ鍋は一度食べたら忘れられない美味しさです。さらに利根川源流の清流イワナ・ヤマメの塩焼き、上州麦豚、地元酒蔵の搾りたて地酒など、冬の山里の美食が旅人を温かく迎えてくれます。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.com/winter-gunma-minakami-onsen-tanigawa-yukimi-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "大江戸温泉物語Ｐｒｅｍｉｕｍ　松乃井（旧：水上温泉　源泉湯の宿　松乃井）（２０２６年８月７日開業）",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9290%2F9290.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "谷川温泉　別邸　仙寿庵（せんじゅあん）",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28063%2F28063.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "宝川温泉汪泉閣",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67818%2F67818.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "水上温泉　あらたし　みなかみ",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184453%2F184453.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "水上温泉　みなかみホテルジュラク",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5766%2F5766.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "大江戸温泉物語Ｐｒｅｍｉｕｍ　松乃井（旧：水上温泉　源泉湯の宿　松乃井）（２０２６年８月７日開業）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9290/9290.jpg",
              rating: 4.04,
              reviews: 3805,
              price: "¥12,900〜",
              access: "関越道水上ＩＣより車５分、ＪＲ上越線水上駅より徒歩１５分。",
              special: "利根川と谷川岳の絶景、趣の異なる3つの露天風呂で館内湯めぐりを満喫する宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9290%2F9290.html",
              story: "利根川の渓流沿い約一万坪もの広大な日本庭園を有し、2026年8月に全面リニューアルオープンを果たした水上屈指の大型温泉リゾート「大江戸温泉物語Premium 松乃井」。敷地内に4本の自家源泉を保有し、生きた源泉を掛け流す「蛍あかりの湯」や「月あかりの湯」、庭園の木々と調和する露天風呂など、趣の異なる多彩な湯船で贅沢な館内湯めぐりを楽しめます。オールインクルーシブで楽しめるラウンジや梅酒バーなど、滞在そのものを楽しむサービスが充実しています。",
              roomTip: "利根川や日本庭園を望むリニューアル客室または和洋室。初冬の冷気に包まれた渓谷美を窓から眺め、ゆったりと足を伸ばして寛げる広々空間。",
              gourmetTip: "料理人が目の前で調理するライブ感あふれるプレミアムビュッフェ。上州牛のローストビーフ、握り寿司、揚げたて天ぷら、みなかみ名物の舞茸料理など、多彩な和洋中グルメを好きなだけ満喫。",
              highlights: [
                "2026年全面リニューアルのプレミアムリゾート＆4本の自家源泉を誇る館内多彩な湯めぐり",
                "オールインクルーシブで味わう贅沢ラウンジ＆梅酒バーと広大な日本庭園",
                "上州牛ローストビーフや握り寿司・みなかみ舞茸料理を堪能するプレミアムビュッフェ"
              ]
            },
            {
              id: 2,
              name: "谷川温泉　別邸　仙寿庵（せんじゅあん）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/28063/28063.jpg",
              rating: 4.50,
              reviews: 280,
              price: "¥53,400〜",
              access: "新幹線 上毛高原駅→バスで２５分/上越線 水上駅より車で８分／関越自動車道 水上Ｉ.Ｃより１０分",
              special: "谷川岳の麓に佇む全客室源泉かけ流し露天風呂付きの近代和風旅館。全室Wi-Fi対応可！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28063%2F28063.html",
              story: "雄大な谷川岳の麓、清流・谷川のせせらぎが響く自然林の中に佇み、世界的権威あるホテル・レストラン会員組織「ルレ・エ・シャトー」に加盟する日本最高峰の近代和風旅館「谷川温泉 別邸 仙寿庵（せんじゅあん）」。全18室すべてに谷川岳を望む源泉掛け流しの専用露天風呂が完備され、曲面ガラスが美しい現代建築と伝統の数寄屋造りが見事に調和。初冬の凛とした空気の中、谷川連峰の初冠雪を眺めながら入るプライベート露天風呂はまさに一生ものの贅沢です。",
              roomTip: "谷川岳を真正面に望む客室露天風呂付き和洋室。テラスのデイベッドで冬の山風を感じながら、いつでも好きな時に贅沢な源泉浴を満喫。",
              gourmetTip: "研ぎ澄まされた感性が光る極上山里懐石。最高級上州牛のフィレステーキや炭火焼き、利根川源流の清流イワナ、採れたての地元舞茸や旬の根菜を取り入れた芸術的な料理の数々。",
              highlights: [
                "世界基準ルレ・エ・シャトー加盟の最高峰旅館＆全室源泉掛け流し客室露天風呂",
                "谷川岳の初冠雪パノラマを一望する曲面ガラス回廊と凛とした静謐の美空間",
                "最高級上州牛フィレステーキと利根川イワナ・特選舞茸が彩る至高の山里懐石"
              ]
            },
            {
              id: 3,
              name: "宝川温泉汪泉閣",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/67818/67818.jpg",
              rating: 4.27,
              reviews: 1124,
              price: "¥15,400〜",
              access: "ＪＲ上越線　水上駅から宝川温泉行きバス乗車３５分　宝川温泉下車（終点）徒歩０分",
              special: "毎分1,800Lもの源泉を贅沢にも掛流し♪天下一の大露天風呂(混浴＋女性専用)を誇る一軒宿。全室禁煙",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67818%2F67818.html",
              story: "宝川の渓流沿いに広がり、延べ約470畳（約790平米）という圧倒的なスケールを誇る4つの大露天風呂（混浴3・女性専用1）で世界的にその名を知られる秘湯の一軒宿「宝川温泉 汪泉閣」。毎分1,800リットルという驚異的な湧出量を誇り、加水・加温を一切行わない本物の天然温泉が巨石を配した野趣あふれる湯船にこんこんと注がれます。11月下旬から12月には、川沿いの木々が雪化粧を始め、川のせせらぎと白銀の雪景色に包まれる世界屈指の雪見露天風呂を体感できます。",
              roomTip: "宝川の清流を眼下に望む本館または東館の和室。昭和初期の木造建築の温もりが残り、川のせせらぎを子守唄に静かな夜を過ごせます。",
              gourmetTip: "上州の山の幸と川の恵みを詰め込んだ山里料理。地元特産の舞茸やキノコをたっぷり使った名物「山菜きのこ鍋」、岩魚の塩焼き、上州麦豚の陶板焼きなど、冬の寒さを芯から温める素朴で滋味豊かな味わい。",
              highlights: [
                "延べ約470畳の天下一の大露天風呂＆毎分1,800Lの天然温泉掛け流し秘湯一軒宿",
                "映画ロケ地としても世界的人気の巨石露天風呂＆清流宝川の初冬雪景色",
                "名物山菜きのこ鍋とイワナ塩焼き・上州麦豚を味わう心温まる郷土料理膳"
              ]
            },
            {
              id: 4,
              name: "水上温泉　あらたし　みなかみ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/184453/184453.jpg",
              rating: 4.42,
              reviews: 615,
              price: "¥13,100〜",
              access: "JR上越線水上駅から徒歩15分",
              special: "2022年11月開業！清流利根川を眺める全室露天風呂付ホテル",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184453%2F184453.html",
              story: "利根川の清流のほとりに2022年11月に誕生した、全室に温泉露天風呂を備えたスタイリッシュなモダン温泉ホテル「水上温泉 あらたし みなかみ」。川のせせらぎを間近に感じる開放的な客室露天風呂からは、初冬の澄んだ水面と対岸の山々の稜線を見渡せます。夕食には温泉旅館の枠を超えた本格的なフレンチのフルコースが提供され、感度の高い大人のトラベラーから絶大な支持を集めています。",
              roomTip: "利根川に面したリバービューテラス露天風呂付きツイン。洗練された北欧モダンの家具に囲まれ、川のせせらぎを聴きながら入る露天風呂は至福の心地よさ。",
              gourmetTip: "群馬の厳選食材を華やかに仕立てたモダンフレンチコース。上州牛の低温ロースト、地元野菜のテリーヌ、みなかみの清流イワナのコンフィなど、ソムリエ厳選のワインとのペアリングも秀逸。",
              highlights: [
                "全室利根川を望む客室露天風呂付きモダンホテル＆五感で楽しむ本格フレンチコース",
                "2022年開業の洗練された北欧モダンデザイン＆川のせせらぎに包まれるプライベート",
                "上州牛の低温ローストや地元旬野菜のテリーヌが並ぶ創作モダンフレンチ"
              ]
            },
            {
              id: 5,
              name: "水上温泉　みなかみホテルジュラク",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5766/5766.jpg",
              rating: 4.69,
              reviews: 4042,
              price: "¥18,000〜",
              access: "【お車】水上ＩＣより約10分【電車】水上駅から徒歩10分・無料送迎バス2分。水上駅ご到着時お電話下さい",
              special: "見て楽しい♪食べて美味しい♪シェフ達の作りたて豪華グルメ味わえる！ブッフェダイニング",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5766%2F5766.html",
              story: "利根川の渓谷美を眼下に望む高台に建ち、天狗の湯・翠渓の湯・せせらぎの湯の3つの大浴場・露天風呂で館内湯めぐりを満喫できる水上の名門旅館「水上温泉 みなかみホテルジュラク」。利根川を見下ろす渓谷露天風呂からは、初冬の澄み切った空気と山肌に積もりゆく初雪の絶景をパノラマで一望できます。評判の「水上ダイニング 穀（KOKU）」では、目の前でシェフが腕を振るう豪華ビュッフェが楽しめます。",
              roomTip: "利根川渓谷を一望するみずのねフロア和洋室。ワイドな窓から渓谷と谷川連峰の山並みを見晴らす明るく上質なプライベート空間。",
              gourmetTip: "食のライブステージ「ダイニング穀」の豪華ディナービュッフェ。ローストビーフの切り分け、石窯で焼き上げる本格ピッツァ、揚げたて天ぷら、地元みなかみ舞茸の炊き込みご飯など、出来立て熱々の美食が食べ放題。",
              highlights: [
                "利根川渓谷を一望する3つの大浴場・絶景露天風呂＆ライブ感あふれる豪華ビュッフェ",
                "谷川連峰の山並みを見晴らすみずのね客室＆夜の渓谷ライトアップの幻想美",
                "石窯ピッツァ・出来立てローストビーフ・舞茸ご飯が並ぶライブダイニング穀"
              ]
            }
  ];

  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-teal-950 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-slate-950">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85"
          alt="谷川岳初冠雪と利根川渓谷の雪見露天風呂・みなかみ温泉郷の大自然"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-950/90 text-teal-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-teal-800/50">
            <Mountain className="w-4 h-4 text-teal-300" />
            <span>11月・12月限定 谷川岳初冠雪と利根川渓谷雪見露天・極上上州牛旅</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月みなかみ温泉郷の冬名湯と谷川岳雪見風呂】<br className="hidden sm:inline" />
            利根川渓谷露天と谷川岳初冠雪・極上上州牛＆旬きのこ会席の宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            初冬の静寂に包まれる谷川連峰の雄大な初冠雪。利根川源流の渓谷露天風呂や天下一の宝川大露天風呂に浸かり、冷えた体を芯から解き放ち、最高峰ブランド肉「上州牛」すき焼きと地元特産の肉厚舞茸きのこ会席を堪能する大人の冬旅。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-teal-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-teal-400" /> 群馬県利根郡みなかみ町（水上IC車5〜20分）</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Minakami Onsen Gorge Winter Serenity</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                谷川連峰の懐に抱かれた利根川源流、雪景色と渓谷美が織り成す名湯郷
              </h2>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            東京から上越新幹線でわずか約66分、関越自動車道でも約1時間40分。首都圏から最も近い本格的な雪国温泉リゾートとして親しまれる群馬県「みなかみ温泉郷」。谷川岳の雄大な山麓に広がるこの地は、古くから利根川の渓谷沿いに多くの文人墨客や登山家たちを温かく迎え入れてきました。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            11月下旬から12月にかけて、標高1,977mの谷川連峰は真っ白な雪化粧を纏い始め、温泉街の木々にも初雪が舞い降ります。利根川の清らかなせせらぎや滝の音を間近に聴きながら入る雪見露天風呂は、冬のみなかみならではの贅沢。弱アルカリ性の柔らかな硫酸塩泉・単純温泉は、冷えた体を芯からじんわりと温め、湯上がりの肌をしっとりと滑らかに整えてくれます。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            さらにみなかみは、食の魅力も圧巻。赤身と霜降りのバランスが絶妙な最高級ブランド黒毛和牛「上州牛」のすき焼きやステーキ、みなかみ特産の香り高く肉厚な「舞茸」をふんだんに使った土鍋ご飯や天ぷら、利根川清流のイワナなど、冬の山里の恵みが勢揃い。雪見風呂と滋味豊かな美食で、心洗われる贅沢な休日を約束してくれます。
          </p>
          
          <div className="bg-teal-50/70 rounded-2xl p-5 border border-teal-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-bold text-teal-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-teal-700" /> 11月・12月の旅のハイライト
              </span>
              <p className="text-xs sm:text-sm text-teal-900 font-medium">
                谷川岳初冠雪・利根川渓谷雪見露天風呂・天下一宝川大露天風呂＆極上上州牛すき焼き
              </p>
            </div>
            <a 
              href="#hotels"
              className="px-5 py-2.5 rounded-xl bg-teal-900 hover:bg-teal-800 text-white text-xs sm:text-sm font-bold shadow-md transition shrink-0"
            >
              厳選名宿5選を見る
            </a>
          </div>
        </section>

        {/* Section: Spring Characteristics & 18 Hot Springs */}
        <section id="spring-characteristics" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
            <div className="p-2 rounded-xl bg-teal-50 text-teal-800">
              <ThermometerSun className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Natural Spring Heritage</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                個性豊かな「みなかみ18湯」の泉質力と雪見露天風呂の至福
              </h2>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            みなかみ温泉郷は、利根川本流や支流の谷沿いに広がる18もの温泉地（水上、谷川、宝川、湯の小屋、法師、猿ヶ京など）の総称です。水上温泉街の泉質は、主にカルシウム・ナトリウム-硫酸塩・塩化物泉。無色透明でさらりとした肌触りながら、硫酸塩成分が肌をベールのように引き締め、塩分が熱を逃さないため「傷の湯」「温まりの湯」として高い評価を得ています。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            また、谷川岳の登山口近くに湧く谷川温泉は、豊富なメタケイ酸を含む極めて滑らかな単純温泉で、静寂の中で雪景色を愛でる隠れ家宿に最適。さらに奥利根の宝川温泉は毎分1,800Lもの単純温泉が自噴し、加水・加温一切なしのダイナミックな掛け流しが楽しめます。標高差と谷筋によって異なる個性豊かな湯を巡れば、冬の寒さに固まった体が芯からほぐれていきます。
          </p>
        </section>

        {/* Section: Takaragawa Giant Open-Air Bath Special */}
        <section id="takaragawa-guide" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
            <div className="p-2 rounded-xl bg-teal-50 text-teal-800">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">World Renowned Hot Spring</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                天下一の広さ！宝川温泉『汪泉閣』延べ470畳の巨石雪見大露天風呂
              </h2>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            世界的な旅行ガイドブックでも「日本のベスト温泉」として絶賛され、国内外から多くの旅行者が訪れる「宝川温泉 汪泉閣」。宝川の渓流沿いに広がる「摩訶の湯（約120畳）」「般若の湯（約90畳）」「子宝の湯（約200畳）」、そして女性専用の「摩耶の湯（約100畳）」という4つの露天風呂の広さは、延べ約470畳（約790平米）という圧倒的なスケールを誇ります。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            清流の岩肌を洗う激しい水音、頭上を覆うブナやカエデの原生林、そして11月下旬から降り積もる白銀の雪。混浴露天風呂では専用の湯浴み着着用が義務付けられており、女性やファミリーでも気兼ねなく広大な雪見風呂の開放感を満喫できます。自然の巨石をそのまま組み上げた野趣溢れる湯船で、大自然の懐に抱かれる唯一無二の感動を味わえます。
          </p>
        </section>

        {/* Section 2: Highlights of Nov-Dec */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
            <div className="p-2 rounded-xl bg-teal-50 text-teal-800">
              <Trees className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Seasonal Appeal</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月のみなかみ温泉郷が旅人を魅了する3つの理由
              </h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/70 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-bold text-slate-900 text-base">谷川岳初冠雪と渓谷の雪景色</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                11月下旬から山頂が白銀に染まる谷川連峰。露天風呂から冠雪の山肌や巨岩を洗う利根川の渓流を眺める時間は、水と雪が織り成す至極のネイチャーシアター。
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/70 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-bold text-slate-900 text-base">世界屈指のスケール誇る雪見露天</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                延べ470畳の広さを誇る宝川温泉の大露天風呂や、世界基準のルレ・エ・シャトー加盟宿の全室客室露天風呂など、日本トップクラスの圧倒的な名湯体験が揃います。
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/70 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-bold text-slate-900 text-base">極上上州牛と肉厚舞茸の山里美食</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                とろけるような上州牛のすき焼きや陶板焼きに、地元特産の肉厚で香り高い舞茸料理。冬の冷えた体に温かい出汁ときのこの滋味が染み渡る最高の食体験。
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Hotel Cards */}
        <section id="hotels" className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Featured Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              みなかみ温泉郷 11月・12月におすすめの名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              楽天トラベルの最新公式APIデータをもとに、利根川渓谷露天・源泉掛け流し・極上上州牛会席を誇る名宿を厳選。
            </p>
          </div>

          <div className="space-y-8">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-200/80 flex flex-col md:flex-row"
              >
                <div className="relative md:w-2/5 h-64 md:h-auto min-h-[260px] bg-slate-100">
                  <Image
                    src={hotel.img}
                    alt={hotel.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-slate-950/80 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
                    第{hotel.id}選
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold drop-shadow">
                    <span className="flex items-center gap-1 bg-amber-500/90 text-slate-950 px-2.5 py-1 rounded-md">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      {hotel.rating} ({hotel.reviews}件)
                    </span>
                    <span className="bg-slate-900/80 px-2.5 py-1 rounded-md text-amber-200">
                      目安 {hotel.price}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 md:w-3/5 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-teal-800 transition">
                        <a href={hotel.url} target="_blank" rel="noopener noreferrer">
                          {hotel.name}
                        </a>
                      </h3>
                      <p className="text-xs text-slate-500 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                        <span>{hotel.access}</span>
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {hotel.story}
                    </p>

                    <div className="space-y-2 pt-1 border-t border-slate-100 text-xs">
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-teal-900 bg-teal-50 px-2 py-0.5 rounded shrink-0">客室の魅力</span>
                        <span className="text-slate-600">{hotel.roomTip}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded shrink-0">冬の極上食</span>
                        <span className="text-slate-600">{hotel.gourmetTip}</span>
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-2">
                      {hotel.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-700 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                      楽天トラベル公認リンク・最新宿泊プラン
                    </span>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-900 hover:bg-teal-800 text-white text-xs sm:text-sm font-bold shadow transition group w-full sm:w-auto justify-center"
                    >
                      <span>空室・宿泊プランを確認</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Gourmet Guide */}
        <section id="gourmet" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
            <div className="p-2 rounded-xl bg-teal-50 text-teal-800">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Minakami Winter Feast</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                4. みなかみの初冬グルメ：最高級上州牛・採れたて舞茸・清流イワナ
              </h2>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            群馬県が誇る最高峰の銘柄牛「上州牛」。澄んだ空気と清らかな水で丹精込めて育てられた黒毛和牛は、赤身の豊かな風味と細やかなサシが特徴で、すき焼きの割り下を吸ってふわりととろける食感はまさに格別です。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            さらにみなかみ町は日本屈指の「舞茸（まいたけ）」の産地。天然物にも劣らない強い香りとシャキシャキとした歯ごたえを持つ肉厚な舞茸は、熱々の天ぷらや土鍋ご飯、地元味噌を使ったきのこ鍋でその実力を遺憾なく発揮します。利根川の清流で育つイワナやヤマメの炭火塩焼き、地元酒蔵「土田酒造」の燗酒とともに味わえば、雪国の冬の夜が温かな至福へと変わります。
          </p>
        </section>

        {/* Section 5: Model Course */}
        <section id="itinerary" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
            <div className="p-2 rounded-xl bg-teal-50 text-teal-800">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Recommended Winter Course</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                5. 1泊2日 みなかみ温泉郷〜谷川岳ロープウェイ・利根川雪見露天 王道モデルコース
              </h2>
            </div>
          </div>
          <div className="space-y-6">
            <div className="border-l-2 border-teal-800 pl-4 sm:pl-6 space-y-2">
              <span className="text-xs font-extrabold text-teal-800 uppercase tracking-wider">【1日目】東京出発〜谷川岳ロープウェイ絶景＆利根川渓谷雪見露天</span>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                10:30 上越新幹線上毛高原駅または関越道水上IC到着 → 谷川岳ロープウェイへ
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ロープウェイで天神平へ上がり、初冠雪した谷川岳の圧倒的な岩壁パノラマを鑑賞。
              </p>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base pt-2">
                13:00 水上温泉街で名物「水上きのこそば・舞茸天ぷら」ランチ
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                肉厚の舞茸天ぷらと香り高い手打ち蕎麦で体を温める。
              </p>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base pt-2">
                15:00 宿へチェックイン → 利根川渓谷を望む露天風呂で雪見湯浴み
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                川のせせらぎと冷たい冬風を感じながら、体の芯までじっくり温まる至福のひととき。
              </p>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base pt-2">
                19:00 極上上州牛すき焼き＆旬の山里懐石ディナー
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                とろける上州牛と地元特産の舞茸、岩魚の塩焼きを群馬の地酒とともに堪能。
              </p>
            </div>

            <div className="border-l-2 border-slate-300 pl-4 sm:pl-6 space-y-2 pt-2">
              <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">【2日目】朝の渓流露天風呂〜諏訪峡遊歩道＆たくみの里散策</span>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                07:30 朝陽に輝く渓谷露天風呂 → 郷土朝食
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                朝霧が立ち込める利根川の渓流を眺めながらの朝風呂でリフレッシュ。
              </p>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base pt-2">
                09:30 名勝「諏訪峡」笹笛橋からの奇岩と雪景色鑑賞
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                利根川沿いに整備された遊歩道から、巨岩と清流の冬景色を散策。
              </p>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base pt-2">
                11:30 「道の駅 たくみの里」で伝統工芸体験＆地元スイーツ
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                里山の古民家が並ぶ街並みで和紙漉きや陶芸を体験し、飲むヨーグルトやリンゴを購入。
              </p>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base pt-2">
                14:30 水上ICまたは上毛高原駅より帰路へ
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                生どら焼きや温泉まんじゅうをお土産に購入し、快適アクセスで東京へ帰路。
              </p>
            </div>
          </div>
        </section>

        {/* Section: Climate, Clothing & Snow Road Preparation */}
        <section id="climate-transport" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
            <div className="p-2 rounded-xl bg-teal-50 text-teal-800">
              <Footprints className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Snowy Road Preparation</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の気候・おすすめの服装・雪道運転対策
              </h2>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            みなかみ町は三国山脈を境に新潟県と接しているため、11月下旬以降は日本海からの雪雲が流れ込みやすく、本格的な降雪・積雪に見舞われます。朝晩の気温は氷点下まで下がり、温泉街の坂道や橋の上、宝川方面への山道は凍結します。散策時は防水加工された滑り止め付きのスノーブーツ、防寒ダウンジャケット、手袋、マフラー、ニット帽が必須アイテムです。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            お車で訪れる場合は、11月中旬以降は必ず全車スタッドレスタイヤを装着してください。関越自動車道でもチェーン規制や冬用タイヤ規制が敷かれることが頻繁にあります。雪道運転に不慣れな方や不安な方は、JR上越新幹線（上毛高原駅）の利用が最も確実で安全。東京駅からわずか約66分で到着し、駅からは各旅館の送迎バスや路線バスが運行されているため、冬でも手軽に白銀の雪見温泉リゾートを満喫できます。
          </p>
        </section>

        {/* Section 6: FAQ */}
        <section id="faq" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
            <div className="p-2 rounded-xl bg-teal-50 text-teal-800">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Traveler's Q&A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                よくある質問（FAQ）と初冬のみなかみ温泉郷旅行アドバイス
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-teal-800 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Internal Links */}
        <section className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-teal-300 uppercase tracking-widest">Related Gunma & Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい群馬・関東の名湯＆雪景色特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              11月・12月ならではの雪見露天風呂、温泉街の石段情緒、旬の上州グルメを味わい尽くす全国の名宿ガイドを多数公開中。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-gunma-kusatsu-yukimi-onsen-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">群馬・草津温泉</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">草津温泉 湯畑ライトアップと日本三名泉の雪見風呂宿</h3>
            </Link>
            <Link 
              href="/winter-gunma-ikaho-stone-steps-joshu-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">群馬・伊香保温泉</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">伊香保温泉 365段の石段街と黄金の湯・上州牛会席の宿</h3>
            </Link>
            <Link 
              href="/winter-gunma-manza-snow-milky-hotspring-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">群馬・万座温泉</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">万座温泉 標高1,800mの白濁硫黄泉と粉雪パノラマ露天の宿</h3>
            </Link>
            <Link 
              href="/winter-tochigi-nasu-onsen-shikanoyu-snow-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">栃木・那須温泉</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">那須温泉 鹿の湯の白濁木造風呂と那須牛ステーキの宿</h3>
            </Link>
            <Link 
              href="/winter-niigata-echigo-yuzawa-snow-sake-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">新潟・越後湯沢</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">越後湯沢温泉 川端康成雪国の世界と魚沼コシヒカリ・日本酒の宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">全国の厳選温泉・宿特集まとめを見る</h3>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
