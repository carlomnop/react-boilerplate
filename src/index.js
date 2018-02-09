import React from 'react'
import ReactDOM from 'react-dom'

//material-ui theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

//Routers
import { Router, Route, browserHistory } from 'react-router'

//Routes
import Main from './views/nonAuth/main'

ReactDOM.render(
  <MuiThemeProvider muiTheme = { getMuiTheme() }>
    <Router history={browserHistory}>
      <Route path = "/" component = {Main} />
    </Router>
  </MuiThemeProvider>, document.getElementById('root'))
