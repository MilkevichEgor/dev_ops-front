import styled from 'styled-components';

const BannerWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  max-height: 400px;
  height: 100%;
  background: #F0F4EF;
  border-radius: 16px;

  .background-img {
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .text-block {
    width: 217px;
  }
  
  .human-img {
    width: 406px;
    height: 400px;
    padding-left: 136px;
  }

  .link {
    text-decoration-line: none;
  }

  .link:visited {
    color: black;
  }

  @media (max-width: 1279px) {
    max-height: 289px;
    height: 100%;
    justify-content: left;

    .human-img {
      width: 328px;
      height: 364px;
      padding-left: 0;
      position: absolute;
      bottom: 0;
      right: 0;
    }

    .background-img {
      width: 361px;
    }
  }

  @media (max-width: 833px) {
    max-height: 505px;
    height: 505px;

    .human-img {
      width: 253px;
      height: 282px;
      right: unset;
      padding: 0 18px;
    }

    .background-img {
      width: 232px;
      height: 140px;
      top: 17px;
      left: 70px;
    }
  }
`;

export default BannerWrapper;
