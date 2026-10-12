import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Calendar, MapPin, Sparkles, CheckCircle2, ChevronRight, 
  Clock, ArrowRight, Utensils, Star, Compass, Train, ShieldCheck 
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【標高1200mの奥日光・中禅寺湖畔に佇む最高峰リゾート】2026-2027年11-12月初冬の栃木・日光中禅寺湖！「ザ・リッツ・カールトン日光」＆「中禅寺金谷ホテル」・男体山の初雪と日光湯元白濁硫黄泉・極上とちぎ和牛名宿5選 | クラウドトラベル',
  description: '標高約1200mの高地に位置し、霊峰・男体山と青く澄み渡る中禅寺湖を望む奥日光。マリオット最高峰「ザ・リッツ・カールトン日光」やクラシックホテルの名門「中禅寺金谷ホテル」など、世界基準のホスピタリティと日光湯元から引湯する乳白色の硫黄泉露天風呂。澄んだ大気のもとで味わう最高ランク「とちぎ和牛」のステーキや本格フレンチディナーを堪能する極上の贅沢リトリート厳選5選。',
  keywords: '栃木県, 中禅寺湖, 高級旅館, 客室露天風呂, 記念日旅行, 11月旅行, 12月旅行, 楽天トラベル, ふるさと納税',
  openGraph: {
    title: '【標高1200mの奥日光・中禅寺湖畔に佇む最高峰リゾート】2026-2027年11-12月初冬の栃木・日光中禅寺湖！「ザ・リッツ・カールトン日光」＆「中禅寺金谷ホテル」・男体山の初雪と日光湯元白濁硫黄泉・極上とちぎ和牛名宿5選',
    description: '標高約1200mの高地に位置し、霊峰・男体山と青く澄み渡る中禅寺湖を望む奥日光。マリオット最高峰「ザ・リッツ・カールトン日光」やクラシックホテルの名門「中禅寺金谷ホテル」など、世界基準のホスピタリティと日光湯元から引湯する乳白色の硫黄泉露天風呂。澄んだ大気のもとで味わう最高ランク「とちぎ和牛」のステーキや本格フレンチディナーを堪能する極上の贅沢リトリート厳選5選。',
    url: 'https://croud-travel.pages.dev/winter-tochigi-nikko-chuzenji-lake-luxury-ritz-carlton-kanaya-stay',
    type: 'article',
    siteName: 'クラウドトラベル',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-tochigi-nikko-chuzenji-lake-luxury-ritz-carlton-kanaya-stay',
  },
};

export default function UltraLuxuryWinterFeaturePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* 構造化データ: FAQ & Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
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
                  "name": "【標高1200mの奥日光・中禅寺湖畔に佇む最高峰リゾート】2026-2027年11-12月初冬の栃木・日光中禅寺湖！「ザ・リッツ・カールトン日光」＆「中禅寺金谷ホテル」・男体山の初雪と日光湯元白濁硫黄泉・極上とちぎ和牛名宿5選",
                  "item": "https://croud-travel.pages.dev/winter-tochigi-nikko-chuzenji-lake-luxury-ritz-carlton-kanaya-stay"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
        {
          "@type": "Question",
          "name": "ザ・リッツ・カールトン日光の温泉は天然温泉ですか？泉質は？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "はい、ザ・リッツ・カールトン日光の温泉は、日光湯元温泉から直接引湯している本格的な天然温泉（含硫黄-カルシウム・ナトリウム-硫酸塩・炭酸水素塩温泉）です。空気に触れることで美しい乳白色に変化し、硫黄の香りと肌をなめらかに整える美肌成分を豊富に含んでいます。"
          }
        },
        {
          "@type": "Question",
          "name": "11月〜12月の中禅寺湖周辺はいろは坂の渋滞がありますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "10月中旬〜11月上旬の紅葉最盛期はいろは坂で激しい渋滞が発生しますが、11月中旬以降になると紅葉ピークが去るため渋滞は完全に解消し、スムーズにアクセスできます。静かにラグジュアリーステイを楽しみたい方には11月中旬〜12月が最も狙い目です。"
          }
        },
        {
          "@type": "Question",
          "name": "初冬の中禅寺湖へ車で行く場合、スタッドレスタイヤは必要ですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "標高が高いため、11月中旬以降はいろは坂や中禅寺湖畔で降雪や早朝・夜間の路面凍結が発生することがあります。11月中旬以降にお車で訪れる場合は、安全のためスタッドレスタイヤの装着が必須です。"
          }
        }
              ]
            }
          ])
        }}
      />

      {/* パンくずリスト */}
      <div className="bg-slate-100 border-b border-slate-200 text-xs text-slate-500 py-2.5 px-4">
        <div className="max-w-5xl mx-auto flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-slate-800 transition">ホーム</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <Link href="/features" className="hover:text-slate-800 transition">特集一覧</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-slate-800 font-medium truncate max-w-xs">【標高1200mの奥日光・中禅寺湖畔に佇む最高峰リゾート】2026-2027年11-12月初冬の栃木・日光中禅寺湖！「ザ・リッツ・カールトン日光」＆「中禅寺金谷ホテル」・男体山の初雪と日光湯元白濁硫黄泉・極上とちぎ和牛名宿5選</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 text-white py-14 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-4xl mx-auto space-y-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>2026-2027年 憧れの高級宿・ラグジュアリー特選</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">
            【標高1200mの奥日光・中禅寺湖畔に佇む最高峰リゾート】2026-2027年11-12月初冬の栃木・日光中禅寺湖！「ザ・リッツ・カールトン日光」＆「中禅寺金谷ホテル」・男体山の初雪と日光湯元白濁硫黄泉・極上とちぎ和牛名宿5選
          </h1>
          <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            標高約1200mの高地に位置し、霊峰・男体山と青く澄み渡る中禅寺湖を望む奥日光。マリオット最高峰「ザ・リッツ・カールトン日光」やクラシックホテルの名門「中禅寺金谷ホテル」など、世界基準のホスピタリティと日光湯元から引湯する乳白色の硫黄泉露天風呂。澄んだ大気のもとで味わう最高ランク「とちぎ和牛」のステーキや本格フレンチディナーを堪能する極上の贅沢リトリート厳選5選。
          </p>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto px-4 py-10 space-y-12">
        
        {/* 導入解説 */}
        <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Compass className="w-5 h-5 text-amber-600 shrink-0" />
            <span>初冬にこの地を訪れるべき理由と風土の魅力</span>
          </h2>
          <p className="text-xs md:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
            世界遺産・日光東照宮が鎮座する日光山内から、九十九折のいろは坂を登りきった標高1269mの別天地『中禅寺湖（ちゅうぜんじこ）』。霊峰・男体山の噴火によって生まれたこの天空の湖は、明治期よりイギリスやイタリアなど各国の外交官が避暑に訪れ、湖畔に大使館別荘を構えた日本屈指の由緒ある国際的リゾート地です。11月から12月にかけての初冬、奥日光は紅葉の喧騒が完全に去り、山頂を白く雪化粧した男体山が深い藍色の中禅寺湖畔に映り込む『最も凛とした美しさに満ちた静寂の季節』を迎えます。この地に誕生した世界最高峰のデスティネーションホテルが『ザ・リッツ・カールトン日光』。全室が湖または男体山を望むバルコニー付きスイートで、木造建築の美学とリッツ・カールトンの一流のサービスが融合。さらに、リッツ・カールトンブランドとして世界で初めて導入された天然温泉大浴場には、日光湯元から引湯される濃厚な乳白色の硫黄泉が注がれ、雪見露天風呂から冬の満天の星空を眺める体験は息を呑むほど贅沢です。そして湖畔に佇むもうひとつの名門が、日本最古のリゾートホテルの伝統を受け継ぐ『中禅寺金谷ホテル』。ログハウス風の重厚な暖炉が灯るラウンジと、名物『金谷ホテル伝統の虹鱒のソテー』やとちぎ和牛のフィレステーキを味わう本格ディナー。静まり返る奥日光の大自然に抱かれ、名湯と最高峰の美食に浸る時間は、大人の特別な記念日旅行に最高の輝きを与えてくれます。
          </p>
          
          <div className="pt-4 space-y-3">
            <h3 className="text-sm md:text-base font-bold text-slate-900">
              ▼ 本テーマが初冬の記念日・贅沢旅に絶対おすすめな3大ポイント
            </h3>
            <div className="space-y-3">
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black">
                1
              </span>
              <span>世界最高峰「ザ・リッツ・カールトン日光」！ブランド初となる白濁硫黄温泉の贅沢</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              奥日光・日光湯元の良質な源泉を引き込んだ世界初のリッツ・カールトン温泉。全室プライベートバルコニーから中禅寺湖と男体山の雄姿を望む最高峰の滞在が叶います。
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black">
                2
              </span>
              <span>標高1269mの天空リゾート！男体山の初雪と湖畔に息づく名門クラシックホテルの美学</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              歴史ある大使館別荘文化が息づく中禅寺湖畔。重厚な暖炉が燃える『中禅寺金谷ホテル』など、冬の静寂と歴史の重みに浸る大人の休日を心ゆくまで楽しめます。
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black">
                3
              </span>
              <span>最高ランク「とちぎ和牛」ステーキと伝統のクラシックフレンチディナー</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              とろけるようなサシと芳醇な肉の旨味を誇るブランド牛「とちぎ和牛」の極上鉄板焼きや、140年以上の伝統を受け継ぐ金谷ホテルの本格フレンチコースを満喫できます。
            </p>
          </div>
            </div>
          </div>
        </section>

        {/* Wikipedia連携 観光地紹介 */}
        <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-rose-600 shrink-0" />
              <span>近隣の必見名所：中禅寺湖</span>
            </h2>
            <span className="text-[11px] text-slate-400">Wikipedia・公式解説連携</span>
          </div>

          <div className="grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 relative h-52 md:h-60 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Mount_nantai_and_lake_chuzenji.jpg/1280px-Mount_nantai_and_lake_chuzenji.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                alt="標高1269mの天空の湖・中禅寺湖（日光国立公園のシンボル・男体山の初雪と湖畔の静寂）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 360px"
              />
            </div>
            <div className="md:col-span-7 space-y-2.5">
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                標高1269mの天空の湖・中禅寺湖（日光国立公園のシンボル・男体山の初雪と湖畔の静寂）
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                中禅寺湖（ちゅうぜんじこ）は、栃木県日光市の日光国立公園内にある湖。約2万年前に男体山の噴火でできた堰止湖で、人造湖を除けば日本一標高の高い場所にある湖である。また、栃木県最大の湖で、日本の湖沼では25番目の面積規模を有する。平均水深は約94.6mで最大水深は163mあり日本で7番目の深さとなっている。

