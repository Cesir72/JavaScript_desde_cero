// Strings (cadenas de texto)

// Concatenación

let myName = "Cesar"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud

console.log(greeting.length)

// Acceso a caracteres

console.log(greeting[0])
console.log(greeting[11])

// Métodos comunes

console.log(greeting.toUpperCase()) // Mayúsculas
console.log(greeting.toLowerCase()) // Minúsculas
console.log(greeting.indexOf("Hola")) // Índice
console.log(greeting.indexOf("Cesar"))
console.log(greeting.indexOf("Sanchez"))
console.log(greeting.includes("Hola")) // Incluye
console.log(greeting.includes("Cesar"))
console.log(greeting.includes("Sanchez"))
console.log(greeting.slice(0, 10)) // Sección
console.log(greeting.replace("Cesar", "Sanchez Martin")) // Reemplazo

// Template literals (plantillas literales)

// Strings en varias líneas
let message = `Hola, este
es mi
curso de
JavaScript`
console.log(message)

// Interpolación de valores
let email = "cesar72@hotmail.com"
console.log(`Hola, ${myName}! Tu email es ${email}.`)