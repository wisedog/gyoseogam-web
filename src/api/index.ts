import axios from 'axios';

import AppConfig from '@/config';

/** axios wrapper */
const API = axios.create({
    baseURL: AppConfig.ApiUrl,
    headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept',
        'Content-type': 'application/json',
    },
});

export default API;
