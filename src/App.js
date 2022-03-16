import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Home } from "./components/pages/Home";
// import { About } from "./components/pages/About";
// import { Blog } from "./components/pages/Blog";
// import { Contact } from "./components/pages/Contact";

import Home from './components/Home/Home';
import Services from './components/About/About';
import Clients from './components/Clients/Clients'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="pages">
          <Switch>
            <Route exact path="/" >
              <Home />  
            </Route>

            <Route path="/about">
              <Services />  
            </Route>

            <Route path="/blog">
              <Clients />  
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>
            
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
