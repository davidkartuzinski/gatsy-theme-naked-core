import * as React from 'react';
import Layout from '../components/structure/layout';

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <h1>Welcome to my Gatsby site!</h1>
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </main>
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
