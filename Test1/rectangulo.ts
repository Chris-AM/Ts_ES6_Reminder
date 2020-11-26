// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

class Rectangulo {

  constructor(public base: number,
              public altura: number) {

  }
  
  calcularArea = () => this.base * this.altura
  
  
}

