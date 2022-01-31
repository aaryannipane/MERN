// create and trigger custom event in node 
// it is same like event listener like onClick, mousrover etc

// to use events in node we have to import events module
const events = require("events");

// create object of events 
const event = new events.EventEmitter();

// adding event 
event.on('AnyNameClick', (arg1, arg2)=>{
    console.log("First Event Created");
    console.log(arg1);
    console.log(arg2);

});

// now we have to emit(trigger) or fire that event
event.emit("AnyNameClick", "Aryan Nipane argument", "He is Developer");


