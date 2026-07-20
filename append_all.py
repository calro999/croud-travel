import glob
import os

target = '関東地方_比較記事.md'

chunks = [
    'temp_chunk2.txt',
    'temp_chunk3.txt',
    'temp_chunk4.txt',
    'temp_chunk5.txt',
    'temp_chunk6.txt',
    'temp_chunk7.txt',
    'temp_chunk8.txt'
]

for chunk in chunks:
    if os.path.exists(chunk):
        with open(chunk, 'r', encoding='utf-8') as f_in:
            content = f_in.read()
        with open(target, 'a', encoding='utf-8') as f_out:
            f_out.write('\n\n' + content)
            
print("All chunks appended. Final length:", len(open(target, 'r', encoding='utf-8').read()))
