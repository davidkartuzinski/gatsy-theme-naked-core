import * as React from 'react';
import Bio from '../widgets/bio';
import MailChimpSignUp from '../widgets/mailchimp-sign-up';

const Aside = ({ children }) => {
  return (
    <>
      <aside className='page-aside'>
        {children}

        <MailChimpSignUp />
        <Bio />
      </aside>
    </>
  );
};

export default Aside;
