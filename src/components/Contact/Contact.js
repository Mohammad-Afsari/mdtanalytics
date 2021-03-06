import "./Contact.css";
import contacts from "../../img/contacts.jpg";
import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useHistory } from "react-router-dom";

const Contact = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [website, setWebsite] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const form = useRef();
  const history = useHistory();

  const spinner = (() => {
    setTimeout(() => {
      setIsPending(false);
    }, 1500);
  })();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d0yqxhd",
        "template_ehqpyrm",
        form.current,
        "4aRuYTHzYZnU8-Fjs"
      )
      .then(
        (result) => {
          console.log(result.text);
          setTimeout(() => {
            history.push("/");
          }, 1500);
        },
        (error) => {
          console.log(error.text);
        }
      );

    // Get the snackbar DIV
    const messageElement = document.getElementById("userMessage");

    // Add the "show" class to DIV
    messageElement.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
      messageElement.className = messageElement.className.replace("show", "");
    }, 3000);

    e.target.reset();

    // Redirect back to home page
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
          <form
            ref={form}
            className="container contactForm"
            onSubmit={handleSubmit}
          >
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
          <div id="userMessage">Submitted</div>
        </div>
      )}
    </>
  );
};

export default Contact;
