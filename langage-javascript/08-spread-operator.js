
const nbs = [2, 3, 4];

// changement immuable (création d'un tableau)
// const completed = [1, nbs[0], nbs[1], nbs[2], 5];
// ES2015
const completedArray = [1, ...nbs, 5];
const cloneArray = [...nbs];

const props = { prenom: 'Romain', age: 35 };

// ES2018
const completedObject = { ...props, isTrainer: true };
const cloneObject = {...props};
