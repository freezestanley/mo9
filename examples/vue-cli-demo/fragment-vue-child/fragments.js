const http = require('http')
const url = require('url')
const fs = require('fs')
const serve = require('koa-static')
const cors = require('koa2-cors')
const Koa = require('koa')
const app = new Koa()
const config = require('./config/application.json')
const PORT = config.port
app.use(cors())
app.use(serve('dist'))
app.listen(PORT, () => {
  console.log(`SPA Fragment Server started at ${PORT}`)
})
