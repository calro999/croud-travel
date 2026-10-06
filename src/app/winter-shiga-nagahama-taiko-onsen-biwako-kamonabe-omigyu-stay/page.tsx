import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Fish, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Castle
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月滋賀・長浜太閤温泉の初冬琵琶湖夕景と名物天然鴨鍋】秀吉ゆかりの含鉄泉＆極上近江牛すき焼きを堪能する湖北名宿5選",
  description: "11月から12月にかけて、日本最大の湖・琵琶湖の東岸に位置する長浜は、シベリアから優美なコハクチョウや水鳥が飛来し、湖面を黄金色に染め上げる夕暮れパノラマが美しい初冬の旅情に包まれます。戦国武将・豊臣秀吉公が長浜城築城の際に湧き出たと伝わる「長浜太閤温泉」は、有馬の金泉を彷彿とさせる茶褐色の含鉄炭酸泉で、身体の芯から温まる名湯。さらに11月15日の鴨猟解禁とともに始まる湖北の冬の伝統食「天然真鴨（マガモ）の鴨鍋（かもすき）」と、三大和牛「近江牛」の霜降りすき焼きを堪能する厳選名宿5選を詳しく解説します。",
  keywords: '長浜太閤温泉 宿泊, 琵琶湖 温泉 11月 12月, 湖北 天然鴨鍋 かもすき, 近江牛 すき焼き, 浜湖月, 北ビワコホテルグラツィエ, 旅館紅鮎, レジーナリゾートびわ湖長浜, グランドメルキュール琵琶湖',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-shiga-nagahama-taiko-onsen-biwako-kamonabe-omigyu-stay/"
  },
  openGraph: {
    title: "【11・12月滋賀・長浜太閤温泉の初冬琵琶湖夕景と名物天然鴨鍋】秀吉ゆかりの含鉄泉＆極上近江牛すき焼きを堪能する湖北名宿5選",
    description: "11月から12月にかけて、日本最大の湖・琵琶湖の東岸に位置する長浜は、シベリアから優美なコハクチョウや水鳥が飛来し、湖面を黄金色に染め上げる夕暮れパノラマが美しい初冬の旅情に包まれます。戦国武将・豊臣秀吉公が長浜城築城の際に湧き出たと伝わる「長浜太閤温泉」は、有馬の金泉を彷彿とさせる茶褐色の含鉄炭酸泉で、身体の芯から温まる名湯。さらに11月15日の鴨猟解禁とともに始まる湖北の冬の伝統食「天然真鴨（マガモ）の鴨鍋（かもすき）」と、三大和牛「近江牛」の霜降りすき焼きを堪能する厳選名宿5選を詳しく解説します。",
    url: 'https://croud-travel.pages.dev/winter-shiga-nagahama-taiko-onsen-biwako-kamonabe-omigyu-stay',
    siteName: 'クラドトラベル (Croud Travel)',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬の琵琶湖夕景と長浜太閤温泉の絶景'
      }
    ]
  }
};

