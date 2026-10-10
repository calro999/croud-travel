import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Anchor, AlertTriangle, Sunrise, HeartHandshake, Eye
} from 'lucide-react';

export const metadata: Metadata = {
  title: '11・12・1月岩手：名物瓶ドン」と太平洋絶景オーシャンビュー！名宿5選',
  description: '冬の澄み渡る群青の太平洋と白銀の奇岩美を巡る11〜1月の岩手・三陸海岸（宮古・田老・久慈）特集。国の名勝「浄土ヶ浜」の冬景色や。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '浄土ヶ浜 冬, 三陸 毛ガニ 宿, 宮古 瓶ドン, 寒アワビ 岩手, 三陸復興国立公園 観光, 休暇村 陸中宮古, 浄土ヶ浜パークホテル, 三陸鉄道 こたつ列車, 宮古市 ホテル',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-iwate-sanriku-miyako-jodogahama-kegani-stay/"
  },
  openGraph: {
    title: '11・12・1月岩手：名物瓶ドン」と太平洋絶景オーシャンビュー！名宿5選',
    description: '冬の澄み渡る群青の太平洋と白銀の奇岩美を巡る11〜1月の岩手・三陸海岸（宮古・田老・久慈）特集。国の名勝「浄土ヶ浜」の冬景色や。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-iwate-sanriku-miyako-jodogahama-kegani-stay',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '冬の岩手・浄土ヶ浜の奇岩絶景と三陸毛ガニ'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "11・12・1月岩手：白銀の浄土ヶ浜と冬の三陸海鮮紀行！旬を迎える「三陸毛ガニ・寒アワビ・名物瓶ドン」と太平洋絶景オーシャンビュー名宿5選",
    description: "冬の澄み渡る群青の太平洋と白銀の奇岩美を巡る11〜1月の岩手・三陸海岸（宮古・田老・久慈）特集。国の名勝「浄土ヶ浜」の冬景色や、冬に最も甘みとカニ味噌が詰まる「三陸宮古の毛ガニ」、11〜12月限定の伝統「寒アワビ」、宮古発祥の名物「瓶ドン」。三陸復興国立公園のダイナミックな海岸美と水平線を望む絶景オーシャンビュー名宿5選を完全ガイドします。",
    images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function IwateSanrikuMiyakoWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "【11・12・1月岩手】白銀の浄土ヶ浜と冬の三陸海鮮紀行！旬を迎える「三陸毛ガニ・寒アワビ・名物瓶ドン」と太平洋絶景オーシャンビュー名宿5選",
        "description": "冬の澄み渡る群青の太平洋と白銀の奇岩美を巡る11〜1月の岩手・三陸海岸（宮古・田老・久慈）特集。国の名勝「浄土ヶ浜」の冬景色や、冬に最も甘みとカニ味噌が詰まる「三陸宮古の毛ガニ」、11〜12月限定の伝統「寒アワビ」、宮古発祥の名物「瓶ドン」。三陸復興国立公園のダイナミックな海岸美と水平線を望む絶景オーシャンビュー名宿5選を完全ガイドします。",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "T00:00:00+09:00",
        "dateModified": "T00:00:00+09:00",
        "author": {
          "@type": "Organization",
          "name": "旅クラウド編集部",
          "url": "https://croud-travel.pages.dev"
        },
        "publisher": {
          "@type": "Organization",
          "name": "旅クラウド",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.pages.dev/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-iwate-sanriku-miyako-jodogahama-kegani-stay"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "ホーム",
            "item": "https://croud-travel.pages.dev"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "冬の旅特集一覧",
            "item": "https://croud-travel.pages.dev/features"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "岩手・浄土ヶ浜＆三陸毛ガニ・名物瓶ドン名宿",
            "item": "https://croud-travel.pages.dev/winter-iwate-sanriku-miyako-jodogahama-kegani-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "冬の「浄土ヶ浜」の見どころと冬ならではの景色は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "国の名勝に指定されている浄土ヶ浜は、約5200万年前に形成されたといわれる白緑色の流紋岩の奇岩が立ち並ぶ三陸屈指の景勝地です。江戸時代、宮古山常安寺の霊鏡和尚が「さながら極楽浄土のごとし」と感嘆したことからその名が付きました。夏場は海水浴客で賑わいますが、11月から1月の冬期は人影もまばらで、凛とした静寂に包まれます。冬晴れの澄んだ青空と深い群青色の宮古湾、そして岩肌や常緑のアカマツにうっすらと白雪が積もる光景は、まさに絵画のような美しさです。遊歩道も整備されており、冬の清涼な潮風を感じながらの散策は格別です。"
            }
          },
          {
            "@type": "Question",
            "name": "「三陸・宮古の毛ガニ」が冬に特に美味しくなる理由は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "毛ガニといえば北海道のイメージが強いですが、実は岩手県三陸沖（特に宮古沖）は全国有数の毛ガニの優良漁場です。三陸の毛ガニ漁は水温が下がる冬期（12月〜3月頃）に本格的なシーズンを迎えます。親潮（千島海流）が運ぶ豊富なプランクトンを食べて育つため、身の繊維がきめ細かく強い甘みを持ちます。特に甲羅の中にぎっしりと詰まったカニ味噌は、苦味が一切なくウニのように濃厚でクリーミー。茹でたて熱々の毛ガニを地酒とともに味わう贅沢は、冬の三陸旅行最大のハイライトです。"
            }
          },
          {
            "@type": "Question",
            "name": "宮古発祥の名物グルメ「瓶ドン」とは？どこで食べられる？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "「瓶ドン」は、宮古市でウニの保存方法として親しまれてきた牛乳瓶詰めのスタイルから着想を得て誕生した宮古のご当地海鮮丼です。透明なガラス瓶の中に、三陸特産のイクラ、めかぶ、サーモン、ウニ、イカ、タコなどが層をなして美しく詰められています。食べる直前に自分で熱々のご飯の上へ豪快に流し込んで完成させます。見た目の華やかさと新鮮な魚介の美味しさから全国的な大人気グルメとなっており、市内の寿司店や食堂、浄土ヶ浜レストハウス、宿泊ホテルの朝食ビュッフェなどで楽しめます。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の三陸沿岸（宮古・久慈方面）の気候と道路状況・雪対策は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "三陸沿岸地域は太平洋側に面しているため、岩手県の内陸部（盛岡や八幡平など）と比較すると降雪量は格段に少なく、冬でも晴天の日が多いのが特徴です。しかし、朝晩の冷え込みは厳しく、路面温度が氷点下になるため、日陰や橋の上、トンネルの出入口では「ブラックアイスバーン」と呼ばれる凍結が発生しやすくなります。復興道路として全線開通した「三陸沿岸道路（無料区間）」は非常に走りやすい高規格道路ですが、冬期に訪れる際は必ずスタッドレスタイヤを装着し、車間距離を十分に取った運転を心がけてください。"
            }
          },
          {
            "@type": "Question",
            "name": "白銀の浄土ヶ浜と三陸海鮮を巡る冬の1泊2日おすすめモデルコースは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "【1日目】盛岡駅または花巻空港よりレンタカーで出発 → 国道106号（宮古盛岡横断道路）を経由して宮古市へ（約1時間30分） → 宮古市内で名物「瓶ドン」のランチ → 国の名勝「浄土ヶ浜」へ向かい、冬の奇岩絶景とビジターセンターを散策 → 浄土ヶ浜または宮古湾沿いの温泉リゾートにチェックイン → 太平洋の夕景を望む露天風呂で温まる → 夕食に「三陸宮古の旬毛ガニ＆冬の海鮮会席」を満喫。【2日目】客室や展望台から昇る太平洋の初日の出を鑑賞 → ホテルで新鮮イクラ朝食 → 三陸沿岸道路を北上して田老の防潮堤や久慈・小袖海岸へ → 道の駅くじ「やませ土風館」で名物まめぶ汁とお土産購入 → 三陸鉄道リアス線で冬の車窓旅を楽しむ → 帰路へ。"
            }
          }
        ]
      }
    ]
  };

  const hotelsList = [
            {
              id: 1,
              name: "浄土ヶ浜パークホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/64789/64789.jpg",
              rating: 4.46,
              reviews: 1610,
              price: "¥14,300〜",
              access: "ＪＲ山田線　宮古駅から奥浄土ヶ浜行きバスにて１５分、浄土ヶ浜ビジターセンター下車後、徒歩５分。【ペットと宿泊可※小型犬】",
              special: "浄土ヶ浜の高台に建つ和の景観と四季の恵みあふれるホテル。三陸の海の幸をご用意してお待ちしております",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F64789%2F64789.html",
              story: "三陸復興国立公園を代表する国の名勝・浄土ヶ浜の高台に位置し、アカマツの美林越しに碧く澄んだ宮古湾を見下ろすリゾート名宿「浄土ヶ浜パークホテル」。冬の冷涼な空気の中でテラスに出ると、澄み渡る冬晴れの空と紺碧の海、白緑色の流紋岩が織りなすパノラマが眼前に広がります。大浴場「白妙の湯」は赤松の林を望む露天風呂を備え、宮古湾の潮風を心地よく肌に受けながら旅の疲れを優しく解きほぐすことができます。宿の真骨頂は、世界三大漁場と称される三陸沖の海の幸を集結させた贅沢なビュッフェおよび会席料理。冬の三陸を象徴する「三陸宮古の毛ガニ」は、身がぎっしりと詰まり、濃厚でクリーミーなカニ味噌が舌の上でとろけます。さらに、注文を受けてから目の前で焼き上げる三陸産ホタテや牛ステーキ、そして朝食にはイクラやウニ、めかぶを自分好みでご飯に盛り付ける名物「宮古瓶ドン」スタイルを心ゆくまで堪能できる、三陸随一の美食リゾートです。",
              roomTip: "海側パノラマビュー和洋室。朝には宮古湾の水平線から昇る感動的な朝日を温かい客室内から独り占めできます。",
              gourmetTip: "「冬の三陸毛ガニ＆海鮮炭火焼きビュッフェ」。茹で上げ毛ガニの濃厚なカニ味噌と、朝食名物の海鮮瓶ドンが圧巻のクオリティ。",
              highlights: [
                "浄土ヶ浜の高台に位置・赤松林越しの宮古湾パノラマと大浴場露天風呂",
                "三陸宮古の旬毛ガニ＆朝食名物「宮古瓶ドン」海鮮乗せ放題",
                "浄土ヶ浜散策路へ直結・冬の澄み切った海岸美を気軽に散策"
              ]
            },
            {
              id: 2,
              name: "休暇村　陸中宮古",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8594/8594.jpg",
              rating: 4.25,
              reviews: 718,
              price: "¥13,600〜",
              access: "JRと三陸鉄道の宮古駅より休暇村行き県北バスにて25分（宮古駅から送迎バスあり要予約）、車は盛岡南ＩＣより約90分",
              special: "三陸海岸の雄大な絶景と新鮮な魚介や岩手県の食材を使ったビュッフェと体験型グルメ「瓶ドン」を楽しむ♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8594%2F8594.html",
              story: "本州最東端の街・宮古の海岸段丘に建ち、太平洋の雄大な水平線を180度見渡す抜群のロケーションを誇る「休暇村 陸中宮古」。全客室がオーシャンビューとなっており、冬の朝には紺碧の大海原を黄金色に染め上げながら昇る息を呑むほど美しい日の出を部屋にいながら拝むことができます。大浴場は麦飯石を通した人工温泉で、身体の芯までぽかぽかと温まり、冬の冷えた身体をしっかりとほぐしてくれます。夕食は三陸の冬の味覚を詰め込んだ「三陸美味彩々ビュッフェ」。11月から1月にかけて旬を迎える三陸の毛ガニや寒ダラ、脂の乗った寒サバ、新鮮なイカ刺しなどが贅沢に並び、郷土の鍋料理「寒ダラのじゃっぱ汁仕立て」が身体を温めてくれます。宮古の海の幸と雄大な自然を五感で体感できる、ファミリーからシニアまで満足度の高い名宿です。",
              roomTip: "海側最上階洋室ツイン。パノラマウィンドウから水平線と行き交う漁船を眺められ、夜には満天の冬の星空が広がります。",
              gourmetTip: "「冬の三陸海鮮ビュッフェ＆寒ダラ鍋」。濃厚なタラの白子やアラから出る極上出汁の汁物と、新鮮な三陸魚介のお造り。",
              highlights: [
                "本州最東端・全室オーシャンビューから拝む息を呑む初日の出",
                "冬の三陸美味彩々ビュッフェ・毛ガニと寒ダラの熱々じゃっぱ汁",
                "三陸復興国立公園の豊かな自然・シニアやファミリーにも安心"
              ]
            },
            {
              id: 3,
              name: "ホテル　ルートイン宮古",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/145293/145293.jpg",
              rating: 4.13,
              reviews: 898,
              price: "¥5,275〜",
              access: "ＪＲ三陸鉄道　宮古駅よりお車にて約１0分、三陸自動車道 宮古南IC・宮古港ICより 車で約5分",
              special: "大浴場完備、全室Wi-Fi 無料",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F145293%2F145293.html",
              story: "三陸沿岸道路「宮古中央IC」から車で約8分、国道45号線沿いに位置し、冬の三陸ドライブ旅やビジネスの拠点として絶大な利便性を誇る「ホテル ルートイン宮古」。太平洋を見下ろす高台にあり、一部客室やレストランからは宮古湾の穏やかな水面を望むことができます。館内にはラジウム人工温泉大浴場「旅人の湯」を完備。足を伸ばしてゆったりと浸かれる広々とした湯船が、冬の冷え込みや長時間のドライブで疲れた身体を心地よく解きほぐします。客室には加湿空気清浄機と快適な寝具が揃い、冬の滞在も快適。朝食バイキングでは、ヨーロッパ直輸入の焼きたてクロワッサンや地元の三陸めかぶ、和洋のお惣菜が豊富に並び、元気に旅のスタートを切ることができます。",
              roomTip: "コンフォートシングル・ツイン。高層階からは宮古湾の海景が望め、静かで落ち着いた室内環境で快眠できます。",
              gourmetTip: "「和洋バイキング朝食」。三陸名産のめかぶや焼き魚、熱々の味噌汁など、朝から元気が出る充実のメニュー。",
              highlights: [
                "三陸沿岸道路至近・ラジウム人工温泉大浴場と無料和洋朝食",
                "三陸めかぶ付き朝食バイキング・シモンズベッドで快眠",
                "無料平面駐車場完備・冬の三陸ドライブ旅行の拠点に最適"
              ]
            },
            {
              id: 4,
              name: "久慈グランドホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5026/5026.jpg",
              rating: 3.94,
              reviews: 448,
              price: "¥7,650〜",
              access: "ＪＲ八戸線三陸鉄道久慈駅より徒歩３分。",
              special: "久慈駅東口に立地観光ビジネスに最適。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5026%2F5026.html",
              story: "NHK朝の連続テレビ小説の舞台としても脚光を浴びた琥珀の街・久慈の中心街に位置し、駅前からのアクセスも抜群なシティホテル「久慈グランドホテル」。北三河ならぬ北三陸の観光やビジネスの拠点として親しまれています。冬の久慈は、小袖海岸の奇岩絶景や、水温が下がることで甘みが増す寒ヒラメ、アワビ、そして久慈まめぶ汁など独自の食文化が魅力。ホテルのレストランでは、三陸産の海の幸をふんだんに使った海鮮御膳や、岩手県産いわて牛のステーキなど、地産地消にこだわった上質な会席料理を提供。広々としたロビーや清潔感のある客室、温かなおもてなしで、北三陸の冬の夜をゆったりと過ごせます。",
              roomTip: "デラックスツインルーム。ゆとりある広さと寛ぎのソファを備え、冬の観光荷物が多くてもゆったり寛げます。",
              gourmetTip: "「三陸海鮮御膳＆いわて牛陶板焼き」。三陸の旬の地魚刺身盛り合わせと、久慈名物の郷土料理「まめぶ汁」の組み合わせ。",
              highlights: [
                "久慈駅前中心部の落ち着いたシティホテル・いわて牛＆三陸海鮮",
                "久慈名物まめぶ汁と三陸旬魚刺身・岩手県産米の美食膳",
                "小袖海岸や琥珀博物館へのアクセス良好・北三陸観光拠点"
              ]
            },
            {
              id: 5,
              name: "グリーンピア三陸みやこ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/135513/135513.jpg",
              rating: 4.25,
              reviews: 808,
              price: "¥5,500〜",
              access: "新田老駅よりお車にて10分",
              special: "太平洋を眼下に足をゆった～りのばせる光明石温泉大浴場！仕事や旅の疲れを癒し明日の活力に！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F135513%2F135513.html",
              story: "宮古市北部の田老地区、高台の広大な敷地に位置し、太平洋の大パノラマを見下ろす総合リゾートホテル「グリーンピア三陸みやこ」。全室が太平洋を望むオーシャンビューで、冬の澄み切った大気の中に広がる果てしない水平線と、波打ち際の白波のコントラストが見事です。館内には人工温泉大浴場やサウナを備え、広々とした浴槽でゆったりと手足を伸ばして温まることができます。夕食には、三陸宮古の冬の味覚である毛ガニやアワビ、三陸産サーモンなどを盛り込んだ海鮮会席を提供。敷地内にはテニスコートや散策路もあり、静かな環境の中で三陸の大自然を存分に体感できるリフレッシュに最適なリゾートです。",
              roomTip: "オーシャンビュー和室・洋室。大きな窓から太平洋の水平線を一望でき、朝には感動的な日の出が眼前に広がります。",
              gourmetTip: "「冬の三陸味覚会席」。三陸産毛ガニの半身盛りやアワビの陶板焼き、三陸旬魚のお造りなど海の恵みを網羅。",
              highlights: [
                "田老の高台に建つ絶景リゾート・太平洋一望の大浴場と広大な敷地",
                "三陸毛ガニ＆アワビ陶板焼き・地魚舟盛り付き贅沢会席",
                "全室バルコニー付き・喧騒から離れた静かな大人の隠れ家"
              ]
            }
  ];

  const faqs = [
    {
      q: "冬の「浄土ヶ浜」の見どころと冬ならではの景色は？",
      a: "国の名勝に指定されている浄土ヶ浜は、約5200万年前に形成されたといわれる白緑色の流紋岩の奇岩が立ち並ぶ三陸屈指の景勝地です。江戸時代、宮古山常安寺の霊鏡和尚が「さながら極楽浄土のごとし」と感嘆したことからその名が付きました。夏場は海水浴客で賑わいますが、11月から1月の冬期は人影もまばらで、凛とした静寂に包まれます。冬晴れの澄んだ青空と深い群青色の宮古湾、そして岩肌や常緑のアカマツにうっすらと白雪が積もる光景は、まさに絵画のような美しさです。遊歩道も整備されており、冬の清涼な潮風を感じながらの散策は格別です。"
    },
    {
      q: "「三陸・宮古の毛ガニ」が冬に特に美味しくなる理由は？",
      a: "毛ガニといえば北海道のイメージが強いですが、実は岩手県三陸沖（特に宮古沖）は全国有数の毛ガニの優良漁場です。三陸の毛ガニ漁は水温が下がる冬期（12月〜3月頃）に本格的なシーズンを迎えます。親潮（千島海流）が運ぶ豊富なプランクトンを食べて育つため、身の繊維がきめ細かく強い甘みを持ちます。特に甲羅の中にぎっしりと詰まったカニ味噌は、苦味が一切なくウニのように濃厚でクリーミー。茹でたて熱々の毛ガニを地酒とともに味わう贅沢は、冬の三陸旅行最大のハイライトです。"
    },
    {
      q: "宮古発祥の名物グルメ「瓶ドン」とは？どこで食べられる？",
      a: "「瓶ドン」は、宮古市でウニの保存方法として親しまれてきた牛乳瓶詰めのスタイルから着想を得て誕生した宮古のご当地海鮮丼です。透明なガラス瓶の中に、三陸特産のイクラ、めかぶ、サーモン、ウニ、イカ、タコなどが層をなして美しく詰められています。食べる直前に自分で熱々のご飯の上へ豪快に流し込んで完成させます。見た目の華やかさと新鮮な魚介の美味しさから全国的な大人気グルメとなっており、市内の寿司店や食堂、浄土ヶ浜レストハウス、宿泊ホテルの朝食ビュッフェなどで楽しめます。"
    },
    {
      q: "冬の三陸沿岸（宮古・久慈方面）の気候と道路状況・雪対策は？",
      a: "三陸沿岸地域は太平洋側に面しているため、岩手県の内陸部（盛岡や八幡平など）と比較すると降雪量は格段に少なく、冬でも晴天の日が多いのが特徴です。しかし、朝晩の冷え込みは厳しく、路面温度が氷点下になるため、日陰や橋の上、トンネルの出入口では「ブラックアイスバーン」と呼ばれる凍結が発生しやすくなります。復興道路として全線開通した「三陸沿岸道路（無料区間）」は非常に走りやすい高規格道路ですが、冬期に訪れる際は必ずスタッドレスタイヤを装着し、車間距離を十分に取った運転を心がけてください。"
    },
    {
      q: "白銀の浄土ヶ浜と三陸海鮮を巡る冬の1泊2日おすすめモデルコースは？",
      a: "【1日目】盛岡駅または花巻空港よりレンタカーで出発 → 国道106号（宮古盛岡横断道路）を経由して宮古市へ（約1時間30分） → 宮古市内で名物「瓶ドン」のランチ → 国の名勝「浄土ヶ浜」へ向かい、冬の奇岩絶景とビジターセンターを散策 → 浄土ヶ浜または宮古湾沿いの温泉リゾートにチェックイン → 太平洋の夕景を望む露天風呂で温まる → 夕食に「三陸宮古の旬毛ガニ＆冬の海鮮会席」を満喫。【2日目】客室や展望台から昇る太平洋の初日の出を鑑賞 → ホテルで新鮮イクラ朝食 → 三陸沿岸道路を北上して田老の防潮堤や久慈・小袖海岸へ → 道の駅くじ「やませ土風館」で名物まめぶ汁とお土産購入 → 三陸鉄道リアス線で冬の車窓旅を楽しむ → 帰路へ。"
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
            <span className="text-slate-900 font-semibold">岩手・浄土ヶ浜＆三陸毛ガニ・瓶ドン名宿</span>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 text-white py-16 md:py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/30 border border-blue-300/40 text-blue-200 text-xs md:text-sm px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span>11月・12月・1月冬の東北旅情特集</span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6 text-white drop-shadow-md">岩手・三陸宮古＆久慈・浄土ヶ浜<br className="hidden sm:inline" /> 白銀の浄土ヶ浜絶景と冬が旬の「三陸毛ガニ・寒アワビ」<br className="hidden sm:inline" /> 名物「瓶ドン」＆太平洋展望オーシャンビュー名宿5選</h1>
            <p className="max-w-3xl mx-auto text-sm md:text-lg text-blue-100 leading-relaxed drop-shadow">
              冬の澄み渡る群青の海と、白雪をまとった白緑色の奇岩が織りなす極楽浄土の絶景「浄土ヶ浜」。親潮が育む冬の最高峰「三陸毛ガニ」の濃厚なカニ味噌、伝統の寒アワビ、そして自分好みで盛り付ける名物「瓶ドン」を心ゆくまで味わう冬の三陸海鮮紀行。
            </p>
          </div>
        </header>

        {/* Article Summary Box */}
        <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
            <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b pb-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0" />
              <span>本特集でわかること（11・12・1月の三陸沿岸旅行の要点）</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-700">
              <div className="bg-cyan-50/60 p-4 rounded-xl border border-cyan-100">
                <span className="font-bold text-cyan-900 block mb-1">① 冬の浄土ヶ浜の奇岩絶景</span>
                観光客の喧騒が去った静寂の冬。群青の海と白雪をかぶった奇岩・アカマツが織りなす絵画のような雪景美。
              </div>
              <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-100">
                <span className="font-bold text-amber-900 block mb-1">② 冬が最盛期の三陸毛ガニ＆寒アワビ</span>
                冷たい親潮に育まれて身が引き締まり、クリーミーなカニ味噌が詰まった宮古毛ガニと、11〜12月限定の寒アワビ。
              </div>
              <div className="bg-blue-50/60 p-4 rounded-xl border border-blue-100">
                <span className="font-bold text-blue-900 block mb-1">③ 水平線の初日の出と展望名宿</span>
                本州最東端・宮古ならではの神々しい初日の出。太平洋の水平線を一望する温泉大浴場と海鮮三昧の宿。
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">
          
          {/* Section 1: 白銀の浄土ヶ浜と冬の三陸海岸 */}
          <section className="space-y-6">
            <div className="border-l-4 border-cyan-600 pl-4">
              <span className="text-cyan-600 font-bold text-sm tracking-wider uppercase">Scenic National Treasure</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
                白雪と群青の海が織りなす幽玄美！国の名勝「浄土ヶ浜」冬の散策
              </h2>
            </div>
            
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
              <p>
                岩手県宮古市に位置する「浄土ヶ浜」は、三陸復興国立公園を象徴する国指定の名勝です。今から約5200万年前の古第三紀にマグマが冷え固まってできたといわれる白緑色の流紋岩（りゅうもんがん）の巨大な奇岩群が、穏やかな宮古湾の入江にそそり立つ独特の地形を誇ります。天和年間（1681〜1684年）に宮古山常安寺の七世・霊鏡和尚がこの地を訪れ、「さながら極楽浄土のごとし」と感嘆したことからその名が付けられたと伝えられています。
              </p>
              <p>
                夏の海水浴シーズンには大勢の観光客で賑わう浄土ヶ浜ですが、11月から1月にかけての冬期は訪れる人も少なく、波音と海鳥の声だけが響く凛とした静寂に包まれます。冬の三陸は太平洋側気候のため晴天率が高く、冬晴れの突き抜けるような青空と、深みを増した群青色の宮古湾、そして白緑色の奇岩のコントラストが鮮烈な美しさを放ちます。時折舞い散る粉雪が奇岩の頂や常緑のアカマツの枝に薄化粧を施す光景は、まさに一幅の水墨画のような幽玄な世界です。
              </p>
              <p>
                海岸沿いには木道や展望遊歩道が整備されており、海沿いを歩きながら「剣の山」「賽の河原」「血の池」など仏教にちなんだ名が残る奇岩を間近に観察できます。浄土ヶ浜マリンハウスから出航する「さっぱ船（小型船）」で海から奇岩を巡ったり、エメラルドグリーンに輝く「青の洞窟（八戸穴）」を探勝する体験も冬ならではの澄み切った透明度の中で特別な感動を与えてくれます。
              </p>
              <p>
                また、宮古市は本州最東端の岬「魹ヶ崎（とどがさき）」を擁する街としても知られます。本州で最も早く朝が訪れるこの地から望む冬の初日の出は、太平洋の果てしない水平線が黄金色に染まる神々しい絶景として、多くの旅人を惹きつけてやみません。
              </p>
            </div>
          </section>

          {/* Section 2: 三陸宮古の冬の味覚（毛ガニ・寒アワビ・瓶ドン） */}
          <section className="space-y-6">
            <div className="border-l-4 border-amber-600 pl-4">
              <span className="text-amber-600 font-bold text-sm tracking-wider uppercase">Winter Ocean Gourmet</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
                親潮が育む海の至宝！冬に旨味が極まる「三陸毛ガニ」と名物「瓶ドン」
              </h2>
            </div>
            
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
              <p>
                三陸沖は、栄養分を豊富に含んだ寒流「親潮（千島海流）」と暖流「黒潮」がぶつかり合う世界三大漁場の一つです。冬になると水温が急激に低下し、魚介類は厳しい寒さを乗り越えるために極上の脂と栄養をその身に蓄えます。
              </p>
              <p>
                中でも冬の三陸・宮古を代表する味覚が「三陸毛ガニ」です。宮古沖は水深150〜300メートルの大陸棚が広がり、毛ガニが生息する絶好の環境が整っています。三陸の毛ガニ漁は水温が最も下がる12月から3月にかけて本格化し、宮古港にはオレンジ色の毛ガニが連日水揚げされます。冷たい海水にもまれて育った三陸毛ガニは、身の繊維がきめ細かく繊細な甘みが凝縮しているのが特徴。そして何よりの魅力が、甲羅の中にぎっしりと詰まった黄金色のカニ味噌です。苦味が一切なく、生クリームのように滑らかで濃厚なコクは、一度味わうと忘れられない冬の至福です。
              </p>
              <p>
                さらに、11月から12月にかけて解禁される伝統の「寒アワビ（三陸蝦夷アワビ）」も冬の味覚の王様。荒波の岩礁地帯で天然のコンブを食べて育ったアワビは、肉厚でコリコリとした歯ごたえと芳醇な磯の香りが絶品です。宮古は「新巻鮭（あらまきざけ）」発祥の地とも言われ、冬の軒先に吊るされる寒風干しの新巻鮭や、熱々の郷土鍋「寒ダラのじゃっぱ汁」も体を芯から温めてくれます。
              </p>
              <p>
                そして近年、宮古の新名物として全国的な人気を博しているのが「瓶ドン」です。地元で古くから親しまれてきた牛乳瓶詰めの生ウニからヒントを得て誕生した海鮮グルメで、透明なガラス瓶の中にイクラ、めかぶ、サーモン、ウニ、イカなどが層になって美しく詰められています。食べる直前に自分で熱々の白いご飯の上へ豪快にかき出していただくスタイルは、旅の思い出に残る最高の食体験です。
              </p>
            </div>
          </section>

          {/* Section 3: 厳選宿泊施設5選 */}
          <section className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-4">
              <span className="text-blue-600 font-bold text-sm tracking-wider uppercase">Featured Accommodations</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
                白銀の浄土ヶ浜と三陸海鮮を満喫する厳選宿5選
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                楽天トラベルAPIより最新の空室情報・適正宿泊料金・評価スコアを取得。全室オーシャンビューから大浴場完備宿まで厳選。
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
                        <p className="text-xs text-blue-800 bg-blue-50 px-3 py-1.5 rounded-lg font-medium mb-3 inline-block">
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
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-xs md:text-sm px-5 py-2.5 rounded-xl shadow transition-all transform hover:-translate-y-0.5"
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
            <div className="border-l-4 border-cyan-600 pl-4">
              <span className="text-cyan-600 font-bold text-sm tracking-wider uppercase">Travel Itinerary</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
                白銀の浄土ヶ浜と三陸毛ガニ・瓶ドンを味わう1泊2日モデルコース
              </h2>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">1日目</span>
                  <h3 className="font-bold text-slate-900 text-base md:text-lg">盛岡から宮古へ・浄土ヶ浜の雪景色と三陸毛ガニ</h3>
                </div>
                <div className="pl-4 border-l-2 border-blue-200 space-y-3 text-sm text-slate-700">
                  <p><strong>10:00 盛岡駅を出発</strong> - 国道106号（宮古盛岡横断道路）を快適に東へドライブ（車約1時間30分）。</p>
                  <p><strong>11:30 宮古魚菜市場で名物「瓶ドン」ランチ</strong> - 市内の市場で新鮮なイクラやウニが詰まった瓶ドンを味わう。</p>
                  <p><strong>13:30 国の名勝「浄土ヶ浜」散策</strong> - ビジターセンターを見学後、白緑色の奇岩と白雪、青い海が織りなす極楽浄土の景色を散策。</p>
                  <p><strong>15:30 浄土ヶ浜または宮古湾沿いの宿にチェックイン</strong> - 太平洋を見渡す客室で温かいお茶を一服。</p>
                  <p><strong>16:30 展望露天風呂で夕景を眺める</strong> - 茜色に染まる三陸の海を眺めながら温かい湯船でリフレッシュ。</p>
                  <p><strong>18:30 夕食に「三陸宮古の旬毛ガニ＆寒アワビ会席」</strong> - 濃厚なカニ味噌と繊細な甘みの身肉、三陸の地酒「千両男山」を堪能。</p>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="bg-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full">2日目</span>
                  <h3 className="font-bold text-slate-900 text-base md:text-lg">水平線の初日の出と三陸沿岸道路・北三陸ドライブ</h3>
                </div>
                <div className="pl-4 border-l-2 border-cyan-200 space-y-3 text-sm text-slate-700">
                  <p><strong>06:45 水平線から昇る朝日を鑑賞</strong> - 冬の澄み渡る太平洋を黄金色に染め上げる神々しい日の出を客室から拝む。</p>
                  <p><strong>08:00 海鮮朝食ビュッフェ</strong> - 炊きたての岩手県産米に三陸めかぶや焼き魚を合わせて元気をチャージ。</p>
                  <p><strong>09:30 三陸沿岸道路を北上・田老地区へ</strong> - 巨大な防潮堤と「たろう観光ホテル」震災遺構を見学し防災の歴史を学ぶ。</p>
                  <p><strong>11:30 北三陸・久慈市へ移動</strong> - 小袖海岸の「つりがね洞」などの奇岩絶景を鑑賞し、道の駅くじでまめぶ汁を味わう。</p>
                  <p><strong>14:30 久慈琥珀博物館見学</strong> - 日本唯一の琥珀専門博物館で太古の自然の神秘に触れる。</p>
                  <p><strong>16:00 八戸道・東北道経由で帰路へ</strong> - 充実の三陸海岸ドライブを締めくくり。</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: 冬のアクセス＆注意点 */}
          <section className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <span className="text-blue-600 font-bold text-sm tracking-wider uppercase">Travel Tips & Weather</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
                冬の三陸海岸旅行の気候・服装と交通アクセスのアドバイス
              </h2>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-slate-200 space-y-4 text-slate-700 text-sm md:text-base leading-relaxed">
              <div className="flex items-start gap-3">
                <Sunrise className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">太平洋側の気候と寒風対策</h3>
                  <p className="text-slate-600 text-sm">
                    三陸沿岸地域は岩手県の内陸部に比べて積雪は少ないですが、太平洋から吹きつける寒風が非常に冷たく、体感温度は氷点下まで下がります。海岸沿いの散策には、防風性のあるフード付きダウンジャケット、ニット帽、手袋、マフラーなどの防寒装備が必須です。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <AlertTriangle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">路面凍結と冬用タイヤの必須性</h3>
                  <p className="text-slate-600 text-sm">
                    盛岡と宮古を結ぶ「宮古盛岡横断道路（国道106号バイパス）。」や三陸沿岸道路は整備が行き届いていますが、区界峠などの山間部や早朝・夜間の橋梁部・トンネル出入口では路面が凍結します。冬期のドライブ旅行では必ずスタッドレスタイヤを装着し、急ハンドル・急ブレーキを避けた慎重な運転を心がけてください。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: FAQ Section */}
          <section className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <span className="text-blue-600 font-bold text-sm tracking-wider uppercase">Frequently Asked Questions</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
                岩手・浄土ヶ浜＆三陸冬旅行に関するよくある質問
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base md:text-lg mb-2 flex items-start gap-2">
                    <span className="text-blue-600 font-black">Q.</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-slate-700 text-sm md:text-base leading-relaxed pl-6 border-l-2 border-blue-100">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: 内部リンク＆関連特集 */}
          <section className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-8 text-white space-y-6 shadow-xl">
            <div>
              <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">Related Destinations</span>
              <h2 className="text-xl md:text-2xl font-bold mt-1">
                あわせて読みたい東北・冬の厳選旅特集
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                href="/winter-iwate-morioka-tsunagi-wagyu-stay"
                className="bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/10 transition-colors block"
              >
                <span className="text-amber-400 text-xs font-bold block mb-1">岩手特集</span>
                <span className="font-bold text-sm block mb-1">盛岡＆繋温泉！岩手山雪景色と前沢牛・いわて牛名宿</span>
                <span className="text-xs text-slate-300">盛岡の奥座敷・繋温泉の源泉と名牛ステーキ…</span>
              </Link>
              <Link
                href="/winter-iwate-hiraizumi-geibikei-maesawagyu-stay"
                className="bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/10 transition-colors block"
              >
                <span className="text-emerald-400 text-xs font-bold block mb-1">岩手特集</span>
                <span className="font-bold text-sm block mb-1">平泉＆猊鼻渓！中尊寺金色堂初詣と雪見こたつ舟名宿</span>
                <span className="text-xs text-slate-300">世界遺産平泉の新春初詣と猊鼻渓の冬情趣…</span>
              </Link>
              <Link
                href="/winter-aomori-hachinohe-kabushima-ginsaba-senbeijiru-stay"
                className="bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/10 transition-colors block"
              >
                <span className="text-cyan-400 text-xs font-bold block mb-1">青森特集</span>
                <span className="font-bold text-sm block mb-1">八戸＆蕪島！冬の前沖銀サバと館鼻岸壁・せんべい汁名宿</span>
                <span className="text-xs text-slate-300">三陸北端の港町八戸の絶品銀サバと朝市…</span>
              </Link>
              <Link
                href="/winter-miyagi-kesennuma-mekajiki-stay"
                className="bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/10 transition-colors block"
              >
                <span className="text-rose-400 text-xs font-bold block mb-1">宮城特集</span>
                <span className="font-bold text-sm block mb-1">気仙沼＆南三陸！冬の極上メカジキと太平洋絶景名宿</span>
                <span className="text-xs text-slate-300">三陸南部の冬の主役メカジキしゃぶしゃぶ…</span>
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
      
      <HubRelatedPosts currentSlug="winter-iwate-sanriku-miyako-jodogahama-kegani-stay" />
</div>
    </>
  );
}
