<template lang="pug">
.component
  .topImages
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
    .whoAmI
      p.sectionTitle
      p.line.sectionTitle {{ $t('about.whoAmI.title') }}
      p.line {{ $t('about.whoAmI.name') }}
      p.line {{ $t('about.whoAmI.birth') }}
      p.line {{ $t('about.whoAmI.where') }}
    .History
      p.sectionTitle {{ $t('about.historyTitle') }}
      p.line {{ $t('about.history3') }}
      p.line {{ $t('about.history2') }}
      p(v-if="lang == $C.LANG.JA").line {{ $t('about.history1') }}
    .Job
      p.sectionTitle {{ $t('about.jobTitle') }}
      p.line {{ $t('about.job2') }}
      p.line {{ $t('about.job1') }}
    .Like(v-if="lang == $C.LANG.JA")
      p.sectionTitle 趣味
      p.line {{ $t('about.like1') }}
      p.line {{ $t('about.like2') }}
    .blank
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { COLOR } from '@/constants/app'

@Component
export default class About extends Vue {
  /** 現在の言語 */
  public get lang(): string {
    return this.$store.getters['i18n/getLang']
  }

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
  @include pc {
    /** PC の方が SP よりもなぜか明るく見えるので透過度を下げる */
    background: rgba(0,0,0,0.90);
  }
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
  height: 140px;
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
  padding: 0 30px 0 30px;
  @include pc {
    padding: 0 60px 0 60px;
  }
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
  padding: 30px 0 0 0;
}

.description {
  padding: 20px 0 20px 0;
}

.blank {
  padding: 100px 0 0 0;
}

.line {
  padding: 5px 0 5px 0;
}

.space {
  margin-left: 40px;
}

.extLinkIcon {
  margin: 0 6px 0 6px;
  font-size: 14px;
}
</style>
