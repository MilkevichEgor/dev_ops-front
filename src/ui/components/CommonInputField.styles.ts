import styled from 'styled-components';

const CommonInputWrapper = styled.div`
display: flex;
background: #F0F4EF;
border-radius: 16px;
width: 522px;
margin: 20px 0;

.icon {
  width: 24px;
  height: 100%;
  padding: 20px 16px 20px 24px;
}

.info__general {
  margin-bottom: 30px;
}

.info__row {
  padding: 6px 0;
}

.info__row-name {

  margin: 0;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.75px;
}

.info__row-value {
  font-family: 'Poppins',sans-serif;
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.75px;
  line-height: 28px;
  background: inherit;
}

.info__password {
  margin-top: 40px
}

.info__input {
  border: none;
  outline: none;
  background: inherit;
}

.no-hint {
  display: flex;
 justify-content: center;
 align-items:center;
}

.test {
  background:red;
}

.new-password__row-name {
  margin: 0;
}

@media (max-width: 1279px) {
  max-width: 529px;
  width: 100%;
}
`;

export default CommonInputWrapper;
