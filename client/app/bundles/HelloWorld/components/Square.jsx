import React, { Component, PropTypes } from 'react'
import createMove from '../actions/index.jsx'


class Square extends Component {

    clickedSquare() {
        var moveArray = [];
        alert(this.props.x + " " + this.props.y);
        moveArray.push(this.props.x + "_" + this.props.y)
        alert(moveArray.toString)
        createMove(moveArray);
    }

    render() {

        const { x, y } = this.props
        return (
            <div className="squareOuter col-sm-1">
                <div className="squareInner" onClick={this.clickedSquare.bind(this)}>
                    {x}, {y}
                </div>
            </div>
        )
    }
}

export default Square