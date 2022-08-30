import * as React from 'react';
import Layout from '../components/structure/layout';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Aside from '../components/structure/aside';

const IndexPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout pageClass={`home-page`}>
      <main className='page'>
        <article>
          <header>
            <div>
              <h1>The Gatsby Theme Naked</h1>
              <h2>Just add CSS and Content and go go go!</h2>
              <p>
                A theme that lets you launch your production ready Gatsby site
                fast!
              </p>
            </div>
            <div>
              <p>
                <GatsbyImage
                  image={data.idea.childImageSharp.gatsbyImageData}
                  alt='Naked Theme is a great idea'
                />
              </p>
            </div>
          </header>
          <section className='column-1'>
            <h2>
              Freedom to use ANY CSS library or Framework, including vanilla
              CSS!
            </h2>
            <div>
              <ul>
                <li>Styled Components</li>
                <li>Emotion</li>
                <li>Vanilla CSS</li>
                <li>Theme UI</li>
                <li>ReactStrap</li>
                <li>CSS Modules</li>
                <li>Any CSS in JS</li>
                <li>Bulma</li>
                <li>Ant</li>
              </ul>
            </div>
          </section>

          <section className='columns-3'>
            <div>
              <h2>Accessible & HTML5 Best Practices</h2>
              <ul>
                <li>Accessible Color patterns</li>
                <li>Accessible Forms</li>
                <li>Accessible HTML</li>
                <li>Even a tutorial on Accessibility</li>
              </ul>
              <Link to='/tutorials'>Make your site accessible</Link>
            </div>
            <div>
              <h2>Any CSS Component Library</h2>
              <ul>
                <li>Plain Vanilla CSS</li>
                <li>Styled Components / Emotion </li>
                <li>UI Theme</li>
                <li>CSS Modules</li>
              </ul>
              <Link to='/tutorials'>Discover real CSS freedom</Link>
            </div>
            <div>
              <h2>Baked in SEO Best Practices</h2>
              <ul>
                <li>Properly nested Header tags</li>
                <li>Schema.org properly implemented</li>
                <li>Semantic HTML5</li>
                <li>Internal Linking done right</li>
              </ul>
              <Link to='/tutorials'>Learn SEO best practices</Link>
            </div>
          </section>

          <section className='column-1'>
            <h2>CMS's can easily use the hooks! Use any CMS</h2>
            <div>
              <ul>
                <li>WordPress</li>
                <li>Strapi</li>
                <li>Ghost</li>
                <li>Contentful</li>
                <li>Netlify</li>
                <li>Sanity.io</li>
                <li>Prismic</li>
                <li>DatoCMS</li>
              </ul>
            </div>
          </section>
        </article>
      </main>
      <Aside />
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export const query = graphql`
  query idea {
    idea: file(relativePath: { eq: "idea.png" }) {
      childImageSharp {
        gatsbyImageData(formats: AUTO, placeholder: BLURRED)
      }
    }
  }
`;

export default IndexPage;
