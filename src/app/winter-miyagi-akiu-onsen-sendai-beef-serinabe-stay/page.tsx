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
  title: "【11・12月秋保温泉の初冬渓谷美と名湯】伊達政宗公ゆかりの奥座敷・最高峰A5仙台牛＆名物せり鍋の宿5選",
  description: "杜の都・仙台の奥座敷として開湯1500年の歴史を誇り、日本三御湯の一つに数えられる秋保温泉。11月中旬の磊々峡の晩秋から12月の初雪へと移ろう初冬、名取川渓谷を望む露天風呂と、宮城の冬の風物詩「仙台せり鍋」、霜降り極上のA5仙台牛ステーキを心ゆくまで堪能する名宿ガイド。",
  keywords: '秋保温泉 宿泊 11月 12月, 秋保温泉 せり鍋 仙台牛, 伝承千年の宿 佐勘, ホテル瑞鳳 秋保, 茶寮宗園, 秋保温泉 篝火の湯 緑水亭, 磊々峡 冬 雪景色, 日本三御湯 仙台',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-miyagi-akiu-onsen-sendai-beef-serinabe-stay/",
  },
  openGraph: {
    title: "【11・12月秋保温泉の初冬渓谷美と名湯】伊達政宗公ゆかりの奥座敷・最高峰A5仙台牛＆名物せり鍋の宿5選",
    description: "杜の都・仙台の奥座敷として開湯1500年の歴史を誇り、日本三御湯の一つに数えられる秋保温泉。11月中旬の磊々峡の晩秋から12月の初雪へと移ろう初冬、名取川渓谷を望む露天風呂と、宮城の冬の風物詩「仙台せり鍋」、霜降り極上のA5仙台牛ステーキを心ゆくまで堪能する名宿ガイド。",
    url: 'https://croud-travel.com/winter-miyagi-akiu-onsen-sendai-beef-serinabe-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月秋保温泉の初冬渓谷美と名湯】伊達政宗公ゆかりの奥座敷・最高峰A5仙台牛＆名物せり鍋の宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月秋保温泉の初冬渓谷美と名湯】伊達政宗公ゆかりの奥座敷・最高峰A5仙台牛＆名物せり鍋の宿5選",
    description: "杜の都・仙台の奥座敷として開湯1500年の歴史を誇り、日本三御湯の一つに数えられる秋保温泉。11月中旬の磊々峡の晩秋から12月の初雪へと移ろう初冬、名取川渓谷を望む露天風呂と、宮城の冬の風物詩「仙台せり鍋」、霜降り極上のA5仙台牛ステーキを心ゆくまで堪能する名宿ガイド。",
  }
};

  const faqList = [
    {
      q: "宮城名物『仙台せり鍋』の特徴と旬の時期は？",
      a: "仙台せり鍋は、秋保温泉に程近い宮城県名取市などで栽培される伝統野菜『仙台せり』を主役にした冬の郷土鍋です。旬は11月から2月頃で、特に初冬は葉や茎だけでなく、白く太い『根っこ』の部分に甘みと香りが凝縮されます。鴨肉や鶏肉から取った旨味たっぷりの出汁に、根ごとサッとくぐらせてシャキシャキとした食感を味わうのが通の食べ方。秋保温泉の各宿では、11・12月の会席料理やビュッフェで熱々のせり鍋が提供されます。"
    },
    {
      q: "秋保温泉の11月・12月の気候や降雪・積雪は？",
      a: "秋保温泉は仙台市中心部よりも山沿いに位置するため、気温が2〜3℃低くなります。11月中旬までは磊々峡の晩秋の紅葉を楽しめますが、11月下旬からは朝晩の冷え込みが厳しくなり、12月に入ると初雪が降る日が増えます。12月下旬には雪景色の中で露天風呂を楽しむ『雪見風呂』が期待できます。最高気温は12月で6℃〜8℃、最低気温は氷点下になることも多いため、防寒性の高いコートや滑りにくい靴でお越しください。"
    },
    {
      q: "JR仙台駅からのアクセス方法と所要時間は？",
      a: "JR仙台駅西口からは、主要旅館（佐勘、瑞鳳、緑水亭など）が運行する無料送迎バスを利用すれば約30分〜40分でスムーズに到着できます（要事前予約）。また、仙台駅西口バスプール8番乗り場から宮城交通の路線バス（秋保温泉行き）が頻繁に運行しており、所要時間は約50分です。お車の場合は東北自動車道・仙台南ICより約15分と好アクセスですが、12月以降は降雪や凍結に備えてスタッドレスタイヤの装着をおすすめします。"
    },
    {
      q: "『日本三御湯（にほんさんおんゆ）』とは何ですか？",
      a: "日本三御湯とは、第84代順徳天皇が編纂した歌論書『八雲御抄（やくもみしょう）』に記された、皇室ゆかりの格式高い三つの名湯のことです。信濃の別所温泉、野沢温泉（または犬の湯）、そして陸奥の秋保温泉（名取の御湯）がこれに該当します。第29代欽明天皇が皮膚病を患った際、秋保の湯を取り寄せて沐浴したところ全快したことから『名取の御湯』の称号を賜り、以後皇室御用達の名湯として全国にその名を轟かせました。"
    }
  ];

