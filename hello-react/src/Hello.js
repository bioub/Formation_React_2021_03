// optionnel depuis React 17
// import React from "react";

import React from "react";

function Hello({ name = '', age = 0, isTrainer = false }) {
  // const divEl = document.createElement('div');
  // divEl.className = 'Hello';
  // divEl.innerText = 'Hello World';

  // document.body.appendChild(divEl);

  // return '';

  // return React.createElement(
  //   "div",
  //   {
  //     className: "Hello",
  //   },
  //   "Hello ",
  //   React.createElement("b", {}, "World")
  // );

  return (
    <div className="Hello">
      Hello my name is <b>{name}</b>, I'm {age}
    </div>
  );
}

export default Hello;
