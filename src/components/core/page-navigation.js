import * as React from 'react';
import { Link } from 'gatsby';
import { PreviousPageIcon, NextPageIcon } from './icons';

const PageNavigation = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext;

  return (
    <nav
      className='previous-next-post-nav'
      aria-label='Previous post listing or next post listing '
    >
      {previousPagePath && (
        <span>
          <Link to={`${previousPagePath}`}>
            <PreviousPageIcon /> Previous Posts
          </Link>
        </span>
      )}
      {nextPagePath && (
        <span className='nav-next-page-span'>
          <Link to={`${nextPagePath}`}>
            Next Posts <NextPageIcon />
          </Link>
        </span>
      )}
    </nav>
  );
};

export default PageNavigation;
