import React, { Component, PropTypes } from 'react'
import Square from './Square.jsx'

class Board extends Component {


    render() {

        const { squares, moves } = this.props;
        console.log(moves)


        for (var x = 0; x < squares.length; x++) {
            for (var y = 0; y < squares[0].length; y++) {
                if (squares[x][y] == "ANDY") {
                    squares[x][y] = <Square x={"AA"} y={"BB"}/>;
                }
                else {
                    squares[x][y] = <Square x={x} y={y}/>;
                }

            }
        }

        return (
            <div>
                <h1>
                    This is the board
                </h1>

             <div>{squares}</div>
            </div>


        )
    }
}

export default Board

