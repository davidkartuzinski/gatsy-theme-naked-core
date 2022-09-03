import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query Site_Metadata_Query {
        site {
          siteMetadata {
            author
            authorImage
            authorIntro
            contact {
              email
              github
              linkedin
              twitter
            }
            locale
            logo
            menuLinks {
              id
              link
              name
            }
            siteUrl
            social {
              twitter
              twitterAuthor
            }
            textDirection
            title
            websiteDescription
            websiteName
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
