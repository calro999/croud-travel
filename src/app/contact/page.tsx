import { Metadata } from "next";
import Link from "next/link";
import { Mail, HelpCircle, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "お問い合わせ ｜ 日本全国・旅宿クラウド",
  description: "日本全国・旅宿クラウドに関するお問い合わせ、掲載内容のご指摘、取材のご相談はこちらのページよりお願いいたします。",
  alternates: { canonical: "https://croud-travel.pages.dev/contact/" },
  openGraph: {
    title: "お問い合わせ ｜ 日本全国・旅宿クラウド",
    description: "日本全国・旅宿クラウドに関するお問い合わせ、掲載内容のご指摘、取材のご相談はこちらのページよりお願いいたします。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "お問い合わせ ｜ 日本全国・旅宿クラウド",
    description: "日本全国・旅宿クラウドに関するお問い合わせ、掲載内容のご指摘、取材のご相談はこちらのページよりお願いいたします。",
  }
};

export const dynamic = "force-static";

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-8 text-stone-800">
      <nav aria-label="Breadcrumb" className="text-xs font-bold text-teal-900/60 flex items-center gap-2">
        <Link href="/" className="hover:text-teal-800">ホーム</Link>
        <span>/</span>
        <span className="text-stone-900">お問い合わせ</span>
      </nav>

      <header className="space-y-3 border-b border-stone-200 pb-6">
        <h1 className="text-2xl md:text-3xl font-black font-journal-serif text-stone-900">
          お問い合わせ窓口
        </h1>
        <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
          当サイトの掲載内容に関するご意見・ご指摘、誤字脱字のご連絡、またはビジネス・タイアップのご相談は下記をご確認の上、ご連絡をお願いいたします。
        </p>
      </header>

      <div className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200 shadow-sm space-y-6">
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-3 text-xs md:text-sm text-amber-950">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            ※当サイトは宿泊プランの紹介メディアであり、宿泊施設の直接運営者ではありません。個別の空室状況、予約の変更・キャンセル、現地へのアクセス案内等につきましては、各宿泊施設または予約先の楽天トラベルサポートセンターへ直接お問い合わせくださいますようお願い申し上げます。
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-base font-bold text-stone-900 flex items-center gap-2">
            <Mail className="w-4 h-4 text-teal-700" />
            <span>連絡先メールアドレス</span>
          </h2>
          <p className="text-xs md:text-sm text-stone-700">
            ご意見・取材等のご連絡は下記アドレス宛にお送りください：
          </p>
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 font-mono text-sm text-teal-900 font-bold">
            info [at] croud-travel.pages.dev
          </div>
          <p className="text-[11px] text-stone-500">
            （スパム防止のため、[at]を半角@に変換してお送りください）
          </p>
        </div>
      </div>
    </div>
  );
}
