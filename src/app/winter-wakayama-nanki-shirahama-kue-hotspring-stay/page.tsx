import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves
} from 'lucide-react';

export const metadata: Metadata = {
  title: '南紀白浜温泉で過ごす冬の旅（11・12月）！白良浜夕陽と日本三古湯！名宿5選',
  description: '万葉集や日本書紀にも記された日本三古湯の一つ、和歌山県・南紀白浜温泉。11月から12月にかけて脂が乗り切る幻の超高級魚「紀州本クエ鍋」、太平洋を茜色に染める雄大な冬の夕陽、波打ち際の絶景露天風呂、そして特選熊野牛を味わい尽くす冬の名宿ガイド。',
  keywords: '南紀白浜温泉 宿泊 11月 12月, クエ鍋 白浜 旅館, 本クエ 白浜 温泉, ホテル川久 白浜, 浜千鳥の湯 海舟, 白良荘グランドホテル, 白良浜 イルミネーション 冬, 熊野牛 白浜',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-wakayama-nanki-shirahama-kue-hotspring-stay/",
  },
  openGraph: {
    title: '南紀白浜温泉で過ごす冬の旅（11・12月）！白良浜夕陽と日本三古湯！名宿5選',
    description: '万葉集や日本書紀にも記された日本三古湯の一つ、和歌山県・南紀白浜温泉。11月から12月にかけて脂が乗り切る幻の超高級魚「紀州本クエ鍋」、太平洋を茜色に染める雄大な冬の夕陽、波打ち際の絶景露天風呂、そして特選熊野牛を味わい尽くす冬の名宿ガイド。',
    url: 'https://croud-travel.pages.dev/winter-wakayama-nanki-shirahama-kue-hotspring-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月南紀白浜温泉の太平洋絶景と名湯】白良浜夕陽と日本三古湯・幻の天然本クエ鍋＆熊野牛の宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "南紀白浜温泉の太平洋絶景と名湯で過ごす冬の旅（11・12月）！白良浜夕陽と日本三古湯・幻の天然本クエ鍋＆熊野牛の宿5選",
    description: "万葉集や日本書紀にも記された日本三古湯の一つ、和歌山県・南紀白浜温泉。11月から12月にかけて脂が乗り切る幻の超高級魚「紀州本クエ鍋」、太平洋を茜色に染める雄大な冬の夕陽、波打ち際の絶景露天風呂、そして特選熊野牛を味わい尽くす冬の名宿ガイド。",
  }
};

  const faqList = [
    {
      q: "南紀白浜の冬の名物『本クエ（天然クエ）』の旬と特徴は？",
      a: "本クエは『クエを食ったら他の魚は食えん』と言われるほど、冬の魚の中で最高峰の評価を受ける幻の高級魚です。南紀白浜近海の荒海で一本釣りされるクエは、寒さが増す11月から2月にかけて脂が乗り切ります。皮と身の間にあるゼラチン質にはコラーゲンが豊富で、熱を加えると上品な甘みと濃厚なコクに変わります。薄造り（クエ刺し）の上品な甘み、香ばしい焼きクエ、骨から極上の出汁が出る本クエ鍋、そして旨味を吸った〆の雑炊は、冬の白浜を旅する最大の贅沢です。"
    },
    {
      q: "冬（11月・12月）の南紀白浜の気候と服装は？",
      a: "南紀白浜は黒潮が流れる太平洋に面しているため、本州の中でも冬期が非常に温暖な地域です。11月・12月でも日中は最高気温が13℃〜17℃前後まで上がり、晴天の日が多いため過ごしやすいのが特徴です。ただし、海沿いのため朝晩や海風が吹く時間帯は体感温度が下がります。ウインドブレーカーや風を通しにくいコート、羽織れるカーディガンなど、重ね着できる服装がおすすめです。"
    },
    {
      q: "大阪・東京からのアクセス方法と所要時間は？",
      a: "大阪（新大阪駅・天王寺駅）からはJR特急『くろしお』で乗り換えなし約2時間15分〜2時間30分で白浜駅に到着します。東京（羽田空港）からはJAL便が南紀白浜空港へ毎日3往復運航しており、わずか約75分のフライトで到着。空港から温泉街まではタクシーや路線バスで約10分と極めて好アクセスです。お車の場合は阪和自動車道・紀勢自動車道の南紀白浜ICより約15分です。"
    },
    {
      q: "『日本三古湯』としての南紀白浜温泉の歴史は？",
      a: "南紀白浜温泉は、有馬温泉（兵庫）、道後温泉（愛媛）と並ぶ『日本三古湯』の一つです。『日本書紀』や『万葉集』には『牟婁の湯（むろのゆ）』として登場し、第37代斉明天皇や持統天皇、文武天皇など歴代の天皇や貴族が遥々都から湯治に訪れた記録が残されています。波打ち際にある『崎の湯』は、千数百年前の湯壺がそのまま残る日本最古の露天風呂の一つとして知られています。"
    }
  ];

