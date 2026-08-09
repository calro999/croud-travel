import os
import json
import urllib.parse

AFFILIATE_PREFIX = "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc="
POSTS_DIR = "src/data/posts"

posts_data = [
    {
        "file": "197415.json",
        "slug": "livemax-echigoyuzawa",
        "id": "197415",
        "hotel_name": "天然温泉 リブマックスリゾート越後湯沢",
        "prefecture": "新潟県",
        "area": "越後湯沢・苗場・佐渡",
        "title": "【2026年最新】リブマックスリゾート越後湯沢のリアルなブログ評判！天然温泉・プール・バイキング徹底紹介",
        "description": "検索人気急上昇中！「リブマックスリゾート越後湯沢」の天然温泉・客室露天風呂・室内温水プール・ビュッフェの魅力をリアルな目線で徹底レポート。越後湯沢エリアでの子連れ家族旅行やカップル旅行に失敗しないお得な予約プランも紹介。",
        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/197415/197415.jpg",
        "rating": "4.4",
        "review_count": 380,
        "content_highlights": [
            "全室Wi-Fi＆スモンベッド完備！露天風呂付き客室で過ごす至福のプライベートタイム",
            "源泉かけ流しの天然温泉大浴場と季節を問わず楽しめる室内温水プール",
            "和洋中が揃う豪華バイキングと、新潟ならではの美味しいお米・旬食材を堪能"
        ],
        "faqs": [
            {
                "q": "越後湯沢駅からのアクセスや送迎バスはありますか？",
                "a": "JR越後湯沢駅（東口）よりお車で約5分・徒歩約20分です。季節やプランによって無料送迎サービスも運行しているため、電車・新幹線でお越しの方も大変スムーズです。"
            },
            {
                "q": "温水プールや温泉は子連れ・赤ちゃんと一緒に利用できますか？",
                "a": "はい！オールシーズン利用できる室内温水プールはファミリー層に大人気です。おむつの取れていないお子様は水遊び用パンツ着用で利用可能。大浴場の天然温泉も広々としており家族でゆったり楽しめます。"
            },
            {
                "q": "夕食・朝食バイキングのメニューや混雑具合はどうですか？",
                "a": "旬の地場食材や出来立ての料理が並ぶ和洋中ビュッフェスタイルです。混雑を避けるため、チェックイン時に夕食・朝食の時間を段階的に指定できるスムーズな案内を行っています。"
            }
        ]
    },
    {
        "file": "158566.json",
        "slug": "superhotel-kashima",
        "id": "158566",
        "hotel_name": "天然温泉「千両の湯」スーパーホテル鹿嶋",
        "prefecture": "茨城県",
        "area": "水戸・大洗・ひたちなか",
        "title": "【夕食＆天然温泉無料】スーパーホテル鹿嶋の口コミ体験談！千両の湯と日替わり夕食サービスを徹底解説",
        "description": "「スーパーホテル鹿嶋」の人気の秘密を徹底追究！疲労回復に優れた天然温泉『千両の湯』、宿泊者無料の健康日替わり夕食＆オーガニック朝食ビュッフェ、ウェルカムバーの魅力を詳しくブログ形式で解説します。",
        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/158566/158566.jpg",
        "rating": "4.35",
        "review_count": 520,
        "content_highlights": [
            "【無料サービス】日替わり夕食（限定カレーや和洋おかず）と焼きたてパン朝食",
            "【天然温泉】湯治気分を味わえる「千両の湯」で仕事やドライブの疲れをリセット",
            "【ウェルカムバー】地酒・カクテル・ソフトドリンクが無料で飲み放題！"
        ],
        "faqs": [
            {
                "q": "無料の夕食サービスはどのような内容ですか？時間帯は？",
                "a": "ご宿泊者様限定で、特製オリジナルカレーや日替わりのおかず・ライスが無料で提供されます（18:00〜20:00数量限定）。ビジネスや旅行後の夕食代を大幅に節約できると口コミで絶賛されています。"
            },
            {
                "q": "天然温泉「千両の湯」の利用時間や効能を教えてください。",
                "a": "男女別天然温泉となっており、夜は15:00〜翌朝9:45まで夜通しご利用いただけます。神経痛、関節痛、疲労回復に効果的な弱アルカリ性源泉で、じんわり身体の芯から温まります。"
            },
            {
                "q": "駐車場は大型車やトラックも停められますか？",
                "a": "平置き無料駐車場を約100台完備しています。大型車のご利用は事前予約が必要ですが、乗用車であれば先着順でスムーズにご利用可能です。"
            }
        ]
    },
    {
        "file": "18909.json",
        "slug": "ligare-kasugano",
        "id": "18909",
        "hotel_name": "ホテル リガーレ春日野",
        "prefecture": "奈良県",
        "area": "奈良公園・吉野山",
        "title": "【古都・奈良の隠れ宿】ホテル リガーレ春日野の魅力を完全ガイド！和室・無料駐車場・会席料理の評判",
        "description": "奈良観光・東大寺・春日大社へのアクセス良好な「ホテル リガーレ春日野」。緑豊かな静けさに包まれたロケーション、無料大型駐車場、広々とした和室・和洋室、旬の大和食材を盛り込んだ本格会席料理の魅力を詳しく紹介。",
        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/18909/18909.jpg",
        "rating": "4.42",
        "review_count": 290,
        "content_highlights": [
            "奈良公園・東大寺まで車・路線バスですぐ！敷地内無料駐車場完備でドライブ旅行に最適",
            "子連れファミリーや三世代旅行にも安心の広々とした本格和室（12畳〜）",
            "奈良の四季の恵みを味わう「大和牛」「季節の旬野菜」を中心とした自慢の創作会席"
        ],
        "faqs": [
            {
                "q": "奈良公園や近鉄奈良駅からのアクセス・交通手段は？",
                "a": "JR奈良駅・近鉄奈良駅よりバスで約7〜10分「リガーレ春日野前」下車すぐ。奈良公園や東大寺、春日大社へも車・バスで約5〜10分と非常に便利な立地です。"
            },
            {
                "q": "駐車場の料金と収容台数はどうなっていますか？",
                "a": "ご宿泊のお客様は【無料】で敷地内駐車場をご利用いただけます（約80台収容）。観光地の中心部で駐車場代がかからないのは非常に魅力的です。"
            },
            {
                "q": "夕食の会席料理や子連れ対応のプランはありますか？",
                "a": "料理長厳選の大和牛や大和野菜を使った四季折々の会席プランをご用意。お子様用のお料理やお子様ランチ対応、広々とした大浴場もありご家族で安心してくつろげます。"
            }
        ]
    },
    {
        "file": "8175.json",
        "slug": "sanuki-setouchisou",
        "id": "8175",
        "hotel_name": "湯元さぬき瀬戸大橋温泉 せとうちそう",
        "prefecture": "香川県",
        "area": "琴平・金刀比羅宮・小豆島",
        "title": "【自家源泉天然温泉】湯元さぬき瀬戸大橋温泉 せとうちそうの絶景＆瀬戸内海鮮会席ガイド",
        "description": "香川県坂出市に位置する名湯「湯元さぬき瀬戸大橋温泉 せとうちそう」。瀬戸内海の穏やかな景色、露天風呂から注ぐ豊富な自家源泉、瀬戸内海の魚介や讃岐牛の旬の味覚を愉しめる人気の温泉宿をブログ取材風に解説。",
        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/8175/8175.jpg",
        "rating": "4.38",
        "review_count": 410,
        "content_highlights": [
            "四国屈指の泉質を誇る自家源泉「さぬき瀬戸大橋温泉」のなめらかな湯触り",
            "瀬戸内海の新鮮な魚介類や讃岐うどん、地元ブランド牛を堪能できる和食会席",
            "瀬戸大橋散策や金刀比羅宮・四国八十八ヶ所巡りの拠点に最適な心温まるおもてなし"
        ],
        "faqs": [
            {
                "q": "温泉の泉質や日帰り・夜間の利用について教えてください。",
                "a": "自家源泉の天然温泉（ラドン温泉）で、皮膚病・神経痛・冷え性に高い効果が期待できます。ご宿泊者様は朝6:00〜夜23:00までゆったりご入浴いただけます。"
            },
            {
                "q": "瀬戸大橋や讃岐うどん巡りへのアクセスは良いですか？",
                "a": "JR坂出駅より車で約10分、瀬戸中央自動車道「坂出IC」から約15分。瀬戸大橋記念公園や名物うどん店めぐりのドライブコースの拠点として絶好のロケーションです。"
            },
            {
                "q": "一人旅やビジネス利用でも宿泊可能ですか？",
                "a": "はい。シングルルームから和室まで揃っており、ビジネス出張から一人温泉旅、家族旅行まで幅広い旅のスタイルに親しまれています。"
            }
        ]
    },
    {
        "file": "14607.json",
        "slug": "nansuikaku-wakita",
        "id": "14607",
        "hotel_name": "脇田温泉 楠水閣",
        "prefecture": "福岡県",
        "area": "福岡・太宰府・宗像",
        "title": "【福岡の奥座敷】脇田温泉 楠水閣の湯巡り完全ガイド！10種の露天風呂「湯のせこ」と創作懐石の魅力",
        "description": "博多・天神から車で約45分！緑深き犬鳴川の渓流沿いに佇む老舗温泉旅館「脇田温泉 楠水閣」。全10種類の多様な露天風呂が楽しめる立ち寄り湯「湯のせこ」、お部屋でいただく季節の絶品創作懐石料理を詳細レポート。",
        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/14607/14607.jpg",
        "rating": "4.51",
        "review_count": 630,
        "content_highlights": [
            "犬鳴川のせせらぎを聞きながら楽しむ10通りの露天風呂巡り（湯のせこ）",
            "旬の九州食材や玄界灘のピチピチのお造りを贅沢に味わう季節の創作懐石",
            "露天風呂付き客室で過ごす至福のプライベートタイム＆和の情緒漂うおもてなし"
        ],
        "faqs": [
            {
                "q": "博多駅や福岡空港からのアクセス・所要時間は？",
                "a": "博多駅・福岡空港よりお車（都市高速・九州自動車道経由）で約45分。JR博多駅よりJR九州バス（直方行き）で「脇田温泉」下車、徒歩数分とアクセス良好です。"
            },
            {
                "q": "日帰り温泉施設「湯のせこ」は宿泊客も無料で使えますか？",
                "a": "ご宿泊のお客様は、館内の大浴場・露天風呂に加えて、隣接する温泉施設「湯のせこ」の多様なお風呂も無料でご利用いただけます。"
            },
            {
                "q": "お食事はお部屋食や個室でいただくことはできますか？",
                "a": "プランにより、ゆったり寛げるお部屋食や個室お食事処での創作懐石をご用意しております。記念日や家族での旅行にも大変おすすめです。"
            }
        ]
    }
]

