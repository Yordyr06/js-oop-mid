Qué es recursividad

La recursividad es cuando una función se llama a sí misma y esta genera una nueva ejecución de la función. Esto sucede reiteradamente hasta que cumpla o no con cierta validación que nosotros declaremos para que deje de llamarse a sí misma en algún punto.

Normalmente, pensaríamos que este tipo de problemas lo podemos resolver con condicionales y/o bucles. Veamos el siguiente ejemplo:

// PROBLEMA:
// Deseamos imprimir una serie de números desde el 0 hasta n números. En este caso
// hasta el 4
let numerito = 0; // Declaramos desde el número que deseamos partir.

// Usamos un bucle while para repetir este proceso hasta que se cumpla la condición:
while(numerito < 5) {
	console.log(numerito);
	numerito++;
}
Así resolveríamos este problema con recursividad:

// Función recursiva:
function recursiva(numerito) { // Recive un número
	console.log(numerito); // Imprimimos en consola el número
	if (numerito < 5) { // Evalua si es menor a 5
		// Llamamos nuevamente a nuestra función enviandole el número siguiente:
		return recursiva(numerito + 1);
	} else { // La función deja de llamarse a sí misma:
		return 5;
	}
}
¿Por qué escribir programas recursivos?
Son más cercanos a la descripción matemática.
Generalmente más fáciles de analizar
Se adaptan mejor a las estructuras de datos recursivas.
Los algoritmos recursivos ofrecen soluciones estructuradas, modulares y elegantemente simples.
¿Cuándo SÍ es factible de utilizar recursividad?
Para simplificar el código.
Cuando la estructura de datos es recursiva. Ejemplo: árboles.
¿Cuándo NO es factible utilizar recursividad?
Cuando los métodos usen arreglos largos.
Cuando el método cambia de manera impredecible de campos.
Cuando las iteraciones sean la mejor opción

Empleemos ahora la recursividad para poder aplicar el Deep Copy en JavaScript y así copiar de manera óptima nuestros objetos. 🤓💪