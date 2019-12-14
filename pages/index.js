import Head from 'next/head';

import withData from '../config';
import App from '../components';

const Index = () => (
  <div>
    <Head>
      <title>Learnawesome</title>
    </Head>
    <App />
  </div>
);

export default withData(Index);
