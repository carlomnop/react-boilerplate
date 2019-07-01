import React, { Component } from 'react'

import Container from '../di/Container'
import AppModule from '../di/AppModule'

export const ConnectView = (View, Presenter) => {
  const presenter = new Presenter(AppModule(new Container()))

  return <View presenter = { presenter } { ...this.props }
}