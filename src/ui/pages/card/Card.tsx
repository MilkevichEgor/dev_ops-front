import React from 'react';
import { Link } from 'react-router-dom';

import CommonWrapper from '../../styles/CommonWrapper.styles';
import booksImg from '../../images/emptyCardBooks.png';
import CommonTextBlock from '../../styles/CommonTextBlock.styles';
import CommonButton from '../../components/CommonButton';
import EmptyCartWrapper from './EmptyCartWrapper.styles';
import { routePath } from '../../../constants';

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
          <Link to={routePath.home} className="link">
            <CommonButton
              size="permanent"
              text="Go to catalog" />
          </Link>
        </CommonTextBlock>
      </EmptyCartWrapper>
    </CommonWrapper>
  );
};

export default Cart;
