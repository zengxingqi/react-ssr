import React, { Component } from 'react'

export default (DecorateComponent, style) => {
  return class NewComponent extends Component {
    componentWillMount() {
      if (this.props.staticContext) {
        this.props.staticContext.css.push(style._getCss())
      }
    }
    render() {
      return <DecorateComponent { ...this.props} />
    }
  }
}
