import * as React from 'react';
import Menu from '../core/menu';
import Logo from '../core/logo';

const Header = () => {
  return (
    <header className='page-header'>
      <Logo />
      <Menu />
    </header>
  );
};

export default Header;
