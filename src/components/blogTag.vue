<template lang="pug">
.component
  //- WIP: タグ検索機能は未実装
  a(href="#").tag {{ tagName }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class BlogTag extends Vue {
  /** タグに表記する文字列 */
  @Prop({ type: String, required: true })
  public tagName: string
}
</script>

<style lang="scss" scoped>
.tag {
  font-size: 12px;
  font: bold;
  color: black;
  display: block;
  text-align: center;
  border-radius: 5px;
  background-color: #EEEEEE;
  display: inline-block;
  padding: 2px 6px 2px 6px;

  &:hover {
    text-decoration: none;
  }
}

a:visited, a {
  color: black;
  text-decoration: none;
  &:hover {
    color: gray;
  }
}

</style>
