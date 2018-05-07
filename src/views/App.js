import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import Presenter from './AppPresenter'

import ConnectView from '../utils/ConnectView'
import BaseMVPView from './common/base/BaseMVPView'

class App extends BaseMVPView {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        Hello World
      </div>
    )
  }
}

export default withRouter(ConnectView(App, Presenter))
