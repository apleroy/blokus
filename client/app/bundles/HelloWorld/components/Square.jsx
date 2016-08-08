import React, { Component, PropTypes } from 'react'
import * as actions from '../actions/index.jsx'
import { connect} from 'react-redux'

//let createHandlers = function(dispatch) {
//    let onClick = function(node, data) {
//        dispatch(actions.createMove(data))
//    };
//
//    return {
//        onClick,
//        // other handlers
//    };
//}


class Square extends Component {
    //constructor(props) {
    //    super(props)
    //    this.handlers = createHandlers(this.props.dispatch);
    //    console.log("handlers: " + this.handlers)
    //}



    render() {
        const { x, y, dispatch} = this.props

        function clickedSquare() {
            var moveArray = [];
            alert(this.props.x + " " + this.props.y);
            moveArray.push(this.props.x + "_" + this.props.y)
            alert(moveArray.toString)
            dispatch(actions.createMove(moveArray));
            //getAllMoves();
        }


        return (
            <div className="squareOuter col-sm-1">
                <div className="squareInner" onClick={clickedSquare.bind(this)}>
                    {x}, {y}
                </div>
            </div>
        )
    }


}

//function mapStateToProps(state) {
//    console.log(state); // state
//
//}

//function mapDispatchToProps(dispatch) {
//    return {
//        onClick: () => dispatch(clickedSquare())
//    };
//}

export default connect(null, actions)(Square)