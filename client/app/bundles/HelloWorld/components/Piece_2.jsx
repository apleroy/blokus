import React, { Component, PropTypes } from 'react'
import Square from './Square.jsx'


class Piece_2 extends Component {


    render() {

        const { dispatch } = this.props;


        return (
            <div>
                <h1>
                    This is Piece_2
                </h1>

                <Square x={3} y={3} dispatch={dispatch}/>
                <Square x={4} y={4} dispatch={dispatch}/>
            </div>


        )
    }
}

export default Piece_2