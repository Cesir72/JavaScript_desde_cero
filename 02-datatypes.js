// datos primivitos
// string (cadenas de texto)
let nombre = "Juan";
let alias = 'Juan';
let saludo = `Hola ${nombre}`;
console.log(nombre);
console.log(alias);
console.log(saludo)
let email = "cesar72@hotmail.com"
console.log(email);
// number
let edad = 23;  
console.log(edad);

// boolean
let esMayor = true;
let esMenor = false;
console.log(esMayor)
console.log(esMenor)
// null
let vacio = null;
console.log(vacio);

// undefined (variable declarada pero no iniciada.No tiene un valor asignado)
let indefinido = undefined;
console.log(indefinido);

// Symbol (valores unicos, no se pueden repetir usado para propiedades de objetos)
let simbolo = Symbol('simbolo');
console.log(simbolo);

// BigInt
let bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);
let bigInt2 = BigInt(1234567890123456789012345678901234567890);
console.log(bigInt2);


// Object
let objeto = {
    nombre: "Juan",
    edad: 23,
    esMayor: true
};
console.log(objeto);
// typeof
console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof esMayor);

console.log(typeof vacio);
console.log(typeof indefinido);
console.log(typeof simbolo);
console.log(typeof bigInt);
console.log(typeof objeto);