import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
// https://codepen.io/Bilal1909/pen/zYqrdRe
// https://codepen.io/Anon_satyam/pen/JjXLoNJ

const Introduction = () => {
    return ( 
        <div className="introduction">
            <h1>Relax.</h1>
            <h4>Let us take the <span>data</span> reins and drive your <span>business</span> forward.</h4>
            <h5>We provide all the <span>tools</span>, <span>guidance</span> and <span>support</span> our <span>clients</span> need to succeed in their respective markets. Take a look around and explore the various <span>services</span> we offer, the <span>clients</span> that we’ve partnered with, and <span>samples</span> of our work.</h5>
            <div className="links">
                <NavLink to="/services" className="nav-logo">
                    <button className="linkBtn services">Services</button>
                </NavLink>
                
                <NavLink to="/clients" className="nav-logo">
                    <button className="linkBtn clients">Clients</button>
                </NavLink>

                <NavLink to="/contact" className="nav-logo">
                    <button className="linkBtn contact">Contact</button>
                </NavLink>
            </div>
        </div>
     );
}
 
export default Introduction;