import * as React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const ResponsiveImage = ({ image, alt }) => {
  return (
    // https://www.scottohara.me/blog/2019/01/21/how-do-you-figure.html
    <figure role='figure' aria-label={alt}>
      <GatsbyImage image={image} alt={alt} />
    </figure>
  );
};

export default ResponsiveImage;
