import React from 'react';
import CommonButtonWrapper from './CommonButton.styled';

type ButtonProps = {
  text?: string;
  padding?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const CommonButton: React.FC<ButtonProps> = (props) => {
  const { type = 'submit' } = props;

  return (
    <CommonButtonWrapper
      type={type}
      onClick={props.onClick}
    >
      {props.text}
    </ CommonButtonWrapper>
  );
};

export default CommonButton;
