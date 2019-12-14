import Head from 'next/head';

import withData from '../config';

// Global Styles
import GlobalStyles from '../styles/GlobalStyles';

const Index = () => (
  <div>
    <Head>
      <title>Learnawesome</title>
    </Head>
    <GlobalStyles />
  </div>
);

export default withData(Index);
