import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/structure/layout';
import Seo from '../components/core/seo';
import { TagsIcon } from '../components/core/icons.js';
import NakedBreadcrumb from '../components/core/breadcrumb';
import Aside from '../components/structure/aside';

const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext;

  const { edges, totalCount } = data.allMdx;

  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;

  const {
    breadcrumb: { crumbs },
  } = pageContext;

  const [, , customCrumbLabel] = location.pathname.split('/');

  return (
    <Layout pageClass={`single-tag-page`}>
      <main className='page'>
        <NakedBreadcrumb crumbs={crumbs} crumbLabel={customCrumbLabel} />

        <article>
          <header>
            <h1>
              <TagsIcon />
              {tagHeader}
            </h1>
          </header>
          <ul>
            {edges.map(({ node }, index) => {
              const { slug } = node.fields;
              const { title } = node.frontmatter;
              return (
                <li key={index}>
                  <Link to={'/blog' + slug}>{title}</Link>
                </li>
              );
            })}
          </ul>
          <Link to='/tags'>See all tags</Link>
        </article>
      </main>
      <Aside />
    </Layout>
  );
};

export const Head = ({ pageContext, data }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  return (
    <Seo
      title={`A Tag`} // Just add the title of this page
      canonical={``} // if there are two copies of a page, use this URL as main one.
      slug={`tags/`} // the URL the page is found. Enter relative location, eg "blog" for blog page
      description={`This is the Gatsby Theme Naked. You just need to add CSS and content. Discover things by going through the Tags. Come look.`} // This summaries your web page, this page. Not the entire website. 130 words for mobile / 160 words for desktop.
      crumbs={crumbs}
    />
  );
};

export default Tags;

export const pageQuery = graphql`
  query ($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
