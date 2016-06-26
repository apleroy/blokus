import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ProductForm from '../components/ProductForm.jsx';
import {createProduct, createProductSuccess, createProductFailure} from '../actions/index.jsx';
import {reduxForm} from 'redux-form';

class ProductFormContainer extends Component {

    render() {
        //const { products, total } = this.props

        return (
            <ProductForm />
        )
    }

}

//const mapDispatchToProps = (dispatch) => {
//    return {
//        createProduct: createNewProduct
//
//    }
//}
//
//
function mapStateToProps(state) {
    return {
        newProduct: state.products.newProduct
    };
}


// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
//export default reduxForm({
//    form: 'ProductForm',
//    fields: ['title', 'categories', 'content'],
//    asyncBlurFields: ['title']
//}, mapStateToProps, mapDispatchToProps)(ProductForm);

export default connect (
    mapStateToProps

)(ProductFormContainer)