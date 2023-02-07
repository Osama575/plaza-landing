import { Wrapper } from "./OurApp.style";
import SamsungPhone from "../../Asset/iphone-10.png";
import Logo from "../../Asset/logo1.png";

const OurApp = () => {
  return (
    <Wrapper>
      <input type="text" />
      <div className="ourApp__container">
        <div className="img__container">
          <img src={SamsungPhone} alt="" />
        </div>
        <div className="content">
          <img src={Logo} alt="" />
          <h2>Get Plazzaa app</h2>
          <p>
            Run your business on the go, anytime, anywhere with our mobile app
            on both Android and IOS.
          </p>
          <h4>Coming soon !!!</h4>
          <form>
            <input placeholder="Enter your e-mail" />
            <button>Register your interest</button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default OurApp;
