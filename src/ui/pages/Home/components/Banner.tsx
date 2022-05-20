import React from 'react';
import styled from 'styled-components';
import booksImg from '../../Images/books.png';
import human from '../../Images/human.png';

const Banner = () => {
  return (
    <BannerWrapper>
      <div>
        <h1>Build your library with us</h1>
        <p>Buy two books and get one for free</p>
        <div>Choose a book</div>
        <img src={booksImg} alt="background image with books" />
      </div>
      <img src={human} alt="image of a human reading" />
    </ BannerWrapper>
  );
};

export default Banner;

const BannerWrapper = styled.div`
  display: flex;
  /* position: absolute; */
  background: #F0F4EF;
  border-radius: 16px;
`;
