import * as CONSTANTS from './constants'

const changeList = (list) => ({
  type: CONSTANTS.CHANGE_LIST,
  list
})

export const getHomeList = () => {
  return (dispatch, getState, request) => {
    return request.get('/api/news.json')
      .then(res => {
        const list = res.data.data
        dispatch(changeList(list))
      })
  }
}
