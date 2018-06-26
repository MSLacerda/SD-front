import axios from 'axios';
import {
    API_URL
} from './constants'

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

export {
    createNormal,
    createPriority,
    fetchNext,
    callNext
}