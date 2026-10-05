import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Fish, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Ship
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月広島・宮島温泉の世界遺産初冬絶景と旬解禁広島カキづくし会席】厳島神社大鳥居一望＆瀬戸内海オーシャンビュー露天の宿5選",
  description: "11月から12月にかけて、日本三景の一つにして世界遺産の島・宮島（厳島）は、紅葉谷の燃えるような紅葉が落ち着きを取り戻し、瀬戸内海の澄み切った青空と海上に浮かぶ大鳥居の荘厳な姿が際立つ初冬の静寂シーズンを迎えます。11月はまさに広島名物「牡蠣（カキ）」が身を大きく太らせ旨味を凝縮させる本格シーズンの開幕。香ばしい殻付き焼き牡蠣や濃厚な牡蠣の土手鍋、地元ブランド安芸牛に舌鼓を打ち、冷えた身体を瀬戸内海を望む展望露天風呂で温める贅沢な温泉宿5選を詳しく解説します。",
  keywords: '宮島 宿泊, 厳島神社 温泉 宿泊, 広島 温泉 11月 12月, 宮島グランドホテル有もと, ホテル宮島別荘, 錦水館, 岩惣, 安芸グランドホテル, 広島牡蠣 焼き牡蠣, 厳島神社 大鳥居, 宮島潮湯温泉',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-hiroshima-miyajima-onsen-kaki-oyster-seto-stay/"
  },
  openGraph: {
    title: "【11・12月広島・宮島温泉の世界遺産初冬絶景と旬解禁広島カキづくし会席】厳島神社大鳥居一望＆瀬戸内海オーシャンビュー露天の宿5選",
    description: "11月から12月にかけて、日本三景の一つにして世界遺産の島・宮島（厳島）は、紅葉谷の燃えるような紅葉が落ち着きを取り戻し、瀬戸内海の澄み切った青空と海上に浮かぶ大鳥居の荘厳な姿が際立つ初冬の静寂シーズンを迎えます。11月はまさに広島名物「牡蠣（カキ）」が身を大きく太らせ旨味を凝縮させる本格シーズンの開幕。香ばしい殻付き焼き牡蠣や濃厚な牡蠣の土手鍋、地元ブランド安芸牛に舌鼓を打ち、冷えた身体を瀬戸内海を望む展望露天風呂で温める贅沢な温泉宿5選を詳しく解説します。",
    url: 'https://croud-travel.com/winter-hiroshima-miyajima-onsen-kaki-oyster-seto-stay',
    siteName: 'クラドトラベル (Croud Travel)',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬の瀬戸内海と厳島神社大鳥居・宮島温泉の絶景'
      }
    ]
  }
};

