// This file is our manifest of all reducers for the app.
// See also /client/app/bundles/HelloWorld/store/helloWorldStore.jsx
// A real world app will likely have many reducers and it helps to organize them in one file.
//import helloWorldReducer from './helloWorldReducer';

import { combineReducers } from 'redux'
//import { default as cart, getQuantity, getAddedIds } from './cart.jsx'
import { default as board, getBoard } from './board.jsx'


//export function getTotal(state) {
//  return getAddedIds(state.cart).reduce((total, id) =>
//      total + getProduct(state.products, id).price * getQuantity(state.cart, id),
//      0
//  ).toFixed(2)
//}
//
//export function getCartProducts(state) {
//  return getAddedIds(state.cart).map(id => Object.assign(
//      {},
//      getProduct(state.products, id),
//      {
//        quantity: getQuantity(state.cart, id)
//      }
//  ))
//}


const boardApp = combineReducers({
  board
})

export default boardApp

