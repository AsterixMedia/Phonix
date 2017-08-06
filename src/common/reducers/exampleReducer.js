import { ADD, SUBSTRACT } from '../actions/types'

const INITIAL_STATE = {
  score: 0
}

export default (state = INITIAL_STATE, {type}) => {
  switch (type) {
    case ADD:
      return { score: state.score + 1 }
    case SUBSTRACT:
      return { score: state.score - 1 }
    default:
      return state
  }
}
