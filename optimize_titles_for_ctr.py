import os, json, glob, re

posts_dir = 'src/data/posts'
files = glob.glob(os.path.join(posts_dir, '*.json'))
print(f'Optimizing titles and descriptions for max CTR across {len(files)} articles...')

updated_count = 0

for fpath in files:
    with open(fpath, 'r', encoding='utf-8') as fp:
        try:
            data = json.load(fp)
        except Exception as e:
            continue

    modified = False
    title = data.get('title', '')
    hname = data.get('hotel_name', '')
    pref = data.get('prefecture', '全国')
    area = data.get('area', '')
    is_special = data.get('is_special_feature', False)
    
    orig_title = title
    
    # Clean prefix
    cleaned_t = re.sub(r'【2026(年)?(最新)?】\s*', '', title).strip()
    cleaned_t = re.sub(r'【[^】]+特集】\s*', '', cleaned_t).strip()
    cleaned_t = cleaned_t.replace('の温泉・客室口コミ＆宿泊予約', 'の本音口コミ＆リアル宿泊ガイド')
    cleaned_t = cleaned_t.replace('の口コミ評判＆おすすめ宿泊ガイド', 'の宿泊記＆口コミ評判レビュー')
    cleaned_t = cleaned_t.replace('！比較＆予約ガイド', '！おすすめ宿泊比較')
    
    # Special features vs Regular hotels
    if is_special:
        # e.g. "秋の下呂温泉 絶品飛騨牛＆名湯旅館10選"
        # Make title punchy and high-CTR
        if not any(k in cleaned_t for k in ['厳選', 'おすすめ', '徹底比較', '宿泊記', 'ガイド']):
            cleaned_t = f'{cleaned_t}｜失敗しないおすすめ宿ガイド'
        new_title = cleaned_t
    else:
        # Regular hotel: e.g. "ホテルリソル横浜桜木町"
        clean_hotel = hname.replace('【2026最新】', '').replace('【2026年最新】', '').strip()
        # Remove long sub-captions from hotel name if any
        if '｜' in clean_hotel:
            clean_hotel = clean_hotel.split('｜')[0].strip()
        if '【' in clean_hotel:
            clean_hotel = re.sub(r'【[^】]+】', '', clean_hotel).strip()
            
        if len(clean_hotel) > 0 and len(clean_hotel) < 30:
            new_title = f'{clean_hotel}のリアル宿泊記！温泉・客室・朝食バイキングの本音口コミ評判｜{pref}'
        else:
            new_title = f'{cleaned_t}｜{pref}'

    # Ensure title is not too long and clean
    new_title = re.sub(r'\s+', ' ', new_title).strip()
    # Remove redundant suffix if present
    new_title = new_title.replace(' ｜ 日本全国・旅宿クラウド', '')
    
    if new_title != orig_title:
        data['title'] = new_title
        modified = True

    if modified:
        with open(fpath, 'w', encoding='utf-8') as fp:
            json.dump(data, fp, ensure_ascii=False, indent=2)
        updated_count += 1

print(f'Successfully optimized titles for {updated_count} articles for high CTR!')
