import * as React from 'react';
import { Link } from 'gatsby';
import { CategoriesIcon } from '../components/core/icons.js';
import Seo from '../components/core/seo';
import Layout from '../components/structure/layout';
import { useAllMdx } from '../hooks/use-all-mdx';
import NakedBreadcrumb from '../components/core/breadcrumb';
import Aside from '../components/structure/aside';
import { toKebabCase } from '../../utilities/helpers';

const CategoriesPage = ({ pageContext }) => {
  const { categories } = useAllMdx();
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  // const customCrumbLabel = location.pathname.toLowerCase().replace('-', ' ');
  const customCrumbLabel = '/';

  return (
    <Layout pageClass={`categories-page`}>
      <main className='page'>
        <NakedBreadcrumb crumbs={crumbs} crumbLabel={customCrumbLabel} />
        <article>
          <header>
            <h1>
              <CategoriesIcon />
              Categories
            </h1>
          </header>
          <ul>
            {categories.map((category) => (
              <li key={category.fieldValue}>
                <Link to={`/categories/${toKebabCase(category.fieldValue)}`}>
                  {category.fieldValue} ({category.totalCount})
                </Link>
              </li>
            ))}
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
      title={`Categories for site`} // Just add the title of this page
      canonical={``} // if there are two copies of a page, use this URL as main one.
      slug={`categories`} // the URL the page is found. Enter relative location, eg "blog" for blog page
      description={`This is the Gatsby Theme Naked. You just need to add CSS and content. Discover things by going through the Categories. Come look.`} // This summaries your web page, this page. Not the entire website. 130 words for mobile / 160 words for desktop.
      crumbs={crumbs}
    />
  );
};

export default CategoriesPage;
