import styled from 'styled-components';

const SortingListWrapper = styled.div`
  position: absolute;
  top: 74px;
  left: 0;
  background: #F0F4EF;
  border-radius: 16px;
  width: 100%;
  line-height: 28px;
  color: #344966;

  ul {
    list-style-type: none;
    padding-inline-start: 15px;
  }

  li {
    margin: 12px 0;
  }
`;

export default SortingListWrapper;
