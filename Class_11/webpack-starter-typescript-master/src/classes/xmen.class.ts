function printConsole(classConstructor: Function) {
  console.log(classConstructor);
}
@printConsole
export class Xmen{
  constructor(
    public name: string,
    public alterEgo: string,
    
  ) { }
  
  print() {
    console.log(`${this.name} - ${this.alterEgo}`);
  }
}