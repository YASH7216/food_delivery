import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            eos minus quia quisquam commodi eius expedita voluptatum sint
            pariatur earum nisi explicabo aperiam quis repellat iusto
            architecto, omnis nam harum. Consequuntur, sed.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <li>+91-6362119096</li>
            <li>yashbastawad@gmail.com</li>
            
        </div>
      </div>
      <hr />
     <p className="footer-copyright">Copy 2024 c Tomato.com - All Right Reserved.</p>

    </div>
  );
};

export default Footer;
