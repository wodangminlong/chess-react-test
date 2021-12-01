// eslint-disable-next-line no-unused-vars
import React from "react";
import axios from 'axios';
import querystring from 'querystring';
import Base64 from 'base-64'

// create an axios instance
let service = axios.create({
    baseURL: 'http://localhost:8080',
    // headers: {
    //     'Content-Type': 'application/json'
    // },
    transformRequest: [function(data) {
        return querystring.stringify(data)
    }],
    timeout: 30000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent
        // config.headers['Content-Type'] = 'application/json;charset=UTF-8'
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
        const res = Base64.decode(response.data)
        console.info(res)
        // if the custom code is not 0, it is judged as an error.
        if (res.code !== 0) {
            return Promise.reject(res.msg || 'Error')
        } else {
            return res
        }
    },
    error => {
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)

export default service

