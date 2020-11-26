"use strict";
(function () {
    function sayHello(name) {
        console.log('Hi' + ' ' + name);
    }
    function sayGoodBye(name) {
        console.log('Goodbye' + ' ' + name);
    }
    const WOLVERINE = {
        name: 'Logan'
    };
    sayHello(WOLVERINE.name);
    sayGoodBye(WOLVERINE.name);
});
