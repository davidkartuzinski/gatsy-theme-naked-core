import * as React from 'react';
import Layout from '../components/structure/layout';
import ContactFormApp from '../components/optional/contact-form';
import Aside from '../components/structure/aside';
import Seo from '../components/core/seo';
import NakedBreadcrumb from '../components/core/breadcrumb';

const Contact = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  // const customCrumbLabel = location.pathname.toLowerCase().replace('-', ' ');
  const customCrumbLabel = '/';

  return (
    <Layout pageClass={`contact-page`}>
      <main className='page'>
        <NakedBreadcrumb crumbs={crumbs} crumbLabel={customCrumbLabel} />
        <article>
          <header>
            <h1>Contact Us</h1>
          </header>
          <p>Please feel free to contact us.</p>
          <ContactFormApp />
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
      title={`Contact Us`} // Just add the title of this page
      canonical={``} // if there are two copies of a page, use this URL as main one.
      slug={`contact`} // the URL the page is found. Enter relative location, eg "blog" for blog page
      description={`This is the Gatsby Theme Naked. You just need to add CSS and content. If you have questions, we have answers. Reach out now!`} // This summaries your web page, this page. Not the entire website. 130 words for mobile / 160 words for desktop. https://www.charactercountonline.com/
      crumbs={crumbs}
    />
  );
};

export default Contact;
