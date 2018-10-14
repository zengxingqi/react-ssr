import express from 'express'
import { matchRoutes } from 'react-router-config'
import proxy from 'express-http-proxy'

import { render } from './utils'
import routes from '../routes'
import { getStore } from '../store'

const app = express()
app.use(express.static('public'))

app.use('/api', proxy('http://47.95.113.63', {
  proxyReqPathResolver: function (req) {
    return '/ssr/api' + req.url
  }
}))

app.get('*', function (req, res) {
  const store = getStore(req)
  // 在这个步骤，拿到路由-组件中需要的异步数据，填充到store之中
  // 根据路由的路径，往store里面添加数据
  const matchedRoutes = matchRoutes(routes, req.path)
  const promises = []

  matchedRoutes.forEach((item) => {
    if (item.route.loadData) {
      const promise = new Promise((resolve, rejects) => {
        item.route.loadData(store).then(resolve).catch(resolve)
      })
      promises.push(promise)
    }
  })

  Promise.all(promises).then(() => {
    const context = {css: []}
    const html = render(store, routes, req, context)

    if (context.action === 'REPLACE') {
      res.redirect(301, context.url)
    } else {
      if (context.NOT_FOUND) {
        res.status(404)
      }
      res.send(html)
    }
  })
})

const server = app.listen(3333)
