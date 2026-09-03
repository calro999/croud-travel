import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【子連れ金沢旅行 1泊2日モデルコース】ベビーカーOKスポット＆キッズ歓迎・和室ホテルの安心プラン ｜ 日本全国・旅宿クラウド",
  description: "小さなお子様や赤ちゃん連れの金沢1泊2日旅行！21世紀美術館のキッズスペース、兼六園の段差回避ルート、近江町市場の子連れランチ、添い寝無料＆和室ありの金沢駅前おすすめホテルを完全ガイド。",
  keywords: [
    "金沢 子連れ 旅行",
    "金沢 赤ちゃん連れ 1泊2日",
    "金沢 ベビーカー 観光",
    "21世紀美術館 子連れ",
    "兼六園 車椅子 ベビーカー ルート",
    "近江町市場 子連れランチ",
    "金沢 和室 ホテル 子連れ",
    "金沢駅 添い寝無料 ホテル",
    "楽天トラベル 金沢 子連れ"
  ],
};

interface Hotel {
  hotelNo: number;
  hotelName: string;
  hotelSpecial?: string;
  hotelImageUrl?: string;
  hotelMinCharge?: number;
  affiliateUrl: string;
  address1?: string;
  address2?: string;
  access?: string;
  reviewAverage?: number;
  reviewCount?: number;
}

function loadHotels(): Hotel[] {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["family-kanazawa-1night2days-model-course"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for family-kanazawa-1night2days-model-course", e);
  }
  return [];
}

