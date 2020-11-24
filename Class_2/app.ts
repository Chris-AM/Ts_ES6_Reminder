

  (function () {
    let mensaje: string = 'hola';
    let numero: number = 123;
    let booleano: boolean = true;
    let hoy: Date = new Date;
    
    let any: string | number | boolean | Date;
    any = mensaje;
    any = numero;
    any = booleano;
    any = hoy;
    
    let objectTest = {
      typeOne: 'Hi',
      typeTwo: 123
    }
    
    objectTest = {
      typeOne: 'goodbye',
      typeTwo: 456
    }
})