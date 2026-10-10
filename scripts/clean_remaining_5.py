import glob
import re

ts_files = glob.glob("src/app/**/page.tsx", recursive=True)
count = 0
for f in ts_files:
    c = open(f, encoding="utf-8", errors="ignore").read()
    if any(w in c for w in ["クチコミの詳細はこちら", "つづきはこちら", "他の画像やクチコミ"]):
        print("Cleaning remaining file:", f)
        c = re.sub(r'他の画像やクチコミの詳細はこちら[^\n"\'<]*', '', c)
        c = re.sub(r'クチコミの詳細はこちら[^\n"\'<]*', '', c)
        c = re.sub(r'つづきはこちら[^\n"\'<]*', '', c)
        with open(f, "w", encoding="utf-8") as out:
            out.write(c)
        count += 1
print(f"Cleaned {count} files.")
