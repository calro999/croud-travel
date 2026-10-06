import React from 'react';
import Link from 'next/link';

interface FurusatoStepSectionProps {
  municipality?: string;
  theme?: string;
}

export default function FurusatoStepSection({ municipality, theme }: FurusatoStepSectionProps) {
  const targetName = municipality || '旅行先自治体';
  const targetTheme = theme ? `「${theme}」` : '気になる宿';

  return (
    <section className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200/80 shadow-sm mb-16">
      <h2 className="text-xl md:text-2xl font-bold font-serif text-stone-800 mb-6 text-center">
        ふるさと納税トラベルクーポンの簡単3ステップ
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
          <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">1</div>
          <h3 className="font-bold text-stone-900 text-sm mb-2">{targetName}へ寄付</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            楽天ふるさと納税で{targetName}のトラベルクーポンを選び、オンラインで寄付手続きを完了します。
          </p>
        </div>
        <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
          <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">2</div>
          <h3 className="font-bold text-stone-900 text-sm mb-2">クーポン付与（3年間有効）</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            寄付受領後、楽天アカウントにトラベルクーポンが直接付与され、有効期間3年間いつでも利用できます。
          </p>
        </div>
        <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
          <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">3</div>
          <h3 className="font-bold text-stone-900 text-sm mb-2">宿泊予約で最大30%割引</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            {targetTheme}の対象プラン予約時にクーポンを適用。既存予約への「あとから適用」にも対応しています。
          </p>
        </div>
      </div>
      <div className="text-center mt-6">
        <Link
          href="/furusato-tax-travel-beginners-complete-guide"
          className="text-amber-800 font-bold text-xs sm:text-sm hover:underline"
        >
          👉 詳しいお金の流れやワンストップ特例の手順はこちらの完全マニュアルへ
        </Link>
      </div>
    </section>
  );
}
