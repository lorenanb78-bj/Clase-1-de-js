// Solicitar datos
const nombre = prompt("¿Cómo te llamas?");
const anioNacimiento = parseInt(prompt("¿En qué año naciste?"));
const ciudad = prompt("¿En qué ciudad vives?");

// Procesar información
const anioActual = new Date().getFullYear();
let edad = anioActual - anioNacimiento;

// Transformación de texto (concatenación)
const mensaje = "Hola " + nombre + ", tienes " + edad + " años y vives en " + ciudad + ".";

// Comunicar resultados
console.log(mensaje);
alert(mensaje);




