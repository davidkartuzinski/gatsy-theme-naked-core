import * as React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/structure/layout';
import Aside from '../../components/structure/aside';
import {
  PreviousPageIcon,
  NextPageIcon,
  AuthorIcon,
  PublishDateIcon,
} from '../../components/core/icons';
import { useSiteMetadata } from '../../hooks/use-site-metadata';
import Seo from '../../components/core/Seo';

const BlogPost = ({ data }) => {
  const { siteUrl } = useSiteMetadata();

  return (
    <Layout pageClass={`single-blog-post-page`}>
      <main className='post'>
        <article>
          <header>
            <h1>{data.singlePost.frontmatter.title}</h1>

            <p>
              <span>
                <PublishDateIcon /> Published on{' '}
                {data.singlePost.frontmatter.date}, written by
              </span>
              <span>
                <AuthorIcon /> {data.singlePost.frontmatter.author}
              </span>
            </p>
          </header>
          <div className='article__body'>Blog Post here</div>
        </article>
      </main>
      <Aside></Aside>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    singlePost: mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        author
        canonical
        date(formatString: "MMMM D, YYYY")
        dateModified(formatString: "MMMM D, YYYY")
        description
        slug
        title
        tags
        categories
      }
    }
  }
`;

export default BlogPost;

// export const Head = ({data}) => title={data.singlePost.frontmatter.title}
//         canonical={post.frontmatter.canonical}
//         slug={post.frontmatter.slug}
//         description={post.frontmatter.description}
//         date={post.frontmatter.date}
//         dateModified={post.frontmatter.dateModified}
//         tags={post.frontmatter.tags}
//         categories={post.frontmatter.categories}
//         image={post.frontmatter.image.publicURL}
//         headline={post.frontmatter.title}
//         articleBody={post.rawBody}
//         crumbs={crumbs}
//         crumbLabel={customCrumbLabel};
