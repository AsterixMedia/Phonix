import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import routerMiddleware from 'react-router-redux/middleware'
import createHistory from 'history/createHashHistory'

import reducers from '../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const history = createHistory()

const prodMiddlewares = [
  thunk,
  routerMiddleware(history)
]

const devMiddleWares = [
  require('redux-immutable-state-invariant').default(),
  require('redux-logger').default
]

const middlewares = process.env.NODE_ENV !== 'production' ? [
  ...prodMiddlewares,
  ...devMiddleWares
] : [
  ...prodMiddlewares
]

const configureStore = preloadedState => createStore(
  reducers,
  preloadedState,
  composeEnhancers(
    applyMiddleware(...middlewares)
  )
)

export {
  configureStore,
  history
}
