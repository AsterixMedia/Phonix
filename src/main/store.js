import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {
  forwardToRenderer,
  triggerAlias
} from 'electron-redux'

import reducers from '../common/reducers'

const prodMiddlewares = [
  triggerAlias,
  thunk,
  forwardToRenderer
]

const devMiddleWares = [
  require('redux-immutable-state-invariant').default(),
  require('redux-node-logger')()
]

const middlewares = process.env.NODE_ENV !== 'production' ? [
  ...devMiddleWares,
  ...prodMiddlewares
] : [
  ...prodMiddlewares
]

export default (state = {}) => createStore(
  reducers,
  state,
  applyMiddleware(...middlewares)
)
