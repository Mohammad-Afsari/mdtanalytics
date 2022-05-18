import "./Contact.css";
import contacts from "../../img/contacts.jpg";
import { useState } from "react";

const Contact = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [website, setWebsite] = useState(null);

  const handleSubmit = () => {};

  return (
    <div
      className="contactsContainer"
      style={{
        backgroundImage: `url(${contacts}`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1 className="contactsHeader">
        LET <span>US</span> HELP <span>YOU</span>
      </h1>
      <p className="contactsMsg">
        Get in touch today to see how we might be able to help your business
        achieve new heights.
      </p>
      <form className="container contactForm" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="First Name"
          required
        ></input>
        <input
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="Last Name"
          required
        ></input>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          required
        ></input>
        <input
          onChange={(e) => setPhone(e.target.value)}
          type="number"
          placeholder="Phone"
          required
        ></input>
        <input
          onChange={(e) => setWebsite(e.target.value)}
          type="text"
          placeholder="Link to your website"
        ></input>
        <button type="submit" className="submitBtn">
          Submit Enquiry
        </button>
      </form>
      <div className="userMessage">Message sent.</div>
    </div>
  );
};

export default Contact;
