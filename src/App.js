import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Clients from "./components/Clients/Clients";
import Contact from "./components/Contact/Contact";
import Introduction from "./components/Home/Introduction/Introduction";
import Footer from "./components/Footer/Footer";
import bianDang from "./img/biandang.png";
import Clients2 from "./components/Clients/Clients2";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="pages">
          <Switch>
            <Route exact path="/">
              {/* Two components required as a dynamic background has been used in particlejs */}
              <Home />
              <Introduction />
            </Route>

            <Route path="/services">
              <Services />
              <Footer />
            </Route>

            <Route path="/clients">
              <Clients />
              <Clients2 />
              <Footer />
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
