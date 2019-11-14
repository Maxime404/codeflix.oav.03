const empty = require('./ex01');
const { withArgs } = require('./ex02');
const { MyEventEmitter } = require('./ex03');


empty();
// => Ch0ooooooper!

console.log('\n\n////////////////////////\n\n');

const names = ['Luffy', 'Zoro', 'Usopp', 'Robin', 'Nabi', 'Sanji', 'Ch0pper'];
withArgs(names);
// => Here come's a new pirate ->> Luffy
// => Here come's a new pirate ->> Zoro
// => Here come's a new pirate ->> Usopp
// => Here come's a new pirate ->> Robin
// => Here come's a new pirate ->> Nabi
// => Here come's a new pirate ->> Sanji
// => Here come's a new pirate ->> Ch0pper

withArgs('Jack');
// => Here come's a new pirate ->> Jack

console.log('\n\n////////////////////////\n\n');

const myEventEmitter = new MyEventEmitter();

const unsubscribe = myEventEmitter.on('hello', () => {
    console.log(`Hello, World!`);
});

myEventEmitter.on('hello', (firstName, lastName) => {
    console.log(`Hello, ${firstName} ${lastName}!`);
});

myEventEmitter.emit('hello');
myEventEmitter.emit('hello', 'James', 'McAvoy');

//Cancel hello
unsubscribe();

myEventEmitter.emit('hello');
myEventEmitter.emit('unknow');