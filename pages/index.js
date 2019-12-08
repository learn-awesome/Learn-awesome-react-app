import { Query } from 'react-apollo';
import withData from '../config';

import TopicList from './TopicList';
import GET_TOPICS from '../graphql/Topics';

// Global Styles
import GlobalStyles from '../styles/GlobalStyles';

const Index = () => {
  return (
    <Query // <- Wrapping the main component with Query component from react-apollo
      query={GET_TOPICS}
      fetchPolicy={'cache-and-network'}
    >
      {({ loading, data, error }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Somethign went wrong.</p>;

        if (data && data.topics && data.topics.length >= 1) {
          return (
            <div>
              <GlobalStyles />
              <h1>Topics</h1>
              <TopicList topics={data.topics} />
            </div>
          );
        }
      }}
    </Query>
  );
};

export default withData(Index);
