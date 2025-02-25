// ************ EJERCICIOS CONDICIONALES USANDO : if/else/else if/ternaria ************

// 1. Imprime por consola tu nombre si una variable toma su valor.
nombre = "Cesar";
if (nombre) {
    console.log(nombre);
}   

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos.

usuario = "Cesar";
contrasena = "1234";
if (usuario === "Cesar" && contrasena === "1234") {
    console.log("Bienvenido");
} else {
    console.log("Usuario o contraseña incorrectos");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje.
num_positivo = 5;
num_negativo = -5;
num_cero = 0;
if (num_positivo >0){ 
console.log("El número es positivo");
} else if (num_negativo < 0) {
    console.log("El número es negativo");
} else {
    console.log("El número es cero");
}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan.
let edad = 15;
 let edadMinima = 18;
    if (edad >= edadMinima) {
        console.log("Puede votar");
    } else {
        console.log(`No puede votar, le faltan ${edadMinima - edad} año/s`);
    }
 
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad .
let ternario = 15
ternario = (edad >= 18) ? "adulto" : "menor de edad";
console.log(ternario);
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes".
let Mes = 2;
// Verificar si el mes es un número válido
if (isNaN(Mes)) {
    alert("Por favor, ingrese una edad válida.");
    return;
  }

let Estacion;

if (mes >= 1 && mes <= 3) {
    Estacion = "Invierno";
}
else if (mes >= 4 && mes <= 6) {    
    Estacion = "Primavera";
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior.

Mes = 2;
let numerodeDias;
if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) {
    numerodeDias = 31;
}
else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
    numerodeDias = 30;
}
else if (mes === 2) {
    numerodeDias = 28;
}
else {
    numerodeDias = "Mes incorrecto";
}
console.log(numerodeDias)

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma.

let idioma = "es";
let mensaje;
switch (idioma) {
    case "es":
        mensaje = "Hola";
        break;
    case "en":
        mensaje = "Hello";
        break;
    case "fr":
        mensaje = "Bonjour";
        break;
    default:
        mensaje = "Idioma no soportado";
        break;
}
// 9. Usa un switch para hacer de nuevo el ejercicio 6.
let mes = 2;
let estacion;
switch (mes) {
    case 1:
    case 2:
    case 3:
        estacion = "Invierno";
        break;
    case 4:
    case 5:
    case 6:
        estacion = "Primavera";
        break;
    case 7:
    case 8:
    case 9:
        estacion = "Verano";
        break;
    case 10:
    case 11:
    case 12:
        estacion = "Otoño";
        break;
    default:
        estacion = "Mes incorrecto";
        break;
}
console.log(estacion)
// 10. Usa un switch para hacer de nuevo el ejercicio 7.
numerodeDias = 31;
switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        numerodeDias = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        numerodeDias = 30;
        break;
    case 2:
        numerodeDias = 28;
        break;
    default:
        numerodeDias = "Mes incorrecto";
        break;
}
// switch