import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import example from './exampleReducer'
import ui from './UiReducer'

export default combineReducers({
  example,
  ui,
  router: routerReducer
})
