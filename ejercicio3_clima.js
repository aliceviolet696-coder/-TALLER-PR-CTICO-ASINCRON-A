// ============================================================
// Ejercicio 3: Consulta de Clima Local
// Consumo con async / await y control de errores try-catch
// ============================================================

function consultarClima(ciudad) {
  return new Promise((resolve, reject) => {
    console.log(`Consultando el clima de ${ciudad}...`);

    // La consulta se resuelve después de 1.5 segundos
    setTimeout(() => {
      if (!ciudad || ciudad.trim() === "") {
        reject("No se indicó ninguna ciudad para consultar el clima");
        return;
      }

      resolve({
        ciudad: ciudad,
        temperatura: "24°C",
        condicion: "Soleado",
      });
    }, 1500);
  });
}

async function mostrarClima(ciudad) {
  try {
    const clima = await consultarClima(ciudad);

    console.log("------------------------------------");
    console.log(`🌦️  CLIMA EN ${clima.ciudad.toUpperCase()}`);
    console.log("------------------------------------");
    console.log(`Temperatura : ${clima.temperatura}`);
    console.log(`Condición   : ${clima.condicion}`);
    console.log("------------------------------------");
  } catch (error) {
    console.error(`❌ Error al consultar el clima: ${error}`);
  }
}

// Ejecución del ejercicio: caso exitoso y caso con error
async function main() {
  await mostrarClima("Ciudad de México");
  await mostrarClima("");
}

main();
