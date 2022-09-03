import * as React from 'react';
import Layout from '../components/structure/layout';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Aside from '../components/structure/aside';
import Seo from '../components/core/seo';

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

export const Head = () => {
  return (
    <Seo
      title={`404 - Page Not Found`} // Just add the title of this page
      canonical={``} // if there are two copies of a page, use this URL as main one.
      slug={`404`} // the URL the page is found. Enter relative location, eg "blog" for blog page
      description={`This is the Gatsby Theme Naked. This is the 404 page. That means something went wrong. Don't worry, we have a Home page link.`} // This summaries your web page, this page. Not the entire website. 130 words for mobile / 160 words for desktop.
    />
  );
};

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
