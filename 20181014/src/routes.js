// import React from 'react'
// import { Route } from 'react-router-dom'
import Home from './containers/Home'
import Login from './containers/Login'
import App from './App'
import NotFound from './containers/NotFound'
import Translation from './containers/Translation'

export default [
  {
    path: '/',
    component: App,
    key: 'App',
    loadData: App.loadData,
    routes: [{
      path: '/',
      component: Home,
      exact: true,
      loadData: Home.loadData,
      key: 'home'
    },
    {
      path: '/translation',
      component: Translation,
      loadData: Translation.loadData,
      exact: true,
      key: 'translation'
    },
    {
      path: '/login',
      component: Login,
      exact: true,
      key: 'login'
    },
    {
      component: NotFound
    }]
  }
]
