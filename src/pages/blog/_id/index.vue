<template lang="pug">
.div
  h1 ブログ投稿
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Blog extends Vue {
  public fetch({ store }) {
    console.log(">>> fetch")
  }

  public mounted() {
    console.log(">>> mounted start")
    // this.$store.dispatch('user/fetchUserDetail', {})
    console.log(">>> mounted end")
  }
}
</script>
