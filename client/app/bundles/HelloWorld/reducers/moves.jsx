import { combineReducers } from 'redux'
import { RECEIVE_MOVES, UPDATE_BOARD } from '../constants/ActionTypes.jsx'

var X_DIM = 20;
var Y_DIM = 20;

var squares = new Array(X_DIM);
for (var i = 0; i < X_DIM; i++) {
    squares[i] = new Array(Y_DIM);
}

for (var x = 0; x < X_DIM; x++) {
    for (var y = 0; y < Y_DIM; y++) {
        squares[x][y] = "E";
    }
}

const initialState = {
    moves: '',
    squares: squares
}


export default function reducer (state = initialState, action) {
    console.log("in reducer");
    switch (action.type) {
        case RECEIVE_MOVES:

            console.log("receive_moves:" + action.type)

            for(var i = 0; i < action.moves.length; i++) {
                var move = action.moves[i];
                console.log(move.squares);
                console.log(move.squares[0]);
                var user_id = move.user_id;
                var piece_id = move.piece_id;

                for (var s = 0; s < move.squares.length; s++) {
                    var square = move.squares[s];
                    var x = square.split('_')[0];
                    var y = square.split('_')[1];
                    console.log("X: " + x + " Y: " + y);
                    squares[x][y] = "ANDY";
                }
            }

            return {
                ...initialState,
                moves: action.moves,
                squares: squares
            }

        case UPDATE_BOARD:
            console.log("reducer for update board")

            return {
                ...initialState,
                moves: moves.push(action.move)
            }

        default:
            return state
    }
}

