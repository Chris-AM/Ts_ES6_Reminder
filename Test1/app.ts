(()=>{

  // Uso de Let y Const
  let nombre = 'Ricardo Tapia';
  let edad = 23;

  const PERSONAJE = {
    nombre,
    edad
  };


  // Cree una interfaz que sirva para validar el siguiente objeto
  interface Batman{
    nombre: string;
    artesMarciales: string[];
  }

  let batman: Batman = {
    nombre: 'Bruno Díaz',
    artesMarciales: ['Karate','Aikido','Wing Chun','Jiu-Jitsu']
  }

  const SHOWNAME = (batman: Batman) => {
    console.log(`Batman's realname is: ${batman.nombre}`)
  }

  const listSkils = ([a, b, c, d]: string[]) => {
    console.log(`batman domina ${batman.artesMarciales}`)
  }

  listSkils(batman.artesMarciales);
  console.log(SHOWNAME);
  console.log(listSkils);


  // Convertir esta funcion a una funcion de flecha
  
  const resultadoDoble =  (a: number, b: number) => {(a + b) * 2};

  console.log(resultadoDoble(4, 6));


  // Función con parametros obligatorios, opcionales y por defecto
  // donde NOMBRE = obligatorio
  //       PODER  = opcional
  //       ARMA   = por defecto = 'arco'
  const getAvenger = ( nombre:string, poder?:string, arma:string ='arco' ) => {
    let mensaje;
    if( poder ){
      mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
    }else{
      mensaje = nombre + ' tiene un ' + poder
    }
  };
  

})();