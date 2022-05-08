import "./Footer.css";

const Footer = () => {
  const yearNow = new Date().getFullYear();

  return (
    <div className="footer">
      <p className="footerInfo">
        Copyright © {yearNow} <span>MDT Analytics</span> All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
