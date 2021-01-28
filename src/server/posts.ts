import { IPostSummary } from '../interfaces/posts'
const Express = require('express')
const router = Express.Router()
const { fileMap } = require('../articles/summary')
const _ = require('lodash')

router.get('/posts', (req, res, next) => {
  res.header('Content-Type', 'application/json; charset=utf-8')

  const summary = _.reduce(fileMap, (accm: IPostSummary[], file: any): IPostSummary[] => {
    const ps: IPostSummary = {
      id: file.id,
      title: file.title,
      isDraft: file.draft,
      createdAt: file.created_at,
      updatedAt: file.updated_at,
      tags: file.tags.split(','),
      topImageUrl: file.top_image,
    }
    accm.push(ps)
    return accm
  }, [])

  res.send({ posts: summary })
})

module.exports = router