const faqList = [
  {
    "q": "宮島・厳島神社の11月・12月の気候や気温、冬観光に適した服装は？",
    "a": "瀬戸内海に浮かぶ宮島は、瀬戸内式気候に属し年間を通じて比較的温暖で雨が少ないのが特徴です。11月の平均最高気温は15〜18℃、最低気温は8〜11℃前後で、日中は爽やかな秋晴れが広がり散策に最適です。12月に入ると最高気温は11〜13℃、最低気温は3〜6℃程度まで冷え込み、海上からの海風が吹くと体感温度がぐっと下がります。特に早朝の神社参拝や、夜間の大鳥居ライトアップ鑑賞、ナイトクルーズ船に乗船する際は冷え込みますので、防風性のあるロングコートやダウンジャケット、マフラー、手袋などの防寒着を必ず用意してください。"
  },
  {
    "q": "11月・12月の宮島で味わえる「広島牡蠣（カキ）」の美味しさの理由は？",
    "a": "広島湾は波が穏やかで、太田川から豊富なプランクトンが流れ込むため、日本一の牡蠣の生産量を誇ります。広島の牡蠣漁は例年10月に解禁されますが、海水温が下がる11月から12月にかけては、身が急激に太ってグリコーゲンやタウリンなどの旨味成分をたっぷり蓄えます。この時期の牡蠣は身がふっくらと大粒で、加熱しても縮みにくいのが特徴。炭火で香ばしく焼き上げる「殻付き焼き牡蠣」、濃厚な合わせ味噌で煮込む伝統の「牡蠣の土手鍋」、サクサクの「牡蠣フライ」、出汁が染み込んだ「牡蠣釜飯」など、至高の味わいを楽しめます。"
  },
  {
    "q": "宮島島内に宿泊する最大のメリットは何ですか？",
    "a": "宮島は日帰り観光客が非常に多い観光地ですが、島内に宿泊することで「宮島の真の魅力」である静寂を独占できます。夕方に最終フェリーで日帰り客が去った後、夜の静まり返った海辺にライトアップされて黄金色に浮かび上がる大鳥居の荘厳な姿を鑑賞できます。また、翌朝の澄み切った朝日の中で行う厳島神社への早朝参拝は、人の気配がなく波音と鳥の声だけが響き、息を呑むほど神聖な空気に包まれます。この贅沢な時間体験こそが島内宿泊の醍醐味です。"
  },
  {
    "q": "広島駅や広島空港から宮島へのアクセス・フェリーの運行状況は？",
    "a": "広島駅からはJR山陽本線で「宮島口駅」まで約25分（または広島電鉄で約1時間15分）。宮島口駅から徒歩約5分の宮島口桟橋より、JR西日本宮島フェリーまたは宮島松大汽船に乗船し、約10分で宮島桟橋に到着します。日中は約10〜15分間隔で頻繁に運航されています。JRフェリーを利用すると、昼間の便は大鳥居に接近する「大鳥居便」を運航しており、海上からの鳥居の撮影に最適です。車の場合は宮島口周辺の駐車場に停めてフェリーで渡るのが一般的です（島内は道が狭く鹿も多いため車両乗り入れは非推奨）。"
  },
  {
    "q": "初冬の宮島で外せないおすすめの観光スポットや見どころは？",
    "a": "まずは世界遺産「厳島神社」と国宝の社殿群。潮の満ち引きによって海に浮かぶ社殿の姿と、干潮時に大鳥居の足元まで歩いて行ける姿の二つの表情が楽しめます。また、神社の背後に広がる「紅葉谷公園」では初冬の渓谷美を散策できます。時間と体力があれば「宮島ロープウェー」で霊峰・弥山（みせん）の山頂へ。初冬の澄んだ空気のもと、瀬戸内海の多島美と遠く四国の山々まで見渡す360度の大パノラマは必見です。参拝後は表参道商店街で揚げもみじや焼き牡蠣の食べ歩きも楽しめます。"
  }
];

