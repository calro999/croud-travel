import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Wine, AlertTriangle, Sunrise, HeartHandshake, Eye
} from 'lucide-react';

export const metadata: Metadata = {
  title: '11・12・1月石川：加賀一ノ宮「白山比咩神社」新！名宿5選',
  description: '全国3,000余社の白山神社総本宮「白山比咩神社（しらやまひめじんじゃ）」が最も神聖な空気に包まれる11〜1月の冬旅特集。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '白山比咩神社 初詣, 辰口温泉 冬, 加能ガニ 石川, 加賀丸いも, まつさき 辰口温泉, たがわ龍泉閣, 白山 手取川 雪景色, 北陸 初詣 温泉',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-ishikawa-hakusan-shirayamahime-hatsumode-tatsunokuchi-onsen-kanougani-stay/"
  },
  openGraph: {
    title: '11・12・1月石川：加賀一ノ宮「白山比咩神社」新！名宿5選',
    description: '全国3,000余社の白山神社総本宮「白山比咩神社（しらやまひめじんじゃ）」が最も神聖な空気に包まれる11〜1月の冬旅特集。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-ishikawa-hakusan-shirayamahime-hatsumode-tatsunokuchi-onsen-kanougani-stay',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '冬の白山比咩神社表参道と手取川雪景色'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "11・12・1月石川：加賀一ノ宮「白山比咩神社」新春初詣と手取川雪景色！開湯1400年「辰口温泉」美肌名湯＆加賀丸いも・加能ガニ名宿5選",
    description: "全国3,000余社の白山神社総本宮「白山比咩神社（しらやまひめじんじゃ）」が最も神聖な空気に包まれる11〜1月の冬旅特集。加賀一ノ宮の荘厳な新春初詣、霊峰白山を源流とする手取川の雪景色、1400年の歴史を刻む辰口温泉の柔らかな湯、冬の日本海がもたらす極上の「加能ガニ」や香箱ガニ、粘りとコクが際立つ伝統野菜「加賀丸いも」のとろろ汁。白山麓と能美・加賀エリアを満喫する厳選名宿5選を徹底解説します。",
    images: ['https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export const dynamic = 'force-static';

export default function IshikawaHakusanWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【11・12・1月石川】加賀一ノ宮「白山比咩神社」新春初詣と手取川雪景色！開湯1400年「辰口温泉」美肌名湯＆加賀丸いも・加能ガニ名宿5選",
    "description": "全国3,000余社の白山神社総本宮「白山比咩神社（しらやまひめじんじゃ）」が最も神聖な空気に包まれる11〜1月の冬旅特集。加賀一ノ宮の荘厳な新春初詣、霊峰白山を源流とする手取川の雪景色、1400年の歴史を刻む辰口温泉の柔らかな湯、冬の日本海がもたらす極上の「加能ガニ」や香箱ガニ、粘りとコクが際立つ伝統野菜「加賀丸いも」のとろろ汁。白山麓と能美・加賀エリアを満喫する厳選名宿5選を徹底解説します。",
    "image": "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&h=630&q=80",
    "datePublished": "T12:00:00+09:00",
    "dateModified": "T12:00:00+09:00",
    "author": {
      "@type": "Organization",
      "name": "旅宿クラウド 編集部",
      "url": "https://croud-travel.pages.dev"
    },
    "publisher": {
      "@type": "Organization",
      "name": "旅宿クラウド",
      "logo": {
        "@type": "ImageObject",
        "url": "https://croud-travel.pages.dev/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://croud-travel.pages.dev/winter-ishikawa-hakusan-shirayamahime-hatsumode-tatsunokuchi-onsen-kanougani-stay"
    }
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
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
        "name": "特集一覧",
        "item": "https://croud-travel.pages.dev/features"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "白山・辰口温泉 冬特集",
        "item": "https://croud-travel.pages.dev/winter-ishikawa-hakusan-shirayamahime-hatsumode-tatsunokuchi-onsen-kanougani-stay"
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "冬（11・12・1月）の白山比咩神社（しらやまひめじんじゃ）初詣の見どころと混雑回避のポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "白山比咩神社は全国に3,000社以上ある白山神社の総本宮であり、加賀国一ノ宮として北陸屈指の格式を誇ります。御祭神の白山比咩大神（菊理媛尊）は「縁結び」や「和合」の神様として篤く信仰されています。初詣には正月三が日で約20万人以上が訪れ、表参道の樹齢数百年の杉並木が白雪をまとった佇まいは息を呑むほど厳かです。三が日の日中は周辺道路や駐車場が大変混雑するため、元旦の早朝（午前6〜8時頃）や夕方以降、あるいは1月4日以降の平日参拝がスムーズでおすすめです。"
        }
      },
      {
        "@type": "Question",
        "name": "辰口温泉（たつのくちおんせん）の泉質と冬の効能について教えてください。",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "辰口温泉は開湯から約1400年、奈良時代の高僧・泰澄大師によって湧出が発見されたと伝わる歴史ある古湯です。泉質はナトリウム・カルシウム-硫酸塩・塩化物泉で、肌当たりが柔らかく、古い角質を落として潤いを保つ「美肌の湯」として定評があります。塩分成分が肌をベールのように包み込むため湯冷めしにくく、北陸の真冬の寒さで冷えた身体の芯までぽかぽかに温めてくれるのが大きな特徴です。"
        }
      },
      {
        "@type": "Question",
        "name": "冬の石川県で旬を迎える「加能ガニ」と「香箱ガニ」の違いは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "「加能ガニ」は石川県内の漁港（橋立港・金石港など）で水揚げされたオスのズワイガニのブランド呼称で、青いタグが目印です。ぎっしり詰まった上品な甘みの脚肉と濃厚な蟹味噌が絶品です。一方「香箱ガニ（こうばこがに）」はメスのズワイガニのことで、プチプチとした外子（卵）と濃厚な内子、小ぶりながら旨味が凝縮した身が特徴です。香箱ガニの漁期は11月上旬〜12月末頃までの約2ヶ月間と非常に短いため、11〜12月に訪れたら絶対に外せない冬の贅沢です。"
        }
      },
      {
        "@type": "Question",
        "name": "能美・白山エリアの特産「加賀丸いも」とはどのような食材ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "加賀丸いもは、手取川の肥沃な扇状地と清らかな伏流水で育つ能美市・白山市特産のヤマトイモの一種です。黒くゴツゴツとした丸い形状が特徴で、すりおろすと箸で持ち上げられるほど強烈な粘りと豊かなコク、自然な甘みがあります。消化吸収に優れ滋養強壮効果が高いため、冬の鍋物や温かい麦とろご飯、蒸し物、汁物の団子として古くから重宝されています。"
        }
      },
      {
        "@type": "Question",
        "name": "金沢駅や小松空港から白山比咩神社・辰口温泉への冬のアクセスと雪道対策は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "金沢駅からは北陸鉄道石川線で終点の鶴来（つるぎ）駅まで約30分、鶴来駅から白山比咩神社までは路線バスまたはタクシーで約5分です。小松空港からは車・レンタカーで辰口温泉まで約30分、白山比咩神社まで約40分です。12月下旬から1月にかけては積雪や路面凍結が発生するため、車を利用する場合は必ずスタッドレスタイヤ装着車を選び、急ブレーキ・急ハンドルを避けた安全運転を心がけてください。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "金沢辰口温泉　まつさき",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/38847/38847.jpg",
              rating: 4.70,
              reviews: 420,
              price: "¥20,625〜",
              access: "関東方面：IR松任駅より車20分、関西方面：JR小松駅より車20分　小松空港より車25分　※要予約で送迎がございます",
              special: "温泉客室24室【鳳凰は露天風呂付】料理自慢＆全て個室食。金沢駅から電車と送迎で30分。お一人様歓迎",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38847%2F38847.html",
              story: "創業万治年間（1658年）、江戸時代から加賀前田藩ゆかりの湯宿として歴史を紡ぐ「金沢辰口温泉 まつさき」。霊峰白山を望む広大な回遊式日本庭園を抱き、冬には見事な雪吊りと静寂の池水が旅人を迎えます。客室は数寄屋造りの趣を守りつつ現代の寛ぎを融合させた上質な空間で、源泉露天風呂付き客室からは白銀の庭園を一望。平安時代の古今和歌集の世界を想起させる繊細な加賀懐石は、橋立港直送の加能ガニや香箱ガニ、寒ブリの刺身、地元特産の加賀丸いもを贅沢に盛り込み、一皿ごとに料理人の美意識が宿ります。肌に吸い付くような弱アルカリ性ナトリウム・カルシウム硫酸塩泉の湯は「美肌の湯」として名高く、冬の冷えた体を芯から温めてくれます。",
              roomTip: "本館「鳳凰」または新館「天祥」の源泉露天風呂付き客室。雪化粧した名園を湯船から独り占めする極上のひととき。",
              gourmetTip: "「冬の特選加能ガニ懐石」。焼きガニの香ばしい薫香と甲羅みそ焼き、加賀丸いもの滋味あふれる吸い物が至高。",
              highlights: [
                "回遊式日本庭園と数寄屋造りの名宿・源泉露天風呂付き客室で楽しむ冬の雪景色" ,
                "橋立港直送の加能ガニと伝統加賀野菜・加賀丸いもを活かした至高の懐石料理" ,
                "白山比咩神社まで車で約15分・新春初詣の滞在拠点として至高の風格"
              ]
            },
            {
              id: 2,
              name: "辰口温泉　たがわ龍泉閣",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7019/7019.jpg",
              rating: 3.98,
              reviews: 570,
              price: "¥8,800〜",
              access: "金沢駅よりバス40分で辰口温泉下車徒歩1分 松任駅より車15分　北陸自動車道金沢西ICより約30分・小松ICより約20分",
              special: "【中部ブロック割対応】北陸最大級の混浴大露天風呂はご家族・カップル・グループ皆様で！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7019%2F7019.html",
              story: "辰口温泉の中心に位置し、北陸最大級の混浴露天風呂「田んぼの湯」で広く知られる老舗温泉旅館「辰口温泉 たがわ龍泉閣」。約1400年前に白山開山の祖・泰澄大師が発見したと伝わる名湯を、広大な庭園露天風呂で心ゆくまで堪能できます（混浴露天は専用の湯あみ着着用のため家族やカップルでも安心）。冬は湯気立ち上る湯船の向こうに白銀の田園風景が広がり、まさに雪国情緒そのもの。夕食には加賀の伝統料理「治部煮」をはじめ、近海で揚がった冬の海の幸、能登牛の陶板焼きが並び、どこか懐かしく温かいもてなしが旅情を深めます。",
              roomTip: "庭園側の和室12畳。雪見障子を開ければしんしんと降る雪景色が広がり、畳の温もりに癒やされます。",
              gourmetTip: "「加賀治部煮と日本海冬の味覚会席」。とろみをつけた鴨肉とすだれ麩、山葵の風味が冷えた体に染み渡ります。",
              highlights: [
                "開湯1400年・北陸最大級の庭園大露天風呂「田んぼの湯」で雪見湯浴み" ,
                "加賀名物「治部煮」と日本海直送の冬の寒魚・能登牛陶板焼きの温かい夕食" ,
                "家族やカップルで気兼ねなく楽しめる湯あみ着着用の混浴大露天風呂"
              ]
            },
            {
              id: 3,
              name: "グランドホテル白山　白山市の入口　松任駅前（ＢＢＨホテルグループ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9192/9192.jpg",
              rating: 4.11,
              reviews: 1335,
              price: "¥4,400〜",
              access: "ＪＲ松任駅より徒歩5分・ＪＲ金沢駅より電車で15分・白山ＩＣより車で10分・小松空港より車で30分",
              special: "金沢駅から最寄の松任駅まで15分　金沢郊外の閑静なホテル　全室無料ＷｉＦｉ対応　大浴場あり　",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9192%2F9192.html",
              story: "JR松任駅南口直結という抜群の機動力を誇り、白山比咩神社への初詣や手取川流域散策の拠点として最適な「グランドホテル白山」。白山市の中心部に位置し、清潔で機能的な客室と充実した設備でビジネスから観光まで高い支持を集めています。館内レストランでは日本海の新鮮な魚介や地元加賀野菜を取り入れた本格和食・洋食が楽しめ、朝食バイキングでは温かい郷土汁や炊きたての石川県産米が好評。無料のマッサージチェアコーナーや充実のウェルカムサービスも旅の疲れを優しく解きほぐします。",
              roomTip: "デラックスツイン。ゆとりある広さで大型スーツケースも楽々広げられ、冬のコートや防寒具の整理も快適。",
              gourmetTip: "「朝食和洋バイキング」。地元野菜の煮物や石川県産米「ひゃくまん穀」のご飯に熱々の味噌汁が冬の朝を活力で満たします。",
              highlights: [
                "JR松任駅南口直結・白山比咩神社参拝や金沢観光のハブとして最高の利便性" ,
                "清潔感ある機能的な客室・石川県産米「ひゃくまん穀」が味わえる朝食" ,
                "白山市中心部の飲食店街へも徒歩すぐ・電車移動派の冬旅に最適"
              ]
            },
            {
              id: 4,
              name: "ホテルルートイン美川インター",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/54549/54549.jpg",
              rating: 4.07,
              reviews: 582,
              price: "¥5,300〜",
              access: "ＪＲ北陸本線　美川駅から車で５分",
              special: "金沢駅から車で約３０分の好立地！北陸道美川インターを降りてすぐ！ビジネス・観光に最適です。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54549%2F54549.html",
              story: "北陸自動車道美川ICから車でわずか1分、国道8号線にも直結した好立地に佇む「ホテルルートイン美川インター」。手取川の河口近く、日本海の潮騒が届くエリアに位置し、マイカーやレンタカーで白山比咩神社や金沢、加賀温泉郷を巡る冬のドライブ旅に極めて便利です。館内には旅人の疲れを芯から癒やすラジウム人工温泉大浴場「旅人の湯」を完備。全室に加湿空気清浄機と無料Wi-Fiを備え、冬の乾燥する季節も快適に過ごせます。焼き立てパンと温かい和洋おかずが揃う無料朝食バイキングも嬉しい魅力です。",
              roomTip: "コンフォートシングル／ダブル。高層階客室からは日本海の冬景色や雪化粧した山並みを遠望できます。",
              gourmetTip: "「無料朝食バイキング」。冬の朝に嬉しい熱々のスープや具だくさん豚汁、クロワッサンで出発前のエネルギー補給。",
              highlights: [
                "北陸道美川IC車1分・ラジウム人工温泉大浴場＆朝食バイキング無料" ,
                "全室加湿空気清浄機完備・冬の雪道ドライブでも安心の大型平面駐車場" ,
                "手取川河口や徳光PA・日本海沿岸の冬ドライブ周遊に絶好のロケーション"
              ]
            },
            {
              id: 5,
              name: "山代温泉　ゆのくに天祥",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1616/1616.jpg",
              rating: 4.52,
              reviews: 3773,
              price: "¥11,880〜",
              access: "【車】北陸自動車道加賀IC、片山津ICより約15分【電車】JR・IRいしかわ鉄道加賀温泉駅より無料送迎 予約制",
              special: "プロが選ぶホテル・旅館100選(全国総合4位)　楽天・日本の宿アワード2025　W受賞！風呂自慢の宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1616%2F1616.html",
              story: "辰口温泉から車で約20分、加賀温泉郷の銘泉・山代温泉に堂々と構える大型名旅館「山代温泉 ゆのくに天祥」。敷地内に自家源泉を有し、「薬師の湯」「瑠璃の湯」「九谷の湯」という趣の異なる3つの大浴場で一泊三湯十八ゆめぐりを満喫できます。冬の雪見露天風呂は格別の風情を誇り、冷たい外気と熱い名湯のコントラストが極上のリフレッシュをもたらします。夕食は加賀伝統の九谷焼の器に美しく盛られた旬魚の舟盛りや加能ガニ、能登牛など豪華絢爛な加賀会席。多彩な館内施設と温かなもてなしで家族連れや記念日旅行にも最適です。",
              roomTip: "天祥の館・白雲の館の温泉露天風呂付き和洋室。贅沢なプライベート空間で極上の雪見風呂を満喫。",
              gourmetTip: "「冬の贅・加能ガニ尽くし会席」。生花のように開いたカニ刺し、香ばしい焼きガニ、濃厚な甲羅みそが冬の至福。",
              highlights: [
                "自家源泉の一泊三湯十八ゆめぐり・九谷焼の器で味わう豪華加能ガニ会席" ,
                "趣の異なる3つの大浴場で満喫する雪見露天風呂と細やかなおもてなし" ,
                "加賀温泉郷屈指の知名度と満足度・三世代旅行や記念日にも選ばれる名門旅館"
              ]
            }
  ];

  const faqsData = [
    {
      q: "冬（11・12・1月）の白山比咩神社（しらやまひめじんじゃ）初詣の見どころと混雑回避のポイントは？",
      a: "白山比咩神社は全国に3,000社以上ある白山神社の総本宮であり、加賀国一ノ宮として北陸屈指の格式を誇ります。御祭神の白山比咩大神（菊理媛尊）は「縁結び」や「和合」の神様として篤く信仰されています。初詣には正月三が日で約20万人以上が訪れ、表参道の樹齢数百年の杉並木が白雪をまとった佇まいは息を呑むほど厳かです。三が日の日中は周辺道路や駐車場が大変混雑するため、元旦の早朝（午前6〜8時頃）や夕方以降、あるいは1月4日以降の平日参拝がスムーズでおすすめです。"
    },
    {
      q: "辰口温泉（たつのくちおんせん）の泉質と冬の効能について教えてください。",
      a: "辰口温泉は開湯から約1400年、奈良時代の高僧・泰澄大師によって湧出が発見されたと伝わる歴史ある古湯です。泉質はナトリウム・カルシウム-硫酸塩・塩化物泉で、肌当たりが柔らかく、古い角質を落として潤いを保つ「美肌の湯」として定評があります。塩分成分が肌をベールのように包み込むため湯冷めしにくく、北陸の真冬の寒さで冷えた身体の芯までぽかぽかに温めてくれるのが大きな特徴です。"
    },
    {
      q: "冬の石川県で旬を迎える「加能ガニ」と「香箱ガニ」の違いは何ですか？",
      a: "「加能ガニ」は石川県内の漁港（橋立港・金石港など）で水揚げされたオスのズワイガニのブランド呼称で、青いタグが目印です。ぎっしり詰まった上品な甘みの脚肉と濃厚な蟹味噌が絶品です。一方「香箱ガニ（こうばこがに）」はメスのズワイガニのことで、プチプチとした外子（卵）と濃厚な内子、小ぶりながら旨味が凝縮した身が特徴です。香箱ガニの漁期は11月上旬〜12月末頃までの約2ヶ月間と非常に短いため、11〜12月に訪れたら絶対に外せない冬の贅沢です。"
    },
    {
      q: "能美・白山エリアの特産「加賀丸いも」とはどのような食材ですか？",
      a: "加賀丸いもは、手取川の肥沃な扇状地と清らかな伏流水で育つ能美市・白山市特産のヤマトイモの一種です。黒くゴツゴツとした丸い形状が特徴で、すりおろすと箸で持ち上げられるほど強烈な粘りと豊かなコク、自然な甘みがあります。消化吸収に優れ滋養強壮効果が高いため、冬の鍋物や温かい麦とろご飯、蒸し物、汁物の団子として古くから重宝されています。"
    },
    {
      q: "金沢駅や小松空港から白山比咩神社・辰口温泉への冬のアクセスと雪道対策は？",
      a: "金沢駅からは北陸鉄道石川線で終点の鶴来（つるぎ）駅まで約30分、鶴来駅から白山比咩神社までは路線バスまたはタクシーで約5分です。小松空港からは車・レンタカーで辰口温泉まで約30分、白山比咩神社まで約40分です。12月下旬から1月にかけては積雪や路面凍結が発生するため、車を利用する場合は必ずスタッドレスタイヤ装着車を選び、急ブレーキ・急ハンドルを避けた安全運転を心がけてください。"
    }
  ];


  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-b from-sky-950 via-slate-900 to-slate-800 text-white py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-sky-400 text-xs md:text-sm font-semibold tracking-wider uppercase mb-3">
            <Snowflake className="w-4 h-4 text-sky-300" />
            <span>北陸・石川 冬の特別紀行（11月・12月・1月）</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6 font-journal-serif">加賀一ノ宮「白山比咩神社」新春初詣と手取川雪景色<br className="hidden md:inline" /> 開湯1400年・辰口温泉の美肌名湯＆加能ガニ名宿</h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mb-6">
            日本三名山の一つ、霊峰白山を仰ぐ石川県白山市と能美市。全国三千余社の総本宮・白山比咩神社が厳粛な雪化粧に包まれる11月から1月、手取川の扇状地には名水と寒風が育む冬の至福が満ち溢れます。開湯1400年の辰口温泉で湯浴みを楽しみ、橋立港直送の「加能ガニ」と伝統野菜「加賀丸いも」に舌鼓を打つ、心洗われる冬の旅をご案内します。
          </p>

          <div className="flex flex-wrap gap-3 text-xs md:text-sm text-slate-200">
            <span className="bg-sky-900/60 border border-sky-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-sky-400" /> 白山比咩神社（全国3000社総本宮）
            </span>
            <span className="bg-sky-900/60 border border-sky-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Waves className="w-4 h-4 text-sky-400" /> 辰口温泉（美肌の硫酸塩泉）
            </span>
            <span className="bg-sky-900/60 border border-sky-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Utensils className="w-4 h-4 text-sky-400" /> 加能ガニ＆香箱ガニ・加賀丸いも
            </span>
          </div>
        </div>
      </header>

      {/* Summary Box */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b pb-3">
            <CheckCircle2 className="w-5 h-5 text-sky-700 flex-shrink-0" />
            <span>本特集でわかること（11・12・1月の白山・辰口温泉旅行の要点）</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-700">
            <div className="bg-sky-50/60 p-4 rounded-xl border border-sky-100">
              <span className="font-bold text-sky-950 block mb-1">① 白山比咩神社 新春祈願の作法</span>
              菊理媛尊を祀る総本宮の厳かな冬参道。樹齢八百年の杉並木と白雪の回廊を歩み、新年の和合・良縁を祈る北陸屈指の初詣スポット。
            </div>
            <div className="bg-sky-50/60 p-4 rounded-xl border border-sky-100">
              <span className="font-bold text-sky-950 block mb-1">② 青タグ加能ガニ＆加賀丸いも</span>
              11月6日解禁のブランドズワイガニ「加能ガニ」と冬限定の「香箱ガニ」。手取川扇状地が生む強烈な粘りと滋養の「加賀丸いも」とろろ汁。
            </div>
            <div className="bg-sky-50/60 p-4 rounded-xl border border-sky-100">
              <span className="font-bold text-sky-950 block mb-1">③ 辰口温泉の美肌雪見風呂</span>
              開湯1400年の名湯・辰口温泉。庭園露天や混浴「田んぼの湯」で雪景色を眺め、手取川の蔵元が醸すしぼりたて新酒に酔いしれるひととき。
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 py-4 text-xs text-slate-500 flex items-center gap-2">
        <Link href="/" className="hover:text-sky-700 transition">ホーム</Link>
        <span>/</span>
        <Link href="/features" className="hover:text-sky-700 transition">特集一覧</Link>
        <span>/</span>
        <span className="text-slate-700 font-medium">石川・白山＆辰口温泉 冬特集</span>
      </nav>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">

        {/* Section 1: Overview and Atmosphere */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-sky-100 text-sky-800 rounded-xl">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-sky-700 uppercase tracking-widest block">AREA ATMOSPHERE</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                白山信仰の神域が白銀に染まる、静謐と生命力に満ちた北陸の冬
              </h2>
            </div>
          </div>

          <div className="text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
            <p>
              古来より富士山、立山とともに日本三名山・日本三霊山の一つとして仰がれてきた霊峰白山。標高2,702メートルの神体山から日本海へと注ぐ手取川（てどりがわ）は、広大な扇状地を潤し、極上の米と清冽な伏流水、豊かな大地の恵みをもたらしてきました。晩秋から厳冬期を迎える11月、12月、1月のこの地は、日本海からの雪雲がもたらす白銀の雪と、白山から吹き降ろす凛烈な寒風が大気を研ぎ澄まし、神聖な静寂が大地を包み込みます。
            </p>
            <p>
              加賀一ノ宮「白山比咩神社（しらやまひめじんじゃ）」の表参道に立つと、樹齢八百年を超える老杉が白雪をかぶり、清らかな小川のせせらぎが厳寒の空気を震わせています。初詣の参拝者が手水舎の冷水で心身を清め、新年の平穏と良縁を祈る姿は、北陸の冬の風物詩です。御祭神の菊理媛尊（くくりひめのみこと）は、伊邪那岐尊と伊邪那美尊の仲を執り持った故事から、人と人、心と心を結ぶ「結びの神」として深い信仰を集めています。
            </p>
            <p>
              神域で心を清めた後は、車でわずか15分ほどの辰口温泉へ。雪見露天風呂の湯気に包まれながら、日本海で解禁されたばかりの極上ズワイガニを味わう——日常の喧騒から遠く離れた、魂が洗われるような旅の時間がここにあります。手取川の扇状地には、冬の酒造りに励む酒蔵の赤レンガ煙突から白い蒸気が立ち上り、新酒の芳醇な吟醸香が漂います。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-sky-50/70 border border-sky-100">
              <h3 className="font-bold text-sky-950 text-sm mb-1 flex items-center gap-1.5">
                <Footprints className="w-4 h-4 text-sky-700" /> 白山比咩神社 表参道
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                巨杉と苔むす石垣が雪化粧する約250メートルの参道。歩みを進めるごとに雑念が消え去る神聖な道です。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-sky-50/70 border border-sky-100">
              <h3 className="font-bold text-sky-950 text-sm mb-1 flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-sky-700" /> 開湯1400年の辰口温泉
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                泰澄大師が開いたと伝わる古湯。硫酸塩泉のまろやかな湯が血行を促進し、湯上がり後もポカポカが持続。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-sky-50/70 border border-sky-100">
              <h3 className="font-bold text-sky-950 text-sm mb-1 flex items-center gap-1.5">
                <Wine className="w-4 h-4 text-sky-700" /> 冬の手取川新酒と寒魚
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                白山の雪解け伏流水で醸す名酒「手取川」「菊姫」のしぼりたて新酒と、橋立港の加能ガニ・寒ブリの饗宴。
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Winter Gourmet Focus */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-amber-100 text-amber-900 rounded-xl">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest block">WINTER LOCAL GASTRONOMY</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                青タグの誇り「加能ガニ」と滋養あふれる「加賀丸いも」、冬の味覚の頂点
              </h2>
            </div>
          </div>

          <div className="text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
            <p>
              石川県の冬の味覚を語る上で欠かせないのが、毎年11月6日に漁が解禁される日本海のズワイガニです。石川県内の港で水揚げされるオスのズワイガニには、最高品質の証である青色のタグが取り付けられ、「加能ガニ（かのうがに）」の名で全国に出荷されます。北陸の厳しい荒波と深海の水圧で鍛えられた身は引き締まり、繊維の一本一本に凝縮された上品な甘みが口いっぱいに弾けます。炭火で香ばしく焼き上げる焼きガニ、花が咲いたように広がる刺身、甲羅の中でぐつぐつと温められる濃厚な蟹味噌は、冬に石川を訪れる最大の歓びです。
            </p>
            <p>
              また、11月から12月末にかけてのわずか約2ヶ月間しか味わえない貴重な存在が、メスのズワイガニ「香箱ガニ（こうばこがに）」です。小ぶりな甲羅の中にぎっしりと詰まったオレンジ色の内子（卵巣）と、お腹に抱えたプチプチ食感の外子（受精卵）、そして繊細な身肉が渾然一体となり、日本酒の肴としてこの上ない極上のハーモニーを奏でます。地元の居酒屋や温泉旅館では、甲羅に身や内子・外子を美しく盛り付けた「面寿し」や「香箱汁」として提供され、冬の旅情を贅沢に彩ります。
            </p>
            <p>
              海のご馳走と並ぶ大地の恵みが、能美市と白山市にまたがる手取川扇状地で栽培される伝統野菜「加賀丸いも」です。大正時代から受け継がれるこの山芋は、すりおろすと箸で持ち上げられるほど強烈な粘りを誇り、濃厚なコクと自然な甘みが特徴です。温かい一番出汁で丁寧に伸ばしたとろろをご飯にかけたり、フワフワの団子にして熱い味噌汁や鍋物に落としたりして食されます。滋養強壮に優れた加賀丸いもは、冷えた体を内側から温め、冬の旅路に活力を満たしてくれます。
            </p>
          </div>
        </section>

        {/* Section 3: Sightseeing Spots & Winter Attractions */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-sky-100 text-sky-800 rounded-xl">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-sky-700 uppercase tracking-widest block">CULTURAL HIGHLIGHTS</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                九谷焼の美意識と鶴来の醸造文化、冬景色に映える名所探訪
              </h2>
            </div>
          </div>

          <div className="text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
            <p>
              白山麓から辰口エリアにかけては、加賀百万石前田家の庇護のもとで花開いた伝統工芸「九谷焼」の故郷でもあります。能美市に広がる「九谷陶芸村」には、九谷焼の美術館や数多くの窯元直売店が立ち並び、五彩（赤・黄・緑・紫・紺青）を駆使した絢爛豪華な磁器の数々をじっくり鑑賞・購入できます。冬の澄んだ光の中で手にとるぐい呑みや小皿は、旅の思い出を日々の食卓へと届けてくれます。
            </p>
            <p>
              また、白山比咩神社の門前町として栄えた「鶴来（つるぎ）」の町並み散策も見逃せません。白山からの清らかな伏流水に恵まれた鶴来は、古くから酒造りや醤油・味噌の醸造が盛んな発祥の地。現在も「菊姫」や「萬歳楽」といった名門蔵元が歴史ある蔵を構え、冬の街道には新酒の香りが漂います。古い商家造りの町屋が連なる通りを歩き、蔵元直営店で冬限定のしぼりたて無濾過生原酒や特製酒粕を買い求める時間は、大人の冬旅の醍醐味そのものです。
            </p>
            <p>
              少し足を伸ばして手取川の河口付近へと向かえば、冬の荒波が打ち寄せる日本海と、雄大な白山連峰の雪景色が一望できる絶景ポイントが広がります。徳光パーキングエリア周辺からは、水平線に沈む冬の夕日と冠雪した山々が織りなすパノラマが広がり、旅人の心に深い感動を刻み込みます。
            </p>
          </div>
        </section>

        {/* Section 4: Travel Practical Tips */}
        <section className="bg-slate-100/80 rounded-2xl p-6 md:p-8 border border-slate-200 space-y-4">
          <h2 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span>冬の白山・辰口温泉 旅の実践アドバイス（気候・服装・雪道対策）</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-slate-700">
            <div>
              <strong className="block text-slate-900 font-bold mb-1">【気温と服装】</strong>
              12月〜1月の平均気温は2〜5度前後。特に白山比咩神社の境内や山沿いは底冷えが厳しいため、厚手のダウンコート、手袋、マフラー、ヒートテック等の防寒インナーが必須です。境内参道は雪や融雪水で濡れるため、滑り止め加工が施された防水スニーカーやスノーブーツを着用してください。
            </div>
            <div>
              <strong className="block text-slate-900 font-bold mb-1">【雪道運転と交通】</strong>
              12月下旬〜1月は積雪や路面凍結の頻度が高くなります。レンタカーや自家用車を利用する場合は、必ずスタッドレスタイヤ装着車を選択してください。高速道路の冬用タイヤ規制やチェーン規制情報、北陸自動車道の通行止め情報を事前にハイウェイ交通情報で確認しましょう。
            </div>
          </div>
        </section>

        {/* Section 5: Verified Hotels */}
        <section className="space-y-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-black text-sky-800 uppercase tracking-widest bg-sky-100 px-3 py-1 rounded-full inline-block">
              SELECTED ACCOMMODATIONS
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 font-journal-serif">
              白山比咩神社参拝＆辰口温泉を満喫する厳選名宿5選
            </h2>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              楽天トラベルAPIより最新の空室・料金・レビュー情報を取得。創業万治年間の数寄屋造り名宿から、北陸最大級の露天風呂旅館、駅直結ホテルまで目的に応じて選定しました。
            </p>
          </div>

          <div className="space-y-8">
            {hotelsData.map((hotel) => (
              <div 
                key={hotel.id} 
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Hotel Image */}
                  <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
                    <img 
                      src={hotel.img} 
                      alt={hotel.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{hotel.rating}</span>
                      <span className="text-slate-300">({hotel.reviews}件)</span>
                    </div>
                  </div>

                  {/* Hotel Content */}
                  <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-extrabold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded border border-sky-200">
                          厳選宿 #{hotel.id}
                        </span>
                        <span className="text-sm font-black text-amber-600">
                          参考宿泊料: {hotel.price}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-black text-slate-900 hover:text-sky-800 transition">
                        <a href={hotel.url} target="_blank" rel="noopener noreferrer">
                          {hotel.name}
                        </a>
                      </h3>

                      <p className="text-xs text-slate-500 flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>{hotel.access}</span>
                      </p>

                      <p className="text-slate-700 text-xs md:text-sm leading-relaxed">
                        {hotel.story}
                      </p>

                      {/* Tips */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                          <strong className="block text-slate-900 font-bold mb-1 text-[11px] uppercase tracking-wider text-sky-800">
                            🛌 客室選びのヒント
                          </strong>
                          <span className="text-slate-600">{hotel.roomTip}</span>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                          <strong className="block text-slate-900 font-bold mb-1 text-[11px] uppercase tracking-wider text-amber-800">
                            🥢 冬の特選グルメ
                          </strong>
                          <span className="text-slate-600">{hotel.gourmetTip}</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-1.5 pt-2 text-xs text-slate-600">
                        {hotel.highlights.map((hl, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Booking Button */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-400">楽天トラベル公認リンク</span>
                      <a 
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-black text-xs md:text-sm rounded-xl shadow-md hover:shadow-lg transition transform active:scale-95"
                      >
                        <span>プラン詳細・空室確認</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: 1-Night 2-Days Model Course */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-emerald-100 text-emerald-900 rounded-xl">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest block">MODEL ITINERARY</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                白山比咩神社初詣＆辰口温泉 1泊2日冬の黄金モデルコース
              </h2>
            </div>
          </div>

          <div className="space-y-6 text-xs md:text-sm">
            {/* Day 1 */}
            <div className="border-l-2 border-sky-500 pl-4 space-y-3">
              <h3 className="font-black text-slate-900 text-base flex items-center gap-2">
                <span className="bg-sky-600 text-white px-2 py-0.5 rounded text-xs">1日目</span>
                手取川の扇状地を巡り、辰口温泉の雪見露天風呂へ
              </h3>
              <p className="text-slate-600 leading-relaxed">
                <strong>11:30 小松空港またはJR金沢駅を出発</strong><br />
                レンタカーまたは電車で能美・白山方面へ。道中で地元名物の加賀丸いも料理店に立ち寄り、熱々のとろろ汁御膳で温まる。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>13:30 九谷陶芸村（能美市）を散策</strong><br />
                色鮮やかな加賀九谷焼の窯元や資料館を見学。冬の器選びを楽しみ、旅の記念に九谷焼の箸置きやぐい呑みを手に入れる。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>15:30 辰口温泉の名宿にチェックイン</strong><br />
                冷えた身体を名湯の露天風呂へ沈める。しんしんと降る雪を眺めながら極上の雪見風呂を満喫。夕食には解禁されたばかりの加能ガニ会席と手取川の新酒を堪能。
              </p>
            </div>

            {/* Day 2 */}
            <div className="border-l-2 border-emerald-500 pl-4 space-y-3">
              <h3 className="font-black text-slate-900 text-base flex items-center gap-2">
                <span className="bg-emerald-600 text-white px-2 py-0.5 rounded text-xs">2日目</span>
                白山比咩神社で新春祈願、鶴来の酒蔵と雪景色を堪能
              </h3>
              <p className="text-slate-600 leading-relaxed">
                <strong>08:30 旅館を出発し、白山比咩神社へ</strong><br />
                朝の澄み切った空気の中、加賀一ノ宮「白山比咩神社」へ参拝。樹齢数百年の老杉が雪を抱く表参道を静かに歩み、御本殿にて新年の開運と和合を祈念。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>10:30 鶴来（つるぎ）の歴史的町並み散策</strong><br />
                古くから醸造業が栄えた鶴来の町並みへ。菊姫や萬歳楽などの老舗酒蔵の直売所で、冬限定のしぼりたて生原酒や酒粕を買い求める。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>13:00 手取川扇状地から金沢駅・小松空港へ</strong><br />
                冬の日本海の幸を味わえる海鮮市場や近江町市場に立ち寄り、帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: FAQ */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-purple-100 text-purple-900 rounded-xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-purple-800 uppercase tracking-widest block">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                白山・辰口温泉 冬の旅行 よくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, idx) => (
              <div key={idx} className="border border-slate-100 rounded-xl p-4 md:p-5 bg-slate-50/50">
                <h3 className="font-bold text-slate-900 text-sm md:text-base mb-2 flex items-start gap-2">
                  <span className="text-sky-600 font-black">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Link CTA */}
        <section className="bg-gradient-to-r from-sky-900 to-slate-900 text-white rounded-2xl p-8 text-center space-y-4">
          <h2 className="text-xl md:text-2xl font-black font-journal-serif">
            冬の日本全国・厳選特集をチェック
          </h2>
          <p className="text-slate-300 text-xs md:text-sm max-w-xl mx-auto">
            11月・12月・1月が旬の温泉郷、新春初詣、冬の味覚、雪景色を特集したオリジナル旅行ガイドを多数公開中。次の旅の目的地を見つけてください。
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link 
              href="/features" 
              className="px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 font-black text-xs md:text-sm rounded-xl shadow transition"
            >
              特集記事一覧を見る
            </Link>
            <Link 
              href="/" 
              className="px-6 py-3 bg-sky-800 hover:bg-sky-700 text-white font-black text-xs md:text-sm rounded-xl border border-sky-600 transition"
            >
              トップページへ戻る
            </Link>
          
      <HubRelatedPosts currentSlug="winter-ishikawa-hakusan-shirayamahime-hatsumode-tatsunokuchi-onsen-kanougani-stay" />
</div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-4 text-center text-xs border-t border-slate-800 mt-16">
        <p>© 2026 旅宿クラウド (croud-travel.pages.dev). All rights reserved.</p>
        <p className="mt-2 text-slate-500">掲載の宿泊料金や施設情報は楽天トラベルAPIより取得した参考データです。最新のプラン内容は各宿泊施設ページをご確認ください。</p>
      </footer>
    </article>
  );
}
