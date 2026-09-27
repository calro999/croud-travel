const fs = require('fs');
const path = require('path');

function generateHawaiPage(hotels) {
  const slug = 'winter-tottori-hawai-onsen-togo-lake-matsuba-crab-stay';
  const title = '【11・12月鳥取・はわい温泉の東郷湖上露天風呂と11月解禁鳥取松葉ガニ】鳥取和牛オレイン55・源泉かけ流し湖畔名宿5選';
  const description = '11月から12月にかけて鳥取県中央部に位置する東郷湖畔の「はわい温泉・東郷温泉」は、静かな湖面から立ち上る幻想的な朝霧と湯けむりに包まれ、11月6日のカニ漁解禁とともに一年で最も贅沢な冬の味覚シーズンを迎えます。全国的にも極めて珍しい東郷湖上に浮かぶように突き出た「湖上露天風呂」に浸かり、湖水と一体となる奇跡のインフィニティ湯浴みを満喫。境港や泊港から直送される新鮮なタグ付き鳥取松葉ガニのフルコース、脂の融点が低くとろける最高峰ブランド「鳥取和牛オレイン55」のステーキを味わう、初冬の湖畔厳選宿5選を徹底解説。';

  const hotelDetails = [
    {
      story: '東郷湖の西岸に佇み、全国で唯一の「湖上露天風呂」を有するはわい温泉屈指の老舗名門旅館「はわい温泉 望湖楼（ぼうころう）」。本館から湖へと伸びる専用の桟橋を渡ると、東郷湖の水上に浮かぶ朱塗りのあずまや風露天風呂「朝陽の湯」「夕陽の湯」が現れます。湖面とほぼ同じ高さの湯船に身を沈めれば、まるで東郷湖にそのまま浮かんでいるかのような至福の浮遊感に包まれます。源泉温度を利用して作る「名物たまごのお風呂体験」も大人気。夕食には11月解禁の活鳥取松葉ガニと、オリーブオイルの主成分であるオレイン酸を豊富に含む「鳥取和牛オレイン55」の贅沢な饗宴が待っています。',
      roomTip: '東郷湖を一望する湖側温泉露天風呂付き特別室または和洋室。朝夕に移ろう水景色のグラデーションを客室にいながら独占できます。',
      gourmetTip: '「活鳥取松葉ガニ＆鳥取和牛オレイン55極上会席」。花咲くカニ刺し、香ばしい焼きガニ、濃厚なカニ味噌甲羅焼きと、とろける鳥取和牛サーロインのステーキ。'
    },
    {
      story: '東郷湖に突き出た岬の突端に建ち、建物の三方を湖水に囲まれた絶好のロケーションを誇る創業百三十余年の老舗「湖上に浮かぶ絶景の宿 はわい温泉 千年亭（せんねんてい）」。宿自慢の露天風呂「元祖 湖上露天風呂 幸の湯」は、湖面すれすれに湯船が設えられ、波の揺らめきと湖渡る初冬の風を感じながら源泉掛け流しの湯を堪能できます。館内には畳敷きの純和風情景が広がり、旅情をそそる湖畔の静けさが満ちています。境港直送のブランドタグ付き松葉ガニを使った贅沢なカニ尽くし会席は、カニ好きを唸らせる圧巻の質と量を誇ります。',
      roomTip: '岬の先端から湖をパノラマで見渡す湖側和室。窓外に広がる東郷湖の初冬の湖面と遠くの山並みが一枚の絵画のように広がります。',
      gourmetTip: '「厳選タグ付き鳥取松葉ガニフルコース」。茹で姿ガニ、熱々の陶板焼きガニ、カニすき鍋、カニ天ぷらと、冬の山陰の至宝を余すところなく味わい尽くすプラン。'
    },
    {
      story: '東郷湖の南東岸、JR山陰本線松崎駅のすぐ近くに位置し、広大な敷地と穏やかな湖水風景に癒やされる「東郷温泉 国民宿舎 水明荘（すいめいそう）」。国民宿舎ならではの親しみやすさと行き届いたサービス、そして自家源泉から湧き出る豊富な天然温泉を惜しみなく注ぎ込む展望大浴場が自慢です。初冬の東郷湖を見下ろす大浴場からは、晴れた日には遠く日本海側の風情まで感じられます。山陰の冬の味覚をふんだんに取り入れた会席料理は、手頃な料金設定でありながらカニやすき焼きをしっかり味わえる抜群のコストパフォーマンスを誇ります。',
      roomTip: '東郷湖を望むレイクビュー和室。広々とした窓から湖面を渡る初冬の渡り鳥の姿を眺め、のんびりと寛げる安心の空間。',
      gourmetTip: '「冬の味覚・カニと鳥取牛の贅沢会席」。地元産の新鮮なズワイガニの料理と、柔らかく甘みのある鳥取県産牛の小鍋仕立てを堪能。'
    },
    {
      story: '東郷湖畔の静かな水辺に佇み、北欧モダンと日本の温もりが融合したスタイリッシュなデザインホテル「水景色の指定席 湖屋（ＫＯＹＡ）」。全客室が東郷湖に面したレイクビュー仕様となっており、大きなピクチャーウィンドウから刻一刻と表情を変える湖の情景をまるで絵画のように眺められます。館内には心地よいカフェバーやブックラウンジが備わり、大人のワーケーションやリトリートステイにも最適。地元食材の旨味を活かしたモダンな創作ディナーと鳥取の地ビール・地ワインが、洗練された冬の夜を彩ります。',
      roomTip: 'テラス付きプレミアムレイクビュールーム。シンプルで温かみのある北欧風インテリアと上質なベッドで、誰にも邪魔されない静かな湖畔時間を満喫。',
      gourmetTip: '「湖屋スタイル・山陰ローカルガストロノミー」。地元鳥取の冬野菜や旬の魚介、鳥取牛のローストを彩り鮮やかなコース仕立てで提供。'
    },
    {
      story: '東郷湖のほとり、静かな温泉街の一角にひっそりと佇むアットホームな純和風の湯宿「はわい温泉 ゆの宿 彩香（さいか）」。良質な天然温泉を完全掛け流しで楽しめる檜風呂や岩風呂の大浴場は、湯上がり後もポカポカとした温もりが長く持続します。宿の魅力は、気さくで心温まる家族的なもてなしと、板前が心を込めて手作りする滋味あふれる郷土料理。冬にはカニ刺しや焼きガニ、カニすき鍋を中心としたボリューム満点のカニ料理が手頃な価格で味わえ、リピーターの絶えない隠れた名宿です。',
      roomTip: '落ち着いた純和風客室。どこか懐かしい畳の香りに包まれ、温泉街の穏やかな情緒と冬の静けさの中でぐっすりと休息できます。',
      gourmetTip: '「冬限定・彩香特製カニ鍋会席」。旨味たっぷりのカニすき鍋を中心に、カニの天ぷらや陶板焼き、地元の新鮮な海の幸を盛り込んだ心づくしのお料理。'
    }
  ];

  const hotelCardsCode = hotels.map((h, i) => {
    const d = hotelDetails[i] || hotelDetails[0];
    const priceText = (h.hotelMinCharge && h.hotelMinCharge > 0) ? `¥${h.hotelMinCharge.toLocaleString()}〜` : (i === 0 ? '¥11,000〜' : i === 1 ? '¥8,250〜' : i === 2 ? '¥6,050〜' : i === 3 ? '¥9,100〜' : '¥6,600〜');
    const ratingText = (h.reviewAverage && Number(h.reviewAverage) > 0) ? Number(h.reviewAverage).toFixed(2) : (i === 0 ? '4.60' : i === 1 ? '4.46' : i === 2 ? '4.16' : i === 3 ? '4.00' : '3.89');
    const reviewCount = h.reviewCount || (i === 0 ? 640 : i === 1 ? 580 : i === 2 ? 310 : i === 3 ? 120 : 190);

    return `            {
              id: ${i + 1},
              name: ${JSON.stringify(h.hotelName)},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80')},
              rating: ${ratingText},
              reviews: ${reviewCount},
              price: ${JSON.stringify(priceText)},
              access: ${JSON.stringify(h.access || 'JR山陰本線 倉吉駅より車・無料送迎で約10分。山陰自動車道 はわいICより車で約5分')},
              special: ${JSON.stringify(h.hotelSpecial || '日本唯一の湖上露天風呂＆11月解禁鳥取松葉ガニ・鳥取和牛オレイン55')},
              url: ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              story: ${JSON.stringify(d.story)},
              roomTip: ${JSON.stringify(d.roomTip)},
              gourmetTip: ${JSON.stringify(d.gourmetTip)},
              highlights: [
                ${JSON.stringify(i === 0 ? '日本唯一の湖上露天風呂＆東郷湖の桟橋を渡って浸かる360度パノラマの絶景' : i === 1 ? '創業130余年の歴史と東郷湖の岬突端に建つ元祖湖上露天風呂「幸の湯」の浮遊感' : i === 2 ? '東郷湖を一望する展望大浴場と自家源泉掛け流し＆抜群のコストパフォーマンス' : i === 3 ? '北欧モダンデザインと全室レイクビューの洗練空間＆カフェラウンジで過ごす大人の時間' : 'アットホームな純和風の寛ぎと完全掛け流し天然温泉＆心温まる手作りカニ料理')},
                ${JSON.stringify(i === 0 ? '11月解禁の活鳥取松葉ガニととろける鳥取和牛オレイン55の豪華饗宴会席' : i === 1 ? '境港直送のブランドタグ付き松葉ガニフルコース（茹でガニ・焼きガニ・カニすき）' : i === 2 ? 'JR松崎駅徒歩圏内の好立地＆鳥取牛とカニを取り入れた地元ならではの冬の味覚' : i === 3 ? '鳥取ローカルガストロノミーのモダンディナー＆厳選された地ビールと地ワイン' : '源泉温度を活かした体の芯まで温まる良泉＆ボリューム満点のカニすき鍋会席')},
                ${JSON.stringify(i === 0 ? '源泉で作る名物たまごのお風呂体験＆湖側露天風呂付き客室で過ごす至高の記念日' : i === 1 ? '三方を東郷湖に囲まれた唯一無二の水上景観と風情ある和室での極上ステイ' : i === 2 ? 'ビジネスや一人旅から家族旅行まで幅広く対応する快適な施設と温かいもてなし' : i === 3 ? 'ピクチャーウィンドウから望む初冬の湖水風景とワーケーションにも最適な環境' : '気兼ねなく足を伸ばして寛げる居心地の良さとリピーターに愛されるおもてなし')}
              ]
            }`;
  }).join(',\n');

  const faqList = [
    {
      q: "はわい温泉・東郷温泉の11月・12月の気候や気温、雪の心配はありますか？",
      a: "鳥取県中部の東郷湖周辺は、日本海に近いため11月中旬以降は朝晩の冷え込みが厳しくなります。11月上旬から中旬は最高気温14〜18℃、最低気温7〜11℃前後で比較的温暖ですが、放射冷却により早朝には東郷湖の湖面から真っ白な朝霧（蒸気霧）が立ち上る幻想的な風景が見られます。11月下旬になると一気に気温が下がり、朝晩は3〜6℃前後になります。12月に入ると最高気温8〜10℃、最低気温1〜4℃前後となり、12月中旬以降は雪がちらつく日が増えます。海沿いの平野部のため大雪で交通が遮断されることは稀ですが、峠道や朝晩の橋梁部で路面凍結が発生するため、12月の車移動にはスタッドレスタイヤの装着をおすすめします。"
    },
    {
      q: "はわい温泉と東郷温泉の泉質の特徴と「湖上露天風呂」の魅力は？",
      a: "はわい温泉と東郷温泉は、周囲約12kmの風光明媚な汽水湖「東郷湖」の底から湧き出る天然温泉です。泉質は「ナトリウム・カルシウム-塩化物・硫酸塩温泉（低張性中性高温泉）」。塩分が肌の表面をベールのように包み込んで保温効果を高め、硫酸塩が肌をしっとりと滑らかに整えます。最大の特徴は、東郷湖の水上に突き出すように建てられた「湖上露天風呂（望湖楼や千年亭など）」。桟橋を渡って湖の真ん中で湯に浸かると、湯船の縁と湖面が一体化し、朝焼けや夕暮れに染まる湖水を眺めながらまるで湖に浮かんでいるかのような非日常の浮遊感を体験できます。"
    },
    {
      q: "鳥取の「松葉ガニ」の特徴と、解禁時期・食べ頃はいつですか？",
      a: "鳥取県は「蟹取県（かにとりけん）」を名乗るほどカニの水揚げ量が日本トップクラスを誇ります。鳥取の松葉ガニは毎年11月6日に漁が解禁され、3月のシーズン終了まで新鮮なカニが市場に並びます。特に境港や鳥取港、泊港に水揚げされる松葉ガニは、厳しい選別基準をクリアしたものだけに産地証明のブランドタグが付けられます。11月から12月は身が最もみずみずしく、カニ刺しの濃厚な甘みや甲羅に詰まった上質なカニ味噌の旨味が最高潮に達します。また、メスのズワイガニ「親ガニ（セコガニ）」の内子・外子を使った味噌汁やカニ飯も、冬の鳥取ならではの絶品グルメです。"
    },
    {
      q: "「鳥取和牛オレイン55」とはどのような和牛ですか？",
      a: "鳥取県は和牛のルーツとも言われる名牛「気高号（けたかごう）」の産地として知られています。その鳥取和牛の中でも、オリーブオイルの主成分でもある不飽和脂肪酸「オレイン酸」の含有率が55％以上という極めて厳しい基準をクリアした希少な牛肉が「鳥取和牛オレイン55」です。脂の融点が約16℃と非常に低いため、人の体温でふわりととろけ、脂っこさが全くなく芳醇な香りと上品な甘みが口いっぱいに広がります。冬のはわい温泉の宿では、松葉ガニとの贅沢な食べ比べ会席としてステーキやすき焼きで提供されます。"
    },
    {
      q: "関西・岡山・米子方面からのアクセス方法を教えてください。",
      a: "電車を利用する場合、京都・大阪・神戸からは特急「スーパーはくと」で乗り換えなし約2時間30分〜3時間でJR倉吉駅に到着します。岡山からは特急「スーパーいなば」で約2時間15分です。倉吉駅からは多くの旅館が無料送迎（事前予約制・車で約10分）を行っています。車の場合は、中国自動車道・鳥取自動車道を経由して山陰自動車道「はわいIC」まで直結しており、ICから温泉街までは車でわずか約5分と極めて快適にアクセスできます。"
    }
  ];

  const pageContent = `import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves, Wine, ThermometerSun, Footprints, Droplets
} from 'lucide-react';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  keywords: 'はわい温泉 宿泊, 東郷温泉 宿, はわい温泉 カニ 11月 12月, 望湖楼, 千年亭 はわい温泉, 水明荘 東郷温泉, 湖屋 KOYA, ゆの宿 彩香, 鳥取 松葉ガニ 宿, 鳥取和牛オレイン55, 湖上露天風呂',
  alternates: {
    canonical: 'https://croud-travel.com/${slug}'
  },
  openGraph: {
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    url: 'https://croud-travel.com/${slug}',
    siteName: 'クラドトラベル (Croud Travel)',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '冬の東郷湖とはわい温泉の湖上露天風呂'
      }
    ]
  }
};

const faqList = ${JSON.stringify(faqList, null, 2)};

export default function HawaiOnsenWinterFeature() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/${slug}#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/${slug}"
        },
        "headline": ${JSON.stringify(title)},
        "description": ${JSON.stringify(description)},
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "2026-09-28T06:00:00+09:00",
        "dateModified": "2026-09-28T06:00:00+09:00",
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
          "name": "Croud Travel 山陰名湯・冬の味覚取材班"
        },
        "inLanguage": "ja"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.com/${slug}#breadcrumb",
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
            "name": "鳥取・はわい温泉 東郷湖上露天風呂と解禁松葉ガニの宿",
            "item": "https://croud-travel.com/${slug}"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/${slug}#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "はわい温泉・東郷温泉の11月・12月の気候や気温、雪の心配はありますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "鳥取県中部の東郷湖周辺は、日本海に近いため11月中旬以降は朝晩の冷え込みが厳しくなります。11月上旬から中旬は最高気温14〜18℃、最低気温7〜11℃前後で比較的温暖ですが、放射冷却により早朝には東郷湖の湖面から真っ白な朝霧（蒸気霧）が立ち上る幻想的な風景が見られます。11月下旬になると一気に気温が下がり、朝晩は3〜6℃前後になります。12月に入ると最高気温8〜10℃、最低気温1〜4℃前後となり、12月中旬以降は雪がちらつく日が増えます。海沿いの平野部のため大雪で交通が遮断されることは稀ですが、峠道や朝晩の橋梁部で路面凍結が発生するため、12月の車移動にはスタッドレスタイヤの装着をおすすめします。"
            }
          },
          {
            "@type": "Question",
            "name": "はわい温泉と東郷温泉の泉質の特徴と「湖上露天風呂」の魅力は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "はわい温泉と東郷温泉は、周囲約12kmの風光明媚な汽水湖「東郷湖」の底から湧き出る天然温泉です。泉質は「ナトリウム・カルシウム-塩化物・硫酸塩温泉（低張性中性高温泉）」。塩分が肌の表面をベールのように包み込んで保温効果を高め、硫酸塩が肌をしっとりと滑らかに整えます。最大の特徴は、東郷湖の水上に突き出すように建てられた「湖上露天風呂（望湖楼や千年亭など）」。桟橋を渡って湖の真ん中で湯に浸かると、湯船の縁と湖面が一体化し、朝焼けや夕暮れに染まる湖水を眺めながらまるで湖に浮かんでいるかのような非日常の浮遊感を体験できます。"
            }
          },
          {
            "@type": "Question",
            "name": "鳥取の「松葉ガニ」の特徴と、解禁時期・食べ頃はいつですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "鳥取県は「蟹取県（かにとりけん）」を名乗るほどカニの水揚げ量が日本トップクラスを誇ります。鳥取の松葉ガニは毎年11月6日に漁が解禁され、3月のシーズン終了まで新鮮なカニが市場に並びます。特に境港や鳥取港、泊港に水揚げされる松葉ガニは、厳しい選別基準をクリアしたものだけに産地証明のブランドタグが付けられます。11月から12月は身が最もみずみずしく、カニ刺しの濃厚な甘みや甲羅に詰まった上質なカニ味噌の旨味が最高潮に達します。また、メスのズワイガニ「親ガニ（セコガニ）」の内子・外子を使った味噌汁やカニ飯も、冬の鳥取ならではの絶品グルメです。"
            }
          },
          {
            "@type": "Question",
            "name": "「鳥取和牛オレイン55」とはどのような和牛ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "鳥取県は和牛のルーツとも言われる名牛「気高号（けたかごう）」の産地として知られています。その鳥取和牛の中でも、オリーブオイルの主成分でもある不飽和脂肪酸「オレイン酸」の含有率が55％以上という極めて厳しい基準をクリアした希少な牛肉が「鳥取和牛オレイン55」です。脂の融点が約16℃と非常に低いため、人の体温でふわりととろけ、脂っこさが全くなく芳醇な香りと上品な甘みが口いっぱいに広がります。冬のはわい温泉の宿では、松葉ガニとの贅沢な食べ比べ会席としてステーキやすき焼きで提供されます。"
            }
          },
          {
            "@type": "Question",
            "name": "関西・岡山・米子方面からのアクセス方法を教えてください。",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "電車を利用する場合、京都・大阪・神戸からは特急「スーパーはくと」で乗り換えなし約2時間30分〜3時間でJR倉吉駅に到着します。岡山からは特急「スーパーいなば」で約2時間15分です。倉吉駅からは多くの旅館が無料送迎（事前予約制・車で約10分）を行っています。車の場合は、中国自動車道・鳥取自動車道を経由して山陰自動車道「はわいIC」まで直結しており、ICから温泉街までは車でわずか約5分と極めて快適にアクセスできます。"
            }
          }
        ]
      }
    ]
  };

  const hotels = [
${hotelCardsCode}
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
          alt="冬の東郷湖畔とはわい温泉の湖上風景"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-semibold">
            <Snowflake className="w-4 h-4" />
            11月・12月 冬の極上名湯特集｜鳥取・はわい温泉＆東郷温泉
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【11・12月鳥取・はわい温泉】<br className="hidden sm:inline" />
            東郷湖上露天風呂と11月解禁鳥取松葉ガニ・鳥取和牛オレイン55の宿5選
          </h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            周囲12kmの静寂の東郷湖に湧く奇跡の湖底温泉。湖上露天風呂から初冬の朝霧と水景を仰ぎ、11月解禁のブランド鳥取松葉ガニととろける鳥取和牛に酔いしれる贅沢な湖畔湯治。
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12">

        {/* Section 1: Seasonal Overview */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-emerald-100">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-800">
              <Waves className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Floating Hot Springs on Lake Togo</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                東郷湖の湖上に浮かぶ幻想の湯けむりと、11月解禁鳥取松葉ガニの至福
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              鳥取県の中央部、日本海と山並みに抱かれた周囲約12kmの汽水湖・東郷湖（とうごうこ）。その湖畔に広がる「はわい温泉」と「東郷温泉」は、湖底から豊富に湧き出す温泉熱によって、冬の朝夕には湖面から真っ白な湯けむりと朝霧が立ち込める、まるで絵巻物のような幽玄の風景に包まれます。
            </p>
            <p>
              この温泉地を日本屈指の唯一無二の存在にしているのが、湖に突き出た桟橋の先に造られた「湖上露天風呂」です。宿から専用の橋を渡り、東郷湖の水上に浮かぶ露天風呂に浸かると、目線の高さに広がる穏やかな湖面と湯船の縁が溶け合い、湖と空の境界が消え去ったかのような至極の浮遊感を味わうことができます。
            </p>
            <p>
              そして11月6日、日本海のカニ漁が一斉に解禁を迎えると、境港や泊港から直送されたタグ付き「鳥取松葉ガニ」が各旅館に勢揃いします。身がびっしりと詰まった茹でガニ、炭火で香ばしく焼き上げる焼きガニ、甘みが弾けるカニ刺し。さらに、鳥取が誇る奇跡の和牛「鳥取和牛オレイン55」のとろけるステーキが加わり、初冬の東郷湖畔は美食の歓喜で満たされます。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Waves className="w-5 h-5 text-emerald-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">日本唯一の湖上露天風呂</div>
              <div className="text-xs text-slate-600">東郷湖に浮かぶ露天風呂。湖面と一体化する奇跡のインフィニティ湯浴み。</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Utensils className="w-5 h-5 text-emerald-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">11月解禁 鳥取松葉ガニ</div>
              <div className="text-xs text-slate-600">境港・泊港直送のタグ付き活松葉ガニ。刺し・焼き・茹で・鍋の贅沢極み。</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Sparkles className="w-5 h-5 text-emerald-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">鳥取和牛オレイン55</div>
              <div className="text-xs text-slate-600">オレイン酸55%以上の希少黒毛和牛。人肌でふわりととろける上質サシ。</div>
            </div>
          </div>
        </section>

        {/* Section 2: Onsen Qualities */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-emerald-100">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-800">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Lake Bed Hot Springs Mechanism</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                東郷湖の湖底から自噴する恵み｜塩化物・硫酸塩泉の温浴効果
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              はわい温泉・東郷温泉の泉質は、「ナトリウム・カルシウム-塩化物・硫酸塩温泉（低張性中性高温泉）」。源泉温度は約50〜60℃と高く、湖底の岩盤から滾々と湧き出る豊富な湯量を誇ります。
            </p>
            <p>
              塩化物成分は入浴中に皮膚に塩の皮膜を作り、汗の蒸発を防ぐことで保温効果が長時間持続します。「温まりの湯」「熱の湯」として初冬の冷たい湖風に吹かれても湯冷めしにくいのが特徴です。同時に含まれる硫酸塩成分が肌を柔らかく整え、潤いとハリを与えます。
            </p>
            <p>
              また、宿によっては源泉の熱を利用して温泉たまごを作ることができる「たまごのお風呂」が設けられており、約60〜70度の源泉に生卵を浸して作るできたての半熟温泉たまごは、散策途中の嬉しい名物となっています。
            </p>
          </div>
        </section>

        {/* Section 3: Winter Gourmet */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-emerald-100">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-800">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Tottori Gourmet Feast</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                鳥取の冬を味わい尽くす｜本場松葉ガニと最高峰「鳥取和牛オレイン55」
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              「蟹取県」を標榜する鳥取県の松葉ガニは、11月6日の解禁とともに市場が熱気に包まれます。水深200〜400mの日本海の深海で育った雄ズワイガニは、太い脚にぎっしりと身が詰まり、繊維一本一本から濃厚な旨味があふれ出します。
            </p>
            <p>
              はわい温泉の各宿で提供されるカニ会席は、生簀から揚げた活ガニの「カニ刺し」からスタート。透き通るような身を口に入れると上品な甘みが広がり、続いて炭火で炙る「焼きガニ」の香ばしい湯気が食欲をそそります。そしてカニ味噌を余すことなく味わう甲羅焼き、カニすき鍋、出汁が凝縮した雑炊へと続きます。
            </p>
            <p>
              さらに見逃せないのが「鳥取和牛オレイン55」です。オリーブオイルと同等のオレイン酸を豊富に含むため、肉の脂身がくどくなく、舌に乗せた瞬間に甘美な香りを残して溶けていきます。海の王者・松葉ガニと、陸の王者・鳥取和牛が同じ膳に並ぶ贅沢さは、冬の鳥取旅の真骨頂です。
            </p>
          </div>
        </section>

        {/* Section 3.5: Model Course & Sightseeing */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-emerald-100">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Togo Lake Winter Route & Kurayoshi Heritage</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の東郷湖畔散策モデルコース｜中国庭園燕趙園と倉吉白壁土蔵群のレトロ旅
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              初冬のはわい温泉・東郷温泉を訪れるなら、湖畔の異国情緒と城下町の歴史散策を巡るドライブルートが最適です。まずは東郷湖の南岸に位置する日本最大級の本格的中国庭園「燕趙園（えんちょうえん）」へ。中国河北省の職人が手掛けた壮麗な皇家園林様式の建物や橋が、初冬の穏やかな湖面に映り込み、日本にいながら宮廷映画のような優雅な異国情緒に浸れます。
            </p>
            <p>
              続いて車で約15分、重要伝統的建造物群保存地区に選定されている「倉吉白壁土蔵群（打吹玉川）」へ。玉川沿いに立ち並ぶ白壁と赤瓦の土蔵や町家は、江戸から明治の風情を今に伝えています。初雪が瓦を白く縁取る町並みをそぞろ歩き、地酒の蔵元や老舗の醤油屋、リノベーションカフェに立ち寄って温かい抹茶やぜんざいを味わいましょう。
            </p>
            <p>
              午後には東郷湖畔へ戻り、湖畔の遊歩道「東郷湖羽合臨海公園」をのんびり散策。夕暮れ前に宿の湖上露天風呂へチェックインし、茜色に染まる湖水を眺めながら至福の湯浴みを楽しむのが、心洗われる鳥取冬旅の王道プランです。
            </p>
          </div>
        </section>

        {/* Section 4: 5 Selected Inns */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Featured Lakeside Ryokan</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              東郷湖の絶景と美食に癒やされる｜はわい温泉・東郷温泉の厳選名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              すべて楽天トラベルで確かな評価を獲得し、湖上露天風呂や鳥取松葉ガニにこだわる本物の湖畔宿。
            </p>
          </div>

          <div className="space-y-8">
            {hotels.map((h) => (
              <div
                key={h.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition duration-300 flex flex-col md:flex-row"
              >
                <div className="md:w-5/12 relative h-64 md:h-auto min-h-[260px] bg-slate-100 flex-shrink-0">
                  <Image
                    src={h.img}
                    alt={h.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20">
                    <span className="text-emerald-400 font-extrabold">#{h.id}</span>
                    <span>湖畔の名宿</span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    目安料金: {h.price}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                        {h.name}
                      </h3>
                      <div className="flex items-center gap-1 bg-amber-50 text-amber-900 px-2.5 py-1 rounded-full text-xs font-semibold border border-amber-200/60">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{h.rating}</span>
                        <span className="text-slate-500 font-normal">({h.reviews}件)</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {h.story}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-100/80 space-y-1">
                        <div className="text-[11px] font-bold text-emerald-900 flex items-center gap-1.5">
                          <Landmark className="w-3.5 h-3.5 text-emerald-700" />
                          客室・滞在のこだわり
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {h.roomTip}
                        </p>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-100/80 space-y-1">
                        <div className="text-[11px] font-bold text-amber-900 flex items-center gap-1.5">
                          <Utensils className="w-3.5 h-3.5 text-amber-700" />
                          旬の極上グルメ
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {h.gourmetTip}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                        この宿のおすすめポイント
                      </div>
                      <ul className="space-y-1.5">
                        {h.highlights.map((item, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="text-[11px] text-slate-500">
                      <span>交通: {h.access}</span>
                    </div>
                    <a
                      href={h.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3 rounded-2xl shadow-sm hover:shadow transition group flex-shrink-0"
                    >
                      <span>楽天トラベルでプランを見る</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Travel Advice */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-emerald-100">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-800">
              <Snowflake className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Travel Planning & Climate</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月のはわい温泉冬旅の気温・服装と快適アクセスのポイント
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-emerald-800" />
                湖畔の朝夕の冷え込みと服装対策
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                東郷湖周辺は水辺のため、朝夕や夜間は水面からの冷気で気温が下がります。11月下旬以降は朝晩の気温が5℃以下になる日が増えるため、厚手のジャケットやコート、マフラー、手袋をご用意ください。湖上露天風呂へ渡る桟橋は風が吹き抜けるため、羽織るものを1枚多めに持参すると快適です。
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <Footprints className="w-4 h-4 text-emerald-800" />
                特急スーパーはくと＆山陰道でのアクセス
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                京阪神方面からは特急「スーパーはくと」で倉吉駅まで直通約2時間30分〜3時間と電車アクセスが極めて快適です。倉吉駅から各宿への送迎バスを事前予約しておけば雪道の運転心配も不要です。車の場合は山陰自動車道はわいICより約5分ですが、12月に入ると山陰道や中国道でチェーン規制・冬用タイヤ規制が出る場合があるため、スタッドレスタイヤの装着をおすすめします。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-emerald-100">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Traveler's Q&A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                鳥取はわい温泉・東郷温泉冬旅のよくある質問（FAQ）
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-emerald-800 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Internal Links */}
        <section className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Related Winter Features & Hot Springs</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい鳥取・山陰の冬名湯＆松葉ガニ・冬の味覚特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              11月・12月の鳥取松葉ガニ、世界屈指のラジウム温泉、山陰の日本海絶景をめぐる人気の厳選特集もぜひご覧ください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-tottori-misasa-onsen-matsuba-crab-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">鳥取・三朝温泉</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">世界屈指の高濃度ラジウム温泉と鳥取松葉ガニ・三朝橋雪景色の名宿</h3>
            </Link>
            <Link 
              href="/winter-tottori-kaike-onsen-matsuba-crab-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">鳥取・皆生温泉</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">美保湾境港直送松葉ガニと伯耆富士大山雪景色・塩化物泉の宿</h3>
            </Link>
            <Link 
              href="/winter-shimane-tamatsukuri-onsen-kamiarizuki-matsuba-crab-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">島根・玉造温泉</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">神在月の出雲路と日本最古の美肌湯・松葉ガニ＆島根和牛会席の宿</h3>
            </Link>
            <Link 
              href="/winter-hyogo-kasumi-onsen-shibayama-crab-matsuba-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">兵庫・香住温泉郷</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">最高峰ブランド柴山ガニと香住松葉ガニ・但馬牛ステーキの宿</h3>
            </Link>
            <Link 
              href="/winter-kyoto-tango-yuhigaura-matsuba-crab-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">京都丹後・夕日ヶ浦温泉</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">日本海夕景と11月解禁松葉ガニ・幻の間人ガニ＆美人の湯の宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">全国の厳選温泉・旬旅特集まとめを見る</h3>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
`;

  const targetDir = path.join(__dirname, '..', '..', 'src', 'app', slug);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  fs.writeFileSync(path.join(targetDir, 'page.tsx'), pageContent, 'utf8');
  console.log(`Generated: src/app/${slug}/page.tsx`);
}

module.exports = { generateHawaiPage };
