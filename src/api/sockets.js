import openSocket from 'socket.io-client';
import {API_URL} from './constants';
const socket = openSocket(API_URL);

function sendToNext(ticket) {
    socket.emit('setNext', ticket);
}

function subscribeChannel(cb, channel) {
    socket.on(channel, data => {
        cb(null, data);
    });
}

export {
    sendToNext,
    subscribeChannel
};