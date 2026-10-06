import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Key, Footprints
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12月渋温泉】木造建築が彩る冬のノスタルジー！名宿5選',
  description: '開湯1300年、下駄の音がカランコロンと響く長野県・信州渋温泉。11月の晩秋の冷気から12月の雪舞う石畳の温泉街へ。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '渋温泉 宿泊 11月 12月, 渋温泉 九湯めぐり, 歴史の宿 金具屋 予約, 渋温泉 外湯めぐり 鍵, 信州プレミアム牛 旅館, 地獄谷野猿公苑 スノーモンキー 渋温泉, 渋温泉 冬 雪景色',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-nagano-shibu-onsen-nine-sotoyu-stay/",
  },
  openGraph: {
    title: '【11・12月渋温泉】木造建築が彩る冬のノスタルジー！名宿5選',
    description: '開湯1300年、下駄の音がカランコロンと響く長野県・信州渋温泉。11月の晩秋の冷気から12月の雪舞う石畳の温泉街へ。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-nagano-shibu-onsen-nine-sotoyu-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月渋温泉の厄除巡浴九湯めぐりと石畳情緒】木造建築が彩る冬のノスタルジー・信州プレミアム牛と地酒の宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月渋温泉の厄除巡浴九湯めぐりと石畳情緒】木造建築が彩る冬のノスタルジー・信州プレミアム牛と地酒の宿5選",
    description: "開湯1300年、下駄の音がカランコロンと響く長野県・信州渋温泉。11月の晩秋の冷気から12月の雪舞う石畳の温泉街へ。宿泊者限定のマスターキーで巡る名物「厄除巡浴九湯めぐり」、登録有形文化財の木造建築・歴史の宿金具屋を照らす灯り、そして極上の信州プレミアム牛肉と地酒を味わう冬の風情あふれる名宿ガイド。",
  }
};

