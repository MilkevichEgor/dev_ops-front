import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  background: #F0F4EF;
  border-radius: 16px;
  max-height: 400px;
  height: 100%;
  margin-top: 100px;

  .text-block {
    position: relative;
    max-width: 415px;
    width: 100%;
    padding-right: 108px;
    z-index: 1;
  }

  .button {
    text-decoration-line: none;
  }

  .info-block {
    position: relative;
  }

  .main-img {
    position: absolute;
    left: 108px;
    bottom: 0;
  }

  .background-img {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  @media (max-width: 1279px) {
    margin-top: 0;
    max-height: 400px;
    height: 100%;

    .main-img {
      width: 389px;
      height: 345px;
      left: 0;
    }

    .background-img {
      width: 377px;
    }

    .text-block {
      padding: 80px 0 118px;
      max-width: 392px;
    }
  }

  @media (max-width: 833px) {
    max-height: 501px;
    height: 501px;

    .main-img {
      width: 282px;
      height: 250px;
    }

    .background-img {
      width: 246px;
      bottom: unset;
      top: 0;
    }

    .text-block {
      padding: 20px;
      max-width: 249px;
    }
  }
`;

export default Wrapper;
