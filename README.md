# Nuxt-Blog

Nuxt, Express, TypeScript で作るブログです.

## Build Setup

``` bash
# 依存パッケージの取得
$ yarn install

# サーバー起動
$ yarn dev

# markdwon を json へ変換
processmd "src/markdown/*.md" --outputDir src/articles --stdout > src/articles/summary.json
```

## Deploy

```
// ローカルでビルド
$ docker build . -t nuxt-blog
// タグ付与
$ docker tag nuxt-blog gcr.io/nuxt-blog-251605/nuxt-blog:latest
// イメージを Container Registry にプッシュ
$ docker push gcr.io/nuxt-blog-251605/nuxt-blog:latest
```
