import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves, Ship
} from 'lucide-react';

export const metadata: Metadata = {
  title: '函館湯で過ごす冬の旅（11・12月）！毛蟹会席！名宿5選',
  description: '11月から12月にかけて津軽海峡にイカ釣り漁船の幻想的な漁火（いさりび）が瞬く北海道三大温泉郷「湯の川温泉」。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '函館 湯の川温泉 宿泊, 湯の川温泉 11月 12月, 湯の川プリンスホテル渚亭, 望楼NOGUCHI函館, 割烹旅館 若松, 函館クリスマスファンタジー, 津軽海峡 漁火 露天風呂, 冬イカ 毛蟹 函館朝市',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-hokkaido-hakodate-yunokawa-onsen-isaribi-seafood-stay/",
  },
  openGraph: {
    title: '函館湯で過ごす冬の旅（11・12月）！毛蟹会席！名宿5選',
    description: '11月から12月にかけて津軽海峡にイカ釣り漁船の幻想的な漁火（いさりび）が瞬く北海道三大温泉郷「湯の川温泉」。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-hokkaido-hakodate-yunokawa-onsen-isaribi-seafood-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月函館湯の川温泉の冬名湯と漁火海鮮】津軽海峡インフィニティ露天と函館クリスマスファンタジー・冬イカ＆毛蟹会席の宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "函館湯の川温泉の冬名湯と漁火海鮮で過ごす冬の旅（11・12月）！津軽海峡インフィニティ露天と函館クリスマスファンタジー・冬イカ＆毛蟹会席の宿5選",
    description: "11月から12月にかけて津軽海峡にイカ釣り漁船の幻想的な漁火（いさりび）が瞬く北海道三大温泉郷「湯の川温泉」。海と一体化するインフィニティ露天風呂、赤レンガ倉庫を彩る巨大ツリー「函館クリスマスファンタジー」、函館朝市直送の透き通る冬イカ刺しや濃厚な毛蟹、大沼牛を堪能。初冬の函館を満喫する極上名宿5選を徹底解説。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'],
  }
};

const faqList = [
  {
    "q": "函館・湯の川温泉の11月・12月の気候や雪の状況はどうですか？",
    "a": "11月上旬から中旬の函館は秋の終わりから初冬への移り変わりで、最高気温は10℃前後、朝晩は0℃〜3℃近くまで冷え込みます。11月下旬になると初雪が降り始め、12月に入ると最高気温でも3℃前後、最低気温は氷点下となり、街全体が本格的な銀世界へと変わります。厚手のダウンコート、手袋、マフラー、滑り止め付きの防寒ブーツが必須です。冬の澄んだ冷気のおかげで温泉の湯煙と津軽海峡の夜景がひときわ美しく輝きます。"
  },
  {
    "q": "津軽海峡の『イカ釣り漁船の漁火（いさりび）』はいつ見られますか？",
    "a": "函館の風物詩であるスルメイカ（真イカ）漁は例年6月から翌年1月頃まで行われており、特に11月から12月は冬の冷たく澄んだ空気の中に漁火が強く瞬く絶好の鑑賞シーズンです。日没後の17時〜22時頃、湯の川温泉の海沿い露天風呂や客室から、暗黒の津軽海峡に幾重にも並ぶ灯火を眺めることができます。漆黒の海と煌めく灯りのコントラストは、この時期の湯の川温泉ならではの息をのむ絶景です。"
  },
  {
    "q": "12月に開催される『はこだてクリスマスファンタジー』とは何ですか？",
    "a": "毎年12月1日から12月25日にかけて、函館の観光名所「金森赤レンガ倉庫」前の海上で開催される冬の函館最大のビッグイベントです。函館の姉妹都市であるカナダ・ハリファックス市から贈られる約20メートルの巨大なモミの木が海上特設ステージに設置され、16万個ものLEDイルミネーションで光り輝きます。毎日18時のツリー点灯時には冬花火が打ち上げられ、ファンタジックな冬の夜を演出します。湯の川温泉からは市電やタクシーで約20〜25分でアクセス可能です。"
  },
  {
    "q": "函館空港から湯の川温泉へのアクセスが非常に近いと聞きましたが本当ですか？",
    "a": "はい、湯の川温泉は「日本一空港から近い温泉街」として知られており、函館空港から車やタクシーでわずか約5分（運賃約1,000円〜1,500円）という驚異的な近さです。空港連絡バスや路線バスでも10分前後で温泉街各所にアクセスできます。また、JR函館駅からも函館市電（路面電車）に乗って約30分で「湯の川温泉」電停に到着するため、飛行機・新幹線いずれのルートでも極めて快適にアクセスできます。"
  },
  {
    "q": "湯の川温泉の泉質と歴史について教えてください。",
    "a": "湯の川温泉の歴史は古く、承応2年（1653年）、松前藩主の第9代高広公が重い病にかかった際、この湯で療養したところ全快したと伝えられています。また箱館戦争の際には榎本武揚ら旧幕府軍の傷病兵の療養所としても利用されました。泉質は主にナトリウム・カルシウム-塩化物泉で、無色透明でさらりとした肌触り。塩分が肌をベールのように包み込むため熱が逃げにくく、「温まりの湯」として初冬の北海道の冷えを芯から癒やしてくれます。"
  }
];

