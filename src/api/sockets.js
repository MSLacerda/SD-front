import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:9000');

function sendToNext(ticket) {
    socket.emit('setNext', ticket);
}

function subscribeNextTicket(cb) {
    socket.on('receivenext', data => {
        cb(null, data);
    });
}

export {
    sendToNext,
    subscribeNextTicket
};