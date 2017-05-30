import React from 'react'
import reducers from './reducers/Index'
import { createStore, applyMiddleware } from 'redux'
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import Root from './containers/Root'
import {getUser} from './actions/UserActions'


let createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)

let store = createStoreWithMiddleware(reducers)

let rootElement = document.getElementById('root')

store.dispatch(getUser());

console.log(store.getState());

render(
  <Root store={store} />,
   rootElement
)