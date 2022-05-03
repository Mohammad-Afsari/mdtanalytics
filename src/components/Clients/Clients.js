import "./Clients.css";
import bianDang from "../../img/biandang.png";
import pollen from "../../img/pollen.png";
import sentinel from "../../img/sentinel.png";
import badgebespoke from "../../img/badgebespoke.jpg";
import ourClients from "../../img/ourclients.jpg";

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
      <div className="clientsContainerChild">
        <section
          className="clientItem "
          style={{
            backgroundImage: `url(${bianDang}`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          1
        </section>
        <section
          className="clientItem "
          style={{
            backgroundImage: `url(${pollen}`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          2
        </section>
        <section
          className="clientItem "
          style={{
            backgroundImage: `url(${sentinel}`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          3
        </section>
        <section
          className="clientItem "
          style={{
            backgroundImage: `url(${badgebespoke}`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          4
        </section>
      </div>
    </div>
  );
};

export default Clients;
