let normalFunction = function (a: string) {
  return a.toUpperCase();
}

//one line return
let myArrowFunction = (a: string) => a.toUpperCase();

//n line return
let mySecondArrowFunction = (doughter: string, mom: string) => {
  console.log(`${doughter} is being feed by ${mom}`)
}

let arrowSum = (a: number, b: number) => a+b

const hulkSmash = {
  name: 'hulk',
  smash() {
    setTimeout(() => {
      console.log(`${this.name} Smash!!`);
    }, 0);
  }
}

console.log(normalFunction('Nomal Function'));
console.log(myArrowFunction('Arrow Function'));
mySecondArrowFunction('Valentina', 'Coté')
console.log(arrowSum(5, 7));