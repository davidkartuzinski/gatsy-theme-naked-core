import * as React from 'react';
import Layout from '../components/structure/layout';

const TagsPage = () => {
  return (
    <Layout>
      <main>
        <article>
          <header>
            <h1>Tags</h1>
          </header>
          <ul>
            <li>Tag</li>
            <li>Tag</li>
            <li>Tag</li>
            <li>Tag</li>
          </ul>
        </article>
      </main>
    </Layout>
  );
};

export const Head = () => <title>Tags Page</title>;

export default TagsPage;
