import json,re,glob,os
info=json.load(open('scratch/pages_info.json'))
top=json.load(open('scratch/redir_toplevel.json'))
EXCL={'/miyagi-matsushima-shiogama-shrine-stay/','/furusato-tax-three-great-fire-festivals-passion-stay/','/furusato-tax-three-great-pottery-towns-gourmet-stay/','/furusato-tax-three-great-festivals-heritage-stay/'}
m={k:v for k,v in top.items() if k not in EXCL}
seo=json.load(open('src/data/post-seo.json'))['canonical']
for a,b in seo.items():
    u,c=f'/posts/{a}/',f'/posts/{b}/'
    if c in info and u not in m: m[u]=c
def final(u,seen=()):
    return final(m[u],seen+(u,)) if u in m and u not in seen else u
m={k:final(v) for k,v in m.items()}
m={k:v for k,v in m.items() if k!=v and v not in m}
skipped=[k for k,v in m.items() if info[k]['imp']>info[v]['imp']]
m={k:v for k,v in m.items() if k not in skipped}
print('skipped (loser stronger):',len(skipped))
lines=['','# 8. 重複記事の統合（2026-11-13 / GSC直近3ヶ月の実績が高い方へ集約）']
for k,v in sorted(m.items()):
    lines+= [f'{k.rstrip("/")} {v} 301', f'{k} {v} 301']
r=open('public/_redirects').read()
r=r.split('\n# 8. 重複記事の統合')[0].rstrip('\n')
# must be placed BEFORE generic trailing-slash rules? first match wins -> insert at top after header
head,rest=r.split('\n',1)
open('public/_redirects','w').write(head+'\n'+'\n'.join(lines[1:])+'\n\n'+rest+'\n')
json.dump(m,open('scratch/final_redirects.json','w'),ensure_ascii=False,indent=1)
# sitemap cleanup
gone={'https://croud-travel.pages.dev'+k for k in m}|{'https://croud-travel.pages.dev'+k.rstrip('/') for k in m}
removed=0
for f in glob.glob('public/sitemap*.xml'):
    s=open(f,encoding='utf-8').read()
    def rep(mm):
        global removed
        loc=re.search(r'<loc>(.*?)</loc>',mm.group(0)).group(1)
        if loc in gone: removed+=1; return ''
        return mm.group(0)
    s2=re.sub(r'\s*<url>.*?</url>',rep,s,flags=re.S)
    if s2!=s: open(f,'w',encoding='utf-8').write(s2)
print('redirects',len(m),'sitemap entries removed',removed,'total lines',sum(1 for l in open('public/_redirects') if l.strip() and not l.startswith('#')))
