import "./Clients.css";
import { HiOutlineLightBulb } from "react-icons/hi";
import { RiTeamFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";

const Clients2 = () => {
  return (
    <div className="whyUsContainer">
      <div className="whyUsIntro">
        <h1>Why Us?</h1>
        <p>Your business problems. Our state of the art solutions.</p>
      </div>
      <div className="whyUs">
        <div className="whyUsItem">
          <section className="whyUsImg">
            <HiOutlineLightBulb />
          </section>
          <div>
            <h6>Smart Solutions</h6>
            <section>description</section>
          </div>
        </div>
        <div className="whyUsItem">
          <section className="whyUsImg">
            <RiTeamFill />
          </section>
          <div>
            <h6>Collaboration and Support</h6>
            <section>description</section>
          </div>
        </div>
        <div className="whyUsItem">
          <section className="whyUsImg">
            <FaStar />
          </section>
          <div>
            <h6>Professional Team</h6>
            <section>description</section>
          </div>
        </div>
        <div className="whyUsItem">
          <section className="whyUsImg">
            <SiFastapi />
          </section>
          <div>
            <h6>Fast Results</h6>
            <section>description</section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients2;
