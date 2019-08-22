const DELAY = 2000;

console.log("__filename = " + __filename)


var sayHello =
    function(howLongYouKeptMeWaiting){
        console.log("It's so nice of you to say Hello after waiting " + howLongYouKeptMeWaiting + " milliseconds.");
        console.log((new Date()));
    };

console.log("Before call to say hello with delay: " + (new Date()));
// setInterval(sayHello, DELAY, DELAY);
setTimeout(sayHello, DELAY, DELAY);
console.log("After call to say hello with delay:  " + (new Date()));
