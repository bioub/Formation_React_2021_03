// optionnel depuis React 17
// import React from "react";

import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Redux from "./pages/Redux";
import Todos from "./pages/Todos";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">Demos React</Link>
          <Link to="/redux">Demos Redux</Link>
          <Link to="/todos">Todos</Link>
        </nav>

        <Switch>
          <Route path="/todos" component={Todos} />
          <Route path="/redux" component={Redux} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
