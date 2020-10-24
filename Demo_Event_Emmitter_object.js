var events = require('events'); //importing the events moduole from inbult functions
var eventEmitter = new events.EventEmitter();   //would create an object of EventEmiiter type

//Create an event handler: it would be called when an event is being fired from on function
var myEventHandler = function () {

  console.log('I hear an event!');
}

//Assign the event handler to an event:
eventEmitter.on('event', myEventHandler);

//Fire the 'event' event:
eventEmitter.emit('event');


