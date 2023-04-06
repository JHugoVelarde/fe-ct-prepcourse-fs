// function numeroMasGrande(arrayOfNums) {
//     // El parámetro "arrayOfNums" es un arreglo de números.
//     // Retornar el número más grande.
//     // Tu código:
//     var numGrande = arrayOfNums[0];
//     arrayOfNums.forEach(element => {
//         if (element > numGrande) {
//             numGrande = element;
//         }
//     });
//     console.log(numGrande);
//  }

//  numeroMasGrande([8,12,5]);

// function multiplicarArgumentos() {
//     // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
//     // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
//     // [PISTA]: "arguments" es un arreglo.
//     // Tu código:
//     if (arguments.length === 0) return 0;
//     var producto = 1;
//     arguments.forEach( elemento => {
//         producto = producto * elemento;
//     });
//     return producto;    
//  }

//  console.log(multiplicarArgumentos());

//  function cuentoElementos(array) {
//     // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
//     // Tu código:
//     var nuevoArray = [];
//     array.forEach(elemento => {if (elemento > 18) nuevoArray.push(elemento)});
//     return nuevoArray.length;
//  } 

//  console.log(cuentoElementos([10, 10, 18, 21])); 

// function tablaDelSeis() {
//     // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
//     // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
//     // Tu código:
//     var resultados = [];
//     for (var i = 0; i <= 10; i++) {
//       var multiplicacion = i * 6;
//       resultados.push(multiplicacion);
//     }
//     return resultados;
//  }

//  console.log(tablaDelSeis());

// //  function empiezaConNueve(num) {
// //     // Esta función recibe por parámetro un número.
// //     // Debe retornar true si el entero inicia con 9 y false en otro caso.
// //     // Tu código:
// //     var digitos = [];
// //     var entero = num;
// //     while (entero > 0) {
// //         var digito = entero % 10;
// //         digitos.unshift(digito);
// //         entero = Math.floor(entero / 10);
// //     }
// //     return digitos[0] === 9;
// //  }

//  console.log(empiezaConNueve(1245));

//  function mayorACien(array) {
//     // La función recibe un arreglo con enteros entre 0 y 200.
//     // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
//     // Tu código:
//     return array.filter(valor => valor > 100);
//  }

//  console.log(mayorACien([100, 4, 56, 78, 200, 120, 7, 160, 148, 22]));

// function breakStatement(num) {
//     // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
//     // Guardar cada nuevo valor en un arreglo y retornarlo.
//     // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
//     // la ejecución y retornar el string: "Se interrumpió la ejecución".
//     // [PISTA]: utiliza el statement 'break'.
//     // Tu código:
//     var arreglo = []
//     for (var i = 1; i <= 10; i++) {
//         num = num + 2;
//         if (num != 10) {
//           arreglo.push(num);
//         } else {
//          return "Se interrumpió la ejecución";
//          break;
//         }
//     }
//     return arreglo;
//  }

//  console.log(breakStatement(50));

function continueStatement(num) {
    // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un array y retornarlo.
    // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
    // se continua con la siguiente iteración.
    // [PISTA]: utiliza el statement 'continue'.
    // Tu código:
    var arreglo = []
    for (var i = 1; i <= 10; i++) {
        num = num + 2;
        if (i == 5) {
         continue;
        } else {
         arreglo.push(num);
        }
    }
    return arreglo;
 }

 console.log(continueStatement(-4));