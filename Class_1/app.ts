(function () {
    function sayHello(name : string) {
        console.log('Hi' + ' ' + name);
    }

    function sayGoodBye(name: string) {
        console.log('Goodbye' + ' ' + name);
    }
    
    const WOLVERINE = {
        name: 'Logan'
    };
    
    sayHello(WOLVERINE.name);

    sayGoodBye(WOLVERINE.name);
})