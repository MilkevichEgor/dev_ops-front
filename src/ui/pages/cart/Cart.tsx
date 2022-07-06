import React from 'react';
import { Link } from 'react-router-dom';

import { routePath } from '../../../constants';

import CommonButton from '../../components/CommonButton';
import CommonWrapper from '../../components/CommonWrapper.styles';
import CommonTextBlock from '../../components/CommonTextBlock.styles';
import EmptyCartWrapper from './EmptyCartWrapper.styles';

import booksImg from '../../images/empty-cart-books.png';

const Cart = () => {
  return (
    <CommonWrapper>
      <EmptyCartWrapper>
        <img
          className="empty-cart__img"
          src={booksImg}
        />
        <CommonTextBlock>
          <p className="title">
            Your cart is empty
          </p>
          <p className="text empty-cart__text-block">
            Add items to cart to make a purchase. Go to the catalogue now.
          </p>
          <Link
            to={routePath.home}
            className="empty-cart__link">
            <CommonButton
              size="permanent"
              text="Go to catalog"
            />
          </Link>
        </CommonTextBlock>
      </EmptyCartWrapper>
    </CommonWrapper>
  );
};

export default Cart;
