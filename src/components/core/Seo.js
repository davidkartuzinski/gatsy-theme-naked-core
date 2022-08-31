import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// Note: the  <html lang='en-US' /> is found in the gatasy-ssr.js file in root

const Seo = ({
  title,
  canonical,
  description,
  date,
  dateModified,
  tags,
  image,
  slug,
  categories,
  headline,
  articleBody,
  // crumbs,
}) => {
  const { site } = useStaticQuery(graphql`
    query Seo {
      site {
        siteMetadata {
          logo
          websiteDescription
          websiteName
          textDirection
          siteUrl
          author
          locale
          social {
            twitter
            twitterAuthor
          }
        }
      }
    }
  `);

  const siteUrl = site.siteMetadata.siteUrl;
  const siteNameWebsite = site.siteMetadata.websiteName;
  const websiteDescription = site.siteMetadata.websiteDescription;
  const author = site.siteMetadata.author;
  const locale = site.siteMetadata.locale;
  const logo = site.siteMetadata.logo;
  const twitter = site.siteMetadata.social.twitter;
  const twitterAuthor = site.siteMetadata.social.twitterAuthor;

  const schemaWebPage = {
    '@context': 'http://schema.org',
    '@id': `${siteUrl}/${slug}`,
    '@type': 'WebPage',
    name: siteNameWebsite,
    description: websiteDescription,
    publisher: {
      type: 'blog',
      '@id': siteUrl,
    },
    license: 'http://creativecommons.org/licenses/by-nc-sa/3.0/us/deed.en_US',
  };

  return (
    <>
      {canonical && <link rel='canonical' href={`${siteUrl}/${canonical} `} />}
      {!canonical && <link rel='canonical' href={`${siteUrl}/${slug}`} />}
      <title>
        {title} | {siteNameWebsite}
      </title>
      <meta name='description' content={websiteDescription} />
      {/* <meta name='image' content={`${siteUrl}/${logo}`} /> */}
      <meta name='author' content={author} />
      {/* Reference: https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML */}
      {/* Open Graph https://ogp.me/ https://developers.facebook.com/docs/sharing/webmasters/ */}
      <meta property='og:locale' content={locale} />
      <meta property='og:site_name' content={siteNameWebsite} />
      {canonical && (
        <meta property='og:url' content={`${siteUrl}/${canonical} `} />
      )}
      {!canonical && <meta property='og:url' content={`${siteUrl}/${slug}`} />}
      {/* Only "articles" have tags, so check and make an article ... */}
      <meta property='og:type' content={tags ? 'article' : 'website'} />
      {/* If an article or not we show and image. Either from the article or the site logo.*/}

      {tags && <meta property='article:published_time' content={date} />}
      {tags && <meta property='article:modified_time' content={dateModified} />}
      {tags &&
        tags.map((tag, i) => (
          <meta property='article:tag' content={tag} key={i} />
        ))}

      {tags && <meta property='article:author' content={author} />}

      {tags && <meta property='og:image' content={`${siteUrl}/${image}`} />}
      {!tags && <meta property='og:image' content={`${siteUrl}/${logo}`} />}
      {/* Twitter Graph - https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started */}
      <meta name='twitter:card' content='summary'></meta>
      <meta name='twitter:card' content='summary'></meta>
      <meta name='robots' content='index, follow'></meta>
      {twitter && <meta name='twitter:site' content={twitter} />}
      {twitterAuthor && <meta name='twitter:creator' content={twitterAuthor} />}

      {!tags && (
        <script type='application/ld+json'>
          {JSON.stringify(schemaWebPage)}
        </script>
      )}
    </>
  );
};

export default Seo;
