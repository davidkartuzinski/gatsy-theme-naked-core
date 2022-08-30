import * as React from 'react';
import Bio from '../widgets/bio';

const Aside = ({ children }) => {
  return (
    <>
      <aside className='page-aside'>
        {children}

        <Bio />
      </aside>
    </>
  );
};

export default Aside;
