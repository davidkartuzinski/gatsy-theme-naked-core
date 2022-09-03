import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/structure/layout';
import Seo from '../components/core/seo';
import { CategoriesIcon } from '../components/core/icons.js';
import NakedBreadcrumb from '../components/core/breadcrumb';
import Aside from '../components/structure/aside';

const Categories = ({ pageContext, data, location }) => {
  const { category } = pageContext;

  const { edges, totalCount } = data.allMdx;

  const categoryHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } categorized with "${category}"`;

  const {
    breadcrumb: { crumbs },
  } = pageContext;

  const [, , customCrumbLabel] = location.pathname.split('/');

  return (
    <Layout pageClass={`single-category-page`}>
      <main className='page'>
        <NakedBreadcrumb crumbs={crumbs} crumbLabel={customCrumbLabel} />

        <article>
          <header>
            <h1>
              <CategoriesIcon />
              {categoryHeader}
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
          <Link to='/categories'>All categories</Link>
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
      title={`A Category`} // Just add the title of this page
      canonical={``} // if there are two copies of a page, use this URL as main one.
      slug={`categories`} // the URL the page is found. Enter relative location, eg "blog" for blog page
      description={`This is the Gatsby Theme Naked. You just need to add CSS and content. Discover things by going through Categories. Come look.`} // This summaries your web page, this page. Not the entire website. 130 words for mobile / 160 words for desktop.
      crumbs={crumbs}
    />
  );
};

export default Categories;

export const pageQuery = graphql`
  query ($category: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            slug
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
