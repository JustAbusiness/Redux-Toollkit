import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  // {store} ở bên trong thư mục store.js , no là 1 const
  <Provider store={store}>             
    <PersistGate loading={null} persistor={persistor}>
        <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
