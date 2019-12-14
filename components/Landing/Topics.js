import React from 'react';
import ReactSearchBox from 'react-search-box';
import { Query } from 'react-apollo';

import GET_TOPICS from '../../graphql/Topics';
import NetworkLoader from '../../utils/NetworkLoader';

import { TopicsWrapper } from '../../styles/Topics';

const Topics = () => (
  <TopicsWrapper>
    <h1>What do you want to learn today?</h1>
    <Query query={GET_TOPICS} fetchPolicy={'cache-and-network'}>
      {({ loading, error, data }) => {
        if (loading) return <NetworkLoader />;
        if (error) return <p>Something went wrong.</p>;

        // ************************************* //

        {
          /* ReactSearchBox ~ We have to manipulate our Topics query data response for the search bar ~ key and value input */
        }

        const searchBarData = [];

        if (data && data.topics.length >= 1) {
          data.topics.map(({ id, name }) => {
            searchBarData.push({
              key: id,
              value: name,
            });
          });

          // ************************************* //

          return (
            <ReactSearchBox
              placeholder={`Type Here...`}
              data={searchBarData}
              inputBoxBorderColor="black"
              fuseConfigs={{
                threshold: 0.1,
              }}
            />
          );
        }
        // In case of when no topic is available.
        else {
          return <p>No topics available.</p>;
        }
      }}
    </Query>
  </TopicsWrapper>
);

export default Topics;