export default function FamilyKanazawaModelCoursePage() {
  const hotels = loadHotels();

  // 金沢子連れモデルコース（時間割）
  const itinerary = [
    {
      day: "DAY 1：新幹線到着からアート＆兼六園めぐり・駅近ホテルチェックイン",
      subtitle: "ベビーカーの移動しやすさを最優先にしたゆったりスケジュール",
      schedule: [
        {
          time: "10:30",
          tag: "金沢駅到着",
          title: "金沢駅「鼓門」記念撮影＆手荷物をコインロッカー・ホテルへ預ける",
          desc: "北陸新幹線で金沢駅に到着。駅構内は段差のないフルフラット。東口のシンボル「鼓門」前で家族写真をパシャリ！まずは駅構内の授乳室（金沢百番街Rinto内）でオムツ替えと水分補給を済ませ、重いスーツケースは駅直結ホテルや観光案内所の手荷物配送サービスに預けて身軽になりましょう。",
          badge: "オムツ替え・授乳室完備"
        },
        {
          time: "11:30",
          tag: "ランチ",
          title: "近江町市場で早めの子連れ海鮮ランチ（座敷・個室狙い）",
          desc: "12時台は大混雑して通路がベビーカーで通りづらくなるため、11時台前半の入店が鉄則！近江町市場内の飲食店には、小上がり座敷のある寿司店や海鮮丼専門店が複数あります。生魚がまだ食べられない小さなお子様には、焼き魚定食やうどん、市場名物の熱々コロッケ・玉子焼きが好評です。",
          badge: "座敷席・ベビーチェア確認推奨"
        },
        {
          time: "13:30",
          tag: "アート体験",
          title: "金沢21世紀美術館：無料交流ゾーン＆芝生広場で伸び伸び",
          desc: "全面ガラス張りで明るい21世紀美術館は、館内全域がバリアフリー。有名なレアンドロのプール（地下部は要事前予約）をはじめ、無料開放ゾーンのカラフルな展示や屋外の芝生広場（カラー・アクティビティ・ハウス）は子どもたちも大興奮。地下1階には絵本が揃うキッズスタジオと清潔な授乳室があります。",
          badge: "授乳室・ベビーカー貸出あり"
        },
        {
          time: "15:45",
          tag: "名勝散策",
          title: "兼六園：桂坂口から入る「車椅子・ベビーカー優先バリアフリールート」",
          desc: "日本三名園の兼六園は砂利道や石段が多い印象ですが、実は公式推奨の「車椅子・ベビーカーらくらく散策マップ」が用意されています。桂坂口料金所からことじ灯籠、霞ヶ池をぐるりと周回する舗装路メインのルートなら、ガタガタ揺れずに快適。池の鯉に子どもも興味津々です。",
          badge: "公式スロープルート利用"
        },
        {
          time: "17:30",
          tag: "チェックイン",
          title: "ホテルへチェックイン＆ゆったり大浴場とお部屋でひと休み",
          desc: "歩き疲れた子どもがぐずり出す前に、夕方早めに宿へチェックイン。和室や靴を脱げる客室なら、赤ちゃんもハイハイで手足を伸ばせます。夕食前に大浴場で汗を流すか、お部屋の洗い場付きバスで入浴を済ませておくと夜がスムーズです。",
          badge: "早めの入浴がぐずり防止"
        }
      ]
    },
    {
      day: "DAY 2：城下町の風情に触れる散歩＆駅ナカお土産ハント",
      subtitle: "お昼寝タイムを計算に入れた無理のない帰宅プラン",
      schedule: [
        {
          time: "08:30",
          tag: "朝食",
          title: "ホテル朝食バイキングで金沢おでん＆加賀野菜を堪能",
          desc: "和洋ビュッフェで子どもが好きな卵料理やパン、フルーツを確保しつつ、パパママは車麩や赤巻が入った名物「金沢おでん」や加賀野菜サラダを朝から満喫。子ども用カトラリーやハイチェアの有無をスタッフに一声かけると親切に対応してくれます。",
          badge: "キッズ用食器完備"
        },
        {
          time: "10:00",
          tag: "散策",
          title: "ひがし茶屋街：石畳の路地散策＆金箔ソフトクリーム体験",
          desc: "木虫籠（きむすこ）と呼ばれる格子窓が美しい城下町へ。石畳は平坦なのでベビーカーでも移動可能。金箔を豪快に1枚乗せた「箔一」の金箔ソフトクリームに子どもたちは大はしゃぎ！浅野川大橋の川沿いベンチでひと休みするのも心地よい時間です。",
          badge: "映えスイーツ＆川沿い休憩"
        },
        {
          time: "12:00",
          tag: "お土産＆出発",
          title: "金沢駅「金沢百番街あんと」でお買い物＆駅弁を買って新幹線へ",
          desc: "帰りの新幹線発車まで駅ビル「あんと」で加賀銘菓や金沢限定おやつをセレクト。新幹線車内でのランチ用に、子どもが大好きな手まり寿司やお子様駅弁をゲット。帰りの車内では心地よい揺れでお子様もお昼寝タイムに入り、親もホッと一息つけます。",
          badge: "駅ナカ完結でお土産購入"
        }
      ]
    }
  ];

  // パパママ目線の金沢子連れ攻略ポイント
  const babyProTips = [
    {
      icon: "🚼",
      title: "兼六園は「真弓坂口」ではなく「桂坂口」から入るべし",
      desc: "真弓坂口や蓮池門側は急勾配の坂道や段差が多め。観光案内所でバリアフリーマップをもらい、平坦なスロープが整備された「桂坂口」から入場するのがベビーカー押しの鉄則です。"
    },
    {
      icon: "🚌",
      title: "週末の城下まち金沢周遊バスは混雑！「タクシーワンメーター活用」が神",
      desc: "金沢市内の主要観光地は半径約2km圏内に集中。週末の周遊バスはベビーカーを折りたたむのが大変な満員になることも。主要スポット間はタクシーなら約800〜1,200円で即移動でき、子どもの機嫌を損ねません。"
    },
    {
      icon: "🍱",
      title: "近江町市場の海鮮丼は「11:00入店」または「テイクアウト」",
      desc: "12時を過ぎると有名店は60分待ちもザラ。11時前の開店直後を狙うか、市場内の惣菜店で海鮮巻きやコロッケを買って、2階の無料飲食休憩スペース（キッズ対応ベンチあり）で食べるのが穴場ワザ。"
    },
    {
      icon: "🌧️",
      title: "「弁当忘れても傘忘れるな」金沢の雨対策＆室内退避スポット",
      desc: "天気が変わりやすい金沢。折りたたみ傘とベビーカー用レインカバーは必携。万が一の雨天時は、21世紀美術館のキッズスタジオや、金沢駅直結の金沢百番街、県立歴史博物館などが屋内で安心して楽しめます。"
    }
  ];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-20 font-sans text-stone-800">
      {/* ヒーローセクション（Emerald Palette） */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-950 via-teal-900 to-emerald-900 text-white p-8 md:p-14 shadow-2xl border border-emerald-700/40">
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] md:text-xs font-black tracking-widest bg-emerald-500/30 text-emerald-200 border border-emerald-400/40 px-3.5 py-1 rounded-full uppercase shadow-sm">
              KANAZAWA FAMILY GUIDE
            </span>
            <span className="text-xs font-bold bg-amber-400 text-stone-950 px-3 py-1 rounded-full shadow font-semibold">
              ベビーカー＆未就学児対応
            </span>
            <span className="text-xs font-bold bg-white/20 text-white backdrop-blur px-3 py-1 rounded-full">
              1泊2日保存版
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【子連れ金沢旅行 1泊2日モデルコース】<br />
            <span className="text-emerald-300">ベビーカーOKスポット＆キッズ歓迎・和室ホテルの安心プラン</span>
          </h1>

          <p className="text-sm md:text-base text-emerald-100/90 leading-relaxed font-normal pt-1">
            歴史と伝統が息づく街・金沢。「石段や段差が多くてベビーカーは大変そう…」「子どもが騒いでも安心な和室ホテルはある？」と悩むパパママへ。21世紀美術館の授乳室情報から、兼六園のバリアフリールート、近江町市場の混雑回避ランチ、添い寝無料の金沢駅前おすすめ宿まで、リアルな子連れノウハウを凝縮しました！
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs md:text-sm text-emerald-200">
            <span className="flex items-center gap-1.5">
              <span className="text-amber-300 font-bold">✓</span> 兼六園の段差ゼロ回避ルート
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-amber-300 font-bold">✓</span> 21美キッズスタジオ＆芝生広場
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-amber-300 font-bold">✓</span> 靴を脱げる和室・一棟貸し町家厳選
            </span>
          </div>
        </div>
      </section>

      {/* 楽天トラベル公式 ファミリー応援クーポンバナー */}
      <SpecialCouponBanner variant="prominent" />

      {/* 内部リンク・関連ガイドナビゲーション */}
      <nav className="bg-emerald-50/80 border border-emerald-200/90 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm md:text-base font-black text-emerald-950 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
            金沢旅行の交通・予算ガイド（あわせて読みたい）
          </h2>
          <span className="text-[10px] text-emerald-700 bg-emerald-100/70 font-bold px-2 py-0.5 rounded">
            計画お役立ちリンク
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm">
          <Link
            href="/tokyo-kanazawa-bus-vs-shinkansen-guide"
            className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-emerald-200/60 hover:border-emerald-500 hover:shadow transition group"
          >
            <span className="text-emerald-600 font-bold text-base">🚅</span>
            <div>
              <span className="font-bold text-emerald-950 group-hover:text-emerald-700 transition block">
                東京〜金沢 交通比較ガイド
              </span>
              <span className="text-[11px] text-stone-500">
                新幹線指定席 vs 高速バスの料金・所要時間＆子連れ移動の注意点
              </span>
            </div>
          </Link>
          <Link
            href="/kanazawa-travel-budget-guide"
            className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-emerald-200/60 hover:border-emerald-500 hover:shadow transition group"
          >
            <span className="text-emerald-600 font-bold text-base">💰</span>
            <div>
              <span className="font-bold text-emerald-950 group-hover:text-emerald-700 transition block">
                金沢旅行 1泊2日・2泊3日 費用シミュレーション
              </span>
              <span className="text-[11px] text-stone-500">
                交通費・ホテル代・グルメ代のリアルな総額と節約テクニック
              </span>
            </div>
          </Link>
        </div>
      </nav>

      {/* 🗺️ 1泊2日タイムスケジュールセクション */}
      <section className="bg-white border border-stone-200 rounded-3xl p-6 md:p-10 shadow-sm space-y-8">
        <div className="border-b border-emerald-900/10 pb-4">
          <div className="flex items-center gap-2 text-emerald-700 font-extrabold text-xs uppercase tracking-wider mb-1">
            <span>🗺️ MODEL ITINERARY</span>
          </div>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-stone-900">
            ベビーカー連れでも疲れない！金沢1泊2日王道モデルコース
          </h2>
          <p className="text-xs md:text-sm text-stone-600 mt-1">
            お昼寝時間やオムツ替えタイミングを無理なく組み込んだ、ファミリーのための安心工程表です。
          </p>
        </div>

        <div className="space-y-10">
          {itinerary.map((dayPlan, dIdx) => (
            <div key={dIdx} className="space-y-4">
              <div className="bg-emerald-50/70 border border-emerald-200 p-4 rounded-2xl">
                <h3 className="text-base md:text-lg font-black text-emerald-950">
                  {dayPlan.day}
                </h3>
                <p className="text-xs text-emerald-800/80 mt-0.5">
                  {dayPlan.subtitle}
                </p>
              </div>

              <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-3 before:bottom-3 before:w-0.5 before:bg-emerald-200">
                {dayPlan.schedule.map((step, sIdx) => (
                  <div key={sIdx} className="relative space-y-1.5">
                    <div className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-emerald-600 border-2 border-white shadow-sm" />
                    
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-black bg-emerald-900 text-emerald-100 px-2.5 py-0.5 rounded">
                        {step.time}
                      </span>
                      <span className="text-[11px] font-bold text-teal-800 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded">
                        {step.tag}
                      </span>
                      <span className="text-[10px] font-bold text-amber-900 bg-amber-100/80 px-2 py-0.5 rounded ml-auto">
                        {step.badge}
                      </span>
                    </div>

                    <h4 className="text-sm md:text-base font-bold text-stone-900 pt-0.5">
                      {step.title}
                    </h4>

                    <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 💡 パパママ必見！金沢子連れ4大アドバイス */}
      <section className="bg-gradient-to-br from-teal-50 via-emerald-50 to-stone-50 border border-emerald-200 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <div className="border-b border-emerald-200 pb-3">
          <div className="flex items-center gap-2 text-teal-800 font-extrabold text-xs uppercase tracking-wider mb-1">
            <span>💡 PRACTICAL TIPS</span>
          </div>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-emerald-950">
            現役トラベルライター伝授！金沢子連れ旅行で後悔しない4大チェックポイント
          </h2>
          <p className="text-xs md:text-sm text-stone-600 mt-1">
            出発前に知っておくだけで現地の移動ストレスやトラブルが劇的に減る実践テクニック。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {babyProTips.map((tip, idx) => (
            <div key={idx} className="bg-white border border-emerald-100 rounded-2xl p-5 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{tip.icon}</span>
                <h3 className="text-sm font-bold text-emerald-950 leading-snug">
                  {tip.title}
                </h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 🏨 厳選宿セクション */}
      <section className="bg-white border border-stone-200 rounded-3xl p-6 md:p-10 shadow-sm space-y-8">
        <div className="border-b border-stone-100 pb-4">
          <div className="flex items-center gap-2 text-emerald-700 font-extrabold text-xs uppercase tracking-wider mb-1">
            <span>🏨 RECOMMENDED FAMILY HOTELS</span>
          </div>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-stone-900">
            金沢駅徒歩圏＆和室・大浴場あり！子連れファミリー向け厳選宿泊先
          </h2>
          <p className="text-xs md:text-sm text-stone-600 mt-1">
            添い寝歓迎、靴を脱げる和室、一棟貸し町家など、お子様連れでも気兼ねなく寛げるホテル＆宿をピックアップ。
          </p>
        </div>

        {hotels.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {hotels.map((hotel) => (
              <article
                key={hotel.hotelNo}
                className="flex flex-col justify-between border border-emerald-900/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
              >
                <div>
                  <div className="aspect-video relative overflow-hidden bg-emerald-50 border-b border-emerald-950/5">
                    {hotel.hotelImageUrl ? (
                      <img
                        src={hotel.hotelImageUrl}
                        alt={hotel.hotelName}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-emerald-950/30 text-xs font-bold">
                        {hotel.hotelName}
                      </div>
                    )}
                    {hotel.hotelMinCharge && hotel.hotelMinCharge > 0 ? (
                      <span className="absolute bottom-2 right-2 text-[10px] font-black bg-stone-900/90 text-amber-300 px-2 py-0.5 rounded shadow">
                        ¥{Number(hotel.hotelMinCharge).toLocaleString()}〜
                      </span>
                    ) : null}
                  </div>

                  <div className="p-4 space-y-2">
                    {hotel.reviewAverage && hotel.reviewAverage > 0 ? (
                      <div className="flex items-center justify-between text-[10px] font-bold text-amber-600">
                        <span>⭐ {hotel.reviewAverage}点（{hotel.reviewCount || 0}件）</span>
                      </div>
                    ) : null}
                    
                    <h3 className="text-xs md:text-sm font-black font-journal-serif text-stone-900 line-clamp-2">
                      {hotel.hotelName}
                    </h3>

                    <p className="text-[11px] text-stone-600 line-clamp-2 font-medium">
                      {hotel.hotelSpecial || ""}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 rounded-xl shadow hover:shadow-md transition"
                  >
                    🏨 楽天トラベルで空室・プランを見る
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center text-stone-500 text-xs">
            ホテル情報を読み込み中または該当ホテルを検索中です。
          </div>
        )}
      </section>

      {/* 予約前チェックリスト＆楽天トラベルまとめ */}
      <section className="bg-emerald-950 text-white rounded-3xl p-6 md:p-10 shadow-xl border border-emerald-800 space-y-6">
        <div className="space-y-2 border-b border-emerald-800 pb-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3 py-0.5 rounded-full uppercase">
              RESERVATION CHECKLIST
            </span>
            <span className="text-xs text-emerald-200 font-bold">
              失敗しない宿泊予約のコツ
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-white">
            赤ちゃん・幼児連れ予約で備考欄に書いておきたい3つの要望
          </h2>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm text-emerald-100">
          <li className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-1">
            <span className="font-bold text-amber-300 block text-sm">1. ベッドの壁付け・ガード</span>
            <p className="text-emerald-200 leading-relaxed text-xs">
              洋室利用時は「ベッドを壁側に寄せて隙間をなくしてほしい」または「ベッドガードの貸出希望」を予約時に記載しておくと、落下の心配なく安眠できます。
            </p>
          </li>
          <li className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-1">
            <span className="font-bold text-amber-300 block text-sm">2. おむつ専用ゴミ箱の貸出</span>
            <p className="text-emerald-200 leading-relaxed text-xs">
              多くのファミリー歓迎ホテルでおむつペール（消臭ゴミ箱）を用意しています。客室の匂い残りを防ぎ、パパママもストレスなく過ごせます。
            </p>
          </li>
          <li className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-1">
            <span className="font-bold text-amber-300 block text-sm">3. 加湿空気清浄機＆調乳ケトル</span>
            <p className="text-emerald-200 leading-relaxed text-xs">
              乾燥しやすいホテル客室。加湿器の事前稼働や、ミルク調乳に便利な70℃設定可能な電気ケトルの手配を相談しておくと到着後すぐに授乳できます。
            </p>
          </li>
        </ul>

        <div className="pt-2 text-center">
          <a
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Fcoupon-week%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 text-stone-950 font-black text-sm rounded-2xl shadow-lg hover:shadow-xl hover:brightness-105 transition"
          >
            <span>🎟️ 楽天トラベルの最新割引クーポンを獲得して金沢宿を予約する</span>
            <span>→</span>
          </a>
        </div>
      </section>

      {/* 47都道府県トップへのリンク */}
      <div className="text-center pt-4">
        <Link
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-stone-700 bg-white hover:bg-emerald-50 border border-stone-300 hover:border-emerald-400 px-6 py-3 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の厳選ホテル・旅館一覧を見る</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
