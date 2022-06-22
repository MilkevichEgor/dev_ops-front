import styled from 'styled-components';

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px 0 60px;
  .pagination__back {
    transform: rotate(180deg);
  }

  .pagination__arrow {
    cursor: pointer;
  }

  .pagination__pages {
    display: flex;
    margin: 0 53px;
  }

  .pagination__page {
    width: 9px;
    height: 9px;
    border: 3px solid #0D1821;
    border-radius: 50%;
    margin: 0 18px;
    cursor: pointer;
  }

  .pagination__page-current {
    background-color: #0D1821
  }
`;

export default PaginationWrapper;
