/**
 * Posts summary API Interface
 */
export interface IPosts {
  posts: IPostSummary[]
}

export interface IPostSummary {
  id: number
  title: string
  isDraft: boolean
  createdAt: string
  updatedAt: string
  tags: string[]
  topImageUrl: string
}
