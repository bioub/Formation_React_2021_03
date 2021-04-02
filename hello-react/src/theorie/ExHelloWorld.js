import { Component } from "react";

// class ExHelloWorld extends Component {
//   constructor() {
//     super();
//     this.state = {
//       prenom: '',
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(event) {
//     // en réalité, c'est l'événement input du DOM qui est déclenché
//     this.setState({
//       prenom: event.target.value
//     });
//   }
//   render() {
//     const { prenom } = this.state;
//     return (
//       <div className="ExHelloWorld">
//         <div>
//           Prénom : <input onChange={this.handleChange} />
//         </div>
//         <p>Bonjour {prenom}</p>
//       </div>
//     );
//   }
// }

class ExHelloWorld extends Component {
  // stage 3 class properties
  state = {
    prenom: '',
  };
  handleChange = (event) => {
    // en réalité, c'est l'événement input du DOM qui est déclenché
    this.setState({
      prenom: event.target.value
    });
  }
  render() {
    const { prenom } = this.state;
    return (
      <div className="ExHelloWorld">
        <div>
          Prénom : <input onChange={this.handleChange} />
        </div>
        <p>Bonjour {prenom}</p>
      </div>
    );
  }
}

export default ExHelloWorld;
