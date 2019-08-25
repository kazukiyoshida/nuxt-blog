<template lang="pug">
.component
  .wrapAll
    .topImages
      img(src="../../assets/images/sheep.png").topImage
      img(src="../../assets/images/hitachikaeri.jpeg").topImage
    .wrapContents
      .description
        | こんにちは！ブログ見てくれてありがとうございます！<br />
        | 東京でWebエンジニアをしています吉田和輝です。<br />
        | 自分が好きなもの、興味を持っていること、これまで何をしてきたかについて紹介させていただきます！
      .wrapLikeDislike
        .whatILike
          p.sectionTitle What I Like
          p 🙆 Vim
          p 🙆 Haskell, Golang, TypeScript
          p 🙆 組み込みプログラミング
          p 🙆 お酒
          p 🙆 筋トレ
          p 🙆 物理学
          p 🙆 読書
        .whatIDislike
          p.sectionTitle What I DISLike
          p 🙆 徹夜
          p 🙆 立食パーティーとか..
      .History
        p.sectionTitle History
        p 東京学芸大学附属高校
        p 京都大学 理学部
        p 京都大学大学院 理学研究科：機械学習と統計解析
        p 経営共創基盤（ IGPI ）：経営コンサルタント
        p チームラボ株式会社：Webエンジニア
      .Portfolio
        p.sectionTitle Portfolio
      .brank
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { COLOR } from '@/constants/app'

@Component
export default class About extends Vue {
  /** ライフサイクル */
  public async fetch({ store }) {
    store.commit('i18n/setBackgroundColor', COLOR.BLACK)
  }
}
</script>

<style lang="scss" scoped>
.component {
  background-color: black;
  opacity: 0.85;
  color: white;
  height: 95vh;
  margin: 15px;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.3);
  overflow:auto;
}

.topImages {
  padding: 100px 0 100px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.topImage {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  width: 140px;
}

.wrapContents {
  padding: 0 60px 0 60px;
}

.wrapLikeDislike {
  display: flex;
  flex-direction: row;
  justify-content: left;
}

.whatILike {
  padding: 0 80px 0 0;
}

.sectionTitle {
  font-size: 30px;
  padding: 20px 0 0 0;
}

.description {
  padding: 20px 0 20px 0;
}

.brank {
  padding: 50px 0 0 0;
}
</style>
