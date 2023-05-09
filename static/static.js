const yordy = {
  name: "Yordy Almonte",
  age: 27,
  approvedCourses: [
    "Curso React"
  ],
  
  addCourses(newCourse) {
    this.addCourses.push(newCourse);
  },
};

// console.log(Object.keys(yordy));
// console.log(Object.getOwnPropertyNames(yordy));
// console.log(Object.entries(yordy));
// console.log(Object.getOwnPropertyDescriptors(yordy));
console.log(Object.defineProperty(yordy,'Property-Name', {
  value: 'Value-Name',
  enumerable: true, // Permite o evita que el atributo sea listado en segun que metodos del super proptotipo Object
  writable: true, // Permite o evita que el atributo sea sobrescrito
  configurable: true, // Permite o evita que la propiedad sea borrada.
}));


Object.seal(); // Impide que las propiedades del objeto sean borradas.
Object.freeze(); // Impide que las propiedades del objeto no sean modificadas.