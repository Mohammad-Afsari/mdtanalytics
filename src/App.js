import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Clients from "./components/Clients/Clients";
import Contact from "./components/Contact/Contact";
import Introduction from "./components/Home/Introduction/Introduction";
import Footer from "./components/Footer/Footer";
import Clients2 from "./components/Clients/Clients2";
import Clients3 from "./components/Clients/Clients3";
import { useRef } from "react";

function App() {
  const clientCare = useRef(null);

  return (
    <>
      <Router>
        {/* <Navbar /> */}
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
              <Clients clientCare={clientCare} />
              <Clients2 ref={clientCare} />
              <Clients3 />
              <Footer />
            </Route>

            <Route path="/contact">
              <Contact />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
