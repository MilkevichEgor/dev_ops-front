import styled from 'styled-components';

const EmptyCartWrapper = styled.div`
  display: flex;

  .empty-cart__img {
    height: 261px;
    width: 433px;
    padding: 80px 108px;
  }

  .empty-cart__text-block {
    max-width: 465px;
    width: 100%;
    font-size: 24px;
    line-height: 36px;
    color: #344966;
  }

  .empty-cart__link {
    text-decoration: none;
  }

  @media (max-width: 1279px) {
    padding: 0 15px;
    
    .empty-cart__img {
      height: 212px;
      width: 350px;
      padding: 0;
    }

    .empty-cart__text-block {
      max-width: 310px;
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media (max-width: 833px) {
    flex-direction: column-reverse;
    padding: 0;

    .empty-cart__img {
      height: 176px;
      width: 290px;
      margin-bottom: 100px;
    }

    .empty-cart__text-block {
      padding: 15px 0 30px 0;
    }

  }
`;

export default EmptyCartWrapper;
