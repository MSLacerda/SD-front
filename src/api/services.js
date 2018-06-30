import axios from 'axios';
import {
    API_URL
} from './constants'
var fileDownload = require('js-file-download');

const createNormal = () => {
    return new Promise((resolve, reject) => {
        axios.post(API_URL + '/tickets/normal')
        .then(function (response) {
            resolve(response);
        })
        .catch(function (error) {
            reject(reject);
        });
    })
}

const createPriority = () => {
    return new Promise((resolve, reject) => {
        axios.post(API_URL + '/tickets/priority')
        .then(function (response) {
            resolve(response);
        })
        .catch(function (error) {
            reject(reject);
        });
    })
}

const fetchNext = () => {
    return new Promise((resolve, reject) => {
        axios.get(API_URL + '/tickets-controllers/next').then(function (response) {
            resolve(response);
        })
        .catch(function (error) {
            reject(reject);
        });
    })
}

const callNext = () => {
    return new Promise((resolve, reject) => {
        axios.get(API_URL + '/tickets-controllers/call').then(function (response) {
            resolve(response);
        })
        .catch(function (error) {
            reject(reject);
        });
    })
}

const downloadLog = () => {
    return new Promise((resolve, reject) => {
        axios.get(API_URL + '/log').then(function (response) {
            fileDownload(response.data, 'server.log')
            resolve(response);
        })
        .catch((error) => {
            reject(error)
        })
    })
}

const deleteLog = () => {
    return new Promise((resolve, reject) => {
        axios.get(API_URL + '/clearlog').then(function (response) {
            console.log('teste service')
            
            resolve(response);
        })
        .catch((error) => {
            reject(error)
        })
    })
}

export {
    createNormal,
    createPriority,
    fetchNext,
    callNext,
    downloadLog,
    deleteLog

}