export default function ShibuWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-nagano-shibu-onsen-nine-sotoyu-stay#article",
        "headline": "【11・12月渋温泉の厄除巡浴九湯めぐりと石畳情緒】木造建築が彩る冬のノスタルジー・信州プレミアム牛と地酒の宿5選",
        "description": "開湯1300年、下駄の音がカランコロンと響く長野県・信州渋温泉。11月の晩秋の冷気から12月の雪舞う石畳の温泉街へ。宿泊者限定のマスターキーで巡る名物「厄除巡浴九湯めぐり」、登録有形文化財の木造建築・歴史の宿金具屋を照らす灯り、そして極上の信州プレミアム牛肉と地酒を味わう冬の風情あふれる名宿ガイド。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "datePublished": "2026-09-27T00:00:00+09:00",
        "dateModified": "2026-09-27T00:00:00+09:00",
        "author": {
          "@type": "Organization",
          "name": "日本全国・旅宿クラウド 編集部",
          "url": "https://croud-travel.pages.dev"
        },
        "publisher": {
          "@type": "Organization",
          "name": "日本全国・旅宿クラウド",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.pages.dev/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-nagano-shibu-onsen-nine-sotoyu-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-nagano-shibu-onsen-nine-sotoyu-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "渋温泉名物の「厄除巡浴九湯めぐり」の仕組みと利用方法は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "渋温泉の宿泊者だけが体験できる特別な外湯めぐりです。チェックイン時に宿泊宿から『外湯巡り専用のマスターキー』を預かります。石畳の通りに点在する一番湯『初湯』から九番湯『大湯』までの9つの外湯の鍵を開けて入浴できます。各外湯に備え付けの朱印を『巡浴手ぬぐい（各宿や土産物店で販売）』に押し、最後に温泉街の高台にある『渋高薬師』へ参拝して印をいただくことで、満願成就・厄除け・安産育児・不老長寿のご利益があると古くから信仰されています。"
            }
          },
          {
            "@type": "Question",
            "name": "渋温泉の11月・12月の気候と積雪状況は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "志賀高原の麓に位置する渋温泉は、11月上旬から朝晩の冷え込みが厳しくなり、11月下旬には山沿いで初雪が舞います。12月に入ると温泉街の石畳や木造建築の屋根にも本格的な積雪が見られ、美しい雪景色が広がります。冬の気温は日中でも2〜6度、朝晩は氷点下まで下がります。石畳の道は凍結して滑りやすくなるため、宿で貸し出される丹前・羽織の着用に加え、歩きやすい防滑ブーツや厚手の靴下の持参が強く推奨されます。車の場合はスタッドレスタイヤが必須です。"
            }
          },
          {
            "@type": "Question",
            "name": "地獄谷野猿公苑（スノーモンキー）へは渋温泉からどうやって行けますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "渋温泉から地獄谷野猿公苑の入口（上林温泉・野猿公苑専用駐車場）までは、車やタクシーで約5〜10分、路線バスなら約7分です。そこから野猿公苑までは、雪に覆われた美しい杉林の遊歩道を徒歩で片道約30〜35分歩きます。11月下旬〜12月は野生のニホンザルが厳しい寒さを凌ぐために天然温泉に肩まで浸かる『スノーモンキー』の愛らしい姿を高確率で観察できます。遊歩道は雪やぬかるみがあるため、防水性のあるスノーブーツと防寒具が必須です。"
            }
          },
          {
            "@type": "Question",
            "name": "渋温泉で味わうべきご当地グルメや名産品は何ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "長野県が誇るブランド黒毛和牛『信州プレミアム牛』やすき焼き、信州の清流で育つ『信州サーモン』のお造りは各宿の会席料理の花形です。また、温泉街では湯けむりの中で蒸し上げられる熱々の『温泉まんじゅう（うずまきパン等）』の食べ歩きや、北信州の十割手打ち蕎麦、志賀高原の湧水で仕込まれた銘酒『縁喜（玉村本店）』の地酒やクラフトビールも大人気です。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.pages.dev/winter-nagano-shibu-onsen-nine-sotoyu-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "渋温泉　歴史の宿　金具屋",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F32044%2F32044.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "渋温泉　春蘭の宿　さかえや",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F3139%2F3139.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "渋温泉　渋ホテル",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6140%2F6140.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "信州　渋温泉　古久屋",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2724%2F2724.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "渋温泉　御宿　炭乃湯",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7124%2F7124.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "渋温泉　歴史の宿　金具屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/32044/32044.jpg",
              rating: 4.53,
              reviews: 1004,
              price: "¥18,700〜",
              access: "長野電鉄線　湯田中駅／上信越自動車道　信州中野ＩＣより国道２９２号線を志賀高原方面へ約１５分",
              special: "国登録文化財の建築や豊富な源泉からなるかけ流しの風呂など、昔ながらの温泉旅情をお楽しみ下さい。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F32044%2F32044.html",
              story: "創業260余年、国の登録有形文化財に指定された木造4階建て「斉月楼」と130畳の大広間を擁する渋温泉の象徴「歴史の宿 金具屋」。昭和初期の宮大工が腕によりをかけて造り上げた木造建築は、夜になると暖色系のライトに照らし出され、まるで映画の世界に迷い込んだかのようなノスタルジックな幻想美を放ちます。館内には4つの自家源泉があり、ステンドグラスが美しい洋風風呂「浪漫風呂」や、鎌倉時代の建築を模した「鎌倉風呂」、さらに趣の異なる5つの無料貸切風呂（恵の湯、子安の湯など）が点在。すべてが一切の加水・加温を行わない純粋な源泉かけ流しで、湯船ごとに異なる泉質と湯の香りを贅沢に堪能できます。館内文化財ツアーも毎日開催され、建築美と歴史の奥深さに圧倒されます。",
              roomTip: "登録有形文化財の「斉月楼」客室や、宮大工の意匠が凝らされた木造数寄屋客室。障子を開ければ、石畳の通りや渋温泉の瓦屋根が広がり、昭和初期の旅人気分に浸れます。",
              gourmetTip: "信州の旬を凝縮した山里会席。信州プレミアム牛のすき焼きや陶板焼き、信州サーモンのお造り、千曲川流域の根菜や名物蕎麦がきなど、滋味豊かな信州の恵みを味わえます。",
              highlights: [
                "国登録有形文化財・木造4階建て「斉月楼」＆映画の世界のような夜間ライトアップ",
                "4つの自家源泉と8つのお風呂（5つの無料貸切風呂）完全源泉かけ流し",
                "信州プレミアム牛のすき焼き・陶板焼き＆山里の恵み会席料理"
              ]
            },
            {
              id: 2,
              name: "渋温泉　春蘭の宿　さかえや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/3139/3139.jpg",
              rating: 4.88,
              reviews: 1248,
              price: "¥16,720〜",
              access: "上信越自動車道信州中野ＩＣより車で１５分、ＪＲ湯田中駅よりバス",
              special: "【ロウリュサウナ付き貸切風呂と高気圧酸素カプセルルーム】源泉かけ流しで至福のひとときを。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F3139%2F3139.html",
              story: "渋温泉の温泉街の中心に位置し、伝統的な湯治場のぬくもりと洗練された現代のホスピタリティが見事に調和したハイクラス旅館「春蘭の宿 さかえや」。楽天トラベルアワードでも常に極めて高い評価を獲得し、きめ細やかなおもてなしでリピーターを魅了し続けています。自慢の大浴場には、渋温泉の良質な弱アルカリ性硫黄泉がなみなみと注がれ、湯の花が浮かぶ柔らかいお湯が冷え切った体を芯から解きほぐします。また、北信州の木々を取り入れた温もりある貸切風呂や、温泉スチームサウナも完備。浴衣を着て外湯めぐりへ出かける際も、丁寧な案内と防寒具の貸出など細やかな配慮が行き届いており、初冬の温泉街散策を心ゆくまで楽しめます。",
              roomTip: "モダンな和洋室やベッドを備えたリニューアル客室が快適。畳の清々しさと上質な寝心地が共存し、静かな夜をゆっくりと過ごせます。",
              gourmetTip: "全国的な料理コンテストでも受賞歴を誇る料理長による創作懐石。長野県産信州牛の低温調理ローストや信州雪鱒、旬の北信濃野菜を使った一皿一皿が目にも鮮やかです。",
              highlights: [
                "楽天トラベル高評価アワード常連宿＆洗練されたおもてなしと良質な硫黄泉",
                "温泉スチームサウナ＆上質なリニューアル和モダン客室で過ごす冬の休日",
                "受賞料理長が手掛ける創作懐石＆信州牛ローストビーフと季節の美皿"
              ]
            },
            {
              id: 3,
              name: "渋温泉　渋ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/6140/6140.jpg",
              rating: 4.63,
              reviews: 650,
              price: "¥20,900〜",
              access: "上信越自動車道・信州中野ICより12km15分 北陸長野新幹線・長野乗り換え長野電鉄・湯田中下車タクシー・バス８分",
              special: "【ノスタルジックに浸れる時間】信州の味覚と貸切露天風呂で極上の癒しを！懐かしさに心温まる宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6140%2F6140.html",
              story: "「ふるさとに帰ってきたような温かい宿」をコンセプトに、家族的な笑顔と細やかな心配りで旅人を迎える「渋温泉 渋ホテル」。温泉街のやや静かな一角に佇み、館内には昭和レトロな小学校を思わせる遊び心あふれる展示や駄菓子コーナーがあり、旅情を優しくかき立てます。自慢の大浴場「竹の湯」と露天風呂には、渋温泉の天然源泉が掛け流されており、肌にしっとりと馴染む優しい湯ざわり。11月・12月の澄み切った冷気の中、露天風呂から見上げる星空と湯けむりの情緒は旅の疲れをじんわりと癒やしてくれます。九湯めぐりの外湯へのアクセスも良好で、湯巡り用バスタオルや湯かごの用意など、快適な温泉街散策をサポートしてくれます。",
              roomTip: "落ち着いた純和風客室。清潔感にあふれ、窓からは北信州の山あいの静かな風景が望めます。ファミリーやグループにも過ごしやすい広めの客室が充実。",
              gourmetTip: "手作りにこだわった田舎風会席料理。柔らかな信州牛の陶板焼きをはじめ、信州みそ仕立ての鍋料理、手打ち信州蕎麦、信州リンゴを使ったデザートなど、温かみあふれる献立です。",
              highlights: [
                "ノスタルジックな昭和レトロ空間＆肌に優しい弱アルカリ性源泉大浴場・露天",
                "九湯めぐりに便利な湯かご・防寒具完備＆家族的な温かいおもてなし",
                "信州牛陶板焼き＆手打ち信州蕎麦と心温まる手作り田舎風会席"
              ]
            },
            {
              id: 4,
              name: "信州　渋温泉　古久屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/2724/2724.jpg",
              rating: 4.10,
              reviews: 288,
              price: "¥30,800〜",
              access: "JR長野駅から長野電鉄に乗換、終点湯田中駅下車後、タクシーで５分。",
              special: "【総合口コミ5.0】館内全て貸切で6種の源泉・九湯14槽の湯めぐりと信州牛や四季折々豊かな食材を堪能",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2724%2F2724.html",
              story: "創業寛政年間、200年以上の歴史を刻む「信州 渋温泉 古久屋（こくや）」。渋温泉の目抜き通りに面し、宿の地下から湧出する自慢の自家源泉を含む「6つの源泉」を贅沢に引き湯している温泉自慢の老舗旅館です。館内には「福禄寿の湯」や天然温泉露天風呂など、多彩な湯船が揃い、湯口ごとに異なる泉質・温度・濁り具合を体感できるのが最大の魅力。特に冬の時期、外湯めぐりで冷えた体に、湯量豊富な古久屋の熱めの湯が心地よく染み渡ります。館内全体に漂う重厚な民芸調の佇まいと、信州の歴史を感じさせる落ち着いた空間は、本物志向の温泉ファンを唸らせる魅力に満ちています。",
              roomTip: "客室専用の源泉かけ流し露天風呂を備えた特別室が人気。誰にも邪魔されず、渋の銘湯をプライベートに独占しながら冬の夜長を楽しめます。",
              gourmetTip: "信州の山海の幸を盛り込んだ信州会席。A5等級信州牛の炭火焼きやしゃぶしゃぶ、北信州のきのこをふんだんに使った鍋、清流イワナの塩焼きなど、酒が進む逸品が揃います。",
              highlights: [
                "創業200余年の老舗＆地下から湧き出る自家源泉を含む「6つの源泉」引き湯",
                "湯口ごとに異なる泉質と湯ざわりを体感＆客室専用露天風呂付き客室あり",
                "最高等級A5信州牛炭火焼き＆北信州キノコ鍋と清流イワナの塩焼き"
              ]
            },
            {
              id: 5,
              name: "渋温泉　御宿　炭乃湯",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7124/7124.jpg",
              rating: 4.64,
              reviews: 269,
              price: "¥10,010〜",
              access: "長野電鉄「湯田中駅」よりタクシー又はバスで５分",
              special: "こころとからだを芯から温める肌に優しい温泉は、源泉１００％かけ流しの当館自慢の名湯です。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7124%2F7124.html",
              story: "渋温泉の石畳通りのほぼ中央、名物外湯「九番湯・大湯」のすぐ斜め向かいという抜群の好立地に佇む「渋温泉 御宿 炭乃湯」。木造の温もりが心地よい和風旅館で、最上階（4階）には展望大浴場と展望露天風呂を備えています。渋温泉の街並みと、雪を戴く北信州の山々を見晴らしながら浸かる展望風呂の爽快感は格別。もちろん九湯めぐりへの出入りも至便で、大湯に入った後すぐ宿の暖かい部屋に戻れるアクセスの良さは、初冬の寒風が吹く季節には何よりの贅沢です。館内にはアットホームで心温まるもてなしが息づき、一人旅から夫婦・カップルまでゆったりと寛げる心地よい空間が整っています。",
              roomTip: "最上階や街側の和室からは、石畳を行き交う下駄の音や温泉街の湯けむりが眺められ、旅情を存分に味わえます。",
              gourmetTip: "信州牛のすき焼きや陶板焼きを中心とした手作り和食会席。山菜料理や信州名物の馬刺し、女将自慢の心尽くしの小鉢が並び、地酒とともにゆったりと味わえます。",
              highlights: [
                "九番湯「大湯」の目の前という絶好の立地＆最上階4階の絶景展望露天風呂",
                "石畳の街並みと雪の山並みを見晴らす展望風呂＆九湯巡りへの抜群のアクセス",
                "信州牛すき焼き＆極上馬刺しと信州味噌仕立ての心尽くし和食会席"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-red-950 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-950">
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85"
          alt="初冬の信州渋温泉・ライトアップされた歴史の宿金具屋と石畳に舞い散る初雪"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/90 text-red-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-red-800/50">
            <Footprints className="w-4 h-4 text-red-300" />
            <span>11月・12月限定 開湯1300年の石畳と外湯巡り・信州牛会席特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月渋温泉の厄除巡浴九湯めぐりと石畳情緒】<br className="hidden sm:inline" />
            木造建築が彩る冬のノスタルジー・信州プレミアム牛と地酒の宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            下駄の音が心地よく響く石畳の小路。宿泊者だけに許された外湯の鍵を手に巡る「九湯めぐり」で厄を祓い、湯上がりに灯る金具屋の木造楼閣に見惚れる。極上信州牛と手打ち蕎麦、地酒に酔いしれる心温まる冬の温泉旅。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-red-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-red-400" /> 長野県下高井郡山ノ内町大字平穏（信州渋温泉）</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月渋温泉】木造建築が彩る冬のノスタルジー！名宿5選","item":"https://croud-travel.pages.dev/winter-nagano-shibu-onsen-nine-sotoyu-stay"}]}) }}
      />
        
        {/* Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-red-100">
            <div className="p-2.5 rounded-2xl bg-red-50 text-red-800">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-red-800 uppercase tracking-widest">Nostalgic Cobblestone Hot Spring Town</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                下駄の音と湯けむりに包まれる冬の石畳。宿泊者だけが巡る奇跡の「九湯めぐり」
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            長野県北東部、志賀高原の山裾を流れる横湯川沿いに広がる信州・渋温泉（しぶおんせん）。奈良時代の僧・行基が発見したと伝えられ、戦国時代には武田信玄が川中島の合戦で傷ついた武士たちを癒やす隠し湯として利用したとされる、開湯1300年の歴史を誇る名湯です。温泉街の目抜き通りには石畳が敷き詰められ、昭和初期や大正ロマンの風情を今に残す木造多層建築の湯宿が軒を連ねます。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            渋温泉の最大の魅力は、日本で唯一ともいえる本格的な「厄除巡浴九湯めぐり（やくよけじゅんよくきゅうとうめぐり）」です。石畳の通り沿いには、それぞれ泉質や効能が異なる9つの共同浴場（初湯、笹の湯、綿の湯、竹の湯、松の湯、目洗いの湯、七繰の湯、神明滝の湯、そして大湯）が点在しています。これらは地元住民が日常的に大切に守り継いでいるもので、渋温泉の宿に宿泊した客にのみ「外湯巡り専用のマスターキー」が貸し出されます。浴衣に丹前を羽織り、カランコロンと下駄を鳴らしながら巡る体験は、日本の温泉文化の真髄と言えます。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            11月下旬から12月にかけて、北信州の山々から冷涼な風が吹き下ろし、石畳や瓦屋根に薄っすらと初雪が舞い散ります。冷え切った身体に、外湯の熱めの源泉がじわりと染み渡る快感は冬ならでは。湯上がりに夜の通りへ出ると、登録有形文化財「歴史の宿 金具屋」の斉月楼が温かな橙色の光に照らし出され、湯けむりと雪が相まって幻想的な息をのむ美しさを生み出します。そして宿の膳には、信州プレミアム牛のすき焼きや信州サーモン、地酒の熱燗。冬の寒さを忘れる温かな時間がここに流れています。
          </p>
          
          <div className="bg-red-50/70 rounded-2xl p-5 border border-red-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Key className="w-4 h-4 text-red-700" />
                11月・12月渋温泉 旅のハイライト
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                宿泊者専用鍵で巡る厄除九湯めぐり・金具屋の木造建築ライトアップ・地獄谷スノーモンキー・信州牛会席
              </p>
            </div>
            <a
              href="#hotels"
              className="px-5 py-2.5 bg-red-700 hover:bg-red-800 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors whitespace-nowrap shadow-sm"
            >
              名宿5選を見る
            </a>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="bg-stone-100/80 rounded-2xl p-6 border border-stone-200">
          <h2 className="text-base font-bold text-stone-900 mb-4 flex items-center gap-2">
            <Compass className="w-5 h-5 text-red-700" />
            目次・インデックス
          </h2>
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-stone-700">
            <a href="#nine-baths" className="hover:text-red-700 hover:underline flex items-center gap-1.5">
              <span>1. 厄除巡浴九湯めぐりの全貌と正しい巡り方・作法</span>
            </a>
            <a href="#climate" className="hover:text-red-700 hover:underline flex items-center gap-1.5">
              <span>2. 11月・12月の気候・雪道とスノーモンキー訪問準備</span>
            </a>
            <a href="#hotels" className="hover:text-red-700 hover:underline flex items-center gap-1.5">
              <span>3. 信州渋温泉 11・12月に泊まりたい名宿厳選5選</span>
            </a>
            <a href="#gourmet" className="hover:text-red-700 hover:underline flex items-center gap-1.5">
              <span>4. 信州プレミアム牛と地酒・冬の信州郷土の味覚</span>
            </a>
            <a href="#itinerary" className="hover:text-emerald-700 hover:underline flex items-center gap-1.5">
              <span>5. 1泊2日 王道モデルコース（石畳散策とスノーモンキー）</span>
            </a>
            <a href="#faq" className="hover:text-red-700 hover:underline flex items-center gap-1.5">
              <span>6. よくある質問（FAQ）とアクセス情報</span>
            </a>
          </nav>
        </section>

        {/* Nine Baths Guide */}
        <section id="nine-baths" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-800">
              <Key className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              厄除巡浴九湯めぐりの全貌：9つの外湯の泉質と満願成就の作法
            </h2>
          </div>
          
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            九湯めぐりは、一番湯から順に巡ることで「苦（九）を流し、厄を祓う」とされています。宿で購入できる専用の「巡浴祈願手ぬぐい（約350円）」に各湯のスタンプを押し、最後に高台の渋高薬師へ登って最後の印をいただき、祈願します。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 text-xs">
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
              <span className="font-bold text-red-800 block">一番湯：初湯（はつゆ）</span>
              <p className="text-stone-600">胃腸を整える湯。一番初めに開かれた歴史ある源泉。弱アルカリ性で肌に優しい。</p>
            </div>
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
              <span className="font-bold text-red-800 block">二番湯：笹の湯（ささのゆ）</span>
              <p className="text-stone-600">湿疹や皮膚病に効く美肌の湯。昔、笹藪の中から湧き出たことに由来。</p>
            </div>
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
              <span className="font-bold text-red-800 block">三番湯：綿の湯（わたのゆ）</span>
              <p className="text-stone-600">切り傷や皮膚病に効く。白い湯の花が綿のように舞うことから名付けられた。</p>
            </div>
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
              <span className="font-bold text-red-800 block">四番湯：竹の湯（たけのゆ）</span>
              <p className="text-stone-600">痛風に効くとされる湯。地獄谷からの引湯で、高温の良泉が注ぎ込む。</p>
            </div>
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
              <span className="font-bold text-red-800 block">五番湯：松の湯（まつのゆ）</span>
              <p className="text-stone-600">神経痛や冷え性に効く湯。身体の芯から温まり、冬の冷えを解消してくれる。</p>
            </div>
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
              <span className="font-bold text-red-800 block">六番湯：目洗いの湯（めあらいのゆ）</span>
              <p className="text-stone-600">眼病や美肌に効く名湯。目に良いメタケイ酸を豊富に含み、肌もしっとり。</p>
            </div>
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
              <span className="font-bold text-red-800 block">七番湯：七繰の湯（ななくりのゆ）</span>
              <p className="text-stone-600">外傷の回復に効く湯。七回入れば全快すると言われる名泉。</p>
            </div>
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
              <span className="font-bold text-red-800 block">八番湯：神明滝の湯（しんめいたきのゆ）</span>
              <p className="text-stone-600">婦人病に効く子宝の湯。裏山の神明山から湧き出る神聖な源泉。</p>
            </div>
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 space-y-1 sm:col-span-2 md:col-span-1">
              <span className="font-bold text-amber-900 block">九番湯：大湯（おおゆ）</span>
              <p className="text-amber-950">九湯の総仕上げ。赤茶色の含鉄泉が注ぎ、蒸し風呂（温泉サウナ）も完備された圧巻の名湯。</p>
            </div>
          </div>
        </section>

        {/* Climate & Snow Monkey */}
        <section id="climate" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-sky-50 text-sky-800">
              <Snowflake className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              11・12月の気候と地獄谷野猿公苑（スノーモンキー）観光ガイド
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600">
            <div className="space-y-3">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-red-600" />
                11月・12月の気温と石畳の路面凍結
              </h3>
              <p className="leading-relaxed">
                渋温泉は標高約700mに位置し、11月は紅葉の終わりから晩秋の凛とした寒さへ移行します。11月中旬の夜間は氷点下に達し、11月下旬〜12月には雪が積もります。濡れた石畳は凍結しやすいため、下駄での歩行時はすり足で慎重に歩きましょう。宿で長靴や滑り止め付き履物を貸し出している場合もあります。
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-red-600" />
                地獄谷野猿公苑の冬の観察ポイント
              </h3>
              <p className="leading-relaxed">
                温泉に浸かる野生の猿「スノーモンキー」として世界中から観光客が訪れる地獄谷野猿公苑。猿たちが温泉に入るのは主に「気温が下がる寒い冬」です。11月下旬以降の寒い日や雪の日は、家族連れの猿たちが気持ちよさそうに湯船で目を細める決定的瞬間に立ち会えます。上林温泉駐車場から徒歩30分の雪道遊歩道はスノーブーツ必須です。
              </p>
            </div>
          </div>
        </section>

        {/* Hotels List */}
        <section id="hotels" className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Rakuten Travel Verified Heritage Inns</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              11・12月信州渋温泉 泊まりたい名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              文化財建築の風情、自家源泉の贅沢な湯量、信州牛会席の美味しさ、そして九湯めぐりの至便性を兼ね備えた名宿を厳選。
            </p>
          </div>

          <div className="space-y-10">
            {hotelList.map((h) => (
              <div
                key={h.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/90 hover:shadow-md transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Image Column */}
                  <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[280px] bg-stone-100">
                    <Image
                      src={h.img}
                      alt={h.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute top-4 left-4 bg-stone-900/85 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
                      <span className="w-2 h-2 rounded-full bg-red-400" />
                      厳選第{h.id}位
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 text-amber-500">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="text-sm font-bold text-stone-900">{h.rating}</span>
                          <span className="text-xs text-stone-400">（{h.reviews}件のクチコミ）</span>
                        </div>
                        <span className="text-xs font-medium px-2.5 py-1 bg-stone-100 text-stone-600 rounded-lg">
                          目安: {h.price} / 泊
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                        {h.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                        {h.access}
                      </p>

                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed bg-stone-50/80 p-3.5 rounded-xl border border-stone-100">
                        {h.special}
                      </p>

                      <div className="pt-2 space-y-2">
                        <h4 className="text-xs font-bold text-stone-900 tracking-wider uppercase flex items-center gap-1.5 text-red-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-600" />
                          宿の魅力と客室・温泉・美食のこだわり
                        </h4>
                        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                          {h.story}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs">
                        <div className="p-2.5 rounded-xl bg-red-50/50 border border-red-100 text-red-950">
                          <span className="font-bold block text-red-800 mb-0.5">客室の選び方：</span>
                          {h.roomTip}
                        </div>
                        <div className="p-2.5 rounded-xl bg-amber-50/50 border border-amber-100 text-amber-950">
                          <span className="font-bold block text-amber-800 mb-0.5">料理長のこだわり：</span>
                          {h.gourmetTip}
                        </div>
                      </div>

                      <div className="space-y-1.5 pt-2">
                        {h.highlights.map((hl, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-stone-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="text-xs text-stone-400">
                        ※最新の空室状況・限定プランは楽天トラベル公式でご確認ください
                      </div>
                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-red-700 hover:bg-red-800 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200"
                      >
                        <span>空室・料金プランを確認</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gourmet Section */}
        <section id="gourmet" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-800">
              <Utensils className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の北信州の美食：信州プレミアム牛と十割蕎麦・蔵元直送の寒造り地酒
            </h2>
          </div>
          
          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <p>
              外湯めぐりで心地よくお腹を空かせた後に待っているのが、山国・長野ならではの極上会席です。「信州プレミアム牛肉」は、長野県が独自に定めた厳しい肉質基準と、オレイン酸含有率の基準をクリアした最高峰の黒毛和牛。人肌で溶けるほどの融点の低さと、芳醇でサラリとした上質な脂の甘みが特徴で、熱々のすき焼きや陶板焼きでその真価を発揮します。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-600" />
                  千曲川水系の清流サーモンと信州十割蕎麦
                </h3>
                <p className="text-stone-600 text-xs leading-relaxed">
                  美しいオレンジ色の身に上質な脂を湛えた「信州サーモン」。ニジマスとブラウントラウトを交配して生まれた信州独自のブランド魚で、クセがなくとろけるような舌触りはお造りに最適です。また、晩秋に収穫されたばかりの新蕎麦粉で打つ香り高い手打ち蕎麦や熱々の蕎麦がきが食卓を彩ります。
                </p>
              </div>
              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  志賀高原の雪解け水で醸す地酒「縁喜」とクラフトビール
                </h3>
                <p className="text-stone-600 text-xs leading-relaxed">
                  渋温泉のすぐ隣、山ノ内町にある寛政17年創業の老舗蔵元「玉村本店」。志賀高原の清らかな伏流水と長野県産米で醸す銘酒「縁喜（えんぎ）」は、キリッとした旨口で冬の鍋物や肉料理に最高の相性を見せます。また同蔵が手掛ける「志賀高原ビール」は日本屈指のクラフトビールとして全国にファンを持ちます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Model Course */}
        <section id="itinerary" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-red-50 text-red-800">
              <Clock className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              1泊2日 理想の冬のモデルコース：九湯めぐりと雪景色の地獄谷スノーモンキー
            </h2>
          </div>

          <div className="space-y-6">
            <div className="border-l-2 border-red-500 pl-4 sm:pl-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-red-100 text-red-800 font-bold text-xs rounded-md">
                  1日目
                </span>
                <h3 className="text-base sm:text-lg font-bold text-stone-900">
                  長野電鉄特急ゆけむり号で湯田中へ・九湯めぐりと夜の金具屋ライトアップ
                </h3>
              </div>
              <ul className="text-xs sm:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li><strong>13:00 長野駅より長野電鉄特急で出発：</strong>展望席のある「ゆけむり号」または「スノーモンキー号」で湯田中駅へ（約45分）。駅前から宿の送迎車またはバスで渋温泉へ（約7分）。</li>
                <li><strong>14:30 宿にチェックイン＆鍵を受け取る：</strong>巡浴手ぬぐいを購入し、マスターキーを手に石畳の通りへ。</li>
                <li><strong>15:00 九湯めぐり前半戦（初湯〜五番湯）：</strong>手ぬぐいに朱印を押しつつ、泉質の異なる外湯を巡り体を芯から温める。湯上がりに温泉まんじゅうを食べ歩き。</li>
                <li><strong>18:30 信州牛会席ディナー：</strong>信州プレミアム牛のすき焼きや信州サーモン、地酒「縁喜」の熱燗を味わう至福の夕べ。</li>
                <li><strong>20:30 夜の石畳散策と金具屋斉月楼：</strong>下駄を鳴らしてライトアップされた金具屋の前へ。湯けむりと温かな光が織りなす大正ロマンの夜景を撮影。九番湯「大湯」で総仕上げ。</li>
              </ul>
            </div>

            <div className="border-l-2 border-red-500 pl-4 sm:pl-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-red-100 text-red-800 font-bold text-xs rounded-md">
                  2日目
                </span>
                <h3 className="text-base sm:text-lg font-bold text-stone-900">
                  渋高薬師で満願成就参拝＆地獄谷野猿公苑でスノーモンキー見学
                </h3>
              </div>
              <ul className="text-xs sm:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li><strong>07:30 朝風呂と信州の和朝食：</strong>宿の露天風呂で爽やかな目覚め。温泉卵や信州味噌汁、炊きたてご飯を堪能。</li>
                <li><strong>09:00 渋高薬師へ満願成就参拝：</strong>石段を登り、すべての朱印が揃った手ぬぐいに最後の印をいただいて旅の無事と健康を祈願。</li>
                <li><strong>10:00 地獄谷野猿公苑へ：</strong>タクシーまたはバスで上林温泉へ。雪の杉林遊歩道を30分歩き、温泉に気持ちよさそうに浸かる野生の猿たちと対面。</li>
                <li><strong>13:00 小布施の町並み散策：</strong>長野電鉄で途中下車し、栗菓子の名店が並ぶ「小布施」へ。名物の栗おこわや栗スイーツを味わう。</li>
                <li><strong>16:00 長野駅より新幹線で帰路へ：</strong>北陸新幹線で東京・北陸方面へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        

        {/* Related Features & Internal Links */}
        <section className="bg-stone-100/80 rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-6">
          <div className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-red-700" />
              あわせて読みたい信州・甲信越の冬温泉特集
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              冬の味覚、名湯露天風呂、雪景色を楽しむ日本全国の厳選特集記事。旅の目的に合わせてぜひご覧ください。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 text-xs sm:text-sm">
            <Link
              href="/winter-nagano-jigokudani-snow-monkey-stay"
              className="p-3.5 bg-white rounded-xl border border-stone-200/80 hover:border-red-500 hover:shadow-sm transition-all group"
            >
              <div className="font-bold text-stone-900 group-hover:text-red-700 mb-1">
                地獄谷温泉とスノーモンキー雪景色特集
              </div>
              <p className="text-xs text-stone-500 line-clamp-2">
                温泉に浸かる野生の猿たちと湯田中渋温泉郷の名宿を巡る冬のプレミアムガイド。
              </p>
            </Link>

            <Link
              href="/winter-nagano-nozawa-onsen-powder-snow-sotoyu-stay"
              className="p-3.5 bg-white rounded-xl border border-stone-200/80 hover:border-red-500 hover:shadow-sm transition-all group"
            >
              <div className="font-bold text-stone-900 group-hover:text-red-700 mb-1">
                野沢温泉の外湯巡りとパウダースノー特集
              </div>
              <p className="text-xs text-stone-500 line-clamp-2">
                13箇所の外湯巡りと麻釜の湯けむり、信州屈指の豪雪スキーリゾートを満喫。
              </p>
            </Link>

            <Link
              href="/winter-gunma-kusatsu-yukimi-onsen-stay"
              className="p-3.5 bg-white rounded-xl border border-stone-200/80 hover:border-red-500 hover:shadow-sm transition-all group"
            >
              <div className="font-bold text-stone-900 group-hover:text-red-700 mb-1">
                草津温泉の雪見露天と湯畑ライトアップ
              </div>
              <p className="text-xs text-stone-500 line-clamp-2">
                志賀草津高原ルートの先、天下の名湯・草津温泉の雪景色と名物湯もみ体験。
              </p>
            </Link>

            <Link
              href="/winter-yamanashi-isawa-onsen-wine-koshu-beef-stay"
              className="p-3.5 bg-white rounded-xl border border-stone-200/80 hover:border-red-500 hover:shadow-sm transition-all group"
            >
              <div className="font-bold text-stone-900 group-hover:text-red-700 mb-1">
                山梨・石和温泉のワイン風呂と甲州牛会席
              </div>
              <p className="text-xs text-stone-500 line-clamp-2">
                甲府盆地の名湯・石和温泉。冬の搾りたて山梨ヌーボーと甲州牛の贅沢会席。
              </p>
            </Link>

            <Link
              href="/winter-niigata-echigo-yuzawa-snow-sake-stay"
              className="p-3.5 bg-white rounded-xl border border-stone-200/80 hover:border-red-500 hover:shadow-sm transition-all group"
            >
              <div className="font-bold text-stone-900 group-hover:text-red-700 mb-1">
                越後湯沢温泉の雪国情緒と地酒巡り特集
              </div>
              <p className="text-xs text-stone-500 line-clamp-2">
                川端康成ゆかりの雪国名湯。南魚沼産コシヒカリ新米と越後もち豚しゃぶしゃぶ。
              </p>
            </Link>

            <Link
              href="/features"
              className="p-3.5 bg-red-50/70 rounded-xl border border-red-200 hover:bg-red-100/70 transition-all flex flex-col justify-center items-center text-center group"
            >
              <div className="font-bold text-red-900 mb-1">
                全国の旅・特集記事一覧へ →
              </div>
              <p className="text-xs text-red-700">
                春夏秋冬の旬の旅、美食・絶景・名湯の厳選ガイドをチェック
              </p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-nagano-shibu-onsen-nine-sotoyu-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
