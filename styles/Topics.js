import styled from 'styled-components';

export const TopicsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 12rem;

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 72px;
    line-height: 87px;
    margin: 0;
  }
`;

export const SearchBoxWrapper = styled.div`
  margin-top: 1.25rem;
  width: 38%;
  min-height: 60px;
  max-height: 350px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  border-radius: 10px;
  overflow: hidden;
  overflow-y: scroll;

  ${'' /* Scrollbar ~ Customized for search results */} ::-webkit-scrollbar {
    background: transparent;
    border-radius: 30px;
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 80px;
    height: 30px;
  }

  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }
`;
