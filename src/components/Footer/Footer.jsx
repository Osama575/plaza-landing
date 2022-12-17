import { footerLinks } from "../../utils";
import { Wrapper } from "./Footer.style";
import {
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import Logo from "../../Asset/L6x.png";

const Footer = () => {
  return (
    <Wrapper id="footer">
      <div className="footer__container">
        <div className="footer__socials">
          <div className="footer__logo">
            <img src={Logo} alt="Footer Logo" />
            <p>Plazzaa inc. All rights reserved</p>
          </div>
          <div className="socials">
            <AiFillFacebook />
            <AiFillInstagram />
            <AiFillTwitterSquare />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
