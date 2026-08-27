import json, glob, os, re

# Specific high-value query clusters to boost in post bodies
# Let's target the exact articles that need dedicated, high-impact content sections and FAQs

posts_dir = "src/data/posts"

# 1. Look for posts related to Gero onsen (下呂温泉)
gero_files = glob.glob(f"{posts_dir}/*gero*.json") + glob.glob(f"{posts_dir}/*下呂*.json") + glob.glob(f"{posts_dir}/*107682*.json")
print(f"Found Gero files: {len(gero_files)}")

# 2. Look for posts related to Silver Week
sw_files = glob.glob(f"{posts_dir}/*silver*.json") + glob.glob(f"{posts_dir}/*autumn*.json")
print(f"Found SW files: {len(sw_files)}")

# 3. Look for Kiroro / Yu Kiroro
kiroro_files = glob.glob(f"{posts_dir}/*kiroro*.json")
print(f"Found Kiroro files: {len(kiroro_files)}")

# 4. Look for Zao / Matsushima / Akiu / Naruko / Hirosaki / Ibusuki / Kirishima / Shimanami / etc.
special_targets = [
    ("洞窟", "cave-onsen-special-guide.json"),
    ("ラルク", "larc-link-location-travel-guide.json"),
    ("東北新幹線", "tohoku-shinkansen-silver-week-guide.json"),
    ("三翠園", "kochi-sansuien-castle-guide.json"),
    ("センティアホテル内藤", "centia-hotel-naito-kofu-guide.json"),
    ("ふる川", "otaru-furukawa-canal-guide.json"),
    ("せとうちそう", "setouchiso-sanuki-guide.json"),
    ("鹿嶋", "kashima-superhotel-gourmet-guide.json")
]

# Let's inspect if these dedicated articles exist or need content expansion
for kw, fname in special_targets:
    target_path = os.path.join(posts_dir, fname)
    if os.path.exists(target_path):
        print(f"Exists: {fname}")
    else:
        print(f"Not found: {fname}")

