import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import Layout from '../components/structure/layout';
import Aside from '../components/structure/aside';
import Tags from '../components/core/tags';
import Categories from '../components/core/categories';
import ResponsiveImage from '../components/core/responsive-image';
import Seo from '../components/core/seo';
import {
  AuthorIcon,
  PublishDateIcon,
  PreviousPageIcon,
  NextPageIcon,
} from '../components/core/icons';
import NakedBreadcrumb from '../components/core/breadcrumb';
import TextWidget from '../components/widgets/text-widget';

import { getImage } from 'gatsby-plugin-image';
import Code from '../components/core/code-mdx';

const preToCodeBlock = (preProps) => {
  if (preProps?.children?.type === `code`) {
    const {
      children: codeString,
      className = ``,
      ...props
    } = preProps.children.props;

    const match = className.match(/language-([\0-\uFFFF]*)/);
    return {
      codeString: codeString.trim(),
      className,
      language: match !== null ? match[1] : ``,
      ...props,
    };
  }

  return undefined;
};

const components = {
  pre: (preProps) => {
    const props = preToCodeBlock(preProps);
    if (props) {
      return <Code {...props} />;
    } else {
      return <pre {...preProps} />;
    }
  },
};

const BlogPost = ({ data, children, pageContext }) => {
  const heroImage = getImage(data.singlePost.frontmatter.hero_image);

  const {
    next,
    previous,
    breadcrumb: { crumbs },
  } = pageContext;

  // const customCrumbLabel = location.pathname.toLowerCase().replace('-', ' ');
  const customCrumbLabel = '/';

  return (
    <Layout pageClass={`single-blog-post-page`}>
      <main className='post'>
        <NakedBreadcrumb crumbs={crumbs} crumbLabel={customCrumbLabel} />

        <article>
          <header>
            <h1>{data.singlePost.frontmatter.title}</h1>
            <ResponsiveImage
              image={heroImage}
              alt={data.singlePost.frontmatter.hero_image_alt}
            />

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
          <TextWidget />
          <div className='article__body'>
            <MDXProvider components={components}>
              {/* {data.singlePost.body} */}
              {children}
            </MDXProvider>
          </div>
        </article>
        <nav
          className='previous-next-post-nav'
          aria-label='Previous post or next post'
        >
          <div>
            {previous ? (
              <Link to={'/blog/' + previous.frontmatter.slug}>
                <PreviousPageIcon />
                <strong>Previous Article</strong>
                <span className='span-previous'>
                  {previous.frontmatter.title}
                </span>
                <br />
              </Link>
            ) : (
              <Link to={'/blog/'}>
                <PreviousPageIcon />
                <strong>Back to Blog</strong>
              </Link>
            )}
          </div>
          <div>
            {next ? (
              <Link to={'/blog/' + next.frontmatter.slug}>
                <strong>Next Article</strong>
                <NextPageIcon />
                <br />
                <span className='span-next'> {next.frontmatter.title}</span>
              </Link>
            ) : (
              <Link to={'/blog/'}>
                <strong>Back to Blog</strong>
                <NextPageIcon />
              </Link>
            )}
          </div>
        </nav>
      </main>
      <Aside>
        <Categories categories={data.singlePost.frontmatter.categories} />
        <Tags tags={data.singlePost.frontmatter.tags} />
      </Aside>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    singlePost: mdx(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
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
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
          publicURL
        }
      }
    }
  }
`;

export default BlogPost;

export const Head = ({ data, pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  return (
    // https://www.advancedwebranking.com/blog/meta-tags-important-in-seo/
    <Seo
      title={data.singlePost.frontmatter.title} // Just add the title of this page
      canonical={data.singlePost.frontmatter.canonical} // if there are two copies of a page, use this URL as main one.
      slug={data.singlePost.frontmatter.slug} // the URL the page is found. Enter relative location, eg "contact" for contact page
      description={data.singlePost.frontmatter.description} // This summaries your web page, this page. Not the entire website. 130 words for mobile / 160 words for desktop.
      crumbs={crumbs}
      // for BLOG POSTS ONLY
      date={data.singlePost.frontmatter.date} // original publish date.
      dateModified={data.singlePost.frontmatter.dateModified}
      tags={data.singlePost.frontmatter.tags}
      image={data.singlePost.frontmatter.hero_image.publicURL}
      categories={data.singlePost.frontmatter.categories}
      headline={data.singlePost.frontmatter.title}
      articleBody={data.singlePost.body}
    />
  );
};
