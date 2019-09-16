const http = require('http')
const url = require('url')
const fs = require('fs')

const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname
  const jsHeader = { 'Content-Type': 'application/javascript' }
  console.log('pathname=' + pathname)
  switch(pathname) {
    case '/public/bundle.js':
      res.writeHead(200, jsHeader)
      return fs.createReadStream('./public/bundle.js').pipe(res)
    default:
      res.writeHead(200, {
        'Content-Type': 'text/html',
        'Link': '<http://localhost:3000/public/bundle.js>; rel="fragment-script"'
      })
      return res.end('')
  }
})

server.listen(3000, () => {
  console.log('SPA Fragment Server started at 3000')
})
