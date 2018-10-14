import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { Helmet } from 'react-helmet'

export const render = (store, routes, req, context) => {
  const content = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(routes)}</div>
      </StaticRouter>
    </Provider>))

  const helmets = Helmet.renderStatic()
  const styleStr = context.css.length > 0 ? context.css.join('\n') : ''

  return `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      ${helmets.title.toString()}
      ${helmets.meta.toString()}
      <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
      <meta name="renderer" content="webkit">
      <style>${styleStr}</style>
    </head>
    <body>
      <div id='root'>${content}</div>
      <script>
        window.context = { state: ${JSON.stringify(store.getState())} }
      </script>
      <script src='/index.js'></script>
    </body>
  </html>`
}
