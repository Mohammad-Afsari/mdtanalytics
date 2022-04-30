import "./Footer.css";

const Footer = () => {
  const yearNow = new Date().getFullYear();

  return (
    <div className="footer">
      <p className="footerInfo">
        Copyright © {yearNow} MDT Analytics All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
