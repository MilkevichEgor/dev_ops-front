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
    width: inherit;
    height: inherit;
    object-fit: cover;
    border-radius: inherit;
  }

  .avatar-button {
    position: absolute;
    right: 20px;
    bottom: 20px;
    cursor: pointer;
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

  .title__description {
    margin-top: 40px
  }

  @media (max-width: 1279px) {
    .avatar-block {
      width: 255px;
      height: 255px;
    }

    .avatar-button {
      width: 40px;
      height: 40px;
    }

    .info {
      padding-left: 20px;
      width: 100%;
    }
  }
`;

export default UserProfileWrapper;
