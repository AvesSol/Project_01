import React, {Suspense} from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home'
import Login from "./Components/login.component";
import Register from "./Components/register.component";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Router>
    </div>
  );
}

export default App;
