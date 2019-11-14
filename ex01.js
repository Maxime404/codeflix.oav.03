module.exports = function empty() {
    const EventEmitter = require('events').EventEmitter;
    const logger = new EventEmitter();

    logger.on('empty', () => {
        console.log('Ch0ooooooper!');
    });

    logger.emit('empty');
}

//Second way

/*const { EventEmitter } = require('events');

function empty() {
    const myEmitter = new EventEmitter();

    myEmitter.on('hi', () => {
        console.log('Ch0ooooooper!');
    });

    myEmitter.emit('hi');
}

module.exports = {
    empty
}*/