1周は約25kmであり、歩くと9時間ほどかかる距離である。湖のすぐ北には男体山がそびえ、北西には戦場ヶ原が広がる。湖の南側には八丁出島と呼ばれる細長く突き出した半島があり、紅葉の名所として知られるほか、薬師如来を祀っていたとされる薬師堂跡がある。日本百景に選定されている。
現代では観光地として知られるが、奈良時代に湖岸に勝道上人が開いた中禅寺による名称であり、かつては神仏への信仰にもとづく修行の場として知られていた。湖岸から約100m離れた場所にある上野島には、勝道上人の遺骨の一部が納められている。...
              </p>
              <div className="bg-amber-50 rounded-lg p-3 border border-amber-200/60 text-[11px] md:text-xs text-amber-900 leading-relaxed">
                <span className="font-bold block mb-0.5">💡 周辺観光のポイント</span>
                各高級旅館からスムーズにアクセス可能。初冬の澄んだ大気のもとで、静寂と壮大な自然美を心ゆくまで堪能できます。
              </div>
            </div>
          </div>
        </section>

        {/* 楽天API厳選宿 5選 */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-3 flex items-end justify-between">
            <div>
              <span className="text-xs font-bold text-rose-600 tracking-wider block">RAKUTEN TRAVEL LUXURY RANKING</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900">
                一生に一度は泊まりたい最高峰名宿 5選
              </h2>
            </div>
            <span className="text-xs text-slate-500">リアルタイムAPI連携データ</span>
          </div>

          <div className="space-y-6">
        {/* 宿カード 1: ザ・リッツ・カールトン日光 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第1位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              世界最高峰リッツ・カールトン！ブランド初の天然温泉と中禅寺湖の絶景
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.41</span>
              <span className="text-slate-400">（クチコミ 72件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/179618/179618.jpg"
                  alt="ザ・リッツ・カールトン日光"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  ザ・リッツ・カールトン日光
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>栃木県日光市中宮祠2482番地</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>『東武日光駅』『JR日光駅』から湯元温泉行バスで約40分　ザ・リッツ・カールトン日光下車</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>日光国立公園の特別保護地区に建ち、すべての客室が中禅寺湖または男体山を望むプライベートバルコニーを備えた最高峰のラグジュアリーホテルです。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>リッツ・カールトンブランドとして世界で初めて天然温泉大浴場を導入。日光湯元から引く良質な白濁硫黄泉に浸かり、星空を眺める露天風呂は至高の体験です。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食は厳選されたとちぎ和牛の鉄板焼きや、旬の日本料理、洋食ダイニングから選択可能。洗練された紳士淑女による完璧なサービスが記念日を彩ります。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥113,850</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F179618%2F179618.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1 px-6 py-3 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-sm rounded-xl shadow-md transition transform active:scale-95"
                  >
                    <span>空室・プランを確認</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 宿カード 2: 日光中禅寺温泉　中禅寺金谷ホテル */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第2位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              日本最古のリゾートホテルの伝統！中禅寺湖畔の静寂に抱かれるクラシック宿
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.53</span>
              <span className="text-slate-400">（クチコミ 905件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/28759/28759.jpg"
                  alt="日光中禅寺温泉　中禅寺金谷ホテル"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  日光中禅寺温泉　中禅寺金谷ホテル
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>栃木県日光市中宮祠2482</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>日光宇都宮有料道路清滝IC～車で約25分（いろは坂経由）東武日光駅～無料送迎バス有（運行時間変動有）日光東照宮迄車40分</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>明治初期に誕生した金谷ホテルの伝統を受け継ぎ、中禅寺湖畔の森に佇む重厚なクラシックホテル。暖炉の火が温かく灯るラウンジが旅人を迎えます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>木造の趣ある温泉棟『空ぶろ』には奥日光の名湯・白濁硫黄泉が掛け流され、白樺の木立を眺めながら優雅な湯浴みを楽しめます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食は伝統のフランス料理フルコース。金谷ホテル名物の虹鱒料理やとちぎ和牛フィレ肉など、140年の歴史が磨き上げた正統派フレンチは感動の美味しさです。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥20,800</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28759%2F28759.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1 px-6 py-3 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-sm rounded-xl shadow-md transition transform active:scale-95"
                  >
                    <span>空室・プランを確認</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 宿カード 3: 奥日光　ホテル四季彩 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第3位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              中禅寺湖の豊かな自然に囲まれた隠れ宿！乳白色のにごり湯と旬の味覚
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.32</span>
              <span className="text-slate-400">（クチコミ 2463件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/13462/13462.jpg"
                  alt="奥日光　ホテル四季彩"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  奥日光　ホテル四季彩
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>栃木県日光市中宮祠2485</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>【車】日光道清滝IC～120号25分【電車】東武：北千住～日光1時間半JR：宇都宮～日光50分【バス】日光駅～当館45分</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>中禅寺湖畔の豊かな森の中に佇み、落ち着いた和の美しさと温かなホスピタリティでゲストを癒やすリゾート温泉ホテルです。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>大浴場や開放的な露天風呂には日光湯元のにごり湯温泉が満たされ、森の香りと温泉の蒸気に包まれるリラクゼーションを味わえます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食は地元の厳選素材を取り入れた彩り豊かな創作和食会席。日光湯波（ゆば）やとちぎ和牛など、郷土の味覚を優雅に堪能できます。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥13,200</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13462%2F13462.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1 px-6 py-3 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-sm rounded-xl shadow-md transition transform active:scale-95"
                  >
                    <span>空室・プランを確認</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 宿カード 4: 日光湯元温泉　奥日光　森のホテル */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第4位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              奥日光湯元の濃密な白濁硫黄泉！森の静寂に抱かれる上質温泉リゾート
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.58</span>
              <span className="text-slate-400">（クチコミ 594件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/15755/15755.jpg"
                  alt="日光湯元温泉　奥日光　森のホテル"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  日光湯元温泉　奥日光　森のホテル
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>栃木県日光市湯元2551</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>東武・JR日光駅～バス75分～湯元温泉バスターミナル～徒歩2分/日光宇都宮道路清滝ICより約45分 日光東照宮～車60分</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>中禅寺湖からさらに奥へ進んだ日光湯元温泉に位置し、奥日光の原生林に抱かれた大人のためのモダン温泉宿です。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>源泉地に近い立地ならではの濃厚なエメラルドグリーンから乳白色へ変わる硫黄泉を、広々とした大浴場や露天風呂で心ゆくまで楽しめます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食は四季の恵みを活かした手作りの会席料理。身体の芯から温まる奥日光の自然体験と上質な湯治ステイを提供してくれます。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥23,000</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15755%2F15755.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1 px-6 py-3 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-sm rounded-xl shadow-md transition transform active:scale-95"
                  >
                    <span>空室・プランを確認</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 宿カード 5: オーベルジュ　はなぶさ日光 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第5位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              一日限定数組の大人の隠れ家！本格フレンチと天然温泉の贅沢な滞在
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.20</span>
              <span className="text-slate-400">（クチコミ 39件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/128438/128438.jpg"
                  alt="オーベルジュ　はなぶさ日光"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  オーベルジュ　はなぶさ日光
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>栃木県日光市所野1458-1</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>東武日光駅より徒歩１０分、JR日光駅より徒歩１２分（送迎は行っておりません）</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>日光の豊かな自然に囲まれた閑静な地に佇み、シェフ自慢の本格フランス料理と天然温泉を心ゆくまで堪能できるオーベルジュです。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>客室はプライベート感にあふれ、静かに特別な時間を過ごしたいカップルやご夫婦の記念日旅行に最適です。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食はとちぎ和牛や地元の契約農家が育てる旬の野菜を用いた極上のフレンチコース。ワインとのペアリングも素晴らしく特別な夜を演出します。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥31,900</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F128438%2F128438.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1 px-6 py-3 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-sm rounded-xl shadow-md transition transform active:scale-95"
                  >
                    <span>空室・プランを確認</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>
        </section>

        {/* アクセス＆見頃情報 */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 space-y-4">
          <h2 className="text-lg md:text-xl font-bold flex items-center gap-2 text-amber-300">
            <Train className="w-5 h-5 shrink-0" />
            <span>アクセスガイド・気候と服装のポイント</span>
          </h2>
          <div className="text-xs md:text-sm text-slate-300 leading-relaxed whitespace-pre-line">
            【エリアへのアクセス】
・電車・バス：東武日光線「東武日光駅」またはJR日光線「日光駅」下車。東武バス（中禅寺温泉・湯元温泉行き）に乗り換え「中禅寺温泉」バス停まで約45分。ザ・リッツ・カールトン日光へはバス停より徒歩約5分。各ホテルへの無料送迎バスも運行（要事前確認）。
・車：日光宇都宮道路「清滝IC」より国道120号線（第二いろは坂）を経由して約30分。東京方面（浦和IC）から東北自動車道経由で約2時間30分。
・新幹線：東北新幹線「宇都宮駅」にてJR日光線へ乗り換え（約40分でJR日光駅）。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月中旬〜12月（いろは坂の渋滞が完全に解消し、男体山の初冠雪と中禅寺湖の静寂が広がる大人のプレミアム滞在に最適な時期）。
・気温の目安：標高1200mを超える高地のため平地より7〜8℃低く、11月は日中6〜10℃、朝晩は0〜3℃。12月に入ると日中でも2〜5℃、朝晩は氷点下5℃以下まで冷え込みます。
・服装のポイント：厚手のウールコートやロングダウンジャケット、手袋、マフラー、ニット帽をご用意ください。湖畔は風が吹き抜けるため、防風性のあるアウターが極めて有効です。
          </div>
        </section>

        {/* よくある質問 (FAQ) */}
        <section className="bg-slate-100 rounded-2xl p-6 md:p-8 space-y-4">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>よくある質問（FAQ）</span>
          </h2>
          <div className="space-y-3">
          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2 shadow-sm">
            <h4 className="text-sm md:text-base font-bold text-slate-900 flex items-start gap-2">
              <span className="text-rose-600 font-black shrink-0">Q.</span>
              <span>ザ・リッツ・カールトン日光の温泉は天然温泉ですか？泉質は？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              はい、ザ・リッツ・カールトン日光の温泉は、日光湯元温泉から直接引湯している本格的な天然温泉（含硫黄-カルシウム・ナトリウム-硫酸塩・炭酸水素塩温泉）です。空気に触れることで美しい乳白色に変化し、硫黄の香りと肌をなめらかに整える美肌成分を豊富に含んでいます。
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2 shadow-sm">
            <h4 className="text-sm md:text-base font-bold text-slate-900 flex items-start gap-2">
              <span className="text-rose-600 font-black shrink-0">Q.</span>
              <span>11月〜12月の中禅寺湖周辺はいろは坂の渋滞がありますか？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              10月中旬〜11月上旬の紅葉最盛期はいろは坂で激しい渋滞が発生しますが、11月中旬以降になると紅葉ピークが去るため渋滞は完全に解消し、スムーズにアクセスできます。静かにラグジュアリーステイを楽しみたい方には11月中旬〜12月が最も狙い目です。
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2 shadow-sm">
            <h4 className="text-sm md:text-base font-bold text-slate-900 flex items-start gap-2">
              <span className="text-rose-600 font-black shrink-0">Q.</span>
              <span>初冬の中禅寺湖へ車で行く場合、スタッドレスタイヤは必要ですか？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              標高が高いため、11月中旬以降はいろは坂や中禅寺湖畔で降雪や早朝・夜間の路面凍結が発生することがあります。11月中旬以降にお車で訪れる場合は、安全のためスタッドレスタイヤの装着が必須です。
            </p>
          </div>
          </div>
        </section>

        {/* ふるさと納税・関連リンク */}
        <section className="bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 rounded-2xl p-6 md:p-8 space-y-3 text-center">
          <h2 className="text-xl md:text-2xl font-black">
            楽天トラベル ふるさと納税で最大30%お得に予約！
          </h2>
          <p className="text-xs md:text-sm max-w-xl mx-auto font-medium">
            高価格帯の高級宿だからこそ、楽天トラベルふるさと納税クーポンの割引効果は絶大。実質2,000円の自己負担で憧れのスイートルームに宿泊できます。
          </p>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-1.5 px-8 py-3.5 bg-slate-950 text-white font-black text-sm rounded-xl shadow-lg hover:bg-slate-900 transition transform active:scale-95"
            >
              <span>楽天トラベル ふるさと納税クーポンをチェック</span>
              <ChevronRight className="w-4 h-4 text-amber-400" />
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}
