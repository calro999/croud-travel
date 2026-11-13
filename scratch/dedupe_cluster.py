import json,re,collections
info=json.load(open('scratch/pages_info.json'))
STOP={'stay','hotels','hotel','guide','the','and','of','station','onsen','hotspring','resort','trip','travel','luxury','solo','retreat','business','family'}
def toks(u):
    s=u.strip('/').split('/')[-1]
    return [t for t in s.split('-') if t]
def bigr(t):
    t=re.sub(r'[｜|].*$','',t);t=re.sub(r'[\s！!？?、。・「」【】〜~0-9,円台選]','',t)
    return {t[i:i+2] for i in range(len(t)-1)}
cands=[u for u in info if u.count('/')==2 and info[u]['canon']==u]  # top-level & posts? top-level only
cands=[u for u in cands if not u.startswith('/posts/')]
groups=collections.defaultdict(list)
for u in cands:
    t=toks(u)
    # key: season/category prefix + first two place tokens
    pre=[]
    i=0
    while i<len(t) and t[i] in ('autumn','winter','spring','summer','budget','furusato','tax','family','solo','luxury'):
        pre.append(t[i]);i+=1
    key=('-'.join(pre),)+tuple(t[i:i+2])
    groups[key].append(u)
pairs=[]
redir={}
for k,us in groups.items():
    if len(us)<2: continue
    us.sort(key=lambda u:(-info[u]['clk'],-info[u]['imp'],-info[u]['len']))
    used=set()
    for a in us:
        if a in used or a in redir: continue
        ba=bigr(info[a]['title']);ta=set(toks(a))-STOP
        for b in us:
            if b==a or b in used or b in redir: continue
            bb=bigr(info[b]['title']);tb=set(toks(b))-STOP
            jt=len(ba&bb)/max(1,len(ba|bb)); js=len(ta&tb)/max(1,len(ta|tb))
            if js>=0.8 or (js>=0.6 and jt>=0.35) or (jt>=0.5 and js>=0.45):
                redir[b]=a;used.add(b)
                pairs.append((round(js,2),round(jt,2),b,a))
for p in sorted(pairs): print(p, info[p[2]]['imp'],'->',info[p[3]]['imp'])
print(len(redir))
json.dump(redir,open('scratch/redir_toplevel.json','w'),indent=0)
