import { useRef } from "react";
import "./Services.css";
import background from "../../img/services4.jpg";
import dataSolutions from "../../img/datasolutions.png";
import digitalMarketing from "../../img/digitalmarketing.jpg";
import bi from "../../img/bi2.jpg";

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
        <div className="serviceItem">
          <section
            style={{
              color: "whitesmoke",
              backgroundColor: "#2b3033",
              borderTopLeftRadius: "18px",
              borderBottomLeftRadius: "18px",
            }}
          >
            DATA SOLUTIONS
          </section>
          <section
            style={{
              backgroundImage: `url(${dataSolutions}`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: "100%",
              height: "100%",
              borderTopRightRadius: "18px",
              borderBottomRightRadius: "18px",
            }}
          ></section>
        </div>
        <div className="serviceItem">
          <section
            style={{
              color: "whitesmoke",
              backgroundColor: "#2b3033",
              borderTopLeftRadius: "18px",
              borderBottomLeftRadius: "18px",
            }}
          >
            DIGITAL MARKETING
          </section>
          <section
            style={{
              backgroundImage: `url(${digitalMarketing}`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderTopRightRadius: "18px",
              borderBottomRightRadius: "18px",
            }}
          ></section>
        </div>
        <div className="serviceItem">
          <section
            style={{
              color: "whitesmoke",
              backgroundColor: "#2b3033",
              borderTopLeftRadius: "18px",
              borderBottomLeftRadius: "18px",
            }}
          >
            BUSINESS INTELLIGENCE
          </section>
          <section
            style={{
              backgroundImage: `url(${bi}`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderTopRightRadius: "18px",
              borderBottomRightRadius: "18px",
            }}
          ></section>
        </div>
      </div>
    </div>
  );
};

export default Services;
