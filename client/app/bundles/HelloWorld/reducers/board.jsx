import { combineReducers } from 'redux'
import { RECEIVE_BOARD } from '../constants/ActionTypes.jsx'

//function board(state, action) {
//    switch (action.type) {
//
//        default:
//            return state
//    }
//}

function byId(state = {}, action) {
    switch (action.type) {
        case RECEIVE_BOARD:


            return Object.assign({},
                state,
                action.board, {})

        default:
            return state
    }
}

//function visibleIds(state = [], action) {
//    switch (action.type) {
//        case RECEIVE_PRODUCTS:
//            return action.products.map(product => product.id)
//        default:
//            return state
//    }
//}

export default combineReducers({
    byId

})

export function getBoard(state, id) {
    console.log("state:" + state);
    console.log("id:" + id);
    return state.byId[id]
}

//export function getVisibleProducts(state) {
//    return state.visibleIds.map(id => getProduct(state, id))
//}
