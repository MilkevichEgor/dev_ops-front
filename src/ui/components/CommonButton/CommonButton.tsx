import React from 'react';

import CommonButtonWrapper from './CommonButton.styled';

type ButtonProps = {
  size?: 'container' | 'small' | 'common' | 'permanent'
  text?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const CommonButton: React.FC<ButtonProps> = (props) => {
  const { type = 'submit' } = props;

  return (
    <CommonButtonWrapper
      size={props.size || 'common'}
      type={type}
      onClick={props.onClick}
    >
      {props.text}
    </CommonButtonWrapper>
  );
};

export default CommonButton;
