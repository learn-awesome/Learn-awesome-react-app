import styled from 'styled-components';

export const Avatar = styled.div`
  ${props => `background-image: url(${props.image});`}
  width: 19px;
  height: 19px;
  background-size: cover;
  background-position: center;
  border-radius: 100%;
  margin-left: -5px;
`;
