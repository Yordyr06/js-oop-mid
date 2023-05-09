Static: atributos y métodos estáticos en JavaScript
Hasta ahora habíamos aprendido que apara acceder a los métodos o atributos de una clase o prototipo
teníamos que crear una instancia del prototipo(Objeto). Pero hay una forma de que podemos saltarnos
tener que crear una instancia del prototipo para acceder a los métodos o atributos, esta es la forma Static.

Para crear atributos estáticos los cuales podamos acceder sin crear un objeto o una instancia de este prototipo,
solo hay que agregar al atributo la palabra **static**

Métodos estáticos de Objetct

- Object.keys()
Nos devuelve una lista con todos los keys(nombres claves) de nuestro objeto objetito
    --> (3) ["name", "email", "age"]



- Object.getOwnPropertyNames()
Hace prácticamente lo mismo que Object.keys con pequeñas diferencias. (Ver DOCUMENTACION)
    --> ["name", "email", "age"]



- Object.entries()
El método entries nos devolverá un arrays de arrays donde tendremos nuestra palabra clave con su  respectivo
valor por cada propiedad del prototipo [key,  value]
   
   ```
    [
      0: (2) ["name", "Carlitos"]
      1: (2) ["email", "carlitosmazzaroli@gmail.com"]
      2: (2) ["age", 16]
    ]
    ```



- Object.getOwnPropertyDescriptors(objetito)
Nos devuelve todas las propiedades de los objetos, con sus keys y values, y otros atributos.
Los atributos writable, configurable y enumerable. Es la forma que tiene JavaScript para limitar el acceso
modificar o modificación de nuestros atributos o de nuestros objetos.

```
{
  name: {
    value: 'Juanito',
    writable: true,
    enumerable: true,
    configurable: true
  },
  email: {
    value: 'juanito@frijolitos.io',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: {
		value: 18,
		writable: true,
		enumerable: true,
		configurable: true
	}
}
```

