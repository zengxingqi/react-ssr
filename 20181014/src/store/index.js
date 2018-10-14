import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { reducer as HeadReducer } from '../components/Header/store/'
import { reducer as HomeReducer } from '../containers/Home/store/'
import { reducer as TranslationReducer } from '../containers/Translation/store/'

import clientRequest from '../client/request'
import serverRequest from '../server/requset'

const reducer = combineReducers({
  home: HomeReducer,
  head: HeadReducer,
  translation: TranslationReducer
})

export const getStore = (req) => createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverRequest(req))))

export const getClientStore = () => {
  const defaultState = window.context.state
  return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientRequest)))
}
