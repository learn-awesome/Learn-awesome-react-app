import React from 'react';

import { StoreConsumer } from '../../store';

import { HeaderWrapper, LoginSection, ThemeSwitch } from '../../styles/Header';

const Header = () => (
  <StoreConsumer>
    {({ isDarkThemeActive }) => (
      <HeaderWrapper>
        <img src="/logo.svg" alt="Logo" id="logo" />
        <LoginSection>
          <ThemeSwitch>
            <label id="switch" className="switch">
              <input type="checkbox" id="slider" checked={isDarkThemeActive ? false : true} />
              <span className="slider round"></span>
            </label>
          </ThemeSwitch>
          <p>Sign in</p>
          <p>Sign up</p>
        </LoginSection>
      </HeaderWrapper>
    )}
  </StoreConsumer>
);

export default Header;
