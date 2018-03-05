import React, { Component } from 'react'
import ConnectComponent from '../../utils/ConnectComponent'

import LoginPresenter from './presenter/LoginPresenter'

import LoginParam from '../../domain/user/param/LoginParam'

import BaseView from '../common/base/BaseView'

class LoginView extends BaseView {

  constructor(props) {
    super(props)

    this.presenter = props.presenter
    this.presenter.setView(this)
  }

  componentDidMount() {
    this.presenter.login(LoginParam('1700387', 'a@17003877'))
  }

  render () {
    return (
      <div>
        Hello world
      </div>
    )
  }
}

export default ConnectComponent(LoginView, LoginPresenter)
