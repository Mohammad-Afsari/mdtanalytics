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
import biandang from "../../img/biandang.png";
import pollen from "../../img/pollen.png";
// import sentinel from "../../img/sentinel.png";
import sentinel from "../../img/sentinel2.JPG";
import badgebespoke from "../../img/badgebespoke2.jpg";
import ourClients from "../../img/ourclientsbr3.jpg";

const Clients3 = () => {
  return (
    <div className="clientsSliderContainer">
      <h1>Our Clients</h1>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slideClientItem">
            <section
              style={{
                backgroundImage: `url(${biandang})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: "10px",
                height: "90%",
                width: "100%",
              }}
            ></section>
            <section className="clientDetails">
              <h6>Client Name</h6>
              <p>Description</p>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="slideClientItem">
            <section
              style={{
                backgroundImage: `url(https://static.wixstatic.com/media/8c007a_fe7474ae38144ca8bbcca38b0f5f1144~mv2.png/v1/fill/w_301,h_167,al_c,q_85,enc_auto/download.png)`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: "10px",
                height: "50%",
                width: "100%",
              }}
            ></section>
            <section className="clientDetails">
              <h6>Client Name</h6>
              <p>Description</p>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="slideClientItem">
            <section
              style={{
                backgroundImage: `url(${sentinel})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: "10px",
                height: "50%",
                width: "100%",
              }}
            ></section>
            <section className="clientDetails">
              <h6>Client Name</h6>
              <p>Description</p>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="slideClientItem">
            <section
              style={{
                backgroundImage: `url(${badgebespoke})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: "10px",
                height: "50%",
                width: "50%",
              }}
            ></section>
            <section className="clientDetails">
              <h6>Client Name</h6>
              <p>Description</p>
            </section>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Clients3;
