# Taller Práctico: Asincronía en JavaScript

Resolución del taller de Promesas, Callbacks y Async/Await.

## Ejercicios

| Archivo | Ejercicio | Tema |
| --- | --- | --- |
| `ejercicio1_atm.js` | Simulador de Retiro de Cajero Automático | Promesas con `.then()` y `.catch()` |
| `ejercicio2_edad.js` | Verificación de Edad para Suscripción | Promesas con `.then()` y `.catch()` |
| `ejercicio3_clima.js` | Consulta de Clima Local | `async` / `await` con `try-catch` |

## Ejecución

Requiere Node.js instalado. Desde la carpeta del proyecto:

```bash
node ejercicio1_atm.js
node ejercicio2_edad.js
node ejercicio3_clima.js
```

## Ejemplo de salida

### Ejercicio 1 (ATM)

```
Procesando retiro de $200...
Procesando retiro de $600...
✅ Retiro exitoso de $200. Saldo restante: $300
❌ Fondos insuficientes. Límite de retiro: $500
```

### Ejercicio 2 (Edad)

```
Verificando datos para la edad: 25 años...
Verificando datos para la edad: 16 años...
✅ Acceso concedido. Bienvenido a la plataforma
❌ Acceso denegado. Registro permitido solo para mayores de edad
```

### Ejercicio 3 (Clima)

```
Consultando el clima de Ciudad de México...
------------------------------------
🌦️  CLIMA EN CIUDAD DE MÉXICO
------------------------------------
Temperatura : 24°C
Condición   : Soleado
------------------------------------
Consultando el clima de ...
❌ Error al consultar el clima: No se indicó ninguna ciudad para consultar el clima
```
