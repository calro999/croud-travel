import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【日本三大山城・天空の城】竹田城・備中松山城・岩村城の雲海と歴史浪漫・城下町宿特集｜楽天ふるさと納税で巡る雲上の砦',
  description: '雲海に浮かぶ天空の城として名高い日本屈指の山城遺構（兵庫・竹田城跡、岡山・現存天守備中松山城、岐阜・日本三大山城岩村城）。早朝の雲海展望と城下町の町家ホテル・古民家宿で歴史浪漫を満喫。楽天ふるさと納税の宿泊割引クーポンを活用して、幻想的な天空の城旅へ。',
  keywords: '日本三大山城, 天空の城, 竹田城, 備中松山城, 岩村城, 雲海ホテル, 城下町旅館, 楽天ふるさと納税, 歴史旅行',
  openGraph: {
    title: '【日本三大山城・天空の城】竹田城・備中松山城・岩村城の雲海と歴史浪漫・城下町宿特集｜楽天ふるさと納税で巡る雲上の砦',
    description: '雲海に浮かぶ天空の城として名高い日本屈指の山城遺構（兵庫・竹田城跡、岡山・現存天守備中松山城、岐阜・日本三大山城岩村城）。早朝の雲海展望と城下町の町家ホテル・古民家宿で歴史浪漫を満喫。楽天ふるさと納税の宿泊割引クーポンを活用して、幻想的な天空の城旅へ。',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-mountain-castles-history-stay',
    siteName: '楽天ふるさと納税×高級トラベルガイド',
    type: 'article',
    locale: 'ja_JP',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-three-great-mountain-castles-history-stay',
  },
};

const hotels = [
  {
    "key": "castle_takeda",
    "hotelNo": 145001,
    "hotelName": "竹田城　城下町　ホテルＥＮ（えん）",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/145001/145001.jpg",
    "hotelMinCharge": 22594,
    "reviewAverage": 4.67,
    "reviewCount": 219,
    "address": "兵庫県朝来市和田山町竹田上町西側363",
    "access": "JR播但線　竹田駅より徒歩にて3分（駅より250ｍ）",
    "userReview": "絶景のロケーションと心温まるおもてなし、旬の美食に大変満足いたしました。",
    "label": "兵庫県朝来市ふるさと納税・天空の城・日本のマチュピチュの雲海絶景「竹田城跡」竹田城城下町ホテルEN",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "castle_bitchu",
    "hotelNo": 193515,
    "hotelName": "高梁ファイブシーズホテル",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/193515/193515.jpg",
    "hotelMinCharge": 2660,
    "reviewAverage": 3.71,
    "reviewCount": 84,
    "address": "岡山県高梁市栄町1943-5",
    "access": "ＪＲ伯備線　備中高梁駅より徒歩約２分・岡山自動車道賀陽ICより車で約15分",
    "userReview": "駅近でリーズナブル、とても助かります駅から近いし、リーズナブルなので、助かります。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel…　2026-07-24 16:36:32投稿 <a href=\"https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=193515\" class=\"3click\">つづきはこちら</a>",
    "label": "岡山県総社市・高梁市ふるさと納税・現存天守の天空山城・備中松山城の雲海と天然温泉「国民宿舎 サンロード吉備路」",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "castle_iwamura",
    "hotelNo": 187460,
    "hotelName": "さつき旅館",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/187460/187460.jpg",
    "hotelMinCharge": 6000,
    "reviewAverage": 4.25,
    "reviewCount": 5,
    "address": "岐阜県恵那市明智町1158-1",
    "access": "中央道恵那ICまたは瑞浪ICより車40分、明知鉄道明智駅より徒歩9分",
    "userReview": "絶景のロケーションと心温まるおもてなし、旬の美食に大変満足いたしました。",
    "label": "岐阜県恵那市ふるさと納税・日本三大山城・日本三大美村の伝統と女城主の浪漫「岩村城跡」岩村山荘",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  }
];

