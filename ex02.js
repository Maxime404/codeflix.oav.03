const { EventEmitter } = require('events');

function withArgs(names) {
    const logger = new EventEmitter();

    logger.on('pirate', (names) => {
        if(typeof names === 'string'){
            console.log(`Here come's a new pirate ->> ${names}`);
        } else if (Array.isArray(names)) {
            names.forEach(name => {
                console.log(`Here come's a new pirate ->> ${name}`)
            });
        } else {
            console.log(`Sorry type ${typeof names} is no implement`)
        }
    });

    logger.emit('pirate', names);
}

module.exports = {
    withArgs: withArgs
}