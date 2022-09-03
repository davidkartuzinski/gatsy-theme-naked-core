import * as React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Layout from '../../components/structure/layout';
import Aside from '../../components/structure/aside';
import { AuthorIcon, PublishDateIcon } from '../../components/core/icons';
import Seo from '../../components/core/Seo';
import ResponsiveImage from '../../components/core/responsive-image';
import TextWidget from '../../components/widgets/text-widget';
import { MDXProvider } from '@mdx-js/react';
import Code from '../../components/core/code-mdx';
import NakedBreadcrumb from '../../components/core/breadcrumb';
import Categories from '../../components/core/categories';
import Tags from '../../components/core/tags';

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
              figcaption={data.singlePost.frontmatter.hero_image_figcaption}
              imageClassName={data.singlePost.frontmatter.hero_image_class}
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
            <MDXProvider components={components}>{children}</MDXProvider>
          </div>
        </article>
      </main>
      <Aside>
        <Categories categories={data.singlePost.frontmatter.categories} />
        <Tags tags={data.singlePost.frontmatter.tags} />
      </Aside>
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
        hero_image_alt
        hero_image_class
        hero_image_figcaption
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
