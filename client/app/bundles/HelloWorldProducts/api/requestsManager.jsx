import request from 'axios';
import metaTagsManager from './metaTagsManager';

const API_URL = 'products.json';

export default {

  /**
   * Retrieve list of entities from server using AJAX call.
   *
   * @returns {Promise} - Result of ajax call.
   */
  fetchEntities() {
    return request.get(API_URL)
        .then(function(response) {
          receiveProducts(response);
    });
    //return request({
    //  method: 'GET',
    //  url: API_URL,
    //  responseType: 'json',
    //});

  },

  /**
   * Submit new entity to server using AJAX call.
   *
   * @param {Object} entity - Request body to post.
   * @returns {Promise} - Result of ajax call.
   */
  submitEntity(entity) {
    return request({
      method: 'POST',
      url: API_URL,
      responseType: 'json',
      headers: {
        'X-CSRF-Token': metaTagsManager.getCSRFToken(),
      },
      data: entity,
    });
  }

};
