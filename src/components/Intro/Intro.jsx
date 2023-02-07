import { Wrapper } from "./Intro.style.js";
import bbq from "../../Asset/bbq_small.png";
import bed from "../../Asset/bed.png";
import elect from "../../Asset/electricity.png";
import gift from "../../Asset/gift_small.png";
import health from "../../Asset/health_care.png";
import spa from "../../Asset/spa_small.png";

const Intro = () => {
  return (
    <Wrapper id="home">
      <div className="intro__details">
        <h1>
          Digital commerce tools to <span>grow your business</span>
        </h1>

        <p>
          Sell online, engage your customers, and manage your entire business,
          all with one easy-to-use solution.
        </p>
        <button className="intro__btn">Request Demo</button>
      </div>
      <div className="intro__img">
        <div className="img__container-1 small_img">
          <img src={bbq} alt="bbq" />
        </div>
        <div className="img__container-2 small_img">
          <img src={spa} alt="plaza card" />
        </div>
        <div className="img__container-3  small_img">
          <img src={elect} alt="plaza card" />
        </div>
        <div className="img__container-4 small_img">
          <img src={gift} alt="plaza card" />
        </div>
        <div className="img__container-5 small_img">
          <img src={health} alt="plaza card" />
        </div>
        <div className="img__container-6 big_img">
          <img src={bed} alt="plaza card" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Intro;
