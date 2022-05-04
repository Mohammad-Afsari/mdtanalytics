import "./Clients.css";
import bianDang from "../../img/biandang.png";
import pollen from "../../img/pollen.png";
import sentinel from "../../img/sentinel.png";
import badgebespoke from "../../img/badgebespoke.jpg";
// import ourClients from "../../img/ourclients.jpg";
// import ourClients from "../../img/welovecustomers.jpg";
// import ourClients from "../../img/scales2.jpg";
// import ourClients from "../../img/trojan.jpg";
import ourClients from "../../img/ourclientsbr3.jpg";

const Clients = () => {
  return (
    <div
      className="clientsContainer"
      style={{
        backgroundImage: `url(${ourClients}`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="clientIntro">
        <section className="clientIntroItem">
          <h1>GREAT CLIENT CARE</h1>
          <p>
            Our attention is focused on taking care of your data and providing
            hassle free solutions.
          </p>
          <button>VIEW MORE</button>
        </section>
      </div>
    </div>
  );
};

export default Clients;
