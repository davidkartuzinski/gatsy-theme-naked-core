import * as React from 'react';
import Layout from '../../components/structure/layout';
import Aside from '../../components/structure/aside';
import Seo from '../../components/core/Seo';
import { graphql } from 'gatsby';
import PostPreview from '../../components/core/post-preview';

const BlogRollPage = ({ data }) => {
  return (
    <Layout pageClass={`blog-page`}>
      <main className='page'>
        <article>
          <header>
            <h1>Blog Posts</h1>
          </header>
          <ul>
            {data.blogPosts.nodes.map((node) => {
              return (
                <article key={node.id} className='inner-article'>
                  <PostPreview
                    slug={node.frontmatter.slug}
                    // image={node.frontmatter.image.childImageSharp.fluid}
                    // imageAlt={node.frontmatter.imageAlt}
                    figcaption={node.frontmatter.imageFigcaption}
                    title={node.frontmatter.title}
                    date={node.frontmatter.date}
                    excerpt={node.frontmatter.description}
                  />
                </article>
              );
            })}
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
    blogPosts: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          tags
          hero_image_alt
          hero_image_class
          hero_image_figcaption
          slug
          title
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          author
          categories
          date(formatString: "MMMM D, YYYY")
        }
        excerpt(pruneLength: 250)
        id
      }
    }
  }
`;

export default BlogRollPage;
