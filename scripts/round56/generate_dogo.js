const fs = require('fs');
const path = require('path');

function generateDogoPage(hotels) {
  const slug = 'winter-ehime-dogo-onsen-taimeshi-heritage-stay';
  const title = '【11・12月道後温泉の冬情緒と瀬戸内美味】日本最古の名湯と極上真鯛鯛めし・伊予牛会席の名宿5選';
  const description = '保存修理工事を終えて完全復活した日本最古の名湯・道後温泉本館。11月・12月の澄み切った瀬戸内の風を感じる湯めぐりと、冬に最も脂が乗る瀬戸内真鯛の「極上鯛めし」、とろける伊予牛会席を堪能する大人の贅沢冬旅ガイド。';

  const hotelDetails = [
    {
      story: '寛永4（1627）年の創業から390年余りの歴史を刻み、夏目漱石や正岡子規、昭和天皇をはじめ歴代の皇族方が宿泊された道後温泉最高峰の格式を誇る「ふなや」。宿の自慢は約1,500坪におよぶ広大な自然庭園「詠風庭（えいふうてい）」。清流御手洗川が流れ、初冬には色づいた木々の落ち葉と苔が美しい日本庭園を、足湯に浸かりながらのんびりと眺めることができます。大浴場「湯坂の湯」「御手洗の湯」には、道後温泉の源泉が豊富に引かれており、檜の香りと柔らかなアルカリ性単純温泉が身体の芯まで優しく解きほぐします。',
      roomTip: '広大な日本庭園を見下ろす本館和室や、露天風呂付き特別室がおすすめ。文豪たちが愛した静けさと格式高いおもてなしを心ゆくまで実感できます。',
      gourmetTip: '夕食は皇室をもてなしてきた伝統の技が光る本格和風会席。冬の瀬戸内海で揉まれた肉厚な真鯛の薄造りや、伝統の出汁で炊き上げる名物「鯛めし」、霜降り伊予牛のステーキなど、愛媛の誇る滋味が優雅に供されます。'
    },
    {
      story: '世界的建築家・黒川紀章氏が手掛けた、日本の伝統美と現代建築が見事に融合した名門旅館「道後舘」。エントランスを入ると、ガラス越しに流れる滝と川、江戸情緒を感じさせる町並みのような立体回廊が訪れる旅人を優美に出迎えます。館内随所に注がれる温泉は、道後温泉の引き湯100％。巨石を配した野趣あふれる露天風呂や打たせ湯、寝湯など、バラエティに富んだ湯浴みを楽しめます。道後温泉本館やハイカラ通りへも徒歩数分という好立地にありながら、館内は都会の喧騒を忘れさせる極上の静寂に満たされています。',
      roomTip: '松山市街や松山城方面を望む高層階和室や、客室専用露天風呂付き客室が人気。夕暮れ時に街の灯りが煌めくパノラマビューは格別です。',
      gourmetTip: '名匠が手掛ける創作会席料理は道後屈指の評判。冬の真鯛を贅沢に使った「土鍋鯛めし」をはじめ、とろけるような柔らかさの伊予牛「絹の味」の陶板焼き、瀬戸内の旬魚が彩るお造りなど、一品一品が芸術品のような完成度です。'
    },
    {
      story: '道後温泉本館から徒歩わずか3分。館内に本格的な能舞台「千寿殿」を構え、日本の伝統文化と慶応4年創業の格式を今に伝える数寄屋造りの名旅館「大和屋本店」。毎日夕暮れ時になると能舞台で伝統芸能の鑑賞や体験が行われ、旅の情緒を一層高めてくれます。大浴場は湯量豊富な内湯に加え、初冬の夜風が心地よい数寄屋風の岩露天風呂や檜露天風呂を完備。湯上がりのサロンでは、冷たい伊予柑ジュースや日本酒の試飲サービスが用意されており、大人ならではの贅沢で粋な湯治ステイを心ゆくまで堪能できます。',
      roomTip: '格調高い数寄屋造りの落ち着いた和室や、ベッドを配したモダン和洋室が選べます。能舞台を望む客室なら部屋にいながら伝統の美を眺められます。',
      gourmetTip: '日本料理、西洋料理、中国料理からプランを選べるのが大和屋本店の大きな特徴。王道の会席プランでは、伊予牛のフィレステーキや冬真鯛のあら炊き、本場の宇和島風鯛めしなど愛媛の味覚が豪華絢爛に並びます。'
    },
    {
      story: '全室に道後温泉の引き湯を満たしたプライベート露天風呂を備え、大人のための静寂とプライベート感を極限まで追求した現代のラグジュアリー湯宿「道後御湯（みゆ）」。楽天トラベルでも4.94という驚異的な高評価を誇ります。客室デッキの露天風呂からは松山市街の街並みや初冬の夕景を一望でき、好きな時に何度でも名湯を独占できます。最上階の展望大浴場「スカイラウンジ」からは松山城のライトアップも遠望可能。館内には現代アートがさりげなく配され、大人の一人旅やご夫婦の記念日旅行に最高のプライベートステイを約束してくれます。',
      roomTip: '松山城を正面に望むキャッスルビューの客室が圧倒的人気。客室露天風呂に浸かりながら夜空に浮かび上がる白亜の松山城を眺める時間は唯一無二です。',
      gourmetTip: '愛媛の豊かな風土が育む食材を繊細な感性で昇華させた現代和食会席。最高ランク伊予牛「絹の味」のローストや、冬の瀬戸内海の旬魚、炊きたての季節ご飯など、一皿ごとに感動が広がる極上の美食体験が待っています。'
    },
    {
      story: '道後温泉本館のすぐ裏手に位置し、道後エリアで初めて屋上に絶景露天風呂を設けたことで知られるスタイリッシュなモダン旅館「茶玻瑠（ちゃはる）」。最上階の展望露天風呂「月の湯」「星の湯」からは、夜空に浮かび上がる道後温泉本館の全景や松山市街の夜景を一望できます。毎週金・土・日曜日には女性風呂にバラの花を浮かべる「バラ風呂」も好評。和の伝統と洋のモダンデザインが融合した館内は明るく洗練されており、温泉街の中心にありながらスタイリッシュで肩肘張らない寛ぎの時間を過ごせます。',
      roomTip: '道後温泉本館を見下ろす本館ビューの客室や、シモンズ製ベッドを備えたモダン洋室が快適。散策に疲れたらすぐに戻れる利便性が魅力です。',
      gourmetTip: '愛媛の郷土料理と洋のテイストを取り入れた和洋創作料理が評判。瀬戸内の冬真鯛を使ったカルパッチョや鯛めし、伊予牛のグリルのほか、オープンキッチンから届く出来立ての料理が五感を満たします。'
    }
  ];

  const hotelCardsCode = hotels.map((h, i) => {
    const d = hotelDetails[i] || hotelDetails[0];
    return `            {
              id: ${i + 1},
              name: ${JSON.stringify(h.hotelName)},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80')},
              rating: ${h.reviewAverage ? Number(h.reviewAverage).toFixed(2) : '4.60'},
              reviews: ${h.reviewCount || 250},
              price: ${JSON.stringify(h.hotelMinCharge ? `¥${h.hotelMinCharge.toLocaleString()}〜` : '¥20,000〜')},
              access: ${JSON.stringify(h.access || '伊予鉄道道後温泉駅より徒歩約3〜5分、松山空港よりリムジンバスで約40分')},
              special: ${JSON.stringify(h.hotelSpecial || '日本最古の名湯と瀬戸内真鯛鯛めし・伊予牛を堪能する名宿')},
              url: ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              story: ${JSON.stringify(d.story)},
              roomTip: ${JSON.stringify(d.roomTip)},
              gourmetTip: ${JSON.stringify(d.gourmetTip)},
              highlights: [
                ${JSON.stringify(i === 0 ? '創業390年余の最高峰の格式＆1500坪の清流日本庭園「詠風庭」' : i === 1 ? '黒川紀章設計の優美な名建築＆引き湯100％の巨石露天風呂と多彩な湯船' : i === 2 ? '本格能舞台「千寿殿」での伝統芸能鑑賞＆道後本館徒歩3分の数寄屋老舗' : i === 3 ? '全室源泉露天風呂付き＆松山城を一望するスカイラウンジの驚異の高評価4.94' : '道後初の屋上絶景露天風呂＆道後本館徒歩1分の好立地と和洋創作会席')},
                ${JSON.stringify(i === 0 ? '皇族や夏目漱石・正岡子規ゆかりの宿＆足湯付きの風情ある庭園散策' : i === 1 ? '道後本館やハイカラ通りへ徒歩至近＆落ち着いた和モダン客室' : i === 2 ? '湯上がりサロンでの伊予柑ジュース＆地酒試飲サービスの贅沢なおもてなし' : i === 3 ? '大人のための完全プライベート空間＆記念日旅行に最適なデザイナーズ宿' : '女性露天の週末限定バラ風呂＆夜空に浮かび上がる道後の夜景パノラマ')},
                ${JSON.stringify(i === 0 ? '冬に脂が乗る瀬戸内真鯛の薄造り＆伝統出汁の土鍋鯛めしと伊予牛ステーキ' : i === 1 ? '名匠が手掛ける極上会席＆伊予牛「絹の味」陶板焼きと旬魚のお造り' : i === 2 ? '伊予牛フィレステーキや冬真鯛のあら炊き・本場宇和島風鯛めし' : i === 3 ? '愛媛の恵みを繊細に仕立てた現代和食会席＆最高級伊予牛ロースト' : '瀬戸内真鯛のカルパッチョや鯛めし＆伊予牛グリルを味わう創作美食')}
              ]
            }`;
  }).join(',\n');

  const pageContent = `import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Footprints, Landmark
} from 'lucide-react';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  keywords: '道後温泉 宿泊 11月 12月, 道後温泉 本館 旅館 おすすめ, 道後 鯛めし 温泉 宿, 伊予牛 道後温泉, 道後温泉 高級旅館, 道後 飛鳥乃湯泉, 道後温泉 モデルコース 冬',
  alternates: {
    canonical: 'https://croud-travel.com/${slug}',
  },
  openGraph: {
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    url: 'https://croud-travel.com/${slug}',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: ${JSON.stringify(title)},
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
  }
};

export default function DogoWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/${slug}#article",
        "headline": ${JSON.stringify(title)},
        "description": ${JSON.stringify(description)},
        "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
        "datePublished": "2026-09-27T00:00:00+09:00",
        "dateModified": "2026-09-27T00:00:00+09:00",
        "author": {
          "@type": "Organization",
          "name": "日本全国・旅宿クラウド 編集部",
          "url": "https://croud-travel.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "日本全国・旅宿クラウド",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.com/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/${slug}"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/${slug}#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "道後温泉本館の保存修理工事完了後の営業状況は？予約は必要ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "道後温泉本館は令和6（2024）年7月11日より、約5年半に及んだ保存修理工事を終えて全館営業を再開しています。「霊の湯（たまのゆ）」や「神の湯（かみのゆ）」をはじめ、本館2階・3階の休憩室も利用可能です。入浴は当日の整理券配布または現地受付順となっており、11月・12月の週末や連休は混雑するため、朝一番（6時開館）や宿の夕食時、夜の遅い時間帯を狙うとスムーズに入浴できます。"
            }
          },
          {
            "@type": "Question",
            "name": "冬（11月・12月）の愛媛・道後温泉の気候と服装は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "愛媛・松山は瀬戸内海特有の温暖な気候に恵まれており、積雪は極めて稀です。11月の平均気温は約13℃、12月は約8℃前後です。東京や大阪と比べると比較的過ごしやすいですが、冬の瀬戸内からは冷たい北風が吹き抜けるため、温泉街の夜間散策や湯めぐりには風を防ぐコートやダウンジャケット、マフラーなどの防寒具を準備してください。"
            }
          },
          {
            "@type": "Question",
            "name": "道後温泉の「鯛めし」には2種類あると聞きましたが違いは何ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "愛媛の鯛めしには大きく分けて2つの郷土スタイルがあります。1つは東予・中予地方（松山など）に伝わる「松山鯛めし」で、昆布出汁と醤油ベースのタレで丸ごとの真鯛を米と一緒に土鍋で炊き込むふっくら香ばしいスタイル。もう1つは南予地方（宇和島など）発祥の「宇和島鯛めし」で、新鮮な真鯛の刺身を生卵、出汁醤油、胡麻、薬味と和えて熱々の白飯の上にのせて食べる海賊料理ルーツのスタイルです。道後温泉の高級旅館では両方のスタイルを食べ比べできるプランも人気です。"
            }
          },
          {
            "@type": "Question",
            "name": "道後温泉へのアクセス方法は？松山空港やJR松山駅からの所要時間は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "空路の場合は松山空港から道後温泉直行のリムジンバスで約40分。鉄道の場合はJR松山駅から伊予鉄道の市内電車（路面電車）に乗り約25分で道後温泉駅に到着します。道後温泉駅から主要な旅館街や道後温泉本館、商店街「ハイカラ通り」はすべて徒歩数分〜10分圏内に集約されており、レンタカーなしでも非常に快適に観光が楽しめます。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.com/${slug}#hotels",
        "itemListElement": [
${hotels.map((h, idx) => `          {
            "@type": "ListItem",
            "position": ${idx + 1},
            "name": ${JSON.stringify(h.hotelName)},
            "url": ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')}
          }`).join(',\n')}
        ]
      }
    ]
  };

  const hotelList = [
${hotelCardsCode}
  ];

  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-orange-800 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-950">
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85"
          alt="冬の道後温泉本館・夜空に浮かび上がる歴史的木造建築の灯り"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-900/90 text-orange-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-orange-700/50">
            <Sparkles className="w-4 h-4 text-orange-300" />
            <span>11月・12月限定 日本最古の名湯と瀬戸内旬魚特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月道後温泉の冬情緒と瀬戸内美味】<br className="hidden sm:inline" />
            日本最古の名湯と極上真鯛鯛めし・伊予牛会席の名宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            令和の全館営業再開で輝きを増した道後温泉本館。冬の澄んだ夜空に響く刻太鼓、3000年の美肌名湯に浸かり、最も脂が乗る瀬戸内真鯛の鯛めしと極上の伊予牛に舌鼓を打つ大人の贅沢旅へ。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-orange-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-orange-400" /> 愛媛県松山市（道後温泉）</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
        
        {/* Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-orange-100">
            <div className="p-2.5 rounded-2xl bg-orange-50 text-orange-800">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-orange-800 uppercase tracking-widest">3,000 Years of Heritage</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                本館全館再開の奇跡。神話の時代から湧き続ける日本最古の名湯
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            四国・愛媛県松山市に位置する道後温泉は、有馬温泉や白浜温泉と並び「日本三古湯」の一つに数えられ、古事記や日本書紀、万葉集にも登場する約3000年もの歴史を誇る名湯です。聖徳太子が来浴して碑文を刻み、明治の文豪・夏目漱石が松山中学の英語教師赴任時に足繁く通い名作『坊っちゃん』の舞台としたことでも知られています。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            道後温泉は令和6年7月に約5年半におよぶ大掛かりな保存修理工事を完遂し、重要文化財である木造三層楼「道後温泉本館」が全館での営業を完全再開しました。11月・12月を迎えると、瀬戸内海の澄み切った初冬の風が温泉街を吹き抜け、夕暮れ時には本館の振鷺閣（しんろかく）に赤い障子明かりが灯り、朝・昼・夕の1日3回打ち鳴らされる「刻太鼓（ときだいこ）」の重厚な音が温泉街全体に響き渡ります。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            泉質はアルカリ性単純温泉。滑らかで肌を包み込むような質感の源泉は、湯上がり後に肌がつるつるになる「美人の湯」として女性にも大人気です。そして11月・12月の道後旅で最大の楽しみが「冬の瀬戸内海の味覚」。冬に向けて潮流にもまれて脂をたっぷり蓄えた瀬戸内真鯛を、土鍋でふっくら炊き上げる「松山鯛めし」、または特製タレと生卵でいただく「宇和島鯛めし」で堪能。さらに愛媛県産のブランド黒毛和牛「伊予牛（絹の味）」の霜降りステーキとの贅沢なマリアージュは、訪れた旅人の五感を深く満たします。
          </p>
          
          <div className="bg-orange-50/70 rounded-2xl p-5 border border-orange-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-700" />
                <span>11月・12月 道後温泉の旅のハイライト</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                本館全館営業再開・飛鳥乃湯泉と椿の湯めぐり・冬の脂が乗る瀬戸内真鯛鯛めし・ブランド黒毛和牛伊予牛
              </p>
            </div>
            <span className="px-3.5 py-1.5 rounded-full bg-orange-800 text-white font-bold text-xs whitespace-nowrap shadow-sm">
              松山空港から直行バス約40分
            </span>
          </div>
        </section>

        {/* Climate & Travel Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-stone-100 text-stone-700">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-orange-800 uppercase tracking-widest">Travel Planning Guide</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                初冬の道後 気候・服装・湯めぐりのポイント
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <span className="text-xs font-bold text-orange-800 flex items-center gap-1.5">
                <Snowflake className="w-4 h-4 text-orange-700" /> 気候と服装
              </span>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                瀬戸内特有の温暖な気候。11月平均気温約13℃、12月約8℃。積雪の心配はほぼありませんが、朝晩や湯上がりの外気は冷え込みます。浴衣の上に着る丹前や風を通さない上着、ストールを準備しましょう。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <span className="text-xs font-bold text-orange-800 flex items-center gap-1.5">
                <Footprints className="w-4 h-4 text-orange-700" /> 外湯めぐりのコツ
              </span>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                本館のほか、飛鳥時代の建築美を取り入れた「飛鳥乃湯泉」、地元愛あふれる「椿の湯」の3外湯が徒歩数分圏内にあります。湯かごを持参してのんびり湯めぐりを楽しむのが道後流の粋な過ごし方です。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <span className="text-xs font-bold text-orange-800 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-orange-700" /> 抜群の公共交通アクセス
              </span>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                松山空港やJR松山駅、松山観光港から直通バスや市内電車で簡単にアクセス可能。レンタカーなしで主要観光地や松山城まで快適に周遊できるのが道後温泉の大きな強みです。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel List */}
        <section className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-extrabold text-orange-800 uppercase tracking-widest bg-orange-100/60 px-3.5 py-1 rounded-full">
              SELECTED HERITAGE HOTELS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900">
              【11・12月】道後温泉の極上滞在を約束する名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto">
              楽天トラベルで4.1〜4.94の最高峰評価を集める、創業数百年の老舗から客室露天付きモダン宿まで、本物の道後の名湯と瀬戸内美食を誇る宿を厳選しました。
            </p>
          </div>

          <div className="space-y-12">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-md border border-stone-200/80 hover:shadow-xl transition-all duration-300 flex flex-col lg:flex-row"
              >
                {/* Image Box */}
                <div className="lg:w-5/12 relative min-h-[300px] lg:min-h-full bg-stone-100">
                  <Image
                    src={hotel.img}
                    alt={hotel.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-stone-900/85 backdrop-blur-md text-orange-300 font-extrabold px-3 py-1.5 rounded-xl text-xs sm:text-sm shadow-md border border-orange-500/30">
                    第{hotel.id}位 厳選名宿
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-stone-200/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-500 font-bold block">楽天トラベル評価</span>
                      <div className="flex items-center gap-1.5 text-orange-800 font-extrabold text-base">
                        <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                        <span>{hotel.rating}</span>
                        <span className="text-[11px] text-stone-400 font-normal">({hotel.reviews}件)</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-stone-500 font-bold block">参考宿泊料金（1名）</span>
                      <span className="text-stone-900 font-black text-sm sm:text-base text-orange-900">{hotel.price}</span>
                    </div>
                  </div>
                </div>

                {/* Content Box */}
                <div className="lg:w-7/12 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div>
                      <span className="text-[11px] text-orange-800 font-bold tracking-wider uppercase block mb-1">
                        {hotel.special}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                        {hotel.name}
                      </h3>
                      <p className="text-xs text-stone-500 mt-1 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-orange-700" />
                        <span>{hotel.access}</span>
                      </p>
                    </div>

                    <p className="text-stone-700 text-sm leading-relaxed">
                      {hotel.story}
                    </p>

                    {/* Room & Gourmet Tips */}
                    <div className="space-y-2.5 pt-2">
                      <div className="bg-orange-50/60 rounded-xl p-3 border border-orange-200/60 text-xs leading-relaxed text-stone-700">
                        <strong className="text-orange-900 font-bold flex items-center gap-1 mb-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-700" /> おすすめ客室の選び方:
                        </strong>
                        {hotel.roomTip}
                      </div>
                      <div className="bg-stone-50 rounded-xl p-3 border border-stone-200 text-xs leading-relaxed text-stone-700">
                        <strong className="text-stone-900 font-bold flex items-center gap-1 mb-0.5">
                          <Utensils className="w-3.5 h-3.5 text-orange-700" /> 夕食・ご当地美食のこだわり:
                        </strong>
                        {hotel.gourmetTip}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block">この宿の注目ポイント</span>
                      <ul className="space-y-1">
                        {hotel.highlights.map((item: string, hIdx: number) => (
                          <li key={hIdx} className="text-xs text-stone-600 flex items-start gap-1.5">
                            <span className="text-orange-700 font-bold mt-0.5">✔</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Booking Link */}
                  <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-stone-500 hidden sm:inline">
                      ※空室状況・最新プランは楽天トラベル公式でご確認ください
                    </span>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-orange-800 to-orange-950 hover:from-orange-900 hover:to-stone-950 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                    >
                      <span>楽天トラベルでプラン・空室を見る</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 1泊2日 理想のモデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-orange-50 text-orange-800">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-orange-800 uppercase tracking-widest">Model Course</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                【1泊2日】本館復活と瀬戸内鯛めしを味わう道後温泉ステイ
              </h2>
            </div>
          </div>

          <div className="relative border-l-2 border-orange-300 ml-4 pl-6 space-y-8 my-6">
            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-orange-700 ring-4 ring-orange-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-orange-800 tracking-wider">1日目 12:30</span>
                <h3 className="text-base font-bold text-stone-900">松山市街で冬真鯛の「宇和島鯛めし」ランチ</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  松山に到着後、まずは新鮮な真鯛の刺身を生卵と特製出汁で絡めてご飯にかける名物「宇和島鯛めし」を堪能。プリプリとした真鯛の弾力と濃厚なタレの旨味が口いっぱいに広がります。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-orange-700 ring-4 ring-orange-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-orange-800 tracking-wider">1日目 14:00</span>
                <h3 className="text-base font-bold text-stone-900">松山城ロープウェイで登城・瀬戸内海パノラマ</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  標高132mの城山山頂にそびえる名城・松山城へ。ロープウェイまたはリフトで登り、現存十二天守の一つである天守閣へ。初冬の澄んだ空気の中、遠く瀬戸内海や島々まで見渡せる絶景を堪能します。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-orange-700 ring-4 ring-orange-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-orange-800 tracking-wider">1日目 16:00</span>
                <h3 className="text-base font-bold text-stone-900">道後温泉到着＆宿にチェックイン・大浴場へ</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  市内電車で道後温泉へ。宿にチェックインし、まずはアルカリ性単純温泉の柔らかな湯に浸かります。身体を芯まで温め、旅の疲れをほぐします。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-orange-700 ring-4 ring-orange-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-orange-800 tracking-wider">1日目 17:30</span>
                <h3 className="text-base font-bold text-stone-900">夕暮れの道後温泉本館とハイカラ通り散策</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  浴衣に丹前を羽織り、湯かごを持って温泉街へ。保存修理を終えた道後温泉本館のライトアップと坊っちゃんカラクリ時計の演出を鑑賞。ハイカラ通りでお土産のみかんスイーツを探します。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-orange-700 ring-4 ring-orange-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-orange-800 tracking-wider">1日目 19:30</span>
                <h3 className="text-base font-bold text-stone-900">伊予牛と冬真鯛の土鍋鯛めし会席ディナー</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  宿でいただく贅沢な和会席。きめ細やかなサシが入った伊予牛「絹の味」のステーキと、ふっくら炊き上がった土鍋鯛めしの香ばしさに舌鼓。愛媛の地酒「石鎚」や「梅錦」とともに味わいます。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-orange-700 ring-4 ring-orange-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-orange-800 tracking-wider">2日目 06:30</span>
                <h3 className="text-base font-bold text-stone-900">道後温泉本館の「一番風呂」体験と朝の刻太鼓</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  朝6時の刻太鼓の音とともに開館する道後温泉本館へ。澄み切った朝の冷気の中、歴史ある湯船で迎える一番風呂は格別の清々しさ。湯上がりに坊っちゃん団子を味わいます。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-orange-700 ring-4 ring-orange-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-orange-800 tracking-wider">2日目 10:00</span>
                <h3 className="text-base font-bold text-stone-900">「飛鳥乃湯泉」アート空間鑑賞＆道後公園散策</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  チェックアウト後は現代アートと伝統工芸が融合した「道後温泉別館 飛鳥乃湯泉」へ立ち寄り。中世の湯築城跡である道後公園の高台から冬晴れの道後温泉街を一望します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-orange-50 text-orange-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-orange-800 uppercase tracking-widest">Q & A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                道後温泉の冬旅行 よくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-orange-800 font-extrabold">Q.</span>
                <span>道後温泉本館の保存修理工事完了後の営業状況は？予約は必要ですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                道後温泉本館は令和6（2024）年7月11日より、約5年半に及んだ保存修理工事を終えて全館営業を再開しています。「霊の湯（たまのゆ）」や「神の湯（かみのゆ）」をはじめ、本館2階・3階の休憩室も利用可能です。入浴は当日の整理券配布または現地受付順となっており、11月・12月の週末や連休は混雑するため、朝一番（6時開館）や宿の夕食時、夜の遅い時間帯を狙うとスムーズに入浴できます。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-orange-800 font-extrabold">Q.</span>
                <span>冬（11月・12月）の愛媛・道後温泉の気候と服装は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                愛媛・松山は瀬戸内海特有の温暖な気候に恵まれており、積雪は極めて稀です。11月の平均気温は約13℃、12月は約8℃前後です。東京や大阪と比べると比較的過ごしやすいですが、冬の瀬戸内からは冷たい北風が吹き抜けるため、温泉街の夜間散策や湯めぐりには風を防ぐコートやダウンジャケット、マフラーなどの防寒具を準備してください。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-orange-800 font-extrabold">Q.</span>
                <span>道後温泉の「鯛めし」には2種類あると聞きましたが違いは何ですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                愛媛の鯛めしには大きく分けて2つの郷土スタイルがあります。1つは東予・中予地方（松山など）に伝わる「松山鯛めし」で、昆布出汁と醤油ベースのタレで丸ごとの真鯛を米と一緒に土鍋で炊き込むふっくら香ばしいスタイル。もう1つは南予地方（宇和島など）発祥の「宇和島鯛めし」で、新鮮な真鯛の刺身を生卵、出汁醤油、胡麻、薬味と和えて熱々の白飯の上にのせて食べる海賊料理ルーツのスタイルです。道後温泉の高級旅館では両方のスタイルを食べ比べできるプランも人気です。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-orange-800 font-extrabold">Q.</span>
                <span>道後温泉へのアクセス方法は？松山空港やJR松山駅からの所要時間は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                空路の場合は松山空港から道後温泉直行のリムジンバスで約40分。鉄道の場合はJR松山駅から伊予鉄道の市内電車（路面電車）に乗り約25分で道後温泉駅に到着します。道後温泉駅から主要な旅館街や道後温泉本館、商店街「ハイカラ通り」はすべて徒歩数分〜10分圏内に集約されており、レンタカーなしでも非常に快適に観光が楽しめます。
              </p>
            </div>
          </div>
        </section>

        {/* Internal Link Mesh */}
        <section className="bg-stone-100 rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-orange-800 uppercase tracking-widest block">EXPLORE MORE WINTER DESTINATIONS</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              あわせて読みたい！11月・12月の冬特集＆西日本・温泉ガイド
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link 
              href="/winter-kochi-yuzu-hotspring-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-orange-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-orange-800 uppercase block mb-1">四国の冬名物</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-orange-800 transition line-clamp-2">
                【高知ゆず湯】冬至の香り豊かな柚子風呂と土佐藁焼き鰹タタキ・極上宿
              </h3>
            </Link>

            <Link 
              href="/winter-fukuoka-hakata-christmas-advent-gourmet-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-orange-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-orange-800 uppercase block mb-1">九州の冬グルメ</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-orange-800 transition line-clamp-2">
                【博多クリスマス】国内最大級アドベントイルミとモツ鍋・水炊き極上ステイ
              </h3>
            </Link>

            <Link 
              href="/winter-oita-beppu-jigokumushi-hotspring-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-orange-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-orange-800 uppercase block mb-1">九州の湧出量日本一</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-orange-800 transition line-clamp-2">
                【別府温泉】湯けむり展望露天風呂と名物地獄蒸し料理・老舗湯宿
              </h3>
            </Link>

            <Link 
              href="/winter-hyogo-kinosaki-onsen-matsuba-crab-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-orange-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-orange-800 uppercase block mb-1">関西の冬名湯</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-orange-800 transition line-clamp-2">
                【城崎温泉】青タグ津居山ガニの極上フルコースと七つの外湯めぐり
              </h3>
            </Link>

            <Link 
              href="/winter-iseshima-ujibashi-sunrise-matoya-oyster-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-orange-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-orange-800 uppercase block mb-1">東海の冬絶景</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-orange-800 transition line-clamp-2">
                【伊勢志摩】冬至の宇治橋鳥居日の出絶景と的矢かき・伊勢海老会席
              </h3>
            </Link>

            <Link 
              href="/winter-tottori-misasa-onsen-matsuba-crab-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-orange-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-orange-800 uppercase block mb-1">山陰のラジウム温泉</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-orange-800 transition line-clamp-2">
                【三朝温泉】世界屈指の高濃度ラジウム泉とブランド松葉ガニづくし会席
              </h3>
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

  const targetPath = path.join(targetDir, 'page.tsx');
  fs.writeFileSync(targetPath, pageContent, 'utf8');
  console.log(`Generated Dogo page at: ${targetPath}`);
}

module.exports = { generateDogoPage };
