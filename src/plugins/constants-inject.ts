/**
 * @file 定数をグローバルにセットする
 */

// https://ja.nuxtjs.org/guide/plugins
// https://teratail.com/questions/166535
// https://issus.me/projects/100/issues/60
// https://forum.vuejs.org/t/typescript-mixins-methods-data/28374

import { Context } from '@nuxt/vue-app'
import * as C from '@/constants/'

export default (context: Context, inject: any): void => {
  inject('C', C)
}
