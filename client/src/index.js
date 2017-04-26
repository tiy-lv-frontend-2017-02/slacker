import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './assets/styles/index.css'
import {Provider} from 'react-redux'
import store from './store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// for material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider><Provider store={store}><App /></Provider></MuiThemeProvider>,
  document.getElementById('root')
)
