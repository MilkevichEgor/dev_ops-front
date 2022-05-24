import React from 'react';
import styled, { css } from 'styled-components';

type ButtonProps = {
  text: string;
  padding?: string;
}

const CommonButton: React.FC<ButtonProps> = (props) => {
  const Wrapper = styled.button<{
    size?: 'small' | 'medium' | 'large';
  }>`
    display: flex;
    align-items: center;
    background-color: #344966;
    border-radius: 16px;
    //padding: ${(props) => props.padding || '10px 50px'};
    padding: 10px 50px;
    color: white;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: none;
  `;

  return (
    <Wrapper>
      {props.text}
    </ Wrapper>
  );
};

export default CommonButton;
