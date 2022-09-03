import * as React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import { ReadNextIcon, PublishDateIcon } from './icons';

const PostPreview = ({ slug, image, imageAlt, title, date, excerpt }) => (
  <>
    <Link to={`/blog/${slug}`}>
      <h2>{title}</h2>
    </Link>
    <figure>
      <Link to={`/blog/${slug}`}>
        <GatsbyImage image={image} alt={imageAlt} />
      </Link>
    </figure>
    <PublishDateIcon /> Published on <p>{date}</p>
    <p>{excerpt}</p>
    <Link to={`/blog/${slug}`} aria-label={`Read the rest: ${title} `}>
      Read the rest <ReadNextIcon />
    </Link>
    <hr />
  </>
);

export default PostPreview;
