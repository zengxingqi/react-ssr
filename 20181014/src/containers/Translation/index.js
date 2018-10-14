import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { actions } from './store/'
import style from './style.css'
import comStyle from '../../../src/comStyle'

class Translation extends Component {
  getList() {
    const { list } = this.props
    return list.map( item => <div className={style.item} key={item.id}>{item.title}</div>)
  }
  render() {
    const { login } = this.props
    return (login ? (
      <Fragment>
        <Helmet>
          <title>这是SRR翻译页面 - 丰富多彩的内容</title>
          <meta name="description" content="这是SRR翻译页面 - 丰富多彩的内容" />
        </Helmet>
        <div className={style.container}>
          {this.getList()}
        </div>
      </Fragment>) :
      <Redirect to='/' />
    )
  }
  componentDidMount() {
    if (!this.props.list.length) {
      this.props.getTranslationList()
    }
  }
}

const mapState = state => ({
  list: state.translation.translationList,
  login: state.head.login
})

const mapDispatch = dispatch => ({
  getTranslationList() {
    dispatch(actions.getTranslationList())
  }
})

const exportTranslation = connect(mapState, mapDispatch)(comStyle(Translation, style))
exportTranslation.loadData = (store) => {
  return store.dispatch(actions.getTranslationList())
}

export default exportTranslation
