<template lang="pug">
.app
  .wrapAll
    template(v-if="false")
      .header
        p header
    .wrapMiddle
      .wrapSide
        .side-title
          n-link(:to="$C.PAGE.TOP")
            p Kazuki
            p Yoshida
        .side-desc
          p {{ $t('top.description1') }}
          p {{ $t('top.description2') }}
        .side-buttons
          n-link(:to="$C.PAGE.ABOUT").button {{ $t('top.about') }}
          n-link(:to="$C.PAGE.BLOGS").button {{ $t('top.blog') }}
        .side-lang
          .lang(
            v-if="lang === $C.LANG.JA"
            @click="changeLang($C.LANG.EN)"
          ) {{ $t('top.changeLang') }}
          .lang(
            v-if="lang === $C.LANG.EN"
            @click="changeLang($C.LANG.JA)"
          ) {{ $t('top.changeLang') }}
      .wrapContent
        nuxt
    .footer(
      :class="this.backgroundColor === $C.COLOR.BLACK ? 'footer-white' : 'footer-black'"
    ) © 2019 KazukiYoshida
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {

  /** 現在のメイン背景色 */
  public get backgroundColor(): string {
    return this.$store.getters['i18n/getBackgroundColor']
  }

  /** 現在の言語 */
  public get lang(): string {
    return this.$store.getters['i18n/getLang']
  }

  /** 言語を変更 */
  public changeLang(lang: string): void {
    this.$store.commit('i18n/setLang', lang)
    // https://github.com/kazupon/vue-i18n/issues/375
    this.$root.$i18n.locale = lang
  }

}
</script>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

@import '../assets/stylesheet/mixins';
$padding-size: 20px;
$hero-image: "../assets/images/bari.jpg";

* {
  margin: 0;
  padding: 0;
}

html {
  -webkit-overflow-scrolling: touch;
}

body {
  height: 100vh;
  background-color: black;
  background-image: url($hero-image);
  background-size: cover;
  background-position: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.wrapAll {
  position: relative;
  height: 100vh;
}

.header {
  height: 30px;
  width: 100%;
  background-color: yellow;
}

.wrapMiddle {
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
}

.wrapSide {
  position: absolute;
  bottom: 50px;
  width: 35%;
  padding: 0 40px 0 40px;
}

.side-title {
  color: white;
  font-weight: bold;
  font-size: 60px;
  line-height: 60px;
  display: inline-block;
}

.side-desc {
  color: white;
  font-size: 16px;
  line-height: 20px;
  display: inline-block;
}

.button {
  font-size: 14px;
  display: block;
  width: 40%;
  padding: 8px;
  margin: 10px 20px 10px 20px;
  text-align: center;
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  float: left;
}

.side-lang {
  color: white;
  font-size: 14px;
}

.wrapContent {
  width: 65%;
  height: 100vh;
  float: right;
}

.footer{
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 50px;
  text-align: center;
  font-size: 4px;

}

.footer-black {
  color: black;
}

.footer-white {
  color: white;
  text-shadow: 0px 0px 1em black, 0px 0px 1em black;
}


a:visited, a {
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}

</style>
