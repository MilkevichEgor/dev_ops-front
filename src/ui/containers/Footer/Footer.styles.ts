import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: #0D1821;
  margin-top: auto;

  .main-block {
    display: flex;
    justify-content: space-between;
    background: #0D1821;
    padding: 73px 80px 0 80px; 
    color: white;
    font-size: 20px;
    line-height: 30px;
    flex-shrink: 0;
  }

  .logo {
    margin-bottom: 40px;
  }

  .text {
    margin: 0;
  }

  .nav {
    display: flex;
    flex-direction: column;
  }

  .link {
    margin-bottom: 5px;
    text-decoration-line: none;
  }

  .link:link {
    color: white;
  }

  .link:visited {
    color: white;
  }

  .link:hover {
    color: white;
  }
  
  .link:active {
    color: white;
  }

  @media (max-width: 1279px) {
    .main-block {
      padding: 73px 20px 0 15px;
      font-size: 16px;
      line-height: 24px; 
    }

    .logo {
      margin-bottom: 30px;
    }

    .map {
      width: 392px;
      height: 160px;
    }
  }
`;

export default FooterWrapper;
