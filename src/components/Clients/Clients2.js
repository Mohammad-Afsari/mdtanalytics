import "./Clients.css";
import { HiOutlineLightBulb } from "react-icons/hi";
import { RiTeamFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { forwardRef } from "react";

const Clients2 = forwardRef((props, ref) => {
  return (
    <div className="whyUsContainer" ref={ref}>
      <div className="whyUsIntro">
        <h1>Why Us?</h1>
        <p>Your business problems, our state-of-the-art solutions.</p>
      </div>
      <div className="whyUs">
        <div className="whyUsItem">
          <section className="whyUsImg">
            <HiOutlineLightBulb className="bulb" />
          </section>
          <div>
            <h6>Smart Solutions</h6>
            <section>
              Bring us your most challanging, wildest and most problematic
              issues and with our creative mindset we'll produce a working
              solution.
            </section>
          </div>
        </div>
        <div className="whyUsItem">
          <section className="whyUsImg">
            <RiTeamFill />
          </section>
          <div>
            <h6>Support</h6>
            <section>
              We'll provide the tools and support that will help you increase
              your revenues and add value to your business.
            </section>
          </div>
        </div>
        <div className="whyUsItem">
          <section className="whyUsImg">
            <FaStar />
          </section>
          <div>
            <h6>Professionals</h6>
            <section>
              We are a professional data analytics company with a team of tech
              savvies who are always at the forefront of the latest trends in
              analytics, marketing and web development.
            </section>
          </div>
        </div>
        <div className="whyUsItem">
          <section className="whyUsImg">
            <FaHandshake />
          </section>
          <div>
            <h6>Pride</h6>
            <section>
              We take pride in the work that we do and are extremely
              result-orientated and passionate about each and every one of our
              projects.
            </section>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Clients2;