export default function HiroshimaMiyajimaWinterFeature() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-hiroshima-miyajima-onsen-kaki-oyster-seto-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/winter-hiroshima-miyajima-onsen-kaki-oyster-seto-stay"
        },
        "headline": "【11・12月広島・宮島温泉の世界遺産初冬絶景と旬解禁広島カキづくし会席】厳島神社大鳥居一望＆瀬戸内海オーシャンビュー露天の宿5選",
        "description": "11月から12月にかけて、日本三景の一つにして世界遺産の島・宮島（厳島）は、紅葉谷の燃えるような紅葉が落ち着きを取り戻し、瀬戸内海の澄み切った青空と海上に浮かぶ大鳥居の荘厳な姿が際立つ初冬の静寂シーズンを迎えます。11月はまさに広島名物「牡蠣（カキ）」が身を大きく太らせ旨味を凝縮させる本格シーズンの開幕。香ばしい殻付き焼き牡蠣や濃厚な牡蠣の土手鍋、地元ブランド安芸牛に舌鼓を打ち、冷えた身体を瀬戸内海を望む展望露天風呂で温める贅沢な温泉宿5選を詳しく解説します。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "2026-09-28T11:00:00+09:00",
        "dateModified": "2026-09-28T11:00:00+09:00",
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
          "name": "Croud Travel 瀬戸内・世界遺産紀行取材班"
        },
        "inLanguage": "ja"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.com/winter-hiroshima-miyajima-onsen-kaki-oyster-seto-stay#breadcrumb",
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
            "name": "広島・宮島温泉 厳島神社初冬絶景と広島カキづくしの宿",
            "item": "https://croud-travel.com/winter-hiroshima-miyajima-onsen-kaki-oyster-seto-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/winter-hiroshima-miyajima-onsen-kaki-oyster-seto-stay#faq",
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
              name: "宮島グランドホテル　有もと",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/18848/18848.jpg",
              rating: 4.56,
              reviews: 1293,
              price: "¥28,500〜",
              access: "宮島口桟橋よりフェリーで１０分～宮島桟橋よりマイクロバスにて送迎",
              special: "すべてはお客様の満足と笑顔のために。宮島の歴史とともに時を重ねる、世界遺産「厳島神社」に最も近い宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18848%2F18848.html",
              story: "世界遺産・厳島神社まで徒歩わずか3分という島内屈指の至高の立地に建ち、江戸初期の創業から400余年の歴史を誇る名門「宮島グランドホテル 有もと」。歴史ある老舗でありながら、数寄屋造りの伝統美と現代のリゾートデザインが融合した洗練された館内空間が広がります。大浴場「潮湯温泉」では、宮島の清らかな湯に浸かりながら旅の疲れを優しく解きほぐすことができます。有もとの真骨頂は料理長が素材を吟味した極上の月替わり会席。11月・12月には、大粒の広島産牡蠣を使った焼き牡蠣や牡蠣鍋、宮島名物の穴子料理、そして広島牛のステーキなど、瀬戸内の山海の恵みが贅を尽くして振る舞われます。早朝や夜間の大鳥居参拝にも最も便利な特等席の宿です。",
              roomTip: "厳島神社の杜や千畳閣を望むマウントビュー客室または温泉露天風呂付きモダン和洋室。観光客のいない早朝に鳥居へ散歩に出かける特別な滞在が叶います。",
              gourmetTip: "「厳選・冬の宮島牡蠣会席」。プリプリに太った殻付き焼き牡蠣、自家製味噌の牡蠣土手小鍋、広島牛ロース陶板焼き、ふっくら炊き上げた牡蠣釜飯。",
              highlights: [
                "厳島神社徒歩3分の最高立地＆創業400年の格式と宮島潮湯温泉大浴場での寛ぎ",
                "大粒広島牡蠣の焼き・鍋・釜飯フルコース＆広島牛ロース陶板焼きを個室で堪能",
                "観光客の少ない早朝・夜間の大鳥居参拝に最適＆心行き届いた伝統のおもてなし"
              ]
            },
            {
              id: 2,
              name: "ホテル宮島別荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/161276/161276.jpg",
              rating: 4.54,
              reviews: 515,
              price: "¥23,100〜",
              access: "宮島口駅よりフェリーで約10分。宮島桟橋より徒歩1分",
              special: "朝ごはんフェスティバル2019中国エリア1位！【島旨フレンチトースト】",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F161276%2F161276.html",
              story: "宮島桟橋から徒歩わずか1分、海を一望するウォーターフロントに位置し、大人の上質な島時間を提案するモダンブティックホテル「ホテル宮島別荘」。館内は全館畳敷きで素足のまま心地よく過ごせ、随所に宮島伝統の木工クラフトが配されています。最上階に設けられた展望大浴場「湯の里」は、全国的にも珍しい畳敷きの浴室となっており、滑りにくく温かな感触のなか、大きな窓越しに瀬戸内海を行き交うフェリーや対岸の街明かりを眺望できます。夕食はイタリアンの巨匠が監修した「地産地消ビュッフェ」。目の前で焼き上げる広島牛ステーキや、新鮮な広島牡蠣のアヒージョ、地元契約農家の冬野菜を、厳選ワインとともに楽しめます。",
              roomTip: "海を一望する「海町町家」ツインルームまたは町屋風ベッドルーム。窓辺のソファに身を委ね、初冬の静穏な瀬戸内海の夕景をのんびり観賞。",
              gourmetTip: "「冬の宮島別荘ビュッフェディナー」。シェフが鉄板で焼く広島牛、殻付き牡蠣の白ワイン蒸しやグラタン、宮島名物あなごご飯、手作りスイーツ。",
              highlights: [
                "宮島桟橋徒歩1分の好立地＆全国的にも希少な畳敷きの展望大浴場「湯の里」",
                "イタリアン巨匠監修の地産地消ビュッフェ＆広島牛鉄板焼きと殻付き牡蠣グラタン",
                "全館素足で過ごせる畳敷きモダン空間＆大人のためのワインフリーフローと読書時間"
              ]
            },
            {
              id: 3,
              name: "宮島潮湯温泉　錦水館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/6271/6271.jpg",
              rating: 4.69,
              reviews: 1060,
              price: "¥29,700〜",
              access: "宮島口駅よりフェリーで約10分。宮島桟橋より徒歩5分",
              special: "★2025年、温泉付スイートOPEN！●ルーフトップテラス・半露天風呂付客室・お部屋食プランも人気",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6271%2F6271.html",
              story: "創業110余年の伝統を誇り、表参道商店街に面しながらも瀬戸内海と大鳥居を望む絶景ロケーションに佇む老舗名旅館「宮島潮湯温泉 錦水館（きんすいかん）」。地下深層から湧出する宮島唯一の自家源泉「潮湯温泉」は、海水成分と豊富なミネラルを含み、湯上がりに肌がしっとりと潤う極上の美肌湯です。シーサイドテラスやブックラウンジなど、大人が静かに寛げるパブリックスペースも充実。夕食はお食事処にて、宮島が誇る冬の二大味覚である「広島牡蠣」と「厳選広島牛」を主役に据えた贅沢会席。生牡蠣（時期による）や焼き牡蠣、穴子の薄造りなど、卓越した板前の技が光る美食に心奪われます。",
              roomTip: "海側に面した半露天風呂付き和洋スイートまたは大鳥居を望む絶景和室。暮れなずむ宮島の海とライトアップされた大鳥居のシルエットを部屋から独占。",
              gourmetTip: "「錦水館名物・冬の広島味覚饗宴会席」。大粒牡蠣の西京味噌焼き、広島牛の低温ロースト、脂の乗った瀬戸内真鯛のお造り、穴子と牡蠣の贅沢食べ比べ。",
              highlights: [
                "創業110余年の名門旅館＆地下深層から湧出する宮島唯一の自家源泉「潮湯温泉」",
                "大鳥居を望む絶景客室＆冬の二大巨頭「広島牡蠣」と「厳選広島牛」を贅沢に食べ比べ",
                "海と大鳥居を見晴らすシーサイドテラス＆上質な大人のリトリートに選ばれる宿"
              ]
            },
            {
              id: 4,
              name: "みやじまの宿　岩惣",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/145390/145390.jpg",
              rating: 4.45,
              reviews: 156,
              price: "¥31,900〜",
              access: "宮島桟橋より徒歩にて約１５分。無料送迎有り（要ご乗船時連絡）",
              special: "創業以来160年もの歴史と伝統を誇る、多くの著名人に愛された老舗旅館。自慢の温泉とお料理を心ゆくまで",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F145390%2F145390.html",
              story: "安政元年（1854年）創業、皇室や伊藤博文など多くの歴史上の要人や文豪が逗留した、宮島を代表する最高峰の格式を誇る純和風旅館「みやじまの宿 岩惣（いわそう）」。紅葉谷公園の清らかな渓流沿いに佇み、創業当時の面影を残す離れや本館の佇まいは一幅の絵画のような風情を醸し出します。初冬の澄んだ空気の中、もみじの枯葉が水面に浮かぶ渓谷を眺めながら入る若宮温泉の湯浴みはまさに贅の極み。料理は旬の素材の持ち味を極限まで引き出した正統派の京風会席。初冬の広島湾で獲れた極上牡蠣の吸い物や焼き物、霜降り広島牛の炭火焼きなど、器や盛り付けに至るまで日本の美学が凝縮された食体験が待っています。",
              roomTip: "歴史ある離れ客室または紅葉谷川のせせらぎを眼下に望む本館和室。静寂に包まれた森の息吹を感じながら、俗世を忘れて過ごす大人の隠れ家。",
              gourmetTip: "「岩惣伝統・初冬の特選会席料理」。出汁の旨味が染み渡る牡蠣の椀物、厳選和牛の炭火焼き、瀬戸内産寒鰆の幽庵焼き、季節の炊き込みご飯。",
              highlights: [
                "安政元年創業の皇室御用達名旅館＆紅葉谷公園の清流沿いに佇む絵画のような離れ建築",
                "日本の美意識が息づく本格京風会席＆初冬の広島湾で獲れた極上牡蠣と和牛の炭火焼き",
                "宮島随一の静寂と歴史ロマン＆皇族や歴代文豪が愛した至高のプライベートステイ"
              ]
            },
            {
              id: 5,
              name: "安芸グランドホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7754/7754.jpg",
              rating: 4.00,
              reviews: 2068,
              price: "¥10,750〜",
              access: "宮島口駅(JR・広電)からタクシーで約3分。JR宮島口駅から無料送迎バス有り《30分間隔／8時～14時 15時～19時》",
              special: "世界遺産「厳島神社」を対岸に望む天然温泉のリゾートホテル。ゆとりあるお部屋とパブリックスペースが人気",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7754%2F7754.html",
              story: "宮島を対岸から一望する絶景の高台に建ち、大鳥居と厳島神社を真正面に捉えるパノラマビューが自慢の大型リゾート「安芸グランドホテル」。宮島島内ではなく宮島口側に位置するためアクセスが至便で、ホテル専用桟橋から夜間に運航される「宮島ナイトクルーズ船（大鳥居接近遊覧）」は宿泊者限定の大人気アクティビティです。館内には海を望む開放的な展望露天風呂や大浴場が完備され、冬の夜空に浮かび上がる宮島のシルエットを眺めながら温まることができます。夕食は和食会席または本格フランス料理から選択可能。冬の広島牡蠣を使ったカキフライやグラタン、広島牛のサーロインなど多彩なメニューが揃います。",
              roomTip: "宮島を正面に望む海側スーペリアツインまたは露天風呂付き客室。夜には対岸のライトアップされた大鳥居の荘厳な姿を部屋の窓から一望できます。",
              gourmetTip: "「瀬戸内冬の味覚会席＆ナイトクルーズプラン」。大粒広島牡蠣の食べ比べ（焼き・フライ・小鍋）、広島牛の石焼きステーキ、新鮮な瀬戸内地魚のお造り。",
              highlights: [
                "宮島対岸の高台から大鳥居を一望＆ホテル専用桟橋から出航する大人気ナイトクルーズ",
                "海を望む開放的な展望露天風呂＆冬の広島牡蠣会席またはフレンチディナーを選択可能",
                "コスパ抜群のリゾートステイ＆宮島観光と広島市内観光の両方に便利な絶好の拠点"
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
          alt="海上に浮かぶ厳島神社大鳥居と初冬の宮島"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/20 backdrop-blur-md border border-red-400/30 text-red-300 text-xs sm:text-sm font-semibold">
            <Landmark className="w-4 h-4" />
            11月・12月 世界遺産初冬絶景＆本場広島牡蠣特集｜広島・宮島温泉
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            世界遺産初冬絶景と旬解禁広島カキづくし会席<br className="hidden sm:inline" />
            厳島神社大鳥居一望＆瀬戸内海オーシャンビュー露天の宿5選
          </h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            観光客が去った夜と朝の静謐な神域。海に浮かぶ荘厳な大鳥居のシルエットを眺め、11月に身を太らせる本場広島の殻付き焼き牡蠣と安芸牛、宮島潮湯温泉に癒やされる至福の島旅。
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300 pt-2">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-red-400" /> 11月〜12月が牡蠣の本格旬</span>
            <span className="flex items-center gap-1"><Waves className="w-4 h-4 text-red-400" /> ミネラル豊富な宮島潮湯温泉</span>
            <span className="flex items-center gap-1"><Utensils className="w-4 h-4 text-red-400" /> 焼き牡蠣・土手鍋＆広島牛</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        
        {/* Section 1: Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-red-100">
            <div className="p-2.5 rounded-2xl bg-red-50 text-red-800">
              <Sun className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-red-800 uppercase tracking-widest">Sacred Heritage & Winter Tastes</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の澄んだ瀬戸内海と至高の牡蠣｜11月・12月に宮島温泉を訪れるべき理由
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              日本三景の一つに数えられ、島全体が神の宿る神域として崇められてきた安芸の宮島（厳島）。平安時代の末期に平清盛が現在の海上に浮かぶ壮麗な社殿を造営して以来、800年以上にわたり人々の信仰と憧憬を集め続けています。宮島の観光といえば秋の紅葉狩りが全国的に知られていますが、実は旅情を深く味わいたい大人にとってのベストシーズンは、紅葉の喧騒が落ち着きを見せる「11月下旬から12月」です。初冬の瀬戸内海は晴天の日が多く、大気が澄み渡るため、青い海と空を背景に朱塗りの大鳥居が息を呑むような鮮やかさで浮かび上がります。
            </p>
            <p>
              そして何より、11月から12月は日本一の生産量を誇る「広島牡蠣」が待ちに待った最盛期を迎える季節です。夏から秋にかけて栄養を蓄え、海水温が下がる初冬にグリコーゲンを蓄えて丸々と太った牡蠣は、殻いっぱいにぷっくりと膨らみ、濃厚な磯の香りとミルクのようなコクを放ちます。炭火で殻ごと豪快に焼き上げる「焼き牡蠣」は、口に運んだ瞬間にアツアツの旨味エキスが弾け、特製味噌でグツグツ煮込む伝統の「牡蠣の土手鍋」や、香ばしい「牡蠣釜飯」は冬の寒さを一瞬で忘れさせてくれる極上のごちそうです。
            </p>
            <p>
              さらに、日帰り観光では決して体験できないのが「宿泊者だけの特別な時間」です。最終の定期フェリーが去った夕暮れ以降、宮島の街は静寂に包まれ、ライトアップされた海上の大鳥居が水墨画のように幻想的な輝きを放ちます。翌朝は澄み切った朝日を浴びながら、静まり返った厳島神社の回廊をゆったりと歩く早朝参拝。海を望む宮島潮湯温泉の柔らかな湯に浸かりながら、世界遺産の島でしか味わえない贅沢なひとときを過ごしてみてはいかがでしょうか。
            </p>
          </div>
        </section>

        {/* Section 1.5: Detailed Winter Landscape & Tides */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-red-100">
            <div className="p-2.5 rounded-2xl bg-red-50 text-red-800">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-red-800 uppercase tracking-widest">Tides & Timeless Wonder</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                潮の満ち引きが描く社殿の二面性と初冬の澄んだ瀬戸内ブルー
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              厳島神社が世界遺産として称賛される最大の理由は、潮の干満差が最大約4mにも達する遠浅の湾に、海上に浮かぶように社殿を築いた建築の独創性にあります。満潮時には、朱塗りの回廊の下まで海水が満ち、あたかも極楽浄土の宮殿が海原に浮かんでいるかのような優美な光景が現れます。一方、干潮時には水が完全に引き、大鳥居の足元まで砂浜を歩いて近づくことが可能。樹齢数百年の巨大なクスノキの主柱に直に触れ、その圧倒的な存在感を体感できます。
            </p>
            <p>
              初冬の11月・12月は、夏場のような湿度による霞がなく、瀬戸内海の青さと弥山（標高535m）の原生林の深緑、そして朱色の社殿のコントラストが一年で最も鮮明に際立ちます。日没後、周囲が暗闇に包まれると、大鳥居と社殿が強力なサーチライトに照らし出され、波間に揺れる黄金色のリフレクションが訪れる旅人を幽玄の美の世界へと誘います。
            </p>
          </div>
        </section>

        {/* Section 2: Hotel Cards */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-red-800 uppercase tracking-widest">Iconic Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              【11・12月厳選】宮島温泉の美食と大鳥居絶景を味わう名宿5選
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto">
              厳島神社に隣接する格式高い老舗旅館から、自家源泉の潮湯温泉、対岸から大鳥居を望むナイトクルーズ付きリゾートまで厳選。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {hotels.map((h) => (
              <div 
                key={h.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow flex flex-col md:flex-row"
              >
                <div className="relative w-full md:w-2/5 h-64 md:h-auto min-h-[260px] bg-slate-100">
                  <Image
                    src={h.img}
                    alt={h.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    {h.rating} ({h.reviews}件)
                  </div>
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold">
                    No.{h.id} おすすめ宿
                  </div>
                </div>

                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                        {h.name}
                      </h3>
                      <span className="text-lg sm:text-xl font-extrabold text-red-800">
                        {h.price} <span className="text-xs font-normal text-slate-500">/人〜</span>
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-red-600 shrink-0" />
                      {h.access}
                    </p>

                    <p className="text-sm text-slate-700 leading-relaxed">
                      {h.story}
                    </p>

                    <div className="bg-red-50/60 rounded-2xl p-4 border border-red-100/80 space-y-2 text-xs sm:text-sm">
                      <div className="flex items-start gap-2 text-slate-700">
                        <Eye className="w-4 h-4 text-red-800 shrink-0 mt-0.5" />
                        <div><strong className="text-slate-900">客室の選び方：</strong>{h.roomTip}</div>
                      </div>
                      <div className="flex items-start gap-2 text-slate-700">
                        <Utensils className="w-4 h-4 text-red-800 shrink-0 mt-0.5" />
                        <div><strong className="text-slate-900">冬の極上グルメ：</strong>{h.gourmetTip}</div>
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      {h.highlights.map((hl: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-slate-500 font-medium">
                      ※表示料金は楽天トラベルの最新目安料金です
                    </span>
                    <a
                      href={h.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-sm shadow-md hover:from-red-700 hover:to-red-800 transition-all"
                    >
                      楽天トラベルでプランを見る
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
          <div className="flex items-center gap-3 pb-3 border-b border-red-100">
            <div className="p-2.5 rounded-2xl bg-red-50 text-red-800">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-red-800 uppercase tracking-widest">Gourmet & Thermal Science</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                広島湾の太田川汽水域が育む大粒牡蠣と宮島潮湯温泉のミネラル
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              広島湾が世界一の牡蠣の宝庫と呼ばれる所以は、中国山地から流れ込む一級河川・太田川の存在にあります。豊かな広葉樹林の腐葉土を通った清流が、鉄分やケイ素など膨大な植物プランクトンの栄養源を湾内へ供給。塩分濃度のバランスが絶妙な汽水域で育つ宮島・大野瀬戸の牡蠣は、殻に対して身が非常に大きく成長します。11月から12月は水温低下によりグリコーゲンが身に凝縮し、噛みしめると濃厚な甘みと潮の香りが口内を満たします。
            </p>
            <p>
              また、宮島で湧出する「潮湯温泉」は、地下深層から湧き出る海水成分を含んだ貴重な鉱泉。海水由来のナトリウムやマグネシウム、カルシウムなどのミネラルが肌を滑らかに整え、保温効果を高めます。冬風にさらされた散策後の身体を、瀬戸内海の恵みそのものである潮湯が優しく解きほぐし、芯から温めてくれます。
            </p>
          </div>
        </section>

        {/* Section 3: Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-8">
          <div className="flex items-center gap-3 pb-3 border-b border-red-100">
            <div className="p-2.5 rounded-2xl bg-red-50 text-red-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-red-800 uppercase tracking-widest">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                【1泊2日モデルコース】初冬の宮島島内ステイ・厳島神社夜間参拝と牡蠣づくしの休日
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700 leading-relaxed">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/60 space-y-4">
              <div className="flex items-center gap-2 text-red-800 font-bold text-base pb-2 border-b border-slate-200">
                <Clock className="w-5 h-5 text-red-600" />
                【1日目】フェリーで神の島へ・ライトアップ大鳥居と牡蠣会席
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-red-100 text-red-800 font-bold text-xs shrink-0 mt-0.5">12:30</span>
                  <span><strong>JR宮島口駅到着＆ランチ：</strong>駅前の名店で名物「あなごめし」を堪能。JRフェリー（大鳥居接近便）に乗船して宮島へ。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-red-100 text-red-800 font-bold text-xs shrink-0 mt-0.5">14:00</span>
                  <span><strong>表参道商店街散策＆宿へ：</strong>名物の揚げもみじを頬張りながら宿へチェックイン。荷物を置いて一息。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-red-100 text-red-800 font-bold text-xs shrink-0 mt-0.5">16:00</span>
                  <span><strong>宮島潮湯温泉で温まり：</strong>瀬戸内海の夕景を眺めながらミネラル豊富な温泉に浸かり、初冬の冷えた身体を解きほぐす。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-red-100 text-red-800 font-bold text-xs shrink-0 mt-0.5">18:30</span>
                  <span><strong>極上の広島牡蠣会席：</strong>殻付き焼き牡蠣、牡蠣の土手鍋、広島牛ロースステーキを広島の銘酒「賀茂鶴」とともに堪能。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-red-100 text-red-800 font-bold text-xs shrink-0 mt-0.5">20:30</span>
                  <span><strong>大鳥居ナイトウォーク：</strong>日帰り客の去った静寂の砂浜へ。黄金色に照らし出された海上の大鳥居の神々しさに息を呑む。</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/60 space-y-4">
              <div className="flex items-center gap-2 text-red-800 font-bold text-base pb-2 border-b border-slate-200">
                <Clock className="w-5 h-5 text-red-600" />
                【2日目】清々しい厳島神社早朝参拝と弥山パノラマ絶景
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-red-100 text-red-800 font-bold text-xs shrink-0 mt-0.5">07:00</span>
                  <span><strong>厳島神社 早朝参拝：</strong>開門と同時に境内へ。観光客のいない清浄な空気の中、朱塗りの回廊と穏やかな波音を独占。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-red-100 text-red-800 font-bold text-xs shrink-0 mt-0.5">08:15</span>
                  <span><strong>宿で朝食＆チェックアウト：</strong>瀬戸内の焼き魚や温かいお粥を味わい、荷物を預けて観光へ出発。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-red-100 text-red-800 font-bold text-xs shrink-0 mt-0.5">09:30</span>
                  <span><strong>宮島ロープウェーで霊峰・弥山へ：</strong>紅葉谷公園を抜けてロープウェーで山頂へ。瀬戸内海360度の大パノラマと奇岩群を散策。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-red-100 text-red-800 font-bold text-xs shrink-0 mt-0.5">12:30</span>
                  <span><strong>宮島水族館または町家カフェ：</strong>歴史ある町並み（町家通り）でお洒落なカフェ巡りとお土産のしゃもじを購入。フェリーで宮島口へ。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Seasonal Highlights */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-red-100">
            <div className="p-2.5 rounded-2xl bg-red-50 text-red-800">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-red-800 uppercase tracking-widest">Local Travel Tips</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の宮島観光を深く楽しむための3つの知恵
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-slate-700">
            <div className="bg-red-50/40 rounded-2xl p-5 border border-red-100/60 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Waves className="w-5 h-5 text-red-600" />
                満潮・干潮の潮汐表チェック
              </h3>
              <p className="leading-relaxed">
                宮島観光の鍵は潮の満ち引き。満潮時には社殿が海に浮かぶ優雅な姿を、干潮時には大鳥居の真下まで歩いて触れる体験ができます。潮汐表を事前に確認して訪れましょう。
              </p>
            </div>

            <div className="bg-red-50/40 rounded-2xl p-5 border border-red-100/60 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Ship className="w-5 h-5 text-red-600" />
                海上ナイトクルーズの感動
              </h3>
              <p className="leading-relaxed">
                小型遊覧船でライトアップされた大鳥居をくぐるナイトクルーズは宿泊者ならではの特権。夜の海から仰ぎ見る大鳥居の迫力は一生の思い出に残る圧倒的な体験です。
              </p>
            </div>

            <div className="bg-red-50/40 rounded-2xl p-5 border border-red-100/60 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Wine className="w-5 h-5 text-red-600" />
                広島地酒「吟醸酒発祥の地」
              </h3>
              <p className="leading-relaxed">
                広島県西条は日本三大銘醸地の一つ。軟水仕込みによるまろやかで芳醇な地酒は、濃厚な牡蠣の土手鍋や甘みのある穴子料理と最高の相乗効果を生み出します。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-red-100">
            <div className="p-2.5 rounded-2xl bg-red-50 text-red-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-red-800 uppercase tracking-widest">Frequently Asked Questions</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                宮島・厳島神社の初冬旅行に関するよくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-5 border border-slate-200/60 space-y-2">
                <h3 className="text-base font-bold text-slate-900 flex items-start gap-2">
                  <span className="text-red-800 font-extrabold shrink-0">Q.</span>
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
        <section className="bg-gradient-to-br from-slate-900 to-red-950 text-white rounded-3xl p-8 sm:p-10 space-y-6 shadow-md">
          <div className="space-y-2">
            <span className="text-xs font-bold text-red-400 uppercase tracking-widest">Explore More Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい！中国・四国・瀬戸内の冬美食＆温泉特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              瀬戸内海沿岸の極上ふぐ・牡蠣・鯛・歴史情緒を巡る、厳選特集記事もぜひチェックしてください。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <Link 
              href="/winter-yamaguchi-shimonoseki-kawatana-onsen-torafugu-kawarasoba-stay"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/15 transition-all text-xs space-y-2 block"
            >
              <span className="px-2 py-0.5 rounded bg-amber-500/40 text-amber-200 font-bold text-[10px]">下関・本場とらふぐ</span>
              <h3 className="font-bold text-white text-sm">川棚温泉・下関本場とらふぐフルコースと瓦そばの宿</h3>
              <p className="text-slate-300 text-[11px] line-clamp-2">本場下関のとらふぐ会席と名物瓦そばを味わう山陰の名湯。</p>
            </Link>

            <Link 
              href="/winter-ehime-dogo-onsen-taimeshi-heritage-stay"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/15 transition-all text-xs space-y-2 block"
            >
              <span className="px-2 py-0.5 rounded bg-rose-500/40 text-rose-200 font-bold text-[10px]">道後・日本最古の湯</span>
              <h3 className="font-bold text-white text-sm">道後温泉・本館保存修理完了と宇和島鯛めし・伊予牛の宿</h3>
              <p className="text-slate-300 text-[11px] line-clamp-2">夏目漱石ゆかりの坊っちゃん湯と冬の瀬戸内真鯛づくし。</p>
            </Link>

            <Link 
              href="/winter-hyogo-ako-onsen-sakoshi-oyster-infinity-stay"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/15 transition-all text-xs space-y-2 block"
            >
              <span className="px-2 py-0.5 rounded bg-emerald-500/40 text-emerald-200 font-bold text-[10px]">赤穂・坂越かき</span>
              <h3 className="font-bold text-white text-sm">赤穂温泉・坂越牡蠣と瀬戸内インフィニティ絶景露天の宿</h3>
              <p className="text-slate-300 text-[11px] line-clamp-2">名水が注ぐ坂越湾で育つ甘み豊かな牡蠣と海と一体化する露天。</p>
            </Link>

            <Link 
              href="/winter-tokushima-naruto-onsen-uzushio-naruto-tai-stay"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/15 transition-all text-xs space-y-2 block"
            >
              <span className="px-2 py-0.5 rounded bg-sky-500/40 text-sky-200 font-bold text-[10px]">鳴門・冬の渦潮＆鳴門鯛</span>
              <h3 className="font-bold text-white text-sm">鳴門温泉・冬の鳴門海峡絶景と鳴門鯛・阿波尾鶏の宿</h3>
              <p className="text-slate-300 text-[11px] line-clamp-2">渦潮が巻く鳴門海峡のパノラマ露天と脂の乗った寒鯛会席。</p>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
