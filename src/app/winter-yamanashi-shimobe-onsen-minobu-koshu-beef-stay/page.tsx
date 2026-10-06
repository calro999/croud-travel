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
  title: "【11・12月山梨・下部温泉＆身延】武田信玄公の隠し湯とぬる湯治・初冬富士山と甲州牛・名物ほうとうを味わう名宿5選",
  description: "11月から12月にかけて、山梨県南部・富士川の支流である下部川沿いに湯けむりを上げる「下部温泉」は、静謐な初冬の空気に包まれます。戦国武将・武田信玄公が川中島の合戦で負った刀傷を癒やしたと伝わる名湯で、古くから湯治場として栄えてきました。最大の特徴は、体温に近い約30度のぬる湯源泉と、適度に温かい高温泉を交互に行き来する「ぬる湯治（交代浴）」。副交感神経を優位にし、身体の芯から疲労と凝りを解き放ちます。近隣には日蓮宗総本山「身延山久遠寺」が鎮座し、初冬の澄み渡る空気の中で厳かな参拝と白銀の富士山遠望が叶います。夕食には山梨の豊かな自然が育んだきめ細やかな霜降り「甲州牛」や「甲州ワインビーフ」の溶岩焼き、手打ちの平打ち麺を根菜と特製味噌で煮込んだ熱々の「名物ほうとう」、手作り身延湯葉など冬の身体を芯から温める逸品揃い。初冬の山梨で心身を解きほぐす厳選名宿5選を詳しく紹介します。",
  keywords: '下部温泉 旅館, 身延山久遠寺 宿泊, 下部ホテル, ホテル守田, 宿坊 山本坊, 元湯 橋本屋, 大黒屋, 武田信玄 隠し湯, ぬる湯治, 甲州牛, ほうとう, 11月 12月 山梨温泉',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-yamanashi-shimobe-onsen-minobu-koshu-beef-stay/"
  },
  openGraph: {
    title: "【11・12月山梨・下部温泉＆身延】武田信玄公の隠し湯とぬる湯治・初冬富士山と甲州牛・名物ほうとうを味わう名宿5選",
    description: "11月から12月にかけて、山梨県南部・富士川の支流である下部川沿いに湯けむりを上げる「下部温泉」は、静謐な初冬の空気に包まれます。戦国武将・武田信玄公が川中島の合戦で負った刀傷を癒やしたと伝わる名湯で、古くから湯治場として栄えてきました。最大の特徴は、体温に近い約30度のぬる湯源泉と、適度に温かい高温泉を交互に行き来する「ぬる湯治（交代浴）」。副交感神経を優位にし、身体の芯から疲労と凝りを解き放ちます。近隣には日蓮宗総本山「身延山久遠寺」が鎮座し、初冬の澄み渡る空気の中で厳かな参拝と白銀の富士山遠望が叶います。夕食には山梨の豊かな自然が育んだきめ細やかな霜降り「甲州牛」や「甲州ワインビーフ」の溶岩焼き、手打ちの平打ち麺を根菜と特製味噌で煮込んだ熱々の「名物ほうとう」、手作り身延湯葉など冬の身体を芯から温める逸品揃い。初冬の山梨で心身を解きほぐす厳選名宿5選を詳しく紹介します。",
    url: 'https://croud-travel.pages.dev/winter-yamanashi-shimobe-onsen-minobu-koshu-beef-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬の下部温泉郷と富士山を望む身延の山並み'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月山梨・下部温泉＆身延】武田信玄公の隠し湯とぬる湯治・初冬富士山と甲州牛・名物ほうとうを味わう名宿5選",
    description: "11月から12月にかけて、山梨県南部・富士川の支流である下部川沿いに湯けむりを上げる「下部温泉」は、静謐な初冬の空気に包まれます。戦国武将・武田信玄公が川中島の合戦で負った刀傷を癒やしたと伝わる名湯で、古くから湯治場として栄えてきました。最大の特徴は、体温に近い約30度のぬる湯源泉と、適度に温かい高温泉を交互に行き来する「ぬる湯治（交代浴）」。副交感神経を優位にし、身体の芯から疲労と凝りを解き放ちます。近隣には日蓮宗総本山「身延山久遠寺」が鎮座し、初冬の澄み渡る空気の中で厳かな参拝と白銀の富士山遠望が叶います。夕食には山梨の豊かな自然が育んだきめ細やかな霜降り「甲州牛」や「甲州ワインビーフ」の溶岩焼き、手打ちの平打ち麺を根菜と特製味噌で煮込んだ熱々の「名物ほうとう」、手作り身延湯葉など冬の身体を芯から温める逸品揃い。初冬の山梨で心身を解きほぐす厳選名宿5選を詳しく紹介します。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function WinterYamanashiShimobePage() {
  const hotels = [
            {
              id: 1,
              name: "山梨県の温泉旅館　下部温泉郷　下部ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/40916/40916.jpg",
              rating: 4.38,
              reviews: 1291,
              price: "¥15,400〜",
              access: "ＪＲ身延線下部温泉駅徒歩１分／車：中部横断道下部温泉早川ＩＣより５分",
              special: "泉質の異なる「三種類の源泉」を、七つの露天風呂を含む大浴場など「十二の湯舟」でご堪能いただけます",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40916%2F40916.html",
              story: "創業昭和4年、下部温泉を代表する格式と広大な日本庭園を誇る「下部ホテル」。かの石原裕次郎氏が療養に訪れた宿としても広く知られています。自慢は敷地内から自噴する「下部温泉共同浸透泉」をはじめとする3つの異なる源泉を引き入れた「ほたるの湯」と「松樹の湯」。桧の巨木をくり抜いた湯船や陶器風呂、庭園露天風呂など多彩な12種の湯舟が揃い、体温とほぼ同じ30度前後の冷鉱泉と、41〜42度の温かい源泉を交互に行き来する伝統の「交代浴」を存分に体験できます。最初はひんやりと感じるぬる湯に20分ほど身を沈めると、不思議と皮膚からジンジンと温もりが湧き上がり、あつ湯に入った瞬間に全身の血管が解放される至福の感覚に包まれます。夕食は山梨の味覚を結集した創作会席。オープンキッチンで焼き上げる特選甲州牛の溶岩焼き、山梨県産ヤマメやアユの塩焼き、甲州名物ほうとうなど、地元の旨味がぎっしり詰まった膳が並びます。夜には迫力満点の下部太鼓ショーと餅つき大会が毎日開催され、初冬の夜景と庭園の静けさとともに忘れられない旅の思い出を刻みます。",
              roomTip: "清流下部川と冬枯れの日本庭園を眼下に望む和モダン客室または露天風呂付き特別室。初冬の澄み切った川風とせせらぎが心地よく、日頃のストレスを忘れさせてくれます。",
              gourmetTip: "「甲州牛溶岩焼き＆手打ちほうとう会席」。きめ細やかな霜降りの甲州牛サーロイン、地元契約農家の冬根菜をじっくり煮込んだ手打ちほうとう鍋、山梨県産地酒の利き酒セット。",
              highlights: [
                "1万坪の広大な自然庭園＆3つの自噴源泉を巡る12種の湯舟と交代浴体験",
                "石原裕次郎氏ゆかりの名門旅館＆毎夜開催の勇壮な信玄出陣太鼓ショー",
                "JR下部温泉駅徒歩1分の好立地＆極上甲州牛の溶岩焼きと手打ちほうとう"
              ]
            },
            {
              id: 2,
              name: "健康・旬彩の宿　下部温泉　ホテル守田",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/2501/2501.jpg",
              rating: 4.41,
              reviews: 259,
              price: "¥9,900〜",
              access: "ＪＲ身延線下部温泉駅下車（送迎車で3分）／中部横断自動車道下部温泉早川ＩＣよりＲ300号経由8分",
              special: "【薬石サウナも人気】あつ湯とぬる湯を交互に楽しむ「武田信玄のかくし湯」が有名",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2501%2F2501.html",
              story: "下部川のせせらぎを聞きながら、温かなおもてなしとこだわりの薬膳・旬菜料理で評判の高い隠れ宿「健康・旬彩の宿 ホテル守田」。過度な華美さを排し、旅人が我が家のように寛げる静かな空間づくりを追求しています。大浴場と風情あふれる檜の露天風呂には、下部の名湯が掛け流されており、肌にまとわりつくようなまろやかな弱アルカリ性単純温泉が初冬の乾燥肌をしっとりと包み込みます。温度の異なる浴槽が用意されているため、自分の身体の調子に合わせてじっくりと長湯が楽しめるのが大きな魅力。夕食は料理長自らが厳選した身延の地場食材をふんだんに使った「旬彩会席」。大豆の旨味が凝縮された身延名物の生湯葉料理、甲州名産の馬刺し、季節の小鍋仕立てなど、胃腸に優しく滋味深い品々が目を楽しませてくれます。初冬の冷え切った身体に染み入る温かな料理と湯浴みは、疲れた現代人に本物の安らぎを与えてくれます。",
              roomTip: "下部川に面した純和風客室。窓を開けると心地よいせせらぎが響き、川向こうの山肌が初冬の淡い夕暮れに染まる静寂のひとときを独占できます。",
              gourmetTip: "「身延湯葉と甲州牛陶板焼き会席」。出来立ての身延湯葉刺し、甲州牛と旬野菜の陶板ステーキ、山梨郷土料理のかぼちゃほうとう小鍋、地元の甲州ワイン。",
              highlights: [
                "下部川のせせらぎを望む露天風呂＆薬膳・身延生湯葉料理の身体想い会席",
                "弱アルカリ性のまろやかな美肌湯＆アットホームで心温まる上質なもてなし",
                "初冬の静かな湯治に最適な隠れ家＆リーズナブルで満足度の高い滞在"
              ]
            },
            {
              id: 3,
              name: "宿坊　山本坊",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/139920/139920.jpg",
              rating: 4.38,
              reviews: 73,
              price: "¥5,500〜",
              access: "ＪＲ身延線　身延駅よりお車にて８分",
              special: "かつて徳川家の宿坊だった【山本坊】。名産の湯葉を使った一品を含む精進料理などをご提供しています。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F139920%2F139920.html",
              story: "日蓮宗の総本山・身延山久遠寺の門前に佇む歴史ある宿坊「宿坊 山本坊」。身延山開山以来、数多の巡礼者や高僧、旅人を温かく迎え入れてきた格式と霊気を漂わせる宿です。一歩足を踏み入れれば、磨き上げられた廊下と手入れの行き届いた日本庭園が広がり、初冬の凛とした静けさが心を洗ってくれます。宿坊ならではの朝のお勤め体験（久遠寺本堂での朝事）への参加が可能で、僧侶たちの厳かな読経と五臓六腑に響く鐘の音は、旅のハイライトとして深い感動を呼び起こします。館内にはゆったりと浸かれる浴場があり、参拝や石段昇降で使った足を優しく解きほぐしてくれます。食事は伝統の精進料理をベースにしつつ、現代の旅行者の口に合うよう工夫された滋味あふれる「山水精進料理」。身延名物の手作り湯葉を幾重にも使った湯葉鍋や湯葉刺し、旬の山の幸の天ぷら、胡麻豆腐など、一口ごとに大豆本来の甘みと職人の技が感じられる極上の味わいです。",
              roomTip: "雪吊りが施された閑静な日本庭園を望む数寄屋造りの和室。静寂の中で木々の梢を揺らす風の音を聞きながら、日常の喧騒から完全に隔絶された瞑想のような時間を過ごせます。",
              gourmetTip: "「山本坊特製 湯葉づくし精進会席」。身延生湯葉の三種盛り、湯葉の豆乳小鍋仕立て、自家製胡麻豆腐の餡掛け、地場野菜の精進揚げ、季節の炊き込みご飯。",
              highlights: [
                "身延山久遠寺門前の由緒ある宿坊＆本堂の朝事勤行参加と本格精進料理",
                "磨き抜かれた木造建築と静寂の庭園＆大豆の甘みが際立つ手作り湯葉鍋",
                "信仰と歴史が息づく非日常空間＆初冬の澄んだ空気の中で行う心のデトックス"
              ]
            },
            {
              id: 4,
              name: "下部温泉　元湯　橋本屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/40448/40448.jpg",
              rating: 4.80,
              reviews: 55,
              price: "¥5,500〜",
              access: "中央自動車道　甲府南ＩＣより車で５０分／東名高速道路　富士ＩＣより車で７０分",
              special: "2種類の温泉で寛ぎ、ごはんを食べて、心身の湯治の旅へ。親しみやすい料金で、長期滞在にも好評♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40448%2F40448.html",
              story: "下部温泉発祥の地とされる旧温泉街の中心に佇み、大正ロマンの風情を今に伝える老舗湯治宿「元湯 橋本屋」。宿の最大の誇りは、敷地内の岩盤から滾々と自噴する歴史ある源泉「元湯」をそのまま引き込んだ浴槽です。泉温約30度のぬる湯は、かすかな硫黄の香りと極めて柔らかな肌あたりを持ち、古くから切り傷や皮膚病、神経痛の名湯として多くの湯治客に愛されてきました。湯守によって徹底管理された浴槽では、加水も循環も一切しない完全掛け流しのぬる湯と、加熱した上がり湯を交互に行き来する本物の湯治スタイルが楽しめます。1時間でも2時間でも心地よく浸かっていられる奇跡のぬる湯は、入浴後も身体の芯に温もりが残り、翌朝の目覚めの軽やかさに驚かされます。夕食は素朴ながらも手の込んだ家庭的な郷土料理膳。富士川の清流で育った川魚の塩焼きや、山梨の恵みたっぷりの煮物、温かいほうとう鍋など、どこか懐かしく温もりのあるもてなしが心を満たします。",
              roomTip: "木の温もりを感じさせる落ち着いた和室。昔ながらの湯治宿の趣を残しながらも清潔に整えられており、静かに読書や思索にふける一人旅や夫婦旅に最適です。",
              gourmetTip: "「湯治元湯会席」。清流岩魚の香ばしい塩焼き、身延湯葉と季節野菜の炊き合わせ、名物かぼちゃほうとう鍋、山梨県産銘柄米のご飯。",
              highlights: [
                "下部発祥の自噴元湯30度ぬる湯完全掛け流し＆大正ロマンの風情漂う老舗",
                "何時間でも浸かれる奇跡のぬる湯治＆清流岩魚の塩焼きと素朴な郷土料理",
                "加水加温なしの純度100%源泉浴＆昔ながらの本物の湯治文化を継承する宿"
              ]
            },
            {
              id: 5,
              name: "下部温泉　元湯旅館　大黒屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/43822/43822.jpg",
              rating: 4.24,
              reviews: 173,
              price: "¥8,800〜",
              access: "JR身延線下部温泉駅よりお車5分",
              special: "■源泉かけ流し温泉■湯治にぴったり！総ひのき風呂と岩風呂・1日2組限定の貸切風呂",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F43822%2F43822.html",
              story: "下部川沿いに位置し、昔ながらの湯治宿の情緒と温かい家族的なもてなしでリピーターの絶えない名湯宿「元湯旅館 大黒屋」。宿の自慢は、地下深くから自噴するアルカリ性単純温泉をそのまま注いだ内湯。ぬる湯とあつ湯の浴槽が並んで配置されており、ぬる湯にじっくり浸かって身体の深部を弛緩させたあと、あつ湯でキュッと身体を引き締める入浴を繰り返すことで、血行が促進され冷え症や疲労が劇的に回復します。初冬の冷え込みが厳しい夜でも、この交互浴を終えた後は湯冷め知らずのポカポカ感が持続します。夕食は地元の旬素材にこだわった家庭的な山里会席。山梨県産の新鮮な川魚のお造りや塩焼き、地元農家から直接届く冬野菜の天ぷら、そして特製の味噌仕立てで煮込む熱々のほうとう鍋が並びます。華美な贅沢ではなく、本物の温泉と身体が喜ぶ食事を求める旅人に心から愛されている実力宿です。",
              roomTip: "川のせせらぎが聞こえる静かな和室。こたつが用意された温かい室内で、初冬の冷気を窓越しに感じながらのんびりと寛ぐことができます。",
              gourmetTip: "「山里の手作り会席膳」。旬の川魚の塩焼き、手作り味噌の具だくさんほうとう鍋、山菜と冬根菜の煮物、山梨の地酒「春鶯囀（しゅんおうてん）」。",
              highlights: [
                "ぬる湯とあつ湯の並び浴槽で血行促進＆家庭的な手作りほうとう山里膳",
                "下部川沿いの静かなロケーション＆冬でも身体の芯から冷えが吹き飛ぶ名湯",
                "リーズナブルな価格設定と手作りの温かみ＆一人旅や湯治長期滞在にも安心"
              ]
            }
  ];

  const faqList = [
  {
    "q": "下部温泉の代名詞「ぬる湯治（交代浴）」とはどのような入浴方法ですか？効果や注意点は？",
    "a": "下部温泉の源泉は約30度前後の冷鉱泉です。ぬる湯治とは、まず30度のぬる湯に15〜30分ほどじっくりと浸かり、副交感神経を優位にして筋肉の緊張をほぐしたあと、41〜42度の加温浴槽（あつ湯）に2〜3分浸かって血行を促進させる入浴法です。これを2〜3回繰り返すことで自律神経が整い、毛細血管が拡張して冷え性や慢性疲労、関節痛が劇的に緩和されます。ぬる湯に入り始めた直後は少し肌寒く感じられますが、数分で身体の芯からポカポカとした温もりが湧き上がってきます。長湯による脱水を防ぐため、入浴前後の水分補給を十分に行ってください。"
  },
  {
    "q": "11月・12月の下部温泉・身延エリアの気温や積雪、車でのアクセス時の注意点は？",
    "a": "下部温泉や身延山は山梨県南部に位置し、富士川沿いの谷あいにあります。11月の日中気温は12〜16℃前後ですが、朝晩は3〜6℃まで冷え込みます。12月に入ると最高気温も8〜11℃程度、夜間は氷点下に達する日が増えます。南部に位置するため豪雪地帯ではありませんが、12月中旬以降は峠道や山間部の日陰で路面凍結が発生することがあります。車でアクセスする場合は、中部横断自動車道（下部温泉早川IC利用）を利用するのが最も安全ですが、12月は念のためスタッドレスタイヤの装着をおすすめします。"
  },
  {
    "q": "身延山久遠寺への参拝方法や所要時間、見どころを教えてください。",
    "a": "身延山久遠寺は日蓮宗の総本山で、下部温泉から車で約15〜20分、または路線バスでアクセスできます。国の登録有形文化財である巨大な「三門」から本堂へ続く287段の石段「菩提梯（ぼだいてい）」は圧巻で、登り切ると悟りの境地に達すると言われます（足腰に不安のある方は無料の斜行エレベーターも利用可能）。本堂の天井に描かれた加山又造画伯の「黒龍」や五重塔は見逃せません。さらに身延山ロープウェイで登る山頂（標高1,153m）の奥之院思親閣からは、初冬の澄み渡る空気の中に富士山の雄大な白銀の姿を一望できます。参拝の所要時間は門前から山頂まで含めて約2〜3時間が目安です。"
  },
  {
    "q": "11月・12月の下部温泉で絶対に味わうべき山梨の名物グルメは何ですか？",
    "a": "初冬の山梨で主役となるのは、何と言っても熱々の「名物ほうとう」です。平打ちの幅広うどんを、カボチャや大根、白菜、キノコなどの冬根菜とともに特製合わせ味噌で煮込んだ郷土鍋は、冷えた身体に染み渡る極上の美味しさです。また、きめ細やかなサシと芳醇な風味が自慢の銘柄牛「甲州牛」や、ワインの搾りかすを飼料に育った「甲州ワインビーフ」のステーキ・すき焼きも絶品。身延町名物の大豆の旨味が凝縮された「身延湯葉（ゆば）」の刺身や豆乳鍋、冬に熟成が進む甲州ワインとのペアリングも格別です。"
  },
  {
    "q": "東京や静岡・名古屋方面からの電車でのアクセス方法は？",
    "a": "東京方面からは、JR新宿駅から中央線特急「あずさ」「かいじ」で甲府駅まで約1時間30分、甲府駅から身延線の特急「ふじかわ」に乗り換えて約40分でJR下部温泉駅に到着します。また、静岡・新富士方面からは、東海道新幹線静岡駅から特急「ふじかわ」で約1時間直通です。名古屋方面からも新幹線で静岡経由、または中央西線・塩尻経由でアクセス可能。下部温泉駅からは主要旅館へ徒歩1〜10分圏内と非常に近く、雪道の心配がない電車旅にも最適な温泉地です。"
  }
];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://croud-travel.pages.dev/winter-yamanashi-shimobe-onsen-minobu-koshu-beef-stay#article',
        'isPartOf': {
          '@type': 'WebSite',
          '@id': 'https://croud-travel.pages.dev/#website',
          'name': 'クラドトラベル',
          'url': 'https://croud-travel.pages.dev/'
        },
        'headline': "【11・12月山梨・下部温泉＆身延】武田信玄公の隠し湯とぬる湯治・初冬富士山と甲州牛・名物ほうとうを味わう名宿5選",
        'description': "11月から12月にかけて、山梨県南部・富士川の支流である下部川沿いに湯けむりを上げる「下部温泉」は、静謐な初冬の空気に包まれます。戦国武将・武田信玄公が川中島の合戦で負った刀傷を癒やしたと伝わる名湯で、古くから湯治場として栄えてきました。最大の特徴は、体温に近い約30度のぬる湯源泉と、適度に温かい高温泉を交互に行き来する「ぬる湯治（交代浴）」。副交感神経を優位にし、身体の芯から疲労と凝りを解き放ちます。近隣には日蓮宗総本山「身延山久遠寺」が鎮座し、初冬の澄み渡る空気の中で厳かな参拝と白銀の富士山遠望が叶います。夕食には山梨の豊かな自然が育んだきめ細やかな霜降り「甲州牛」や「甲州ワインビーフ」の溶岩焼き、手打ちの平打ち麺を根菜と特製味噌で煮込んだ熱々の「名物ほうとう」、手作り身延湯葉など冬の身体を芯から温める逸品揃い。初冬の山梨で心身を解きほぐす厳選名宿5選を詳しく紹介します。",
        'inLanguage': 'ja',
        'mainEntityOfPage': 'https://croud-travel.pages.dev/winter-yamanashi-shimobe-onsen-minobu-koshu-beef-stay',
        'datePublished': '2026-09-29T00:00:00+09:00',
        'dateModified': '2026-09-29T00:00:00+09:00',
        'publisher': {
          '@type': 'Organization',
          'name': 'クラドトラベル編集部',
          'url': 'https://croud-travel.pages.dev/'
        }
      },
      {
        '@type': 'TouristDestination',
        '@id': 'https://croud-travel.pages.dev/winter-yamanashi-shimobe-onsen-minobu-koshu-beef-stay#destination',
        'name': '山梨・下部温泉＆身延',
        'description': '山梨県南巨摩郡身延町の富士川支流に湧く名湯。武田信玄公の隠し湯として伝わるぬる湯あつ湯交互浴と身延山久遠寺の厳かな初冬参拝、極上甲州牛や名物ほうとうが魅力。',
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 35.4261,
          'longitude': 138.4839
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://croud-travel.pages.dev/winter-yamanashi-shimobe-onsen-minobu-koshu-beef-stay#faq',
        'mainEntity': faqList.map((f) => ({
          '@type': 'Question',
          'name': f.q,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': f.a
          }
        }))
      },
      {
        '@type': 'ItemList',
        '@id': 'https://croud-travel.pages.dev/winter-yamanashi-shimobe-onsen-minobu-koshu-beef-stay#hotellist',
        'name': '山梨・下部温泉＆身延のおすすめ名宿5選',
        'itemListElement': hotels.map((h, idx) => ({
          '@type': 'ListItem',
          'position': idx + 1,
          'name': h.name,
          'url': h.url
        }))
      }
    ]
  };


  return (
    <article className="min-h-screen bg-gradient-to-b from-stone-50 via-amber-50/20 to-stone-50 text-stone-800 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-r from-stone-950 via-slate-900 to-amber-950 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative max-w-5xl mx-auto space-y-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-amber-200">
            <Link href="/" className="hover:underline hover:text-white transition">ホーム</Link>
            <span>/</span>
            <Link href="/features" className="hover:underline hover:text-white transition">特集一覧</Link>
            <span>/</span>
            <span className="text-white font-medium">山梨・下部温泉＆身延</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-200 text-xs sm:text-sm font-semibold tracking-wide">
            <ThermometerSun className="w-4 h-4 text-amber-300" />
            11月・12月 信玄公の隠し湯「ぬる湯治」と初冬富士山・甲州牛特集
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【11・12月山梨・下部温泉＆身延】武田信玄公の隠し湯とぬる湯治
            <span className="block text-amber-300 text-lg sm:text-2xl mt-3 font-normal">
              初冬富士山の絶景・自噴源泉の交互浴と極上甲州牛・名物ほうとうを味わう名宿5選
            </span>
          </h1>

          <p className="text-sm sm:text-base text-stone-200 leading-relaxed max-w-4xl">
            11月から12月にかけて、山梨県南部・富士川の支流である下部川沿いに湯けむりを上げる「下部温泉」は、静謐な初冬の空気に包まれます。戦国武将・武田信玄公が川中島の合戦で負った刀傷を癒やしたと伝わる名湯で、古くから湯治場として栄えてきました。最大の特徴は、体温に近い約30度のぬる湯源泉と、適度に温かい高温泉を交互に行き来する「ぬる湯治（交代浴）」。副交感神経を優位にし、身体の芯から疲労と凝りを解き放ちます。近隣には日蓮宗総本山「身延山久遠寺」が鎮座し、初冬の澄み渡る空気の中で厳かな参拝と白銀の富士山遠望が叶います。夕食には山梨の豊かな自然が育んだきめ細やかな霜降り「甲州牛」や「甲州ワインビーフ」の溶岩焼き、手打ちの平打ち麺を根菜と特製味噌で煮込んだ熱々の「名物ほうとう」、手作り身延湯葉など冬の身体を芯から温める逸品揃い。初冬の山梨で心身を解きほぐす厳選名宿5選を詳しく紹介します。
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs sm:text-sm text-amber-200">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>ベストシーズン: 11月中旬〜12月下旬（澄み切った富士山眺望・身延山初冬紅葉の余韻と新酒）</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Utensils className="w-4 h-4 text-amber-300" />
              <span>旬の味覚: 特選甲州牛溶岩焼き・手打ちかぼちゃほうとう・身延生湯葉・甲州地酒と新酒ワイン</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Waves className="w-4 h-4 text-amber-300" />
              <span>泉質: アルカリ性単純温泉・単純硫黄温泉（30度の自噴ぬる湯＆あつ湯交互浴）</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-amber-800 text-sm font-bold bg-amber-50 px-3 py-1 rounded-full">
            <Sparkles className="w-4 h-4" />
            11月・12月の甲斐南部の旅情
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            信玄公の傷を癒やした奇跡のぬる湯・身延の静寂と富士の峰を望む初冬の隠れ里
          </h2>
          <div className="text-stone-600 space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              山梨県南部、甲府盆地を抜けて富士川沿いに南下すると、山紫水明の美しい渓谷美の中にひっそりと佇む「下部温泉」に辿り着きます。歴史は古く、平安時代の開湯伝説に始まり、戦国時代には甲斐の虎・武田信玄公が川中島の戦いで受けた太刀傷を癒やすために滞在した「隠し湯」として天下にその名を轟かせました。さらに昭和の時代には文豪・井伏鱒二や大スター・石原裕次郎が療養のために長期逗留し、数々の名作や快復のエピソードを生み出したことでも知られています。
            </p>
            <p>
              下部温泉の最大の特徴であり、温泉通を虜にしてやまないのが「ぬる湯治（交代浴）」の文化です。地下の岩盤から滾々と自噴する源泉は、泉温約30度前後の冷鉱泉。最初はひんやりとした清涼感を覚えますが、じっと湯船に浸かっていると、皮膚の毛穴から細やかな気泡が付着し、15分ほどで身体の深部からじわじわと心地よい温もりが込み上げてきます。このぬる湯で副交感神経を優位にして全身の筋肉を弛緩させたあと、41〜42度前後の加温浴槽（あつ湯）へ移ると、全身の毛細血管が一気に拡張し、鳥肌が立つほどの爽快感と極上のリラックスが訪れます。
            </p>
            <p>
              11月から12月にかけての初冬は、下部温泉を訪れるのに最も適した季節の一つです。夏の猛暑が去り、澄み渡る冷涼な空気に包まれるこの時期、ぬる湯とあつ湯の温度差がもたらす交代浴の効果は格段に高まります。また、車でわずか15分ほどの距離にある日蓮宗総本山「身延山久遠寺」では、287段の石段「菩提梯」を登り、身延山ロープウェイで登る標高1,153mの山頂から、初冠雪をまとった神々しい白銀の富士山をクリアに見渡すことができます。
            </p>
            <p>
              湯上がりの夕食には、甲州の豊かな大地が育んだご馳走が待っています。きめ細やかな霜降りと上品な甘みが際立つ「甲州牛」や「甲州ワインビーフ」の溶岩焼き、富士川水系の清流で育ったアユやヤマメの塩焼き、大豆本来の甘みが凝縮された身延名物の「生湯葉」。そして冷え切った身体を温めてくれるのが、かぼちゃや季節の冬野菜がたっぷり入った熱々の「名物ほうとう」です。山梨が誇る勝沼ワインの新酒や地酒「春鶯囀」とともに味わえば、心も身体も芯から満たされる至福の冬夜が約束されます。
            </p>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-amber-800 text-sm font-bold bg-amber-50 px-3 py-1 rounded-full">
              <Mountain className="w-4 h-4" />
              厳選宿泊施設
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              山梨・下部温泉＆身延 11月・12月に泊まるべき名宿5選
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm">
              自噴源泉のぬる湯あつ湯交代浴、歴史ある名門宿や由緒ある宿坊、甲州牛会席を備えた極上の宿を厳選
            </p>
          </div>

          <div className="space-y-8">
            {hotels.map((h) => (
              <div 
                key={h.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xs border border-stone-200 transition hover:shadow-md"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Hotel Image */}
                  <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
                    <img
                      src={h.img}
                      alt={h.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span>★ {h.rating}</span>
                      <span className="text-stone-300">({h.reviews}件)</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-stone-950/90 via-stone-950/60 to-transparent p-3 rounded-xl text-white">
                      <p className="text-xs text-amber-200 font-semibold">参考最低料金（1名あたり）</p>
                      <p className="text-lg font-black text-amber-300">{h.price}</p>
                    </div>
                  </div>

                  {/* Hotel Content */}
                  <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md inline-block mb-2">
                          厳選第{h.id}位
                        </span>
                        <h3 className="text-lg sm:text-2xl font-bold text-stone-900 leading-snug">
                          {h.name}
                        </h3>
                        <p className="text-xs text-stone-500 flex items-center gap-1 mt-1.5">
                          <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                          <span>{h.access}</span>
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {h.story}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1.5 bg-stone-50 p-4 rounded-2xl border border-stone-100">
                        <p className="text-xs font-bold text-stone-700 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-amber-700" />
                          この宿の注目ポイント
                        </p>
                        <ul className="text-xs text-stone-600 space-y-1 pl-5 list-disc">
                          {h.highlights.map((hl, hlIdx) => (
                            <li key={hlIdx}>{hl}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Tips */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="bg-amber-50/50 p-3 rounded-xl border border-amber-100 space-y-1">
                          <p className="font-bold text-amber-900 flex items-center gap-1">
                            <Eye className="w-3.5 h-3.5 text-amber-700" />
                            おすすめ客室
                          </p>
                          <p className="text-stone-600">{h.roomTip}</p>
                        </div>
                        <div className="bg-orange-50/50 p-3 rounded-xl border border-orange-100 space-y-1">
                          <p className="font-bold text-orange-900 flex items-center gap-1">
                            <Utensils className="w-3.5 h-3.5 text-orange-700" />
                            名物グルメ
                          </p>
                          <p className="text-stone-600">{h.gourmetTip}</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-amber-800 to-stone-900 hover:from-amber-900 hover:to-stone-950 text-white font-bold text-sm rounded-xl shadow-xs hover:shadow-md transition duration-200"
                      >
                        <span>空室状況・宿泊プランを楽天トラベルで確認</span>
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
            初冬の甲斐美食手帖
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            11月・12月の山梨・身延で味わい尽くす極上グルメと冬の恵み
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400" />
                最高峰銘柄「甲州牛＆ワインビーフ」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                名峰富士と南アルプスに囲まれた大自然の中で肥育される黒毛和牛「甲州牛」。きめ細やかな霜降りと上品な脂の甘みが特徴で、溶岩プレートで香ばしく焼き上げるステーキやすき焼きは、口の中でとろけるような至福の食感をもたらします。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-amber-400" />
                熱々の山梨ソウルフード「名物ほうとう」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                平打ちの太麺を、ホクホクのカボチャや里芋、大根、キノコなどの冬根菜と一緒に特製味噌仕立ての出汁でじっくり煮込んだ冬の代表料理。煮崩れたカボチャが出汁に溶け込み、濃厚で優しい甘みが身体の芯まで染み渡ります。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                門前町伝統の味「身延手作り生湯葉」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                身延山久遠寺の開山以来、精進料理の貴重なタンパク源として受け継がれてきた伝統の湯葉。厳選された国産大豆と身延の清らかな湧水から作られる生湯葉は、幾重にも重なる層の豊かな歯ざわりと濃厚な大豆の甘みが絶品です。
              </p>
            </div>
          </div>
        </section>

        {/* Access & Travel Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-amber-800 text-sm font-bold bg-amber-50 px-3 py-1 rounded-full">
            <Compass className="w-4 h-4" />
            旅の計画ガイド
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            11月・12月の下部温泉＆身延 交通アクセス＆観光のポイント
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-700" />
                電車・特急「ふじかわ」利用の快適アクセス
              </h3>
              <p>
                東京方面からはJR新宿駅から中央線特急で甲府駅へ（約1時間30分）、身延線特急「ふじかわ」に乗り換えて約40分でJR下部温泉駅に到着します。
              </p>
              <p>
                静岡方面からは東海道新幹線静岡駅から特急「ふじかわ」で約1時間直通。下部温泉駅周辺は雪が比較的少なく、主要旅館へも徒歩または送迎でスムーズに到着できるため、冬の雪道運転を避けたい方に最適です。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-amber-700" />
                ぬる湯治（交代浴）の正しい作法と湯冷め予防
              </h3>
              <p>
                30度前後のぬる湯に入る際は、かけ湯をしっかり行って身体を慣らしてから入浴します。15〜20分ほどゆっくり浸かることで副交感神経が働き、深いリラックス効果が得られます。
              </p>
              <p>
                ぬる湯から出た後は、41〜42度の加温浴槽に2〜3分浸かって身体をしっかり温めてから上がりましょう。浴後は水分を拭き取り、厚手の浴衣や靴下で保温することで、夜まで温もりが持続します。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-amber-800 text-sm font-bold bg-amber-50 px-3 py-1 rounded-full">
            <HelpCircle className="w-4 h-4" />
            よくある質問
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            初冬の山梨・下部温泉＆身延旅行 FAQ
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
              あわせて読みたい山梨・富士山麓の冬温泉特集
            </h3>
            <p className="text-xs sm:text-sm text-amber-200">
              富士山の絶景と名湯、極上の甲州ワイン・甲州牛会席を満喫する厳選旅ガイド
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-yamanashi-isawa-onsen-wine-koshu-beef-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">山梨・石和温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                石和温泉の美肌湯と甲州ワイン・甲州牛会席
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                甲府盆地の名湯と冬のワイナリー巡り、極上甲州牛すき焼きを堪能する冬旅。
              </p>
            </Link>

            <Link 
              href="/winter-yamanashi-kawaguchiko-onsen-fuji-view-koshu-beef-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">山梨・河口湖温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                富士山を望む絶景露天風呂と甲州ワインビーフ
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                初冬の澄み渡る湖畔から仰ぎ見る白銀富士と極上温泉リゾートの贅沢ステイ。
              </p>
            </Link>

            <Link 
              href="/winter-kanagawa-hakone-fuji-view-onsen-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">神奈川・箱根温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                箱根の富士見露天風呂と冬の美食名宿
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                初冬の芦ノ湖と雄大な富士山を望む名湯、伝統の懐石料理と癒やしの湯浴み。
              </p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-yamanashi-shimobe-onsen-minobu-koshu-beef-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
