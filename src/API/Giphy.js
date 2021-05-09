// Import API Key

import APIKey from './config';

// Import Axios

import axios from 'axios';

// Export A New Instance Of Axios

export default axios.create({

    baseURL: 'https://api.giphy.com/v1/gifs/',
    params: {

        api_key: APIKey,
        limit: 24

    }

});