import { IPost } from '../interfaces/post'
const { fileMap } = require('../articles/sammary')

const _ = require('lodash')
const Express = require('express')
const router = Express.Router()

router.get('/posts/:id', (req, res, next) => {
  res.header('Content-Type', 'application/json; charset=utf-8')

  const article = _.find(fileMap, ['id', Number(req.params.id)])
  if (!article) {
    res.status(404);
	  res.end('post not found : ' + req.path);
    return
  }

  const p = require(`../articles/${article.base}`)
  const response: IPost = {
    id: p.id,
    title: p.title,
    createdAt: p.created_at,
    updatedAt: p.updated_at,
    tags: p.tags.split(','),
    topImageUrl: p.top_image,
    bodyContent: p.bodyContent,
    bodyHtml: p.bodyHtml,
  }

  res.send(response)
})

module.exports = router
