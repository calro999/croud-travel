import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves, Wine, ThermometerSun, Footprints, Mountain
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月石川・加賀片山津温泉の柴山潟と霊峰白山初冠雪】11月解禁加能ガニ・香箱ガニ＆塩化物強塩泉ポカポカ温まりの宿5選",
  description: "11月から12月にかけて石川県加賀市の片山津温泉は、柴山潟の穏やかな水面に初冠雪で純白に輝く霊峰白山連峰が鏡のように映り込む、北陸屈指の絶景パノラマが広がります。承応2年（1653年）発見、湖底から湧き出る塩化物強塩泉は「熱の湯」とも呼ばれ、湯冷めしにくく冬の身体を芯まで温める名湯。11月上旬に解禁される石川県の誇る青タグ付きブランドズワイガニ「加能ガニ」、内子と外子がぎっしり詰まった冬の至宝「香箱ガニ（こうばこがに）」、脂の乗った寒ブリや能登牛を堪能する湖畔の厳選宿5選を徹底解説。",
  keywords: '片山津温泉 宿泊, 柴山潟 白山 絶景 11月 12月, 佳水郷, 季がさね, かのや光楽苑, 矢田屋松濤園, 湖畔の宿森本, 加能ガニ 石川, 香箱ガニ 宿, 片山津温泉 塩化物泉',
  alternates: {
    canonical: 'https://croud-travel.com/winter-ishikawa-katayamazu-onsen-hakusan-kano-crab-stay'
  },
  openGraph: {
    title: "【11・12月石川・加賀片山津温泉の柴山潟と霊峰白山初冠雪】11月解禁加能ガニ・香箱ガニ＆塩化物強塩泉ポカポカ温まりの宿5選",
    description: "11月から12月にかけて石川県加賀市の片山津温泉は、柴山潟の穏やかな水面に初冠雪で純白に輝く霊峰白山連峰が鏡のように映り込む、北陸屈指の絶景パノラマが広がります。承応2年（1653年）発見、湖底から湧き出る塩化物強塩泉は「熱の湯」とも呼ばれ、湯冷めしにくく冬の身体を芯まで温める名湯。11月上旬に解禁される石川県の誇る青タグ付きブランドズワイガニ「加能ガニ」、内子と外子がぎっしり詰まった冬の至宝「香箱ガニ（こうばこがに）」、脂の乗った寒ブリや能登牛を堪能する湖畔の厳選宿5選を徹底解説。",
    url: 'https://croud-travel.com/winter-ishikawa-katayamazu-onsen-hakusan-kano-crab-stay',
    siteName: 'クラドトラベル (Croud Travel)',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬の柴山潟と霊峰白山連峰の雪景色'
      }
    ]
  }
};

