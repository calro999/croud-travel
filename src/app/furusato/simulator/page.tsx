import { Metadata } from "next";
import SimulatorClient from "./SimulatorClient";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://croud-travel.pages.dev";

export const metadata: Metadata = {
  title: "ふるさと納税 控除上限シミュレーター＆残り枠ぴったり提案ツール",
  description: "年収と家族構成からふるさと納税の控除上限目安を即座にシミュレーション！12月31日の締切直前に余った残り枠をぴったり使い切る楽天トラベル宿泊クーポンの組み合わせと厳選宿をご提案。ワンストップ特例申請は翌年1月10日必着です。",
  keywords: [
    "ふるさと納税 シミュレーター",
    "ふるさと納税 控除上限額",
    "ふるさと納税 残り枠",
    "楽天トラベル クーポン 計算",
    "ふるさと納税 旅行クーポン 組み合わせ",
    "ワンストップ特例 5自治体"
  ],
  alternates: { canonical: `${baseUrl}/furusato/simulator/` },
  openGraph: {
    title: "ふるさと納税 控除上限シミュレーター＆残り枠ぴったり提案ツール",
    description: "年収と家族構成から控除上限目安を即座に算出！12月31日締切の残り枠を使い切る旅行クーポン組み合わせ例をご提案。ワンストップ特例申請は翌年1月10日必着対応。",
    url: `${baseUrl}/furusato/simulator/`,
    siteName: "旅宿クラウド",
    type: "article",
  },
};

export default function SimulatorPage() {
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: `${baseUrl}/` },
      { "@type": "ListItem", position: 2, name: "ふるさと納税宿泊クーポン完全攻略", item: `${baseUrl}/furusato/` },
      { "@type": "ListItem", position: 3, name: "控除シミュレーター＆残り枠提案", item: `${baseUrl}/furusato/simulator/` }
    ]
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "控除上限額を超えて寄付してしまった場合はどうなりますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "上限額を超えた寄付分は自己負担（純粋な寄付）となり、翌年の税金控除を受けられなくなります。本シミュレーターの目安や各ポータルサイトの詳細シミュレーターで上限額を事前にしっかり確認して寄付を行いましょう。"
        }
      },
      {
        "@type": "Question",
        name: "ワンストップ特例制度の「5自治体」とは寄付回数のことですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "寄付回数ではなく「自治体の数」です。同じ1つの自治体に年5回寄付しても自治体数は「1」とカウントされます。年間で寄付した自治体が5自治体以内であれば、確定申告不要のワンストップ特例制度を利用できます。"
        }
      },
      {
        "@type": "Question",
        name: "楽天トラベルのふるさと納税クーポンはいつ届きますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "寄付手続き完了後、通常翌日〜数日以内に楽天会員アカウントに宿泊クーポンとして自動付与されます。有効期限は寄付翌日から最長3年間あるため、年末に寄付して翌年の連休や旅行に利用できます。"
        }
      }
    ]
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto px-4 sm:px-6 py-6 md:py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      <SimulatorClient />
    </div>
  );
}
