// ============================================================
// Ejercicio 1: Simulador de Retiro de Cajero Automático (ATM)
// Consumo con Promesas tradicionales (.then / .catch)
// ============================================================

const SALDO_DISPONIBLE = 500;

function retirarDinero(monto) {
  return new Promise((resolve, reject) => {
    console.log(`Procesando retiro de $${monto}...`);

    // Temporizador: la transacción tarda 1.5 segundos en el banco
    setTimeout(() => {
      if (monto <= SALDO_DISPONIBLE) {
        const saldoRestante = SALDO_DISPONIBLE - monto;
        resolve(`Retiro exitoso de $${monto}. Saldo restante: $${saldoRestante}`);
      } else {
        reject("Fondos insuficientes. Límite de retiro: $500");
      }
    }, 1500);
  });
}

// Caso exitoso: monto menor o igual al saldo
retirarDinero(200)
  .then((mensaje) => console.log(`✅ ${mensaje}`))
  .catch((error) => console.log(`❌ ${error}`));

// Caso fallido: monto mayor al saldo
retirarDinero(600)
  .then((mensaje) => console.log(`✅ ${mensaje}`))
  .catch((error) => console.log(`❌ ${error}`));
