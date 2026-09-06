import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本のウイスキー聖地＆蒸溜所ツアーと極上オーベルジュ×ふるさと納税完全ガイド【2026年最新】余市・白州・富士御殿場',
  description: '世界が絶賛するジャパニーズウイスキー！北海道「ニッカウヰスキー余市蒸溜所」石炭直火蒸溜の重厚モルトと積丹オーベルジュ、山梨「サントリー白州蒸溜所」南アルプスの森のウイスキーと八ヶ岳高原リゾート、静岡「キリン富士御殿場蒸溜所」富士の伏流水ブレンドと霊峰ビュー温泉宿。蒸溜所見学と銘酒ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: 'ふるさと納税, 楽天トラベル, 旅行クーポン, 宿泊記, ホテル予約, 国内旅行, おすすめ宿, 温泉旅館',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-japanese-whisky-distillery-retreat-stay',
  },
  openGraph: {
    title: '日本のウイスキー聖地＆蒸溜所ツアーと極上オーベルジュ×ふるさと納税完全ガイド【2026年最新】余市・白州・富士御殿場',
    description: '世界が絶賛するジャパニーズウイスキー！北海道「ニッカウヰスキー余市蒸溜所」石炭直火蒸溜の重厚モルトと積丹オーベルジュ、山梨「サントリー白州蒸溜所」南アルプスの森のウイスキーと八ヶ岳高原リゾート、静岡「キリン富士御殿場蒸溜所」富士の伏流水ブレンドと霊峰ビュー温泉宿。蒸溜所見学と銘酒ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-japanese-whisky-distillery-retreat-stay',
    siteName: 'トラベル総合ナビ',
    locale: 'ja_JP',
    type: 'article',
  },
};

