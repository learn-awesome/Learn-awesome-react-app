import gql from 'graphql-tag';

export default gql`
  query topics {
    topics {
      id
      name
    }
  }
`;
