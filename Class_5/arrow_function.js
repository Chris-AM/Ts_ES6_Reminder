"use strict";
let normalFunction = function (a) {
    return a.toUpperCase();
};
//one line return
let myArrowFunction = (a) => a.toUpperCase();
//n line return
let mySecondArrowFunction = (doughter, mom) => {
    console.log(`${doughter} is being feed by ${mom}`);
};
let arrowSum = (a, b) => a + b;
const hulkSmash = {
    name: 'hulk',
    smash() {
        setTimeout(() => {
            console.log(`${this.name} Smash!!`);
        }, 0);
    }
};
console.log(normalFunction('Nomal Function'));
console.log(myArrowFunction('Arrow Function'));
mySecondArrowFunction('Valentina', 'Coté');
console.log(arrowSum(5, 7));