const faqList = [
  {
    "q": "長浜太閤温泉の歴史や泉質、特徴について教えてください。",
    "a": "長浜太閤温泉は、天正年間（1570年代）、羽柴秀吉（後の豊臣秀吉公）が織田信長より拝領した長浜に初めて城を築いた際、長男・秀勝が誕生したことを祝って湧き出たと伝わる歴史ある温泉です。泉質は「含鉄-ナトリウム-塩化物強塩温泉」で、湧き出た瞬間は無色透明ですが、空気に触れると鉄分が酸化して独特の茶褐色（赤茶色）に変化します。兵庫県の有馬温泉「金泉」に極めて近い泉質であり、濃厚な塩分と鉄分が身体を芯から温め、湯冷めしにくいため、初冬の湖風で冷えた身体を癒やすのに最適です。"
  },
  {
    "q": "11月・12月の長浜の気候や気温、琵琶湖の冬景色は？",
    "a": "滋賀県北部に位置する長浜・湖北地域は、初冬になると近畿地方でありながら日本海側気候の影響を受け始め、冷え込みが強まります。11月の最高気温は13〜16℃、最低気温は6〜9℃前後で、秋晴れの日中は散策に快適ですが朝晩はぐっと冷えます。12月に入ると最高気温は8〜11℃、最低気温は1〜4℃前後まで下がり、背後の伊吹山には初雪が冠雪します。また、琵琶湖からは冷たい湖風が吹き抜けるため、体感温度は低くなります。厚手のウールコートやダウンジャケット、手袋、マフラーなどの防寒対策をしっかり整えてお出かけください。"
  },
  {
    "q": "11月15日解禁の湖北名物「天然鴨鍋（かもすき）」とは何ですか？",
    "a": "湖北・長浜は古くから日本有数の鴨の飛来地であり、冬の伝統食として「鴨鍋（かもすき）」が受け継がれてきました。例年11月15日の狩猟解禁とともに、シベリア方面から越冬のために飛来した天然の「真鴨（マガモ）」を使った料理が提供され始めます。合鴨（アヒルとの交配種）とは異なり、天然真鴨は引き締まった赤身にコクのある上質な脂をたっぷり蓄えており、野趣あふれる力強い旨味が特徴です。醤油やみりん、昆布出汁をベースにした秘伝の出汁で、特産のネギやセリ、豆腐とともに煮込んで味わう鴨すきは、冬の湖北でしか味わえない至高のごちそうです。"
  },
  {
    "q": "滋賀が世界に誇る「近江牛」の美味しさの特徴は？",
    "a": "近江牛（おうみぎゅう）は、松阪牛や神戸ビーフと並び「日本三大和牛」の一つに数えられる、約400年の歴史を持つ日本最古のブランド和牛です。琵琶湖畔の豊かな水と肥沃な大地で丹精込めて育てられた黒毛和牛で、脂肪の融点が非常に低いため、口の中に入れると体温でとろけるような滑らかな舌触りが特徴。赤身肉の豊かな旨味と、上品で甘みのある脂の香りが絶妙な調和を奏でます。長浜の宿では、すき焼き、しゃぶしゃぶ、ステーキ、陶板焼きなど多彩なスタイルでその極上の味を堪能できます。"
  },
  {
    "q": "京都・大阪・名古屋方面から長浜へのアクセス方法は？",
    "a": "JR京都駅からは、JR東海道・北陸本線（新快速）に乗車すれば乗り換えなしで約1時間10分で長浜駅に到着します。大阪駅からは新快速で約1時間40分です。新幹線を利用する場合は、東海道新幹線「米原駅」でJR北陸本線に乗り換え、約9分で長浜駅へアクセスできます。名古屋方面からは、新幹線で米原経由、またはJR東海道本線・北陸本線で約1時間15分〜1時間30分です。車の場合は、北陸自動車道「長浜IC」より各温泉宿まで約10〜15分と非常に好アクセスです。"
  }
];

