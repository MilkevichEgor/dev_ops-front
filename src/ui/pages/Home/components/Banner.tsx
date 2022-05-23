import React from 'react';
import booksImg from '../../Images/books.png';
import human from '../../Images/human.png';
import CommonButton from '../../../styles/CommonButton';
import CommonTextBlock from '../../../styles/CommonTextBlock';
import BannerWrapper from '../components/Banner.styles';

type Props = {
  containerClassName?: string;
};

const Banner: React.FC<Props> = (props) => {
  return (
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
        <CommonButton className="button">Choose a book</CommonButton>
      </CommonTextBlock>
      <img
        className="human-img"
        src={human}
        alt="image of a human reading"
      />
    </ BannerWrapper>
  );
};

export default Banner;
