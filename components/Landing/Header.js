import React from 'react';

import { StoreConsumer } from '../../store';

import { HeaderWrapper, LoginSection, ThemeSwitch } from '../../styles/Header';

const Header = () => (
  <StoreConsumer>
    {({ isDarkThemeActive, toggleActiveTheme }) => (
      <HeaderWrapper>
        {/* White Logo on Dark Theme / Dark Logo on Light Theme */}
        {isDarkThemeActive ? (
          <img src="/white-logo.png" alt="Learnawesome" id="logo" />
        ) : (
          <img src="/logo.svg" alt="Learnawesome" id="logo" />
        )}
        <LoginSection>
          <ThemeSwitch>
            <label id="switch" className="switch">
              <input
                type="checkbox"
                id="slider"
                checked={isDarkThemeActive ? false : true}
                onChange={toggleActiveTheme}
              />
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
