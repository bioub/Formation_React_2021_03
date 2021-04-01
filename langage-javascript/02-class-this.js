// Problème avec this
// class Contact {
//   constructor(name) {
//     this.name = name;
//   }
//   hello() {
//     console.log(`Hello my name is ${this.name}`);
//   }
//   helloWithCallback() {
//     setTimeout(this.hello, 1000);
//   }
// }

// Problème réglé avec .bind()
// class Contact {
//   constructor(name) {
//     this.name = name;
//   }
//   hello() {
//     console.log(`Hello my name is ${this.name}`);
//   }
//   helloWithCallback() {
//     setTimeout(this.hello.bind(this), 1000);
//   }
// }

// Problème réglé avec () => {}
class Contact {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(`Hello my name is ${this.name}`);
  }
  helloWithCallback() {
    // la fonction fléché ne créé pas la variable this
    // donc on récupère le this d'ici (l'objet contact)
    setTimeout(() => this.hello(), 1000);
  }
}

const obj = new Contact('Romain');
obj.helloWithCallback();
