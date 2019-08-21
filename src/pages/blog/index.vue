<template lang="pug">
.component
  template(v-for="post in posts")
    .wrapBlog
      n-link(:to="$C.PAGE.BLOG+post.id").blog
        p.title {{ post.title }}
        p.createdAt {{ Date.parse(post.createdAt) }}
      .wrapTags
        template(v-for="tag in post.tags")
          n-link(:to="$C.PAGE.TOP").tag {{ tag }}
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { IPostSummary } from '@/interfaces/posts'
import { COLOR } from '@/constants/app'

@Component
export default class BlogList extends Vue {
  /** Store データの Getter */
  public get posts(): IPostSummary[] | null {
    return this.$store.getters['post/getPosts']
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
  font-size: 12px;
  font: bold;
  color: white;
  display: block;
  text-align: center;
  border-radius: 5px;
  background-color: gray;
  display: inline-block;
  margin: 0 5px 0 0;
  padding: 2px 6px 2px 6px;

  &:hover {
    text-decoration: none;
  }
}
</style>
