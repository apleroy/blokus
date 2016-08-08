//import shop from '../api/shop.jsx'
import * as types from '../constants/ActionTypes.jsx'
import axios from 'axios';
import metaTagsManager from './metaTagsManager';
import requestManager from '../api/requestsManager.jsx';

import fetch from 'isomorphic-fetch'


function receiveMoves(moves) {
    console.log("receive moves: " + moves);
    return {
        type: types.RECEIVE_MOVES,
        moves: moves//.moves
    }
}

function requestMoves() {
    return {
        type: types.REQUEST_MOVES
    }
}

export function getAllMoves(game_id) {
    return dispatch => {
        console.log("in dispatch");
        dispatch(requestMoves())
        return fetch(game_id + '/board.json')
            .then(response => response.json())
            .then(moves => dispatch(receiveMoves(moves.moves)))

    }
}

function updateBoard(move) {
    console.log("Update move: " + move)
    return {
        type: types.UPDATE_BOARD,
        move: move
    }
}

export function createMove(move) {
    console.log("new move: " + move.toString());


    return dispatch => {

        console.log("in dispatch");
        axios.post('47/moves', {
                user_id: '2',
                squares: move
            })

            //.then(response => response.json())

            //.then(moves => dispatch(receiveMoves(moves)))
        .then(function (response) {
            console.log(response);
        //    receiveMoves(response.data)
            dispatch(receiveMoves(response.data))
        })
        //.then(response => response.json())


    }

}


//const API_URL = 'products.json';
//
//function receiveProducts(products) {
//    return {
//        type: types.RECEIVE_PRODUCTS,
//        products: products
//    }
//}
//
//function requestProducts() {
//    return {
//        type: types.REQUEST_PRODUCTS
//    }
//}
//
//export function getAllProducts() {
//    return dispatch => {
//            dispatch(requestProducts())
//            return fetch('products.json')
//            .then(response => response.json())
//            .then(products => dispatch(receiveProducts(products)))
//
//    }
//}
//
//function addToCartUnsafe(productId) {
//    return {
//        type: types.ADD_TO_CART,
//        productId
//    }
//}
//
//export function addToCart(productId) {
//    return (dispatch, getState) => {
//        if (getState().products.byId[productId].inventory > 0) {
//            dispatch(addToCartUnsafe(productId))
//        }
//    }
//}
//
//export function checkout(products) {
//    return (dispatch, getState) => {
//        const cart = getState().cart
//
//        dispatch({
//            type: types.CHECKOUT_REQUEST
//        })
//        shop.buyProducts(products, () => {
//            dispatch({
//                type: types.CHECKOUT_SUCCESS,
//                cart
//            })
//            // Replace the line above with line below to rollback on failure:
//            // dispatch({ type: types.CHECKOUT_FAILURE, cart })
//        })
//    }
//}
//
//// POSTS
//
//export function createProduct(props) {
//    //const request = axios.post(`${ROOT_URL}/posts`, props);
//    const request = axios({
//        method: 'post',
//        data: props,
//        url: `products`,
//        headers: {
//            'X-CSRF-Token': metaTagsManager.getCSRFToken()
//        },
//        //headers: {'Authorization': `Bearer ${tokenFromStorage}`}
//    });
//
//    return {
//        type: types.CREATE_PRODUCT,
//        payload: request
//    };
//}
//
//export function createProductSuccess(newPost) {
//    return {
//        type: types.CREATE_PRODUCT_SUCCESS,
//        payload: newProduct
//    };
//}
//
//export function createProductFailure(error) {
//    return {
//        type: types.CREATE_PRODUCT_FAILURE,
//        payload: error
//    };
//}
//
//export function resetNewPost() {
//    return {
//        type: RESET_NEW_POST
//    }
//};
