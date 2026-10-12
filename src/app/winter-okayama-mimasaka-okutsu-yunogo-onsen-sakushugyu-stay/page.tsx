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
  title: '岡山・美作三湯奥津で過ごす冬の旅（11・12月）！清流奥津渓の初冬雪景色と美肌！名宿5選',
  description: '11月から12月にかけて、中国山地の懐に抱かれた岡山県北部・美作（みまさか）地方は、澄み切った冬空と初雪の山並みに包まれる静寂の温泉シーズンを迎えます。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '奥津温泉 宿泊, 湯郷温泉 旅館, 奥津荘, ポピースプリングス, 季譜の里, ゆのごう館, 米屋倶楽部, 作州牛, 津山そずり鍋, 美肌の湯, 11月 12月 岡山温泉',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-okayama-mimasaka-okutsu-yunogo-onsen-sakushugyu-stay/"
  },
  openGraph: {
    title: '岡山・美作三湯奥津で過ごす冬の旅（11・12月）！清流奥津渓の初冬雪景色と美肌！名宿5選',
    description: '11月から12月にかけて、中国山地の懐に抱かれた岡山県北部・美作（みまさか）地方は、澄み切った冬空と初雪の山並みに包まれる静寂の温泉シーズンを迎えます。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-okayama-mimasaka-okutsu-yunogo-onsen-sakushugyu-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬の吉井川と奥津温泉の湯煙'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "岡山・美作三湯奥津＆湯郷温泉で過ごす冬の旅（11・12月）！清流奥津渓の初冬雪景色と美肌ぬる湯・極上作州牛＆津山そずり鍋を堪能する名宿5選",
    description: "11月から12月にかけて、中国山地の懐に抱かれた岡山県北部・美作（みまさか）地方は、澄み切った冬空と初雪の山並みに包まれる静寂の温泉シーズンを迎えます。中国地方を代表する名湯地帯「美作三湯（みまさかさんとう）」の中でも、吉井川の清流沿いに湧く「奥津温泉（おくつおんせん）」は、川底の岩盤から自噴する極上の足元湧出泉「鍵湯」や伝統の「足踏み洗濯」で知られる美肌の名湯。一方、白鷺が傷を癒やした伝説が残る「湯郷温泉（ゆのごうおんせん）」は、宮本武蔵の生誕地近くに位置し、肌をしっとり潤すナトリウム・カルシウム-塩化物泉が湯客を優しく温めます。初冬の冷気の中で楽しむ渓流雪見露天、夕食には岡山が誇る最高峰の黒毛和牛「作州牛（さくしゅうぎゅう）」のステーキや陶板焼き、骨まわりの旨味肉を冬野菜と煮込む津山伝統の熱々「そずり鍋」、美作の地酒。大人の贅沢な冬の湯治旅にふさわしい厳選名宿5選を徹底解説します。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function WinterOkayamaMimasakaPage() {
  const hotels = [
            {
              id: 1,
              name: "登録有形文化財の宿　奥津温泉　名泉鍵湯　奥津荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/19734/19734.jpg",
              rating: 4.58,
              reviews: 336,
              price: "¥29,700〜",
              access: "ＪＲ津山駅よりバス60分／中国自動車道院庄ＩＣよりＲ179号　北上約25分",
              special: "登録有形文化財の小規模高級宿でリフレッシュ！歴史を重ねた大人限定の宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19734%2F19734.html",
              story: "昭和初期に建築された格調高い木造建築が国の登録有形文化財に指定され、全国の温泉通が羨望の眼差しを向ける奥津温泉屈指の名旅館「名泉鍵湯 奥津荘（おくつのしょう）」。館内に足を踏み入れると、磨き抜かれた欅の階段やアンティークガラスが温かな陰影を落とし、まるで時が止まったかのような静謐な空間が広がります。宿の真骨頂は、浴槽の底の岩盤から生まれたての源泉がぷくぷくと自然自噴する足元湧出の天然岩風呂「鍵湯（かぎゆ）」。かつて津山藩主・森忠政公がその効能の高さを独占するために鍵をかけて一般の立ち入りを禁じたことから名付けられた霊泉は、加水・加温・循環を一切行わず、空気に一度も触れることなく肌を包み込みます。アルカリ性単純温泉の柔らかな湯触りはまるで上質な化粧水のよう。夕食は美作の旬の山里の恵みを美しく昇華させた本格会席。選び抜かれたA5ランク作州牛の網焼きや、初冬の寒鮎、津山名物のそずり鍋仕立てなど、器から盛り付けまで美意識が息づく料理が並びます。",
              roomTip: "吉井川の清流を望む登録有形文化財の本館和室または露天風呂付き離れ客室。窓の外に広がる奥津渓の初冬景色と川のせせらぎを聞きながら、極上の静寂を味わえます。",
              gourmetTip: "「奥津荘・美作厳選懐石」。A5ランク作州牛の炭火網焼き、吉井川源流岩魚のお造り、津山伝統そずり肉の小鍋、岡山県産朝日米の釜炊きご飯、美作地酒「御前酒」。",
              highlights: [
                "国の登録有形文化財建築＆川底から自然自噴する奇跡の足元湧出天然岩風呂「鍵湯」",
                "pH8.4のアルカリ性極上化粧水風呂＆A5ランク作州牛の炭火網焼き懐石料理",
                "津山藩主が愛した歴史の息づく最高峰の隠れ宿＆静寂の奥津渓で味わう大人の贅"
              ]
            },
            {
              id: 2,
              name: "湯郷温泉　ポピースプリングス　リゾート＆スパ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/17794/17794.jpg",
              rating: 4.37,
              reviews: 976,
              price: "¥6,600〜",
              access: "【毎日運行】JR岡山駅西口より送迎バスにて90分（無料・要予約）",
              special: "☆ミシュランガイド京都・大阪＋岡山２０２１掲載☆アロマが香る女性に人気のカリフォルニアスタイルホテル",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17794%2F17794.html",
              story: "湯郷温泉街の入口に位置し、南カリフォルニアをイメージした優雅なアロマとオーガニックな寛ぎが融合する人気リゾートホテル「ポピースプリングス リゾート＆スパ」。プロヴァンス風の温かみある館内には心地よいハーブの香りが漂い、女性旅やカップルの冬ごもりステイに絶大な支持を得ています。宿自慢のスパ温泉フロアには、湯郷温泉の上質な塩化物泉を贅沢に引き込んだジャグジーバスやスチームサウナ、アロマ香るヒーリングバスを完備。柔らかな湯に包まれてじっくり発汗することで、日頃のストレスや冷えが心地よく解消されていきます。夕食は地元の提携オーガニック農家から毎朝届く旬の冬野菜と、岡山県産黒毛和牛をふんだんに使った極上のフレンチジャポネ会席コース。フレンチの繊細な技法と和の出汁が調和した料理の数々は、目にも鮮やかで身体の内側からキレイになれる美食体験を提供します。",
              roomTip: "天蓋付きベッドを備えたジュニアスイートまたはハリウッドツイン。ヨーロッパの邸宅のような洗練されたインテリアで、日常を離れた優雅な時間を過ごせます。",
              gourmetTip: "「美作オーガニック・フレンチジャポネ」。岡山県産黒毛和牛フィレ肉の低温ロースト、有機冬野菜のバーニャカウダ、作州鹿肉のポワレ、自家製天然酵母パン。",
              highlights: [
                "カリフォルニア調アロマとハーブが薫る癒やしのスパリゾート＆本格エステ",
                "契約有機農家の冬野菜と岡山県産黒毛和牛を味わうフレンチジャポネコース",
                "女性旅やカップルのおこもり旅行に絶大な人気＆洗練された洋室空間"
              ]
            },
            {
              id: 3,
              name: "美作三湯　湯郷温泉　季譜の里",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/17492/17492.jpg",
              rating: 4.67,
              reviews: 762,
              price: "¥14,784〜",
              access: "姫新線・林野駅～車７分／中国自動車道・美作ＩＣ～10分／山陽自動車道・和気ＩＣより50分／送迎あり。お問合わせください。",
              special: "女性に人気のリラックス宿。館内７６箇所の生け花、全館畳敷きのフロアでおもてなしいたします。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17492%2F17492.html",
              story: "全館に畳が敷き詰められ、館内の至るところに可憐な野の花が生けられた湯郷温泉屈指の高級和風旅館「季譜の里（きふのさと）」。素足で歩く心地よい畳敷きの館内は、どこか温かい我が家に帰ってきたような寛ぎを感じさせます。宿の温泉は、薬効高い湯郷の名湯に生薬やハーブを調合した名物「薬草風呂」や、巨石を配した野趣あふれる露天風呂、庭園を望む大浴場など多彩。初冬の冷たい風を感じながら露天風呂に浸かれば、肌をしっとりと包み込む弱アルカリ性の湯が乾燥した冬の肌をみずみずしく蘇らせてくれます。夕食は料理長が岡山各地の契約生産者を巡って集める「旬彩里山料理」。選び抜かれた作州牛の石焼きやしゃぶしゃぶ、日本原の高原野菜、初冬の瀬戸内海から届く鰆（さわら）や牡蠣など、岡山の山と海の恵みが贅沢に盛り込まれ、心温まる至福の晩餐が楽しめます。",
              roomTip: "露天風呂付き客室または和モダンツイン。プライベートな温泉露天風呂から初冬の星空を眺め、静寂の中で誰にも気兼ねなくおこもりステイを堪能できます。",
              gourmetTip: "「旬彩里山会席・冬の贅」。特選作州牛の石焼きステーキ、瀬戸内産寒鰆のたたき、美作名物そずり鍋の小鍋仕立て、地元の名酒「大正の鶴」の生酒。",
              highlights: [
                "全館畳敷きの温もりと季節の野の花＆名物薬草風呂と作州牛の旬彩里山料理",
                "美作の地酒と瀬戸内寒魚・作州牛の贅沢会席＆プライベート露天付き客室",
                "上質なおもてなしと細やかな気配り＆特別な記念日旅行や親孝行旅に最高峰"
              ]
            },
            {
              id: 4,
              name: "ゆのごう館　Ｗｉｌｌ　Ｂｅ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/50540/50540.jpg",
              rating: 3.62,
              reviews: 664,
              price: "¥5,500〜",
              access: "ＪＲ神姫線「林野駅」より車で約１０分",
              special: "大浴場露天風呂金土のみ利用可",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F50540%2F50540.html",
              story: "美作三湯・湯郷温泉の老舗としての伝統を誇り、落ち着いた現代和風の佇まいと真心のこもったもてなしでリピーターを集める「ゆのごう館 Will Be」。館内には季節の絵画や工芸品が飾られ、落ち着いた旅情を演出しています。大浴場と露天風呂には、湯郷の豊富な天然温泉が湛えられ、湯船から立ち上る湯煙が冷えた身体を優しく包み込みます。無色透明でさらりとした感触のお湯は、湯上がりに身体の芯からぽかぽかとした温もりが長く続くのが特徴。初冬の澄み渡る夜空を仰ぎながら浸かる露天風呂は格別の心地よさです。夕食は料理長が腕によりをかけて仕立てる月替わりの季節会席。岡山県産黒毛和牛の陶板焼きをメインに、旬の刺身盛り合わせや、津山名物のそずり肉を使った温かい鍋料理など、ボリュームと味わいのバランスが見事なご馳走が揃い、美作の銘酒とともにゆったりと楽しめます。",
              roomTip: "日本庭園を望む落ち着いた数寄屋風和室。障子越しに差し込む柔らかな光と冬庭の静けさに包まれ、のんびりと寛げる王道の和風客室です。",
              gourmetTip: "「岡山味覚づくし会席」。岡山県産牛の陶板焼き、津山名物そずり肉と冬根菜の味噌仕立て鍋、旬魚のお造り三種盛り、蒜山高原大根の炊き合わせ、岡山県産米のご飯。",
              highlights: [
                "湯郷温泉の老舗としての真心のもてなし＆身体の芯から温まる塩化物泉と庭園露天",
                "岡山県産牛の陶板焼きと津山名物そずり鍋＆リーズナブルで安心の温泉ステイ",
                "広々とした純和室と落ち着いた空間設計＆湯郷温泉街の散策にも好立地"
              ]
            },
            {
              id: 5,
              name: "奥津温泉　奇蹟の湯　米屋倶楽部",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/19368/19368.jpg",
              rating: 3.83,
              reviews: 528,
              price: "¥6,900〜",
              access: "JR因美線 津山駅より奥津温泉行「奥津温泉バス停」下車／中国道 院庄ICより車で179号線にて鳥取方面に30分",
              special: "自家源泉の宿■スイート和洋室、貸切風呂、わんちゃんと一緒の半露天風呂付客室も人気■ドッグラン無料■",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19368%2F19368.html",
              story: "奥津温泉の吉井川を見下ろす高台に建ち、美肌効果抜群の自慢の自家源泉を心ゆくまで堪能できるモダンリゾート「奥津温泉 奇蹟の湯 米屋倶楽部」。宿の最大の誇りは、pH9.2という高いアルカリ度を誇る純度100%の自家源泉。石鹸いらずと言われるほど肌がつるつるになることから「奇蹟の湯」と呼ばれ、湯上がりの肌のなめらかさは女性客から絶賛されています。大浴場や露天風呂からは、初冬の静まり返る奥津の山並みと渓流の自然美を一望。冷たい空気の中で湯船に浸かれば、とろみのある湯が身体のすみずみまで解きほぐしてくれます。夕食は岡山県北の食材をふんだんに盛り込んだ創作和洋会席。柔らかくジューシーな作州牛のステーキや、新鮮なヤマメの塩焼き、季節の天ぷらなど、地元の味覚をふんだんに取り入れた料理が並び、心地よい旅の宵を満喫できます。",
              roomTip: "渓谷と山並みを望むモダン和洋室。大きな窓から初冬の自然パノラマを眺められ、シモンズ製ベッドでぐっすりと旅の疲れを癒やせます。",
              gourmetTip: "「作州味覚の創作和洋膳」。作州牛サーロインステーキ、奥津清流ヤマメの炭火塩焼き、冬野菜の揚げたて天ぷら、美作産黒豆のデザート、地元蔵元の辛口地酒。",
              highlights: [
                "pH9.2の驚異の美肌効果を誇る自家源泉「奇蹟の湯」＆吉井川を望む高台パノラマ",
                "石鹸いらずのつるつる美肌湯掛け流し＆作州牛ステーキとヤマメ塩焼きの創作会席",
                "大自然に抱かれたリフレッシュ空間＆シモンズ社製ベッドで快眠を約束"
              ]
            }
  ];

  const faqList = [
  {
    "q": "11月・12月の奥津温泉・湯郷温泉の積雪状況や気候、冬道運転の注意点は？",
    "a": "岡山県北部の美作地方は、南部の瀬戸内海側と異なり山陰・中国山地の気候に近くなります。特に標高の高い奥津温泉（鏡野町）は、例年11月下旬頃に初雪が降り、12月中旬以降は雪が積もる日が増えます。11月の気温は最高12〜16℃、最低3〜6℃前後ですが、12月は日中でも6〜9℃、早朝や夜間は氷点下まで冷え込みます。中国自動車道院庄ICから国道179号で奥津へ向かうルートは、12月に入ると路面凍結や積雪が発生するためスタッドレスタイヤ装着が必須です。一方、美作市の湯郷温泉は奥津温泉より積雪が少ないものの、早朝の橋の上や日陰での凍結があるため、冬用タイヤでの来訪が安心です。"
  },
  {
    "q": "岡山駅や津山駅からのアクセス方法は？車がない場合の公共交通機関は？",
    "a": "岡山駅からはJR津山線の快速「ことぶき」等でJR津山駅まで約1時間〜1時間15分。津山駅前バスターミナルからは、奥津温泉方面へ中鉄北部バス（奥津温泉・石越行）が運行しており約50分でアクセスできます。湯郷温泉へは津山駅またはJR林野駅から宇野バスや美作共同バスが運行しており、林野駅からは車で約8分、津山駅からはバスで約40分です。また「ポピースプリングス」や「季譜の里」など一部旅館では最寄り駅からの送迎サービスを実施している場合があるため、事前予約時に確認するとスムーズです。"
  },
  {
    "q": "奥津温泉名物の「足踏み洗濯」とは？冬でも見学や体験はできますか？",
    "a": "足踏み洗濯は、吉井川の川原に湧き出る露天風呂で、かつて地元の女性たちが熊や狼などの猛獣を警戒して周囲を見張りながら、立ったまま足で洗濯物を踏み洗ったことから始まった奥津温泉独特の伝統風俗です。絣の着物に赤い襷（たすき）を掛けた女性たちが奥津小唄に合わせてリズミカルに洗濯を行う実演は、例年3月下旬〜12月上旬の日曜日や祝日の朝（午前8時半頃〜）に奥津橋のたもとで開催されます。初冬の川霧が立ち上る中での実演は風情豊かで、奥津温泉ならではの旅の記念として多くの観光客が見学に訪れます。"
  },
  {
    "q": "美作三湯（奥津・湯郷・湯原）の泉質の違いやそれぞれの特徴は？",
    "a": "美作三湯はそれぞれ異なる個性的な泉質を持ちます。「奥津温泉」はpH8.4前後のアルカリ性単純温泉で、漂白・美白成分を豊富に含み、古くから『美人の湯』として知られます。「湯郷温泉」はナトリウム・カルシウム-塩化物泉で、塩分が肌をベールのように包み込んで保温・保湿効果が極めて高く、傷を癒やす『薬湯』として重宝されてきました。そして旭川沿いの「湯原温泉」はアルカリ性単純温泉で豊富な湯量を誇る露天風呂番付西の横綱。美作三湯をめぐることで、肌触りの異なる極上の名湯を一度に体感できます。"
  },
  {
    "q": "11月・12月に美作地方・津山で食べるべき冬の名物グルメは何ですか？",
    "a": "冬の美作・津山エリアで絶対に外せないのが「作州牛（さくしゅうぎゅう）」と津山伝統の「そずり鍋」です。作州牛は全国の有名ブランド牛の素牛としても名高い極上の黒毛和牛で、上品な脂の甘みと濃厚な肉の旨味が際立ちます。また「そずり鍋」の“そずり”とは津山の方言で『削り落とす』という意味で、牛の骨まわりの旨味たっぷりの肉を削ぎ落とし、ゴボウ、セリ、焼き豆腐などとともに醤油ベースの甘辛い出汁でコトコト煮込む冬の郷土鍋です。身体の芯から温まる濃厚な出汁は絶品で、美作の銘酒「御前酒」や「大正の鶴」との相性も抜群です。"
  }
];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://croud-travel.pages.dev/winter-okayama-mimasaka-okutsu-yunogo-onsen-sakushugyu-stay#article',
        'isPartOf': {
          '@type': 'WebSite',
          '@id': 'https://croud-travel.pages.dev/#website',
          'name': 'クラドトラベル',
          'url': 'https://croud-travel.pages.dev/'
        },
        'headline': "【11・12月岡山・美作三湯奥津＆湯郷温泉】清流奥津渓の初冬雪景色と美肌ぬる湯・極上作州牛＆津山そずり鍋を堪能する名宿5選",
        'description': "11月から12月にかけて、中国山地の懐に抱かれた岡山県北部・美作（みまさか）地方は、澄み切った冬空と初雪の山並みに包まれる静寂の温泉シーズンを迎えます。中国地方を代表する名湯地帯「美作三湯（みまさかさんとう）」の中でも、吉井川の清流沿いに湧く「奥津温泉（おくつおんせん）」は、川底の岩盤から自噴する極上の足元湧出泉「鍵湯」や伝統の「足踏み洗濯」で知られる美肌の名湯。一方、白鷺が傷を癒やした伝説が残る「湯郷温泉（ゆのごうおんせん）」は、宮本武蔵の生誕地近くに位置し、肌をしっとり潤すナトリウム・カルシウム-塩化物泉が湯客を優しく温めます。初冬の冷気の中で楽しむ渓流雪見露天、夕食には岡山が誇る最高峰の黒毛和牛「作州牛（さくしゅうぎゅう）」のステーキや陶板焼き、骨まわりの旨味肉を冬野菜と煮込む津山伝統の熱々「そずり鍋」、美作の地酒。大人の贅沢な冬の湯治旅にふさわしい厳選名宿5選を徹底解説します。",
        'inLanguage': 'ja',
        'mainEntityOfPage': 'https://croud-travel.pages.dev/winter-okayama-mimasaka-okutsu-yunogo-onsen-sakushugyu-stay',
        'datePublished': 'T00:00:00+09:00',
        'dateModified': 'T00:00:00+09:00',
        'publisher': {
          '@type': 'Organization',
          'name': 'クラドトラベル編集部',
          'url': 'https://croud-travel.pages.dev/'
        }
      },
      {
        '@type': 'TouristDestination',
        '@id': 'https://croud-travel.pages.dev/winter-okayama-mimasaka-okutsu-yunogo-onsen-sakushugyu-stay#destination',
        'name': '岡山・美作三湯 奥津温泉＆湯郷温泉',
        'description': '岡山県北部の中国山地に位置する名湯地帯。吉井川の足元湧出天然岩風呂「鍵湯」、美肌ぬる湯、極上作州牛と津山そずり鍋が魅力。',
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 35.2289,
          'longitude': 133.9167
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://croud-travel.pages.dev/winter-okayama-mimasaka-okutsu-yunogo-onsen-sakushugyu-stay#faq',
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
        '@id': 'https://croud-travel.pages.dev/winter-okayama-mimasaka-okutsu-yunogo-onsen-sakushugyu-stay#hotellist',
        'name': '岡山・奥津温泉＆湯郷温泉のおすすめ名宿5選',
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
    <article className="min-h-screen bg-gradient-to-b from-stone-50 via-rose-50/20 to-stone-50 text-stone-800 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-r from-stone-900 via-neutral-900 to-rose-950 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative max-w-5xl mx-auto space-y-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-rose-200">
            <Link href="/" className="hover:underline hover:text-white transition">ホーム</Link>
            <span>/</span>
            <Link href="/features" className="hover:underline hover:text-white transition">特集一覧</Link>
            <span>/</span>
            <span className="text-white font-medium">岡山・美作三湯奥津＆湯郷</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-200 text-xs sm:text-sm font-semibold tracking-wide">
            <Snowflake className="w-4 h-4 text-rose-300" />
            11月・12月 清流奥津渓の初冬雪景色と美肌ぬる湯・作州牛特集
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">岡山・奥津＆湯郷温泉で過ごす冬の旅（11・12月）！美作三湯の初冬雪見と美肌湯 <span className="block text-rose-300 text-lg sm:text-2xl mt-3 font-normal"> 吉井川の足元湧出天然岩風呂・極上作州牛＆津山そずり鍋を堪能する名宿5選 </span></h1>

          <p className="text-sm sm:text-base text-stone-200 leading-relaxed max-w-4xl">
            11月から12月にかけて、中国山地の懐に抱かれた岡山県北部・美作（みまさか）地方は、澄み切った冬空と初雪の山並みに包まれる静寂の温泉シーズンを迎えます。中国地方を代表する名湯地帯「美作三湯（みまさかさんとう）」の中でも、吉井川の清流沿いに湧く「奥津温泉（おくつおんせん）」は、川底の岩盤から自噴する極上の足元湧出泉「鍵湯」や伝統の「足踏み洗濯」で知られる美肌の名湯。一方、白鷺が傷を癒やした伝説が残る「湯郷温泉（ゆのごうおんせん）」は、宮本武蔵の生誕地近くに位置し、肌をしっとり潤すナトリウム・カルシウム-塩化物泉が湯客を優しく温めます。初冬の冷気の中で楽しむ渓流雪見露天、夕食には岡山が誇る最高峰の黒毛和牛「作州牛（さくしゅうぎゅう）」のステーキや陶板焼き、骨まわりの旨味肉を冬野菜と煮込む津山伝統の熱々「そずり鍋」、美作の地酒。大人の贅沢な冬の湯治旅にふさわしい厳選名宿5選を徹底解説します。
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs sm:text-sm text-rose-200">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Calendar className="w-4 h-4 text-rose-300" />
              <span>ベストシーズン: 11月中旬〜12月下旬（澄み切った奥津渓・初雪と冬の星空・新酒）</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Utensils className="w-4 h-4 text-rose-300" />
              <span>旬の味覚: 極上作州牛ステーキ・津山名物そずり鍋・清流ヤマメ・蒜山高原乳製品</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Sparkles className="w-4 h-4 text-rose-300" />
              <span>泉質: アルカリ性単純温泉（奥津・美肌ぬる湯）／ナトリウム・カルシウム-塩化物泉（湯郷）</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月岡山・美作三湯奥津】清流奥津渓の初冬雪景色と美肌！名宿5選","item":"https://croud-travel.pages.dev/winter-okayama-mimasaka-okutsu-yunogo-onsen-sakushugyu-stay"}]}) }}
      />
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-rose-800 text-sm font-bold bg-rose-50 px-3 py-1 rounded-full">
            <Sparkles className="w-4 h-4" />
            11月・12月の美作三湯の旅情
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            中国山地の奥座敷に湧く奇跡の足元湧出泉と歴史ある湯治文化
          </h2>
          <div className="text-stone-600 space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              岡山県の北部、中国山地の豊かな森と清流・吉井川が育む美作地方。古くから「美作三湯（湯原・奥津・湯郷）」として全国にその名を轟かせるこの温泉地帯は、初冬を迎えると外界の喧騒から隔絶された静寂の隠れ里へと変貌します。中でも吉井川の清流沿いに佇む「奥津温泉」は、古くは津山藩主がその卓越した効能を独占するために一般の入浴を禁じた「鍵湯」の歴史を持ちます。何よりの魅力は、川底の天然岩盤から生まれたての湯が空気に触れずに自噴する「足元湧出」。湯船の底に敷き詰められた石の間からぷくぷくと湧き上がるアルカリ性の湯は、天然の化粧水そのもので、湯上がりの肌をしっとりと滑らかに包み込みます。
            </p>
            <p>
              11月下旬を迎えると、名勝「奥津渓」の紅葉シーズンが終わりを告げ、木立の枝先には初雪が白く降り積もります。清らかな渓流の水しぶきと雪景色のコントラストは息を呑むほど美しく、露天風呂に浸かりながら川のせせらぎに耳を澄ませる時間は至福そのもの。一方、車で約40分ほど南東に位置する「湯郷温泉」は、平安時代に慈覚大師円仁が白鷺の導きによって発見したと伝わる名湯。塩化物泉の温もり効果で湯冷めしにくく、宮本武蔵の生誕地として知られる武家文化の薫り高い温泉街散策が楽しめます。
            </p>
            <p>
              そして美作地方の冬の旅を決定づけるのが、知る人ぞ知る極上の肉文化です。津山を中心とする美作エリアは日本最古の蔓牛（血統）のルーツであり、選び抜かれた黒毛和牛「作州牛」はきめ細やかなサシと芳醇な赤身の旨味が絶品。さらに冬の夜に欠かせないのが、津山名物の「そずり鍋」です。骨のまわりから削ぎ落とした濃厚な旨味を持つ牛肉を、シャキシャキのセリやゴボウ、豆腐とともに甘辛い醤油出汁で煮込む熱々の鍋は、冷えた身体を内側から芯まで温めてくれます。地元勝山で江戸時代から続く蔵元「御前酒」の冬の新酒とともに味わえば、心も身体も深く満たされる忘れられない一夜となります。
            </p>
            <p>
              また奥津温泉の上流に広がる名勝「奥津渓」には、数万年もの歳月をかけて清流が花崗岩を削り出した東洋一とも称される甌穴（おうけつ）群があり、初冬の澄んだ水面と薄氷の造形美は散策の大きな見どころです。さらに車で足を伸ばせば、国指定史跡「津山城（鶴山公園）」の勇壮な石垣や、城東重要伝統的建造物群保存地区の格子戸が連なる町並みなど、歴史散歩も充実。美作三湯の極上のぬる湯に浸かり、名牛と郷土鍋を堪能する滞在は、冬の西日本屈指の贅沢な温泉旅をお約束します。
            </p>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-rose-800 text-sm font-bold bg-rose-50 px-3 py-1 rounded-full">
              <Mountain className="w-4 h-4" />
              厳選宿泊施設
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              岡山・美作三湯（奥津・湯郷） 11月・12月に泊まるべき名宿5選
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm">
              国の登録有形文化財足元湧出湯、美肌ぬる湯露天、極上作州牛と津山そずり鍋を誇る名宿を厳選
            </p>
          </div>

          <div className="space-y-8">
            {hotels.map((h) => (
              <div 
                key={h.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xs border border-stone-200 transition hover:shadow-md"
              >
                <div className="flex flex-col">
                  {/* Hotel Image */}
                  <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
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
                      <p className="text-xs text-rose-200 font-semibold">参考最低料金（1名あたり）</p>
                      <p className="text-lg font-black text-amber-300">{h.price}</p>
                    </div>
                  </div>

                  {/* Hotel Content */}
                  <div className="w-full p-5 sm:p-7 flex flex-col justify-between space-y-4">
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs font-bold text-rose-800 bg-rose-50 px-2.5 py-1 rounded-md inline-block mb-2">
                          厳選第{h.id}位
                        </span>
                        <h3 className="text-lg sm:text-2xl font-bold text-stone-900 leading-snug">
                          {h.name}
                        </h3>
                        <p className="text-xs text-stone-500 flex items-center gap-1 mt-1.5">
                          <MapPin className="w-3.5 h-3.5 text-rose-700 shrink-0" />
                          <span>{h.access}</span>
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {h.story}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1.5 bg-stone-50 p-4 rounded-2xl border border-stone-100">
                        <p className="text-xs font-bold text-stone-700 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-rose-700" />
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
                        <div className="bg-rose-50/50 p-3 rounded-xl border border-rose-100 space-y-1">
                          <p className="font-bold text-rose-900 flex items-center gap-1">
                            <Eye className="w-3.5 h-3.5 text-rose-700" />
                            おすすめ客室
                          </p>
                          <p className="text-stone-600">{h.roomTip}</p>
                        </div>
                        <div className="bg-pink-50/50 p-3 rounded-xl border border-pink-100 space-y-1">
                          <p className="font-bold text-pink-900 flex items-center gap-1">
                            <Utensils className="w-3.5 h-3.5 text-pink-700" />
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
                        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-rose-800 to-stone-900 hover:from-rose-900 hover:to-stone-950 text-white font-bold text-sm rounded-xl shadow-xs hover:shadow-md transition duration-200"
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
        <section className="bg-gradient-to-br from-stone-900 to-rose-950 text-white rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-rose-300 text-sm font-bold bg-white/10 px-3 py-1 rounded-full">
            <Utensils className="w-4 h-4 text-rose-300" />
            初冬の味覚手帖
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            11月・12月の美作・津山で味わい尽くす極上肉料理と地酒
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-rose-400" />
                岡山が誇る至高の黒毛和牛「作州牛」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                全国の名だたるブランド牛の素牛（もとうし）としても名高い美作の黒毛和牛。澄んだ伏流水と自然豊かな気候で育てられ、融点の低い上質なサシと深い赤身のコクが調和。炭火焼きや陶板ステーキで極上の旨味が広がります。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-rose-400" />
                津山伝統の熱々郷土鍋「そずり鍋」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                牛の骨まわりの旨味たっぷりの肉を削ぎ（そずり）落とし、セリ、ゴボウ、豆腐、キノコとともに醤油仕立ての濃厚出汁で煮込む津山の冬の代名詞。コラーゲンと肉の旨味が溶け出したスープは冷えた身体を芯から温めます。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Wine className="w-4 h-4 text-rose-400" />
                美作の地酒「御前酒」と冬の新酒
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                江戸時代に美作勝山藩の御用酒として献上された銘酒「御前酒」。名刀のようなキレと芳醇な米の旨味を持ち、菩提もと仕込みの深い味わいは、濃厚な牛肉料理や冬の猪鍋・鮎料理と最高のペアリングを奏でます。
              </p>
            </div>
          </div>
        </section>

        {/* Access & Travel Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-rose-800 text-sm font-bold bg-rose-50 px-3 py-1 rounded-full">
            <Compass className="w-4 h-4" />
            旅の計画ガイド
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            11月・12月の奥津温泉＆湯郷温泉 交通アクセス＆冬道アドバイス
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Compass className="w-4 h-4 text-rose-700" />
                岡山駅＆津山駅からのアクセス手段
              </h3>
              <p>
                岡山駅からJR津山線（快速ことぶき）で津山駅へ。津山駅から中鉄北部バスで奥津温泉へ約50分。湯郷温泉へはJR林野駅からタクシーで約8分、または津山駅からバスで約40分です。
              </p>
              <p>
                車を利用する場合は中国自動車道院庄IC（奥津方面）または美作IC（湯郷方面）を利用します。奥津温泉へ向かう国道179号は12月に入ると山間部で積雪や早朝凍結が見られるためスタッドレスタイヤの装着をおすすめします。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-rose-700" />
                美肌ぬる湯の長湯のコツと湯上がり保温
              </h3>
              <p>
                奥津温泉の源泉は人肌よりやや温かい40℃前後の絶妙なぬる湯が多く、長時間の入浴でも身体に負担がかかりにくいのが特徴です。20〜30分程度ゆったり浸かることで肌の角質が整います。
              </p>
              <p>
                冬の時期は浴槽から出る際に急激な冷えを感じやすいため、内湯で十分に温まってから上がり、備え付けの羽織や靴下をすぐに身につけて湯冷めを防ぎましょう。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-rose-800 text-sm font-bold bg-rose-50 px-3 py-1 rounded-full">
            <HelpCircle className="w-4 h-4" />
            よくある質問
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            初冬の岡山・美作三湯（奥津・湯郷）旅行 FAQ
          </h2>
          <div className="space-y-4">
            {faqList.map((faq, fIdx) => (
              <div key={fIdx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-stone-900 flex items-start gap-2">
                  <span className="text-rose-800 shrink-0 font-black">Q.</span>
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
        <section className="bg-gradient-to-br from-stone-900 to-rose-950 text-white rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Map className="w-5 h-5 text-rose-300" />
              あわせて読みたい中国・西日本の冬雪見温泉特集
            </h3>
            <p className="text-xs sm:text-sm text-rose-200">
              美肌の名湯と極上の冬の味覚を堪能する中国地方各地の厳選旅ガイド
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-okayama-yubara-onsen-sunayu-hiruzen-wagyu-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-rose-300 bg-rose-400/20 px-2 py-0.5 rounded-full inline-block">岡山・湯原温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-rose-200 transition line-clamp-2">
                湯原温泉の砂湯雪景色と蒜山和牛ステーキ
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                露天風呂番付西の横綱「砂湯」の豪快雪見と蒜山ジャージー乳製品。
              </p>
            </Link>

            <Link 
              href="/winter-tottori-misasa-onsen-matsuba-crab-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-rose-300 bg-rose-400/20 px-2 py-0.5 rounded-full inline-block">鳥取・三朝温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-rose-200 transition line-clamp-2">
                三朝温泉の世界屈指ラジウム泉と松葉ガニ
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                高濃度ラドン温泉の湯治と11月解禁の本場松葉ガニフルコースの極み。
              </p>
            </Link>

            <Link 
              href="/winter-shimane-tamatsukuri-onsen-kamiarizuki-matsuba-crab-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-rose-300 bg-rose-400/20 px-2 py-0.5 rounded-full inline-block">島根・玉造温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-rose-200 transition line-clamp-2">
                玉造温泉の神の湯美肌としまね和牛・松葉ガニ
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                出雲大社のお膝元に湧く日本最古の美肌温泉と冬の山陰美味づくし。
              </p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-okayama-mimasaka-okutsu-yunogo-onsen-sakushugyu-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
