import { Wrapper } from "./Marketplace.style";
import chart from "../../Asset/chart.png";
import iphone from "../../Asset/smaller_phone.png";
import nigeria from "../../Asset/nig.png";
import cameroon from "../../Asset/cam.png";
import background from "../../Asset/footer_img.png";

const Marketplace = () => {
  return (
    <Wrapper id="marketplace">
      <div className="open__shop">
        <div className="content">
          <h1>Want to grow your business online?</h1>
          <p>
            Join plazzaa today to reach new customers, build loyalty and become
            a destination of choice.
          </p>
          <button>Partner with us</button>
        </div>
        <div className="img__container">
          <img src={chart} alt="demo" className="chart" />
          <img src={iphone} alt="iphone" className="phone" />
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
          <div className="back" style={{ backgroundImage: `url(${background})` }}>
          <h1>Join Plazzaa today</h1>

          <p>
            Find discounts, earn cash back and treat your loved ones.
          </p>

          <div className="end">
            <button>Explore Marketplace</button>
          </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Marketplace;
