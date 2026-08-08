import requests

app_id = "1016790932598379435" # 標準楽天デモ・一般AppIDまたは環境変数
access_key = "pk_XkZ5h9MDKSsuVr6T5CnLnlVNvFg3hiR5vMDGrQ75cU5"

url1 = "https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426"
params1 = {"applicationId": "1016790932598379435", "format": "json", "keyword": "Yu Kiroro"}

res1 = requests.get(url1, params=params1)
print("URL1 status:", res1.status_code, res1.text[:200])

url2 = "https://openapi.rakuten.co.jp/engine/api/Travel/KeywordHotelSearch/20170426"
params2 = {"applicationId": "18431f8e-b43b-41f1-aebe-ead995d7a126", "accessKey": access_key, "format": "json", "keyword": "Yu Kiroro"}

res2 = requests.get(url2, params=params2)
print("URL2 status:", res2.status_code, res2.text[:200])
