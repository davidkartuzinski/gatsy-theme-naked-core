import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/structure/layout';
import Aside from '../components/structure/aside';
import Seo from '../components/core/Seo';
import PostPreview from '../components/core/post-preview';
import NakedBreadcrumb from '../components/core/breadcrumb';

// FIX SEC PLUGIN and PAGE NAVIGATION PLUGIN

const BlogRollPage = ({ data, pageContext, location }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  // const customCrumbLabel = location.pathname.toLowerCase().replace('-', ' ');
  const customCrumbLabel = '/';

  return (
    <Layout pageClass={`blog-page`}>
      <main className='page'>
        <NakedBreadcrumb crumbs={crumbs} crumbLabel={customCrumbLabel} />
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
                    image={
                      node.frontmatter.hero_image.childImageSharp
                        .gatsbyImageData
                    }
                    ImageAlt={node.frontmatter.hero_image_alt}
                    figCaption={node.frontmatter.hero_image_figcaption}
                    title={node.frontmatter.title}
                    date={node.frontmatter.date}
                    excerpt={node.frontmatter.description}
                    imageClassName={node.frontmatter.hero_image_class}
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
  query blogPosts($skip: Int!, $limit: Int!) {
    blogPosts: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      nodes {
        frontmatter {
          tags
          hero_image_alt
          hero_image_class
          hero_image_figcaption
          hero_image_class
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
