import "./Clients.css";
import ourClients from "../../img/ourclientsbr3.jpg";

const Clients = ({ clientCare }) => {
  const handleClick = () => {
    clientCare.current.scrollIntoView({ behavior: "smooth" });
  };

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
          <button onClick={handleClick}>VIEW MORE</button>
        </section>
      </div>
    </div>
  );
};

export default Clients;
