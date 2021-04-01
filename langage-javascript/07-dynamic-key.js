const users = [{id: 1, name: 'A'}, {id: 2, name: 'B'}, {id: 3, name: 'C'}];


const usersMap = {
  [users[0].id]: {id: 1, name: 'A'},
  [users[1].id]: {id: 2, name: 'B'},
  [users[2].id]: {id: 3, name: 'C'},
};

// const user3 = users.find((user) => user.id === 3);

const user3 = usersMap[3];
console.log(Object.keys(usersMap)); // [1, 2, 3]
console.log(Object.values(usersMap)); // [{id: 1, name: 'A'}, {id: 2, name: 'B'}, {id: 3, name: 'C'}];


const values = {
  name: 'Romain',
  age: 35,
  isTraining: true,
};

console.log(values.name); // Romain

const key = 'name';
console.log(values[key]); // Romain

values[key] = 'Jean';

const test = {
  [key]: 'Romain',
};

