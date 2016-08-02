// This file is our manifest of all reducers for the app.
// See also /client/app/bundles/HelloWorld/store/helloWorldStore.jsx
// A real world app will likely have many reducers and it helps to organize them in one file.
//import helloWorldReducer from './helloWorldReducer';

import { combineReducers } from 'redux'
import { default as cart, getQuantity, getAddedIds } from './cart.jsx'
import moves from './moves.jsx'





const BlokusApp = combineReducers({
  moves
})

export default BlokusApp

