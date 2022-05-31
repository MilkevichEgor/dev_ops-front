import styled from 'styled-components';

const defaultValues = {
  padding: '10px 50px',
  borderRadius: 16,
};

const CommonButtonWrapper = styled.button<{
  size?: 'small' | 'medium' | 'large';
  padding?: string;
  borderRaduis?: number;
}>`
    display: flex;
    width: fit-content;
    align-items: center;
    background-color: #344966;
    border-radius: ${(props) => props.borderRaduis ?? defaultValues.borderRadius}px;
    padding: ${(props) => props.padding ?? defaultValues.padding};
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

  @media (max-width: 1279px) {
    
  }
`;

export default CommonButtonWrapper;
