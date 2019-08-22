var events = require("events");

var emitter = new events.EventEmitter();

var listener1 =
    function(){
    console.log("Listener 1 heard you");
    };

var listener2 =
    function(){
    console.log("Ok, ok... Listener 2 heard you too");
    };

var wakeUp = "Hey, Wake Up";
emitter.addListener(wakeUp, listener1);
emitter.on(wakeUp, listener2);
printListenerCount(emitter, wakeUp);
emitter.emit(wakeUp);

newLine();
console.log("remove listener 2 an fire");
emitter.removeListener(wakeUp, listener2);
printListenerCount(emitter, wakeUp);
emitter.emit(wakeUp);

newLine();
console.log("remove all listeners and fire");
emitter.removeAllListeners(wakeUp);
printListenerCount(emitter, wakeUp);
emitter.emit(wakeUp);

console.log("Good Night.");

function printListenerCount(eventEmitter, event){
    console.log("Number of Listeners for event '"+wakeUp+"':" + require("events").EventEmitter.listenerCount(eventEmitter, event));
}

function newLine(){
    console.log("");
};


