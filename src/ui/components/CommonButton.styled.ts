import styled from 'styled-components';

const defaultValues = {
  padding: '10px 50px',
};

// const sizes = {
//   small: css``,
//   medium: css``,
//   large: css``,
// };

const CommonButtonWrapper = styled.button<{
  size?: 'small' | 'medium' | 'large';
  padding?: string;
}>`
    display: flex;
    width: fit-content;
    align-items: center;
    background-color: #344966;
    border-radius: 16px;
    padding: ${(props) => props.padding ?? defaultValues.padding};
    ${(props) => props.size ?? null}
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


  @media (max-width: 833px) {
    padding: 10px 17px;
    font-size: 12px;
    line-height: 18px;
  }
`;

export default CommonButtonWrapper;

/* ${props => {
      switch (props.size) {
        case 'large':
          return css`

          `
      }
    }} */
