import { compose, createStore, applyMiddleware, combineReducers } from 'redux';

// See
// https://github.com/gaearon/redux-thunk and http://redux.js.org/docs/advanced/AsyncActions.html
// This is not actually used for this simple example, but you'd probably want to use this
// once your app has asynchronous actions.
import thunkMiddleware from 'redux-thunk';

// This provides an example of logging redux actions to the console.
// You'd want to disable this for production.
import loggerMiddleware from 'lib/middlewares/loggerMiddleware';

import shoppingCartApp from '../reducers/index.jsx';
//import { initialStates } from '../reducers';
import { getAllProducts } from '../actions/index.jsx'


export default props => {
  // This is how we get initial props Rails into redux.
  //const { name, message } = props;
  //const { $$State } = initialStates;

  // Redux expects to initialize the store using an Object, not an Immutable.Map
  //const initialState = {
   // $$Store: $$State
  //};

  //const reducer = combineReducers(reducers);

  const composedStore = compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );

  //const storeCreator = composedStore(createStore);

  //const store = storeCreator(reducer, initialState);

  //return store;

  const store = createStore(
    shoppingCartApp,
    composedStore
  );

  store.dispatch(getAllProducts());



  return store;
};
//import 'babel-polyfill'
//import React from 'react'
//import { render } from 'react-dom'
//import { createStore, applyMiddleware } from 'redux'
//import { Provider } from 'react-redux'
//import logger from 'redux-logger'
//import thunk from 'redux-thunk'
//import reducer from '../reducers'
//import { getAllProducts } from '../actions'
//import App from '../containers/App'
//
////const middleware = process.env.NODE_ENV === 'production' ?
////    [ thunk ] :
////    [ thunk, logger() ]
//
//const store = createStore(
//    reducer,
//    applyMiddleware(...middleware)
//)
//
//store.dispatch(getAllProducts())
//
//return store;
//render(
//    <Provider store={store}>
//        <App />
//    </Provider>,
//    document.getElementById('root')
//)
