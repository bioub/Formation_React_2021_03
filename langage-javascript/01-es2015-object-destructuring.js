const values = {
  name: 'Romain',
  age: 35,
  isTraining: true,
};

// const prenom = values.name !== undefined ? values.name : 'World';
// const age = values.age !== undefined ? values.age : 0;
// const isTraining = values.isTraining !== undefined ? values.age : false;

// ES2020 Nullish Coalescing Operator
// const name = values.name ?? 'World';
// const age = values.age ?? 0;
// const isTraining = values.isTraining ?? false;

//    { name: 'Romain', age: 35, isTraining: true }
const { name: prenom } = values;
console.log(prenom);

// Combiner avec une autre syntaxe ES2015 Shortand property
// const { name: name } = values;
const { name } = values;
console.log(name);

// Combiner avec une autre syntaxe ES2015 Default value
const { age = 0, city = 'Paris' } = values;
console.log(age); // 35
console.log(city); // Paris (valeur par défaut)
