/* ------------------ OPERADORES ---------------------*/


/* NOTAS: var, un contenedor para almacenar datos y tiene un alcance global, es decir puede cambiar en cualquier momento en todos los sitios, y let tiene un alcance de bloque.*/
/*
Truthy values (valores verdaderos)

- Todos los numeros positivos y negativos menos el cero
- Todas las cadenas de texto menos las vacÃ­as
- El boolean true
*/
//NOTAS:
/*
Falsy values (valores falsos)

- 0
-  0n
- null
- undefined
- NaN (Not a Number)
- El boolean false
- Cadenas de texto vacÃ­as 
*/

// ---------------Operadores aritméticos----------------
// SUMAR
function sumar() {
    let x = 5;
    let y = 2;
    let z = x + y;
    console.log(z);
}
sumar();

// RESTAR
function restar() {
    let x = 5;
    let y = 2;
    let z = x - y;
    console.log(z)
}
restar()

// MULTIPLICAR
function multiplicar( x = 5, y = 2) {
   
    let z = x * y;
    console.log(z)
}
multiplicar()

// DIVIDIR
function dividir() {
    let x = 10;
    let y = 2;
    let z = x / y;
    console.log(z)
}
dividir()


// RESTO DIVISION %

function resto() {
    let x = 5;
    let y = 2;
    let z = x % y;
    console.log(z)
}
resto()

// INCREMENTO

function incremento() {
    let x = 5;
    x++;
    console.log(x)
}
incremento()

// DECREMENTO

function decremento() {
    let x = 5;
    x--;
    console.log(x)
}
decremento()


/* ------------------ OPERADORES DE ASIGNACIÓN ---------------------*/
// IGUALDAD
function igualdad() {

    var x = 10;
    var y = x;
   
   console.log(x=y);
}
igualdad()

// SUMA 
function suma() {

    var x = 10;
     x += 5
    console.log(x);
}
suma()


// RESTA

function resta() {

    var x = 10;
    x -= 5;
    console.log(x)
}
resta()

// MULTIPLICACIÓN
function multiplicacion() {

    var x = 10;
    x *= 5;
    console.log(x)
}
multiplicacion()

// DIVISIÓN
function division() {

    var x = 10;
    x /= 5;
    console.log(x)
}
division()
// RESTO
function resto() {

    var x = 10;
    x %= 5;
    console.log(x)
}
resto()

/* --------- OPERADORES COMPARACION-------*/

/*
console.log(a > b) // Mayor que
console.log(a < b) // Menor que
console.log(a >= b) // Mayor o igual que
console.log(a <= b) // Menor o igual que
console.log(a == b) // Igualdad por valor
console.log(a == 6)
console.log(a == "6")
console.log(a == a)
console.log(a === a) // Igualdad por identidad (por tipo y valor) o igualdad estricta
console.log(a === 6)
console.log(a === "6")
console.log(a != 6) // Desigualdad por valor
console.log(a !== "6") // Desigualdad por identidad (por tipo y valor) o desigualdad estricta
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "Hola")
console.log(0 === "")
console.log(undefined == null)
console.log(undefined === null)
*/

// IGUALDAD VALOR == COMPARAR
function igualValor() {

    var x = 5;
    var y = 8;
    console.log(x == y);
}
igualValor()


// IGUALDAD ESTRICTA , VALOR y TIPO ===
function igualValorTipo() {

    var x = 5;
    var y = 8;
    console.log(x === y);
}
igualValorTipo()
// DISTINTO VALOR !=
function distintoValor() {

    var x = 5;
    var y = 8;
    console.log(x != y);
}
distintoValor()
// DISTINTO VALOR y TIPO !==
function distintoValorTipo() {

    var x = 5;
    var y = 8;
    console.log(x !== y);
}
distintoValorTipo()
// MAYOR QUE >
function mayorQue() {

    var x = 5;
    var y = 8;
     console.log(x > y);
}
mayorQue()
// MAYOR QUE >
function menorQue() {

    var x = 5;
    var y = 8;
    console.log(x < y);
}
menorQue()
// Mayor o igual que
function mayorIgualQue() {

    var x = 5;
    var y = 8;
    console.log(x >= y);
}
mayorIgualQue()
// Menor o igual que
function menorIgualQue() {

    var x = 5;
    var y = 8;

   console.log(x <= y);
}
menorIgualQue()

// OPERADOR TERNARIO(permiten escribir un Condicional)
function operadorTernario() {

    var x = 5;
    var y = 8;

     console.log((x < y ) ? 'Es Menor':'Es Mayor');
}
operadorTernario()

const isRainy = true;
console.log(isRainy ? 'Lleva paraguas' : 'No lleves paraguas');

const isRaining = false
isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")

/* ------------------------ OPERADORES LOGICOS -----------------------*/

// AND (&&)
console.log(5 > 10 && 15 > 20 && 30 > 40)
function and() {
    var x = 6;
    var y = 3;
    var z = (x < 10 && y > 1)
    console.log(z);   
}
and()
// OR (||)
console.log(5 > 10 || 15 > 20 || 30 > 40)
function or() {
    var x = 6;
    var y = 3;
    var z = (x == 5 || y == 5);
    console.log(z);
}
or()
// NEGACIÓN(!)
function not() {
    var x = 6;
    var y = 3;
    var z = !(x == y); 
    console.log(z);
}
not()
console.log(!true)
console.log(!false)