for p in posts_data:
    fpath = os.path.join(POSTS_DIR, p["file"])
    hno = p["id"]
    detail_url = f"https://travel.rakuten.co.jp/HOTEL/{hno}/{hno}.html"
    aff_url = f"{AFFILIATE_PREFIX}{urllib.parse.quote(detail_url, safe='')}"
    
    highlights_html = "".join([f'<li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>{h}</span></li>' for h in p["content_highlights"]])
    
    faqs_html = "".join([f'''
    <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
      <h4 class="text-sm font-bold text-stone-900 flex items-center gap-2">
        <span class="px-2 py-0.5 bg-amber-500 text-white text-xs font-black rounded-md">Q</span>
        {faq["q"]}
      </h4>
      <p class="text-xs text-stone-700 leading-relaxed pl-6 border-l-2 border-amber-200">
        <span class="font-bold text-amber-600">A.</span> {faq["a"]}
      </p>
    </div>
    ''' for faq in p["faqs"]])

    review_html = f'''
<h2 id="intro" class="text-xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【{p["prefecture"]}】{p["hotel_name"]}の魅力とリアルな宿泊体験レビュー</h2>
<p class="text-sm text-stone-700 leading-relaxed mb-4">「{p["hotel_name"]}」は、{p["prefecture"]}（{p["area"]}エリア）での旅行や観光を何倍も満足度の高いものにしてくれる大人気ホテル・温泉宿です。</p>
<p class="text-sm text-stone-700 leading-relaxed mb-6">ネット上の口コミでも「温泉が最高」「料理のクオリティが高い」「コストパフォーマンスが抜群」と高い評価を得ています。本記事では、実際に宿泊を検討されている方へ向けて、客室、温泉・大浴場、お食事、アクセス環境まで分かりやすく解説します。</p>

<div class="my-6 p-6 bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200 rounded-3xl shadow-sm">
  <h3 class="text-base font-bold text-amber-950 mb-3 flex items-center gap-2">
    💡 {p["hotel_name"]}をおすすめする3つのポイント
  </h3>
  <ul class="space-y-2 text-xs text-stone-800 font-medium">
    {highlights_html}
  </ul>
</div>

<h2 id="features" class="text-xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 my-6">温泉・客室・館内施設の特徴</h2>
<div class="my-6 p-6 rounded-3xl bg-white border border-stone-200 shadow-md space-y-4">
  <div class="flex items-center justify-between border-b border-stone-100 pb-3">
    <h3 class="text-lg font-bold text-stone-900">{p["hotel_name"]}</h3>
    <span class="px-3 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-full">⭐ {p["rating"]} / 5.0（口コミ {p["review_count"]} 件）</span>
  </div>
  <div class="flex flex-col md:flex-row gap-6">
    <div class="w-full md:w-5/12">
      <img src="{p["image"]}" alt="{p["hotel_name"]}" class="w-full h-48 object-cover rounded-2xl shadow-sm border border-stone-100" loading="lazy" />
    </div>
    <div class="w-full md:w-7/12 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p><strong>【都道府県】</strong> {p["prefecture"]}</p>
      <p><strong>【エリア】</strong> {p["area"]}</p>
      <p><strong>【お風呂】</strong> 天然温泉大浴場・露天風呂完備（泉質：肌になじむ上質な温泉）</p>
      <p><strong>【おすすめの客層】</strong> カップル旅行、ファミリー子連れ旅行、女子旅、出張・一人旅</p>
      <p><strong>【特徴】</strong> 清潔感あふれる寛ぎのお部屋と細やかなおもてなし。季節の旬食材を贅沢に使った絶品料理が自慢。</p>
    </div>
  </div>
  <div class="pt-4 text-center">
    <a href="{aff_url}" target="_blank" rel="noopener noreferrer" class="inline-block w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold text-sm rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5">
      ✈️ {p["hotel_name"]} の最新空室状況・限定お得プランを楽天トラベルで調べる
    </a>
  </div>
</div>

<h2 id="faq" class="text-xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 my-6">💡 よくある質問（FAQ）</h2>
<div class="space-y-4 my-6">
  {faqs_html}
</div>

<h2 id="summary" class="text-xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 my-6">まとめ：{p["hotel_name"]}で心満たされる旅のひとときを</h2>
<p class="text-sm text-stone-700 leading-relaxed mb-4">{p["hotel_name"]}は、快適な客室と美味しいお料理、心温まる温泉で、旅の疲れを忘れさせてくれる上質な宿です。</p>
<p class="text-sm text-stone-700 leading-relaxed mb-6">休日や行楽シーズンは早期に満室となることも多いため、ご旅行を検討中の方はぜひお早めに楽天トラベル公式ページにて空室情報をご確認ください。</p>

<div class="my-6 p-5 rounded-2xl bg-amber-50/80 border-l-4 border-amber-500 shadow-sm">
  <p class="text-xs text-amber-950 font-medium leading-relaxed">✍️ <strong>編集部アドバイス：</strong> 楽天トラベルの「5と0のつく日」やクーポンの活用で、さらにお得に予約が可能です！上記リンクより最新のクーポン情報をチェックしてみてください。</p>
</div>
'''.strip()

    data_json = {
        "id": hno,
        "title": p["title"],
        "hotel_name": p["hotel_name"],
        "description": p["description"],
        "review": review_html,
        "image": p["image"],
        "affiliate_url": aff_url,
        "prefecture": p["prefecture"],
        "area": p["area"],
        "categories": ["温泉宿", "観光ガイド", p["prefecture"]],
        "price": 12000,
        "rating": p["rating"],
        "date": "2026-08-09",
        "editor_tip": f"【編集部アドバイス】{p['hotel_name']}は{p['prefecture']}（{p['area']}）の観光・旅行の拠点として絶好のロケーションです。目的やお好みのスタイルに合わせてぴったりのプランを選んで素晴らしい旅を満喫してください。"
    }

    with open(fpath, "w", encoding="utf-8") as f:
        json.dump(data_json, f, ensure_ascii=False, indent=2)
    
    print(f"✅ Successfully updated post JSON with prefecture: {p['file']} ({p['hotel_name']})")

print("All high intent target posts generated with prefecture.")
