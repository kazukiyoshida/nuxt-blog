import sys

#
# ルートにある tmp.html（GitHub で生成される HTML をコピーしてきたもの）を
# 整形し tmp.json に出力します
#
def main():
    with open('tmp.json', 'w') as out:
        with open('tmp.html', 'r') as f:
            f_iter = f.readlines()
            for line in f_iter:
                s = line.replace('\\', '\\\\"') # バックスラッシュをエスケープ
                s = s.replace('\t', '  ')       # タブ文字をスペースに変換
                s = s.replace('\"', '\\\"')     # 文字 " をエスケープ
                s = s.replace('\n', '')         # 文末の改行を一旦削除
                s = '\"' + s + '\"' + ",\n"
                out.write(s)

main()

