import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, Flame, Landmark, Snowflake, ShieldCheck, Heart, Anchor, Coffee, Wind
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月横浜】赤レンガ倉庫クリスマスマーケット＆ヨルノヨ夜景！中華街熱々点心と絶景港宿5選",
  description: "冬の横浜は澄み渡る夜空にみなとみらい21の摩天楼と大観覧車が輝き、横浜赤レンガ倉庫「クリスマスマーケット」や都心臨海部の大規模光アート「ヨルノヨ」、横浜中華街の熱々点心＆春節ランタンが街を彩る年間最美のシーズン。楽天APIから最新取得した横浜ベイホテル東急、インターコンチネンタル、ホテルニューグランドなど絶景ホテル5選を徹底特集します。",
  keywords: '横浜 ホテル, みなとみらい ホテル, 赤レンガ倉庫 クリスマスマーケット, ヨルノヨ 横浜, 横浜中華街 春節, 横浜ベイホテル東急, インターコンチネンタル横浜, ホテルニューグランド, ウェスティンホテル横浜, 11月 12月 1月 横浜 観光',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-kanagawa-yokohama-minatomirai-illumination-chinatown-stay/"
  },
  openGraph: {
    title: "【11・12・1月横浜】赤レンガ倉庫クリスマスマーケット＆ヨルノヨ夜景！中華街熱々点心と絶景港宿5選",
    description: "冬の横浜は澄み渡る夜空にみなとみらい21の摩天楼と大観覧車が輝き、横浜赤レンガ倉庫「クリスマスマーケット」や都心臨海部の大規模光アート「ヨルノヨ」、横浜中華街の熱々点心＆春節ランタンが街を彩る年間最美のシーズン。楽天APIから最新取得した横浜ベイホテル東急、インターコンチネンタル、ホテルニューグランドなど絶景ホテル5選を徹底特集します。",
    url: 'https://croud-travel.com/winter-kanagawa-yokohama-minatomirai-illumination-chinatown-stay',
    siteName: '地域の宿探訪',
    locale: 'ja_JP',
    type: 'article',
    images: [{
      url: "https://img.travel.rakuten.co.jp/share/HOTEL/2003/2003.jpg",
      width: 1200,
      height: 630,
      alt: '冬の横浜赤レンガ倉庫クリスマスマーケットとみなとみらい夜景'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月横浜】赤レンガ倉庫クリスマスマーケット＆ヨルノヨ夜景！中華街熱々点心と絶景港宿5選",
    description: "冬の横浜は澄み渡る夜空にみなとみらい21の摩天楼と大観覧車が輝き、横浜赤レンガ倉庫「クリスマスマーケット」や都心臨海部の大規模光アート「ヨルノヨ」、横浜中華街の熱々点心＆春節ランタンが街を彩る年間最美のシーズン。楽天APIから最新取得した横浜ベイホテル東急、インターコンチネンタル、ホテルニューグランドなど絶景ホテル5選を徹底特集します。",
    images: ["https://img.travel.rakuten.co.jp/share/HOTEL/2003/2003.jpg"]
  }
};

export default function YokohamaMinatomiraiWinterPage() {
  const hotelsData = [
            {
              id: 1,
              name: "横浜ベイホテル東急",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/2003/2003.jpg",
              rating: 4.63,
              reviews: 10772,
              price: "¥9,493〜",
              access: "みなとみらい線みなとみらい駅徒歩約１分／ＪＲ・市営地下鉄線桜木町駅徒歩１０分",
              special: "横浜港を一望できるアーバンリゾートで最上のくつろぎを",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2003%2F2003.html",
              story: "みなとみらい駅直結、大観覧車「コスモクロック21」の目の前に位置する「横浜ベイホテル東急」。横浜エリアでも極めて希少な「全客室プライベートバルコニー付き」を誇るアーバンオアシスです。冬の澄んだ海風を感じながらバルコニーに出ると、目の前で刻一刻とイルミネーションの色を変える巨大観覧車や、きらめく横浜港のパノラマ夜景が圧倒的な臨場感で迫ります。館内2階のオールデイダイニング「カフェ トスカ」では、ヤシの木がそびえる開放的なアトリウムで、シェフが目の前で切り分けるローストビーフや冬の旬魚をライブキッチンから提供。クリスマスシーズンや年末年始には館内全体が華やかな装飾に包まれ、大人の贅沢な冬の港町ステイを叶えてくれます。",
              roomTip: "エグゼクティブツイン・ベイクラブフロア（パークビュー）。観覧車が目の前に迫る特等席バルコニー。専用ラウンジでのカクテルタイムも優雅。",
              gourmetTip: "「カフェ トスカ」。冬のナイト・キッチンスタジアム。巨大パルミジャーノチーズで和える熱々パスタや、冬の厳選ローストビーフが絶品。",
              highlights: [
                "大観覧車の目の前・全室バルコニー付きで冬の夜景を特等席から満喫",
                "「カフェ トスカ」のライブキッチンビュッフェ・みなとみらい駅直結の抜群アクセス",
                "赤レンガ倉庫やパシフィコ横浜へ徒歩圏・クリスマスや記念日ステイの王道"
              ]
            },
            {
              id: 2,
              name: "ヨコハマ　グランド　インターコンチネンタル　ホテル　ｂｙ　ＩＨＧ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5731/5731.jpg",
              rating: 4.46,
              reviews: 9550,
              price: "¥10,559〜",
              access: "みなとみらい駅から徒歩約5分、桜木町駅から徒歩約10分。みなとみらいのシンボルホテル♪",
              special: "みなとみらいのシンボル、風をはらんだヨットの帆の形が特徴のインターナショナルブランドホテル。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5731%2F5731.html",
              story: "みなとみらいの海辺にそびえ立ち、海に浮かぶヨットの白い帆を模した横浜のアイコニックなシンボル「ヨコハマ グランド インターコンチネンタル ホテル」。パシフィコ横浜に直結し、客室は横浜港の水平線を望む「ベイビュー」と、みなとみらいの摩天楼や観覧車を見晴らす「シティビュー」の2つの絶景から選べます。冬の朝、ベイビューの窓から望む朝焼けに染まる東京湾と横浜ベイブリッジの美しさは息を呑むほど。中国料理「驊骝（カリュウ）」では最上階31階からの絶景とともに本格広東料理を、ブッフェ・ダイニング「オーシャンテラス」では世界各国の美味を海を望みながら堪能できます。世界基準のインターコンチネンタル・ホスピタリティが上質な冬の旅を約束します。",
              roomTip: "グランドプレミアム・ハーバービュー。海に突き出た先端ならではの遮るもののない大パノラマ。冬の澄んだ夜景と港を行き交う船の灯りを鑑賞。",
              gourmetTip: "中国料理「驊骝（カリュウ）」。最上階から望む港夜景とともに味わう冬の特製点心とフカヒレ姿煮込みコース。記念日や特別な夜に最適。",
              highlights: [
                "みなとみらいの象徴・ヨットの帆の形の外観・遮るもののない横浜港ビュー",
                "最上階中国料理「驊骝」の絶品点心・オーシャンテラスの朝食ブッフェ",
                "パシフィコ横浜直結・海にせり出したロケーションで朝焼けのベイブリッジを独占"
              ]
            },
            {
              id: 3,
              name: "ウェスティンホテル横浜",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/183942/183942.jpg",
              rating: 4.68,
              reviews: 144,
              price: "¥19,269〜",
              access: "みなとみらい線「みなとみらい駅」から徒歩6分",
              special: "ヘブンリーベッドを備えた42平米以上の客室、スパや屋内プールで至福のステイを",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183942%2F183942.html",
              story: "みなとみらい21中央地区に誕生した最新のライフスタイル・ラグジュアリーホテル「ウェスティンホテル横浜」。「ウェルビーイング（心身の健康と心地よさ）」をコンセプトに掲げ、雲の上の寝心地と称される特注の「ヘブンリーベッド」を全客室に完備しています。高層階に位置する客室のピクチャーウィンドウからは、天気の良い冬の朝には雄大な富士山が、夜にはきらめくみなとみらいの街並みが見渡せます。最上階23階のロビーラウンジでは、冬の季節のアフタヌーンティーやシグネチャーカクテルを提供。温水インドアプールや最新フィットネス、スチームサウナを備えたウェルネスフロアで体を癒やし、日々の喧騒を忘れさせる極上のリトリートを体験できます。",
              roomTip: "デラックスキング（富士山ビュー）。冬の澄明な空に浮かび上がる白銀の富士山夕景を窓辺のデイベッドから鑑賞できる特別な空間。",
              gourmetTip: "アイアン・ベイ（アイアングリルダイニング）。オープンキッチンで炎を上げて焼き上げる厳選和牛グリルと神奈川県産冬野菜のロースト。",
              highlights: [
                "最新ウェルビーイングホテル・雲の上のヘブンリーベッド・富士山を望む絶景",
                "温水プール＆サウナ完備・最上階ロビーでの冬期アフタヌーンティー",
                "最新鋭の防音と空調設備・冬のシティリトリートに最適な極上ウェルネス"
              ]
            },
            {
              id: 4,
              name: "ホテルニューグランド",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/2013/2013.jpg",
              rating: 4.67,
              reviews: 3846,
              price: "¥12,900〜",
              access: "みなとみらい線元町・中華街駅1番出口より徒歩1分",
              special: "横浜スタンダードをいまに伝える、欧州の香りと趣。開港当時の横浜の面影を残すクラシックホテル。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2013%2F2013.html",
              story: "1927年（昭和2年）開業、山下公園の目の前に堂々と佇む日本を代表するクラシックホテルの最高峰「ホテルニューグランド」。関東大震災からの横浜復興のシンボルとして誕生し、ダグラス・マッカーサー元帥や喜劇王チャールズ・チャップリン、大佛次郎など歴史に名を刻む数多の偉人に愛されてきました。本館に足を踏み入れると、ヨーロッパの伝統美と東洋の意匠が融合した重厚な階段やロビーが出迎えます。実は、日本の洋食文化を代表する「シーフードドリア」「ナポリタン」「プリン・ア・ラ・モード」はいずれもこのホテルが発祥。冬の澄んだ山下公園の並木と氷川丸を望むタワー館の客室、そしてバー「シーガーディアンII」で過ごす時間は、本物の歴史だけが醸し出せる究極のエレガンスです。",
              roomTip: "タワー館グランドデラックスベイフロント。窓一面に山下公園、氷川丸、横浜港、横浜ベイブリッジが広がる圧巻のパノラマビュー。",
              gourmetTip: "本館「ザ・カフェ」。初代総料理長が生み出した発祥の味「シーフードドリア」と「プリン・ア・ラ・モード」。変わらぬ伝統の美味しさ。",
              highlights: [
                "1927年開業の名門クラシックホテル・ドリアやプリンアラモード発祥の伝統",
                "山下公園＆氷川丸の真正面・バー「シーガーディアンII」で過ごす大人の時間",
                "本館中庭の美しいイルミネーション・重厚な本館ロビーで味わう歴史の温もり"
              ]
            },
            {
              id: 5,
              name: "ハイアットリージェンシー横浜",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/178689/178689.jpg",
              rating: 4.57,
              reviews: 1199,
              price: "¥12,739〜",
              access: "みなとみらい線「日本大通り駅」から徒歩約3分/「元町・中華街駅」より徒歩約5分 ・JR「関内駅」から徒歩約15分",
              special: "《2020年開業》歴史情緒漂う日本大通りエリアに立地◆山下公園、横浜中華街まで徒歩すぐ",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F178689%2F178689.html",
              story: "横浜開港の歴史を感じる山下町に位置し、横浜中華街や元町、山下公園へ徒歩数分の好立地に佇む「ハイアット リージェンシー 横浜」。ホテル内に一歩入ると、スワロフスキー社製クリスタルシャンデリアが眩い光を放つラグジュアリーなロビーが広がります。客室は伝統的な日本の美意識「屏風」や寄木細工のモチーフを現代的に昇華させた和モダンデザイン。冬の冷たい外気から戻ったゲストを優しく包み込むキングサイズベッドと広々としたバスルームが備わります。1階のペストリーショップ「MILAN（ミラン）」の限定スイーツや、2階「ハーバーキッチン」の豪快な世界バイキング、夜の「ザ・ユニオン バー」でのジャズの生演奏とカクテルなど、洗練された大人の冬夜を満喫できます。",
              roomTip: "クラブツイン（高層階）。専用リージェンシークラブラウンジアクセス付き。イブニングカクテルや上質な朝食を静かな空間でゆったり満喫。",
              gourmetTip: "「ハーバーキッチン」。世界を航海する客船をイメージした店内で、シェフが鉄板で焼き上げる牛フィレ肉ステーキや季節のシーフードを堪能。",
              highlights: [
                "山下町・中華街徒歩圏内・スワロフスキークリスタル輝く豪華ロビーと高層階クラブラウンジ",
                "寄木細工モチーフの和モダン客室・ライブ感あふれるブッフェレストラン「ハーバーキッチン」",
                "元町ショッピングストリートや中華街での食べ歩き拠点として最高峰の立地"
              ]
            }
  ];

  const faqData = [
  {
    "q": "横浜赤レンガ倉庫「クリスマスマーケット」の開催期間と見どころ・入場方法は？",
    "a": "例年11月下旬から12月25日のクリスマス当日まで、横浜赤レンガ倉庫イベント広場にて開催されます。本場ドイツのクリスマスマーケットを再現した約10mの本物のモミの木のツリーや、イルミネーションルーフ、ドイツ伝統のヒュッテ（木の小屋）が立ち並びます。熱々のグリューワインやドイツビール、シュトーレン、焼きソーセージなどが大人気です。12月の土日やクリスマス直前は混雑緩和のため有料入場チケット（事前Web予約制または当日券）が必要となる日があるため、公式WEBサイトでの事前購入が推奨されます。"
  },
  {
    "q": "冬の横浜で開催される光のアートイベント「ヨルノヨ」とはどのようなイベントですか？",
    "a": "「夜にあらわれる光の横浜〈ヨルノヨ〉」は、横浜都心臨海部（みなとみらい、大さん橋、新港地区、山下公園など）を舞台に11月下旬〜1月上旬にかけて開催される日本最大級のイルミネーション・光のアートイベントです。時間ごとに街全体のオフィスビルや観覧車、歴史的建造物が音楽と連動して一斉に光を放つ「ハイライトショー（ナイトビューイング）」や、大さん橋の屋上広場（くじらのせなか）に広がる光の演出など、街全体が巨大なプロジェクション空間となる圧巻の演出が楽しめます。"
  },
  {
    "q": "冬の横浜中華街でのおすすめグルメと「春節（旧正月）」のイベント時期は？",
    "a": "冬の横浜中華街では、湯気が立ち込める熱々の焼き小籠包、蒸したての肉まん、フカヒレスープ、上海ガニ料理、北京ダックが格別の美味しさです。また、中国の旧正月を祝う伝統行事「春節」は例年1月下旬から2月中旬にかけて開催され、中華街全域に巨大な龍や鳳凰のランタンオブジェが灯る「春節燈花（イルミネーション）」が11月頃から先行点灯されます。カウントダウンや伝統の獅子舞・龍舞が街中を練り歩く祝舞遊行など、異国情緒あふれる熱気に包まれます。"
  },
  {
    "q": "11月・12月・1月の横浜港周辺の気温と防寒対策・海風への注意点は？",
    "a": "横浜の都心部は東京とほぼ同じ気温ですが、みなとみらい21地区、大さん橋、山下公園、赤レンガ倉庫周辺は海に直接面しているため、北風や東京湾からの強い海風が吹き抜けます。体感温度は表示気温よりも3〜4度低く感じられるため、風を通さない防風性の高いコートやダウンジャケット、首元を守るマフラーやスヌード、手袋の着用が必須です。特に大さん橋の屋上デッキや赤レンガパークでの夜景鑑賞時は、カイロを携帯しておくと快適です。"
  },
  {
    "q": "みなとみらい〜赤レンガ倉庫〜中華街を1泊2日で効率よく巡る観光ルートは？",
    "a": "1日目は桜木町駅からロープウェイ「YOKOHAMA AIR CABIN」に乗って空中散歩を楽しみながら運河パークへ。横浜赤レンガ倉庫のクリスマスマーケットを散策後、夕方に大さん橋へ移動して「ヨルノヨ」の光のパノラマと夕暮れのトワイライト富士山を鑑賞。夜は横浜中華街で本格中国料理のディナーを堪能し、ホテルへチェックイン。2日目は山下公園で港の朝の散歩と氷川丸の見学後、ホテルニューグランドで伝統のスイーツを味わい、元町ショッピングストリートや山手西洋館を散策して帰路につくルートが冬の黄金王道コースです。"
  }
];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-kanagawa-yokohama-minatomirai-illumination-chinatown-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/winter-kanagawa-yokohama-minatomirai-illumination-chinatown-stay"
        },
        "headline": "【11・12・1月横浜】赤レンガ倉庫クリスマスマーケット＆ヨルノヨ夜景！中華街熱々点心と絶景港宿5選",
        "description": "冬の横浜は澄み渡る夜空にみなとみらい21の摩天楼と大観覧車が輝き、横浜赤レンガ倉庫「クリスマスマーケット」や都心臨海部の大規模光アート「ヨルノヨ」、横浜中華街の熱々点心＆春節ランタンが街を彩る年間最美のシーズン。楽天APIから最新取得した横浜ベイホテル東急、インターコンチネンタル、ホテルニューグランドなど絶景ホテル5選を徹底特集します。",
        "datePublished": "2026-10-04T00:00:00+09:00",
        "dateModified": "2026-10-04T00:00:00+09:00",
        "inLanguage": "ja",
        "publisher": {
          "@type": "Organization",
          "name": "地域の宿探訪",
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
            "name": "特集一覧",
            "item": "https://croud-travel.com/features"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "横浜・みなとみらい 冬特集",
            "item": "https://croud-travel.com/winter-kanagawa-yokohama-minatomirai-illumination-chinatown-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqData.map((f: any) => ({
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


  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-rose-500 selection:text-white pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <header className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-400 via-rose-500 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-200 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>11月・12月・1月冬の横浜イルミネーション特集</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug sm:leading-tight mb-6">
            赤レンガ倉庫クリスマスマーケット＆ヨルノヨ夜景！<br className="hidden sm:inline" />
            中華街熱々点心と絶景港宿5選
          </h1>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mb-8">
            空気が澄み渡る冬の横浜は、一年で最もドラマチックな輝きを放ちます。赤レンガ倉庫に現れる巨大なモミの木のツリーと本場ドイツのクリスマスマーケット、臨海部全体が光と音でシンクロする「ヨルノヨ」、そして熱々の湯気と提灯が街を包む横浜中華街の活気。海辺のバルコニーや高層階の客室から、冬の港夜景を独占する特別なステイへと誘います。
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-slate-200 border-t border-slate-700/60 pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
              <span>シーズン：11月下旬〜1月下旬</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-rose-400 shrink-0" />
              <span>赤レンガ＆ヨルノヨ光の芸術</span>
            </div>
            <div className="flex items-center gap-2">
              <Anchor className="w-4 h-4 text-blue-400 shrink-0" />
              <span>港を望む特等席バルコニー</span>
            </div>
            <div className="flex items-center gap-2">
              <Utensils className="w-4 h-4 text-amber-400 shrink-0" />
              <span>中華街点心＆発祥の洋食</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Section 1: エリア解説 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-rose-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Port City Chronicle</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-rose-500 shrink-0" />
              冬の横浜を彩る光の奇跡と歴史ある港町の美食文化
            </h2>
          </div>

          <div className="text-slate-600 space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              1859年の開港以来、日本における西洋文明の玄関口として発展してきた港町・横浜。歴史的建造物が立ち並ぶ新港地区と、近未来の摩天楼が連なるみなとみらい21地区が織りなす景観は、湿度が下がり大気が冴え渡る11月から1月にかけて、年間で最も息を呑む透明度と煌めきを湛えます。
            </p>
            <p>
              その冬の横浜の主役となるのが、明治・大正期の赤レンガ建築を舞台に繰り広げられる「クリスマスマーケット in 横浜赤レンガ倉庫」です。本場ドイツから輸入した木造ヒュッテが整然と並び、スパイス香る熱々のグリューワインや焼きたてソーセージ、バウムクーヘンの甘い香りが広場一帯を満たします。約10mの天然モミの木に灯る無数の電飾と、頭上に架けられたイルミネーションルーフは、訪れる人々をまるでおとぎ話の世界へと誘います。
            </p>
            <p>
              さらに、みなとみらいから大さん橋、山下公園に至る広大なベイエリアを光と音で繋ぐ都市型フェスティバル「ヨルノヨ（夜にあらわれる光の横浜）」は現代横浜の真骨頂。歴史ある建造物や最新の超高層ビル群が一斉に連動して光のウェーブを放つ「ハイライトショー」は大さん橋のウッドデッキから眺めると、360度の大パノラマとなって視界を埋め尽くします。
            </p>
            <p>
              光の散策で心地よく冷えた体を温めてくれるのが、日本最大の規模を誇る「横浜中華街」の美食です。大通りから細い路地に至るまで、冬になると軒先から立ち上る蒸籠（せいろ）の湯気、熱々の小籠包や極上フカヒレ料理、そして11月から新春にかけて街中を華やかに彩る「春節燈花」の紅いランタンが、旅人の五感を至福の温もりで満たしてくれます。
            </p>
            <p>
              また、山手の丘に佇む「山手西洋館（エリスマン邸、ベーリック・ホール、外交官の家など）」では、例年12月に各国の伝統的なクリスマス装飾を再現する「世界のクリスマス」が開催されます。異国情緒あふれる洋館の暖炉やツリー、テーブルコーディネートを鑑賞した後は、港の見える丘公園の展望デッキへ。冬の澄み渡る夜風を受けながら見下ろす横浜港と横浜ベイブリッジのライトアップは、開港以来の歴史ロマンを静かに物語る名情景です。
            </p>
            <p>
              さらに、赤レンガ倉庫と山下公園を結ぶ「山下臨港線プロムナード」や「象の鼻パーク」は、海風を感じながら水面に映り込むみなとみらいのビル群の反射光を愛でる絶好のナイトウォーキングコース。冬ならではの澄んだ空気感があるからこそ、遠く房総半島や東京湾を行き交う客船の灯火までくっきりと見渡すことができます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="bg-rose-50/60 rounded-xl p-5 border border-rose-100">
              <div className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-rose-600" />
                <span>赤レンガ＆ヨルノヨの光</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                本場ドイツのクリスマスマーケットと、都心臨海部の超高層ビル群が光と音でシンクロする圧巻の夜景アート。
              </p>
            </div>
            <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
              <div className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <Utensils className="w-5 h-5 text-amber-600" />
                <span>熱々の中華街＆伝統洋食</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                蒸したて点心やフカヒレ、ホテルニューグランド発祥の元祖シーフードドリアなど、港町が育んだ冬の極上美味。
              </p>
            </div>
            <div className="bg-indigo-50/60 rounded-xl p-5 border border-indigo-100">
              <div className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <Anchor className="w-5 h-5 text-indigo-600" />
                <span>バルコニーからの港夜景</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                目の前で輝く巨大観覧車や横浜ベイブリッジ、朝焼けの海景色を客室のバルコニーや窓辺から独占する贅沢。
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: 厳選ホテル紹介 */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-rose-600 font-bold text-xs sm:text-sm tracking-wider uppercase">Prime Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              横浜・みなとみらい＆山下町で冬を愉しむ名宿5選
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              楽天トラベルAPIより最新の空室・料金・口コミデータをリアルタイム取得。冬の特別な記念日や観光ステイにふさわしい極上の5軒を厳選しました。
            </p>
          </div>

          <div className="space-y-12">
            {hotelsData.map((h: any) => (
              <div key={h.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow">
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Hotel Header */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-slate-100 pb-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="bg-rose-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">
                          厳選宿 #{h.id}
                        </span>
                        <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-rose-600" />
                          {h.access}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-rose-600 transition-colors">
                        <a href={h.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
                          {h.name}
                          <ExternalLink className="w-4 h-4 text-slate-400" />
                        </a>
                      </h3>
                      <p className="text-xs sm:text-sm text-rose-700 font-medium">{h.special}</p>
                    </div>

                    <div className="flex sm:flex-col items-baseline sm:items-end justify-between sm:justify-center shrink-0 bg-slate-50 sm:bg-transparent p-3 sm:p-0 rounded-xl">
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                        <span className="text-base sm:text-lg font-extrabold text-slate-900">{h.rating}</span>
                        <span className="text-xs text-slate-500">（{h.reviews}件）</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-slate-500 block">参考宿泊料金（目安）</span>
                        <span className="text-lg sm:text-xl font-bold text-rose-600">{h.price}</span>
                      </div>
                    </div>
                  </div>

                  {/* Hotel Image and Story Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-5 relative group overflow-hidden rounded-xl bg-slate-100 min-h-[240px]">
                      <img 
                        src={h.img} 
                        alt={h.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    <div className="lg:col-span-7 space-y-4 text-slate-600 text-sm leading-relaxed">
                      <p>{h.story}</p>
                      
                      <div className="bg-slate-50 rounded-xl p-4 space-y-2 border border-slate-150">
                        <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-rose-600" />
                          <span>おすすめ客室：</span>
                          <span className="font-normal text-slate-700">{h.roomTip}</span>
                        </div>
                        <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                          <Utensils className="w-4 h-4 text-amber-600" />
                          <span>冬の絶品美食：</span>
                          <span className="font-normal text-slate-700">{h.gourmetTip}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="border-t border-slate-100 pt-5">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">この宿の注目ポイント</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      {h.highlights.map((hl: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-1.5 text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                          <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2 text-right">
                    <a
                      href={h.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white text-sm font-bold px-6 py-3 rounded-xl shadow-sm hover:shadow transition-all w-full sm:w-auto"
                    >
                      <span>楽天トラベルでプラン・空室を確認</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: 黄金のモデルコース */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-rose-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Holiday Plan</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Compass className="w-6 h-6 text-rose-500 shrink-0" />
              1泊2日！冬の横浜クリスマスマーケット＆イルミネーション・中華街 王道モデルコース
            </h2>
          </div>

          <div className="relative border-l-2 border-rose-200 ml-4 pl-6 space-y-8 my-4">
            <div className="relative space-y-1">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-rose-600 border-4 border-white shadow-sm" />
              <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded">1日目 13:00</span>
              <h3 className="text-base font-bold text-slate-900">桜木町駅からロープウェイ「YOKOHAMA AIR CABIN」で空中散歩</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                JR桜木町駅前から運河パークまで、都市型ロープウェイで冬の運河とビル群を空中から見下ろしながら新港エリアへアクセス。
              </p>
            </div>

            <div className="relative space-y-1">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-rose-600 border-4 border-white shadow-sm" />
              <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded">1日目 14:30</span>
              <h3 className="text-base font-bold text-slate-900">横浜赤レンガ倉庫クリスマスマーケットで本場ドイツの雰囲気を体感</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                巨大なモミの木ツリーを背景に、スパイス香るホットワイン（グリューワイン）や焼きソーセージ、可愛いクリスマス雑貨のショッピングを愉しみます。
              </p>
            </div>

            <div className="relative space-y-1">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-rose-600 border-4 border-white shadow-sm" />
              <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded">1日目 17:00</span>
              <h3 className="text-base font-bold text-slate-900">横浜港大さん橋国際客船ターミナルで「ヨルノヨ」ハイライトショー鑑賞</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                大さん橋のウッドデッキ「くじらのせなか」から、夕暮れの富士山シルエットと、街全体の高層ビル群が一斉に輝く「ヨルノヨ」の壮大な光のアートを鑑賞。
              </p>
            </div>

            <div className="relative space-y-1">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-rose-600 border-4 border-white shadow-sm" />
              <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded">1日目 19:30</span>
              <h3 className="text-base font-bold text-slate-900">横浜中華街で熱々北京ダック・フカヒレコース＆紅い提灯散策</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                春節燈花が輝く中華街へ。熱々の小籠包や極上スープ、名店での中国料理ディナーを堪能後、ホテルへチェックインしてバルコニーから夜景を独占。
              </p>
            </div>

            <div className="relative space-y-1">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-rose-600 border-4 border-white shadow-sm" />
              <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded">2日目 08:30</span>
              <h3 className="text-base font-bold text-slate-900">朝焼けの海を眺めながら優雅なホテルブレックファスト</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                海を望むレストランでシェフ特製のオムレツや焼きたてクロワッサンを味わい、朝の爽やかな光に包まれます。
              </p>
            </div>

            <div className="relative space-y-1">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-rose-600 border-4 border-white shadow-sm" />
              <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded">2日目 10:30</span>
              <h3 className="text-base font-bold text-slate-900">山下公園＆日本郵船氷川丸散策からホテルニューグランド伝統カフェへ</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                冬の青空に映える山下公園を散歩後、ホテルニューグランド「ザ・カフェ」で元祖プリン・ア・ラ・モードやシーフードドリアを賞味。
              </p>
            </div>

            <div className="relative space-y-1">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-rose-600 border-4 border-white shadow-sm" />
              <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded">2日目 13:30</span>
              <h3 className="text-base font-bold text-slate-900">元町ショッピングストリート＆山手西洋館の冬散歩</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                石畳が美しい元町でおしゃれなベーカリーや革製品の店を巡り、世界のクリスマス装飾が施された山手西洋館を訪れて優雅に旅を締めくくります。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: 実用ガイド */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-rose-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Travel Advice</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-rose-500 shrink-0" />
              冬の横浜観光！海風対策・クリスマスマーケット予約のコツ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600">
            <div className="space-y-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Wind className="w-5 h-5 text-rose-600" />
                臨海部の強風対策と服装のポイント
              </h3>
              <p className="leading-relaxed">
                みなとみらいや赤レンガパーク、大さん橋は遮るもののない海に面しているため、冬場は東京湾からの冷たいビル風・海風が吹き込みます。気温が10度前後であっても、体感温度は5度以下に冷え込みます。
              </p>
              <p className="leading-relaxed">
                防風性のあるロングコートやダウンジャケットに加え、風で飛ばされないようフィットするマフラーや手袋の着用が大切です。夜の展望デッキやバルコニーで長時間夜景を眺める場合は、貼るカイロを背中や腰に貼っておくと底冷えを防げます。
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-rose-600" />
                クリスマスマーケット＆中華街の混雑回避術
              </h3>
              <p className="leading-relaxed">
                赤レンガ倉庫のクリスマスマーケットは、12月の週末や12月23日〜25日の夕方17時〜19時が混雑のピークとなります。ゆっくり雰囲気を楽しむなら、点灯直前の16時前に入場するか、平日の夕方早い時間帯を狙うのがベストです。
              </p>
              <p className="leading-relaxed">
                また横浜中華街の人気店でのディナーは、事前予約が必須です。フリーで訪れる場合は、メインの大通りだけでなく関帝廟通りや香港路などの名店路地へ足を伸ばすと、落ち着いて絶品の冬点心やコースを味わえます。
              </p>
            </div>

            <div className="space-y-3 md:col-span-2 bg-slate-50 p-4 rounded-xl border border-slate-150">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Compass className="w-5 h-5 text-rose-600" />
                冬夜景の絶景撮影スポットと水上バス「シーバス」の活用
              </h3>
              <p className="leading-relaxed">
                横浜みなとみらいの冬夜景を美しく撮影するなら、「万国橋」からの定番構図（運河の水面に大観覧車とランドマークタワーの光が鏡のように反射するスポット）が屈指の人気を誇ります。また、横浜駅東口（ベイクォーター）から赤レンガ倉庫や山下公園を結ぶ水上バス「シーバス」の夕暮れ便・夜便を利用すれば、遮るもののない海上から360度のイルミネーションパノラマをクルーズ気分で鑑賞でき、移動手段としても風情満点です。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: よくある質問 FAQ */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-rose-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の横浜・みなとみらい観光 よくある質問
            </h2>
          </div>

          <div className="divide-y divide-slate-100 space-y-4">
            {faqData.map((item: any, idx: number) => (
              <div key={idx} className="pt-4 first:pt-0 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2">
                  <span className="bg-rose-100 text-rose-700 text-xs px-2 py-0.5 rounded-md shrink-0 font-extrabold mt-0.5">Q</span>
                  <span>{item.q}</span>
                </h3>
                <div className="text-xs sm:text-sm text-slate-600 pl-6 leading-relaxed">
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: 関連内部リンク */}
        <section className="bg-gradient-to-br from-slate-950 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            あわせて読みたい！冬の人気特集記事
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            当サイトでは、全国各地の冬の絶景・夜景・イルミネーション・美食を徹底特集しています。冬の旅行計画にお役立てください。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <Link 
              href="/winter-tokyo-odaiba-toyosu-senkyakubanrai-yakei-stay" 
              className="bg-white/10 hover:bg-white/20 p-3.5 rounded-xl border border-white/10 transition-colors text-xs sm:text-sm font-medium flex items-center justify-between"
            >
              <span>東京お台場花火＆豊洲千客万来！ベイエリア夜景と天然温泉名宿</span>
              <span className="text-amber-300">→</span>
            </Link>
            <Link 
              href="/winter-kanagawa-kamakura-enoshima-jewel-shrine-fuji-stay" 
              className="bg-white/10 hover:bg-white/20 p-3.5 rounded-xl border border-white/10 transition-colors text-xs sm:text-sm font-medium flex items-center justify-between"
            >
              <span>鎌倉・江の島「湘南の宝石」イルミネーション＆初詣！富士絶景宿</span>
              <span className="text-amber-300">→</span>
            </Link>
            <Link 
              href="/winter-hyogo-kobe-port-ikuta-shrine-luminarie-beef-stay" 
              className="bg-white/10 hover:bg-white/20 p-3.5 rounded-xl border border-white/10 transition-colors text-xs sm:text-sm font-medium flex items-center justify-between"
            >
              <span>神戸港＆ルミナリエ！生田神社初詣と極上神戸牛の名宿</span>
              <span className="text-amber-300">→</span>
            </Link>
            <Link 
              href="/winter-kanagawa-hakone-yumoto-ashinoko-shrine-fuji-stay" 
              className="bg-white/10 hover:bg-white/20 p-3.5 rounded-xl border border-white/10 transition-colors text-xs sm:text-sm font-medium flex items-center justify-between"
            >
              <span>箱根湯本＆芦ノ湖！冬の富士山絶景と箱根神社初詣の名湯宿</span>
              <span className="text-amber-300">→</span>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-kanagawa-yokohama-minatomirai-illumination-chinatown-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
