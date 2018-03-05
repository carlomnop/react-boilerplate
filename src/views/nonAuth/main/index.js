import React, { Component } from 'react'
import { RxHR } from '@akanass/rx-http-request'

import LoginInteractor from '../../../domain/user/interactor/LoginInteractor'
import UserService from '../../../data/user/service/UserService'
import LoginParam from '../../../domain/user/param/LoginParam'

class Main extends Component {

  constructor(props) {
    super(props)

    this.loginInteractor = new LoginInteractor(
      new UserService(RxHR.defaults({
        baseUrl: 'https://api-uat.unionbankph.com/ubp/uat/hr/benefits/v1/',
        headers: {
          'X-IBM-Client-Id': '5a52c99a-1303-42f5-9871-9e3844f1fd9f',
          'X-IBM-Client-Secret': 'sJ2sU2mJ4eE2oI6wM7rY3mG6jT1mS2eT1wY3pR8qP7jL2uC5iT',
        }
      })
    ))
  }

  componentDidMount() {
    this.loginInteractor
      .execute(LoginParam('1700387', 'a@17003877'))
      .subscribe(
        data => {
          console.log(data)
        },
        error => {
          console.log(error)
        }
      )
  }

  render () {
    return (
      <div>
        Hello world
      </div>
    )
  }
}

export default Main
