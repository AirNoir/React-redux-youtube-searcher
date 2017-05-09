import React,{Component} from 'react';
import ReactDom from 'react-dom';
import App from 'containers/App'
import './assets/main.sass';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers/index'
import ReduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
let store = createStoreWithMiddleware(reducers);

ReactDom.render(
  <Provider store={store}>
    <App/>
  </Provider>
  ,
  document.getElementById('root')
)
