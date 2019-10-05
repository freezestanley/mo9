const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')
const serve = require('koa-static')
const cors = require('@koa/cors')
const Koa = require('koa')
const views = require('koa-views')
const app = new Koa()
const config = require('./config/application.json')
const PORT = config.port

app.use(cors())
app.use(serve('build'))
app.use(views(path.resolve(__dirname, './build')))
app.use(async function (ctx, next) {
    if (ctx.req.url === '/app') {
        return await ctx.render('app')
    } else {
        return await ctx.render('index')
    }
    next()
  })


app.listen(PORT, () => {
  console.log(`SPA Fragment Server started at ${PORT}`)
})
