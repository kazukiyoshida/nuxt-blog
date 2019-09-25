<template lang="pug">
.component
  .wrapSpHeader
    BlogSpHeader().showHide
  .wrapBlog
    p.title {{ post.title }}
    p.createdAt {{ date(post.createdAt) }}
    .wrapTags
      template(v-for="tag in post.tags")
        BlogTag(:tagName="tag").tag
    //- https://qiita.com/tscp/items/50b91ec583ae80aebac0
    .post(v-html="this.post.bodyHtml")
    .blank
</template>

<script lang="ts">
import moment from 'moment';
import { Component, Vue } from 'nuxt-property-decorator'
import { IPost } from '@/interfaces/post'
import { COLOR } from '@/constants/app'
import BlogSpHeader from '@/components/blogSpHeader.vue'
import BlogTag from '@/components/blogTag.vue'

@Component({
  components: {
    BlogSpHeader,
    BlogTag
  }
})
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
@import '../../../assets/stylesheet/mixins';

.component {
  background-color: white;
}

.wrapSpHeader {
  z-index: 999;
}

.wrapBlog {
  height: 100vh;
  padding: 90px 30px 30px 30px;
  overflow: auto;
}

.title {
  font-size: 20px;
  font: bold;
  padding: 20px 0 0 0;
}

.createdAt {
  font-size: 14px;
  color: gray;
}

.wrapTags {
  padding: 40px 0 40px 0;
}

.tag {
  display: inline-box;
}

.post {
  @import '../../../assets/stylesheet/github';
}

.blank {
  padding: 80px 0 0 0;
}

</style>
