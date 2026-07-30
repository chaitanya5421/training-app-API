// Event
// events module provides a way to work with events and event-driven programming in Node.js. It allows you to create, emit, and listen for events in your applications.
// emit, on(listener), eventEmitter

const EventEmitter = require('events');

// create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// listen for the 'greet' event
eventEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

// emit the 'greet' event
// eventEmitter.emit('greet', 'Alice');


// on() =>  Register a listener.
// emit() =>  Trigger an event.

// multiple parameters for the same event
eventEmitter.on('greet', (name, message) => {
    console.log(`How are you, ${name}? ${message}`);
});

// eventEmitter.emit('greet', 'Bob', 'Hope you are doing well!');


// multiple listeners 
eventEmitter.on('login', () => {
    console.log('checking credentials...');
});

eventEmitter.on('login', () => {
    console.log('checking IP address...');
});

eventEmitter.on('login', () => {
    console.log('Logged successfully!');
});

// eventEmitter.emit('login');
// eventEmitter.emit('login');

// once() =>  Register a listener that is called at most once for a particular event.
eventEmitter.once('logout', () => {
    console.log('User logged out!');
});

eventEmitter.once('logout', () => {
    console.log('Logging out...');
});

// eventEmitter.emit('logout'); // This will trigger the listener
// eventEmitter.emit('logout'); // This will not trigger the listener again


// removeListener() =>  Remove a specific listener for an event.
function welcome() {
    console.log('Welcome, User!');
}

// eventEmitter.on('welcome', welcome);

// eventEmitter.emit('welcome'); // This will trigger the listener
// eventEmitter.removeListener('welcome', welcome);
// eventEmitter.emit('welcome'); // This will not trigger the listener again


eventEmitter.on('orderplaced', (product) => {   
    console.log(`Order received for ${product}.`);
})

eventEmitter.on('orderplaced', () => {
    console.log('Invoice  preparation started!');
});

eventEmitter.on('orderplaced', () => {
    console.log('send an email notification!');
});

eventEmitter.on('orderplaced', () => {
    console.log('shipping started!');
});


eventEmitter.emit('orderplaced', 'Laptop'); // This will trigger all the listeners for the 'orderplaced' event



// on() - register a listener for an event
// emit() - trigger an event
// once() - run listener only once
// removeListener() - remove a specific listener for an event