import os,re,json,csv,glob,html,collections
OUT='out'
# GSC
gsc=collections.defaultdict(lambda:[0,0])
for r in csv.DictReader(open(glob.glob('1113-seatch*/ページ.csv')[0],encoding='utf-8')):
    p=re.sub(r'^https://croud-travel.pages.dev','',r['上位のページ']).rstrip('/')+'/'
    gsc[p][0]+=int(r['クリック数']);gsc[p][1]+=int(r['表示回数'])
pages={}
for d in os.listdir(OUT):
    f=f'{OUT}/{d}/index.html'
    if os.path.isfile(f): pages['/'+d+'/']=f
for d in os.listdir(f'{OUT}/posts'):
    f=f'{OUT}/posts/{d}/index.html'
    if os.path.isfile(f): pages[f'/posts/{d}/']=f
info={}
for u,f in pages.items():
    t=open(f,encoding='utf-8',errors='ignore').read()
    m=re.search(r'<title>(.*?)</title>',t,re.S);title=html.unescape(m.group(1)) if m else ''
    c=re.search(r'rel="canonical" href="https://croud-travel.pages.dev([^"]*)"',t)
    body=re.sub(r'<script.*?</script>|<style.*?</style>','',t,flags=re.S)
    txt=len(re.sub(r'\s','',html.unescape(re.sub(r'<[^>]+>','',body))))
    info[u]=dict(title=title,canon=c.group(1) if c else u,len=txt,clk=gsc[u][0],imp=gsc[u][1])
json.dump(info,open('scratch/pages_info.json','w'),ensure_ascii=False)
print(len(info),'pages; canonical!=self:',sum(1 for u,i in info.items() if i['canon']!=u))
print('pages with imp>0:',sum(1 for i in info.values() if i['imp']>0),' gsc urls not in out:',[u for u in gsc if u not in info][:15])
