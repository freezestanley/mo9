const http = require('http')
const url = require('url')
const fs = require('fs')
const serve = require('koa-static')
const Koa = require('koa')
const app = new Koa()
const PORT = 5000
app.use(serve('dist'))

// app.use(async (ctx, next) => {
//     const pathname = url.parse(ctx.req.url).pathname
//     console.log('pathname=' + pathname)
//     if (pathname === '/') {
//       ctx.res.writeHead(200, {
//         'Content-Type': 'text/html',
//         'Link': `<http://localhost:${PORT}/bundle.js>; rel="fragment-script"`
//       })
//     }
//     ctx.res.end('')
//     next()
//   })
// app.use(async (ctx, next) => {
//     console.log(url.parse(ctx.req.url).pathname)
//     const pathname = url.parse(ctx.req.url).pathname
//     if (pathname === '/') {
//       ctx.res.writeHead(200, {
//         'Content-Type': 'text/html',
//         'Link': `<http://localhost:${PORT}/index.html>; rel="fragment-script"`
//       })
//     }
//     ctx.res.end('')
//     next()
// })

app.listen(PORT, () => {
  console.log(`SPA Fragment Server started at ${PORT}`)
})
// const server = http.createServer((req, res) => {
//   const pathname = url.parse(req.url).pathname
//   const jsHeader = { 'Content-Type': 'application/javascript' }
//   switch(pathname) {
//     case '/public/bundle.js':
//       res.writeHead(200, jsHeader)
//       return fs.createReadStream('./public/bundle.js').pipe(res)
//     default:
//       res.writeHead(200, {
//         'Content-Type': 'text/html',
//         'Link': '<http://localhost:5000/public/bundle.js>; rel="fragment-script"'
//       })
//       return res.end('')
//   }
// })

// server.listen(5000, () => {
//   console.log('SPA Fragment Server started at 5000')
// })
