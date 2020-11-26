"use strict";
const AVENGER = {
    name: 'Steve',
    alterEgo: 'Captain America',
    power: 'Super Soldier'
};
//destructuring an object
const EXTRACT = ({ name, power }) => {
    console.log(name, power);
};
EXTRACT(AVENGER);
const AVENGERS = ['Thor', 'Ironman', 'Spiderman'];
//destructuring an Array
const EXTRACTARRAY = ([a, b, c]) => {
    console.log(a, b, c);
};
EXTRACTARRAY(AVENGERS);
