with open('src/app/posts/[id]/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace FAQ parsing logic to extract actual <h3>Q... and <p> answer from post.review if present
old_faq_block = """  const faqList = post.is_special_feature
    ? [
        {
          q: `${post.prefecture}（${post.area}）で特に口コミ評価が高いおすすめ温泉宿・ホテルはどこですか？`,
          a: post.featured_hotels && post.featured_hotels.length >= 3
            ? `${post.prefecture}・${post.area}エリアでは、「${post.featured_hotels.slice(0, 3).map(h => `${h.name}（評価★${h.rating}）`).join("」「")}」などが楽天トラベルでも特に高い評価を獲得しておりおすすめです。記事冒頭の比較一覧表から各宿の最安プランをご確認いただけます。`
            : `${post.prefecture}・${post.area}エリアには、源泉かけ流し露天風呂や地元旬食材の会席料理が自慢の名宿が揃っています。本記事の厳選リストから目的に合った宿をお選びいただけます。`
        },
        {
          q: `${post.prefecture}のホテル・温泉旅館を最もお得に予約する方法はありますか？`,
          a: `楽天トラベルの「5と0のつく日（最大20%OFFクーポン）」や「宿クーポン」、さらに「楽天ふるさと納税トラベルクーポン（あとから割引対応）」を組み合わせることで、実質負担を大幅に抑えて宿泊予約が可能です。`
        },
        {
          q: `${post.prefecture}（${post.area}）旅行のベストシーズンやおすすめの服装・注意点は？`,
          a: `10月〜11月の紅葉・味覚シーズンや、12月〜2月の冬温泉・雪見露天・カニや冬味覚シーズンが特に人気です。週末や連休は早期に満室となるため、早めの空室確認と予約確保をおすすめします。`
        }
      ]"""

new_faq_block = """  // 本文HTMLから実在するFAQ（Q1〜Q5など）を高度に正規表現抽出
  const extractedFaqs: { q: string; a: string }[] = [];
  if (post.review) {
    const faqRegex = /<h3>(Q\d*[\.:：\s][^<]+)<\/h3>\s*<p>([\s\S]*?)<\/p>/g;
    let match;
    while ((match = faqRegex.exec(post.review)) !== null) {
      const q = match[1].replace(/<[^>]+>/g, '').trim();
      const a = match[2].replace(/<[^>]+>/g, '').trim();
      if (q && a) {
        extractedFaqs.push({ q, a });
      }
    }
  }

  const faqList = extractedFaqs.length > 0
    ? extractedFaqs
    : post.is_special_feature
    ? [
        {
          q: `${post.prefecture}（${post.area}）で特に口コミ評価が高いおすすめ温泉宿・ホテルはどこですか？`,
          a: post.featured_hotels && post.featured_hotels.length >= 3
            ? `${post.prefecture}・${post.area}エリアでは、「${post.featured_hotels.slice(0, 3).map(h => `${h.name}（評価★${h.rating}）`).join("」「")}」などが楽天トラベルでも特に高い評価を獲得しておりおすすめです。記事冒頭の比較一覧表から各宿の最安プランをご確認いただけます。`
            : `${post.prefecture}・${post.area}エリアには、源泉かけ流し露天風呂や地元旬食材の会席料理が自慢の名宿が揃っています。本記事の厳選リストから目的に合った宿をお選びいただけます。`
        },
        {
          q: `${post.prefecture}のホテル・温泉旅館を最もお得に予約する方法はありますか？`,
          a: `楽天トラベルの「5と0のつく日（最大20%OFFクーポン）」や「宿クーポン」、さらに「楽天ふるさと納税トラベルクーポン（あとから割引対応）」を組み合わせることで、実質負担を大幅に抑えて宿泊予約が可能です。`
        },
        {
          q: `${post.prefecture}（${post.area}）旅行のベストシーズンやおすすめの服装・注意点は？`,
          a: `10月〜11月の紅葉・味覚シーズンや、12月〜2月の冬温泉・雪見露天・カニや冬味覚シーズンが特に人気です。週末や連休は早期に満室となるため、早めの空室確認と予約確保をおすすめします。`
        }
      ]"""

if old_faq_block in text:
    text = text.replace(old_faq_block, new_faq_block)
    with open('src/app/posts/[id]/page.tsx', 'w', encoding='utf-8') as f:
        f.write(text)
    print('Successfully upgraded FAQ Schema extraction in single post page!')
else:
    print('Target old_faq_block not found in src/app/posts/[id]/page.tsx')