export default function FurusatoRound54Page() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Header */}
      <header className="relative bg-gradient-to-r from-slate-950 via-indigo-950 to-blue-950 text-white py-20 px-4 sm:px-6 lg:px-8 shadow-2xl">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/40 px-4 py-1.5 rounded-full text-indigo-300 text-sm font-semibold mb-6">
            <span>✨</span>
            <span>天空の山城・雲海歴史浪漫ステイ特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            日本三大山城の雲海と歴史浪漫・城下町宿ステイ
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            険しい岩山の頂に築かれ、秋から冬にかけて一面の白い雲海に包まれる「天空の山城」。日本のマチュピチュと称される「竹田城跡」、現存天守を持つ唯一の山城で雲海展望が圧巻の「備中松山城」、日本三大山城にして女城主の悲哀が残る「岩村城」。朝もやの中に浮かび上がる石垣の威容と、歴史情緒あふれる城下町の温もり。楽天ふるさと納税の宿泊クーポンを活用して、実質2,000円の自己負担で叶える天空山城リトリートをお楽しみください。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transform hover:-translate-y-0.5 transition duration-200"
            >
              <span>♨️</span>
              <span>楽天ふるさと納税で対象クーポンを探す</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro Box */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-100 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="text-indigo-600">🌿</span>
            <span>なぜ今、ふるさと納税で巡る日本の歴史景観・鉄道旅なのか？</span>
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            全国各地の自治体が発行する「楽天トラベルクーポン返礼品」は、寄付額の最大30%相当が旅行代金から割引される極めて還元率の高い返礼品です。翌年の住民税・所得税の控除対象となるため、実質2,000円の自己負担で憧れの城下町老舗宿や絶景パノラマリゾートに宿泊することができます。
          </p>
          <p className="text-slate-700 leading-relaxed">
            寄付後即座にマイクーポンへ付与され、予約時に1クリックで適用可能。本特集で厳選した名宿はいずれも各エリア屈指の自然遺産・歴史浪漫とおもてなしを誇り、五感を解き放つ特別な休日を約束してくれます。
          </p>
        </section>

        {/* Hotel Cards */}
        <div className="space-y-12 mb-16">
          {hotels.map((h, idx) => (
            <article key={h.key} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 transition-all hover:shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative min-h-[280px] md:min-h-full">
                  <Image
                    src={h.hotelImageUrl}
                    alt={h.hotelName}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute top-4 left-4 bg-indigo-950/80 backdrop-blur-md text-indigo-300 font-bold px-3 py-1 rounded-lg text-sm border border-indigo-500/30">
                    STAGE 0{idx + 1}
                  </div>
                </div>
                <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold text-indigo-700 mb-1 tracking-wider uppercase">
                      {h.label}
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-3 hover:text-indigo-700 transition">
                      <a href={h.affiliateUrl} target="_blank" rel="noopener noreferrer">
                        {h.hotelName}
                      </a>
                    </h3>
                    <div className="flex items-center gap-3 mb-4 text-sm text-slate-600">
                      <span className="flex items-center text-amber-500 font-bold">
                        ★ {h.reviewAverage.toFixed(1)}
                      </span>
                      <span className="text-slate-400">({h.reviewCount}件の評価)</span>
                      <span className="text-indigo-700 font-semibold">・ 参考目安: ¥{h.hotelMinCharge.toLocaleString()}〜</span>
                    </div>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100 italic">
                      「{h.userReview}」
                    </p>
                    <div className="text-xs text-slate-500 space-y-1 mb-6">
                      <p>📍 所在地: {h.address}</p>
                      <p>🚗 アクセス: {h.access}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                    <a
                      href={h.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-gradient-to-r from-indigo-600 to-blue-700 hover:from-indigo-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-xl shadow-md transition duration-150 text-sm"
                    >
                      楽天ふるさと納税で宿を予約する
                    </a>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-xl shadow-md transition duration-150 text-sm"
                    >
                      自治体返礼品クーポン一覧
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Step Guide */}
        <section className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-8 shadow-xl mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-indigo-300">
            楽天ふるさと納税トラベルクーポンの簡単3ステップ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-black text-amber-400 mb-2">01</div>
              <h3 className="font-bold text-lg mb-2">自治体に寄付</h3>
              <p className="text-sm text-slate-300">
                希望する宿がある自治体を選び、楽天ふるさと納税で寄付を実行します。楽天ポイントも通常通り貯まります。
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-black text-amber-400 mb-2">02</div>
              <h3 className="font-bold text-lg mb-2">クーポン自動付与</h3>
              <p className="text-sm text-slate-300">
                寄付完了後、数日以内にお客様の楽天アカウント（マイクーポン）へ宿泊割引クーポンが自動的に付与されます。
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-black text-amber-400 mb-2">03</div>
              <h3 className="font-bold text-lg mb-2">楽天トラベルで予約</h3>
              <p className="text-sm text-slate-300">
                対象の宿泊施設を予約する際、支払い画面でクーポンを選択するだけで最大30%割引が即時適用されます。
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg hover:brightness-110 transition"
            >
              今すぐ使える自治体クーポンを探す
            </a>
          </div>
        </section>

        {/* Cross Interlinks */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-100">
          <h2 className="text-xl font-bold text-slate-900 mb-4">あわせて読みたい極上ふるさと納税旅特集</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/furusato-tax-three-great-rivers-riverside-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-indigo-700 block mb-1">三大河川名湯</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大河川】利根川・筑後川・吉野川のせせらぎ宿特集</span>
            </Link>
            <Link
              href="/furusato-tax-three-great-karsts-highland-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-indigo-700 block mb-1">三大カルスト天空リゾート</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大カルスト】秋吉台・四国カルスト・平尾台特集</span>
            </Link>
            <Link
              href="/furusato-tax-three-great-wagyu-beef-luxury-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-indigo-700 block mb-1">三大和牛ガストロノミー</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大銘牛】松阪牛・神戸牛・米沢牛の名湯贅沢ステイ</span>
            </Link>
            <Link
              href="/furusato-tax-three-great-dunes-oceanview-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-indigo-700 block mb-1">三大砂丘風紋絶景</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大砂丘】鳥取砂丘・遠州砂丘・吹上浜ステイ特集</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
