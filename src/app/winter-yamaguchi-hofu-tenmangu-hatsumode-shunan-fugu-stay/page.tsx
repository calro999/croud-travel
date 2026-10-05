import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Anchor, AlertTriangle, Sunrise, HeartHandshake, Eye
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月山口】防府天満宮初詣と周南・徳山の冬ふぐ紀行！延縄発祥の地で味わう「本場とらふぐ・笠戸ひらめ・高森牛」と瀬戸内海展望名宿5選",
  description: "新春の学業成就祈願と瀬戸内の極上冬フグを堪能する11〜1月の山口・周防（防府・周南・下松）旅行完全ガイド。「日本最初の天満宮」として名高い防府天満宮の新春初詣や、ふぐ延縄漁発祥の地・周南徳山が誇る本場の「天然＆養殖とらふぐ会席」、下松・笠戸島名物「笠戸ひらめ」、幻の銘柄牛「高森牛」。瀬戸内海の多島美を一望する絶景宿など厳選名宿5選を詳しくご紹介します。",
  keywords: '防府天満宮 初詣, 周南 とらふぐ 宿, 徳山 ふぐ延縄発祥, 笠戸ひらめ 国民宿舎大城, 高森牛 山口, 日本三大天神, 防府市 ホテル, 瀬戸内海 絶景 宿, 山口 冬 旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-yamaguchi-hofu-tenmangu-hatsumode-shunan-fugu-stay/"
  },
  openGraph: {
    title: "【11・12・1月山口】防府天満宮初詣と周南・徳山の冬ふぐ紀行！延縄発祥の地で味わう「本場とらふぐ・笠戸ひらめ・高森牛」と瀬戸内海展望名宿5選",
    description: "新春の学業成就祈願と瀬戸内の極上冬フグを堪能する11〜1月の山口・周防（防府・周南・下松）旅行完全ガイド。「日本最初の天満宮」として名高い防府天満宮の新春初詣や、ふぐ延縄漁発祥の地・周南徳山が誇る本場の「天然＆養殖とらふぐ会席」、下松・笠戸島名物「笠戸ひらめ」、幻の銘柄牛「高森牛」。瀬戸内海の多島美を一望する絶景宿など厳選名宿5選を詳しくご紹介します。",
    url: 'https://croud-travel.com/winter-yamaguchi-hofu-tenmangu-hatsumode-shunan-fugu-stay',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '冬の山口・防府天満宮初詣と周南とらふぐ・瀬戸内海絶景'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月山口】防府天満宮初詣と周南・徳山の冬ふぐ紀行！延縄発祥の地で味わう「本場とらふぐ・笠戸ひらめ・高森牛」と瀬戸内海展望名宿5選",
    description: "新春の学業成就祈願と瀬戸内の極上冬フグを堪能する11〜1月の山口・周防（防府・周南・下松）旅行完全ガイド。「日本最初の天満宮」として名高い防府天満宮の新春初詣や、ふぐ延縄漁発祥の地・周南徳山が誇る本場の「天然＆養殖とらふぐ会席」、下松・笠戸島名物「笠戸ひらめ」、幻の銘柄牛「高森牛」。瀬戸内海の多島美を一望する絶景宿など厳選名宿5選を詳しくご紹介します。",
    images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function YamaguchiHofuShunanWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "【11・12・1月山口】防府天満宮初詣と周南・徳山の冬ふぐ紀行！延縄発祥の地で味わう「本場とらふぐ・笠戸ひらめ・高森牛」と瀬戸内海展望名宿5選",
        "description": "新春の学業成就祈願と瀬戸内の極上冬フグを堪能する11〜1月の山口・周防（防府・周南・下松）旅行完全ガイド。「日本最初の天満宮」として名高い防府天満宮の新春初詣や、ふぐ延縄漁発祥の地・周南徳山が誇る本場の「天然＆養殖とらふぐ会席」、下松・笠戸島名物「笠戸ひらめ」、幻の銘柄牛「高森牛」。瀬戸内海の多島美を一望する絶景宿など厳選名宿5選を詳しくご紹介します。",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80",
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
          "@id": "https://croud-travel.com/winter-yamaguchi-hofu-tenmangu-hatsumode-shunan-fugu-stay"
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
            "name": "山口・防府天満宮初詣＆周南とらふぐ名宿",
            "item": "https://croud-travel.com/winter-yamaguchi-hofu-tenmangu-hatsumode-shunan-fugu-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "「日本最初の天満宮」とされる防府天満宮の新春初詣の見どころとご利益は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "防府天満宮（ほうふてんまんぐう）は、学問の神様として親しまれる菅原道真公をお祀りする神社で、道真公が太宰府へ配流される道中に防府に立ち寄り「我が魂魄はこの地に留まる」と誓ったことから、薨去の翌年（延喜4年・904年）に創建された「日本で最初に創建された天満宮」です。京都の北野天満宮、福岡の太宰府天満宮とともに「日本三大天神」に数えられます。正月三が日には約30万人もの参拝客が訪れ、学業成就・合格祈願・厄除開運を祈願します。登録有形文化財の重厚な楼門や、高台の「春風楼」から見下ろす防府市街と瀬戸内海の眺望は必見です。"
            }
          },
          {
            "@type": "Question",
            "name": "なぜ周南・徳山が「とらふぐ」の名所？ふぐ延縄漁発祥の地とは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "山口県のふぐといえば下関が全国的に有名ですが、実は高級とらふぐを傷つけずに釣り上げる「ふぐ延縄（はえなわ）漁」は、明治中期に周南市粭島（すくもじま）の高山兼吉氏によって考案された伝統漁法です。この延縄漁の開発によって日本中のとらふぐ漁が飛躍的に発展しました。周南・徳山は現在も良質なとらふぐの水揚げ拠点であり、下関の唐戸市場へ出荷される前の最上級とらふぐを、地元ならではのリーズナブルな価格で贅沢に味わえる「知る人ぞ知るふぐの本場」として美食家に愛されています。"
            }
          },
          {
            "@type": "Question",
            "name": "下松・笠戸島の名物「笠戸ひらめ」の特徴と冬に美味しい理由は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "山口県下松市の笠戸島（かさどじま）周辺の清浄な海水と激しい潮流を活かして育てられるブランド魚「笠戸ひらめ」は、天然ヒラメにも劣らない極上の肉質と上品な甘みで全国に知られています。特に12月から1月の厳冬期は寒ビラメとして最も身が引き締まり、脂が乗って旨味が凝縮します。透き通るような白身の薄造りはコリコリとした歯ごたえと芳醇な甘みが特徴で、ヒラメの握り寿司や唐揚げ、粗炊きなど多彩な料理で楽しめます。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の周防エリア（防府・周南・下松）の気候と道路状況・アクセスは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "防府・周南・下松などの瀬戸内海沿岸地域は、瀬戸内海特有の温暖で雨や雪の少ない穏やかな気候が特徴です。平野部や海岸沿いの道路で積雪することは極めて稀で、山陽自動車道や国道2号線も冬期を通して快適に走行できます。ただし、寒波が襲来した早朝や深夜には、山間部の高架橋などで局所的な路面凍結が発生する場合があります。念のため冷え込みの厳しい日は慎重な運転を心がけてください。山陽新幹線の徳山駅や新山口駅からのアクセスも良好です。"
            }
          },
          {
            "@type": "Question",
            "name": "防府天満宮初詣と周南ふぐ・笠戸島を巡る冬の1泊2日おすすめモデルコースは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "【1日目】新山口駅または広島方面から山陽道を利用して防府市へ → 防府市内で名物瓦そばまたは地魚のランチ → 日本最初の天満宮「防府天満宮」で新春合格・厄除け初詣＆春風楼散策 → 毛利博物館と旧毛利家本邸庭園見学 → 山陽道を経由して下松・笠戸島または周南徳山へ移動（車約30分） → 瀬戸内海を一望する絶景宿にチェックイン → 笠戸島温泉の展望露天風呂で夕日鑑賞 → 夕食に「本場とらふぐ会席＆笠戸ひらめ・高森牛」を満喫。【2日目】穏やかな瀬戸内海の朝景色を眺めながら朝食 → 笠戸島海上遊歩道を散策 → 周南市中心街へ移動し遠石八幡宮参拝 → 道の駅ソレーネ周南でお土産（とらふぐ刺身セット、地酒獺祭、柑橘類）を購入 → 帰路へ。"
            }
          }
        ]
      }
    ]
  };

  const hotelsList = [
            {
              id: 1,
              name: "ホテルサン防府",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1139/1139.jpg",
              rating: 4.23,
              reviews: 1466,
              price: "¥4,400〜",
              access: "ＪＲ山陽本線防府駅天神口より徒歩４分。／防府東ＩＣより車で５分、防府西ＩＣより車で６分。",
              special: "男女別サウナ付大浴場☆インターネット(光）有線LAN・Ｗｉ-Ｆｉ無料★ドリンク＆新聞朝刊サービス",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1139%2F1139.html",
              story: "JR防府駅天神口から徒歩約7分、防府天満宮へも徒歩圏内という観光・参拝に最高のロケーションに位置する老舗シティホテル「ホテルサン防府」。菅原道真公を祀る日本最初の天神さま・防府天満宮の新春初詣や、毛利博物館（旧毛利家本邸）の冬の庭園見学の拠点として長年親しまれています。館内は落ち着いた温かみのあるインテリアで統一され、客室には個別空調や快適なベッド、Wi-Fi環境を完備。フロントスタッフの親身で細やかなおもてなしも評判です。ホテル直営のレストランでは、地元防府や周防灘で獲れた新鮮な魚介を使った和洋会席料理や、山口名物の瓦そば、地酒などを楽しむことができます。朝食は和定食または洋定食から選べ、温かいお味噌汁と炊きたてご飯で元気に新年の旅へ出発できます。",
              roomTip: "デラックスツインルーム。ゆったりとした広さがあり、防府天満宮方面の街並みを眺めながら静かな夜を過ごせます。",
              gourmetTip: "「周防の旬会席＆山口名物瓦そば」。瀬戸内の地魚お造りと、熱々の瓦の上で茶そばを焼き上げる山口伝統グルメ。",
              highlights: [
                "防府天満宮へ徒歩圏内・駅近老舗シティホテルの安心ホスピタリティ",
                "周防灘の旬地魚会席＆熱々瓦そば・地元銘酒とのペアリング",
                "毛利博物館や防府天満宮の観光拠点・駐車場完備でドライブにも便利"
              ]
            },
            {
              id: 2,
              name: "天然温泉　天神の湯　スーパーホテル防府駅前",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/70669/70669.jpg",
              rating: 4.16,
              reviews: 1770,
              price: "¥3,040〜",
              access: "【駅近】ＪＲ山陽本線「防府駅」天神口徒歩１分　高速道路・山陽自動車道「防府東I.C」「防府西I.C」車10分",
              special: "JR防府駅目の前！天然温泉&amp;無料朝食ビュッフェ付　新山口駅から３駅１５分",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70669%2F70669.html",
              story: "JR防府駅みなと口から徒歩約1分という駅前至近の好立地に位置し、館内に男女別の天然温泉大浴場「天神の湯」を完備した快適ホテル「天然温泉 天神の湯 スーパーホテル防府駅前」。地下から汲み上げたアルカリ性単純温泉の湯は、肌触りが柔らかく美肌効果と保温効果に優れており、防府天満宮初詣や冬の街歩きで冷えた身体を芯からじんわりと温めてくれます。客室にはぐっすり眠れる特注ベッドと加湿空気清浄機、選べる8種類の快眠枕が揃い、快適な滞在環境が整っています。毎朝無料で提供される「健康朝食ビュッフェ」では、毎朝ホテルで焼き上げるサクサクのクロワッサンや、地元有機野菜のサラダ、山口県産の食材を使った日替わり惣菜が楽しめ、宿泊客から大人気を集めています。",
              roomTip: "エクストラダブルルーム。150cm幅のワイドベッドと快適なデスクスペースを備え、ひとり旅からカップルまで快適に過ごせます。",
              gourmetTip: "「無料健康朝食バイキング」。オーガニックサラダと焼きたてパン、山口名産のふぐだしスープや温かいお惣菜が好評。",
              highlights: [
                "防府駅前徒歩1分・男女別天然温泉大浴場「天神の湯」完備＆無料朝食",
                "有機野菜と焼きたてパンの無料健康朝食バイキング・選べる快眠枕",
                "防府天満宮初詣の拠点に最適・天然温泉で冷えた身体をリフレッシュ"
              ]
            },
            {
              id: 3,
              name: "ホテルルートイン徳山駅前",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/69362/69362.jpg",
              rating: 3.96,
              reviews: 1395,
              price: "¥8,350〜",
              access: "ＪＲ山陽本線　徳山駅（在来線口）より徒歩3分、徳山東ＩＣより車で約１０分、徳山西ＩＣより約２０分",
              special: "■コンビニ徒歩2分■展望大浴場（男女別）■朝食無料バイキング■居酒屋館内併設■ＷＯＷＯＷ無料視聴",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F69362%2F69362.html",
              story: "JR徳山駅新幹線口・在来線口から徒歩約2分、徳山港フェリーターミナルへも徒歩圏内に位置し、周南徳山の観光やふぐグルメの拠点に抜群のアクセスを誇る「ホテルルートイン徳山駅前」。館内にはラジウム人工温泉大浴場「旅人の湯」を備えており、手足を伸ばしてゆったりと浸かれる温かい湯船が、冬の旅の疲れを心地よく癒やしてくれます。周南・徳山は実は「とらふぐ延縄漁発祥の地」として知られ、ホテル周辺の老舗ふぐ料理店や割烹では、下関に劣らない極上の天然とらふぐコースを味わうことができます。客室には全室加湿機能付き空気清浄機とWOWOW無料視聴可能な大型テレビを完備。朝食バイキングでは、ヨーロッパ直輸入の焼きたてパンや和洋のお惣菜が無料で楽しめ、充実した滞在をサポートします。",
              roomTip: "コンフォートシングル・ツイン。上層階からは徳山湾の工業夜景や港を行き交う船を眺められ、落ち着いた空間で寛げます。",
              gourmetTip: "「和洋朝食バイキング」。あつあつのスクランブルエッグや焼き魚、地元山口のお米に具だくさんの味噌汁が揃います。",
              highlights: [
                "徳山駅徒歩2分・ラジウム人工温泉大浴場と周辺とらふぐ名店アクセス",
                "焼きたてクロワッサン無料朝食・WOWOW無料視聴と充実アメニティ",
                "周南工場夜景鑑賞や徳山港フェリー乗船にも便利な立地"
              ]
            },
            {
              id: 4,
              name: "東横ＩＮＮ徳山駅新幹線口",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/56219/56219.jpg",
              rating: 3.94,
              reviews: 996,
              price: "¥5,355〜",
              access: "ＪＲ徳山駅新幹線口より徒歩３０秒。　徳山東インターから車で15分。",
              special: "JR徳山駅から徒歩30秒で朝食・小学生以下添い寝無料のホテル！周南市徳山動物園まで車で10分",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F56219%2F56219.html",
              story: "JR徳山駅新幹線口から徒歩約1分という抜群の駅前ロケーションに佇み、ビジネスから観光まで安心のクオリティを提供する「東横ＩＮＮ徳山駅新幹線口」。新幹線を利用して山口県を訪れる旅行者にとって最高の利便性を誇り、防府天満宮へは山陽本線で約25分、下松・笠戸島へも車や電車でスムーズにアクセス可能です。清潔感あふれる客室には、清潔なデュベスタイルのベッドと個別空調、加湿器付き湯沸かしサーバーが整い、冬の滞在も安心・快適。宿泊者全員に無料で提供される朝食サービスでは、地元スタッフが心を込めて握るおにぎりや温かいお味噌汁、お惣菜が並び、手軽に美味しく朝のエネルギーをチャージできます。",
              roomTip: "デラックスシングル。広々としたデスクと明るい照明を備え、荷物の多い冬の観光旅行でもゆったりと整理・寛ぎが可能です。",
              gourmetTip: "「無料健康朝食サービス」。手作りのおにぎりや温かいスープ、日替わりのおかずが揃い、出発前の手軽な朝食に最適。",
              highlights: [
                "徳山駅新幹線口徒歩1分・清潔デュベスタイルベッドと無料朝食サービス",
                "手作りおにぎりと温かい味噌汁・新幹線利用の観光に抜群の利便性",
                "山陽新幹線・山陽本線の結節点・安心の東横インクオリティ"
              ]
            },
            {
              id: 5,
              name: "国民宿舎　大城",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/144986/144986.jpg",
              rating: 4.55,
              reviews: 478,
              price: "¥8,550〜",
              access: "JR下松駅より車で約12分/山陽自動車道徳山東ICより約20分",
              special: "笠戸島唯一の天然温泉を持つ宿です。瀬戸内海と絶景夕日を眺める露天風呂と美しい料理が自慢！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F144986%2F144986.html",
              story: "下松市・笠戸島の南端、瀬戸内海国立公園の穏やかな海と島々を見下ろす断崖の上に建つ絶景の公共の宿「国民宿舎 大城（おおじょう）」。全室オーシャンビューの客室からは、どこまでも青く広がる瀬戸内海と笠戸湾のパノラマが一望でき、夕暮れ時には海を黄金色に染め上げる息を呑むほど美しいサンセットが広がります。宿の自慢は、地下から湧き出る笠戸島温泉の天然温泉展望露天風呂「潮騒の湯」。海の上に浮かんでいるかのような開放感の中、潮風を感じながら浸かる露天風呂は至福のひとときです。夕食の主役は、笠戸島特産の「笠戸ひらめ」。冬に身が締まり強い甘みを湛えるひらめの薄造りや、山口名物のとらふぐ刺し、幻の黒毛和牛「高森牛」の陶板焼きなど、周防灘の海の幸と大地の恵みを心ゆくまで味わい尽くせる名宿です。",
              roomTip: "オーシャンビュー和洋室。大きな窓から瀬戸内海の夕日と行き交う船を眺められ、潮騒の音に包まれてリラックスできます。",
              gourmetTip: "「笠戸ひらめ会席＆高森牛陶板焼き」。透き通るような笠戸ひらめの薄造りと握り寿司、旨味濃厚な高森牛のステーキの贅沢膳。",
              highlights: [
                "笠戸島断崖の全室オーシャンビュー絶景宿・瀬戸内海望む温泉露天風呂",
                "笠戸島名物「笠戸ひらめ」薄造り＆山口とらふぐ・幻の高森牛ステーキ",
                "日本の夕陽百選・笠戸湾に沈む黄金の夕日と満天の星空パノラマ"
              ]
            }
  ];

  const faqs = [
    {
      q: "「日本最初の天満宮」とされる防府天満宮の新春初詣の見どころとご利益は？",
      a: "防府天満宮（ほうふてんまんぐう）は、学問の神様として親しまれる菅原道真公をお祀りする神社で、道真公が太宰府へ配流される道中に防府に立ち寄り「我が魂魄はこの地に留まる」と誓ったことから、薨去の翌年（延喜4年・904年）に創建された「日本で最初に創建された天満宮」です。京都の北野天満宮、福岡の太宰府天満宮とともに「日本三大天神」に数えられます。正月三が日には約30万人もの参拝客が訪れ、学業成就・合格祈願・厄除開運を祈願します。登録有形文化財の重厚な楼門や、高台の「春風楼」から見下ろす防府市街と瀬戸内海の眺望は必見です。"
    },
    {
      q: "なぜ周南・徳山が「とらふぐ」の名所？ふぐ延縄漁発祥の地とは？",
      a: "山口県のふぐといえば下関が全国的に有名ですが、実は高級とらふぐを傷つけずに釣り上げる「ふぐ延縄（はえなわ）漁」は、明治中期に周南市粭島（すくもじま）の高山兼吉氏によって考案された伝統漁法です。この延縄漁の開発によって日本中のとらふぐ漁が飛躍的に発展しました。周南・徳山は現在も良質なとらふぐの水揚げ拠点であり、下関の唐戸市場へ出荷される前の最上級とらふぐを、地元ならではのリーズナブルな価格で贅沢に味わえる「知る人ぞ知るふぐの本場」として美食家に愛されています。"
    },
    {
      q: "下松・笠戸島の名物「笠戸ひらめ」の特徴と冬に美味しい理由は？",
      a: "山口県下松市の笠戸島（かさどじま）周辺の清浄な海水と激しい潮流を活かして育てられるブランド魚「笠戸ひらめ」は、天然ヒラメにも劣らない極上の肉質と上品な甘みで全国に知られています。特に12月から1月の厳冬期は寒ビラメとして最も身が引き締まり、脂が乗って旨味が凝縮します。透き通るような白身の薄造りはコリコリとした歯ごたえと芳醇な甘みが特徴で、ヒラメの握り寿司や唐揚げ、粗炊きなど多彩な料理で楽しめます。"
    },
    {
      q: "冬の周防エリア（防府・周南・下松）の気候と道路状況・アクセスは？",
      a: "防府・周南・下松などの瀬戸内海沿岸地域は、瀬戸内海特有の温暖で雨や雪の少ない穏やかな気候が特徴です。平野部や海岸沿いの道路で積雪することは極めて稀で、山陽自動車道や国道2号線も冬期を通して快適に走行できます。ただし、寒波が襲来した早朝や深夜には、山間部の高架橋などで局所的な路面凍結が発生する場合があります。念のため冷え込みの厳しい日は慎重な運転を心がけてください。山陽新幹線の徳山駅や新山口駅からのアクセスも良好です。"
    },
    {
      q: "防府天満宮初詣と周南ふぐ・笠戸島を巡る冬の1泊2日おすすめモデルコースは？",
      a: "【1日目】新山口駅または広島方面から山陽道を利用して防府市へ → 防府市内で名物瓦そばまたは地魚のランチ → 日本最初の天満宮「防府天満宮」で新春合格・厄除け初詣＆春風楼散策 → 毛利博物館と旧毛利家本邸庭園見学 → 山陽道を経由して下松・笠戸島または周南徳山へ移動（車約30分） → 瀬戸内海を一望する絶景宿にチェックイン → 笠戸島温泉の展望露天風呂で夕日鑑賞 → 夕食に「本場とらふぐ会席＆笠戸ひらめ・高森牛」を満喫。【2日目】穏やかな瀬戸内海の朝景色を眺めながら朝食 → 笠戸島海上遊歩道を散策 → 周南市中心街へ移動し遠石八幡宮参拝 → 道の駅ソレーネ周南でお土産（とらふぐ刺身セット、地酒獺祭、柑橘類）を購入 → 帰路へ。"
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
            <span className="text-slate-900 font-semibold">山口・防府天満宮初詣＆周南とらふぐ名宿</span>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-r from-red-950 via-slate-900 to-blue-950 text-white py-16 md:py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-rose-500/30 border border-rose-300/40 text-rose-200 text-xs md:text-sm px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>11月・12月・1月冬の山陽旅情特集</span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6 text-white drop-shadow-md">
              山口・防府＆周南・下松<br className="hidden sm:inline" />
              日本最初の天神「防府天満宮」新春初詣と<br className="hidden sm:inline" />
              延縄発祥の地・周南徳山の「冬とらふぐ・笠戸ひらめ」名宿5選
            </h1>
            <p className="max-w-3xl mx-auto text-sm md:text-lg text-rose-100 leading-relaxed drop-shadow">
              菅原道真公ゆかりの日本最初の天満宮「防府天満宮」での新春合格・厄除け祈願。ふぐ延縄漁発祥の地・周南徳山で味わう本場の極上とらふぐ会席や笠戸ひらめ、幻の高森牛。穏やかな瀬戸内海の多島美を一望する絶景宿で過ごす冬の周防路の旅。
            </p>
          </div>
        </header>

        {/* Article Summary Box */}
        <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
            <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b pb-3">
              <CheckCircle2 className="w-5 h-5 text-rose-600 flex-shrink-0" />
              <span>本特集でわかること（11・12・1月の山口周防旅行の要点）</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-700">
              <div className="bg-rose-50/60 p-4 rounded-xl border border-rose-100">
                <span className="font-bold text-rose-900 block mb-1">① 日本最初の天満宮・防府初詣</span>
                延喜4年創建の歴史を誇る防府天満宮。楼門や春風楼からの絶景と、学業成就・厄除開運の新春ご利益。
              </div>
              <div className="bg-blue-50/60 p-4 rounded-xl border border-blue-100">
                <span className="font-bold text-blue-900 block mb-1">② ふぐ延縄漁発祥地・徳山の冬フグ</span>
                下関に並ぶふぐの聖地・周南徳山。傷のない極上とらふぐ刺しやちり鍋を割安に堪能できる知られざる名所。
              </div>
              <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-100">
                <span className="font-bold text-emerald-900 block mb-1">③ 笠戸島温泉と瀬戸内サンセット</span>
                笠戸島断崖の露天風呂から望む黄金の夕日。冬に甘みが増す「笠戸ひらめ」と幻の銘柄牛「高森牛」の美味。
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">
          
          {/* Section 1: 防府天満宮初詣と歴史の散策 */}
          <section className="space-y-6">
            <div className="border-l-4 border-rose-600 pl-4">
              <span className="text-rose-600 font-bold text-sm tracking-wider uppercase">Historic Shinto Heritage</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
                日本最初の天満宮「防府天満宮」の新春初詣と周防の歴史情緒
              </h2>
            </div>
            
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
              <p>
                山口県中南部に位置する防府市は、古代には周防国の国府が置かれ、山陽道と瀬戸内海運の要衝として栄えた歴史ある街です。この街の中心に鎮座するのが「防府天満宮（ほうふてんまんぐう）」です。昌泰4年（901年）、無実の罪で太宰府へ左遷される途上にあった菅原道真公が防府に立ち寄り、「我が魂魄はこの地に留まりて西の海を護らん」と言い残しました。道真公が太宰府で亡くなった翌年の延喜4年（904年）、国司をはじめとする人々がその霊を慰めるために社殿を創建したのが始まりとされ、「日本で最初に創建された天神さま」として篤い崇敬を集めています。
              </p>
              <p>
                正月三が日には約30万人もの初詣参拝客が訪れ、受験生や家族連れが合格祈願や開運厄除けの絵馬を奉納します。大鳥居から青銅の鳥居を抜け、石段を登った先にそびえる朱塗りの重厚な楼門は国の登録有形文化財。拝殿での新春祈祷を受けた後は、境内脇の高台に建つ「春風楼（しゅんぷうろう）」へ向かいましょう。幕末の長州藩主・毛利斉熙が五重塔として建設を着工したものの財政難で楼閣へと変更された数奇な歴史を持つ建物で、床下を吹き抜ける冬の爽快な風とともに防府市街や瀬戸内海の大パノラマを一望できます。
              </p>
              <p>
                参拝後は、防府天満宮のすぐ近くにある「毛利博物館（旧毛利家本邸）」への立ち寄りもおすすめです。旧長州藩主毛利家の広大な邸宅と国宝の雪舟筆「四季山水図」などを収蔵する博物館、そして冬の静寂に包まれた名勝庭園の散策は、長州の誇り高い歴史を肌で感じる特別な体験となります。
              </p>
            </div>
          </section>

          {/* Section 2: 周南徳山のとらふぐと笠戸ひらめ・高森牛 */}
          <section className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <span className="text-blue-600 font-bold text-sm tracking-wider uppercase">Gourmet Seafood & Wagyu</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
                ふぐ延縄漁発祥の地・周南徳山の「本場とらふぐ」と笠戸島の絶品寒魚
              </h2>
            </div>
            
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
              <p>
                山口県の冬の味覚の王様といえば「とらふぐ」ですが、その漁獲技術の原点が周南市にあることは全国的にはあまり知られていません。かつて網漁ではふぐ同士が噛み合って傷がつき商品価値が落ちていたのに対し、明治中期に周南市粭島（すくもじま）の漁師・高山兼吉氏が一匹ずつ傷をつけずに釣り上げる「延縄（はえなわ）漁法」を考案しました。この画期的な発明によって、日本全国で美しい最高品質のとらふぐが流通するようになったのです。
              </p>
              <p>
                周南・徳山の港には現在も豊後水道や瀬戸内海で獲れた上質な天然・養殖とらふぐが集まり、下関へ出荷される前の最上級のふぐを、地元の割烹や老舗旅館で贅沢に味わうことができます。皿の絵柄が透き通るほど薄く美しく引かれた「ふく刺し（てっさ）」は、噛むほどに上品な旨味と甘みが口いっぱいに広がり、熱々の「ふくちり鍋」や香ばしい「ひれ酒」とともに冬の至福の宴を演出してくれます。
              </p>
              <p>
                さらに、下松市から笠戸大橋で結ばれた笠戸島（かさどじま）で冬に旬を迎える「笠戸ひらめ」も見逃せません。清らかな海水で育てられる笠戸ひらめは、12月から1月にかけて身が引き締まり、白身魚とは思えない濃厚な脂と甘みを蓄えます。また、山口県東部の清流錦川の上流で育てられる幻の黒毛和牛「高森牛」は、きめ細やかなサシと芳醇な香りが絶品で、周防の海の幸と陸の恵みが競演する贅沢な食体験を約束してくれます。
              </p>
            </div>
          </section>

          {/* Section 3: 厳選宿泊施設5選 */}
          <section className="space-y-8">
            <div className="border-l-4 border-rose-600 pl-4">
              <span className="text-rose-600 font-bold text-sm tracking-wider uppercase">Featured Accommodations</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
                防府天満宮初詣と周南ふぐを満喫する厳選名宿5選
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                楽天トラベルAPIより最新の空室情報・適正宿泊料金・評価スコアを取得。瀬戸内オーシャンビュー露天風呂から駅近天然温泉まで厳選。
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
                        <p className="text-xs text-rose-800 bg-rose-50 px-3 py-1.5 rounded-lg font-medium mb-3 inline-block">
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
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-bold text-xs md:text-sm px-5 py-2.5 rounded-xl shadow transition-all transform hover:-translate-y-0.5"
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
            <div className="border-l-4 border-rose-600 pl-4">
              <span className="text-rose-600 font-bold text-sm tracking-wider uppercase">Travel Itinerary</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
                防府天満宮初詣と周南ふぐ・笠戸島絶景を巡る1泊2日モデルコース
              </h2>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full">1日目</span>
                  <h3 className="font-bold text-slate-900 text-base md:text-lg">防府天満宮初詣と毛利博物館・笠戸島温泉へ</h3>
                </div>
                <div className="pl-4 border-l-2 border-rose-200 space-y-3 text-sm text-slate-700">
                  <p><strong>10:30 新山口駅または山陽道防府東ICより防府市へ到着</strong> - 車を停めて防府天満宮の表参道へ向かう。</p>
                  <p><strong>11:00 防府市内で名物瓦そばランチ</strong> - 熱々の瓦の上で香ばしく焼かれた茶そばと錦糸卵、牛肉の旨味を味わう。</p>
                  <p><strong>12:30 防府天満宮で新春初詣</strong> - 登録有形文化財の楼門をくぐり合格・厄除け祈願。春風楼から瀬戸内海を展望。</p>
                  <p><strong>14:30 毛利博物館・旧毛利家本邸庭園見学</strong> - 国宝絵画や豪華絢爛な大名屋敷、冬の日本庭園を静かに鑑賞。</p>
                  <p><strong>16:00 下松・笠戸島へドライブ</strong> - 山陽道を経由して笠戸大橋を渡り「国民宿舎 大城」へチェックイン。</p>
                  <p><strong>16:45 展望露天風呂でサンセット鑑賞</strong> - 瀬戸内海の多島美を黄金色に染め上げる夕日を眺めながら極上の湯浴み。</p>
                  <p><strong>18:30 夕食に「本場とらふぐ＆笠戸ひらめ・高森牛会席」</strong> - 透き通るふく刺しや笠戸ひらめ薄造り、山口の地酒「東洋美人」で乾杯。</p>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">2日目</span>
                  <h3 className="font-bold text-slate-900 text-base md:text-lg">笠戸島海岸散策と周南徳山・名産品ショッピング</h3>
                </div>
                <div className="pl-4 border-l-2 border-blue-200 space-y-3 text-sm text-slate-700">
                  <p><strong>07:30 穏やかな瀬戸内海を望む朝風呂</strong> - 朝の澄み切った海風と潮騒の音を感じながらリフレッシュ。</p>
                  <p><strong>09:00 笠戸島海上遊歩道・はなぐり海岸散策</strong> - 赤い奇岩と透き通る海が続く遊歩道を気持ちよくウォーキング。</p>
                  <p><strong>11:00 周南市へ移動・遠石八幡宮参拝</strong> - 徳山藩主毛利家ゆかりの古刹で新年の安全を祈願。</p>
                  <p><strong>12:30 周南徳山駅前でふぐ雑炊または海鮮ランチ</strong> - 濃厚なふぐ出汁の雑炊や新鮮地魚定食を味わう。</p>
                  <p><strong>14:00 道の駅ソレーネ周南でお買い物</strong> - とらふぐの加工品、地酒獺祭、山口銘菓外郎、柑橘類を購入。</p>
                  <p><strong>16:00 山陽道徳山西ICより帰路へ</strong> - 美食と歴史に満ちた周防路の旅を締めくくり。</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: 冬のアクセス＆注意点 */}
          <section className="space-y-6">
            <div className="border-l-4 border-rose-600 pl-4">
              <span className="text-rose-600 font-bold text-sm tracking-wider uppercase">Travel Tips & Weather</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
                冬の山口周防旅行の気候・服装と交通アクセスのアドバイス
              </h2>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-slate-200 space-y-4 text-slate-700 text-sm md:text-base leading-relaxed">
              <div className="flex items-start gap-3">
                <Sunrise className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">穏やかな瀬戸内気候と初詣の防寒</h3>
                  <p className="text-slate-600 text-sm">
                    防府や周南などの瀬戸内海沿岸は冬でも比較的温暖で降水量も少ない地域です。ただし、防府天満宮の境内や春風楼の高台、笠戸島の海岸線では冬の海風が吹き抜けるため、初詣の参拝待ちや夕日の鑑賞時にはコートやマフラーなどのしっかりとした防寒具を着用してください。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <AlertTriangle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">山陽自動車道の快適性と寒波時の注意</h3>
                  <p className="text-slate-600 text-sm">
                    山陽自動車道や国道2号線は整備されており、平年積雪による通行止めの心配はほとんどありません。ただし、1月などの強い寒波襲来時には、山間部（鹿野方面など）やトンネル出入口で凍結の可能性があるため、天気予報を事前に確認して安全運転を心がけましょう。
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
                山口・防府天満宮初詣＆周南冬ふぐ旅行に関するよくある質問
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
                あわせて読みたい山陽・冬の厳選旅特集
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                href="/winter-yamaguchi-iwakuni-kintaikyo-suo-oshima-mikan-nabe-takamorigyu-stay"
                className="bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/10 transition-colors block"
              >
                <span className="text-amber-400 text-xs font-bold block mb-1">山口特集</span>
                <span className="font-bold text-sm block mb-1">岩国＆周防大島！錦帯橋雪景色とみかん鍋・高森牛名宿</span>
                <span className="text-xs text-slate-300">名橋錦帯橋の冬情趣と名物みかん鍋…</span>
              </Link>
              <Link
                href="/winter-yamaguchi-nagato-tsunoshima-motonosumi-shrine-hatsumode-onsen-stay"
                className="bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/10 transition-colors block"
              >
                <span className="text-cyan-400 text-xs font-bold block mb-1">山口特集</span>
                <span className="font-bold text-sm block mb-1">長門＆角島！元乃隅神社初詣と美肌の長門湯本温泉名宿</span>
                <span className="text-xs text-slate-300">赤い鳥居が連なる絶景神社初詣と老舗温泉街…</span>
              </Link>
              <Link
                href="/winter-yamaguchi-shimonoseki-kawatana-onsen-torafugu-kawarasoba-stay"
                className="bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/10 transition-colors block"
              >
                <span className="text-emerald-400 text-xs font-bold block mb-1">山口特集</span>
                <span className="font-bold text-sm block mb-1">下関＆川棚温泉！本場とらふぐフルコースと瓦そば名宿</span>
                <span className="text-xs text-slate-300">関門海峡の冬のふぐ本場と名湯川棚温泉…</span>
              </Link>
              <Link
                href="/winter-yamaguchi-yuda-onsen-torafugu-byakko-choshu-beef-stay"
                className="bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/10 transition-colors block"
              >
                <span className="text-purple-400 text-xs font-bold block mb-1">山口特集</span>
                <span className="font-bold text-sm block mb-1">湯田温泉！白狐の湯と冬のとらふぐ・長州牛名宿</span>
                <span className="text-xs text-slate-300">山口市街地の名湯・湯田温泉の足湯めぐりと美食…</span>
              </Link>
              <Link
                href="/features"
                className="bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/10 transition-colors block"
              >
                <span className="text-rose-400 text-xs font-bold block mb-1">特集一覧</span>
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
