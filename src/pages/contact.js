import * as React from 'react';
import Layout from '../components/structure/layout';
import Aside from '../components/structure/aside';
import Seo from '../components/core/Seo';

const Contact = () => {
  return (
    <Layout pageClass={`contact-page`}>
      <main className='page'>
        <article>
          <header>
            <h1>Contact Us</h1>
          </header>
          <p>Please feel free to contact us.</p>
        </article>
      </main>
      <Aside />
    </Layout>
  );
};

export const Head = () => <Seo title='Contact Page' slug='contact' />;

export default Contact;
