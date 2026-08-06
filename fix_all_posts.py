import os
import json
import re

POSTS_DIR = 'src/data/posts'
CORRECT_AFFILIATE_ID = '54d2a438.4bc4abc2.54d2a439.aa1be583'

def fix_post(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    changed = False

    # 1. affiliate_url の補正
    if data.get('affiliate_url'):
        old_url = data['affiliate_url']
        # hb.afl.rakuten.co.jp/hgc/XXXX/ の XXXX 部分を CORRECT_AFFILIATE_ID に置換
        new_url = re.sub(r'hb\.afl\.rakuten\.co\.jp/hgc/[^/]+/', f'hb.afl.rakuten.co.jp/hgc/{CORRECT_AFFILIATE_ID}/', old_url)
        if new_url != old_url:
            data['affiliate_url'] = new_url
            changed = True

    # 2. review 内の楽天アフィリエイトリンクの補正
    if data.get('review'):
        old_review = data['review']
        new_review = re.sub(r'hb\.afl\.rakuten\.co\.jp/hgc/[^/]+/', f'hb.afl.rakuten.co.jp/hgc/{CORRECT_AFFILIATE_ID}/', old_review)
        if new_review != old_review:
            data['review'] = new_review
            changed = True

    # 3. 画像URLの補正 (壊れたダミー画像や相対パス等のチェック)
    if not data.get('image') and data.get('other_images') and len(data['other_images']) > 0:
        data['image'] = data['other_images'][0]
        changed = True

    if changed:
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        return True
    return False

def main():
    files = [f for f in os.listdir(POSTS_DIR) if f.endswith('.json')]
    updated_count = 0
    for f in files:
        path = os.path.join(POSTS_DIR, f)
        if fix_post(path):
            updated_count += 1
    print(f'Done! Checked {len(files)} posts, updated {updated_count} posts.')

if __name__ == '__main__':
    main()
