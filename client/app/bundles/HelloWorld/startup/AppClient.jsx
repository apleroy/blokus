import React from 'react';
import { Provider } from 'react-redux';

import createStore from '../store/index.jsx';
import App from '../containers/App.jsx';
import {  getAllMoves } from '../actions/index.jsx'


// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
export default (props) => {



    const store = createStore(props);

    console.log("props: " + props.game_id);
    //console.log("board: " + board);

    //var product = {title: "Andy100", price: 99.99, inventory: 50};

    //console.log("initial state:" + JSON.stringify(store.getState()));
    //store.dispatch(getBoard(props.game_id));
    //console.log("initial state after dispatch:" + store.getState());
    //store.dispatch(createProduct(product));


    //store.dispatch(buildBoard());
    store.dispatch(getAllMoves(props.game_id));


    const reactComponent = (
    <Provider store={store}>
      <App />
    </Provider>
    );
  return reactComponent;
};


