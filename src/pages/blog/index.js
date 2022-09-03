import * as React from 'react';
import Layout from '../../components/structure/layout';
import Aside from '../../components/structure/aside';
import Seo from '../../components/core/seo';
import { graphql } from 'gatsby';
import PostPreview from '../../components/core/post-preview';
import NakedBreadcrumb from '../../components/core/breadcrumb';

const BlogRollPage = ({ data, pageContext }) => {
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
                    imageAlt={node.frontmatter.hero_image_alt}
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

export const Head = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  return (
    <Seo
      title={`Blog Posts`} // Just add the title of this page
      canonical={``} // if there are two copies of a page, use this URL as main one.
      slug={`blog`} // the URL the page is found. Enter relative location, eg "blog" for blog page
      description={`This is the Gatsby Theme Naked. Read the blog and get an idea of what yours will look and feel like. We have content for you.`} // This summaries your web page, this page. Not the entire website. 130 words for mobile / 160 words for desktop.
      crumbs={crumbs}
    />
  );
};

export const query = graphql`
  query blogPosts {
    blogPosts: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        excerpt(pruneLength: 250)
        frontmatter {
          author
          categories
          date(formatString: "MMMM D, YYYY")
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          hero_image_alt
          slug
          tags
          title
        }
        id
      }
    }
  }
`;

export default BlogRollPage;
