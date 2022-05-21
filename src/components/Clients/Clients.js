import "./Clients.css";
import ourClients from "../../img/ourclientsbr3.jpg";
import { useState } from "react";

const Clients = ({ clientCare }) => {
  const [isPending, setIsPending] = useState(true);

  const spinner = (() => {
    setTimeout(() => {
      setIsPending(false);
    }, 1500);
  })();

  const handleClick = () => {
    clientCare.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {isPending && (
        <div className="spinnerContainer">
          <div className="spinner">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      {!isPending && (
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
                Our attention is focused on taking care of your data and
                providing hassle free solutions.
              </p>
              <button onClick={handleClick}>VIEW MORE</button>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default Clients;
