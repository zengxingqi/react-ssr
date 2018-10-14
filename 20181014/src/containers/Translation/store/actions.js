import * as CONSTANTS from './constants'

const changeList = (list) => ({
  type: CONSTANTS.CHANGE_LIST,
  list
})

export const getTranslationList = () => {
  return (dispatch, getState, request) => {
    return request.get('/api/translations.json')
      .then(res => {
        if (res.data.success) {
          const list = res.data.data
          dispatch(changeList(list))
        } else {
          const list = []
          dispatch(changeList(list))
        }
      })
  }
}
