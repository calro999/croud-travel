import { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";
import FloatingMobileCTA from "@/app/components/FloatingMobileCTA";
import municipalityData from "@/data/furusato_table_municipalities.json";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://croud-travel.pages.dev";
const AFFILIATE_FURUSATO_URL = "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F";

export const metadata: Metadata = {
  title: "【主要20自治体】ふるさと納税旅行クーポン横断比較表｜寄付額・額面・有効期限・対象宿一覧",
  description: "草津温泉・箱根・軽井沢・別府・由布院など、全国の人気温泉地を擁する主要20自治体の楽天トラベルふるさと納税宿泊クーポンを横断比較！寄付金額ごとのクーポン額面（最大30%）、対象エリア、有効期限（実質約3年）、除外日条件、年末締切（12/31）やワンストップ特例締切（翌年1/10）を網羅解説。",
  keywords: [
    "ふるさと納税 クーポン 比較",
    "楽天トラベル 自治体クーポン 一覧",
    "ふるさと納税 温泉宿 クーポン額面",
    "ふるさと納税 旅行 有効期限",
    "ふるさと納税 除外日",
    "草津温泉 ふるさと納税",
    "箱根 ふるさと納税 クーポン"
  ],
  alternates: { canonical: `${baseUrl}/furusato/coupon-table/` },
  openGraph: {
    title: "【主要20自治体】ふるさと納税旅行クーポン横断比較表｜寄付額・額面・有効期限・対象宿一覧",
    description: "草津・箱根・軽井沢・別府など主要20自治体のふるさと納税宿泊クーポンを徹底比較。寄付額とクーポン額面、有効期限、除外日を整理。",
    url: `${baseUrl}/furusato/coupon-table/`,
    siteName: "旅宿クラウド",
    type: "article",
  },
};

export default function CouponTablePage() {
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: `${baseUrl}/` },
      { "@type": "ListItem", position: 2, name: "ふるさと納税宿泊クーポン完全攻略", item: `${baseUrl}/furusato/` },
      { "@type": "ListItem", position: 3, name: "主要20自治体クーポン横断表", item: `${baseUrl}/furusato/coupon-table/` }
    ]
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "ふるさと納税の年間締め切りはいつですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ふるさと納税の当年度控除対象となる寄付の締め切りは「12月31日 23:59（決済完了）」です。楽天ふるさと納税ではクレジットカード決済等で即時完了するため、大晦日の夜でも間に合いますが、アクセス集中を避けてお早めの寄付をおすすめします。"
        }
      },
      {
        "@type": "Question",
        name: "ワンストップ特例申請書の提出締め切りはいつですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "寄付した翌年の「1月10日（必着）」です。期限までに自治体へ申請書および本人確認書類が届かない場合は、確定申告を行う必要があります。なお、多くの自治体がスマートフォンでマイナンバーカードを読み取る「オンラインワンストップ申請」に対応しており、年末年始でもオンラインで完結可能です。"
        }
      },
      {
        "@type": "Question",
        name: "すでに予約済みの宿泊にあとからクーポンを適用できますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "はい、楽天トラベルでは予約完了後でもマイページの予約詳細画面から「あとからクーポン適用」が可能です。部屋を先に確保しておき、後から寄付してクーポンを適用することができます。"
        }
      },
      {
        "@type": "Question",
        name: "年末年始やお盆などの繁忙期（ハイシーズン）でも使えますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "楽天ふるさと納税トラベルクーポンには原則として利用除外日は設定されていません。ホテルの空室があれば、年末年始・ゴールデンウィーク・お盆・紅葉シーズンでも利用可能です（一部の特別プラン等を除く）。"
        }
      }
    ]
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto px-4 sm:px-6 py-6 md:py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* パンくずリスト */}
      <nav aria-label="Breadcrumb" className="text-xs text-emerald-950/60 flex items-center gap-2">
        <Link href="/" className="hover:text-emerald-900 transition underline underline-offset-2">ホーム</Link>
        <span>›</span>
        <Link href="/furusato/" className="hover:text-emerald-900 transition underline underline-offset-2">ふるさと納税宿泊クーポン完全攻略</Link>
        <span>›</span>
        <span className="text-emerald-950 font-bold">主要20自治体クーポン横断表</span>
      </nav>

      {/* ヒーロータイトル */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black">
          <span>📋</span>
          <span>楽天トラベル公式連携データ・主要20自治体</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black font-journal-serif text-emerald-950 leading-tight">
          主要20自治体 ふるさと納税旅行クーポン横断比較表
        </h1>
        <p className="text-xs md:text-sm text-emerald-950/75 leading-relaxed max-w-3xl">
          草津、箱根、軽井沢、別府、由布院など、当サイトで人気の高い温泉地・リゾートを抱える全国20自治体の楽天トラベルふるさと納税宿泊クーポンを横断比較しました。寄付額ごとのクーポン額面（最大30%還元）、対象エリア、有効期限、除外日条件、提携宿ガイドをご確認いただけます。
        </p>
      </div>

      <ShareButtons
        title="【主要20自治体】ふるさと納税旅行クーポン横断比較表｜寄付額・額面・有効期限・対象宿一覧"
        url={`${baseUrl}/furusato/coupon-table/`}
      />

      {/* ナビゲーションバナー */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <Link
          href="/furusato/"
          className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200/80 hover:border-amber-700 transition flex items-center justify-between"
        >
          <div>
            <span className="text-[10px] font-black text-amber-800 uppercase block">PORTAL</span>
            <span className="text-xs font-bold text-amber-950">ふるさと納税総合TOP</span>
          </div>
          <span className="text-amber-700 font-bold text-xs">→</span>
        </Link>
        <Link
          href="/furusato/simulator/"
          className="p-3.5 rounded-2xl bg-teal-50 border border-teal-200/80 hover:border-teal-700 transition flex items-center justify-between"
        >
          <div>
            <span className="text-[10px] font-black text-teal-800 uppercase block">SIMULATOR</span>
            <span className="text-xs font-bold text-teal-950">上限シミュレーター</span>
          </div>
          <span className="text-teal-700 font-bold text-xs">→</span>
        </Link>
        <Link
          href="/posts/furusato-tax-luxury-ryokan-ranking-japan-hotels-guide/"
          className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200/80 hover:border-emerald-700 transition flex items-center justify-between"
        >
          <div>
            <span className="text-[10px] font-black text-emerald-800 uppercase block">RANKING</span>
            <span className="text-xs font-bold text-emerald-950">高級宿ランキング12選</span>
          </div>
          <span className="text-emerald-700 font-bold text-xs">→</span>
        </Link>
        <Link
          href="/posts/furusato-tax-yearend-rush-rakuten-travel-coupon-guide/"
          className="p-3.5 rounded-2xl bg-orange-50 border border-orange-200/80 hover:border-orange-700 transition flex items-center justify-between"
        >
          <div>
            <span className="text-[10px] font-black text-orange-800 uppercase block">YEAR-END</span>
            <span className="text-xs font-bold text-orange-950">駆け込み厳選20選</span>
          </div>
          <span className="text-orange-700 font-bold text-xs">→</span>
        </Link>
      </div>

      {/* ⚠️ 年末期限・ワンストップ特例締切の注意喚起アラート */}
      <div className="p-5 rounded-2xl bg-red-50 border-2 border-red-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs">
        <div className="space-y-1">
          <span className="px-2.5 py-0.5 bg-red-600 text-white font-black text-[10px] rounded-full inline-block">期限注意</span>
          <p className="font-bold text-red-950">
            当年度寄付締め切り：<span className="text-red-700 font-black">12月31日 23:59 決済完了</span> ／ ワンストップ特例申請書：<span className="text-red-700 font-black">翌年1月10日 必着</span>
          </p>
          <p className="text-stone-600 text-[11px]">
            ※大晦日夜間は決済通信集中が予想されます。マイナンバーカード対応自治体では「オンラインワンストップ申請」を活用すると郵送不要でスムーズです。
          </p>
        </div>
        <Link
          href="/posts/rakuten-furusato-travel/"
          className="shrink-0 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition text-[11px]"
        >
          予約手順ガイド →
        </Link>
      </div>

      {/* 横断表セクション */}
      <section className="bg-white rounded-3xl p-6 md:p-8 border border-emerald-950/10 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-emerald-950/10 pb-4">
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-teal-800">COUPON COMPARISON TABLE</span>
            <h2 className="text-lg md:text-xl font-black text-emerald-950 font-journal-serif">
              全国主要20自治体 宿泊クーポン仕様比較一覧
            </h2>
          </div>
          <span className="text-xs text-stone-500 font-medium">
            全20自治体・寄付額最大30%クーポン対象
          </span>
        </div>

        {/* テーブル（スマホ横スクロール対応） */}
        <div className="overflow-x-auto -mx-6 px-6">
          <table className="w-full text-left text-xs border-collapse min-w-[760px]">
            <thead>
              <tr className="bg-slate-100 text-slate-800 border-b-2 border-slate-300">
                <th className="py-3 px-3 font-black whitespace-nowrap">自治体（都道府県）</th>
                <th className="py-3 px-3 font-black whitespace-nowrap">温泉地・対象エリア</th>
                <th className="py-3 px-3 font-black whitespace-nowrap">寄付額とクーポン額面例</th>
                <th className="py-3 px-3 font-black whitespace-nowrap">有効期限</th>
                <th className="py-3 px-3 font-black whitespace-nowrap">利用除外日</th>
                <th className="py-3 px-3 font-black whitespace-nowrap">対象宿・詳細ガイド</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              {municipalityData.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition">
                  <td className="py-3.5 px-3 font-bold text-slate-900 whitespace-nowrap">
                    <div>{item.municipality}</div>
                    <span className="text-[10px] font-normal text-slate-500">{item.pref}</span>
                  </td>
                  <td className="py-3.5 px-3 whitespace-nowrap">
                    <span className="inline-block px-2 py-0.5 rounded bg-teal-50 text-teal-900 font-bold text-[11px]">
                      {item.onsen}
                    </span>
                  </td>
                  <td className="py-3.5 px-3">
                    <div className="space-y-0.5">
                      <span className="font-mono text-slate-900 block font-bold">
                        10,000円寄付 → 3,000円
                      </span>
                      <span className="font-mono text-stone-500 text-[11px] block">
                        50,000円寄付 → 15,000円
                      </span>
                      <span className="font-mono text-stone-500 text-[11px] block">
                        100,000円寄付 → 30,000円
                      </span>
                      <span className="text-[10px] text-amber-800 font-bold">（最大30%）</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-3 whitespace-nowrap">
                    <span className="text-slate-800 font-medium">寄付翌日〜約3年間</span>
                    <span className="block text-[10px] text-slate-500">（翌々年同月末まで）</span>
                  </td>
                  <td className="py-3.5 px-3 whitespace-nowrap">
                    <span className="text-emerald-700 font-bold">原則なし</span>
                    <span className="block text-[10px] text-slate-400">※一部プラン要確認</span>
                  </td>
                  <td className="py-3.5 px-3 whitespace-nowrap space-y-1">
                    <Link
                      href={`/${item.articleSlug}/`}
                      className="inline-block text-teal-800 hover:text-teal-950 font-bold underline text-xs"
                    >
                      宿泊ルポ特集 →
                    </Link>
                    <a
                      href={item.affiliateSampleUrl}
                      target="_blank"
                      rel="sponsored noopener noreferrer"
                      className="block text-[11px] text-amber-700 hover:text-amber-900 font-medium"
                    >
                      楽天で宿を見る ↗
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-slate-50 p-4 rounded-xl text-[11px] text-slate-600 space-y-1">
          <p>※1 掲載している寄付金額・クーポン額面は代表例です。自治体によっては2万円、3万円、20万円、30万円以上の設定もあります。</p>
          <p>※2 除外日は楽天トラベルクーポン規約上原則設定されていませんが、宿ごとの休館日や一部の特定プラン（日帰り限定プラン等）は対象外となる場合があります。</p>
          <p>※3 自治体ごとの詳細な利用条件や対象外施設は、各自治体の楽天ふるさと納税ページにて「要確認」の上お申し込みください。</p>
        </div>
      </section>

      {/* ❓ 年末締切・ワンストップ特例FAQ */}
      <section className="bg-white rounded-3xl p-6 md:p-8 border border-emerald-950/10 shadow-sm space-y-6">
        <div className="space-y-1">
          <span className="text-[10px] font-black uppercase tracking-wider text-amber-800">DEADLINES & RULES FAQ</span>
          <h2 className="text-lg md:text-xl font-black text-emerald-950 font-journal-serif">
            年末駆け込み＆ワンストップ申請の重要ルール FAQ
          </h2>
          <p className="text-xs text-stone-500">
            12月31日の寄付締め切り、翌年1月10日のワンストップ特例申請締め切りなど、失敗しないための重要ポイントを整理しました。
          </p>
        </div>

        <div className="space-y-4 divide-y divide-slate-200">
          <div className="pt-4 first:pt-0 space-y-1.5">
            <h4 className="text-sm font-bold text-slate-900 flex items-start gap-2">
              <span className="text-amber-700 font-black">Q.</span>
              <span>12月31日の何時までに寄付を完了すれば今年度の控除になりますか？</span>
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed pl-5">
              12月31日 23時59分までにクレジットカード決済などの決済処理が完了している必要があります。大晦日の23時台はアクセス集中や決済通信遅延が発生する可能性があるため、23時前までの余裕をもった手続きを強くおすすめします。
            </p>
          </div>

          <div className="pt-4 space-y-1.5">
            <h4 className="text-sm font-bold text-slate-900 flex items-start gap-2">
              <span className="text-amber-700 font-black">Q.</span>
              <span>ワンストップ特例申請の締め切り（翌年1月10日）に遅れたらどうなりますか？</span>
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed pl-5">
              1月10日の必着期限に申請書が間に合わなかった場合でも、ふるさと納税が無効になるわけではありません。2月16日〜3月15日の確定申告期間中に「確定申告」を行えば、問題なく所得税還付と住民税控除を受けられます。
            </p>
          </div>

          <div className="pt-4 space-y-1.5">
            <h4 className="text-sm font-bold text-slate-900 flex items-start gap-2">
              <span className="text-amber-700 font-black">Q.</span>
              <span>年末に寄付した旅行クーポンは、いつ使えますか？</span>
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed pl-5">
              寄付完了後、通常翌日〜数日以内にお手持ちの楽天会員アカウントへ宿泊クーポンが自動付与されます。有効期限は「寄付完了日の翌々年同月末まで（実質約3年間）」あるため、年末に寄付して翌年のゴールデンウィークや夏休み、あるいは翌々年の旅行までじっくり使うことができます。
            </p>
          </div>

          <div className="pt-4 space-y-1.5">
            <h4 className="text-sm font-bold text-slate-900 flex items-start gap-2">
              <span className="text-amber-700 font-black">Q.</span>
              <span>紙のクーポン券が郵送されてくるのを待つ必要はありますか？</span>
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed pl-5">
              不要です。楽天トラベルのふるさと納税クーポンはすべてオンライン完結（電子クーポン）です。楽天トラベルのWebサイトまたはアプリから宿泊予約を行う際、クーポン選択画面で選ぶだけでその場で割引が適用されます。
            </p>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 rounded-3xl p-8 text-white shadow-xl text-center space-y-4">
        <span className="inline-block text-xs font-black uppercase tracking-widest bg-black/20 px-3.5 py-1 rounded-full">
          年内ラストチャンス！
        </span>
        <h3 className="text-xl md:text-2xl font-black font-journal-serif">
          全国の人気自治体 楽天ふるさと納税宿泊クーポンをチェック
        </h3>
        <p className="text-amber-100 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
          控除上限内なら実質負担2,000円。有効期限はたっぷり3年間！今年の枠を安心してお得な旅行クーポンに変えておきましょう。
        </p>
        <div className="pt-2">
          <a
            href={AFFILIATE_FURUSATO_URL}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm md:text-base font-black text-amber-950 bg-white hover:bg-amber-50 rounded-2xl shadow-xl transition transform hover:scale-105"
          >
            <span>👉 楽天ふるさと納税トラベル公式ページを見る</span>
            <span>↗</span>
          </a>
        </div>
      </section>

      <FloatingMobileCTA
        affiliateUrl={AFFILIATE_FURUSATO_URL}
        hotelName="ふるさと納税 自治体宿泊クーポン"
        price="主要20自治体・最大30%割引"
      />
    </div>
  );
}
