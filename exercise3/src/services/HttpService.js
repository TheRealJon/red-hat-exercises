import axios from 'axios';

export default class HttpService{
    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }

    get(url){
        return axios.get(url);
    }
}
