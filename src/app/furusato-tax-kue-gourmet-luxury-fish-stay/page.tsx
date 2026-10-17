import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '天然クエ鍋＆幻の高級魚グルメ宿×ふるさと納税厳選ガイド南紀白浜・長崎五島・高知室戸の本クエ会席',
  description: '冬の味覚の王様・海のダイヤ！和歌山南紀白浜の「天然本クエ鍋」と白良浜オーシャン温泉、長崎五島列島の荒波で育った極上クエ薄造りリゾート、高知室戸の黒潮クエ会席＆海洋深層水スパ。ゼラチン質たっぷりの濃厚な旨味を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: ["天然クエ鍋", "2026年最新", "南紀白浜", "長崎五島", "高知室戸の本クエ会席", "温泉宿", "宿泊予約"],
  alternates: {
    canonical: "https://croud-travel.pages.dev/furusato-tax-kue-gourmet-luxury-fish-stay/"
  },
  openGraph: {
    title: '天然クエ鍋＆幻の高級魚グルメ宿×ふるさと納税厳選ガイド南紀白浜・長崎五島・高知室戸の本クエ会席',
    description: '冬の味覚の王様・海のダイヤ！和歌山南紀白浜の「天然本クエ鍋」と白良浜オーシャン温泉、長崎五島列島の荒波で育った極上クエ薄造りリゾート、高知室戸の黒潮クエ会席＆海洋深層水スパ。ゼラチン質たっぷりの濃厚な旨味を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-kue-gourmet-luxury-fish-stay',
    type: 'article',
    siteName: '旅宿クラウド'
  }
};

