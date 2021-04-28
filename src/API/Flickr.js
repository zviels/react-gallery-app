// Import API Key

import APIKey from './config';

// Import Axios

import axios from 'axios';

// Export A New Instance Of Axios

export default axios.create({

    baseURL: 'https://www.flickr.com/services/rest/',
    params: {

        method: 'flickr.photos.search',
        api_key: APIKey,
        per_page: 24,
        format: 'json',
        nojsoncallback: 1

    }

});