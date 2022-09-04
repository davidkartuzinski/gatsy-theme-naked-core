import * as React from 'react';
import { AlertIcon } from '../core/icons';

const TextWidget = () => {
  return (
    <section className='text-widget'>
      <p>
        {' '}
        <AlertIcon /> **Note:** I <strong>invite</strong> critical feedback and
        it is much appreciated. You can always leave an issue{' '}
        <a href='https://github.com/davidkartuzinski/gatsy-theme-naked-core-2022/issues'>
          in the GitHub repo
        </a>{' '}
        or leave a comment below.
      </p>
    </section>
  );
};

export default TextWidget;
