import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Sunrise, Waves, Sun, Flame, Landmark, Building, Moon, ShoppingBag, ThermometerSun
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12・1月岡山】国宝吉備津神社新春初詣！名宿5選',
  description: '11月から1月、岡山県倉敷市の「倉敷美観地区」は、観光客で賑わう日中とは打って変わり。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '倉敷美観地区 冬, 倉敷 夜間景観照明, 吉備津神社 初詣, 大回廊, 下津井真蛸, 千屋牛 ステーキ, 倉敷アイビースクエア, ロイヤルパークホテル倉敷, 倉敷国際ホテル, ドーミーイン倉敷, 大原美術館, 11月 12月 1月 岡山旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-okayama-kurashiki-bikan-yakei-kibitsu-chiyagyu-stay/"
  },
  openGraph: {
    title: '【11・12・1月岡山】国宝吉備津神社新春初詣！名宿5選',
    description: '11月から1月、岡山県倉敷市の「倉敷美観地区」は、観光客で賑わう日中とは打って変わり。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-okayama-kurashiki-bikan-yakei-kibitsu-chiyagyu-stay',
    siteName: 'クラドトラベル',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: '冬の倉敷美観地区の白壁土蔵と夜間景観照明'
      }
    ],
    locale: 'ja_JP',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月岡山】冬の倉敷美観地区・白壁土蔵の夜間景観照明＆国宝吉備津神社新春初詣・名物下津井真蛸と幻の千屋牛を堪能する名宿5選",
    description: "11月から1月、岡山県倉敷市の「倉敷美観地区」は、観光客で賑わう日中とは打って変わり、澄み切った冬の夜気の中で世界的な照明デザイナー石井幹子氏監修の「夜間景観照明」に照らされ、静寂と幽玄の美を湛えます。倉敷川の水面に映る白壁土蔵と柳並木の影、桃太郎伝説の舞台・国宝「吉備津神社」の全長398mに及ぶ大回廊を歩く厳かな新春初詣。そして冬の瀬戸内海で獲れる弾力抜群の「下津井真蛸」や、日本最古の蔓牛の血統を受け継ぐ幻の黒毛和牛「千屋牛」の極上会席。心洗われる冬の倉敷旅を叶える厳選名宿5選と1泊2日の冬のモデルコースを徹底解説します。",
    images: ['https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function OkayamaKurashikiBikanWinterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "【11・12・1月岡山】冬の倉敷美観地区・白壁土蔵の夜間景観照明＆国宝吉備津神社新春初詣・名物下津井真蛸と幻の千屋牛を堪能する名宿5選",
    description: "11月から1月、岡山県倉敷市の「倉敷美観地区」は、観光客で賑わう日中とは打って変わり、澄み切った冬の夜気の中で世界的な照明デザイナー石井幹子氏監修の「夜間景観照明」に照らされ、静寂と幽玄の美を湛えます。倉敷川の水面に映る白壁土蔵と柳並木の影、桃太郎伝説の舞台・国宝「吉備津神社」の全長398mに及ぶ大回廊を歩く厳かな新春初詣。そして冬の瀬戸内海で獲れる弾力抜群の「下津井真蛸」や、日本最古の蔓牛の血統を受け継ぐ幻の黒毛和牛「千屋牛」の極上会席。心洗われる冬の倉敷旅を叶える厳選名宿5選と1泊2日の冬のモデルコースを徹底解説します。",
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
    datePublished: '2026-10-02',
    dateModified: '2026-10-02',
    author: {
      '@type': 'Organization',
      name: 'クラドトラベル編集部',
      url: 'https://croud-travel.pages.dev'
    },
    publisher: {
      '@type': 'Organization',
      name: 'クラドトラベル',
      logo: {
        '@type': 'ImageObject',
        url: 'https://croud-travel.pages.dev/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://croud-travel.pages.dev/winter-okayama-kurashiki-bikan-yakei-kibitsu-chiyagyu-stay'
    }
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ホーム',
        item: 'https://croud-travel.pages.dev'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '冬の特集一覧',
        item: 'https://croud-travel.pages.dev/features'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: '冬の倉敷美観地区＆吉備津神社初詣特集',
        item: 'https://croud-travel.pages.dev/winter-okayama-kurashiki-bikan-yakei-kibitsu-chiyagyu-stay'
      }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "冬（11月・12月・1月）の「倉敷美観地区」夜間景観照明の見どころと点灯時間は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "倉敷美観地区では、世界的照明デザイナー石井幹子氏のプロデュースにより、通年で日没から21時（冬期は17時頃〜21時）まで「夜間景観照明」が実施されます。冬は空気が乾燥して澄み渡るため、白壁土蔵やなまこ壁、大原美術館の石造り建築が柔らかい光に照らされ、倉敷川の水面に鏡のように美しく映り込みます。昼間の賑わいが引いた夜の美観地区は、静寂の中に川のせせらぎが響き、まるで時が止まったかのような幻想的な散策を満喫できます。"
        }
      },
      {
        '@type': 'Question',
        name: "桃太郎伝説のルーツ・国宝「吉備津神社」の新春初詣と全長398mの大回廊とは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "岡山市北区吉備津に鎮座する吉備津神社は、鬼退治神話（桃太郎伝説）のモデルとなった吉備津彦命（きびつひこのみこと）を祀る備中国一宮です。国宝に指定されている本殿・拝殿は全国で唯一の「比翼入母屋造（吉備津造）」と呼ばれる壮麗な建築様式。特に圧巻なのが、自然の地形に沿ってまっすぐに延びる全長約398メートルの木造「大回廊」です。正月三が日には数十万人の初詣客が訪れ、新年の開運・厄除け・延命長寿を祈願する厳かな風情が漂います。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の瀬戸内海の味覚「下津井真蛸（しもついまダコ）」と幻の和牛「千屋牛」の特徴は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "瀬戸大橋の袂に位置する下津井港は、激しい潮流と豊富なカニ・エビを食べて育つ日本有数のタコの名産地です。冬の下津井真蛸は海水温の低下とともに身がキュッと引き締まり、噛めば噛むほど濃厚な甘みと旨味が溢れ出します。刺身、ぶつ切り、タコ飯、天ぷらで味わいます。また、岡山県新見市で育つ「千屋牛（ちやぎゅう）」は、日本最古の蔓牛「竹の谷蔓」の血統を受け継ぐ幻の黒毛和牛。生産頭数が少なく希少ですが、融点の低い上質な霜降り脂と芳醇な赤身の香りが特徴で、すき焼きやステーキで至福の美味を放ちます。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の倉敷・岡山旅行の気候・服装と、散策時の注意点は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "岡山県南部は「晴れの国」と呼ばれる通り、冬も晴天の日が多く降雪は非常に稀です。ただし、内陸部からの冷たい北風が吹き抜けるため、朝晩は0度近くまで冷え込みます。美観地区の石畳や倉敷川沿いを散策する際は、風を通さない厚手のコートやダウン、マフラー、手袋が必要です。また、倉敷美観地区は石畳や橋の段差が多いため、歩き慣れたフラットなスニーカーや歩きやすいブーツを選びましょう。"
        }
      },
      {
        '@type': 'Question',
        name: "倉敷美観地区から吉備津神社へのアクセス方法と周遊ルートのコツは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "倉敷駅から吉備津神社へは、JR山陽本線で岡山駅へ向かい（約15〜17分）、JR吉備線（桃太郎線）に乗り換えて吉備津駅で下車（約15分）、駅から徒歩約10分です。車の場合は倉敷美観地区から約30分でアクセスできます。おすすめのルートは、1日目に倉敷美観地区の散策と美術館巡り、夜間景観照明を楽しみ、2日目の朝に吉備津神社へ新春参拝に向かうコース。混雑を避けて清々しい神域の空気を存分に味わうことができます。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "倉敷アイビースクエア",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8957/8957.jpg",
              rating: 4.55,
              reviews: 2690,
              price: "¥9,100〜",
              access: "倉敷駅より徒歩15分・車で5分/山陽自動車道、倉敷ＩＣより国道429・県道22号経由で約15分",
              special: "≪泊まれる文化遺産≫2020年10月全館リニューアル！赤煉瓦と蔦が絡まる景観が美しいホテルです。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8957%2F8957.html",
              story: "明治22年に建設された旧倉敷紡績（クラボウ）の本社工場を再生し、赤レンガと蔦（アイビー）が美しい情緒を醸し出す名門複合文化リゾート「倉敷アイビースクエア」。美観地区の中に位置し、国の近代化産業遺産や登録有形文化財に認定された歴史的空間にそのまま滞在できる特別な体験を提供します。館内には広々とした大浴場を備え、冬の冷えた体を心地よく解きほぐします。夕食は館内レストラン「蔦」にて、冬の瀬戸内の海の幸や岡山県産ブランド牛を取り入れた洗練された和洋会席。夜には温かな街灯に照らされた赤レンガ広場の静寂を独占できる、歴史とロマンにあふれる宿です。",
              roomTip: "デラックスツインルーム。高い天井と木の温もりを生かしたモダンな設えで、美観地区の歴史的景観に寄り添う上質な寛ぎを約束します。",
              gourmetTip: "「レストラン蔦の冬特選ディナー」。下津井タコのカルパッチョや備前黒牛のポワレなど、岡山の豊かなテロワールを五感で味わえます。",
              highlights: [
                "近代化産業遺産の赤レンガ建築・美観地区内に位置する名門複合リゾートの大浴場",
                "夜間ライトアップの美観地区を夜遅くまで満喫・レストラン蔦で味わう瀬戸内会席",
                "蔦が絡まる赤レンガ広場の幻想的な冬景色・ショップや体験工房も併設"
              ]
            },
            {
              id: 2,
              name: "ロイヤルパークホテル倉敷",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/181244/181244.jpg",
              rating: 4.46,
              reviews: 1190,
              price: "¥6,100〜",
              access: "【商店街アーケード直結】倉敷駅より徒歩にて約５分　",
              special: "2020年11月Open★倉敷駅前・商店街アーケード直結の好立地。絶景ラウンジで優雅な朝食を",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F181244%2F181244.html",
              story: "JR倉敷駅南口から徒歩約5分、美観地区へも徒歩圏内の好立地に位置するスタイリッシュホテル「ロイヤルパークホテル倉敷」。最上階フロアには倉敷市街の夜景を見渡す宿泊者専用の大浴場と、開放的なビューラウンジを完備。冬の澄んだ夜空を眺めながら温かな湯に浸かり、湯上がりにはラウンジでドリンクを片手に至福のひとときを過ごせます。客室は倉敷のデニム文化や木工技術を現代的に取り入れたシックなデザインで、全室に上質なシモンズ社製ベッドと加湿空気清浄機を完備。カップルや女性の一人旅にも安心のセキュリティと洗練されたホスピタリティが光ります。",
              roomTip: "プレミアムフロアツイン。高層階からのパノラマビューと、倉敷帆布やデニムをあしらったこだわりのインテリアが旅情を高めます。",
              gourmetTip: "「岡山恵みの朝食ビュッフェ」。名物えびめしや美星町産たまごの卵かけご飯、温かい手作り出汁巻き玉子など地元グルメが勢揃い。",
              highlights: [
                "倉敷駅徒歩5分の好立地・最上階展望大浴場と市街夜景を望むルーフトップラウンジ",
                "倉敷デニムや帆布を取り入れた和モダンデザイン・全室シモンズ製高級ベッド完備",
                "名物えびめしや美星町卵の朝食ビュッフェ・安心の女性フロア＆最新セキュリティ"
              ]
            },
            {
              id: 3,
              name: "倉敷国際ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7584/7584.jpg",
              rating: 4.26,
              reviews: 1348,
              price: "¥7,000〜",
              access: "ＪＲ倉敷駅南口徒歩１０分、山陽自動車道倉敷Ｉ．Ｃから１０分。",
              special: "木の温もりを感じる落ち着いた空間で歴史を感じさせてくれる洗練されたひとときをお過ごしいただけます。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7584%2F7584.html",
              story: "美観地区の中心、世界的名画を収蔵する大原美術館に隣接して建つ老舗の迎賓館「倉敷国際ホテル」。巨匠建築家・浦辺鎮太郎の設計による館内ロビーには、木版画の巨匠・棟方志功が手掛けた世界最大の木版画「大世界の柵」が堂々と掲げられ、美術館の中に泊まるような知的な感動を覚えます。客室は落ち着いたクラシックモダンで統一され、窓からは美観地区の白壁瓦屋根の冬景色を一望。メインダイニング「ウイステリア」では、瀬戸内海の旬の鮮魚や幻の千屋牛を贅沢に仕立てる本格フランス料理が提供され、記念日や大人の夫婦旅にふさわしい最高峰の気品が漂います。",
              roomTip: "美観地区ビュースーペリアツイン。眼下に白壁の町並みが広がり、夜にはライトアップされた瓦屋根の幻想的なコントラストを眺められます。",
              gourmetTip: "「フレンチ・ウイステリアの千屋牛ディナー」。赤身の濃厚な旨味と甘やかな脂が特徴の岡山県産「千屋牛」フィレ肉の極上ステーキ。",
              highlights: [
                "大原美術館隣接の迎賓館・棟方志功の巨大木版画と美観地区ビュー客室の気品",
                "メインダイニング「ウイステリア」で味わう幻の千屋牛と瀬戸内鮮魚の本格フレンチ",
                "浦辺鎮太郎設計の重厚な建築美・大原美術館の開館直後鑑賞にこれ以上ない特等席"
              ]
            },
            {
              id: 4,
              name: "天然温泉　阿智の湯　ドーミーイン倉敷",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/72042/72042.jpg",
              rating: 4.37,
              reviews: 4339,
              price: "¥7,062〜",
              access: "JR倉敷駅南口より徒歩7分",
              special: "2025年4月リニューアルオープン！サウナ付き天然温泉大浴場完備。美観地区まで徒歩１分。朝食も人気。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72042%2F72042.html",
              story: "美観地区の入口まで徒歩わずか1分という絶好のポジションに建つ「天然温泉 阿智の湯 ドーミーイン倉敷」。最上階の9階には、男女別の天然温泉大浴場「阿智の湯」と本格的な高温ドライサウナ、強冷水風呂を完備。内湯のほか、倉敷の夜風を感じながら入れる半露天風呂があり、冬の観光で冷え切った体を芯から温めてくれます。名物の無料夜食「夜鳴きそば」や湯上がりアイスサービスなど、充実のサービスが魅力。朝食バイキングでは、岡山名物の「まつり寿司（ばら寿司）」や季節の天ぷら、小鉢横丁など、朝から郷土の豊かな味わいを堪能できます。",
              roomTip: "最上階クイーンルーム。大浴場と同じフロアに位置し、スムーズな湯浴みと静かな睡眠環境でアクティブな冬の旅をサポートします。",
              gourmetTip: "「ご当地逸品朝食バイキング」。彩り豊かな岡山名物「まつり寿司」と、サクサクの揚げたて天ぷらが朝から食べ放題で大人気です。",
              highlights: [
                "美観地区入口徒歩1分・最上階天然温泉「阿智の湯」と名物夜鳴きそば無料サービス",
                "朝食バイキングで名物まつり寿司や揚げたて天ぷら・サウナ＆水風呂で極上のととのい",
                "冷え性に効く天然温泉の温もり・夜間の町並み散策後にすぐ入れる快適アクセス"
              ]
            },
            {
              id: 5,
              name: "ホテルアルファーワン倉敷",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/143309/143309.jpg",
              rating: 4.10,
              reviews: 2800,
              price: "¥4,500〜",
              access: "JR倉敷駅「南口」より徒歩約4分／倉敷ICより車で約12分／早島ICより車で約15分",
              special: "倉敷駅南口徒歩4分＆美観地区徒歩10分・男女大浴場・各階電子レンジ・24時間コインランドリー室",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F143309%2F143309.html",
              story: "JR倉敷駅南口より徒歩約3分、繁華街や美観地区へのアクセスに優れた実力派ビジネスホテル「ホテルアルファーワン倉敷」。機能的で清潔感あふれる客室には、全室にWi-Fi、加湿空気清浄機、快適なベッドが完備され、リーズナブルな料金設定でありながら安心の快適性を提供します。美観地区まで歩いて約10分と散策に便利で、夕刻のライトアップ観賞や朝一番の静かな散歩の拠点としても優秀。駅前エリアならではの周辺飲食店の多さも魅力で、下津井真蛸の刺身や岡山地酒を楽しめる地元居酒屋巡りを満喫したい方にぴったりです。",
              roomTip: "スタンダードダブル。広めのデスクとゆったりしたベッドを備え、一人旅やビジネスユースでもストレスのない滞在が叶います。",
              gourmetTip: "「和洋朝食バイキング」。手作りの日替わり惣菜や炊き立てご飯、温かいお味噌汁が揃い、冬の観光へ元気に繰り出すエネルギーを補給。",
              highlights: [
                "倉敷駅前徒歩3分の抜群の利便性・清潔な客室と地元居酒屋巡りに最適な高コスパ",
                "美観地区まで徒歩10分・Wi-Fi＆加湿空気清浄機完備で冬の乾燥対策も安心のクオリティ",
                "一人旅からカップル旅まで使い勝手抜群・温かい日替わり惣菜の手作り朝食バイキング"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "冬（11月・12月・1月）の「倉敷美観地区」夜間景観照明の見どころと点灯時間は？",
    "a": "倉敷美観地区では、世界的照明デザイナー石井幹子氏のプロデュースにより、通年で日没から21時（冬期は17時頃〜21時）まで「夜間景観照明」が実施されます。冬は空気が乾燥して澄み渡るため、白壁土蔵やなまこ壁、大原美術館の石造り建築が柔らかい光に照らされ、倉敷川の水面に鏡のように美しく映り込みます。昼間の賑わいが引いた夜の美観地区は、静寂の中に川のせせらぎが響き、まるで時が止まったかのような幻想的な散策を満喫できます。"
  },
  {
    "q": "桃太郎伝説のルーツ・国宝「吉備津神社」の新春初詣と全長398mの大回廊とは？",
    "a": "岡山市北区吉備津に鎮座する吉備津神社は、鬼退治神話（桃太郎伝説）のモデルとなった吉備津彦命（きびつひこのみこと）を祀る備中国一宮です。国宝に指定されている本殿・拝殿は全国で唯一の「比翼入母屋造（吉備津造）」と呼ばれる壮麗な建築様式。特に圧巻なのが、自然の地形に沿ってまっすぐに延びる全長約398メートルの木造「大回廊」です。正月三が日には数十万人の初詣客が訪れ、新年の開運・厄除け・延命長寿を祈願する厳かな風情が漂います。"
  },
  {
    "q": "冬の瀬戸内海の味覚「下津井真蛸（しもついまダコ）」と幻の和牛「千屋牛」の特徴は？",
    "a": "瀬戸大橋の袂に位置する下津井港は、激しい潮流と豊富なカニ・エビを食べて育つ日本有数のタコの名産地です。冬の下津井真蛸は海水温の低下とともに身がキュッと引き締まり、噛めば噛むほど濃厚な甘みと旨味が溢れ出します。刺身、ぶつ切り、タコ飯、天ぷらで味わいます。また、岡山県新見市で育つ「千屋牛（ちやぎゅう）」は、日本最古の蔓牛「竹の谷蔓」の血統を受け継ぐ幻の黒毛和牛。生産頭数が少なく希少ですが、融点の低い上質な霜降り脂と芳醇な赤身の香りが特徴で、すき焼きやステーキで至福の美味を放ちます。"
  },
  {
    "q": "冬の倉敷・岡山旅行の気候・服装と、散策時の注意点は？",
    "a": "岡山県南部は「晴れの国」と呼ばれる通り、冬も晴天の日が多く降雪は非常に稀です。ただし、内陸部からの冷たい北風が吹き抜けるため、朝晩は0度近くまで冷え込みます。美観地区の石畳や倉敷川沿いを散策する際は、風を通さない厚手のコートやダウン、マフラー、手袋が必要です。また、倉敷美観地区は石畳や橋の段差が多いため、歩き慣れたフラットなスニーカーや歩きやすいブーツを選びましょう。"
  },
  {
    "q": "倉敷美観地区から吉備津神社へのアクセス方法と周遊ルートのコツは？",
    "a": "倉敷駅から吉備津神社へは、JR山陽本線で岡山駅へ向かい（約15〜17分）、JR吉備線（桃太郎線）に乗り換えて吉備津駅で下車（約15分）、駅から徒歩約10分です。車の場合は倉敷美観地区から約30分でアクセスできます。おすすめのルートは、1日目に倉敷美観地区の散策と美術館巡り、夜間景観照明を楽しみ、2日目の朝に吉備津神社へ新春参拝に向かうコース。混雑を避けて清々しい神域の空気を存分に味わうことができます。"
  }
];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-indigo-100 selection:text-indigo-900 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero Header */}
      <header className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 opacity-35 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1800&q=80" 
            alt="冬の倉敷美観地区の白壁土蔵と夜間景観照明" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-indigo-900/80 backdrop-blur-md text-indigo-100 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-indigo-400/30">
            <Moon className="w-4 h-4 text-indigo-300" />
            11月・12月・1月 冬の岡山・倉敷美観地区＆吉備路歴史特集
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
            【11・12・1月岡山】冬の倉敷美観地区・白壁土蔵の夜間景観照明＆国宝吉備津神社新春初詣・名物下津井真蛸と幻の千屋牛を堪能する名宿5選
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            倉敷川の水面に映える白壁土蔵となまこ壁。石井幹子氏プロデュースの夜間景観照明に浮かび上がる冬の美観地区の幽玄の美、国宝「吉備津神社」の全長398mの大回廊を歩く清らかな新春初詣。冬の瀬戸内海の激流が育む弾力抜群の下津井真蛸、そして日本最古の蔓牛の血を引く幻の千屋牛ステーキ。歴史と文化が息づく倉敷の冬名宿とモデルコースをご案内します。
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-indigo-400" /> 最適時期：11月中旬〜1月下旬（夜間景観照明・年末年始・吉備津神社新春初詣）</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-indigo-400" /> エリア：岡山県倉敷市・岡山市吉備路（美観地区・アイビースクエア・吉備津神社）</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-indigo-400" /> 名物：下津井真蛸・幻の千屋牛・ままかり・ばら寿司</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-indigo-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Introduction</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              白壁と川面に宿る陰影の美。冬の静寂の中で出逢う、倉敷の真の情緒と歴史の重み
            </h2>
          </div>
          
          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p>
              江戸時代、天領（幕府直轄地）として備中米や特産品の集散地として栄華を極めた岡山県倉敷市。倉敷川の畔に建ち並ぶ白壁土蔵や黒いなまこ壁、本瓦葺きの屋根が織りなす町並みは、今なお江戸・明治の美学を鮮やかに現代へと伝えています。多くの観光客が行き交う昼間の華やかさも魅力ですが、美観地区が最も艶やかで心打つ表情を見せるのは、11月から1月にかけての冬の夕暮れから夜にかけての静寂の時間です。
            </p>
            <p>
              世界的な照明デザイナー石井幹子氏が手掛けた「夜間景観照明」が点灯すると、白壁やなまこ壁の陰影が柔らかな光に浮かび上がり、川面には鏡のように街並みが映し出されます。冬の澄み切った冷気の中、柳の葉が落ちた冬枯れの枝越しに見上げる瓦屋根のシルエットは、幽玄という言葉がこれ以上なく似合う美しさ。観光客の足音が消え去った石畳を歩けば、遠い江戸の夜へと誘われたかのような特別な静寂に包まれます。
            </p>
            <p>
              そして新春の倉敷を訪れたなら、ぜひ足を延ばしたいのが吉備路の総鎮守・国宝「吉備津神社」です。桃太郎伝説のルーツである吉備津彦命を祀るこの神社は、比翼入母屋造という全国唯一の本殿様式を誇り、自然の山肌に沿って延びる全長398メートルの木造「大回廊」は圧巻の一言。冬の木漏れ日が差し込む回廊をゆっくりと歩きながら捧げる新春の祈願は、日々の喧騒を忘れさせ、清らかな心で新しい年を迎える力を与えてくれます。
            </p>
            <p>
              旅の夜を至福の時間へと昇華させるのは、晴れの国・岡山が誇る冬の至高の味覚です。瀬戸大橋の直下に位置する下津井港で水揚げされる「下津井真蛸」は、冬の急潮流で身が引き締まり、噛みしめるほどに凝縮された旨味が口いっぱいに広がります。そして、日本最古の蔓牛の血統を頑なに守り継ぐ幻の和牛「千屋牛（ちやぎゅう）」は、赤身の芳醇な旨味ととろけるような霜降りが共存する岡山牛の最高峰。倉敷川の夜景を望む名宿に泊まり、美酒「大典白菊」や「竹林」とともに味わう冬の会席は、生涯の思い出に残る贅沢なひとときを約束します。
            </p>
          </div>
        </section>

        {/* 3 Key Highlights Section */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-indigo-800 font-bold text-xs sm:text-sm tracking-wider uppercase block">Highlights</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の倉敷美観地区を満喫する3大ハイライト
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              11月〜1月の倉敷だからこそ出逢える、光と歴史と極上グルメの体験。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
                <Moon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                1. 白壁土蔵を照らす「夜間景観照明」の幽玄美
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                石井幹子氏プロデュースの温かな光に照らされる冬の美観地区。倉敷川の水面に映り込む白壁の陰影と静寂な石畳の散策は、宿泊者だけに許された特別な時間です。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 font-bold">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                2. 桃太郎伝説・国宝「吉備津神社」新春初詣
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                全国唯一の比翼入母屋造の本殿と、全長約398mに及ぶ圧巻の木造大回廊。新年の厄除け・開運招福を祈願する厳かな初詣の空気感が心身を清めます。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-700 font-bold">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                3. 冬に旨味が締まる「下津井真蛸」＆幻の「千屋牛」
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                瀬戸内の潮流で鍛えられた下津井真蛸の刺身やタコ飯、そして日本最古の蔓牛血統を誇る希少な千屋牛のステーキ会席。岡山の極上美食に舌鼓を打ちます。
              </p>
            </div>
          </div>
        </section>

        {/* Model Course Section */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-indigo-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Course</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              【1泊2日】白壁の夜景と吉備路初詣・冬の美観地区アート＆美食モデルコース
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              美観地区の美術館・文化施設巡りから幻想的な夜間ライトアップ、吉備津神社参拝まで贅沢に巡る旅。
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-500/40 space-y-6">
              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase">DAY 1 午前〜午後</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  11:30 JR倉敷駅到着 ➔ 美観地区の町家カフェでランチ＆大原美術館鑑賞
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  倉敷駅から徒歩で美観地区へ。古民家を再生した町家カフェで温かい郷土ランチを堪能後、日本最初の西洋近代美術館「大原美術館」へ。エル・グレコ「受胎告知」やモネ「睡蓮」などの名画を冬の静かな館内でじっくり鑑賞します。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase">DAY 1 午後〜夕刻</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  14:30 倉敷川畔散策＆倉敷アイビースクエア ➔ 宿へチェックイン
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  本町通りの町家や倉敷帆布・マスキングテープの専門店を巡り、赤レンガの「倉敷アイビースクエア」へ。厳選宿にチェックインし、展望大浴場や天然温泉で手足を伸ばして温まり、夕暮れの準備を整えます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase">DAY 1 夜</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  17:30 倉敷川「夜間景観照明」夜散歩 ➔ 下津井真蛸＆千屋牛の贅沢会席ディナー
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  日没とともに灯る夜間景観照明。倉敷川に映る白壁土蔵の幻想的な灯りを眺めながら、静寂の町並みを夜散歩。宿に戻り、冬の引き締まった下津井真蛸の薄造りや、幻の千屋牛の鉄板ステーキを岡山の地酒とともに味わいます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase">DAY 2 朝</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  08:00 ご当地朝食ビュッフェ ➔ 吉備路へ移動し国宝「吉備津神社」新春初詣
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  岡山名物まつり寿司や温かいお惣菜の朝食を済ませ、JR桃太郎線または車で吉備津神社へ。国宝の本殿を拝観し、木造398mの大回廊を厳かに歩いて一年の無病息災を祈願。境内のお釜殿（鳴釜神事）の神秘的な空気に触れます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase">DAY 2 午後</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  12:00 吉備路の古民家カフェで手打ちうどん ➔ 倉敷駅でお土産選び＆帰路へ
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  五重塔を望む備中国分寺周辺をドライブし、温かい手打ちうどんランチ。倉敷駅へ戻り、名物「むらすゞめ」や「きびだんご」、倉敷デニムの雑貨を買い求め、大満足の笑顔で新幹線へ乗車します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-indigo-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の倉敷美観地区ステイに最適な厳選名宿5選
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-1">
              近代化産業遺産の赤レンガホテルから、大原美術館隣接の迎賓館、最上階天然温泉宿まで厳選。
            </p>
          </div>

          <div className="space-y-10">
            {hotelsData.map((h) => (
              <div key={h.id} className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-auto min-h-[260px]">
                    <img 
                      src={h.img} 
                      alt={h.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">
                      厳選第 {h.id} 位
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-bold text-indigo-800 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200/60">
                          {h.access}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-stone-600">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="font-bold text-stone-900 text-sm">{h.rating}</span>
                          <span>({h.reviews}件のクチコミ)</span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                        {h.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-500 font-medium">
                        {h.special}
                      </p>

                      <p className="text-sm text-stone-700 leading-relaxed pt-2">
                        {h.story}
                      </p>
                    </div>

                    <div className="space-y-3 bg-stone-50 rounded-2xl p-4 border border-stone-200/70 text-xs sm:text-sm text-stone-700">
                      <div className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-indigo-600" />
                        この宿の注目ポイント
                      </div>
                      <ul className="space-y-1.5 list-disc list-inside text-stone-600">
                        {h.highlights.map((hl: string, idx: number) => (
                          <li key={idx} className="leading-relaxed">{hl}</li>
                        ))}
                      </ul>
                      <div className="pt-2 border-t border-stone-200/60 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="font-bold text-stone-900">客室の提案：</span>
                          <span className="text-stone-600">{h.roomTip}</span>
                        </div>
                        <div>
                          <span className="font-bold text-stone-900">料理の提案：</span>
                          <span className="text-stone-600">{h.gourmetTip}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-stone-100">
                      <div>
                        <span className="text-xs text-stone-500 block">参考宿泊料金（1名あたり）</span>
                        <span className="text-xl sm:text-2xl font-black text-indigo-900">{h.price}</span>
                      </div>

                      <a 
                        href={h.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-700 to-slate-900 hover:from-indigo-800 hover:to-slate-950 text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all text-sm group"
                      >
                        <span>楽天トラベルで空室・プランを見る</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Local Gourmet & Culture Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-indigo-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Gourmet & Souvenir Guide</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の倉敷・岡山が誇る美食カルチャーと厳選銘菓
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-700 text-sm leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-indigo-700" />
                下津井真蛸の歯ごたえと幻の千屋牛
              </h3>
              <p>
                瀬戸内海の荒波にもまれる下津井の真蛸は、足が太く短く身の弾力が極めて強いのが特徴。冬の真蛸は甘みが最も強くなり、刺身では吸盤がコリコリと音を立て、唐揚げや天ぷらにするとふくよかな磯の香りが広がります。また、年間出荷数が数百頭にとどまる幻のブランド牛「千屋牛」は、サシの融点が低く胃にもたれない上品な甘みが特徴で、冬のすき焼きやしゃぶしゃぶで至高の美味しさを放ちます。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-indigo-700" />
                倉敷銘菓「むらすゞめ」と倉敷帆布・デニム
              </h3>
              <p>
                お土産には、明治創業の橘香堂が手掛ける「むらすゞめ」が代表格。クレープ状の薄皮で粒餡を包んだ優しい味わいが世代を超えて愛されています。また、国産ジーンズ発祥の地である児島デニムを使ったバッグやコースター、伝統の撚糸技術で織られる丈夫でお洒落な「倉敷帆布」のトートバッグなど、職人のこだわりが詰まった一生モノの工芸品が町並みに溢れています。
              </p>
            </div>
          </div>
        </section>

        {/* Winter Travel Practical Tips & Access Guide */}
        <section className="bg-indigo-50/60 rounded-3xl p-6 sm:p-10 border border-indigo-200/60 space-y-6">
          <div className="border-b border-indigo-200/80 pb-4">
            <span className="text-indigo-900 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Practical Guide</span>
            <h2 className="text-xl sm:text-2xl font-bold text-indigo-950">
              冬の倉敷・吉備路旅行を安全・快適に楽しむための装備とアクセス注意点
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-indigo-950">
            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <ThermometerSun className="w-4 h-4 text-indigo-700" />
                夜間散策の防寒対策
              </div>
              <p className="leading-relaxed text-stone-700">
                日中は晴天で暖かい日が多いですが、夜間のライトアップ散策時は倉敷川の水辺からの冷気が立ち込めます。厚手のコート、手袋、マフラーを着用し、暖かい服装で夜の美観地区を歩きましょう。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <Compass className="w-4 h-4 text-indigo-700" />
                吉備津神社へのアクセスと混雑
              </div>
              <p className="leading-relaxed text-stone-700">
                正月三が日の吉備津神社周辺は初詣の車で渋滞します。倉敷駅または岡山駅からJR吉備線（桃太郎線）を利用して「吉備津駅」から徒歩で参拝するのが最もスムーズです。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <CheckCircle2 className="w-4 h-4 text-indigo-700" />
                美観地区の店舗営業時間
              </div>
              <p className="leading-relaxed text-stone-700">
                美観地区のカフェや工芸品店は17時〜18時頃に閉店する店舗が多いです。お土産の購入やカフェ巡りは日中に済ませ、夕暮れ以降はライトアップ観賞とディナーに専念するのが賢明なスケジュールです。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-indigo-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">FAQ</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の倉敷美観地区・吉備津神社観光に関するよくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq: { q: string; a: string }, idx: number) => (
              <div key={idx} className="border border-stone-200/70 rounded-2xl p-5 hover:border-indigo-300 transition-colors bg-stone-50/50">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-indigo-800 text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
                    Q
                  </span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mt-3 pl-9">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Features & Internal Links Section */}
        <section className="border-t border-stone-200 pt-10 space-y-6">
          <div className="space-y-1">
            <span className="text-indigo-800 font-bold text-xs sm:text-sm tracking-wider uppercase block">Explore More Winter Travels</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              あわせて読みたい中国・瀬戸内の冬特集・名湯宿ガイド
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <Link 
              href="/winter-okayama-hinase-ushimado-oyster-kakioko-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-indigo-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-indigo-800 font-bold text-xs block mb-1">岡山・日生牛窓</span>
              <span className="text-stone-900 font-bold group-hover:text-indigo-900 transition-colors line-clamp-2">
                冬の日生牡蠣・名物カキオコと牛窓オリーブ園の絶景オーシャンビュー宿
              </span>
            </Link>

            <Link 
              href="/winter-okayama-yubara-onsen-sunayu-hiruzen-wagyu-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-indigo-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-indigo-800 font-bold text-xs block mb-1">岡山・湯原温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-indigo-900 transition-colors line-clamp-2">
                天下の名湯砂湯露天風呂と蒜山和牛・冬の雪見風呂を満喫する老舗温泉宿
              </span>
            </Link>

            <Link 
              href="/winter-hiroshima-tomonoura-onsen-setouchi-taimeshi-taoshitagyu-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-indigo-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-indigo-800 font-bold text-xs block mb-1">広島・鞆の浦温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-indigo-900 transition-colors line-clamp-2">
                潮待ちの港・鞆の浦の冬情緒と瀬戸内鯛めし・峠下牛を味わう絶景温泉宿
              </span>
            </Link>

            <Link 
              href="/winter-kagawa-kotohira-onsen-konpira-olive-beef-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-indigo-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-indigo-800 font-bold text-xs block mb-1">香川・琴平温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-indigo-900 transition-colors line-clamp-2">
                金刀比羅宮新春初詣と讃岐うどん・オリーブ牛を堪能する琴平温泉の名宿
              </span>
            </Link>

            <Link 
              href="/winter-mie-ise-jingu-hatsumode-okageyokocho-iseebi-matsusaka-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-indigo-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-indigo-800 font-bold text-xs block mb-1">三重・伊勢神宮</span>
              <span className="text-stone-900 font-bold group-hover:text-indigo-900 transition-colors line-clamp-2">
                新春初詣とおかげ横丁・五十鈴川の朝霧と冬の伊勢海老・松阪牛会席の名宿
              </span>
            </Link>

            <Link 
              href="/features" 
              className="p-4 rounded-2xl bg-stone-100 border border-stone-200 hover:border-indigo-400 transition-all group flex flex-col justify-center text-center"
            >
              <span className="text-stone-900 font-bold group-hover:text-indigo-900 transition-colors">
                冬の特集記事一覧をすべて見る ➔
              </span>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-okayama-kurashiki-bikan-yakei-kibitsu-chiyagyu-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
