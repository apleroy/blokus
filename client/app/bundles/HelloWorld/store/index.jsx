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


export default props => {

  const composedStore = compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );

  const store = createStore(
    shoppingCartApp,
    composedStore
  );


  return store;
};
