// optionnel depuis React 17
// import React from "react";

import React from "react";

function Hello() {
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
      Hello <b>World</b>
    </div>
  );
}

export default Hello;
