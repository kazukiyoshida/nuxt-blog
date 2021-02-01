/**
 * Post Detail API Interface
 */
export interface IPost {
  id: number
  title: string
  createdAt: string
  updatedAt: string
  tags: string[]
  topImageUrl: string
  bodyHtml: string
}

