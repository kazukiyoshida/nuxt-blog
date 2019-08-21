/**
 * 投稿一覧
 */
export interface IPosts {
  posts: IPostSummary[]
}

export interface IPostSummary {
  id: number
  title: string
  createdAt: string
  updatedAt: string
  tags: string[]
  topImageUrl: string
}
