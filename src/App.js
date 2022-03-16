import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Blog } from "./components/pages/Blog";
import { Contact } from "./components/pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
