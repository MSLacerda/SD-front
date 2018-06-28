import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:9000');

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