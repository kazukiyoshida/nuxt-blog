# groomingWebBff

Nuxt, Express, TypeScript で作るブログです.

## Build Setup

``` bash
# 依存パッケージの取得
$ yarn install

# サーバー起動
$ yarn dev

# markdwon を json へ変換
processmd "src/markdown/*.md" --outputDir src/articles --stdout > src/article/summary.json
```
