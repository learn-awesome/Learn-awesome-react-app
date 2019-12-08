import gql from 'graphql-tag';

export default gql`
  query topics {
    topics(limit: 10) {
      id
      name
    }
  }
`;
