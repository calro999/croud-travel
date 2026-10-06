import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Snowflake, Flame, Mountain, Building, ThermometerSun, Waves, Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月鹿児島市】冬の桜島絶景＆照国神社新春初詣！本場黒豚しゃぶしゃぶと錦江湾寒ブリ・展望温泉名宿5選",
  description: "冬の南九州・鹿児島は澄み切った青空が広がり、錦江湾に浮かぶ雄大な桜島が年間で最も美しくクリアに望める絶景シーズン。島津家別邸・仙巌園の冬景色、薩摩藩祖・島津斉彬公を祀る照国神社での新春開運初詣、鹿児島黒豚しゃぶしゃぶや錦江湾の寒ブリ、揚げたてさつま揚げと本場芋焼酎。城山の高台やベイエリアから桜島を見晴らす展望天然温泉に寛ぐ厳選名宿5選を徹底特集します。",
  keywords: '鹿児島 ホテル, 桜島 絶景 ホテル, 照国神社 初詣, 城山ホテル鹿児島, ソラリア西鉄ホテル鹿児島, シェラトン鹿児島, 鹿児島 黒豚しゃぶしゃぶ, 錦江湾 寒ブリ, 11月 12月 1月 鹿児島 観光',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-kagoshima-city-sakurajima-view-kurobuta-kanburi-onsen-stay/"
  },
  openGraph: {
    title: "【11・12・1月鹿児島市】冬の桜島絶景＆照国神社新春初詣！本場黒豚しゃぶしゃぶと錦江湾寒ブリ・展望温泉名宿5選",
    description: "冬の南九州・鹿児島は澄み切った青空が広がり、錦江湾に浮かぶ雄大な桜島が年間で最も美しくクリアに望める絶景シーズン。島津家別邸・仙巌園の冬景色、薩摩藩祖・島津斉彬公を祀る照国神社での新春開運初詣、鹿児島黒豚しゃぶしゃぶや錦江湾の寒ブリ、揚げたてさつま揚げと本場芋焼酎。城山の高台やベイエリアから桜島を見晴らす展望天然温泉に寛ぐ厳選名宿5選を徹底特集します。",
    url: 'https://croud-travel.pages.dev/winter-kagoshima-city-sakurajima-view-kurobuta-kanburi-onsen-stay',
    type: 'article'
  }
};

