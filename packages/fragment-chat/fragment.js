const http = require('http')
const url = require('url')
const fs = require('fs')
const serve = require('koa-static')
const Koa = require('koa')
const app = new Koa()

// const server = http.createServer((req, res) => {
//   const pathname = url.parse(req.url).pathname
//   const jsHeader = { 'Content-Type': 'application/javascript' }
//   console.log('pathname=' + pathname)
//   switch(pathname) {
//     case '/public/bundle.js':
//       res.writeHead(200, jsHeader)
//       return fs.createReadStream('./public/bundle.js').pipe(res)
//     default:
//       res.writeHead(200, {
//         'Content-Type': 'text/html',
//         'Link': '<http://localhost:3000/public/bundle.js>; rel="fragment-script"'
//       })
//       return res.end('')
//   }
// })

// server.listen(3000, () => {
//   console.log('SPA Fragment Server started at 3000')
// })



app.use(serve('public'))
app.use(async (ctx, next) => {
  const pathname = url.parse(ctx.req.url).pathname
  console.log('pathname=' + pathname)
  if (pathname === '/') {
    ctx.res.writeHead(200, {
      'Content-Type': 'text/html',
      'Link': '<http://localhost:3000/bundle.js>; rel="fragment-script"'
    })
  }
  ctx.res.end('')
  next()
  return 
  
})
// app.use(async (ctx, next) => {
//     console.log(url.parse(ctx.req.url).pathname)
//     ctx.res.writeHead(200, {
//         'Content-Type': 'text/html',
//         'Link': '<http://localhost:5000/app.cc21dcadedbf8ef03f59.js>; rel="fragment-script"'
//     })
//     ctx.res.end('')
//     next()
// })

app.listen(3000, () => {
  console.log('SPA Fragment Server started at 3000')
})