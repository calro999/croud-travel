import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Snowflake, Eye, Waves, ThermometerSun, Heart, ShoppingBag, Shield, Mountain, Landmark, Train
} from 'lucide-react';

export const metadata: Metadata = {
  title: '11・12・1月岩手：三陸鉄道こたつ列車の冬絶景と浄土ヶ浜雪景色！名宿5選',
  description: '11月から1月、岩手県三陸沿岸（宮古・釜石・大船渡・田野畑）は、太平洋の紺碧と雪化粧した白亜の奇岩が織りなす息を呑む絶景の季節を迎えます。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '三陸鉄道 こたつ列車, 浄土ヶ浜 冬, 瓶ドン 宮古, 三陸あわび 宿泊, 三陸毛ガニ 宿, 浄土ヶ浜パークホテル, 大船渡温泉, ホテル羅賀荘, 11月 12月 1月 岩手旅行, リアス海岸 絶景温泉',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-iwate-sanriku-kotatsu-train-kaisen-stay/"
  },
  openGraph: {
    title: '11・12・1月岩手：三陸鉄道こたつ列車の冬絶景と浄土ヶ浜雪景色！名宿5選',
    description: '11月から1月、岩手県三陸沿岸（宮古・釜石・大船渡・田野畑）は、太平洋の紺碧と雪化粧した白亜の奇岩が織りなす息を呑む絶景の季節を迎えます。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-iwate-sanriku-kotatsu-train-kaisen-stay',
    siteName: 'クラドトラベル',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: '岩手三陸鉄道と雪景色の浄土ヶ浜'
      }
    ],
    locale: 'ja_JP',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: "11・12・1月岩手：三陸鉄道こたつ列車の冬絶景と浄土ヶ浜雪景色・名物瓶ドン＆極上三陸あわび・毛ガニを味わう海沿いの名宿5選",
    description: "11月から1月、岩手県三陸沿岸（宮古・釜石・大船渡・田野畑）は、太平洋の紺碧と雪化粧した白亜の奇岩が織りなす息を呑む絶景の季節を迎えます。12月から運行を開始する三陸鉄道の冬の風物詩「こたつ列車」では、車内にぬくぬくのこたつが設えられ、車窓を流れるリアス海岸の雪景色と名物駅弁を堪能。名勝・浄土ヶ浜では、純白の雪と松の緑、澄み切った海のコントラストがまるで一幅の日本画のような幽玄美を放ちます。冬の三陸グルメは全国屈指の贅沢さを誇り、宮古名物「瓶ドン」をはじめ、旨味の詰まった肉厚な「三陸あわび」、身がぎっしり詰まった冬の「三陸毛ガニ」、濃厚なタラの白子や寒鱈汁、そして岩手が誇る最高級前沢牛がテーブルを彩ります。冬ならではの澄み渡る潮風と絶景温泉に癒やされる厳選5宿を詳しく紹介します。",
    images: ['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function IwateSanrikuKotatsuTrainPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-iwate-sanriku-kotatsu-train-kaisen-stay#article",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://croud-travel.pages.dev/#website",
          "name": "クラドトラベル",
          "url": "https://croud-travel.pages.dev"
        },
        "headline": "【11・12・1月岩手】三陸鉄道こたつ列車の冬絶景と浄土ヶ浜雪景色・名物瓶ドン＆極上三陸あわび・毛ガニを味わう海沿いの名宿5選",
        "description": "11月から1月、岩手県三陸沿岸（宮古・釜石・大船渡・田野畑）は、太平洋の紺碧と雪化粧した白亜の奇岩が織りなす息を呑む絶景の季節を迎えます。12月から運行を開始する三陸鉄道の冬の風物詩「こたつ列車」では、車内にぬくぬくのこたつが設えられ、車窓を流れるリアス海岸の雪景色と名物駅弁を堪能。名勝・浄土ヶ浜では、純白の雪と松の緑、澄み切った海のコントラストがまるで一幅の日本画のような幽玄美を放ちます。冬の三陸グルメは全国屈指の贅沢さを誇り、宮古名物「瓶ドン」をはじめ、旨味の詰まった肉厚な「三陸あわび」、身がぎっしり詰まった冬の「三陸毛ガニ」、濃厚なタラの白子や寒鱈汁、そして岩手が誇る最高級前沢牛がテーブルを彩ります。冬ならではの澄み渡る潮風と絶景温泉に癒やされる厳選5宿を詳しく紹介します。",
        "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
        "datePublished": "T00:00:00+09:00",
        "dateModified": "T00:00:00+09:00",
        "author": {
          "@type": "Organization",
          "name": "クラドトラベル編集部"
        },
        "publisher": {
          "@type": "Organization",
          "name": "クラドトラベル",
          "url": "https://croud-travel.pages.dev",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.pages.dev/logo.png"
          }
        },
        "mainEntityOfPage": "https://croud-travel.pages.dev/winter-iwate-sanriku-kotatsu-train-kaisen-stay"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.pages.dev/winter-iwate-sanriku-kotatsu-train-kaisen-stay#breadcrumb",
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
            "name": "特集一覧",
            "item": "https://croud-travel.pages.dev/features"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "岩手三陸のこたつ列車と冬海鮮特集",
            "item": "https://croud-travel.pages.dev/winter-iwate-sanriku-kotatsu-train-kaisen-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-iwate-sanriku-kotatsu-train-kaisen-stay#faq",
        "mainEntity": [{"@type":"Question","name":"三陸鉄道の「こたつ列車」はいつ運行されますか？予約方法や運行区間は？","acceptedAnswer":{"@type":"Answer","text":"三陸鉄道の冬の看板列車「こたつ列車」は、例年12月中旬から翌年3月下旬の土日祝日を中心に運行されます（年末年始は毎日運行される期間あり）。宮古〜久慈間を走る「和風こたつ列車」と、盛〜釜石間などを走る「洋風こたつ列車」があります。車内には掘りごたつが並び、靴を脱いで暖まりながら車窓の絶景を楽しめます。途中のトンネルでは「なまはげ」に似た三陸の伝統妖怪「なもみ」が登場する車内イベントも大人気。乗車券のほかに座席指定券（300円〜）が必要で、1ヶ月前の同日午前9時から三陸鉄道の予約サイトまたは電話で予約可能です。名物のアワビ弁当やウニ弁当の事前予約もおすすめです。"}},{"@type":"Question","name":"冬（11月〜1月）の三陸沿岸の積雪状況や気温、服装はどうですか？車で行けますか？","acceptedAnswer":{"@type":"Answer","text":"岩手県の三陸沿岸地域（宮古・釜石・大船渡）は、内陸部の盛岡や花巻と比べて海洋性気候のため降雪量は大幅に少なく、真冬でも平野部や海岸沿いに大雪が積もり続ける日は多くありません。ただし、12月〜1月の朝晩は氷点下に冷え込み、路面凍結（ブラックアイスバーン）が発生しやすいため、車で訪れる場合は必ずスタッドレスタイヤを装着してください。三陸沿岸道路（三陸道）は無料区間が多く整備状況も良好ですが、トンネル出入り口や橋梁部の凍結には十分な注意が必要です。服装は風を通さない防風ダウンジャケット、手袋、マフラー、滑りにくいソールの防寒靴が必須です。"}},{"@type":"Question","name":"宮古の名物グルメ「瓶ドン」とはどのような料理ですか？どこで食べられますか？","acceptedAnswer":{"@type":"Answer","text":"「瓶ドン」は、牛乳瓶に三陸宮古の新鮮な海の幸（イクラ、ウニ、めかぶ、サーモン、イカ、タコなど）を層状にぎっしり詰め込んだ宮古発祥の体験型ご当地グルメです。元々、岩手沿岸部では採れたての生ウニを滅菌海水とともに牛乳瓶に詰めて保存・出荷する独特の文化があり、そこから着想を得て誕生しました。食べる直前にほかほかの白ご飯の上に自分で瓶を傾けて豪快にかけることで、見た目も美しく鮮度抜群の海鮮丼が完成します。宮古市内の主要ホテル（浄土ヶ浜パークホテルや休暇村など）の夕食・朝食や、魚菜市場内の飲食店で年中楽しめます。"}},{"@type":"Question","name":"冬の「浄土ヶ浜」の見どころや散策時のポイントを教えてください。","acceptedAnswer":{"@type":"Answer","text":"名勝「浄土ヶ浜」は、鋭くとがった白い流紋岩と緑の松、透明度の高い瑠璃色の海が織りなす極上の景勝地です。冬は観光客が落ち着き、静寂に包まれた厳かな雰囲気が漂います。特に初雪が降った後の白銀をまとった奇岩群と紺碧の海の対比は、まさに「さながら極楽浄土のごとし」と称された絶景そのもの。冬の朝は水平線から昇る朝日が奇岩を黄金色に照らし出し、写真愛好家にも絶大な人気を誇ります。遊歩道は整備されていますが、冬は海風が強く冷え込むため、万全の防寒対策をして散策してください。"}},{"@type":"Question","name":"11月〜1月に三陸で旬を迎えるおすすめの海産物は何ですか？","acceptedAnswer":{"@type":"Answer","text":"三陸の冬は海の幸が最も旨味を蓄えるゴールデンシーズンです。11月から解禁される「三陸あわび」は、肉厚で噛むほどに芳醇な磯の香りが広がります。また、12月〜1月に旬を迎える「三陸毛ガニ」は身の詰まりが良く、濃厚でクリーミーなカニ味噌が絶品。さらに「寒鱈（マダラ）」は脂が乗り、白子（タツ）や肝を入れた温かい「たら汁（どんこ汁）」は冬の三陸のソウルフードです。そのほか、寒ヒラメ、ヤリイカ、ホタテ、牡蠣など、冬ならではの極上海鮮を各宿の会席料理で存分に楽しめます。"}}]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "浄土ヶ浜パークホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/64789/64789.jpg",
              rating: 4.46,
              reviews: 1610,
              price: "¥14,300〜",
              access: "ＪＲ山田線　宮古駅から奥浄土ヶ浜行きバスにて１５分、浄土ヶ浜ビジターセンター下車後、徒歩５分。【ペットと宿泊可※小型犬】",
              special: "浄土ヶ浜の高台に建つ和の景観と四季の恵みあふれるホテル。三陸の海の幸をご用意してお待ちしております",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F64789%2F64789.html",
              story: "国の名勝・浄土ヶ浜の高台、赤松の美林に囲まれて静かに佇む「浄土ヶ浜パークホテル」。客室やロビーラウンジのパノラマウィンドウからは、白銀に輝く松林越しに冬の宮古湾の青が広がり、朝には水平線から昇る神々しい日の出を拝むことができます。大浴場「白林の湯」では、松の香りと潮風を感じながらゆったりと手足を伸ばし、旅の疲れを心地よく解放。夕食は三陸の海の幸を惜しみなく使ったビュッフェまたは和食会席。宮古発祥の名物「瓶ドン」を好みの具材で盛り付ける体験や、三陸産あわびの陶板焼き、冬鱈の煮付けなど、東北屈指の海の恵みを心ゆくまで味わえます。",
              roomTip: "海側和洋室。朝陽に染まる冬の宮古湾と雪の赤松林を一望でき、プライベート感あふれる寛ぎの時間を楽しめます。",
              gourmetTip: "「三陸あわび踊り焼き＆名物瓶ドン会席」。ふっくら柔らかなあわびの磯の香りと、イクラやメカブがぎっしり詰まった瓶ドンの贅沢な味わいです。",
              highlights: [
                "浄土ヶ浜の高台に佇む絶好のロケーション＆白銀の松林と宮古湾の朝陽ビュー",
                "宮古名物「瓶ドン」と肉厚な三陸あわび踊り焼き＆冬鱈の熱々海鮮鍋",
                "冬の浄土ヶ浜散策路へ徒歩圏内＆雪化粧した白亜の奇岩を間近に望む休日"
              ]
            },
            {
              id: 2,
              name: "ホテルフォルクローロ三陸釜石＜ＪＲ東日本ホテルズ＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/147637/147637.jpg",
              rating: 4.40,
              reviews: 1385,
              price: "¥5,600〜",
              access: "JR釜石駅隣接（徒歩1分）　三陸自動車道「釜石中央IC」降車　国道２８３号線より（車約５分）",
              special: "◆露天風呂付浴場◆JR釜石線釜石駅隣接◆三陸旅の拠点として観光・ビジネスに最適",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147637%2F147637.html",
              story: "大船渡湾の絶壁の上に建ち、全室オーシャンビューを誇る「大船渡温泉」。地下から湧き出る天然温泉は、カルシウム・ナトリウム-塩化物泉で保温効果が極めて高く、冬の冷えた体を芯から温めてぽかぽか感が長く持続します。海にせり出すように造られた展望露天風呂からの景色は圧巻で、荒波が寄せる冬の海と満天の星空を眺めながらの湯浴みは言葉を失うほどの感動。オーナー自らが魚市場の仲買人を務めるため、仕入れられる魚介の鮮度と質は三陸トップクラス。活あわびや特大ホタテ、旬の三陸毛ガニ、寒鱈鍋など、豪快かつ繊細な浜料理がテーブルいっぱいに並びます。",
              roomTip: "オーシャンビュー和モダン客室。窓いっぱいに広がる大船渡湾の波音に耳を傾け、冬の夜空に瞬く星々を見上げる特別な夜を過ごせます。",
              gourmetTip: "「市場直送・旬の三陸毛ガニ＆活あわび刺し尽くし。」。濃厚なカニ味噌と甘み際立つカニ身、コリコリとしたあわびの食感が絶妙です。",
              highlights: [
                "大船渡湾を一望する圧巻のインフィニティ展望露天風呂＆仲買人直営の圧倒的鮮度",
                "活あわび刺しと旬の三陸毛ガニ尽くし会席＆濃厚なカニ味噌の旨味",
                "保温効果抜群の天然塩化物泉＆夜空に広がる三陸の満天星と漁火"
              ]
            },
            {
              id: 3,
              name: "大船渡温泉",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/147544/147544.jpg",
              rating: 4.53,
              reviews: 1160,
              price: "¥17,710〜",
              access: "JR大船渡線大船渡丸森駅に隣接（BRTで代行運行中）／三陸自動車道碁石海岸ICより車で約3分",
              special: "【おでんせ！いわて割★対象宿】クーポンでお得に♪旬の三陸≪海の幸≫×リアス海岸絶景≪露天風呂≫",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147544%2F147544.html",
              story: "北三陸・田野畑村の断崖絶壁・弁天岬の袂に建ち、三陸鉄道リアス線「田野畑駅」からも近い「ホテル羅賀荘」。客室の窓を開ければ、眼前に冬の太平洋がどこまでも広がり、白波が岩肌に砕ける勇壮な景観を特等席から鑑賞できます。展望大浴場からも広大な水平線を望み、波の音を聞きながらリフレッシュ。料理は、北三陸ならではの海の幸を贅沢に使った海鮮会席。冬に旬を迎えるウニやアワビ、三陸産帆立、そして脂が乗った寒鮃（ヒラメ）の薄造りなど、獲れたてそのままの滋味をじっくり堪能できます。三陸鉄道の乗り鉄旅の拠点としても抜群の立地です。",
              roomTip: "全室オーシャンビューの和室。遮るもののない大海原から昇る初日の出を暖かい部屋のこたつに入りながら拝める贅沢なロケーション。",
              gourmetTip: "「北三陸の冬旬魚とあわび陶板焼き会席」。磯の香り豊かな蒸しウニご飯や、冬の北三陸名物の海鮮寄せ鍋が体の芯まで染み渡ります。",
              highlights: [
                "全室オーシャンビュー＆白波寄せる北三陸弁天岬の迫力ある海景色",
                "北三陸のウニ・ホタテ・アワビ三昧会席＆冬の三陸寒鮃のお造り",
                "三陸鉄道田野畑駅からの観光に便利＆冬のコバルトブルーの海原"
              ]
            },
            {
              id: 4,
              name: "ホテル羅賀荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/141313/141313.jpg",
              rating: 4.35,
              reviews: 509,
              price: "¥6,000〜",
              access: "E４５三陸道「宮古市や久慈市」から車で約４５分。龍泉洞は約３０分。三陸鉄道、田野畑駅から車で約３分（予約で送迎ＯＫ）",
              special: "お天気が良���れば朝陽に出会え、部屋の窓からは紺碧の海と白亜紀断層を眺め日々の疲れを癒す海辺のホテル",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F141313%2F141313.html",
              story: "JR釜石駅・三陸鉄道釜石駅に直結する抜群のアクセスを誇る「ホテルフォルクローロ三陸釜石」。三陸鉄道こたつ列車への乗車やリアス線の旅を起点から楽しむのにこれ以上ない拠点宿です。最上階には釜石湾や製鉄所の夜景を望む展望露天風呂付大浴場があり、心地よい風を感じながら旅の汗を流せます。館内は木の温もりを活かしたスタイリッシュな北欧モダンデザイン。朝食には岩手県産の新鮮な食材や郷土料理「ひっつみ汁」、三陸の焼き魚などが並び、清潔で機能的な空間で一人旅からカップル、家族連れまで快適な三陸旅をサポートします。",
              roomTip: "トレインビュー客室。眼下に釜石駅のホームと三陸鉄道の車両を眺めることができ、鉄道ファンや冬のひとり旅に大人気です。",
              gourmetTip: "「岩手短角牛ステーキと三陸海鮮ディナー」。脂肪分が少なく赤身の旨味が凝縮された短角牛と、旬のホタテやイクラのコンビネーションが抜群です。",
              highlights: [
                "三陸鉄道・JR釜石駅直結の抜群の機動力＆最上階展望風呂付きモダンホテル",
                "岩手短角牛ステーキと郷土料理ひっつみ汁＆三陸沖獲れたて焼き魚",
                "三陸鉄道こたつ列車への接続抜群＆ひとり旅や鉄道ファンにも快適な設備"
              ]
            },
            {
              id: 5,
              name: "休暇村　陸中宮古",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8594/8594.jpg",
              rating: 4.25,
              reviews: 718,
              price: "¥13,600〜",
              access: "JRと三陸鉄道の宮古駅より休暇村行き県北バスにて25分（宮古駅から送迎バスあり要予約）、車は盛岡南ＩＣより約90分",
              special: "三陸海岸の雄大な絶景と新鮮な魚介や岩手県の食材を使ったビュッフェと体験型グルメ「瓶ドン」を楽しむ♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8594%2F8594.html",
              story: "三陸復興国立公園の豊かな自然林の中に佇む「休暇村 陸中宮古」。周囲は静寂に包まれ、冬の朝には小鳥のさえずりと澄み切った海の香りが心地よく漂います。広々とした大浴場では、ミネラル豊富な麦飯石人工温泉でゆったりと温まることができます。夕食の名物は「三陸シーサイドビュッフェ」。宮古の郷土料理である瓶ドンを自分好みに作れるコーナーをはじめ、三陸産ホタテの浜焼き、目の前で握られる新鮮な寿司、郷土の鍋料理など、岩手の味覚をライブ感たっぷりに味わえるのが大きな魅力です。",
              roomTip: "静かな赤松の森を望むモダン洋室。落ち着いたトーンの内装と快適なベッドで、冬の自然と静寂に包まれる上質な休息が得られます。",
              gourmetTip: "「体験型・三陸瓶ドンバイキング＆焼きホタテ。」。イクラ、サーモン、イカ、めかぶを好きなだけ盛り付けるオリジナル丼は格別の美味しさです。",
              highlights: [
                "三陸復興国立公園の豊かな自然に抱かれたリゾート＆体験型瓶ドンビュッフェ",
                "自分好みに盛り付ける三陸瓶ドンバイキング＆香ばしい帆立の炭火焼き",
                "赤松林の小径を散歩＆静謐な自然の中で心身をリフレッシュする滞在"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "三陸鉄道の「こたつ列車」はいつ運行されますか？予約方法や運行区間は？",
    "a": "三陸鉄道の冬の看板列車「こたつ列車」は、例年12月中旬から翌年3月下旬の土日祝日を中心に運行されます（年末年始は毎日運行される期間あり）。宮古〜久慈間を走る「和風こたつ列車」と、盛〜釜石間などを走る「洋風こたつ列車」があります。車内には掘りごたつが並び、靴を脱いで暖まりながら車窓の絶景を楽しめます。途中のトンネルでは「なまはげ」に似た三陸の伝統妖怪「なもみ」が登場する車内イベントも大人気。乗車券のほかに座席指定券（300円〜）が必要で、1ヶ月前の同日午前9時から三陸鉄道の予約サイトまたは電話で予約可能です。名物のアワビ弁当やウニ弁当の事前予約もおすすめです。"
  },
  {
    "q": "冬（11月〜1月）の三陸沿岸の積雪状況や気温、服装はどうですか？車で行けますか？",
    "a": "岩手県の三陸沿岸地域（宮古・釜石・大船渡）は、内陸部の盛岡や花巻と比べて海洋性気候のため降雪量は大幅に少なく、真冬でも平野部や海岸沿いに大雪が積もり続ける日は多くありません。ただし、12月〜1月の朝晩は氷点下に冷え込み、路面凍結（ブラックアイスバーン）が発生しやすいため、車で訪れる場合は必ずスタッドレスタイヤを装着してください。三陸沿岸道路（三陸道）は無料区間が多く整備状況も良好ですが、トンネル出入り口や橋梁部の凍結には十分な注意が必要です。服装は風を通さない防風ダウンジャケット、手袋、マフラー、滑りにくいソールの防寒靴が必須です。"
  },
  {
    "q": "宮古の名物グルメ「瓶ドン」とはどのような料理ですか？どこで食べられますか？",
    "a": "「瓶ドン」は、牛乳瓶に三陸宮古の新鮮な海の幸（イクラ、ウニ、めかぶ、サーモン、イカ、タコなど）を層状にぎっしり詰め込んだ宮古発祥の体験型ご当地グルメです。元々、岩手沿岸部では採れたての生ウニを滅菌海水とともに牛乳瓶に詰めて保存・出荷する独特の文化があり、そこから着想を得て誕生しました。食べる直前にほかほかの白ご飯の上に自分で瓶を傾けて豪快にかけることで、見た目も美しく鮮度抜群の海鮮丼が完成します。宮古市内の主要ホテル（浄土ヶ浜パークホテルや休暇村など）の夕食・朝食や、魚菜市場内の飲食店で年中楽しめます。"
  },
  {
    "q": "冬の「浄土ヶ浜」の見どころや散策時のポイントを教えてください。",
    "a": "名勝「浄土ヶ浜」は、鋭くとがった白い流紋岩と緑の松、透明度の高い瑠璃色の海が織りなす極上の景勝地です。冬は観光客が落ち着き、静寂に包まれた厳かな雰囲気が漂います。特に初雪が降った後の白銀をまとった奇岩群と紺碧の海の対比は、まさに「さながら極楽浄土のごとし」と称された絶景そのもの。冬の朝は水平線から昇る朝日が奇岩を黄金色に照らし出し、写真愛好家にも絶大な人気を誇ります。遊歩道は整備されていますが、冬は海風が強く冷え込むため、万全の防寒対策をして散策してください。"
  },
  {
    "q": "11月〜1月に三陸で旬を迎えるおすすめの海産物は何ですか？",
    "a": "三陸の冬は海の幸が最も旨味を蓄えるゴールデンシーズンです。11月から解禁される「三陸あわび」は、肉厚で噛むほどに芳醇な磯の香りが広がります。また、12月〜1月に旬を迎える「三陸毛ガニ」は身の詰まりが良く、濃厚でクリーミーなカニ味噌が絶品。さらに「寒鱈（マダラ）」は脂が乗り、白子（タツ）や肝を入れた温かい「たら汁（どんこ汁）」は冬の三陸のソウルフードです。そのほか、寒ヒラメ、ヤリイカ、ホタテ、牡蠣など、冬ならではの極上海鮮を各宿の会席料理で存分に楽しめます。"
  }
];


  return (
    <article className="min-h-screen bg-stone-50/50 pb-20 text-stone-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-30 mix-blend-overlay overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80" 
            alt="三陸沿岸の雪景色背景" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-400/30">
            <Snowflake className="w-3.5 h-3.5" />
            11月・12月・1月限定 冬の三陸鉄道＆極上海鮮特集
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">「岩手・三陸沿岸」三陸鉄道こたつ列車の冬絶景と浄土ヶ浜雪景色・名物瓶ドン＆極上三陸あわび・毛ガニを味わう海沿いの名宿5選</h1>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed pt-2">
            ぬくぬくのこたつに入りながら車窓の雪白波を眺める三陸鉄道の旅。雪化粧した白亜の奇岩が聳える浄土ヶ浜、名物「瓶ドン」と肉厚なあわび踊り焼き、冬の毛ガニを堪能する感動の冬旅へ。
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-stone-400 pt-2 border-t border-stone-700/60">
            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> 2026年10月最新取材</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> 岩手県宮古市・大船渡市・釜石市・下閉伊郡田野畑村</span>
            <span className="flex items-center gap-1.5"><Train className="w-3.5 h-3.5" /> 三陸鉄道リアス線＆JR山田線・釜石線</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-12">

        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-cyan-950 font-bold text-sm tracking-wide bg-cyan-100/60 px-3 py-1 rounded-full">
              <Sparkles className="w-4 h-4 text-cyan-800" />
              冬の三陸沿岸が旅人を惹きつけてやまない理由
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              太平洋の紺碧と白銀の奇岩・こたつ列車で味わう三陸冬の極上美食
            </h2>
          </div>

          <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            <p>
              本州最東端を抱く岩手県三陸沿岸は、11月から1月にかけて空気が澄み渡り、ダイナミックなリアス海岸が一年で最も美しいコバルトブルーに染まる特別なシーズンを迎えます。内陸の豪雪地帯とは異なり、太平洋側の温暖な気候により雪が降り積もる日は限られますが、ひとたび初雪が舞い散れば、白亜の流紋岩が屹立する名勝「浄土ヶ浜」はまるで水墨画のような幽玄の景観へと姿を変えます。
            </p>
            <p>
              この時期の旅の主役となるのが、12月から運行を開始する三陸鉄道の「こたつ列車」。レトロな車内に設置された掘りごたつに足を滑り込ませ、車窓を流れる雄大な断崖絶壁と冬の荒波を眺めながら食べる駅弁やお酒は、まさに旅情の極みです。トンネル内での伝統芸能「なもみ」の登場など、心温まるおもてなしも冬の思い出を深く彩ります。
            </p>
            <p>
              そして何より旅人を惹きつけるのが、親潮と黒潮が交差する豊かな三陸の海が育む冬の至高の味覚。宮古のソウルフードである「瓶ドン」をはじめ、解禁を迎えた肉厚な「三陸あわび」、身がみっしりと詰まり濃厚な味噌を湛えた「三陸毛ガニ」、寒風にさらされた寒鱈の熱々鍋など、冬にしか出逢えない海の幸が待っています。絶景温泉と極上グルメに浸る至福の5宿をご案内します。
            </p>
          </div>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-cyan-800 font-bold text-xs sm:text-sm tracking-wider uppercase bg-cyan-50 px-3 py-1 rounded-full border border-cyan-100">
              <ShieldCheck className="w-4 h-4" />
              厳選宿泊施設ガイド
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
              三陸の冬絶景と極上海鮮に浸る名宿5選
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm">
              全宿楽天トラベル公式APIより最新宿泊プラン＆空室情報をリアルタイム取得中
            </p>
          </div>

          <div className="space-y-8">
            {hotelList.map((h: any) => (
              <div 
                key={h.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xs border border-stone-200/80 hover:shadow-md transition duration-300"
              >
                <div className="flex flex-col">
                  <div className="md:col-span-5 relative min-h-[240px] md:min-h-full">
                    <img 
                      src={h.img} 
                      alt={h.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                      第{h.id}位
                    </div>
                  </div>

                  <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center gap-2 text-cyan-600 text-xs font-bold mb-1">
                        <Waves className="w-3.5 h-3.5" />
                        三陸海岸オーシャンビュー＆極上海鮮
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                        {h.name}
                      </h3>
                      <div className="flex items-center gap-3 mt-2 text-xs text-stone-500">
                        <span className="flex items-center gap-1 text-amber-600 font-bold">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          {h.rating}
                        </span>
                        <span>({h.reviews}件のクチコミ)</span>
                        <span className="font-bold text-stone-800">{h.price}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mt-3">
                        {h.story}
                      </p>

                      <div className="bg-stone-50 rounded-xl p-3 mt-3 border border-stone-100 space-y-1.5 text-xs text-stone-600">
                        <div className="flex items-start gap-1.5">
                          <span className="font-bold text-stone-800 shrink-0">お部屋のポイント:</span>
                          <span>{h.roomTip}</span>
                        </div>
                        <div className="flex items-start gap-1.5">
                          <span className="font-bold text-stone-800 shrink-0">冬の味覚:</span>
                          <span>{h.gourmetTip}</span>
                        </div>
                      </div>

                      <ul className="mt-3 space-y-1 text-xs text-stone-600">
                        {h.highlights.map((hl: string, idx: number) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                      <div className="text-[11px] text-stone-500 truncate max-w-[200px]">
                        {h.access}
                      </div>
                      <a 
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs px-4 py-2 rounded-xl shadow-xs transition"
                      >
                        楽天トラベルで空室・プランを見る
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 1 Night 2 Days Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-cyan-950 font-bold text-sm tracking-wide bg-cyan-100/60 px-3 py-1 rounded-full">
              <Compass className="w-4 h-4 text-cyan-800" />
              1泊2日おすすめモデルコース
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              三陸鉄道こたつ列車と冬の浄土ヶ浜・極上海鮮を味わい尽くす冬旅
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-4">
              <h3 className="font-bold text-cyan-950 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-cyan-700" />
                【1日目】盛岡から宮古へ・冬の浄土ヶ浜と名物瓶ドン
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-1" />
                  <span><strong>11:30 JR盛岡駅から快速リアスで宮古駅へ：</strong>雪の北上高地を抜けて本州最東端の港町・宮古駅に到着（約2時間）。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-1" />
                  <span><strong>12:00 宮古魚菜市場で名物「瓶ドン」ランチ：</strong>色鮮やかな海鮮瓶を熱々ご飯にかけて味わう宮古発祥の絶品グルメ。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-1" />
                  <span><strong>13:30 冬の名勝「浄土ヶ浜」散策：</strong>白砂青松と白い流紋岩が雪をまとい、コバルトブルーの海とのコントラストに息を呑む。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-1" />
                  <span><strong>15:30 浄土ヶ浜の高台の宿にチェックイン：</strong>赤松林に囲まれた宿で、宮古湾の冬景色を眺めながら大浴場で体を温める。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-1" />
                  <span><strong>18:30 三陸あわび踊り焼きと毛ガニの冬会席：</strong>肉厚なあわびの香ばしい磯の香りと、三陸地酒「浜千鳥」の冷酒に舌鼓。</span>
                </li>
              </ul>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-4">
              <h3 className="font-bold text-cyan-950 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-cyan-700" />
                【2日目】三陸鉄道「こたつ列車」で雪のリアス海岸旅
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-1" />
                  <span><strong>07:00 宮古湾から昇る神々しい日の出鑑賞：</strong>水平線を黄金色に染め上げる冬の朝陽を部屋や展望テラスから眺める。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-1" />
                  <span><strong>08:00 新鮮な海の幸たっぷりの朝食：</strong>焼き魚、イクラ、熱々の味噌汁でエネルギーをチャージして宿を出発。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-1" />
                  <span><strong>10:30 宮古駅から三陸鉄道「こたつ列車」に乗車：</strong>掘りごたつに入り、白波寄せるリアス海岸の絶景を車窓から眺める。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-1" />
                  <span><strong>11:30 途中駅での車内イベント「なもみ」登場：</strong>伝統妖怪なもみの迫力ある演出と名物あわび弁当の昼食を楽しむ。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-1" />
                  <span><strong>13:30 久慈駅または釜石駅に到着・帰路へ：</strong>三陸のおみやげを買い込み、JR線や新幹線に接続して充実の帰路へ。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Local Souvenir & Spot Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-cyan-950 font-bold text-sm tracking-wide bg-cyan-100/60 px-3 py-1 rounded-full">
              <ShoppingBag className="w-4 h-4 text-cyan-800" />
              三陸沿岸の冬名物＆おみやげ手帖
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              旅の記憶を彩る三陸の伝統銘品と冬のおすすめ立ち寄り処
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-700" />
                宮古名物「瓶ドン」のテイクアウト＆三陸あわび昆布巻
              </h3>
              <p>
                宮古魚菜市場や各ホテルの売店では、急速冷凍されたお土産用の「瓶ドン」を購入可能。自宅でも解凍して熱々ご飯にかけるだけで、三陸の贅沢な海鮮丼を完全再現できます。また、三陸沿岸の良質な昆布で肉厚なアワビをじっくり煮上げた「あわび昆布巻」はお正月や冬のギフトにも最適です。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Heart className="w-4 h-4 text-cyan-700" />
                釜石の銘酒「浜千鳥」＆大船渡銘菓「かもめの玉子」
              </h3>
              <p>
                三陸の新鮮な魚介と抜群の相性を誇るのが、釜石の地酒「浜千鳥」。北上山地の清らかな雪解け水で醸された純米酒は、口当たりが柔らかくキレ味抜群です。お茶請けには大船渡発祥の全国的銘菓「かもめの玉子」が定番で、冬限定のみかん味や栗味も見逃せません。
              </p>
            </div>
          </div>
        </section>

        {/* Deep Dive Knowledge Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-cyan-950 font-bold text-sm tracking-wide bg-cyan-100/60 px-3 py-1 rounded-full">
              <ThermometerSun className="w-4 h-4 text-cyan-800" />
              三陸リアスの地理と食文化の深層解説
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              なぜ11月・12月・1月の三陸は「海の宝庫」と呼ばれるのか
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
              <Waves className="w-4 h-4 text-cyan-700" />
              世界三大漁場「三陸沖」の潮目とリアス式海岸が育む奇跡の生態系
            </h3>
            <p>
              岩手県三陸沖は、栄養分を豊富に含んだ親潮（寒流）と暖かな黒潮（暖流）が激しくぶつかり合う「潮目」にあたり、プランクトンが爆発的に発生する世界三大漁場の一つです。さらに、北上高地のブナ原生林から注ぎ込む川水が鉄分やミネラルを海へと運び、沿岸の海藻類（ワカメやコンブ）を豊かに育てます。この極上の海藻を食べて育つアワビやウニは、日本屈指の甘みと肉厚さを誇り、真冬になると寒さから身を守るために魚介類全体が上質な脂をたっぷりと蓄えます。
            </p>

            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 pt-2">
              <Landmark className="w-4 h-4 text-cyan-700" />
              三陸鉄道の復興の歩みと「こたつ列車」に込められた地域の温もり
            </h3>
            <p>
              東日本大震災の甚大な津波被害から奇跡の復活を遂げ、2019年に全線163kmが一本につながった「三陸鉄道リアス線」。地元住民の生活路線であると同時に、全国からの支援への感謝を伝えるシンボルでもあります。冬の風物詩である「こたつ列車」は、ただの観光列車にとどまらず、地元のアテンダントや地域の人々が温かい笑顔と方言で乗客をもてなす「心の通い合いの場」。雪景色の静かな車内で味わう人の温もりこそが、三陸の最大の魅力です。
            </p>

            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 pt-2">
              <Snowflake className="w-4 h-4 text-cyan-700" />
              海洋性気候がもたらす冬の晴天率とアクセス道路の快適性
            </h3>
            <p>
              東北地方といえば豪雪のイメージが強いですが、三陸沿岸部は奥羽山脈が日本海からの雪雲を遮るため、冬でも晴天率が非常に高いのが大きな特徴です。近年は無料の自動車専用道路「三陸沿岸道路（復興道路）」が仙台から青森県八戸まで全線開通しており、アップダウンや急カーブの多いかつての峠道を通ることなく、安全かつスピーディに各温泉地や港町へアクセスできるようになりました。冬のドライブや鉄道旅に極めて適した環境が整っています。
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-cyan-950 font-bold text-sm tracking-wide bg-cyan-100/60 px-3 py-1 rounded-full">
              <HelpCircle className="w-4 h-4 text-cyan-800" />
              よくある質問
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初冬・厳冬期の三陸沿岸旅行 Q&A
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq, idx) => (
              <div key={idx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-cyan-700 font-extrabold">Q.</span>
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
          <div className="flex items-center gap-2 text-cyan-950 font-bold text-sm tracking-wide">
            <Sparkles className="w-4 h-4 text-cyan-800" />
            あわせて読みたい東北・岩手の冬温泉＆絶景特集
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            <Link 
              href="/winter-iwate-hanamaki-minami-namari-osawa-snow-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-cyan-700 font-bold block text-[10px]">岩手・花巻南温泉郷</span>
              <p className="font-bold text-stone-800 line-clamp-2">鉛温泉・大沢温泉の白銀秘湯と前沢牛・立ち湯湯治の冬籠もり</p>
            </Link>
            <Link 
              href="/winter-miyagi-matsushima-onsen-kaki-matsushimawan-view-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-cyan-700 font-bold block text-[10px]">宮城・松島温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">日本三景松島の冬景色と焼き牡蠣食べ放題・絶景松島湾の海沿い名宿</p>
            </Link>
            <Link 
              href="/winter-aomori-shimofuro-onsen-oma-maguro-ankou-tsugaru-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-cyan-700 font-bold block text-[10px]">青森・下風呂温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">津軽海峡冬の荒波と大間本マグロ・幻のアンコウ鍋を堪能する秘湯</p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-iwate-sanriku-kotatsu-train-kaisen-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
