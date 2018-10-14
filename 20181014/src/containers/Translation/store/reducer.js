import * as CONSTANTS from './constants'

const defaultState = {
  translationList: []
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case CONSTANTS.CHANGE_LIST:
      return {
        ...state,
        translationList: action.list
      }
    default:
      return state
  }
}
