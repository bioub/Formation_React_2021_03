function hello() {
  console.log(`Hello my name is ${this.name}`);
}

const contact = {
  name: 'Romain',
};

hello();
hello.call(contact); // force l'appel de hello avec this === contact
const helloContact = hello.bind(contact); // génère une nouvelle fonction hello avec lors de l'appel de hello avec this === contact
helloContact();
