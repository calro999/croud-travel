import { Metadata } from "next";
import Link from "next/link";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "プライバシーポリシー・免責事項 ｜ 日本全国・旅宿クラウド",
  description: "日本全国・旅宿クラウドの個人情報の取扱い、Cookie・アクセス解析ツールの利用、広告配信プログラムおよび免責事項について定めています。",
  alternates: { canonical: "https://croud-travel.pages.dev/privacy/" },
};

export const dynamic = "force-static";

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-8 text-stone-800">
      <nav aria-label="Breadcrumb" className="text-xs font-bold text-teal-900/60 flex items-center gap-2">
        <Link href="/" className="hover:text-teal-800">ホーム</Link>
        <span>/</span>
        <span className="text-stone-900">プライバシーポリシー・免責事項</span>
      </nav>

      <header className="space-y-3 border-b border-stone-200 pb-6">
        <h1 className="text-2xl md:text-3xl font-black font-journal-serif text-stone-900">
          プライバシーポリシー・免責事項
        </h1>
        <p className="text-xs text-stone-500">最終改定日: 2026年10月12日</p>
      </header>

      <div className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200 shadow-sm space-y-6 text-xs md:text-sm text-stone-700 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-stone-900">1. 個人情報の利用目的</h2>
          <p>
            当サイトでは、お問い合わせの際にお名前やメールアドレス等の個人情報をご入力いただく場合があります。これらの情報は、お問い合わせに対する回答や必要な情報を電子メールなどでご連絡する場合にのみ利用し、目的外の利用は行いません。
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-stone-900">2. アクセス解析ツールについて</h2>
          <p>
            当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにCookie（クッキー）を使用しています。トラフィックデータは匿名で収集されており、個人を特定するものではありません。
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-stone-900">3. 広告の配信について</h2>
          <p>
            当サイトは、楽天グループ株式会社が提供する「楽天アフィリエイト」プログラム等のアフィリエイト広告を利用しています。リンク先の商品は当サイトが直接販売するものではなく、各提携先サイトでの販売・契約となります。
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-stone-900">4. 免責事項</h2>
          <p>
            当サイトのコンテンツや情報について、できる限り正確な情報を掲載するよう努めておりますが、宿泊施設のプラン変更、料金改定、営業時間の変更等により、必ずしも最新性・正確性を保証するものではありません。当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
          </p>
        </section>
      </div>
    </div>
  );
}
