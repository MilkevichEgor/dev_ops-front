import React from 'react';
import { Link } from 'react-router-dom';

import { routePath } from '../../../../constants';

import CommonButton from '../../../components/CommonButton';
import CommonTextBlock from '../../../components/CommonTextBlock.styles';
import BannerWrapper from '../styles/Banner.styles';
import CommonWrapper from '../../../components/CommonWrapper.styles';

import booksImg from '../../../images/books.png';
import human from '../../../images/human.png';

const Banner = () => {
  return (
    <CommonWrapper>
      <BannerWrapper>
        <img
          src={booksImg}
          className="banner__background-img"
        />
        <CommonTextBlock>
          <p className="title">
            Build your library with us
          </p>
          <p className="text banner__text-block">
            Buy two books and get one for free
          </p>
          <Link
            className="banner__link"
            to={routePath.home}
          >
            <CommonButton
              size="permanent"
              text="Choose a book"
            />
          </Link>
        </CommonTextBlock>
        <img
          className="banner__human-img"
          src={human}
        />
      </ BannerWrapper>
    </CommonWrapper>
  );
};

export default Banner;