export default function HakodateYunokawaWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-hokkaido-hakodate-yunokawa-onsen-isaribi-seafood-stay#article",
        "headline": "【11・12月函館湯の川温泉の冬名湯と漁火海鮮】津軽海峡インフィニティ露天と函館クリスマスファンタジー・冬イカ＆毛蟹会席の宿5選",
        "description": "11月から12月にかけて津軽海峡にイカ釣り漁船の幻想的な漁火（いさりび）が瞬く北海道三大温泉郷「湯の川温泉」。海と一体化するインフィニティ露天風呂、赤レンガ倉庫を彩る巨大ツリー「函館クリスマスファンタジー」、函館朝市直送の透き通る冬イカ刺しや濃厚な毛蟹、大沼牛を堪能。初冬の函館を満喫する極上名宿5選を徹底解説。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
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
          "@id": "https://croud-travel.pages.dev/winter-hokkaido-hakodate-yunokawa-onsen-isaribi-seafood-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-hokkaido-hakodate-yunokawa-onsen-isaribi-seafood-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "函館・湯の川温泉の11月・12月の気候や雪の状況はどうですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "11月上旬から中旬の函館は秋の終わりから初冬への移り変わりで、最高気温は10℃前後、朝晩は0℃〜3℃近くまで冷え込みます。11月下旬になると初雪が降り始め、12月に入ると最高気温でも3℃前後、最低気温は氷点下となり、街全体が本格的な銀世界へと変わります。厚手のダウンコート、手袋、マフラー、滑り止め付きの防寒ブーツが必須です。冬の澄んだ冷気のおかげで温泉の湯煙と津軽海峡の夜景がひときわ美しく輝きます。"
            }
          },
          {
            "@type": "Question",
            "name": "津軽海峡の『イカ釣り漁船の漁火（いさりび）』はいつ見られますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "函館の風物詩であるスルメイカ（真イカ）漁は例年6月から翌年1月頃まで行われており、特に11月から12月は冬の冷たく澄んだ空気の中に漁火が強く瞬く絶好の鑑賞シーズンです。日没後の17時〜22時頃、湯の川温泉の海沿い露天風呂や客室から、暗黒の津軽海峡に幾重にも並ぶ灯火を眺めることができます。漆黒の海と煌めく灯りのコントラストは、この時期の湯の川温泉ならではの息をのむ絶景です。"
            }
          },
          {
            "@type": "Question",
            "name": "12月に開催される『はこだてクリスマスファンタジー』とは何ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "毎年12月1日から12月25日にかけて、函館の観光名所「金森赤レンガ倉庫」前の海上で開催される冬の函館最大のビッグイベントです。函館の姉妹都市であるカナダ・ハリファックス市から贈られる約20メートルの巨大なモミの木が海上特設ステージに設置され、16万個ものLEDイルミネーションで光り輝きます。毎日18時のツリー点灯時には冬花火が打ち上げられ、ファンタジックな冬の夜を演出します。湯の川温泉からは市電やタクシーで約20〜25分でアクセス可能です。"
            }
          },
          {
            "@type": "Question",
            "name": "函館空港から湯の川温泉へのアクセスが非常に近いと聞きましたが本当ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "はい、湯の川温泉は「日本一空港から近い温泉街」として知られており、函館空港から車やタクシーでわずか約5分（運賃約1,000円〜1,500円）という驚異的な近さです。空港連絡バスや路線バスでも10分前後で温泉街各所にアクセスできます。また、JR函館駅からも函館市電（路面電車）に乗って約30分で「湯の川温泉」電停に到着するため、飛行機・新幹線いずれのルートでも極めて快適にアクセスできます。"
            }
          },
          {
            "@type": "Question",
            "name": "湯の川温泉の泉質と歴史について教えてください。",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "湯の川温泉の歴史は古く、承応2年（1653年）、松前藩主の第9代高広公が重い病にかかった際、この湯で療養したところ全快したと伝えられています。また箱館戦争の際には榎本武揚ら旧幕府軍の傷病兵の療養所としても利用されました。泉質は主にナトリウム・カルシウム-塩化物泉で、無色透明でさらりとした肌触り。塩分が肌をベールのように包み込むため熱が逃げにくく、「温まりの湯」として初冬の北海道の冷えを芯から癒やしてくれます。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.pages.dev/winter-hokkaido-hakodate-yunokawa-onsen-isaribi-seafood-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "湯の川温泉　湯の川プリンスホテル渚亭",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5842%2F5842.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "望楼ＮＯＧＵＣＨＩ函館",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F109498%2F109498.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "割烹旅館　若松",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182122%2F182122.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "ＨＡＫＯＤＡＴＥ　海峡の風",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F153116%2F153116.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "湯の川温泉　平成館　しおさい亭　別館花月",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F37469%2F37469.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "湯の川温泉　湯の川プリンスホテル渚亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5842/5842.jpg",
              rating: 4.46,
              reviews: 2372,
              price: "¥8,200〜",
              access: "函館駅よりタクシー１５分。函館駅より函館バス６番日吉営業所行き約１５分湯の川プリンスホテル渚亭前下車徒歩１分。",
              special: "温泉露天風呂付客室は１２０室ご用意！！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5842%2F5842.html",
              story: "津軽海峡の波打ち際に佇み、日本屈指の客室露天風呂保有数を誇る名宿「湯の川プリンスホテル渚亭」。大浴場の海側前面に広がるインフィニティ露天風呂からは、初冬の澄み渡る夜空と津軽海峡に瞬くイカ釣り漁船の漁火（いさりび）を一望できます。11月から12月は、海からの冷涼な風を受けながら湯煙に包まれる露天風呂が最高の心地よさ。波の音を間近に聴きながらナトリウム・カルシウム-塩化物泉の温もりを全身で受け止め、心身ともに解き放たれる至福の時間を過ごせます。",
              roomTip: "海側に面した温泉露天風呂付き和洋室。プライベートなテラスから津軽海峡の水平線と夜の漁火、遠くに函館山のシルエットを眺める贅沢な滞在が叶います。",
              gourmetTip: "職人が目の前で握る近海生マグロや寒ビラメの寿司、活毛蟹の甲羅盛り、朝獲れ真イカのお造り、道産牛の鉄板ステーキなどを取り揃えたライブビュッフェや個室会席。初冬の海の幸の鮮度と甘みが圧巻です。",
              highlights: [
                "日本屈指の客室露天風呂数＆津軽海峡の波打ち際インフィニティ大露天風呂",
                "湯冷めしにくいナトリウム・カルシウム-塩化物泉で冬の北風も心地よい極上温浴",
                "函館朝市直送の活真イカ刺し＆握り寿司・活毛蟹・道産牛ステーキの豪華料理"
              ]
            },
            {
              id: 2,
              name: "望楼ＮＯＧＵＣＨＩ函館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/109498/109498.jpg",
              rating: 4.45,
              reviews: 476,
              price: "¥24,000〜",
              access: "函館空港より車で約10分／JR函館駅より車で約15分／市電湯の川温泉駅から徒歩約3分",
              special: "一人という“贅”と、三世代の“憩”がかなう場所",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F109498%2F109498.html",
              story: "和モダンの洗練されたデザインと大人の静寂を追求した全室スイート仕様のラグジュアリーホテル「望楼NOGUCHI函館」。名建築家が手がけた館内は、函館の歴史と大正ロマン、現代デザインが見事に融合。最上階の展望露天風呂「スカイラウンジSPA」からは、初冬の函館の街並みと津軽海峡の夜景をパノラマで見渡せます。洗練された客室には源泉かけ流しの展望風呂が備わり、誰にも邪魔されないプライベートな湯浴みが約束されています。",
              roomTip: "メゾネットスイートまたは和洋スタイリッシュスイート。客室展望風呂から初冬の星空を眺め、北欧家具に体を預けて上質な読書や音楽を楽しむ大人の隠れ家。",
              gourmetTip: "北海道と函館のテロワールを表現した創作和洋会席。津軽海峡産本マグロ、活毛蟹、ウニ、大沼黒毛和牛などをフレンチの技巧を取り入れて美しく昇華。ワインソムリエが厳選する道産ワインとのマリアージュも格別です。",
              highlights: [
                "全室スイート仕様＆最上階展望SPAスカイラウンジから望む冬夜景パノラマ",
                "源泉かけ流し展望風呂付き客室＆洗練された北欧家具と和モダンデザイン",
                "フレンチの技法を融合させた独創的な創作和洋会席＆道産ワインマリアージュ"
              ]
            },
            {
              id: 3,
              name: "割烹旅館　若松",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/182122/182122.jpg",
              rating: 4.58,
              reviews: 76,
              price: "¥28,600〜",
              access: "羽田空港から函館空港までフライト50分程度、函館空港から車で７分。直前予約も可能です。",
              special: "大正11年創業、100周年を迎えた函館湯の川の地で歴史を刻む老舗温泉宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182122%2F182122.html",
              story: "大正十一年（1922年）創業、昭和天皇をはじめ数々の皇族方や文人墨客をお迎えしてきた湯の川屈指の名旅館「割烹旅館 若松」。ミシュランガイド北海道でも星を獲得した歴史と格式を誇る純和風旅館です。数寄屋造りの館内は凛とした静寂に満ち、津軽海峡を望む露天風呂では、波打ち際ギリギリの位置で自家源泉の掛け流しを堪能。湯船から立ち上る湯煙の向こうに下北半島の稜線と冬の漁火が浮かび上がり、日本の美と情緒が凝縮されています。",
              roomTip: "津軽海峡を一望する純和風数寄屋造り客室。畳の香りと障子から漏れる光が美しく、波音を子守唄に静かな夜を過ごせます。",
              gourmetTip: "割烹旅館の名に恥じぬ本格懐石料理。毎朝函館市場から仕入れる最高の海の幸を用い、津軽海峡の冬イカ、香ばしい焼き毛蟹、函館近海の白身魚、極上出汁のお椀など、一品一品が美術品のように繊細で奥深い味わいです。",
              highlights: [
                "創業大正11年の名門割烹旅館＆昭和天皇もご宿泊された伝統数寄屋造りの風格",
                "波打ち際ギリギリの露天風呂から津軽海峡と下北半島の山並みを眺める絶景",
                "ミシュラン星獲得の割烹の技＆津軽海峡冬魚介と出汁が香る極上本格懐石"
              ]
            },
            {
              id: 4,
              name: "ＨＡＫＯＤＡＴＥ　海峡の風",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/153116/153116.jpg",
              rating: 4.36,
              reviews: 486,
              price: "¥18,700〜",
              access: "函館空港よりお車にて約１０分。ＪＲ函館駅よりお車にて約１５分。市電湯の川温泉駅より徒歩にて約５分。",
              special: "海鮮に特化した海鮮だけのブッフェ。函館らしさを追求しています。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F153116%2F153116.html",
              story: "函館が歩んできた「大正ロマン」「昭和レトロ」「平成モダン」の3つの時代文化を館内デザインと食で体感できる新感覚の温泉リゾート「HAKODATE 海峡の風」。歴史ある名湯を引く大浴場には、大正ロマンをイメージしたレトロモダンな風呂やハーブ風呂、津軽海峡の潮風を感じる露天風呂が揃います。全客室が60平米以上のゆったりとした広さを誇り、旅の疲れを優雅に癒やしてくれます。",
              roomTip: "展望風呂付きのレディーススイートやレトロモダンスイート。大きな窓から初冬の函館の空気を感じ、広々としたリビングでゆったり寛げます。",
              gourmetTip: "選べる2つのディナー形式。旬の魚介を目の前で網焼きする「バイキング」または津軽海峡の新鮮魚介を贅沢に仕立てた「西洋料理コース」。函館名物のイカ刺しや海鮮丼も存分に楽しめます。",
              highlights: [
                "全室60平米以上の贅沢空間＆大正ロマンと平成モダンが融合したデザイン温泉",
                "レトロモダン風呂やハーブ湯など多彩な湯浴み＆充実の専用サロンラウンジ",
                "活魚網焼きバイキングまたは本格フレンチコース＆朝獲れイカ刺し食べ放題"
              ]
            },
            {
              id: 5,
              name: "湯の川温泉　平成館　しおさい亭　別館花月",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/37469/37469.jpg",
              rating: 4.30,
              reviews: 163,
              price: "¥27,000〜",
              access: "ＪＲ函館駅より車で約１５分／函館空港より車で約１０分。湯の川温泉バス停目の前の好立地。",
              special: "露天風呂を備えた客室、二間続きの部屋からは海を一望、しおさいの音色を聴きながら湯浴みをお楽しみ下さい",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F37469%2F37469.html",
              story: "津軽海峡に面した抜群のロケーションを誇り、全室からパノラマのオーシャンビューを楽しめる「平成館 しおさい亭 別館花月」。本館と別館からなり、別館花月は専用ラウンジや特別フロアを備えたワンランク上の上質空間です。大浴場のガラス越し、そして露天風呂からは、冬の怒涛打ち寄せる津軽海峡と、夜空の下に灯る漁火の幻想的な光芒を眼前に望むことができます。",
              roomTip: "海側にせり出すように設計された客室展望露天風呂付き客室。初冬の朝日に輝く波間や、夜空を染める星と漁火をプライベート空間で独占できます。",
              gourmetTip: "道南の旬魚介をふんだんに盛り込んだ季節会席。冬の身が締まった毛蟹、脂の乗った寒ブリ、新鮮なホタテやボタンエビの刺身、北海道産牛の陶板焼きなど、北の恵みが満載です。",
              highlights: [
                "全室オーシャンビュー＆客室露天風呂から津軽海峡の初冬漁火を独占鑑賞",
                "波音を間近に感じる大浴場と専用ラウンジで味わうワンランク上の優雅な休日",
                "冬の毛蟹姿盛り＆脂の乗った寒ブリ・ボタンエビ・道産牛の季節の極上会席"
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
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-slate-950">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85"
          alt="函館湯の川温泉の津軽海峡を望むインフィニティ露天風呂と初冬のイカ釣り漁火"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/90 text-cyan-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-cyan-800/50">
            <Ship className="w-4 h-4 text-cyan-300" />
            <span>11月・12月限定 津軽海峡の初冬漁火と北海道三大名湯・函館冬旅</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">函館湯の川温泉の冬名湯と漁火海鮮で過ごす冬の旅（11・12月）！<br className="hidden sm:inline" /> 津軽海峡インフィニティ露天と函館クリスマスファンタジー・冬イカ＆毛蟹会席の宿5選</h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            初冬の澄み渡る夜空の下、津軽海峡に無数に瞬くイカ釣り漁船の漁火。北海道屈指の歴史を誇る湯の川温泉の海景露天風呂に浸かり、12月の赤レンガ倉庫巨大クリスマスツリーと函館朝市直送の海の幸を堪能する大人の贅沢旅。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-cyan-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-cyan-400" /> 北海道函館市湯川町（函館空港車5分）</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月函館湯】毛蟹会席！名宿5選","item":"https://croud-travel.pages.dev/winter-hokkaido-hakodate-yunokawa-onsen-isaribi-seafood-stay"}]}) }}
      />
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Hakodate Yunokawa Onsen Winter Elegance</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                津軽海峡の波音と360年の名湯、港町函館が最もロマンチックに輝く季節
              </h2>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            北海道三大温泉郷のひとつに数えられ、道南の玄関口・函館に位置する「湯の川温泉」。その歴史は古く、承応2年（1653年）に松前藩主が湯治して難病を癒やした記録が残り、幕末には箱館戦争の戦火で傷ついた旧幕府軍の榎本武揚や兵士たちをも温かく包み込みました。海岸沿いに旅館街が立ち並び、津軽海峡の広大なパノラマと一体になれる日本屈指のシーサイド温泉リゾートです。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            湯の川温泉の泉質は、主に無色透明でさらりとした肌触りのナトリウム・カルシウム-塩化物泉。湯上がりに塩分が肌の表面に薄い皮膜を形成するため水分蒸発を防ぎ、保温効果が非常に高い「熱の湯」として親しまれています。海風が冷たくなる初冬の11月から12月、雪が舞う露天風呂に肩まで浸かれば、体の芯までじんわりと温まり、湯冷めしにくい極上の心地よさに包まれます。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            そして初冬の湯の川温泉最大のスペクタクルが、津軽海峡に灯る「イカ釣り漁船の漁火（いさりび）」です。11月から12月にかけての漆黒の海に、宝石を散りばめたかのように無数の集魚灯が水平線に連なります。湯船から立ち上る湯煙の向こうに瞬く漁火を眺める時間は、他所では決して味わえない唯一無二の幻想体験。さらに12月には赤レンガ倉庫前で「はこだてクリスマスファンタジー」が開幕し、巨大ツリーと冬花火が港町をロマンチックに彩ります。
          </p>
          
          <div className="bg-cyan-50/70 rounded-2xl p-5 border border-cyan-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-cyan-700" />
                11月・12月函館湯の川温泉 旅のハイライト
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                津軽海峡の冬漁火を望む絶景露天風呂・赤レンガ倉庫クリスマスファンタジー巨大ツリー・函館朝市直送の透き通る真イカ刺し＆活毛蟹会席・函館空港車5分の快適アクセス
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
        <section className="bg-slate-100/80 rounded-2xl p-6 border border-slate-200">
          <h2 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Compass className="w-5 h-5 text-cyan-800" />
            目次・インデックス
          </h2>
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700">
            <a href="#spring-feature" className="hover:text-cyan-800 hover:underline flex items-center gap-1.5">
              <span>1. 湯の川温泉の魅力：360年の名湯と津軽海峡の絶景インフィニティ</span>
            </a>
            <a href="#isaribi-guide" className="hover:text-cyan-800 hover:underline flex items-center gap-1.5">
              <span>2. 初冬の夜空に瞬く奇跡：津軽海峡のイカ釣り漁火と鑑賞ポイント</span>
            </a>
            <a href="#christmas-fantasy" className="hover:text-cyan-800 hover:underline flex items-center gap-1.5">
              <span>3. 12月の函館名物「はこだてクリスマスファンタジー」と赤レンガ倉庫</span>
            </a>
            <a href="#hotels" className="hover:text-cyan-800 hover:underline flex items-center gap-1.5">
              <span>4. 11・12月に泊まりたい函館湯の川温泉の厳選名宿5選</span>
            </a>
            <a href="#gourmet" className="hover:text-cyan-800 hover:underline flex items-center gap-1.5">
              <span>5. 函館の初冬グルメ：透き通る冬イカ・濃厚活毛蟹・大沼牛の饗宴</span>
            </a>
            <a href="#itinerary" className="hover:text-cyan-800 hover:underline flex items-center gap-1.5">
              <span>6. 1泊2日 湯の川温泉〜函館山夜景・赤レンガ倉庫 王道モデルコース</span>
            </a>
            <a href="#faq" className="hover:text-cyan-800 hover:underline flex items-center gap-1.5">
              <span>7. よくある質問（FAQ）と初冬の気候・服装ガイド</span>
            </a>
          </nav>
        </section>

        {/* Section 1: Spring Feature */}
        <section id="spring-feature" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
            <div className="p-2 rounded-xl bg-cyan-50 text-cyan-800">
              <Waves className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Heritage & Water Quality</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                1. 湯の川温泉の魅力：360年の名湯と津軽海峡の絶景インフィニティ
              </h2>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            湯の川温泉の開湯は江戸初期の承応2年（1653年）。松前藩主が湯治に訪れて以来、文人墨客や武士、そして近代以降は多くの旅人に愛されてきました。湯の川の源泉は主に松倉川河口付近から海岸部にかけて湧出し、湧出温度は約60℃前後と高温。湧出量は豊富で、海沿いの旅館群には新鮮な塩化物泉が絶え間なく供給されています。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            この温泉の真骨頂は、なんといっても海との一体感です。海沿いの旅館では、浴槽の縁と津軽海峡の水面が視覚的につながる「インフィニティ露天風呂」を備えた宿が多く、初冬の冷たく澄んだ潮風を肌に受けながら、遠く下北半島や恵山岬の山影を眺める開放感は格別です。また、函館空港から車でわずか5分という日本有数のアクセスの良さも、冬の北海道旅行における絶大な安心材料となっています。
          </p>
        </section>

        {/* Section 2: Isaribi Guide */}
        <section id="isaribi-guide" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
            <div className="p-2 rounded-xl bg-cyan-50 text-cyan-800">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Spectacular Night Sea Lights</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                2. 初冬の夜空に瞬く奇跡：津軽海峡のイカ釣り漁火と鑑賞ポイント
              </h2>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            函館の冬の夜を象徴する光景が、津軽海峡に煌めく「漁火（いさりび）」です。初冬の海で獲れるスルメイカを引き寄せるため、漁船に備え付けられた強力なハロゲン灯やLED集魚灯が一斉に点灯されます。11月から12月にかけては、気温が急激に下がることで大気中の水蒸気が減少し、光の乱反射が抑えられて漁火が最もシャープに美しく輝く季節です。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            特に湯の川温泉の海側客室や海沿い露天風呂からは、夜の帳が下りる午後5時を過ぎた頃から、沖合数十キロにわたって整然と並ぶ漁火の光の帯が浮かび上がります。静かに打ち寄せる冬波の音をBGMに、温かい温泉に浸かりながら漁火を見つめる時間は、日常の慌ただしさを完全に忘れさせてくれる贅沢なひとときです。
          </p>
        </section>

        {/* Section 3: Christmas Fantasy */}
        <section id="christmas-fantasy" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
            <div className="p-2 rounded-xl bg-cyan-50 text-cyan-800">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Winter Festive Highlight</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                3. 12月の函館名物「はこだてクリスマスファンタジー」と赤レンガ倉庫
              </h2>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            12月1日から12月25日まで開催される「はこだてクリスマスファンタジー」は、冬の函館旅行で絶対に外せない風物詩です。姉妹都市カナダ・ハリファックス市から太平洋を渡って届けられる樹齢数十年の巨大なモミの木が、金森赤レンガ倉庫前の海上特設ステージにそびえ立ちます。約16万個のイルミネーションが点灯される瞬間、赤レンガの壁面が温かい光に包まれ、冬の夜空に祝祭の花火が打ち上がります。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            会場周辺では函館市内の名店が腕を振るう名物「スープバー」が並び、体が温まるクラムチャウダーやカニスープを味わいながら散策を楽しめます。湯の川温泉から赤レンガ倉庫へは市電やタクシーで手軽に往復できるため、夕暮れにクリスマスイルミネーションを満喫し、冷えた体を湯の川の名湯で温め直すという最高の冬旅プランが完成します。
          </p>
        </section>

        {/* Section 4: Hotel Cards */}
        <section id="hotels" className="space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest bg-cyan-50 px-4 py-1.5 rounded-full border border-cyan-200">
              Selected 5 Luxury Ryokan & Hotels
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              4. 11・12月に泊まりたい函館湯の川温泉の厳選名宿5選
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto">
              津軽海峡の絶景インフィニティ露天風呂、客室露天風呂、函館朝市直送の冬イカ＆活毛蟹料理を心ゆくまで堪能できる極上宿を厳選しました。
            </p>
          </div>

          <div className="space-y-8">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition duration-300"
              >
                <div className="flex flex-col">
                  <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
                    <Image
                      src={hotel.img}
                      alt={hotel.name}
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute top-4 left-4 bg-cyan-900/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md backdrop-blur-sm">
                      第{hotel.id}位 厳選宿
                    </div>
                  </div>
                  <div className="w-full p-5 sm:p-7 flex flex-col justify-between space-y-4">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 text-amber-500">
                          <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                          <span className="font-extrabold text-slate-900 text-lg">{hotel.rating}</span>
                          <span className="text-xs text-slate-500">({hotel.reviews}件のレビュー)</span>
                        </div>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-cyan-50 text-cyan-800 border border-cyan-200">
                          {hotel.price}
                        </span>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                        {hotel.name}
                      </h3>
                      
                      <p className="text-xs text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0" />
                        <span>{hotel.access}</span>
                      </p>

                      <p className="text-slate-700 text-sm leading-relaxed">
                        {hotel.story}
                      </p>

                      <div className="space-y-2 pt-2">
                        {hotel.highlights.map((h, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-cyan-700 flex-shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                      <div className="bg-slate-50 rounded-2xl p-4 space-y-2 border border-slate-200/60 text-xs">
                        <div>
                          <strong className="text-slate-900 font-bold block sm:inline">客室の魅力: </strong>
                          <span className="text-slate-600">{hotel.roomTip}</span>
                        </div>
                        <div>
                          <strong className="text-slate-900 font-bold block sm:inline">冬の味覚: </strong>
                          <span className="text-slate-600">{hotel.gourmetTip}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                      <span className="text-xs text-slate-400">※楽天トラベル公式プラン提携</span>
                      <a
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-800 hover:bg-cyan-900 text-white text-sm font-bold rounded-xl transition duration-200 shadow-md group"
                      >
                        <span>空室・宿泊プランを確認</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Gourmet */}
        <section id="gourmet" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
            <div className="p-2 rounded-xl bg-cyan-50 text-cyan-800">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Winter Coastal Delicacies</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                5. 函館の初冬グルメ：透き通る冬イカ・濃厚活毛蟹・大沼牛の饗宴
              </h2>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            函館の冬の食卓を飾る主役は、なんといっても「イカ」です。11月から12月にかけて水揚げされるスルメイカ（真イカ）は、身が引き締まり強い甘みとコリコリとした歯ごたえが特徴。朝水揚げされたばかりのイカはガラスのように透き通っており、生姜醤油でいただく活イカ刺しは函館ならではの至福の味覚です。さらに濃厚な肝（ゴロ）を醤油に溶いて味わう贅沢も堪能できます。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            また、冬に旬を迎える噴火湾産の「活毛蟹」も外せません。ぎっしりと詰まった繊細な甘みの身と、黄金色に輝く濃厚な蟹味噌は、一度食べたら忘れられない極上の味わい。さらに渡島半島の豊かな自然で育まれたブランド黒毛和牛「大沼牛」のステーキやすき焼き、昆布出汁が香る函館塩ラーメンなど、初冬の函館は食のワンダーランドです。
          </p>
        </section>

        {/* Section 6: Itinerary */}
        <section id="itinerary" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
            <div className="p-2 rounded-xl bg-cyan-50 text-cyan-800">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Recommended Winter Course</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                6. 1泊2日 湯の川温泉〜函館山夜景・赤レンガ倉庫 王道モデルコース
              </h2>
            </div>
          </div>
          <div className="space-y-6">
            <div className="border-l-2 border-cyan-800 pl-4 sm:pl-6 space-y-2">
              <span className="text-xs font-extrabold text-cyan-800 uppercase tracking-wider">【1日目】函館空港到着〜赤レンガクリスマス＆名湯漁火露天</span>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                12:30 函館空港到着 → タクシーでわずか5分、湯の川温泉の宿へ荷物を預ける
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                空港から直行できる圧倒的な近さ。身軽になって函館市電でベイエリアへ出発。
              </p>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base pt-2">
                14:30 金森赤レンガ倉庫＆元町異人館街散策
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                八幡坂から海を見下ろす絶景、ハリストス正教会やカトリック元町教会のエキゾチックな街並みを鑑賞。
              </p>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base pt-2">
                17:30 函館クリスマスファンタジー巨大ツリー点灯式＆冬花火
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                18時の点灯花火を鑑賞し、名物スープバーで温まる。その後市電で湯の川温泉へ。
              </p>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base pt-2">
                19:30 宿で冬イカ＆活毛蟹会席 → 津軽海峡漁火露天風呂で夜景を堪能
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                波打ち際の露天風呂から、漆黒の海に輝く幻想的なイカ釣り漁火を眺めながら極上の湯浴み。
              </p>
            </div>

            <div className="border-l-2 border-slate-300 pl-4 sm:pl-6 space-y-2 pt-2">
              <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">【2日目】朝の海景露天風呂〜函館朝市海鮮丼＆五稜郭</span>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                07:30 朝の津軽海峡露天風呂 → 郷土朝食バイキング
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                朝日に輝く水平線を眺めながら入浴。いくらかけ放題やイカ刺しの朝食でパワーチャージ。
              </p>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base pt-2">
                09:30 函館朝市で海鮮丼とお土産探し → 特別史跡「五稜郭タワー」
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                活気あふれる朝市で毛蟹やいくらを購入。五稜郭タワーから初冬の星形城郭の全貌を見晴らす。
              </p>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base pt-2">
                14:00 函館空港より帰路へ
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                温泉街から空港まで車で5分なので、フライト直前まで時間を有効活用できます。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        

        {/* Internal Links / Related Guides */}
        <section className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">Related Hokkaido & Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい北海道・東北の冬名湯＆旬の味覚特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              11月・12月ならではの雪景色、温泉街のイルミネーション、旬の海鮮を味わい尽くす全国の名宿ガイドを多数公開中。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-hokkaido-sapporo-white-illumination-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">北海道・札幌</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">さっぽろホワイトイルミネーションと大通公園周辺の極上ホテル</h3>
            </Link>
            <Link 
              href="/winter-hokkaido-noboribetsu-onsen-snow-jigokudani-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">北海道・登別</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">登別温泉 地獄谷雪景色と九種の泉質を誇る名湯宿</h3>
            </Link>
            <Link 
              href="/winter-hokkaido-jozankei-onsen-snow-keikoku-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">北海道・定山渓</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">定山渓温泉 豊平川の雪渓谷美と札幌の奥座敷名湯宿</h3>
            </Link>
            <Link 
              href="/winter-aomori-sukayu-hakkoda-yukimi-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">青森・酸ヶ湯八甲田</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">八甲田・酸ヶ湯温泉 千人風呂と豪雪白銀世界の秘湯宿</h3>
            </Link>
            <Link 
              href="/winter-iwate-hanamaki-onsen-yukimi-maesawa-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">岩手・花巻</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">花巻温泉郷 宮沢賢治ゆかりの渓谷雪見露天と前沢牛会席の宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">全国の厳選温泉・宿特集まとめを見る</h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-hokkaido-hakodate-yunokawa-onsen-isaribi-seafood-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
