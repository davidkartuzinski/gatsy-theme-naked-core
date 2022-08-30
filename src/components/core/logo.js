import * as React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery, Link } from 'gatsby';

const Logo = () => {
  const data = useStaticQuery(query);

  return (
    <div className='logo'>
      <Link to='/'>
        <GatsbyImage
          image={data.logo.childImageSharp.gatsbyImageData}
          alt='Gatsby Naked theme logo for website'
        />
      </Link>
    </div>
  );
};

const query = graphql`
  query logo {
    logo: file(relativePath: { eq: "naked-logo.png" }) {
      relativePath
      childImageSharp {
        gatsbyImageData(
          formats: [AUTO, WEBP, AVIF]
          placeholder: BLURRED
          width: 300
        )
      }
    }
  }
`;

export default Logo;
