import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Snowflake, Eye, Waves, ThermometerSun, Heart, ShoppingBag, Shield, Mountain, Landmark, Wine
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12・1月飛騨高山】極上A5飛騨牛すき焼き！名宿5選',
  description: '11月から1月、小京都と称される岐阜県・飛騨高山は、江戸の面影を色濃く残す「古い町並み（さんまち通り）」や朱塗りの中橋。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '飛騨高山 雪景色 冬, 古い町並み 高山 冬, 飛騨牛 すき焼き 宿泊, 飛騨高山温泉 露天風呂, 本陣平野屋 花兆庵, 飛騨亭 花扇, 高山グリーンホテル, 宝生閣, 飛騨高山 酒蔵めぐり, 11月 12月 1月 飛騨高山旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-gifu-hida-takayama-onsen-snow-beef-stay/"
  },
  openGraph: {
    title: '【11・12・1月飛騨高山】極上A5飛騨牛すき焼き！名宿5選',
    description: '11月から1月、小京都と称される岐阜県・飛騨高山は、江戸の面影を色濃く残す「古い町並み（さんまち通り）」や朱塗りの中橋。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-gifu-hida-takayama-onsen-snow-beef-stay',
    siteName: 'クラドトラベル',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: '雪化粧した飛騨高山の古い町並みと朱塗りの中橋'
      }
    ],
    locale: 'ja_JP',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月飛騨高山】白銀の古い町並み雪景色と飛騨高山温泉・極上A5飛騨牛すき焼き＆冬限定「しぼりたて新酒」酒蔵めぐりを堪能する名宿5選",
    description: "11月から1月、小京都と称される岐阜県・飛騨高山は、江戸の面影を色濃く残す「古い町並み（さんまち通り）」や朱塗りの中橋、国史跡・高山陣屋が純白の雪に包まれる幻想的な雪景色の季節を迎えます。冬の冷え込みとともに仕込みが本格化する飛騨の地酒は、軒先に青々とした杉玉が掲げられ、冬限定の「しぼりたて生酒・にごり酒」が解禁。老舗6蔵を巡る冬の酒蔵めぐりは大人の贅沢そのものです。夕食にはきめ細やかなサシがとろける最高峰ブランド「飛騨牛（A5等級）」のすき焼きや炭火ステーキ、香ばしい朴葉味噌焼き。自家源泉の美肌温泉「飛騨高山温泉」の雪見露天風呂で心身を温める厳選名宿5選を徹底ガイドします。",
    images: ['https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function GifuHidaTakayamaWinterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "【11・12・1月飛騨高山】白銀の古い町並み雪景色と飛騨高山温泉・極上A5飛騨牛すき焼き＆冬限定「しぼりたて新酒」酒蔵めぐりを堪能する名宿5選",
    description: "11月から1月、小京都と称される岐阜県・飛騨高山は、江戸の面影を色濃く残す「古い町並み（さんまち通り）」や朱塗りの中橋、国史跡・高山陣屋が純白の雪に包まれる幻想的な雪景色の季節を迎えます。冬の冷え込みとともに仕込みが本格化する飛騨の地酒は、軒先に青々とした杉玉が掲げられ、冬限定の「しぼりたて生酒・にごり酒」が解禁。老舗6蔵を巡る冬の酒蔵めぐりは大人の贅沢そのものです。夕食にはきめ細やかなサシがとろける最高峰ブランド「飛騨牛（A5等級）」のすき焼きや炭火ステーキ、香ばしい朴葉味噌焼き。自家源泉の美肌温泉「飛騨高山温泉」の雪見露天風呂で心身を温める厳選名宿5選を徹底ガイドします。",
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    datePublished: '',
    dateModified: '',
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
      '@id': 'https://croud-travel.pages.dev/winter-gifu-hida-takayama-onsen-snow-beef-stay'
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
        name: '飛騨高山古い町並み雪景色と飛騨牛・温泉名宿',
        item: 'https://croud-travel.pages.dev/winter-gifu-hida-takayama-onsen-snow-beef-stay'
      }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "飛騨高山に雪が積もる時期はいつからいつまでですか？古い町並みの雪景色を見るベストタイミングは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "飛騨高山（標高約570mの盆地）では、例年11月下旬から12月上旬にかけて初雪が観測されます。古い町並み（上三之町・さんまち通り）や朱塗りの「中橋」、高山陣屋が本格的な白銀の雪景色に包まれる確率は12月中旬から翌年2月中旬にかけてが最も高くなります。特に冬型の気圧配置が決まった翌朝、青空が広がる「晴れと雪のコントラスト」の早朝（午前8時〜10時頃）は、屋根から白い雪煙が上がり、格子戸が美しく輝く絶好のシャッターチャンスです。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の「飛騨高山酒蔵めぐり」とは何ですか？新酒が飲める時期や参加方法は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "飛騨高山には市内中心部（古い町並み周辺）に老舗の造り酒屋が6軒（舩坂酒造店、二木酒造、平瀬酒造店、川尻酒造場、原田酒造場、平田酒造場）集中しています。冬（11月〜1月）は酒造りの最盛期で、各蔵の軒先に青い杉玉（酒林）が吊るされ、冬限定の「しぼりたて生酒」や「にごり酒」が店頭に並びます。多くの酒蔵でコイン式サーバーや専用の試飲お猪口（300円〜500円程度）を購入することで、銘酒の飲み比べ体験ができます。また、例年1月中旬からは各蔵が週替わりで普段入れない酒蔵の内部を案内・公開する「冬の酒蔵めぐり」イベントも開催されます。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の飛騨高山で必食の「飛騨牛」の美味しい食べ方やおすすめグルメは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "飛騨牛は、岐阜県内で飼育された黒毛和種のうち肉質等級A・Bの3〜5等級に格付けされた最高峰のブランド和牛です。きめ細やかな霜降りと芳醇な甘み、とろけるような口どけが特徴。冬の定番は、特製の甘辛い割下で熱々に仕立てる「すき焼き」や、昆布出汁にくぐらせてポン酢や胡麻ダレでさっぱり味わう「しゃぶしゃぶ」です。また、飛騨の郷土食である朴の葉の上で味噌・ネギ・キノコとともに焼く「朴葉味噌（ほおばみそ）ステーキ」は、味噌の焦げた香ばしさが飛騨牛の脂と相まって絶品です。古い町並み散策中には、炙り飛騨牛にぎり寿司や飛騨牛串焼きの手軽な食べ歩きも大人気です。"
        }
      },
      {
        '@type': 'Question',
        name: "冬（11月〜1月）の飛騨高山へのアクセスと車の運転注意点（スタッドレスタイヤ）は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "冬の飛騨高山は氷点下まで冷え込み、路面凍結（アイスバーン）や圧雪路が日常的です。車で訪れる場合は「スタッドレスタイヤ（冬用タイヤ）」の装着が絶対に不可欠です。東海北陸自動車道（飛騨清見IC経由）や国道41号線は除雪体制が整っていますが、トンネルの出入り口や橋梁の上、日陰カーブでは急ブレーキ・急ハンドルを避け、スピードを落として慎重に運転してください。雪道の運転に不安がある方は、名古屋駅から直通のJR特急「ひだ」（所要約2時間20分）や、東京・大阪・名古屋からの高速バスを利用すれば、雪道の心配なく安全・快適に高山駅へ到着できます。"
        }
      },
      {
        '@type': 'Question',
        name: "古い町並み散策時の服装や防寒具、靴のポイントを教えてください。",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "11月の高山は最高気温12℃前後、最低気温2℃前後ですが、12月〜1月は日中でも最高気温3〜5℃、朝晩はマイナス5℃以下まで冷え込みます。底冷えが厳しいため、ヒートテックなどの吸湿発熱インナーの重ね着、風を通さない防風・防水ダウンジャケット、ニット帽、マフラー、手袋が必需品です。足元は、古い町並みの石畳やアスファルトが凍結して滑りやすいため、底にしっかりとした凹凸がある滑り止め付きスノーブーツまたは防水トレッキングシューズを強くおすすめします。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "飛騨高山　本陣平野屋　花兆庵",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8327/8327.jpg",
              rating: 4.89,
              reviews: 837,
              price: "¥30,360〜",
              access: "高山駅より徒歩10分　駅まで無料送迎：随時　車：東海北陸　高山ＩＣ～10分・中央道　松本ＩＣ～120分",
              special: "【高山陣屋】【古い町並】に最も近い宿。上質なおもてなしでさりげなく満たされる極上の時間をゆっくりと…",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8327%2F8327.html",
              story: "古い町並みや高山陣屋、赤い中橋まで徒歩1分という高山観光の最高の特等席に佇む最高級料亭旅館「本陣平野屋 花兆庵」。館内は数寄屋造りの気品と女性目線のきめ細やかなおもてなしに満ち、日常の喧騒を忘れさせる静謐な時間が流れます。温泉は肌触りの柔らかな飛騨高山温泉。姉妹館「別亭」の町並みを望む展望露天風呂や「りらっくす蔵」の湯巡りも楽しめます。夕食は飛騨の四季を映す至高の料亭懐石。極上A5等級の飛騨牛を炭火焼きやすき焼きで味わう贅沢は言うに及ばず、冬の旬魚や飛騨の寒干し大根など、一品一品に職人の魂が宿る美食を個室料亭で堪能できます。",
              roomTip: "本館スーペリア和洋室または貴賓室。高山の風情を感じる洗練された調度品に囲まれ、冬の静けさの中で最上級の寛ぎを享受できます。",
              gourmetTip: "「最高級A5飛騨牛づくし懐石」。フィレステーキ、霜降りサーロインの握り寿司、特製すき焼きなど、飛騨牛の旨味を余すところなく味わえます。",
              highlights: [
                "古い町並み・高山陣屋・中橋へ徒歩1分の最高立地＆個室料亭で味わう至高の懐石",
                "最高級A5等級飛騨牛の炭火焼き・握り寿司・すき焼き＆冬限定の老舗酒蔵新酒",
                "女性専用スパりらっくす蔵など湯巡り充実＆ミシュラン掲載の洗練されたおもてなし"
              ]
            },
            {
              id: 2,
              name: "飛騨亭　花扇",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4711/4711.jpg",
              rating: 4.86,
              reviews: 659,
              price: "¥29,700〜",
              access: "ＪＲ高山駅より車で10分。東海北陸自動車道　高山ICより5分。長野自動車道　松本ICより90分。バス送迎有要予約。",
              special: "天然温泉で神代欅をあしらった落ち着きの有る和風旅館",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4711%2F4711.html",
              story: "樹齢数百年の神代杉や吉野杉など、銘木を贅沢に使った木造建築の美しさが際立つ優美な宿「飛騨亭 花扇」。高山市内では珍しい自家源泉「神の湯」を地下1200メートルから湧出させており、とろりとした美容液のような泉質は「美肌の湯」として絶大な人気を誇ります。雪景色を望む庭園露天風呂で湯浴みを楽しめば、冬の冷えた肌がしっとりと潤うのを実感。料理は飛騨の恵みを活かした京風会席。A5ランクの飛騨牛を朴葉の香ばしい味噌焼きや炭火焼きで堪能し、冬の白川郷や高山の地酒とともに至福の宵を過ごせます。",
              roomTip: "露天風呂付き客室。雪が舞い散る庭園を眺めながら、美肌の自家源泉に好きな時に何度でも浸かるプライベートな冬の贅沢が叶います。",
              gourmetTip: "「花扇特選・飛騨牛溶岩焼き会席」。遠赤外線でふっくらと焼き上げる極上飛騨牛の甘みと、飛騨の冬野菜の瑞々しさが絶妙に調和します。",
              highlights: [
                "地下1200m湧出のとろとろ自家源泉美肌の湯＆銘木を贅沢に使った木造建築美",
                "A5飛騨牛溶岩焼きと香ばしい朴葉味噌ステーキ＆京風仕立ての華麗な会席",
                "客室露天風呂でプライベート雪見温泉＆木の香りに癒やされる極上の冬籠もり"
              ]
            },
            {
              id: 3,
              name: "飛騨高山温泉　高山グリーンホテル（京王グループホテルズ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8626/8626.jpg",
              rating: 4.57,
              reviews: 4733,
              price: "¥15,884〜",
              access: "ＪＲ高山駅（西口）より徒歩６分（送迎あり） ◇ 中部縦貫道 高山ＩＣから７分・長野自動車道 松本ＩＣから９０分",
              special: "好評！地産地消「高山ブッフェ」◆自家源泉「天領の湯」で温泉満喫！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8626%2F8626.html",
              story: "敷地内に広大な日本庭園と、飛騨高山最大級の広さを誇る大浴場・庭園露天風呂を完備した本格リゾート温泉宿「高山グリーンホテル」。地下から湧き出る天然温泉は弱アルカリ性で肌に優しく、雪吊りが施された冬の日本庭園を眺めながらの雪見風呂は格別の風情です。館内には郷土料理から洋食、ブッフェまで多彩なレストランが揃い、A5飛騨牛のステーキやしゃぶしゃぶ、新酒の利き酒セットを満喫。さらに、高山の銘菓や工芸品が所狭しと並ぶ県下屈指のショッピングエリア「飛騨物産館」が併設されており、雪の日でも快適に買い物を楽しめます。",
              roomTip: "新館「桜凛閣（おうりんかく）」プレミア客室。木目調の洗練された和モダン空間で、大きな窓から白銀の日本庭園を望む上質なステイが楽しめます。",
              gourmetTip: "「飛騨牛食べ尽くし会席＆地酒ペアリング」。とろける霜降り飛騨牛のしゃぶしゃぶとステーキ、冬のしぼりたて新酒の競演が旅の夜を彩ります。",
              highlights: [
                "雪吊りの日本庭園を望む広大な大浴場・露天風呂＆巨大飛騨物産館併設の快適リゾート",
                "飛騨牛しゃぶしゃぶや鉄板ステーキ＆飛騨の地酒飲み比べセットの贅沢",
                "高山駅からの無料送迎バス運行＆雪の日でも安心の館内ショッピングと温泉"
              ]
            },
            {
              id: 4,
              name: "飛騨高山温泉　宝生閣",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9609/9609.jpg",
              rating: 4.51,
              reviews: 913,
              price: "¥18,150〜",
              access: "【JR高山駅より無料送迎有】14～18時・予約制　【車】東海北陸道・高山ICから10分／長野道・松本ICから100分",
              special: "朝市や古い町並みまで徒歩圏内！カップル・女性に人気の和の宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9609%2F9609.html",
              story: "城山公園の高台に位置し、古い町並みや高山の屋根瓦、遠く北アルプスの白銀の山並みを見渡すパノラマビューが自慢の「飛騨高山温泉 宝生閣」。最上階の女性専用展望露天風呂や大浴場からは、雪化粧した小京都の街並みを眼下に一望でき、朝夕で移り変わる雪景色を堪能できます。全館畳敷きの廊下は素足に心地よく、和の温もりに満ちた空間。夕食は選び抜かれたA5等級の飛騨牛を中心とした郷土会席。冬ならではの飛騨根菜の煮物や川魚の塩焼き、香ばしい朴葉味噌ステーキなど、心温まる手作りの味が旅人を迎えてくれます。",
              roomTip: "高山街並み側和室。雪化粧した出格子の屋根が連なる小京都の町並みを高台から一望できる、写真愛好家にも大人気のビュールームです。",
              gourmetTip: "「A5飛騨牛ステーキと朴葉味噌会席」。朴の葉の上で特製味噌とともにジュウジュウと焼き上げる飛騨牛は、ご飯もお酒も止まらない郷土の逸品です。",
              highlights: [
                "高台から雪化粧した古い町並みを見下ろす展望露天風呂＆全館畳敷きの心地よさ",
                "朴の葉の上で香ばしく焼き上げるA5飛騨牛朴葉味噌焼き＆郷土の温かい鍋料理",
                "古い町並み散策へのアクセス良好＆朝夕で表情を変える小京都の雪景色"
              ]
            },
            {
              id: 5,
              name: "飛騨高山温泉　飛騨の里　旅館　むら山",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4992/4992.jpg",
              rating: 4.59,
              reviews: 285,
              price: "¥12,650〜",
              access: "高山駅・濃飛バスセンターよりさるぼぼバスにて約１０分（飛騨の里下下車）徒歩１分。",
              special: "飛騨高山温泉◎カップル・ファミリーにうれしい無料貸切風呂あり♪個室食事処も★駐車場無料♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4992%2F4992.html",
              story: "合掌造りの民家が点在する「飛騨の里」のすぐ近く、素朴な民芸調の佇まいと家庭的な温もりが心を和ませる隠れ宿「飛騨高山温泉 飛騨の里 旅館 むら山」。館内には囲炉裏が切られ、雪の日にパチパチと燃える炭火の温もりが旅人を優しく包み込みます。天然温泉の大浴場と雪見露天風呂には高山温泉の湯が注がれ、湯冷めしにくいぽかぽかの温浴体験。夕食は囲炉裏端や個室で味わう飛騨の郷土料理。炭火でじっくり香ばしく焼いた岩魚や、特選飛騨牛の陶板焼き、山菜鍋など、昔ながらの飛騨の冬の暮らしを体感できる温かな宿です。",
              roomTip: "民芸調和室。飛騨の木工家具と畳の温もりが心地よく、雪の山里ならではの静寂に包まれてぐっすりと深い眠りにつくことができます。",
              gourmetTip: "「囲炉裏炭火焼きと飛騨牛陶板焼き会席」。炭火で香ばしく焼き上げる川魚の塩焼きと、柔らかくジューシーな飛騨牛の贅沢な組み合わせです。",
              highlights: [
                "飛騨の里すぐ近くの民芸調小宿＆囲炉裏の炭火料理と温もりあふれる家庭的もてなし",
                "囲炉裏でじっくり焼く岩魚塩焼きと特選飛騨牛陶板焼き＆地場野菜の滋味",
                "どこか懐かしい日本の原風景に浸る滞在＆湯冷めしにくい良質な天然温泉"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "飛騨高山に雪が積もる時期はいつからいつまでですか？古い町並みの雪景色を見るベストタイミングは？",
    "a": "飛騨高山（標高約570mの盆地）では、例年11月下旬から12月上旬にかけて初雪が観測されます。古い町並み（上三之町・さんまち通り）や朱塗りの「中橋」、高山陣屋が本格的な白銀の雪景色に包まれる確率は12月中旬から翌年2月中旬にかけてが最も高くなります。特に冬型の気圧配置が決まった翌朝、青空が広がる「晴れと雪のコントラスト」の早朝（午前8時〜10時頃）は、屋根から白い雪煙が上がり、格子戸が美しく輝く絶好のシャッターチャンスです。"
  },
  {
    "q": "冬の「飛騨高山酒蔵めぐり」とは何ですか？新酒が飲める時期や参加方法は？",
    "a": "飛騨高山には市内中心部（古い町並み周辺）に老舗の造り酒屋が6軒（舩坂酒造店、二木酒造、平瀬酒造店、川尻酒造場、原田酒造場、平田酒造場）集中しています。冬（11月〜1月）は酒造りの最盛期で、各蔵の軒先に青い杉玉（酒林）が吊るされ、冬限定の「しぼりたて生酒」や「にごり酒」が店頭に並びます。多くの酒蔵でコイン式サーバーや専用の試飲お猪口（300円〜500円程度）を購入することで、銘酒の飲み比べ体験ができます。また、例年1月中旬からは各蔵が週替わりで普段入れない酒蔵の内部を案内・公開する「冬の酒蔵めぐり」イベントも開催されます。"
  },
  {
    "q": "冬の飛騨高山で必食の「飛騨牛」の美味しい食べ方やおすすめグルメは？",
    "a": "飛騨牛は、岐阜県内で飼育された黒毛和種のうち肉質等級A・Bの3〜5等級に格付けされた最高峰のブランド和牛です。きめ細やかな霜降りと芳醇な甘み、とろけるような口どけが特徴。冬の定番は、特製の甘辛い割下で熱々に仕立てる「すき焼き」や、昆布出汁にくぐらせてポン酢や胡麻ダレでさっぱり味わう「しゃぶしゃぶ」です。また、飛騨の郷土食である朴の葉の上で味噌・ネギ・キノコとともに焼く「朴葉味噌（ほおばみそ）ステーキ」は、味噌の焦げた香ばしさが飛騨牛の脂と相まって絶品です。古い町並み散策中には、炙り飛騨牛にぎり寿司や飛騨牛串焼きの手軽な食べ歩きも大人気です。"
  },
  {
    "q": "冬（11月〜1月）の飛騨高山へのアクセスと車の運転注意点（スタッドレスタイヤ）は？",
    "a": "冬の飛騨高山は氷点下まで冷え込み、路面凍結（アイスバーン）や圧雪路が日常的です。車で訪れる場合は「スタッドレスタイヤ（冬用タイヤ）」の装着が絶対に不可欠です。東海北陸自動車道（飛騨清見IC経由）や国道41号線は除雪体制が整っていますが、トンネルの出入り口や橋梁の上、日陰カーブでは急ブレーキ・急ハンドルを避け、スピードを落として慎重に運転してください。雪道の運転に不安がある方は、名古屋駅から直通のJR特急「ひだ」（所要約2時間20分）や、東京・大阪・名古屋からの高速バスを利用すれば、雪道の心配なく安全・快適に高山駅へ到着できます。"
  },
  {
    "q": "古い町並み散策時の服装や防寒具、靴のポイントを教えてください。",
    "a": "11月の高山は最高気温12℃前後、最低気温2℃前後ですが、12月〜1月は日中でも最高気温3〜5℃、朝晩はマイナス5℃以下まで冷え込みます。底冷えが厳しいため、ヒートテックなどの吸湿発熱インナーの重ね着、風を通さない防風・防水ダウンジャケット、ニット帽、マフラー、手袋が必需品です。足元は、古い町並みの石畳やアスファルトが凍結して滑りやすいため、底にしっかりとした凹凸がある滑り止め付きスノーブーツまたは防水トレッキングシューズを強くおすすめします。"
  }
];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-amber-100 selection:text-amber-900 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero Header */}
      <header className="relative bg-stone-900 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1800&q=80" 
            alt="雪景色に佇む飛騨高山" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-amber-900/80 backdrop-blur-md text-amber-100 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-amber-400/30">
            <Snowflake className="w-4 h-4 text-amber-200" />
            11月・12月・1月 飛騨小京都の白銀情緒＆冬の新酒・極上飛騨牛特集
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
            【11・12・1月飛騨高山】白銀の古い町並み雪景色と飛騨高山温泉・極上A5飛騨牛すき焼き＆冬限定「しぼりたて新酒」酒蔵めぐりを堪能する名宿5選
          </h1>
          <p className="text-stone-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            出格子と用水路が連なる「古い町並み」や朱塗りの「中橋」に舞い散る純白の雪。軒先に青い杉玉が揺れる老舗酒蔵での「しぼりたて新酒」利き酒、とろける霜降りA5飛騨牛のすき焼きと朴葉味噌。雪見露天風呂に癒やされる飛騨高山の厳選名宿をご紹介します。
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs sm:text-sm text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-amber-400" /> 旬の時期：11月下旬〜1月下旬（新酒解禁・積雪期）</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-amber-400" /> エリア：岐阜県高山市（古い町並み・高山陣屋・飛騨の里）</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-amber-400" /> 旬グルメ：A5飛騨牛すき焼き・朴葉味噌・しぼりたて地酒</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Introduction</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              白銀の小京都に灯る提灯と、杉玉が告げる新酒の香り・とろけるA5飛騨牛
            </h2>
          </div>
          
          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p>
              標高約570メートルの高山盆地に位置し、「飛騨の小京都」として国内外から多くの旅人を惹きつける岐阜県高山市。11月下旬を過ぎると、周囲の北アルプスや乗鞍岳の冠雪とともに平野部にも雪が舞い始め、12月から1月にかけては江戸時代の城下町・商人町の面影をそのまま残す「古い町並み（上三之町・上二之町・上一之町）。」が一面の銀世界へと姿を変えます。黒い格子戸の連なる町家、宮川に架かる朱色の「中橋」、そして日本で唯一現存する江戸幕府の代官所「高山陣屋」の屋根に降り積もる雪は、凛とした静謐さと懐かしさを醸し出します。
            </p>
            <p>
              冬の高山散策をひときわ魅力的なものにするのが、「冬の酒蔵めぐり」です。北アルプスの清らかな伏流水と良質な酒米に恵まれた高山では、市内中心部に老舗の造り酒屋が6軒も密集しています。新酒の仕込みが始まる冬、各蔵の軒先には新しい青々とした「杉玉（すぎだま・酒林）」が掲げられ、この季節にしか味わえないフレッシュな「しぼりたて生酒」や、まろやかな「にごり酒」が解禁されます。寒風吹きすさぶ町並みを歩きながら、温かな蔵内で出来立ての新酒を試飲し、蔵人との語らいを楽しむひとときは大人の冬旅の醍醐味です。
            </p>
            <p>
              そして冷え切った体を芯から温めてくれるのが、至高のブランド肉「飛騨牛」と「飛騨高山温泉」です。厳しい冬の気候を乗り越えるために脂を蓄えたA5等級の飛騨牛は、美しい網目状のサシが入り、熱々の特製すき焼きや炭火焼きで口に運べば、とろけるような甘みと芳醇な香りが広がります。飛騨高山温泉の雪見露天風呂で湯けむりに包まれ、雪景色を眺めながらゆったりと手足を伸ばす時間は、まさに至福の冬籠もりです。
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="bg-amber-50/50 rounded-2xl p-4 border border-amber-100 space-y-2">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                <Landmark className="w-4 h-4 text-amber-700" />
                古い町並みと中橋の雪景色
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                白銀の雪をまとった江戸情緒の出格子と用水路。朱塗りの中橋と宮川のコントラストは必見。
              </p>
            </div>
            <div className="bg-amber-50/50 rounded-2xl p-4 border border-amber-100 space-y-2">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                <Wine className="w-4 h-4 text-amber-700" />
                冬限定「しぼりたて新酒」めぐり
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                青い杉玉が揺れる老舗6酒蔵を巡り、冬にしか味わえないフレッシュな新酒・にごり酒を利き酒。
              </p>
            </div>
            <div className="bg-amber-50/50 rounded-2xl p-4 border border-amber-100 space-y-2">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                <Utensils className="w-4 h-4 text-amber-700" />
                A5飛騨牛と朴葉味噌
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                口の中でとろける霜降りA5飛騨牛のすき焼き、朴葉の香ばしい味噌焼き、炙り握り寿司を堪能。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <div className="inline-flex items-center gap-2 text-amber-950 font-bold text-sm tracking-wide bg-amber-100/60 px-3 py-1 rounded-full">
              <Sparkles className="w-4 h-4 text-amber-800" />
              楽天トラベル公式連携・厳選宿
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-stone-900 mt-2">
              古い町並み雪景色と飛騨高山温泉＆A5飛騨牛を堪能する名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              ※表示料金は楽天トラベルAPIより取得した参考最低価格です。時期やプランにより変動します。
            </p>
          </div>

          <div className="space-y-10">
            {hotelsData.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xs border border-stone-200 hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row"
              >
                {/* Hotel Image */}
                <div className="md:w-2/5 relative min-h-[260px] md:min-h-full bg-stone-100 overflow-hidden">
                  <img 
                    src={hotel.img} 
                    alt={hotel.name}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    厳選宿 {hotel.id}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-stone-900 text-xs font-bold px-3 py-1 rounded-lg shadow-xs flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    {hotel.rating} <span className="text-stone-400 font-normal">({hotel.reviews}件)</span>
                  </div>
                </div>

                {/* Hotel Details */}
                <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs text-stone-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-amber-700" />
                        {hotel.access}
                      </span>
                      <span className="text-amber-800 font-extrabold text-base sm:text-lg">
                        {hotel.price} <span className="text-xs font-normal text-stone-500">（税込目安）</span>
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-2xl font-bold text-stone-900 leading-snug">
                      {hotel.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {hotel.story}
                    </p>

                    {/* Highlights bullet points */}
                    <div className="space-y-1.5 bg-stone-50 rounded-2xl p-4 border border-stone-100">
                      {hotel.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Room & Gourmet tips */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                      <div className="bg-amber-50/40 p-3 rounded-xl border border-amber-100/60">
                        <span className="font-bold text-amber-900 block mb-1">【客室の選び方】</span>
                        <p className="text-stone-600 leading-relaxed">{hotel.roomTip}</p>
                      </div>
                      <div className="bg-orange-50/40 p-3 rounded-xl border border-orange-100/60">
                        <span className="font-bold text-orange-900 block mb-1">【冬の味覚おすすめ】</span>
                        <p className="text-stone-600 leading-relaxed">{hotel.gourmetTip}</p>
                      </div>
                    </div>
                  </div>

                  {/* Booking CTA Button */}
                  <div className="pt-2">
                    <a 
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-amber-950 text-white font-bold py-3.5 px-6 rounded-2xl shadow-sm hover:shadow transition text-sm tracking-wide"
                    >
                      <span>楽天トラベルで空室・冬限定プランを見る</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2-Day Winter Model Course Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Route</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の飛騨高山・古い町並み雪景色と酒蔵めぐり 2泊3日風雅モデルコース
            </h2>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-stone-700">
            {/* Day 1 */}
            <div className="relative pl-6 border-l-2 border-amber-700 space-y-2">
              <div className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-amber-700" />
              <h3 className="font-bold text-stone-900 text-base">
                1日目：高山駅到着と古い町並み散策＆名物飛騨牛握り
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                JR特急ひだ号でJR高山駅へ到着。駅前の観光案内所で雪道情報を確認し、まずは朱塗りの「中橋」へ。雪をかぶった擬宝珠（ぎぼし）と宮川の雪景色を撮影。古い町並み（さんまち通り）へ向かい、香ばしい醤油の香りが漂うみたらし団子や、煎餅の上に乗せて提供される極上飛騨牛の炙り握り寿司を食べ歩き。夕暮れに宿へチェックインし、雪見露天風呂で冷えた体をじっくり温めた後、A5飛騨牛すき焼きの夕食を味わいます。
              </p>
            </div>

            {/* Day 2 */}
            <div className="relative pl-6 border-l-2 border-amber-700 space-y-2">
              <div className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-amber-700" />
              <h3 className="font-bold text-stone-900 text-base">
                2日目：宮川朝市の冬情景と杉玉揺れる老舗酒蔵めぐり
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                朝、宮川沿いに立つ「宮川朝市」へ。白い息を吐きながら地元の農家さんと言葉を交わし、赤かぶ漬けやリンゴ、民芸品を買い求めます。続いて江戸幕府の代官所「高山陣屋」を見学。午後は冬の高山のハイライトである「酒蔵めぐり」。舩坂酒造店や原田酒造場など杉玉が掲げられた酒蔵を巡り、専用のお猪口でしぼりたて新酒やにごり酒を利き酒。夜は飛騨高山温泉の美肌湯に浸かり、朴葉味噌ステーキと地酒のペアリングを堪能します。
              </p>
            </div>

            {/* Day 3 */}
            <div className="relative pl-6 border-l-2 border-amber-700 space-y-2">
              <div className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-amber-700" />
              <h3 className="font-bold text-stone-900 text-base">
                3日目：合掌造りの雪景色「飛騨の里」とお土産選び
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                最終日は合掌造り民家が移築・保存された「飛騨の里」へ。白銀の池に映る合掌屋根の雪景色を眺め、昔の雪国の暮らしを体感。市街地に戻り、高山ラーメン（中華そば）の老舗で細縮れ麺と鶏ガラ魚介スープの熱々の一杯で温まります。駅前でお気に入りの地酒や飛騨さるぼぼ、駄菓子を購入し、特急ひだ号で帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* Local Winter Practical Tips */}
        <section className="bg-amber-950 text-white rounded-3xl p-6 sm:p-10 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-amber-300 font-bold text-xs sm:text-sm tracking-wider uppercase">
            <ThermometerSun className="w-4 h-4 text-amber-300" />
            現地リアルアドバイス
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">
            冬の飛騨高山を安全に楽しむための寒さ対策と雪道走行の心得
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-amber-100 leading-relaxed pt-2">
            <div className="space-y-2 bg-stone-900/60 p-4 rounded-2xl border border-amber-800/60">
              <span className="font-bold text-white block">【盆地特有の底冷え対策】</span>
              <p>
                高山は盆地のため、真冬の朝晩はマイナス5℃以下まで下がることが珍しくありません。足元からの底冷えが激しいため、厚手のウール靴下や靴用カイロが重宝します。また、古い町並みは雪が踏み固められて滑りやすいツルツル路面（ブラックアイスバーン）になりやすいため、底に深い溝がある滑り止め付きスノーブーツが必須です。
              </p>
            </div>
            <div className="space-y-2 bg-stone-900/60 p-4 rounded-2xl border border-amber-800/60">
              <span className="font-bold text-white block">【酒蔵めぐりとレンタカーの兼ね合い】</span>
              <p>
                市内中心部の酒蔵めぐりで試飲を楽しむ場合、当然ながら車の運転はできません。高山市街地は徒歩や「まちなみバス（周遊バス）」で十分に散策できるコンパクトな街です。お酒を楽しむ日は公共交通機関または徒歩で巡り、郊外の温泉宿へは宿の無料送迎バスを利用するのが最も安全でおすすめのプランです。
              </p>
            </div>
          </div>
        </section>

        {/* Local Souvenir & Spot Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-amber-950 font-bold text-sm tracking-wide bg-amber-100/60 px-3 py-1 rounded-full">
              <ShoppingBag className="w-4 h-4 text-amber-800" />
              飛騨高山の冬名物＆おみやげ手帖
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              雪国の職人技が光る老舗酒蔵の限定新酒と飛騨伝統工芸
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-700" />
                老舗6蔵の冬限定「しぼりたて生原酒」＆飛騨春慶塗の木工ぐい呑み
              </h3>
              <p>
                舩坂酒造店の「深山菊」や二木酒造の「玉の井」、原田酒造場の「山車」など、冬にしか手に入らないしぼりたて無濾過生原酒は、芳醇な吟醸香とピチピチと弾けるフレッシュなガス感が魅力です。また、黄金色の漆を通して美しい木目が透ける国の伝統的工芸品「飛騨春慶塗（ひだしゅんけいぬり）」の手作り酒器や折敷は、自宅での晩酌を優雅な小京都の時間へと変えてくれます。
              </p>
            </div>
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-700" />
                宮川朝市の「赤かぶ漬け」「朴葉味噌セット」＆開運「さるぼぼ」
              </h3>
              <p>
                厳しい寒さで甘みが増した飛騨の赤かぶを塩だけで乳酸発酵させた伝統の「赤かぶら漬け」は、冬の高山を代表する発酵食。また、コンロの上で香ばしく焼いて楽しむ「朴葉味噌セット（乾燥朴葉と特製山椒味噌）。」があれば、自宅でも手軽に飛騨牛やキノコを焼いて郷土の味を再現できます。飛騨弁で「サルの赤ちゃん」を意味する災い除けのお守り「さるぼぼ」も愛らしい旅の記念品です。
              </p>
            </div>
          </div>
        </section>

        {/* Deep Dive Knowledge Section */}
        <section className="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-200 pb-4">
            <div className="inline-flex items-center gap-2 text-amber-950 font-bold text-sm tracking-wide bg-amber-100/60 px-3 py-1 rounded-full">
              <Compass className="w-4 h-4 text-amber-800" />
              飛騨の風土と匠の技・ディープダイブ解説
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              なぜ飛騨高山は極寒の冬に銘酒と最高峰の飛騨牛を生み出せるのか
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-2 bg-white p-5 rounded-2xl border border-stone-100 shadow-2xs">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Wine className="w-4 h-4 text-amber-700" />
                北アルプスの清冽な雪解け伏流水と盆地気候の寒造り
              </h3>
              <p>
                酒造りは雑菌の繁殖を防ぎ低温でじっくり発酵させるため、寒冷な気候が不可欠です。高山盆地の冬は氷点下まで安定して冷え込み、酒造りに理想的な環境が整っています。さらに、北アルプス乗鞍岳の大自然が数十年かけて磨き上げた軟水の伏流水は、キレがありながら米の甘みを優しく引き出す特性を持ち、江戸時代から続く「飛騨の酒蔵街」の高品質な酒造りを支え続けています。
              </p>
            </div>

            <div className="space-y-2 bg-white p-5 rounded-2xl border border-stone-100 shadow-2xs">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Utensils className="w-4 h-4 text-amber-700" />
                伝説の名牛「安福号」から始まった最高峰ブランド飛騨牛の奇跡
              </h3>
              <p>
                現在の飛騨牛の名声を決定づけたのは、昭和56年に兵庫県から岐阜県に導入された伝説の種雄牛「安福号（やすふくごう）」です。安福号は類まれな優れた霜降り肉質を受け継ぐ遺伝子を持ち、その血統を引く子孫たちが全国和牛能力共進会で日本一に輝くなど快挙を達成。澄んだ空気と清らかな水、そして冬の厳しい寒暖差を経験することで、きめ細やかで融点の低い美しいサシが入り、口に入れた瞬間に溶けるような甘みが生み出されます。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-amber-950 font-bold text-sm tracking-wide bg-amber-100/60 px-3 py-1 rounded-full">
              <HelpCircle className="w-4 h-4 text-amber-800" />
              よくある質問
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初冬・厳冬期の飛騨高山旅行 Q&A
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq, idx) => (
              <div key={idx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-amber-700 font-extrabold">Q.</span>
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
          <div className="flex items-center gap-2 text-amber-950 font-bold text-sm tracking-wide">
            <Sparkles className="w-4 h-4 text-amber-800" />
            あわせて読みたい中部・岐阜の冬温泉＆雪景色特集
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            <Link 
              href="/winter-shirakawago-gassho-snow-illumination-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-amber-700 font-bold block text-[10px]">岐阜・白川郷</span>
              <p className="font-bold text-stone-800 line-clamp-2">世界遺産白川郷の合掌造り雪景色ライトアップと飛騨牛会席の宿</p>
            </Link>
            <Link 
              href="/winter-gifu-okuhida-onsen-yukimi-roten-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-amber-700 font-bold block text-[10px]">岐阜・奥飛騨温泉郷</span>
              <p className="font-bold text-stone-800 line-clamp-2">日本屈指の大露天風呂と北アルプス雪見風呂・青だる氷瀑めぐりの名宿</p>
            </Link>
            <Link 
              href="/winter-nagano-asama-onsen-matsumoto-castle-snow-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-amber-700 font-bold block text-[10px]">長野・浅間温泉＆松本城</span>
              <p className="font-bold text-stone-800 line-clamp-2">国宝松本城の白銀雪景色と浅間温泉の美肌湯・信州牛すき焼きの宿</p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-gifu-hida-takayama-onsen-snow-beef-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
