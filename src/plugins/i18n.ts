/**
 * @file i18n をグローバルにセットする
 */

import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// WIP: i18n が効いていない
export default ({ app, store }): void => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.i18n.lang,
    messages: {
      ja: require('../locales/ja.json'),
      en: require('../locales/en.json')
    }
  })
}
