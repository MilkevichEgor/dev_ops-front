import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: #0D1821;
  margin-top: auto;

  .footer__main {
    display: flex;
    justify-content: space-between;
    background: #0D1821;
    padding: 73px 80px 0 80px; 
    color: white;
    font-size: 20px;
    line-height: 30px;
    flex-shrink: 0;
  }

  .footer__logo {
    margin-bottom: 40px;
  }

  .footer__text {
    margin: 0;
  }

  .footer__nav {
    display: flex;
    flex-direction: column;
  }

  .nav__link {
    margin-bottom: 5px;
    text-decoration-line: none;
  }

  .nav__link:link {
    color: white;
  }

  .nav__link:visited {
    color: white;
  }

  .nav__link:hover {
    color: white;
  }
  
  .nav__link:active {
    color: white;
  }

  @media (max-width: 1279px) {
    .footer__main {
      padding: 73px 20px 0 15px;
      font-size: 16px;
      line-height: 24px; 
    }

    .footer__logo {
      margin-bottom: 30px;
    }

    .footer__map {
      width: 392px;
      height: 160px;
    }
  }

  @media (max-width: 833px) {
    .footer__main {
      flex-direction: column;
      padding: 73px 0 0 0;
    }

    .footer__contacts {
      padding-left: 5px;
    }

    .footer__logo {
      width: 88px;
      height: 46px;
    }

    .footer__map {
      width: 291px;
    }

    .footer__text {
      margin-bottom: 5px;
    }

    .footer__nav {
      margin: 40px 0;
    }
  }
`;

export default FooterWrapper;