export default function ShigaNagahamaWinterFeature() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-shiga-nagahama-taiko-onsen-biwako-kamonabe-omigyu-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-shiga-nagahama-taiko-onsen-biwako-kamonabe-omigyu-stay"
        },
        "headline": "【11・12月滋賀・長浜太閤温泉の初冬琵琶湖夕景と名物天然鴨鍋】秀吉ゆかりの含鉄泉＆極上近江牛すき焼きを堪能する湖北名宿5選",
        "description": "11月から12月にかけて、日本最大の湖・琵琶湖の東岸に位置する長浜は、シベリアから優美なコハクチョウや水鳥が飛来し、湖面を黄金色に染め上げる夕暮れパノラマが美しい初冬の旅情に包まれます。戦国武将・豊臣秀吉公が長浜城築城の際に湧き出たと伝わる「長浜太閤温泉」は、有馬の金泉を彷彿とさせる茶褐色の含鉄炭酸泉で、身体の芯から温まる名湯。さらに11月15日の鴨猟解禁とともに始まる湖北の冬の伝統食「天然真鴨（マガモ）の鴨鍋（かもすき）」と、三大和牛「近江牛」の霜降りすき焼きを堪能する厳選名宿5選を詳しく解説します。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "2026-09-28T12:00:00+09:00",
        "dateModified": "2026-09-28T12:00:00+09:00",
        "publisher": {
          "@type": "Organization",
          "name": "Croud Travel",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.pages.dev/logo.png"
          }
        },
        "author": {
          "@type": "Organization",
          "name": "Croud Travel 近江・琵琶湖歴史紀行取材班"
        },
        "inLanguage": "ja"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.pages.dev/winter-shiga-nagahama-taiko-onsen-biwako-kamonabe-omigyu-stay#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "ホーム",
            "item": "https://croud-travel.pages.dev/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "特集一覧",
            "item": "https://croud-travel.pages.dev/features"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "滋賀・長浜太閤温泉 初冬琵琶湖夕景と天然鴨鍋の宿",
            "item": "https://croud-travel.pages.dev/winter-shiga-nagahama-taiko-onsen-biwako-kamonabe-omigyu-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-shiga-nagahama-taiko-onsen-biwako-kamonabe-omigyu-stay#faq",
        "mainEntity": faqList.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      }
    ]
  };

  const hotels = [
            {
              id: 1,
              name: "びわ湖畔　おいしい湯の宿　長浜太閤温泉　浜湖月",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13910/13910.jpg",
              rating: 4.78,
              reviews: 72,
              price: "¥16,500〜",
              access: "ＪＲ長浜駅より徒歩５分／北陸自動車道長浜ＩＣより約１０分 無料駐車場",
              special: "琵琶湖を眺め、新鮮な湖国の幸を活かした料理自慢",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13910%2F13910.html",
              story: "琵琶湖の湖畔に建ち、全客室や露天風呂から雄大なマザーレイクの絶景を間近に望む老舗料亭旅館「びわ湖畔 おいしい湯の宿 長浜太閤温泉 浜湖月（はまこげつ）」。秀吉公ゆかりの太閤温泉を引く自慢の大浴場や展望露天風呂は、空気に触れると独特の赤褐色に変化する濃厚な含鉄炭酸泉で、湯上がりの保温効果は抜群です。料理自慢の宿として知られる浜湖月の真骨頂は、湖北の伝統の技を極めた冬の味覚会席。11月15日の猟解禁以降には、本場湖北の狩猟肉である「天然真鴨」を贅沢に使用した伝統の「天然鴨すき会席」が登場。コク深い鴨の脂と出汁、地元特産のネギやセリの絶妙な調和は言葉を失う美味しさです。さらに日本最古のブランド和牛「近江牛」のサーロイン陶板焼きも堪能できます。",
              roomTip: "琵琶湖を一望する温泉露天風呂付き和洋スイート。夕暮れ時に夕日が琵琶湖の水平線に沈みゆく劇的なマジックアワーを湯船から心ゆくまで鑑賞。",
              gourmetTip: "「湖北冬の極み・天然鴨すき会席＆近江牛プラン」。脂が乗った天然真鴨の鴨すき鍋、近江牛ロースの石焼きステーキ、湖魚の造り、ふっくら炊き上げた近江米。",
              highlights: [
                "琵琶湖畔の老舗料亭旅館＆茶褐色の濃厚な長浜太閤温泉と11月解禁天然真鴨の鴨すき会席",
                "全室レイクビュー客室＆夕日が琵琶湖を黄金に染める劇的サンセットを部屋や露天から一望",
                "黒壁スクエアや長浜城散策に絶好の立地＆洗練された板前の技が光る伝統の日本料理"
              ]
            },
            {
              id: 2,
              name: "北ビワコホテル　グラツィエ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/16047/16047.jpg",
              rating: 4.26,
              reviews: 2010,
              price: "¥8,250〜",
              access: "ＪＲ長浜駅西口より徒歩10分(土日祝日は西口よりシャトルバス運行※要連絡）北陸自動車道長浜ＩＣより15分",
              special: "湖畔に佇むまるで小さな北イタリア。老舗の伝統を受け継ぐ確かな味と心温まるサービスでおもてなしを。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16047%2F16047.html",
              story: "長浜港のすぐ目の前に位置し、北イタリア・ヴェローナの街並みをイメージしたエレガントな湖畔リゾートホテル「北ビワコホテル グラツィエ」。館内にはイタリアの美術品や調度品が配され、まるでヨーロッパの湖水地方に滞在しているかのような異国情緒が漂います。最上階の展望大浴場からは、初冬の澄み渡る琵琶湖や伊吹山、遠く竹生島（ちくぶしま）をパノラマで望むことができます。食事は本格イタリアン「パスト・ヴィーノ」または日本料理「竹生島」から選択可能。11月・12月には、近江牛のビステッカ（ステーキ）や滋賀県産冬野菜を活かした極上イタリアンコース、または天然鴨鍋と近江牛の会席料理など、東西の食の美学が結実した贅沢なディナーを堪能できます。",
              roomTip: "琵琶湖側スーペリアツインまたはバルコニー付き客室。初冬の湖上を行き交う遊覧船や夕景を眺めながら、ワイングラスを傾ける優雅な大人の休日。",
              gourmetTip: "「冬の近江牛×イタリアン特別ディナー」。近江牛フィレ肉のアッロースト、湖北産天然鴨のラグーパスタ、近江冬野菜のバーニャカウダ、特製ドルチェ。",
              highlights: [
                "長浜港前のイタリアンリゾート＆最上階展望大浴場と近江牛ビステッカ・湖国フレンチ",
                "北イタリア調のエレガントな館内空間＆伊吹山や竹生島を見晴らすパノラマビュー",
                "長浜港から竹生島クルーズへの乗船にも至便＆上質なワインと楽しむ大人のディナー"
              ]
            },
            {
              id: 3,
              name: "旅館　紅鮎",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/74600/74600.jpg",
              rating: 4.55,
              reviews: 266,
              price: "¥8,800〜",
              access: "ＪＲ北陸本線「高月」駅よりお車で約１０分。送迎バスあり（要予約）。無料駐車場。",
              special: "「いらっしゃいませ」と申し上げるより、「おかえりなさいませ」と迎えてさしあげたい。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F74600%2F74600.html",
              story: "長浜市北部の湖北・尾上（おのえ）温泉に佇み、全室に琵琶湖を一望する半露天風呂を備えた大人のための隠れ家名旅館「旅館 紅鮎（べにあゆ）」。目の前に遮るもののない広大な琵琶湖が広がり、初冬にはシベリアから越冬にやってくるコハクチョウやカモたちの姿を部屋のテラスからバードウォッチングできる至高のロケーションを誇ります。客室の専用露天風呂には、茶褐色に濁る良質な自家源泉が注がれ、波音を聞きながら24時間好きな時に湯浴みを楽しめます。紅鮎の冬の名物は、創業以来守り継がれてきた秘伝の出汁で味わう「本場天然鴨鍋会席」。天然マガモならではの深い野趣あふれる旨味と、選び抜かれた極上A5ランク近江牛の食べ比べは、全国の美食家を唸らせる冬の最高峰です。",
              roomTip: "全室琵琶湖レイクビュー半露天風呂付き客室（マッサージチェア完備）。窓一面に広がる冬の琵琶湖の朝霧や夕暮れを眺め、ただ静かに過ごす極上のプライベートステイ。",
              gourmetTip: "「冬の湖北・極上天然鴨鍋とA5近江牛の饗宴会席」。天然真鴨の鴨鍋（つみれ入り）、近江牛のサーロイン陶板焼き、琵琶湖産ビワマスの刺身、地酒のペアリング。",
              highlights: [
                "全室琵琶湖一望半露天風呂付きの名隠れ宿＆創業伝承の出汁で味わう極上天然鴨鍋と近江牛",
                "目の前を泳ぐ渡り鳥や白鳥をテラスから観察＆完全プライベートな静寂の湯浴み体験",
                "全国の温泉ファンと美食家が通う名宿＆心温まる女将とスタッフのおもてなし"
              ]
            },
            {
              id: 4,
              name: "レジーナリゾートびわ湖長浜",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/179000/179000.jpg",
              rating: 4.65,
              reviews: 152,
              price: "¥25,300〜",
              access: "長浜駅より徒歩にて約１０分",
              special: "～愛犬とともに琵琶湖を望む温宿でくつろぎの時間を～",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F179000%2F179000.html",
              story: "豊臣秀吉公が築いた長浜城がそびえる豊公園（ほうこうえん）に隣接し、琵琶湖畔の豊かな自然に抱かれた上質なリゾート「レジーナリゾートびわ湖長浜」。愛犬同伴リゾートとしても全国屈指の評価を誇りながら、一般の旅人にも愛される洗練されたモダンラグジュアリーな空間が魅力です。館内大浴場には歴史ある「長浜太閤温泉」の自家源泉が引き湯されており、茶褐色の濃厚な含鉄泉が旅の疲れを心地よく癒やしてくれます。夕食はレイクビューダイニングで味わう本格近江牛会席。11月・12月には、とろけるような近江牛のしゃぶしゃぶやすき焼きをメインに、冬の琵琶湖で獲れるビワマスやモロコ、湖北の旬野菜を用いた滋味あふれる創作料理が華やかに並びます。",
              roomTip: "全室琵琶湖を一望するオーシャンビューならぬレイクビュー和モダン客室。初冬の湖畔の静けさに包まれ、広々としたテラスから夕陽を眺める贅沢。",
              gourmetTip: "「冬の近江牛づくし特選会席」。最高級近江牛のしゃぶしゃぶ鍋、近江牛のローストビーフ、湖北の冬根菜の焚き合わせ、炊きたて近江米みずかがみ。",
              highlights: [
                "長浜城豊公園隣接の上質な湖畔リゾート＆太閤温泉自家源泉と近江牛特選会席",
                "洗練されたモダン和洋室＆琵琶湖の美しい夕景を眺めながら過ごす大人の寛ぎステイ",
                "豊公園の初冬散策に最適＆愛犬との贅沢な旅行にも対応するハイグレードな設備"
              ]
            },
            {
              id: 5,
              name: "グランドメルキュール琵琶湖リゾート＆スパ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/2922/2922.jpg",
              rating: 4.05,
              reviews: 5604,
              price: "¥5,160〜",
              access: "長浜駅から(西出口)徒歩約10分(無料定時送迎有）米原駅から車約20分　長浜ＩＣから車約15分　米原ＩＣから車約20分",
              special: "4月リブランドオープン！全てのお客様が無料で利用できるラウンジ特典付のリゾート",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2922%2F2922.html",
              story: "長浜城や長浜港のすぐそば、琵琶湖畔のランドマークとして堂々たる威容を誇る大型スパリゾート「グランドメルキュール琵琶湖リゾート＆スパ（旧長浜ロイヤルホテル）」。2024年にフルリブランドオープンし、洗練された現代リゾートの快適性とオールインクルーシブの贅沢なおもてなしを提供しています。温泉大浴場には長浜太閤温泉が注がれ、露天風呂では初冬の澄んだ夜空を見上げながら、茶褐色の名湯で芯から温まることができます。夕食ビュッフェでは、シェフが目の前で仕上げる近江牛料理をはじめ、冬の湖国食材を活かした和洋中の豪華メニュー、さらにビールや厳選ワイン、滋賀の地酒が追加料金なしで自由に楽しめるオールインクルーシブが大人気です。",
              roomTip: "琵琶湖を一望するリニューアル済みのモダンクラシック客室。広々としたベッドと洗練されたインテリアの中で、三世代やカップルで優雅にリゾートを満喫。",
              gourmetTip: "「オールインクルーシブ・冬の豪華ディナービュッフェ」。目の前で焼き上げる近江牛ステーキ、季節の鴨料理、琵琶湖産湖魚の天ぷら、地酒やワインのフリーフロー。",
              highlights: [
                "2024年リブランドオープンの湖畔大型リゾート＆太閤温泉露天とオールインクルーシブ",
                "目の前で焼く近江牛や豪華ビュッフェ＆追加料金なしのワイン・地酒フリーフロー",
                "コスパ抜群のスパリゾート＆家族三世代やグループでの冬の琵琶湖観光に最適"
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
          alt="初冬の琵琶湖夕景と長浜太閤温泉"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold">
            <Castle className="w-4 h-4" />
            11月・12月 秀吉ゆかり太閤温泉＆天然鴨鍋特集｜滋賀・長浜
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            初冬琵琶湖夕景と名物天然鴨鍋<br className="hidden sm:inline" />
            秀吉ゆかりの含鉄泉＆極上近江牛すき焼きを堪能する湖北名宿5選
          </h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            茜色に染まる日本最大の湖・琵琶湖と飛来するコハクチョウ。豊臣秀吉公ゆかりの茶褐色の含鉄泉で温まり、11月15日猟解禁の本場天然真鴨と霜降り近江牛に舌鼓を打つ極上の湖国旅。
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300 pt-2">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-amber-400" /> 11月15日鴨猟解禁〜12月が旬</span>
            <span className="flex items-center gap-1"><Waves className="w-4 h-4 text-amber-400" /> 茶褐色の秀吉ゆかり長浜太閤温泉</span>
            <span className="flex items-center gap-1"><Utensils className="w-4 h-4 text-amber-400" /> 本場天然鴨鍋（かもすき）＆近江牛</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        
        {/* Section 1: Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Sun className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Biwako Sunset & Winter Gourmet</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の琵琶湖レイクビューと湖国の至宝味覚｜11月・12月に長浜を訪れるべき理由
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              日本最大の湖・琵琶湖の北東岸に位置する長浜市。かつて戦国乱世のなか、若き羽柴秀吉（豊臣秀吉公）が初めて自らの城下町を築いたこの歴史の街は、11月から12月にかけて息を呑むような初冬の美しさに包まれます。湖北の水辺にはシベリアから越冬のためにコハクチョウや無数の水鳥が飛来し、湖面に羽を休める姿は初冬の風物詩。夕暮れ時には、澄み切った冷気の中で夕陽が琵琶湖を黄金色から茜色へと染め上げ、静寂に満ちた湖国の美を魅せてくれます。
            </p>
            <p>
              この長浜の地で旅人を温めてきたのが「長浜太閤温泉」です。秀吉公が長浜城を築城した際、長男・秀勝の誕生を祝って湧き出たと伝わるこの名湯は、有馬温泉の金泉にも似た茶褐色の含鉄炭酸泉。豊富な鉄分と塩分を含み、湯船に身を沈めると身体の芯までじわじわと温まり、湯上がり後も湯冷め知らずのポカポカ感が長く持続します。
            </p>
            <p>
              そして11月・12月の長浜旅行の最大のハイライトは、何と言っても「天然鴨鍋（かもすき）」です。例年11月15日の鴨猟解禁とともに、湖北で育った天然真鴨（マガモ）が市場に並びます。引き締まった肉質とコクのある上質な脂身、噛むほどに溢れ出す野趣豊かな旨味は、養殖の合鴨とは一線を画す別次元の美味。さらに400年の歴史を誇る日本三大和牛「近江牛」の霜降りすき焼きやステーキ、琵琶湖固有のビワマスなど、湖国ならではの極上美食が心もお腹も満たしてくれます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
                <Waves className="w-4 h-4 text-amber-600" />
                秀吉公ゆかりの茶褐色含鉄泉
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                有馬金泉を彷彿とさせる濃厚な赤茶色の名湯。豊富な鉄分と塩分が冬の冷えを芯から解消する極上の温まり湯。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
                <Utensils className="w-4 h-4 text-amber-600" />
                11月15日解禁・本場天然真鴨鍋
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                湖北の冬の伝統食「鴨すき」。脂が乗った天然真鴨の力強い旨味と秘伝出汁、白ネギの絶妙なハーモニー。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
                <Flame className="w-4 h-4 text-amber-600" />
                三大和牛・近江牛の霜降り会席
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                融点の低い上質な脂が口の中でとろける極上近江牛。陶板ステーキやすき焼きで湖国の贅沢を堪能。
              </p>
            </div>
          </div>
        </section>

        {/* Section 1.5: Lake Geometry & Swan Habitat */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Waves className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Biwako Geography & Ecology</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                湖北特有のリアス状湖岸と初冬に飛来するコハクチョウのサンクチュアリ
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              琵琶湖の中でも長浜・湖北地域は、奥琵琶湖の山々が湖にせり出す複雑な入り江と遠浅の湿地帯が広がり、水鳥たちにとって日本屈指の越冬地となっています。11月中旬、初冬の冷気とともにシベリアから南下してきたコハクチョウの群れが湖北野鳥センター周辺や尾上温泉の湖岸に舞い降り、湖面に浮かぶ姿は湖北の冬の訪れを告げる風物詩です。
            </p>
            <p>
              また、長浜の海岸線は西に開けているため、夕暮れ時には対岸の比良山地に沈む夕陽が湖面をどこまでもまっすぐに照らす「夕日の道」が描かれます。湖畔の露天風呂から、羽ばたく水鳥たちのシルエットと黄金色の残光を静かに見つめる時間は、日常の喧騒から完全に解き放たれる極上のリトリートとなります。
            </p>
          </div>
        </section>

        {/* Section 2: Hotel Cards */}
        <section className="space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-amber-700 tracking-wider uppercase">Selected Lakeside Ryokan & Hotels</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              【長浜太閤温泉】琵琶湖夕景と天然鴨鍋・近江牛を味わう厳選宿5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
              全室レイクビューの老舗料亭旅館、全室露天風呂付き隠れ宿、豪華オールインクルーシブホテルなど厳選して紹介します。
            </p>
          </div>

          <div className="space-y-10">
            {hotels.map((h) => (
              <div 
                key={h.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition-all flex flex-col md:flex-row"
              >
                <div className="relative w-full md:w-2/5 h-64 md:h-auto min-h-[260px] bg-slate-100">
                  <Image
                    src={h.img}
                    alt={h.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    第{h.id}位
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-semibold px-2.5 py-1 bg-amber-50 text-amber-800 rounded-md">
                        {h.special}
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span>{h.rating}</span>
                        <span className="text-slate-400 text-xs font-normal">({h.reviews.toLocaleString()}件)</span>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-amber-700 transition-colors">
                      <a href={h.url} target="_blank" rel="noopener noreferrer">
                        {h.name}
                      </a>
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {h.story}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                      <div className="p-3 bg-amber-50/50 rounded-xl border border-amber-100">
                        <span className="font-bold text-amber-900 block mb-1">【客室のこだわり】</span>
                        <p className="text-slate-600">{h.roomTip}</p>
                      </div>
                      <div className="p-3 bg-rose-50/50 rounded-xl border border-rose-100">
                        <span className="font-bold text-rose-900 block mb-1">【冬の味覚プラン】</span>
                        <p className="text-slate-600">{h.gourmetTip}</p>
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-2">
                      <span className="text-xs font-bold text-slate-700 block">おすすめのハイライト：</span>
                      {h.highlights.map((hl: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    <div className="space-y-0.5">
                      <span className="text-[11px] text-slate-400 block">参考宿泊料金（2名1室時・1名あたり）</span>
                      <div className="text-xl font-extrabold text-amber-700">{h.price}</div>
                    </div>
                    <a
                      href={h.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-sm hover:shadow transition-all"
                    >
                      楽天トラベルで空室・プランを見る
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2.5: Gourmet & Hot Spring Science */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Gourmet & Thermal Science</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                長浜太閤温泉の含鉄泉メカニズムと天然真鴨が蓄える極上の脂
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              長浜太閤温泉の泉質は、地下深部の花崗岩地帯から湧出する高濃度の含鉄-ナトリウム-塩化物泉です。鉄分をイオンとして豊富に含んでいるため、浴槽に注がれて酸素に触れると急速に二価鉄から三価鉄へと酸化し、特徴的な茶褐色に濁ります。塩分濃度が高いため浸透圧によって皮膚の保温膜を形成し、鉄分が毛細血管を刺激して血行を促進。冬の冷えや関節痛、筋肉疲労に対して抜群の回復効果をもたらします。
            </p>
            <p>
              また、11月15日に解禁される湖北の「天然真鴨」は、シベリアから日本へ渡る過酷な長距離飛行に備えて、秋の穀物や水草を大量に摂取して純白の脂身を分厚く蓄えています。養殖の合鴨とは脂の質が根本的に異なり、天然鴨の脂は融点が低く、スープに溶け込むと上品な甘みと深いコクを与えます。地元特産の白ネギやセリとともに煮込む「鴨すき」は、噛みしめるほどに赤身の野趣あふれる鉄分と脂の甘みが一体化し、湖国随一の冬の味覚として崇められています。
            </p>
          </div>
        </section>

        {/* Section 3: Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-8">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                【1泊2日モデルコース】初冬の長浜歴史散策・黒壁スクエアと天然鴨すき＆太閤温泉の休日
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700 leading-relaxed">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/60 space-y-4">
              <div className="flex items-center gap-2 text-amber-800 font-bold text-base pb-2 border-b border-slate-200">
                <Clock className="w-5 h-5 text-amber-600" />
                【1日目】黒壁ガラス散策と琵琶湖夕景露天・本場天然鴨鍋
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-xs shrink-0 mt-0.5">12:00</span>
                  <span><strong>JR長浜駅到着＆名物ランチ：</strong>黒壁スクエアの老舗「翼果楼」で温かい郷土名物「焼鯖そうめん」を味わう。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-xs shrink-0 mt-0.5">13:30</span>
                  <span><strong>黒壁ガラス館＆工房体験：</strong>レトロな町並みを散策し、吹きガラス体験や美しいガラス工芸品のお買い物を満喫。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-xs shrink-0 mt-0.5">15:30</span>
                  <span><strong>湖畔の宿へチェックイン＆太閤温泉：</strong>茶褐色の含鉄泉に浸かり、夕日に輝く琵琶湖のレイクビューパノラマを堪能。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-xs shrink-0 mt-0.5">18:30</span>
                  <span><strong>湖北冬の至高・天然鴨すき会席：</strong>脂の乗った天然真鴨の鴨鍋と近江牛ロースの陶板焼きを滋賀の銘酒「七本鎗」とともに。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-xs shrink-0 mt-0.5">20:30</span>
                  <span><strong>豊公園の夜間散策＆満天の星：</strong>初冬の澄んだ湖畔を散歩し、長浜城のライトアップと静かな波音に包まれる。</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/60 space-y-4">
              <div className="flex items-center gap-2 text-amber-800 font-bold text-base pb-2 border-b border-slate-200">
                <Clock className="w-5 h-5 text-amber-600" />
                【2日目】長浜城歴史探訪と竹生島クルーズ＆近江牛ランチ
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-xs shrink-0 mt-0.5">07:30</span>
                  <span><strong>朝風呂と湖国朝食：</strong>朝霧が立ち込める琵琶湖を眺めながら湯浴み。近江米と湖魚の佃煮が並ぶ朝食を味わう。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-xs shrink-0 mt-0.5">09:00</span>
                  <span><strong>長浜城歴史博物館の天守閣へ：</strong>豊臣秀吉公ゆかりの歴史展示を見学し、展望デッキから琵琶湖と伊吹山を一望。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-xs shrink-0 mt-0.5">10:15</span>
                  <span><strong>長浜港より竹生島クルーズ乗船：</strong>観光船でパワースポット竹生島へ。宝厳寺や都久夫須麻神社を参拝（往復約2時間）。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-xs shrink-0 mt-0.5">13:00</span>
                  <span><strong>近江牛ステーキランチ＆お土産購入：</strong>長浜駅前で近江牛ランチを堪能し、湖北の地酒や鮒ずしを購入して帰路へ。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Travel Tips & Highlights */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Travel Advice & Highlights</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の長浜・湖北旅行を満喫するための4大秘訣
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700 leading-relaxed">
            <div className="bg-amber-50/40 rounded-2xl p-5 border border-amber-100/60 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Utensils className="w-5 h-5 text-amber-600" />
                天然真鴨（マガモ）は11月15日以降の予約が必須
              </h3>
              <p className="leading-relaxed">
                法律で定められた狩猟期間の関係上、天然真鴨が提供されるのは毎年11月15日以降となります。希少な天然鴨を確実に味わうため、宿泊プランを予約する際は「天然真鴨使用」「鴨すきプラン」の記載を事前に確認しましょう。
              </p>
            </div>

            <div className="bg-amber-50/40 rounded-2xl p-5 border border-amber-100/60 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Waves className="w-5 h-5 text-amber-600" />
                太閤温泉の茶褐色湯はタオルへの色移りに注意
              </h3>
              <p className="leading-relaxed">
                長浜太閤温泉は鉄分が極めて濃厚なため、白地のフェイスタオルをお湯につけると赤茶色に染まることがあります。お気に入りのタオルは湯船につけず、宿の備え付けタオルを利用するのがスマートです。
              </p>
            </div>

            <div className="bg-amber-50/40 rounded-2xl p-5 border border-amber-100/60 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <ThermometerSun className="w-5 h-5 text-amber-600" />
                琵琶湖からの冷たい「湖風（うみかぜ）」対策
              </h3>
              <p className="leading-relaxed">
                初冬の長浜は湖面を渡る冷たい風が吹き抜けます。特に豊公園や長浜港、竹生島クルーズの甲板では体感温度が氷点下近くまで下がることがあるため、マフラーや手袋、防風アウターをしっかりと備えておきましょう。
              </p>
            </div>

            <div className="bg-amber-50/40 rounded-2xl p-5 border border-amber-100/60 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Wine className="w-5 h-5 text-amber-600" />
                湖北の銘酒「七本鎗」「冨田酒造」との絶品晩酌
              </h3>
              <p className="leading-relaxed">
                賤ヶ岳の戦いの七本槍に由来する木之本の老舗・冨田酒造の「七本鎗」。旨口で力強い酸を持つ純米酒は、濃厚な鴨鍋の出汁や霜降り近江牛の甘みと見事に調和し、食卓を極上のひとときに仕立て上げてくれます。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Frequently Asked Questions</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                長浜太閤温泉の初冬旅行に関するよくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-5 border border-slate-200/60 space-y-2">
                <h3 className="text-base font-bold text-slate-900 flex items-start gap-2">
                  <span className="text-amber-800 font-extrabold shrink-0">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Internal Links */}
        <section className="bg-gradient-to-br from-slate-900 to-amber-950 text-white rounded-3xl p-8 sm:p-10 space-y-6 shadow-md">
          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Explore More Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい！近畿・関西の冬美食＆名湯特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              琵琶湖畔の名湯やお隣の京都・有馬・兵庫の冬の味覚特集もぜひあわせてチェックしてください。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <Link 
              href="/winter-shiga-ogoto-onsen-biwako-omigyu-stay"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/15 transition-all text-xs space-y-2 block"
            >
              <span className="px-2 py-0.5 rounded bg-amber-500/40 text-amber-200 font-bold text-[10px]">雄琴・美肌の湯</span>
              <h3 className="font-bold text-white text-sm">おごと温泉・初冬琵琶湖レイクビューと極上近江牛の宿</h3>
              <p className="text-slate-300 text-[11px] line-clamp-2">開湯千二百年最澄ゆかりの美肌湯と近江牛霜降りステーキ。</p>
            </Link>

            <Link 
              href="/winter-kyoto-yunohana-onsen-unkai-botan-nabe-stay"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/15 transition-all text-xs space-y-2 block"
            >
              <span className="px-2 py-0.5 rounded bg-rose-500/40 text-rose-200 font-bold text-[10px]">湯の花・ぼたん鍋</span>
              <h3 className="font-bold text-white text-sm">京都湯の花温泉・初冬の朝霧雲海と名物ぼたん鍋・丹波牛の宿</h3>
              <p className="text-slate-300 text-[11px] line-clamp-2">京の奥座敷で味わう天然猪肉のぼたん鍋と静かな隠れ湯。</p>
            </Link>

            <Link 
              href="/winter-hyogo-arima-onsen-kinsen-kobe-beef-stay"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/15 transition-all text-xs space-y-2 block"
            >
              <span className="px-2 py-0.5 rounded bg-amber-500/40 text-amber-200 font-bold text-[10px]">有馬・金泉銀泉</span>
              <h3 className="font-bold text-white text-sm">有馬温泉・秀吉が愛した日本最古の金泉と神戸牛贅沢会席の宿</h3>
              <p className="text-slate-300 text-[11px] line-clamp-2">赤褐色の濃厚な金泉と無色透明の炭酸銀泉、極上神戸牛ステーキ。</p>
            </Link>

            <Link 
              href="/winter-hyogo-yumura-onsen-tajima-beef-matsuba-crab-stay"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/15 transition-all text-xs space-y-2 block"
            >
              <span className="px-2 py-0.5 rounded bg-emerald-500/40 text-emerald-200 font-bold text-[10px]">湯村・松葉ガニ＆但馬牛</span>
              <h3 className="font-bold text-white text-sm">湯村温泉・荒湯の初冬湯けむりと冬の松葉ガニ・但馬牛の宿</h3>
              <p className="text-slate-300 text-[11px] line-clamp-2">日本屈指の高温泉「荒湯」と本場松葉ガニの炭火焼き・但馬牛。</p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-shiga-nagahama-taiko-onsen-biwako-kamonabe-omigyu-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
