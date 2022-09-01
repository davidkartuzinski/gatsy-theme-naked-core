import * as React from 'react';
import Layout from '../components/structure/layout';
import Aside from '../components/structure/aside';
import Seo from '../components/core/Seo';
import NakedBreadcrumb from '../components/core/breadcrumb';

const Tutorials = ({ pageContext, location }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  const customCrumbLabel = location.pathname.toLowerCase().replace('-', ' ');

  return (
    <Layout pageClass={`tutorials-page`}>
      <main className='page'>
        <NakedBreadcrumb crumbs={crumbs} crumbLabel={customCrumbLabel} />
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
      <Aside />
    </Layout>
  );
};

export const Head = () => <Seo title='Tutorials Page' slug='tutorials' />;

export default Tutorials;
