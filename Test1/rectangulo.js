"use strict";
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
class Rectangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
        this.calcularArea = () => this.base * this.altura;
    }
}
