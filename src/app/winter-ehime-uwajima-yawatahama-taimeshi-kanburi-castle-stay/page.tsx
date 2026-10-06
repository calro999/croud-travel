import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Anchor, AlertTriangle, Sunrise, HeartHandshake, Eye
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12・1月愛媛】宇和海寒ブリ！名宿5選',
  description: '四国南予の歴史と海の幸に酔いしれる11〜1月の冬旅ガイド。日本に12基しか残らない現存天守「宇和島城」の冬の静寂と伊達十万石の城下町散策。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '宇和島鯛めし 本場, 宇和島城 現存天守, 宇和海 寒ブリ, 八幡浜ちゃんぽん, 南予 ホテル, 宇和島 オリエンタルホテル, クレメント宇和島, だてまぐろ, 愛媛 冬 旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-ehime-uwajima-yawatahama-taimeshi-kanburi-castle-stay/"
  },
  openGraph: {
    title: '【11・12・1月愛媛】宇和海寒ブリ！名宿5選',
    description: '四国南予の歴史と海の幸に酔いしれる11〜1月の冬旅ガイド。日本に12基しか残らない現存天守「宇和島城」の冬の静寂と伊達十万石の城下町散策。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-ehime-uwajima-yawatahama-taimeshi-kanburi-castle-stay',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '冬の愛媛・宇和島城現存天守と本場宇和島鯛めし'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月愛媛】宇和島城の冬情趣と本場「宇和島鯛めし」・宇和海寒ブリ！八幡浜ちゃんぽん＆南予の名宿5選",
    description: "四国南予の歴史と海の幸に酔いしれる11〜1月の冬旅ガイド。日本に12基しか残らない現存天守「宇和島城」の冬の静寂と伊達十万石の城下町散策。宇和海の荒波で脂が乗り切った真鯛に生卵と甘辛タレを絡める本場「宇和島鯛めし」や、真冬が旬の「宇和海寒ブリ」「だてまぐろ（本マグロ）」、極甘の南予みかん、そして八幡浜港のソウルフード「八幡浜ちゃんぽん」。宇和島・八幡浜の観光拠点として最適な厳選ホテル・温泉宿5選を徹底解説します。",
    images: ['https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function EhimeUwajimaYawatahamaWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "【11・12・1月愛媛】宇和島城の冬情趣と本場「宇和島鯛めし」・宇和海寒ブリ！八幡浜ちゃんぽん＆南予の名宿5選",
        "description": "四国南予の歴史と海の幸に酔いしれる11〜1月の冬旅ガイド。日本に12基しか残らない現存天守「宇和島城」の冬の静寂と伊達十万石の城下町散策。宇和海の荒波で脂が乗り切った真鯛に生卵と甘辛タレを絡める本場「宇和島鯛めし」や、真冬が旬の「宇和海寒ブリ」「だてまぐろ（本マグロ）」、極甘の南予みかん、そして八幡浜港のソウルフード「八幡浜ちゃんぽん」。宇和島・八幡浜の観光拠点として最適な厳選ホテル・温泉宿5選を徹底解説します。",
        "image": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "2026-10-05T00:00:00+09:00",
        "dateModified": "2026-10-05T00:00:00+09:00",
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
          "@id": "https://croud-travel.pages.dev/winter-ehime-uwajima-yawatahama-taimeshi-kanburi-castle-stay"
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
            "name": "愛媛・宇和島＆八幡浜・南予名宿",
            "item": "https://croud-travel.pages.dev/winter-ehime-uwajima-yawatahama-taimeshi-kanburi-castle-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "宇和島の「宇和島鯛めし」は一般的な鯛めし（炊き込みご飯）と何が違うのですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "愛媛県の鯛めしには大きく分けて2つの文化があります。松山など中予・東予地方の鯛めしは、土鍋や釜で鯛を一尾丸ごとご飯と一緒に炊き込む「炊き込み型」ですが、宇和島をはじめとする南予地方の「宇和島鯛めし」は、新鮮な真鯛の生の刺身を、醤油・みりん・出汁を合わせた特製ダレに生卵、ゴマ、刻みネギ、大葉などとともに絡め、アツアツの白ご飯の上にタレごとかけて食べる「海鮮丼スタイル（生鯛型）」です。その昔、伊予水軍や漁師たちが船の上で火を使わずに手早く食べた「海賊料理（日振島発祥）」がルーツとされ、冬の引き締まった真鯛のぷりぷりとした歯ごたえと濃厚な卵タレの旨味は格別です。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の宇和島城（現存天守）の見どころと、見学時の注意点は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "宇和島城は、藤堂高虎によって築かれ、後に伊達政宗の長男・伊達秀宗を初代とする宇和島伊達家が治めた城で、日本全国に12基しか現存しない貴重な江戸時代の木造天守（国指定重要文化財）を有します。冬の宇和島城は木々の葉が落ち、天守の美しい白壁と破風の意匠が際立ちます。標高約74mの城山山頂にある天守からは、冬の澄んだ空気の下で穏やかな宇和海と宇和島市街を360度見渡せます。登城道は石段が続くため、歩きやすい靴での散策が必須です。冬の朝は石段に霜が降りて滑りやすくなることがあるため足元にご注意ください。"
            }
          },
          {
            "@type": "Question",
            "name": "八幡浜名物の「八幡浜ちゃんぽん」とはどのようなご当地グルメですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "八幡浜ちゃんぽんは、長崎の白濁した豚骨スープのちゃんぽんとは異なり、鶏ガラや鰹節、昆布などでとった「黄金色に澄んだあっさり醤油風味の和風出汁」が特徴です。具材には、八幡浜の特産品である蒲鉾や削りかまぼこ、豚肉、キャベツ、モヤシ、玉ねぎなどがたっぷり盛られ、太めのもちもちとした中華麺と合わせます。昭和30年代に八幡浜港の飲食店で考案され、九州と四国を結ぶフェリーの港町として栄えた歴史の中で独自の麺文化として発展しました。冬の寒い日にスープを飲み干せば身体の芯から温まります。"
            }
          },
          {
            "@type": "Question",
            "name": "11月〜1月の南予地方の気候と、冬の特産品（みかん・柑橘）の旬は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "愛媛県南予エリアは瀬戸内海および宇和海に面し、基本的には太平洋側の比較的温暖な気候ですが、12〜1月には関門海峡や関崎を抜ける強い季節風が吹き込み、体感温度がぐっと下がります。平野部での積雪は稀ですが、山間部（鬼北町や久万高原方面）へ向かう場合は路面凍結に備えてスタッドレスタイヤがあると安心です。また、11〜1月は南予が誇る「極上みかん」の最盛期です。11月には濃厚な甘みの温州みかん（日の丸みかん、真穴みかん）、12月〜1月には紅まどんな、甘平（かんぺい）、伊予柑などが次々と出荷され、道の駅や産直市では箱買いする観光客で賑わいます。"
            }
          },
          {
            "@type": "Question",
            "name": "宇和島・八幡浜を巡る1泊2日の冬の王道モデルコースを教えてください。",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "【1日目】JR特急宇和海または松山自動車道で八幡浜へ到着 → 道の駅「八幡浜みなっと」で新鮮な海産物市場を見学＆八幡浜ちゃんぽんのランチ → 海岸沿いの絶景ドライブルートを通り宇和島へ移動（車約40分） → 伊達家の名園「天赦園」で冬の竹林散策 → 宇和島市内のホテルにチェックイン → 夕食は名店で「本場宇和島鯛めし」「太刀魚の巻焼き」「宇和海寒ブリ刺身」と地酒を満喫。【2日目】ホテルで温かい郷土朝食 → 朝の澄んだ空気の中「宇和島城」へ登城し現存天守と宇和海の冬景色を一望 → 「きさいや広場」で特産みかんやじゃこ天のお土産を購入 → 帰路へ。"
            }
          }
        ]
      }
    ]
  };

  const hotelsList = [
            {
              id: 1,
              name: "ＪＲホテルクレメント宇和島",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/789/789.jpg",
              rating: 4.32,
              reviews: 2039,
              price: "¥4,700〜",
              access: "★☆ＪＲ『宇和島駅』直結・徒歩0分☆★",
              special: "JR宇和島駅に直結し、ビジネス・レジャーの拠点に非常に便利なＪＲホテルグループのホテルです。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F789%2F789.html",
              story: "JR予讃線の終着駅・宇和島駅に直結するランドマークホテル「ＪＲホテルクレメント宇和島」。改札口を出てすぐという抜群の利便性を誇り、冬の寒風や手荷物の移動を気にすることなくスムーズにチェックインできるのが最大の魅力です。客室はシンプルながらも気品あるインテリアでまとめられ、窓からは宇和島市街や遠くにそびえる山並み、駅のプラットホームを行き交う予土線の列車を望むことができます。館内には観光案内デスクも充実し、宇和島城や天赦園への散策、定期船乗り場へのアクセス相談も手厚く対応。朝食には、宇和島名産の揚げたて「宇和島じゃこ天」や、南予の温かい郷土汁、地元の採れたて野菜が並び、四国南予の朝の活力をしっかりとチャージできます。駅前からのレンタカー利用や路線バスでの観光にも絶好のロケーションです。",
              roomTip: "高層階のスーペリアツインまたはコーナーダブル。南予の穏やかな冬空と宇和島市街の落ち着いた街並みを見渡せます。",
              gourmetTip: "「南予の朝ごはんビュッフェ」。香ばしく炙った宇和島じゃこ天や、愛媛県産コシヒカリ、麦味噌のあたたかい味噌汁が絶品。",
              highlights: [
                "JR宇和島駅直結・雨や寒風を気にせずチェックインできる抜群の立地" ,
                "朝食ビュッフェで香ばしい宇和島じゃこ天＆愛媛の郷土汁を満喫" ,
                "宇和島城や天赦園・定期船乗り場への観光アクセスが最もスムーズ"
              ]
            },
            {
              id: 2,
              name: "宇和島オリエンタルホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/2352/2352.jpg",
              rating: 4.15,
              reviews: 2985,
              price: "¥4,150〜",
              access: "JR宇和島駅から徒歩5分｜松山自動車道宇和島朝日町ＩＣから車3分 │ コンビニ徒歩5分",
              special: "心がほっとする滞在を。選べるバスソルトと香る柑橘、淹れたてコーヒーでお迎え。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2352%2F2352.html",
              story: "宇和島市街の中心部に位置し、細やかなホスピタリティと快適な客室空間でビジネス・観光を問わず高い評価を集める「宇和島オリエンタルホテル」。ロビーには地元産みかんジュースのテイスティングバーや、好みの枕・アメニティを選べるバイキングコーナーが用意され、旅人を温かく迎えてくれます。客室は全室にシモンズ社製ベッドを導入し、加湿空気清浄機や無料Wi-Fiを完備。冬の乾燥した空気の中でも喉や肌をいたわりながら快適な眠りをサポートします。ホテル周辺には宇和島鯛めしの名店「ほづみ亭」や「かどや」が徒歩圏内に点在しており、夜の南予グルメ散策の拠点としてこれ以上ない好立地。スタッフおすすめのローカル居酒屋マップも重宝します。",
              roomTip: "リニューアル済みのスタンダードダブルまたはデラックスシングル。広々としたデスクと上質な寝具で冬の夜長をゆったり寛げます。",
              gourmetTip: "周辺の提携居酒屋で味わう「本場宇和島鯛めし会席」。生卵と秘伝の出汁タレに漬け込んだ新鮮な真鯛を熱々ご飯にかきこむ至福の味わい。",
              highlights: [
                "宇和島市街中心部・シモンズベッド＆みかんジュースバー完備" ,
                "宇和島鯛めしの名店「ほづみ亭」「かどや」まで徒歩すぐのロケーション" ,
                "選べる快眠枕バイキング＆加湿空気清浄機で冬の夜も快適"
              ]
            },
            {
              id: 3,
              name: "天然温泉渓流滑床の湯　スーパーホテル宇和島駅前天然温泉",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/184525/184525.jpg",
              rating: 4.35,
              reviews: 936,
              price: "¥3,600〜",
              access: "JR宇和島駅出口より徒歩4分／宇和島朝日ICより車で約4分",
              special: "■男女別天然温泉完備■ウェルカムバー・朝食ビュッフェなど無料サービスも充実■ビジネス・観光に◎",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184525%2F184525.html",
              story: "宇和島駅から徒歩約3分の好立地にあり、館内に奥伊予の名勝・滑床渓谷の恵みを感じる天然温泉を完備した「天然温泉渓流滑床の湯 スーパーホテル宇和島駅前天然温泉」。冷え込む11〜1月の冬旅において、足を伸ばしてゆったりと浸かれる天然温泉大浴場（男女別）は何物にも代えがたい癒やしです。肌に優しくしっとりと馴染む低張性弱アルカリ性泉は、旅の移動や宇和島城の石段登りで冷え切った身体を芯から温めてくれます。さらに毎朝無料で提供される健康朝食ビュッフェでは、オーガニック野菜サラダや焼きたてパン、宇和島名物のじゃこ天や郷土料理が並び、健康志向の旅行者にも大満足の内容。ウェルカムバーでは愛媛の地酒やソフトドリンクを楽しめるのも嬉しいポイントです。",
              roomTip: "エクストラダブルまたはシアタールーム。大画面プロジェクターで旅の思い出を振り返りながらリラックスできる機能的なお部屋。",
              gourmetTip: "「無料健康朝食＆ウェルカム地酒バー」。朝から手作りの温かいお惣菜と愛媛の柑橘デザートをたっぷり堪能できます。",
              highlights: [
                "男女別天然温泉大浴場「渓流滑床の湯」完備・手足伸ばして湯浴み" ,
                "オーガニック朝食ビュッフェ無料＆愛媛の地酒ウェルカムバー" ,
                "弱アルカリ性の美肌温泉で冷えた身体を芯からポカポカに"
              ]
            },
            {
              id: 4,
              name: "八幡浜センチュリーホテル　イトー",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/746/746.jpg",
              rating: 4.00,
              reviews: 556,
              price: "¥4,800〜",
              access: "予讃線「八幡浜駅」から車で５分（１．２km）　八幡浜港から車で２分（５００m） ◎無料駐車場 26台完備（事前予約要）",
              special: "四国随一の魚どころに位置するホテル　全室LAN有り ランチメニューの八幡浜ちゃんぽんが好評",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F746%2F746.html",
              story: "四国屈指の水揚げを誇る魚市場と九州行きのフェリーが発着する港町・八幡浜の中心に位置する「八幡浜センチュリーホテル イトー」。八幡浜名物のご当地グルメ「八幡浜ちゃんぽん」の元祖や名店が徒歩圏内に集まる絶好のロケーションです。ロビーはクラシックで温かみのある佇まいを保ち、地元の人々の集いの場としても親しまれています。客室は落ち着いたトーンでまとめられ、窓からは八幡浜の港町情緒が広がります。ホテル内レストランでは、冬の宇和海で獲れた新鮮な魚介を使った定食や会席料理が提供され、八幡浜港の「みなっと」や市場での海鮮買い出しと組み合わせた南予周遊ドライブの滞在拠点として抜群のコストパフォーマンスを誇ります。",
              roomTip: "落ち着いた和室またはツインルーム。ご家族連れやグループ旅行でも畳の温もりを感じながら団らんできます。",
              gourmetTip: "「八幡浜ちゃんぽん＆地魚海鮮御膳」。鶏ガラや鰹節の澄んだ黄金スープに野菜と削りかまぼこがたっぷりのちゃんぽんを堪能。",
              highlights: [
                "八幡浜港・ちゃんぽん名店街至近・港町情緒を楽しむ絶好の拠点" ,
                "八幡浜港直送の新鮮海鮮御膳＆元祖八幡浜ちゃんぽん食べ歩き" ,
                "九州フェリー乗船前後や南予海岸ドライブの拠点に便利"
              ]
            },
            {
              id: 5,
              name: "宇和島第一ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/11363/11363.jpg",
              rating: 3.81,
              reviews: 597,
              price: "¥5,800〜",
              access: "JR宇和島駅より徒歩８分",
              special: "駅から徒歩8分　コンビニ至近　 浴場有（不定休）　コインランドリー（有料）館外にあり徒歩1分",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F11363%2F11363.html",
              story: "宇和島市のメインストリート・中央町に位置し、国の史跡「宇和島城」登城口まで徒歩約5分という観光に絶好の立地を誇る「宇和島第一ホテル」。伊達十万石の城下町の歴史散策を早朝から楽しみたい旅人に長く親しまれてきた老舗ビジネスホテルです。客室は清潔感にあふれ、全室に無料Wi-Fiや個別空調、快適なベッドを備えています。ホテル1階には直営の和食レストランがあり、朝食から夕食まで宇和島名物の鯛めしやさつま汁、じゃこ天などの伝統郷土料理をリーズナブルに味わえるのが魅力。宇和島城の天守から冬の澄み渡る宇和海を眺めた後、気軽に郷土の味に舌鼓を打てるアットホームな宿です。",
              roomTip: "スタンダードツインまたはシングルルーム。市街地の中心にありながら静かな環境で、観光の拠点に最適。",
              gourmetTip: "「直営レストランの宇和島郷土料理定食」。新鮮な真鯛を使った鯛めしと具だくさんのさつま汁を気軽に堪能できるセット。",
              highlights: [
                "宇和島城登城口徒歩5分・直営和食処で名物鯛めしとさつま汁" ,
                "伊達十万石の城下町散策に最適・リーズナブルで安心の快適空間" ,
                "城下町の情緒が残る中央町・アットホームな老舗ホテル"
              ]
            }
  ];

  const faqs = [
    {
      q: "宇和島の「宇和島鯛めし」は一般的な鯛めし（炊き込みご飯）と何が違うのですか？",
      a: "愛媛県の鯛めしには大きく分けて2つの文化があります。松山など中予・東予地方の鯛めしは、土鍋や釜で鯛を一尾丸ごとご飯と一緒に炊き込む「炊き込み型」ですが、宇和島をはじめとする南予地方の「宇和島鯛めし」は、新鮮な真鯛の生の刺身を、醤油・みりん・出汁を合わせた特製ダレに生卵、ゴマ、刻みネギ、大葉などとともに絡め、アツアツの白ご飯の上にタレごとかけて食べる「海鮮丼スタイル（生鯛型）」です。その昔、伊予水軍や漁師たちが船の上で火を使わずに手早く食べた「海賊料理（日振島発祥）」がルーツとされ、冬の引き締まった真鯛のぷりぷりとした歯ごたえと濃厚な卵タレの旨味は格別です。"
    },
    {
      q: "冬の宇和島城（現存天守）の見どころと、見学時の注意点は？",
      a: "宇和島城は、藤堂高虎によって築かれ、後に伊達政宗の長男・伊達秀宗を初代とする宇和島伊達家が治めた城で、日本全国に12基しか現存しない貴重な江戸時代の木造天守（国指定重要文化財）を有します。冬の宇和島城は木々の葉が落ち、天守の美しい白壁と破風の意匠が際立ちます。標高約74mの城山山頂にある天守からは、冬の澄んだ空気の下で穏やかな宇和海と宇和島市街を360度見渡せます。登城道は石段が続くため、歩きやすい靴での散策が必須です。冬の朝は石段に霜が降りて滑りやすくなることがあるため足元にご注意ください。"
    },
    {
      q: "八幡浜名物の「八幡浜ちゃんぽん」とはどのようなご当地グルメですか？",
      a: "八幡浜ちゃんぽんは、長崎の白濁した豚骨スープのちゃんぽんとは異なり、鶏ガラや鰹節、昆布などでとった「黄金色に澄んだあっさり醤油風味の和風出汁」が特徴です。具材には、八幡浜の特産品である蒲鉾や削りかまぼこ、豚肉、キャベツ、モヤシ、玉ねぎなどがたっぷり盛られ、太めのもちもちとした中華麺と合わせます。昭和30年代に八幡浜港の飲食店で考案され、九州と四国を結ぶフェリーの港町として栄えた歴史の中で独自の麺文化として発展しました。冬の寒い日にスープを飲み干せば身体の芯から温まります。"
    },
    {
      q: "11月〜1月の南予地方の気候と、冬の特産品（みかん・柑橘）の旬は？",
      a: "愛媛県南予エリアは瀬戸内海および宇和海に面し、基本的には太平洋側の比較的温暖な気候ですが、12〜1月には関門海峡や関崎を抜ける強い季節風が吹き込み、体感温度がぐっと下がります。平野部での積雪は稀ですが、山間部（鬼北町や久万高原方面）へ向かう場合は路面凍結に備えてスタッドレスタイヤがあると安心です。また、11〜1月は南予が誇る「極上みかん」の最盛期です。11月には濃厚な甘みの温州みかん（日の丸みかん、真穴みかん）、12月〜1月には紅まどんな、甘平（かんぺい）、伊予柑などが次々と出荷され、道の駅や産直市では箱買いする観光客で賑わいます。"
    },
    {
      q: "宇和島・八幡浜を巡る1泊2日の冬の王道モデルコースを教えてください。",
      a: "【1日目】JR特急宇和海または松山自動車道で八幡浜へ到着 → 道の駅「八幡浜みなっと」で新鮮な海産物市場を見学＆八幡浜ちゃんぽんのランチ → 海岸沿いの絶景ドライブルートを通り宇和島へ移動（車約40分） → 伊達家の名園「天赦園」で冬の竹林散策 → 宇和島市内のホテルにチェックイン → 夕食は名店で「本場宇和島鯛めし」「太刀魚の巻焼き」「宇和海寒ブリ刺身」と地酒を満喫。【2日目】ホテルで温かい郷土朝食 → 朝の澄んだ空気の中「宇和島城」へ登城し現存天守と宇和海の冬景色を一望 → 「きさいや広場」で特産みかんやじゃこ天のお土産を購入 → 帰路へ。"
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
            <span className="text-slate-900 font-semibold">愛媛・宇和島＆八幡浜・南予名宿</span>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-r from-blue-950 via-cyan-950 to-slate-900 text-white py-16 md:py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-cyan-500/30 border border-cyan-300/40 text-cyan-200 text-xs md:text-sm px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span>11月・12月・1月冬の四国南予旅情特集</span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6 text-white drop-shadow-md">
              愛媛・宇和島＆八幡浜・南予<br className="hidden sm:inline" />
              現存天守「宇和島城」冬情趣と伊達十万石の城下町！<br className="hidden sm:inline" />
              本場「宇和島鯛めし」・宇和海寒ブリ＆南予名宿5選
            </h1>
            <p className="max-w-3xl mx-auto text-sm md:text-lg text-cyan-100 leading-relaxed drop-shadow">
              日本に12基しか現存しない木造天守が澄んだ冬空に凛とそびえる宇和島城。リアス海岸が育む真冬の極上「真鯛」を生卵と秘伝ダレで味わう本場宇和島鯛めしや、脂の乗った宇和海寒ブリ、八幡浜ちゃんぽん。城下町の歴史と海鮮グルメに浸る冬の南予紀行。
            </p>
          </div>
        </header>

        {/* Article Summary Box */}
        <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
            <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b pb-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0" />
              <span>本特集でわかること（11・12・1月の愛媛・南予旅行の要点）</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-700">
              <div className="bg-cyan-50/60 p-4 rounded-xl border border-cyan-100">
                <span className="font-bold text-cyan-900 block mb-1">① 宇和島城現存天守と城下町</span>
                全国12現存天守のひとつ。標高74mの城山から望む冬の宇和海絶景と、伊達十万石の雅が宿る天赦園・武家屋敷の静寂。
              </div>
              <div className="bg-blue-50/60 p-4 rounded-xl border border-blue-100">
                <span className="font-bold text-blue-900 block mb-1">② 本場宇和島鯛めし＆海の幸</span>
                生の真鯛刺身に濃厚な生卵と出汁を合わせる門外不出の郷土料理。真冬の宇和海寒ブリ、だてまぐろ、太刀魚の巻焼き。
              </div>
              <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-100">
                <span className="font-bold text-amber-900 block mb-1">③ 八幡浜ちゃんぽん＆極甘みかん</span>
                黄金色の和風出汁が染みる八幡浜ソウルフードと、日の丸みかん・真穴みかんの最盛期。港町と段々畑の冬景色。
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Regional Editorial Section */}
        <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">
          <section className="space-y-6">
            <div className="border-l-4 border-cyan-600 pl-4">
              <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest block">SOUTH EHIME WINTER GUIDE</span>
              <h2 className="text-xl md:text-3xl font-black text-slate-900">
                なぜ11〜1月の南予・宇和島なのか？冬こそ輝く歴史と海の恵み
              </h2>
            </div>
            
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
              <p>
                四国の南西部に位置する愛媛県南予エリア（宇和島市・八幡浜市・西予市）は、複雑に入り組んだリアス海岸と急峻な山々が織りなす独自の景観を持ちます。温暖な気候として知られる四国ですが、晩秋から真冬（11月〜1月）にかけては、大気の透明度が劇的に向上し、宇和海のエメラルドグリーンの海面と、抜けるような青空のコントラストが一年で最も鮮やかになる季節です。
              </p>
              <p>
                宇和島を象徴する「宇和島城」は、名築城家・藤堂高虎が原型を築き、伊達政宗の長男である秀宗が宇和島伊達藩十万石の城主となって以降、その歴史を刻んできました。現存する三層三階の天守は、江戸時代初期の佇まいをほぼそのまま残す全国的にも稀有な遺構です。初夏や秋の鬱蒼とした緑が落ち着きを見せる冬は、天守の精緻な白壁や懸魚（げぎょ）の装飾が青空にくっきりと浮かび上がり、天守最上階からは澄み切った宇和島湾と対岸の九島、遠く豊後水道へと続く島影を一望できます。天守へと続く石垣の苔むした風情も、冬の静けさの中でひときわ深い趣を醸し出します。
              </p>
              <p>
                そして南予の冬の最大の魅力は、なんといっても「食の最盛期」を迎えることです。黒潮が流れ込む豊沃な宇和海は、冬になると海水温が適度に下がり、名産の真鯛やブリの身がぎゅっと引き締まり、上質な脂を蓄えます。全国に知られる「宇和島鯛めし」は、火を通さず新鮮な刺身のまま、生卵と出汁醤油を溶いたタレに絡めて白飯にかける独特のスタイル。この食べ方は、冬の引き締まった鯛の弾力と、脂の甘みをダイレクトに味わうのにこれ以上ない究極の調理法です。さらに、冬に水揚げされる「だてまぐろ（本マグロ）」や、脂の乗った寒ブリ、竹串に太刀魚を巻き付けて香ばしく焼き上げる「太刀魚の巻焼き」、そして揚げたての「宇和島じゃこ天」など、南予の港町ならではの口福が旅人を待っています。
              </p>
            </div>
          </section>

          {/* Section: Spots to visit */}
          <section className="bg-slate-100 rounded-3xl p-6 md:p-10 space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Compass className="w-6 h-6 text-cyan-600" />
              <span>冬の南予・宇和島＆八幡浜で絶対に訪れたい見どころ</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-base text-cyan-900 flex items-center gap-1.5">
                  <Building className="w-4 h-4 text-cyan-600" />
                  <span>宇和島城（現存十二天守）と天赦園</span>
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  標高約74mの丘陵に建つ現存天守。城山全体が国の史跡に指定され、珍しい植物が生い茂る自然の宝庫です。天守からは市街と宇和海がパノラマで広がり、冬の澄んだ空気感は格別。麓にある「天赦園（てんしゃえん）」は伊達宗紀が隠居所として造営した名園で、池の周りの竹林や冬景色が静かな癒やしを与えてくれます。
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-base text-blue-900 flex items-center gap-1.5">
                  <Anchor className="w-4 h-4 text-blue-600" />
                  <span>八幡浜港と「道の駅 八幡浜みなっと」</span>
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  四国有数の魚市場を擁する八幡浜港。「みなっと」には、その日水揚げされたばかりの鮮魚が並ぶ「どーや市場」や、名物八幡浜ちゃんぽんを味わえるカフェ、柑橘の直売所が揃います。冬は寒サバやアジ、太刀魚が脂ノリ抜群で、お土産の買い出しや海鮮ランチに最適なスポットです。
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-base text-amber-900 flex items-center gap-1.5">
                  <Utensils className="w-4 h-4 text-amber-600" />
                  <span>本場宇和島鯛めし・ほづみ亭とかどや</span>
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  宇和島市内に本店を構える郷土料理の老舗。熱々のご飯に、出汁タレと生卵をしっかり混ぜ合わせた鯛の切り身をのせて豪快にかき込む体験は、現地でしか味わえない感動です。郷土料理「ふくめん（糸こんにゃくに紅白の鯛そぼろなどを彩った料理）」や「さつま汁」との食べ比べもおすすめ。
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-base text-emerald-900 flex items-center gap-1.5">
                  <Flower2 className="w-4 h-4 text-emerald-600" />
                  <span>段々畑の冬景観と黄金色の真穴みかん</span>
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  「耕して天に至る」と称される宇和海沿岸の石積みの段々畑。11月〜12月には山肌一面が鮮やかなオレンジ色のみかんで埋め尽くされます。「日の丸みかん」や「真穴（まあな）みかん」は全国屈指の糖度を誇るブランド。海岸線を走るドライブコースからは、青い海と黄金のみかん畑のコントラストが楽しめます。
                </p>
              </div>
            </div>
          </section>

          {/* Hotel List Section */}
          <section className="space-y-8">
            <div className="border-l-4 border-cyan-600 pl-4">
              <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest block">FEATURED ACCOMMODATIONS</span>
              <h2 className="text-xl md:text-3xl font-black text-slate-900">
                宇和島＆八幡浜・南予を満喫する厳選ホテル・宿5選
              </h2>
              <p className="text-xs md:text-sm text-slate-500 mt-1">
                ※楽天トラベルAPIより最新の空室状況・料金・レビュー情報を取得して掲載しています。
              </p>
            </div>

            <div className="space-y-8">
              {hotelsList.map((hotel) => (
                <div key={hotel.id} className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden hover:shadow-lg transition flex flex-col md:flex-row">
                  <div className="md:w-5/12 relative h-64 md:h-auto min-h-[240px]">
                    <img 
                      src={hotel.img} 
                      alt={hotel.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-cyan-700/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
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
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0 mt-0.5" />
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
                        className="inline-flex items-center gap-1.5 bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs md:text-sm px-4 py-2.5 rounded-xl transition shadow-sm flex-shrink-0 ml-3"
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
            <div className="border-l-4 border-cyan-600 pl-4">
              <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest block">RECOMMENDED ITINERARY</span>
              <h3 className="text-xl md:text-2xl font-black text-slate-900">
                1泊2日！宇和島城と本場鯛めし・八幡浜港を巡る冬の王道モデルコース
              </h3>
            </div>
            
            <div className="relative border-l-2 border-cyan-200 ml-4 pl-6 space-y-8 text-sm">
              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-cyan-600 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-cyan-700 block mb-1">1日目 11:30 | 八幡浜に到着</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">「道の駅 八幡浜みなっと」で港町の賑わいと八幡浜ちゃんぽん</h4>
                <p className="text-slate-600 leading-relaxed">
                  JR八幡浜駅または松山自動車道大洲IC経由で八幡浜へ。「みなっと」のどーや市場で活気ある鮮魚の競りや直売を見学後、黄金色スープが染み渡る「八幡浜ちゃんぽん」で身体を温めるランチ。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-cyan-600 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-cyan-700 block mb-1">1日目 14:30 | 宇和島へ移動＆名園散策</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">宇和島伊達家の庭園「天赦園」で冬の風情を満喫</h4>
                <p className="text-slate-600 leading-relaxed">
                  車またはJR予讃線で南下し宇和島市へ。伊達宗紀が隠居所として造営した「天赦園」へ。冬の静かな池畔をめぐり、珍しい白玉笹や伊達家の家紋にちなんだ竹林の落ち着いた佇まいに心洗われます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-cyan-600 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-cyan-700 block mb-1">1日目 18:30 | 宇和島の夜宴</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">本場「宇和島鯛めし」と宇和海寒ブリ・太刀魚巻焼きに舌鼓</h4>
                <p className="text-slate-600 leading-relaxed">
                  ホテルにチェックイン後、市内の名店「ほづみ亭」や「かどや」へ。冬の引き締まった真鯛の刺身を生卵出汁で味わう鯛めしを中心に、脂ののった寒ブリ刺身、香ばしい太刀魚巻焼きを愛媛の辛口地酒とともに堪能。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-cyan-600 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-cyan-700 block mb-1">2日目 09:00 | 現存天守へ登城</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">澄んだ冬空にそびえる「宇和島城」天守から宇和海を展望</h4>
                <p className="text-slate-600 leading-relaxed">
                  朝の清々しい空気の中、苔むす登城道を歩いて山頂の天守へ。江戸初期から残る木造天守の内部を見学し、最上階の窓から冬の宇和海と宇和島市街の絶景を一望。歴史の重みに浸ります。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-cyan-600 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-cyan-700 block mb-1">2日目 12:00 | お土産買い出し＆帰路</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">「道の駅 みま」または「きさいや広場」で特産みかん買い出し</h4>
                <p className="text-slate-600 leading-relaxed">
                  道の駅で、11〜1月の最盛期を迎える「真穴みかん」「日の丸みかん」や、揚げたての宇和島じゃこ天、真鯛加工品を買い揃えて満足の帰路へ。
                </p>
              </div>
            </div>
          </section>

          {/* Winter Travel Tips */}
          <section className="bg-amber-50/70 border border-amber-200 rounded-3xl p-6 md:p-8 space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-amber-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <span>冬（11・12・1月）の南予旅行・知っておきたいお役立ちTips</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-amber-950">
              <div className="bg-white/80 p-4 rounded-xl border border-amber-100">
                <strong className="block mb-1 text-amber-900 font-bold">・宇和島城登城時の足元と服装</strong>
                宇和島城天守へは急な石段を15〜20分ほど登ります。スニーカーなど歩きやすい靴が必須です。冬の朝夕は石段が湿気や霜で滑りやすくなる場合があるため、手すりを使い慎重に登りましょう。
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-amber-100">
                <strong className="block mb-1 text-amber-900 font-bold">・道路の積雪と海岸線の季節風</strong>
                宇和島・八幡浜の海岸沿いは積雪することは稀ですが、松山自動車道の山間部（内子・大洲間）や三間IC周辺では強い冬型の気圧配置時に凍結・降雪規制が出る場合があります。冬タイヤ規制情報を事前に確認しましょう。
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-amber-100">
                <strong className="block mb-1 text-amber-900 font-bold">・鯛めしの名店は事前予約がおすすめ</strong>
                年末年始や週末は、鯛めしの名店（ほづみ亭、かどや、一心など）が地元客の忘新年会や観光客で大変混み合います。夕食時は事前の席予約をしておくのがスムーズです。
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-amber-100">
                <strong className="block mb-1 text-amber-900 font-bold">・冬柑橘の発送はお早めに</strong>
                11月下旬から12月中旬にかけては贈答用高級みかん（紅まどんな等）の出荷ピークです。道の駅や直売所では午前中に完売することもあるため、みかんの購入は早い時間帯がおすすめです。
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="space-y-6">
            <div className="border-l-4 border-cyan-600 pl-4">
              <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest block">FREQUENTLY ASKED QUESTIONS</span>
              <h3 className="text-xl md:text-2xl font-black text-slate-900">
                宇和島＆八幡浜・南予の冬旅に関するよくある質問
              </h3>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                  <h4 className="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                    <span className="text-cyan-600 font-black">Q.</span>
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
              <Sparkles className="w-5 h-5 text-cyan-600" />
              <span>四国・愛媛および冬の目的別おすすめ特集</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
              <Link href="/winter-ehime-dogo-onsen-honkan-taimeshi-iyogyu-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-cyan-400 transition font-medium text-slate-700">
                ♨️ 道後温泉本館と鯛めし・伊予牛名宿
              </Link>
              <Link href="/winter-ehime-imabari-shimanami-oomishima-taimeshi-onsen-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-cyan-400 transition font-medium text-slate-700">
                🌉 今治＆しまなみ海道・大三島名宿
              </Link>
              <Link href="/winter-kochi-sukumo-daruma-sunset-shimanto-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-cyan-400 transition font-medium text-slate-700">
                🌅 宿毛だるま夕日と四万十寒ブリ名宿
              </Link>
              <Link href="/winter-tokushima-minamiawa-yakuouji-hatsumode-iseebi-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-cyan-400 transition font-medium text-slate-700">
                ⛩️ 徳島美波町・薬王寺初詣＆天然伊勢海老名宿
              </Link>
              <Link href="/winter-kagawa-zentsuji-marugame-castle-udon-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-cyan-400 transition font-medium text-slate-700">
                🏯 香川善通寺初詣＆丸亀城・讃岐うどん名宿
              </Link>
              <Link href="/features" className="p-3 bg-cyan-700 text-white rounded-xl font-bold hover:bg-cyan-800 transition text-center flex items-center justify-center">
                ❄️ 全国の冬の厳選特集一覧を見る →
              </Link>
            </div>
          </section>
        </main>
      
      <HubRelatedPosts currentSlug="winter-ehime-uwajima-yawatahama-taimeshi-kanburi-castle-stay" />
</div>
    </>
  );
}