export default function ShirahamaWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-wakayama-nanki-shirahama-kue-hotspring-stay#article",
        "headline": "【11・12月南紀白浜温泉の太平洋絶景と名湯】白良浜夕陽と日本三古湯・幻の天然本クエ鍋＆熊野牛の宿5選",
        "description": "万葉集や日本書紀にも記された日本三古湯の一つ、和歌山県・南紀白浜温泉。11月から12月にかけて脂が乗り切る幻の超高級魚「紀州本クエ鍋」、太平洋を茜色に染める雄大な冬の夕陽、波打ち際の絶景露天風呂、そして特選熊野牛を味わい尽くす冬の名宿ガイド。",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        "datePublished": "T00:00:00+09:00",
        "dateModified": "T00:00:00+09:00",
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
          "@id": "https://croud-travel.pages.dev/winter-wakayama-nanki-shirahama-kue-hotspring-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-wakayama-nanki-shirahama-kue-hotspring-stay#faq",
        "mainEntity": faqList.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.pages.dev/winter-wakayama-nanki-shirahama-kue-hotspring-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "白浜温泉　ホテル川久",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14111%2F14111.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "浜千鳥の湯　海舟（共立リゾート）",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68224%2F68224.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "白浜古賀の井リゾート＆スパ",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18253%2F18253.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "白浜温泉　白良荘グランドホテル",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2909%2F2909.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "紀州・白浜温泉　むさし",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19739%2F19739.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "白浜温泉　ホテル川久",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/14111/14111.jpg",
              rating: 4.56,
              reviews: 3727,
              price: "¥26,500〜",
              access: "JR白浜駅から車で約10分※無料送迎バス運行／南紀白浜空港から車で約10分／大阪から車で阪和道南紀田辺IC経由で約2時間",
              special: "紀州の食材をふんだんに使った【王様のビュッフェ】開宴！オーシャンビュースイートの宮殿リゾートへ！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14111%2F14111.html",
              story: "田辺湾を望む岬の突端にそびえ立ち、世界各国の匠の技が結集した「泊まれる美術館」と称される最高峰の名館「白浜温泉 ホテル川久」。総工費約400億円を投じて建てられた城郭風の館内は、22.5金箔約5万枚が貼られた黄金のロビー天井や、サルバドール・ダリの絵画など超一級の美術品で埋め尽くされています。温泉サロン「ROYAL SPA」では、田辺湾の穏やかな海を望むオープンテラスデッキや邸宅リビング風呂で、日本三古湯・白浜の名湯を優雅に堪能。全室スイートの贅沢な客室で、冬の海を眺めながら過ごす滞在は、世界中どこにもない唯一無二の感動をもたらします。",
              roomTip: "全室80平米以上のオールスイート客室。ヨーロッパ調の優雅なインテリアと大きなピクチャーウィンドウから、初冬の澄んだ田辺湾の海景色を一望できます。",
              gourmetTip: "「王様のビュッフェ」または創作フレンチ・和食会席。冬の目玉はなんといっても紀州本クエ料理。料理人が目の前で調理するクエの煮付けやクエ鍋、近海マグロの解体ショー、最高級熊野牛ステーキなど、豪華絢爛な美食のフルコースを堪能できます。",
              highlights: [
                "総工費400億の美術館ホテル＆全室スイートルームの圧倒的ラグジュアリー空間",
                "田辺湾を望む温泉サロン「ROYAL SPA」＆22.5金箔の黄金ロビー天井",
                "豪華「王様のビュッフェ」＆冬の天然本クエ料理と最高級熊野牛ステーキの饗宴"
              ]
            },
            {
              id: 2,
              name: "浜千鳥の湯　海舟（共立リゾート）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/68224/68224.jpg",
              rating: 4.37,
              reviews: 3641,
              price: "¥14,300〜",
              access: "JR白浜駅より車で約15分／バスで約25分　最寄りのバス停「草原の湯」／「南紀白浜空港」より車で約7分",
              special: "目の前に広がる海と共に過ごす贅沢なリゾートへ！海一望の露天風呂や貸切露天風呂など極上の温泉を堪能",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68224%2F68224.html",
              story: "名勝・平草原の岬の突端、太平洋を180度見渡す絶好のロケーションに建つ共立リゾートの名旅館「浜千鳥の湯 海舟」。宿の最大のハイライトは、海までわずか数メートルの波打ち際に造られた混浴露天風呂「浜千鳥の湯」。専用の湯浴み着を着用し、初冬の荒波の音と潮風を感じながら浸かる夕暮れ時の露天風呂は、太平洋に沈む夕陽と一体になる圧倒的なインフィニティ体験を約束します。さらに、趣の異なる3つの無料貸切露天風呂や、檜の香る大浴場も完備。日本の伝統的な舟宿をイメージしたモダンな和の空間で、波の音を聞きながら寛ぐ大人の冬旅が叶います。",
              roomTip: "波打ち際を眼下に望む「離れ平屋」や客室露天風呂付きの和洋室。プライベートなテラスの湯船から、冬の澄んだ水平線に沈む黄金の夕陽を独り占めできます。",
              gourmetTip: "選べる夕食「紀州舟盛り会席」または「クエ鍋会席」。11月・12月限定の本クエ会席では、ゼラチン質たっぷりのクエの薄造り（クエ刺し）、香ばしい焼きクエ、濃厚な出汁が染み渡る本クエ鍋、〆の雑炊まで、幻の味を余すところなく味わえます。",
              highlights: [
                "波打ち際の混浴露天風呂「浜千鳥の湯」＆太平洋の夕陽と一体になるインフィニティ絶景",
                "3つの無料貸切露天風呂巡り＆モダンな和の舟宿で過ごす大人の隠れ家ステイ",
                "冬限定「本クエ鍋会席」＆クエ薄造り・焼きクエ・濃厚出汁クエ鍋と〆の雑炊"
              ]
            },
            {
              id: 3,
              name: "白浜古賀の井リゾート＆スパ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/18253/18253.jpg",
              rating: 4.42,
              reviews: 5719,
              price: "¥11,900〜",
              access: "JR白浜駅から車で約10分※無料送迎バス運行中／南紀白浜空港から車で約8分／大阪から車で阪和道南紀田辺IC経由で約2時間",
              special: "優雅に美しく贅沢な休日を。露天風呂やスパエリアも充実！南紀白浜の温泉リゾートホテル。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18253%2F18253.html",
              story: "小高い丘の上に建ち、白浜の街並みと青い海を見晴らす優雅なリゾートホテル「白浜古賀の井リゾート＆スパ」。緑豊かな庭園では、初冬の夜を彩る約30万球のイルミネーションが輝き、ロマンチックな光の散策を楽しめます。自慢のオープンテラス付き大浴場は、自社敷地内から湧き出る良質な源泉を使用。初冬の冷気を感じながら、湯煙の向こうに広がる水盤と庭園イルミネーションを眺める露天風呂は幻想的な美しさです。全館に漂うリゾートの開放感と行き届いたサービスが、心身ともに深いリフレッシュを届けてくれます。",
              roomTip: "全室オーシャンビューのバルコニー付き客室。初冬の澄み渡る青い空と海、夕刻には夕陽に染まる白浜湾の絶景パノラマを楽しめます。",
              gourmetTip: "大人気のエクゼクティブビュッフェまたは本格和会席。オープンキッチンで焼き上げる熊野牛ステーキや、地元水揚げの伊勢海老、冬の味覚・本クエ鍋など、紀州の山海の恵みを贅沢に食べ比べできます。",
              highlights: [
                "小高い丘から見下ろす白浜オーシャンビュー＆30万球の庭園イルミネーション",
                "自社源泉の良質なオープンテラス露天風呂＆贅沢なリゾートスパ体験",
                "豪華ビュッフェまたは和会席＆熊野牛ステーキと冬の伊勢海老・本クエ食べ比べ"
              ]
            },
            {
              id: 4,
              name: "白浜温泉　白良荘グランドホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/2909/2909.jpg",
              rating: 4.50,
              reviews: 2517,
              price: "¥7,920〜",
              access: "JR白浜駅よりタクシー・路線バス・車で約10分 南紀白浜空港より車で約10分  アドベンチャーワールドより車で約10分",
              special: "白良浜まで直通徒歩30秒！海を一望する温泉と海の幸を中心とした会席料理で贅沢な時間を。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2909%2F2909.html",
              story: "真っ白な砂浜が弧を描く関西屈指のビーチ「白良浜」の目の前に建ち、ビーチまで徒歩30秒という最高のロケーションを誇る老舗旅館「白良荘グランドホテル」。全客室からエメラルドグリーンの海と白砂のコントラストを見下ろすことができ、波の音を間近に感じるリゾートステイが魅力です。館内には2つの趣異なる大浴場があり、海と砂浜を眺めながら入る露天風呂は開放感抜群。11月・12月には白良浜で冬のイルミネーションイベントも開催され、夜の砂浜散歩と名湯巡りを同時に楽しめます。",
              roomTip: "海側に面したオーシャンビュー和室や和洋室。畳の上に座りながら、初冬の夕暮れ時に刻一刻と茜色から宵闇へと染まる白良浜の情景を堪能できます。",
              gourmetTip: "冬の味覚の王様・紀州本クエ会席。白身のトロとも称されるクエの上品な脂と引き締まった身を、薄造り、唐揚げ、本クエ鍋で堪能。地元のブランド黒毛和牛「熊野牛」との贅沢な競演プランも人気です。",
              highlights: [
                "白良浜まで徒歩30秒！全室オーシャンビュー＆波の音を聞く海辺の露天風呂",
                "冬の白良浜イルミネーション散歩に好アクセス＆白砂青松の絶景パノラマ",
                "白身のトロ「紀州本クエ会席」＆クエ唐揚げと特選熊野牛ステーキの競演"
              ]
            },
            {
              id: 5,
              name: "紀州・白浜温泉　むさし",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/19739/19739.jpg",
              rating: 4.34,
              reviews: 2641,
              price: "¥8,800〜",
              access: "JR白浜駅より車で約10分／南紀白浜空港より車で約10分／アドベンチャーワールドより車で約15分",
              special: "【白良浜まで徒歩1分】2種類の源泉とライブキッチンバイキングが愉しめる本格和風旅館へ。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19739%2F19739.html",
              story: "白良浜まで徒歩1分、和の情緒と温かいおもてなしで古くから愛され続ける名旅館「紀州・白浜温泉 むさし」。宿の大きな自慢は、白浜温泉でも数少ない「2種類の異なる源泉」を贅沢に引いている点です。高温で塩分濃度の高い「生絹湯（すずしゆ）」と、肌に優しい「斉明湯（さいめいゆ）」を館内の多彩な湯船で入り比べることが可能。中庭の日本庭園を眺める大浴場や露天風呂、貸切風呂など、湯治気分で温泉を満喫できます。大型旅館ならではの快適さと、純和風の落ち着きが調和した心地よい宿です。",
              roomTip: "高層階の和邸（なぎさてい）専用客室。専用ラウンジの利用が可能で、ワンランク上の静寂と白良浜の絶景を心ゆくまで堪能できます。",
              gourmetTip: "料理長自慢の会席料理または和洋中バイキング。冬限定の「本クエづくし会席」では、本クエ鍋をはじめ、クエの煮付けやクエ釜飯など、冬の白浜を代表する高級魚を存分に味わえます。",
              highlights: [
                "白浜唯一の2つの異なる源泉を引き湯＆日本庭園を望む多彩な湯船巡り",
                "高層階「和邸」専用ラウンジサービス＆老舗旅館ならではの心温まるもてなし",
                "本クエづくし会席＆クエ煮付け・クエ釜飯と紀州の新鮮な海の幸会席"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-cyan-950 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-950">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85"
          alt="南紀白浜・初冬の白良浜の夕陽と太平洋の絶景露天風呂"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/90 text-cyan-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-cyan-800/50">
            <Eye className="w-4 h-4 text-cyan-300" />
            <span>11月・12月限定 日本三古湯の絶景オーシャンビュー＆幻の紀州本クエ鍋特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">南紀白浜温泉の太平洋絶景と名湯で過ごす冬の旅（11・12月）！<br className="hidden sm:inline" /> 白良浜夕陽と日本三古湯・幻の天然本クエ鍋＆熊野牛の宿5選</h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            万葉の昔から歴代天皇が湯治に訪れた日本三古湯・南紀白浜温泉。11月から旬を迎える「幻の高級魚・紀州本クエ」の濃厚な旨味。水平線に沈む黄金の夕陽を眺める海辺のインフィニティ露天風呂と、白良浜の冬のイルミネーションを愉しむ至福旅。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-cyan-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-cyan-400" /> 和歌山県西牟婁郡白浜町</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月南紀白浜温泉】白良浜夕陽と日本三古湯！名宿5選","item":"https://croud-travel.pages.dev/winter-wakayama-nanki-shirahama-kue-hotspring-stay"}]}) }}
      />
        
        {/* Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Nihon Sankoto Shirahama Ocean Legacy</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                万葉の天皇が愛した牟婁の湯。初冬の太平洋夕陽と幻の「紀州本クエ」
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            紀伊半島の南西端、黒潮洗う太平洋に面した「南紀白浜温泉」。道後温泉、有馬温泉と並び「日本三古湯」に数えられるこの名湯は、飛鳥・奈良時代の『日本書紀』や『万葉集』に「牟婁の湯（むろのゆ）」として記されています。第37代斉明天皇や中大兄皇子（天智天皇）、持統天皇ら歴代の天皇や貴族が、都から険しい熊野古道や海路を越えて遠路はるばる湯治に訪れた由緒正しき保養の地です。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            白浜の11月・12月は、夏の喧騒が去り、澄み切った海と空が広がる大人のリゾートシーズンです。黒潮の影響により冬期でも比較的温暖な気候に恵まれ、太平洋に沈む夕陽は一年で最も美しく空と海を黄金色に染め上げます。波打ち際の露天風呂やホテルの高層階インフィニティ温泉に浸かりながら、沈みゆく夕陽と夕暮れのトワイライトを眺める時間は息をのむ絶景です。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            そして冬の白浜を語る上で欠かせないのが、魚の王様「本クエ（天然クエ）」です。水深数十メートルの岩礁地帯に潜み、一本釣りでしか獲れないため「幻の魚」と呼ばれます。寒さが増す11月から12月にかけて、身と皮の間に極上の脂と上質なコラーゲンが蓄えられ、その濃厚な旨味は「フグより旨い」「クエを食ったら他の魚は食えん」と食通たちに絶賛されています。さらに和歌山の誇る黒毛和牛「熊野牛」や冬の伊勢海老とともに、豪華絢爛な冬の美食を味わえます。
          </p>
          
          <div className="bg-cyan-50/70 rounded-2xl p-5 border border-cyan-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-cyan-700" />
                11月・12月南紀白浜 旅のハイライト
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                旬の本クエ鍋＆クエ刺し・太平洋絶景インフィニティ露天・白良浜夕陽と冬イルミ・日本三古湯・熊野牛
              </p>
            </div>
            <a
              href="#hotels"
              className="px-5 py-2.5 bg-cyan-800 hover:bg-cyan-900 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors whitespace-nowrap shadow-sm"
            >
              厳選名宿5選を見る
            </a>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="bg-stone-100/80 rounded-2xl p-6 border border-stone-200">
          <h2 className="text-base font-bold text-stone-900 mb-4 flex items-center gap-2">
            <Compass className="w-5 h-5 text-cyan-700" />
            目次・インデックス
          </h2>
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-stone-700">
            <a href="#kue-season" className="hover:text-cyan-700 hover:underline flex items-center gap-1.5">
              <span>1. 幻の高級魚「本クエ」の真髄：旬の脂とコラーゲン鍋</span>
            </a>
            <a href="#ocean-onsen" className="hover:text-cyan-700 hover:underline flex items-center gap-1.5">
              <span>2. 日本三古湯の恵み：海を望むインフィニティ露天と泉質</span>
            </a>
            <a href="#winter-sights" className="hover:text-cyan-700 hover:underline flex items-center gap-1.5">
              <span>3. 冬の白良浜イルミネーションと三段壁洞窟の奇観</span>
            </a>
            <a href="#hotels" className="hover:text-cyan-700 hover:underline flex items-center gap-1.5">
              <span>4. 11・12月に泊まりたい南紀白浜温泉の名宿厳選5選</span>
            </a>
            <a href="#gourmet" className="hover:text-cyan-700 hover:underline flex items-center gap-1.5">
              <span>5. 紀州の冬の饗宴：極上クエ会席と黒毛和牛「熊野牛」</span>
            </a>
            <a href="#itinerary" className="hover:text-cyan-700 hover:underline flex items-center gap-1.5">
              <span>6. 1泊2日 王道モデルコース（白良浜・三段壁・とれとれ市場）</span>
            </a>
            <a href="#faq" className="hover:text-cyan-700 hover:underline flex items-center gap-1.5">
              <span>7. よくある質問（FAQ）と羽田・大阪からのアクセス</span>
            </a>
          </nav>
        </section>

        {/* Kue Season Section */}
        <section id="kue-season" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-cyan-50 text-cyan-800">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">King of Winter Fish</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                幻の高級魚「本クエ」の真髄：旬の脂とコラーゲン鍋
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            ハタ科の大型魚であるクエは、荒磯の深海に生息し、警戒心が強いため一本釣りでしか獲れない希少な魚です。南紀白浜近海で水揚げされる天然本クエは、11月から2月にかけて水温が下がることで身が引き締まり、上質な脂をたっぷりと蓄えます。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            薄造りにしたクエ刺しは、上品な透明感がありながら噛むほどに芳醇な甘みが広がります。そして圧巻は「本クエ鍋」。クエの骨や頭から取った出汁は濃厚な旨味に満ちており、プリプリとした白身とプルプルのゼラチン質が口の中でとろけます。野菜とともに味わった後の鍋出汁で作る雑炊は、一滴も残したくない極上の味わいです。
          </p>
        </section>

        {/* Ocean Onsen Section */}
        <section id="ocean-onsen" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-cyan-50 text-cyan-800">
              <Waves className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Ocean Infinity Waters</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                日本三古湯の恵み：海を望むインフィニティ露天と泉質
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            南紀白浜温泉の泉質は、主にナトリウム-塩化物泉や炭酸水素塩泉です。海辺の温泉らしく豊富な塩分とミネラルを含み、入浴すると肌をしっとりと包み込んで保温効果を持続させます。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            白浜の宿の最大の特長は、太平洋のダイナミックな景観を取り入れた露天風呂の設計です。波打ち際の岩場に造られた露天風呂では潮騒を間近に感じ、高台の旅館からは青い海と空が溶け合うインフィニティビューを満喫できます。初冬の澄んだ空気の下、夕暮れに染まる水平線を眺めながら入る温泉は、日頃のストレスを一瞬で忘れさせてくれる圧倒的な開放感に満ちています。
          </p>
        </section>

        
        {/* Winter Sights Section */}
        <section id="winter-sights" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-cyan-50 text-cyan-800">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Winter Scenic Coastal Wonders</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                冬の白良浜シーサイドイルミネーションと名勝・三段壁洞窟の歴史ロマン
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            初冬の南紀白浜を訪れたなら、温泉と美食に加えて海岸線に点在する大自然の造形美も見逃せません。長さ約620メートルにわたって真っ白な珪砂の砂浜が続く「白良浜（しららはま）」では、例年11月から2月にかけて冬の夜を彩る光の祭典「シーサイドイルミネーション」が開催されます。澄み切った冬の夜空の下、白砂のビーチに幾何学的な光のアーチや光のオブジェが浮かび上がり、寄せては返す波の音とともにロマンチックなナイトウォークを満喫できます。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            また、白浜の南端に位置する「三段壁（さんだんぺき）」は、高さ約50〜60メートルの断崖絶壁が約2キロにわたって続くダイナミックな景勝地。初冬の太平洋から押し寄せる怒濤が岩肌に激突し、白波を巻き上げる様は圧巻の迫力です。高速エレベーターで地下36メートルまで降りると、平安時代に源平合戦で活躍した熊野水軍が船を隠したと伝わる「三段壁洞窟」が広がり、洞窟内に激しく海水が流れ込む自然の神秘と歴史ロマンを間近に体感できます。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            さらに、広大な砂岩が波に浸食されて千枚の畳を敷き詰めたように広がる「千畳敷（せんじょうじき）」は、夕暮れ時の絶景スポット。初冬の澄んだ水平線に真っ赤な夕陽が沈み、岩肌が黄金色に染まる光景は、訪れる旅人の心を深く揺さぶります。
          </p>
        </section>

        {/* Hotel List Section */}
        <section id="hotels" className="space-y-10">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-100 text-cyan-900 text-xs font-bold">
              <Flame className="w-3.5 h-3.5" />
              <span>Rakuten Travel Official API Verified Selection</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              11・12月に泊まりたい南紀白浜温泉の名宿厳選5選
            </h2>
            <p className="text-stone-600 text-sm max-w-2xl mx-auto">
              楽天トラベルAPIから最新の口コミ評価・宿泊料金・空室情報を取得。太平洋の絶景露天風呂と幻の紀州本クエ鍋、極上熊野牛を心ゆくまで堪能できる名宿5軒をご紹介します。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/90 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="flex flex-col">
                  {/* Hotel Image Container */}
                  <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
                    <Image
                      src={hotel.img}
                      alt={hotel.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-stone-900/85 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-md">
                      厳選名宿 No.{hotel.id}
                    </div>
                  </div>

                  {/* Hotel Content */}
                  <div className="w-full p-5 sm:p-7 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                        <span className="text-xs font-semibold text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded-lg border border-cyan-200">
                          {hotel.access}
                        </span>
                        <div className="flex items-center gap-1 text-amber-500 bg-amber-50 px-2 py-0.5 rounded-md">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="font-bold text-sm text-stone-800">{hotel.rating}</span>
                          <span className="text-xs text-stone-400">({hotel.reviews}件)</span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug mb-3">
                        {hotel.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-600 line-clamp-2 mb-4 italic">
                        「{hotel.special}」
                      </p>

                      <p className="text-stone-700 text-sm leading-relaxed mb-5">
                        {hotel.story}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 bg-stone-50 p-4 rounded-2xl border border-stone-200/70 mb-5">
                        <h4 className="text-xs font-bold text-stone-900 flex items-center gap-1.5 uppercase tracking-wide">
                          <CheckCircle2 className="w-4 h-4 text-cyan-700" />
                          冬の滞在おすすめポイント
                        </h4>
                        <ul className="text-xs text-stone-600 space-y-1.5 pl-1">
                          {hotel.highlights.map((hl: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="text-cyan-700 font-bold">•</span>
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tips */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="bg-cyan-50/50 p-3 rounded-xl border border-cyan-100">
                          <span className="font-bold text-cyan-900 block mb-1 flex items-center gap-1">
                            <Sparkles className="w-3.5 h-3.5" /> 客室の選び方
                          </span>
                          <p className="text-stone-600">{hotel.roomTip}</p>
                        </div>
                        <div className="bg-cyan-50/50 p-3 rounded-xl border border-cyan-100">
                          <span className="font-bold text-cyan-900 block mb-1 flex items-center gap-1">
                            <Utensils className="w-3.5 h-3.5" /> 冬の料理長おすすめ
                          </span>
                          <p className="text-stone-600">{hotel.gourmetTip}</p>
                        </div>
                      </div>
                    </div>

                    {/* Booking Footer */}
                    <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-xs text-stone-500 block">参考宿泊料金（1泊2食付／2名1室時1名あたり）</span>
                        <span className="text-xl sm:text-2xl font-extrabold text-cyan-900">
                          {hotel.price}
                        </span>
                      </div>
                      <a
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-cyan-800 hover:bg-cyan-900 text-white font-bold rounded-xl shadow-md transition-all duration-200 text-sm hover:scale-[1.02]"
                      >
                        <span>空室状況・プラン一覧</span>
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
            <div className="p-2 rounded-xl bg-cyan-50 text-cyan-800">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Winter Delicacies</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                紀州の冬の饗宴：幻の紀州本クエ会席と極上黒毛和牛「熊野牛」
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base text-stone-700">
            <div className="space-y-3">
              <h3 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-700" />
                天然の恵み「紀州本クエフルコース」
              </h3>
              <p className="leading-relaxed text-sm">
                白浜の冬の料理長たちが腕を競い合う「本クエ会席」。繊細な技が光るクエの薄造り（クエ刺し）は、上品な脂と歯ごたえが絶品。香ばしく焼き上げる「焼きクエ」、サクサクの衣の中にジューシーな白身を閉じ込めた「クエの唐揚げ」、そして出汁に旨味が溶け出す「本クエ鍋」。クエの頭やアラから抽出される濃厚なスープで作る〆の雑炊まで、一切れも無駄にしない極上の食体験が待っています。
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-700" />
                紀州伝統の黒毛和牛「熊野牛」
              </h3>
              <p className="leading-relaxed text-sm">
                紀州の豊かな緑と清流で育まれた和歌山県特産の黒毛和牛「熊野牛」。きめ細やかな赤身にバランス良く入った美しい霜降りと、焼いたときに立ち上る甘い香りが特徴です。脂にしつこさがなく、肉本来のコクがしっかりと感じられるため、本クエの鍋とともにステーキや陶板焼きとして楽しむ贅沢なコラボレーションプランが大人気です。
              </p>
            </div>
          </div>
        </section>

        {/* Itinerary Section */}
        <section id="itinerary" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-cyan-50 text-cyan-800">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Recommended 2-Day Tour</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                1泊2日 王道モデルコース：白良浜の夕陽と冬の絶景名勝巡り
              </h2>
            </div>
          </div>
          <div className="space-y-6">
            <div className="border-l-2 border-cyan-800 pl-4 sm:pl-6 space-y-2">
              <span className="text-xs font-extrabold text-cyan-800 uppercase tracking-wider">【1日目】温暖な南紀へ〜海辺の名所散策と本クエ宿ステイ</span>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                11:30 南紀白浜空港（またはJR白浜駅）到着 → 「とれとれ市場」で海鮮ランチ
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                西日本最大級の海鮮マーケットで新鮮なマグロ丼や海の幸を堪能。市場内でお土産もチェック。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                13:30 名勝「千畳敷」＆大迫力の断崖絶壁「三段壁」を見学
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                太平洋の荒波が削り出した畳状の岩盤や、地下の三段壁洞窟を見学。初冬のダイナミックな海景を体感。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                15:30 旅館へチェックイン → 太平洋に沈む黄金の夕陽露天風呂
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                夕暮れ時の温泉に浸かり、茜色に染まる空と海を鑑賞。夕食は旬の天然本クエ鍋会席に舌鼓。
              </p>
            </div>

            <div className="border-l-2 border-stone-300 pl-4 sm:pl-6 space-y-2 pt-2">
              <span className="text-xs font-extrabold text-stone-500 uppercase tracking-wider">【2日目】朝の海風呂〜白良浜の白砂散歩と円月島へ</span>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                08:00 爽快な朝の潮風を感じる露天風呂 → 紀州名物の和朝食
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                朝陽に輝く海を眺めながら目覚めの入浴。紀州南高梅や干物、茶粥などの優しい朝食。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                10:00 白良浜のサラサラな白砂を素足で散歩＆円月島（高嶋）を眺望
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                真っ白なビーチの波打ち際を散策。中央に丸い海蝕洞が開いたシンボル「円月島」で記念撮影し、帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        

        {/* Internal Links / Related Guides */}
        <section className="bg-cyan-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">Related Winter Hot Spring Guides</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい西日本・海の温泉特集
            </h2>
            <p className="text-xs sm:text-sm text-cyan-100/90 leading-relaxed">
              11月・12月ならではの絶景や旬の海の幸を堪能できる全国各地の名湯ガイドを多数公開中。次の旅の計画にぜひお役立てください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-hyogo-arima-onsen-kinsen-kobe-beef-stay"
              className="bg-cyan-900/80 hover:bg-cyan-900 p-4 rounded-2xl transition border border-cyan-800/50 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">兵庫・有馬</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">有馬温泉 日本三古湯の金泉銀泉と極上神戸牛の宿</h3>
            </Link>
            <Link 
              href="/winter-ehime-dogo-onsen-taimeshi-heritage-stay"
              className="bg-cyan-900/80 hover:bg-cyan-900 p-4 rounded-2xl transition border border-cyan-800/50 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">愛媛・道後</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">道後温泉 本館リニューアルと宇和島鯛めしの名宿</h3>
            </Link>
            <Link 
              href="/winter-iseshima-ujibashi-sunrise-matoya-oyster-stay"
              className="bg-cyan-900/80 hover:bg-cyan-900 p-4 rounded-2xl transition border border-cyan-800/50 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">三重・伊勢志摩</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">伊勢志摩 宇治橋冬至日の出と的矢かき＆伊勢海老の宿</h3>
            </Link>
            <Link 
              href="/winter-kyoto-amanohashidate-matsuba-crab-stay"
              className="bg-cyan-900/80 hover:bg-cyan-900 p-4 rounded-2xl transition border border-cyan-800/50 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">京都・天橋立</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">天橋立温泉 白砂青松雪景色とカニ解禁・寒ブリの宿</h3>
            </Link>
            <Link 
              href="/winter-tochigi-kinugawa-onsen-valley-snow-stay"
              className="bg-cyan-900/80 hover:bg-cyan-900 p-4 rounded-2xl transition border border-cyan-800/50 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">栃木・鬼怒川</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">鬼怒川温泉 初冬渓谷美と日光生ゆば＆とちぎ和牛の宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-cyan-900/80 hover:bg-cyan-900 p-4 rounded-2xl transition border border-cyan-800/50 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">全国の厳選温泉・宿特集まとめを見る</h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-wakayama-nanki-shirahama-kue-hotspring-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