export default function KagoshimaCityWinterFeaturePage() {
  const hotels = [
            {
              id: 1,
              name: "ＳＨＩＲＯＹＡＭＡ　ＨＯＴＥＬ　ｋａｇｏｓｈｉｍａ（城山ホテル鹿児島）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5305/5305.jpg",
              rating: 4.63,
              reviews: 3907,
              price: "¥15,681〜",
              access: "鹿児島中央からタクシー約１０分　　鹿児島中央駅や天文館等を経由する無料のシャトルバスを30分間隔で運行",
              special: "城山観光ホテルは、「SHIROYAMA HOTEL kagoshima」へ名称変更いたしました。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5305%2F5305.html",
              story: "鹿児島市街地と錦江湾、そして雄大な桜島を一望する標高108mの城山の高台に建つ「SHIROYAMA HOTEL kagoshima（城山ホテル鹿児島）」。南九州を代表する名門ホテルであり、宿自慢の展望露天風呂「さつま乃湯」は、地下1,000mから湧き出る天然温泉に浸かりながら、眼下に広がる鹿児島の街並みと真正面に聳え立つ桜島の大パノラマを独占できます。特に冬の澄んだ朝空が茜色に染まり、桜島の背後から朝日が昇る瞬間は息をのむ美しさ。夕食は最上級かごしま黒豚のしゃぶしゃぶ会席、厳選黒毛和牛の鉄板焼き、広東料理など多彩な美食から選択可能。80種類以上のメニューが並ぶ朝食ビュッフェでは、名物の真鯛潮汁やホテル特製フレンチトーストを堪能できます。",
              roomTip: "桜島ビュー・プレミアムツイン。窓いっぱいに広がる桜島と錦江湾の雄姿。朝目覚めた瞬間から雄大な自然のエネルギーを感じられる至極の客室。",
              gourmetTip: "「かごしま黒豚しゃぶしゃぶ会席＆錦江湾寒ブリのお造り」。甘みある黒豚の極上ロースと脂の乗った寒ブリを、本格芋焼酎のペアリングとともに。",
              highlights: [
                "標高108m城山の高台・絶景露天風呂「さつま乃湯」からの桜島大パノラマ・80種朝食ビュッフェ",
                "かごしま黒豚しゃぶしゃぶと錦江湾寒ブリ会席・城山庭園のイルミネーションと歴史散策",
                "朝焼けに染まる桜島とご来光・ホテルメイドのベーカリー・エステやショップも充実の最高峰"
              ]
            },
            {
              id: 2,
              name: "ソラリア西鉄ホテル鹿児島",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/135892/135892.jpg",
              rating: 4.36,
              reviews: 2364,
              price: "¥5,500〜",
              access: "鹿児島中央駅東口側、地下直結徒歩にて３分。空港バス発着所はビル内の１階。フロントは７階にございます。",
              special: "鹿児島の玄関口，鹿児島中央駅正面に立地．桜島・新幹線ビューも自慢のプレミアムホテル",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F135892%2F135892.html",
              story: "JR鹿児島中央駅に直結し、新幹線改札から雨に濡れずにアクセスできる抜群の利便性を誇る「ソラリア西鉄ホテル鹿児島」。駅前広場を見下ろす高層ビルの上層階に位置し、フロントロビーや桜島ビュールームからは、観覧車や行き交う路面電車の賑わい越しに堂々たる桜島を望めます。客室はバス・トイレがセパレートされた機能的かつスタイリッシュな設えで、冬の観光やビジネスの拠点として極めて快適。ホテル内のレストラン「KUWAHARA Kan」では、鹿児島県産の黒牛・黒豚や近海魚介を取り入れた本格フレンチが楽しめ、駅前バスターミナルから照国神社や仙巌園への周遊も極めてスムーズです。",
              roomTip: "桜島ビュー・スーペリアツイン。大きなピクチャーウインドウから東向きに桜島を真正面に望む客室。冬の澄んだ朝日が差し込む心地よい目覚め。",
              gourmetTip: "「鹿児島県産黒毛和牛と黒豚のフレンチコース」。きめ細やかなサシの入った黒牛フィレ肉と、柔らかな黒豚のローストを贅沢に味わうディナー。",
              highlights: [
                "JR鹿児島中央駅直結の抜群のアクセス・桜島ビュールーム完備・フレンチレストラン",
                "鹿児島県産黒牛・黒豚の洗練されたフレンチディナー・照国神社や仙巌園への周遊拠点",
                "バス・トイレ完全独立・防音性の高い客室で快眠・空港リムジンバス発着至近"
              ]
            },
            {
              id: 3,
              name: "シェラトン鹿児島",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/184895/184895.jpg",
              rating: 4.59,
              reviews: 504,
              price: "¥17,590〜",
              access: "市電武之橋駅から徒歩1分　シャトルバス有（鹿児島中央ターミナルビルからホテルまで約10分）※鹿児島空港までのバス直結",
              special: "2023年5月16日開業！35平米以上の客室と5つのレストラン・バー、源泉かけ流しの天然温泉付き。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184895%2F184895.html",
              story: "鹿児島の歴史ある高麗町に誕生したマリオットグループのインターナショナルラグジュアリーホテル「シェラトン鹿児島」。鹿児島の伝統工芸や自然の美意識を取り入れた洗練された館内デザインが特徴で、ホテル内には源泉かけ流しの天然温泉大浴場や露天風呂、サウナ、そして桜島を望む屋外足湯テラスを完備しています。客室は開放感あふれるモダン空間で、桜島を望む客室からは刻々と移ろう火山の陰影をゆったりと鑑賞。最上階のグリルレストラン「FLYING HOG GRILL」では、薪火で豪快に焼き上げる鹿児島黒豚や旬の野菜を味わえ、スタイリッシュな大人の冬のリトリートを満喫できます。",
              roomTip: "桜島ビューキング/ツインルーム。床から天井まで届く大きな窓から桜島と錦江湾を一望。シェラトン特製の贅沢なベッドで極上の寛ぎを提供。",
              gourmetTip: "「薪火グリル・鹿児島黒豚＆冬魚ディナー」。香ばしい薪の香りをまとわせたジューシーな黒豚肉と、彩り豊かな地元冬野菜のグリル。",
              highlights: [
                "マリオット系列ラグジュアリー・源泉かけ流し天然温泉と足湯テラス・薪火グリルディナー",
                "スタイリッシュな客室空間・高品質なベッドとバスアメニティ・洗練された国際基準のサービス",
                "伝統とモダンが融合したインテリア・桜島を眺めながら過ごす優雅なクラブラウンジ"
              ]
            },
            {
              id: 4,
              name: "天然温泉　霧桜の湯　ドーミーイン鹿児島（ドーミーイン・御宿野乃　ホテルズグループ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/137044/137044.jpg",
              rating: 4.38,
              reviews: 2837,
              price: "¥5,424〜",
              access: "■鹿児島中央駅より市電乗車約4分⇒3つ目の電停「高見馬場」下車・徒歩約2分■鹿児島空港バス停「天文館」下車・徒歩約3分",
              special: "温泉大浴場・サウナ完備 黒豚しゃぶしゃぶ等ご当地献立や『味めぐり小鉢横丁』 朝の彩り献立",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F137044%2F137044.html",
              story: "鹿児島最大の繁華街「天文館」の電停から徒歩約3分という絶好の立地に位置する「天然温泉 霧桜の湯 ドーミーイン鹿児島」。最上階の13階には、男女別の天然温泉大浴場「霧桜の湯」を備え、内湯、露天風呂、高温サウナ、強冷水風呂で極上の「ととのい」体験が叶います。冬の冷え込んだ夜、天文館の黒豚専門店や居酒屋で名物の黒豚しゃぶしゃぶや芋焼酎を楽しんだ後、深夜でも入れる天然温泉で温まれるのが大きな魅力。朝食バイキングでは、名物の黒豚しゃぶしゃぶや奄美大島の郷土料理「鶏飯」、揚げたてのさつま揚げが並び、無料の夜鳴きそばサービスも旅情をそそります。",
              roomTip: "クイーンルーム/ツインルーム。サータ社製ベッドを配した機能的な客室。シャワーブースとトイレが独立し、天文館観光の拠点に快適。",
              gourmetTip: "「ドーミーイン名物・朝の黒豚しゃぶしゃぶ＆奄美鶏飯バイキング」。特製出汁でいただく黒豚と、具沢山のご飯に熱々鶏ガラスープをかける鶏飯。",
              highlights: [
                "天文館繁華街徒歩3分・最上階天然温泉大浴場と高温サウナ・朝食黒豚しゃぶしゃぶ＆鶏飯",
                "名物夜鳴きそば無料・天文館の老舗黒豚店や芋焼酎バーへの散策に最高のロケーション",
                "天然温泉で芯から温まる美肌浴・充実のサウナと水風呂で極上のリフレッシュ"
              ]
            },
            {
              id: 5,
              name: "鹿児島サンロイヤルホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13585/13585.jpg",
              rating: 4.34,
              reviews: 2297,
              price: "¥8,800〜",
              access: "空港リムジンバス：JR鹿児島中央駅より車で約10分/無料シャトルバス運行中",
              special: "最上階天然展望温泉からの桜島の雄大な姿をご堪能ください。　　　　　　　　　　　　　　　　　　　　　",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13585%2F13585.html",
              story: "錦江湾のウォーターフロントに建ち、全室の目前に遮るものなく広がる海と桜島のダイナミックな景観を誇る「鹿児島サンロイヤルホテル」。最上階の13階に位置する展望温泉大浴場「桜島と錦江湾の湯」からは、まるで海の上に浮かんでいるかのような感覚で雄大な桜島を仰ぎ見ることができます。冬晴れの澄んだ青空、夕暮れのグラデーション、そして夜の静まり返った水面に映る月明かりと、時間の移ろいとともに変化する絶景は圧巻。夕食はフレンチの名店「フェニックス」での桜島フレンチディナーや、日本料理「七彩」での黒豚・黒牛会席など、老舗リゾートホテルならではの温かなおもてなしが光ります。",
              roomTip: "オーシャンビュー桜島ツイン。バルコニー越しに錦江湾と桜島をパノラマで望む特等席。冬の穏やかな波音を聞きながら寛ぐ贅沢な休日。",
              gourmetTip: "「最上階スカイレストラン・冬の薩摩フレンチ」。錦江湾の寒ブリや車海老の前菜と、鹿児島黒牛のローストビーフを絶景とともに堪能。",
              highlights: [
                "錦江湾ウォーターフロント・最上階展望温泉大浴場から桜島を真正面に望むオーシャンビュー",
                "フレンチ「フェニックス」の冬コース・地元食材を活かした和洋朝食・無料シャトルバス運行",
                "海と火山の雄大なコントラスト・夕暮れから夜景へのドラマチックな移ろいを満喫"
              ]
            }
  ];

  const faqList = [
  {
    "q": "冬（11月〜1月）の鹿児島市で桜島が最も美しく見える時間帯や絶景スポットは？",
    "a": "冬の鹿児島は湿度が低く、澄んだ青空（冬晴れ）の日が多いため、一年で最もくっきりと鮮明に桜島を眺めることができます。特に午前中（日の出直後から午前10時頃）は順光となり、火山の山肌の溝や噴煙の白さが鮮やかに際立ちます。代表的な絶景スポットは「城山展望台（標高108m）」、島津家別邸「仙巌園（錦江湾を池、桜島を築山に見立てた借景庭園）」、そして海沿いの「みなと大通り公園」「与次郎ヶ浜海岸」です。冬の朝焼けに染まる紅富士ならぬ「紅桜島」は、冬に訪れた人だけが見られる奇跡の絶景です。"
  },
  {
    "q": "鹿児島総鎮守・照国神社の新春初詣（1月）の由緒と混雑状況・参拝のポイントは？",
    "a": "照国神社（てるくにじんじゃ）は、幕末の名君として知られる薩摩藩第28代当主・島津斉彬（しまづなりあきら）公を祀る神社で、鹿児島県内最多となる例年30万人以上の初詣客で賑わいます。開運厄除け、事業繁栄、学業成就、家内安全に大きな御神徳があるとされ、新春三が日は白大島紬の着物姿の参拝者も多く見られます。元旦の日中から2日・3日の昼前後は参道が混み合うため、早朝8時前、または夕方16時以降の参拝が比較的スムーズです。城山山麓の緑に囲まれ、天文館からも徒歩約10分とアクセスも良好です。"
  },
  {
    "q": "冬の鹿児島で味わうべき三大味覚「かごしま黒豚」「錦江湾寒ブリ」「黒さつま鶏」の魅力は？",
    "a": "冬の鹿児島の味覚の筆頭は「かごしま黒豚」です。サツマイモを飼料に育つ黒豚は、脂身（白身）に上品な甘みと旨みがあり、融点が高いためべたつかずさっぱりしています。特製の出汁やそばつゆに潜らせていただく「黒豚しゃぶしゃぶ」は冬の至福の逸品。また、錦江湾の急流で育つ冬の「寒ブリ（鰤王など）」は脂が最高潮に乗り、とろけるような刺身やブリしゃぶが絶品です。さらに、旨みと弾力が際立つ鹿児島の地鶏「黒さつま鶏」の炭火焼きやタタキ、揚げたての「さつま揚げ」、名産の本格芋焼酎のお湯割りと合わせるのが冬の黄金の組み合わせです。"
  },
  {
    "q": "冬の鹿児島市の気候・気温と服装の選び方は？雪は降る？",
    "a": "南国鹿児島のイメージがありますが、11月の平均気温は約15℃、12月は約10℃、1月は約8℃（朝晩は3〜4℃前後まで低下）となり、冬らしい寒さを迎えます。雪が積もることは稀ですが、強い冬型の気圧配置になると小雪が舞う日もあります。特に海沿いや高台の城山では冷たい潮風が吹き抜けるため、東京や大阪と同等の防寒対策（ダウンジャケットやコート、マフラー、手袋）が必要です。屋内や路面電車内は暖房が効いているため、脱ぎ着しやすいレイヤード（重ね着）がおすすめです。"
  },
  {
    "q": "桜島フェリーでの桜島上陸観光や、冬の桜島周遊の楽しみ方は？",
    "a": "鹿児島本港と桜島港を結ぶ「桜島フェリー」は24時間運航しており、片道わずか約15分でアクセスできます。フェリー名物の「やぶ金」のうどんを甲板で潮風に吹かれながら食べるのは定番の楽しみ方。冬の桜島に上陸したら、周囲約36kmの島内を周遊する「サクラジマアイランドビュー（循環バス）」やレンタカーを利用して、標高373mの「湯之平展望所」へ。間近に迫る荒々しい北岳の山肌と眼下に広がる鹿児島市街地のパノラマは圧巻です。また、全長約100mの「桜島溶岩なぎさ公園足湯」で錦江湾を眺めながら温まるのも冬の最高の過ごし方です。"
  }
];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "ホーム",
            "item": "https://croud-travel.pages.dev/"
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
            "name": "【11・12・1月鹿児島市】冬の桜島絶景＆照国神社新春初詣！本場黒豚しゃぶしゃぶと錦江湾寒ブリ・展望温泉名宿5選",
            "item": 'https://croud-travel.pages.dev/winter-kagoshima-city-sakurajima-view-kurobuta-kanburi-onsen-stay'
          }
        ]
      },
      {
        "@type": "Article",
        "headline": "【11・12・1月鹿児島市】冬の桜島絶景＆照国神社新春初詣！本場黒豚しゃぶしゃぶと錦江湾寒ブリ・展望温泉名宿5選",
        "description": "冬の南九州・鹿児島は澄み切った青空が広がり、錦江湾に浮かぶ雄大な桜島が年間で最も美しくクリアに望める絶景シーズン。島津家別邸・仙巌園の冬景色、薩摩藩祖・島津斉彬公を祀る照国神社での新春開運初詣、鹿児島黒豚しゃぶしゃぶや錦江湾の寒ブリ、揚げたてさつま揚げと本場芋焼酎。城山の高台やベイエリアから桜島を見晴らす展望天然温泉に寛ぐ厳選名宿5選を徹底特集します。",
        "author": {
          "@type": "Organization",
          "name": "旅宿クラウド編集部"
        },
        "publisher": {
          "@type": "Organization",
          "name": "旅宿クラウド",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.pages.dev/icon.png"
          }
        },
        "datePublished": "2026-10-03",
        "dateModified": "2026-10-03"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "冬（11月〜1月）の鹿児島市で桜島が最も美しく見える時間帯や絶景スポットは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "冬の鹿児島は湿度が低く、澄んだ青空（冬晴れ）の日が多いため、一年で最もくっきりと鮮明に桜島を眺めることができます。特に午前中（日の出直後から午前10時頃）は順光となり、火山の山肌の溝や噴煙の白さが鮮やかに際立ちます。代表的な絶景スポットは「城山展望台（標高108m）」、島津家別邸「仙巌園（錦江湾を池、桜島を築山に見立てた借景庭園）」、そして海沿いの「みなと大通り公園」「与次郎ヶ浜海岸」です。冬の朝焼けに染まる紅富士ならぬ「紅桜島」は、冬に訪れた人だけが見られる奇跡の絶景です。"
            }
          },
          {
            "@type": "Question",
            "name": "鹿児島総鎮守・照国神社の新春初詣（1月）の由緒と混雑状況・参拝のポイントは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "照国神社（てるくにじんじゃ）は、幕末の名君として知られる薩摩藩第28代当主・島津斉彬（しまづなりあきら）公を祀る神社で、鹿児島県内最多となる例年30万人以上の初詣客で賑わいます。開運厄除け、事業繁栄、学業成就、家内安全に大きな御神徳があるとされ、新春三が日は白大島紬の着物姿の参拝者も多く見られます。元旦の日中から2日・3日の昼前後は参道が混み合うため、早朝8時前、または夕方16時以降の参拝が比較的スムーズです。城山山麓の緑に囲まれ、天文館からも徒歩約10分とアクセスも良好です。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の鹿児島で味わうべき三大味覚「かごしま黒豚」「錦江湾寒ブリ」「黒さつま鶏」の魅力は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "冬の鹿児島の味覚の筆頭は「かごしま黒豚」です。サツマイモを飼料に育つ黒豚は、脂身（白身）に上品な甘みと旨みがあり、融点が高いためべたつかずさっぱりしています。特製の出汁やそばつゆに潜らせていただく「黒豚しゃぶしゃぶ」は冬の至福の逸品。また、錦江湾の急流で育つ冬の「寒ブリ（鰤王など）」は脂が最高潮に乗り、とろけるような刺身やブリしゃぶが絶品です。さらに、旨みと弾力が際立つ鹿児島の地鶏「黒さつま鶏」の炭火焼きやタタキ、揚げたての「さつま揚げ」、名産の本格芋焼酎のお湯割りと合わせるのが冬の黄金の組み合わせです。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の鹿児島市の気候・気温と服装の選び方は？雪は降る？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "南国鹿児島のイメージがありますが、11月の平均気温は約15℃、12月は約10℃、1月は約8℃（朝晩は3〜4℃前後まで低下）となり、冬らしい寒さを迎えます。雪が積もることは稀ですが、強い冬型の気圧配置になると小雪が舞う日もあります。特に海沿いや高台の城山では冷たい潮風が吹き抜けるため、東京や大阪と同等の防寒対策（ダウンジャケットやコート、マフラー、手袋）が必要です。屋内や路面電車内は暖房が効いているため、脱ぎ着しやすいレイヤード（重ね着）がおすすめです。"
            }
          },
          {
            "@type": "Question",
            "name": "桜島フェリーでの桜島上陸観光や、冬の桜島周遊の楽しみ方は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "鹿児島本港と桜島港を結ぶ「桜島フェリー」は24時間運航しており、片道わずか約15分でアクセスできます。フェリー名物の「やぶ金」のうどんを甲板で潮風に吹かれながら食べるのは定番の楽しみ方。冬の桜島に上陸したら、周囲約36kmの島内を周遊する「サクラジマアイランドビュー（循環バス）」やレンタカーを利用して、標高373mの「湯之平展望所」へ。間近に迫る荒々しい北岳の山肌と眼下に広がる鹿児島市街地のパノラマは圧巻です。また、全長約100mの「桜島溶岩なぎさ公園足湯」で錦江湾を眺めながら温まるのも冬の最高の過ごし方です。"
            }
          }
        ]
      }
    ]
  };


  return (
    <article className="min-h-screen bg-slate-50 text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-slate-950 via-rose-950 to-stone-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-200 text-xs sm:text-sm font-medium mb-6">
            <Flame className="w-4 h-4 text-rose-300" />
            11月・12月・1月冬の特選旅｜鹿児島・桜島絶景＆照国神社
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white mb-6">
            冬の桜島絶景＆照国神社新春初詣！<br className="hidden sm:inline" />
            本場黒豚しゃぶしゃぶと錦江湾寒ブリ・展望温泉名宿5選
          </h1>
          <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed max-w-4xl mb-8">
            南国鹿児島の冬は澄み切った青空が広がり、錦江湾に浮かぶ雄大な桜島が年間で最も鮮明に姿を現す最高の季節。名勝・仙巌園の庭園美、島津斉彬公を祀る照国神社での新春開運初詣、鹿児島が世界に誇る「かごしま黒豚」の極上しゃぶしゃぶと脂の乗った錦江湾の寒ブリ、揚げたてさつま揚げと本場芋焼酎のお湯割り。城山の高台やベイエリアから桜島を見晴らす絶景温泉に浸かり、心温まる至福の冬旅をお届けします。
          </p>
          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-rose-400" /> 鹿児島県鹿児島市（城山・天文館・ベイエリア）</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-rose-400" /> 探訪期：11月中旬〜1月下旬</span>
            <span className="flex items-center gap-1.5"><Mountain className="w-4 h-4 text-rose-400" /> 桜島冬パノラマ＆照国神社新春初詣</span>
          </div>
        </div>
      </header>

      {/* Navigation Breadcrumbs */}
      <nav aria-label="パンくずリスト" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-slate-500">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-rose-600 transition">ホーム</Link></li>
          <li><span>/</span></li>
          <li><Link href="/features" className="hover:text-rose-600 transition">特集一覧</Link></li>
          <li><span>/</span></li>
          <li className="text-slate-800 font-medium truncate">冬の鹿児島市・桜島絶景特集</li>
        </ol>
      </nav>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Deep Dive Overview Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-rose-600 pl-4">
            <span className="text-rose-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Volcanic Panorama & Satsuma Heritage</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬晴れの錦江湾に聳える雄峰桜島と、維新の英傑が息づく薩摩の祈り
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              東洋のナポリと謳われる風光明媚な景観と、南九州一の開運神社が迎える新春
            </p>
          </div>

          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              波静かな錦江湾（鹿児島湾）を挟んで、標高1,117mの活火山・桜島と対峙する鹿児島市。ナポリ湾とヴェスヴィオ火山に似た地形から「東洋のナポリ」と称されるこの街は、明治維新を牽引した西郷隆盛や大久保利通をはじめ、数多くの偉人を輩出した歴史の舞台でもあります。春夏の緑や秋の夕暮れも美しいですが、桜島が最も神々しい存在感を放つのは、湿度が下がり大気が冴え渡る冬の11月から1月にかけてです。空気が澄み切るため、火山の筋状の山肌や白い噴煙、そして山頂付近にうっすらと雪が積もる「雪化粧の桜島」が、どこまでも青い冬空を背景に圧倒的な美しさで迫ってきます。
            </p>
            <p>
              鹿児島市街地随一の展望地である「城山展望台（標高108m）」に立つと、足下に広がる市街地のビル群、錦江湾を行き交う桜島フェリー、そして正面に鎮座する桜島の大パノラマが一望できます。特に冬の朝一番、澄み切った大気の中で桜島の稜線から昇る神々しい朝日は、言葉を失うほどの感動をもたらします。さらに島津家第19代当主・島津光久が築いた大名庭園「仙巌園（磯庭園）」では、錦江湾を庭の池に、桜島を築山に見立てた雄大な借景庭園が広がり、冬の澄んだ光の中で島津家の栄華に思いを馳せることができます。
            </p>
            <p>
              そして新春を迎える1月、鹿児島市民がこぞって参拝するのが「照国神社（てるくにじんじゃ）」です。幕末に集成館事業を起こし、日本の近代化の礎を築いた名君・第28代島津斉彬公を祀る神社で、県内屈指のパワースポット。白大島紬の晴れ着をまとった参拝者が新年の開運厄除けや学業成就、事業繁栄を祈る光景は、薩摩の伝統美に彩られた冬の風物詩です。境内の大鳥居をくぐり、清らかな空気の中で拝殿に手を合わせると、新たな年を切り開く前向きな力が湧き上がってきます。
            </p>
            <p>
              寒さで引き締まった身体を温めてくれるのが、鹿児島が誇る冬の極上グルメと温泉です。サツマイモを食べて育つ「かごしま黒豚」は、甘みのある白身（良質な脂身）と旨みの詰まった赤身が絶品で、昆布出汁や特製そばつゆでいただく「黒豚しゃぶしゃぶ」は冬の食卓の主役。さらに錦江湾の潮流で育つ脂の乗り切った「寒ブリ（鰤王）」のお造り、炭火で香ばしく焼き上げる「黒さつま鶏」、魚のすり身に地酒を練り込んで揚げたアツアツの「さつま揚げ」。城山周辺には西郷隆盛終焉の地である西郷洞窟や南洲神社があり、薩摩の熱き志に触れた後は、天文館の老舗で名菓「かるかん」や「かすたどん」の優しい甘みに癒やされるのも楽しい散策。これらを鹿児島自慢の本格芋焼酎のお湯割りと共にいただけば、身体の芯から幸福な温もりが広がります。城山の展望温泉やウォーターフロントの天然温泉に身を委ね、桜島を眺めながら過ごす冬籠もりは、大人の旅人に最高の癒やしを届けてくれます。
            </p>
          </div>

          {/* 3 Pillar Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-rose-50/60 border border-rose-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-rose-600 text-white flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-bold text-slate-900 text-base">冬晴れの桜島パノラマ絶景</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                澄んだ空気で見晴らす錦江湾と雄峰桜島。城山展望台からの朝日と仙巌園の名勝借景庭園の息をのむ美しさ。
              </p>
            </div>

            <div className="bg-rose-50/60 border border-rose-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-rose-600 text-white flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-bold text-slate-900 text-base">薩摩総鎮守・照国神社初詣</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                島津斉彬公を祀る鹿児島一の新春開運スポット。大島紬の晴れ着と新年の大願成就・事業繁栄を祈る神聖な参拝。
              </p>
            </div>

            <div className="bg-rose-50/60 border border-rose-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-rose-600 text-white flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-bold text-slate-900 text-base">黒豚しゃぶしゃぶ＆寒ブリ</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                とろけるかごしま黒豚のしゃぶしゃぶ鍋と錦江湾寒ブリ。桜島を望む展望天然温泉と芋焼酎お湯割りの極上夜。
              </p>
            </div>
          </div>
        </section>

        {/* Month Guide */}
        <section className="bg-gradient-to-r from-slate-900 to-rose-950 text-white rounded-3xl p-6 sm:p-10 shadow-md space-y-6">
          <div className="border-l-4 border-rose-400 pl-4">
            <span className="text-rose-300 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Calendar</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              11月・12月・1月｜鹿児島市の月別見どころと旅のポイント
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              温暖な気候と冬の透明度を最大限に味わう、鹿児島トラベルカレンダー
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-200 leading-relaxed">
            <div className="bg-white/10 backdrop-blur-xs p-5 rounded-2xl border border-white/10 space-y-3">
              <div className="text-rose-300 font-bold text-base flex items-center gap-2">
                <Calendar className="w-4 h-4" /> 11月下旬：秋から冬への心地よい季節と仙巌園菊まつり
              </div>
              <p>
                仙巌園で伝統の「菊花展」が開催され、名勝庭園が色鮮やかな菊の花で彩られます。日中は20℃近くまで上がる日もあり、屋外散策や桜島フェリークルーズに最も心地よい気候。夜景の美しさも日ごとに増していきます。
              </p>
              <div className="text-xs text-rose-200 font-medium">
                気温目安：鹿児島市内 11〜20℃（昼はシャツ一枚、朝晩は羽織りもの）
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xs p-5 rounded-2xl border border-white/10 space-y-3">
              <div className="text-amber-300 font-bold text-base flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> 12月：みなと大通りイルミネーション＆寒ブリ旬期
              </div>
              <p>
                市役所前のみなと大通り公園や城山ホテルで華やかなイルミネーションが点灯。錦江湾の寒ブリは脂が乗って最高の旬を迎え、黒豚しゃぶしゃぶ鍋の温もりが身に染みる季節。大気の透明度は最高潮に達します。
              </p>
              <div className="text-xs text-amber-200 font-medium">
                気温目安：鹿児島市内 6〜14℃（海風対策にウールコートやジャケット着用）
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xs p-5 rounded-2xl border border-white/10 space-y-3">
              <div className="text-emerald-300 font-bold text-base flex items-center gap-2">
                <Flame className="w-4 h-4" /> 1月：照国神社初詣＆新春の桜島日の出
              </div>
              <p>
                新年の幕開けとともに照国神社へ多くの参拝者が訪れます。冬晴れの澄んだ空に桜島の稜線がくっきりと浮かび、城山やホテル展望風呂から仰ぐ朝日は格別の美しさ。天文館での初売りやグルメ巡りも活気に溢れます。
              </p>
              <div className="text-xs text-emerald-200 font-medium">
                気温目安：鹿児島市内 3〜12℃（朝晩の冷え込みにダウンや手袋必須）
              </div>
            </div>
          </div>
        </section>

        {/* Model Itinerary & Practical Advice */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-rose-600 pl-4">
            <span className="text-rose-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Route</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の鹿児島を満喫する1泊2日 王道モデルコース
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              新幹線・空港から身軽に巡る、桜島絶景と薩摩美食のパーフェクトプラン
            </p>
          </div>

          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/70 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base text-rose-800">
                【1日目】鹿児島中央駅到着 → 桜島フェリーで桜島へ → 湯之平展望所＆足湯 → 展望温泉宿で黒豚しゃぶしゃぶ
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                昼頃、鹿児島中央駅へ到着。市電で水族館口電停へ向かい、桜島フェリーで名物うどんを味わいながら桜島へ。アイランドビューバスで湯之平展望所へ上がり、間近に迫る火山の迫力と鹿児島市街地を展望。溶岩なぎさ公園足湯で温まった後、フェリーで戻り城山ホテルやベイエリアの宿へチェックイン。展望温泉「さつま乃湯」で夕暮れの桜島を眺め、夜はかごしま黒豚しゃぶしゃぶと芋焼酎に舌鼓。
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/70 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base text-rose-800">
                【2日目】照国神社で新春初詣 → 名勝・仙巌園で借景庭園散策 → 天文館でさつま揚げ＆お土産調達
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                朝、城山展望台から朝日を浴びる桜島を鑑賞後、照国神社へ参拝し新年の開運を祈願。カゴシマシティビューバスで名勝「仙巌園」へ向かい、桜島を借景にした雄大な庭園を散策、名物「両棒餅（ぢゃんぼもち）」を味わう。午後は天文館へ戻り、老舗店で揚げたてのさつま揚げやかるかん、銘酒芋焼酎を購入し、夕方の新幹線やフライトで快適に帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* Section: Hotel Cards */}
        <section className="space-y-8">
          <div>
            <span className="text-rose-600 font-bold text-xs uppercase tracking-wider">VERIFIED ACCOMMODATIONS</span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              冬の鹿児島市を満喫する厳選名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              楽天トラベル公式APIを通じてレビュー評価、桜島眺望、展望露天風呂、黒豚プランを厳選した最高品質の宿です。
            </p>
          </div>

          <div className="space-y-8">
            {hotels.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-200 hover:border-rose-300 transition-all duration-300 flex flex-col md:flex-row gap-6 lg:gap-8"
              >
                {/* Hotel Image */}
                <div className="md:w-5/12 shrink-0">
                  <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-slate-100 shadow-inner">
                    <img 
                      src={hotel.img} 
                      alt={hotel.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-full">
                      第{hotel.id}位 厳選
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-600">
                      <span className="flex items-center gap-1 text-amber-600 font-bold">
                        <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                        {hotel.rating}
                      </span>
                      <span>レビュー ({hotel.reviews}件)</span>
                      <span className="font-bold text-slate-900 text-sm">{hotel.price}</span>
                    </div>

                    <div className="text-xs text-slate-500 flex items-start gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span>{hotel.access}</span>
                    </div>
                  </div>
                </div>

                {/* Hotel Information */}
                <div className="md:w-7/12 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-rose-700 transition">
                      <a href={hotel.url} target="_blank" rel="noopener noreferrer">
                        {hotel.name}
                      </a>
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-500 mt-1 italic">
                      {hotel.special}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3">
                      {hotel.story}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-xs">
                      <div className="bg-rose-50/70 p-3 rounded-xl border border-rose-150">
                        <span className="font-bold text-rose-900 block mb-1">🛏 おすすめ客室の過ごし方</span>
                        <span className="text-slate-700">{hotel.roomTip}</span>
                      </div>
                      <div className="bg-amber-50/70 p-3 rounded-xl border border-amber-150">
                        <span className="font-bold text-amber-900 block mb-1">🍲 冬の絶品グルメ情報</span>
                        <span className="text-slate-700">{hotel.gourmetTip}</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <span className="text-xs font-bold text-slate-700 block mb-2">✨ 宿のこだわりハイライト</span>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {hotel.highlights.map((hl: string, hIdx: number) => (
                          <li key={hIdx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
                    <a 
                      href={hotel.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-bold px-6 py-3 rounded-2xl text-xs sm:text-sm shadow-md shadow-rose-600/20 transition-all hover:shadow-lg"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-slate-200/80 space-y-6">
          <div className="border-b border-slate-150 pb-4">
            <span className="text-rose-600 font-bold text-xs uppercase tracking-wider">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              冬の鹿児島市旅行 よくある質問と実用アドバイス
            </h2>
          </div>

          <div className="space-y-6">
            {faqList.map((faq, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-rose-600 font-black">Q{index + 1}.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Internal Links */}
        <section className="bg-slate-100 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-rose-700" />
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              九州・南国の冬旅＆関連する冬の厳選特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <Link 
              href="/winter-kagoshima-ibusuki-onsen-sunamushi-black-pork-stay" 
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-rose-400 hover:shadow-xs transition-all group block"
            >
              <div className="font-bold text-slate-900 group-hover:text-rose-700 mb-1">指宿温泉の天然砂むし風呂</div>
              <div className="text-slate-500 text-xs">薩摩富士開聞岳と錦江湾波打ち際・黒豚しゃぶしゃぶ名宿</div>
            </Link>
            <Link 
              href="/winter-kagoshima-kirishima-onsen-ryoma-black-pork-stay" 
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-rose-400 hover:shadow-xs transition-all group block"
            >
              <div className="font-bold text-slate-900 group-hover:text-rose-700 mb-1">霧島神宮新春初詣＆霧島温泉郷</div>
              <div className="text-slate-500 text-xs">国宝霧島神宮と硫黄の濁り湯露天・坂本龍馬ゆかりの冬湯治</div>
            </Link>
            <Link 
              href="/winter-miyazaki-aoshima-onsen-miyazakigyu-iseebi-resort-stay" 
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-rose-400 hover:shadow-xs transition-all group block"
            >
              <div className="font-bold text-slate-900 group-hover:text-rose-700 mb-1">宮崎・青島温泉リゾートと初詣</div>
              <div className="text-slate-500 text-xs">鬼の洗濯板と青島神社・冬の伊勢海老＆宮崎牛贅沢会席</div>
            </Link>
            <Link 
              href="/winter-fukuoka-munakata-taisha-hatsumode-torafugu-munakatagyu-stay" 
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-rose-400 hover:shadow-xs transition-all group block"
            >
              <div className="font-bold text-slate-900 group-hover:text-rose-700 mb-1">世界遺産宗像大社初詣＆鐘崎とらふぐ</div>
              <div className="text-slate-500 text-xs">日本神話の三女神と玄界灘冬絶景・極上宗像牛の名宿</div>
            </Link>
            <Link 
              href="/winter-kumamoto-aso-uchinomaki-onsen-akagyu-caldera-stay" 
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-rose-400 hover:shadow-xs transition-all group block"
            >
              <div className="font-bold text-slate-900 group-hover:text-rose-700 mb-1">阿蘇内牧温泉のカルデラ冬絶景</div>
              <div className="text-slate-500 text-xs">阿蘇山パウダースノーとあか牛丼・広大なカルデラの名湯</div>
            </Link>
            <Link 
              href="/features" 
              className="p-4 rounded-2xl bg-rose-900 text-white hover:bg-rose-950 transition-all block flex flex-col justify-center items-center text-center font-bold"
            >
              <span>全国の冬特集一覧を見る →</span>
              <span className="text-rose-200 text-xs font-normal mt-1">11・12・1月の厳選記事を多数掲載</span>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-kagoshima-city-sakurajima-view-kurobuta-kanburi-onsen-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
