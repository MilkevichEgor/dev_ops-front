import React from 'react';
import CommonWrapper from '../../styles/CommonWrapper';
import booksImg from '../../images/emptyCardBooks.png';
import CommonTextBlock from '../../styles/CommonTextBlock';
import CommonButton from '../../components/CommonButton';
import EmptyCartWrapper from './EmptyCartWrapper.styles';

const Cart = () => {
  return (
    <CommonWrapper>
      <EmptyCartWrapper>
        <img
          className="img"
          src={booksImg} />
        <CommonTextBlock>
          <p className="title">Your cart is empty</p>
          <p className="text text-block">
            Add items to cart to make a purchase. Go to the catalogue now.
          </p>
          <CommonButton text="Go to catalog" />
        </CommonTextBlock>
      </EmptyCartWrapper>
    </CommonWrapper>
  );
};

export default Cart;
