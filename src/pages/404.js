import * as React from 'react';
import Layout from '../components/structure/layout';
import { Link } from 'gatsby';

const NotFoundPage = () => {
  return (
    <Layout pageClass={`404-page`}>
      <main className='page'>
        <article>
          <header>
            <h1>Oops 404 - Not Found</h1>
          </header>
          <p>Image here.</p>

          <p>
            You just hit a route that doesn&#39;t exist. Please check the url,
            or go ahead and check out the <Link to='/blog'>blog</Link>.
          </p>
        </article>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
