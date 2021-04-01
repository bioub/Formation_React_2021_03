import { Component } from "react";

class UserForm extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
  };
  handleSubmit = (event) => {
    // désactive le comportement par défaut
    // dans le cas d'un submit de formulaire -> d'aller vers la page de résultats
    event.preventDefault();
    console.log(this.state);
    // TODO envoyer au serveur
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() {
    const { name, email, phone } = this.state;
    return (
      <form className="UserForm" onSubmit={this.handleSubmit}>
        <div>
          Name : <input name="name" value={name} onChange={this.handleChange} />
        </div>
        <div>
          Email : <input name="email" value={email} onChange={this.handleChange} />
        </div>
        <div>
          Phone : <input name="phone" value={phone} onChange={this.handleChange} />
        </div>
        <div>
          <button>Add</button>
        </div>
      </form>
    );
  }
}

export default UserForm;
