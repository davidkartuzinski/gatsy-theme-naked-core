import * as React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
// import useInstagram from '../../hooks/use-instagram';
import { graphql, StaticQuery } from 'gatsby';

// https://github.com/dezmarie03/gatsby-instagram-demo/blob/master/src/components/Instagram.js
export default function Instagram() {
  return (
    <StaticQuery
      query={graphql`
        query InstagramPosts {
          allInstagramContent(limit: 9) {
            nodes {
              id
              caption
              username
              permalink
              localImage {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED, quality: 80)
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <section className='instagram-widget'>
          <h3>The Gatsby.js Naked Theme on Instagram</h3>
          <ul>
            {data.allInstagramContent.nodes.map((photo, index) => (
              <li key={index}>
                <a
                  href={photo.link}
                  target='_blank'
                  rel='noreferrer'
                  tabIndex='0'
                >
                  <GatsbyImage
                    image={photo.localImage.childImageSharp.gatsbyImageData}
                    alt={photo.caption.text}
                  />
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    />
  );
}
