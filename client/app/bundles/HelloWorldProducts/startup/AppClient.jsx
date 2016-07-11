import React from 'react';
import { Provider } from 'react-redux';

import createStore from '../store/index.jsx';
import App from '../containers/App.jsx';
import { getAllProducts } from '../actions/index.jsx'
import { createProduct } from '../actions/index.jsx'

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
export default (props) => {
    const store = createStore(props);

    var product = {title: "Andy100", price: 99.99, inventory: 50};

    console.log("store before dispatch:" + store);
    store.dispatch(getAllProducts());
    console.log("store after dispatch: " + store);
    //store.dispatch(createProduct(product));

    const reactComponent = (
    <Provider store={store}>
      <App />
    </Provider>
    );
  return reactComponent;
};


