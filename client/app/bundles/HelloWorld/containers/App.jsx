import React, { Component } from 'react'
import BoardContainer from './BoardContainer.jsx'

export default class App extends Component {
    render() {
        return (
            <div>
                <h2>Board</h2>
                <hr/>
                <BoardContainer />

            </div>
        )
    }
}
