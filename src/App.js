import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Services from './components/About/Services';
import Clients from './components/Clients/Clients'
import Contact from './components/Contact/Contact'
import Introduction from './components/Home/Introduction/Introduction';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="pages">
          <Switch>
            <Route exact path="/" >
              <Home />  
              <Introduction />
            </Route>

            <Route path="/services">
              <Services />  
            </Route>

            <Route path="/clients">
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
