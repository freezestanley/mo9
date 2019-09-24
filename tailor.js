'use strict'

const http = require('http')
// const Tailor = require('node-tailor')
const Tailor = require('./tailor/index.js')
const fs = require('fs')
const tailor = new Tailor({
  templatesPath: __dirname + '/templates'
})
// const Koa = require('koa')
// const serve = require('koa-static')
// const app = new Koa()
const PORT = 8080
// app.use(async (ctx, next) => {
//   tailor.requestHandler(ctx.req, ctx.res)
// })

// app.listen(PORT, () => {
//   console.log(`SPA Fragment Server started at ${PORT}`)
// })

http
  .createServer((req, res) => {
    if (req.url === '/blank') {
      return res.end('')
    }
    if (req.url === '/bundle.js') {
      res.writeHead(200, { 'Content-Type': 'application/javascript' })
      return fs.createReadStream('./yy/dist/bundle.js').pipe(res)
    }
    if (req.url === '/favicon.ico') {
      res.writeHead(200, { 'Content-Type': 'image/x-icon' })
      return res.end('')
    }

    req.headers['x-request-uri'] = req.url
    req.url = '/index'

    tailor.requestHandler(req, res)
  })
  .listen(8080, function() {
    console.log('Tailor server listening on port 8080')
  })
