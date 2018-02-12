import React from 'react'
import ReactDOM from 'react-dom'

/* redux */
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducer from './reducers';

/* material-ui theme */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

/* Routers */
import { Router, Route, browserHistory } from 'react-router'

/* Routes */
import Main from './views/nonAuth/main'

store = createStore(Reducer); //initialize store

ReactDOM.render(
  <MuiThemeProvider muiTheme = { getMuiTheme() }>
    <Provider store={this.store}>
      <Router history={browserHistory}>
        <Route path = "/" component = {Main} />
      </Router>
    </Provider>
  </MuiThemeProvider>, document.getElementById('root'))
