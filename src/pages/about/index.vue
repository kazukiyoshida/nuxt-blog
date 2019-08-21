<template lang="pug">
.component
  p こんにちは〜
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class About extends Vue {}
</script>

<style lang="scss" scoped>
.component {
  background-color: black;
  opacity: 0.85;
  color: white;
  height: 95vh;
  margin: 15px;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.3);
}
</style>
