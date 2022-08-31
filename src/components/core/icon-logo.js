import * as React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery, Link } from 'gatsby';

const IconLogo = () => {
  const data = useStaticQuery(query);

  return (
    <div className='icon-logo'>
      <Link to='/'>
        <GatsbyImage
          image={data.iconLogo.childImageSharp.gatsbyImageData}
          alt='icon logo for website'
        />
      </Link>
    </div>
  );
};

const query = graphql`
  query iconLogo {
    iconLogo: file(relativePath: { eq: "icon.png" }) {
      childImageSharp {
        gatsbyImageData(formats: AUTO, placeholder: BLURRED)
      }
    }
  }
`;

export default IconLogo;
