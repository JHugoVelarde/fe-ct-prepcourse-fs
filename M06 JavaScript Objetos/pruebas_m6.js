// function crearGato(nombre, edad) {
//     // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
//     // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
//     // Además, agregar una propiedad con el nombre "meow".
//     // La propiedad "meow" será una función que retorne el string: "Meow!".
//     // Retornar el objeto.
//     // Tu código:
//     var gato = {
//         nombre: nombre,
//         edad: edad,
//         meow: function() { return "Meow!"; }
//     };
//     return gato;
//  }

//  var miGato = crearGato("Felix", 2);
//  console.log(miGato);
//  console.log(miGato.meow());


//  function nuevoUsuario(nombre, email, password) {
//     // Debes crear un nuevo objeto.
//     // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
//     // Retornar el objeto.
//     // Tu código:
//     var usuario = {
//         nombre: nombre,
//         email: email,
//         password: password
//     };
//     return usuario;
//  }

//  console.log(nuevoUsuario("Jose", "jose@email.com", "abc123"));


//  function agregarPropiedad(objeto, propiedad) {
//     // Recibirás un objeto por parámetro.
//     // Debes agregarle una propiedad con el nombre recibido por parámetro.
//     // Esta propiedad será igual al valor `null`.
//     // Retornar el objeto.
//     // Tu código:
//     objeto[propiedad] = null;
//     return objeto;
//  }

//  miObjeto = {
//     nombre: "Juan",
//     edad: 30
//  };
//  console.log(agregarPropiedad(miObjeto, "Hobby"));


//  function invocarMetodo(objeto, metodo) {
//     // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
//     // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
//     // [NOTA]: no necesitar retornar nada.
//     // Tu código:
//     objeto.metodo();
//  }


//  function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
//     // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
//     // Debes multiplicar este número por 5 y retornar el resultado.
//     // Tu código:
//     var resultado = objetoMisterioso.numeroMisterioso * 5;
//     return resultado;
//  }


//  function eliminarPropiedad(objeto, propiedad) {
//     // El parámetro "propiedad" es una propiedad del objeto que recibes.
//     // Debes eliminarla del objeto y retornarlo finalmente.
//     // Tu código:
//     delete objeto.propiedad;
//     return objeto;
//  }


//  function tieneEmail(objetoUsuario) {
//     // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
//     // En ese caso retornar true. Caso contrario, false.
//     // Tu código:
//     return objetoUsuario.email != null;
//  }


function agregarMetodoCalculoDescuento(objetoProducto) {
    // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
    // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
    // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
    // Luego debes restar del precio total del producto ese valor de descuento.
    // Retornar el precio final.
    // Ejemplo:
    // Precio ---> 10
    // PorcentajeDeDescuento ---> 0.2
    // Precio final ---> 8
    // Tu código:
    objetoProducto["calcularPrecioDescuento"] = 0;
    objetoProducto.calcularPrecioDescuento = function() {
       var precioConDescuento = this.precio * (1 - this.porcentajeDeDescuento);
       return precioConDescuento;
    }
    return objetoProducto.calcularPrecioDescuento();
 }

