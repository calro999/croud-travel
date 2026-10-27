import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-budget-oita-yufudake-momiji-toriten-hotels-stay/",
  },

  title: '大分：由布岳・くじゅう連山紅葉拠点＆豊後グルメ！2,000円台〜格安ホテル5選',
  description: 'くじゅう連山・由布岳の山肌を染める一面のススキと紅葉！本場の関あじ・とり天・豊後牛を堪能。大分駅前で1泊2,000円台〜3,000円台で泊まれる超高コスパホテル厳選5選。',
  openGraph: {
    title: "大分：由布岳・くじゅう連山紅葉拠点＆豊後グルメ！2,000円台〜格安ホテル5選",
    description: "くじゅう連山・由布岳の山肌を染める一面のススキと紅葉！本場の関あじ・とり天・豊後牛を堪能。大分駅前で1泊2,000円台〜3,000円台で泊まれる超高コスパホテル厳選5選。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "大分：由布岳・くじゅう連山紅葉拠点＆豊後グルメ！2,000円台〜格安ホテル5選",
    description: "くじゅう連山・由布岳の山肌を染める一面のススキと紅葉！本場の関あじ・とり天・豊後牛を堪能。大分駅前で1泊2,000円台〜3,000円台で泊まれる超高コスパホテル厳選5選。",
  }
};

export default function AutumnBudgetOitaHotelsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"大分：由布岳・くじゅう連山紅葉拠点＆豊後グルメ！2,000円台〜格安ホテル5選\",\"description\":\"くじゅう連山・由布岳の山肌を染める一面のススキと紅葉！本場の関あじ・とり天・豊後牛を堪能。大分駅前で1泊2,000円台〜3,000円台で泊まれる超高コスパホテル厳選5選。\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-oita-yufudake-momiji-toriten-hotels-stay/\",\"datePublished\":\"2026-10-18T12:00:00+09:00\",\"dateModified\":\"2026-10-19T07:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"日本全国・旅宿クラウド 編集部\",\"url\":\"https://croud-travel.pages.dev/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"日本全国・旅宿クラウド\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://croud-travel.pages.dev/icon.png\"}}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://croud-travel.pages.dev/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"特集一覧\",\"item\":\"https://croud-travel.pages.dev/features/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"大分：由布岳・くじゅう連山紅葉拠点＆豊後グルメ！2,000円台〜格安ホテル5選\",\"item\":\"https://croud-travel.pages.dev/autumn-budget-oita-yufudake-momiji-toriten-hotels-stay/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"ItemList\",\"name\":\"大分：由布岳・くじゅう連山紅葉拠点＆豊後グルメ！2,000円台〜格安ホテル5選\",\"numberOfItems\":9,\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"アパホテル〈大分駅前〉\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-oita-yufudake-momiji-toriten-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"由布院温泉　ゆふいん山水館\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-oita-yufudake-momiji-toriten-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"ホテル日航大分　オアシスタワー\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-oita-yufudake-momiji-toriten-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":4,\"name\":\"別府温泉　ホテルニューツルタ\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-oita-yufudake-momiji-toriten-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":5,\"name\":\"別府温泉　ホテル好楽\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-oita-yufudake-momiji-toriten-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":6,\"name\":\"別府地獄めぐり\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-oita-yufudake-momiji-toriten-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":7,\"name\":\"由布院（金鱗湖・辻馬車）\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-oita-yufudake-momiji-toriten-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":8,\"name\":\"九重“夢”大吊橋\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-oita-yufudake-momiji-toriten-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":9,\"name\":\"宇佐神宮\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-oita-yufudake-momiji-toriten-hotels-stay/\"}]}" }} />
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-slate-500 flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-amber-600 transition">ホーム</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/#autumn-features" className="hover:text-amber-600 transition">秋の特集一覧</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-800 font-medium">大分 由布岳紅葉・豊後グルメ 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-amber-950 via-yellow-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-wider border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>由布岳くじゅう紅葉ドライブ＆本場とり天</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">「大分」由布岳紅葉拠点＆豊後グルメを満喫！<br className="hidden sm:inline" />2,000円台〜泊まれる格安・高コスパ宿5選</h1>
          <p className="text-sm md:text-base text-amber-100/90 max-w-2xl mx-auto leading-relaxed">
            金鱗湖の朝霧や由布岳、くじゅう連山を黄金色に染め上げるススキと錦秋の絶景！夜は大分駅前の繁華街「都町」でサクサク揚げたての元祖とり天、脂の乗った関あじ関さば、豊後牛を堪能。別府・由布院の宿が高騰する秋も、大分駅前に泊まれば2,000円台からの破格ステイが叶います。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-amber-600" />
            宿泊代2,000円台！浮いた予算で高級関あじ姿造り＆豊後牛ステーキへ
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            由布院や別府へJRや車で30分圏内とアクセス抜群な大分駅周辺。温泉観光地の旅館が数万円に跳ね上がる秋シーズンでも、大分駅前なら★4.0以上の快適なシティホテルが2,000円〜3,000円台で予約可能。賢く宿泊費を浮かせて、昼は絶景ドライブ、夜は贅沢な豊後水道の旬魚に舌鼓を打ちましょう。
          </p>
        </div>
      </section>

      
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">豊後・名峰絶景ガイド：豊後富士・由布岳の裾野に広がる草原と紅葉</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Yuhudake.jpg"
                alt="豊後富士・由布岳の裾野に広がる草原と紅葉"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">豊後富士・由布岳の裾野に広がる草原と紅葉の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">由布岳（ゆふだけ、油布嶽）は、大分県由布市にある標高1,583メートルの活火山。山体が阿蘇くじゅう国立公園に指定されている。</p>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                <span className="text-teal-700 font-semibold">現地観光・散策推奨スポット</span>
              </div>
            </div>
          </div>
        </section>

      {/* 宿一覧 */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">
        {/* 宿1 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">衝撃の2,000円〜・洗練モダン</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.1}</span>
                <span className="text-slate-400 text-xs font-normal">（破格プライス）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              アートホテル大分
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>大分</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/172891/172891.jpg" alt="アートホテル大分" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  大分駅府内中央口より徒歩圏内。1泊2,000円台前半という驚愕プライスながら、清潔で広々としたベッドと機能的なデスクを備え、一人旅やドライブ旅行に絶大な支持を得ています。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥2,070<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172891%2F172891.html" target="_blank" rel="sponsored noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿2 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-md">都町繁華街すぐ・驚きの低価格</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.09}</span>
                <span className="text-slate-400 text-xs font-normal">（飲み歩き最適）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ホテルマイステイズ大分
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>大分</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/67983/67983.jpg" alt="ホテルマイステイズ大分" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  大分最大の飲食店街「都町」のすぐそばに位置し、夜遅くまで名物とり天や居酒屋巡りを満喫したい方に最適。シンプルで快適な客室空間が2,000円台で手に入ります。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥2,080<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67983%2F67983.html" target="_blank" rel="sponsored noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿3 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-md">評価★4.45・極上くつろぎ空間</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.45}</span>
                <span className="text-slate-400 text-xs font-normal">（市内最高峰人気）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ＦＯＲＺＡ　ホテルフォルツァ大分
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>大分</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/72040/72040.jpg" alt="ＦＯＲＺＡ　ホテルフォルツァ大分" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  クチコミ評価★4.45を誇る大人気ホテル！全室にiPadや上質なマッサージクッションを備え、贅沢で心地よいステイ体験を2,000円台後半で提供するコスパ最強の宿。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥2,850<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72040%2F72040.html" target="_blank" rel="sponsored noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿4 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-red-100 text-red-800 text-xs font-bold rounded-md">準天然人工温泉・名物郷土朝食</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.28}</span>
                <span className="text-slate-400 text-xs font-normal">（大浴場＆郷土朝食）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ホテル法華クラブ大分
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>大分</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/117/117.jpg" alt="ホテル法華クラブ大分" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  JR大分駅より徒歩約8分。最上階に足を伸ばせる人工温泉大浴場を完備。朝食バイキングでは郷土料理「りゅうきゅう」や「とり天」を朝から堪能できます。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥3,000<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F117%2F117.html" target="_blank" rel="sponsored noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿5 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-stone-100 text-stone-800 text-xs font-bold rounded-md">大分駅前すぐ・清潔機能的空間</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.37}</span>
                <span className="text-slate-400 text-xs font-normal">（駅前安心）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              アパホテル〈大分駅前〉
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>大分</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/197319/197319.jpg" alt="アパホテル〈大分駅前〉" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  JR大分駅府内中央口（北口）徒歩わずか1分。駅直結感覚の抜群のアクセスで、翌朝の由布院行き特急列車やレンタカードライブへの出発も極めてスムーズです。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥3,200<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F197319%2F197319.html" target="_blank" rel="sponsored noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-gradient-to-r from-stone-900 to-amber-950 text-white rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2 text-amber-300">
            <CheckCircle2 className="w-5 h-5" />
            秋の大分・由布岳ドライブの満喫ポイント
          </h2>
          <p className="text-sm text-amber-100 leading-relaxed">
            やまなみハイウェイから見上げる由布岳・くじゅう連山のススキ原は10月中旬〜11月上旬が絶景のピーク。大分市内の居酒屋では、秋に旬を迎える関あじや関さばの姿造り、新鮮なブリの漬け丼「りゅうきゅう」をぜひ注文してみてください。
          </p>
          <div className="pt-2">
            <Link href="/#autumn-features" className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-white transition underline">
              秋の旅行特集一覧へ戻る <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    
        {/* Enriched Rakuten API & Wikipedia Tourist Guide */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 大分：由布岳・くじゅう連山紅葉拠点＆豊後グルメ！2,000円台〜格安ホテル5選：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「大分：由布岳・くじゅう連山紅葉拠点＆豊後グルメ！2,000円台〜格安ホテル5選」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse bg-white rounded-xl overflow-hidden border border-stone-200">
              <thead>
                <tr className="bg-stone-900 text-white font-bold">
                  <th className="p-3">宿名</th>
                  <th className="p-3">所在地</th>
                  <th className="p-3">最寄り駅・交通</th>
                  <th className="p-3">駐車場情報</th>
                  <th className="p-3">楽天評価</th>
                  <th className="p-3">最安目安</th>
                  <th className="p-3">予約・詳細</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">1. アパホテル〈大分駅前〉</td>
                <td className="p-3 text-stone-600">大分県大分市金池町1-1-1</td>
                <td className="p-3 text-stone-600">大分駅周辺</td>
                <td className="p-3 text-stone-600">10台(身障者用1台含む)　1泊1,000円(税込)　予約不可　先着順　提携駐車場あり</td>
                <td className="p-3 font-bold text-amber-600">★4.36（693件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,200〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F197319%2F197319.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 由布院温泉　ゆふいん山水館</td>
                <td className="p-3 text-stone-600">大分県由布市湯布院町大字川南108-1</td>
                <td className="p-3 text-stone-600">由布院駅周辺</td>
                <td className="p-3 text-stone-600">有り　乗用車　約60台　大型バス　約6台　料金は宿泊者無料</td>
                <td className="p-3 font-bold text-amber-600">★4.39（882件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1678%2F1678.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. ホテル日航大分　オアシスタワー</td>
                <td className="p-3 text-stone-600">大分県大分市高砂町2-48</td>
                <td className="p-3 text-stone-600">大分駅周辺</td>
                <td className="p-3 text-stone-600">一律料金（ご1泊あたり1,000円）にてご利用頂けます。駐車場の入り口はプラン詳細をご確認ください</td>
                <td className="p-3 font-bold text-amber-600">★4.37（2678件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,375〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1801%2F1801.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 別府温泉　ホテルニューツルタ</td>
                <td className="p-3 text-stone-600">大分県別府市北浜1-14-15</td>
                <td className="p-3 text-stone-600">大分駅周辺</td>
                <td className="p-3 text-stone-600">入庫後21時間：最大700円・駐車場は有料＆先着順。満車の場合はご利用いただけないことがございます。</td>
                <td className="p-3 font-bold text-amber-600">★4.24（1215件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1938%2F1938.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 別府温泉　ホテル好楽</td>
                <td className="p-3 text-stone-600">大分県別府市北浜3-13-21</td>
                <td className="p-3 text-stone-600">別府（大分）駅周辺</td>
                <td className="p-3 text-stone-600">有り　40台　1泊550円</td>
                <td className="p-3 font-bold text-amber-600">★3.88（707件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,860〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4765%2F4765.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-amber-600 pl-3">
              🏨 各宿の宿泊者リアルクチコミ・客室イメージ・項目別評価データ
            </h3>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #1</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">アパホテル〈大分駅前〉</h3>
                  <span className="text-xs text-stone-400 ml-2">（あぱほてるおおいたえきまえ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,200〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/197319/197319.jpg" alt="アパホテル〈大分駅前〉 客室・施設イメージ" className="w-full h-full object-cover" loading="eager" fetchPriority="high" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>2025年12月3日（水）開業！温泉大浴場を完備し、ルーフトップバーから夜景をお楽しみいただけます。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 大分県大分市金池町1-1-1 ／ 最寄り駅：大分 ／ 交通案内：JR大分駅（北口）から徒歩1分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>10台(身障者用1台含む)　1泊1,000円(税込)　予約不可　先着順　提携駐車場あり</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「設備は気が利いているが清掃が行き届かず残念まだ新しい建物で設備面や備品は気が効いているところがあって良いと思いました。ただカーペットに以前の宿泊者のものであろう髪の毛がかなり絡まっていて、気分…　2026-08-21 19:52:07投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">由布院温泉　ゆふいん山水館</h3>
                  <span className="text-xs text-stone-400 ml-2">（ゆふいんおんせん　ゆふいんさんすいかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/1678/1678_heya.jpg" alt="由布院温泉　ゆふいん山水館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【ドリンクインクルーシブ】 滞在中のドリンクが飲み放題！。由布岳を目の前に望む絶景露天風呂が自慢。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 大分県由布市湯布院町大字川南108-1 ／ 最寄り駅：由布院 ／ 交通案内：ＪＲ由布院駅より徒歩約８分。大分自動車道湯布院ＩＣより車で約１５分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　乗用車　約60台　大型バス　約6台　料金は宿泊者無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「お酒飲み放題とバイキング料理に大満足!お酒飲み放題最高でした夕食のバイキングも全部美味しかったです!クチコミの詳細はこちらから　https://review.travel.rakuten.…　2026-08-21 18:53:24投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテル日航大分　オアシスタワー</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほてるにっこうおおいた　おあしすたわー）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,375〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/1801/1801_tw.jpg" alt="ホテル日航大分　オアシスタワー 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>街の中心に位置する利便性と、大分の空や別府の海を望む客室。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 大分県大分市高砂町2-48 ／ 最寄り駅：大分 ／ 交通案内：（JR大分駅から）徒歩で約10分（大分ＩＣから）車で約１５分（大分空港から）高速バスで約６０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>一律料金（ご1泊あたり1,000円）にてご利用頂けます。駐車場の入り口はプラン詳細をご確認ください</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.43 ／ 立地 ★4.39 ／ 部屋 ★4.4 ／ 設備 ★4.28 ／ 風呂 ★4.21 ／ 食事 ★4.36</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「部屋からの眺めが最高でゆっくりくつろげる部屋からの眺め最高です。ゆっくりくつろげます。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp…　2026-10-08 23:32:55投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">別府温泉　ホテルニューツルタ</h3>
                  <span className="text-xs text-stone-400 ml-2">（べっぷおんせん　ほてるにゅーつるた）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/1938/1938_room.jpg" alt="別府温泉　ホテルニューツルタ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>別府湾を望む、まちなかに立地。地上20ｍにある大浴場からは別府湾が一望！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 大分県別府市北浜1-14-15 ／ 最寄り駅：大分 ／ 交通案内：ＪＲ別府駅より徒歩8分。別府ＩＣより車で約15分。駐車場先着順、入庫後21時間最大700円。全室ロビー無料Wi-fi</p>
                  <p><strong>【駐車場・マイカー利用】</strong>入庫後21時間：最大700円・駐車場は有料＆先着順。満車の場合はご利用いただけないことがございます。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「施設は古めだが温泉と朝食は十分満足施設は少し古めですが、温泉、朝食とも十分楽しめました。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/ho…　2026-08-21 13:05:51投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">別府温泉　ホテル好楽</h3>
                  <span className="text-xs text-stone-400 ml-2">（べっぷおんせん　こうらく）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,860〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/4765/4765_room.jpg" alt="別府温泉　ホテル好楽 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>別府温泉の中心地に位置する好立地で源泉かけ流しの露天風呂を堪能＆ワンちゃんOKな客室あり！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 大分県別府市北浜3-13-21 ／ 最寄り駅：別府（大分） ／ 交通案内：別府駅から徒歩10分、北浜バス停（福岡からの高速バス降り口）から2分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　40台　1泊550円</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「親切な接客と綺麗な室内、愛犬と快適な時間親切な接客でした。室内も綺麗で、犬とお泊まりできてよかったです。また利用したいです。クチコミの詳細はこちらから　https://review.t…　2026-08-16 16:54:52投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！大分県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、大分県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">別府地獄めぐり</h3>
                <p className="text-xs text-stone-600 leading-relaxed">源泉数・湧出量日本一を誇る別府温泉の代表的観光コース。コバルトブルーの「海地獄」や真っ赤な「血の池地獄」、噴気で蒸す地獄蒸し料理が楽しめます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/Yufuin_Onsen_-Mus%C5%8Den_02.jpg/1280px-Yufuin_Onsen_-Mus%C5%8Den_02.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="由布院（金鱗湖・辻馬車）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">由布院（金鱗湖・辻馬車）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">由布岳の麓に広がる全国屈指のおしゃれな温泉リゾート。清水と温泉が湧き出て朝霧が立ち込める「金鱗湖」や湯の坪街道のスイーツ巡りが女性に大人気です。 由布院温泉（ゆふいんおんせん）は、大分県由布市（旧国豊後国速見郡）にある温泉。由布岳（標高1,584m）の麓に広がる温泉地である。 温泉湧出量、源泉数ともに全国2位の豊富な湯量を誇る。1959年5月5日に湯平温泉とともに「湯布院温泉」として国民保養温泉地に指定され、2019年10月4日には、由布市内の塚原温泉・庄内温泉・挾間温泉を含めた「湯布院温泉郷」として…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">九重“夢”大吊橋</h3>
                <p className="text-xs text-stone-600 leading-relaxed">水面からの高さ173m、全長390mを誇る日本一高い歩行者専用吊り橋。橋の上からは「日本の滝百選」の震動の滝や九酔渓の壮大なパノラマを見渡せます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">宇佐神宮</h3>
                <p className="text-xs text-stone-600 leading-relaxed">全国に40,000社以上ある八幡社の総本宮。豊かな原生林に包まれた広大な敷地に朱塗りの本殿が建ち、伊勢神宮に並ぶ二拝四拍手一拝の参拝様式が特徴です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 大分県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 大分県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <HubRelatedPosts currentSlug="autumn-budget-oita-yufudake-momiji-toriten-hotels-stay" />
        </div>

      </main>
  );
}
