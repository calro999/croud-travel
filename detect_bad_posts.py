import os
import json
import re

posts_dir = "/Users/calro/Downloads/croud-travel/src/data/posts"
files = [f for f in os.listdir(posts_dir) if f.endswith(".json")]

print(f"Total post files: {len(files)}")

bad_posts = []

for file in files:
    path = os.path.join(posts_dir, file)
    with open(path, "r", encoding="utf-8") as f:
        try:
            data = json.load(f)
        except Exception as e:
            print(f"JSON load error: {file} - {e}")
            bad_posts.append((file, "json_error", str(e)))
            continue
        
        title = data.get("title", "")
        description = data.get("description", "")
        review = data.get("review", "")
        
        reasons = []
        
        # 1. Check for raw AI reasoning/JSON format in description or review
        if isinstance(description, str) and ("\"role\":" in description or "\"reasoning\":" in description or "assistant" in description):
            reasons.append("ai_raw_json_in_description")
        if isinstance(review, str) and ("\"role\":" in review or "\"reasoning\":" in review or "assistant" in review):
            reasons.append("ai_raw_json_in_review")
            
        # 2. Check for English dominance (more than 70% alphabet/ascii)
        for field_name, val in [("description", description), ("review", review)]:
            if not isinstance(val, str) or not val:
                continue
            # Remove HTML tags for testing
            clean_val = re.sub(r'<[^>]+>', '', val)
            if not clean_val:
                continue
            alpha_chars = len(re.findall(r'[a-zA-Z]', clean_val))
            total_chars = len(clean_val)
            ratio = alpha_chars / total_chars if total_chars > 0 else 0
            if ratio > 0.6:
                reasons.append(f"high_english_ratio_in_{field_name}({ratio:.2f})")
                
        # 3. Check for mojibake (e.g. \u00e3\u0081\u009d etc. represented as odd character patterns or garbled text)
        # Often garbled text in UTF-8 looks like "ã\u0081ã\u0081"
        for field_name, val in [("title", title), ("description", description), ("review", review)]:
            if not isinstance(val, str) or not val:
                continue
            # Common mojibake patterns from ISO-8859-1 to UTF-8
            if any(p in val for p in ["å\u009b", "ã\u0081", "ã\u0082", "ã\u0083", "æ\u009b", "é\u0081"]):
                reasons.append(f"mojibake_in_{field_name}")
                
        if reasons:
            bad_posts.append((file, reasons, title))

print("\n--- Detected Bad Posts ---")
for file, reasons, title in bad_posts:
    print(f"File: {file}")
    print(f"  Title: {title}")
    print(f"  Reasons: {reasons}")
    print("-" * 40)
