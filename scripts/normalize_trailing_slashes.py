import os
import re

app_routes = set()
for d in os.listdir("src/app"):
    if os.path.isdir(os.path.join("src/app", d)) and not d.startswith("_") and not d.startswith("."):
        app_routes.add(d)

print(f"Loaded {len(app_routes)} known app routes")

files_modified = 0
total_replacements = 0

# Extensions to treat as static assets
STATIC_EXTS = ('.png', '.jpg', '.jpeg', '.svg', '.webp', '.ico', '.txt', '.xml', '.json', '.pdf')

def fix_content(content):
    modified = False
    
    # 1. href="/slug/" or href="/slug/" (where not static file, not ending in slash, no ?, no #)
    def href_repl(m):
        path = m.group(1)
        # Check if already has extension
        last_seg = path.split('/')[-1]
        if any(last_seg.endswith(ext) for ext in STATIC_EXTS):
            return m.group(0)
        if path == '/':
            return m.group(0)
        return f'href="{path}/"'

    new_content, count = re.subn(r'href=[\"\'](/[^\"\'?#\s<>]+)(?<!/)[\"\']', href_repl, content)
    if count > 0:
        modified = True
        content = new_content

    # 2. Template literals: href={`/posts/${...}`} -> href={`/posts/${...}/`}
    for prefix in ['posts', 'prefectures', 'spots']:
        # Match href={`/prefix/${var}`} without trailing slash before closing `
        pattern = re.compile(rf'href=\{{\`(/({prefix})/\$\{{[^`\}}\s]+\}})(?<!/)\`\}}')
        new_content, count = pattern.subn(r'href={`\1/`}', content)
        if count > 0:
            modified = True
            content = new_content

    # 3. Full URLs in openGraph / metadata / JSON-LD
    # e.g. url: 'https://croud-travel.pages.dev/slug/' -> 'https://croud-travel.pages.dev/slug/'
    def url_repl(m):
        full_url = m.group(1)
        last_seg = full_url.split('/')[-1]
        if any(last_seg.endswith(ext) for ext in STATIC_EXTS):
            return m.group(0)
        return f'{full_url}/'

    # match https://croud-travel.pages.dev/something without trailing slash
    # in metadata or json
    p_og = re.compile(r'(https://croud-travel\.pages\.dev/[a-zA-Z0-9_\-]+)(?<!/)(?=[\"\'\`])')
    new_content, count = p_og.subn(url_repl, content)
    if count > 0:
        modified = True
        content = new_content

    # 4. Clean up any accidental double slashes created like /prefectures// -> /prefectures/
    # (except https://)
    new_content = re.sub(r'([^:])//+', r'\1/', content)
    if new_content != content:
        modified = True
        content = new_content

    return content, modified

for root, dirs, files in os.walk("src"):
    for f in files:
        if f.endswith((".tsx", ".ts", ".jsx", ".js")):
            p = os.path.join(root, f)
            with open(p, "r", encoding="utf-8") as fp:
                orig = fp.read()
            
            new_c, is_mod = fix_content(orig)
            if is_mod and new_c != orig:
                with open(p, "w", encoding="utf-8") as fp:
                    fp.write(new_c)
                files_modified += 1

print(f"Successfully normalized trailing slashes in {files_modified} files across src/")
