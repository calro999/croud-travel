import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【浜松・浜名湖】秋の旬うなぎと湖畔の絶景夕陽！格安・高コスパホテル5選',
  description: '脂がのって一番旨い秋の「旬うなぎ」と浜名湖の感動的なサンセット！1泊2,000円台〜5,000円台で泊まれる浜松駅前＆浜名湖畔のコスパ抜群・高評価ホテル厳選5選。',
};

export default function AutumnBudgetHamamatsuHotelsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pb-24">
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-slate-500 flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-orange-600 transition">ホーム</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/#autumn-features" className="hover:text-orange-600 transition">秋の特集一覧</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-800 font-medium">浜松・浜名湖 格安・高コスパ宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-orange-950 via-amber-900 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-semibold tracking-wider border border-orange-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>秋が一番旨い旬の鰻と湖畔サンセット</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">
            【浜松・浜名湖】秋うなぎ＆浜名湖の夕陽を満喫！<br className="hidden sm:inline" />2,000円台〜泊まれる格安・高コスパ宿5選
          </h1>
          <p className="text-sm md:text-base text-orange-100/90 max-w-2xl mx-auto leading-relaxed">
            冬眠に備えて脂が乗り、年間で最も美味とされる「秋の鰻（うなぎ）」。さらに浜名湖弁天島に沈む息を呑む夕陽や浜松餃子の食べ比べなど、秋の浜松は見どころ満載。宿泊費を抑えて名物グルメを味わい尽くす厳選ホテルをご紹介します。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-orange-600" />
            実は秋こそが「天然うなぎ」の真の旬！賢く浮かせた宿泊費で名店へ
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            土用の丑の日のイメージが強いうなぎですが、本来最も脂がのってふっくら香ばしい旬は水温が下がる秋から初冬にかけて。浜松駅周辺の老舗鰻屋やカリッと焼き上げた浜松餃子など、ご当地グルメ巡りは最高の秋の贅沢です。駅前＆湖畔の優良格安ホテルに泊まって、グルメ旅を思い切り満喫しましょう。
          </p>
        </div>
      </section>

      {/* 宿一覧 */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">
        {/* 宿1 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-md">2,000円台〜・健康朝食無料</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.22}</span>
                <span className="text-slate-400 text-xs font-normal">（価格破壊コスパ）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              スーパーホテル浜松　天然温泉　富士見の湯
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>ＪＲ浜松駅より車で約５分</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/67364/67364.jpg" alt="スーパーホテル浜松　天然温泉　富士見の湯" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  1泊2,800円〜という衝撃のリーズナブルさ！毎朝焼き上げるオーガニック健康朝食バイキングが無料で付き、ウェルカムバーではアルコールも楽しめます。コスパ最優先派には外せない一軒。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥2,800<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbvd826.g0190dd6.2qbve0a2/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67364%2F67364.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿2 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-md">無料駐車場＆朝食付き・車旅に最適</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.15}</span>
                <span className="text-slate-400 text-xs font-normal">（ドライブ便利）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ホテル玄　浜松インター
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>東名高速道路「浜松IC」より車で３分</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/74300/74300.jpg" alt="ホテル玄　浜松インター" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  東名浜松ICすぐそばの好立地で普通車駐車場が完全無料。さらに手作り朝食バイキング付きで3,000円台半ば。浜名湖一周ドライブやうなぎ街道巡りのマイカー旅行に最適です。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥3,562<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbvd826.g0190dd6.2qbve0a2/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F74300%2F74300.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿3 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">浜松駅南口徒歩1分・大浴場＆ハッピーアワー</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.14}</span>
                <span className="text-slate-400 text-xs font-normal">（駅近快適）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              くれたけイン浜松駅南口プレミアム
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>JR浜松駅「南口」より徒歩１分</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/147318/147318.jpg" alt="くれたけイン浜松駅南口プレミアム" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  新幹線・JR浜松駅南口の目の前。ゆったり手足を伸ばせる大浴場とサウナを備え、夕方にはワンドリンク無料のハッピーアワーも実施。3,000円台で快適な駅前滞在が叶います。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥3,900<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbvd826.g0190dd6.2qbve0a2/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147318%2F147318.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿4 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-stone-100 text-stone-800 text-xs font-bold rounded-md">評価★4.40・上質モダンステイ</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.4}</span>
                <span className="text-slate-400 text-xs font-normal">（満足度◎）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ダイワロイネットホテル浜松
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>JR浜松駅「北口」より徒歩3分</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/72584/72584.jpg" alt="ダイワロイネットホテル浜松" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  JR浜松駅北口より徒歩3分。広々としたデスクと上質なベッドを備えたワンランク上の客室クオリティで高評価を獲得。繁華街へもすぐで、夜のうなぎディナーや居酒屋巡りもスマートです。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥4,690<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbvd826.g0190dd6.2qbve0a2/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72584%2F72584.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿5 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-cyan-100 text-cyan-800 text-xs font-bold rounded-md">浜名湖畔・活性石人工温泉</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.25}</span>
                <span className="text-slate-400 text-xs font-normal">（レイクビュー）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ホテルルートイン浜名湖
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>ＪＲ東海道本線「鷲津駅」より車で５分</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/18239/18239.jpg" alt="ホテルルートイン浜名湖" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  浜名湖の湖畔近くに位置し、観光ドライブの拠点にうってつけ。活性石人工温泉大浴場「旅人の湯」で旅の疲れをほぐし、無料バイキング朝食でお腹を満たして秋の湖畔ドライブへ出発できます。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥5,650<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbvd826.g0190dd6.2qbve0a2/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18239%2F18239.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-gradient-to-r from-slate-950 to-orange-950 text-white rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2 text-orange-300">
            <CheckCircle2 className="w-5 h-5" />
            秋の浜松・浜名湖旅の満喫ポイント
          </h2>
          <p className="text-sm text-orange-100 leading-relaxed">
            弁天島海浜公園の赤鳥居越しに沈む秋の夕陽は、空気が澄む秋から冬にかけてが一番幻想的。人気の老舗うなぎ店は週末昼間に予約必須の店舗も多いため、宿と合わせて早めの席手配をしておくのが賢い旅の秘訣です。
          </p>
          <div className="pt-2">
            <Link href="/#autumn-features" className="inline-flex items-center gap-1.5 text-xs text-orange-300 hover:text-white transition underline">
              秋の旅行特集一覧へ戻る <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