export default function AkiuWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-miyagi-akiu-onsen-sendai-beef-serinabe-stay#article",
        "headline": "【11・12月秋保温泉の初冬渓谷美と名湯】伊達政宗公ゆかりの奥座敷・最高峰A5仙台牛＆名物せり鍋の宿5選",
        "description": "杜の都・仙台の奥座敷として開湯1500年の歴史を誇り、日本三御湯の一つに数えられる秋保温泉。11月中旬の磊々峡の晩秋から12月の初雪へと移ろう初冬、名取川渓谷を望む露天風呂と、宮城の冬の風物詩「仙台せり鍋」、霜降り極上のA5仙台牛ステーキを心ゆくまで堪能する名宿ガイド。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
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
          "@id": "https://croud-travel.com/winter-miyagi-akiu-onsen-sendai-beef-serinabe-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/winter-miyagi-akiu-onsen-sendai-beef-serinabe-stay#faq",
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
        "@id": "https://croud-travel.com/winter-miyagi-akiu-onsen-sendai-beef-serinabe-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "伝承千年の宿　佐勘",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F63615%2F63615.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "仙台　秋保温泉　ホテル瑞鳳",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30766%2F30766.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "秋保温泉　茶寮宗園",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38345%2F38345.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "秋保温泉　篝火の湯　緑水亭",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15989%2F15989.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "秋保温泉　秋保グランドホテル",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15098%2F15098.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "伝承千年の宿　佐勘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/63615/63615.jpg",
              rating: 4.41,
              reviews: 2138,
              price: "¥16,720〜",
              access: "ＪＲ　仙台駅より車で３０分／仙台駅西口バスプール８番乗り場より、宮城交通バス「秋保温泉方面行」約５０分",
              special: "仙台藩主・伊達政宗公の湯浴み御殿として栄えた老舗宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F63615%2F63615.html",
              story: "第29代欽明天皇の皮膚病を癒やし「名取の御湯」の称号を賜って以来、千五百年の歴史を紡ぎ、江戸時代には仙台藩祖・伊達政宗公の湯守を務めた由緒正しき名門「伝承千年の宿 佐勘」。宿の中心にある中庭には伊達家から拝領した家宝の数々や、戦国時代から絶やすことなく燃え続ける「聖火」が静かに揺らめきます。名取川のせせらぎを真下に望む名物露天風呂「名取の御湯」や、源泉かけ流しの「河原の湯」では、初冬の澄んだ冷気を感じながら、伊達の殿様と同じ名湯に浸かる贅沢を満喫。日本の伝統美と現代の快適性が調和した格式高い空間で、特別な冬のひとときが過ごせます。",
              roomTip: "名取川の渓流を望む「飛天館」の特別室や数寄屋造りの和洋室。落ち着いた格調高い調度品に囲まれ、初冬の静寂な渓谷美を眺めながらゆったりと寛げます。",
              gourmetTip: "名物「お食事処 無手勝流」で味わう炭火焼き会席。料理人が目の前でじっくりと焼き上げる最高峰A5ランク仙台牛のサーロインや、冬の三陸沖で獲れた寒平目のお造り、名取産根セリを贅沢に使った熱々のせり小鍋を心ゆくまで堪能できます。",
              highlights: [
                "開湯1500年・伊達政宗公の湯守を務めた名門＆名取川のせせらぎを真下に望む名湯「河原の湯」",
                "戦国時代から燃え続ける伝統の「聖火」＆名取川渓谷と一体になる露天風呂「名取の御湯」",
                "炭火焼き会席「無手勝流」で味わうA5仙台牛サーロイン＆名取産根セリの極上小鍋"
              ]
            },
            {
              id: 2,
              name: "仙台　秋保温泉　ホテル瑞鳳",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/30766/30766.jpg",
              rating: 4.47,
              reviews: 7009,
              price: "¥14,000〜",
              access: "東北自動車道仙台南ICより15分。仙台市街地まで車で約40分。JR仙台駅東口無料シャトルバス運行（※定員制のため要予約）",
              special: "仙台中心街からお車で約30分。温泉とともに楽しむ、“食”の贅沢ビュッフェ♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30766%2F30766.html",
              story: "秋保温泉の高台に位置し、美しい数寄屋造りの建物と広大な日本庭園が迎えてくれる豪華温泉リゾート「ホテル瑞鳳（ずいほう）」。千平米を誇る大浴場には、潮騒のような水音が響く打たせ湯や立ち湯、そして日本庭園に囲まれた6種類の露天風呂が点在します。初冬の夜には庭園が幻想的にライトアップされ、湯煙と灯りが織りなす極上のリラクゼーションを体験。さらに、全天候型ドームの温水プールやサウナも完備されており、三世代家族からカップルまで誰もが満足できる充実の施設が魅力です。",
              roomTip: "秋保の山並みを見晴らす上層階の客室や、モダンな和洋室。大きな窓から初冬の澄んだ青空や星空、遠くの雪化粧した蔵王連峰を望むことができます。",
              gourmetTip: "口コミで絶賛される豪華ブッフェレストラン「seasons」。職人が目の前で焼き上げる仙台牛ステーキや牛たん焼き、揚げたての天ぷら、新鮮な握り寿司のほか、宮城名物の仙台せり鍋など、宮城の豊かな海山の恵みを出来立てで楽しめます。",
              highlights: [
                "千平米の豪華大浴場と庭園露天風呂＆職人が目の前で調理する100種豪華ディナーブッフェ",
                "6種の露天風呂と打たせ湯＆幻想的な庭園ライトアップと全天候型温水プール完備",
                "オープンキッチンで焼き上げる仙台牛ステーキ＆名物牛たん・三陸直送鮮魚と熱々せり鍋"
              ]
            },
            {
              id: 3,
              name: "秋保温泉　茶寮宗園",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/38345/38345.jpg",
              rating: 4.91,
              reviews: 86,
              price: "¥49,500〜",
              access: "仙台駅～車で約30分/仙台南IC～車で15分/仙台宮城IC～車で約20分/JR仙台駅～送迎バス（要予約）",
              special: "美食・温泉・建築「三つの美」を五感で楽しむ秋保温泉の上質な湯宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38345%2F38345.html",
              story: "約八千坪もの広大な敷地に、わずか26室の離れ風客室が贅沢に配された日本最高峰の純和風高級旅館「茶寮宗園（さりょうそうえん）」。手入れの行き届いた枯山水の日本庭園を囲むように数寄屋建築の回廊が続き、初冬の凛とした静寂と日本の伝統美が旅人を包み込みます。客室は全室に専用の庭園が付き、露天風呂付き離れでは名取川の清らかな空気を感じながら秋保温泉の名湯を独占。日常の喧騒から完全に解き放たれ、専任の仲居による心のこもったもてなしとともに、真の贅沢を味わえる大人の隠れ家です。",
              roomTip: "客室専用の露天風呂と庭園を備えた「離れ客室」。初冬の朝、雪がうっすらと積もった日本庭園を眺めながら湯船に浸かる時間は、まさに至福の境地です。",
              gourmetTip: "茶懐石の精神を昇華させた至高の懐石料理。冬の三陸から届く活鮑や寒鱈の白子、最高格付けA5仙台牛の炭火焼き、名取の極上セリを使った繊細な煮物椀など、季節の移ろいを目と舌で味わう芸術的な料理を堪能できます。",
              highlights: [
                "八千坪の敷地にわずか26室の数寄屋離れ＆全室専用庭園付きの最高峰大人の隠れ宿",
                "枯山水の日本庭園を望むプライベート露天風呂＆茶懐石の真髄を味わう至高の料理",
                "冬の三陸活鮑と寒鱈白子＆厳選A5仙台牛炭火焼きを個室で味わう芸術的懐石"
              ]
            },
            {
              id: 4,
              name: "秋保温泉　篝火の湯　緑水亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/15989/15989.jpg",
              rating: 4.24,
              reviews: 1451,
              price: "¥10,450〜",
              access: "東北自動車道仙台南ICから約15分。仙台中心部まで車で約30分。JR仙台駅東口より無料シャトルバス毎日運行（※要予約）",
              special: "仙台駅から車で約30分。秋保温泉の高台に佇む一軒宿！篝火を灯す幻想的な露天風呂が人気です。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15989%2F15989.html",
              story: "秋保の自然豊かな丘の上に建ち、広大な日本庭園の池の畔で毎夜焚かれる篝火（かがりび）が旅情をかき立てる「篝火の湯 緑水亭」。宿の象徴である大露天風呂「篝火の湯」は、木々に囲まれた石造りの湯船に浸かりながら、夜空に揺らめく本物の炎と湯煙を眺める幻想的な空間です。11月下旬の紅葉の残り香から12月の初雪へと移ろう季節、寒風に吹かれながら浸かる温かな名湯は格別の心地よさ。ロビーラウンジからは四季折々に表情を変える日本庭園を一望でき、ゆったりとした時間が流れる癒やしの宿です。",
              roomTip: "四季の日本庭園を見下ろす広々とした和室や、ベッド付きの和洋室。初冬の澄んだ夜には、篝火の灯りと満天の星を窓から楽しめます。",
              gourmetTip: "宮城の山海の味覚を凝縮した季節会席。霜降り仙台牛の陶板焼きやすき焼き鍋をはじめ、冬に旬を迎える脂の乗った銀鮭や三陸産牡蠣、シャキシャキの歯応えがたまらない名物仙台せり鍋が食卓を賑わせます。",
              highlights: [
                "夜空に揺らめく炎が幻想的な大露天風呂「篝火の湯」＆広大な四季の日本庭園",
                "初冬の冷気と温かい名湯の心地よいコントラスト＆落ち着きある和の空間で過ごす冬の休日",
                "A5仙台牛陶板焼き＆冬の三陸牡蠣とシャキシャキ食感が絶品の仙台せり鍋会席"
              ]
            },
            {
              id: 5,
              name: "秋保温泉　秋保グランドホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/15098/15098.jpg",
              rating: 4.27,
              reviews: 5155,
              price: "¥10,450〜",
              access: "JR仙台駅よりバスで５０分、車で３０分/東北自動車道仙台南ICより車で１０分",
              special: "楽天アワード「レジャー部門」銀賞連続受賞　人気のビュッフェ　にぎり鮨などが食べ放題",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15098%2F15098.html",
              story: "秋保温泉の名勝「磊々峡（らいらいきょう）」の遊歩道入口に直結し、渓谷の絶景を間近に感じるロケーションに佇む「秋保グランドホテル」。本館と別館にそれぞれ趣の異なる大浴場を備え、名取川のダイナミックな奇岩怪石を眼下に望む露天風呂での湯あみは爽快そのものです。初冬の澄んだ川のせせらぎを聞きながら入る露天風呂は、日頃の疲れをすっきりと癒やしてくれます。宿の目の前から磊々峡の散策路へ出られるため、初冬の渓谷ハイキングを楽しむ拠点としても抜群の利便性を誇ります。",
              roomTip: "名取川渓谷に面したリバービュー客室。窓の外に広がる磊々峡の奇岩と初冬の渓谷林を独り占めできる特等席です。",
              gourmetTip: "旬の宮城グルメが満載のビュッフェスタイルまたは季節の和食膳。名物の牛たん焼きや揚げたて天ぷら、冬の宮城ならではの仙台せり鍋、三陸直送の海の幸など、バラエティ豊かなご当地グルメを気軽に味わえます。",
              highlights: [
                "名勝・磊々峡の遊歩道に直結する絶景宿＆奇岩を見下ろす渓流露天風呂と充実のバイキング",
                "趣の異なる4つの大浴場巡り＆磊々峡の初冬ハイキングを気軽に楽しめる好立地",
                "宮城の郷土料理満載バイキング＆牛たん焼き・揚げたて天ぷら・冬のせり鍋の贅沢"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-emerald-950 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-950">
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85"
          alt="秋保温泉・初冬の名取川渓谷と磊々峡の奇岩・雪見露天風呂の風情"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/90 text-emerald-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-emerald-800/50">
            <Eye className="w-4 h-4 text-emerald-300" />
            <span>11月・12月限定 日本三御湯の奥座敷＆A5仙台牛・名物仙台せり鍋特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月秋保温泉の初冬渓谷美と名湯】<br className="hidden sm:inline" />
            伊達政宗公ゆかりの奥座敷・最高峰A5仙台牛＆名物せり鍋の宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            皇室に愛された「日本三御湯」にして仙台藩祖・伊達政宗公の湯守の歴史を今に伝える秋保温泉。名取川渓谷「磊々峡」を望む名湯露天風呂。宮城の初冬の味覚の頂点「仙台せり鍋」と霜降り極上のA5仙台牛に酔いしれる贅沢な冬旅。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-emerald-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-emerald-400" /> 宮城県仙台市太白区秋保町</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
        
        {/* Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-emerald-100">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-800">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Nihon San-Onyu Miyagi Legacy</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                欽明天皇を癒やし伊達政宗公が愛した「名取の御湯」。初冬の静寂と美食
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            杜の都・仙台駅から車でわずか30分。名取川の上流に広がる「秋保温泉（あきうおんせん）」は、今から約千五百年前に開湯したと伝えられる東日本屈指の古湯です。第29代欽明天皇の皮膚病がこの湯で全快したことから「名取の御湯」の号を賜り、別所温泉や野沢温泉とともに「日本三御湯」の一つとして皇室に称えられました。戦国時代には仙台藩の祖・伊達政宗公が合戦の疲れを癒やす湯浴み御殿を構え、代々の藩主が湯守を任命して大切に守り継いできた格式高い温泉郷です。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            秋保の11月・12月は、温泉街を流れる名取川の浸食によってできた名勝「磊々峡（らいらいきょう）」の表情が最もドラマチックに移ろう季節です。11月中旬の晩秋には、奇岩怪石を彩るモミジの紅葉が清流に散り敷き、11月下旬から12月にかけては、木々が葉を落とし荒々しい巨岩の造形美が姿を現します。12月中旬を過ぎると、蔵王連峰からの寒風とともに初雪が舞い始め、湯煙立ち上る露天風呂から白銀の雪景色を望む「雪見風呂」の季節が幕を開けます。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            そして冬の秋保を訪れる最大の歓びが、宮城の冬を代表する二大美食「仙台せり鍋」と「A5ランク仙台牛」です。近隣の名取市で育つ伝統野菜・仙台セリは、初冬に白く伸びる根っこに豊かな香りと甘みが凝縮され、シャキシャキとした絶妙の歯ざわりが楽しめます。厳しい基準をクリアした最高峰の黒毛和牛「仙台牛」のとろけるサーロインステーキやすき焼きとともに味わう夜は、寒さを忘れさせてくれる至福のひとときです。
          </p>
          
          <div className="bg-emerald-50/70 rounded-2xl p-5 border border-emerald-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-emerald-700" />
                11月・12月秋保温泉 旅のハイライト
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                磊々峡の奇岩初冬美・雪見露天風呂・旬の根付き仙台せり鍋・極上A5仙台牛ステーキ・日本三御湯の歴史湯浴み
              </p>
            </div>
            <a
              href="#hotels"
              className="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors whitespace-nowrap shadow-sm"
            >
              厳選名宿5選を見る
            </a>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="bg-stone-100/80 rounded-2xl p-6 border border-stone-200">
          <h2 className="text-base font-bold text-stone-900 mb-4 flex items-center gap-2">
            <Compass className="w-5 h-5 text-emerald-700" />
            目次・インデックス
          </h2>
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-stone-700">
            <a href="#rairaikyo" className="hover:text-emerald-700 hover:underline flex items-center gap-1.5">
              <span>1. 磊々峡の初冬景観：名取川の浸食が生んだ奇岩とハートの岩</span>
            </a>
            <a href="#spring-feature" className="hover:text-emerald-700 hover:underline flex items-center gap-1.5">
              <span>2. 塩化物泉のぬくもり：湯冷めしにくい「温まりの湯」と美肌効果</span>
            </a>
            <a href="#akiu-falls" className="hover:text-emerald-700 hover:underline flex items-center gap-1.5">
              <span>3. 国の名勝「秋保大滝」の初冬瀑布と伝統工芸の里</span>
            </a>
            <a href="#hotels" className="hover:text-emerald-700 hover:underline flex items-center gap-1.5">
              <span>4. 11・12月に泊まりたい秋保温泉の名宿厳選5選</span>
            </a>
            <a href="#gourmet" className="hover:text-emerald-700 hover:underline flex items-center gap-1.5">
              <span>5. 宮城冬の味覚の頂点：根っこまで旨い「仙台せり鍋」とA5仙台牛</span>
            </a>
            <a href="#itinerary" className="hover:text-emerald-700 hover:underline flex items-center gap-1.5">
              <span>6. 1泊2日 王道モデルコース（秋保ワイナリーと磊々峡散策）</span>
            </a>
            <a href="#faq" className="hover:text-emerald-700 hover:underline flex items-center gap-1.5">
              <span>7. よくある質問（FAQ）と仙台駅からのアクセス</span>
            </a>
          </nav>
        </section>

        {/* Rairaikyo Section */}
        <section id="rairaikyo" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-800">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Gorge of Bizarre Rocks</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                磊々峡の初冬景観：名取川の浸食が生んだ奇岩とハートの岩
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            温泉街の入口にかかる覗橋（のぞきばし）を中心に、名取川沿いに約1キロメートルにわたって続く「磊々峡（らいらいきょう）」。名取川の激流が岩盤を削り取って形成した深さ20メートルにおよぶ渓谷には、天斧岩（てんぷがん）、八間岩（はちけんいわ）など個性豊かな奇岩が連なります。覗橋の上から見下ろすと、岩の窪みに自然の水流が穿ったハート型の穴「覗橋のハート」が見られ、恋人の聖地としても人気を集めています。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            11月下旬の初冬になると、渓谷を覆っていた落葉樹が葉を落とし、岩肌の幾何学的な模様やエメラルドグリーンの水面がクリアに見渡せるようになります。整備された散策路を歩けば、澄み切った冷気の中に川のせせらぎが響き、心が洗われるような静寂を体験できます。12月に入ると初雪が奇岩の頂に降り積もり、水墨画のような凛とした冬の絶景が姿を現します。
          </p>
        </section>

        {/* Spring Feature Section */}
        <section id="spring-feature" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-800">
              <Waves className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Warm Chloride Waters</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                塩化物泉のぬくもり：湯冷めしにくい「温まりの湯」と美肌効果
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            秋保温泉の主たる泉質は、ナトリウム・カルシウム-塩化物泉（低張性弱アルカリ性高温泉）です。塩化物泉の最大の特徴は、温泉に含まれる塩分が肌の表面に微細な被膜を形成し、入浴後も熱の発散を防いでくれる点にあります。そのため「熱の湯」「温まりの湯」とも称され、初冬の冷え切った身体の芯までじっくりと熱を届け、湯上がりのポカポカ感がいつまでも続きます。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            さらに、弱アルカリ性の性質が肌の皮脂や角質をマイルドに清浄し、カルシウム成分が肌を引き締めてくれるため、入浴後はしっとりと滑らかな肌触りを実感できます。冷え性や関節痛、慢性皮膚病、疲労回復に優れた効能を持ち、伊達の殿様たちが戦の傷を癒やした歴史にも深く納得させられる名湯です。
          </p>
        </section>

        
        {/* Akiu Great Falls Section */}
        <section id="akiu-falls" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-800">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Great Waterfall of Japan</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                国の名勝・日本三大名瀑「秋保大滝」の初冬瀑布美と秋保工芸の里
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            秋保温泉街から車で約20分、名取川の上流に轟音とともに水煙を上げる「秋保大滝（あきうおおたき）」。幅約6メートル、落差約55メートルを誇り、那智の滝、華厳の滝と並び「日本三名瀑」の一つに数えられる国の名勝です。初冬の澄み切った冷気の中、滝壺へと一気に流れ落ちる豪快な水流と、滝周辺の岩肌にうっすらと着雪する冬の景観は息をのむ大迫力です。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            また、温泉街近郊の「秋保工芸の里」には、宮城の伝統工芸である仙台箪笥（せんだいたんす）、こけし、埋もれ木細工などの職人工房が集まっており、職人の手仕事を間近に見学したり絵付け体験を楽しむことができます。名湯と美食だけでなく、みちのくの深い文化と自然に触れる充実の冬旅が叶います。
          </p>
        </section>

        {/* Hotel List Section */}
        <section id="hotels" className="space-y-10">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold">
              <Flame className="w-3.5 h-3.5" />
              <span>Rakuten Travel Official API Verified Selection</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              11・12月に泊まりたい秋保温泉の名宿厳選5選
            </h2>
            <p className="text-stone-600 text-sm max-w-2xl mx-auto">
              楽天トラベルAPIから最新の口コミ評価・宿泊料金・空室情報を取得。初冬の名取川渓谷美と名湯、最高峰A5仙台牛＆名物せり鍋を心ゆくまで堪能できる名宿5軒をご紹介します。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/90 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Hotel Image Container */}
                  <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-stone-100">
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
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                        <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
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
                          <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                          冬の滞在おすすめポイント
                        </h4>
                        <ul className="text-xs text-stone-600 space-y-1.5 pl-1">
                          {hotel.highlights.map((hl: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="text-emerald-700 font-bold">•</span>
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tips */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="bg-emerald-50/50 p-3 rounded-xl border border-emerald-100">
                          <span className="font-bold text-emerald-900 block mb-1 flex items-center gap-1">
                            <Sparkles className="w-3.5 h-3.5" /> 客室の選び方
                          </span>
                          <p className="text-stone-600">{hotel.roomTip}</p>
                        </div>
                        <div className="bg-emerald-50/50 p-3 rounded-xl border border-emerald-100">
                          <span className="font-bold text-emerald-900 block mb-1 flex items-center gap-1">
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
                        <span className="text-xl sm:text-2xl font-extrabold text-emerald-800">
                          {hotel.price}
                        </span>
                      </div>
                      <a
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-xl shadow-md transition-all duration-200 text-sm hover:scale-[1.02]"
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
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-800">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Winter Delicacies</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                宮城冬の味覚の頂点：根っこまで旨い「仙台せり鍋」と最高峰A5仙台牛
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base text-stone-700">
            <div className="space-y-3">
              <h3 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-700" />
                冬の宮城名物「仙台せり鍋」
              </h3>
              <p className="leading-relaxed text-sm">
                宮城県名取市などで古くから栽培されてきた伝統野菜「仙台セリ」。春の七草のイメージとは異なり、冬の仙台セリは根っこが白く太く成長し、野趣あふれる香りと甘みが凝縮されています。鴨肉や地鶏ガラで取った醤油ベースの温かい出汁に、根を洗ったセリを数秒くぐらせるだけでいただく「仙台せり鍋」。シャキシャキとした根の歯ごたえと爽やかな芳香が口いっぱいに広がり、一度味わうと冬毎にリピートしたくなる宮城屈指の郷土鍋です。
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-700" />
                日本一厳しい基準をクリアした「A5仙台牛」
              </h3>
              <p className="leading-relaxed text-sm">
                全国数あるブランド牛の中でも、肉質等級が最高ランク「5」のみしか名乗ることが許されない唯一の超高級黒毛和牛「仙台牛」。宮城の清らかな清流と良質なササニシキ・ひとめぼれの稲わらを食べて育った肉質は、息をのむほど美しい霜降りと、驚くほどまろやかで上品な脂の甘みが特徴です。炭火ステーキやしゃぶしゃぶ、陶板焼きでその極上の柔らかさを堪能できます。
              </p>
            </div>
          </div>
        </section>

        {/* Itinerary Section */}
        <section id="itinerary" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-800">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Recommended 2-Day Tour</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                1泊2日 王道モデルコース：仙台駅から30分！磊々峡散策と美酒・名湯満喫の旅
              </h2>
            </div>
          </div>
          <div className="space-y-6">
            <div className="border-l-2 border-emerald-800 pl-4 sm:pl-6 space-y-2">
              <span className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider">【1日目】杜の都から名湯へ〜磊々峡奇岩散策と名宿ステイ</span>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                11:30 東北新幹線で仙台駅到着 → 駅構内で牛たんランチ
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                仙台駅の「牛たん通り」で厚切り牛たん定食を堪能。お土産処でお菓子や地酒をチェック。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                13:30 仙台駅西口より宿の無料送迎バスに乗車 → 14:15 秋保温泉到着
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                車窓から山並みの移ろいを眺めながらスムーズに到着。旅館に荷物を預けます。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                14:45 磊々峡の遊歩道を散策＆「覗橋のハート」を見学
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                奇岩怪石が連なる渓谷沿いの道をのんびり散策。初冬の清流と自然の造形美を満喫します。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                16:00 旅館へチェックイン → 渓流露天風呂で初冬の湯浴み
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                塩化物泉で身体の芯までぽかぽかに温まる。夕食は旬の仙台せり鍋とA5仙台牛に舌鼓。
              </p>
            </div>

            <div className="border-l-2 border-stone-300 pl-4 sm:pl-6 space-y-2 pt-2">
              <span className="text-xs font-extrabold text-stone-500 uppercase tracking-wider">【2日目】雪見風呂〜秋保ワイナリーとおはぎの名店へ</span>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                08:00 朝の露天風呂でリフレッシュ → 地産地消の和朝食
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                冷涼な朝の空気が心地よい庭園露天風呂。宮城産米ひとめぼれと新鮮な海山の幸の朝食。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                10:30 「秋保ワイナリー」でテイスティング＆「主婦の店 さいち」でおはぎ購入
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                地元ブドウで醸造されるワインを試飲。全国的に有名なおはぎの名店「さいち」で出来立てのあんこおはぎを購入し、送迎バスで仙台駅へ。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-800">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Traveler's FAQ</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                よくある質問（FAQ）と初冬の旅のアドバイス
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-stone-50 border border-stone-200/70 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-emerald-800 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links / Related Guides */}
        <section className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest">Related Winter Hot Spring Guides</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい東北・東日本の冬・温泉特集
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
              11月・12月ならではの雪景色や旬の郷土グルメを堪能できる全国各地の名湯ガイドを多数公開中。次の旅の計画にぜひお役立てください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-iwate-hanamaki-onsen-yukimi-maesawa-beef-stay"
              className="bg-emerald-900/80 hover:bg-emerald-900 p-4 rounded-2xl transition border border-emerald-800/50 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">岩手・花巻</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">花巻温泉郷 白銀雪見露天と前沢牛＆白金豚の宿</h3>
            </Link>
            <Link 
              href="/winter-yamagata-ginzan-onsen-snow-taisho-stay"
              className="bg-emerald-900/80 hover:bg-emerald-900 p-4 rounded-2xl transition border border-emerald-800/50 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">山形・銀山</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">銀山温泉 大正ロマン雪景色とガス灯情緒の宿</h3>
            </Link>
            <Link 
              href="/winter-akita-nyuto-onsen-yukimi-kiritanpo-stay"
              className="bg-emerald-900/80 hover:bg-emerald-900 p-4 rounded-2xl transition border border-emerald-800/50 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">秋田・乳頭</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">乳頭温泉郷 秘湯の雪見露天ときりたんぽ鍋の宿</h3>
            </Link>
            <Link 
              href="/winter-fukushima-aizu-higashiyama-snow-heritage-stay"
              className="bg-emerald-900/80 hover:bg-emerald-900 p-4 rounded-2xl transition border border-emerald-800/50 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">福島・会津東山</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">会津東山温泉 雪化粧の渓谷美と武家屋敷情緒の宿</h3>
            </Link>
            <Link 
              href="/winter-tochigi-kinugawa-onsen-valley-snow-stay"
              className="bg-emerald-900/80 hover:bg-emerald-900 p-4 rounded-2xl transition border border-emerald-800/50 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">栃木・鬼怒川</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">鬼怒川温泉 初冬渓谷美と日光生ゆば＆とちぎ和牛の宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-emerald-900/80 hover:bg-emerald-900 p-4 rounded-2xl transition border border-emerald-800/50 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">全国の厳選温泉・宿特集まとめを見る</h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-miyagi-akiu-onsen-sendai-beef-serinabe-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
