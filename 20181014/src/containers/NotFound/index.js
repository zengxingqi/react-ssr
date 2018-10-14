import React, { Component } from 'react'

class NotFound extends Component {
  componentWillMount() {
    const { staticContext } = this.props
    staticContext && (staticContext.NOT_FOUND = true)
  }
  render() {
    return (<div>404, Page Not Found</div>)
  }
}

export default NotFound
