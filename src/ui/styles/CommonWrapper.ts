import styled from 'styled-components';

const CommonWrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  background: white;
  margin: auto;
  flex-grow: 1;
  margin-bottom: 30px;

  @media (max-width: 1279px) {
    max-width: 804px;
    margin-bottom: 10px;
  }
`;

export default CommonWrapper;
