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
              <div className="introduction">
                <h1>Relax.</h1>
                <h4>Let us take the <span>data</span> reins and drive your <span>business</span> forward</h4>
                <h5>Welcome! We provide all the <span>tools</span>, <span>guidance</span> and <span>support</span> our <span>clients</span> need to succeed in their respective markets. Take a look around and explore the various <span>services</span> we offer, the <span>clients</span> that we’ve partnered with, and <span>samples</span> of our work.</h5>
              </div>
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
