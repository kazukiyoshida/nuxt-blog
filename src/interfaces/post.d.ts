/**
 * ユーザー詳細 API
 */
export interface IPost {
  id: number
  title: string
  createdAt: string
  updatedAt: string
  tags: string[]
  topImageUrl: string
  bodyContent: string
  bodyHtml: string
}
