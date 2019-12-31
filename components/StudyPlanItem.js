import React from 'react';

import {
  StudyPlanItemWrapper,
  Match,
  Title,
  MetaWrapper,
  MetaSubtitle,
  Plus,
} from '../styles/StudyPlanItem';

import { Avatar } from '../styles/Avatar';

const StudyPlanItem = props => (
  <StudyPlanItemWrapper>
    <Match>{props.matchPercentage}% match</Match>
    <Title>{props.title}</Title>
    <MetaWrapper>
      <MetaSubtitle>curated by</MetaSubtitle>
      <MetaWrapper>
        <Avatar
          image={
            'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
          }
        ></Avatar>
        <Avatar
          image={
            'https://images.unsplash.com/photo-1546539782-6fc531453083?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
          }
        ></Avatar>
        <Avatar
          image={'https://pbs.twimg.com/profile_images/969073897189523456/rSuiu_Hr.jpg'}
        ></Avatar>
        <Plus>+{props.totalContributors}</Plus>
      </MetaWrapper>
    </MetaWrapper>
  </StudyPlanItemWrapper>
);

export default StudyPlanItem;
