import styled, { css } from 'styled-components';

type StylesProps = {
  size: 'container' | 'small' | 'common' | 'permanent';
}

const permanentButtonStyles = css`
  padding: 10px 50px;
`;

const commonButtonStyles = css`
  padding: 10px 50px;

  @media (max-width: 833px) {
    padding: 10px 17px;
  }
`;

const smallButtonStyles = css`
  width: 500px;
  @media (max-width: 833px) {
    width: 20px;
  }
`;

const containerButtonStyles = css`
  padding: 10px;
  width: 100%;
  justify-content: center;
`;

const CommonButtonWrapper = styled.button<StylesProps>`
  display: flex;
  width: fit-content;
  align-items: center;
  background-color: #344966;
  border-radius: 16px;
  color: white;
  font-family: inherit;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.75px;
  line-height: 24px;
  text-decoration-line: none;
  cursor: pointer;
  border: none;
  white-space: nowrap;

  ${(props) => {
    switch (props.size) {
      case 'permanent':
        return permanentButtonStyles;
      case 'container':
        return containerButtonStyles;
      case 'small':
        return smallButtonStyles;
      default:
        return commonButtonStyles;
    }
  }};

  @media (max-width: 833px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

export default CommonButtonWrapper;
