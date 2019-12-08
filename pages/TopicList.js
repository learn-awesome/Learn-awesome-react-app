const TopicList = ({ topics }) => (
  <div>
    {topics &&
      topics.map((a, i) => (
        <div key={i}>
          <h2>{a.name}</h2>
        </div>
      ))}
  </div>
);

export default TopicList;
