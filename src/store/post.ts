import Vue from 'vue'
import axios from 'axios'
import _ from 'lodash'
import { API } from '@/constants/'
import { IPost } from '@/interfaces/post'
import { IPostSummary } from '@/interfaces/posts'

export interface IState {
  posts: IPostSummary[] | null
  post: Record<string, IPost>
}

export const state = (): IState => ({
  posts: null,
  post: {}
})

export const getters = {
  getPosts(state: IState): IPostSummary[] | null {
    return state.posts
  },
  getPost: (state: IState): any => (
    id: number
  ): IPost | null => {
    return state.post[String(id)]
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
    Vue.set(state.post, String(id), post)
  }
}

export const actions = {
  async fetchPosts(
    this: Vue,
    { state, commit }: any
  ): Promise<void> {
    console.log('>> fetchPosts', state.posts)

    // キャッシュがあれば早期リターン
    if (state.posts) return

    console.log("get request : ", API.POSTS)

    try {
      const { data } = await axios.get(API.POSTS)
      console.log("get response : ", data)
      commit('savePosts', data.posts)
    } catch (err) {
      console.log("!!!!!!!!!! error !!!!!!!!!!!!", err)
      throw err
    }
  },

  async fetchPost(
    this: Vue,
    { state, commit }: any,
    id: number
  ): Promise<void> {
    console.log('>> fetchPost id: ', id)

    // キャッシュがあれば早期リターン
    if (_.keys(state.post).indexOf(String(id)) >= 0) return

    console.log("get request : ", API.POST + String(id))

    const { data } = await axios.get(API.POST + String(id))
    commit('savePost', { id: id, post: data })
  },


}
