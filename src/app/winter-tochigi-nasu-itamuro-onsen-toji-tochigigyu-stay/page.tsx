import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Snowflake, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Mountain, Map, Heart, ShoppingBag, Shield, Feather
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月那須】開湯1000年「下野の薬湯」板室温泉・名物立ち湯と極上那須黒毛和牛＆初雪の那須連山を望む隠れ宿5選",
  description: "11月中旬から12月の初冬、雄大な茶臼岳をはじめとする那須連山が白銀の初雪に覆われ、高原全体が静謐な冬の静けさに包まれる季節。栃木県那須塩原市の那珂川最上流域に位置する板室温泉（いたむろおんせん）は、平安時代の大同年間（806年）開湯と伝わり、古くから「下野の薬湯（しもつけのやくとう）」として全国から湯治客を集めてきた由緒正しき名湯です。板室名物の「綱の湯（深い湯船に天井から垂らした綱につかまって入浴する独特の立ち湯）」や、38〜40℃前後の体に負担をかけない優しいアルカリ性単純温泉の源泉かけ流しは、冷え切った関節や筋肉のコリを芯から解きほぐします。夕食には、きめ細やかなサシと芳醇な香りを誇る最高級ブランド「那須黒毛和牛」のステーキやすき焼き、地元那須の高原冬根菜会席が並びます。現代の保養リトリートとアートが融合する大人の隠れ家厳選5宿をご案内します。",
  keywords: '板室温泉 宿泊, 下野の薬湯, 板室温泉 大黒屋, 綱の湯, 那須黒毛和牛 宿, 板室温泉 山喜, 11月 12月 那須温泉, 那須塩原 湯治',
  alternates: {
    canonical: 'https://croud-travel.com/winter-tochigi-nasu-itamuro-onsen-toji-tochigigyu-stay'
  },
  openGraph: {
    title: "【11・12月那須】開湯1000年「下野の薬湯」板室温泉・名物立ち湯と極上那須黒毛和牛＆初雪の那須連山を望む隠れ宿5選",
    description: "11月中旬から12月の初冬、雄大な茶臼岳をはじめとする那須連山が白銀の初雪に覆われ、高原全体が静謐な冬の静けさに包まれる季節。栃木県那須塩原市の那珂川最上流域に位置する板室温泉（いたむろおんせん）は、平安時代の大同年間（806年）開湯と伝わり、古くから「下野の薬湯（しもつけのやくとう）」として全国から湯治客を集めてきた由緒正しき名湯です。板室名物の「綱の湯（深い湯船に天井から垂らした綱につかまって入浴する独特の立ち湯）」や、38〜40℃前後の体に負担をかけない優しいアルカリ性単純温泉の源泉かけ流しは、冷え切った関節や筋肉のコリを芯から解きほぐします。夕食には、きめ細やかなサシと芳醇な香りを誇る最高級ブランド「那須黒毛和牛」のステーキやすき焼き、地元那須の高原冬根菜会席が並びます。現代の保養リトリートとアートが融合する大人の隠れ家厳選5宿をご案内します。",
    url: 'https://croud-travel.com/winter-tochigi-nasu-itamuro-onsen-toji-tochigigyu-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '那須連山と板室温泉の冬景色'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月那須】開湯1000年「下野の薬湯」板室温泉・名物立ち湯と極上那須黒毛和牛＆初雪の那須連山を望む隠れ宿5選",
    description: "11月中旬から12月の初冬、雄大な茶臼岳をはじめとする那須連山が白銀の初雪に覆われ、高原全体が静謐な冬の静けさに包まれる季節。栃木県那須塩原市の那珂川最上流域に位置する板室温泉（いたむろおんせん）は、平安時代の大同年間（806年）開湯と伝わり、古くから「下野の薬湯（しもつけのやくとう）」として全国から湯治客を集めてきた由緒正しき名湯です。板室名物の「綱の湯（深い湯船に天井から垂らした綱につかまって入浴する独特の立ち湯）」や、38〜40℃前後の体に負担をかけない優しいアルカリ性単純温泉の源泉かけ流しは、冷え切った関節や筋肉のコリを芯から解きほぐします。夕食には、きめ細やかなサシと芳醇な香りを誇る最高級ブランド「那須黒毛和牛」のステーキやすき焼き、地元那須の高原冬根菜会席が並びます。現代の保養リトリートとアートが融合する大人の隠れ家厳選5宿をご案内します。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function TochigiNasuItamuroWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-tochigi-nasu-itamuro-onsen-toji-tochigigyu-stay#article",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://croud-travel.com/#website",
          "name": "クラドトラベル",
          "url": "https://croud-travel.com/"
        },
        "headline": "【11・12月那須】開湯1000年「下野の薬湯」板室温泉・名物立ち湯と極上那須黒毛和牛＆初雪の那須連山を望む隠れ宿5選",
        "description": "11月中旬から12月の初冬、雄大な茶臼岳をはじめとする那須連山が白銀の初雪に覆われ、高原全体が静謐な冬の静けさに包まれる季節。栃木県那須塩原市の那珂川最上流域に位置する板室温泉（いたむろおんせん）は、平安時代の大同年間（806年）開湯と伝わり、古くから「下野の薬湯（しもつけのやくとう）」として全国から湯治客を集めてきた由緒正しき名湯です。板室名物の「綱の湯（深い湯船に天井から垂らした綱につかまって入浴する独特の立ち湯）」や、38〜40℃前後の体に負担をかけない優しいアルカリ性単純温泉の源泉かけ流しは、冷え切った関節や筋肉のコリを芯から解きほぐします。夕食には、きめ細やかなサシと芳醇な香りを誇る最高級ブランド「那須黒毛和牛」のステーキやすき焼き、地元那須の高原冬根菜会席が並びます。現代の保養リトリートとアートが融合する大人の隠れ家厳選5宿をご案内します。",
        "datePublished": "2026-09-30T00:00:00+09:00",
        "dateModified": "2026-09-30T00:00:00+09:00",
        "inLanguage": "ja",
        "mainEntityOfPage": "https://croud-travel.com/winter-tochigi-nasu-itamuro-onsen-toji-tochigigyu-stay",
        "publisher": {
          "@type": "Organization",
          "name": "クラドトラベル編集部",
          "url": "https://croud-travel.com/"
        }
      },
      {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Hotel",
              "name": "板室温泉大黒屋　保養とアートの宿",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/153309/153309.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F153309%2F153309.html",
              "priceRange": "¥26,400〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "栃木県",
                "addressLocality": "那須塩原市",
                "streetAddress": "那須塩原市板室856",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.70",
                "reviewCount": 215
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Hotel",
              "name": "那須板室温泉　ＯＮＳＥＮ　ＲＹＯＫＡＮ　山喜",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/109130/109130.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F109130%2F109130.html",
              "priceRange": "¥26,400〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "栃木県",
                "addressLocality": "那須塩原市",
                "streetAddress": "那須塩原市板室844",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.63",
                "reviewCount": 275
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Hotel",
              "name": "板室温泉　湯宿きくや",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/177501/177501.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F177501%2F177501.html",
              "priceRange": "¥33,500〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "栃木県",
                "addressLocality": "那須塩原市",
                "streetAddress": "那須塩原市板室844-7",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.67",
                "reviewCount": 27
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Hotel",
              "name": "板室温泉　奥那須・大正村　幸乃湯温泉",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/111212/111212.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F111212%2F111212.html",
              "priceRange": "¥6,980〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "栃木県",
                "addressLocality": "那須塩原市",
                "streetAddress": "那須塩原市百村3536-1",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "3.72",
                "reviewCount": 254
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Hotel",
              "name": "板室別邸リトリート　SPA和薬草",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/183550/183550.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183550%2F183550.html",
              "priceRange": "¥21,440〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "栃木県",
                "addressLocality": "那須塩原市",
                "streetAddress": "那須塩原市板室841-14",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.53",
                "reviewCount": 136
              }
            }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "板室温泉が「下野の薬湯（しもつけのやくとう）」と呼ばれる理由や泉質・効能は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "板室温泉は平安時代初期の大同元年（806年）に発見されたと伝えられ、那須十一湯の中でも古くから湯治場として栄えてきました。泉質は「アルカリ性単純温泉（低張性アルカリ性高温泉）」。無色透明で無臭、肌あたりが非常に柔らかく刺激が少ないのが特徴です。泉温が38〜40℃前後と人肌に近いため、心臓や血圧に負担をかけずに30分から1時間とゆっくり長湯ができます。古くから「杖いらずの湯」とも呼ばれ、神経痛、筋肉痛、関節リウマチ、疲労回復、冷え性の改善に卓越した効果を発揮します。"
            }
          },
          {
            "@type": "Question",
            "name": "板室温泉名物の「綱の湯（つなのゆ）」とはどのような入浴方法ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "「綱の湯」は、かつて板室温泉の共同浴場に存在した伝統的な深湯の入浴法です。大人の胸から首あたりまで水深がある深い湯船の天井から太い麻綱（ロープ）が垂らされており、入浴者はその綱につかまって立った姿勢で温泉に浸かります。深湯で立ち湯をすると、全身に均等な静水圧がかかるため、下半身の血流やリンパの流れが強力に促進され、むくみや関節痛が緩和されます。現在では「幸乃湯温泉」や「山喜」などでこの綱の湯スタイルが再現され、板室ならではの湯治体験として親しまれています。"
            }
          },
          {
            "@type": "Question",
            "name": "11月・12月の板室温泉・那須高原の気候と積雪状況、冬用タイヤは必要？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "11月中旬を過ぎると那須連山の山頂（茶臼岳など）は初冠雪を記録し、板室温泉街でも初雪が舞う日があります。朝晩の気温は氷点下まで下がり、路面凍結（ブラックアイスバーン）が発生しやすくなります。12月に入ると本格的な積雪の可能性があるため、車やレンタカーで訪れる際は必ずスタッドレスタイヤ（冬用タイヤ）の装着車を利用してください。板室街道（県道369号線・黒磯板室線）は比較的除雪が行き届いていますが、日陰や橋の上、早朝・深夜の運転には十分注意が必要です。"
            }
          },
          {
            "@type": "Question",
            "name": "板室温泉周辺の観光スポットや冬ならではの見どころはどこですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "板室温泉のすぐ近くには、透き通るブルーの湖水が美しい「板室ダム湖（カヌー体験や冬の静寂の散策）」や「木の俣渓谷」があります。車で約15〜20分足を伸ばせば、那須高原の「那須ガーデンアウトレット」や、人気のベーカリー「ペニーレイン」、昭和レトロな温泉街が広がる黒磯市街のカフェめぐり（SHOZO COFFEEなど）も楽しめます。冬は観光客が落ち着く季節のため、静かで落ち着いた大人の那須散策を満喫できます。"
            }
          },
          {
            "@type": "Question",
            "name": "東京方面から板室温泉へのアクセス方法と所要時間は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "新幹線を利用する場合、JR東京駅から東北新幹線「なすの」または「やまびこ」で「那須塩原駅」まで約70分。那須塩原駅西口から板室温泉行きの路線バス（関東自動車バス）に乗り換えて約35分で板室温泉街に到着します（一部旅館では那須塩原駅または黒磯駅からの無料送迎バスを運行）。車の場合は、東北自動車道「黒磯板室IC」から県道黒磯板室線を経由して約20分と、首都圏からのアクセスが極めて良好です。"
            }
          }
        ]
      }
    ]
  };

  const faqListItems = [
  {
    "q": "板室温泉が「下野の薬湯（しもつけのやくとう）」と呼ばれる理由や泉質・効能は？",
    "a": "板室温泉は平安時代初期の大同元年（806年）に発見されたと伝えられ、那須十一湯の中でも古くから湯治場として栄えてきました。泉質は「アルカリ性単純温泉（低張性アルカリ性高温泉）」。無色透明で無臭、肌あたりが非常に柔らかく刺激が少ないのが特徴です。泉温が38〜40℃前後と人肌に近いため、心臓や血圧に負担をかけずに30分から1時間とゆっくり長湯ができます。古くから「杖いらずの湯」とも呼ばれ、神経痛、筋肉痛、関節リウマチ、疲労回復、冷え性の改善に卓越した効果を発揮します。"
  },
  {
    "q": "板室温泉名物の「綱の湯（つなのゆ）」とはどのような入浴方法ですか？",
    "a": "「綱の湯」は、かつて板室温泉の共同浴場に存在した伝統的な深湯の入浴法です。大人の胸から首あたりまで水深がある深い湯船の天井から太い麻綱（ロープ）が垂らされており、入浴者はその綱につかまって立った姿勢で温泉に浸かります。深湯で立ち湯をすると、全身に均等な静水圧がかかるため、下半身の血流やリンパの流れが強力に促進され、むくみや関節痛が緩和されます。現在では「幸乃湯温泉」や「山喜」などでこの綱の湯スタイルが再現され、板室ならではの湯治体験として親しまれています。"
  },
  {
    "q": "11月・12月の板室温泉・那須高原の気候と積雪状況、冬用タイヤは必要？",
    "a": "11月中旬を過ぎると那須連山の山頂（茶臼岳など）は初冠雪を記録し、板室温泉街でも初雪が舞う日があります。朝晩の気温は氷点下まで下がり、路面凍結（ブラックアイスバーン）が発生しやすくなります。12月に入ると本格的な積雪の可能性があるため、車やレンタカーで訪れる際は必ずスタッドレスタイヤ（冬用タイヤ）の装着車を利用してください。板室街道（県道369号線・黒磯板室線）は比較的除雪が行き届いていますが、日陰や橋の上、早朝・深夜の運転には十分注意が必要です。"
  },
  {
    "q": "板室温泉周辺の観光スポットや冬ならではの見どころはどこですか？",
    "a": "板室温泉のすぐ近くには、透き通るブルーの湖水が美しい「板室ダム湖（カヌー体験や冬の静寂の散策）」や「木の俣渓谷」があります。車で約15〜20分足を伸ばせば、那須高原の「那須ガーデンアウトレット」や、人気のベーカリー「ペニーレイン」、昭和レトロな温泉街が広がる黒磯市街のカフェめぐり（SHOZO COFFEEなど）も楽しめます。冬は観光客が落ち着く季節のため、静かで落ち着いた大人の那須散策を満喫できます。"
  },
  {
    "q": "東京方面から板室温泉へのアクセス方法と所要時間は？",
    "a": "新幹線を利用する場合、JR東京駅から東北新幹線「なすの」または「やまびこ」で「那須塩原駅」まで約70分。那須塩原駅西口から板室温泉行きの路線バス（関東自動車バス）に乗り換えて約35分で板室温泉街に到着します（一部旅館では那須塩原駅または黒磯駅からの無料送迎バスを運行）。車の場合は、東北自動車道「黒磯板室IC」から県道黒磯板室線を経由して約20分と、首都圏からのアクセスが極めて良好です。"
  }
];

  const hotelCards = [
            {
              id: 1,
              name: "板室温泉大黒屋　保養とアートの宿",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/153309/153309.jpg",
              rating: 4.70,
              reviews: 215,
              price: "¥26,400〜",
              access: "東京から2時間　那須塩原駅より送迎タクシーで30分　東北道黒磯板室ICから車で20分",
              special: "栃木県那須・板室の大自然の中に静かに佇む、隠れ家のような旅館「保養とアートの宿」板室温泉大黒屋",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F153309%2F153309.html",
              story: "創業享保年間、300年を超える歴史を誇りながら「保養とアートの宿」として現代湯治カルチャーを牽引する名旅館「板室温泉大黒屋」。敷地内には清流那珂川が流れ、広大な回遊式庭園や菅木志雄をはじめとする現代美術作品が調和する静謐な空間です。板室の良質な自家源泉がなみなみと注がれる大浴場は、ぬる湯と適温湯が分かれており、時間を忘れてじっくりと浸かることで自律神経が整い、深いリラクゼーションへと導かれます。夕食は地元の旬野菜や滋味あふれる食材を中心に、素材本来の味わいを引き出した身体に優しい滋養会席。初冬の凛とした空気の中で、五感を研ぎ澄ます特別な滞在が叶います。",
              roomTip: "那珂川のせせらぎと手入れされた竹林を望む本館または別館「松の館」。アート作品が自然に飾られた上質な静寂の客室です。",
              gourmetTip: "「大黒屋名物・旬野菜と那須黒毛和牛の養生会席」。出汁の旨味が染み渡る煮物や、低温でじっくり火入れした極上和牛が絶品です。",
              highlights: [
                "300年の歴史と現代アートが融合する静寂の保養空間＆那珂川を望む名湯ぬる湯風呂",
                "自律神経を整えるぬる湯と適温湯の交代浴＆素材の味を極限まで引き出した養生料理",
                "敷地内回遊式庭園の初雪散策＆サロンで静かに本とアートを楽しむ優雅な休日"
              ]
            },
            {
              id: 2,
              name: "那須板室温泉　ＯＮＳＥＮ　ＲＹＯＫＡＮ　山喜",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/109130/109130.jpg",
              rating: 4.63,
              reviews: 275,
              price: "¥26,400〜",
              access: "那須塩原駅からお車で約３０分／黒磯駅からバスで約３５分/最寄りIC黒磯板室IC",
              special: "木の温もりと、珪藻土壁の落ち着きあるこだわりのお部屋は、すべて異なる造りとなっております。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F109130%2F109130.html",
              story: "「現代の湯治リゾート」をコンセプトに、建築・照明・家具の細部にまでこだわり抜いた全8室の大人の隠れ宿「那須板室温泉 ONSEN RYOKAN 山喜」。竹林に囲まれたエントランスをくぐると、木の温もりと間接照明が心地よいモダンな和空間が広がります。名物の立ち湯「綱の湯」を現代風に再現した浴槽や、ぬる湯の半露天風呂、寝湯など多彩な湯船を備え、アルカリ性単純温泉の柔らかな湯が肌を優しく包み込みます。夕食は板室の清流で育った川魚や那須高原の新鮮な冬野菜、そして最高ランクの那須黒毛和牛をメインとした繊細な創作会席。静かに心身をリセットしたい大人の旅に最適です。",
              roomTip: "源泉かけ流しの半露天風呂を備えた特別室。好きな時に何度でも名湯を独り占めできる贅沢なプライベート空間です。",
              gourmetTip: "「那須黒毛和牛サーロインと冬根菜の炭火焼き会席」。炭火の香ばしさと溢れる肉汁、地元産大根やカブの甘みが絶妙なハーモニー。",
              highlights: [
                "全8室の大人の隠れ家＆伝統の綱の湯をモダンに昇華した立ち湯とプライベート客室風呂",
                "木と竹林の美しさが際立つ洗練された建築美＆那須黒毛和牛サーロインの炭火焼き",
                "那須塩原の喧騒を離れた完全なプライベート感＆心身を深くリセットする現代湯治"
              ]
            },
            {
              id: 3,
              name: "板室温泉　湯宿きくや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/177501/177501.jpg",
              rating: 4.67,
              reviews: 27,
              price: "¥33,500〜",
              access: "那須塩原駅　または　黒磯駅よりお車にて約３０分",
              special: "那須板室温泉の山間に佇む「一日３部屋限定の湯宿」令和元年８月に「きくや一望館」より移転しました",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F177501%2F177501.html",
              story: "那珂川の渓流沿いに建ち、一日わずか数組のゲストを温かく迎える老舗温泉旅館「板室温泉 湯宿きくや」。板室温泉特有の優しい泉質の自家源泉を惜しみなく完全かけ流しで注ぎ込む内湯と野趣あふれる露天風呂は、加水・加温・循環一切なしの本物の生源泉。39℃前後のぬる湯は長湯に最適で、初冬の冷えた体をじっくりと芯から温めてくれます。夕食は主人自らが仕込む本格手作り料理。那須の大自然で育った那須牛のすき焼きや陶板焼き、冬の岩魚の塩焼き、季節の小鉢が美しく並び、心のこもったもてなしとともに贅沢なひとときを過ごせます。",
              roomTip: "那珂川のせせらぎが心地よく響く渓流側の和室。窓外に広がる初冬の山景色を眺めながら、のんびりと寛げるお部屋です。",
              gourmetTip: "「特選那須牛の陶板焼きと旬の山川会席」。きめ細やかな霜降り那須牛のジューシーな脂と、地酒「天鷹」の相性が抜群です。",
              highlights: [
                "源泉かけ流しの天然生温泉100%＆板場が手作りする那須牛すき焼きと川魚の滋味会席",
                "那珂川のせせらぎが寄り添う渓流側の和室＆わずか数組限定のきめ細やかなもてなし",
                "加水・加温・循環一切なしの本物の名湯＆地酒とともに味わう冬の奥那須の幸"
              ]
            },
            {
              id: 4,
              name: "板室温泉　奥那須・大正村　幸乃湯温泉",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/111212/111212.jpg",
              rating: 3.72,
              reviews: 254,
              price: "¥6,980〜",
              access: "那須塩原駅よりお車又は当館無料バスにて約２５分（要予約）",
              special: "源泉掛け流しの湯を畳敷きひのき造りの大浴場で味わう一軒宿！当館自慢の野天風呂＆豪快4m滝打たせ湯",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F111212%2F111212.html",
              story: "板室温泉街から少し奥まった自然豊かな山間に佇み、綱の湯の伝統を今に受け継ぐ名湯治宿「板室温泉 奥那須・大正村 幸乃湯温泉」。自慢の大浴場には、天井から太い麻綱が垂れ下がる名物の立ち湯深風呂があり、立ったまま綱につかまって深い湯船に身を沈める昔ながらの入浴法を体験できます。立った姿勢での入浴は水圧が全身に均等にかかり、血行促進や関節痛の緩和に高い効果を発揮。打たせ湯や露天風呂、薬草湯など多彩な湯巡りも楽しめます。食事は素朴ながら温かい栃木の里山料理で、リーズナブルに長期滞在や湯治を楽しむリピーターに愛されています。",
              roomTip: "大正ロマンの風情を残す落ち着いた和室。窓からは奥那須の山並みが見渡せ、静かな湯治時間を心ゆくまで堪能できます。",
              gourmetTip: "「奥那須の里山滋味膳」。地元野菜の天ぷらや熱々の手作り鍋、那須のコシヒカリなど、素朴で体に優しい田舎料理が魅力。",
              highlights: [
                "天井から麻綱が下がる伝統の立ち湯深風呂＆打たせ湯や薬草風呂が揃う本格湯治宿",
                "水圧が均等にかかる立ち湯の血行促進効果＆リーズナブルに長期滞在可能な温泉ステイ",
                "古き良き湯治文化の温かみを体感＆那須連山の雄大な自然を満喫する旅"
              ]
            },
            {
              id: 5,
              name: "板室別邸リトリート　SPA和薬草",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/183550/183550.jpg",
              rating: 4.53,
              reviews: 136,
              price: "¥21,440〜",
              access: "【無料送迎】＜往路＞那須塩原駅西口12：30発　＜復路＞SPA和薬草10：00発",
              special: "那須の秘境で湯治体験。様々なコンテンツであなただけのオリジナルリトリート時間を。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183550%2F183550.html",
              story: "板室の豊かな自然と和のハーブ・薬草を取り入れた新しいウェルネスステイを提供する隠れ家ヴィラ「板室別邸リトリート SPA和薬草」。静かな森の中に佇み、プライベート感あふれる空間で現代人の疲れた心と体を癒やします。客室専用の温泉風呂には板室の清らかな源泉が引かれ、和薬草を使ったハーバルバスやアロマトリートメントなど、五感で自然の癒やしを感じるプログラムが充実。食事は那須のオーガニック野菜や薬膳を取り入れたヘルシーかつ美しい創作ディナーで、女性の一人旅やカップルの記念日旅行にも高い人気を誇ります。",
              roomTip: "プライベートサウナや半露天風呂を備えたデザイナーズスイート。森の静寂に抱かれ、誰にも邪魔されない極上の休日を過ごせます。",
              gourmetTip: "「那須オーガニック野菜と那須牛の薬膳ウェルネスコース」。体に優しいスパイスと上質な牛肉が調和する新感覚の美食。",
              highlights: [
                "森の静寂に抱かれるウェルネスヴィラ＆客室温泉と和ハーブ・薬膳ディナーの調和",
                "プライベートサウナや半露天風呂を完備＆女性一人旅やカップルの記念日に大人気",
                "日頃のストレスを解き放つ極上のデトックス体験＆那須高原観光へのアクセスも良好"
              ]
            }
  ];

  return (
    <article className="min-h-screen bg-stone-50 text-stone-900 leading-relaxed font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Banner */}
      <header className="bg-gradient-to-r from-emerald-950 via-teal-950 to-stone-900 text-white py-12 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold tracking-wide border border-emerald-400/30">
            <Feather className="w-3.5 h-3.5" />
            11月・12月那須初冬特集・下野の薬湯＆現代湯治リトリート
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {metadata.title as string}
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-2">
            平安開湯1000年「下野の薬湯」が誇る38〜40℃の優しいぬる湯と、伝統の綱の湯立ち湯。
            最高級那須黒毛和牛の陶板焼きやすき焼き、茶臼岳の初雪を望む那須連山の静寂に浸る旅へ。
          </p>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-4">
          <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm tracking-wide">
            <Flame className="w-4 h-4 text-emerald-700" />
            茶臼岳の山懐に息づく杖いらずの古湯と現代保養の美
          </div>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            11月中旬を過ぎると、雄大な茶臼岳をはじめとする那須連山は白銀の冠をかぶり、那須高原の木々は葉を落として凛とした初冬の静けさを迎えます。多くの観光客で賑わう那須高原の中心部から西へ車で約20分、清流・那珂川の上流部にひっそりと佇むのが「板室温泉（いたむろおんせん）」です。平安時代の大同元年（806年）、那須領主・大和三郎宗重が狩りの最中に発見したと伝えられ、日光湯元や那須湯本と並ぶ歴史を誇ります。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            板室温泉が古くから「下野の薬湯（しもつけのやくとう）」、あるいは「杖いらずの湯」と称えられてきた理由は、その類まれな泉質にあります。無色透明でまろやかなアルカリ性単純温泉は、源泉温度が約38〜40℃と熱すぎずぬるすぎない絶妙な温度。熱い湯のように体に急激な負担をかけることなく、20分〜40分とじっくり長湯を楽しむことができます。湯船の中で深呼吸を繰り返すうちに、冷えた手足の先まで血流がめぐり、関節痛や神経痛、日々の慢性的な疲労がふわりとほどけていきます。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            また、板室温泉を象徴する入浴法が「綱の湯（つなのゆ）」。深い湯船に天井から下がった麻綱につかまりながら立った姿勢で浸かる伝統の立ち湯で、均等にかかる水圧が足のむくみや冷えを解消してくれます。近年では、300年の老舗が現代アートと融合した保養空間を展開したり、全8室の隠れ家リトリートが誕生するなど、「現代の湯治（現代保養）」を楽しめる場所として感度の高い大人たちの支持を集めています。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            夕食には、きめ細やかな霜降りと上品な甘みが際立つ極上「那須黒毛和牛」のステーキやすき焼き、地元契約農家の冬根菜会席が並びます。初雪の那須連山を望みながら、静寂とアート、本物の温泉に心身を委ねる厳選5宿をご案内します。
          </p>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              板室温泉のおすすめ名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              楽天トラベルAPIよりリアルタイムの空室料金・クチコミ評価・アクセス情報を取得して掲載
            </p>
          </div>

          <div className="space-y-8">
            {hotelCards.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl border border-stone-200 shadow-xs overflow-hidden transition-all duration-300 hover:shadow-md hover:border-emerald-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                  <div className="md:col-span-5 relative min-h-[240px] md:min-h-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={hotel.img} 
                      alt={hotel.name}
                      className="w-full h-full object-cover absolute inset-0"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-emerald-950/80 backdrop-blur-xs text-white text-xs px-3 py-1 rounded-full font-bold">
                      厳選第{hotel.id}位
                    </div>
                  </div>

                  <div className="md:col-span-7 p-6 sm:p-7 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                          <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                          ★ {hotel.rating}
                        </span>
                        <span className="text-xs text-stone-500">
                          ({hotel.reviews.toLocaleString()}件のクチコミ)
                        </span>
                        <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md ml-auto">
                          目安: {hotel.price}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-stone-900 group-hover:text-emerald-900 transition-colors">
                        {hotel.name}
                      </h3>

                      <p className="text-xs text-stone-500 flex items-center gap-1 mt-1 mb-3">
                        <MapPin className="w-3.5 h-3.5 shrink-0 text-stone-400" />
                        {hotel.access}
                      </p>

                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                        {hotel.story}
                      </p>

                      <div className="space-y-2 border-t border-stone-100 pt-3 text-xs">
                        <div className="flex items-start gap-2 text-stone-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span><strong>お部屋の選び方：</strong>{hotel.roomTip}</span>
                        </div>
                        <div className="flex items-start gap-2 text-stone-600">
                          <Utensils className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                          <span><strong>冬の美食Tips：</strong>{hotel.gourmetTip}</span>
                        </div>
                      </div>

                      <div className="mt-4 bg-stone-50 rounded-2xl p-3 border border-stone-100">
                        <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-1.5">
                          宿泊ポイント・ハイライト
                        </span>
                        <ul className="space-y-1 text-xs text-stone-700">
                          {hotel.highlights.map((hl: string, idx: number) => (
                            <li key={idx} className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-4">
                      <div className="text-xs text-stone-500">
                        公式楽天トラベル連携
                      </div>
                      <a 
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-700 text-white font-bold text-xs sm:text-sm hover:from-emerald-800 hover:to-teal-800 transition-all shadow-xs hover:shadow-md"
                      >
                        楽天トラベルでプラン詳細を見る
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 1 Night 2 Days Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-emerald-950 font-bold text-sm tracking-wide bg-emerald-100/60 px-3 py-1 rounded-full">
              <Compass className="w-4 h-4 text-emerald-800" />
              1泊2日おすすめモデルコース
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              下野の薬湯ぬる湯治と那須黒毛和牛・アート保養の旅
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-4">
              <h3 className="font-bold text-emerald-950 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-emerald-700" />
                【1日目】黒磯のカフェ文化と板室の名湯チェックイン
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>11:30 黒磯駅前SHOZO STREET散策：</strong>レトロな通りにあるカフェや雑貨店で焼き菓子とコーヒーのランチ。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>13:30 木の俣渓谷＆板室ダム湖散策：</strong>那珂川の清らかな渓流と初冬の落葉樹林の静寂を感じるネイチャーウォーク。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>15:30 板室温泉の宿へチェックイン：</strong>まずはアルカリ性単純温泉のぬる湯に40分ゆっくり浸かり、旅の疲れをほぐす。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>17:00 館内ギャラリーや庭園散策：</strong>現代アート作品や那珂川沿いの初雪景色を眺めながら心静かな夕暮れ。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>19:00 極上那須黒毛和牛＆冬根菜会席：</strong>とろける霜降り和牛ステーキと契約農家の冬野菜に舌鼓。</span>
                </li>
              </ul>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-4">
              <h3 className="font-bold text-emerald-950 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-emerald-700" />
                【2日目】綱の湯立ち湯体験と那須高原グルメめぐり
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>07:30 朝の綱の湯立ち湯と養生朝食：</strong>立ったまま深い湯船に浸かり、血流を促進。滋味深い温泉粥や味噌汁で朝食。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>10:00 板室温泉街の足湯＆神社参拝：</strong>板室温泉神社で旅の安全と健康を祈願し、温泉街を静かに散歩。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>11:30 那須高原ペニーレインでランチ：</strong>焼きたてのブルーベリーブレッドや洋食ランチを堪能。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>13:30 那須ガーデンアウトレットでお買い物：</strong>栃木の名産品やチーズガーデンのお菓子を買い求め、新幹線・東北道へ。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Local Souvenir & Spot Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-emerald-950 font-bold text-sm tracking-wide bg-emerald-100/60 px-3 py-1 rounded-full">
              <ShoppingBag className="w-4 h-4 text-emerald-800" />
              板室・那須塩原・冬のおみやげ＆立ち寄り散策手帖
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              板室温泉周辺で手に入れたい初冬の名産品と立ち寄りスポット
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-700" />
                木の俣渓谷とオオシラビソの原生林
              </h3>
              <p>
                板室温泉のすぐ近くを流れる那珂川の支流「木の俣川」は、川底の小石までくっきりと見える驚異的な透明度を誇る名所。初冬には巨岩に薄らと雪が積もり、エメラルドグリーンの水面とのコントラストが息を呑む美しさです。静寂に包まれた遊歩道を歩きながら、澄んだ山の空気を胸いっぱいに吸い込む森林浴が楽しめます。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Heart className="w-4 h-4 text-emerald-700" />
                御用邸チーズケーキと那須の高原乳製品
              </h3>
              <p>
                那須塩原・那須高原といえば、日本有数の生乳生産量を誇る酪農地帯。「チーズガーデン」の看板商品である「御用邸チーズケーキ」は、しっとり濃厚なベイクドタイプで冬のお土産の定番です。また、地元牧場の手作りカマンベールチーズやフレッシュバター、搾りたて牛乳を使ったスイーツも絶品です。
              </p>
            </div>
          </div>
        </section>

        {/* Deep Dive Knowledge Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-emerald-950 font-bold text-sm tracking-wide bg-emerald-100/60 px-3 py-1 rounded-full">
              <ThermometerSun className="w-4 h-4 text-emerald-800" />
              初冬の板室温泉・泉質と気候の徹底解説
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              なぜ11月・12月の板室温泉は「現代湯治の最高峰」と呼ばれるのか
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
              <Waves className="w-4 h-4 text-emerald-700" />
              刺激の少ない弱アルカリ性単純温泉が生み出す副交感神経の活性化
            </h3>
            <p>
              板室温泉の泉質は、pH9.0前後のアルカリ性単純温泉。塩分や硫黄などの刺激成分が穏やかで、肌の角質を優しくオフしながら、入浴直後から肌がつるつるとなめらかになる「美肌の湯」です。何より特筆すべきは38〜40℃の低温泉設定。熱い湯に入った時に起こる交感神経の緊張（血管収縮や血圧上昇）を防ぎ、副交感神経を優位にすることで、脳と内臓を休ませ、深い睡眠と自然治癒力の回復を促します。
            </p>

            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 pt-2">
              <Landmark className="w-4 h-4 text-emerald-700" />
              綱の湯（立ち湯）の静水圧による強力な血行・リンパ循環促進
            </h3>
            <p>
              深さ約1.2〜1.4mの深湯に立って入る「綱の湯」は、水深が深くなるほど水圧が増す物理法則を活かした湯治法です。立った姿勢で入浴すると、ふくらはぎや足首にかかる水圧が最大になり、下半身に滞りがちな静脈血やリンパ液を心臓へと力強く押し戻します。これにより、立ち仕事やデスクワークによる足のむくみ、冷え性が一気に解消され、全身の関節の可動域が広がります。
            </p>

            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 pt-2">
              <Sparkles className="w-4 h-4 text-emerald-700" />
              那須連山が遮る北風と静寂がもたらす極上の保養環境
            </h3>
            <p>
              板室温泉は那須連山の山懐、那珂川の谷間に位置するため、冬の強い北西風（からっ風）が山肌で遮られ、冬でも比較的穏やかで静かな気候に恵まれています。那須街道沿いの賑やかな観光エリアから一線を画したこの静けさこそが、多くの文人墨客や現代のクリエイターが保養地に選ぶ最大の理由です。初雪が静かに降る音と川のせせらぎに包まれながら、真の休息を得ることができます。
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-emerald-950 font-bold text-sm tracking-wide bg-emerald-100/60 px-3 py-1 rounded-full">
              <HelpCircle className="w-4 h-4 text-emerald-800" />
              よくある質問
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初冬の板室温泉・那須高原旅行 Q&A
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq, idx) => (
              <div key={idx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-emerald-700 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Features & Internal Links */}
        <section className="bg-stone-100 rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-6">
          <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm tracking-wide">
            <Sparkles className="w-4 h-4 text-emerald-800" />
            あわせて読みたい初冬の北関東・全国名湯特集
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            <Link 
              href="/winter-tochigi-nasu-onsen-shikanoyu-snow-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-emerald-700 font-bold block text-[10px]">栃木・那須温泉郷</span>
              <p className="font-bold text-stone-800 line-clamp-2">開湯1300年鹿の湯の白濁硫黄泉と雪見露天風呂・那須黒毛和牛名宿</p>
            </Link>
            <Link 
              href="/winter-tochigi-shiobara-onsen-yukimi-tochigi-beef-radish-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-emerald-700 font-bold block text-[10px]">栃木・塩原温泉郷</span>
              <p className="font-bold text-stone-800 line-clamp-2">箒川渓谷の雪景色と名物塩原大根・とちぎ和牛すき焼きを味わう宿</p>
            </Link>
            <Link 
              href="/winter-tochigi-okunikko-yumoto-snow-onsen-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-emerald-700 font-bold block text-[10px]">栃木・奥日光湯元温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">白銀の湯ノ湖と濃厚なエメラルド白濁硫黄泉・極上の冬雪見風呂</p>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
