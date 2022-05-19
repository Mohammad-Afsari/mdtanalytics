import "./Contact.css";
import contacts from "../../img/contacts.jpg";
import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [website, setWebsite] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.children[0].value);
    const userEnquiry = { firstName, lastName, email, phone, website };

    // emailjs
    //   .sendForm(
    //     "YOUR_SERVICE_ID",
    //     "YOUR_TEMPLATE_ID",
    //     form.current,
    //     "YOUR_PUBLIC_KEY"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };

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
          name="firstName"
          type="text"
          placeholder="First Name"
          required
        ></input>
        <input
          onChange={(e) => setLastName(e.target.value)}
          name="lastName"
          type="text"
          placeholder="Last Name"
          required
        ></input>
        <input
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder="Email"
          required
        ></input>
        <input
          onChange={(e) => setPhone(e.target.value)}
          name="contactNumber"
          type="number"
          placeholder="Contact Number"
          required
        ></input>
        <input
          onChange={(e) => setWebsite(e.target.value)}
          name="websiteLink"
          type="text"
          placeholder="Link to your website"
        ></input>
        <div className="submitContainer">
          <button type="submit" className="submitBtn">
            Submit Enquiry
          </button>
        </div>
      </form>
      <div className="userMessage">Submitted</div>
    </div>
  );
};

export default Contact;
