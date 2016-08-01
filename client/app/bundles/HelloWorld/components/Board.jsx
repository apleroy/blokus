import React, { Component, PropTypes } from 'react'
import Square from './Square.jsx'

class Board extends Component {


    render() {
        const { moves } = this.props;

        var X_DIM = 20;
        var Y_DIM = 20;

        var board = new Array(X_DIM);
        for (var i = 0; i < X_DIM; i++) {
            board[i] = new Array(Y_DIM);
        }

        for (var x = 0; x < X_DIM; x++) {
            for (var y = 0; y < Y_DIM; y++) {
                board[x][y] = <Square x={x} y={y}/>;
            }
        }
        return (
            <div>
                <h1>
                    This is the board - moves {moves}
                </h1>

                <div>{board}</div>
            </div>


        )
    }
}

export default Board

