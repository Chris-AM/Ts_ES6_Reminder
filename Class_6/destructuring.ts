const AVENGER = {
  name: 'Steve',
  alterEgo: 'Captain America',
  power: 'Super Soldier'
}

//destructuring an object
const EXTRACT = ({name, power}: any) => {

  console.log(name, power)
}

EXTRACT(AVENGER);

const AVENGERS: string[] = ['Thor', 'Ironman', 'Spiderman']

//destructuring an Array

const EXTRACTARRAY = ([a, b, c]: string[]) => {
   console.log(a, b, c)
}

EXTRACTARRAY(AVENGERS);