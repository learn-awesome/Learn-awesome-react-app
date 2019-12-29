import React from 'react';
import styled from 'styled-components';

import { SidebarWrapper } from '../styles/Sidebar';

const Title = styled.div`
  font-size: 48px;
  font-family: 'Inter';
  font-weight: 700;
`;

const Subtitle = styled.div`
  color: #868686;
  font-weight: 600;
  font-size: 14px;
  margin-top: 14px;
`;

const Paragraph = styled.p`
  color: #b9b9b9;
  font-weight: 200;
  font-size: 0.765em;
  line-height: 1.6em;
  padding-top: 2.6em;
`;

const SupportWrapper = styled.div`
  margin-top: 17.2em;
`;

const SupportTitle = styled.div`
  font-size: 1.65em;
  font-weight: 700;
`;

const LinksWrapper = styled.div`
  font-size: 1.15em;
  display: grid;
  grid-auto-flow: column;
  margin-top: 0.9em;
  font-weight: 700;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Link = styled.a`
  color: #868686;
  text-decoration: none;
`;

const TeamWrapper = styled.div`
  margin-top: 5em;
`;

const TeamTitle = styled.div`
  font-size: 1.15em;
  font-weight: 700;
`;

const ContributorsWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 0.67em;
`;

const ContributorName = styled.li`
  color: #868686;
  margin-top: 5px;
`;

const Sidebar = () => (
  <SidebarWrapper>
    <Title>Learn Anything</Title>
    <Subtitle>Lorem ipsum dolor sit amet.</Subtitle>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci nulla, condimentum
      elementum massa sed, lobortis tincidunt urna. Curabitur id sem enim. Pellentesque in libero
      vestibulum, sodales velit in, ultrices eros. Phasellus ornare tortor risus, in egestas nibh
      tempus ac. Cras non massa semper, elementum nisi et, bibendum leo. Nulla id lorem posuere,
      aliquet quam ut, aliquet lacus. Aliquam iaculis dolor eros, vel viverra augue pulvinar quis.
    </Paragraph>

    <SupportWrapper>
      <SupportTitle>Support us</SupportTitle>
      <LinksWrapper>
        <Link href="#">Donate</Link>
        <Link href="#">Contribute</Link>
        <Link href="#">Share</Link>
      </LinksWrapper>
    </SupportWrapper>

    <TeamWrapper>
      <TeamTitle>Team</TeamTitle>
      <LinksWrapper>
        <ContributorsWrapper>
          <ContributorName>Contributor1</ContributorName>
          <ContributorName>Contributor2</ContributorName>
          <ContributorName>Contributor3</ContributorName>
        </ContributorsWrapper>

        <ContributorsWrapper>
          <ContributorName>Contributor4</ContributorName>
          <ContributorName>Contributor5</ContributorName>
          <ContributorName>Contributor6</ContributorName>
        </ContributorsWrapper>

        <ContributorsWrapper>
          <ContributorName>Contributor7</ContributorName>
          <ContributorName>Contributor8</ContributorName>
          <ContributorName>Contributor9</ContributorName>
        </ContributorsWrapper>
      </LinksWrapper>
    </TeamWrapper>
  </SidebarWrapper>
);

export default Sidebar;
