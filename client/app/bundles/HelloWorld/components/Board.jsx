import React, { Component, PropTypes } from 'react'

export default class Board extends Component {
    render() {
        const { game_id, pieces, title } = this.props

        return <div>APL -  {game_id} -{title} - {pieces} </div>
    }
}

Board.propTypes = {
    game_id: PropTypes.number,
    title: PropTypes.string,
    pieces: PropTypes.string
}