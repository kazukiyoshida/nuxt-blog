<template lang="pug">
.component
  .topImages
    img(src="../../assets/images/sheep.png").topImage
    img(src="../../assets/images/hitachikaeri.jpeg").topImage
  .showHide
    .wrapSns
      a(:href="$C.LINK.TWITTER" target="_blank").sns
        fa-icon(:icon="['fab', 'twitter']")
      a(:href="$C.LINK.GITHUB" target="_blank").sns
        fa-icon(:icon="['fab', 'github']")
      a(:href="$C.LINK.INSTAGRAM" target="_blank").sns
        fa-icon(:icon="['fab', 'instagram']")
  .wrapContents
    .description
      | {{ $t('about.description1') }}<br />
      | {{ $t('about.description2') }}<br />
      | {{ $t('about.description3') }}
    .wrapLikeDislike
      .whatILike
        p.sectionTitle What I Like
        p 🙆 Vim
        p 🙆 Haskell, Golang, TypeScript
        p 🙆 {{ $t('about.embedded') }}
        p 🙆 {{ $t('about.beer') }}
        p 🙆 {{ $t('about.training') }}
        p 🙆 {{ $t('about.physics') }}
        p 🙆 {{ $t('about.books') }}
      .whatIDislike
        p.sectionTitle What I Dislike
        p 😇 {{ $t('about.nosleep') }}
    .History
      p.sectionTitle History
      p {{ $t('about.history1') }}
      p {{ $t('about.history2') }}
      p {{ $t('about.history3') }}
      .showHide
        div
          a(href="http://www.ton.scphys.kyoto-u.ac.jp/shinomotoG/index.html")
            | {{ $t('about.lab1') }}
            fa-icon(:icon="['fas', 'external-link-alt']").extLinkIcon
        div
          span ....{{ $t('about.lab2') }}
        div
          a(href="https://www.igpi.co.jp" target="_blank")
            | {{ $t('about.officeA1') }}
            fa-icon(:icon="['fas', 'external-link-alt']").extLinkIcon
        div
          span ....{{ $t('about.officeA2') }}
        div
          a(href="https://www.team-lab.com" target="_blank")
            | {{ $t('about.officeB1') }}
            fa-icon(:icon="['fas', 'external-link-alt']").extLinkIcon
        div
          span ....{{ $t('about.officeB2') }}
      .hideShow
        div
          a(href="http://www.ton.scphys.kyoto-u.ac.jp/shinomotoG/index.html")
            | {{ $t('about.lab1') }}
            fa-icon(:icon="['fas', 'external-link-alt']").extLinkIcon
          span {{ $t('about.lab2') }}
        div
          a(href="https://www.igpi.co.jp" target="_blank")
            | {{ $t('about.officeA1') }}
            fa-icon(:icon="['fas', 'external-link-alt']").extLinkIcon
          span {{ $t('about.officeA2') }}
        div
          a(href="https://www.team-lab.com" target="_blank")
            | {{ $t('about.officeB1') }}
            fa-icon(:icon="['fas', 'external-link-alt']").extLinkIcon
          span {{ $t('about.officeB2') }}
    .brank
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { COLOR } from '@/constants/app'

@Component
export default class About extends Vue {
  /** ライフサイクル */
  public async fetch({ store }) {
    store.commit('i18n/setBackgroundColor', COLOR.BLACK)
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/stylesheet/mixins';

.component {
  background: rgba(0,0,0,0.85);
  color: white;
  height: 100vh;
  margin: 0;
  box-shadow: 0px 4px 8px rgba(0,0,0,5);
  overflow:auto;
}

.topImages {
  padding: 100px 0 30px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @include pc {
    padding: 100px 0 70px 0;
  }
}

.topImage {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  width: 140px;
}

.wrapSns {
  color: 'white';
  font-size: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.sns {
  padding: 0 10px 0 0;
}

.wrapContents {
  padding: 0 60px 0 60px;
}

.wrapLikeDislike {
  @include pc {
    display: flex;
    flex-direction: row;
    justify-content: left;
  }
}

.whatILike {
  margin: 0 20% 0 0;
}

.sectionTitle {
  font-size: 30px;
  padding: 20px 0 0 0;
}

.description {
  padding: 20px 0 20px 0;
}

.brank {
  padding: 80px 0 0 0;
}

.extLinkIcon {
  margin: 0 6px 0 6px;
  font-size: 14px;
}
</style>
