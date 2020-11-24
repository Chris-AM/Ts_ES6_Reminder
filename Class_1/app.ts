(function () {
    function sayHello(name : string) {
        console.log('Hi' + ' ' + name);
    }
    
    const WOLVERINE = {
        name: 'Logan'
    };
    
    sayHello(WOLVERINE.name);
})