export default function FurusatoFeaturePage() {
  const officialFurusatoAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "天然クエ鍋＆幻の高級魚グルメ宿×ふるさと納税完全ガイド【2026年最新】南紀白浜・長崎五島・高知室戸の本クエ会席",
    "description": "冬の味覚の王様・海のダイヤ！和歌山南紀白浜の「天然本クエ鍋」と白良浜オーシャン温泉、長崎五島列島の荒波で育った極上クエ薄造りリゾート、高知室戸の黒潮クエ会席＆海洋深層水スパ。ゼラチン質たっぷりの濃厚な旨味を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。",
    "url": "https://croud-travel.pages.dev/furusato-tax-kue-gourmet-luxury-fish-stay/",
    "publisher": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "logo": { "@type": "ImageObject", "url": "https://croud-travel.pages.dev/icon.png" }
    }
  };
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://croud-travel.pages.dev" },
      { "@type": "ListItem", "position": 2, "name": "天然クエ鍋＆幻の高級魚グルメ宿×ふるさと納税完全ガイド【2026年最新】南紀白浜・長崎五島・高知室戸の本クエ会席", "item": "https://croud-travel.pages.dev/furusato-tax-kue-gourmet-luxury-fish-stay/" }
    ]
  };

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 selection:bg-amber-500 selection:text-stone-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      {/* ヒーローヘッダー */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-900 border-b border-stone-800">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold mb-6">
            <span>✨</span>
            <span>天然クエ鍋・幻の高級魚特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-100 tracking-tight leading-tight sm:leading-snug mb-6">天然クエ鍋＆幻の高級魚グルメ宿×ふるさと納税ガイド</h1>
          <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed mb-8">
            深海の岩礁に潜み、一本釣りでしか獲れないことから「幻の高級魚」と呼ばれるクエ。上品で淡白な白身でありながら、皮と身の間のゼラチン質にはコラーゲンと濃厚な旨味が凝縮されています。フグよりも美味と称されるクエの薄造り、骨から出汁を取った黄金色のクエ鍋、香ばしいカブト焼き。本場・紀州や長崎五島、土佐の老舗名湯宿で味わう本物の味覚を、楽天ふるさと納税のトラベルクーポンでお得に堪能しましょう。
          </p>

          {/* 公式キャンペーンCTA */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-500/20 via-amber-600/10 to-transparent border border-amber-500/30 backdrop-blur max-w-2xl mx-auto">
            <h2 className="text-lg sm:text-xl font-bold text-amber-200 mb-2">
              楽天ふるさと納税なら寄附額の最大30%が宿泊クーポンに！
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mb-4 leading-relaxed">
              寄附翌日には楽天トラベルで使えるクーポンが付与。有効期限はたっぷり3年間あるため、次の大型連休や記念日旅行にも安心して活用いただけます。
            </p>
            <a
              href={officialFurusatoAffUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black text-base shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>楽天ふるさと納税 宿泊クーポンを獲得する</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* メリット3選 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-stone-800">
        <h2 className="text-2xl sm:text-3xl font-black text-amber-100 text-center mb-10">
          「クエを食ったら他の魚は食えん」。透き通る白身と濃厚な脂が織りなす究極の冬の味覚
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div key="0" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              01
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              天然本クエならではの極上の脂のりとゼラチン質の深いコク
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              養殖とは一線を画す天然モノの引き締まった身質。コラーゲンたっぷりで翌朝の肌のハリにも嬉しい至高の海の恵み。
            </p>
          </div>
          
          <div key="1" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              02
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              薄造り・鍋・唐揚げ・雑炊まで余すところなく味わい尽くすフルコース
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              職人が熟練の技で薄造りに仕立てたプリプリの食感と、濃厚な出汁が米の一粒一粒に染み渡る〆のクエ雑炊はまさに絶品。
            </p>
          </div>
          
          <div key="2" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              03
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              ふるさと納税クーポンで高価格なクエ特選プランを実質自己負担2,000円で予約
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              1人前数万円にもなる最高級天然クエ会席を、寄附上限額の範囲内で賢くお得に味わえるのがふるさと納税最大の醍醐味です。
            </p>
          </div>
          
        </div>
      </section>

      {/* エリア別 厳選ホテルリスト */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-16">
          
          <div key="shirahama_kue" className="space-y-8">
            <div className="border-l-4 border-amber-500 pl-4">
              <h2 className="text-2xl sm:text-3xl font-black text-amber-200 mb-2">
                和歌山県白浜町ふるさと納税：紀州本場「天然本クエづくし会席」と日本三古湯・南紀白浜温泉オーシャン宿
              </h2>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                本州屈指のクエの水揚げを誇る南紀白浜。太平洋の黒潮が育んだ丸々と太った天然クエを特製ポン酢で味わい、万葉の昔から湧き出る白浜温泉の塩化物泉で温まる冬の最高峰グルメ旅です。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div
                key="9133"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/9133/9133.jpg"
                    alt="白浜温泉　家族とすごす白浜の宿　柳屋"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4.52 (1299件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    和歌山県西牟婁郡白浜町1870
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    白浜温泉　家族とすごす白浜の宿　柳屋
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    【ファミリーにおすすめ】源泉かけ流しで寛ぎの一日を。露天風呂付き客室や貸切風呂が自慢の家族とすごす宿
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥6,050〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9133%2F9133.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 hover:text-stone-950 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all"
                    >
                      詳細・予約 →
                    </a>
                  </div>
                </div>
              </div>
              
              <div
                key="17665"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/17665/17665.jpg"
                    alt="白浜温泉　ＫＫＲ白浜　美浜荘（国家公務員共済組合連合会白浜保養所）"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4.46 (387件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    和歌山県西牟婁郡白浜町1564-2
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    白浜温泉　ＫＫＲ白浜　美浜荘（国家公務員共済組合連合会白浜保養所）
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    白良浜海水浴場まで徒歩2分！源泉かけ流し温泉と紀州海の幸が自慢の宿
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥7,500〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17665%2F17665.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 hover:text-stone-950 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all"
                    >
                      詳細・予約 →
                    </a>
                  </div>
                </div>
              </div>
              
              <div
                key="145306"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/145306/145306.jpg"
                    alt="紀州みなべ温泉　料理宿　朝日楼"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 3.86 (1328件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    和歌山県日高郡みなべ町埴田1589-2
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    紀州みなべ温泉　料理宿　朝日楼
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    ★2025年7月リニューアル客室OPEN★絶景と名湯、朝獲れ紀州の幸を愉しむ料理宿朝日楼
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥4,950〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F145306%2F145306.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 hover:text-stone-950 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all"
                    >
                      詳細・予約 →
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
            
          <div key="goto_kue" className="space-y-8">
            <div className="border-l-4 border-amber-500 pl-4">
              <h2 className="text-2xl sm:text-3xl font-black text-amber-200 mb-2">
                長崎県五島市・新上五島ふるさと納税：東シナ海の荒波が鍛えた絶品「五島産天然アラ（クエ）」と離島リゾート
              </h2>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                九州で「アラ」と呼ばれる幻の魚・クエの宝庫である五島列島。透明度の高い海を望むリゾートホテルで、五島うどんとともにいただく本クエ鍋や椿油を使った創作料理に舌鼓を打てます。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div
                key="177048"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/177048/177048.jpg"
                    alt="五島列島リゾートホテル　マルゲリータ奈良尾＜五島・中通島＞"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4.65 (65件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    長崎県南松浦郡新上五島町奈良尾郷712-3
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    五島列島リゾートホテル　マルゲリータ奈良尾＜五島・中通島＞
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    奈良尾港の高台に建つ五島食材を和食で堪能する小さなホテル～29の教会が点在する祈りの島～
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥13,800〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F177048%2F177048.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 hover:text-stone-950 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all"
                    >
                      詳細・予約 →
                    </a>
                  </div>
                </div>
              </div>
              
              <div
                key="188159"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/188159/188159.jpg"
                    alt="みやこ別邸＜五島・福江島＞"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4.55 (26件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    長崎県五島市玉之浦町荒川265
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    みやこ別邸＜五島・福江島＞
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    五島　福江島で唯一の源泉かけ流し温泉付き一棟貸し宿　みやこ別邸
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥13,050〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F188159%2F188159.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 hover:text-stone-950 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all"
                    >
                      詳細・予約 →
                    </a>
                  </div>
                </div>
              </div>
              
              <div
                key="188157"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/188157/188157.jpg"
                    alt="アパートメント五島＜五島・福江島＞"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4.43 (51件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    長崎県五島市末広町7-13　アドバンス五常205
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    アパートメント五島＜五島・福江島＞
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    港や飲み屋街まで５分の好立地。広々４０㎡のワンフロア
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥6,624〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F188157%2F188157.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 hover:text-stone-950 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all"
                    >
                      詳細・予約 →
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
            
          <div key="muroto_kue" className="space-y-8">
            <div className="border-l-4 border-amber-500 pl-4">
              <h2 className="text-2xl sm:text-3xl font-black text-amber-200 mb-2">
                高知県室戸市・高知ふるさと納税：太平洋の一本釣り天然クエと土佐の銘酒・老舗割烹旅館
              </h2>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                室戸沖の急峻な深海から一本釣りされる天然クエ。豪快な土佐の皿鉢料理とともに味わうクエの薄造りや塩焼き、辛口の土佐地酒とのマリアージュに心奪われる美食ステイです。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div
                key="8075"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/8075/8075.jpg"
                    alt="城西館（じょうせいかん）"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4.62 (3621件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    高知県高知市上町2-5-34
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    城西館（じょうせいかん）
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    ２０１９年４月リニューアルオープン！明治７年創業の老舗宿。展望露天風呂と鰹の藁焼きタタキ工房が自慢♪
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥11,999〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8075%2F8075.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 hover:text-stone-950 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all"
                    >
                      詳細・予約 →
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
            
        </div>
      </section>

      {/* 下部CTAバナー */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-amber-600/30 via-orange-600/20 to-stone-900 border border-amber-500/40 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-black text-amber-100 mb-4">
              ふるさと納税の宿泊クーポンでお得に極上の旅へ
            </h2>
            <p className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto mb-6 leading-relaxed">
              寄附上限額の範囲内なら、実質自己負担2,000円で憧れの特等席宿やリゾートに宿泊可能。楽天ポイント還元も併用して、賢く贅沢なひとときをお過ごしください。
            </p>
            <a
              href={officialFurusatoAffUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black text-base shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>楽天ふるさと納税 宿泊クーポンを獲得する</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 関連記事 内部リンク */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-stone-800">
        <h2 className="text-xl sm:text-2xl font-bold text-amber-200 mb-6">
          あわせて読みたい！テーマ別ふるさと納税トラベルガイド
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <Link
            key="0"
            href="/furusato-tax-morning-market-hamayaki-seafood-inn-stay"
            className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/40 transition-colors group flex flex-col justify-between"
          >
            <div>
              <h3 className="text-sm font-bold text-stone-200 group-hover:text-amber-300 transition-colors mb-2">
                海鮮浜焼き・港町朝市めぐり直結宿×ふるさと納税完全ガイド
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                八戸・沼津・高知の獲れたて市場グルメと浜焼き。
              </p>
            </div>
            <span className="text-xs font-semibold text-amber-400 mt-4 block">記事を読む →</span>
          </Link>
          
          <Link
            key="1"
            href="/furusato-tax-rias-coast-ise-ebi-abalone-ocean-stay"
            className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/40 transition-colors group flex flex-col justify-between"
          >
            <div>
              <h3 className="text-sm font-bold text-stone-200 group-hover:text-amber-300 transition-colors mb-2">
                夕映えリアス式海岸＆伊勢海老・鮑料理の海宿×ふるさと納税完全ガイド
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                志摩英虞湾・南三陸・伊根の舟屋の贅沢旅。
              </p>
            </div>
            <span className="text-xs font-semibold text-amber-400 mt-4 block">記事を読む →</span>
          </Link>
          
          <Link
            key="2"
            href="/furusato-tax-oceanfront-wave-sound-healing-stay"
            className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/40 transition-colors group flex flex-col justify-between"
          >
            <div>
              <h3 className="text-sm font-bold text-stone-200 group-hover:text-amber-300 transition-colors mb-2">
                絶景オーシャンフロント×波音ヒーリングの海宿ふるさと納税完全ガイド
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                稲取・南房総・読谷村の全室オーシャンビューと潮騒露天。
              </p>
            </div>
            <span className="text-xs font-semibold text-amber-400 mt-4 block">記事を読む →</span>
          </Link>
          
        </div>
      </section>
    
      
        {/* Enriched Rakuten API & Wikipedia Tourist Guide */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 天然クエ鍋＆幻の高級魚グルメ宿×ふるさと納税厳選ガイド南紀白浜・長崎五島・高知室戸の本クエ会席：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「天然クエ鍋＆幻の高級魚グルメ宿×ふるさと納税厳選ガイド南紀白浜・長崎五島・高知室戸の本クエ会席」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 白浜温泉　家族とすごす白浜の宿　柳屋</td>
                <td className="p-3 text-stone-600">和歌山県西牟婁郡白浜町1870</td>
                <td className="p-3 text-stone-600">白浜駅周辺</td>
                <td className="p-3 text-stone-600">有り　40台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.52（1292件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,050〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9133%2F9133.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 白浜温泉　ＫＫＲ白浜　美浜荘（国家公務員共済組合連合会白浜保養所）</td>
                <td className="p-3 text-stone-600">和歌山県西牟婁郡白浜町1564-2</td>
                <td className="p-3 text-stone-600">白浜駅周辺</td>
                <td className="p-3 text-stone-600">有　【20台】　　無料です。</td>
                <td className="p-3 font-bold text-amber-600">★4.46（387件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17665%2F17665.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 紀州みなべ温泉　料理宿　朝日楼</td>
                <td className="p-3 text-stone-600">和歌山県日高郡みなべ町埴田1589-2</td>
                <td className="p-3 text-stone-600">南部駅周辺</td>
                <td className="p-3 text-stone-600">有り　２５台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★3.86（1328件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,950〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F145306%2F145306.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 五島列島リゾートホテル　マルゲリータ奈良尾＜五島・中通島＞</td>
                <td className="p-3 text-stone-600">長崎県南松浦郡新上五島町奈良尾郷712-3</td>
                <td className="p-3 text-stone-600">奈良尾港高台に建つ五島灘の眺望と食を堪能できるリゾートホテル（送迎あり</td>
                <td className="p-3 text-stone-600">無料駐車場20台。近隣レンタカー会社あり。電気自動車充電器あり。</td>
                <td className="p-3 font-bold text-amber-600">★4.65（65件）</td>
                <td className="p-3 font-bold text-rose-600">¥13,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F177048%2F177048.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. みやこ別邸＜五島・福江島＞</td>
                <td className="p-3 text-stone-600">長崎県五島市玉之浦町荒川265</td>
                <td className="p-3 text-stone-600">福江空港駅周辺</td>
                <td className="p-3 text-stone-600">無料の駐車スペースをご案内</td>
                <td className="p-3 font-bold text-amber-600">★4.55（26件）</td>
                <td className="p-3 font-bold text-rose-600">¥13,050〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F188159%2F188159.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. アパートメント五島＜五島・福江島＞</td>
                <td className="p-3 text-stone-600">長崎県五島市末広町7-13　アドバンス五常205</td>
                <td className="p-3 text-stone-600">福江空港駅周辺</td>
                <td className="p-3 text-stone-600">専用駐車場はございません。近隣の有料駐車場をご案内いたします。（徒歩3&amp;#12316;5分の場所）</td>
                <td className="p-3 font-bold text-amber-600">★4.41（52件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,624〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F188157%2F188157.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">白浜温泉　家族とすごす白浜の宿　柳屋</h3>
                  <span className="text-xs text-stone-400 ml-2">（しらはまおんせん　かぞくとすごすしらはまのやど　やなぎや）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,050〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/9133/9133_war.jpg" alt="白浜温泉　家族とすごす白浜の宿　柳屋 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【ファミリーにおすすめ】源泉かけ流しで寛ぎの一日を。露天風呂付き客室や貸切風呂が自慢の家族とすごす宿</p>
                  <p><strong>【所在地・アクセス】</strong>〒 和歌山県西牟婁郡白浜町1870 ／ 最寄り駅：白浜 ／ 交通案内：ＪＲ白浜駅：車で約１１分／南紀白浜空港：車で約７分／南紀白浜ＩＣ：車で約１5分／アドベンチャーワールド：車で約１０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　40台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「鮑の蒸し料理と丁寧な接客に大満足家族旅行で利用させていただきました。朝食・夕食ともにどれも美味しく、特に鮑の蒸し料理は最高でした。お部屋食だったため、周りを気にせず家族でゆっくり味わうことがで…　2026-08-21 21:22:04投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">白浜温泉　ＫＫＲ白浜　美浜荘（国家公務員共済組合連合会白浜保養所）</h3>
                  <span className="text-xs text-stone-400 ml-2">（しらはまおんせん　けーけーあーる　しらはま　みはまそう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/17665/17665_w.jpg" alt="白浜温泉　ＫＫＲ白浜　美浜荘（国家公務員共済組合連合会白浜保養所） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>白良浜海水浴場まで徒歩2分！源泉かけ流し温泉と紀州海の幸が自慢の宿</p>
                  <p><strong>【所在地・アクセス】</strong>〒 和歌山県西牟婁郡白浜町1564-2 ／ 最寄り駅：白浜 ／ 交通案内：JRきのくに線 白浜駅下車 路線バス 温泉行き 白良浜バス停より徒歩２分  阪和自動車道を南紀田辺ＩＣ～車で25分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有　【20台】　　無料です。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「スタッフさんの様子が少し気になったスタッフさん少しお疲れのようでしたクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/…　2026-08-24 06:44:35投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">紀州みなべ温泉　料理宿　朝日楼</h3>
                  <span className="text-xs text-stone-400 ml-2">（きしゅうみなべおんせんりょうりやどあさひろう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,950〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/145306/145306_room.jpg" alt="紀州みなべ温泉　料理宿　朝日楼 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>★2025年7月リニューアル客室OPEN★絶景と名湯、朝獲れ紀州の幸を愉しむ料理宿朝日楼</p>
                  <p><strong>【所在地・アクセス】</strong>〒 和歌山県日高郡みなべ町埴田1589-2 ／ 最寄り駅：南部 ／ 交通案内：ＪＲ　南部駅よりお車にて５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２５台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/145306?reviewId=33123479152648　2026-08-26 13:01:52投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">五島列島リゾートホテル　マルゲリータ奈良尾＜五島・中通島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（ごとうれっとうりぞーとほてる　まるげりーたならお）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥13,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/177048/177048_kan1.jpg" alt="五島列島リゾートホテル　マルゲリータ奈良尾＜五島・中通島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>奈良尾港の高台に建つ五島食材を和食で堪能する小さなホテル～29の教会が点在する祈りの島～</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長崎県南松浦郡新上五島町奈良尾郷712-3 ／ 最寄り駅：主要駅 ／ 交通案内：奈良尾港高台に建つ五島灘の眺望と食を堪能できるリゾートホテル（送迎あり）長崎港・福江港発ジェットフォイル、フェリー直通</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料駐車場20台。近隣レンタカー会社あり。電気自動車充電器あり。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「部屋はゆったりだが食事の内容が残念ゆったりしたお部屋でくつろげました。お食事は予約の際選ぶのを間違えたのか、お弁当みたいなのが出て来て少しガッカリです。宿泊料金がまぁまぁしたので、食材が豊富にある…　2026-08-29 19:56:05投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=177048&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">みやこ別邸＜五島・福江島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（みやこべってい）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥13,050〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/188159/188159.jpg" alt="みやこ別邸＜五島・福江島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>五島　福江島で唯一の源泉かけ流し温泉付き一棟貸し宿　みやこ別邸</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長崎県五島市玉之浦町荒川265 ／ 最寄り駅：福江空港 ／ 交通案内：福江空港より車で約３０分 福江港より車で約３０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料の駐車スペースをご案内</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「みやこ別邸＜五島・福江島＞は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">アパートメント五島＜五島・福江島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（アパートメントゴトウ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,624〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/188157/188157.jpg" alt="アパートメント五島＜五島・福江島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>港や飲み屋街まで５分の好立地。広々４０㎡のワンフロア</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長崎県五島市末広町7-13　アドバンス五常205 ／ 最寄り駅：福江空港 ／ 交通案内：福江空港より車で約１０分 福江港より車で約３分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>専用駐車場はございません。近隣の有料駐車場をご案内いたします。（徒歩3&amp;#12316;5分の場所）</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.55 ／ 立地 ★4.52 ／ 部屋 ★4.55 ／ 設備 ★4.26 ／ 風呂 ★4.2</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「送迎の対応が親切で、部屋も清潔で快適ホテルのスタッフの方が港まで迎えに来てくださりとても助かりました。部屋も清潔で、まるで自分のアパートにいるようにゆったりすることができました。また、送迎の時に近…　2026-08-19 15:41:58投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/hs/RmfmX/?f_hotel_no=188157&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！和歌山県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、和歌山県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">高野山（奥の院・壇上伽藍）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">弘法大師空海がひらいた真言密教の聖地であり世界遺産。樹齢数百年の杉木立の中に弘法大師の御廟が佇む「奥の院」は神聖な気が満ちています。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">熊野那智大社・那智の滝</h3>
                <p className="text-xs text-stone-600 leading-relaxed">熊野三山の一つであり、日本一の落差（133m）を誇る神体「那智の滝」。朱塗りの三重塔越しに直下する滝の景観は熊野古道を象徴する一枚です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">南紀白浜・千畳敷・三段壁</h3>
                <p className="text-xs text-stone-600 leading-relaxed">真っ白なサラサラの砂が広がる白良浜リゾートと、太平洋の荒波が削り出した巨大な岩盤「千畳敷」「三段壁」。温泉と海の絶景を満喫できます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">和歌山城</h3>
                <p className="text-xs text-stone-600 leading-relaxed">紀州徳川家55万石の居城。緑豊かな虎伏山に建ち、白亜の天守閣からは和歌山市街と紀の川のゆったりとした流れを一望できます。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 和歌山県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 和歌山県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      <HubRelatedPosts currentSlug="furusato-tax-kue-gourmet-luxury-fish-stay" />
</div>
  );
}
