import styled from 'styled-components';

const EmptyCartWrapper = styled.div`
  display:flex;

  .img {
    height: 261px;
    width: 433px;
    padding: 80px 108px;
  }

  .text-block {
    max-width: 465px;
    width: 100%;
    font-size: 24px;
    line-height: 36px;
    color: #344966;
  }

  .link {
    text-decoration: none;
  }

  @media (max-width: 1279px) {
    padding: 0 15px;
    
    .img {
      height: 212px;
      width: 350px;
      padding: 0;
    }

    .text-block {
      max-width: 310px;
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media (max-width: 833px) {
    flex-direction: column-reverse;
    padding: 0;

    .img {
      height: 176px;
      width: 290px;
      margin-bottom: 100px;
    }

    .text-block {
      padding: 15px 0 30px 0;
    }

  }
`;

export default EmptyCartWrapper;
