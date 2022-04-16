import { useRef } from "react";
import "./Services.css";
import background from "../../img/services2.jpg";

const Services = () => {
  const allServices = useRef(null);

  const handleClick = () => {
    allServices.current.scrollIntoView();
  };

  return (
    <div className="servicesContainer">
      <div
        style={{
          backgroundImage: `url(${background}`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          //   width: "100vw",
          height: "95vh",
        }}
        className="servicesIntro"
      >
        <section className="title">Consulting Services</section>
        <section className="subTitle">Gaurenteed success</section>
        <div className="mouse_scroll" onClick={handleClick}>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div>
            <span className="m_scroll_arrows unu"></span>
            <span className="m_scroll_arrows doi"></span>
            <span className="m_scroll_arrows trei"></span>
          </div>
        </div>
      </div>

      <div ref={allServices} className="allServices">
        <section>HELLO</section>
      </div>
    </div>
  );
};

export default Services;
