import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Snowflake, Waves, Sun, Mountain, Building, Trees, ShoppingBag, ThermometerSun
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月北海道】千歳支笏湖ブルーの冬絶景・支笏湖氷濤まつりと美肌の湯・冬の名物ヒメマス（チップ）料理＆白老牛を味わうレイクサイド名宿5選",
  description: "11月から1月、日本最北の不凍湖・支笏湖は、水質日本一に幾度も輝いた透明度が極限まで高まり、息をのむほど深いコバルトブルー「支笏湖ブルー」を湛える静謐な冬の季節を迎えます。1月下旬から開催される北海道冬の二大祭典「千歳・支笏湖氷濤まつり」の壮大な氷のオブジェ群、雪化粧の樽前山と風不死岳のパノラマ、そして全国でも珍しい足元湧出の秘湯やとろとろ美肌の「支笏湖温泉」。新千歳空港から車でわずか約40分で出逢える、冬の名物ヒメマス（チップ）や白老牛を味わう厳選レイクサイド名宿5選と冬のモデルコースを詳しくお届けします。",
  keywords: '支笏湖 冬 旅行, 支笏湖氷濤まつり ホテル, 支笏湖温泉 宿, しこつ湖鶴雅リゾートスパ 水の謌, 丸駒温泉旅館 足元湧出, 支笏湖第一寶亭留 翠山亭, レイクサイドヴィラ翠明閣, 休暇村 支笏湖, 支笏湖ブルー, ヒメマス チップ料理, 白老牛 ステーキ, 11月 12月 1月 北海道旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-hokkaido-shikotsuko-hyoto-blue-onsen-himemasu-stay/"
  },
  openGraph: {
    title: "【11・12・1月北海道】千歳支笏湖ブルーの冬絶景・支笏湖氷濤まつりと美肌の湯・冬の名物ヒメマス（チップ）料理＆白老牛を味わうレイクサイド名宿5選",
    description: "11月から1月、日本最北の不凍湖・支笏湖は、水質日本一に幾度も輝いた透明度が極限まで高まり、息をのむほど深いコバルトブルー「支笏湖ブルー」を湛える静謐な冬の季節を迎えます。1月下旬から開催される北海道冬の二大祭典「千歳・支笏湖氷濤まつり」の壮大な氷のオブジェ群、雪化粧の樽前山と風不死岳のパノラマ、そして全国でも珍しい足元湧出の秘湯やとろとろ美肌の「支笏湖温泉」。新千歳空港から車でわずか約40分で出逢える、冬の名物ヒメマス（チップ）や白老牛を味わう厳選レイクサイド名宿5選と冬のモデルコースを詳しくお届けします。",
    url: 'https://croud-travel.pages.dev/winter-hokkaido-shikotsuko-hyoto-blue-onsen-himemasu-stay',
    siteName: 'クラドトラベル',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: '冬の北海道千歳支笏湖ブルーと白銀の山並み'
      }
    ],
    locale: 'ja_JP',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月北海道】千歳支笏湖ブルーの冬絶景・支笏湖氷濤まつりと美肌の湯・冬の名物ヒメマス（チップ）料理＆白老牛を味わうレイクサイド名宿5選",
    description: "11月から1月、日本最北の不凍湖・支笏湖は、水質日本一に幾度も輝いた透明度が極限まで高まり、息をのむほど深いコバルトブルー「支笏湖ブルー」を湛える静謐な冬の季節を迎えます。1月下旬から開催される北海道冬の二大祭典「千歳・支笏湖氷濤まつり」の壮大な氷のオブジェ群、雪化粧の樽前山と風不死岳のパノラマ、そして全国でも珍しい足元湧出の秘湯やとろとろ美肌の「支笏湖温泉」。新千歳空港から車でわずか約40分で出逢える、冬の名物ヒメマス（チップ）や白老牛を味わう厳選レイクサイド名宿5選と冬のモデルコースを詳しくお届けします。",
    images: ['https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function HokkaidoShikotsukoHyotoWinterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "【11・12・1月北海道】千歳支笏湖ブルーの冬絶景・支笏湖氷濤まつりと美肌の湯・冬の名物ヒメマス（チップ）料理＆白老牛を味わうレイクサイド名宿5選",
    description: "11月から1月、日本最北の不凍湖・支笏湖は、水質日本一に幾度も輝いた透明度が極限まで高まり、息をのむほど深いコバルトブルー「支笏湖ブルー」を湛える静謐な冬の季節を迎えます。1月下旬から開催される北海道冬の二大祭典「千歳・支笏湖氷濤まつり」の壮大な氷のオブジェ群、雪化粧の樽前山と風不死岳のパノラマ、そして全国でも珍しい足元湧出の秘湯やとろとろ美肌の「支笏湖温泉」。新千歳空港から車でわずか約40分で出逢える、冬の名物ヒメマス（チップ）や白老牛を味わう厳選レイクサイド名宿5選と冬のモデルコースを詳しくお届けします。",
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80',
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
      '@id': 'https://croud-travel.pages.dev/winter-hokkaido-shikotsuko-hyoto-blue-onsen-himemasu-stay'
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
        name: '支笏湖ブルー＆氷濤まつり特集',
        item: 'https://croud-travel.pages.dev/winter-hokkaido-shikotsuko-hyoto-blue-onsen-himemasu-stay'
      }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "冬（11月・12月・1月）の支笏湖の見どころと「支笏湖ブルー」と呼ばれる理由は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "支笏湖は日本最北の「不凍湖」であり、最大水深363メートルを誇るカルデラ湖です。環境省の水質測定調査で日本一に何度も選ばれており、プランクトンが極めて少なく不純物がないため、光の散乱によって独特の深い青色「支笏湖ブルー」を生み出します。特に11月から1月にかけては水温が低下して大気中の塵も少なくなり、年間で最も水が澄み渡る季節。晴れた冬の日、雪をかぶった恵庭岳や風不死岳を映し出すコバルトブルーの水面は、息をのむ神秘的な美しさを放ちます。"
        }
      },
      {
        '@type': 'Question',
        name: "北海道を代表する冬の祭典「千歳・支笏湖氷濤まつり」の開催時期と見どころは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "「千歳・支笏湖氷濤まつり」は、例年1月下旬から2月中旬にかけて支笏湖温泉の湖畔で開催されます。支笏湖の清らかな湖水をスプリンクラーで昼夜吹き付け、凍らせて創り上げた大小様々な氷の建造物（氷のトンネル、氷の宮殿、氷の水族館など）が立ち並びます。昼間は天然の「支笏湖ブルー」に輝き、夜間は赤・青・緑など色鮮やかなライトアップで幻想的な氷の王国へと変貌します。12月から1月上旬にかけては制作の様子を遠巻きに眺めることができ、冬の訪れを実感できます。"
        }
      },
      {
        '@type': 'Question',
        name: "支笏湖名物「チップ（ヒメマス）」とは？冬に味わえる料理の特徴は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "「チップ」とはアイヌ語の「カパチェプ（薄い魚）」に由来するヒメマスの地元での愛称です。本来は海へ下るベニザケが、カルデラ湖である支笏湖の冷涼で清らかな水に適応して一生を淡水で過ごすようになった魚です。臭みが一切なく、上品で繊細な脂の乗りと甘みが特徴。冬期はマイナス60度で急速冷凍した鮮度抜群のお造り（ルイベ）や、囲炉裏の炭火で皮目をパリッと香ばしく焼き上げた塩焼き、香ばしい甘露煮や天ぷらなどで、支笏湖の冬の恵みを余すところなく味わえます。"
        }
      },
      {
        '@type': 'Question',
        name: "支笏湖温泉の泉質と、丸駒温泉旅館の「足元湧出露天風呂」の仕組みは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "支笏湖温泉はナトリウム-炭酸水素塩・塩化物泉（重曹泉）で、「美肌の湯」「清涼の湯」として知られます。古い角質や皮脂を溶かして肌をすべすべにするクレンジング効果と、塩化物泉による高い保温・保湿効果を併せ持ちます。また湖畔西岸の丸駒温泉は、自然の岩場をそのまま湯船にした「足元湧出天然露天風呂」で、底に敷かれた玉砂利の間から約50度の源泉が自噴しています。支笏湖と湯船が水路で繋がっているため、湖の水位に合わせてお湯の深さが上下するという、地球の呼吸を肌で感じる奇跡の温泉です。"
        }
      },
      {
        '@type': 'Question',
        name: "新千歳空港や札幌からのアクセス、冬のレンタカー運転の注意点は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "新千歳空港から支笏湖へは道道16号（支笏湖公園線）経由で車で約40分、札幌市内からは国道453号経由で約1時間15分と、北海道の秘境温泉としては驚くほど好アクセスです。ただし、冬期（11月〜1月）は路面に圧雪や凍結（ブラックアイスバーン）が発生するため、レンタカー利用時は必ず4WD＋スタッドレスタイヤを指定し、急発進・急ブレーキ・急ハンドルを避けて十分な車間距離を確保してください。車運転に不安がある方は、JR千歳駅や新千歳空港から運行されている路線バス（北海道中央バス）の利用が最も安全でおすすめです。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "しこつ湖鶴雅リゾートスパ水の謌",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9563/9563.jpg",
              rating: 4.47,
              reviews: 697,
              price: "¥28,798〜",
              access: "札幌～支笏湖（約90分）。　【送迎バス運行（完全予約制）】千歳方面（通年・無料）詳細は公式サイトのアクセスページへ",
              special: "【水の癒し力】をコンセプトに、新しい形のリゾートをご提供します！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9563%2F9563.html",
              story: "支笏湖畔の豊かな森に佇み、「水の謌（うた）」をテーマに健康と癒やしを追求した鶴雅グループの最高峰リゾートホテル「しこつ湖鶴雅リゾートスパ 水の謌」。館内に一歩足を踏み入れると、心地よい水のせせらぎと温炉の炎が旅人を優しく包み込みます。重曹泉を豊富に含んだ大浴場「しほろの湯」は、肌の不要な角質を落としてみずみずしく整える極上の「美肌の湯」。夕食は北海道各地の契約農家や港から届く新鮮な冬食材を活かしたヘルシービュッフェ、または料理長が一皿一皿に美意識を込めた繊細な和食会席。ピローギャラリーで自分に合った枕を選べる快眠サポートや、洗練されたスパトリートメントなど、五感のすべてが浄化される至福のステイが約束されます。",
              roomTip: "温泉露天風呂付き和洋室。支笏湖の清らかな冬の大気を感じながら、誰にも気兼ねなく名湯に浸かる贅沢な時間を堪能できます。",
              gourmetTip: "「水の謌・特選創作会席」。冬の支笏湖名物ヒメマス（チップ）のお造りや焼き物、近隣の白老町が誇る最高級黒毛和牛「白老牛」のグリルを味わえます。",
              highlights: [
                "鶴雅リゾート最高峰の癒やし・大浴場しほろの湯とヘルシー美食＆スパトリートメント",
                "支笏湖名物ヒメマス（チップ）のお造りと最高級白老牛グリルの特選創作会席",
                "新千歳空港から車で40分の至便アクセス・北海道冬旅の最初や最後の拠点に最適"
              ]
            },
            {
              id: 2,
              name: "奥札幌の秘湯　湖畔の宿支笏湖　丸駒温泉旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/30970/30970.jpg",
              rating: 4.43,
              reviews: 950,
              price: "¥10,000〜",
              access: "ＪＲ千歳駅／新千歳空港より車で５０分、札幌市内、エスコンフィールド、苫小牧港から車で６０分",
              special: "【2024,2025年連続アワード受賞宿】2024年リニューアル、国立公園の絶景温泉とサウナが自慢",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30970%2F30970.html",
              story: "大正4年創業、支笏湖の北西岸にひっそりと佇む日本屈指の秘湯一軒宿「奥札幌の秘湯 湖畔の宿支笏湖 丸駒温泉旅館」。全国でもわずか二十数カ所しか存在しないと言われる「足元湧出露天風呂」が名高く、湯船の底に敷き詰められた玉砂利の間から自噴する温泉は、支笏湖の水位とリアルタイムに連動して深さが変わるという大自然の神秘を体感できます。冬は周囲の森が純白の雪に覆われ、湯船に浸かりながら眺める雪景色の支笏湖は息をのむ美しさ。夕食は囲炉裏を模したお食事処で、じっくり炭火で焼き上げる名物ヒメマスの塩焼きや、北海道産の山海の幸を盛り込んだ素朴で力強い郷土会席を堪能できます。",
              roomTip: "湖側和室。静まり返った冬の支笏湖と対岸の雄大な雪山を額縁のように切り取る絶景の眺望が広がります。",
              gourmetTip: "「囲炉裏風炭火会席」。炭火の遠赤外線で皮はパリッと香ばしく、中はふっくらジューシーに焼き上げられたヒメマスの塩焼きが格別です。",
              highlights: [
                "大正4年創業の秘湯・足元湧出の天然露天風呂と雪化粧の支笏湖絶景パノラマ",
                "囲炉裏炭火で香ばしく焼き上げる名物ヒメマス塩焼きと素朴な郷土会席",
                "支笏湖の水位と連動する神秘の湯船・冬ならではの雪見野天風呂を満喫"
              ]
            },
            {
              id: 3,
              name: "支笏湖第一寶亭留　翠山亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/16750/16750.jpg",
              rating: 4.49,
              reviews: 746,
              price: "¥16,748〜",
              access: "新千歳空港からお車で50分。JR千歳駅,14時無料送迎有。（完全予約制）",
              special: "庭園露天風呂付客室など全26室。夕食は近海の魚介を始め、時期により天然チップや白老産黒毛和牛も登場。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16750%2F16750.html",
              story: "支笏湖温泉街の小高い丘の上、巨木が茂る約3,000坪の広大な敷地にわずか29室というプライベート感を誇る大人のための隠れ宿「支笏湖第一寶亭留 翠山亭」。館内の至る所に北海道の銘木や現代アートが配され、凛とした静寂と木の温もりが調和しています。客室の半数以上が自家源泉を引いた温泉風呂を備えており、いつでも好きな時に美肌の湯を堪能。夕食は趣あふれる個室食事処で、冬の北海道の旬の厳選食材を用いた本格日本料理会席。上質な道産和牛や冬の日本海・太平洋の鮮魚、そして滋味あふれる根菜類が彩り豊かに並び、宿専属のソムリエが選ぶワインや地酒とのマリアージュを楽しめます。",
              roomTip: "源泉掛け流し展望風呂付客室。ヒノキの香りが漂う湯船から静寂な冬の森を望み、贅沢なプライベート温泉浴を満喫できます。",
              gourmetTip: "「翠山亭特選日本料理会席」。料理長が選び抜いたA5ランク白老牛のすき焼きやロースト、近海産の寒平目やボタンエビのお造りが舌を唸らせます。",
              highlights: [
                "約3000坪の静寂な森にわずか29室・全室半数以上が自家源泉温泉風呂付の贅沢",
                "料理長厳選のA5ランク白老牛と冬の北海道近海鮮魚を堪能する本格日本料理",
                "ピローギャラリーやワインバーなど大人の上質なくつろぎを追求した館内"
              ]
            },
            {
              id: 4,
              name: "北海道の全室温泉付きホテル　レイクサイドヴィラ翠明閣",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/73964/73964.jpg",
              rating: 4.50,
              reviews: 132,
              price: "¥28,204〜",
              access: "新千歳空港より車で４０分　札幌中心部から車で７５分　新千歳空港・千歳駅～中央バス約５０分～支笏湖バス停　下車徒歩５分　　",
              special: "支笏湖湖畔の全８室の隠れ家的ホテル。全室レイクビューで温泉浴室付。夕食は北海道イタリアンコース",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F73964%2F73964.html",
              story: "支笏湖の波打ち際までわずか数メートル、湖と一体化するかのような唯一無二の絶景ロケーションに建つ全8室のプレミアムスモールホテル「北海道の全室温泉付きホテル レイクサイドヴィラ翠明閣」。全客室の浴室から四季折々の支笏湖をパノラマで望む天然温泉風呂を完備しており、湯船に浸かるとまるで湖の上に浮いているかのような錯覚を覚えます。客室数が少ないため、館内は静寂そのもの。夕食は湖を望むイタリアンレストラン「アズッロ」で、北海道産の新鮮な魚介や旬の野菜、上質な肉を本場仕込みの手法で仕上げる極上のイタリアンコース。冬の湖畔の静けさと満天の星空を眺めながら、大切な人と特別な夜を過ごすのに最適な名宿です。",
              roomTip: "湖側スーペリアツイン温泉風呂付。大きなピクチャーウインドウから刻々と表情を変える支笏湖ブルーを独占できます。",
              gourmetTip: "「道産食材のイタリアンディナーコース」。手打ちパスタや白老牛のタリアータ、近海の冬魚を用いた前菜など、洗練された美食の数々が楽しめます。",
              highlights: [
                "全8室オールレイクビュー温泉付・波打ち際で味わう道産食材の極上イタリアン",
                "支笏湖と一体化する圧倒的インフィニティビューとプライベート温泉の至福",
                "記念日やプロポーズに選ばれる静謐な隠れ家・特別な冬の思い出を演出"
              ]
            },
            {
              id: 5,
              name: "休暇村　支笏湖",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/55939/55939.jpg",
              rating: 4.08,
              reviews: 412,
              price: "¥13,000〜",
              access: "新千歳空港よりお車で約５０分。ＪＲ千歳駅から路線バス有り。",
              special: "支笏湖の湖畔にある公共の温泉宿。新千歳空港まで約５０分、本格温泉と森の癒しを味わえます。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F55939%2F55939.html",
              story: "支笏洞爺国立公園の豊かな野鳥の森に囲まれ、自然との共生をテーマにした心地よい公共の宿「休暇村 支笏湖」。館内には野鳥観察コーナーや巨木の温もりを感じるラウンジが整備され、冬は雪化粧した木々に集まるシマエナガやキツツキの姿を観察できるバードウォッチングの聖地としても親しまれています。大浴場には「支笏湖温泉」の天然温泉が注がれ、とろりとした湯ざわりが冬の乾燥した肌をしっとりと包み込みます。夕食は名物ヒメマス料理や北海道産黒毛和牛、ジンギスカン、旬の味覚を散りばめたバラエティ豊かな会席膳やハーフビュッフェで、家族旅行から一人旅まで温かく出迎えてくれます。",
              roomTip: "森を望むモダン和洋室。清潔感あふれる快適なベッドと寛ぎの畳スペースで、静かな森の息吹を感じながらリラックスできます。",
              gourmetTip: "「支笏湖の四季会席」。名物チップ（ヒメマス）のお造りや塩焼きを中心に、北海道の大地と海が育んだ郷土の美味をバランスよく堪能できます。",
              highlights: [
                "野鳥の森に抱かれる国民宿舎・シマエナガ観察ととろとろ美肌の湯＆チップ料理",
                "家族旅行や一人旅に優しいアットホームなもてなしと充実の自然アクティビティ",
                "氷濤まつり会場へアクセス良好・雪の森のバードウォッチングツアーも人気"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "冬（11月・12月・1月）の支笏湖の見どころと「支笏湖ブルー」と呼ばれる理由は？",
    "a": "支笏湖は日本最北の「不凍湖」であり、最大水深363メートルを誇るカルデラ湖です。環境省の水質測定調査で日本一に何度も選ばれており、プランクトンが極めて少なく不純物がないため、光の散乱によって独特の深い青色「支笏湖ブルー」を生み出します。特に11月から1月にかけては水温が低下して大気中の塵も少なくなり、年間で最も水が澄み渡る季節。晴れた冬の日、雪をかぶった恵庭岳や風不死岳を映し出すコバルトブルーの水面は、息をのむ神秘的な美しさを放ちます。"
  },
  {
    "q": "北海道を代表する冬の祭典「千歳・支笏湖氷濤まつり」の開催時期と見どころは？",
    "a": "「千歳・支笏湖氷濤まつり」は、例年1月下旬から2月中旬にかけて支笏湖温泉の湖畔で開催されます。支笏湖の清らかな湖水をスプリンクラーで昼夜吹き付け、凍らせて創り上げた大小様々な氷の建造物（氷のトンネル、氷の宮殿、氷の水族館など）が立ち並びます。昼間は天然の「支笏湖ブルー」に輝き、夜間は赤・青・緑など色鮮やかなライトアップで幻想的な氷の王国へと変貌します。12月から1月上旬にかけては制作の様子を遠巻きに眺めることができ、冬の訪れを実感できます。"
  },
  {
    "q": "支笏湖名物「チップ（ヒメマス）」とは？冬に味わえる料理の特徴は？",
    "a": "「チップ」とはアイヌ語の「カパチェプ（薄い魚）」に由来するヒメマスの地元での愛称です。本来は海へ下るベニザケが、カルデラ湖である支笏湖の冷涼で清らかな水に適応して一生を淡水で過ごすようになった魚です。臭みが一切なく、上品で繊細な脂の乗りと甘みが特徴。冬期はマイナス60度で急速冷凍した鮮度抜群のお造り（ルイベ）や、囲炉裏の炭火で皮目をパリッと香ばしく焼き上げた塩焼き、香ばしい甘露煮や天ぷらなどで、支笏湖の冬の恵みを余すところなく味わえます。"
  },
  {
    "q": "支笏湖温泉の泉質と、丸駒温泉旅館の「足元湧出露天風呂」の仕組みは？",
    "a": "支笏湖温泉はナトリウム-炭酸水素塩・塩化物泉（重曹泉）で、「美肌の湯」「清涼の湯」として知られます。古い角質や皮脂を溶かして肌をすべすべにするクレンジング効果と、塩化物泉による高い保温・保湿効果を併せ持ちます。また湖畔西岸の丸駒温泉は、自然の岩場をそのまま湯船にした「足元湧出天然露天風呂」で、底に敷かれた玉砂利の間から約50度の源泉が自噴しています。支笏湖と湯船が水路で繋がっているため、湖の水位に合わせてお湯の深さが上下するという、地球の呼吸を肌で感じる奇跡の温泉です。"
  },
  {
    "q": "新千歳空港や札幌からのアクセス、冬のレンタカー運転の注意点は？",
    "a": "新千歳空港から支笏湖へは道道16号（支笏湖公園線）経由で車で約40分、札幌市内からは国道453号経由で約1時間15分と、北海道の秘境温泉としては驚くほど好アクセスです。ただし、冬期（11月〜1月）は路面に圧雪や凍結（ブラックアイスバーン）が発生するため、レンタカー利用時は必ず4WD＋スタッドレスタイヤを指定し、急発進・急ブレーキ・急ハンドルを避けて十分な車間距離を確保してください。車運転に不安がある方は、JR千歳駅や新千歳空港から運行されている路線バス（北海道中央バス）の利用が最も安全でおすすめです。"
  }
];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-indigo-100 selection:text-indigo-900 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero Header */}
      <header className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1800&q=80" 
            alt="冬の北海道千歳支笏湖ブルーと白銀の山並み" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-indigo-900/80 backdrop-blur-md text-indigo-100 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-indigo-400/30">
            <Snowflake className="w-4 h-4 text-indigo-300" />
            11月・12月・1月 冬の北海道・支笏湖ブルー＆氷濤まつり・美肌温泉特集
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
            【11・12・1月北海道】千歳支笏湖ブルーの冬絶景・支笏湖氷濤まつりと美肌の湯・冬の名物ヒメマス（チップ）料理＆白老牛を味わうレイクサイド名宿5選
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            日本最北の不凍湖が魅せる奇跡の輝き「支笏湖ブルー」。透明度日本一を誇るカルデラ湖が純白の雪山に抱かれ、1月下旬には巨大な氷の彫刻が立ち並ぶ「氷濤まつり」が開幕します。冷気に包まれた静寂の森で、足元から湧き出る大正創業の秘湯や、トロリとした重曹泉の美肌温泉に浸かる至福。冬の名物ヒメマス（チップ）の繊細な旨味と極上の白老牛会席を堪能し、新千歳空港からわずか40分で出逢える北の大自然リゾートへご案内します。
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-indigo-400" /> 最適時期：11月中旬〜1月下旬（支笏湖ブルー最盛期・雪景色・氷濤まつり）</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-indigo-400" /> エリア：北海道千歳市（支笏湖温泉・丸駒温泉）</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-indigo-400" /> 名物：ヒメマス（チップ）料理・白老牛・北海道海鮮会席</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-indigo-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Overview</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              透明度日本一の不凍湖が放つ青の奇跡と、厳冬を彩る氷の祭典
            </h2>
          </div>
          
          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p>
              北海道の空の玄関口・新千歳空港から車を走らせてわずか40分。原生林を抜けた先に突如として現れる支笏湖は、約4万年前の巨大な火山活動によって誕生したカルデラ湖です。水深360メートルを超える圧倒的な水量と温かい湖底水のため、真冬の北海道にありながら決して凍ることがない「日本最北の不凍湖」として知られています。
            </p>
            <p>
              11月から1月にかけての冬、支笏湖は年間で最も美しい瞬間を迎えます。大気中の塵が雪によって洗い流され、プランクトンの発生が抑えられることで、湖水の透明度は驚異的な極限値に達します。晴れ渡った冬空の下、水深数十メートル先まで見通せる湖水は、光の波長の中で青色だけを反射し、息をのむほど深く澄み切った「支笏湖ブルー」となって輝きを放ちます。湖を取り囲む樽前山や風不死岳、恵庭岳が白銀の雪衣を纏い、青い湖面にその姿をくっきりと映し出す光景は、まさに神話の世界のような厳かさです。
            </p>
            <p>
              そして1月下旬、支笏湖の冬のハイライトとなる「千歳・支笏湖氷濤まつり」が幕を開けます。支笏湖の清らかな湖水をスプリンクラーで吹き付け、何昼夜もかけて凍らせて造り上げる巨大な氷の宮殿やトンネル、氷のタワー群。昼は天然の青い光を放ち、夜は青や緑、紫の幻想的なイルミネーションに照らし出され、まるでおとぎ話の氷の王国に迷い込んだかのような非日常の感動を呼び起こします。
            </p>
            <p>
              氷の世界で冷え切った体を解きほぐすのは、支笏湖畔に湧き出る極上の温泉です。ナトリウム-炭酸水素塩泉のとろりとした重曹泉は、入浴するだけで肌が滑らかに整う美肌の湯。さらに湖西岸の丸駒温泉では、支笏湖の水位と連動する全国的にも極めて珍しい足元湧出露天風呂で、雪景色を眺めながら歴史ある秘湯の湯浴みが叶います。夕食には、冬の清流で身を引き締めた名物ヒメマス（チップ）や、最高級黒毛和牛「白老牛」を味わい尽くす。アクセス至便でありながら本物の北海道の冬の神秘に浸れる、究極のレイクサイドトリップをお約束します。
            </p>
          </div>
        </section>

        {/* 3 Key Highlights Section */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-indigo-800 font-bold text-xs sm:text-sm tracking-wider uppercase block">Highlights</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の支笏湖で出逢う3つの圧倒的スペクタクル
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              11月〜1月だからこそ体感できる、青の奇跡と氷のアート＆至高の温泉。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
                <Waves className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                1. 冬の透明度が生む「支笏湖ブルー」
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                水質日本一に輝く不凍湖。雪化粧のカルデラ山群を鏡のように映し出すコバルトブルーの静謐な湖面は、冬の北海道で最も崇高な自然景観です。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-700 font-bold">
                <Snowflake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                2. 氷の祭典「千歳・支笏湖氷濤まつり」
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                湖水を凍らせて創る巨大な氷のオブジェ群。昼は太陽光でナチュラルブルーに輝き、夜はカラフルなライトアップで幻想的な氷の宮殿が出現します。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 font-bold">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                3. 足元湧出の秘湯と名物ヒメマス・白老牛
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                湖畔の丸駒温泉の足元湧出露天風呂と、とろとろ重曹泉の美肌湯。囲炉裏で香ばしく焼く名物チップ（ヒメマス）やA5ランク白老牛の味覚は格別です。
              </p>
            </div>
          </div>
        </section>

        {/* Model Course Section */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-indigo-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              【1泊2日】支笏湖ブルー観賞と氷濤まつり・秘湯丸駒温泉を巡る冬のリトリート
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              空港から直行して白銀の湖畔を満喫し、名湯と美食で心身を再生させる冬の北海道モデルコース。
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-500/40 space-y-6">
              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase">DAY 1 昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  12:00 新千歳空港に到着 ➔ レンタカーまたはバスで支笏湖畔へ直行
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  空港から雪道に注意しながら車を走らせること約40分。原生林を抜けると視界が開け、白銀の樽前山と紺碧の支笏湖が姿を現します。支笏湖ビジターセンター周辺の食事処で、名物「ヒメマス天丼」や温かいきのこ汁で昼食を楽しみます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase">DAY 1 午後</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  14:00 「山線鉄橋」と湖畔散策 ➔ レイクサイドの温泉名宿へチェックイン
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  千歳川の起点に架かる赤い英国製トラス橋「山線鉄橋」を渡り、澄み渡る川底の梅花藻や透明な水流を鑑賞。15時頃、予約した支笏湖温泉の名宿へチェックイン。とろとろの重曹泉に身を委ね、旅の移動の疲れをじんわりと癒やします。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase">DAY 1 夕刻〜夜</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  17:00 「支笏湖氷濤まつり」会場へ ➔ 幻想的な氷の宮殿ライトアップを体感
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  日没後、防寒着を着込んで氷濤まつり会場へ（1月下旬〜）。漆黒の夜空の下、七色に輝く巨大な氷の建造物群を散策。氷のトンネルをくぐり、展望台から氷の王国を一望。冷えた体で会場内のホットドリンクを楽しんだ後、宿へ戻ります。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase">DAY 1 夜</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  19:30 名物ヒメマス（チップ）と極上白老牛を味わう北海道の美食ディナー
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  宿の個室やダイニングで夕食。炭火で香ばしく焼き上げたヒメマスの塩焼き、繊細な甘みのルイベ、そして口の中でとろける極上白老牛のステーキ。北海道の銘酒や地ワインとともに、冬の贅沢な味覚をゆっくりと堪能します。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase">DAY 2 朝〜昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  09:00 丸駒温泉の「足元湧出露天風呂」へ立ち寄り ➔ 支笏湖ブルーに別れを告げ空港へ
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  チェックアウト後、車で対岸の「丸駒温泉旅館」へ移動し、湖と一体化する奇跡の足元湧出露天風呂に浸かります。雪化粧した山並みと青い湖面を眺めた後、千歳市内の直売所で道産チーズやスイーツを買い求め、新千歳空港から大満足で帰路へ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-indigo-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Featured Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の支笏湖を満喫するレイクサイド厳選名宿5選
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-1">
              鶴雅リゾートの癒やし宿から、大正創業の足元湧出秘湯、全室レイクビュー温泉宿まで厳選。
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
                        <span className="text-xs font-bold text-indigo-900 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200/60">
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
                        <span className="text-xl sm:text-2xl font-black text-indigo-950">{h.price}</span>
                      </div>

                      <a 
                        href={h.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-800 to-slate-900 hover:from-indigo-900 hover:to-slate-950 text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all text-sm group"
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

        {/* Local Gourmet Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-indigo-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Local Gastronomy & Nature</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              カルデラの清流が育む幻の川魚と北海道の至宝ブランド牛
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-700 text-sm leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-indigo-700" />
                清流の女王「ヒメマス（チップ）」の歴史と美味しさ
              </h3>
              <p>
                明治27年に阿寒湖から移植されたヒメマスが、極めて透明度の高い支笏湖の水に馴染み、今や支笏湖を代表する特産品として定着しました。鮭鱒類特有の臭みが全くなく、上品な脂の甘みときめ細やかな身質は、川魚の概念を覆す美味しさです。冬はルイベ（凍らせた刺身）で口の中でとろける食感を楽しんだり、じっくり塩焼きにして頭から骨まで香ばしく味わうのが本場の醍醐味です。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-indigo-700" />
                洞爺湖サミットで脚光を浴びた「白老牛」の極み
              </h3>
              <p>
                支笏湖に隣接する白老町で育てられる「白老牛（しらおいぎゅう）」は、北海道最古の黒毛和牛ブランド。豊かな自然環境とこだわりの飼料で育ち、美しい霜降りと深いコク、口の中でさらりと溶ける脂の軽やかさが特徴です。宿のお土産処では、白老牛のビーフシチューやカレーのレトルト、支笏湖の銘菓「氷濤まんじゅう」、千歳ワイナリーのハスカップワインなど、北国の贅沢な味覚を買い求めることができます。
              </p>
            </div>
          </div>
        </section>

        {/* Practical Tips Section */}
        <section className="bg-indigo-50/60 rounded-3xl p-6 sm:p-10 border border-indigo-200/60 space-y-6">
          <div className="border-b border-indigo-200/80 pb-4">
            <span className="text-indigo-900 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Traveler Tips</span>
            <h2 className="text-xl sm:text-2xl font-bold text-indigo-950">
              冬の北海道・支笏湖旅行を安全に満喫するための防寒・アクセス対策
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-indigo-950">
            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <ThermometerSun className="w-4 h-4 text-indigo-700" />
                氷点下対応の徹底防寒
              </div>
              <p className="leading-relaxed text-stone-700">
                12月〜1月の支笏湖は夜間氷点下10度以下まで冷え込みます。氷濤まつり散策には、厚手ダウンジャケット、ヒートテック等の保温インナー、ニット帽、厚手の手袋、ネックウォーマー、防寒滑り止めブーツ（スノーブーツ）が完全必須です。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <Compass className="w-4 h-4 text-indigo-700" />
                雪道運転の注意とバス利用
              </div>
              <p className="leading-relaxed text-stone-700">
                新千歳空港からの道道16号は除雪されていますが、峠道やカーブでの凍結に注意が必要です。4WDスタッドレス車が原則。雪道運転に不慣れな場合は、JR千歳駅や空港発の中央バスを利用するのが最も安全で確実です。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <CheckCircle2 className="w-4 h-4 text-indigo-700" />
                日照時間と早めのチェックイン
              </div>
              <p className="leading-relaxed text-stone-700">
                冬の北海道は16時前後に日没を迎えます。暗くなると急激に路面が凍結し視界も悪くなるため、15時頃までに宿に到着してチェックインを済ませ、明るいうちに美しい支笏湖ブルーの景色を楽しむスケジュールが理想的です。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-indigo-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の支笏湖・氷濤まつり宿泊に関するよくある質問
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
            <span className="text-indigo-800 font-bold text-xs sm:text-sm tracking-wider uppercase block">Explore More Northern Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              あわせて読みたい北海道・東北の冬絶景・名湯宿特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <Link 
              href="/winter-hokkaido-noboribetsu-onsen-snow-jigokudani-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-indigo-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-indigo-800 font-bold text-xs block mb-1">北海道・登別温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-indigo-900 transition-colors line-clamp-2">
                冬の登別地獄谷雪景色と多彩な名湯泉質・北海道白老牛と海鮮会席名宿
              </span>
            </Link>

            <Link 
              href="/winter-hokkaido-otaru-canal-illumination-sushi-asarigawa-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-indigo-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-indigo-800 font-bold text-xs block mb-1">北海道・小樽運河</span>
              <span className="text-stone-900 font-bold group-hover:text-indigo-900 transition-colors line-clamp-2">
                小樽雪あかりの路と冬の運河イルミネーション・極上小樽前浜寿司と朝里川温泉宿
              </span>
            </Link>

            <Link 
              href="/winter-hokkaido-sounkyo-onsen-snow-gorge-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-indigo-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-indigo-800 font-bold text-xs block mb-1">北海道・層雲峡温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-indigo-900 transition-colors line-clamp-2">
                大雪山層雲峡氷瀑まつりと白銀の断崖絶景・源泉掛け流し雪見露天名宿
              </span>
            </Link>

            <Link 
              href="/winter-aomori-hachinohe-kabushima-ginsaba-senbeijiru-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-indigo-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-indigo-800 font-bold text-xs block mb-1">青森・八戸蕪島</span>
              <span className="text-stone-900 font-bold group-hover:text-indigo-900 transition-colors line-clamp-2">
                八戸前沖銀鯖と本場せんべい汁・八食センター七輪村買い出し＆蕪島神社初詣名宿
              </span>
            </Link>

            <Link 
              href="/winter-ibaraki-fukuroda-waterfall-ice-onsen-shamo-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-indigo-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-indigo-800 font-bold text-xs block mb-1">茨城・袋田の滝</span>
              <span className="text-stone-900 font-bold group-hover:text-indigo-900 transition-colors line-clamp-2">
                日本三名瀑袋田の滝の完全凍結氷瀑と奥久慈軍鶏鍋・常陸牛を味わう名宿
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
          
      <HubRelatedPosts currentSlug="winter-hokkaido-shikotsuko-hyoto-blue-onsen-himemasu-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
