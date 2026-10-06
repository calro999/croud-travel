import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【宮崎市街】本場チキン南蛮＆極上宮崎牛！2,000円台〜泊まれる格安ホテル5選',
  description: '青島神社や高千穂への拠点となる南国宮崎！本場の甘酢タルタルが絡む発祥チキン南蛮や日本一の宮崎牛、地鶏炭火焼き。宮崎駅・橘通り周辺で1泊2,000円台〜3,000円台から泊まれる格安・高コスパホテル5選。',
};

export default function AutumnBudgetFeaturePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pb-24">
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-slate-500 flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-teal-600 transition">ホーム</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/#autumn-features" className="hover:text-teal-600 transition">秋の特集一覧</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-800 font-medium">宮崎市街 本場チキン南蛮・宮崎牛 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-teal-950 via-slate-900 to-sky-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold tracking-wider border border-teal-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>本場発祥チキン南蛮＆極上宮崎牛・地鶏炭火焼</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">
            【宮崎市街】本場チキン南蛮＆宮崎牛へ！<br className="hidden sm:inline" />2,000円台〜泊まれる中心部格安・高コスパ宿5選
          </h1>
          <p className="text-sm md:text-base text-teal-100/90 max-w-2xl mx-auto leading-relaxed">
            南国の心地よい秋風が吹き抜ける宮崎のメインストリート・橘通り！名店「おぐら」で味わう本場発祥のチキン南蛮に、ジューシーな宮崎牛ステーキ、香ばしい地鶏の炭火焼きと本格芋焼酎。ドライブや観光のハブとなる宮崎市中心部で、1泊2,000円台〜3,000円台から泊まれる厳選宿をご紹介。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-teal-600" />
            宿泊代2,000円台〜！浮いた旅費で繁華街「ニシタチ」のハシゴ酒＆極上宮崎牛焼肉へ
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            温暖な気候に恵まれた宮崎は、秋の行楽シーズンに訪れたい絶品グルメの宝庫。宮崎随一の繁華街「西橘通り（ニシタチ）」周辺には、徒歩でハシゴ酒が楽しめるリーズナブルなホテルが多数点在しています。浮いた予算を絶品肉グルメに回して、宮崎の夜を心ゆくまで堪能しましょう。
          </p>
        </div>
      </section>

      {/* 宿一覧 */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">

        {/* 宿1 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-md">橘通り近く・衝撃の2,000円台！コスパ重視の快適拠点</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.04}</span>
                <span className="text-slate-400 text-xs font-normal">（レビュー1375件）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ホテルエリアワン宮崎（ホテルエリアワングループ）
            </h3>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                宮崎県宮崎市末広1-2-21
              </span>
              <span className="flex items-center gap-1">
                <Train className="w-3.5 h-3.5 text-teal-600" />
                宮崎駅近く
              </span>
            </div>
            <div className="grid md:grid-cols-12 gap-6 items-center pt-2">
              <div className="md:col-span-5 relative h-48 md:h-56 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/12635/12635.jpg"
                  alt="ホテルエリアワン宮崎（ホテルエリアワングループ）"
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  繁華街・橘通りから徒歩圏内の便利な立地にあり、1泊2,000円台という驚異的な宿泊料金を実現。機能的な客室と無料Wi-Fiが揃い、浮いた予算をグルメに全振りしたい旅行者にぴったりの宿です。
                </p>
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <span className="text-xs text-slate-400 block">最安目安（1名/1室利用時）</span>
                    <span className="text-xl md:text-2xl font-black text-rose-600">¥2,517〜</span>
                    <span className="text-xs text-slate-500 ml-1">（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12635%2F12635.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs md:text-sm rounded-xl shadow-sm hover:shadow transition transform active:scale-95"
                  >
                    <span>空室・料金を確認</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 宿2 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-md">宮崎駅・繁華街アクセス良好！アットホームな老舗ホテル</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.08}</span>
                <span className="text-slate-400 text-xs font-normal">（レビュー1828件）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              クセになる林荘
            </h3>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                宮崎県宮崎市高松町5-10
              </span>
              <span className="flex items-center gap-1">
                <Train className="w-3.5 h-3.5 text-teal-600" />
                宮崎駅近く
              </span>
            </div>
            <div className="grid md:grid-cols-12 gap-6 items-center pt-2">
              <div className="md:col-span-5 relative h-48 md:h-56 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/138088/138088.jpg"
                  alt="クセになる林荘"
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  宮崎市街地の閑静な場所に位置し、どこか懐かしい温かなおもてなしが心地よいホテル。リーズナブルな価格設定ながら清潔な客室と美味しい朝食が人気で、リピーターの多い隠れた名宿です。
                </p>
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <span className="text-xs text-slate-400 block">最安目安（1名/1室利用時）</span>
                    <span className="text-xl md:text-2xl font-black text-rose-600">¥3,520〜</span>
                    <span className="text-xs text-slate-500 ml-1">（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F138088%2F138088.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs md:text-sm rounded-xl shadow-sm hover:shadow transition transform active:scale-95"
                  >
                    <span>空室・料金を確認</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 宿3 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-md">橘通りの中心に位置・クチコミ★4.32の上質シティホテル</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.32}</span>
                <span className="text-slate-400 text-xs font-normal">（レビュー3627件）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ホテル　メリージュ
            </h3>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                宮崎県宮崎市橘通東3丁目1-11
              </span>
              <span className="flex items-center gap-1">
                <Train className="w-3.5 h-3.5 text-teal-600" />
                宮崎駅近く
              </span>
            </div>
            <div className="grid md:grid-cols-12 gap-6 items-center pt-2">
              <div className="md:col-span-5 relative h-48 md:h-56 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/16092/16092.jpg"
                  alt="ホテル　メリージュ"
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  宮崎市の中心・橘通り交差点近くにそびえるランドマークホテル。広々としたロビーと清潔感のある客室、館内レストランを備え、シティホテルの快適さを手頃な価格で満喫できます。
                </p>
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <span className="text-xs text-slate-400 block">最安目安（1名/1室利用時）</span>
                    <span className="text-xl md:text-2xl font-black text-rose-600">¥4,000〜</span>
                    <span className="text-xs text-slate-500 ml-1">（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16092%2F16092.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs md:text-sm rounded-xl shadow-sm hover:shadow transition transform active:scale-95"
                  >
                    <span>空室・料金を確認</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 宿4 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-md">たまゆら天然温泉＆サウナ完備！繁華街至近の癒し宿</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.09}</span>
                <span className="text-slate-400 text-xs font-normal">（レビュー1082件）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              たまゆら温泉＆サウナ完備の宿　宮崎ライオンズホテル
            </h3>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                宮崎県宮崎市高松町4-39
              </span>
              <span className="flex items-center gap-1">
                <Train className="w-3.5 h-3.5 text-teal-600" />
                宮崎駅近く
              </span>
            </div>
            <div className="grid md:grid-cols-12 gap-6 items-center pt-2">
              <div className="md:col-span-5 relative h-48 md:h-56 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/16813/16813.jpg"
                  alt="たまゆら温泉＆サウナ完備の宿　宮崎ライオンズホテル"
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  宮崎市街地中心部にありながら、美肌の湯として名高い「たまゆら温泉」の天然温泉とドライサウナを完備。ニシタチで美味しい地鶏と焼酎を楽しんだ後、温泉でじっくり温まる最高の贅沢が叶います。
                </p>
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <span className="text-xs text-slate-400 block">最安目安（1名/1室利用時）</span>
                    <span className="text-xl md:text-2xl font-black text-rose-600">¥4,550〜</span>
                    <span className="text-xs text-slate-500 ml-1">（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16813%2F16813.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs md:text-sm rounded-xl shadow-sm hover:shadow transition transform active:scale-95"
                  >
                    <span>空室・料金を確認</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 宿5 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-md">宮崎駅直結の最高立地！JR九州クオリティの上質ステイ</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.34}</span>
                <span className="text-slate-400 text-xs font-normal">（レビュー1865件）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ＪＲ九州ホテル宮崎
            </h3>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                宮崎県宮崎市錦町1-10
              </span>
              <span className="flex items-center gap-1">
                <Train className="w-3.5 h-3.5 text-teal-600" />
                宮崎駅近く
              </span>
            </div>
            <div className="grid md:grid-cols-12 gap-6 items-center pt-2">
              <div className="md:col-span-5 relative h-48 md:h-56 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/135382/135382.jpg"
                  alt="ＪＲ九州ホテル宮崎"
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  JR宮崎駅の改札を出てすぐという圧倒的な利便性。洗練されたモダンなインテリアと快適なシモンズベッドを備え、日南海岸や青島への観光拠点としても抜群の安心感を誇ります。
                </p>
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <span className="text-xs text-slate-400 block">最安目安（1名/1室利用時）</span>
                    <span className="text-xl md:text-2xl font-black text-rose-600">¥5,049〜</span>
                    <span className="text-xs text-slate-500 ml-1">（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F135382%2F135382.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs md:text-sm rounded-xl shadow-sm hover:shadow transition transform active:scale-95"
                  >
                    <span>空室・料金を確認</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* 予約のアドバイス */}
      <section className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 space-y-3">
          <h3 className="text-base font-bold text-amber-900 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-amber-600" />
            秋の格安旅を満喫するための予約ポイント
          </h3>
          <ul className="text-xs md:text-sm text-amber-800/90 space-y-2 list-disc list-inside leading-relaxed">
            <li>秋の行楽・連休シーズンは週末を中心に満室になりやすいため、平日の宿泊や早めの予約がお得です。</li>
            <li>表示価格は各宿の最安プラン目安（税込）です。日程や人数、予約時期によって変動するため最新状況をご確認ください。</li>
            <li>楽天トラベルの毎月「0と5のつく日クーポン」や「宿クーポン」を併用すると、さらに割引が適用される場合があります。</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
