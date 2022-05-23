import styled from 'styled-components';

const BannerWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
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
`;

export default BannerWrapper;
