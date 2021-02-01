import requests
from bs4 import BeautifulSoup
import re
import json
import pprint
import glob

def main():
    files = glob.glob("src/articles/*")
    for file in files:
        f = file.split('/')[-1]
        if f != "summary.json":
            print(f)
            update_json_file(f.split('.')[0])



# timestamp = "2018-10-09"
def update_json_file(timestamp):
    # HTML 取得
    r = requests.get('https://github.com/kazukiyoshida/nuxt-blog/blob/master/src/markdown/' + timestamp + ".md")
    soup = BeautifulSoup(r.text, 'html.parser')
    html = str(soup.find(id="readme"))

    # HTML -> JSON
    json_list = []
    for line in html.splitlines():
        s = line.replace('\\', '\\\\"') # バックスラッシュをエスケープ
        s = s.replace('\t', '  ')       # タブ文字をスペースに変換
        json_list.append(s)

    # JSON ファイルを更新
    file_path = "src/articles/" + timestamp + ".json"

    with open(file_path, 'r') as f:
        df = json.load(f)
        df['bodyHtml'] = json_list

    with open(file_path, 'w') as f:
        j = json.dumps(df, indent=2, ensure_ascii=False)
        f.write(j)

if __name__ == '__main__':
    main()
