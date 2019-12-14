import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ${'' /* Logo */}

  #logo {
    width: 2rem;
    margin-left: 1rem;
  }
`;

export const LoginSection = styled.div`
  display: flex;

  p {
    margin-left: 2rem;
    cursor: pointer;
  }
`;
