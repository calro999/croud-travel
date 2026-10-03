import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Snowflake, Flame, Mountain, Building, ThermometerSun, Waves, Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月三島沼津】冬の三嶋大社新春開運初詣＆富士山スカイウォーク絶景！駿河湾深海魚・沼津港寒魚と名湯に寛ぐ厳選宿5選",
  description: "冬の三島・沼津は、大気が一年で最も澄み渡り、純白の冠雪を抱く富士山と紺碧の駿河湾が圧巻のコントラストを描く至高のシーズン。11月下旬の富士山雪化粧から1月の伊豆国一宮・三嶋大社新春初詣まで、源頼朝旗揚げの勝運パワーが満ち溢れます。日本最長吊橋・三島スカイウォークからの富士パノラマ、沼津港で冬に本番を迎える深海魚（本タカアシガニ・アカザエビ）や寒真鯛、箱根西麓三島野菜を堪能し、富士山展望風呂や中伊豆の名湯で温まる冬旅。楽天APIから最新取得した信頼の厳選宿5選を徹底特集します。",
  keywords: '三島 ホテル, 沼津 ホテル, 三嶋大社 初詣, 富士山 絶景, 三島スカイウォーク, 沼津港 深海魚, 富士山三島東急ホテル, ドーミーイン三島, ホテル天坊, 11月 12月 1月 静岡 観光',
  alternates: {
    canonical: 'https://croud-travel.com/winter-shizuoka-mishima-numazu-taisha-fuji-suruga-stay'
  },
  openGraph: {
    title: "【11・12・1月三島沼津】冬の三嶋大社新春開運初詣＆富士山スカイウォーク絶景！駿河湾深海魚・沼津港寒魚と名湯に寛ぐ厳選宿5選",
    description: "冬の三島・沼津は、大気が一年で最も澄み渡り、純白の冠雪を抱く富士山と紺碧の駿河湾が圧巻のコントラストを描く至高のシーズン。11月下旬の富士山雪化粧から1月の伊豆国一宮・三嶋大社新春初詣まで、源頼朝旗揚げの勝運パワーが満ち溢れます。日本最長吊橋・三島スカイウォークからの富士パノラマ、沼津港で冬に本番を迎える深海魚（本タカアシガニ・アカザエビ）や寒真鯛、箱根西麓三島野菜を堪能し、富士山展望風呂や中伊豆の名湯で温まる冬旅。楽天APIから最新取得した信頼の厳選宿5選を徹底特集します。",
    url: 'https://croud-travel.com/winter-shizuoka-mishima-numazu-taisha-fuji-suruga-stay',
    type: 'article',
    images: [{ url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80' }]
  }
};

export default function ShizuokaMishimaPage() {
  const hotels = [
            {
              id: 1,
              name: "富士山三島東急ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/179020/179020.jpg",
              rating: 4.54,
              reviews: 722,
              price: "¥10,100〜",
              access: "ＪＲ　三島駅（南口）／伊豆箱根鉄道　三島駅より徒歩にて約１分",
              special: "三島駅南口より徒歩1分★富士山の美しさを感じるアーバンリゾートホテル★最上階展望温浴施設がオススメ♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F179020%2F179020.html",
              story: "JR三島駅南口に隣接する「富士山三島東急ホテル」は、最上階の14階に位置する展望温浴施設「富士の湯」から、雄大な富士山と箱根山麓の稜線を一望できる絶景シティリゾートです。冬の晴れ渡った早朝、湯船に浸かりながら朝日に染まる紅富士を眺めるひとときは、まさに言葉を失う美しさ。三嶋大社へは徒歩約15分、三島スカイウォーク行きの路線バスも駅前から直行と、新春初詣や富士山観光の拠点として比類なき利便性を誇ります。朝食には三島野菜や沼津港直送の干物など、静岡のローカルフードを洗練されたビュッフェ形式で心ゆくまで堪能できます。",
              roomTip: "スーペリアツイン（富士山ビュー）。大きなピクチャーウィンドウから冠雪の富士山を正面に望み、朝から夕暮れまで刻々と移ろう冬の霊峰の表情をゆったり鑑賞。",
              gourmetTip: "「駿河湾旬魚と箱根西麓三島野菜のグリル」。澄んだ空気と清らかな水が育んだ三島大根や三島馬鈴薯の甘みと、沼津港直送の寒魚が織りなす極上の朝食ビュッフェ。",
              highlights: [
                "最上階14階の展望温浴施設から望む冠雪富士山絶景・JR三島駅南口直結の圧倒的利便性",
                "箱根西麓三島野菜や沼津港干物を楽しむ洗練ビュッフェ・三嶋大社新春初詣の拠点に最適",
                "三島スカイウォーク行バス直結・冬の澄み切った紅富士をベッドや湯船から鑑賞"
              ]
            },
            {
              id: 2,
              name: "天然温泉　富嶽の湯　ドーミーイン三島",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/128491/128491.jpg",
              rating: 4.44,
              reviews: 3130,
              price: "¥7,910〜",
              access: "ＪＲ　三島駅「南口」より徒歩5分",
              special: "時間限定で、夜鳴きそば＆ウェルカムドリンク＆乳酸菌飲料＆アイス無料提供中♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F128491%2F128491.html",
              story: "三島駅南口から徒歩5分、名刹・三嶋大社へも徒歩約10分という好立地に位置する「天然温泉 富嶽の湯 ドーミーイン三島」。最上階12階の大浴場「富嶽の湯」は自家源泉の天然温泉で、天気の良い冬の日には露天風呂や内湯から雪化粧をまとった富士山を望むことができます。高温サウナと冷水風呂も完備され、冬の冷えた体に最高のととのいを提供。夜にはおなじみの「夜鳴きそば」が無料で振る舞われ、三嶋大社参拝や三島うなぎディナーの後に心まで温まります。",
              roomTip: "ダブルルーム。高品質なシモンズ社製ベッドと加湿空気清浄機を完備。機能的なデスクも備え、一人旅やカップルの冬の街歩き拠点に最適。",
              gourmetTip: "「ご当地朝食バイキング・みしまコロッケと駿河湾釜揚げしらす丼」。三島名物のサクサクみしまコロッケと、ふっくら炊き上げたご飯に駿河湾のしらすをたっぷり乗せて。",
              highlights: [
                "最上階12階の自家源泉天然温泉大浴場＆高温サウナ・三嶋大社徒歩約10分・夜鳴きそば無料",
                "三島名物みしまコロッケや駿河湾しらす丼の朝食・冬の富士山展望露天風呂",
                "繁華街の三島うなぎ名店巡りも徒歩圏内・冬の一人旅からカップルまで安心の快適さ"
              ]
            },
            {
              id: 3,
              name: "沼津リバーサイドホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/134896/134896.jpg",
              rating: 4.32,
              reviews: 2240,
              price: "¥4,450〜",
              access: "ＪＲ沼津駅南口から南方向へ直進。駅から徒歩８分",
              special: "川の流れの優しさと格式が融合するラグジュアリーホテル。上質なくつろぎの時間をご提供いたします。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F134896%2F134896.html",
              story: "狩野川のほとりに佇む「沼津リバーサイドホテル」は、客室やレストランから富士山と雄大な狩野川の流れを望む沼津のランドマークホテルです。沼津港の新鮮な魚市場へ車で約8分、路線バスも頻発しており、冬の駿河湾の美味を味わい尽くす旅にうってつけ。夕暮れ時には川面に夕陽が反射し、遠くに雪を被った富士山が浮かび上がる幻想的なトワイライトタイムが楽しめます。館内レストランでは沼津港直送の海の幸をふんだんに取り入れた和食会席や本格イタリアンが用意され、特別な冬の夜を優雅に演出します。",
              roomTip: "リバービュー＆富士山ビュー・スーペリアツイン。狩野川のゆったりとした流れ越しに冠雪の富士山を望む贅沢なパノラマビュー。",
              gourmetTip: "「沼津港直送・寒ブリと地魚のお造り会席」。冬の冷たい荒波で身が引き締まった駿河湾の寒ブリや寒真鯛を、地酒「白隠正宗」とともにじっくり堪能。",
              highlights: [
                "狩野川のほとりに佇むリバーサイドパノラマ・富士山眺望・沼津港へのアクセス至便",
                "沼津港直送の寒ブリや地魚を活かした本格和洋ディナー・落ち着いた大人のリバーサイドステイ",
                "川面に映る夕陽と富士山のトワイライトビュー・記念日や観光に最適なホテル"
              ]
            },
            {
              id: 4,
              name: "ダイワロイネットホテルぬまづ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/145391/145391.jpg",
              rating: 4.44,
              reviews: 2059,
              price: "¥4,275〜",
              access: "JR「沼津駅」北口より徒歩約3分。「プラサヴェルデ」横／東名高速道路「沼津IC」より一般道を車で約15分。",
              special: "「沼津駅」より徒歩約3分。提携駐車場車605台収容で車のアクセスも便利。総合コンベンション施設に隣接",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F145391%2F145391.html",
              story: "JR沼津駅北口からペデストリアンデッキで直結する「ダイワロイネットホテルぬまづ」は、総合コンベンション施設「プラサ ヴェルデ」に直結した利便性抜群のホテルです。全室ゆとりのある広さを誇り、明るく清潔感あふれるモダンなインテリアが旅の疲労を優しく癒やします。三嶋大社や沼津港、三島スカイウォークへのアクセスがスムーズで、冬の伊豆・駿河湾周遊のハブとして大人気。館内には24時間利用可能なコンビニやコインランドリーも備わり、快適な滞在をサポートします。",
              roomTip: "デラックスダブルルーム。168cm幅のワイドベッドと広々としたライティングデスクを備え、荷物の多い冬の旅行でもゆったり過ごせる快適設計。",
              gourmetTip: "「静岡味めぐり朝食ビュッフェ」。沼津名産の肉厚なアジの干物を香ばしく焼き上げ、静岡県産ブランド米とあつあつの静岡おでんで温まる至福の朝食。",
              highlights: [
                "JR沼津駅北口直結・総合施設プラサヴェルデ併設・広々とした客室と焼き立てアジ干物朝食",
                "全室ワイドベッド完備・三島スカイウォークや沼津深海水族館への周遊ハブ",
                "清潔感あふれる客室と充実のアメニティ・冬の快適ドライブや電車旅に抜群の立地"
              ]
            },
            {
              id: 5,
              name: "伊豆長岡温泉　ホテル天坊",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/67097/67097.jpg",
              rating: 4.45,
              reviews: 706,
              price: "¥12,100〜",
              access: "伊豆箱根鉄道　伊豆長岡駅よりバスで１０分（別所下車）",
              special: "富士山を望む高台に佇む落ち着いた宿。明るく開放的な館内や本格的なアロマエステは女性に大人気。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67097%2F67097.html",
              story: "中伊豆の玄関口・伊豆の国市に佇む「伊豆長岡温泉 ホテル天坊」は、広大な敷地に趣の異なる多彩な湯船が揃う本格温泉旅館です。自家源泉を引いた展望露天風呂や岩風呂、檜風呂など男女合わせて数多くの浴槽があり、冬の冷気の中で湯けむりに包まれる極上の湯浴みが叶います。弱アルカリ性単純温泉の柔らかな湯は赤ちゃんから年配の方まで安心して長湯を楽しめる名湯。夕食は沼津港直送の寒魚や本タカアシガニ、静岡そだち牛など伊豆の海山の贅を集めた豪華会席またはオープンキッチンバイキングから選べます。",
              roomTip: "温泉露天風呂付き客室「天の原」。客室専用の露天風呂から冬の伊豆の山並みを眺め、誰にも気兼ねなく源泉を独り占めできるプライベートな贅沢空間。",
              gourmetTip: "「駿河湾冬の味覚・タカアシガニと伊豆牛の極上会席」。日本一深い駿河湾が育んだ甘みたっぷりのタカアシガニと、きめ細やかな伊豆牛ステーキの贅沢な競演。",
              highlights: [
                "広大な敷地に多彩な湯船が揃う伊豆長岡の名湯旅館・自家源泉掛け流し露天風呂・タカアシガニ会席",
                "駿河湾タカアシガニと伊豆牛ステーキの極上ディナー・露天風呂付き客室で過ごす至福の時間",
                "広々とした庭園と足湯・ファミリーから三世代旅行までゆったり寛げる温泉リゾート"
              ]
            }
  ];

  const faqData = [
  {
    "q": "冬（11月〜1月）の三島・沼津で富士山が最も綺麗に見える時間帯やおすすめスポットは？",
    "a": "三島・沼津エリアは富士山の南西に位置するため、冬は空気中の水蒸気が極めて少なく、1年の中で最も高い確率で雪化粧をまとった富士山を望むことができます。ベストな時間帯は午前8時から11時頃で、朝の澄んだ光に照らされる白銀の富士は圧巻です。スポットとしては、「三島スカイウォーク（全長400mの大吊橋）」からの橋越しのパノラマ、柿田川公園の湧水散策路、沼津市街地の「千本松原」海岸、狩野川沿いの堤防、富士山三島東急ホテルの展望台などが挙げられます。夕暮れ時には富士山頂が赤く染まる紅富士やアーベントロートも見られます。"
  },
  {
    "q": "三嶋大社の新春初詣（1月）の歴史的由緒や混雑状況・福太郎餅について教えてください。",
    "a": "三嶋大社は伊豆国一宮であり、平安末期に伊豆に配流されていた源頼朝が源氏再興を祈願して旗揚げを成功させたことから、全国的な「勝運・開運・厄除け」の聖地として信仰されています。新春三が日には約60万人以上の参拝客が訪れ、神池にかかる神橋から総門、本殿前にかけて賑わいます。混雑を避けるなら早朝8時前、または夕方16時以降の参拝がおすすめです。参拝後には境内にある名物「福太郎本舗」の福太郎餅（ヨモギ餅をこし餡で包んだ縁起餅）とお茶のセットを味わうのが定番の楽しみ方です。"
  },
  {
    "q": "冬の沼津港で味わうべき「深海魚グルメ」や寒魚の旬の魅力は何ですか？",
    "a": "沼津港が面する駿河湾は水深約2,500mと日本で最も深い湾であり、11月から冬にかけて底引き網漁が最盛期を迎えます。世界最大の甲殻類「本タカアシガニ」は冬に身がぎっしり詰まり、濃厚な蟹味噌と甘みが絶品です。また、深海魚の「メヒカリ（唐揚げが美味）」「アカザエビ（テナガエビ・甘エビ以上の甘み）」「トロダボエビ」「ゲホウ」など、他では味わえない深海グルメが港の食堂や寿司店に並びます。さらに脂の乗った寒アジ、寒ブリ、金目鯛の煮付けも冬の必食の逸品です。"
  },
  {
    "q": "三島スカイウォークを冬に訪れる際の服装や見どころ・注意点は？",
    "a": "三島スカイウォークは標高約260mの高台に架かる吊橋のため、冬期は強い西風が吹き抜けることが多く、体感温度は平地より3〜5度低くなります。防風性のあるダウンジャケット、マフラー、手袋、ニット帽などの防寒具をしっかり着用してください。吊橋の中央からは駿河湾と冠雪の富士山、伊豆の山並みを360度見渡せ、冬晴れの日は伊豆大島まで見渡せます。吊橋を渡った先にはロングジップラインやスカイガーデン（花に囲まれた温室ショップ）があり、温かい三島ブランドのホットドリンクで暖を取ることができます。"
  },
  {
    "q": "冬の三島・沼津旅行での道路凍結状況やアクセスの注意点はありますか？",
    "a": "三島市街地や沼津港周辺は温暖な太平洋側気候のため、積雪や路面凍結は極めて稀でノーマルタイヤで問題なく移動できます。ただし、三島スカイウォークから箱根峠へ抜ける国道1号線や、十国峠・芦ノ湖方面へ標高を上げるルートを利用する場合は、12月下旬から1月にかけて路面凍結や降雪が発生することがあります。箱根方面へ抜けるドライブを計画されている場合は、スタッドレスタイヤ装着かチェーン携行を推奨します。東海道新幹線（三島駅）や東名高速・新東名高速を使えば東京から約1時間と非常にアクセス良好です。"
  }
];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "【11・12・1月三島沼津】冬の三嶋大社新春開運初詣＆富士山スカイウォーク絶景！駿河湾深海魚・沼津港寒魚と名湯に寛ぐ厳選宿5選",
        "description": "冬の三島・沼津は、大気が一年で最も澄み渡り、純白の冠雪を抱く富士山と紺碧の駿河湾が圧巻のコントラストを描く至高のシーズン。11月下旬の富士山雪化粧から1月の伊豆国一宮・三嶋大社新春初詣まで、源頼朝旗揚げの勝運パワーが満ち溢れます。日本最長吊橋・三島スカイウォークからの富士パノラマ、沼津港で冬に本番を迎える深海魚（本タカアシガニ・アカザエビ）や寒真鯛、箱根西麓三島野菜を堪能し、富士山展望風呂や中伊豆の名湯で温まる冬旅。楽天APIから最新取得した信頼の厳選宿5選を徹底特集します。",
        "url": 'https://croud-travel.com/winter-shizuoka-mishima-numazu-taisha-fuji-suruga-stay',
        "publisher": {
          "@type": "Organization",
          "name": "週末ごほうび旅・厳選の宿ガイド",
          "url": "https://croud-travel.com"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "ホーム",
            "item": "https://croud-travel.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "冬の特集一覧",
            "item": "https://croud-travel.com/features"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "冬の三島・沼津・三嶋大社初詣＆富士山絶景特集",
            "item": 'https://croud-travel.com/winter-shizuoka-mishima-numazu-taisha-fuji-suruga-stay'
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      }
    ]
  };

  return (
    <article className="min-h-screen bg-slate-50 text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-slate-950 via-sky-950 to-blue-950 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-200 text-xs sm:text-sm font-medium mb-6">
            <Snowflake className="w-4 h-4 text-cyan-300 animate-spin" />
            11月・12月・1月冬の特選旅｜静岡・三島＆沼津・伊豆の国
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white mb-6">
            冬の三嶋大社新春開運初詣＆富士山スカイウォーク絶景！<br className="hidden sm:inline" />
            駿河湾深海魚・沼津港寒魚と名湯に寛ぐ厳選宿5選
          </h1>
          <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed max-w-4xl mb-8">
            首都圏から東海道新幹線でわずか45分。冬の三島・沼津は、澄み切った大気の中に純白の雪を被った富士山が鮮やかにそびえ立ち、紺碧の駿河湾と息を呑む絶景のコントラストを描く特別な季節です。源頼朝旗揚げの宮・三嶋大社での新春開運初詣、日本最長大吊橋「三島スカイウォーク」からの白銀富士パノラマ、沼津港で旬を迎える駿河湾の深海魚や寒魚の贅沢グルメ。富士山を望む展望風呂や伊豆長岡の名湯で温まる冬旅へご案内します。
          </p>
          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-sky-400" /> 静岡県三島市・沼津市・伊豆の国市</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-sky-400" /> 探訪期：11月下旬〜1月下旬</span>
            <span className="flex items-center gap-1.5"><Mountain className="w-4 h-4 text-sky-400" /> 富士山スカイウォーク絶景＆三嶋大社新春初詣</span>
          </div>
        </div>
      </header>

      {/* Navigation Breadcrumbs */}
      <nav aria-label="パンくずリスト" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-slate-500">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-sky-600 transition">ホーム</Link></li>
          <li><span>/</span></li>
          <li><Link href="/features" className="hover:text-sky-600 transition">特集一覧</Link></li>
          <li><span>/</span></li>
          <li className="text-slate-800 font-medium truncate">冬の三島・沼津・三嶋大社初詣＆富士山絶景特集</li>
        </ol>
      </nav>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Deep Dive Overview Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-sky-600 pl-4">
            <span className="text-sky-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Tradition & Panoramic Vista</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬晴れの霊峰富士を仰ぎ、伊豆国一宮の勝運と日本一深い湾の恵みに酔いしれる
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              源頼朝が天下を期した古社と、駿河湾の深海魚・寒魚が織りなす冬の饗宴
            </p>
          </div>

          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              静岡県の東部、富士山の南麓に広がる三島市と駿河湾最奥部に位置する沼津市。古くから東海道五十三次の宿場町として栄え、富士山の雪解け水が数十年もの歳月を経て市街地のいたる所から湧き出る「水の都」として愛されてきました。温暖な気候で一年を通じて過ごしやすい地域ですが、この地が一年で最も鮮烈な輝きを放つのは、11月下旬から1月にかけての冬の季節です。冬型の気圧配置によって空気中の水蒸気や塵が吹き払われ、乾燥した青空が広がる冬期は、雪化粧をまとった富士山を最もクリアに望める黄金シーズンとなります。
            </p>
            <p>
              冬の三島観光のハイライトとして外せないのが、箱根西麓の標高約260mに架かる日本最長400mの人道専用吊橋「三島スカイウォーク」です。歩行者専用吊橋の中央からは、眼下に広がる広大な駿河湾と伊豆の山並み、そして橋のワイヤー越しに圧倒的なスケールで迫る純白の富士山を一望できます。冬晴れの澄んだ光を浴びて輝く富士山の美しさは息を呑むほどで、早朝には山頂が赤く染まる紅富士、夕暮れ時には茜色のグラデーションに包まれるトワイライトビューが訪れる人々を魅了します。
            </p>
            <p>
              そして新春を迎える時期の最大の信仰の拠点が、伊豆国一宮「三嶋大社」です。事代主神（恵比寿様）と大山祇命を祀るこの古社は、平安末期に伊豆の蛭ヶ小島に配流されていた若き日の源頼朝が、源氏再興の悲願を込めて百日参りを行い、旗揚げを成功させたことから、全国的な「勝運・武運・開運厄除け」の聖地として崇敬を集めています。新春三が日には約60万人の参拝客が訪れ、神橋から総門、国の重要文化財である荘厳な本殿へと続く参道は熱気と神聖な空気に包まれます。参拝後には境内にある名物「福太郎本舗」で、リーゼントのような烏帽子姿を模した縁起餅「福太郎餅」とお茶をいただき、福徳を体内に取り込むのが伝統の習わしです。
            </p>
            <p>
              一方、隣接する沼津港では、水深約2,500mという日本一の深さを誇る駿河湾の冬の味覚が最盛期を迎えます。11月から冬にかけて底引き網漁が本格化し、世界最大の甲殻類「本タカアシガニ」をはじめ、メヒカリ、アカザエビ（テナガエビ）、トロダボエビといった珍しい深海魚が水揚げされます。タカアシガニの甘く上品な身肉と濃厚な蟹味噌、サクサクに揚げたメヒカリの唐揚げは、港町ならではの至高の美味。さらに冷たい海で脂が乗り切った寒アジ、寒ブリ、金目鯛の煮付けなど、冬の海鮮グルメの宝庫です。
            </p>
            <p>
              グルメを満喫した後は、富士山の伏流水で泥臭さを抜いた伝統の「三島うなぎ」や、箱根西麓の澄んだ空気と赤土で育った甘みたっぷりの「三島大根」「三島馬鈴薯」を使った料理に舌鼓。そして宿では、富士山を望む最上階展望風呂や、美肌の湯として名高い「伊豆長岡温泉」の自家源泉掛け流し露天風呂で温まる。都心から新幹線で1時間足らずで叶う、贅沢で温もりあふれる冬のショートトリップです。
            </p>
          </div>

          {/* 3 Pillar Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-2 text-sky-700 font-bold text-sm mb-1">
                <Mountain className="w-4 h-4 text-sky-600" />
                <span>富士山スカイウォーク絶景</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                日本最長400m大吊橋から望む純白冠雪富士と駿河湾大パノラマ。冬晴れの澄んだ青空に輝く奇跡の富士眺望。
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-2 text-sky-700 font-bold text-sm mb-1">
                <Sparkles className="w-4 h-4 text-sky-600" />
                <span>伊豆国一宮 三嶋大社初詣</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                源頼朝旗揚げの勝運・厄除け聖地。重厚な重要文化財本殿での新春祈願と、縁起名物「福太郎餅」の滋味。
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-2 text-sky-700 font-bold text-sm mb-1">
                <Utensils className="w-4 h-4 text-sky-600" />
                <span>駿河湾深海魚＆沼津寒魚</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                日本一深い駿河湾の本タカアシガニ・メヒカリ・アカザエビと、沼津港の寒アジフライ、三島うなぎの贅沢。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-8">
          <div className="border-b border-slate-200 pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
            <div>
              <span className="text-sky-600 font-bold text-xs uppercase tracking-wider block">SELECTED ACCOMMODATIONS</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                冬の三島・沼津を満喫する厳選名宿5選
              </h2>
            </div>
            <p className="text-xs text-slate-500">
              ※楽天トラベルAPIリアルタイム取得データ（2026年最新）
            </p>
          </div>

          <div className="space-y-10">
            {hotels.map((hotel) => (
              <article key={hotel.id} className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden hover:shadow-md transition">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                  <div className="md:col-span-5 relative min-h-[260px] bg-slate-100">
                    <img 
                      src={hotel.img} 
                      alt={hotel.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-slate-950/80 text-white text-xs px-2.5 py-1 rounded-full font-bold">
                      厳選宿 #{hotel.id}
                    </div>
                  </div>

                  <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-1.5 text-amber-500">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="font-extrabold text-sm text-slate-900">{hotel.rating}</span>
                          <span className="text-xs text-slate-500">({hotel.reviews.toLocaleString()}件)</span>
                        </div>
                        <span className="text-xs font-semibold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100">
                          冬の特選プラン
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 leading-snug">
                        {hotel.name}
                      </h3>

                      <p className="text-xs text-slate-500 flex items-center gap-1.5 mb-4">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{hotel.access}</span>
                      </p>

                      <p className="text-sm text-slate-700 leading-relaxed mb-5">
                        {hotel.story}
                      </p>

                      <div className="bg-slate-50 rounded-2xl p-4 mb-5 text-xs space-y-2 border border-slate-100">
                        <div className="flex items-start gap-2">
                          <Building className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-slate-900">客室選びのヒント：</span>
                            <span className="text-slate-600 ml-1">{hotel.roomTip}</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Utensils className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-slate-900">冬の味覚ハイライト：</span>
                            <span className="text-slate-600 ml-1">{hotel.gourmetTip}</span>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-1.5 mb-6 text-xs text-slate-600">
                        {hotel.highlights.map((hl: string, hIdx: number) => (
                          <li key={hIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-slate-400 block font-medium">宿泊参考料金（2名1室時1名あたり）</span>
                        <span className="text-xl sm:text-2xl font-black text-rose-600">{hotel.price}</span>
                      </div>
                      <a
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-xs transition-all"
                      >
                        <span>空室・プランを確認</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 1泊2日冬旅モデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-sky-600 pl-4">
            <span className="text-sky-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Winter Schedule</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の三島・沼津を満喫する1泊2日王道モデルコース
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              白銀富士を渡る大吊橋、源頼朝ゆかりの古社初詣、駿河湾深海魚と名湯をめぐる旅
            </p>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-sky-100">
            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-sky-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 10:30】三島駅到着＆三島スカイウォークで白銀富士パノラマ</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                東海道新幹線で三島駅に到着。直通バスで日本最長400mの大吊橋「三島スカイウォーク」へ。澄み渡る冬晴れの空にそびえる純白の富士山と駿河湾の大絶景を橋の上から堪能。スカイガーデンで温かい静岡茶ラテを楽しみます。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-sky-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 13:00】三島名物「うなぎ重」ランチ＆柿田川湧水群散策</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                市街地へ戻り、富士山の湧水で数日間さらして泥臭さを抜いた伝統の「三島うなぎ」の名店（うなぎ桜家やすみの坊など）でふっくら香ばしい鰻重に舌鼓。食後は国指定天然記念物「柿田川湧水群」の第2展望台で、神秘的なコバルトブルーに輝く湧き間を眺めます。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-sky-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 15:30】伊豆国一宮「三嶋大社」新春開運初詣</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                源頼朝ゆかりの古社「三嶋大社」へ。総門をくぐり国の重要文化財である荘厳な本殿で新年の開運・厄除けを祈願。名物の「福太郎餅」を味わい、神池で優雅に泳ぐ鯉を眺めながら心静かな時間を過ごします。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-sky-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 17:00】ホテルチェックイン・富士山展望風呂と駿河湾ディナー</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                三島・沼津または伊豆長岡の厳選宿にチェックイン。夕暮れの紅富士を望む展望風呂や名湯露天風呂で温まった後、夕食には沼津港直送の寒魚や深海魚、静岡県産牛の会席料理を地酒とともにじっくり堪能します。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-sky-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【2日目 10:00】沼津港で深海魚体験＆海鮮食べ歩き・千本松原散策</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                チェックアウト後、活気あふれる沼津港へ。世界唯一のシーラカンス冷凍標本を展示する「沼津港深海水族館」を見学。港の飲食店街でサクサクのアジフライや本タカアシガニ、深海魚握りを堪能し、富士山を望む千本松原の海岸を散歩して帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* 冬の三島・沼津観光・実用ガイドセクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-sky-600 pl-4">
            <span className="text-sky-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Practical Winter Guide</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の三島・沼津旅を快適に楽しむための気候・富士山眺望・アクセスのアドバイス
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700 leading-relaxed">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-rose-500" />
                気候と服装・風対策
              </h4>
              <p>
                平野部は太平洋側の温暖な気候ですが、三島スカイウォークなどの高台や沼津港の海岸沿いでは冬の強い西風が吹き抜けます。体感温度がぐっと下がるため、防風性のあるジャケットやマフラー、手袋を着用してください。
              </p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <Mountain className="w-4 h-4 text-sky-500" />
                富士山観賞のベストタイミング
              </h4>
              <p>
                午前8時〜11時頃が最も雲が少なくクッキリと富士山が見える時間帯です。午後になると気温上昇に伴い上昇気流で雲が湧きやすくなるため、富士山ビュースポットは午前中に訪れるのが鉄則です。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-sky-600 pl-4">
            <span className="text-sky-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">FAQ & Local Insights</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の三島・沼津観光・気候・グルメ よくある質問
            </h2>
          </div>

          <div className="space-y-6 divide-y divide-slate-100">
            {faqData.map((faq, index) => (
              <div key={index} className="pt-5 first:pt-0">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 flex items-start gap-2">
                  <span className="text-sky-600 font-black">Q{index + 1}.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 内部リンク関連特集 */}
        <section className="bg-slate-100 rounded-3xl p-6 sm:p-8 space-y-4">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            合わせて読みたい冬の厳選温泉・初詣特集
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <Link 
              href="/winter-kanagawa-hakone-yumoto-ashinoko-shrine-fuji-stay"
              className="bg-white p-5 rounded-2xl shadow-xs hover:border-sky-400 border border-slate-200 transition-all flex flex-col justify-between"
            >
              <span className="font-bold text-slate-900 mb-1">【箱根】冬の箱根湯本＆芦ノ湖・箱根神社初詣と富士山名宿</span>
              <span className="text-xs text-slate-500">澄み渡る白雪富士と関東総鎮守の開運祈願、相模湾の寒魚会席</span>
            </Link>
            <Link 
              href="/winter-iwate-morioka-tsunagi-onsen-hatsumode-wagyu-stay"
              className="bg-white p-5 rounded-2xl shadow-xs hover:border-sky-400 border border-slate-200 transition-all flex flex-col justify-between"
            >
              <span className="font-bold text-slate-900 mb-1">【盛岡】盛岡八幡宮新春初詣＆岩手山白銀絶景名宿</span>
              <span className="text-xs text-slate-500">繋温泉の源泉掛け流し美肌湯と盛岡三大麺、極上雫石牛すき焼き</span>
            </Link>
            <Link 
              href="/winter-ehime-imabari-shimanami-oomishima-taimeshi-onsen-stay"
              className="bg-white p-5 rounded-2xl shadow-xs hover:border-sky-400 border border-slate-200 transition-all flex flex-col justify-between"
            >
              <span className="font-bold text-slate-900 mb-1">【愛媛・しまなみ】大山祇神社新春初詣＆天然真鯛名宿</span>
              <span className="text-xs text-slate-500">冬晴れの来島海峡大橋絶景と日本総鎮守初詣、ふっくら鯛めし</span>
            </Link>
            <Link 
              href="/features"
              className="bg-white p-5 rounded-2xl shadow-xs hover:border-sky-400 border border-slate-200 transition-all flex flex-col justify-between"
            >
              <span className="font-bold text-slate-900 mb-1">【全国】冬の厳選温泉＆旬グルメ特集一覧へ</span>
              <span className="text-xs text-slate-500">11月・12月・1月に訪れたい日本各地の名宿・絶景旅ガイド</span>
            </Link>
          </div>
        </section>
      </main>
    </article>
  );
}
