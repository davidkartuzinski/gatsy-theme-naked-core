import * as React from 'react';
import { Link } from 'gatsby';
import { TagsIcon } from '../components/core/icons.js';
import Seo from '../components/core/seo';
import Layout from '../components/structure/layout';
import { useAllMdx } from '../hooks/use-all-mdx';
import NakedBreadcrumb from '../components/core/breadcrumb';
import Aside from '../components/structure/aside';
import { toKebabCase } from '../utilities/helpers.js';

const TagsPage = ({ pageContext }) => {
  const { tags } = useAllMdx();

  const {
    breadcrumb: { crumbs },
  } = pageContext;

  // const customCrumbLabel = location.pathname.toLowerCase().replace('-', ' ');
  const customCrumbLabel = '/';

  return (
    <Layout pageClass={`tags-page`}>
      <main className='page'>
        <NakedBreadcrumb crumbs={crumbs} crumbLabel={customCrumbLabel} />

        <article>
          <header>
            <h1>
              <TagsIcon />
              Tags
            </h1>
          </header>
          <ul>
            {tags.map((tag) => (
              <li key={tag.fieldValue}>
                <Link to={`/tags/${toKebabCase(tag.fieldValue)}`}>
                  {tag.fieldValue} ({tag.totalCount})
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
      title={`Tags for Site`} // Just add the title of this page
      canonical={``} // if there are two copies of a page, use this URL as main one.
      slug={`tags`} // the URL the page is found. Enter relative location, eg "blog" for blog page
      description={`This is the Gatsby Theme Naked. You just need to add CSS and content. Discover things by going through the Tags. Come look.`} // This summaries your web page, this page. Not the entire website. 130 words for mobile / 160 words for desktop.
      crumbs={crumbs}
    />
  );
};

export default TagsPage;
