import styled from 'styled-components';

const CommonWrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  background: white;
  margin: auto;
  margin-bottom: 30px;

  @media (max-width: 1279px) {
    max-width: 804px;
    margin-bottom: 10px;
  }

  @media (max-width: 833px) {
    max-width: 290px;
    margin-bottom: 5px;
  }
`;

export default CommonWrapper;
