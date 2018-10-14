import * as CONSTANTS from './constants'

const changeLogin = (value) => ({
  type: CONSTANTS.CHANGE_LOGIN,
  value
})

export const login = () => {
  return (dispatch, getState, request) => {
    return request.get('/api/login.json')
      .then(res => {
        dispatch(changeLogin(true))
      })
  }
}

export const logout = () => {
  return (dispatch, getState, request) => {
    return request.get('/api/logout.json')
      .then(res => {
        dispatch(changeLogin(false))
      })
  }
}

export const getHeaderInfo = () => {
  return (dispatch, getState, request) => {
    return request.get('/api/isLogin.json')
      .then(res => {
        dispatch(changeLogin(res.data.data.login))
      })
  }
}
