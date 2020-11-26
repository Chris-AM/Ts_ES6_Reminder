//Slow Way
/* class Avenger {

  name: string;
  team: string;
  realName: string;
  canFight: boolean;
  fightsWon: number;

  constructor(name:string, team:string, realName:string, canFight:boolean, fightsWon:number) {
    this.name = name;
    this.team = team;
    this.realName = realName;
    this.canFight = canFight;
    this.fightsWon = fightsWon;
  }
}

const ANTMAN: Avenger = new Avenger('AntMan', 'IronMan', 'Scot Lang', true, 5);

console.log(ANTMAN); */

//shortWay
class Avenger {

  constructor(public name: string,
              public team: string,
              public realName: string,
              public canFight: boolean,
              public fightsWon: number) { }
  
}
const ANTMAN: Avenger = new Avenger('AntMan', 'IronMan', 'Scot Lang', true, 5);
console.log(ANTMAN);