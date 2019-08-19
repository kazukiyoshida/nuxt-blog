<template lang="pug">
.div
  h1 ブログ 一覧
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class BlogList extends Vue {
  public fetch({ store }) {
    console.log(">>> blog list fetch")
  }
}
</script>

<style>
</style>
