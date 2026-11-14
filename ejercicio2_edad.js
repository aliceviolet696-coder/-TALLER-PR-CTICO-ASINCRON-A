// ============================================================
// Ejercicio 2: Verificación de Edad para Suscripción
// Consumo con Promesas tradicionales (.then / .catch)
// ============================================================

const EDAD_MINIMA = 18;

function verificarEdad(edad) {
  return new Promise((resolve, reject) => {
    console.log(`Verificando datos para la edad: ${edad} años...`);

    // Simula un retraso de 1 segundo en la verificación de datos
    setTimeout(() => {
      if (edad >= EDAD_MINIMA) {
        resolve("Acceso concedido. Bienvenido a la plataforma");
      } else {
        reject("Acceso denegado. Registro permitido solo para mayores de edad");
      }
    }, 1000);
  });
}

// Caso exitoso: mayor de edad
verificarEdad(25)
  .then((mensaje) => console.log(`✅ ${mensaje}`))
  .catch((error) => console.log(`❌ ${error}`));

// Caso fallido: menor de edad
verificarEdad(16)
  .then((mensaje) => console.log(`✅ ${mensaje}`))
  .catch((error) => console.log(`❌ ${error}`));
