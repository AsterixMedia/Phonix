import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import routerMiddleware from 'react-router-redux/middleware'
import createHistory from 'history/createHashHistory'

import reducers from '../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const history = createHistory()
const middlewares = [thunk, routerMiddleware(history)]

const configureStore = preloadedState => {
  const store = createStore(
    reducers,
    preloadedState,
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  )

  return store
}

export {
  configureStore,
  history
}
