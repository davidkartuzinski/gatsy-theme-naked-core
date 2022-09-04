import * as React from 'react';

import MailChimpSignUp from '../widgets/mailchimp-sign-up';
import LatestPosts from '../widgets/latest-posts';

import Bio from '../widgets/bio';

const Aside = ({ children }) => {
  return (
    <>
      <aside className='page-aside'>
        {children}

        <MailChimpSignUp />
        <Bio />

        <LatestPosts />
      </aside>
    </>
  );
};

export default Aside;
