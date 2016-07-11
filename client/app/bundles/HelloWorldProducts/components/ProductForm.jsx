import React, { Component, PropTypes } from 'react';
//import { Link } from 'react-router';

export class ProductForm extends Component {
    //static contextTypes = {
    //    router: PropTypes.object
    //};
    //
    //componentWillMount() {
    //    //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
    //    //always reset that global state back to null when you REMOUNT
    //    this.props.resetMe();
    //}
    //
    //componentWillReceiveProps(nextProps) {
    //    if(nextProps.newPost.post && !nextProps.newPost.error) {
    //        this.context.router.push('/');
    //    }
    //}
    //
    //renderError(newPost) {
    //    if(newPost && newPost.error && newPost.error.message) {
    //        return (
    //            <div className="alert alert-danger">
    //                {newPost ? newPost.error.message : ''}
    //            </div>
    //        );
    //    } else {
    //        return <span></span>
    //    }
    //}

    render() {
        const { handleSubmit, submitting } = this.props;

        return (
            <div className="container">

                <form onSubmit={handleSubmit(this.props.createProduct.bind(this))}>


                    <button type="submit" className="btn btn-primary"  disabled={submitting} >Submit</button>

                </form>

            </div>

        );
    }
}

export default ProductForm;