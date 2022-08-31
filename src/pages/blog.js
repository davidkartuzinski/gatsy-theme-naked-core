import * as React from 'react';
import Layout from '../components/structure/layout';
import Aside from '../components/structure/aside';
import Seo from '../components/core/Seo';
import { graphql } from 'gatsby';

const BlogRollPage = ({ data }) => {
  return (
    <Layout pageClass={`blog-page`}>
      <main className='page'>
        <article>
          <header>
            <h1>Blog Posts</h1>
          </header>
          <ul>
            {data.blogPosts.nodes.map((node) => (
              <li key={node.name}>{node.name}</li>
            ))}
          </ul>
        </article>
      </main>
      <Aside />
    </Layout>
  );
};

export const Head = () => <Seo title='Blog Posts' slug='blog' />;

export const query = graphql`
  query blogPosts {
    blogPosts: allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`;

export default BlogRollPage;
