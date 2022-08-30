import * as React from 'react';
import Layout from '../components/structure/layout';

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
    </Layout>
  );
};

export const Head = () => <title>Contact Page</title>;

export default Contact;
