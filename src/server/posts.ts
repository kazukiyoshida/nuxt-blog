import { IPostSammary } from '../interfaces/posts'
const Express = require('express')
const router = Express.Router()
const { fileMap } = require('../articles/sammary')
const _ = require('lodash')

router.get('/posts', (req, res, next) => {
  res.header('Content-Type', 'application/json; charset=utf-8')

  const sammary = _.reduce(fileMap, (accm: IPostSammary[], file: any): IPostSammary[] => {
    const ps: IPostSammary = {
      id: file.id,
      title: file.title,
      createdAt: file.created_at,
      updatedAt: file.updated_at,
      tags: file.tags.split(','),
      topImageUrl: file.top_image,
    }
    accm.push(ps)
    return accm
  }, [])

  res.send({ posts: sammary })
})

module.exports = router
