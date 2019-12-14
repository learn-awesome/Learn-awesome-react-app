import React from 'react';

import { HeaderWrapper, LoginSection } from '../../styles/Header';

const Header = () => (
  <HeaderWrapper>
    <img src="/logo.svg" alt="Logo" id="logo" />
    <LoginSection>
      <p>Sign in</p>
      <p>Sign up</p>
    </LoginSection>
  </HeaderWrapper>
);

export default Header;
