import React, { Component, PropTypes } from 'react'


class Square extends Component {

    render() {

        const { x, y } = this.props
        return (
            <div className="squareOuter col-sm-1">
                <div className="squareInner">
                    {x}, {y}
                </div>
            </div>
        )
    }
}

export default Square