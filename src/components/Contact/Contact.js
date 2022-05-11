import "./Contact.css";
import contacts from "../../img/contacts.jpg";

const Contact = () => {
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
      <h1>LET US HELP YOU</h1>
      <p>
        Get in touch today to see how we might be able to help your business
        achieve new heights.
      </p>
      <form className="contactForm">
        <input type="text" placeholder="First Name" required></input>
        <input type="text" placeholder="Last Name" required></input>
        <input type="email" placeholder="Email" required></input>
        <input type="number" placeholder="Phone" required></input>
        <input type="text" placeholder="Link to your website" required></input>
        <button type="submit">Submit Enquiry</button>
      </form>
      <div id="userMessage">Message sent!</div>
    </div>
  );
};

export default Contact;
