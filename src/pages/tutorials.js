import * as React from 'react';
import Layout from '../components/structure/layout';

const Tutorials = () => {
  return (
    <Layout pageClass={`tutorials-page`}>
      <main className='page'>
        <article>
          <header>
            <h1>Tutorials</h1>
          </header>
          <p>
            <strong>Coming Soon.</strong>
          </p>
          <p>
            Tutorials on every aspect of setting up a <i>production ready</i>{' '}
            website using this theme and the Gatsby plugin ecosystem. Most
            techniques applicable to any Gatsby website.
          </p>
        </article>
      </main>
    </Layout>
  );
};

export const Head = () => <title>Tutorials Page</title>;

export default Tutorials;
