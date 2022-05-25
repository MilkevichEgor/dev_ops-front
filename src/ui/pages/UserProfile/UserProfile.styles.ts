import styled from 'styled-components';

const UserProfileWrapper = styled.div`
  display: flex;
  margin-top: 60px;

  .avatar-block {
    width: 305px;
    height: 305px;
    background: #F0F4EF;
    border-radius: 16px;
    position: relative;
  }

  .avatar-img {
    padding: 77px;
  }

  .avatar-button {
    position: absolute;
    right: 20px;
    bottom: 20px;
  }

  .info {
    padding-left: 128px;
  }

  .title {
    display: flex;
    justify-content: space-between;
  }

  .title__name {
    font-size: 20px;
    line-height: 30px;
    margin: 0;
  }

  .title__change {
    cursor: pointer;
    font-size: 14px;
    line-height: 21px;
    text-align: right;
    text-decoration-line: underline;
    color: #8D9F4F;
    margin: 0;
  }

  .icon {
    width: 24px;
    height: 100%;
    padding: 20px 16px 20px 24px;
  }

  .info__field {
    display: flex;
    background: #F0F4EF;
    border-radius: 16px;
    width: 522px;
    margin: 20px 0;
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
    margin: 0;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.75px;
    line-height: 28px;
  }

  .info__password {
    margin-top: 40px
  }
`;

export default UserProfileWrapper;
