import styled from "styled-components";

export const Wrapper = styled.footer`
  width: 100%;
  background: #0a0a00;
  .footer__container {
    width: 95%;
    margin: 0 auto;
    padding-top: 10px;
    .footer__links {
      display: flex;
      padding-top: 60px;
      padding-bottom: 10px;
      border-bottom: 0.1px solid #ffffff;
      li {
        font-family: var(--primary-font);
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        color: #bebeb4;
        list-style: none;
        margin-right: 38px;
        cursor: pointer;
      }
    }
    .footer__socials {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 15px;
      .footer__logo {
        display: flex;
        align-items: baseline;
        > img {
          width: 200px;
          margin-right: 40px;
        }
        > p {
          font-family: var(--primary-font);
          font-style: normal;
          font-weight: 400;
          font-size: 1rem;
          color: #96968c;
        }
      }
      .socials {
        > svg {
          color: #ffffff;
          font-size: 3.2rem;
          margin-left: 15px;
          border-radius: 20px;
        }
      }
    }
  }
  @media (max-width: 750px) {
    .footer__links {
      flex-wrap: wrap;
      justify-content: center;
      li {
        margin-bottom: 10px;
      }
    }
    .footer__logo {
      flex-direction: column;
    }
  }
  @media (max-width: 400px) {
    .footer__socials {
      flex-direction: column;
      align-items: flex-start !important;
      .socials {
        margin-top: 20px;
        > svg {
          font-size: 2rem !important;
          margin-left: 0px !important;
        }
      }
    }
  }
`;
