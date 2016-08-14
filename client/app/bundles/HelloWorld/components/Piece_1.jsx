import React, { Component, PropTypes } from 'react'
import Square from './Square.jsx'
import { ItemTypes } from '../constants/ActionTypes';
import { DragSource } from 'react-dnd';


const knightSource = {
    beginDrag() {
        return {};
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    };
}


class Piece_1 extends Component {

    static propTypes = {
        connectDragSource: PropTypes.func.isRequired,
        connectDragPreview: PropTypes.func.isRequired,
        isDragging: PropTypes.bool.isRequired
    };

    render() {

        const { matrix_size, default_coordinates, dispatch, connectDragSource, isDragging } = this.props;


        function clickedPiece() {
            alert(this.props.matrix_size);
        }

        return connectDragSource(
        //return (
            <div>
                <h1>
                    This is Piece_1 - matrix size= {matrix_size}<br/>
                    default_coordinates= {default_coordinates}
                </h1>
                <span onClick={clickedPiece.bind(this)}>Click here</span>

                <Square x={1} y={1} dispatch={dispatch}/>
                <Square x={2} y={2} dispatch={dispatch}/>
            </div>


        )
    }
}

export default DragSource(ItemTypes.PIECE, knightSource, collect)(Piece_1)