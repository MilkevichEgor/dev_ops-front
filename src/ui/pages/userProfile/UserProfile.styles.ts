import styled from 'styled-components';

const UserProfileWrapper = styled.div`
  display: flex;
  margin-top: 60px;

  .avatar {
    width: 305px;
    height: 305px;
    background: #F0F4EF;
    border-radius: 16px;
    position: relative;
  }

  .avatar__img {
    width: inherit;
    height: inherit;
    object-fit: cover;
    border-radius: inherit;
  }

  .avatar__button {
    position: absolute;
    right: 20px;
    bottom: 20px;
    cursor: pointer;
  }

  .user-info {
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
    .avatar {
      width: 255px;
      height: 255px;
    }

    .avatar__button {
      width: 40px;
      height: 40px;
    }

    .user-info {
      padding-left: 20px;
      width: 100%;
    }
  }

  @media (max-width: 833px) {
    flex-direction: column;

    .avatar {
      width: 290px;
      height: 290px;
    }

    .title {
      display: flex;
      flex-wrap: wrap;
      margin-top: 30px;
    }

    .title__name {
      font-size: 16px;
      line-height: 24px;
    }

    .title__change {
      font-size: 12px;
      line-height: 18px;
      text-align: left;
      text-decoration-line: underline;
      color: #8D9F4F;
      margin: 0;
    }
  }
`;

export default UserProfileWrapper;
