<template lang="pug">
.component
  BlogSpHeader().showHide
  .wrapAllBlogs
    template(v-for="post in posts")
      .wrapBlog
        n-link(:to="$C.PAGE.BLOG+post.id").blog
          p.title {{ post.title }}
          p.createdAt {{ date(post.createdAt) }}
        template(v-for="tag in post.tags")
          BlogTag(:tagName="tag").tag
</template>

<script lang="ts">
import moment from 'moment';
import { Component, Vue } from 'nuxt-property-decorator'
import { IPostSummary } from '@/interfaces/posts'
import { COLOR } from '@/constants/app'
import BlogSpHeader from '@/components/blogSpHeader.vue'
import BlogTag from '@/components/blogTag.vue'

@Component({
  components: {
    BlogSpHeader,
    BlogTag
  }
})
export default class BlogList extends Vue {
  /** Store データの Getter */
  public get posts(): IPostSummary[] | null {
    return this.$store.getters['post/getPosts']
  }

  public date(t: string): string {
    return moment(Date.parse(t)).format('YYYY/MM/DD')
  }

  /** ライフサイクル */
  public async fetch({ store }) {
    store.commit('i18n/setBackgroundColor', COLOR.WHITE)
    console.log(">>> blog list fetch")
    await store.dispatch('post/fetchPosts')
  }
}
</script>

<style lang="scss" scoped>
.component {
  height: 100vh;
  background-color: white;
  padding: 50px;
}

.wrapBlog {
  padding: 30px 0 0 0;
}

.blog {
  color: black;
  font-size: 16px;

  &:hover {
    text-decoration: none;
    color: gray;
  }
}

.title {
  font-size: 20px;
  font: bold;
}

.createdAt {
  font-size: 14px;
  color: gray;
}

.tag {
  display: inline-block;
}

  &:hover {
    text-decoration: none;
  }
}
</style>
