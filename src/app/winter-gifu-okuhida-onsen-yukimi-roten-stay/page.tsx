import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Mountain, Car
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12月奥飛騨温泉郷】飛騨牛朴葉味噌焼き会席！名宿5選',
  description: '北アルプス穂高連峰の懐に抱かれた日本屈指の温泉天国・岐阜県奥飛騨温泉郷。11月下旬の初冠雪から12月の白銀世界へと移ろう初冬。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '奥飛騨温泉郷 宿泊 11月 12月, 奥飛騨 雪見露天風呂, 平湯温泉 福地温泉 新穂高温泉, 飛騨牛 朴葉味噌 旅館, 深山桜庵 孫九郎 槍見館, 新穂高ロープウェイ 冬, 奥飛騨 冬 ドライブ スタッドレスタイヤ',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-gifu-okuhida-onsen-yukimi-roten-stay/",
  },
  openGraph: {
    title: '【11・12月奥飛騨温泉郷】飛騨牛朴葉味噌焼き会席！名宿5選',
    description: '北アルプス穂高連峰の懐に抱かれた日本屈指の温泉天国・岐阜県奥飛騨温泉郷。11月下旬の初冠雪から12月の白銀世界へと移ろう初冬。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-gifu-okuhida-onsen-yukimi-roten-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月奥飛騨温泉郷の雪見露天と北アルプス絶景】圧倒的湯量と雄大な山岳美・飛騨牛朴葉味噌焼き会席の宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月奥飛騨温泉郷の雪見露天と北アルプス絶景】圧倒的湯量と雄大な山岳美・飛騨牛朴葉味噌焼き会席の宿5選",
    description: "北アルプス穂高連峰の懐に抱かれた日本屈指の温泉天国・岐阜県奥飛騨温泉郷。11月下旬の初冠雪から12月の白銀世界へと移ろう初冬、毎分44,000リットルを超える圧倒的な湯量を誇る雪見大露天風呂と、極上A5等級飛騨牛の香ばしい朴葉味噌焼き・囲炉裏会席を五感で堪能する冬の名宿ガイド。",
  }
};

