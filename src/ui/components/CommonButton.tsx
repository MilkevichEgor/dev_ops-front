import React from 'react';
import CommonButtonWrapper from './CommonButton.styled';

type ButtonProps = {
  text?: string;
  padding?: string;
  borderRadius?: string;
}

const CommonButton: React.FC<ButtonProps> = (props) => {
  return (
    <CommonButtonWrapper
      type="submit"
      >
      {props.text}
    </ CommonButtonWrapper>
  );
};

export default CommonButton;
