import * as React from 'react';
import Menu from '../core/menu';
import Logo from '../core/logo';
import FollowMe from '../widgets/social-follow-me';

const Header = () => {
  return (
    <header className='page-header'>
      <Logo />
      <Menu />
      <FollowMe />
    </header>
  );
};

export default Header;
