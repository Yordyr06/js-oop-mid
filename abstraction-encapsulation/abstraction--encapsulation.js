/* 
Abstracción con objetos literales y deep copy

Aplicaremos la abstracción y encapsulamiento a nuestros objetos
en JavaScript sin necesidad de utilizar prototipos ni clases.
Emplearemos el deep copy para generar nuevos objetos a partir de
un objeto base y los encapsularemos con ayuda de los métodos del
superprototipo Object tales como defineProperty, seal y freeze.

Abstracción con deep copy en JavaScript
Vamos a crear un objeto base para un estudiante:
*/

const studentBase = {
  name: undefined,
  email: undefined,
  age: undefined,
  approvedCourses: undefined,
  learningPaths: undefined,
  socialMedia: {
    twitter: undefined,
    instagram: undefined,
    facebook: undefined,
  },
};

/* Con esto podemos crear nuevos estudiantes generando copias a
partir de este objeto literal studentBase. Para ello emplearemos
deep copy con recursividad: */

function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

// FUNCIÓN RECURSIVA
function deepCopy(subject) {
  let copySubject;

  const subjectIsObject = isObject(subject);
  const subjectIsArray = isArray(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
}

// GENERANDO NUEVOS OBJETOS
const juan = deepCopy(studentBase);
const emma = deepCopy(studentBase);

/*
Encapsulamiento de objetos con Object.defineProperty
Sabemos que con Object.defineProperty es posible editar las propiedades writable,
enumerable y configurable de los atributos de un objeto. Con esto limitamos
el acceso a los datos de los nuevos objetos que generemos.

Editemos la propiedad configurable del atributo name del objeto juan para evitar
que sea borrada:
*/

Object.defineProperty(juan, "name", {
	value: "Juanito", // Definimos el valor del atributo "name" como "Juanito"
	configurable: false
});
// El resto de propiedades (writable y enumerable) por defecto serán true

// Si intentamos borrar el atributo "name" ...
delete juan.name

// Observamos que no fue eliminado dicho atributo, pues bloqueamos su eliminación
console.log(juan);

/* > Mensaje en consola
{
  name: 'Juanito',
  email: undefined,
  age: undefined,
  approvedCourses: undefined,
  learningPaths: undefined,
  socialMedia: { twitter: undefined, instagram: undefined, facebook: undefined }
}
*/

Object.defineProperty(juan, "name", {
	value: "Juanito", // Definimos el valor del atributo "name" como "Juanito"
	configurable: false
});
// El resto de propiedades (writable y enumerable) por defecto serán true

// Si intentamos borrar el atributo "name" ...
delete juan.name

// Observamos que no fue eliminado dicho atributo, pues bloqueamos su eliminación
console.log(juan);

/* > Mensaje en consola
{
  name: 'Juanito',
  email: undefined,
  age: undefined,
  approvedCourses: undefined,
  learningPaths: undefined,
  socialMedia: { twitter: undefined, instagram: undefined, facebook: undefined }
}
*/