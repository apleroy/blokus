import React, { Component } from 'react'
import BoardContainer from './BoardContainer.jsx'
import Board from '../components/Board.jsx'
import Piece_1 from '../components/Piece_1.jsx'
import Piece_2 from '../components/Piece_2.jsx'
import Game from '../containers/Game.jsx'

export default class App extends Component {
    render() {
        return (
            <div>
                <h2>Board</h2>
                <hr/>
                <Game>
                    <Piece_1 matrix_size={2} default_coordinates={ ['0_0', '1_0'] } />
                    <Piece_2 />
                    <BoardContainer />
                </Game>
            </div>
        )
    }
}
