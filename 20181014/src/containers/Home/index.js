import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import { actions } from './store/'
import style from './style.css'
import comStyle from '../../../src/comStyle'

class Home extends Component {

  getList() {
    const { list } = this.props
    return list.map( item => <div className={style.item} key={item.id}>{item.title}</div>)
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>这是SRR新闻资讯页面 - 丰富多彩的内容</title>
          <meta name="description" content="这是SRR新闻资讯页面 - 丰富多彩的内容" />
        </Helmet>
        <div className={style.container}>
          {this.getList()}
        </div>
      </Fragment>
    )
  }
  componentDidMount() {
    if (!this.props.list.length) {
      this.props.getHomeList()
    }
  }
}

const mapState = state => ({
  list: state.home.newsList
})

const mapDispatch = dispatch => ({
  getHomeList() {
    dispatch(actions.getHomeList())
  }
})

const exprotHome = connect(mapState, mapDispatch)(comStyle(Home, style))

exprotHome.loadData = (store) => {
  //  这个函数，负责在服务端渲染之前，把这个路由需要的熟路提前加载好
  return store.dispatch(actions.getHomeList())
}

export default exprotHome
