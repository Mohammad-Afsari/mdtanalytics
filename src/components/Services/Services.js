import { useRef } from "react";
import "./Services.css";
// import background from "../../img/services4.jpg";
import background from "../../img/services6.jpg";
import dataSolutions from "../../img/datasolutions.png";
import digitalMarketing from "../../img/digitalmarketing.jpg";
import bi from "../../img/bi2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

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
          height: "97vh",
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
        <div className="serviceItem" data-aos="fade-up">
          <section
            style={{
              color: "whitesmoke",
              backgroundColor: "#2b3033",
              borderTopLeftRadius: "18px",
              borderBottomLeftRadius: "18px",
            }}
          >
            <p>DATA SOLUTIONS</p>
          </section>
          <section
            className="serviceImage"
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
        <div className="serviceItem" data-aos="fade-up">
          <section
            style={{
              color: "whitesmoke",
              backgroundColor: "#2b3033",
              borderTopLeftRadius: "18px",
              borderBottomLeftRadius: "18px",
            }}
          >
            <p>DIGITAL MARKETING</p>
          </section>
          <section
            className="serviceImage"
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
        <div className="serviceItem" data-aos="fade-up">
          <section
            style={{
              color: "whitesmoke",
              backgroundColor: "#2b3033",
              borderTopLeftRadius: "18px",
              borderBottomLeftRadius: "18px",
            }}
          >
            <p>BUSINESS INTELLIGENCE</p>
          </section>
          <section
            className="serviceImage"
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
