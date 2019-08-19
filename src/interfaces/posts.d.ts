/**
 * 投稿一覧
 */
export interface IPosts {
  posts: IPostSammary[]
}

export interface IPostSammary {
  id: number
  title: string
  createdAt: string
  updatedAt: string
  tags: string[]
  topImageUrl: string
}
