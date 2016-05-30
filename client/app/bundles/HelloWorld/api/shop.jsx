
import metaTagsManager from './metaTagsManager.jsx';
import requestsManager from './requestsManager.jsx';

const TIMEOUT = 100

export default {
    getProducts(cb, timeout) {
        setTimeout(() => cb(
            //[
            //    {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
            //    {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
            //    {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
            //]
            requestsManager.fetchEntities().then(function(result){
                return result.data;
            })
        ), timeout || TIMEOUT)
    },


    //request.get('http://localhost:3000/products').then(
    //    function(result) {
    //        receiveProducts(result)
    //    }
    //);



    buyProducts(payload, cb, timeout) {
        setTimeout(() => cb(), timeout || TIMEOUT)
    }
}
