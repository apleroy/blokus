//import shop from '../api/shop.jsx'
import * as types from '../constants/ActionTypes.jsx'
import axios from 'axios';
import metaTagsManager from './metaTagsManager';
import requestManager from '../api/requestsManager.jsx';

import fetch from 'isomorphic-fetch'

//function requestBoard(game_id) {
//    return {
//        type: types.REQUEST_BOARD,
//        game_id: game_id
//    }
//}
//
//function receiveBoard(board) {
//    return {
//        type: types.RECEIVE_BOARD,
//        board: board
//    }
//}
//
//export function getBoard(game_id) {
//    return dispatch => {
//        dispatch(requestBoard(game_id))
//        return fetch (game_id)
//        .then(response => response.json())
//        .then(board => dispatch(receiveBoard(board)))
//    }
//}

function receiveMoves(moves) {
    return {
        type: types.RECEIVE_MOVES,
        moves: moves.moves
    }
}

function requestMoves() {
    return {
        type: types.REQUEST_MOVES
    }
}

export function getAllMoves(game_id) {
    return dispatch => {
        dispatch(requestMoves())
        return fetch(game_id + '/board.json')
            .then(response => response.json())
            .then(moves => dispatch(receiveMoves(moves)))

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
