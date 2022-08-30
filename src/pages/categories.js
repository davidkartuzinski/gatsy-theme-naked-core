import * as React from 'react';
import Layout from '../components/structure/layout';
import Aside from '../components/structure/aside';
import Seo from '../components/core/Seo';

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
      <Aside />
    </Layout>
  );
};

export const Head = () => <Seo title='Categories Page' slug='categories' />;

export default CategoriesPage;
