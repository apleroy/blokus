import React, { Component } from 'react'
import MovesContainer from './MovesContainer.jsx'
import Board from '../components/Board.jsx'

export default class App extends Component {
    render() {
        return (
            <div>
                <h2>Board</h2>
                <hr/>
                <MovesContainer />
                <Board />

            </div>
        )
    }
}
