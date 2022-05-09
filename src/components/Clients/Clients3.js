import "./Clients.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

// Clients
import biandang from "../../img/biandangofficial.JPG";
import pollen from "../../img/pollenofficial.JPG";
import sentinel from "../../img/sentinelofficial.JPG";
import badgebespoke from "../../img/badgebespokeofficial.JPG";

const Clients3 = () => {
  return (
    <div className="clientsSliderContainer">
      <h1>Our Clients</h1>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slideClientItem">
            <section
              className="clientLogo"
              style={{
                backgroundImage: `url(${biandang})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: "10px",
                height: "250px",
                width: "250px",
              }}
            ></section>
            <section className="clientDetails">
              <h6>Bian Dang</h6>
              <p>Dark Kitchen</p>
              <p>Services provided:</p>
              <ul>
                <li>PPC</li>
                <li>Social</li>
              </ul>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="slideClientItem">
            <section
              className="clientLogo"
              style={{
                backgroundImage: `url(${pollen})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: "10px",
                height: "250px",
                width: "250px",
              }}
            ></section>
            <section className="clientDetails">
              <h6>Pollen</h6>
              <p>Events</p>
              <p>Services provided:</p>
              <ul>
                <li>Looker Business Intelligence</li>
                <li>Retool Application Builds</li>
                <li>Data Consulting</li>
                <li>DBT Analytics Engineering</li>
              </ul>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="slideClientItem">
            <section
              className="clientLogo"
              style={{
                backgroundImage: `url(${sentinel})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: "10px",
                height: "250px",
                width: "250px",
              }}
            ></section>
            <section className="clientDetails">
              <h6>Sentinel</h6>
              <p>Recruitment Consultants</p>
              <p>Project / client matching partner</p>
              {/* <ul>
                <li>PPC</li>
                <li>Social</li>
              </ul> */}
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="slideClientItem">
            <section
              className="clientLogo"
              style={{
                backgroundImage: `url(${badgebespoke})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: "10px",
                height: "250px",
                width: "250px",
              }}
            ></section>
            <section className="clientDetails">
              <h6>Badge Bespoke</h6>
              <p>Bespoke Jewellery</p>
              <p>Services provided:</p>
              <ul>
                <li>PPC</li>
                <li>Paid Social</li>
                <li>Google Analytics</li>
                <li>Google Tag Manager</li>
              </ul>
            </section>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Clients3;
