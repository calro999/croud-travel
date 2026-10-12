import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー ｜ 日本全国・旅宿クラウド",
  description: "日本全国・旅宿クラウドのプライバシーポリシー（個人情報保護方針・免責事項・アフィリエイトプログラムに関する表記）について定めています。",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 space-y-8">
      <nav className="text-xs text-slate-500 flex items-center gap-2">
        <Link href="/" className="hover:text-teal-800 transition">ホーム</Link>
        <span>/</span>
        <span className="text-slate-900 font-bold">プライバシーポリシー</span>
      </nav>

      <div className="border-b border-slate-200 pb-5">
        <h1 className="text-2xl sm:text-3xl font-black font-journal-serif text-slate-900">
          プライバシーポリシー
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-2">
          当サイト「日本全国・旅宿クラウド」（以下、「当サイト」といいます）における個人情報の保護およびその適切な取り扱いについて以下の通り定めます。
        </p>
      </div>

      <section className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <h2 className="text-base sm:text-lg font-bold text-slate-900 border-l-4 border-teal-600 pl-3">
          1. 個人情報の収集と利用目的
        </h2>
        <p>
          当サイトでは、お問い合わせやご意見の送信時にお名前やメールアドレス等の個人情報をご登録いただく場合があります。これらの情報は、ご質問への回答や必要な情報をご連絡するためにのみ利用し、目的外での利用はいたしません。
        </p>

        <h2 className="text-base sm:text-lg font-bold text-slate-900 border-l-4 border-teal-600 pl-3">
          2. クッキー（Cookie）およびアクセス解析ツールの利用
        </h2>
        <p>
          当サイトでは、トラフィックデータの収集・分析のためにCookieを使用する場合があります。データは匿名で収集されており、個人を特定するものではありません。ブラウザの設定によりCookieを無効化することも可能です。
        </p>

        <h2 className="text-base sm:text-lg font-bold text-slate-900 border-l-4 border-teal-600 pl-3">
          3. アフィリエイトプログラムおよび広告配信について
        </h2>
        <p>
          当サイトは、楽天アフィリエイトをはじめとする第三者配信のアフィリエイトプログラムに参加しています。第三者がコンテンツおよび宣伝を提供し、訪問者から直接情報を収集し、訪問者のブラウザにCookieを設定または認識する場合があります。紹介している商品や宿泊プランの予約、契約等はリンク先販売店・宿泊施設との直接取引となります。
        </p>

        <h2 className="text-base sm:text-lg font-bold text-slate-900 border-l-4 border-teal-600 pl-3">
          4. 免責事項
        </h2>
        <p>
          当サイトに掲載されている情報については、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が混入したり、情報が古くなっている場合があります。宿泊料金、運行状況、キャンペーン内容等は予告なく変更される場合がありますので、必ず公式サイトにて最新情報をご確認ください。当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねます。
        </p>

        <h2 className="text-base sm:text-lg font-bold text-slate-900 border-l-4 border-teal-600 pl-3">
          5. プライバシーポリシーの改定
        </h2>
        <p>
          当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。修正された最新のプライバシーポリシーは常に本ページにて開示されます。
        </p>
      </section>

      <div className="pt-8 border-t border-slate-200 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-800 text-white text-xs font-bold hover:bg-teal-700 transition"
        >
          <span>←</span> <span>トップページに戻る</span>
        </Link>
      </div>
    </div>
  );
}
