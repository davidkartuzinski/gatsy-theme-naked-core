import * as React from 'react';
import Layout from '../components/structure/layout';
import Aside from '../components/structure/aside';
import Seo from '../components/core/Seo';
import NakedBreadcrumb from '../components/core/breadcrumb';

const CategoriesPage = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  // const customCrumbLabel = location.pathname.toLowerCase().replace('-', ' ');
  const customCrumbLabel = '/';

  return (
    <Layout pageClass={`categories-page`}>
      <main className='page'>
        <NakedBreadcrumb crumbs={crumbs} crumbLabel={customCrumbLabel} />
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
