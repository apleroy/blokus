import ProductForm from '../components/ProductForm.jsx';
import {createProduct, createProductSuccess, createProductFailure} from '../actions/index.jsx';
import {reduxForm} from 'redux-form';


//For any field errors upon submission (i.e. not instant check)
const createNewProduct = (values, dispatch) => {

    return new Promise((resolve, reject) => {
        dispatch(createProduct(values, token))
            .then((response) => {
                let data = response.payload.data;
                //if any one of these exist, then there is a field error
                if (response.payload.status != 200) {
                    //let other components know of error by updating the redux` state
                    dispatch(createProductFailure(response.payload));
                    reject(data); //this is for redux-form itself
                } else {
                    //let other components know that everything is fine by updating the redux` state
                    dispatch(createProductSuccess(response.payload));
                    resolve(); //this is for redux-form itself
                }
            });

    });
};



const mapDispatchToProps = (dispatch) => {
    return {
        createProduct: createNewProduct

    }
}


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

export default (
    mapStateToProps, mapDispatchToProps

)(ProductForm)