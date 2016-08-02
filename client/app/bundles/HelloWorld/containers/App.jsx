import React, { Component } from 'react'
import BoardContainer from './BoardContainer.jsx'
import Board from '../components/Board.jsx'
import Piece_1 from '../components/Piece_1.jsx'

export default class App extends Component {
    render() {
        return (
            <div>
                <h2>Board</h2>
                <hr/>
                <Piece_1 />
                <BoardContainer />

            </div>
        )
    }
}
