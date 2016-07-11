import { combineReducers } from 'redux'
import { RECEIVE_MOVES } from '../constants/ActionTypes.jsx'

function moves(state, action) {
    switch (action.type) {

        default:
            return state
    }
}

function byId(state = {}, action) {
    switch (action.type) {
        case RECEIVE_MOVES:
            console.log(action.moves);

            return Object.assign({},
                state,
                action.moves.reduce((obj, move) => {
                    obj[move.id] = move
                    return obj
                }, {})
            )
        default:
            const { moveId } = action
            if (moveId) {
                return Object.assign({}, state, {
                    [moveId]: moves(state[moveId], action)
                })
            }
            return state
    }
}

function visibleIds(state = [], action) {
    switch (action.type) {
        case RECEIVE_MOVES:
            return action.moves.map(move => move.id)
        default:
            return state
    }
}

export default combineReducers({
    byId,
    visibleIds
})

export function getMove(state, id) {
    return state.byId[id]
}

export function getVisibleMoves(state) {
    return state.visibleIds.map(id => getMove(state, id))
}
