import * as React from 'react';
import SocialFollowMe from '../widgets/social-follow-me';
import IconLogo from '../core/icon-logo';

const Footer = () => {
  return (
    <footer className='page-footer'>
      <section className='footer-widgets'>
        <IconLogo />

        <div>
          <h2 className='h3'>Follow Gatsby Theme Naked</h2>
          <SocialFollowMe />
        </div>
        <div>TEXT WIDGET GOES HERE ***</div>
      </section>

      <section className='privacy'>
        <small>
          &copy;2020 - 2022 &nbsp;| &nbsp;The Gatsby Theme Naked Logo and name.
          The theme and content of this demo are MIT licensed.
        </small>
      </section>
    </footer>
  );
};

export default Footer;
