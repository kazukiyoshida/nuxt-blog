<template lang="pug">
.div
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { COLOR } from '@/constants/app'

@Component
export default class extends Vue {
  /** ライフサイクル */
  public async fetch({ store }) {
    store.commit('i18n/setBackgroundColor', COLOR.BLACK)
  }

  /** メタタグ */
  public head() {
    return {
      title: 'Kazuki Yoshida',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "This is Kazuki Yoshida's blog."
        }
      ]
    }
  }
}
</script>

<style>
</style>
