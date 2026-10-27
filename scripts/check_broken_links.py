import os
import re
import json

valid_routes = set()
valid_routes.add('/')
valid_routes.add('/about/')
valid_routes.add('/prefectures/')
valid_routes.add('/features/')
valid_routes.add('/campaigns/')
valid_routes.add('/spots/')
valid_routes.add('/sitemap/')
valid_routes.add('/posts/')

# App routes
for d in os.listdir('src/app'):
    if os.path.isdir(os.path.join('src/app', d)) and not d.startswith('_') and not d.startswith('.'):
        valid_routes.add(f'/{d}/')

# Posts routes
for f in os.listdir('src/data/posts'):
    if f.endswith('.json'):
        post_id = f.replace('.json', '')
        valid_routes.add(f'/posts/{post_id}/')

# Spots routes
try:
    with open('src/data/spotsData.ts', 'r', encoding='utf-8') as fp:
        t = fp.read()
        spots = re.findall(r'slug:\s*["\']([^"\']+)["\']', t)
        for s in spots:
            valid_routes.add(f'/spots/{s}/')
except Exception as e:
    print('spotsData error:', e)

# Prefectures routes
try:
    with open('src/data/prefecturesData.ts', 'r', encoding='utf-8') as fp:
        t = fp.read()
        slugs = re.findall(r'slug:\s*["\']([^"\']+)["\']', t)
        for s in slugs:
            valid_routes.add(f'/prefectures/{s}/')
except Exception as e:
    print('prefecturesData error:', e)

print(f'Total valid destination routes: {len(valid_routes)}')

dead_links = []
href_pat = re.compile(r'href=[\"\'](/[^\"\'?#\s<>]+)[\"\']')

for root, dirs, files in os.walk('src'):
    for f in files:
        if f.endswith(('.tsx', '.ts', '.jsx', '.js')):
            p = os.path.join(root, f)
            with open(p, 'r', encoding='utf-8') as fp:
                content = fp.read()
                matches = href_pat.findall(content)
                for m in matches:
                    norm = m if m.endswith('/') else m + '/'
                    if any(norm.endswith(ext) for ext in ('.png/', '.jpg/', '.svg/', '.xml/', '.txt/', '.ico/')):
                        continue
                    if norm not in valid_routes and not norm.startswith('/posts/note-'):
                        dead_links.append((p, m, norm))

print(f'Total dead link occurrences: {len(dead_links)}')
unique_dead = set(d[2] for d in dead_links)
print(f'Unique dead target paths: {len(unique_dead)}')
for d in sorted(list(unique_dead))[:25]:
    print('  Dead target:', d)
