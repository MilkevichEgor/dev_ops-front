import React from 'react';
import booksImg from '../../../images/books.png';
import human from '../../../images/human.png';
import CommonButton from '../../../components/CommonButton';
import CommonTextBlock from '../../../styles/CommonTextBlock';
import BannerWrapper from '../styles/Banner.styles';
import CommonWrapper from '../../../styles/CommonWrapper';

type Props = {
  containerClassName?: string;
};

const Banner: React.FC<Props> = (props) => {
  return (
    <CommonWrapper>
      <BannerWrapper className={props.containerClassName}>
        <img
          src={booksImg}
          alt="background image with books"
          className="background-img"
        />
        <CommonTextBlock>
          <p className="title">Build your library with us</p>
          <p className="text text-block">
            Buy two books and get one for free
          </p>
          <CommonButton text="Choose a book"/>
        </CommonTextBlock>
        <img
          className="human-img"
          src={human}
          alt="image of a human reading"
        />
      </ BannerWrapper>
    </CommonWrapper>
  );
};

export default Banner;
