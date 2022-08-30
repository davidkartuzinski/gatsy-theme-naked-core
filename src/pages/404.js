import * as React from 'react';
import Layout from '../components/structure/layout';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Aside from '../components/structure/aside';
import Seo from '../components/core/Seo';

const NotFoundPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout pageClass={`404-page`}>
      <main className='page'>
        <article>
          <header>
            <h1>Oops 404 - Not Found</h1>
          </header>
          <p>
            <GatsbyImage
              image={data.image404.childImageSharp.gatsbyImageData}
              alt='404 oops, person in hole putting out sign.'
            />
          </p>

          <p>
            You just hit a route that doesn&#39;t exist. Please check the url,
            or go ahead and check out the <Link to='/blog'>blog</Link>.
          </p>
        </article>
      </main>
      <Aside />
    </Layout>
  );
};

export const Head = () => <Seo title='Page Not Found - 404' slug='404' />;

export const query = graphql`
  query image404 {
    image404: file(relativePath: { eq: "404-page-not-found.png" }) {
      childImageSharp {
        gatsbyImageData(formats: AUTO, placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
  }
`;

export default NotFoundPage;
