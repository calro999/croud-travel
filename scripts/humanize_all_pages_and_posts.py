import glob
import re
import json

def clean_editorial_text(text):
    if not text:
        return text
    
    # 1. Monthly brackets: 【11・12月 八幡平温泉郷】 or 【11・12月天童温泉】
    def replace_month(m):
        months = m.group(1)
        area = m.group(2).strip()
        return f"{area}で過ごす冬の旅（{months}）！"
    text = re.sub(r'【(\d+・\d+月|\d+月)\s*([^】]+)】', replace_month, text)

    # 2. Furusato Tax brackets: 【阿寒湖温泉×ふるさと納税】
    text = re.sub(r'【([^】]+)×ふるさと納税】', r'\1をふるさと納税でお得に旅する！', text)

    # 3. Year / Latest tag: 【2026年最新】 or 【最新版】
    text = re.sub(r'【2026年最新[^】]*】', '', text)
    text = re.sub(r'【最新版】', '', text)

    # 4. Leading bracket: 【大人の隠れ家】 -> 大人の隠れ家：
    text = re.sub(r'^【([^】]+)】\s*', r'\1：', text)

    # 5. Remaining brackets: 【...】 -> 「...」
    text = re.sub(r'【([^】]+)】', r'「\1」', text)

    # 6. Suffixes
    text = text.replace('完全攻略ガイド', '極上旅ガイド')
    text = text.replace('完全ガイド', '厳選ガイド')
    text = text.replace('徹底解説', '深掘り特集')
    text = text.replace('失敗しない宿選び', '編集部厳選の宿選び')

    # 7. Cleanup punctuations and whitespaces
    text = re.sub(r'\s+', ' ', text).strip()
    text = text.replace('！：', '！').replace('：！', '！')
    text = text.replace('！！', '！')
    return text

print("--- Step 1: Processing src/app/**/page.tsx ---")
pages = glob.glob('src/app/**/page.tsx', recursive=True)
updated_pages = 0

for p in pages:
    if p == 'src/app/page.tsx':
        continue
    with open(p, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content
    # Replace in metadata title
    def repl_meta_title(m):
        quote = m.group(1)
        val = m.group(2)
        return f'title: {quote}{clean_editorial_text(val)}{quote}'
    new_content = re.sub(r'title:\s*([\'"])(.*?)\1', repl_meta_title, new_content)

    # Replace in og:title
    def repl_og_title(m):
        prefix = m.group(1)
        quote = m.group(2)
        val = m.group(3)
        return f'{prefix}{quote}{clean_editorial_text(val)}{quote}'
    new_content = re.sub(r'(\b(?:headline|title):\s*)([\'"])(.*?)\2', repl_og_title, new_content)

    # Replace in H1 tags
    def repl_h1(m):
        tag_open = m.group(1)
        h1_inner = m.group(2)
        tag_close = m.group(3)
        # remove 【】 inside h1
        cleaned_inner = clean_editorial_text(h1_inner)
        return f'{tag_open}{cleaned_inner}{tag_close}'
    new_content = re.sub(r'(<h1[^>]*>)(.*?)(</h1>)', repl_h1, new_content, flags=re.DOTALL)

    if new_content != content:
        with open(p, 'w', encoding='utf-8') as f:
            f.write(new_content)
        updated_pages += 1

print(f"Updated {updated_pages} app pages.")

print("--- Step 2: Processing src/data/posts/*.json ---")
post_files = glob.glob('src/data/posts/*.json')
updated_posts = 0

for pf in post_files:
    with open(pf, 'r', encoding='utf-8') as f:
        data = json.load(f)
    changed = False
    if 'title' in data and data['title']:
        clean_t = clean_editorial_text(data['title'])
        if clean_t != data['title']:
            data['title'] = clean_t
            changed = True
    if 'description' in data and data['description']:
        clean_d = clean_editorial_text(data['description'])
        if clean_d != data['description']:
            data['description'] = clean_d
            changed = True
    if changed:
        with open(pf, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        updated_posts += 1

print(f"Updated {updated_posts} posts in src/data/posts/.")
