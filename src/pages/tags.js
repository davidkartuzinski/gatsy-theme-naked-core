import * as React from 'react';
import Layout from '../components/structure/layout';
import Aside from '../components/structure/aside';

const TagsPage = () => {
  return (
    <Layout pageClass={`tags-page`}>
      <main className='page'>
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
      <Aside />
    </Layout>
  );
};

export const Head = () => <title>Tags Page</title>;

export default TagsPage;
