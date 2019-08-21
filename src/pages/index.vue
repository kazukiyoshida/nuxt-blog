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
}
</script>

<style>
</style>
