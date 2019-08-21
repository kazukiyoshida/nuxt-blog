<template lang="pug">
.component
  p.title {{ post.title }}
  p.createdAt {{ post.createdAt }}
  .wrapTags
    template(v-for="tag in post.tags")
      p {{ tag }}
  #contentBlock
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { IPost } from '../interfaces/post'

@Component
export default class Blog extends Vue {
  /** Store データの Getter */
  public get post(): IPost | null {
    return this.$store.getters['post/getPost'](Number(this.$route.params.id))
  }

  /** ライフサイクル */
  public async fetch({ store, route }) {
    console.log(">>> blog fetch")
    await store.dispatch('post/fetchPost', Number(route.params.id))
  }

  public mounted(): void {
    const contentBlock = document.getElementById('contentBlock');
    contentBlock.insertAdjacentHTML('afterbegin', this.post.bodyHtml);
  }
}
</script>

<style lang="scss" scoped>
.component {
  height: 100vh;
  background-color: white;
  padding: 30px;
}
</style>
