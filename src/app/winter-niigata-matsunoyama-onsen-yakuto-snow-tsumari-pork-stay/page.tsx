import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Snowflake, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Mountain, Map
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月新潟・松之山温泉】日本三大薬湯の自噴化石海水と美人林の雪景色・極上妻有ポークと魚沼コシヒカリを味わう名宿5選",
  description: "11月下旬から12月にかけて、日本有数の豪雪地帯である新潟県十日町市・越後松之山の山峡は、静寂と降り積もる白銀の雪に包まれます。草津、有馬と並び「日本三大薬湯」の一つに数えられる松之山温泉は、約1200万年前の太古の海水が地殻変動によって閉じ込められ、高温高圧のマグマ熱で温められて自噴する奇跡の「ジオプレッシャー型化石海水温泉」。基準値の数十倍に達する濃厚なホウ酸と塩分を含み、肌にまとわりつくような塩化物泉は驚異的な保温・殺菌力を誇ります。樹齢約100年のブナの木々が立ち並ぶ名所「美人林」の初冬雪景色を愛でた後は、湯けむり立ち込める雪見露天風呂で心身を解放。夕餉には、新潟の銘柄豚「妻有（つまり）ポーク」の雪室熟成しゃぶしゃぶ、最高峰の魚沼産コシヒカリの炊き立て土鍋ご飯、越後が誇る銘酒の数々を味わう贅沢な時間が待っています。初冬の松之山で本物の湯治文化と美味に浸る至極の名宿5選を詳しく紹介します。",
  keywords: '松之山温泉 旅館, ひなの宿 ちとせ, 酒の宿 玉城屋, 凌雲閣, 白川屋, 醸す森, 日本三大薬湯, 美人林 雪景色, 妻有ポーク, 魚沼コシヒカリ, 11月 12月 新潟温泉',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-niigata-matsunoyama-onsen-yakuto-snow-tsumari-pork-stay/"
  },
  openGraph: {
    title: "【11・12月新潟・松之山温泉】日本三大薬湯の自噴化石海水と美人林の雪景色・極上妻有ポークと魚沼コシヒカリを味わう名宿5選",
    description: "11月下旬から12月にかけて、日本有数の豪雪地帯である新潟県十日町市・越後松之山の山峡は、静寂と降り積もる白銀の雪に包まれます。草津、有馬と並び「日本三大薬湯」の一つに数えられる松之山温泉は、約1200万年前の太古の海水が地殻変動によって閉じ込められ、高温高圧のマグマ熱で温められて自噴する奇跡の「ジオプレッシャー型化石海水温泉」。基準値の数十倍に達する濃厚なホウ酸と塩分を含み、肌にまとわりつくような塩化物泉は驚異的な保温・殺菌力を誇ります。樹齢約100年のブナの木々が立ち並ぶ名所「美人林」の初冬雪景色を愛でた後は、湯けむり立ち込める雪見露天風呂で心身を解放。夕餉には、新潟の銘柄豚「妻有（つまり）ポーク」の雪室熟成しゃぶしゃぶ、最高峰の魚沼産コシヒカリの炊き立て土鍋ご飯、越後が誇る銘酒の数々を味わう贅沢な時間が待っています。初冬の松之山で本物の湯治文化と美味に浸る至極の名宿5選を詳しく紹介します。",
    url: 'https://croud-travel.pages.dev/winter-niigata-matsunoyama-onsen-yakuto-snow-tsumari-pork-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬の松之山温泉郷と美人林の白銀雪景色'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月新潟・松之山温泉】日本三大薬湯の自噴化石海水と美人林の雪景色・極上妻有ポークと魚沼コシヒカリを味わう名宿5選",
    description: "11月下旬から12月にかけて、日本有数の豪雪地帯である新潟県十日町市・越後松之山の山峡は、静寂と降り積もる白銀の雪に包まれます。草津、有馬と並び「日本三大薬湯」の一つに数えられる松之山温泉は、約1200万年前の太古の海水が地殻変動によって閉じ込められ、高温高圧のマグマ熱で温められて自噴する奇跡の「ジオプレッシャー型化石海水温泉」。基準値の数十倍に達する濃厚なホウ酸と塩分を含み、肌にまとわりつくような塩化物泉は驚異的な保温・殺菌力を誇ります。樹齢約100年のブナの木々が立ち並ぶ名所「美人林」の初冬雪景色を愛でた後は、湯けむり立ち込める雪見露天風呂で心身を解放。夕餉には、新潟の銘柄豚「妻有（つまり）ポーク」の雪室熟成しゃぶしゃぶ、最高峰の魚沼産コシヒカリの炊き立て土鍋ご飯、越後が誇る銘酒の数々を味わう贅沢な時間が待っています。初冬の松之山で本物の湯治文化と美味に浸る至極の名宿5選を詳しく紹介します。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function NiigataMatsunoyamaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "【11・12月新潟・松之山温泉】日本三大薬湯の自噴化石海水と美人林の雪景色・極上妻有ポークと魚沼コシヒカリを味わう名宿5選",
    description: "11月下旬から12月にかけて、日本有数の豪雪地帯である新潟県十日町市・越後松之山の山峡は、静寂と降り積もる白銀の雪に包まれます。草津、有馬と並び「日本三大薬湯」の一つに数えられる松之山温泉は、約1200万年前の太古の海水が地殻変動によって閉じ込められ、高温高圧のマグマ熱で温められて自噴する奇跡の「ジオプレッシャー型化石海水温泉」。基準値の数十倍に達する濃厚なホウ酸と塩分を含み、肌にまとわりつくような塩化物泉は驚異的な保温・殺菌力を誇ります。樹齢約100年のブナの木々が立ち並ぶ名所「美人林」の初冬雪景色を愛でた後は、湯けむり立ち込める雪見露天風呂で心身を解放。夕餉には、新潟の銘柄豚「妻有（つまり）ポーク」の雪室熟成しゃぶしゃぶ、最高峰の魚沼産コシヒカリの炊き立て土鍋ご飯、越後が誇る銘酒の数々を味わう贅沢な時間が待っています。初冬の松之山で本物の湯治文化と美味に浸る至極の名宿5選を詳しく紹介します。",
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
    datePublished: '2026-09-29T12:00:00+09:00',
    dateModified: '2026-09-29T12:00:00+09:00',
    author: {
      '@type': 'Organization',
      name: 'クラドトラベル編集部',
      url: 'https://croud-travel.pages.dev'
    },
    publisher: {
      '@type': 'Organization',
      name: 'クラドトラベル',
      url: 'https://croud-travel.pages.dev',
      logo: {
        '@type': 'ImageObject',
        url: 'https://croud-travel.pages.dev/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://croud-travel.pages.dev/winter-niigata-matsunoyama-onsen-yakuto-snow-tsumari-pork-stay'
    }
  };

  const hotelList = [
            {
              id: 1,
              name: "松之山温泉　ひなの宿　ちとせ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/14679/14679.jpg",
              rating: 4.58,
              reviews: 372,
              price: "¥20,200〜",
              access: "ほくほく線まつだい駅より定時送迎あり（要予約）/ 関越道・塩沢石打ICより353号約50分/無料屋内駐車場（最大17台）",
              special: "日本三大薬湯、地産料理、里山朝ごはん、靴を脱いだら畳敷きの館内。素朴さが贅沢な心にも身体にも優しい宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14679%2F14679.html",
              story: "松之山温泉街の川沿いに佇み、創業以来受け継がれてきた薬湯の伝統と現代的な和の美意識が調和する「ひなの宿 ちとせ」。宿の看板である月見露天風呂「ほんのりの湯」では、湯口から注がれる日本三大薬湯・松之山温泉の濃厚な源泉が贅沢に掛け流されています。塩分とホウ酸を極めて高濃度に含む塩化物強塩温泉は、肌に触れた瞬間にトロリとした濃厚な感触をもたらし、湯上がり後も肌表面に塩分皮膜を形成して水分と熱を完璧に閉じ込めます。初冬の冷気の中で湯けむりが立ち上り、舞い散る粉雪を眺めながらの雪見露天は、まさに五感を研ぎ澄ます贅沢。夕食は十日町・魚沼の風土を五感で味わう「里山懐石」。銘柄豚「妻有ポーク」の柔らか煮や雪室熟成肉の陶板焼き、近隣の契約農家から届く魚沼産コシヒカリを棚田の湧き水で炊き上げた艶やかな銀シャリなど、一口ごとに越後の豊かな恵みが染み渡ります。温かな囲炉裏ラウンジと丁寧なもてなしが、冬の旅を格別のものにしてくれます。",
              roomTip: "清流を望む温泉露天風呂付き特別室、または落ち着きある純和風客室。初冬の静まり返った渓谷と雪化粧した杉木立を眺めながら、誰にも邪魔されないプライベートな湯浴みを堪能できます。",
              gourmetTip: "「妻有ポーク雪室熟成肉＆魚沼コシヒカリ里山懐石」。妻有ポークの低温ロースト、魚沼産特Aコシヒカリの炊き立て土鍋ご飯、地場野菜の炊き合わせ、新潟地酒の利き酒セット。",
              highlights: [
                "月見露天風呂の濃厚源泉掛け流し＆妻有ポーク雪室熟成肉の里山懐石",
                "温泉街中心の好立地＆棚田米魚沼コシヒカリの炊き立て土鍋ご飯",
                "客室露天風呂付き特別室あり＆囲炉裏ラウンジの落ち着いたもてなし"
              ]
            },
            {
              id: 2,
              name: "松之山温泉　酒の宿　玉城屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/31236/31236.jpg",
              rating: 4.70,
              reviews: 140,
              price: "¥24,200〜",
              access: "ほくほく線　まつだい駅／関越道塩沢石打IC・越後川口IC・湯沢ICより1時間",
              special: "日本三大薬湯松之山温泉源泉かけ流し。酒に寄り添う雪国キュイジーヌとともに玉城屋だけのペアリング体験を",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31236%2F31236.html",
              story: "「日本酒とフレンチのペアリング」という唯一無二のコンセプトで全国の食通を魅了する美食宿「酒の宿 玉城屋」。ミシュランガイドにも掲載された実力派旅館で、若きオーナーソムリエと情熱的なシェフが織りなすディナーは圧巻です。料理は松之山の豊かな里山の食材を用い、フレンチの技法で繊細に仕上げた里山フレンチ。十日町産の妻有ポークや新潟県産黒毛和牛、ジビエ、地場産冬根菜などを芸術的な一皿へと昇華させ、蔵元直送の希少な新潟地酒や厳選ナチュラルワインとの息を呑むマリアージュを提案してくれます。館内の温泉は松之山源泉掛け流し。大浴場や客室の半露天風呂に注がれる濃厚な薬湯が、美食体験の前後に身体の深部を温め、日頃の疲労を完全に解きほぐします。静寂に包まれた冬の松之山で、感性を刺激する最先端の美食と伝統の薬湯を味わう大人のための極上宿です。",
              roomTip: "松之山源泉を独占できる温泉露天風呂付き客室。北欧家具と日本の木工技術が融合した洗練された空間で、雪景色を眺めながら厳選された地酒を傾ける贅沢が叶います。",
              gourmetTip: "「里山フレンチフルコース＆日本酒ペアリング」。妻有ポークのロースト・十日町産マスタード添え、新潟牛フィレ肉の藁焼き、雪室熟成野菜のポタージュ、新潟の希少地酒7種ペアリング。",
              highlights: [
                "ミシュラン掲載の酒の宿＆里山フレンチと希少新潟地酒の究極ペアリング",
                "全室温泉露天風呂付き客室あり＆雪景色を望む洗練された大人の隠れ家",
                "ソムリエの卓越した提案力＆地産地消の食材をアートのように昇華させた料理"
              ]
            },
            {
              id: 3,
              name: "越後松之山温泉　凌雲閣",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/108273/108273.jpg",
              rating: 4.17,
              reviews: 251,
              price: "¥11,000〜",
              access: "＜電車＞まつだい駅から車で約２０分●1日1便【送迎】あり（要連絡）／＜車＞関越道　塩沢石打ＩＣより国道353経由約６０分",
              special: "本館は国の登録有形文化財。浴場は自家源泉「鏡の湯」、家族風呂は「鷹の湯」をかけ流し、２種の温泉有",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108273%2F108273.html",
              story: "昭和初期に宮大工の手によって建てられた登録有形文化財の木造三階建て建築が息を呑む風格を放つ「越後松之山温泉 凌雲閣」。一歩館内に足を踏み入れると、各階ごとに異なる銘木を用いた繊細な格天井や欄間、歴史を刻んだ柱や手すりが温かく旅人を迎えてくれます。自慢の温泉は、館内専用の自家源泉から引かれる松之山の名湯「鏡の湯」。化石海水のミネラルが凝縮された湯は、ほのかな油臭と塩味を持ち、身体の深部まで浸透して芯からポカポカと温めてくれます。冬には窓外一面に深い雪が降り積もり、レトロな木造建築と白銀の世界が織りなす景観はまるで大正・昭和の映画の世界に迷い込んだかのよう。夕食は新潟の滋味を凝縮した伝統の郷土料理膳。日本海の新鮮な海の幸、妻有ポークの陶板焼き、地元で採れた山菜やキノコの保存食料理など、雪国の知恵と温もりが詰まった品々が並びます。",
              roomTip: "国の登録有形文化財に指定された本館の数寄屋造り客室。部屋ごとに異なる意匠の障子や欄間が施されており、雪国の歴史の重みと職人技の美しさに浸ることができます。",
              gourmetTip: "「越後松之山 郷土味覚膳」。妻有ポークの味噌陶板焼き、日本海直送のお造り、ぜんまいや山菜の一本煮、十日町名物へぎそば、炊き立ての魚沼コシヒカリ。",
              highlights: [
                "国登録有形文化財の宮大工木造建築＆自家源泉「鏡の湯」と越後郷土味覚膳",
                "昭和レトロな大正ロマンの情緒＆雪国ならではの伝統と歴史に包まれる滞在",
                "銘木を用いた繊細な建築意匠＆雪景色に映える重厚な木造三階建ての佇まい"
              ]
            },
            {
              id: 4,
              name: "松之山温泉　薬湯香ル宿　白川屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/158749/158749.jpg",
              rating: 4.12,
              reviews: 58,
              price: "¥8,800〜",
              access: "まつだい駅よりお車にて約１５分",
              special: "美しき日本の原風景の中で歴史を重ねる薬湯に温む。笑顔の素が散りばめられた館内でおくつろぎください。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F158749%2F158749.html",
              story: "松之山温泉街の入口近くに佇み、昔ながらの湯治宿の情緒と飾らない家庭的なもてなしで温泉通に深く愛されている「薬湯香ル宿 白川屋」。宿の最大の誇りは、松之山温泉の濃厚な源泉「鷹の湯」を余すところなく注ぎ込んだ檜造りの内湯です。浴室の扉を開けた瞬間に立ち込める独特の薬湯の香りと湯気は、効能の高さを雄弁に物語っています。高温の源泉を湯守が絶妙な湯加減に調整しており、肌に染み渡るような熱めの湯に入浴すれば、毛穴が開き血行が一気に促進されます。入浴を繰り返すことで関節の痛みや冷え性が劇的に改善されると評判。夕食は料理長が手間暇を惜しまず仕込む家庭的な山里料理。十日町産の豚肉を使った温かい小鍋や、日本海の冬魚、地元の棚田米コシヒカリなど、飾らない本物の美味しさが旅の疲労を優しく癒やしてくれます。長期湯治や一人旅にも心強い名宿です。",
              roomTip: "木の温かみを感じさせる純和風客室。こたつが用意された温もりある部屋で、窓の外に舞う雪を眺めながら静かに読書や思索の時間を楽しめます。",
              gourmetTip: "「薬湯の里 手作り山里会席」。十日町産豚肉のすき焼き風小鍋、日本海直送の白身魚のお造り、雪国名産の煮物盛り合わせ、地元酒蔵の搾りたて新酒。",
              highlights: [
                "源泉「鷹の湯」の濃厚薬湯内湯＆料理長手作りの温かな山里家庭会席",
                "薬湯の香りが満ちる本物の湯治体験＆一人旅や湯治連泊に優しい価格設定",
                "熱めの名湯で身体の芯からデトックス＆アットホームで飾らない接客"
              ]
            },
            {
              id: 5,
              name: "松之山温泉　醸す森［ｋａｍｏｓｕ　ｍｏｒｉ］",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/168000/168000.jpg",
              rating: 4.26,
              reviews: 100,
              price: "¥11,000〜",
              access: "塩沢石打IC越後川口IC越後湯沢駅よりお車で約50分／まつだい駅から無料送迎（定刻のみでの事前予約）約20分",
              special: "松之山でも屈指の豪雪地に佇むオーベルジュ。雄大な自然に包まれながら、里山の美食をお楽しみください。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F168000%2F168000.html",
              story: "松之山の豊かな森の高台に位置し、美しいブナ林に囲まれたモダンな宿泊・蒸留・レストラン複合施設「松之山温泉 醸す森［kamosu mori］」。従来の温泉街のイメージを覆すスタイリッシュな空間デザインが特徴で、若い世代や一人旅の旅人からも圧倒的な支持を集めています。館内の浴場には松之山温泉の薬湯が引かれており、大きな窓から雪化粧した幻想的なブナの森を眺めながら、心洗われるバスタイムを満喫できます。レストランでは地元の新鮮な野菜や妻有ポーク、ジビエを薪火や発酵技術を活かして調理する独創的な料理を提供。併設されたバーでは、全国の銘酒やクラフトジン、新潟ワインなどを気軽に楽しむことができます。雪に包まれたブナの森の中で、自然と調和しながら自由で洗練された滞在を楽しみたい方に最適なニュースタイルの宿です。",
              roomTip: "ブナの森を望むシンプルモダンな洋室または和モダンルーム。無駄を削ぎ落としたミニマルなインテリアが外の白銀の森の美しさを際立たせます。",
              gourmetTip: "「醸す森 発酵×薪火ディナーコース」。妻有ポークの薪火グリル・発酵ソース添え、冬根菜のロースト、地場産チーズと自家製パン、新潟のクラフトジン。",
              highlights: [
                "ブナの森を望むモダンリゾート＆発酵と薪火の独創ディナーとクラフトジン",
                "スタイリッシュな北欧調デザイン＆松之山の名湯に浸かる新しい滞在スタイル",
                "美人林散策や大地の芸術祭巡りに最適＆自由で気兼ねのないプライベート時間"
              ]
            }
  ];

  const faqList = [
  {
    "q": "松之山温泉が「日本三大薬湯」と呼ばれる理由や泉質・効能は何ですか？",
    "a": "松之山温泉は群馬の草津温泉、兵庫の有馬温泉と並び「日本三大薬湯」の一つに数えられます。最大の特徴は、約1200万年前の太古の海水が地層深くに閉じ込められ、地圧とマグマ熱によって自噴する「ジオプレッシャー型化石海水」である点です。泉質はナトリウム・カルシウム-塩化物泉で、基準値の数十倍に達する天然のホウ酸成分と高濃度の塩分を含んでいます。この濃厚な塩分が肌の表面に膜を作り、熱と水分の蒸発を防ぐため、抜群の保温・保湿効果と殺菌力を誇り、切り傷、慢性皮膚病、冷え性、神経痛に劇的な効果があるとされています。"
  },
  {
    "q": "11月・12月の十日町・松之山エリアの降雪量や道路状況、アクセス注意点は？",
    "a": "十日町市松之山は日本有数の特別豪雪地帯です。11月中旬頃に初雪が観測され、12月に入ると急速に積雪が増加し、平野部でも1〜2メートル以上の雪が積もる本格的な豪雪期に入ります。道路には消雪パイプが敷設され除雪体制も整っていますが、峠道や日陰、夜間は圧雪や凍結路面となるため、車で訪れる場合は必ず4WD車に高性能スタッドレスタイヤを装着し、慎重な運転を心がけてください。雪道運転に不安がある方は、北越急行ほくほく線の「まつだい駅」から運行されている東頚バス（路線バス）や、各旅館の送迎バスを利用するのが最も安全で確実です。"
  },
  {
    "q": "初冬の十日町・松之山で絶対に訪れるべき観光名所は？",
    "a": "最も有名なスポットは、樹齢約100年のブナの木が一面に立ち並ぶ「美人林（びじんばやし）」です。11月下旬の晩秋の名残から12月の白銀の雪世界へと移り変わる姿は言葉を失う美しさで、雪の上に落ちる木々の影と澄み渡る空気は写真愛好家にも絶大な人気を誇ります。また、雪に覆われた「星峠の棚田」の幻想的な冬景色や、現代アートの祭典「大地の芸術祭」の越後妻有里山現代美術館 MonET（モネ）など、冬ならではの文化・自然景観が凝縮されています。"
  },
  {
    "q": "11月・12月の松之山温泉で味わえるご当地グルメや名産品は？",
    "a": "新潟県十日町が誇る銘柄豚「妻有（つまり）ポーク」は絶対に外せません。抗生物質を極力使わず清潔な環境で育てられた豚肉は、脂身の融点が低く、口の中で甘く溶けるような芳醇な旨味が特徴で、雪室熟成肉のステーキやしゃぶしゃぶで堪能できます。また、松之山周辺の棚田で収穫される最高峰の「魚沼産コシヒカリ」の新米ご飯、冬が旬の日本海の寒ブリやのどぐろ、松之山特有の薬湯の熱を利用して茹で上げる「湯治豚」や「温泉玉子」、新潟銘酒とのペアリングも格別の楽しみです。"
  },
  {
    "q": "東京方面からの電車でのアクセス方法と所要時間は？",
    "a": "JR東京駅から上越新幹線で「越後湯沢駅」まで約1時間20分。越後湯沢駅で北越急行ほくほく線に乗り換え、「まつだい駅」まで約40分です。まつだい駅からは松之山温泉行きの路線バスで約20〜25分、または宿泊旅館の送迎サービス（要事前予約）を利用してアクセスできます。越後湯沢駅からのトータル所要時間は約2時間30分〜3時間程度と、首都圏からのアクセスも非常に良好です。"
  }
];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-amber-100 selection:text-amber-900 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <header className="relative w-full h-[65vh] min-h-[480px] max-h-[640px] flex items-end justify-start overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85"
          alt="白銀の新潟・松之山温泉郷とブナ林の雪景色"
          fill
          priority
          className="object-cover object-center brightness-[0.72] scale-105 transition duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-600/90 text-white text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full backdrop-blur-xs shadow-xs">
            <Snowflake className="w-4 h-4 text-amber-200" />
            <span>11・12月 冬の極上秘湯旅特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight drop-shadow-md">
            新潟・十日町・松之山温泉<br className="hidden sm:inline" />
            日本三大薬湯の自噴化石海水と妻有ポーク名宿5選
          </h1>
          <p className="text-stone-200 text-sm sm:text-base max-w-3xl leading-relaxed drop-shadow-xs">
            11月下旬から日本有数の豪雪地帯へ。約1200万年前の化石海水が自噴する奇跡の薬湯、美人林の静謐な白銀雪景色、銘柄豚「妻有ポーク」と魚沼産コシヒカリの極上料理を味わい尽くす旅。
          </p>

          <div className="flex flex-wrap gap-3 pt-1 text-xs text-amber-200">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Calendar className="w-3.5 h-3.5 text-amber-300" />
              <span>ベストシーズン: 11月下旬〜12月下旬（美人林の白銀世界と濃厚な薬湯の温まり効果）</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Utensils className="w-3.5 h-3.5 text-amber-300" />
              <span>旬の美味: 妻有ポーク雪室熟成肉・魚沼産特Aコシヒカリ土鍋ご飯・越後新酒地酒</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Waves className="w-3.5 h-3.5 text-amber-300" />
              <span>名湯泉質: ナトリウム・カルシウム-塩化物温泉（太古の化石海水自噴泉）</span>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-stone-500 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-900 transition">ホーム</Link>
        <span>&gt;</span>
        <Link href="/features" className="hover:text-stone-900 transition">特集一覧</Link>
        <span>&gt;</span>
        <span className="text-stone-700 font-medium">新潟・松之山温泉 初冬名宿5選</span>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 mt-6">

        {/* Introduction Overview */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-amber-800 text-sm font-bold bg-amber-50 px-3 py-1 rounded-full">
            <Sparkles className="w-4 h-4" />
            松之山温泉の初冬の魅力
          </div>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 leading-snug">
            太古の化石海水がもたらす驚異の保温力。<br />
            雪深い越後妻有の山懐で出会う本物の薬湯と里山美食
          </h2>

          <div className="text-stone-600 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              新潟県南部に位置する十日町市松之山は、世界でも有数の豪雪地帯として知られています。初冬の11月下旬を迎えると、山肌を彩っていた落葉樹の梢に純白の雪が降り積もり、集落全体が音を失ったような深い静寂に包まれます。その山峡の地に湧き出るのが、群馬の草津、兵庫の有馬と並び称される「日本三大薬湯」の一つ、松之山温泉です。
            </p>
            <p>
              松之山温泉の起源は、約1200万年前の新第三紀中新世にまで遡ります。当時の海水が地殻変動によって地中深く閉じ込められ、地圧と地熱によって濃縮されて自噴する「ジオプレッシャー型温泉」という極めて希少な泉質です。塩分濃度は海水の約半分にも達し、薬効成分であるホウ酸は温泉法の基準値の数十倍。肌に触れると濃厚なトロみを感じ、湯上がりの肌には塩のベールが形成されて熱を一切逃がしません。真冬の厳寒の中でも湯冷めを全く知らず、夜まで身体の深部から心地よい温もりが湧き上がります。
            </p>
            <p>
              旅のもう一つの大きな醍醐味が、豊かな里山が育む冬の味覚です。清らかな地下水と澄んだ空気の中で育てられる銘柄豚「妻有（つまり）ポーク」は、融点の低い上質な脂の甘みとキメの細かさが際立つ名品。さらに日本一の評価を誇る魚沼産コシヒカリの新米、雪室で甘みを凝縮させた冬根菜、越後杜氏が魂を込めて醸す搾りたての新酒地酒が並び、冷え切った身体に力強い活力を与えてくれます。
            </p>
            <p>
              初冬の松之山では、名所「美人林」のブナの木々が雪の衣をまとい、息を呑むような幽玄の景観を作り出します。静寂の森に響く小鳥の声と雪を踏みしめる音、湯上がりに窓辺から眺める一面の銀世界。豪雪地帯ならではの厳しい自然環境だからこそ磨き上げられた本物の湯力と人の温もりに触れる旅は、現代の忙しない日常で疲弊した五感を根底から蘇らせてくれます。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-100">
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-100">
              <ThermometerSun className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-stone-900 text-sm">自噴する太古の化石海水</h3>
                <p className="text-xs text-stone-500 mt-1">基準値数十倍のホウ酸と強塩泉。驚異的な保温・殺菌力で冷えと疲労を根本改善。</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-100">
              <Utensils className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-stone-900 text-sm">妻有ポークと魚沼コシヒカリ</h3>
                <p className="text-xs text-stone-500 mt-1">甘くとろける極上ポークと土鍋炊き新米。越後地酒との至高のペアリングを堪能。</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-100">
              <Snowflake className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-stone-900 text-sm">美人林の静謐な白銀世界</h3>
                <p className="text-xs text-stone-500 mt-1">樹齢約100年のブナ林に降り積もる雪景色。日常を忘れさせる幻想的な冬の絶景。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-10">
          <div className="border-b border-stone-200 pb-4">
            <div className="inline-flex items-center gap-2 text-amber-800 text-sm font-bold bg-amber-50 px-3 py-1 rounded-full mb-2">
              <Landmark className="w-4 h-4" />
              厳選宿泊施設
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              初冬の新潟・松之山温泉で泊まるべき名宿5選
            </h2>
            <p className="text-stone-500 text-sm mt-1">
              楽天トラベルで最高水準の評価を集める、本物の薬湯と極上美食を誇る宿
            </p>
          </div>

          <div className="space-y-12">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id}
                id={`hotel-${hotel.id}`}
                className="bg-white rounded-3xl overflow-hidden shadow-xs border border-stone-200 hover:shadow-md transition duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Hotel Image Container */}
                  <div className="relative lg:col-span-5 h-64 lg:h-auto min-h-[260px]">
                    <Image
                      src={hotel.img}
                      alt={hotel.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-xs text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-xs">
                      <span>第{hotel.id}位</span>
                    </div>
                  </div>

                  {/* Hotel Content */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 flex-wrap">
                        <div className="flex items-center gap-1 text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full text-xs font-bold">
                          <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                          <span>{hotel.rating}</span>
                        </div>
                        <span className="text-xs text-stone-400">口コミ {hotel.reviews}件</span>
                        <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                          {hotel.price}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                        {hotel.name}
                      </h3>

                      <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                        {hotel.story}
                      </p>
                    </div>

                    {/* Room & Gourmet Tips */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-stone-50 p-4 rounded-2xl border border-stone-100 text-xs">
                      <div className="space-y-1">
                        <div className="font-bold text-stone-800 flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5 text-amber-700" />
                          客室選びのアドバイス
                        </div>
                        <p className="text-stone-600 leading-relaxed">
                          {hotel.roomTip}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <div className="font-bold text-stone-800 flex items-center gap-1.5">
                          <Utensils className="w-3.5 h-3.5 text-amber-700" />
                          必食の夕食プラン
                        </div>
                        <p className="text-stone-600 leading-relaxed">
                          {hotel.gourmetTip}
                        </p>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-stone-400 tracking-wider uppercase">この宿の注目ポイント</h4>
                      <ul className="space-y-1.5 text-xs text-stone-700">
                        {hotel.highlights.map((item: string, hIdx: number) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Access & Booking Link */}
                    <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="text-[11px] text-stone-500 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                        <span>{hotel.access}</span>
                      </div>
                      <a
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full transition duration-200 shadow-xs hover:shadow-md shrink-0"
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

        {/* Local Gourmet Section */}
        <section className="bg-gradient-to-br from-stone-900 to-amber-950 text-white rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-amber-300 text-sm font-bold bg-white/10 px-3 py-1 rounded-full">
            <Utensils className="w-4 h-4 text-amber-300" />
            初冬の越後妻有美食手帖
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            11月・12月の新潟・松之山で味わい尽くす極上グルメと冬の恵み
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400" />
                越後名産「銘柄豚 妻有ポーク」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                十日町の大自然の中で徹底した衛生管理のもと肥育される銘柄豚「妻有ポーク」。融点が低く甘みのある上質な脂身と柔らかい肉質が特長で、低温ローストや雪室熟成肉のしゃぶしゃぶは、一口で豚肉の常識を覆す美味しさです。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-amber-400" />
                魚沼産特Aコシヒカリの土鍋ご飯
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                日本一の米処・魚沼地域に位置する松之山。棚田の清らかな雪解け湧水で育まれた新米コシヒカリを土鍋でふっくらと炊き上げた銀シャリは、一粒一粒が輝き、豊かな甘みと芳醇な香りが口いっぱいに広がります。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                薬湯仕込み料理と越後美酒
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                松之山温泉の自噴源泉熱を利用してじっくり火入れした「湯治豚」や名物「温泉玉子」。さらに越後杜氏が丹精込めて醸す搾りたての初冬新酒地酒は、里山の滋味あふれる料理と驚くほどのマリアージュを奏でます。
              </p>
            </div>
          </div>
        </section>

        {/* 1 Night 2 Days Itinerary Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-amber-800 text-sm font-bold bg-amber-50 px-3 py-1 rounded-full">
            <Footprints className="w-4 h-4" />
            おすすめ滞在プラン
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            初冬の新潟・松之山温泉 1泊2日満喫モデルコース
          </h2>
          <div className="space-y-6 pt-2">
            <div className="border-l-2 border-amber-600 pl-4 sm:pl-6 space-y-2">
              <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-0.5 rounded-md">
                1日目：美人林の白銀世界から日本三大薬湯へ・妻有ポークの美食夜
              </div>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                越後湯沢からほくほく線で里山へ、幻想的なブナ林散策と濃厚薬湯
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                上越新幹線で越後湯沢駅に到着後、ほくほく線に乗り換えてまつだい駅へ。まずは十日町の名所「美人林」を訪れ、樹齢約100年のブナの巨木が一面に立ち並ぶ初冬の静謐な白銀雪景色を鑑賞。その後、松之山温泉街の宿へチェックイン。約1200万年前の化石海水が自噴する濃厚な塩化物泉に浸かり、毛穴から染み渡る熱で日頃の疲労を芯からデトックス。夕食は妻有ポークの雪室熟成肉や魚沼産コシヒカリの炊き立て土鍋ご飯、越後新酒地酒の極上ペアリングに酔いしれます。
              </p>
            </div>

            <div className="border-l-2 border-amber-600 pl-4 sm:pl-6 space-y-2">
              <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-0.5 rounded-md">
                2日目：雪見朝風呂から大地の芸術祭・名物へぎそばランチへ
              </div>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                窓外の雪景色を望む朝湯浴みから、現代アート鑑賞と十日町名物そば
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                静まり返った雪国の朝、清涼な冷気の中で楽しむ贅沢な雪見朝風呂。朝食には棚田米の銀シャリと薬湯で仕込んだ温泉玉子、温かい郷土汁を味わってチェックアウト。まつだい駅周辺の現代アート野外作品を見学し、十日町市内へ移動して布海苔をつなぎに使った喉越し抜群の「へぎそば」とサクサクの舞茸天ぷらを昼食に満喫。越後妻有里山現代美術館 MonETで文化体験を楽しんだ後、越後湯沢駅から新幹線で帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* Travel Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-amber-800 text-sm font-bold bg-amber-50 px-3 py-1 rounded-full">
            <Compass className="w-4 h-4" />
            初冬の松之山温泉 旅の心得とアクセスガイド
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            日本有数の豪雪地帯を安全に楽しむための実践知識
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-700" />
                新幹線＋ほくほく線まつだい駅の快適アクセス
              </h3>
              <p>
                東京駅から上越新幹線で越後湯沢駅まで約1時間20分、北越急行ほくほく線に乗り換えてまつだい駅まで約40分。
              </p>
              <p>
                まつだい駅から松之山温泉へは路線バスや各宿の送迎バスが運行されており、雪道運転の不安を一切感じることなくスムーズにアクセスできます。ほくほく線は雪に極めて強い高規格鉄道のため冬も安心です。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Mountain className="w-4 h-4 text-amber-700" />
                マイカー・レンタカー利用時の豪雪路面対策
              </h3>
              <p>
                関越道六日町ICまたは越後川口ICより国道経由で約45〜60分。道路には消雪パイプが整備されていますが、山間部は急勾配と圧雪路面が続きます。
              </p>
              <p>
                必ず4WD車に高性能スタッドレスタイヤを装着し、車間距離を十分に確保してください。吹雪時の視界不良に備え、明るい日中のうちに到着するスケジュールを徹底しましょう。
              </p>
            </div>
          </div>

          <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <ThermometerSun className="w-4 h-4 text-amber-700" />
              日本三大薬湯の正しい入浴法と湯あたり予防
            </h3>
            <p>
              松之山温泉は塩分とホウ酸の濃度が非常に高いため、一般的な単純温泉に比べて身体にかかる浸透圧の負荷が大きくなります。
            </p>
            <p>
              最初のかけ湯を念入りに行い、湯船にはまず半身浴から静かに浸かりましょう。1回の入浴時間は5〜10分程度に留め、浴後は急激な湯上がりを避けて脱衣所で十分に休息を取ってください。塩分が肌の乾燥を防ぐため、シャワーで洗い流さずそのまま上がるのが伝統的な入浴法ですが、敏感肌の方は軽く真水で流すのが安心です。
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-amber-800 text-sm font-bold bg-amber-50 px-3 py-1 rounded-full">
            <HelpCircle className="w-4 h-4" />
            よくある質問
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            初冬の新潟・松之山温泉旅行 FAQ
          </h2>
          <div className="space-y-4">
            {faqList.map((faq, fIdx) => (
              <div key={fIdx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-stone-900 flex items-start gap-2">
                  <span className="text-amber-800 shrink-0 font-black">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Link Section */}
        <section className="bg-gradient-to-br from-stone-900 to-amber-950 text-white rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Map className="w-5 h-5 text-amber-300" />
              あわせて読みたい新潟・越後の冬温泉特集
            </h3>
            <p className="text-xs sm:text-sm text-amber-200">
              白銀の豪雪露天風呂と越後美酒・極上グルメを満喫する厳選旅ガイド
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-niigata-echigo-yuzawa-snow-sake-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">新潟・越後湯沢</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                越後湯沢の雪国温泉とぽんしゅ館・地酒の旅
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                新幹線直結のスノーリゾートと川端康成ゆかりの雪国名湯、越後日本酒飲み比べを満喫。
              </p>
            </Link>

            <Link 
              href="/winter-niigata-tsukioka-onsen-emerald-bihada-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">新潟・月岡温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                月岡温泉のエメラルドグリーン美肌硫黄泉
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                日本有数の硫黄含有量を誇る美肌の湯と越後銘菓・地酒を巡る温泉街歩き。
              </p>
            </Link>

            <Link 
              href="/winter-niigata-senami-onsen-sunset-ocean-salmon-murakami-beef-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">新潟・瀬波温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                日本海夕日露天風呂と村上牛・越後名物鮭会席
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                波打ち際の熱狂名湯と冬の日本海に沈む夕陽、伝統の塩引き鮭と村上牛ステーキを堪能。
              </p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-niigata-matsunoyama-onsen-yakuto-snow-tsumari-pork-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
