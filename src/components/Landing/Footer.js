import React from 'react';
import { FaTwitterSquare, FaGithubSquare, FaPatreon, FaDiscord } from 'react-icons/fa';

import { FooterWrapper } from '../../styles/Footer';

const Footer = () => (
  <FooterWrapper>
    <FaTwitterSquare />
    <FaGithubSquare />
    <FaPatreon />
    <FaDiscord />
  </FooterWrapper>
);

export default Footer;
