import json
import os

faq_dir = 'src/data/faqs'
for fname in os.listdir(faq_dir):
    if fname.endswith('.json'):
        fpath = os.path.join(faq_dir, fname)
        with open(fpath, 'r', encoding='utf-8') as f:
            content = f.read()
        if "有名なわもの" in content:
            content = content.replace("有名なわもの", "有名なもの")
            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(content)

print("Typo fix completed!")
