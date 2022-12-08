import { Wrapper } from "./Marketplace.style";
import demo from "../../Asset/demo.png";
import nigeria from "../../Asset/nig.png";
import cameroon from "../../Asset/cam.png";

const Marketplace = () => {
  return (
    <Wrapper id="marketplace">
      <div className="open__shop">
        <div className="content">
          <h1>Want to grow your business online?</h1>
          <p>
            Join plazzaa today to reach new customers, build loyalty and become a destination of choice. 
          </p>
          <button>Partner with us</button>
        </div>
        <div className="img__container">
          <img src={demo} alt="demo" />
        </div>
      </div>
      <div className="marketplace">
        <div className="countries">
          <h1>Available in 2 countries today with many more coming soon </h1>
          <div className="flag__image">
            <div className="flag">
              <img src={nigeria} alt="nigeria flag" />
              <p>Nigeria</p>
            </div>
            <div className="flag">
              <img src={cameroon} alt="cameroon flag" />
              <p>Cameroon</p>
            </div>
          </div>
          <h1>Get started today</h1>
          <div className="text">
          <p> 
            Find inspiration, book incredible deals and treat your loved ones.
          </p>
          </div>
          <div className="end">
          <button>Explore Marketplace</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Marketplace;
