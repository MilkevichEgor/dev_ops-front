import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: #0D1821;
  margin-top: auto;

  .main-block {
    display: flex;
    justify-content: space-between;
    background: #0D1821;
    /* margin-top: 100px; */
    padding: 73px 80px; 
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
`;

export default FooterWrapper;
