// NodeJS is an event-driven program
// event-driven means
// Mostly, we don't use this events explicitly, but alot of modules in node uses them highly.


const EventEmitter = require("events");

const EventEmitterObj = new EventEmitter();


// This listens to the event named "response", and once it receives an emitted-event, it fires the callback given inside it.
EventEmitterObj.on("response", (name, age) => {
    console.log(`data received:\nUserName: ${name}\nAge: ${age} `);
});

// We can write as many "on" methods we want. All the "on" methods will be actively listening, and fires the callback once it
// once it receives an emitted-event

EventEmitterObj.on("response", () => {
    console.log("Another 'on' listener");
})

EventEmitterObj.emit("response", "Habeeb", 23);