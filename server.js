const express = require('express')
const next = require('next')
const { parse } = require('url')
const { join } = require('path')
const dev = process.env.NODE_ENV !== 'production'
const axios = require('axios')
const qs = require('qs')
const app = next({dev})
const handle = app.getRequestHandler()
let port = 3000

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

(async () => {
  await app.prepare()
  const server = express()

  server.use(bodyParser.raw())
  server.use(bodyParser.json())
  server.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )

  server.use(cookieParser())

  server.use((req, res, next) => {
    req.res = res
    res.req = req
    if (req.url.startsWith('/api')) {
      if (req.method === 'GET') {
        const url_parts = parse(req.url, true)
        req.body = url_parts.query
      }
      req.headers.host = global.apihost
    }
    next()
  })
  
  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true)
    // 这几个特殊文件不需要加static路径访问
    const rootStaticFiles = ['/robots.txt', '/sitemap.xml', '/favicon.ico']
    if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
      const path = join(__dirname, 'static', parsedUrl.pathname)
      app.serveStatic(req, res, path)
    } else {
      handle(req, res, parsedUrl)
    }
  })

  await server.listen(3009)
  console.log('> Ready on http://localhost:3009')
})()
