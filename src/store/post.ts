import Vue from 'vue'
import axios from 'axios'
import { API } from '../constants/api'
import { IPostSummary } from '../interfaces/posts'

export interface IState {
  posts: IPostSummary[] | null
}

export const state = (): IState => ({
  posts: null
})

export const getters = {
  getPosts(state: IState): IPostSummary[] | null {
    return state.posts
  }
}

export const mutations = {
  savePosts(state: IState, posts: IPostSummary[]): void {
    state.posts = posts
  }
}

export const actions = {
  async fetchPosts(
    this: Vue,
    { state, commit }: any,
    payload: {}
  ): Promise<void> {
    console.log('>> fetchPosts')
    const { posts } = await axios.get(API.POSTS)
    commit('savePosts', posts)
    // WIP: APIリクエストの完了/未完了を判定するためには try-catch する必要あり
  }
}
