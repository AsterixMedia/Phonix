import { TOGGLE_XRAY } from '../actions'

const INITIAL_STATE = {
  xray: false
}

export default (state = INITIAL_STATE, {type}) => {
  switch (type) {
    case TOGGLE_XRAY:
      return { ...state, xray: !state.xray }
    default:
      return state
  }
}
