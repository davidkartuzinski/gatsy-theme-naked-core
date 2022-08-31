import * as React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const ResponsiveImage = ({ image, alt, figcaption, imageClassName }) => {
  let figCaption;

  if (figcaption) {
    figCaption = figcaption;
  }

  return (
    // https://www.scottohara.me/blog/2019/01/21/how-do-you-figure.html
    <figure role='figure' aria-label={figCaption}>
      <GatsbyImage
        image={image}
        alt={alt}
        figcaption={figCaption}
        imageClassName={imageClassName}
      />
      <figcaption>{figCaption}</figcaption>
    </figure>
  );
};

export default ResponsiveImage;
