/*
Atributos y métodos privados en prototipos
A partir del último código generado, crearemos un getter y setter a nuestra propiedad
learningPaths dentro de nuestro prototipo Student para evitar que sea manipulado después
de la creación de un estudiante.

Getters y Setters desde Object.defineProperty

  1) Generamos un objeto private en el que colocaremos el atributo, _learningPaths
    el cual al principio será un array vacío. Previo a esto, borramos todo el código
    que viene después de la asignación de atributos en el objeto Student:
*/

function isObject(subject) { return typeof subject == "object"; }

function isArray(subject) { return Array.isArray(subject); }

function requiredParam(param) { throw new Error(param + " es obligatorio"); }

function LearningPath({ // PROTOTIPO
  name = requiredParam("name"), // Campo es obligatorio 
  courses = [], // Lista de Cursos que pertenecen a la ruta de aprendizaje
}) { 
  this.name = name;
  this.courses = courses;
}

function Student({ // PROTOTIPO
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
// ASIGNACIÓN DE ATRIBUTOS
  this.name = name;
  this.email = email;
  this.age = age;
  this.approvedCourses = approvedCourses;
  this.socialMedia = {
    twitter,
    instagram,
    facebook,
  };

  const private = { // 👈👈
  "_learningPaths": [],
  };
} 

/*
2) Con Object.defineProperty añadiremos el getter y setter respectivo a la propiedad learningPaths.
En el setter es donde validaremos si un nuevo learning path que deseamos añadir es instancia del prototipo LearningPath:
*/

function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function requiredParam(param) { 
  throw new Error(param + " es obligatorio"); 
}

function LearningPath({ // PROTOTIPO
  name = requiredParam("name"), // Campo es obligatorio
  courses = [], // Lista de Cursos que pertencen a la ruta de aprendizaje 
}) { 
  this.name = name; this.courses = courses; 
}

function Student({ // PROTOTIPO
  name = requiredParam("name"), 
  email = requiredParam("email"), 
  age, 
  twitter, 
  instagram, 
  facebook, 
  approvedCourses = [], 
  learningPaths = [], 
} = {}) {
  // ASIGNACIÓN DE ATRIBUTOS
  this.name = name;
  this.email = email;
  this.age = age;
  this.approvedCourses = approvedCourses;
  this.socialMedia = {
    twitter,
    instagram,
    facebook,
  };

  const private = {
  "_learningPaths": [],
  };

  // "this" referencia al prototipo "Student"
  Object.defineProperty(this, "learningPaths", { // 👈👈
    get() { // GETTER
      return private["_learningPaths"];
  },
    set(newLp) { // SETTER
      if (newLp instanceof LearningPath) {
              // Si es que SÍ es una instancia, añadimos al array privado "_learningPaths"
        private["_learningPaths"].push(newLp);
      } else {
              // "LPs" hace referencia a Learning Paths
        console.warn("Alguno de los LPs NO es una instancia del prototipo LearningPath");
      }
    },
  });
}

/*
3) Con un bucle for in vamos a recorrer cada una de las rutas de aprendizaje
que queramos asignarle al nuevo estudiante para invocar al setter que generamos.
Este setter validará al learning path de turno si es en realidad una instancia del
prototipo LearningPath:
*/

function isObject(subject) { 
  return typeof subject == "object"; 
}

function isArray(subject) { 
  return Array.isArray(subject); 
}

function requiredParam(param) { 
  throw new Error(param + " es obligatorio"); 
}

function LearningPath({ // PROTOTIPO 
  name = requiredParam("name"), // Campo es obligatorio 
  courses = [], // Lista de Cursos que pertencen a la ruta de aprendizaje 
}) { 
  this.name = name; 
  this.courses = courses; 
}

function Student({ // PROTOTIPO 
  name = requiredParam("name"), 
  email = requiredParam("email"), 
  age, 
  twitter, 
  instagram, 
  facebook, 
  approvedCourses = [], 
  learningPaths = [], 
} = {}) {
  // ASIGNACIÓN DE ATRIBUTOS
  this.name = name;
  this.email = email;
  this.age = age;
  this.approvedCourses = approvedCourses;
  this.socialMedia = {
    twitter,
    instagram,
    facebook,
  };

  const private = {
  "_learningPaths": [],
  };

  // "this" referencia al prototipo "Student"
  Object.defineProperty(this, "learningPaths", {
    get() { // GETTER
      return private["_learningPaths"];
    },
    set(newLp) { // SETTER
      if (newLp instanceof LearningPath) {
        // Si es que SÍ es una instancia, añadimos al array privado "_learningPaths"
        private["_learningPaths"].push(newLp);
      } else {
        // "LPs" hace referencia a Learning Paths
        console.warn("Alguno de los LPs que quieres añadir NO es una instancia del prototipo LearningPath");
      }
    },
  });

  for (learningPathIndex in learningPaths) { // 👈👈
    // Al querer hacer una asignación, estamos invocando al setter de la
    // propiedad "learningPaths". Entonces, la ruta de aprendizaje ubicado
    // en el índice actual será validado por el setter para saber si es o no
    // instancia del prototipo LearningPath:
    this.learningPaths = learningPaths[learningPathIndex];
  };
};

/*
¡Listo! Nuestro atributo learningPaths quedó protegido. Intentemos crear un estudiante con
sus respectivos learning paths. Luego intentemos añadir una ruta adicional que sea
instancia del prototipo LearningPath y otra que no lo sea:
*/

const escuelaWeb = new LearningPath({ 
  name: "Escuela de WebDev" 
}); 

const escuelaData = new LearningPath({ 
  name: "Escuela de Data Science" 
}); 

const juan = new Student({ 
  email: "juanito@frijoles.co", 
  name: "Juanito", 
  learningPaths: [ 
    escuelaWeb, 
    escuelaData, 
  ], 
});

console.log(juan.learningPaths); // ANTES

const escuelaMarketing = new LearningPath({ 
  name: "Escuela de Marketing" 
});

juan.learningPaths = { 
  name: "Escuela Impostora" 
}; // 👈👀 juan.learningPaths = escuelaMarketing;

console.log(juan.learningPaths); // DESPUES

/* 
> Mensaje en consola [ LearningPath { name: 'Escuela de WebDev', courses: [] }, LearningPath { name:
Escuela de Data Science', courses: [] } ] Alguno de los LPs NO es una instancia del prototipo LearningPath 👈
👀 [ LearningPath { name: 'Escuela de WebDev', courses: [] }, LearningPath { name: 'Escuela de Data Science',
courses: [] }, LearningPath { name: 'Escuela de Marketing', courses: [] } ]
*/