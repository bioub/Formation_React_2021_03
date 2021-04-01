class Contact {
  constructor(name) {
    this.name = name;
    // si hello existe sous forme de propriété ET
    // de méthode, la propriété est utilisée en priorité
    this.hello = () => {
      console.log(`Bonjour mon nom est ${this.name}`);
    };
  }
  hello() {
    console.log(`Hello my name is ${this.name}`);
  }
}

const obj = new Contact('Romain');
obj.hello(); // Bonjour mon nom est Romain
