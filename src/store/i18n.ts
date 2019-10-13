import { LANG, COLOR } from '@/constants/app'

export interface IState {
  lang: LANG
  backgroundColor: COLOR
}

export const state = (): IState => ({
  lang: LANG.JA,
  backgroundColor: COLOR.BLACK
})

export const getters = {
  getLang(state: IState): LANG {
    return state.lang
  },
  getBackgroundColor(state: IState): COLOR {
    return state.backgroundColor
  }
}

export const mutations = {
  setLang(state: IState, lang: LANG): void {
    state.lang = lang
  },
  setBackgroundColor(state: IState, color: COLOR): void {
    state.backgroundColor = color
  }
}
