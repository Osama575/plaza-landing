import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  /* margin-bottom: 40px; */
  .open__shop {
    display: flex;
    background-color: #1f1f1f;
    justify-content: space-between;
    align-items: center;
    height: 500px;
    .content {
      color: #ffffff;
      width: 35%;
      margin: 0 auto;

      h1 {
        font-family: var(--primary-font);
        font-style: normal;
        font-weight: 700;
        font-size: 1.9rem;
        margin-bottom: 20px;
      }
      p {
        font-family: var(--primary-font);
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 24px;
        letter-spacing: 0.5px;
        color: #d2d2c8;
        margin-bottom: 60px;
      }
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 24px;
        gap: 8px;
        width: 143px;
        height: 48px;
        background: #a70e0d;
        border-radius: 10px;
        font-family: var(--primary-font);
        font-style: normal;
        font-weight: 700;
        font-size: 0.85rem;
        letter-spacing: 0.1px;
        color: #ffffff;
        border: none;
        outline: none;
        cursor: pointer;
        margin-bottom: 40px;
      }
    }

    .img__container {
      width: 50%;
      height: 100%;
      position: relative;
      background-color: #ffffff;
      .chart {
        width: 100%;
        height: 93%;

        /* border-top-left-radius: 25px; */
      }
      .phone {
        position: absolute;
        /* top: 126px; */
        bottom: -31px;
        right: 0;
        filter: drop-shadow(-42px 12px 24px rgba(0, 0, 0, 0.22));
        height: 400px;
        width: 240px;
      }
    }
  }

  .countries {
    width: 60%;
    margin: 0 auto;
    margin-top: 100px;
    h1 {
      margin: 25px 0;
      text-align: center;
      font-family: var(--primary-font);
      font-style: normal;
      font-weight: 700;
      font-size: 1.9rem;
      color: var(--clr-black);
    }
    .flag__image {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    .flag {
      width: 45%;
      img {
        width: 100%;
      }
      > p {
        text-align: center;
        margin-top: 25px;
        font-family: var(--primary-font);
        font-weight: 400;
        font-size: 1.4rem;
        color: #000000;
      }
    }
    p {
      text-align: center;
    }
  }

  @media (max-width: 880px) {
    .open__shop {
      flex-direction: column;
      height: fit-content;
      padding: 40px 0;
    }
    .content {
      width: 80% !important;
    }
    .img__container {
      width: 80% !important;
      img {
        border-radius: 10px !important;
      }
    }
    .phone {
      /* top: 0 !important; */
      bottom: -38px !important;
      height: 369px !important;
      width: 225px !important;
    }
  }

  @media (max-width: 680px) {
    .open__shop {
      padding: 20px;
      .img__container {
        width: 100%;
      }
    }
    .content {
      width: 90% !important;
      margin: 30px auto;
      h1 {
        font-size: 1.2rem;
        font-weight: 600;
      }
      p {
        font-size: 0.8rem;
        margin-bottom: 20px !important;
      }
    }

    .marketplace__detials {
      width: 100%;
      position: static;
      clip-path: none;
      text-align: center;
      .marketplace__info {
        align-items: center;
        width: 80%;
      }
    }
    .countries {
      width: 90%;
    }
    .phone {
      /* top: 0 !important; */

      height: 279px !important;
      width: 188px !important;
    }
  }

  @media (max-width: 540px) {
    .phone {
      /* top: 0 !important; */
      bottom: -30px !important;
      height: 204px !important;
      width: 151px !important;
    }
  }
  @media (max-width: 450px) {
    .phone {
      bottom: -28px !important;
      height: 174px !important;
      width: 131px !important;
    }
  }

  /* .end {
    display: flex;
    justify-content: center;
    text-align: center; */

  .explore {
    height: 508px;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 60px;
    .explore__content {
      margin-right: 130px;
      display: flex;
      flex-direction: column;
      align-items: center;
      /* jus */
      /* width: 36%; */
      > h1 {
        color: var(--clr-white);
        font-family: var(--primary-font);
        font-style: normal;
        font-weight: 700;
        font-size: 2.5rem;
        letter-spacing: 0.04em;
        line-height: 40px;
      }
      > p {
        color: var(--clr-white);
        margin: 6px 0;
        font-family: var(--primary-font);
        font-style: normal;
        font-weight: 400;
        font-size: 1.3rem;
        line-height: 28px;
      }
      /* align-items: center; */
      > button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 180px;
        height: 48px;
        display: flex;
        border: none;
        background: #a70e0d;
        border-radius: 10px;
        font-family: var(--primary-font);
        font-style: normal;
        font-weight: 700;
        font-size: 1rem;
        color: #ffffff;
        cursor: pointer;
        margin: 25px 0;
        text-align: center;
      }
    }
  }
  @media (max-width: 760px) {
    .explore {
      justify-content: center;
      .explore__content {
        margin-right: 0px !important;
        padding: 0 20px;
        h1 {
          text-align: center;
          font-size: 1.7rem;
        }
        p {
          text-align: center;
          font-size: 1rem;
        }
      }
    }
  }
  /* . text {
  display: flex;
  justify-content: center;
  text-align:center;
} */
`;
