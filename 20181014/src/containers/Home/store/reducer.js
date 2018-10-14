import * as CONSTANTS from './constants'

const defaultState = {
  newsList: []
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case CONSTANTS.CHANGE_LIST:
      return {
        ...state,
        newsList: action.list
      }
    default:
      return state
  }
}
