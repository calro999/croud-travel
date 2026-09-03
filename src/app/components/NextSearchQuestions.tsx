import Link from 'next/link';
import { SPOTS_DATA, FamousSpotDetail } from '@/data/spotsData';
import { CITIES_DATA, CityInfo } from '@/data/citiesData';
import { PREFECTURES_DATA } from '@/data/prefecturesData';
import { FEATURE_HUBS_DATA, FeatureHubMeta, getRecommendedFeatureHubs } from '@/data/featureHubsData';

export interface NextQuestionItem {
  question: string;
  badge?: string;
  answerSnippet: string;
  linkText: string;
  href: string;
  isExternal?: boolean;
}

interface NextSearchQuestionsProps {
  title?: string;
  subtitle?: string;
  items: NextQuestionItem[];
}

export default function NextSearchQuestions({
  title = "🔍 この記事を読んだ人が「次に検索している疑問」＆先回りガイド",
  subtitle = "旅行の計画をスムーズに進めるために、次に知りたくなる周辺情報やおすすめルートをまとめました。",
  items,
}: NextSearchQuestionsProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-teal-50/80 via-emerald-50/40 to-amber-50/60 border border-teal-900/10 shadow-sm space-y-6">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-teal-800 text-white uppercase tracking-wider">
            NEXT SEARCH
          </span>
          <span className="text-[11px] font-bold text-teal-900/60">旅の疑問を先回り解決</span>
        </div>
        <h3 className="text-base md:text-xl font-black font-journal-serif text-emerald-950">
          {title}
        </h3>
        <p className="text-xs text-emerald-950/70 leading-relaxed font-medium">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between p-4 md:p-5 rounded-2xl bg-white border border-teal-900/10 shadow-sm hover:border-teal-700/30 hover:shadow-md transition duration-200 space-y-3"
          >
            <div className="space-y-1.5">
              {item.badge && (
                <span className="inline-block text-[10px] font-extrabold px-2 py-0.5 rounded bg-amber-100/80 text-amber-900">
                  {item.badge}
                </span>
              )}
              <h4 className="text-xs md:text-sm font-black text-emerald-950 leading-snug flex items-start gap-1.5">
                <span className="text-teal-800 font-bold shrink-0">Q.</span>
                <span>{item.question}</span>
              </h4>
              <p className="text-xs text-emerald-950/70 leading-relaxed pl-4">
                {item.answerSnippet}
              </p>
            </div>

            <div className="pt-2 border-t border-emerald-950/5">
              {item.isExternal ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-black text-teal-800 hover:text-amber-700 transition"
                >
                  <span>{item.linkText}</span>
                  <span>→</span>
                </a>
              ) : (
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-xs font-black text-teal-800 hover:text-amber-700 transition"
                >
                  <span>{item.linkText}</span>
                  <span>→</span>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
