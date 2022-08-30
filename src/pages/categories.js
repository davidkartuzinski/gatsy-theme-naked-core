import * as React from 'react';
import Layout from '../components/structure/layout';

const CategoriesPage = () => {
  return (
    <Layout pageClass={`categories-page`}>
      <main className='page'>
        <article>
          <header>
            <h1>Categories</h1>
          </header>
          <ul>
            <li>Category</li>
            <li>Category</li>
            <li>Category</li>
            <li>Category</li>
          </ul>
        </article>
      </main>
    </Layout>
  );
};

export const Head = () => <title>Tags Page</title>;

export default CategoriesPage;
