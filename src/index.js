import React from 'react'
import { render } from 'react-dom'
import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

import { Provider } from 'react-redux'
import { store } from './store'


import App from './app'

render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'))
