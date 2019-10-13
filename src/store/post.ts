import Vue from 'vue'
import axios from 'axios'
import _ from 'lodash'
import { API } from '@/constants/'
import { IPost } from '@/interfaces/post'
import { IPostSummary } from '@/interfaces/posts'

export interface IState {
  posts: IPostSummary[]
  post: Record<number, IPost>
}

export const state = (): IState => ({
  posts: [],
  post: {}
})

export const getters = {
  getPosts(state: IState): IPostSummary[] {
    return state.posts
  },
  getPost: (state: IState): any => (
    id: number
  ): IPost | undefined => {
    return state.post[id]
  }
}

export const mutations = {
  savePosts(state: IState, posts: IPostSummary[]): void {
    state.posts = posts
  },
  savePost(
    state: IState,
    payload: { id: number, post: IPost }
  ): void {
    const { id, post } = payload
    Vue.set(state.post, id, post)
  }
}

export const actions = {
  async fetchPosts(
    this: Vue,
    { state, commit }: any
  ): Promise<void> {
    // キャッシュがあれば早期リターン
    if (state.posts) return

    try {
      const { data } = await axios.get(API.POSTS)
      commit('savePosts', data.posts)
    } catch (err) {
      throw err
    }
  },

  async fetchPost(
    this: Vue,
    { state, commit }: any,
    id: number
  ): Promise<void> {
    // キャッシュがあれば早期リターン
    if (_.keys(state.post).indexOf(String(id)) >= 0) return

    const { data } = await axios.get(API.POST + String(id))
    commit('savePost', { id: id, post: data })
  },
}
