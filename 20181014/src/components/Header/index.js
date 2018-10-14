import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions } from './store/'
import style from './style.css'
import comStyle from '../../../src/comStyle'

class Header extends Component {
  render() {
    const { login, handleLogin, handleLogout } = this.props
    return (
      <div className={style.container}>
        <Link to='/' className={style.item}>首页</Link>
        {
          login ? <Fragment>
            <Link to='/translation' className={style.item}>翻译列表</Link>
            <div onClick={handleLogout} className={style.item}>退出</div>
          </Fragment> : <div onClick={handleLogin} className={style.item}>登陆</div>
        }
      </div>
    )
  }
}

const mapState = (state) => ({
  login: state.head.login
})

const mapDispatch = (dispatch) => ({
  handleLogin() {
    dispatch(actions.login())
  },
  handleLogout() {
    dispatch(actions.logout())
  }
})

const exportHead = connect(mapState, mapDispatch)(comStyle(Header, style))

export default exportHead
