<template lang="pug">
.component
  .wrapSpHeader
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
import _ from 'lodash'
import moment from 'moment';
import { Component, Vue } from 'nuxt-property-decorator'
import { IPostSummary } from '@/interfaces/posts'
import { COLOR } from '@/constants/app'
import BlogSpHeader from '@/components/blogSpHeader.vue'
import BlogTag from '@/components/blogTag.vue'
import { fileMap } from '@/articles/summary.json'

@Component({
  components: {
    BlogSpHeader,
    BlogTag
  }
})
export default class BlogList extends Vue {
  /** Store データの Getter */
  public get posts(): IPostSummary[] {
    let posts = _.filter(this.$store.getters['post/getPosts'], i => !i.isDraft)
    return posts.slice().reverse()
  }

  /** 2019-09-23T00:00:00.000Z 形式の日付文字列を 2019/09/23 に変換する */
  public date(t: string): string {
    return moment(Date.parse(t)).format('YYYY/MM/DD')
  }

  /** ライフサイクル */
  public async fetch({ store, error }) {
    store.commit('i18n/setBackgroundColor', COLOR.WHITE)

    // SSR では API を経由せずファイルを直接読み取りに行く
    // WIP: API サーバーとの共通処理をまとめる
    const posts: IPostSummary[] = _.reduce(
      fileMap,
      (accm: IPostSummary[], file: any): IPostSummary[] => {
        const ps: IPostSummary = {
          id: file.id,
          title: file.title,
          isDraft: file.draft,
          createdAt: file.created_at,
          updatedAt: file.updated_at,
          tags: file.tags.split(','),
          topImageUrl: file.top_image,
        }
        accm.push(ps)
        return accm
      },
      []
    )
    store.commit('post/savePosts', posts)
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/stylesheet/mixins';

.component {
  background-color: white;
}

.wrapSpHeader {
  z-index: 999;
}

.wrapAllBlogs {
  height: 100vh;
  padding: 70px 0 120px 0;
  overflow: auto;
}

.wrapBlog {
  padding: 40px 30px 0 30px;

  @include pc {
    padding: 40px 130px 0 130px;
  }
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

a:visited, a {
  color: black;
  text-decoration: none;
  &:hover {
    color: gray;
  }
}

</style>
