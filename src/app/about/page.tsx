import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, UserCheck, HeartHandshake, Compass, Building, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "運営者情報・編集方針（E-E-A-T） ｜ 日本全国・旅宿クラウド",
  description: "「日本全国・旅宿クラウド」の運営者情報、コンテンツ編集方針、情報収集・検証ポリシー、および提携サービス（楽天トラベル等）に関する透明性ガイドライン。",
  alternates: { canonical: "https://croud-travel.pages.dev/about/" },
};

export const dynamic = "force-static";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-10 text-stone-800">
      {/* パンくずリスト */}
      <nav aria-label="Breadcrumb" className="text-xs font-bold text-teal-900/60 flex items-center gap-2">
        <Link href="/" className="hover:text-teal-800">ホーム</Link>
        <span>/</span>
        <span className="text-stone-900">運営者情報・編集方針</span>
      </nav>

      <header className="space-y-3 border-b border-stone-200 pb-6">
        <span className="text-[10px] font-black tracking-widest bg-teal-100 text-teal-900 px-3 py-1 rounded-full uppercase inline-block">
          ABOUT & EDITORIAL POLICY
        </span>
        <h1 className="text-2xl md:text-4xl font-black font-journal-serif text-stone-900">
          運営者情報とコンテンツ編集方針
        </h1>
        <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
          日本全国・旅宿クラウドは、旅人が「本当に泊まってよかった」と心から思える宿泊体験に出会えるよう、公平で正確な旅宿情報と旬の観光ガイドをお届けする総合旅行情報メディアです。
        </p>
      </header>

      {/* 運営者情報 */}
      <section className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200 shadow-sm space-y-6">
        <h2 className="text-lg md:text-xl font-bold text-stone-900 flex items-center gap-2">
          <Building className="w-5 h-5 text-teal-700" />
          <span>メディア運営概要</span>
        </h2>
        <dl className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm">
          <dt className="font-bold text-stone-500 py-2 border-b border-stone-100">サイト名</dt>
          <dd className="md:col-span-2 text-stone-900 py-2 border-b border-stone-100 font-semibold">
            日本全国・旅宿クラウド（Croud Travel）
          </dd>

          <dt className="font-bold text-stone-500 py-2 border-b border-stone-100">運営主体</dt>
          <dd className="md:col-span-2 text-stone-900 py-2 border-b border-stone-100">
            旅宿クラウド 編集部・リサーチチーム
          </dd>

          <dt className="font-bold text-stone-500 py-2 border-b border-stone-100">サイトURL</dt>
          <dd className="md:col-span-2 text-stone-900 py-2 border-b border-stone-100 font-mono text-teal-800">
            https://croud-travel.pages.dev/
          </dd>

          <dt className="font-bold text-stone-500 py-2 border-b border-stone-100">お問い合わせ</dt>
          <dd className="md:col-span-2 text-stone-900 py-2 border-b border-stone-100">
            <Link href="/contact" className="text-teal-700 underline font-bold">
              お問い合わせフォームはこちら
            </Link>
          </dd>
        </dl>
      </section>

      {/* E-E-A-T 編集・検証方針 */}
      <section className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200 shadow-sm space-y-6">
        <h2 className="text-lg md:text-xl font-bold text-stone-900 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-teal-700" />
          <span>編集方針・信頼性の担保（E-E-A-T基準）</span>
        </h2>
        <div className="space-y-4 text-xs md:text-sm text-stone-600 leading-relaxed">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
            <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-600" />
              <span>1. 公平な宿泊施設選定とデータ連携</span>
            </h3>
            <p>
              当メディアで掲載する各宿泊施設の客室設備、宿泊料金プラン、温泉泉質、評価スコア等は、楽天トラベル公式APIおよび各宿公式サイトの最新公開データをもとに定期的に取得・整理しています。特定の宿を不当に優遇・誇張することなく、旅行者の目的に応じた選択肢を提案します。
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
            <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <Compass className="w-4 h-4 text-teal-600" />
              <span>2. 観光情報・アクセスの正確性検証</span>
            </h3>
            <p>
              各地域の観光名所、世界遺産、季節の見頃情報、気候およびアクセス情報は、各自治体観光課、公益社団法人日本観光振興協会、気象庁統計、およびフリー百科事典ウィキペディア等の公開資料と照合・確認して制作しています。
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
            <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-rose-600" />
              <span>3. アフィリエイトプログラムに関する表記（広告開示）</span>
            </h3>
            <p>
              当サイトは楽天グループ株式会社が提供する「楽天アフィリエイト」プログラムに参加しています。当サイト経由で宿泊予約が行われた場合、運営者に所定の手数料が支払われる場合があります。ただし、これによって宿泊者の支払金額が増加することはありません。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
