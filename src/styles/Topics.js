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
    letter-spacing: -0.35px;
  }
`;

export const SearchBoxWrapper = styled.div`
  margin-top: 1.35rem;
  width: 40%;
  min-height: 60px;
  max-height: 350px;
  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  overflow: hidden;
  overflow-y: auto;

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
