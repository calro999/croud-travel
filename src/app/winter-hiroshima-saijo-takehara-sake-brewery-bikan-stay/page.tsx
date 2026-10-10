import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Wine, AlertTriangle, Sunrise, HeartHandshake, Eye
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12・1月広島】西条酒蔵通りの冬新酒仕込み！名宿5選',
  description: '灘・伏見と並び称される日本三大銘醸地「西条酒蔵通り」が最も熱気を帯びる11〜1月の冬旅特集。赤レンガ煙突と白壁なまこ壁が連なる路地に立ち上る。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '西条 酒蔵通り 冬, 美酒鍋 西条, 竹原 町並み保存地区, 峠下牛, 東広島 ホテル, グリーンスカイホテル竹原, モーリス 西条, 新酒仕込み 広島, 安芸の小京都',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-hiroshima-saijo-takehara-sake-brewery-bikan-stay/"
  },
  openGraph: {
    title: '【11・12・1月広島】西条酒蔵通りの冬新酒仕込み！名宿5選',
    description: '灘・伏見と並び称される日本三大銘醸地「西条酒蔵通り」が最も熱気を帯びる11〜1月の冬旅特集。赤レンガ煙突と白壁なまこ壁が連なる路地に立ち上る。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-hiroshima-saijo-takehara-sake-brewery-bikan-stay',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '冬の広島・西条酒蔵通りと竹原町並み保存地区の風情'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月広島】西条酒蔵通りの冬新酒仕込み＆名物「美酒鍋」！安芸の小京都・竹原町並み保存地区と厳選名宿5選",
    description: "灘・伏見と並び称される日本三大銘醸地「西条酒蔵通り」が最も熱気を帯びる11〜1月の冬旅特集。赤レンガ煙突と白壁なまこ壁が連なる路地に立ち上る新酒の吟醸香、蔵人の知恵から生まれた日本酒鍋「美酒鍋（びしゅなべ）」、安芸の小京都・竹原町並み保存地区の静寂と普明閣からの冬景色、竹原のブランド和牛「峠下牛」や瀬戸内の冬真鯛。東広島西条・竹原の滞在拠点に最適な厳選ホテル・名宿5選を徹底解説します。",
    images: ['https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function HiroshimaSaijoTakeharaWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "【11・12・1月広島】西条酒蔵通りの冬新酒仕込み＆名物「美酒鍋」！安芸の小京都・竹原町並み保存地区と厳選名宿5選",
        "description": "灘・伏見と並び称される日本三大銘醸地「西条酒蔵通り」が最も熱気を帯びる11〜1月の冬旅特集。赤レンガ煙突と白壁なまこ壁が連なる路地に立ち上る新酒の吟醸香、蔵人の知恵から生まれた日本酒鍋「美酒鍋（びしゅなべ）」、安芸の小京都・竹原町並み保存地区の静寂と普明閣からの冬景色、竹原のブランド和牛「峠下牛」や瀬戸内の冬真鯛。東広島西条・竹原の滞在拠点に最適な厳選ホテル・名宿5選を徹底解説します。",
        "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&h=630&q=80",
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
          "@id": "https://croud-travel.pages.dev/winter-hiroshima-saijo-takehara-sake-brewery-bikan-stay"
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
            "name": "広島・西条＆竹原名宿",
            "item": "https://croud-travel.pages.dev/winter-hiroshima-saijo-takehara-sake-brewery-bikan-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "冬（11・12・1月）の西条酒蔵通りを訪れる最大の魅力と見どころは何ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "11月から1月にかけては、西条の酒蔵が一斉に冬の新酒（初しぼり）の仕込みに入る一年で最も活気にあふれる季節です。赤レンガの煙突から蒸米の白い湯気が立ち上り、通り一帯に甘く芳醇な吟醸香が漂います。各酒蔵の軒先には、新酒ができた合図である鮮やかな緑色の「杉玉（酒林）」が掛け替えられ、直売所では出来立ての無濾過生原酒や新酒粕が並びます。白壁となまこ壁、赤瓦の屋根が連なる風情ある酒蔵通りをゆっくり歩きながら、各蔵の仕込み水（名水）を飲み比べるのも冬ならではの贅沢な体験です。"
            }
          },
          {
            "@type": "Question",
            "name": "西条名物の「美酒鍋（びしゅなべ）」とはどのような料理ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "美酒鍋は、酒造りの蔵人たちが冬の過酷な寒冷期に賄い料理として考案した西条独特の伝統鍋料理です。調理には水や出汁を一切使わず、たっぷりの日本酒と塩、黒胡椒のみで豚肉、鶏肉、砂肝、白菜、玉ねぎ、長ネギ、椎茸などの具材を鉄鍋で手早く炒め煮にします。アルコール分は強火で完全に蒸発するため、お酒が弱い方やお子様でも安心して召し上がれます。日本酒のアミノ酸と旨味が肉の臭みを消し、素材の甘みを最大限に引き出すため、あっさりしながらも深いコクがあり、冬に体を芯から温めてくれる逸品です。"
            }
          },
          {
            "@type": "Question",
            "name": "安芸の小京都・竹原町並み保存地区の冬の見どころと散策の所要時間は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "竹原は江戸時代に製塩業や酒造業で栄えた豪商たちの屋敷が立ち並び、国の重要伝統的建造物群保存地区に選定されています。冬の竹原は観光客の喧騒が落ち着き、格子窓（竹原格子）や漆喰の白壁が静寂の中に際立ちます。京都の清水寺を模した舞台造りの「西方寺 普明閣」へ登れば、竹原の町並みと瀬戸内海の穏やかな冬景色を一望できます。頼山陽ゆかりの春風館や旧森川家住宅などの歴史的建造物見学を含め、散策の所要時間は約1時間半〜2時間程度が目安です。"
            }
          },
          {
            "@type": "Question",
            "name": "竹原のブランド牛「峠下牛（たおしたぎゅう）」の特徴とおすすめの食べ方は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "峠下牛は、竹原市郊外の豊かな自然と清流に恵まれた峠下地区の牧場で丹精込めて育てられる広島の銘柄牛です。雌牛のみを長期肥育し、肉質はきめ細やかで上品な甘みのある脂、しっかりとした赤身のコクが際立ちます。地元の日本酒粕を配合した飼料を食べて育つため、肉の風味が芳醇で後味がすっきりしているのが特徴です。冬はステーキやローストビーフのほか、陶板焼きや地酒仕込みのすき焼きで味わうのが格別です。"
            }
          },
          {
            "@type": "Question",
            "name": "広島空港や新幹線を利用した、西条・竹原1泊2日の冬の周遊アクセス方法は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "広島空港は東広島市と竹原市のちょうど中間に位置し、空港から竹原駅へは乗り合いタクシーまたは路線バスで約30分、JR白市駅経由で西条駅へは約35分と抜群の近さです。新幹線利用の場合は東広島駅または広島駅・三原駅が起点となります。1日目に西条の酒蔵通りで新酒の試飲と美酒鍋を楽しみ、西条または竹原に宿泊。2日目に竹原の町並み保存地区を散策後、忠海港から大久野島に渡るか、安芸津の風光明媚な海岸線をドライブして広島空港・新幹線駅へ戻るコースが最も効率的でおすすめです。"
            }
          }
        ]
      }
    ]
  };

  const hotelsList = [
            {
              id: 1,
              name: "ＨＯＴＥＬ　ＶＡＮ　ＣＯＲＮＥＬＬ（ホテルヴァンコーネル）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/144995/144995.jpg",
              rating: 4.22,
              reviews: 505,
              price: "¥10,735〜",
              access: "西条駅から徒歩8分　西条ＩＣより車で約10分　",
              special: "広島県宿泊税条例に基づき、当ホテルではチェックインの際に宿泊税を別途頂戴しております。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F144995%2F144995.html",
              story: "JR西条駅南口から徒歩約2分、赤レンガの煙突が林立する酒蔵通りの入り口至近に位置する「HOTEL VAN CORNELL（ホテルヴァンコーネル）。」。ビジネスホテルの枠を超えた上質な設えと、西条の街並みに溶け込むシックな外観が印象的です。館内には西条の銘酒を取り揃えたレストランがあり、冬の冷え込んだ夕べに出来立ての新酒とともに地元食材を活かした逸品を味わえます。客室はシンプルかつ機能的に設計され、シモンズ社製ベッドが冬の長旅の疲労を優しく解きほぐします。賀茂鶴や白牡丹、西條鶴といった名だたる酒蔵群へ徒歩数分でアクセスできるため、朝一番の澄んだ空気の中で杉玉が青々と新調された酒蔵の町並みを気ままに散策する拠点としてこれ以上の立地はありません。",
              roomTip: "上層階のスーペリアダブル。西条の町並みや遠くに山並みを望む落ち着いた空間で静かな冬夜を過ごせます。",
              gourmetTip: "「西条酒仕込みの美酒御膳」。吟醸酒の香りがふわりと立ち上る酒粕汁や地酒の飲み比べセットが冬旅にぴったり。",
              highlights: [
                "西条酒蔵通り入口まで徒歩すぐ・吟醸酒の香る町並み散策の特等席" ,
                "シモンズベッド完備・館内レストランで西条の地酒と冬の味覚を堪能" ,
                "賀茂鶴・白牡丹・福美人など名門蔵元巡りが最もスムーズな立地"
              ]
            },
            {
              id: 2,
              name: "東広島グリーンホテルモーリス",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/43917/43917.jpg",
              rating: 4.58,
              reviews: 3028,
              price: "¥5,005〜",
              access: "ＪＲ西条駅徒歩１０分／山陽自動車道　西条ＩＣ車で７分",
              special: "東広島西条の中心に位置しております。予約期間は3か月です。先のご予約はしばらくお待ちください。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F43917%2F43917.html",
              story: "JR西条駅南口から徒歩約4分、東広島市の官庁街・商業エリアにほど近い「東広島グリーンホテルモーリス」。広々とした大浴場にはサウナと水風呂が完備され、冬の酒蔵巡りで冷え切った身体を湯気のぬくもりで芯から癒やすことができます。客室は全室に幅広のライティングデスク、加湿機能付き空気清浄機、高速Wi-Fiを備え、ゆとりあるダブルベッドを採用。朝食ビュッフェでは、広島県産の採れたて卵や地元契約農家の旬野菜、毎日手作りされる温かい和洋総菜が並び、宿泊者から絶大な支持を集めています。フロントスタッフの丁寧な案内やレンタサイクルの貸出など、細やかな心配りが行き届いた極めて完成度の高いシティホテルです。",
              roomTip: "デラックスツインまたはコーナーダブル。広々とした室内で荷物を広げやすく、冬の連泊滞在にも最適。",
              gourmetTip: "「地元食材を活かした朝食ビュッフェ」。ふっくら炊き上げた広島米と熱々の豚汁、地元の名産品が朝のエネルギーを充実させます。",
              highlights: [
                "サウナ付き大浴場完備・冬の酒蔵巡りで冷えた身体をじっくり温める" ,
                "評判の朝食ビュッフェで地元食材の手作り惣菜と温かい豚汁を満喫" ,
                "清潔感あふれる快適設備と親切なフロント対応で高評価レビュー多数"
              ]
            },
            {
              id: 3,
              name: "グリーンスカイホテル竹原",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/147937/147937.jpg",
              rating: 4.42,
              reviews: 611,
              price: "¥6,750〜",
              access: "ＪＲ竹原駅すぐそば。　広島空港から竹原駅方面行き乗合バスで竹原駅前まで約25分、駅前バス停すぐそば。",
              special: "安芸の小京都竹原のスタイリッシュなホテル。ビジネス・観光に便利な立地で広島空港からも２５分",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147937%2F147937.html",
              story: "JR竹原駅の目の前に堂々と佇み、安芸の小京都・竹原の観光拠点として絶大な信頼を誇る「グリーンスカイホテル竹原」。竹原の象徴である「竹」をモチーフにしたスタイリッシュな館内デザインが特徴で、和モダンなロビーが温かく旅人を迎えます。国の重要伝統的建造物群保存地区「竹原町並み保存地区」へは徒歩約12分と散策に絶好。館内レストラン「瀬戸内ダイニング ハーベスト」では、竹原が誇るブランド牛「峠下牛（たおしたぎゅう）」のグリルや、竹原の三蔵（竹鶴・藤井・中尾）の地酒、瀬戸内海の旬魚をふんだんに取り入れた創作フレンチ・会席を提供。大久野島（うさぎの島）へのフェリーが発着する忠海港へのアクセスも良く、竹原の歴史と瀬戸内の旅情を満喫できます。",
              roomTip: "プレミアム和洋室またはコンフォートツイン。竹の意匠があしらわれた落ち着きある空間で贅沢な寛ぎを約束します。",
              gourmetTip: "「峠下牛の炭火焼きステーキと竹原三蔵ペアリングディナー。」。柔らかな肉質の旨味と個性豊かな純米酒の芳醇な余韻が重なります。",
              highlights: [
                "竹原駅前・重要伝統的建造物群保存地区まで徒歩散策圏内のデザイナーズホテル" ,
                "レストランで竹原名物「峠下牛」グリルと竹原三蔵の地酒ペアリング" ,
                "大久野島フェリー発着の忠海港や安芸津方面への観光ハブとして抜群"
              ]
            },
            {
              id: 4,
              name: "西条ＨＡＫＵＷＡホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/108769/108769.jpg",
              rating: 3.91,
              reviews: 135,
              price: "¥7,200〜",
              access: "ＪＲ　西条駅よりバスで広島大学行に乗車、広大中央口下車約12分",
              special: "広島大学正面！宿泊者にはスポーツ施設の利用特典有！！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108769%2F108769.html",
              story: "東広島市西条の学術・文化エリアに位置し、テニスコートや大型フィットネス施設を併設したリゾートライクなシティホテル「西条HAKUWAホテル」。広大な敷地と開放的なロビーが特徴で、都会の喧騒を離れてゆったりとした滞在が叶います。客室は一般的なビジネスホテルよりもひと回り広く設計されており、ゆとりあるベッドと清潔なバスルームで快適な休息を約束。館内には本格的な日本料理レストランと中国料理レストランがあり、冬の旬魚や広島牛を用いた贅沢な会席料理を落ち着いた個室で堪能できます。山陽自動車道西条IC・志和ICからもアクセス良好で、自家用車やレンタカーで酒蔵通りや竹原、三原方面を巡るドライブ旅のベースキャンプとして非常に便利です。",
              roomTip: "エグゼクティブツイン。落ち着いたインテリアとワイドな窓から周辺の緑豊かな景色を眺められます。",
              gourmetTip: "「和食処の冬の広島味覚会席」。旬の寒魚のお造りや広島県産牛のすき焼き鍋で体の芯から温まるひととき。",
              highlights: [
                "広々客室と充実のレストラン・山陽道IC至近で車利用の周遊に最適" ,
                "落ち着いた個室で味わう冬の広島味覚会席・ゆとりの駐車スペース" ,
                "リゾート感ある落ち着いた佇まいでカップルやファミリーにも人気"
              ]
            },
            {
              id: 5,
              name: "ホテルルートイン東広島西条駅前",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/161066/161066.jpg",
              rating: 4.25,
              reviews: 761,
              price: "¥7,400〜",
              access: "ＪＲ山陽本線　西条駅より徒歩にて約３分  山陽自動車道　西条ＩＣより2.5Ｋｍ　車で約7分　",
              special: "ＷＯＷＯＷ全室で無料視聴可■VODルームシアター無料視聴可能(一般映画のみ：コンフォートルーム特典）",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F161066%2F161066.html",
              story: "JR西条駅北口から徒歩約1分という驚異的な好アクセスを誇る「ホテルルートイン東広島西条駅前」。駅北口の静かなロータリーに面し、電車の利用でも冬の冷え込みを感じることなくスムーズにチェックイン可能です。館内には旅人の疲れを癒やす男女別人工温泉大浴場「旅人の湯」を備えており、手足を伸ばしてゆったりと湯浴みを楽しめるのが大きな魅力。全室にWOWOW無料視聴、加湿空気清浄機、無料Wi-Fiを完備。朝食には毎朝焼き上げられるクロワッサンや温かいお味噌汁、各種和洋おかずが無料で提供され、元気な朝のスタートをサポートします。酒蔵通りのある南口へは駅の自由通路を渡ってすぐのため、観光にもビジネスにも圧倒的な利便性を発揮します。",
              roomTip: "コンフォートルーム。高層階に位置し、エアウィーヴ製マットレスパッド導入で極上の睡眠環境を提供。",
              gourmetTip: "「無料バイキング朝食」。あつあつのスープや焼き立てパン、冬野菜の温菜で冷えた朝も活動的にスタート。",
              highlights: [
                "JR西条駅北口徒歩1分・人工温泉大浴場＆充実の無料朝食バイキング完備" ,
                "全室加湿空気清浄機＆WOWOW無料・エアウィーヴ導入の快適客室" ,
                "駅直近で寒風や手荷物の心配無用・西条の夜の飲食店街も徒歩圏内"
              ]
            }
  ];

  const faqs = [
    {
      q: "冬（11・12・1月）の西条酒蔵通りを訪れる最大の魅力と見どころは何ですか？",
      a: "11月から1月にかけては、西条の酒蔵が一斉に冬の新酒（初しぼり）の仕込みに入る一年で最も活気にあふれる季節です。赤レンガの煙突から蒸米の白い湯気が立ち上り、通り一帯に甘く芳醇な吟醸香が漂います。各酒蔵の軒先には、新酒ができた合図である鮮やかな緑色の「杉玉（酒林）」が掛け替えられ、直売所では出来立ての無濾過生原酒や新酒粕が並びます。白壁となまこ壁、赤瓦の屋根が連なる風情ある酒蔵通りをゆっくり歩きながら、各蔵の仕込み水（名水）を飲み比べるのも冬ならではの贅沢な体験です。"
    },
    {
      q: "西条名物の「美酒鍋（びしゅなべ）」とはどのような料理ですか？",
      a: "美酒鍋は、酒造りの蔵人たちが冬の過酷な寒冷期に賄い料理として考案した西条独特の伝統鍋料理です。調理には水や出汁を一切使わず、たっぷりの日本酒と塩、黒胡椒のみで豚肉、鶏肉、砂肝、白菜、玉ねぎ、長ネギ、椎茸などの具材を鉄鍋で手早く炒め煮にします。アルコール分は強火で完全に蒸発するため、お酒が弱い方やお子様でも安心して召し上がれます。日本酒のアミノ酸と旨味が肉の臭みを消し、素材の甘みを最大限に引き出すため、あっさりしながらも深いコクがあり、冬に体を芯から温めてくれる逸品です。"
    },
    {
      q: "安芸の小京都・竹原町並み保存地区の冬の見どころと散策の所要時間は？",
      a: "竹原は江戸時代に製塩業や酒造業で栄えた豪商たちの屋敷が立ち並び、国の重要伝統的建造物群保存地区に選定されています。冬の竹原は観光客の喧騒が落ち着き、格子窓（竹原格子）や漆喰の白壁が静寂の中に際立ちます。京都の清水寺を模した舞台造りの「西方寺 普明閣」へ登れば、竹原の町並みと瀬戸内海の穏やかな冬景色を一望できます。頼山陽ゆかりの春風館や旧森川家住宅などの歴史的建造物見学を含め、散策の所要時間は約1時間半〜2時間程度が目安です。"
    },
    {
      q: "竹原のブランド牛「峠下牛（たおしたぎゅう）」の特徴とおすすめの食べ方は？",
      a: "峠下牛は、竹原市郊外の豊かな自然と清流に恵まれた峠下地区の牧場で丹精込めて育てられる広島の銘柄牛です。雌牛のみを長期肥育し、肉質はきめ細やかで上品な甘みのある脂、しっかりとした赤身のコクが際立ちます。地元の日本酒粕を配合した飼料を食べて育つため、肉の風味が芳醇で後味がすっきりしているのが特徴です。冬はステーキやローストビーフのほか、陶板焼きや地酒仕込みのすき焼きで味わうのが格別です。"
    },
    {
      q: "広島空港や新幹線を利用した、西条・竹原1泊2日の冬の周遊アクセス方法は？",
      a: "広島空港は東広島市と竹原市のちょうど中間に位置し、空港から竹原駅へは乗り合いタクシーまたは路線バスで約30分、JR白市駅経由で西条駅へは約35分と抜群の近さです。新幹線利用の場合は東広島駅または広島駅・三原駅が起点となります。1日目に西条の酒蔵通りで新酒の試飲と美酒鍋を楽しみ、西条または竹原に宿泊。2日目に竹原の町並み保存地区を散策後、忠海港から大久野島に渡るか、安芸津の風光明媚な海岸線をドライブして広島空港・新幹線駅へ戻るコースが最も効率的でおすすめです。"
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
            <Link href="/" className="hover:text-amber-700">ホーム</Link>
            <span>&gt;</span>
            <Link href="/features" className="hover:text-amber-700">特集一覧</Link>
            <span>&gt;</span>
            <span className="text-slate-900 font-semibold">広島・西条＆竹原名宿</span>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-r from-stone-900 via-amber-950 to-slate-900 text-white py-16 md:py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-amber-500/30 border border-amber-300/40 text-amber-200 text-xs md:text-sm px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>11月・12月・1月冬の酒蔵情緒＆小京都特集</span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6 text-white drop-shadow-md">
              広島・東広島西条＆竹原<br className="hidden sm:inline" />
              西条酒蔵通りの冬新酒仕込みと名物「美酒鍋」！<br className="hidden sm:inline" />
              安芸の小京都・竹原町並み保存地区＆厳選名宿5選
            </h1>
            <p className="max-w-3xl mx-auto text-sm md:text-lg text-amber-100 leading-relaxed drop-shadow">
              赤レンガ煙突の酒蔵群から立ち上る蒸米の湯気と青い杉玉。吟醸酒発祥の地・西条で味わう熱々の蔵人鍋「美酒鍋」と、江戸の豪商屋敷が静かに息づく安芸の小京都・竹原の町並み。冬の瀬戸内が誇る極上ブランド牛「峠下牛」と銘酒に酔いしれる大人の冬紀行。
            </p>
          </div>
        </header>

        {/* Article Summary Box */}
        <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
            <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b pb-3">
              <CheckCircle2 className="w-5 h-5 text-amber-700 flex-shrink-0" />
              <span>本特集でわかること（11・12・1月の西条・竹原旅行の要点）</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-700">
              <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-100">
                <span className="font-bold text-amber-900 block mb-1">① 西条酒蔵通りの冬新酒仕込み</span>
                日本三大銘醸地の冬。赤レンガ煙突と白壁なまこ壁が連なる路地に漂う吟醸香、新調される青い杉玉、名水仕込み水巡りと限定生原酒。
              </div>
              <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-100">
                <span className="font-bold text-amber-900 block mb-1">② 美酒鍋＆竹原ブランド峠下牛</span>
                出汁を使わず日本酒と塩胡椒のみで炒め煮る伝統の蔵人料理「美酒鍋」。竹原の清流で育つ旨味濃厚な雌牛「峠下牛」と瀬戸内の旬魚。
              </div>
              <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-100">
                <span className="font-bold text-amber-900 block mb-1">③ 安芸の小京都・竹原の静寂</span>
                製塩と酒造りで栄えた重要伝統的建造物群保存地区。竹原格子の意匠、高台の普明閣から見渡す冬景色、大久野島・忠海港への好アクセス。
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">
          {/* Section 1 */}
          <section className="space-y-6">
            <div className="border-l-4 border-amber-700 pl-4">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">SAIJO SAKE BREWERIES IN WINTER</span>
              <h2 className="text-xl md:text-3xl font-black text-slate-900">
                白壁となまこ壁に映える青い杉玉！西条酒蔵通りが最も輝く冬の新酒仕込み
              </h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
              <p>
                兵庫の灘、京都の伏見と並び、日本三大銘醸地のひとつとして名高い広島県東広島市の「西条」。標高約250メートルの西条盆地に位置するこの地は、秋から真冬にかけて朝晩の冷え込みが極めて厳しく、酒造りに最適な気候条件を備えています。軟水醸造法を確立した三浦仙三郎の教えを受け継ぎ、吟醸酒発祥の地としても知られる西条の町には、JR西条駅の南側にわずか1キロメートル四方の範囲に7つもの名門蔵元（賀茂鶴、白牡丹、西條鶴、福美人、賀茂泉、亀齢、山陽鶴）が軒を連ねています。
              </p>
              <p>
                11月から1月にかけては、まさに酒蔵が一年で最も活気と緊張感に満ちる「寒仕込み」の最盛期です。早朝、赤レンガの煙突からは酒米を蒸し上げる白い湯気が立ち上り、通り一帯には甘くフルーティーな吟醸香が心地よく漂います。新酒の完成を告げる瑞々しい緑色の「杉玉（酒林）」が各蔵の軒先に次々と吊るされ、直売所には火入れを行わないフレッシュなしぼりたて生原酒や、できたての芳醇な酒粕が並びます。各酒蔵の敷地内には自由に飲める井戸水（仕込み水）が湧き出ており、蔵ごとに異なる水のまろやかさを味わいながら歩くのも冬ならではの趣深い時間です。
              </p>
              <p>
                西条の仕込み水は、背後にそびえる龍王山に降り注いだ雨雪が半世紀以上の歳月をかけて地下深く浸透した清らかな伏流水です。同じ酒蔵通りの中でも、北側と南側で硬度が微妙に異なり、中硬水の蔵では力強いキレのある酒が、軟水の蔵では繊細で芳醇な吟醸酒が生まれます。冬の冷たい空気の中、マイカップを片手に各蔵の井戸を巡り、水の違いが酒の個性にどのように反映されているのかを確かめる「仕込み水巡り」は、酒処・西条ならではの知的な知的好奇心を刺激する旅の醍醐味です。
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-6">
            <div className="border-l-4 border-amber-700 pl-4">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">LOCAL WINTER GASTRONOMY</span>
              <h2 className="text-xl md:text-3xl font-black text-slate-900">
                出汁を使わず日本酒で煮る！名物「美酒鍋」と竹原が誇る幻の「峠下牛」
              </h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
              <p>
                西条の冬の美食を語る上で欠かせないのが、郷土の名物「美酒鍋（びしゅなべ）」です。その起源は昭和初期、過酷な寒さの中で早朝から夜遅くまで作業を続ける酒蔵の蔵人たちが、身体を温めるために考案した賄い料理にあります。一般的な鍋料理のように水や出汁を使うことは一切せず、鉄鍋で豚肉、鶏肉、砂肝を炒めた後、清酒を惜しみなく注ぎ入れ、塩と粗挽き黒胡椒のみで味を整えます。白菜や玉ねぎ、長ネギが日本酒の蒸気の中でしんなりと煮え立ち、肉と野菜の旨味が酒のアミノ酸によって極限まで引き出されます。
              </p>
              <p>
                アルコール分は強火で完全に飛ばされるため、お酒に弱い方でも問題なく楽しめ、後味は驚くほどさっぱりとしています。生卵にくぐらせて頬張れば、塩胡椒のスパイシーさと日本酒の上品な甘みが口いっぱいに広がり、冬の冷えた五臓六腑に染み渡ります。また、西条から車で約30分の港町・竹原では、清らかな水と澄んだ空気の中で育まれたブランド和牛「峠下牛（たおしたぎゅう）」が冬のご馳走として親しまれています。地元の酒粕を飼料に加えることで実現したとろけるような脂の甘みと濃厚な赤身は、ステーキやすき焼きで極上の味わいを約束します。
              </p>
              <p>
                美酒鍋と並び、冬の西条で味わいたいのが搾りたての新酒粕を使った「酒粕汁」や「粕漬け」です。蔵元直営のレストランや駅前の老舗割烹では、芳醇な大吟醸の酒粕を贅沢に溶いた汁物に、瀬戸内海の寒ブリや広島県産の牡蠣、根菜をたっぷり入れた粕汁が振る舞われ、一口すするごとに体の芯からぽかぽかと温まります。さらに竹原の港町では、冬の瀬戸内海で獲れる新鮮な真鯛やメバル、太刀魚のお造りと合わせることで、山海の恵みが調和した広島の冬の美食の真髄を心ゆくまで堪能できます。
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-6">
            <div className="border-l-4 border-amber-700 pl-4">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">TAKEHARA HISTORIC DISTRICT</span>
              <h2 className="text-xl md:text-3xl font-black text-slate-900">
                安芸の小京都・竹原町並み保存地区の冬情趣と普明閣からの展望
              </h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
              <p>
                瀬戸内海に面した竹原は、平安時代には京都・下鴨神社の荘園として栄え、江戸時代中期には製塩業と酒造業によって莫大な富を築いた歴史を持ちます。国の重要伝統的建造物群保存地区に選定されている「竹原町並み保存地区」には、当時の豪商たちが競い合って建てた重厚な本瓦葺きの屋敷や、繊細な意匠が施された「竹原格子」が今なお往時の姿のまま残されています。
              </p>
              <p>
                冬の竹原は、訪れる観光客の足音も穏やかで、石畳の小路には凛とした静寂が漂います。町並みの奥、小高い丘に位置する「西方寺 普明閣（ふみょうかく）」の舞台造りのお堂へ登ると、眼下には黒漆喰の瓦屋根が連なる歴史的な町並みと、その向こうに広がる瀬戸内海の穏やかな冬の海が一望できます。江戸後期の儒学者・頼山陽の生家である春風館や、ニッカウヰスキー創業者・竹鶴政孝の生家である竹鶴酒造など、近代日本の礎を築いた偉人たちの息吹に触れられるのも竹原の大きな魅力です。
              </p>
              <p>
                竹原の海岸沿い、忠海（ただのうみ）港からは、野生のうさぎたちが暮らす島として世界的な人気を誇る「大久野島」へのフェリーが発着しています。冬の大久野島は観光客も比較的落ち着き、穏やかな瀬戸内海の冬景色の中で愛らしいうさぎたちとゆったり触れ合える静かなリゾートタイムが流れています。忠海港周辺で竹原銘菓の「竹の茶屋ジェラート」や地元酒蔵の銘酒を買い揃え、瀬戸内海の潮風を感じながら過ごす時間は、歴史散策とはまた違った穏やかな癒やしを与えてくれます。
              </p>
            </div>
          </section>

          {/* Hotel List Section */}
          <section className="space-y-8">
            <div className="border-l-4 border-amber-700 pl-4">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">VERIFIED RECOMMENDED HOTELS</span>
              <h2 className="text-xl md:text-3xl font-black text-slate-900">
                西条酒蔵通り＆竹原町並み保存地区を満喫する厳選名宿5選
              </h2>
              <p className="text-xs md:text-sm text-slate-500 mt-1">
                ※楽天トラベルAPIより最新の空室・料金・口コミ情報をリアルタイム連携
              </p>
            </div>

            <div className="space-y-8">
              {hotelsList.map((hotel: any) => (
                <div 
                  key={hotel.id}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col md:flex-row"
                >
                  <div className="md:w-5/12 relative h-64 md:h-auto min-h-[260px]">
                    <img 
                      src={hotel.img} 
                      alt={hotel.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-amber-800/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
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
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 flex-shrink-0 mt-0.5" />
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
                        className="inline-flex items-center gap-1.5 bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs md:text-sm px-4 py-2.5 rounded-xl transition shadow-sm flex-shrink-0 ml-3"
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
            <div className="border-l-4 border-amber-700 pl-4">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">RECOMMENDED ITINERARY</span>
              <h3 className="text-xl md:text-2xl font-black text-slate-900">
                1泊2日！西条酒蔵通り新酒巡りと安芸の小京都・竹原を巡る冬の王道モデルコース
              </h3>
            </div>
            
            <div className="relative border-l-2 border-amber-200 ml-4 pl-6 space-y-8 text-sm">
              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-amber-700 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-amber-800 block mb-1">1日目 11:00 | JR西条駅に到着</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">西条観光案内所で蔵巡りマップを入手＆名物「美酒鍋」ランチ</h4>
                <p className="text-slate-600 leading-relaxed">
                  JR山陽本線西条駅の観光案内所で仕込み水巡りコップや酒蔵マップを手に入れ散策開始。名店「佛蘭西屋」などで、清酒のみで煮立てる熱々の名物美酒鍋を堪能して冷えた身体を温めます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-amber-700 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-amber-800 block mb-1">1日目 13:30 | 酒蔵通り散策＆新酒の試飲</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">赤レンガ煙突と白壁なまこ壁の路地で新酒粕と限定生原酒を購入</h4>
                <p className="text-slate-600 leading-relaxed">
                  賀茂鶴の見学室や白牡丹、福美人の格子窓を眺めながら散策。新調された青い杉玉をバックに記念撮影し、冬限定のしぼりたて新酒や手作り酒粕スイーツを味わいます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-amber-700 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-amber-800 block mb-1">1日目 18:00 | 名宿にチェックイン＆地酒ディナー</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">大浴場でリフレッシュ後、地元の旬魚と銘酒のペアリング</h4>
                <p className="text-slate-600 leading-relaxed">
                  西条または竹原の宿にチェックイン。大浴場やサウナで寛いだ後、ホテル内または周辺の居酒屋で広島銘酒の飲み比べと瀬戸内の小鰯・牡蠣料理に舌鼓。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-amber-700 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-amber-800 block mb-1">2日目 09:30 | 安芸の小京都・竹原へ移動</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">竹原町並み保存地区を散策＆西方寺普明閣から冬の瀬戸内を一望</h4>
                <p className="text-slate-600 leading-relaxed">
                  車またはJR呉線で竹原へ。石畳が続く町並み保存地区で竹原格子や歴史的建造物を見学し、高台の普明閣舞台から静寂に包まれた冬の町並みと瀬戸内海を鑑賞。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-amber-700 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-amber-800 block mb-1">2日目 13:00 | 峠下牛ランチ＆お土産調達</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">「道の駅 たけはら」で特産品購入＆峠下牛ステーキを満喫して帰路へ</h4>
                <p className="text-slate-600 leading-relaxed">
                  竹原のレストランで極上峠下牛の炭火焼きランチ。道の駅で竹原三蔵の純米酒や竹細工工芸品、瀬戸内レモン菓子をお土産に買い揃え、広島空港または新幹線駅へ。
                </p>
              </div>
            </div>
          </section>

          {/* Winter Travel Tips */}
          <section className="bg-amber-50/70 border border-amber-200 rounded-3xl p-6 md:p-8 space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-amber-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-700 flex-shrink-0" />
              <span>冬（11・12・1月）の西条・竹原旅行・知っておきたいお役立ちTips</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-amber-950">
              <div className="bg-white/80 p-4 rounded-xl border border-amber-100">
                <strong className="block mb-1 text-amber-900 font-bold">・盆地特有の厳しい底冷えと足元の防寒</strong>
                西条は盆地のため、12〜1月の朝晩は氷点下まで冷え込みます。酒蔵通りは日陰が多く足元から冷えるため、厚手の靴下や保温インナー、マフラーなど万全の防寒具を用意しましょう。
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-amber-100">
                <strong className="block mb-1 text-amber-900 font-bold">・酒蔵見学時のエチケットと仕込み水用ボトル</strong>
                仕込みの時期は蔵内衛生管理が極めて厳重です。見学可能エリアを事前に確認し、酒蔵へ入る前の「納豆」の飲食は控えましょう。仕込み水持ち帰り用のマイボトル持参が便利です。
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-amber-100">
                <strong className="block mb-1 text-amber-900 font-bold">・美酒鍋の名店は事前予約が確実</strong>
                美酒鍋を提供する西条駅前の名店（佛蘭西屋など）は、週末の昼夜を問わず予約客で埋まりやすいです。特に忘年会・新年会シーズンの12〜1月は事前予約をおすすめします。
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-amber-100">
                <strong className="block mb-1 text-amber-900 font-bold">・車の運転と試飲の計画分け</strong>
                西条の酒蔵巡りでは各蔵で試飲が楽しめます。ドライバーの方は試飲を控え、仕込み水や甘酒を楽しむか、電車（JR山陽本線・呉線）を活用したノーカー周遊が安心です。
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="space-y-6">
            <div className="border-l-4 border-amber-700 pl-4">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">FREQUENTLY ASKED QUESTIONS</span>
              <h3 className="text-xl md:text-2xl font-black text-slate-900">
                西条酒蔵通り＆竹原の冬旅に関するよくある質問
              </h3>
            </div>

            <div className="space-y-4">
              {faqs.map((faq: any, idx: number) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                  <h4 className="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                    <span className="text-amber-700 font-black">Q.</span>
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
              <Sparkles className="w-5 h-5 text-amber-700" />
              <span>中国・瀬戸内および冬の目的別おすすめ特集</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
              <Link href="/winter-hiroshima-onomichi-senkoji-shimanami-okoze-ramen-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-amber-400 transition font-medium text-slate-700">
                🚲 尾道・千光寺初詣＆しまなみオコゼ名宿
              </Link>
              <Link href="/winter-hiroshima-kure-edajima-oyster-yamato-port-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-amber-400 transition font-medium text-slate-700">
                ⚓ 呉＆江田島・大和ミュージアムと牡蠣名宿
              </Link>
              <Link href="/winter-hiroshima-tomonoura-onsen-setouchi-taimeshi-taoshitagyu-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-amber-400 transition font-medium text-slate-700">
                🌊 鞆の浦温泉・冬の仙酔島夕景と鯛めし名宿
              </Link>
              <Link href="/winter-okayama-kurashiki-bikan-yakei-kibitsu-chiyagyu-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-amber-400 transition font-medium text-slate-700">
                🏮 倉敷美観地区・冬の夜景と吉備津神社名宿
              </Link>
              <Link href="/winter-yamaguchi-iwakuni-kintaikyo-suo-oshima-mikan-nabe-takamorigyu-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-amber-400 transition font-medium text-slate-700">
                🌉 岩国錦帯橋冬情趣＆周防大島みかん鍋名宿
              </Link>
              <Link href="/features" className="p-3 bg-amber-800 text-white rounded-xl font-bold hover:bg-amber-900 transition text-center flex items-center justify-center">
                ❄️ 全国の冬の厳選特集一覧を見る →
              </Link>
            </div>
          </section>
        </main>
      
      <HubRelatedPosts currentSlug="winter-hiroshima-saijo-takehara-sake-brewery-bikan-stay" />
</div>
    </>
  );
}
