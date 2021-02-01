<template lang="pug">
.app
  .wrapAll
    .wrapMiddle
      //- topページ以外では見出しは隠したいので hideShow をつける
      .wrapSide(:class="(topPageFlg) ? '' : 'hideShow'")
        .side-title
          n-link(:to="$C.PAGE.TOP")
            p Kazuki
            p Yoshida
        .side-sns(v-if="showSnsFlg")
          a(:href="$C.LINK.TWITTER" target="_blank").sns
            fa-icon(:icon="['fab', 'twitter']")
          a(:href="$C.LINK.GITHUB" target="_blank").sns
            fa-icon(:icon="['fab', 'github']")
          a(:href="$C.LINK.INSTAGRAM" target="_blank").sns
            fa-icon(:icon="['fab', 'instagram']")
        .side-desc
          a(href="$C.LINK.GOOGLEMAPS" target="_blank")
            p {{ $t('top.description1') }}
          p {{ $t('top.description2') }}
          p {{ $t('top.description3') }}
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
    .wrapFooter(:class="(topPageFlg) ? '' : 'hideShow'")
      .footer(
        :class="this.backgroundColor === $C.COLOR.BLACK ? 'footer-white' : 'footer-black'"
      ) © 2021 KazukiYoshida
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

  /** TOPページフラグ */
  public get topPageFlg(): boolean {
    // @ts-ignore: Unreachable code error
    return this.$route.path === this.$C.PAGE.TOP
  }

  // fontawesome が一瞬巨大に表示される問題に対応
  public showSnsFlg: boolean = false

  /** 言語を変更 */
  public changeLang(lang: string): void {
    this.$store.commit('i18n/setLang', lang)
    // https://github.com/kazupon/vue-i18n/issues/375
    this.$root.$i18n.locale = lang
  }

  /** ライフサイクル */
  public async mounted() {
    this.showSnsFlg = true
  }
}
</script>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
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
$hero-image: "../assets/images/unsplash-min.png";

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
  overscroll-behavior: none;
}

.wrapAll {
  position: relative;
  height: auto;
  min-height: 100vh;
}

.wrapMiddle {
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
}

.wrapSide {
  position: absolute;
  bottom: 50px;
  width: 100%;
  padding: 0 40px 0 40px;

  @include pc {
    padding: 0 60px 0 60px;
    position: absolute;
    bottom: 50px;
    width: 30%;
    padding: 0 60px 0 60px;
  }
}

.side-title {
  color: white;
  font-weight: bold;
  display: inline-block;

  font-size: 70px;
  line-height: 70px;

  @include pc {
    font-size: 70px;
    line-height: 70px;
  }
}

.side-desc {
  color: white;
  font-size: 16px;
  line-height: 24px;
  display: inline-block;

  @include pc {
    font-size: 16px;
    line-height: 24px;
    display: inline-block;
  };
}

.side-sns {
  color: 'white';
  font-size: 40px;

  @include pc {
    font-size: 40px;
  }
}

.sns {
  padding: 0 10px 0 0;
}

.side-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.button {
  font-size: 14px;
  display: block;
  width: 40%;
  padding: 8px;
  margin: 10px 10px 10px 10px;
  text-align: center;
  color: white;
  border: 2px solid white;
  border-radius: 5px;
}

.side-lang {
  color: white;
  font-size: 14px;
}

.wrapContent {
  /** height: 100vh; */
  height: 100%;

  @include pc {
    width: 72%;
    float: right;
  }
}

.footer{
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 50px;
  text-align: center;
  font-size: 10px;
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
