import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Mountain, AlertTriangle, Sunrise, HeartHandshake, Eye
} from 'lucide-react';

export const metadata: Metadata = {
  title: '11・12・1月徳島：大麻比古神社の大初詣！名宿5選',
  description: '四国・阿波の歴史と冬の美食が息づく徳島市＆鳴門奥エリアの11〜1月冬旅特集。樹齢千年の大楠が厳かに迎える阿波国一の宮「大麻比古神社（おおあさ。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '大麻比古神社 初詣, 眉山 夜景 冬, 阿波尾鶏 水炊き 徳島, 鳴門鯛 冬, 阿波牛, JRホテルクレメント徳島, ホテルサンルート徳島, 徳島 冬 旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-tokushima-city-oasashiko-shrine-hatsumode-awaodori-awagyu-stay/"
  },
  openGraph: {
    title: '11・12・1月徳島：大麻比古神社の大初詣！名宿5選',
    description: '四国・阿波の歴史と冬の美食が息づく徳島市＆鳴門奥エリアの11〜1月冬旅特集。樹齢千年の大楠が厳かに迎える阿波国一の宮「大麻比古神社（おおあさ。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-tokushima-city-oasashiko-shrine-hatsumode-awaodori-awagyu-stay',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '冬の徳島・大麻比古神社初詣と眉山冬夜景・本場阿波尾鶏鍋'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "11・12・1月徳島：大麻比古神社の大初詣＆眉山の冬夜景パノラマ！本場「阿波尾鶏」水炊き鍋と阿波牛名宿5選",
    description: "四国・阿波の歴史と冬の美食が息づく徳島市＆鳴門奥エリアの11〜1月冬旅特集。樹齢千年の大楠が厳かに迎える阿波国一の宮「大麻比古神社（おおあさひこじんじゃ）」の新春大初詣、眉山ロープウェイ山頂から見渡す冬の吉野川と紀伊水道の澄み渡る夜景パノラマ、地鶏シェア日本一を誇る極上「阿波尾鶏（あわおどり）」の熱々水炊き鍋やすき焼き、冬の荒波で身が引き締まった鳴門鯛と黒毛和牛「阿波牛」。徳島観光の拠点に最適な厳選ホテル・名宿5選を徹底解説します。",
    images: ['https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function TokushimaCityWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "【11・12・1月徳島】大麻比古神社の大初詣＆眉山の冬夜景パノラマ！本場「阿波尾鶏」水炊き鍋と阿波牛名宿5選",
        "description": "四国・阿波の歴史と冬の美食が息づく徳島市＆鳴門奥エリアの11〜1月冬旅特集。樹齢千年の大楠が厳かに迎える阿波国一の宮「大麻比古神社（おおあさひこじんじゃ）」の新春大初詣、眉山ロープウェイ山頂から見渡す冬の吉野川と紀伊水道の澄み渡る夜景パノラマ、地鶏シェア日本一を誇る極上「阿波尾鶏（あわおどり）」の熱々水炊き鍋やすき焼き、冬の荒波で身が引き締まった鳴門鯛と黒毛和牛「阿波牛」。徳島観光の拠点に最適な厳選ホテル・名宿5選を徹底解説します。",
        "image": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&h=630&q=80",
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
          "@id": "https://croud-travel.pages.dev/winter-tokushima-city-oasashiko-shrine-hatsumode-awaodori-awagyu-stay"
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
            "name": "徳島・徳島市＆阿波一の宮名宿",
            "item": "https://croud-travel.pages.dev/winter-tokushima-city-oasashiko-shrine-hatsumode-awaodori-awagyu-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "徳島県民が最も多く訪れる「大麻比古神社（おおあさひこじんじゃ）」の初詣の見どころは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "大麻比古神社は、阿波国一宮として古くから信仰を集める徳島県総鎮守の大社です。阿波忌部氏の祖神である大麻比古神と猿田彦命をお祀りし、方除け、厄除け、交通安全、家内安全の神様として崇敬されています。お正月三が日には徳島県内最多となる約25万人〜30万人もの初詣参拝客で賑わいます。最大の見どころは、境内中央にそびえる樹齢千年以上と伝わる巨大な御神木の大楠（県指定天然記念物）。幹周り8メートルを超える巨木が放つ圧倒的な生命力と神聖なオーラは必見です。また、第一次世界大戦時に板東俘虜収容所のドイツ兵捕虜が築いた石橋「ドイツ橋」など歴史的建造物も境内に残されています。"
            }
          },
          {
            "@type": "Question",
            "name": "眉山（びざん）ロープウェイから眺める冬の夜景と見どころは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "徳島市街のシンボルである眉山は、どの方向から見ても女性の眉の形に似ていることからその名が付けられました。山麓の「阿波おどり会館」5階からロープウェイに乗車し、約6分で標高290メートルの山頂展望台へ到達します。特に空気が澄み渡る冬は、眼下に広がる吉野川デルタの美しい扇状地、徳島市街の煌めく夜景、そして遠く紀伊水道や淡路島の島影までくっきりと見渡せます。山頂には無料の展望ラウンジやパゴダ（平和記念塔）、LED万華鏡モニュメントがあり、四国屈指のロマンチックな冬の夜景スポットとして愛されています。"
            }
          },
          {
            "@type": "Question",
            "name": "日本一の出荷量を誇るブランド地鶏「阿波尾鶏（あわおどり）」の冬の美味しさと特徴は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "阿波尾鶏は、徳島県で古くから飼育されていた軍鶏（シャモ）にホワイトプリマスロックを掛け合わせ、豊かな自然環境の中で80日以上かけて丹念に平飼いされた最高級地鶏です。その出荷量は日本全国の地鶏の中で堂々第1位を誇ります。肉質は身が引き締まり、適度な歯ごたえと噛むほどに溢れ出す芳醇なコクと甘みが特徴です。冬は濃厚な鶏ガラ白湯スープで仕立てた「阿波尾鶏の水炊き鍋」や「すき焼き」、香ばしい「骨付鶏の炭火焼き」で味わうのが最高です。コラーゲンとアミノ酸が豊富で、冬の身体を芯から元気にしてくれます。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の鳴門鯛（なるとだい）と極上「阿波牛」の魅力とは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "鳴門海峡の激しい潮流にもまれて育つ「鳴門鯛」は、真冬の寒冷期に最も身が引き締まり、上質な脂を蓄えます。骨にコブができるほど激流を泳ぎ抜いたその身は、歯を押し返すような弾力と上品な甘みが際立ち、お造りや熱々の鯛しゃぶ、鯛飯で絶品です。また、「阿波牛」は徳島県の清らかな水と温暖な気候のもとで肥育される黒毛和種で、美しい霜降りととろけるような肉質が特徴です。阿波尾鶏・鳴門鯛・阿波牛という「徳島三大味覚」を一度に堪能できる冬の会席料理は、旅の最大のハイライトとなります。"
            }
          },
          {
            "@type": "Question",
            "name": "徳島空港・徳島駅発着で大麻比古神社・眉山を巡る1泊2日の冬の王道モデルコースは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "【1日目】徳島空港またはJR徳島駅に到着 → 駅前で「徳島ラーメン」または「阿波尾鶏ランチ」 → 眉山山麓の「阿波おどり会館」で冬の阿波おどり実演を鑑賞 → ロープウェイで眉山山頂へ登り、冬晴れの吉野川と紀伊水道パノラマを展望 → 徳島市内の温泉宿・名門ホテルにチェックイン → 夕食は名店で「阿波尾鶏水炊き鍋」や鳴門鯛・阿波牛会席を満喫 → 夜、眉山の煌めく夜景を望むバーで地酒を楽しむ。【2日目】ホテルで阿波郷土料理の朝食 → 車またはJR高徳線・板東駅経由で鳴門市大麻町へ移動 → 阿波国一の宮「大麻比古神社」で新春大初詣＆樹齢千年の大楠からパワーをチャージ → 霊山寺（四国霊場第1番札所）やドイツ館を見学 → 鳴門の直売所で鳴門金時やわかめ、すだち酢を購入して徳島空港・駅へ戻り帰路へ。"
            }
          }
        ]
      }
    ]
  };

  const hotelsList = [
            {
              id: 1,
              name: "ＪＲホテルクレメント徳島",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4721/4721.jpg",
              rating: 4.33,
              reviews: 5309,
              price: "¥4,350〜",
              access: "ＪＲ徳島駅直結０分・高速バス降り場より徒歩１分・徳島阿波おどり空港より車で約30分・徳島Ｉ．Ｃ．から車で１５分。",
              special: "ＪＲ徳島駅直結の好立地なシティーホテル",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4721%2F4721.html",
              story: "JR徳島駅直結という圧倒的な利便性を誇り、徳島市街のランドマークとして風格を漂わせる「JRホテルクレメント徳島」。改札を出てすぐのロビーは気品ある開放的な吹き抜け空間で、冬の冷たい風にさらされることなくスムーズにチェックイン可能です。客室はシンプルかつモダンに統一され、高層階の窓からは徳島のシンボル・眉山や、雄大な吉野川の流れ、遠く紀伊水道まで見渡すパノラマビューが広がります。館内レストランでは、徳島が誇るブランド地鶏「阿波尾鶏」や特選阿波牛、鳴門海峡の旬魚を贅沢に取り入れた日本料理やフランス料理を提供。大麻比古神社への初詣ドライブや徳島空港への連絡バス利用にもこれ以上ない好立地で、優雅な冬の滞在を約束します。",
              roomTip: "眉山側コーナースイートまたはスーペリアツイン。夜にはライトアップされた眉山と徳島市街の美しい夜景を一望。",
              gourmetTip: "「日本料理 藍彩の冬の阿波会席」。ジューシーな阿波尾鶏の炭火焼きと、脂の乗った鳴門鯛のお造り、阿波牛陶板焼きを堪能。",
              highlights: [
                "JR徳島駅直結の最高級ランドマーク・眉山や吉野川を望む高層階パノラマビュー" ,
                "館内レストランで味わう阿波尾鶏炭火焼き・鳴門鯛お造り・阿波牛陶板焼き会席" ,
                "大麻比古神社や徳島空港連絡バス乗り場へ直結・冬の南海道旅行の特等席"
              ]
            },
            {
              id: 2,
              name: "ダイワロイネットホテル徳島駅前",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/149130/149130.jpg",
              rating: 4.36,
              reviews: 1984,
              price: "¥5,700〜",
              access: "JR「徳島駅」より徒歩約1分 。「徳島阿波おどり空港」よりリムジンバスで（約30分）「徳島駅」下車、徒歩約1分。",
              special: "JR「徳島駅」より徒歩約1分■1階コンビニ有■バス・トイレ別客室有■徳島産素材使用の朝食メニュー有",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F149130%2F149130.html",
              story: "JR徳島駅前ロータリーから徒歩約1分の至近に位置し、洗練された設備と上質なホスピタリティで高評価を集める「ダイワロイネットホテル徳島駅前」。客室は全室に加湿空気清浄機、ワイドデスク、大型液晶テレビを完備し、ゆとりあるベッドが冬の旅の疲れを優しく癒やします。バス・トイレセパレート仕様（一部客室）で手足を伸ばして温まれるのも冬の宿泊に嬉しいポイント。朝食ビュッフェでは、徳島名物の「フィッシュカツ」や「鳴門金時」の甘露煮、阿波尾鶏の出汁が効いた温かい郷土汁が並び、宿泊客から大好評です。大麻比古神社への初詣や眉山散策、周辺の有名阿波尾鶏料理店巡りの拠点として抜群の機動力を誇ります。",
              roomTip: "デラックスツインまたはコーナーダブル。広々とした独立洗面台と深めのバスタブで冬の夜を快適にリラックス。",
              gourmetTip: "「阿波のこだわり朝食ビュッフェ」。すだちドレッシングの新鮮サラダや熱々の郷土惣菜で朝から徳島の恵みを満喫。",
              highlights: [
                "徳島駅前徒歩1分・バス・トイレ別（一部）の快適客室と大好評の阿波郷土朝食ビュッフェ" ,
                "フィッシュカツや鳴門金時など徳島名物が並ぶ充実の朝食・全室加湿空気清浄機" ,
                "清潔感あふれる最新設備と丁寧な接客サービスでビジネス・観光ともに大人気"
              ]
            },
            {
              id: 3,
              name: "ホテルサンルート徳島",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/79371/79371.jpg",
              rating: 4.40,
              reviews: 4752,
              price: "¥5,750〜",
              access: "JR徳島駅目の前(徒歩１分)／高速バス乗り場すぐ／徳島空港よりリムジンバス約28分／徳島ICより約15分",
              special: "宿泊者天然温泉入浴無料！（サウナ・水風呂完備）2025年より順次客室リニューアル予定。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F79371%2F79371.html",
              story: "JR徳島駅から徒歩わずか1分、最上階（11階）に男女別の天然温泉大浴場「びざんの湯」を備えた癒やしのシティホテル「ホテルサンルート徳島」。冬の観光や大麻比古神社への初詣で冷え切った身体を、眉山を望む天然温泉に浸かって芯から解きほぐせるのが最大の魅力です。泉質は含ナトリウム・マグネシウム・塩化物・炭酸水素塩冷鉱泉で、保温効果が非常に高く湯冷めしにくい名湯。客室は全室シモンズ社製ベッドを導入し、上質な快眠をサポートします。館内には和食処やタリーズコーヒー、コンビニエンスストアも直結しており、真冬の滞在でも外に出ることなく快適に過ごせる抜群の機能性を誇ります。",
              roomTip: "本館または東館のコンフォートツイン。最上階の天然温泉大浴場へのアクセスが良く、冬の湯治気分を満喫。",
              gourmetTip: "「館内和食処の阿波尾鶏水炊き御膳」。濃厚な鶏ガラスープに地野菜と弾力ある阿波尾鶏が煮込まれた熱々の冬鍋。",
              highlights: [
                "最上階11階に天然温泉「びざんの湯」完備・シモンズベッド＆駅前徒歩1分の好立地" ,
                "保温効果抜群の弱アルカリ性冷鉱泉で初詣の冷えを芯から解消・コンビニ直結" ,
                "最上階サウナ付き温泉でととのい体験・冬の連泊滞在でも快適無比"
              ]
            },
            {
              id: 4,
              name: "アオアヲナルトリゾート",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/6123/6123.jpg",
              rating: 4.46,
              reviews: 4317,
              price: "¥17,500〜",
              access: "神戸淡路鳴門自動車道　鳴門北ＩＣより１分　ＪＲ鳴門駅より車で約１０分　大塚美術館まで車で3分",
              special: "温泉もお部屋もオーシャンビュー！瀬戸内海国立公園内に位置する南欧風リゾートホテルです。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6123%2F6123.html",
              story: "鳴門海峡の雄大な冬景色を一望する瀬戸内海国立公園内に佇む極上南欧風リゾートホテル「アオアヲ ナルト リゾート」。徳島市街和大麻比古神社へのアクセスも車で約30分と良好で、初詣とリゾートステイを両立させたい旅人に絶大な人気を誇ります。オーシャンビューの客室からは、澄み渡る冬の鳴門海峡や水平線から昇る朝日が圧巻。館内には鳴門温泉の展望風呂や露天風呂が点在し、波の音を聞きながら贅沢な湯浴みが楽しめます。夕食バイキングでは、冬の荒波に揉まれて脂が乗り切った「鳴門鯛」の一本釣り刺身や鯛飯、阿波牛ステーキ、鳴門わかめしゃぶしゃぶなど阿波徳島の極上グルメをライブキッチンで出来立てのまま味わえます。",
              roomTip: "デラックスツイン（オーシャンビュー）。バルコニーから冬の紀伊水道と水平線のパノラマ絶景を独り占め。",
              gourmetTip: "「阿波郷土料理バイキング 彩（いろどり）」。目の前で捌かれる鳴門鯛のお造りや阿波牛サイコロステーキが食べ放題。",
              highlights: [
                "鳴門海峡を望む全室オーシャンビューリゾート・絶景温泉露天と豪華鳴門鯛バイキング" ,
                "鳴門鯛一本釣り刺身や阿波牛ステーキのライブキッチン・露天風呂で朝日鑑賞" ,
                "冬の鳴門渦潮や大塚国際美術館への観光ハブとして圧倒的満足度"
              ]
            },
            {
              id: 5,
              name: "スマイルホテル徳島",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/532/532.jpg",
              rating: 4.03,
              reviews: 2313,
              price: "¥4,200〜",
              access: "JR徳島駅より徒歩約5分／徳島ICより約15分／徳島阿波おどり空港よりリムジンバスにて徳島駅まで約30分",
              special: "ＪＲ徳島駅から徒歩5分。ビジネスのお客様はもちろん、レジャーの拠点に最適立地",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F532%2F532.html",
              story: "JR徳島駅から徒歩約5分、徳島市の繁華街・両国橋や藍場浜公園にも近い好立地に建つ「スマイルホテル徳島」。機能的で清潔感のある客室空間と、リーズナブルな価格設定で一人旅から家族旅行まで幅広く支持されています。全室に無料Wi-Fi、個別空調、快適な寝具を完備。ホテル周辺には阿波尾鶏の骨付鶏や焼き鳥、徳島ラーメンの名店がひしめき、夜のグルメ探訪のベースキャンプとしてこれ以上ない便利さを誇ります。眉山ロープウェイ山麓駅（阿波おどり会館）へも徒歩圏内で、徳島市内の観光スポットを気ままに歩いて巡りたい旅行者に最適です。",
              roomTip: "スタンダードツインまたはダブル。シンプルで落ち着いた内装で、手荷物を広げてゆったり休める実力派客室。",
              gourmetTip: "「駅前・繁華街の老舗で味わう元祖徳島ラーメン＆阿波尾鶏焼き鳥。」。甘辛い豚骨醤油スープとすだちサワーの極上コンビ。",
              highlights: [
                "徳島駅徒歩5分・阿波尾鶏グルメ街至近でコスパ抜群のスマートステイ" ,
                "眉山ロープウェイや阿波おどり会館へ徒歩圏内・一人旅から気軽な冬旅に最適" ,
                "周辺に徳島ラーメンの名店多数・夜のローカルグルメ散策に抜群の機動力"
              ]
            }
  ];

  const faqs = [
    {
      q: "徳島県民が最も多く訪れる「大麻比古神社（おおあさひこじんじゃ）」の初詣の見どころは？",
      a: "大麻比古神社は、阿波国一宮として古くから信仰を集める徳島県総鎮守の大社です。阿波忌部氏の祖神である大麻比古神と猿田彦命をお祀りし、方除け、厄除け、交通安全、家内安全の神様として崇敬されています。お正月三が日には徳島県内最多となる約25万人〜30万人もの初詣参拝客で賑わいます。最大の見どころは、境内中央にそびえる樹齢千年以上と伝わる巨大な御神木の大楠（県指定天然記念物）。幹周り8メートルを超える巨木が放つ圧倒的な生命力と神聖なオーラは必見です。また、第一次世界大戦時に板東俘虜収容所のドイツ兵捕虜が築いた石橋「ドイツ橋」など歴史的建造物も境内に残されています。"
    },
    {
      q: "眉山（びざん）ロープウェイから眺める冬の夜景と見どころは？",
      a: "徳島市街のシンボルである眉山は、どの方向から見ても女性の眉の形に似ていることからその名が付けられました。山麓の「阿波おどり会館」5階からロープウェイに乗車し、約6分で標高290メートルの山頂展望台へ到達します。特に空気が澄み渡る冬は、眼下に広がる吉野川デルタの美しい扇状地、徳島市街の煌めく夜景、そして遠く紀伊水道や淡路島の島影までくっきりと見渡せます。山頂には無料の展望ラウンジやパゴダ（平和記念塔）、LED万華鏡モニュメントがあり、四国屈指のロマンチックな冬の夜景スポットとして愛されています。"
    },
    {
      q: "日本一の出荷量を誇るブランド地鶏「阿波尾鶏（あわおどり）」の冬の美味しさと特徴は？",
      a: "阿波尾鶏は、徳島県で古くから飼育されていた軍鶏（シャモ）にホワイトプリマスロックを掛け合わせ、豊かな自然環境の中で80日以上かけて丹念に平飼いされた最高級地鶏です。その出荷量は日本全国の地鶏の中で堂々第1位を誇ります。肉質は身が引き締まり、適度な歯ごたえと噛むほどに溢れ出す芳醇なコクと甘みが特徴です。冬は濃厚な鶏ガラ白湯スープで仕立てた「阿波尾鶏の水炊き鍋」や「すき焼き」、香ばしい「骨付鶏の炭火焼き」で味わうのが最高です。コラーゲンとアミノ酸が豊富で、冬の身体を芯から元気にしてくれます。"
    },
    {
      q: "冬の鳴門鯛（なるとだい）と極上「阿波牛」の魅力とは？",
      a: "鳴門海峡の激しい潮流にもまれて育つ「鳴門鯛」は、真冬の寒冷期に最も身が引き締まり、上質な脂を蓄えます。骨にコブができるほど激流を泳ぎ抜いたその身は、歯を押し返すような弾力と上品な甘みが際立ち、お造りや熱々の鯛しゃぶ、鯛飯で絶品です。また、「阿波牛」は徳島県の清らかな水と温暖な気候のもとで肥育される黒毛和種で、美しい霜降りととろけるような肉質が特徴です。阿波尾鶏・鳴門鯛・阿波牛という「徳島三大味覚」を一度に堪能できる冬の会席料理は、旅の最大のハイライトとなります。"
    },
    {
      q: "徳島空港・徳島駅発着で大麻比古神社・眉山を巡る1泊2日の冬の王道モデルコースは？",
      a: "【1日目】徳島空港またはJR徳島駅に到着 → 駅前で「徳島ラーメン」または「阿波尾鶏ランチ」 → 眉山山麓の「阿波おどり会館」で冬の阿波おどり実演を鑑賞 → ロープウェイで眉山山頂へ登り、冬晴れの吉野川と紀伊水道パノラマを展望 → 徳島市内の温泉宿・名門ホテルにチェックイン → 夕食は名店で「阿波尾鶏水炊き鍋」や鳴門鯛・阿波牛会席を満喫 → 夜、眉山の煌めく夜景を望むバーで地酒を楽しむ。【2日目】ホテルで阿波郷土料理の朝食 → 車またはJR高徳線・板東駅経由で鳴門市大麻町へ移動 → 阿波国一の宮「大麻比古神社」で新春大初詣＆樹齢千年の大楠からパワーをチャージ → 霊山寺（四国霊場第1番札所）やドイツ館を見学 → 鳴門の直売所で鳴門金時やわかめ、すだち酢を購入して徳島空港・駅へ戻り帰路へ。"
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
            <Link href="/" className="hover:text-indigo-700">ホーム</Link>
            <span>&gt;</span>
            <Link href="/features" className="hover:text-indigo-700">特集一覧</Link>
            <span>&gt;</span>
            <span className="text-slate-900 font-semibold">徳島・徳島市＆阿波一の宮名宿</span>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-r from-indigo-950 via-slate-950 to-blue-950 text-white py-16 md:py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-indigo-500/30 border border-indigo-300/40 text-indigo-200 text-xs md:text-sm px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-indigo-300" />
              <span>11月・12月・1月冬の阿波初詣＆夜景パノラマ特集</span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6 text-white drop-shadow-md">徳島・徳島市＆阿波一の宮<br className="hidden sm:inline" /> 大麻比古神社の大初詣＆眉山の冬夜景パノラマ！<br className="hidden sm:inline" /> 本場「阿波尾鶏」水炊き鍋と阿波牛名宿5選</h1>
            <p className="max-w-3xl mx-auto text-sm md:text-lg text-indigo-100 leading-relaxed drop-shadow">
              樹齢千年の大楠が迎える阿波国一の宮・大麻比古神社に響く新春の柏手。澄み渡る冬の眉山山頂から見渡す吉野川デルタと紀伊水道の煌めく夜景。日本一の地鶏「阿波尾鶏」の極上水炊き鍋と鳴門鯛・阿波牛に酔いしれる冬の南海道紀行。
            </p>
          </div>
        </header>

        {/* Article Summary Box */}
        <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
            <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b pb-3">
              <CheckCircle2 className="w-5 h-5 text-indigo-700 flex-shrink-0" />
              <span>本特集でわかること（11・12・1月の徳島市・阿波一の宮旅行の要点）</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-700">
              <div className="bg-indigo-50/60 p-4 rounded-xl border border-indigo-100">
                <span className="font-bold text-indigo-900 block mb-1">① 阿波国一の宮「大麻比古神社」初詣</span>
                徳島県民が最も多く訪れる新春大霊場（参拝客30万人）。樹齢千年の御神木・大楠の生命力と、方除け・厄除け・開運祈願。
              </div>
              <div className="bg-indigo-50/60 p-4 rounded-xl border border-indigo-100">
                <span className="font-bold text-indigo-900 block mb-1">② 眉山冬夜景＆阿波おどり会館</span>
                標高290mの山頂から望む吉野川デルタと徳島平野・紀伊水道の澄んだ夜景パノラマ。冬も毎日開催される本場阿波おどり実演。
              </div>
              <div className="bg-indigo-50/60 p-4 rounded-xl border border-indigo-100">
                <span className="font-bold text-indigo-900 block mb-1">③ 極上阿波尾鶏水炊き＆鳴門鯛・阿波牛</span>
                シェア日本一のブランド地鶏・阿波尾鶏の濃厚白湯水炊き鍋。冬の激流で引き締まった鳴門鯛と、とろける霜降りの特選阿波牛。
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">
          {/* Section 1 */}
          <section className="space-y-6">
            <div className="border-l-4 border-indigo-700 pl-4">
              <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest block">OASASHIKO SHRINE NEW YEAR PILGRIMAGE</span>
              <h2 className="text-xl md:text-3xl font-black text-slate-900">
                阿波国一宮の荘厳な新春！「大麻比古神社」の大楠と厄除け大初詣
              </h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
              <p>
                霊峰・大麻山（おおあさやま）の麓、清らかな神域に鎮座する「大麻比古神社（おおあさひこじんじゃ）」。阿波国の一の宮として古来より阿波の人々の信仰を集め、親しみを込めて「大麻さん（おおあささん）」の名で呼ばれています。主祭神の大麻比古神は、阿波忌部氏の祖神として農業や産業、麻の栽培を伝えた国土開拓の神であり、配祀の猿田彦命とともに方除け・厄除け・交通安全の大神として尊崇されています。
              </p>
              <p>
                お正月三が日には、県内各地から実に30万人近い初詣参拝客が訪れ、境内は新春の熱気と祈りに包まれます。杉や楠の古木が立ち並ぶ参道を抜けると、正面に現れるのが樹齢千年以上と伝わる巨大な御神木「大楠（おおくす）」です。幹回り8.3メートル、高さ約22メートルに及ぶ巨木は、冬の凛とした空気の中で圧倒的な生命力を放ち、幹に手をかざして新年の力を授かる参拝者の姿が絶えません。境内奥には、大正時代にドイツ兵捕虜の手によって築かれためがね橋「ドイツ橋」も静かに佇み、歴史の深さを伝えています。
              </p>
              <p>
                大麻比古神社の鎮座する鳴門市大麻町周辺は、四国八十八箇所霊場の第1番札所・霊山寺（りょうぜんじ）や第2番札所・極楽寺が位置する「お遍路の出発点（発願の地）」でもあります。冬の澄み渡る空気の中、白装束に身を包んだお遍路さんの鈴の音が静かに響き渡る光景は、阿波徳島ならではの厳粛な旅情を感じさせます。初詣の後には、近隣の鳴門市ドイツ館へ立ち寄り、第一次世界大戦当時に地元住民とドイツ兵捕虜との温かい交流の中でベートーヴェンの「第九」がアジアで初めて全曲演奏された奇跡の史話に触れるのも深い感銘を与えてくれます。
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-6">
            <div className="border-l-4 border-indigo-700 pl-4">
              <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest block">BIZAN NIGHT VIEW & AWAODORI HALL</span>
              <h2 className="text-xl md:text-3xl font-black text-slate-900">
                澄んだ冬空に輝く吉野川デルタ！眉山ロープウェイの夜景と阿波おどり文化
              </h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
              <p>
                徳島市の中心に穏やかな稜線を描く「眉山（びざん）」。万葉集にも「眉のごと雲居に見ゆる阿波の山」と詠まれた名峰であり、山麓の「阿波おどり会館」5階からロープウェイに乗車してわずか6分で山頂に到達できます。空気が澄み渡る11月から1月にかけては、眉山山頂からの眺望が一年で最も美しく冴えわたる季節です。
              </p>
              <p>
                日没を迎えると、眼下には日本三大暴れ川のひとつ「吉野川」が紀伊水道へと注ぎ込む雄大なデルタ地帯と、徳島市街の街明かりが光の絨毯のように広がります。遠く淡路島や大鳴門橋、紀伊半島の山影まで見通せるパノラマ夜景は四国屈指のスケールを誇ります。また、山麓の阿波おどり会館では、冬でも毎日専属連による熱気あふれる阿波おどりの実演公演が開催されており、冬の旅にいながら本場の熱気とリズムを間近で体感できる贅沢が待っています。
              </p>
              <p>
                眉山の山麓には、徳島藩祖・蜂須賀家政公ゆかりの寺町が広がり、冬の木漏れ日の中で落ち着いた歴史散策が楽しめます。徳島城跡（徳島中央公園）の美しい石垣や名勝旧徳島城表御殿庭園（枯山水庭園）は、阿波青石（緑色片岩）をダイナミックに配した野趣あふれる意匠が特徴で、冬の澄んだ水面に映る庭園の静けさは格別です。城下町を東西に流れる新町川沿いのボードウォークでは冬のイルミネーションが点灯し、水都・徳島ならではのモダンで洗練された夜の表情を楽しむことができます。
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-6">
            <div className="border-l-4 border-indigo-700 pl-4">
              <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest block">AWAODORI CHICKEN, NARUTO SEA BREAM & AWA BEEF</span>
              <h2 className="text-xl md:text-3xl font-black text-slate-900">
                コク深き出汁が染みる！本場「阿波尾鶏」水炊き鍋と冬の鳴門鯛・極上阿波牛
              </h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
              <p>
                徳島の冬の夜を贅沢に彩るのが、全国の地鶏出荷量ナンバーワンを誇るブランド鶏「阿波尾鶏（あわおどり）」の鍋料理です。徳島の大自然の中で80日以上平飼いされた阿波尾鶏は、身がしっかりと引き締まり、軍鶏特有の心地よい歯ごたえと噛むほどに溢れる濃厚なアミノ酸の旨味が凝縮されています。冬の名物「阿波尾鶏の水炊き鍋」では、骨から煮出した黄金色の濃厚スープに、ぷりぷりのもも肉やつみれ、地元の白菜や白ネギが煮込まれ、すだちポン酢でいただく一口は至福の極みです。
              </p>
              <p>
                さらに、冬の鳴門海峡の激流に揉まれ、越冬のために極上の脂を蓄えた「鳴門鯛」のお造りや鯛かぶら、そして鮮やかな霜降りととろけるような舌触りを誇る黒毛和牛「阿波牛」の陶板焼きが脇を固めます。徳島の清らかな水で醸された辛口純米酒「鳴門鯛」や「三芳菊」の燗酒とともに味わえば、冬の寒さを完全に忘れさせる極上の美食紀行が完成します。
              </p>
              <p>
                徳島のローカルフードとして全国的人気を誇る「徳島ラーメン」も、冬の旅の冷えた身体を温める至高の一杯です。甘辛い濃厚豚骨醤油スープに甘辛く煮込んだ豚バラ肉と生卵が乗る「茶系（黒系）」を中心に、鶏ガラベースのマイルドな「黄系」、あっさり豚骨の「白系」と多彩な系統が存在します。飲んだ後の締めや散策の合間にすする熱々のスープは格別で、地元のソウルフードである「フィッシュカツ（カレー風味の魚肉練り製品揚げ）。」とともに、阿波徳島の大衆食文化の豊かな奥深さを実感させてくれます。
              </p>
            </div>
          </section>

          {/* Hotel List Section */}
          <section className="space-y-8">
            <div className="border-l-4 border-indigo-700 pl-4">
              <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest block">VERIFIED RECOMMENDED HOTELS</span>
              <h2 className="text-xl md:text-3xl font-black text-slate-900">
                徳島市＆阿波一の宮を満喫する厳選名宿5選
              </h2>
              <p className="text-xs md:text-sm text-slate-500 mt-1">
                ※楽天トラベルAPIより最新の空室・料金・口コミ情報をリアルタイム連携
              </p>
            </div>

            <div className="space-y-8">
              {hotelsList.map((hotel: any) => (
                <div 
                  key={hotel.id}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col"
                >
                  <div className="md:w-5/12 relative h-64 md:h-auto min-h-[260px]">
                    <img 
                      src={hotel.img} 
                      alt={hotel.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-indigo-800/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      厳選宿 #{hotel.id}
                    </div>
                  </div>
                  <div className="md:w-7/12 p-6 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center text-amber-500 font-bold text-sm">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400 mr-1" />
                          <span>{hotel.rating}</span>
                        </div>
                        <span className="text-xs text-slate-400">（口コミ {hotel.reviews}件）</span>
                        <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded ml-auto">
                          目安: {hotel.price}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 leading-snug">
                        {hotel.name}
                      </h3>
                      <p className="text-xs text-slate-500 mb-3 flex items-start gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                        <span>{hotel.access}</span>
                      </p>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-4">
                        {hotel.story}
                      </p>
                      <div className="space-y-1.5 bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-700">
                        {hotel.highlights.map((hl: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-700 flex-shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                      <div className="text-xs text-slate-500">
                        <span className="font-semibold text-slate-700 block">おすすめ客室:</span>
                        {hotel.roomTip}
                      </div>
                      <a 
                        href={hotel.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-indigo-800 hover:bg-indigo-900 text-white font-bold text-xs md:text-sm px-4 py-2.5 rounded-xl transition shadow-sm flex-shrink-0 ml-3"
                      >
                        <span>プラン詳細・予約</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Model Course Section */}
          <section className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-sm space-y-6">
            <div className="border-l-4 border-indigo-700 pl-4">
              <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest block">RECOMMENDED ITINERARY</span>
              <h3 className="text-xl md:text-2xl font-black text-slate-900">
                1泊2日！大麻比古神社大初詣と眉山冬夜景・本場阿波尾鶏を巡る冬の王道モデルコース
              </h3>
            </div>
            
            <div className="relative border-l-2 border-indigo-200 ml-4 pl-6 space-y-8 text-sm">
              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-indigo-700 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-indigo-800 block mb-1">1日目 11:00 | JR徳島駅に到着</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">駅前名店で「徳島ラーメン」ランチ＆阿波おどり会館へ</h4>
                <p className="text-slate-600 leading-relaxed">
                  JR徳島駅に到着後、甘辛い豚バラ肉と生卵が乗った徳島ラーメンで身体を温めるランチ。徒歩で阿波おどり会館へ移動し、専属連による冬の実演公演を鑑賞して伝統の熱気を感じます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-indigo-700 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-indigo-800 block mb-1">1日目 14:00 | 眉山ロープウェイで山頂へ</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">吉野川デルタの雄大な冬景色鑑賞＆夕暮れのトワイライト夜景</h4>
                <p className="text-slate-600 leading-relaxed">
                  会館5階からロープウェイで眉山山頂へ。冬晴れの澄んだ青空の下、吉野川や鳴門、遠く紀伊水道のパノラマを一望。夕暮れ時には市街地の灯りが宝石のように煌めく夜景を堪能。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-indigo-700 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-indigo-800 block mb-1">1日目 18:00 | 宿にチェックイン＆極上阿波尾鶏ディナー</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">天然温泉大浴場で温まり、熱々の「阿波尾鶏水炊き鍋」と地酒</h4>
                <p className="text-slate-600 leading-relaxed">
                  徳島駅直結ホテルや温泉付きホテルにチェックイン。最上階の天然温泉で冷えた身体を芯からポカポカにした後、夕食に濃厚白湯出汁の阿波尾鶏水炊きや鳴門鯛の会席に舌鼓。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-indigo-700 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-indigo-800 block mb-1">2日目 09:30 | 阿波国一の宮へ新春参拝</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">「大麻比古神社」で新春大初詣＆樹齢千年の御神木大楠に祈願</h4>
                <p className="text-slate-600 leading-relaxed">
                  車またはJR高徳線で鳴門市大麻町へ。大麻比古神社で厄除け・開運祈願。境内の荘厳な大楠に手を合わせ、第一次大戦のドイツ兵捕虜ゆかりのドイツ橋を見学して深い歴史に触れます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-indigo-700 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-indigo-800 block mb-1">2日目 13:00 | 鳴門鯛ランチ＆お土産調達</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">冬の鳴門鯛めしランチ＆鳴門金時・すだち特産品を購入して帰路へ</h4>
                <p className="text-slate-600 leading-relaxed">
                  鳴門市街や直売所で、冬の引き締まった鳴門鯛めしを堪能。ほくほくの鳴門金時菓子やすだちポン酢、大麻比古神社の授与品を大切に携え、徳島空港または新幹線接続駅へ。
                </p>
              </div>
            </div>
          </section>

          {/* Winter Travel Tips */}
          <section className="bg-indigo-50/70 border border-indigo-200 rounded-3xl p-6 md:p-8 space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-indigo-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-indigo-700 flex-shrink-0" />
              <span>冬（11・12・1月）の徳島市・大麻比古神社旅行・知っておきたいお役立ちTips</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-indigo-950">
              <div className="bg-white/80 p-4 rounded-xl border border-indigo-100">
                <strong className="block mb-1 text-indigo-900 font-bold">・お正月三が日の大麻比古神社周辺の渋滞</strong>
                1月1日〜3日は、神社周辺の県道や高松自動車道鳴門IC・板野IC付近で激しい渋滞が発生します。早朝8時前または夕方16時以降の参拝が比較的スムーズです。
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-indigo-100">
                <strong className="block mb-1 text-indigo-900 font-bold">・眉山山頂の冬風と防寒</strong>
                眉山山頂は海風が吹き抜け体感温度が下がります。夜景鑑賞を楽しむ際は、風を通さない防寒コート、手袋、マフラーを必ず着用しましょう。
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-indigo-100">
                <strong className="block mb-1 text-indigo-900 font-bold">・阿波尾鶏専門店の事前予約</strong>
                徳島駅前や歓楽街の阿波尾鶏専門店・鍋料理店は、年末年始や週末は混み合います。水炊きやすき焼きのコースを確実に楽しむためにも事前予約を推奨します。
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-indigo-100">
                <strong className="block mb-1 text-indigo-900 font-bold">・JR高徳線・鳴門線の運行本数</strong>
                板東駅（大麻比古神社最寄り）や鳴門駅への普通列車は1時間に1本程度となる時間帯があります。公共交通機関利用の場合は時刻表を事前に確認しておきましょう。
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="space-y-6">
            <div className="border-l-4 border-indigo-700 pl-4">
              <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest block">FREQUENTLY ASKED QUESTIONS</span>
              <h3 className="text-xl md:text-2xl font-black text-slate-900">
                徳島市＆大麻比古神社の冬旅に関するよくある質問
              </h3>
            </div>

            <div className="space-y-4">
              {faqs.map((faq: any, idx: number) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                  <h4 className="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                    <span className="text-indigo-700 font-black">Q.</span>
                    <span>{faq.q}</span>
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Internal Links Section */}
          <section className="bg-slate-100 rounded-3xl p-6 md:p-8 space-y-4">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-700" />
              <span>四国・徳島および冬の目的別おすすめ特集</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
              <Link href="/winter-tokushima-naruto-onsen-uzushio-naruto-tai-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-indigo-400 transition font-medium text-slate-700">
                🌀 鳴門温泉・冬の渦潮パノラマ＆鳴門鯛名宿
              </Link>
              <Link href="/winter-tokushima-minamiawa-yakuouji-hatsumode-iseebi-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-indigo-400 transition font-medium text-slate-700">
                ⛩️ 徳島美波町・薬王寺初詣＆天然伊勢海老名宿
              </Link>
              <Link href="/winter-tokushima-iya-valley-kazurabashi-snow-onsen-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-indigo-400 transition font-medium text-slate-700">
                ❄️ 祖谷渓かずら橋雪景色＆秘境温泉名宿
              </Link>
              <Link href="/winter-kagawa-zentsuji-marugame-castle-udon-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-indigo-400 transition font-medium text-slate-700">
                🏯 香川善通寺初詣＆丸亀城・讃岐うどん名宿
              </Link>
              <Link href="/winter-ehime-dogo-onsen-honkan-taimeshi-iyogyu-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-indigo-400 transition font-medium text-slate-700">
                ♨️ 道後温泉本館と鯛めし・伊予牛名宿
              </Link>
              <Link href="/features" className="p-3 bg-indigo-800 text-white rounded-xl font-bold hover:bg-indigo-900 transition text-center flex items-center justify-center">
                ❄️ 全国の冬の厳選特集一覧を見る →
              </Link>
            </div>
          </section>
        </main>
      
      <HubRelatedPosts currentSlug="winter-tokushima-city-oasashiko-shrine-hatsumode-awaodori-awagyu-stay" />
</div>
    </>
  );
}
