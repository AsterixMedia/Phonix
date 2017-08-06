import { UI_TOGGLE_XRAY } from '../actions/index'

const INITIAL_STATE = {
  xray: false
}

export default (state = INITIAL_STATE, {type}) => {
  switch (type) {
    case UI_TOGGLE_XRAY:
      return { ...state, xray: !state.xray }
    default:
      return state
  }
}
