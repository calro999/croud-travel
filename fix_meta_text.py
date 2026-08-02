import os
import json
import re

DIR = 'src/data/posts'

replacements = [
    (r'楽天トラベルAPIから厳選した最新の料金・画像とともに', r'独自の基準で厳選した最新の旅行情報とともに'),
    (r'楽天トラベルAPIから厳選した', r'旅行のプロが厳選した'),
    (r'楽天トラベルAPI厳選！', r'編集部厳選！'),
    (r'最新のAPIデータに基づく', r'最新の口コミ評価に基づく'),
    (r'楽天トラベルAPIの最新データに基づく', r'最新の口コミ評価に基づく'),
    (r'楽天トラベルAPIの最新データから、', r'最新の旅行トレンドデータから、'),
    (r'楽天トラベルAPI', r'楽天トラベル'),
    (r'APIデータ', r'旅行データ')
]

for filename in os.listdir(DIR):
    if not filename.endswith('.json'):
        continue
    filepath = os.path.join(DIR, filename)
    
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    changed = False
    
    if 'description' in data and data['description']:
        orig = data['description']
        for old, new in replacements:
            data['description'] = re.sub(old, new, data['description'])
        if orig != data['description']:
            changed = True
            
    if 'review' in data and data['review']:
        orig = data['review']
        for old, new in replacements:
            data['review'] = re.sub(old, new, data['review'])
        if orig != data['review']:
            changed = True
            
    if changed:
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print(f'Fixed {filename}')