const faqList = [
  {
    "q": "石川県の「加能ガニ」と「香箱ガニ」の解禁日と特徴は何ですか？",
    "a": "石川県沖のズワイガニ漁は、毎年11月6日に一斉に解禁されます。「加能ガニ（かのうがに）」は石川県内の港（橋立港、金沢港など）に水揚げされる雄のズワイガニで、品質基準を満たしたものには水色の「青タグ」が付けられます。極上の甘みとギッシリ詰まった繊維、濃厚なカニ味噌が魅力です。一方、「香箱ガニ（こうばこがに）」は雌のズワイガニで、資源保護のため漁期が11月6日から12月29日頃までのわずか2ヶ月弱に限られます。甲羅の内側にある朱色の未受精卵「内子（うちこ）」の芳醇なコクと、腹に抱えた「外子（そとこ）」のプチプチとした食感は冬の北陸でしか味わえない至宝の味覚です。"
  },
  {
    "q": "片山津温泉の泉質の特徴と「柴山潟」の湖底から湧く温泉の効能は？",
    "a": "片山津温泉の源泉は、柴山潟の湖底から自噴している極めて珍しい温泉です。泉質は「ナトリウム・カルシウム-塩化物泉（高張性中性高温泉）」で、源泉温度は約70℃と高温。海水の成分に極めて近い高濃度の塩分を含んでいるため、入浴すると皮膚表面に塩分の皮膜が作られ、毛穴を塞いで発汗後の気化熱による体温低下を強力に防ぎます。そのため「熱の湯」「温まりの湯」として古くから親しまれ、冬の冷え性、関節痛、神経痛、疲労回復に絶大な効果を発揮します。"
  },
  {
    "q": "11月・12月の加賀片山津の天候・雪の状況とアクセス注意点は？",
    "a": "北陸地方の初冬は、11月下旬以降「雪起こし（ゆきおこし）」と呼ばれる雷鳴とともに冷たい時雨やあられが降り始めます。11月中は平野部での積雪は少ないですが、12月中旬以降は平野部でも数十センチの降雪や凍結路面が発生します。車の場合は北陸自動車道・片山津ICから約5分と極めて近いですが、11月下旬以降はスタッドレスタイヤ必須です。2024年春に開業した北陸新幹線の「加賀温泉駅」を利用すれば、東京から乗り換えなし約2時間45分、大阪から特急サンダーバードと新幹線乗り換えで約2時間15分でアクセスでき、各宿の無料送迎バスも利用できるため電車移動が非常に快適です。"
  },
  {
    "q": "片山津温泉のシンボル「柴山潟」から見える白山連峰の絶景について教えてください。",
    "a": "柴山潟は周囲約7kmの汽水湖で、日に7回湖面の色を変えると言われる神秘的な湖です。初冬の晴れ間、湖面の向こうにそびえ立つ標高2,702mの霊峰「白山（日本百名山・日本三名山）」が初冠雪で真っ白に輝き、柴山潟の水面に鏡のように逆さ白山を映し出す光景は息をのむ美しさです。また、湖畔には世界的な建築家・谷口吉生氏が設計した全面ガラス張りのモダンな公共温泉施設「片山津温泉 総湯」があり、水鏡の湯と森の湯を体験できます。"
  },
  {
    "q": "冬の片山津温泉で味わえる、カニ以外の北陸ご当地グルメは何ですか？",
    "a": "冬の北陸はカニ以外にも味覚が満載です。まず、日本海で荒波に揉まれて丸々と太った「寒ブリ」。刺身はもちろん、サッと出汁にくぐらせて余分な脂を落として旨味を凝縮させた「ブリしゃぶ」は絶品です。また、石川県が誇る黒毛和牛「能登牛」のステーキ、加賀の冬の伝統鴨猟（坂網猟）にちなんだ鴨肉とすだれ麩の「治部煮」、加賀丸いもや源助大根などの加賀伝統野菜、石川の地酒（菊姫、天狗舞、手取川など）の新酒しぼりたてが楽しめます。"
  }
];

