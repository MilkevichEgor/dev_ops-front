import styled from 'styled-components';

const NotFoundWrapper = styled.div`
  font-size: 50px;
  text-align: center;
  margin: 150px;

  .link {
    text-decoration: none;
  }

  .link:visited {
    color: #344966;
  }

  @media (max-width: 1300px) {
    font-size: 40px;
  }

  @media (max-width: 840px) {
    font-size: 24px;
    margin: 100px;
  }
`;

export default NotFoundWrapper;
