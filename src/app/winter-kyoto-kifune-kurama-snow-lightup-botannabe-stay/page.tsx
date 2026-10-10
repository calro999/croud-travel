import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Snowflake, Eye, Waves, ThermometerSun, Heart, ShoppingBag, Shield, Mountain, Landmark, Train
} from 'lucide-react';

export const metadata: Metadata = {
  title: '11・12・1月京都：白銀の貴船神社！名宿5選',
  description: '11月から1月、京都市街地の喧騒から離れた京都洛北の奥座敷「貴船・鞍馬」は、凛とした冬の澄んだ空気と幽玄の白銀世界に包まれます。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '貴船神社 積雪ライトアップ, 貴船 ぼたん鍋, 貴船ふじや, 右源太 貴船, 貴船 ひろや, 京都奥座敷 宿泊, 叡山電鉄 きらら, 11月 12月 1月 京都旅行, 鞍馬寺 雪景色',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-kyoto-kifune-kurama-snow-lightup-botannabe-stay/"
  },
  openGraph: {
    title: '11・12・1月京都：白銀の貴船神社！名宿5選',
    description: '11月から1月、京都市街地の喧騒から離れた京都洛北の奥座敷「貴船・鞍馬」は、凛とした冬の澄んだ空気と幽玄の白銀世界に包まれます。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-kyoto-kifune-kurama-snow-lightup-botannabe-stay',
    siteName: 'クラドトラベル',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: '白銀の貴船神社ライトアップと冬の京都奥座敷'
      }
    ],
    locale: 'ja_JP',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: "11・12・1月京都：白銀の貴船神社・積雪日限定ライトアップと冬の京都奥座敷・極上天然猪肉ぼたん鍋＆京都牛を愉しむ静寂の名宿5選",
    description: "11月から1月、京都市街地の喧騒から離れた京都洛北の奥座敷「貴船・鞍馬」は、凛とした冬の澄んだ空気と幽玄の白銀世界に包まれます。夏の川床で名高い貴船ですが、冬こそが静寂に浸れる通好みの季節。降雪時のみ開催される貴船神社の「積雪日限定ライトアップ」では、朱色の春日灯籠が並ぶ石段参道に白雪が降り積もり、闇夜に浮かび上がる光景は息を呑むほどの幻想美を誇ります。この季節の主役は、雪景色を眺めながら座敷や囲炉裏でいただく冬の美食。京都丹波の山々で獲れた極上の「天然猪肉のぼたん鍋」をはじめ、とろける甘みの「京都牛」すき焼き、名物すっぽん鍋、汲み上げ湯葉、雪深い川の恵みを活かした川魚料理が贅沢に並びます。叡山電鉄「きらら」の車窓から望む冬景色と、清流・貴船川のせせらぎに癒やされる厳選料理旅館5宿を徹底ガイドします。",
    images: ['https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function KyotoKifuneKuramaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-kyoto-kifune-kurama-snow-lightup-botannabe-stay#article",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://croud-travel.pages.dev/#website",
          "name": "クラドトラベル",
          "url": "https://croud-travel.pages.dev"
        },
        "headline": "【11・12・1月京都】白銀の貴船神社・積雪日限定ライトアップと冬の京都奥座敷・極上天然猪肉ぼたん鍋＆京都牛を愉しむ静寂の名宿5選",
        "description": "11月から1月、京都市街地の喧騒から離れた京都洛北の奥座敷「貴船・鞍馬」は、凛とした冬の澄んだ空気と幽玄の白銀世界に包まれます。夏の川床で名高い貴船ですが、冬こそが静寂に浸れる通好みの季節。降雪時のみ開催される貴船神社の「積雪日限定ライトアップ」では、朱色の春日灯籠が並ぶ石段参道に白雪が降り積もり、闇夜に浮かび上がる光景は息を呑むほどの幻想美を誇ります。この季節の主役は、雪景色を眺めながら座敷や囲炉裏でいただく冬の美食。京都丹波の山々で獲れた極上の「天然猪肉のぼたん鍋」をはじめ、とろける甘みの「京都牛」すき焼き、名物すっぽん鍋、汲み上げ湯葉、雪深い川の恵みを活かした川魚料理が贅沢に並びます。叡山電鉄「きらら」の車窓から望む冬景色と、清流・貴船川のせせらぎに癒やされる厳選料理旅館5宿を徹底ガイドします。",
        "image": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
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
        "mainEntityOfPage": "https://croud-travel.pages.dev/winter-kyoto-kifune-kurama-snow-lightup-botannabe-stay"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.pages.dev/winter-kyoto-kifune-kurama-snow-lightup-botannabe-stay#breadcrumb",
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
            "name": "京都・貴船鞍馬の冬ライトアップとぼたん鍋特集",
            "item": "https://croud-travel.pages.dev/winter-kyoto-kifune-kurama-snow-lightup-botannabe-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-kyoto-kifune-kurama-snow-lightup-botannabe-stay#faq",
        "mainEntity": [{"@type":"Question","name":"貴船神社の「積雪日限定ライトアップ」とは何ですか？いつ開催されますか？","acceptedAnswer":{"@type":"Answer","text":"貴船神社の「積雪日限定ライトアップ」は、例年1月〜2月の積雪日（適度な積雪があった日）にのみ特別開催される非常に希少で幻想的なイベントです。開催の可否は当日の午後3時に貴船神社の公式SNSやホームページで発表されます。夕暮れから20時頃まで、本宮参道の石段両脇に立ち並ぶ朱色の「春日灯籠」と境内の社殿に明かりが灯され、純白の雪と鮮やかな朱色、揺らめく灯火が織りなす光景は「日本一美しい冬景色」とも称されます。貴船の料理旅館に宿泊していれば、混雑や交通機関の時間を気にせず、宿から徒歩でゆっくりとこの奇跡の絶景を鑑賞できます。"}},{"@type":"Question","name":"冬（11月〜1月）の貴船・鞍馬へのアクセス方法は？雪道運転は必要ですか？","acceptedAnswer":{"@type":"Answer","text":"貴船・鞍馬へのアクセスは、公共交通機関（電車・バス）の利用が最も安全でおすすめです。京都市営地下鉄・京阪電車「出町柳駅」から「叡山電鉄（えいでん）」に乗車し、「貴船口駅」まで約30分。展望列車「きらら」に乗れば、大きな窓から洛北の雪景色を満喫できます。貴船口駅からは各料理旅館の無料送迎車を利用するか、京都バスで約5分で貴船温泉街へ到着します。車で訪れる場合、貴船へ続く府道361号線は道幅が狭く、冬期は路面凍結（アイスバーン）や積雪が多発します。ノーマルタイヤでの走行は極めて危険なため、必ずスタッドレスタイヤを装着し、運転に自信のない方は公共交通機関をご利用ください。"}},{"@type":"Question","name":"冬の貴船・鞍馬の名物グルメ「ぼたん鍋」の特徴と美味しさの秘密は？","acceptedAnswer":{"@type":"Answer","text":"貴船の冬を代表する味覚「ぼたん鍋」は、京都・丹波の山々で獲れた野生の天然猪肉を、特製の合わせ味噌出汁で煮込む伝統の鍋料理です。冬のイノシシは木の実をたっぷりと蓄えて越冬するため、白く美しい上質な脂が乗っています。猪肉は煮込めば煮込むほど柔らかくなり、脂身は甘くサラリとしていて全く脂っこくありません。九条ネギ、丹波しめじ、聖護院かぶら、京豆腐など、冬の京都特有の甘みたっぷりの京野菜と一緒に煮込むことで、出汁に芳醇な旨味が溶け出し、最後の一滴まで美味しくいただけます。"}},{"@type":"Question","name":"冬の貴船・鞍馬観光に必要な服装や防寒対策、持ち物は？","acceptedAnswer":{"@type":"Answer","text":"京都洛北の貴船・鞍馬エリアは、京都市街地（京都駅や四条河原町周辺）よりも気温が3℃〜5℃低く、真冬の夜間や早朝は氷点下に達します。万全の防寒対策が必要です。厚手のダウンコートや防風ジャケット、機能性発熱インナー、マフラー、手袋、ニット帽を着用してください。また、貴船神社の参道石段や鞍馬寺の山道は雪や氷で大変滑りやすくなるため、ヒールや革靴は避け、滑り止めの溝がしっかりついたスノーブーツや防水トレッキングシューズが必須です。携帯カイロを持参すると夜の散策時も快適に過ごせます。"}},{"@type":"Question","name":"冬の「鞍馬寺」の見どころと貴船からのアクセスはどうなっていますか？","acceptedAnswer":{"@type":"Answer","text":"天狗伝説や源義経（牛若丸）修行の地として名高い「鞍馬寺」。冬の白銀に包まれた本殿金堂や、仁王門、雪の杉木立は厳かな霊気を感じさせます。叡山電鉄「鞍馬駅」前には巨大な天狗のモニュメントがあり、雪帽子をかぶった天狗の姿は冬の記念撮影スポットとして人気です。鞍馬寺から貴船神社へは「木の根道」を通る奥の院山越えルート（徒歩約1時間半）がありますが、冬期は積雪や凍結で通行止めや足元が危険になることがあります。冬の間は、鞍馬駅から叡山電鉄で一駅の貴船口駅へ移動し、バスまたは宿の送迎を利用して貴船へ向かうのが安全で確実です。"}}]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "京都“元祖川床”発祥の老舗料理旅館　貴船ふじや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/67265/67265.jpg",
              rating: 4.69,
              reviews: 320,
              price: "¥33,100〜",
              access: "叡山電車鞍馬線　貴船口駅より徒歩２０分（送迎有り・事前予約不要。当日お電話いただければお迎えに参ります。）",
              special: "貴船・川床の元祖【創業天保年間】貴船神社門前に佇み、洛北の四季を盛り込んだ川魚生簀料理が自慢。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67265%2F67265.html",
              story: "天保年間創業、京都の夏の風物詩「貴船の川床」発祥の老舗料理旅館として名高い「貴船ふじや」。貴船神社の鳥居すぐ前に位置し、川床の歴史を紡いできた風格ある佇まいが旅人を温かく迎えます。夏とは一変して静まり返る冬の貴船において、ふじやが供する冬の名物は「天然猪肉のぼたん鍋」と「京都牛会席」。丹波の猟師から直接仕入れる極上の猪肉は、赤身の旨味と甘み豊かな脂身のバランスが絶妙で、特製の合わせ味噌出汁がその濃厚な風味を引き立てます。さらに、契約農家から届く聖護院大根や京壬生菜など伝統の京野菜が彩りを添え、歴史ある座敷で熱々の地酒とともに至福の時間を過ごせます。",
              roomTip: "貴船川に面した数寄屋造りの純和室。窓の外に流れる清流の雪景色と、冬の澄み渡る山の空気を独り占めできる静寂の空間。",
              gourmetTip: "「元祖川床宿の天然猪肉ぼたん鍋＆京都牛すき焼き会席。」。特製味噌出汁に染み出た猪肉の脂の甘みと、とろける京都牛の旨味が格別です。",
              highlights: [
                "天保年間創業・元祖川床発祥の老舗＆貴船神社本宮の鳥居前すぐの絶好の立地",
                "丹波産天然猪肉ぼたん鍋＆極上京都牛すき焼きと聖護院大根など伝統京野菜",
                "貴船神社「積雪日限定ライトアップ」鑑賞に最適＆雪の参道を徒歩ですぐ散策"
              ]
            },
            {
              id: 2,
              name: "料理旅館　右源太",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/70674/70674.jpg",
              rating: 4.75,
              reviews: 190,
              price: "¥38,000〜",
              access: "叡山電鉄　貴船口駅より徒歩約30分。無料送迎サービスがありますので当日は出町柳駅から乗車前にお電話ください。",
              special: "客室はメゾネットタイプ。露天風呂・暖炉又は囲炉裏・書斎を完備。夏は川床料理、冬は氣生根鍋が名物。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70674%2F70674.html",
              story: "貴船温泉の奥座敷、清らかな貴船川の最上流部に佇む大人の隠れ家ラグジュアリー旅館「料理旅館 右源太」。モダンな美意識と数寄屋の伝統が融合したわずか数室の贅沢な空間で、プライベート感あふれる極上の滞在を叶えてくれます。館内には貴船の清らかな地下水を沸かした貸切露天風呂があり、雪が舞う杉木立を眺めながらの雪見風呂はまさに極楽。冬の夕食は右源太名物の「極上ぼたん鍋」または「美肌すっぽん鍋」。丹波産の猪肉を丁寧に薄切りにし、牡丹の花のように盛り付けた逸品は、滋味深く体の芯から温まります。器の美しさと繊細な盛り付けも右源太ならではの魅力です。",
              roomTip: "離れ風のラグジュアリー和洋室。床暖房が完備されたモダンリビングと上質なローベッドで、冬の貴船を暖かく快適に過ごせます。",
              gourmetTip: "「右源太特選・丹波天然ぼたん鍋＆すっぽん小鍋懐石。」。澄んだスープに溶け込むすっぽんのコラーゲンと、猪肉の野趣あふれる甘みが絶品です。",
              highlights: [
                "貴船川最上流の隠れ家ラグジュアリー＆貸切露天風呂から望む冬の雪景色",
                "右源太特選ぼたん鍋と美肌すっぽん鍋懐石＆目にも美しい器と繊細な盛り付け",
                "床暖房完備の和モダン離れ空間＆大人のための静寂とプライベートな癒やし"
              ]
            },
            {
              id: 3,
              name: "京・貴船　ひろや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/44006/44006.jpg",
              rating: 4.80,
              reviews: 140,
              price: "¥42,000〜",
              access: "叡山電鉄　 貴船口駅より２ｋｍ（送迎有り要ＴＥＬ）",
              special: "貴船川に面した昔ながらの料理旅館。季節京会席が自慢で、特に貴船川の川床は夏の風物詩として好評。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F44006%2F44006.html",
              story: "貴船川の清流に張り出すように建ち、創業以来皇族方や各界の著名人を迎えてきた貴船屈指の格式を誇る「京・貴船 ひろや」。磨き上げられた廊下や美しい格子戸、季節の床飾りなど、日本の伝統美が随所に息づく名宿です。冬の澄み切った静けさの中、客室の窓からは雪化粧した杉山と川面のせせらぎが広がり、日常の喧騒を忘れさせてくれます。料理は京都の伝統を極めた本格京会席。冬の贅として、天然猪肉のぼたん鍋や京都牛の石焼き、旬の甘鯛（ぐじ）のかぶら蒸し、汲み上げ湯葉など、選び抜かれた旬の食材が一品一品出来立ての絶妙なタイミングで運ばれます。",
              roomTip: "貴船川を間近に望む川側和室。雪が積もる川床の跡地とせせらぎを眺めながら、静かに京都の冬情緒に浸ることができます。",
              gourmetTip: "「伝統京会席・甘鯛かぶら蒸しと天然猪ぼたん鍋。」。ふっくら蒸し上げた甘鯛に銀餡がかかったかぶら蒸しの温かさが心に染み入ります。",
              highlights: [
                "皇族ゆかりの貴船随一の格式＆清流のせせらぎを間近に感じる数寄屋建築",
                "甘鯛かぶら蒸しと天然猪ぼたん鍋＆一品一品出来立てを味わう本格京懐石",
                "障子を開ければ広がる雪の川面ビュー＆贅沢な京都奥座敷の冬籠もり"
              ]
            },
            {
              id: 4,
              name: "料理旅館　ひろ文",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/70821/70821.jpg",
              rating: 4.67,
              reviews: 280,
              price: "¥35,090〜",
              access: "地下鉄国際会館駅～京都バス『貴船口』下車乗車時間約20分/貴船口駅より徒歩30分※貴船口駅より2名様以上送迎有*要予約",
              special: "京都ならではの古民家で味わう囲炉裏料理！貴船神社結社に徒歩1分の好立地。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70821%2F70821.html",
              story: "夏の「流しそうめん」や川床で全国的に知られる名宿でありながら、冬は白銀の絶景風呂と本格ジビエ鍋で多くのリピーターを惹きつける「料理旅館 ひろ文」。貴船の最も奥まった静かな場所に位置し、冬になると一面の銀世界に包まれます。館内には貴船の自然を一望できる展望大浴場があり、冬の澄んだ空気を感じながら手足を伸ばして温まることができます。夕食の名物は「ひろ文特製ぼたん鍋」。選び抜かれた天然猪肉に、九条ネギや丹波しめじ、京豆腐をたっぷり合わせ、コクのある自家製味噌で煮込む鍋は体の芯まで温まります。京都牛のしゃぶしゃぶプランも大人気です。",
              roomTip: "落ち着いた和室客室。冬の山懐に抱かれた静寂の中、障子越しに差し込む柔らかな雪明かりに包まれて寛げます。",
              gourmetTip: "「特製ぼたん鍋と京都牛しゃぶしゃぶの贅沢コース。」。自家製ブレンド味噌が出汁の深みを引き立て、猪肉の歯応えと京都牛の柔らかさが楽しめます。",
              highlights: [
                "貴船の奥座敷に佇む自然豊かな名宿＆展望大浴場と本格ジビエぼたん鍋",
                "自家製ブレンド味噌仕立ての特製ぼたん鍋＆とろける京都牛しゃぶしゃぶ",
                "雪に包まれた杉木立の静寂に浸る休日＆叡山電鉄貴船口駅からの送迎対応"
              ]
            },
            {
              id: 5,
              name: "貴船　べにや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/135579/135579.jpg",
              rating: 4.50,
              reviews: 160,
              price: "¥28,000〜",
              access: "叡山電鉄・貴船口駅より徒歩20分(ご希望の方、2名様～送迎有（貴船口まで、要予約）)/京都南ICより約60分",
              special: "京都・貴船べにやへ是非お越し下さい。京の奥座敷・貴船は、格別の風情と趣があります。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F135579%2F135579.html",
              story: "貴船川沿いに広大な敷地を有し、ゆったりとした数寄屋造りの建物と落ち着いた庭園が迎えてくれる「貴船 べにや」。川のせせらぎが常に耳に心地よく響き、冬には雪化粧した庭園木々と川面の美しいコントラストが窓一面に広がります。大浴場では清らかな名水で温まり、冷えた体をリセット。料理は旬の味覚を大切にした京料理で、冬限定の「丹波猪ぼたん鍋」やすき焼き、京都牛の陶板ステーキ、旬の焼き魚など、素材の味をストレートに引き出したボリュームたっぷりの料理が好評。親しみやすく丁寧な接客も高く評価されています。",
              roomTip: "川沿いの広々とした和室。こたつが用意されたお部屋で、外のシンシンと降る雪を眺めながら過ごす時間は冬の京都の贅沢そのものです。",
              gourmetTip: "「冬の味覚・丹波猪ぼたん鍋と京都牛陶板焼き会席。」。香ばしく焼き上げる京都牛ステーキと、熱々のぼたん鍋の組み合わせは食べ応え抜群です。",
              highlights: [
                "広大な敷地と落ち着いた庭園美＆丹波猪ぼたん鍋と京都牛陶板ステーキ",
                "丹波猪ぼたん鍋とジューシーな京都牛陶板焼き会席＆冬の地酒の熱燗",
                "こたつに入りながら雪景色を愛でる時間＆温かいもてなしに心和む滞在"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "貴船神社の「積雪日限定ライトアップ」とは何ですか？いつ開催されますか？",
    "a": "貴船神社の「積雪日限定ライトアップ」は、例年1月〜2月の積雪日（適度な積雪があった日）にのみ特別開催される非常に希少で幻想的なイベントです。開催の可否は当日の午後3時に貴船神社の公式SNSやホームページで発表されます。夕暮れから20時頃まで、本宮参道の石段両脇に立ち並ぶ朱色の「春日灯籠」と境内の社殿に明かりが灯され、純白の雪と鮮やかな朱色、揺らめく灯火が織りなす光景は「日本一美しい冬景色」とも称されます。貴船の料理旅館に宿泊していれば、混雑や交通機関の時間を気にせず、宿から徒歩でゆっくりとこの奇跡の絶景を鑑賞できます。"
  },
  {
    "q": "冬（11月〜1月）の貴船・鞍馬へのアクセス方法は？雪道運転は必要ですか？",
    "a": "貴船・鞍馬へのアクセスは、公共交通機関（電車・バス）の利用が最も安全でおすすめです。京都市営地下鉄・京阪電車「出町柳駅」から「叡山電鉄（えいでん）」に乗車し、「貴船口駅」まで約30分。展望列車「きらら」に乗れば、大きな窓から洛北の雪景色を満喫できます。貴船口駅からは各料理旅館の無料送迎車を利用するか、京都バスで約5分で貴船温泉街へ到着します。車で訪れる場合、貴船へ続く府道361号線は道幅が狭く、冬期は路面凍結（アイスバーン）や積雪が多発します。ノーマルタイヤでの走行は極めて危険なため、必ずスタッドレスタイヤを装着し、運転に自信のない方は公共交通機関をご利用ください。"
  },
  {
    "q": "冬の貴船・鞍馬の名物グルメ「ぼたん鍋」の特徴と美味しさの秘密は？",
    "a": "貴船の冬を代表する味覚「ぼたん鍋」は、京都・丹波の山々で獲れた野生の天然猪肉を、特製の合わせ味噌出汁で煮込む伝統の鍋料理です。冬のイノシシは木の実をたっぷりと蓄えて越冬するため、白く美しい上質な脂が乗っています。猪肉は煮込めば煮込むほど柔らかくなり、脂身は甘くサラリとしていて全く脂っこくありません。九条ネギ、丹波しめじ、聖護院かぶら、京豆腐など、冬の京都特有の甘みたっぷりの京野菜と一緒に煮込むことで、出汁に芳醇な旨味が溶け出し、最後の一滴まで美味しくいただけます。"
  },
  {
    "q": "冬の貴船・鞍馬観光に必要な服装や防寒対策、持ち物は？",
    "a": "京都洛北の貴船・鞍馬エリアは、京都市街地（京都駅や四条河原町周辺）よりも気温が3℃〜5℃低く、真冬の夜間や早朝は氷点下に達します。万全の防寒対策が必要です。厚手のダウンコートや防風ジャケット、機能性発熱インナー、マフラー、手袋、ニット帽を着用してください。また、貴船神社の参道石段や鞍馬寺の山道は雪や氷で大変滑りやすくなるため、ヒールや革靴は避け、滑り止めの溝がしっかりついたスノーブーツや防水トレッキングシューズが必須です。携帯カイロを持参すると夜の散策時も快適に過ごせます。"
  },
  {
    "q": "冬の「鞍馬寺」の見どころと貴船からのアクセスはどうなっていますか？",
    "a": "天狗伝説や源義経（牛若丸）修行の地として名高い「鞍馬寺」。冬の白銀に包まれた本殿金堂や、仁王門、雪の杉木立は厳かな霊気を感じさせます。叡山電鉄「鞍馬駅」前には巨大な天狗のモニュメントがあり、雪帽子をかぶった天狗の姿は冬の記念撮影スポットとして人気です。鞍馬寺から貴船神社へは「木の根道」を通る奥の院山越えルート（徒歩約1時間半）がありますが、冬期は積雪や凍結で通行止めや足元が危険になることがあります。冬の間は、鞍馬駅から叡山電鉄で一駅の貴船口駅へ移動し、バスまたは宿の送迎を利用して貴船へ向かうのが安全で確実です。"
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
            src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1920&q=80" 
            alt="雪の貴船神社ライトアップ背景" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold border border-rose-400/30">
            <Snowflake className="w-3.5 h-3.5" />
            11月・12月・1月限定 京都奥座敷積雪ライトアップ特集
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">「京都・貴船鞍馬」白銀の貴船神社・積雪日限定ライトアップと冬の京都奥座敷・極上天然猪肉ぼたん鍋＆京都牛を愉しむ静寂の名宿5選</h1>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed pt-2">
            朱色の春日灯籠と白雪が織りなす奇跡の積雪ライトアップ。夏の喧騒から離れた京都奥座敷の凛とした静寂。老舗料理旅館で味わう丹波天然猪のぼたん鍋と京都牛のすき焼き、心洗われる大人の冬旅へ。
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-stone-400 pt-2 border-t border-stone-700/60">
            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> 2026年10月最新取材</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> 京都市左京区（貴船・鞍馬・洛北奥座敷）</span>
            <span className="flex items-center gap-1.5"><Train className="w-3.5 h-3.5" /> 叡山電鉄鞍馬線「貴船口駅」「鞍馬駅」</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-12">

        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-rose-950 font-bold text-sm tracking-wide bg-rose-100/60 px-3 py-1 rounded-full">
              <Sparkles className="w-4 h-4 text-rose-800" />
              冬の貴船・鞍馬が通好みの旅人に愛される理由
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              静寂が戻る京都の奥座敷・息を呑む白銀の灯籠と至高のジビエぼたん鍋
            </h2>
          </div>

          <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            <p>
              夏は清流の上にせり出す「川床（かわどこ）」で全国から訪れる避暑客で賑わう京都洛北の貴船。しかし、晩秋の紅葉が散り、12月から1月にかけて初雪が降る頃、この地は本来の清らかな静寂を取り戻し、一年で最も神聖でドラマチックな季節を迎えます。
            </p>
            <p>
              冬の貴船のハイライトといえば、雪が降った日限定で開催される貴船神社の「積雪日限定ライトアップ」。本宮へと続く石段参道には、降り積もる白雪と朱色の春日灯籠がどこまでも続き、薄暮から夜の帳が下りるにつれて浮かび上がるその姿は、息を呑むほど幽玄で神秘的です。市街地とは異なる冷涼な山の空気が、景色をより鮮烈に際立たせます。
            </p>
            <p>
              そして夜は、夏に川床を営んでいた老舗料理旅館の暖かいお座敷で過ごす贅沢。丹波の山々で獲れた極上の天然猪肉を、秘伝の合わせ味噌出汁で煮込む「ぼたん鍋」をはじめ、とろけるような京都牛、名物すっぽん鍋、汲み上げ湯葉、そして甘鯛のかぶら蒸しなど、京都の冬の美食が勢揃い。静寂と温もりに包まれる厳選の5宿をご案内します。
            </p>
          </div>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-rose-800 font-bold text-xs sm:text-sm tracking-wider uppercase bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
              <ShieldCheck className="w-4 h-4" />
              厳選宿泊施設ガイド
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
              冬の貴船・鞍馬で美食と静寂に浸る名宿5選
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
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
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
                      <div className="flex items-center gap-2 text-rose-600 text-xs font-bold mb-1">
                        <Flame className="w-3.5 h-3.5" />
                        元祖川床宿＆丹波天然猪ぼたん鍋
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
                        className="inline-flex items-center gap-1.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs px-4 py-2 rounded-xl shadow-xs transition"
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
            <div className="inline-flex items-center gap-2 text-rose-950 font-bold text-sm tracking-wide bg-rose-100/60 px-3 py-1 rounded-full">
              <Compass className="w-4 h-4 text-rose-800" />
              1泊2日おすすめモデルコース
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              叡電きららで行く白銀の貴船神社ライトアップと極上ぼたん鍋旅
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-4">
              <h3 className="font-bold text-rose-950 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-rose-700" />
                【1日目】出町柳から洛北へ・雪の貴船神社とぼたん鍋
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-1" />
                  <span><strong>13:00 叡山電鉄・出町柳駅から展望列車「きらら」乗車：</strong>大きなパノラマ窓から洛北の山並みと冬景色を眺めながら貴船口駅へ（約30分）。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-1" />
                  <span><strong>13:40 旅館の送迎車で貴船温泉街へ到着：</strong>雪化粧した木造建築が連なる静寂の奥座敷へ。宿に荷物を預ける。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-1" />
                  <span><strong>14:30 貴船神社「本宮・結社・奥宮」三社参り：</strong>水神を祀る古社へ。名物の「水占みくじ」を雪解けの神水に浮かべて運勢を占う。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-1" />
                  <span><strong>16:00 料理旅館にチェックイン・大浴場で温まる：</strong>冷えた体を湯船でじっくり温め、暖かい浴衣と丹前で寛ぐ。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-1" />
                  <span><strong>17:30 貴船神社・積雪日限定ライトアップ鑑賞：</strong>朱色の春日灯籠と白雪が浮かび上がる幻想的な参道を宿から歩いて鑑賞。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-1" />
                  <span><strong>19:00 丹波天然猪肉ぼたん鍋＆京都牛の夕食：</strong>特製味噌出汁の深いコクと柔らかい猪肉、京都の地酒「月の桂」の熱燗を堪能。</span>
                </li>
              </ul>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-4">
              <h3 className="font-bold text-rose-950 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-rose-700" />
                【2日目】雪の鞍馬寺参拝とおみやげ探し
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-1" />
                  <span><strong>08:00 静寂の朝食・名水湯豆腐と京の朝ごはん：</strong>温かい汲み上げ湯葉や出汁巻き卵、炊きたての白米で優雅な朝。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-1" />
                  <span><strong>09:30 叡山電鉄で一駅、鞍馬駅へ移動：</strong>雪帽子をかぶった巨大な鞍馬天狗のモニュメント前で記念撮影。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-1" />
                  <span><strong>10:15 鞍馬寺・仁王門から本殿金堂へ参拝：</strong>ケーブルカーを利用して雪の境内へ。宇宙のエネルギーが集まる六芒星の金剛床で祈願。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-1" />
                  <span><strong>12:00 鞍馬街道の老舗で名物「木の芽煮」購入：</strong>くらま辻井などで伝統の山椒昆布煮やお漬物を買い求める。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-1" />
                  <span><strong>13:30 叡山電鉄で出町柳駅・京都市街地へ帰路：</strong>冬の洛北の余韻を胸に、京都駅や新幹線へ接続。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Local Souvenir & Spot Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-rose-950 font-bold text-sm tracking-wide bg-rose-100/60 px-3 py-1 rounded-full">
              <ShoppingBag className="w-4 h-4 text-rose-800" />
              貴船・鞍馬の冬名物＆おみやげ手帖
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              洛北の伝統が香るおすすめ銘品と冬の立ち寄り処
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-rose-700" />
                鞍馬名物「木の芽煮（きのめだき）」＆山椒佃煮
              </h3>
              <p>
                鞍馬寺門前の老舗「くらま辻井」などで受け継がれる「木の芽煮」。昆布と実山椒、木の芽をじっくり炊き上げた逸品で、ピリッとした山椒の爽やかな辛みと昆布の旨味がお茶漬けや酒の肴に最高です。冬のギフトやお正月の食卓にも大変喜ばれます。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-700" />
                貴船神社の「水占みくじ」＆「むすび守」
              </h3>
              <p>
                全国に約500社ある貴船神社の総本社。白紙のおみくじをご神水に浮かべると文字が浮かび上がる「水占（みずうら）みくじ」は必見です。また、平安時代の歌人・和泉式部が夫との復縁を祈願して成就したことから、縁結びの神としても名高く、優雅な「むすび守」も大人気です。
              </p>
            </div>
          </div>
        </section>

        {/* Deep Dive Knowledge Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-rose-950 font-bold text-sm tracking-wide bg-rose-100/60 px-3 py-1 rounded-full">
              <ThermometerSun className="w-4 h-4 text-rose-800" />
              水神の森と冬の洛北食文化の深層解説
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              なぜ冬の貴船・鞍馬は「真の京都通」を惹きつけるのか
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
              <Waves className="w-4 h-4 text-rose-700" />
              鴨川の水源を守る水神の森・「気生根（きふね）」に満ちる生気
            </h3>
            <p>
              貴船神社は、京都を潤す鴨川の源流域に鎮座し、古くから水の供給を司る水源の神「高龗神（たかおかみのかみ）」を祀ってきました。「きふね」の地名は古来「気生根」とも書かれ、大地から「気（生命エネルギー）」が生じる根源の地と信じられてきました。冬の冷気の中で雪をまとった巨杉の森に立つと、澄み渡った神聖な空気によって心身が浄化されるような凛とした力強さを実感できます。
            </p>

            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 pt-2">
              <Landmark className="w-4 h-4 text-rose-700" />
              川床から囲炉裏座敷へ・季節の循環を愉しむ料亭旅館のおもてなし
            </h3>
            <p>
              貴船の旅館文化の最大の特徴は、季節に応じた柔軟な空間の演出にあります。大正時代、酷暑の京都を逃れて訪れる文人たちをもてなすために川の上に板を渡したのが「川床」の始まりでした。そして冬になると、川床は解体され、客人は川のせせらぎが聞こえる暖かい座敷や囲炉裏の間へ招かれます。外の厳しい寒さと、部屋の中の温かい炭火やお鍋の湯気。この対比こそが、京都人が最も愛する冬の「ぬくもり」の美学です。
            </p>

            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 pt-2">
              <Flame className="w-4 h-4 text-rose-700" />
              丹波山地のジビエ文化と京料理の出汁技術の究極の結晶
            </h3>
            <p>
              貴船のぼたん鍋が他地域の猪鍋と一線を画すのは、何百年もの歴史を持つ京料理の「出汁（だし）」の洗練度です。利尻昆布と鰹節で丁寧に引いた一番出汁に、京都特有の西京味噌や信州赤味噌、地酒、みりんを絶妙な比率でブレンド。野生の猪肉が持つ力強い脂の甘みを引き立てつつ、最後の一滴まで飲み干せる上品で澄んだ後味に仕上げています。伝統と山里の野趣が融合した、京都洛北ならではの冬の芸術品です。
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-rose-950 font-bold text-sm tracking-wide bg-rose-100/60 px-3 py-1 rounded-full">
              <HelpCircle className="w-4 h-4 text-rose-800" />
              よくある質問
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初冬・厳冬期の貴船・鞍馬旅行 Q&A
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq, idx) => (
              <div key={idx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-rose-700 font-extrabold">Q.</span>
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
          <div className="flex items-center gap-2 text-rose-950 font-bold text-sm tracking-wide">
            <Sparkles className="w-4 h-4 text-rose-800" />
            あわせて読みたい京都・近畿の冬温泉＆美食特集
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            <Link 
              href="/winter-kyoto-arashiyama-onsen-yudofu-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-rose-700 font-bold block text-[10px]">京都・嵐山温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">渡月橋と竹林の小径の冬景色・名物湯豆腐と京都牛会席を味わう温泉旅館</p>
            </Link>
            <Link 
              href="/winter-kyoto-amanohashidate-matsuba-crab-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-rose-700 font-bold block text-[10px]">京都・天橋立</span>
              <p className="font-bold text-stone-800 line-clamp-2">日本三景天橋立の冬絶景と幻の間人ガニ・最高峰松葉ガニづくしの名宿</p>
            </Link>
            <Link 
              href="/winter-shiga-ogoto-onsen-biwako-omigyu-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-rose-700 font-bold block text-[10px]">滋賀・おごと温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">比叡山麓の美肌名湯と琵琶湖ビュー・極上近江牛しゃぶしゃぶを堪能する名宿</p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-kyoto-kifune-kurama-snow-lightup-botannabe-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
