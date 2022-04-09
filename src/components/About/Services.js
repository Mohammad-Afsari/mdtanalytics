import { useRef } from "react";
import "./Services.css";

const Services = () => {
  const allServices = useRef(null);

  const handleClick = () => {
    allServices.current.scrollIntoView();
  };

  return (
    <div className="servicesContainer">
      <div className="servicesIntro">
        <section className="title">Consulting Services</section>
        <section className="subTitle">Gaurenteed sucess</section>
      </div>
      <div class="mouse_scroll" onClick={handleClick}>
        <div class="mouse">
          <div class="wheel"></div>
        </div>
        <div>
          <span class="m_scroll_arrows unu"></span>
          <span class="m_scroll_arrows doi"></span>
          <span class="m_scroll_arrows trei"></span>
        </div>
      </div>
      <div ref={allServices} className="allServices">
        <section>HELLO</section>
      </div>
    </div>
  );
};

export default Services;
