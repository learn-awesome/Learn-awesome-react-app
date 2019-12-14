import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ${'' /* Logo */}

  #logo {
    width: 2rem;
  }
`;

export const LoginSection = styled.div`
  display: flex;

  p {
    margin-left: 2rem;
  }
`;
