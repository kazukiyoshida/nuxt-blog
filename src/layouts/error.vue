<template lang="pug">
  .component
    p(v-if="error.statusCode === 404") ページが見つかりません
    p(v-else) エラーが発生しました
    n-link(:to="$C.PAGE.TOP") ホーム
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class Error extends Vue {
  @Prop({ type: Object, required: true })
  public error: any
}
</script>
