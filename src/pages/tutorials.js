import * as React from 'react';
import Layout from '../components/structure/layout';
import Aside from '../components/structure/aside';
import Seo from '../components/core/seo';
import NakedBreadcrumb from '../components/core/breadcrumb';

const Tutorials = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  // const customCrumbLabel = location.pathname.toLowerCase().replace('-', ' ');
  const customCrumbLabel = '/';

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

export const Head = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  return (
    <Seo
      title={`Theme Tutorials`} // Just add the title of this page
      canonical={``} // if there are two copies of a page, use this URL as main one.
      slug={`tutorials`} // the URL the page is found. Enter relative location, eg "blog" for blog page
      description={`This is the Gatsby Theme Naked. We have tutorials on how to use this theme and how it makes your life easier. Take a look.`} // This summaries your web page, this page. Not the entire website. 130 words for mobile / 160 words for desktop.
      crumbs={crumbs}
    />
  );
};

export default Tutorials;
