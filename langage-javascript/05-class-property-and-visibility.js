//
class Contact {
  #name = 'Romain';

  hello = () => {
    console.log(`Hello my name is ${this.#name}`);
  };

  helloWithCallback() {
    setTimeout(this.hello, 1000);
  }
}

const romain = new Contact();
romain.helloWithCallback();
