import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Anchor, AlertTriangle, Sunrise, HeartHandshake, Eye
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月愛知】豊川稲荷初詣と奥三河・湯谷温泉！霊狐塚の神秘と源泉かけ流し雪見露天・三河牛＆名物いなり名宿5選",
  description: "新春の祈りと奥三河の秘湯に癒やされる11〜1月の愛知・東三河旅行完全ガイド。日本三大稲荷として全国から信仰を集める「豊川稲荷（妙厳寺）」の新春初詣や、千体余りの白狐が佇む神秘の「霊狐塚」、門前町を彩る多彩な「豊川いなり寿司」。足を延ばして宇連川の渓谷美と雪景色を望む開湯1300年の名湯「湯谷温泉」での源泉掛け流し雪見露天風呂、極上の三河牛・鳳来牛会席を堪能できる厳選名宿5選を詳しくご紹介します。",
  keywords: '豊川稲荷 初詣, 湯谷温泉 雪見露天, 霊狐塚 パワースポット, 豊川いなり寿司, 奥三河 温泉, 鳳来牛 宿, 三河牛 すき焼き, 愛知 冬 旅行, 新城市 観光',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-aichi-toyokawa-inari-hatsumode-yuya-onsen-stay/"
  },
  openGraph: {
    title: "【11・12・1月愛知】豊川稲荷初詣と奥三河・湯谷温泉！霊狐塚の神秘と源泉かけ流し雪見露天・三河牛＆名物いなり名宿5選",
    description: "新春の祈りと奥三河の秘湯に癒やされる11〜1月の愛知・東三河旅行完全ガイド。日本三大稲荷として全国から信仰を集める「豊川稲荷（妙厳寺）」の新春初詣や、千体余りの白狐が佇む神秘の「霊狐塚」、門前町を彩る多彩な「豊川いなり寿司」。足を延ばして宇連川の渓谷美と雪景色を望む開湯1300年の名湯「湯谷温泉」での源泉掛け流し雪見露天風呂、極上の三河牛・鳳来牛会席を堪能できる厳選名宿5選を詳しくご紹介します。",
    url: 'https://croud-travel.com/winter-aichi-toyokawa-inari-hatsumode-yuya-onsen-stay',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '冬の愛知・豊川稲荷初詣と奥三河湯谷温泉の雪見露天'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月愛知】豊川稲荷初詣と奥三河・湯谷温泉！霊狐塚の神秘と源泉かけ流し雪見露天・三河牛＆名物いなり名宿5選",
    description: "新春の祈りと奥三河の秘湯に癒やされる11〜1月の愛知・東三河旅行完全ガイド。日本三大稲荷として全国から信仰を集める「豊川稲荷（妙厳寺）」の新春初詣や、千体余りの白狐が佇む神秘の「霊狐塚」、門前町を彩る多彩な「豊川いなり寿司」。足を延ばして宇連川の渓谷美と雪景色を望む開湯1300年の名湯「湯谷温泉」での源泉掛け流し雪見露天風呂、極上の三河牛・鳳来牛会席を堪能できる厳選名宿5選を詳しくご紹介します。",
    images: ['https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function AichiToyokawaYuyaWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "【11・12・1月愛知】豊川稲荷初詣と奥三河・湯谷温泉！霊狐塚の神秘と源泉かけ流し雪見露天・三河牛＆名物いなり名宿5選",
        "description": "新春の祈りと奥三河の秘湯に癒やされる11〜1月の愛知・東三河旅行完全ガイド。日本三大稲荷として全国から信仰を集める「豊川稲荷（妙厳寺）」の新春初詣や、千体余りの白狐が佇む神秘の「霊狐塚」、門前町を彩る多彩な「豊川いなり寿司」。足を延ばして宇連川の渓谷美と雪景色を望む開湯1300年の名湯「湯谷温泉」での源泉掛け流し雪見露天風呂、極上の三河牛・鳳来牛会席を堪能できる厳選名宿5選を詳しくご紹介します。",
        "image": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&h=630&q=80",
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
          "@id": "https://croud-travel.com/winter-aichi-toyokawa-inari-hatsumode-yuya-onsen-stay"
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
            "name": "愛知・豊川稲荷初詣＆奥三河湯谷温泉名宿",
            "item": "https://croud-travel.com/winter-aichi-toyokawa-inari-hatsumode-yuya-onsen-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "日本三大稲荷「豊川稲荷（妙厳寺）」の新春初詣の混雑状況と見どころは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "豊川稲荷は正式名称を「宗教法人 豊川閣妙厳寺（みょうごんじ）」と称する曹洞宗の寺院で、室町時代（1441年）に創建された名刹です。正月三が日には東海地方をはじめ全国から約150万人もの参拝客が訪れます。本殿（大本殿）での新春祈祷はもちろん、境内の奥に位置する「霊狐塚（れいこづか）」は見逃せません。岩山の上に奉納された1,000体を超える白狐像が静かに並ぶ光景は圧巻の神秘性を誇ります。初詣の混雑ピークは元旦の午前0時から3時、および三が日の10時から15時頃です。混雑を避けてゆっくり参拝したい場合は、早朝8時前または夕方16時以降の参拝がおすすめです。"
            }
          },
          {
            "@type": "Question",
            "name": "豊川稲荷の門前町で楽しめる「豊川いなり寿司」の魅力とおすすめの食べ方は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "豊川稲荷の門前通り商店街には、古くから参拝客をもてなしてきた名物「豊川いなり寿司」の専門店がずらりと並びます。伝統的な甘辛く煮た油揚げの定番いなりをはじめ、ワサビをきかせたさっぱり風味の「わさびいなり」、香ばしく炙った「焼きいなり」、五目具材をぎっしり詰めたものや、天ぷらいなりなど個性豊かな創作いなりが楽しめます。食べ歩き用のテイクアウトパックも販売されているため、複数の店舗のいなり寿司を買って味比べをするのが門前町巡りの醍醐味です。"
            }
          },
          {
            "@type": "Question",
            "name": "湯谷温泉（ゆやおんせん）の特徴と冬の雪見風呂の魅力は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "奥三河の新城市に位置する湯谷温泉は、飛鳥時代の西暦703年に鳳来寺を開創した利修仙人によって発見されたと伝わる開湯1300年の名湯です。宇連川（板敷川）が削り出した深い渓谷沿いに旅館が点在し、泉質はナトリウム・カルシウム―塩化物温泉（弱アルカリ性）。塩分が肌の表面に皮膜を作るため保温効果が抜群で、「温まりの湯」「美肌の湯」として親しまれています。冬の12〜1月には冷え込みによって渓谷の奇岩や木々に雪が積もり、立ち上る湯けむりとともに幻想的な雪見風呂が堪能できます。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の東三河・奥三河を観光する際のアクセスと道路状況（積雪・凍結）は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "豊川市街地は太平洋側の温暖な気候のため、平野部で雪が積もることは極めて稀です。一方、新城市の奥三河エリア（湯谷温泉、鳳来寺山、設楽町方面）へ向かう場合は、標高が高くなるため、12月下旬から1月の強い寒波襲来時には積雪や路面凍結が発生することがあります。新東名高速道路「新城IC」から湯谷温泉までは国道151号を経由して車で約15〜20分ですが、冬期にマイカーやレンタカーで訪れる際はスタッドレスタイヤの装着をおすすめします。公共交通機関の場合は、JR飯田線の特急「伊那路」や普通列車を利用すれば湯谷温泉駅までスムーズにアクセス可能です。"
            }
          },
          {
            "@type": "Question",
            "name": "豊川稲荷初詣と湯谷温泉を巡る冬の1泊2日おすすめモデルコースは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "【1日目】名古屋・東名高速または新幹線豊橋駅経由で豊川市へ到着 → 豊川稲荷門前町で名物「豊川いなり寿司」のランチ → 豊川稲荷で新春初詣＆霊狐塚で金運・開運祈願 → 国道151号または新東名を利用して新城・湯谷温泉へ移動（車約40分） → 宇連川渓谷沿いの温泉旅館にチェックイン → 源泉掛け流しの雪見露天風呂を満喫 → 夕食に地元特産の「鳳来牛・三河牛会席」に舌鼓。【2日目】清流の朝風呂でリフレッシュ → 国の名勝・天然記念物「鳳来寺山（鳳来寺・鳳来山東照宮）」参拝 → 宇連川の「板敷川」奇岩景勝地散策 → 道の駅もっくる新城で奥三河名産品（五平餅、地酒、しいたけ）の買い物 → 帰路へ。"
            }
          }
        ]
      }
    ]
  };

  const hotelsList = [
            {
              id: 1,
              name: "湯谷温泉　湯の風　ＨＡＺＵ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/19821/19821.jpg",
              rating: 4.15,
              reviews: 787,
              price: "¥5,500〜",
              access: "【電車】ＪＲ飯田線湯谷温泉駅徒歩5分（交通系カード不可）　／【車】新城IC～国道151号線飯田、東栄方面　約11㎞15分",
              special: "現在日帰り入浴のみのご利用は受付しておりません。デイユースはお食事・ご入浴付きで予約承っております。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19821%2F19821.html",
              story: "奥三河の景勝地・鳳来寺山麓の宇連川（板敷川）沿いに佇み、四季折々の渓谷美をパノラマで望む「湯谷温泉 湯の風 HAZU」。客室やロビーに一歩足を踏み入れると、眼下に広がる雄大な渓谷と清流のせせらぎが旅人を迎え、冬には切り立つ岩肌にうっすらと白雪が積もる風光明媚な雪見絶景が広がります。宿の名物である断崖絶壁にせり出した露天風呂は、加水・加温一切なしの源泉掛け流し。ナトリウム・カルシウム―塩化物温泉の湯は、肌あたりがまろやかで身体の奥深くまで熱が染み渡り、湯上がり後もポカポカとした温もりが長時間持続します。澄み渡る冬の冷涼な空気の中で渓谷を見下ろしながらの雪見風呂は、日常の喧騒を忘れさせてくれる至福のひととき。夕食には、地元東三河が誇る最高峰の銘柄牛「鳳来牛」または「三河牛」のサーロイン陶板焼きをメインに、冬の奥三河の野山で獲れたジビエや川魚、地元契約農家から届く根菜を使った滋味豊かな会席料理が振る舞われます。和の情緒と現代的な寛ぎが調和した空間で、奥三河の自然の恵みを心ゆくまで満喫できます。",
              roomTip: "宇連川渓谷を正面に望む和室またはテラス付き客室。窓の外に広がる川のせせらぎと、冬の静寂に包まれた雪化粧の岩肌を眺めながら静かな時間を過ごせます。",
              gourmetTip: "「奥三河の旬菜＆鳳来牛ステーキ会席」。上質なサシが入った鳳来牛の柔らかな肉質と、地元の冬野菜・自然薯を組み合わせた絶品和会席。",
              highlights: [
                "宇連川の渓谷美を見下ろす断崖露天風呂・加水加温なし源泉掛け流し",
                "最高峰ブランド「鳳来牛」「三河牛」サーロイン陶板焼きと奥三河旬菜",
                "鳳来寺山や阿寺の七滝への観光拠点・静寂に包まれる大人の温泉宿"
              ]
            },
            {
              id: 2,
              name: "湯谷温泉　はづ別館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/130071/130071.jpg",
              rating: 4.38,
              reviews: 320,
              price: "¥7,700〜",
              access: "【電車】ＪＲ飯田線湯谷温泉駅徒歩1分／【車】新城IC～国道151号線飯田、東栄方面右折　約11㎞約15分",
              special: "現在日帰り入浴のみのご利用は受付しておりません。デイユースはお食事・ご入浴付きで予約承っております。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F130071%2F130071.html",
              story: "宇連川の清流を眼下に望む数寄屋造りの閑静な佇まいで、大人の隠れ家として多くの旅人に愛されてきた「湯谷温泉 はづ別館」。文学者や芸術家が愛した宿としても知られ、館内の至る所に和の風情と木造建築の温もりが息づいています。宿自慢の風呂は、清流宇連川の川面すれすれに設けられた半露天風呂や、檜の香りが漂う内湯。岩肌を縫うように湧き出る湯谷の源泉が掛け流されており、冬の清澄な冷気を感じながら温かな湯船に身を委ねると、清流のせせらぎが心地よい子守唄のように響き渡ります。料理長が手掛ける夕食は、漢方の考えを取り入れた薬膳料理や、三河牛のしゃぶしゃぶ、冬に旨味が増す川魚のアマゴの塩焼きなど、身体の内側から温まる滋養に満ちた逸品揃い。日常のストレスから完全に解き放たれ、静かに自分を取り戻す冬のおこもり旅に最適な一軒です。",
              roomTip: "川沿いの純和風客室。職人の技が光る障子や欄間越しに、冬の渓谷美を借景とした絵画のような景色を堪能できます。",
              gourmetTip: "「源泉仕込みの薬膳鍋＆三河牛しゃぶしゃぶ会席」。身体を芯から温める生薬と地元の新鮮野菜、極上三河牛が見事に調和した身体に優しい美食。",
              highlights: [
                "宇連川の川面すれすれの半露天風呂と数寄屋造りの趣深い名建築",
                "身体の内から温まる本格薬膳料理＆三河牛しゃぶしゃぶ会席",
                "文人墨客が愛した静寂の宿・自分を取り戻す冬のおこもり湯治"
              ]
            },
            {
              id: 3,
              name: "ホテルクラウンヒルズ豊川駅前（ＢＢＨホテルグループ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/129492/129492.jpg",
              rating: 4.03,
              reviews: 1534,
              price: "¥4,900〜",
              access: "豊川駅より徒歩3分",
              special: "豊川駅から徒歩３分！豊川稲荷まで徒歩１０分！！無料駐車場有！ 無料朝食、サウナ付き大浴場も大好評☆彡",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F129492%2F129492.html",
              story: "JR豊川駅および名鉄豊川稲荷駅から徒歩約3分という抜群の立地を誇り、豊川稲荷初詣の拠点として絶大な利便性を発揮する「ホテルクラウンヒルズ豊川駅前（ＢＢＨホテルグループ）」。早朝の澄んだ空気の中で行われる新春初詣や、混雑前の霊狐塚参拝へも徒歩ですぐに出発できるロケーションが最大の強みです。館内には大浴場を完備しており、新春の冷え込んだ街を歩いた後も、温かい大浴場でゆったりと手足を伸ばして旅の疲れを癒やすことができます。客室には快適な睡眠をサポートするサータ社製マットレスを採用し、加湿空気清浄機も完備。毎朝提供される無料の朝食バイキングでは、地元愛知の郷土料理や炊きたてのご飯、温かいお味噌汁が並び、元気に新年の観光へ出発できます。",
              roomTip: "高層階のセミダブル・ツインルーム。豊川の街並みを一望でき、駅近でありながら防音性に優れ静かな夜を過ごせます。",
              gourmetTip: "「和洋無料朝食バイキング」。愛知名物の赤だし味噌汁や日替わりのお惣菜が豊富で、初詣前のエネルギー補給に最適。",
              highlights: [
                "豊川駅・豊川稲荷へ徒歩3分の好立地・大浴場完備＆無料朝食",
                "赤だし味噌汁付き和洋無料朝食＆サータ社製マットレスで快適睡眠",
                "早朝の混雑前初詣に最適・飲食店やコンビニも至近で便利"
              ]
            },
            {
              id: 4,
              name: "コンフォートホテル豊川",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13439/13439.jpg",
              rating: 4.26,
              reviews: 3055,
              price: "¥3,800〜",
              access: "名鉄豊川線「諏訪町駅」徒歩５分◆「豊川ＩＣ」車で１０分◆「音羽蒲郡ＩＣ」車で１５分◆豊川稲荷まで車で１０分",
              special: "名鉄豊川線「諏訪町駅」徒歩５分◆「豊川ＩＣ」車で１０分◆豊川稲荷まで車で１０分",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13439%2F13439.html",
              story: "名鉄諏訪町駅から徒歩約5分、豊川市中心部に位置し、洗練された設備と心地よいサービスで定評のある「コンフォートホテル豊川」。全室禁煙のクリーンな客室には、快眠を追求したオリジナル寝具「チョイスピロー」と広々としたワークスペースが備わり、ひとり旅から家族旅行までストレスなく快適に滞在できます。朝食は宿泊者全員に無料で提供される「Color your Morning」ビュッフェ。季節のスムージーや彩り豊かな温野菜、焼きたてパンなど、栄養バランスに配慮したヘルシーな朝食で気持ちよく1日をスタートできます。豊川稲荷へは車で約10分、名鉄電車でも1駅とアクセス良好で、観光にもビジネスにも快適な滞在環境が整っています。",
              roomTip: "クイーンベッドを配置したダブルルーム。広めのデスクと加湿空気清浄機を備え、冬の連泊滞在でもゆったり寛げます。",
              gourmetTip: "「無料コンフォートブレックファスト」。冬期限定の温かい特製スープや地元の食材を取り入れたフレッシュな朝食メニューが好評。",
              highlights: [
                "全室禁煙・快眠ピロー完備・無料ヘルシー朝食ビュッフェ",
                "冬期限定あったかスープと彩り朝食＆ウェルカムカフェサービス",
                "諏訪町駅徒歩5分・ビジネスや家族旅行にも快適なモダンホテル"
              ]
            },
            {
              id: 5,
              name: "ホテルルートイン新城",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/172076/172076.jpg",
              rating: 4.39,
              reviews: 611,
              price: "¥5,900〜",
              access: "新城駅より徒歩にて約６分",
              special: "ＷＯＷＯＷ全室無料視聴可！バイキング朝食無料！ルートインホテルズ298店舗目",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172076%2F172076.html",
              story: "新東名高速道路「新城IC」から車で約4分、JR飯田線新城駅からも車で約5分という交通の要衝に位置し、奥三河観光や湯谷温泉・鳳来寺山巡りのドライブ拠点として最適な「ホテルルートイン新城」。館内にはラジウム人工温泉大浴場「旅人の湯」を備えており、広々とした湯船で手足を伸ばして旅の長距離運転や散策の疲れをしっかりと癒やすことができます。全客室にWOWOW無料視聴可能な大型液晶テレビや加湿機能付き空気清浄機を完備。朝食はヨーロッパ直輸入の焼きたてパンや地元の旬素材を取り入れた和洋バイキングが無料で楽しめます。平面無料駐車場を完備しているため、冬期の奥三河マイカー旅行でも駐車の心配なく安心して宿泊できます。",
              roomTip: "コンフォートルーム。ベッド幅が広く、上層階からは奥三河の雄大な山並みを望む落ち着いた空間。",
              gourmetTip: "「和洋バイキング朝食」。あつあつのスクランブルエッグや焼き魚、地元愛知の赤だし味噌汁など充実のメニューが揃います。",
              highlights: [
                "新東名新城IC車約4分・ラジウム温泉大浴場と平面無料駐車場完備",
                "ヨーロッパ直輸入焼きたてパン朝食バイキング＆WOWOW無料視聴",
                "奥三河ドライブの拠点に最適・ビジネスから観光まで安心のルートイン品質"
              ]
            }
  ];

  const faqs = [
    {
      q: "日本三大稲荷「豊川稲荷（妙厳寺）」の新春初詣の混雑状況と見どころは？",
      a: "豊川稲荷は正式名称を「宗教法人 豊川閣妙厳寺（みょうごんじ）」と称する曹洞宗の寺院で、室町時代（1441年）に創建された名刹です。正月三が日には東海地方をはじめ全国から約150万人もの参拝客が訪れます。本殿（大本殿）での新春祈祷はもちろん、境内の奥に位置する「霊狐塚（れいこづか）」は見逃せません。岩山の上に奉納された1,000体を超える白狐像が静かに並ぶ光景は圧巻の神秘性を誇ります。初詣の混雑ピークは元旦の午前0時から3時、および三が日の10時から15時頃です。混雑を避けてゆっくり参拝したい場合は、早朝8時前または夕方16時以降の参拝がおすすめです。"
    },
    {
      q: "豊川稲荷の門前町で楽しめる「豊川いなり寿司」の魅力とおすすめの食べ方は？",
      a: "豊川稲荷の門前通り商店街には、古くから参拝客をもてなしてきた名物「豊川いなり寿司」の専門店がずらりと並びます。伝統的な甘辛く煮た油揚げの定番いなりをはじめ、ワサビをきかせたさっぱり風味の「わさびいなり」、香ばしく炙った「焼きいなり」、五目具材をぎっしり詰めたものや、天ぷらいなりなど個性豊かな創作いなりが楽しめます。食べ歩き用のテイクアウトパックも販売されているため、複数の店舗のいなり寿司を買って味比べをするのが門前町巡りの醍醐味です。"
    },
    {
      q: "湯谷温泉（ゆやおんせん）の特徴と冬の雪見風呂の魅力は？",
      a: "奥三河の新城市に位置する湯谷温泉は、飛鳥時代の西暦703年に鳳来寺を開創した利修仙人によって発見されたと伝わる開湯1300年の名湯です。宇連川（板敷川）が削り出した深い渓谷沿いに旅館が点在し、泉質はナトリウム・カルシウム―塩化物温泉（弱アルカリ性）。塩分が肌の表面に皮膜を作るため保温効果が抜群で、「温まりの湯」「美肌の湯」として親しまれています。冬の12〜1月には冷え込みによって渓谷の奇岩や木々に雪が積もり、立ち上る湯けむりとともに幻想的な雪見風呂が堪能できます。"
    },
    {
      q: "冬の東三河・奥三河を観光する際のアクセスと道路状況（積雪・凍結）は？",
      a: "豊川市街地は太平洋側の温暖な気候のため、平野部で雪が積もることは極めて稀です。一方、新城市の奥三河エリア（湯谷温泉、鳳来寺山、設楽町方面）へ向かう場合は、標高が高くなるため、12月下旬から1月の強い寒波襲来時には積雪や路面凍結が発生することがあります。新東名高速道路「新城IC」から湯谷温泉までは国道151号を経由して車で約15〜20分ですが、冬期にマイカーやレンタカーで訪れる際はスタッドレスタイヤの装着をおすすめします。公共交通機関の場合は、JR飯田線の特急「伊那路」や普通列車を利用すれば湯谷温泉駅までスムーズにアクセス可能です。"
    },
    {
      q: "豊川稲荷初詣と湯谷温泉を巡る冬の1泊2日おすすめモデルコースは？",
      a: "【1日目】名古屋・東名高速または新幹線豊橋駅経由で豊川市へ到着 → 豊川稲荷門前町で名物「豊川いなり寿司」のランチ → 豊川稲荷で新春初詣＆霊狐塚で金運・開運祈願 → 国道151号または新東名を利用して新城・湯谷温泉へ移動（車約40分） → 宇連川渓谷沿いの温泉旅館にチェックイン → 源泉掛け流しの雪見露天風呂を満喫 → 夕食に地元特産の「鳳来牛・三河牛会席」に舌鼓。【2日目】清流の朝風呂でリフレッシュ → 国の名勝・天然記念物「鳳来寺山（鳳来寺・鳳来山東照宮）」参拝 → 宇連川の「板敷川」奇岩景勝地散策 → 道の駅もっくる新城で奥三河名産品（五平餅、地酒、しいたけ）の買い物 → 帰路へ。"
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
            <span className="text-slate-900 font-semibold">愛知・豊川稲荷初詣＆奥三河湯谷温泉名宿</span>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-r from-red-950 via-amber-950 to-slate-900 text-white py-16 md:py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-amber-500/30 border border-amber-300/40 text-amber-200 text-xs md:text-sm px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>11月・12月・1月冬の東海旅情特集</span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6 text-white drop-shadow-md">
              愛知・豊川＆新城・奥三河<br className="hidden sm:inline" />
              日本三大稲荷「豊川稲荷」初詣・霊狐塚と<br className="hidden sm:inline" />
              名湯「湯谷温泉」源泉かけ流し雪見露天＆三河牛名宿5選
            </h1>
            <p className="max-w-3xl mx-auto text-sm md:text-lg text-amber-100 leading-relaxed drop-shadow">
              新春の商売繁盛・金運招福を祈願する日本屈指の霊場「豊川稲荷」と、千体余の白狐が並ぶ神秘の「霊狐塚」。開湯1300年の秘湯「湯谷温泉」で宇連川渓谷の雪景色を望む源泉掛け流し露天風呂に浸かり、名産「鳳来牛・三河牛」と多彩な豊川いなり寿司を堪能する冬の東三河紀行。
            </p>
          </div>
        </header>

        {/* Article Summary Box */}
        <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
            <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b pb-3">
              <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <span>本特集でわかること（11・12・1月の愛知・東三河旅行の要点）</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-700">
              <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-100">
                <span className="font-bold text-amber-900 block mb-1">① 豊川稲荷初詣＆霊狐塚</span>
                日本三大稲荷・妙厳寺の正月参拝。千体を超える白狐像が圧巻の霊狐塚と、門前町の名物「豊川いなり寿司」食べ比べ。
              </div>
              <div className="bg-rose-50/60 p-4 rounded-xl border border-rose-100">
                <span className="font-bold text-rose-900 block mb-1">② 湯谷温泉の源泉掛け流し雪見露天</span>
                開湯1300年の歴史を誇る宇連川渓谷の秘湯。保温効果抜群の弱アルカリ性塩化物泉と、川面すれすれの絶景露天風呂。
              </div>
              <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-100">
                <span className="font-bold text-emerald-900 block mb-1">③ 東三河の冬の極上美食</span>
                幻の銘柄牛「鳳来牛」や霜降り「三河牛」のサーロイン陶板焼き、冬の清流アマゴ、身体を芯から温める本格薬膳鍋。
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">
          
          {/* Section 1: 豊川稲荷初詣と霊狐塚の神秘 */}
          <section className="space-y-6">
            <div className="border-l-4 border-amber-600 pl-4">
              <span className="text-amber-600 font-bold text-sm tracking-wider uppercase">Spiritual Heritage & Power Spot</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
                日本三大稲荷「豊川稲荷」の新春初詣と千体の白狐が佇む「霊狐塚」の神秘
              </h2>
            </div>
            
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
              <p>
                愛知県東部に位置する豊川市は、古くから全国有数の霊場として信仰を集める「豊川稲荷（円福山 豊川閣 妙厳寺）」の門前町として栄えてきました。「稲荷」という名から神社と思われがちですが、実際には嘉吉元年（1441年）に東海義易禅師によって開山された曹洞宗の格式高き寺院です。本尊として千手観音をお祀りし、鎮守として祀られている「豐川吒枳尼真天（とよかわだきにしんてん）」が白い狐に跨がっている姿から、一般に豊川稲荷の名で親しまれるようになりました。織田信長、豊臣秀吉、徳川家康ら戦国三英傑も武運長久を祈願したと伝えられ、江戸時代には大岡越前守が江戸下屋敷に分霊を勧請するなど、商売繁盛・開運招福の神仏として全国にその名を轟かせました。
              </p>
              <p>
                12月下旬から1月の年末年始には、東海地方はもとより全国から約150万人もの初詣参拝客が訪れます。総門をくぐり、樹齢数百年の巨木が茂る参道を進むと現れる大本殿の威容は圧巻で、新春の護摩祈祷では力強い読経と太鼓の音が境内に響き渡り、背筋が凛と伸びるような清々しい神気を感じることができます。
              </p>
              <p>
                豊川稲荷を訪れたなら絶対に外せないのが、境内奥深くの杉木立の中に佇む「霊狐塚（れいこづか）」です。かつて祈願成就の御礼として奉納された信者たちの白狐像が岩山の上にびっしりと並べられており、その数は千体以上にも及びます。大小さまざまな狐の石像が苔むした岩肌に整然と鎮座する姿は息を呑むほど神秘的で、冬の澄み切った木漏れ日の中に浮かび上がる光景は唯一無二のパワースポットとしての厳かさに満ちています。霊狐塚の手前にある巨岩「狐塚の岩」には、岩の隙間に参拝者が挟んだ硬貨が光っており、隙間から硬貨を取り出すことができれば金運に恵まれるという言い伝えも残されています。
              </p>
              <p>
                参拝後は、門前に広がる「豊川稲荷表参道商店街」へ足を運びましょう。きつねのモニュメントが並ぶレトロな通りには、香ばしい醤油と甘辛いタレの香りが立ち込めます。名物の「豊川いなり寿司」は、わさび風味、五目、炙り、天ぷらいなりなど多種多様。温かいお茶とともに食べ歩きを楽しみ、新年の福をいただくのが東三河初詣の王道スタイルです。
              </p>
            </div>
          </section>

          {/* Section 2: 湯谷温泉と奥三河の冬情趣 */}
          <section className="space-y-6">
            <div className="border-l-4 border-rose-600 pl-4">
              <span className="text-rose-600 font-bold text-sm tracking-wider uppercase">Historic Hot Springs & Snow Scenery</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
                開湯1300年の秘湯「湯谷温泉」宇連川渓谷の雪見露天風呂と奥三河の自然
              </h2>
            </div>
            
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
              <p>
                豊川市街からJR飯田線または車で北上し、奥三河の山間部へと入ると、国の名勝「鳳来寺山」の麓に佇む静かな温泉街「湯谷温泉（ゆやおんせん）」が姿を現します。湯谷温泉の開湯は飛鳥時代の西暦703年（大宝3年）。鳳来寺を開創した利修仙人が、宇連川の川底からこんこんと湧き出る温泉を発見し、湯治によって自らの病を治して長寿を保ったという伝説が残る、愛知県内屈指の古湯です。
              </p>
              <p>
                温泉街を流れる宇連川（うれがわ）は、別名「板敷川（いたしきがわ）」とも呼ばれ、川底一面に巨大な平らな岩盤が畳を敷き詰めたように広がっている特異な渓谷景観を形成しています。冬の12月から1月にかけては、渓谷の切り立つ岩肌や常緑の松にうっすらと白雪が降り積もり、水墨画のような幽玄な世界が広がります。
              </p>
              <p>
                湯谷温泉の泉質は、ナトリウム・カルシウム―塩化物温泉（低張性弱アルカリ性低温泉）。無色澄明でまろやかな湯触りが特徴で、塩化物泉特有の塩分が肌の表面を優しく包み込んで水分の蒸発を防ぐため、「温まりの湯」「美肌の湯」として名高い効能を誇ります。冬の冷え切った身体を湯船に沈めると、じんわりと芯から温まり、湯上がり後もポカポカとした熱が持続します。多くの宿が宇連川の渓谷にせり出すように露天風呂を設けており、川面すれすれの位置からせせらぎの音に耳を傾け、立ち上る湯けむりと冬の冷涼な風を感じながら浸かる湯浴みは、まさに奥三河ならではの贅沢です。
              </p>
            </div>
          </section>

          {/* Section 3: 厳選宿泊施設5選 */}
          <section className="space-y-8">
            <div className="border-l-4 border-amber-600 pl-4">
              <span className="text-amber-600 font-bold text-sm tracking-wider uppercase">Featured Accommodations</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
                豊川稲荷初詣＆湯谷温泉を満喫する厳選宿5選
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                楽天トラベルAPIより最新の空室情報・適正宿泊料金・評価スコアを取得。源泉掛け流し露天風呂から駅近ホテルまで厳選。
              </p>
            </div>

            <div className="space-y-8">
              {hotelsList.map((hotel) => (
                <article key={hotel.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6">
                    <div className="md:col-span-5 flex flex-col justify-between">
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-4">
                        <img
                          src={hotel.img}
                          alt={hotel.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                          第{hotel.id}位 厳選名宿
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center text-amber-500">
                            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                            <span className="ml-1 font-bold text-slate-900 text-sm">{hotel.rating}</span>
                          </div>
                          <span className="text-xs text-slate-500">({hotel.reviews}件のクチコミ)</span>
                          <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">
                            {hotel.price}
                          </span>
                        </div>
                        <div className="text-xs text-slate-600 flex items-start gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                          <span>{hotel.access}</span>
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-7 flex flex-col justify-between space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 leading-snug mb-2">
                          {hotel.name}
                        </h3>
                        <p className="text-xs text-amber-800 bg-amber-50 px-3 py-1.5 rounded-lg font-medium mb-3 inline-block">
                          {hotel.special}
                        </p>
                        <p className="text-sm text-slate-700 leading-relaxed mb-4">
                          {hotel.story}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
                          <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                            <span className="font-bold text-slate-900 block mb-1 flex items-center gap-1">
                              <Building className="w-3.5 h-3.5 text-blue-600" />
                              客室選びのコツ
                            </span>
                            <span className="text-slate-600">{hotel.roomTip}</span>
                          </div>
                          <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                            <span className="font-bold text-slate-900 block mb-1 flex items-center gap-1">
                              <Utensils className="w-3.5 h-3.5 text-amber-600" />
                              美食のおすすめ
                            </span>
                            <span className="text-slate-600">{hotel.gourmetTip}</span>
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          {hotel.highlights.map((item: string, idx: number) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs text-slate-500">※楽天トラベル公式提携プラン</span>
                        <a
                          href={hotel.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-700 hover:to-rose-700 text-white font-bold text-xs md:text-sm px-5 py-2.5 rounded-xl shadow transition-all transform hover:-translate-y-0.5"
                        >
                          <span>空室・料金プランを確認</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Section 4: 1泊2日モデルコース */}
          <section className="space-y-6">
            <div className="border-l-4 border-emerald-600 pl-4">
              <span className="text-emerald-600 font-bold text-sm tracking-wider uppercase">Travel Itinerary</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
                豊川稲荷初詣と湯谷温泉雪見湯を満喫する1泊2日王道モデルコース
              </h2>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">1日目</span>
                  <h3 className="font-bold text-slate-900 text-base md:text-lg">豊川稲荷初詣と名物いなり寿司・奥三河へのドライブ</h3>
                </div>
                <div className="pl-4 border-l-2 border-amber-200 space-y-3 text-sm text-slate-700">
                  <p><strong>10:30 豊川駅・豊川市街に到着</strong> - 東名高速豊川ICまたはJR豊川駅へ。車を停めて門前通りへ向かう。</p>
                  <p><strong>11:00 門前町で豊川いなり寿司ランチ</strong> - 老舗店でわさびいなりや五目いなり、きつねきしめんを味わう。</p>
                  <p><strong>12:30 豊川稲荷（妙厳寺）で新春初詣</strong> - 大本殿で厄除開運祈祷を受け、杉木立に佇む霊狐塚で千体の白狐像を拝観。</p>
                  <p><strong>14:30 奥三河・湯谷温泉へ移動</strong> - 国道151号または新東名新城ICを経由して宇連川渓谷沿いを北上（車約40分）。</p>
                  <p><strong>15:30 湯谷温泉の旅館にチェックイン</strong> - 渓谷を見下ろす客室で一息つき、宇連川の雪見露天風呂で身体の芯まで温まる。</p>
                  <p><strong>18:30 夕食に奥三河名物「鳳来牛・三河牛会席」</strong> - 陶板焼きや滋味あふれる薬膳料理、奥三河の地酒で乾杯。</p>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full">2日目</span>
                  <h3 className="font-bold text-slate-900 text-base md:text-lg">朝風呂と鳳来寺山参拝・奥三河名産品ショッピング</h3>
                </div>
                <div className="pl-4 border-l-2 border-rose-200 space-y-3 text-sm text-slate-700">
                  <p><strong>07:30 朝の宇連川を望む露天風呂</strong> - 朝霧が立ち込める静寂の渓谷を眺めながらの贅沢な朝湯。</p>
                  <p><strong>09:00 旅館を出発・鳳来寺山へ</strong> - 国の名勝・天然記念物である鳳来寺山へ向かい、歴史ある鳳来寺や鳳来山東照宮を参拝。</p>
                  <p><strong>11:30 板敷川の奇岩景観散策</strong> - 宇連川にかかる湯谷大橋から畳を敷き詰めたような独特の川底と清流の景観を鑑賞。</p>
                  <p><strong>13:00 道の駅もっくる新城でランチ＆お土産購入</strong> - 巨大五平餅や猪肉ジビエラーメンを味わい、地元産の新鮮野菜や地酒を購入。</p>
                  <p><strong>15:30 新東名新城ICより帰路へ</strong> - 快適なハイウェイドライブで帰路へ。</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: 冬のアクセス＆注意点 */}
          <section className="space-y-6">
            <div className="border-l-4 border-amber-600 pl-4">
              <span className="text-amber-600 font-bold text-sm tracking-wider uppercase">Travel Tips & Weather</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
                冬の東三河・奥三河旅行の気候・服装と交通アクセスのアドバイス
              </h2>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-slate-200 space-y-4 text-slate-700 text-sm md:text-base leading-relaxed">
              <div className="flex items-start gap-3">
                <Sunrise className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">平野部と山間部の気温差と防寒対策</h3>
                  <p className="text-slate-600 text-sm">
                    豊川市の平野部は比較的温暖ですが、奥三河の湯谷温泉や鳳来寺山エリアは標高が高く、冬期は朝晩を中心に氷点下近くまで冷え込みます。参拝や散策で屋外を歩く時間が長くなるため、厚手のダウンコートやマフラー、手袋、保温性のあるインナーをご用意ください。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <AlertTriangle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">冬の道路凍結とタイヤ対策</h3>
                  <p className="text-slate-600 text-sm">
                    新東名高速道路や国道151号は整備が行き届いていますが、12月下旬から1月の厳冬期に寒波が襲来した際は、トンネル出入口や橋梁、山間部のカーブで路面凍結が発生する恐れがあります。冬期のマイカー・レンタカー利用時はスタッドレスタイヤの装着をおすすめします。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: FAQ Section */}
          <section className="space-y-6">
            <div className="border-l-4 border-amber-600 pl-4">
              <span className="text-amber-600 font-bold text-sm tracking-wider uppercase">Frequently Asked Questions</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
                愛知・豊川稲荷初詣＆湯谷温泉旅行に関するよくある質問
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base md:text-lg mb-2 flex items-start gap-2">
                    <span className="text-amber-600 font-black">Q.</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-slate-700 text-sm md:text-base leading-relaxed pl-6 border-l-2 border-amber-100">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: 内部リンク＆関連特集 */}
          <section className="bg-gradient-to-br from-slate-900 to-amber-950 rounded-3xl p-8 text-white space-y-6 shadow-xl">
            <div>
              <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Related Destinations</span>
              <h2 className="text-xl md:text-2xl font-bold mt-1">
                あわせて読みたい東海・冬の厳選旅特集
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                href="/winter-aichi-gamagori-onsen-mikawawan-mehikari-akazaebi-stay"
                className="bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/10 transition-colors block"
              >
                <span className="text-cyan-400 text-xs font-bold block mb-1">愛知特集</span>
                <span className="font-bold text-sm block mb-1">蒲郡＆西浦・三谷温泉！深海エビと竹島弁天初詣名宿</span>
                <span className="text-xs text-slate-300">三河湾の冬の味覚アカザエビと竹島弁天初詣…</span>
              </Link>
              <Link
                href="/winter-aichi-minamichita-onsen-torafugu-chita-beef-stay"
                className="bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/10 transition-colors block"
              >
                <span className="text-amber-400 text-xs font-bold block mb-1">愛知特集</span>
                <span className="font-bold text-sm block mb-1">南知多＆日間賀島！冬のとらふぐ街道と知多牛名宿</span>
                <span className="text-xs text-slate-300">知多半島の冬のとらふぐ三昧と絶景オーシャンビュー…</span>
              </Link>
              <Link
                href="/winter-shizuoka-hamanako-kanzanji-torafugu-unagi-stay"
                className="bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/10 transition-colors block"
              >
                <span className="text-emerald-400 text-xs font-bold block mb-1">静岡特集</span>
                <span className="font-bold text-sm block mb-1">浜名湖＆舘山寺温泉！冬の遠州灘天然とらふぐとうなぎ名宿</span>
                <span className="text-xs text-slate-300">東三河に隣接する浜名湖の冬の極上美食温泉…</span>
              </Link>
              <Link
                href="/winter-gifu-gero-onsen-fireworks-hida-beef-stay"
                className="bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/10 transition-colors block"
              >
                <span className="text-rose-400 text-xs font-bold block mb-1">岐阜特集</span>
                <span className="font-bold text-sm block mb-1">下呂温泉！冬花火ミュージカルと飛騨牛すき焼き名宿</span>
                <span className="text-xs text-slate-300">日本三名泉の美肌湯と冬花火の競演…</span>
              </Link>
              <Link
                href="/features"
                className="bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/10 transition-colors block"
              >
                <span className="text-purple-400 text-xs font-bold block mb-1">特集一覧</span>
                <span className="font-bold text-sm block mb-1">全国の冬シーズン・年末年始旅行特集一覧</span>
                <span className="text-xs text-slate-300">全国各地の厳選温泉・初詣・冬の味覚特集を網羅…</span>
              </Link>
              <Link
                href="/"
                className="bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/10 transition-colors block"
              >
                <span className="text-blue-400 text-xs font-bold block mb-1">トップページ</span>
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
