import React from 'react';
import styled, { css } from 'styled-components';

type ButtonProps = {
  text?: string;
  padding?: string;
  borderRadius?: string;
}

const CommonButton: React.FC<ButtonProps> = (props) => {
  const padding = props.padding || '10px 50px';
  const borderRaduis = props.borderRadius || '16px';
  const Wrapper = styled.button<{
    size?: 'small' | 'medium' | 'large';
  }>`
    display: flex;
    align-items: center;
    background-color: #344966;
    border-radius: ${borderRaduis};
    padding: ${padding};
    color: white;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: none;
    cursor: pointer;
  `;

  return (
    <Wrapper>
      {props.text}
    </ Wrapper>
  );
};

export default CommonButton;