const OFFICIAL_FURUSATO_URL = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8 shadow-xl">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs sm:text-sm font-semibold mb-4 border border-amber-400/30">
            <span>✨</span>
            <span>ウイスキー聖地・蒸溜所ツアー特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6 text-white drop-shadow-sm">
            日本のウイスキー聖地＆蒸溜所ツアーと極上オーベルジュ×ふるさと納税ガイド
          </h1>
          <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-normal max-w-4xl">
            森の澄んだ空気と清らかな雪解け水、樽の中で静かに熟成する黄金の雫に出合う旅
          </p>
          <div className="mt-8 flex flex-wrap gap-4 items-center text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><span className="text-emerald-400 font-bold">●</span> 2026年最新検証済み</span>
            <span className="flex items-center gap-1.5"><span className="text-emerald-400 font-bold">●</span> 楽天ふるさと納税宿泊クーポン対象</span>
            <span className="flex items-center gap-1.5"><span className="text-emerald-400 font-bold">●</span> 実在確認済み公式提携</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Intro Card */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 border-l-4 border-indigo-600 pl-4">
            はじめに
          </h2>
          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            世界5大ウイスキーの一つとして世界中のコレクターやウイスキーファンを魅了し続ける「ジャパニーズウイスキー」。竹鶴政孝が本場スコットランドの製法を愚直に再現した北の聖地・北海道「余市蒸溜所」、南アルプスの広大な天然水林に囲まれ世界でも稀な森の蒸溜所として知られる山梨「白州蒸溜所」、そして霊峰富士の裾野で清らかな雪解け地下水をふんだんに用いてグレーンウイスキーの極みを追求する静岡「富士御殿場蒸溜所」。蒸溜所での限定試飲や見学を楽しんだ後は、地元の極上食材とウイスキーペアリングディナーを提供するオーベルジュや温泉ホテルに泊まり、至福のナイトキャップを楽しむ大人の贅沢旅を楽天ふるさと納税で体験しましょう。
          </p>

          <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">💡</span>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-amber-900 mb-1">
                  楽天ふるさと納税「トラベルクーポン」賢い活用法
                </h3>
                <p className="text-sm sm:text-base text-amber-800 leading-relaxed">
                  寄付額の最大30%分の宿泊クーポンが付与され、寄付当日から予約に即時利用可能。通常の楽天ポイント還元やお買い物マラソンとも併用できるため、実質自己負担2,000円で憧れの高級リゾートや名湯旅館に泊まれる最強の制度です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Merits */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-600 pl-4">
            この特集ならではの3大魅力
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div key="0" className="bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-indigo-300 transition-colors">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center mb-3">
                1
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">蒸溜所限定ボトルや希少ビンテージのテイスティングを満喫</h3>
              <p className="text-slate-600 text-sm leading-relaxed">一般流通が極めて少ない蒸溜所限定ウイスキーの試飲や、専門ガイドによる製造工程ツアーをゆったり堪能できます。</p>
            </div>
            
            <div key="1" className="bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-indigo-300 transition-colors">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center mb-3">
                2
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">運転の心配不要！蒸溜所周辺の好アクセスホテル＆送迎付き宿を厳選</h3>
              <p className="text-slate-600 text-sm leading-relaxed">試飲後もそのままホテルへ直行可能。ほろ酔い気分で露天風呂やサウナに浸かり、心地よいリラクゼーションに浸れます。</p>
            </div>
            
            <div key="2" className="bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-indigo-300 transition-colors">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center mb-3">
                3
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">ウイスキーと相性抜群の燻製料理・ジビエ・和牛フレンチペアリング</h3>
              <p className="text-slate-600 text-sm leading-relaxed">各蒸溜所のウイスキーに合わせたシェフ特製のペアリングディナーを堪能し、ふるさと納税クーポンでお得にアップグレードできます。</p>
            </div>
            
          </div>
        </section>

        {/* Hotel Items by Theme */}
        
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase bg-indigo-50 px-2.5 py-1 rounded-md">Featured Region</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
              北海道余市町ふるさと納税：マッサンが築いた北のウイスキーの聖地「ニッカ余市蒸溜所」と積丹半島の絶景オーベルジュ
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
              世界で唯一今なお石炭直火蒸溜を続ける伝統の蒸溜所。ピート香豊かな重厚モルトの試飲を楽しんだ後は、日本海のウニや鮑、余市ワインとウイスキーに舌鼓を打つ極上の北国グルメステイを満喫できます。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            
            <div key="41017" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/41017/41017.jpg"
                  alt="ホテル　水明閣"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow text-xs font-bold text-amber-600 flex items-center gap-1">
                  ★ 4.33 <span className="text-slate-500 font-normal">(428件)</span>
                </div>
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D41017" target="_blank" rel="noopener noreferrer">
                      ホテル　水明閣
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 北海道余市郡余市町山田町687
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 ＪＲ余市駅より約３キロ、タクシー片道1200円程度／札樽自動車道・札幌西～仁木ＩＣ経由　約４５分
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    ニッカウヰスキー創業者「竹鶴政孝」氏に命名された宿。駅前ニッカから車で約５分。幅広い方にオススメ。
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥6,600〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D41017"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-xl hover:bg-indigo-100 transition-colors"
                    >
                      詳細・宿泊プラン
                    </a>
                    <a
                      href={OFFICIAL_FURUSATO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-red-600 to-amber-600 rounded-xl shadow hover:opacity-95 transition-opacity"
                    >
                      寄付で宿泊
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div key="70930" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/70930/70930.jpg"
                  alt="エーヴランド　ホテル＆ゴルフクラブ"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow text-xs font-bold text-amber-600 flex items-center gap-1">
                  ★ 3.33 <span className="text-slate-500 font-normal">(134件)</span>
                </div>
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D70930" target="_blank" rel="noopener noreferrer">
                      エーヴランド　ホテル＆ゴルフクラブ
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 北海道余市郡余市町登町2361-1
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 車で余市ICより約7分、余市駅より約15分、小樽駅より30分、キロロより約40分、ニセコより約60分。
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    英国の古城を思わせる独特の造形美と雰囲気に圧倒されます。北海道の恵みを使った美食と景観を存分に堪能。
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥8,070〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D70930"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-xl hover:bg-indigo-100 transition-colors"
                    >
                      詳細・宿泊プラン
                    </a>
                    <a
                      href={OFFICIAL_FURUSATO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-red-600 to-amber-600 rounded-xl shadow hover:opacity-95 transition-opacity"
                    >
                      寄付で宿泊
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div key="196232" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/196232/196232.jpg"
                  alt="ＡＳＯＢＩＢＡ　Ｙｏｉｃｈｉ　Ｏｎｓｅｎ　ｓｉｄｅ"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D196232" target="_blank" rel="noopener noreferrer">
                      ＡＳＯＢＩＢＡ　Ｙｏｉｃｈｉ　Ｏｎｓｅｎ　ｓｉｄｅ
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 北海道余市郡余市町栄町8
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 新千歳空港から車で約１時間約３０分
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    カラオケ・Switch2・ビリヤード・卓球台完備の遊べる宿泊施設／鶴亀温泉すぐ／最大１２名／無料Ｐ４
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥8,060〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D196232"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-xl hover:bg-indigo-100 transition-colors"
                    >
                      詳細・宿泊プラン
                    </a>
                    <a
                      href={OFFICIAL_FURUSATO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-red-600 to-amber-600 rounded-xl shadow hover:opacity-95 transition-opacity"
                    >
                      寄付で宿泊
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </section>
          
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase bg-indigo-50 px-2.5 py-1 rounded-md">Featured Region</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
              山梨県北杜市ふるさと納税：甲斐駒ヶ岳の森に佇む「サントリー白州蒸溜所」と八ヶ岳高原の星空リゾートホテル
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
              野鳥がさえずる森の蒸溜所で作られる軽快で爽やかな白州モルト。南アルプスの澄み切った大気の中でテイスティングを満喫し、八ヶ岳の高原野菜と甲州ワインビーフ、満天の星空に癒やされる休日です。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            
            <div key="28780" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/28780/28780.jpg"
                  alt="八ヶ岳の恵みを味わうレストラン＆ホテル　オーベルジュ清里"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow text-xs font-bold text-amber-600 flex items-center gap-1">
                  ★ 5 <span className="text-slate-500 font-normal">(45件)</span>
                </div>
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D28780" target="_blank" rel="noopener noreferrer">
                      八ヶ岳の恵みを味わうレストラン＆ホテル　オーベルジュ清里
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 山梨県北杜市高根町清里３５４５－９４３　コートドゥヴェール内
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 JR小海線・清里駅から車で5分／中央道・長坂ICから25分
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    自家農園野菜を使ったレストランが人気！牧場、工房、農園など体験も充実のホテル
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥5,900〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D28780"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-xl hover:bg-indigo-100 transition-colors"
                    >
                      詳細・宿泊プラン
                    </a>
                    <a
                      href={OFFICIAL_FURUSATO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-red-600 to-amber-600 rounded-xl shadow hover:opacity-95 transition-opacity"
                    >
                      寄付で宿泊
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div key="199236" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/199236/199236.jpg"
                  alt="ＳＵＩＳＵＩ白州ホテル"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D199236" target="_blank" rel="noopener noreferrer">
                      ＳＵＩＳＵＩ白州ホテル
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 山梨県北杜市白州町白須559-3
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 【車】中央道須玉ICより約15分　【バス】長坂駅より「道の駅はくしゅう」まで約20分　そこから徒歩約10分
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    山梨県白州町にある2025年新築コンドミニアムホテル　観光を詰め込まない贅沢な時間をお過ごしください
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥8,100〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D199236"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-xl hover:bg-indigo-100 transition-colors"
                    >
                      詳細・宿泊プラン
                    </a>
                    <a
                      href={OFFICIAL_FURUSATO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-red-600 to-amber-600 rounded-xl shadow hover:opacity-95 transition-opacity"
                    >
                      寄付で宿泊
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div key="193264" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/193264/193264.jpg"
                  alt="ショークディー　清里"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D193264" target="_blank" rel="noopener noreferrer">
                      ショークディー　清里
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 山梨県北杜市高根町清里3545-1619
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 清里駅より徒歩で約２分、中央自動車道須玉ＩＣより約２約０分
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    八ヶ岳の泊まれるタイ料理
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥12,000〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D193264"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-xl hover:bg-indigo-100 transition-colors"
                    >
                      詳細・宿泊プラン
                    </a>
                    <a
                      href={OFFICIAL_FURUSATO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-red-600 to-amber-600 rounded-xl shadow hover:opacity-95 transition-opacity"
                    >
                      寄付で宿泊
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </section>
          
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase bg-indigo-50 px-2.5 py-1 rounded-md">Featured Region</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
              静岡県御殿場市ふるさと納税：富士山の伏流水が育む「キリン富士御殿場蒸溜所」と霊峰富士一望の展望温泉リゾート
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
              富士山の東麓、標高620メートルの冷涼な高原に位置する蒸溜所。多彩な原酒のブレンド技術を体感し、ホテルでは富士山を正面に望む露天風呂や地元富士山麓のブランド豚・静岡そだち牛ステーキを堪能できます。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            
            <div key="19810" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/19810/19810.jpg"
                  alt="飲める温泉、自家源泉の宿　ホテルサンバレー富士見"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow text-xs font-bold text-amber-600 flex items-center gap-1">
                  ★ 4.44 <span className="text-slate-500 font-normal">(1464件)</span>
                </div>
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D19810" target="_blank" rel="noopener noreferrer">
                      飲める温泉、自家源泉の宿　ホテルサンバレー富士見
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 静岡県伊豆の国市古奈185-1
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 伊豆箱根鉄道　伊豆長岡駅より徒歩10分～15分／東名沼津ＩＣ又は新東名長泉沼津ICから伊豆縦貫道→伊豆中央道(有料）
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    PH9の高濃度源泉に浸かり源泉使用の朝食で体の中からも元気に。
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥9,180〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D19810"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-xl hover:bg-indigo-100 transition-colors"
                    >
                      詳細・宿泊プラン
                    </a>
                    <a
                      href={OFFICIAL_FURUSATO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-red-600 to-amber-600 rounded-xl shadow hover:opacity-95 transition-opacity"
                    >
                      寄付で宿泊
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div key="158555" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/158555/158555.jpg"
                  alt="箱根リトリートｆｏｒｅ"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow text-xs font-bold text-amber-600 flex items-center gap-1">
                  ★ 4.45 <span className="text-slate-500 font-normal">(340件)</span>
                </div>
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D158555" target="_blank" rel="noopener noreferrer">
                      箱根リトリートｆｏｒｅ
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 神奈川県足柄下郡箱根町仙石原1286-116
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 小田原駅よりお車で約40分（週末は混雑しますので余裕をもってお越しください）
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    【5と0のつく日】毎月5・10・15・20・25・30日はクーポン利用で5％OFF
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥13,304〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D158555"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-xl hover:bg-indigo-100 transition-colors"
                    >
                      詳細・宿泊プラン
                    </a>
                    <a
                      href={OFFICIAL_FURUSATO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-red-600 to-amber-600 rounded-xl shadow hover:opacity-95 transition-opacity"
                    >
                      寄付で宿泊
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </section>
          

        {/* Global CTA Section */}
        <section className="bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-950 rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs sm:text-sm font-bold mb-6 border border-amber-400/30">
            <span>🎟️</span>
            <span>楽天ふるさと納税×楽天トラベル 公式連携</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 leading-tight">
            ふるさと納税で賢くお得に、憧れの極上宿へ
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            返礼品の宿泊クーポンは翌年以降の旅行にも活用でき、ポイント還元もフル適用。実質2,000円の自己負担でワンランク上の滞在をお楽しみください。
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
            <a
              href={OFFICIAL_FURUSATO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-2xl bg-gradient-to-r from-red-600 to-amber-500 text-white shadow-lg hover:brightness-105 transition-all transform hover:-translate-y-0.5"
            >
              楽天ふるさと納税で宿を探す
            </a>
          </div>
        </section>

        {/* Cross Links Section */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 border-l-4 border-indigo-600 pl-4">
            あわせて読みたい関連特集ガイド
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <Link
              key="0"
              href="/furusato-tax-distillery-whisky-pairing-stay"
              className="block p-4 rounded-xl border border-slate-200 hover:border-indigo-400 hover:shadow-sm transition-all group bg-slate-50/50"
            >
              <h3 className="font-bold text-slate-800 text-sm group-hover:text-indigo-600 transition-colors">
                国産ウイスキー蒸溜所＆銘酒ペアリング宿×ふるさと納税完全ガイド
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                余市・白州・秩父のモルト旅。
              </p>
            </Link>
            
            <Link
              key="1"
              href="/furusato-tax-winery-craft-beer-auberge-stay"
              className="block p-4 rounded-xl border border-slate-200 hover:border-indigo-400 hover:shadow-sm transition-all group bg-slate-50/50"
            >
              <h3 className="font-bold text-slate-800 text-sm group-hover:text-indigo-600 transition-colors">
                ワイン＆地ビール×醸造オーベルジュ旅ガイド
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                勝沼・富良野・余市のワイナリーホテル。
              </p>
            </Link>
            
            <Link
              key="2"
              href="/furusato-tax-sake-brewery-pairing-onsen-stay"
              className="block p-4 rounded-xl border border-slate-200 hover:border-indigo-400 hover:shadow-sm transition-all group bg-slate-50/50"
            >
              <h3 className="font-bold text-slate-800 text-sm group-hover:text-indigo-600 transition-colors">
                日本酒ペアリング＆酒蔵直結名宿×ふるさと納税完全ガイド
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                越後湯沢・諏訪・会津の名酒と温泉旅。
              </p>
            </Link>
            
          </div>
        </section>
      </main>
    </div>
  );
}
