import React, {Suspense} from "react";
import LoadingComponent from "./Components/loadingComponent.component";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import Login from "./Components/login.component";
import Register from "./Components/register.component";
import Team from "./team";
import About1 from "./about";

const Navbar =  React.lazy(() => import("./Components/navbar.component"));
// const Footer =  React.lazy(() => import("./Components/footer.component"));

function App() {
  return (
    <div className="App">
      <Router>
      <Suspense fallback={<LoadingComponent/>}>
        <Navbar/>

        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/about' component={About1} />
        <Route path='/team' component={Team} />

        {/* <Footer/> */}
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
