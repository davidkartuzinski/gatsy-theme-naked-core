import * as React from 'react';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';

const NakedBreadcrumb = ({ crumblabel, crumbs }) => {
  return (
    <div className='breadcrumbs__container'>
      <Breadcrumb
        crumbs={crumbs}
        crumbSeparator=' > '
        crumbLabel={crumblabel}
      />
    </div>
  );
};

export default NakedBreadcrumb;
