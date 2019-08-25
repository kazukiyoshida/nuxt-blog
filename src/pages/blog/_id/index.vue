<template lang="pug">
.component
  p.title {{ post.title }}
  p.createdAt {{ date(post.createdAt) }}
  .wrapTags
    template(v-for="tag in post.tags")
      a(href="#").tag {{ tag }}
  //- https://qiita.com/tscp/items/50b91ec583ae80aebac0
  .post(v-html="this.post.bodyHtml")
</template>

<script lang="ts">
import moment from 'moment';
import { Component, Vue } from 'nuxt-property-decorator'
import { IPost } from '../interfaces/post'
import { COLOR } from '@/constants/app'

@Component
export default class Blog extends Vue {
  /** Store データの Getter */
  public get post(): IPost | null {
    return this.$store.getters['post/getPost'](Number(this.$route.params.id))
  }

  public date(t: string): string {
    return moment(Date.parse(t)).format('YYYY/MM/DD')
  }

  /** ライフサイクル */
  public async fetch({ store, route }) {
    store.commit('i18n/setBackgroundColor', COLOR.WHITE)
    console.log(">>> blog fetch")
    await store.dispatch('post/fetchPost', Number(route.params.id))
  }
}
</script>

<style lang="scss" scoped>
.component {
  height: 100vh;
  background-color: white;
  padding: 30px;
}

.post {
  @import '../../../assets/stylesheet/github';
}
</style>
