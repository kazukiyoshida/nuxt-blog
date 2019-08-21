import { LANG, COLOR } from '@/constants/app'

export interface IState {
  lang: string
  backgroundColor: string
}

export const state = (): IState => ({
  lang: LANG.JA,
  backgroundColor: COLOR.BLACK
})

export const getters = {
  getLang(state: IState): string {
    return state.lang
  },
  getBackgroundColor(state: IState): string {
    return state.backgroundColor
  }
}

export const mutations = {
  setLang(state: IState, lang: string): void {
    state.lang = lang
  },
  setBackgroundColor(state: IState, color: string): void {
    state.backgroundColor = color
  }
}
