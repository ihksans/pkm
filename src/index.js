import React from 'react'
import './index.css'

import ReactDOM from 'react-dom'
import Application from './Application'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { addTokenByID } from './actions'
import { persistor, store } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider as AuthContext } from './context/AuthContext'
// const store = createStore(rootReducer);
// console.log('store.getState()', store.getState());
//  store.subscribe(()=>console.log('store', store.getState()));
// store.dispatch(addTokenByID('xxxxxx'));

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AuthContext>
        <Application />
      </AuthContext>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
)
