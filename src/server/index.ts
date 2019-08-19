const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const config = require('../../nuxt.config.ts')
config.dev = !(process.env.NODE_ENV === 'production')

const hc = require('./hc')
const posts = require('./posts')
const post = require('./post')

const app = express()

async function start() {
  // API routing
  app.use('/api', hc)
  app.use('/api', posts)
  app.use('/api', post)

  // Init Nuxt.js
  const nuxt = new Nuxt(config)
  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
