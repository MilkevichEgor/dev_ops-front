import styled from 'styled-components';

const CommonTextBlock = styled.div`
  padding: 80px 10px 96px 0px;
  z-index: 1;

  .title {
    font-weight: 700;
    line-height: 60px;
    font-size: 40px;
    margin: 0;
  }

  .text {
    font-size: 20px;
    margin: 0;
    padding: 10px 0 50px;
  }

  .button {
    display: inline-flex;
  }

  @media (max-width: 1279px) {
    max-height: 289px;
    height: 100%;
    padding: 45px 14px 49px 40px;

    .title {
      font-weight: 700;
      line-height: 48px;
      font-size: 32px;
    }
  }
`;

export default CommonTextBlock;
