import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import withData from '../config';

import TopicList from './TopicList';

const query = gql`
	query {
    topics(limit: 5) {
      id
      name
    }
	}
`

const Index = ({ topics } ) => {
  return (
    <Query    // <- Wrapping the main component with Query component from react-apollo
      query={ query }
      fetchPolicy={ 'cache-and-network' }
    >
      {({ loading, data, error }) => {
        if(error) {
          return (<div>Error..</div>);
        }
        return (
          <div>
            <h1>Topics</h1>
            <TopicList topics={data ? data.topics: []} />
          </div>
        );
      }}
    </Query>
  );
};

export default withData(Index)
