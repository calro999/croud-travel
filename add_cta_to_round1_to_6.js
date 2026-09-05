const fs = require('fs');
const path = require('path');

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const furusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F')}`;

const targetDirs = [
  'furusato-tax-anniversary-luxury-suite-villa-stay',
  'furusato-tax-bihada-medicinal-springs-retreat-stay',
  'furusato-tax-castle-town-heritage-onsen-stay',
  'furusato-tax-cherry-blossom-spring-hanami-onsen-stay',
  'furusato-tax-golf-resort-hotspring-stay',
  'furusato-tax-infinity-onsen-sky-ocean-view-stay',
  'furusato-tax-ise-kumano-sacred-power-spot-stay',
  'furusato-tax-kominka-heritage-townhouse-auberge-stay',
  'furusato-tax-local-gourmet-inn-stay',
  'furusato-tax-luxury-glamping-bbq-dome-stay',
  'furusato-tax-luxury-hotspring-ryokan-stay',
  'furusato-tax-pet-sauna-private-hotspring-stay',
  'furusato-tax-private-villa-hanare-hideaway-stay',
  'furusato-tax-remote-island-luxury-resort-stay',
  'furusato-tax-scenic-train-trolley-onsen-stay',
  'furusato-tax-secret-hotspring-lamp-retreat-stay',
  'furusato-tax-shinkansen-station-walk-hotspring-stay',
  'furusato-tax-ski-snowboard-slope-resort-stay',
  'furusato-tax-solo-retreat-private-onsen-stay',
  'furusato-tax-three-generation-family-luxury-stay',
  'furusato-tax-travel-after-booking-discount-guide',
  'furusato-tax-welcome-baby-family-kids-stay',
  'furusato-tax-winery-craft-beer-auberge-stay',
  'furusato-tax-winter-crab-gourmet-luxury-stay'
];

for (const d of targetDirs) {
  const p = path.join(__dirname, 'src/app', d, 'page.tsx');
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');

    // 1. ヘッダー下にCTAボタンを追加
    const headerTarget = '<span>✓ 予約済みでも「あとから割引」対応</span>\n          </div>';
    const headerReplacement = `<span>✓ 予約済みでも「あとから割引」対応</span>
          </div>
          <div className="mt-8">
            <a
              href="${furusatoAffUrl}"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-black px-7 py-3.5 rounded-2xl shadow-xl hover:opacity-95 transition transform hover:-translate-y-0.5 text-sm md:text-base border border-amber-400/30"
            >
              <span>🎟️ 楽天ふるさと納税 宿泊クーポンを獲得する</span>
              <span className="text-xs bg-black/20 px-2 py-0.5 rounded">公式</span>
            </a>
          </div>`;

    if (content.includes(headerTarget) && !content.includes(furusatoAffUrl)) {
      content = content.replace(headerTarget, headerReplacement);
    }

    // 2. ページ末尾の</section>\n      </div>\n    </main> の前にCTAセクションを正しく挿入
    const bottomTarget = '        </section>\n      </div>\n    </main>';
    const bottomReplacement = `        </section>

        {/* クーポン獲得CTA */}
        <section className="bg-gradient-to-br from-amber-500/20 via-stone-900 to-stone-900 border border-amber-500/30 rounded-3xl p-8 text-center space-y-6 shadow-2xl text-white">
          <span className="text-3xl block">🎫</span>
          <h2 className="text-xl md:text-3xl font-black text-white font-serif">
            楽天トラベルふるさと納税クーポンで、一生の思い出に残るプレミアムステイへ
          </h2>
          <p className="text-stone-300 text-xs md:text-base max-w-2xl mx-auto leading-relaxed">
            返礼品クーポンは寄付手続き完了後、数分で楽天トラベルのアカウントに即時付与されます。今年の寄付上限枠を賢く使って、贅沢な露天風呂付き客室や老舗宿の美食を実質2,000円で手に入れましょう。
          </p>
          <div>
            <a
              href="${furusatoAffUrl}"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-black px-8 py-4 rounded-2xl shadow-xl hover:opacity-95 transition transform hover:-translate-y-0.5 text-base border border-amber-400/40"
            >
              <span>🎟️ 楽天ふるさと納税 宿泊クーポンを獲得する</span>
            </a>
          </div>
        </section>
      </div>
    </main>`;

    if (content.includes(bottomTarget)) {
      content = content.replace(bottomTarget, bottomReplacement);
    }

    fs.writeFileSync(p, content, 'utf8');
    console.log(`Updated CTA in: ${d}`);
  }
}

console.log('All 24 pages updated successfully!');
