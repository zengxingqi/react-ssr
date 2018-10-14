import * as CONSTANTS from './constants'

const defaultState = {
  login: true
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case CONSTANTS.CHANGE_LOGIN:
      return {
        ...state,
        login: action.value
      }
    default:
      return state
  }
}