export default function OkuhidaWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-gifu-okuhida-onsen-yukimi-roten-stay#article",
        "headline": "【11・12月奥飛騨温泉郷の雪見露天と北アルプス絶景】圧倒的湯量と雄大な山岳美・飛騨牛朴葉味噌焼き会席の宿5選",
        "description": "北アルプス穂高連峰の懐に抱かれた日本屈指の温泉天国・岐阜県奥飛騨温泉郷。11月下旬の初冠雪から12月の白銀世界へと移ろう初冬、毎分44,000リットルを超える圧倒的な湯量を誇る雪見大露天風呂と、極上A5等級飛騨牛の香ばしい朴葉味噌焼き・囲炉裏会席を五感で堪能する冬の名宿ガイド。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "datePublished": "2026-09-27T00:00:00+09:00",
        "dateModified": "2026-09-27T00:00:00+09:00",
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
          "@id": "https://croud-travel.pages.dev/winter-gifu-okuhida-onsen-yukimi-roten-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-gifu-okuhida-onsen-yukimi-roten-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "奥飛騨温泉郷の11月・12月の雪の状況と道路の注意点は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "奥飛騨温泉郷は標高約800m〜1,200mの豪雪山岳地帯に位置します。例年11月中旬に山頂付近が冠雪し、11月下旬〜12月上旬には温泉街にも本格的な積雪や路面凍結が発生します。お車で訪れる場合は必ずスタッドレスタイヤの装着またはタイヤチェーンの携行が義務付けられます。松本方面からの安房峠道路（国道158号トンネル）や高山方面からの国道158号は除雪体制が整っていますが、早朝・日没後のブラックアイスバーンには厳重な警戒が必要です。雪道運転に不慣れな方は、JR高山駅またはJR松本駅からの特急バス（濃飛バス・アルピコ交通）の利用が最も安全でおすすめです。"
            }
          },
          {
            "@type": "Question",
            "name": "奥飛騨温泉郷（平湯・福地・新平湯・栃尾・新穂高）の泉質の特徴は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "奥飛騨温泉郷は5つの独立した温泉地から成り、湧出量は毎分44,000リットル以上と日本第2位を誇ります。平湯温泉は武田信玄ゆかりの歴史を持ち、含硫黄・炭酸水素塩泉で湯の花が舞う濁り湯。福地温泉は平安時代の村上天皇が湯治に訪れたと伝わる重曹泉・炭酸水素塩泉でエメラルドグリーンの美しい濁り湯が特徴。新穂高温泉は蒲田川沿いに単純温泉や塩化物泉が自噴し、日本一の露天風呂天国として知られます。多くの宿が自家源泉を複数本所有し、加水・加温なしの贅沢な源泉かけ流しを実現しています。"
            }
          },
          {
            "@type": "Question",
            "name": "11月・12月の新穂高ロープウェイの運行状況と見どころは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "日本唯一の2階建てゴンドラが運行する新穂高ロープウェイは通年営業しています。標高2,156mの西穂高口駅屋上展望台からは、ミシュラン・グリーンガイド・ジャポンで二つ星を獲得した北アルプス（槍ヶ岳・穂高連峰・笠ヶ岳）の360度大雪山パノラマが眼前に迫ります。初冬は空気が極限まで澄み渡り、白銀に輝く峰々と青空のコントラストが一年で最も鮮やかです。山頂の気温は11月で0度〜氷点下5度、12月には氷点下10度以下まで冷え込むため、厳重な防寒着（ダウン、ニット帽、手袋、滑りにくい冬靴）が必須です。"
            }
          },
          {
            "@type": "Question",
            "name": "奥飛騨温泉郷で絶対に食べるべき冬の名物グルメは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "飛騨が誇る黒毛和牛の最高峰『A5等級飛騨牛』です。特に、乾燥させた朴（ほお）の葉の上に自家製の特製味噌、ネギ、キノコ、飛騨牛を乗せて炭火で香ばしく焼き上げる『飛騨牛の朴葉味噌焼き』は、立ち上る甘香ばしい匂いと肉の融けるようなサシの甘みが白米やお酒に抜群に合います。また、清流で育つ岩魚（いわな）の塩焼きや香ばしい『骨酒』、奥飛騨サーモンのお造り、平湯の温泉水で茹でる『はんたい玉子（黄身が固く白身がとろりとした温泉卵）』も必食の美味です。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.pages.dev/winter-gifu-okuhida-onsen-yukimi-roten-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "匠の宿　深山桜庵（共立リゾート）",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F65440%2F65440.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "穂高荘　山のホテル",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70916%2F70916.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "元湯　孫九郎",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F149440%2F149440.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "槍見の湯　槍見館",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F109100%2F109100.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "奥飛騨　平湯温泉　岡田旅館",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54007%2F54007.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "匠の宿　深山桜庵（共立リゾート）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/65440/65440.jpg",
              rating: 4.32,
              reviews: 1764,
              price: "¥17,800〜",
              access: "■ＪＲ高山駅よりバスで約６０分「平湯温泉」下車、徒歩約７分　■長野道松本ICよりR158で約７０分。",
              special: "★2025年春リニューアル★北アルプスを望む露天風呂で湯浴みの休日★ご夕食は飛騨牛を堪能！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F65440%2F65440.html",
              story: "平湯温泉の高台、約1万5千坪の広大な敷地に静かに佇む「匠の宿 深山桜庵」。飛騨の伝統的な木造建築美を現代に蘇らせた館内は、重厚な梁と木の温もりに満ちあふれ、初冬の静寂が心地よく漂います。自慢は毎分極めて豊富な湧出量を誇る自家源泉を惜しみなく注ぎ込む大浴場と大露天風呂。男湯・女湯ともに広々とした湯船から雪化粧を始めた北アルプスの山並みを望み、冷涼な澄み切った外気の中で熱めの良泉に浸かる時間は格別です。さらに趣の異なる2つの貸切露天風呂と2つの貸切内湯が空いていれば予約不要・無料で何度でも利用できるのも大きな魅力。湯上がり処では名物の夜鳴きそばや朝の牛乳サービスなど、おもてなしの心づくしが随所に光ります。",
              roomTip: "客室は飛騨の銘木を用いた落ち着いた和室や和洋室。専用の天然温泉客室露天風呂を備えた離れ特別室なら、誰にも邪魔されずに雪見風呂を独占できます。",
              gourmetTip: "夕食は飛騨の味覚を結集した炭火焼き会席。メインはきめ細やかなサシがとろける最高峰A5ランク飛騨牛の炭火炙り焼きや朴葉味噌焼き。香ばしい朴葉の香りと自家製味噌の甘みが肉の旨味を極限まで引き出します。",
              highlights: [
                "1万5千坪の敷地に佇む木造和風建築＆北アルプスを望む雪見大露天風呂",
                "無料の趣異なる4つの貸切風呂（露天2・内湯2）＆夜鳴きそばサービス"
                ,"最高峰A5ランク飛騨牛の炭火炙り焼き＆香ばしい朴葉味噌の極上会席"
              ]
            },
            {
              id: 2,
              name: "穂高荘　山のホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/70916/70916.jpg",
              rating: 4.27,
              reviews: 778,
              price: "¥15,400〜",
              access: "長野道松本ＩＣ/北陸道富山ＩＣ→約80分・東海北陸道高山ＩＣ→90分・ＪＲ高山駅→バス80分",
              special: "奥飛騨最大級！絶景槍ヶ岳を望む清流沿いの混浴大野天風呂で非日常の休日を♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70916%2F70916.html",
              story: "新穂高温泉の清流・蒲田川沿いに位置し、北アルプス槍ヶ岳・穂高連峰を真正面に仰ぎ見る山岳リゾート「穂高荘 山のホテル」。全館が北欧の山岳ロッジと飛騨の伝統美を融合させた格調高い造りで、初冬の澄んだ山岳リゾートの趣に溢れています。宿の最大の誇りは、専用の「スロープカー」で渓谷へと下る野趣あふれる大露天風呂「山峡槍の湯」。蒲田川の清流のせせらぎと対岸の切り立った岩肌、そして雪を戴く雄大な峰々を間近に望むロケーションは息をのむ大迫力。乳白色やエメラルドグリーンに変化する天然かけ流しの湯に浸かれば、自然と一体になる圧倒的な解放感を味わえます。女性専用の露天風呂や広々とした貸切露天風呂も完備されています。",
              roomTip: "北アルプス側の上層階客室がおすすめ。ピクチャーウィンドウから刻一刻と表情を変える白銀の槍ヶ岳や穂高連峰のモルゲンロート（朝焼け）を堪能できます。",
              gourmetTip: "厳選された飛騨牛のしゃぶしゃぶやステーキを主菜とした季節の山岳会席。岩魚の塩焼きや奥飛騨サーモンのお造り、飛騨の根菜をじっくり煮込んだ郷土鍋が冷えた体を芯から温めてくれます。",
              highlights: [
                "スロープカーで渓谷へ下る大露天「山峡槍の湯」＆槍ヶ岳・穂高連峰の絶景",
                "乳白色・エメラルドグリーンに変化する天然名湯＆女性専用・貸切露天完備"
                ,"厳選飛騨牛しゃぶしゃぶ・ステーキ＆奥飛騨サーモンと冬の山岳会席"
              ]
            },
            {
              id: 3,
              name: "元湯　孫九郎",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/149440/149440.jpg",
              rating: 4.57,
              reviews: 107,
              price: "¥18,000〜",
              access: "ＪＲ　高山駅よりお車にて約1時間（車の冬装備要）、路線バスで７０分",
              special: "2015年内風呂「大湯」、2019年外風呂「蒼の湯」完成。湯めぐり気分で源泉を堪能ください",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F149440%2F149440.html",
              story: "奥飛騨温泉郷の中でも最も静寂が守られ、日本昔話の世界のような素朴な風情が残る福地温泉。その中心に佇む「元湯 孫九郎」は、敷地内に泉質・泉温の異なる4本もの自家源泉を有する名湯宿です。毎分1,000リットル以上という驚異的な自噴湧出量を誇り、加水・加温・循環・消毒を一切行わない完全な「純生掛け流し」を徹底。特に名物の大露天風呂「帝釈の湯」や「音の湯」では、空気に触れて微妙に色合いを変えるエメラルドグリーンやウグイス色の濁り湯が豪快に注がれています。11月・12月の夜には、露天風呂の周囲に薄く雪が積もり、満天の星空と雪あかりの中で、肌に吸い付くような濃密な炭酸水素塩泉の恵みをじっくりと味わうことができます。",
              roomTip: "古民家の風情を色濃く残す本館和室や、木の香る落ち着いた新館客室。窓の外には福地の素朴な山里の冬景色が広がり、日常の喧騒を完全に忘れさせてくれます。",
              gourmetTip: "夕食は飛騨の風土が息づく郷土会席。炭火の香る飛騨牛の朴葉ステーキはもちろん、山菜の水煮や奥飛騨の伏流水で育てた岩魚の骨酒、福地名物の素朴で温かい郷土料理の数々が心を満たします。",
              highlights: [
                "4本の自家源泉・毎分1,000L超の自噴湧出＆完全無加水無加温の純生掛け流し",
                "エメラルドグリーンの美肌濁り湯「帝釈の湯」＆夜の雪あかりと満天の星空"
                ,"囲炉裏端で味わう飛騨牛朴葉ステーキ＆岩魚の骨酒と素朴な滋味会席"
              ]
            },
            {
              id: 4,
              name: "槍見の湯　槍見館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/109100/109100.jpg",
              rating: 4.67,
              reviews: 105,
              price: "¥19,800〜",
              access: "高山駅から新穂高温泉行バス乗車、中尾高原口下車、徒歩8分",
              special: "源泉かけ流し！槍ヶ岳を眺める７つの露天風呂が自慢の一軒宿。郷愁漂う癒しの空間で、贅沢なひとときを",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F109100%2F109100.html",
              story: "新穂高温泉の最奥部、槍ヶ岳の登山口へと続く蒲田川のほとりに佇む「槍見の湯 槍見館」。古民家の古材を移築して建てられた重厚な茅葺き屋根の長屋門をくぐると、囲炉裏の煙と木の温もりが旅人を迎えます。宿の代名詞は、川床の巨岩を配して造られた混浴大露天風呂「槍見の湯」。湯船の正面には日本屈指の秀峰・槍ヶ岳の鋭利な切先が堂々とそびえ立ち、初冬の澄み渡る青空と白銀の頂との対比は息をのむ美しさです（女性専用時間あり）。さらに渓流沿いには趣の異なる4つの貸切露天風呂（播隆の湯、渓流の湯など）が点在し、雪景色の中で渓流の轟音に包まれながら贅沢な秘湯浴を楽しめます。",
              roomTip: "蒲田川の清流と槍ヶ岳を望む囲炉裏付きの客室が秀逸。自在鉤から下がる鉄瓶でお茶を淹れながら、静かに雪景色を眺める贅沢な時間が流れます。",
              gourmetTip: "食事は囲炉裏端でいただく炭火炉端会席。飛騨牛の朴葉味噌焼きをはじめ、炭火でじっくり遠火焼きにした川魚、山菜やキノコ、飛騨の素朴な手作り豆腐など、山あいの恵みを五感で堪能できます。",
              highlights: [
                "茅葺き長屋門と囲炉裏の古民家風情＆槍ヶ岳の尖鋒を正面に望む川床巨岩露天",
                "清流蒲田川沿いの4つの無料貸切露天風呂巡り＆本物の秘湯体験"
                ,"囲炉裏の炭火でじっくり焼く岩魚塩焼き＆飛騨牛炭火炉端会席"
              ]
            },
            {
              id: 5,
              name: "奥飛騨　平湯温泉　岡田旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/54007/54007.jpg",
              rating: 3.91,
              reviews: 627,
              price: "¥15,950〜",
              access: "平湯温泉方面行きバス乗車、「平湯温泉駅」下車／松本ＩＣより６０分／富山ＩＣより９０分／清見ＩＣより８０分",
              special: "全て掛け流しの温泉旅館。貸切＆露天風呂付客室の温もり感じるおもてなしの湯宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54007%2F54007.html",
              story: "奥飛騨温泉郷の玄関口であり、武田信玄の家臣が白猿に教えられたという伝説を持つ平湯温泉の中心に建つ「奥飛騨 平湯温泉 岡田旅館」。創業から歴史を重ねる老舗宿でありながら、充実した施設とあたたかいおもてなしで高い支持を得ています。自慢は、木造の湯屋造りが美しい大浴殿と、開放感あふれる庭園露天風呂。毎分豊富な湧出量を誇る平湯の良質な源泉（ナトリウム・カルシウム・マグネシウム-炭酸水素塩・塩化物泉）が注がれ、湯の花が舞う肌触りの良いお湯が旅の疲れを解きほぐします。初冬の冷気の中、雪をかぶった庭園の木々を眺めながら入る露天風呂は風情満点。平湯バスターミナルからも徒歩約3分と、冬の公共交通機関での旅にも絶好の立地です。",
              roomTip: "数寄屋造りの趣ある「本館」のほか、贅を尽くした露天風呂付き客室「宵里（よいさと）」が人気。プライベートな空間で平湯の美肌湯を心ゆくまで満喫できます。",
              gourmetTip: "料理長が腕を振るう季節の飛騨会席。最高級飛騨牛の陶板焼きやすき焼きをメインに、飛騨高山から仕入れる冬野菜、旬の日本海魚介をバランスよく取り入れた贅沢な献立です。",
              highlights: [
                "平湯温泉中心部の老舗宿＆湯屋造りの大浴殿と雪化粧した日本庭園露天風呂",
                "平湯バスターミナル徒歩3分の好アクセス＆上質な露天風呂付き客室"
                ,"最高級飛騨牛陶板焼き＆飛騨高山の冬野菜と日本海の旬魚が彩る会席料理"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-emerald-900 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-950">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85"
          alt="初冬の奥飛騨温泉郷・北アルプス穂高連峰の雪景色と湯けむり立ち上る雪見露天風呂"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/90 text-emerald-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-emerald-800/50">
            <Mountain className="w-4 h-4 text-emerald-300" />
            <span>11月・12月限定 北アルプス白銀の山岳美と日本一の雪見露天特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月奥飛騨温泉郷の雪見露天と北アルプス絶景】<br className="hidden sm:inline" />
            圧倒的湯量と雄大な山岳美・飛騨牛朴葉味噌焼き会席の宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            槍ヶ岳・穂高連峰の麓に湧く毎分44,000Lの天然名湯。11月下旬の初雪から12月の白銀世界へと染まる渓谷で、息をのむ大自然と湯けむりに包まれる雪見露天風呂。香ばしい飛騨牛朴葉味噌焼きと囲炉裏の温もりに浸る至福の冬旅。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-emerald-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-emerald-400" /> 岐阜県高山市奥飛騨温泉郷（平湯・福地・新穂高）</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
        
        {/* Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-emerald-100">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-800">
              <Mountain className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Northern Alps Hot Spring Paradise</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                北アルプスの懐に抱かれた露天風呂天国。初冬の奥飛騨が魅せる白銀と湯煙の神秘
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            中部山岳国立公園の主峰、標高3,000メートル級の山々が連なる北アルプス・飛騨山脈。その南西山麓に位置する岐阜県高山市の「奥飛騨温泉郷」は、平湯（ひらゆ）、福地（ふくじ）、新平湯（しんひらゆ）、栃尾（とちお）、新穂高（しんほたか）という5つの独立した名湯が連なる一大温泉郷です。湧出量は全国屈指の毎分44,000リットル以上を誇り、露天風呂の総数は日本一。川床を掘ればどこからでも湯が湧き出ると言われるほど、大地の生命力に満ちあふれています。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            11月に入ると標高の高い笠ヶ岳や西穂高岳の稜線が純白の雪で覆われ、山麓の木々を彩っていた紅葉の季節から、モノトーンの厳粛な白銀世界へと劇的な変貌を遂げます。11月下旬から12月にかけて温泉街にも雪が舞い降り、渓流沿いや山あいの野天風呂には「雪見風呂」の最高の舞台が整います。氷点下に張り詰めた澄み渡る大気の中、湯気もうもうと立ち上る熱々の濁り湯に肩まで沈める瞬間は、まさに大自然と一体となる極楽の体験です。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            そして雪深い奥飛騨の夜を温めてくれるのが、飛騨の風土が育んだ郷土のご馳走です。きめ細やかな霜降りが美しい最高等級「飛騨牛」を、芳醇な自家製味噌とともに枯朴葉に乗せて炙る「朴葉味噌焼き」。立ち上る香ばしい香りは食欲をそそり、噛みしめるほどに肉の甘みと味噌のコクが口いっぱいに広がります。囲炉裏の炭火でじっくりと遠火焼きされた清流の岩魚、奥飛騨の山菜や冬野菜の鍋。雪あかりと囲炉裏の火が織りなす静謐な冬のぬくもりが、旅人の心を深く満たしてくれます。
          </p>
          
          <div className="bg-emerald-50/70 rounded-2xl p-5 border border-emerald-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-emerald-600" />
                11月・12月奥飛騨温泉郷 旅のハイライト
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                日本一の露天風呂数と圧倒的湯量・新穂高ロープウェイから望む360度大雪山パノラマ・本場飛騨牛朴葉味噌会席
              </p>
            </div>
            <a
              href="#hotels"
              className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors whitespace-nowrap shadow-sm"
            >
              名宿5選を見る
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
            <a href="#climate" className="hover:text-emerald-700 hover:underline flex items-center gap-1.5">
              <span>1. 11月・12月の気候と初冬の雪道対策ガイド</span>
            </a>
            <a href="#areas" className="hover:text-emerald-700 hover:underline flex items-center gap-1.5">
              <span>2. 5大温泉地の個性と多彩な泉質めぐり</span>
            </a>
            <a href="#hotels" className="hover:text-emerald-700 hover:underline flex items-center gap-1.5">
              <span>3. 奥飛騨温泉郷 11・12月に泊まりたい名宿厳選5選</span>
            </a>
            <a href="#gourmet" className="hover:text-emerald-700 hover:underline flex items-center gap-1.5">
              <span>4. 冬の奥飛騨グルメ：飛騨牛朴葉味噌焼きと囲炉裏料理</span>
            </a>
            <a href="#itinerary" className="hover:text-emerald-700 hover:underline flex items-center gap-1.5">
              <span>5. 1泊2日 王道モデルコース（新穂高ロープウェイ＆秘湯巡り）</span>
            </a>
            <a href="#faq" className="hover:text-emerald-700 hover:underline flex items-center gap-1.5">
              <span>6. よくある質問（FAQ）とアクセス・冬期交通情報</span>
            </a>
          </nav>
        </section>

        {/* Climate & Winter Guide */}
        <section id="climate" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-sky-50 text-sky-800">
              <Snowflake className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              11月・12月の気候特性と雪道・服装の完全準備ガイド
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Calendar className="w-4 h-4 text-emerald-600" />
                初冬の気温推移と降雪の時期
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                奥飛騨温泉郷は標高が約800m（平湯）から1,000m超（新穂高）に位置するため、東京や名古屋などの平野部と比べて気温が約8〜10度低くなります。
              </p>
              <ul className="text-xs sm:text-sm text-stone-600 space-y-2 list-disc list-inside bg-stone-50 p-4 rounded-xl">
                <li><strong>11月上旬〜中旬：</strong>日中の最高気温は10〜14度前後ですが、朝晩は0〜3度まで急激に冷え込みます。山頂稜線は冠雪し、晩秋と冬の境目を迎えます。</li>
                <li><strong>11月下旬：</strong>平湯温泉街周辺でも初雪が観測され、路面凍結（アイスバーン）が始まりやすくなります。</li>
                <li><strong>12月上旬〜下旬：</strong>本格的な真冬となり、日中の最高気温でも0〜3度、夜間から早朝はマイナス5度〜マイナス10度まで冷え込みます。一面の白銀世界となります。</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Car className="w-4 h-4 text-amber-600" />
                自動車アクセスとスタッドレス必須条件
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                11月中旬以降にマイカーやレンタカーで奥飛騨温泉郷を訪れる場合、<strong>全行程でスタッドレスタイヤの装着が絶対に必須</strong>です。
              </p>
              <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-4 text-xs sm:text-sm text-amber-950 space-y-2">
                <p className="font-semibold flex items-center gap-1.5 text-amber-800">
                  <ShieldCheck className="w-4 h-4" /> 雪道運転の重要注意事項
                </p>
                <p>
                  長野県松本方面からの国道158号・安房峠道路（トンネル）や、岐阜県高山市街地からの国道158号は定期的に除雪が行われますが、トンネル出口や橋梁部、日陰のカーブは日中でも凍結している箇所があります。急ブレーキ・急ハンドルは厳禁です。雪道運転に少しでも不安がある方は、JR高山駅またはJR松本駅からの特急バス（濃飛バス）の利用を強く推奨します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5 Distinct Onsen Areas */}
        <section id="areas" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-800">
              <Landmark className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              個性豊かな5つの温泉地：平湯・福地・新平湯・栃尾・新穂高
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            奥飛騨温泉郷の魅力は、車で十数分圏内に趣も泉質もまったく異なる5つの温泉地が点在している点にあります。旅のスタイルやお好みの泉質に合わせて最適な滞在拠点を選べます。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <h3 className="font-bold text-stone-900 flex items-center gap-1.5 text-sm">
                <Flame className="w-4 h-4 text-emerald-600" />
                平湯温泉（ひらゆ）
              </h3>
              <p className="text-stone-600 leading-relaxed">
                奥飛騨最古の温泉地。戦国時代、武田信玄の軍勢が毒霧に倒れた際、白猿が導いて発見した伝説を持ちます。ナトリウム・カルシウム-炭酸水素塩・塩化物泉など、湯の花が舞う褐色の濃厚な濁り湯が特徴。バスターミナルがあり交通の要衝。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <h3 className="font-bold text-stone-900 flex items-center gap-1.5 text-sm">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                福地温泉（ふくじ）
              </h3>
              <p className="text-stone-600 leading-relaxed">
                平安時代に村上天皇が湯治に訪れたことから「天皇泉」とも呼ばれる隠れ里。古民家が建ち並び、静寂に包まれた大人向けの高級旅館が集まります。エメラルドグリーンに輝く自家源泉など、驚異的な湧出量の純生掛け流しが自慢。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <h3 className="font-bold text-stone-900 flex items-center gap-1.5 text-sm">
                <Mountain className="w-4 h-4 text-emerald-600" />
                新穂高温泉（しんほたか）
              </h3>
              <p className="text-stone-600 leading-relaxed">
                北アルプス槍ヶ岳や穂高連峰の登山口に位置する山岳秘湯。蒲田川の清流沿いに巨岩を配した野趣あふれる川床露天風呂が点在し、雪化粧した3,000m峰を真正面に仰ぎ見る日本屈指の大自然ロケーションを誇ります。
              </p>
            </div>
          </div>
        </section>

        {/* Hotels List */}
        <section id="hotels" className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Rakuten Travel Verified Luxury Inns</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              11・12月奥飛騨温泉郷 泊まりたい名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              楽天トラベルの高評価データと現地取材をもとに、雪見露天風呂の風情、飛騨牛料理のクオリティ、おもてなしの格式を兼ね備えた最高峰の5宿を厳選。
            </p>
          </div>

          <div className="space-y-10">
            {hotelList.map((h) => (
              <div
                key={h.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/90 hover:shadow-md transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Image Column */}
                  <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[280px] bg-stone-100">
                    <Image
                      src={h.img}
                      alt={h.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute top-4 left-4 bg-stone-900/85 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      厳選第{h.id}位
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 text-amber-500">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="text-sm font-bold text-stone-900">{h.rating}</span>
                          <span className="text-xs text-stone-400">（{h.reviews}件のクチコミ）</span>
                        </div>
                        <span className="text-xs font-medium px-2.5 py-1 bg-stone-100 text-stone-600 rounded-lg">
                          目安: {h.price} / 泊
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                        {h.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                        {h.access}
                      </p>

                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed bg-stone-50/80 p-3.5 rounded-xl border border-stone-100">
                        {h.special}
                      </p>

                      <div className="pt-2 space-y-2">
                        <h4 className="text-xs font-bold text-stone-900 tracking-wider uppercase flex items-center gap-1.5 text-emerald-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          宿の魅力と客室・温泉・美食のこだわり
                        </h4>
                        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                          {h.story}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs">
                        <div className="p-2.5 rounded-xl bg-emerald-50/50 border border-emerald-100 text-emerald-950">
                          <span className="font-bold block text-emerald-800 mb-0.5">客室の選び方：</span>
                          {h.roomTip}
                        </div>
                        <div className="p-2.5 rounded-xl bg-amber-50/50 border border-amber-100 text-amber-950">
                          <span className="font-bold block text-amber-800 mb-0.5">料理長のこだわり：</span>
                          {h.gourmetTip}
                        </div>
                      </div>

                      <div className="space-y-1.5 pt-2">
                        {h.highlights.map((hl, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-stone-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="text-xs text-stone-400">
                        ※最新の空室状況・限定プランは楽天トラベル公式でご確認ください
                      </div>
                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200"
                      >
                        <span>空室・料金プランを確認</span>
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
            <div className="p-2 rounded-xl bg-amber-50 text-amber-800">
              <Utensils className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の味覚の真髄：極上A5飛騨牛の朴葉味噌焼きと炭火囲炉裏会席
            </h2>
          </div>
          
          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <p>
              雪に閉ざされる冬の飛騨地方において、食事は何よりの贅沢であり旅のハイライトです。中でも代表格が「飛騨牛（ひだぎゅう）」。岐阜県の清らかな北アルプスの雪解け水と澄んだ空気、そして匠の肥育技術によって育てられた黒毛和牛であり、きめ細やかなサシ（霜降り）と豊かな甘み、そしてとろけるような柔らかさが特徴です。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-600" />
                  伝統の郷土料理「朴葉味噌焼き」の奥深さ
                </h3>
                <p className="text-stone-600 text-xs leading-relaxed">
                  朴（ほお）の木の枯葉は火に強く、独特の芳香を持ちます。この葉の上に、地元の麹味噌、みりん、刻みネギ、椎茸などを合わせ、その上に上質な飛騨牛を乗せて炭火でじっくりと炙ります。味噌の焦げる香ばしい香りが立ち上り、レアに仕上がった飛騨牛を絡めて頬張れば、肉の脂の甘みと味噌の熟成されたコクが混然一体となり、至福の美味しさが広がります。
                </p>
              </div>
              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  囲炉裏でじっくり焼く清流の恵みと骨酒
                </h3>
                <p className="text-stone-600 text-xs leading-relaxed">
                  北アルプスの雪解け水で育つ清流の女王「岩魚（いわな）」。囲炉裏の炭火の周りに串を立て、遠火で数時間かけてじっくりと焼き上げます。皮はパリッと香ばしく、身はふっくらジューシー。さらに、素焼きした熱々の岩魚に辛口の熱燗を注ぎ込む名物「岩魚の骨酒」は、魚の旨味と脂が酒に溶け出し、冷え切った冬の体を芯から温めてくれます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Model Course */}
        <section id="itinerary" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-800">
              <Clock className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              1泊2日 理想の冬の王道モデルコース：白銀アルプスと名湯・飛騨牛を満喫
            </h2>
          </div>

          <div className="space-y-6">
            {/* Day 1 */}
            <div className="border-l-2 border-emerald-500 pl-4 sm:pl-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 font-bold text-xs rounded-md">
                  1日目
                </span>
                <h3 className="text-base sm:text-lg font-bold text-stone-900">
                  高山から奥飛騨へ・平湯大滝の氷瀑予兆と雪見露天風呂
                </h3>
              </div>
              <ul className="text-xs sm:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li><strong>11:30 JR高山駅到着：</strong>特急ひだ号で高山駅へ。駅前で濃飛バス新穂高温泉行きに乗車、またはスタッドレス装着レンタカーで出発。</li>
                <li><strong>13:00 平湯温泉散策＆足湯：</strong>「平湯バスターミナル」に到着。名物「はんたい玉子」を味わい、温泉街の足湯でひと休み。少し足を延ばして落差64mの「平湯大滝」へ（12月下旬からは結氷が始まります）。</li>
                <li><strong>15:30 宿にチェックイン：</strong>早めのチェックインで、日没前の雪見露天風呂へ。夕暮れに染まる北アルプスの稜線と湯けむりを眺めながらの贅沢な湯あみ。</li>
                <li><strong>18:30 囲炉裏会席ディナー：</strong>最高峰A5ランク飛騨牛の朴葉味噌焼きやすき焼き、岩魚の塩焼きと地酒に舌鼓。</li>
                <li><strong>21:30 星空と雪あかりの夜間露天：</strong>標高1,000mの澄み切った冬空に輝く満天の星を眺めながら、心静かに就寝。</li>
              </ul>
            </div>

            {/* Day 2 */}
            <div className="border-l-2 border-emerald-500 pl-4 sm:pl-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 font-bold text-xs rounded-md">
                  2日目
                </span>
                <h3 className="text-base sm:text-lg font-bold text-stone-900">
                  新穂高ロープウェイで標高2,156mの白銀パノラマ＆飛騨高山観光へ
                </h3>
              </div>
              <ul className="text-xs sm:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li><strong>07:30 朝の澄んだ空気で朝風呂＆郷土朝食：</strong>朝の露天風呂で目覚め、朴葉味噌や温泉水で炊いたご飯で活力をチャージ。</li>
                <li><strong>09:30 新穂高ロープウェイへ：</strong>第1・第2ロープウェイを乗り継ぎ、雲上の西穂高口駅展望台へ。眼前にそびえる槍ヶ岳・西穂高岳の雄大な白銀パノラマに息をのむ。</li>
                <li><strong>12:30 新穂高温泉の立ち寄り野天風呂：</strong>清流・蒲田川沿いの無料足湯や日帰り野天風呂で初冬の温泉情緒を満喫。</li>
                <li><strong>14:30 飛騨高山・古い町並み散策：</strong>バスで高山へ戻り、国選定重要伝統的建造物群保存地区の「古い町並み（上三之町）」を散策。造り酒屋の杉玉の下で新酒の試飲やお土産探し。</li>
                <li><strong>17:00 JR高山駅より帰路へ：</strong>特急ひだ号で名古屋・大阪方面へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        

        {/* Related Features & Internal Links */}
        <section className="bg-stone-100/80 rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-6">
          <div className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-700" />
              あわせて読みたい全国の冬特集・関連温泉ガイド
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              冬の味覚、名湯露天風呂、雪景色を楽しむ日本全国の厳選特集記事。旅の目的に合わせてぜひご覧ください。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 text-xs sm:text-sm">
            <Link
              href="/winter-shirakawago-gassho-snow-illumination-stay"
              className="p-3.5 bg-white rounded-xl border border-stone-200/80 hover:border-emerald-500 hover:shadow-sm transition-all group"
            >
              <div className="font-bold text-stone-900 group-hover:text-emerald-700 mb-1">
                白川郷の合掌造り雪景色＆ライトアップ特集
              </div>
              <p className="text-xs text-stone-500 line-clamp-2">
                世界遺産・白川郷の幻想的な冬のライトアップと高山・飛騨古川の名宿ガイド。
              </p>
            </Link>

            <Link
              href="/winter-gifu-gero-onsen-fireworks-hida-beef-stay"
              className="p-3.5 bg-white rounded-xl border border-stone-200/80 hover:border-emerald-500 hover:shadow-sm transition-all group"
            >
              <div className="font-bold text-stone-900 group-hover:text-emerald-700 mb-1">
                下呂温泉の冬花火と美肌の湯・飛騨牛会席
              </div>
              <p className="text-xs text-stone-500 line-clamp-2">
                日本三名泉・下呂温泉。冬の澄んだ夜空を彩る花火ミュージカルと極上の美肌名湯。
              </p>
            </Link>

            <Link
              href="/winter-toyama-himi-kanburi-luxury-stay"
              className="p-3.5 bg-white rounded-xl border border-stone-200/80 hover:border-emerald-500 hover:shadow-sm transition-all group"
            >
              <div className="font-bold text-stone-900 group-hover:text-emerald-700 mb-1">
                富山・氷見の寒ブリと立山連峰雪景色
              </div>
              <p className="text-xs text-stone-500 line-clamp-2">
                富山湾越しに望む白銀の立山連峰と、脂の乗り切った冬の王様「氷見寒ブリ」会席。
              </p>
            </Link>

            <Link
              href="/winter-nagano-nozawa-onsen-powder-snow-sotoyu-stay"
              className="p-3.5 bg-white rounded-xl border border-stone-200/80 hover:border-emerald-500 hover:shadow-sm transition-all group"
            >
              <div className="font-bold text-stone-900 group-hover:text-emerald-700 mb-1">
                長野・野沢温泉の外湯めぐりと極上パウダースノー
              </div>
              <p className="text-xs text-stone-500 line-clamp-2">
                13箇所の外湯めぐりと名物野沢菜、上質な天然雪が彩る信州屈指の温泉スキーリゾート。
              </p>
            </Link>

            <Link
              href="/winter-gunma-kusatsu-yukimi-onsen-stay"
              className="p-3.5 bg-white rounded-xl border border-stone-200/80 hover:border-emerald-500 hover:shadow-sm transition-all group"
            >
              <div className="font-bold text-stone-900 group-hover:text-emerald-700 mb-1">
                群馬・草津温泉の雪見露天と湯畑ライトアップ
              </div>
              <p className="text-xs text-stone-500 line-clamp-2">
                日本屈指の強酸性泉・草津温泉。白銀に輝く湯畑の幻想的な夜景と湯もみ体験。
              </p>
            </Link>

            <Link
              href="/features"
              className="p-3.5 bg-emerald-50/70 rounded-xl border border-emerald-200 hover:bg-emerald-100/70 transition-all flex flex-col justify-center items-center text-center group"
            >
              <div className="font-bold text-emerald-900 mb-1">
                全国の旅・特集記事一覧へ →
              </div>
              <p className="text-xs text-emerald-700">
                春夏秋冬の旬の旅、美食・絶景・名湯の厳選ガイドをチェック
              </p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-gifu-okuhida-onsen-yukimi-roten-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
