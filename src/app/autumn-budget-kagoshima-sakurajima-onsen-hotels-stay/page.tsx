import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '鹿児島：桜島一望と黒豚しゃぶしゃぶを満喫！秋の温泉・高コスパ格安宿5選',
  description: '秋の鹿児島旅を満喫する格安＆高コスパな温泉・ビジネスホテル厳選5選！桜島の雄大な絶景や名物黒豚しゃぶしゃぶ、天然温泉を1人1泊3,000円台〜5,000円台でお得に楽しむ滞在プランをご案内。',
};

export default function AutumnBudgetKagoshimaHotelsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pb-24">
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-slate-500 flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-teal-600 transition">ホーム</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/#autumn-features" className="hover:text-teal-600 transition">秋の特集一覧</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-800 font-medium">鹿児島 格安・高コスパ温泉宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold tracking-wider border border-teal-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>秋の南国グルメ＆天然温泉・格安厳選</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">「鹿児島」桜島ビューと黒豚しゃぶしゃぶ！<br className="hidden sm:inline" />秋の味覚＆天然温泉を味わう格安宿5選</h1>
          <p className="text-sm md:text-base text-teal-100/90 max-w-2xl mx-auto leading-relaxed">
            錦江湾にそびえる桜島の勇姿、本場で味わう甘みたっぷりの黒豚しゃぶしゃぶやきびなご。南国鹿児島の豊かな秋を、1人3,000円〜6,000円台の圧倒的コスパで堪能できるクチコミ高評価ホテルを厳選しました。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-teal-600" />
            秋の鹿児島旅行を格安に満喫する賢いステイ戦略
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            鹿児島は市街地各所に良質な天然温泉が湧き出る日本有数の温泉都市。天文館周辺での黒豚しゃぶしゃぶや薩摩地鶏巡りはもちろん、錦江湾フェリーでの桜島クルーズも秋晴れの心地よい風が吹くベストシーズンです。宿泊費を3,000円〜5,000円台に抑えて、浮いた予算を本場黒豚の特上コースや焼酎飲み比べに贅沢に充てる旅をおすすめします。
          </p>
        </div>
      </section>

      
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">薩摩・活火山絶景ガイド：錦江湾に浮かぶ雄大な活火山・桜島</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Topographic_map_of_Kyushu.webp/1280px-Topographic_map_of_Kyushu.webp"
                alt="錦江湾に浮かぶ雄大な活火山・桜島"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">錦江湾に浮かぶ雄大な活火山・桜島の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">桜島（さくらじま）は、日本の九州南部、鹿児島県の鹿児島湾（錦江湾）北部に位置する東西約12km、南北約10 km、周囲約55 km、面積約77 km2の活火山。鹿児島県指定名勝。 かつては名称のとおり島であったが、1914年（大正3年）に発生した大正大噴火により東側にかつて存在した瀬戸海峡が埋め立てられ大隅半島と陸続きになっている。  桜島火山は鹿児島湾北部に位置する直径約20kmの姶良カルデラ南縁付近にあり、このカルデラは2.9万年前の巨大噴火で誕生し、その3千年ほど後に桜島火山が誕生した。日本の火山の中では比較的新しい火山である。桜島火山は有史以来、噴火を頻繁に繰り返してきた。噴火の記録も多く、現在もなお活発な活動を続けている。海の中にそびえるその山容は特に異彩を放っており、鹿児島のシンボルの一つとされ、観光地としても知られている。2007年に日本の地質百選に選定された。国際火山学及び地球内部化学協会が指定する防災十年火山の一つだった。 また、火山噴火予知連絡会によって火山防災のために監視・観測体制の充実等の必要がある火山に選定されている。</p>
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
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-md">コスパNo.1・天然温泉</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.28}</span>
                <span className="text-slate-400 text-xs font-normal">（高評価）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              スーパーホテル薩摩川内　天然温泉　薩摩の湯
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>川内駅西口より徒歩にて約1分</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/178972/178972.jpg" alt="スーパーホテル薩摩川内　天然温泉　薩摩の湯" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  1泊3,000円台という驚異的な価格帯ながら、天然温泉大浴場「薩摩の湯」を完備。さらにオーガニック素材にこだわった朝食ビュッフェが無料で付いてくる圧倒的な実力派ホテルです。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥3,040<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbvd826.g0190dd6.2qbve0a2/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F178972%2F178972.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿2 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">天文館徒歩圏・名物夜鳴きそば</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.38}</span>
                <span className="text-slate-400 text-xs font-normal">（絶品サウナ）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              天然温泉　霧桜の湯　ドーミーイン鹿児島（ドーミーイン・御宿野乃　ホテルズグループ）
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>市電「高見馬場」下車徒歩２分</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/44439/44439.jpg" alt="天然温泉　霧桜の湯　ドーミーイン鹿児島（ドーミーイン・御宿野乃　ホテルズグループ）" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  繁華街・天文館すぐの抜群の立地。最上階には自家源泉を引いた天然温泉大浴場と本格サウナ・水風呂を備えます。湯上がり処のアイスや名物「夜鳴きそば」の無料提供も嬉しい満足度抜群の宿。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥5,040<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbvd826.g0190dd6.2qbve0a2/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F44439%2F44439.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿3 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-md">驚異のクチコミ4.56・静寂な環境</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.56}</span>
                <span className="text-slate-400 text-xs font-normal">（超高評価）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              ホテル自治会館
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>鹿児島中央駅より市営バス約１５分</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/10904/10904.jpg" alt="ホテル自治会館" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  県庁近くの閑静なエリアに位置し、広々とした客室と丁寧な接客でクチコミ評価★4.56を誇る穴場の良質ホテル。駐車場無料プランもあり、レンタカーでの桜島・指宿周遊ドライブ旅にも最適です。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥5,000<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbvd826.g0190dd6.2qbve0a2/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10904%2F10904.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿4 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-purple-100 text-purple-800 text-xs font-bold rounded-md">鹿児島中央駅近・源泉かけ流し</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.35}</span>
                <span className="text-slate-400 text-xs font-normal">（美肌温泉）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              シルクイン鹿児島
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>ＪＲ鹿児島中央駅東口から徒歩５分</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/5304/5304.jpg" alt="シルクイン鹿児島" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  鹿児島中央駅から徒歩約5分の好立地。地下700mから湧き出る100%源泉かけ流しの天然温泉は、絹のように滑らかな湯ざわりで旅の疲れを極上に癒やしてくれます。女性一人旅にも大人気の癒やし宿。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥5,250<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbvd826.g0190dd6.2qbve0a2/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5304%2F5304.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>

        {/* 宿5 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-cyan-100 text-cyan-800 text-xs font-bold rounded-md">100%源泉掛け流し・展望浴場</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{4.18}</span>
                <span className="text-slate-400 text-xs font-normal">（絶景湯処）</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              天然温泉　ホテルグリーンヒル＜鹿児島県＞
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>鹿児島中央駅より車で４５分</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <Image src="https://img.travel.rakuten.co.jp/share/HOTEL/141974/141974.jpg" alt="天然温泉　ホテルグリーンヒル＜鹿児島県＞" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  緑豊かな高台に佇み、天然温泉の展望大浴場からは開放的なパノラマビューを堪能。湯量豊富な本格温泉と落ち着いたくつろぎの客室で、静かに秋の南国ステイを楽しみたい方に選ばれています。
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500">最安参考料金（1名利用時）</div>
                  <div className="text-lg font-black text-rose-600">¥6,452<span className="text-xs font-normal text-slate-500">〜 / 人</span></div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbvd826.g0190dd6.2qbve0a2/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F141974%2F141974.html" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold text-center rounded-xl transition shadow-sm">
                楽天トラベルでプラン・空室を見る
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-gradient-to-r from-teal-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2 text-teal-300">
            <CheckCircle2 className="w-5 h-5" />
            秋の鹿児島旅を満喫するポイント
          </h2>
          <p className="text-sm text-teal-100 leading-relaxed">
            鹿児島は10月〜11月でも比較的温暖で過ごしやすく、桜島フェリーデッキからの秋風や、紅葉が色づき始める霧島連山へのドライブなど見どころが満載。人気の日程はすぐに満室になるため、早めの予約でお得なプランを押さえておきましょう。
          </p>
          <div className="pt-2">
            <Link href="/#autumn-features" className="inline-flex items-center gap-1.5 text-xs text-teal-300 hover:text-white transition underline">
              秋の旅行特集一覧へ戻る <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
