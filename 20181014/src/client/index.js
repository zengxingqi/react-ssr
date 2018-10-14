import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'

import routes from '../routes'
import { getClientStore } from '../store'

const store = getClientStore()

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(routes)}</div>
    </BrowserRouter>
  </Provider>
)

ReactDOM.hydrate(<App />,document.getElementById('root'))