export default function KatayamazuOnsenWinterFeature() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-ishikawa-katayamazu-onsen-hakusan-kano-crab-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/winter-ishikawa-katayamazu-onsen-hakusan-kano-crab-stay"
        },
        "headline": "【11・12月石川・加賀片山津温泉の柴山潟と霊峰白山初冠雪】11月解禁加能ガニ・香箱ガニ＆塩化物強塩泉ポカポカ温まりの宿5選",
        "description": "11月から12月にかけて石川県加賀市の片山津温泉は、柴山潟の穏やかな水面に初冠雪で純白に輝く霊峰白山連峰が鏡のように映り込む、北陸屈指の絶景パノラマが広がります。承応2年（1653年）発見、湖底から湧き出る塩化物強塩泉は「熱の湯」とも呼ばれ、湯冷めしにくく冬の身体を芯まで温める名湯。11月上旬に解禁される石川県の誇る青タグ付きブランドズワイガニ「加能ガニ」、内子と外子がぎっしり詰まった冬の至宝「香箱ガニ（こうばこがに）」、脂の乗った寒ブリや能登牛を堪能する湖畔の厳選宿5選を徹底解説。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "2026-09-28T05:00:00+09:00",
        "dateModified": "2026-09-28T05:00:00+09:00",
        "publisher": {
          "@type": "Organization",
          "name": "Croud Travel",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.com/logo.png"
          }
        },
        "author": {
          "@type": "Organization",
          "name": "Croud Travel 北陸・温泉美食取材班"
        },
        "inLanguage": "ja"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.com/winter-ishikawa-katayamazu-onsen-hakusan-kano-crab-stay#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "ホーム",
            "item": "https://croud-travel.com/"
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
            "name": "石川・加賀片山津温泉 柴山潟白山絶景と加能ガニの宿",
            "item": "https://croud-travel.com/winter-ishikawa-katayamazu-onsen-hakusan-kano-crab-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/winter-ishikawa-katayamazu-onsen-hakusan-kano-crab-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "石川県の「加能ガニ」と「香箱ガニ」の解禁日と特徴は何ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "石川県沖のズワイガニ漁は、毎年11月6日に一斉に解禁されます。「加能ガニ（かのうがに）」は石川県内の港（橋立港、金沢港など）に水揚げされる雄のズワイガニで、品質基準を満たしたものには水色の「青タグ」が付けられます。極上の甘みとギッシリ詰まった繊維、濃厚なカニ味噌が魅力です。一方、「香箱ガニ（こうばこがに）」は雌のズワイガニで、資源保護のため漁期が11月6日から12月29日頃までのわずか2ヶ月弱に限られます。甲羅の内側にある朱色の未受精卵「内子（うちこ）」の芳醇なコクと、腹に抱えた「外子（そとこ）」のプチプチとした食感は冬の北陸でしか味わえない至宝の味覚です。"
            }
          },
          {
            "@type": "Question",
            "name": "片山津温泉の泉質の特徴と「柴山潟」の湖底から湧く温泉の効能は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "片山津温泉の源泉は、柴山潟の湖底から自噴している極めて珍しい温泉です。泉質は「ナトリウム・カルシウム-塩化物泉（高張性中性高温泉）」で、源泉温度は約70℃と高温。海水の成分に極めて近い高濃度の塩分を含んでいるため、入浴すると皮膚表面に塩分の皮膜が作られ、毛穴を塞いで発汗後の気化熱による体温低下を強力に防ぎます。そのため「熱の湯」「温まりの湯」として古くから親しまれ、冬の冷え性、関節痛、神経痛、疲労回復に絶大な効果を発揮します。"
            }
          },
          {
            "@type": "Question",
            "name": "11月・12月の加賀片山津の天候・雪の状況とアクセス注意点は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "北陸地方の初冬は、11月下旬以降「雪起こし（ゆきおこし）」と呼ばれる雷鳴とともに冷たい時雨やあられが降り始めます。11月中は平野部での積雪は少ないですが、12月中旬以降は平野部でも数十センチの降雪や凍結路面が発生します。車の場合は北陸自動車道・片山津ICから約5分と極めて近いですが、11月下旬以降はスタッドレスタイヤ必須です。2024年春に開業した北陸新幹線の「加賀温泉駅」を利用すれば、東京から乗り換えなし約2時間45分、大阪から特急サンダーバードと新幹線乗り換えで約2時間15分でアクセスでき、各宿の無料送迎バスも利用できるため電車移動が非常に快適です。"
            }
          },
          {
            "@type": "Question",
            "name": "片山津温泉のシンボル「柴山潟」から見える白山連峰の絶景について教えてください。",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "柴山潟は周囲約7kmの汽水湖で、日に7回湖面の色を変えると言われる神秘的な湖です。初冬の晴れ間、湖面の向こうにそびえ立つ標高2,702mの霊峰「白山（日本百名山・日本三名山）」が初冠雪で真っ白に輝き、柴山潟の水面に鏡のように逆さ白山を映し出す光景は息をのむ美しさです。また、湖畔には世界的な建築家・谷口吉生氏が設計した全面ガラス張りのモダンな公共温泉施設「片山津温泉 総湯」があり、水鏡の湯と森の湯を体験できます。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の片山津温泉で味わえる、カニ以外の北陸ご当地グルメは何ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "冬の北陸はカニ以外にも味覚が満載です。まず、日本海で荒波に揉まれて丸々と太った「寒ブリ」。刺身はもちろん、サッと出汁にくぐらせて余分な脂を落として旨味を凝縮させた「ブリしゃぶ」は絶品です。また、石川県が誇る黒毛和牛「能登牛」のステーキ、加賀の冬の伝統鴨猟（坂網猟）にちなんだ鴨肉とすだれ麩の「治部煮」、加賀丸いもや源助大根などの加賀伝統野菜、石川の地酒（菊姫、天狗舞、手取川など）の新酒しぼりたてが楽しめます。"
            }
          }
        ]
      }
    ]
  };

  const hotels = [
            {
              id: 1,
              name: "加賀片山津温泉　佳水郷（アパホテルズ＆リゾーツ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/28355/28355.jpg",
              rating: 4.42,
              reviews: 1569,
              price: "¥7,920〜",
              access: "【電車】JR加賀温泉駅から車で10分（無料送迎有、要予約）【車】片山津ICから5分【飛行機】小松空港から車で20分",
              special: "全室絶景湖畔を望む割烹温泉旅館。霊峰白山と柴山潟を一望できる大浴殿、サウナ、旬の逸品会席が好評！！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28355%2F28355.html",
              story: "柴山潟の湖畔に堂々と佇み、全客室や大浴場から柴山潟と遠く初冠雪の霊峰白山連峰の雄大なパノラマを一望できる加賀屈指のハイグレード宿「加賀片山津温泉 佳水郷（かすいきょう）」。全面ガラス張りの展望大浴場や露天風呂に浸かれば、まるで湖面の上に浮かんでいるかのような神秘的な一体感を味わえます。ナトリウム・カルシウム塩化物泉の名湯は、湯上がり後もポカポカ感が長時間持続。11月解禁の加能ガニや寒ブリ、能登牛を贅沢に盛り込んだ北陸の冬会席が、特別な日の宿泊を華やかに彩ります。",
              roomTip: "柴山潟・白山連峰眺望指定の露天風呂付き和洋室。朝夕に移り変わる柴山潟の七色の湖面と雪化粧した白山の稜線を、お部屋の湯船から独り占めできます。",
              gourmetTip: "「活加能ガニづくし会席＆能登牛ステーキ」。青タグ付き加能ガニの花咲くお造り、香ばしい焼きガニ、甲羅味噌の甲羅焼き、極上能登牛の陶板焼きが並ぶ至高の膳。",
              highlights: [
                "柴山潟と霊峰白山連峰を一望する全面ガラス張り展望大浴場＆水上楼閣のような絶景",
                "青タグ付き活加能ガニの刺身・焼きガニ＆最高峰能登牛ステーキの贅沢冬会席",
                "北陸新幹線加賀温泉駅から無料送迎バス約10分の好アクセス＆アパグループ最高峰ホテル"
              ]
            },
            {
              id: 2,
              name: "片山津温泉　季がさね",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/76899/76899.jpg",
              rating: 4.20,
              reviews: 1083,
              price: "¥11,000〜",
              access: "加賀温泉駅より車で10分（送迎1５時から17時40分 /要予約）北陸道片山津I.Cより７分小松空港より車で25分",
              special: "【露天風呂付客室と料理自慢の静かな宿】人気の月替わり懐石と充実の温浴施設。和のリゾート感覚でどうぞ。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F76899%2F76899.html",
              story: "「日本の宿のぬくもりと、現代的な快適さの調和」をコンセプトに、柴山潟のほとりで優雅な時間を紡ぐ大人の宿「片山津温泉 季がさね（ときがさね）」。館内は素足で歩ける清潔感あふれる空間が広がり、湖を望む開放的なテラスやライブラリーラウンジが心地よい寛ぎをもたらします。源泉掛け流しの露天風呂からは、初冬の湖面を飛び交う水鳥の姿や、夕暮れに茜色に染まる白山の秀峰を眺望。加賀の伝統工芸である九谷焼や山中漆器に美しく盛り付けられた旬の懐石料理が目と舌を楽しませます。",
              roomTip: "湖側スーペリアモダン和洋室。大きなピクチャーウィンドウから柴山潟の水景をパノラマで望み、シモンズ製ベッドで極上の睡眠を堪能できます。",
              gourmetTip: "「冬の加賀懐石・香箱ガニと寒ブリしゃぶしゃぶ」。濃厚な内子とプチプチの外子が詰まった香箱ガニの面寿し風盛り付け、脂の乗った橋立港直送寒ブリのしゃぶしゃぶ鍋。",
              highlights: [
                "素足で寛げるモダン和の設えと開放的なレイクビューテラス＆源泉かけ流し露天風呂",
                "九谷焼の器に美しく盛り付けられた香箱ガニ面寿し＆橋立港直送寒ブリしゃぶしゃぶ",
                "シモンズ製ベッドやデザイン家具が並ぶ洗練された客室＆大人のための癒やしリゾート"
              ]
            },
            {
              id: 3,
              name: "片山津温泉　源泉元湯の宿　かのや光楽苑",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4997/4997.jpg",
              rating: 4.21,
              reviews: 743,
              price: "¥8,800〜",
              access: "JR加賀温泉駅より車で10分（無料送迎有／定時運行／要事前予約）、北陸自動車道片山津ＩＣより10分",
              special: "柴山潟に面し、客室からは湖が望めます。源泉を流し込む湯量豊富な温泉と加賀料理が自慢の元湯の宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4997%2F4997.html",
              story: "片山津温泉の開湯伝説にゆかりの深い自家源泉を敷地内に持ち、豊富な湯量を誇る「片山津温泉 源泉元湯の宿 かのや光楽苑」。毎分湧出する新鮮な塩化物強塩泉を惜しみなく注ぎ込む大浴場と野天風呂は、塩分濃度が高く、短時間の入浴でも汗が噴き出すほどの高い温浴効果を誇ります。冬の冷たい外気とのコントラストが心地よい露天風呂で温まった後は、加賀の郷土料理「治部煮（じぶに）」や橋立漁港直送の鮮魚を、加賀の銘酒とともに楽しむ贅沢が待っています。",
              roomTip: "落ち着いた純和室またはモダン和室。畳の香りに包まれてゆったりと旅の疲れを癒やし、気兼ねなく足を伸ばして寛ぐことができます。",
              gourmetTip: "「元湯会席・冬のズワイガニと能登豚」。ズワイガニの甲羅盛りや焼きガニ、甘みのある能登豚のしゃぶしゃぶ鍋、金沢名物治部煮を温かい器で味わえます。",
              highlights: [
                "片山津随一の自家源泉元湯＆ミネラル豊富な塩化物強塩泉による驚きのポカポカ温浴効果",
                "加賀伝統の鴨治部煮と旬のカニ料理＆広々とした純和室で過ごす安心の温泉ステイ",
                "片山津ICから車で5分のアクセス＆身体の芯から温まる元湯ならではの濃厚な泉質"
              ]
            },
            {
              id: 4,
              name: "大江戸温泉物語わんわんリゾート　矢田屋松濤園",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/184616/184616.jpg",
              rating: 4.36,
              reviews: 190,
              price: "¥19,200〜",
              access: "加賀温泉駅よりお車で約10分",
              special: "食事もお風呂も、わんちゃんとずっと一緒の温泉宿。伝統のある旅館で愛犬と思い出に残るひと時を。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184616%2F184616.html",
              story: "創業明治29年（1896年）、数寄屋造りの気品ある佇まいと柴山潟に面した風光明媚なロケーションを誇る名門宿「大江戸温泉物語わんわんリゾート 矢田屋松濤園（しょうとうえん）」。愛犬同伴専用の上質リゾートとして生まれ変わりつつも、伝統の本格会席料理と歴史ある名湯のクオリティは健在。愛犬とともに冬の温泉旅行を楽しみたい愛犬家にとって、最高峰のホスピタリティと快適な設備が整えられています。",
              roomTip: "柴山潟を一望する広々とした和室または和洋室。愛犬用アメニティが完備され、湖の穏やかな眺めを眺めながら愛犬と心置きなく寛げます。",
              gourmetTip: "「料理長特選・冬の加賀美味会席」。近海で水揚げされた新鮮な魚介のお造り、冬の温かい小鍋立て、加賀野菜を使った天ぷらなど、老舗ならではの確かな味覚。",
              highlights: [
                "明治29年創業の数寄屋造りの風格＆愛犬と一緒に泊まれる最高峰の本格温泉リゾート",
                "愛犬用アメニティ完備の贅沢和洋室＆熟練の板前が仕立てる加賀美味懐石ディナー",
                "ドッグラン完備で愛犬との冬の想い出作りに最適＆柴山潟を散策できる抜群の環境"
              ]
            },
            {
              id: 5,
              name: "片山津温泉　湖畔の宿　森本",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5419/5419.jpg",
              rating: 4.62,
              reviews: 718,
              price: "¥7,700〜",
              access: "【立地NO.1】ＪＲ加賀温泉駅より（無料送迎・要連絡）、片山津ＩＣより車５分、小松空港より車１５分、金沢市内より車４５分",
              special: "白山を望む静かな湖畔の宿でのんびりゆっくり美食旅を",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5419%2F5419.html",
              story: "柴山潟の湖畔すぐそばに建ち、湖を眺めながら入れる展望大浴場と温かいアットホームなもてなしが旅人に長く親しまれている「片山津温泉 湖畔の宿 森本」。良心的な宿泊価格でありながら、目の前の柴山潟から湧き出る濃厚な塩化物泉を贅沢に満喫できます。朝夕に湖畔を散策すれば、冬の澄み切った空気の中で白山連峰の神々しい姿に出会えます。橋立港直送の旬の味覚をふんだんに盛り込んだ手作り会席が、一人旅から家族旅行まで温かく迎えてくれます。",
              roomTip: "湖側和室。窓を開けると穏やかな湖面がすぐそこに迫り、水鳥たちの羽ばたきや湖畔の静寂に包まれる穏やかな時間を過ごせます。",
              gourmetTip: "「冬の日本海・カニと寒魚の会席プラン」。香ばしい焼きガニ、冬の日本海のお造り盛り合わせ、あったかカニ鍋を地酒とともに味わう満足度の高い料理。",
              highlights: [
                "柴山潟湖畔すぐの好立地＆抜群のコストパフォーマンスで楽しむ冬の日本海カニ会席",
                "湖側客室から眺める白山の秀峰と水鳥の情景＆アットホームなもてなしが心に沁みる宿",
                "一人旅からファミリーまで気兼ねなく楽しめる湖畔の隠れ家＆加賀地酒の飲み比べ"
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
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80"
          alt="初冬の柴山潟と霊峰白山連峰の雪景色"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-semibold">
            <Snowflake className="w-4 h-4" />
            11月・12月 冬の極上絶景特集｜石川・加賀片山津
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【11・12月石川・加賀片山津温泉】<br className="hidden sm:inline" />
            柴山潟と白山初冠雪パノラマ・11月解禁加能ガニ＆香箱ガニの宿5選
          </h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            日に七度色を変える柴山潟の水鏡に映る霊峰白山の初雪。湖底から自噴する高濃度塩化物泉のポカポカ温まり湯に浸かり、青タグ加能ガニと冬限定香箱ガニを堪能する北陸の贅沢旅。
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12">

        {/* Section 1: Seasonal Overview */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <Mountain className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Shibayama Lake & Sacred Mt. Hakusan</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の柴山潟に映る霊峰白山の純白冠雪と、湖畔の静謐な旅情
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              石川県加賀平野の南西端、広大な汽水湖「柴山潟（しばやまがた）」の湖畔に広がる加賀三温泉の一つ、片山津温泉。11月中旬を迎えると、湖の東方にそびえ立つ標高2,702mの日本三霊山「白山連峰」が山頂から眩いばかりの純白の初雪をまとい、空気が澄み渡る初冬の青空の下に神々しい山容を現します。波静かな柴山潟の水面は巨大な水鏡となり、雪を冠した白山の逆さ富士ならぬ「逆さ白山」が鮮やかに映り込みます。
            </p>
            <p>
              片山津温泉の歴史は、江戸前期の承応2年（1653年）、加賀藩大聖寺藩主・前田利明が鷹狩りに訪れた際、湖水に群がる水鳥の中に湯煙が上がっているのを見つけたことに始まります。湖底から滾々と湧き出る源泉は長らく開発が困難を極めましたが、明治時代に大規模な干拓と埋め立てによってついに湖畔の温泉街が開かれました。
            </p>
            <p>
              そして11月6日、日本海の冬の幕開けを告げるズワイガニ漁が一斉に解禁。加賀・橋立港に揚がる最高峰の「加能ガニ」と、12月末までのわずかな期間しか口にできない雌ガニ「香箱ガニ」が温泉街の宿へと運ばれます。湖底から湧く塩分濃度の高い温泉で冷えた身体を芯まで温め、加賀の美食と銘酒を心ゆくまで味わう贅沢がここにあります。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Eye className="w-5 h-5 text-cyan-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">柴山潟と霊峰白山初冠雪</div>
              <div className="text-xs text-slate-600">湖面に映る純白の逆さ白山。七色の表情を見せる湖畔のパノラマ絶景。</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Utensils className="w-5 h-5 text-cyan-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">青タグ加能ガニ＆香箱ガニ</div>
              <div className="text-xs text-slate-600">11月解禁の極上松葉ガニと、内子・外子が濃厚な冬限定香箱ガニの饗宴。</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <ThermometerSun className="w-5 h-5 text-cyan-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">湖底自噴の塩化物強塩泉</div>
              <div className="text-xs text-slate-600">塩分が肌をコーティングして湯冷めを防ぐ熱の湯。高い保温・美肌効果。</div>
            </div>
          </div>
        </section>

        {/* Section 2: Onsen Nature */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <Waves className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Sub-lake Thermal Spring Chemistry</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                湖底から湧き出る高濃度塩化物強塩泉「熱の湯」の驚くべき温浴力
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              片山津温泉の源泉は、日本でも極めて稀有な「柴山潟の湖底」から直接自噴する天然温泉です。泉質は「ナトリウム・カルシウム-塩化物泉（高張性中性高温泉）」。源泉温度は約70℃と非常に高温で、湯船に注がれると豊富なミネラル分が身体を優しく包み込みます。
            </p>
            <p>
              高張性（人間の体液よりも浸透圧が高い）であるため、温泉の有効成分が肌から浸透しやすく、海水の成分に近い高濃度の塩分が皮膚表面に薄い保護皮膜を形成します。この皮膜が汗の蒸発を強力に防ぎ、入浴後も長時間にわたって体内の熱を逃がしません。地元では古くから「温まりの湯」「熱の湯」として重宝され、冬の冷え性や腰痛、リウマチ、疲労回復に抜群の効能を発揮します。
            </p>
            <p>
              宿の展望露天風呂に身を沈めれば、眼前には穏やかな湖面が広がり、遠く雪化粧した白山連峰が静かに佇みます。湖面を渡る初冬の冷気と、湯船の温もりが心地よい調和を生み出し、いつまでも浸かっていたくなる至福の湯浴みが叶います。
            </p>
          </div>
        </section>

        {/* Section 3: Winter Gourmet */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Winter Gastronomy of Kaga & Noto</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月に味わう加能ガニ・香箱ガニと北陸の極上冬味覚
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              片山津温泉から車でわずか10分の場所にある「橋立漁港（はしたてぎょこう）」は、北陸随一の高品質なカニが揚がることで知られます。漁場が港から近く日帰り操業が可能なため、獲れたての活きたズワイガニが夕方には市場に並びます。石川県ブランドの証である「青タグ」が付けられた「加能ガニ」は、繊細な身の繊維に甘みが凝縮し、花開くカニ刺しや香ばしい炭火焼きでその実力を遺憾なく発揮します。
            </p>
            <p>
              また、11月6日から12月下旬までのわずか2ヶ月足らずしか味わえない雌の「香箱ガニ」は、金沢や加賀の冬の風物詩。甲羅の中にぎっしりと詰まった濃厚なオレンジ色の内子（未受精卵）と、プチプチと弾ける外子、そして身とカニ味噌を丁寧にほぐして甲羅に盛り付けた「面寿し（甲羅盛り）」は、一口ごとに日本海の恵みが押し寄せる感動の珍味です。
            </p>
            <p>
              さらに、冬の荒波で脂が乗り切った「寒ブリ」の刺身やブリしゃぶ、石川県が誇るブランド黒毛和牛「能登牛」のフィレステーキ、加賀伝統の鴨肉を使った「治部煮」など、絢爛豪華な加賀百万石の食文化が冬の宴席を彩ります。
            </p>
          </div>
        </section>

        {/* Section 3.5: Model Course & Sightseeing */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Kaga Lake & Heritage Tour</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                柴山潟の水鏡と加賀の歴史文化を巡る初冬の片山津おすすめ散策ルート
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              片山津温泉の滞在では、建築美と湖畔の自然を体感する散策がおすすめです。まず訪れたいのが、世界的建築家・谷口吉生氏の設計による公共浴場「片山津温泉 総湯」。全面ガラス張りのモダンな建物は柴山潟の水面と一体化するように設計され、「潟の湯」からは湖と白山連峰、「森の湯」からは緑豊かな樹木を眺めながらの名湯体験ができます。2階の「まちカフェ」で湖を眺めながら味わう加賀パフェも人気です。
            </p>
            <p>
              湖上に浮かぶ「浮御堂（うきみどう）」や湖畔のサイクリングロードを散策した後は、車で約10分の「橋立漁港」へ。江戸時代に日本海交易で莫大な富を築いた北前船主たちの屋敷が立ち並ぶ重要伝統的建造物群保存地区「北前船の里資料館」を見学し、港の魚市場直売店で獲れたての加能ガニや干物を買い求めるのが、知る人ぞ知る加賀の冬の贅沢ルートです。
            </p>
          </div>
        </section>

        {/* Section 4: 5 Selected Ryokans */}
        <section className="space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Handpicked 5 Elite Inns</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              片山津温泉で冬の絶景と加能ガニを味わう厳選名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              水上楼閣のような展望ホテルから洗練されたモダン宿、源泉元湯の湯宿まで、楽天APIから最新情報を厳選した5軒をご紹介します。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {hotels.map((h) => (
              <div 
                key={h.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition duration-300 flex flex-col md:flex-row"
              >
                <div className="relative w-full md:w-2/5 h-64 md:h-auto min-h-[260px] bg-slate-100 flex-shrink-0">
                  <Image
                    src={h.img}
                    alt={h.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>{h.rating}</span>
                    <span className="text-slate-300 text-[10px]">({h.reviews}件)</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-cyan-700/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-lg">
                    {h.price}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow space-y-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-cyan-800 font-semibold mb-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>石川県加賀市片山津温泉</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                        {h.name}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {h.story}
                    </p>

                    <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs sm:text-sm">
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-slate-800 flex-shrink-0">客室の魅力:</span>
                        <span className="text-slate-600">{h.roomTip}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-slate-800 flex-shrink-0">冬の美食:</span>
                        <span className="text-slate-600">{h.gourmetTip}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">宿泊のハイライト</div>
                      <ul className="space-y-1.5">
                        {h.highlights.map((item, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-cyan-700 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="text-[11px] text-slate-500">
                      <span>交通: {h.access}</span>
                    </div>
                    <a
                      href={h.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-sm px-6 py-3 rounded-2xl shadow-sm hover:shadow transition group flex-shrink-0"
                    >
                      <span>楽天トラベルでプランを見る</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Travel Advice */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <Snowflake className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Hokuriku Winter Climate & Driving</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の加賀冬旅の天候と新幹線・車利用の心得
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-cyan-800" />
                北陸特有の時雨と防寒・防水靴
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                初冬の北陸は「弁当忘れても傘忘れるな」と言われるほど天気が変わりやすく、急な雨やアラレ、みぞれが降ります。気温は11月で最高12〜15℃、12月に入ると最高6〜9℃、朝晩は0〜3℃前後まで冷え込みます。折りたたみ傘や防水フード付きコート、濡れても滑りにくい防寒靴を用意しましょう。
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <Footprints className="w-4 h-4 text-cyan-800" />
                北陸新幹線加賀温泉駅と冬用タイヤ
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                北陸新幹線の加賀温泉駅からは各宿の送迎バスやタクシーで約10分と非常に便利で、雪道運転の心配なくアクセスできます。車の場合は北陸道・片山津ICから約5分ですが、11月下旬以降は北陸道で冬用タイヤ規制がかかることがあるためスタッドレスタイヤ必須です。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Traveler's Q&A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                加賀片山津温泉冬旅のよくある質問（FAQ）
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-cyan-800 font-extrabold">Q.</span>
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
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Related Winter Features & Hot Springs</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい北陸・加賀の冬名湯＆極上カニ特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              11月・12月の味覚の王者・加能ガニや越前ガニ、金沢の雪吊りを楽しむ人気特集もぜひチェックしてください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-ishikawa-yamanaka-onsen-kakusenkei-kano-crab-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">石川・山中温泉</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">鶴仙渓の初雪と開湯1300年名湯・加能ガニ会席の宿</h3>
            </Link>
            <Link 
              href="/winter-ishikawa-kaga-yamashiro-kano-crab-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">石川・山代温泉</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">薬師山の冬景色と総湯・加能ガニフルコースを味わう名宿</h3>
            </Link>
            <Link 
              href="/winter-kanazawa-kenrokuen-yukizuri-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">石川・金沢</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">兼六園の雪吊りと近江町市場の香箱ガニ・加賀料理の宿</h3>
            </Link>
            <Link 
              href="/winter-fukui-awara-onsen-echizen-crab-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">福井・あわら温泉</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">関西の奥座敷と本場越前ガニ・名湯庭園露天風呂の宿</h3>
            </Link>
            <Link 
              href="/winter-toyama-himi-onsen-kanburi-tateyama-himi-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">富山・氷見温泉郷</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">富山湾越しに望む立山連峰初冠雪と本場氷見寒ブリの宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">全国の厳選温泉・旬旅特集まとめを見る</h3>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
