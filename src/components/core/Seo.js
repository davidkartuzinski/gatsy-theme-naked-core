import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import wordsCounter from 'word-counting';
import moment from 'moment';

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
  crumbs,
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

  // https://jsonld-examples.com/schema.org/code/article-markup.php
  const schemaArticle = {
    '@context': 'http://schema.org',
    '@type': 'Article',
    author: author,
    datePublished: moment(date).toISOString(),
    datemodified: moment(dateModified).toISOString(),
    mainEntityOfPage: 'True',
    headline: headline,
    // https://schema.org/articleSection like a category
    articleSection: `${categories && categories.slice(1, 2)}`,
    image: {
      '@type': 'imageObject',
      url: `${siteUrl}/${image}`,
      height: '600',
      width: '800',
    },
    publisher: {
      '@type': 'Organization',
      name: siteNameWebsite,
      logo: {
        '@type': 'imageObject',
        url: `${siteUrl}/${logo}`,
      },
    },
    wordCount: `${
      tags && wordsCounter(articleBody, { isHtml: true }).wordsCount
    }`,
    articleBody: articleBody,
  };

  // https://schema.org/BreadcrumbList

  let schemaBreadcrumbs = [{}];

  function createBreadCrumbsSchema(crumbs) {
    let breadCrumbSchema = [{}];

    for (let i = 0; i < crumbs.length; i++) {
      let schema = [
        {
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@id': crumbs[i].pathname,
            name: crumbs[i].crumbLabel,
          },
        },
      ];
      breadCrumbSchema.push(schema);
    }
    breadCrumbSchema.shift(0);
    schemaBreadcrumbs = {
      '@context': 'http://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [breadCrumbSchema],
    };
  }

  if (crumbs) {
    createBreadCrumbsSchema(crumbs);
  }

  /* https://www.advancedwebranking.com/blog/meta-tags-important-in-seo/   https://metatags.io/*/

  // Note: the  <html lang='en-US' /> is found in the gatasy-ssr.js file in root

  return (
    <>
      {canonical && <link rel='canonical' href={`${siteUrl}/${canonical} `} />}
      {!canonical && <link rel='canonical' href={`${siteUrl}/${slug}`} />}
      <title>
        {title} | {siteNameWebsite}
      </title>
      <meta name='description' content={description} />
      <meta name='image' content={`${siteUrl}/${logo}`} />
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

      {tags && (
        <meta
          property='article:published_time'
          content={moment(date).toISOString()}
        />
      )}
      {tags && (
        <meta
          property='article:modified_time'
          content={moment(dateModified).toISOString()}
        />
      )}
      {tags &&
        tags.map((tag, i) => (
          <meta property='article:tag' content={tag} key={i} />
        ))}
      {tags && <meta property='article:author' content={author} />}
      {tags && <meta property='og:image' content={`${siteUrl}${image}`} />}
      {!tags && <meta property='og:image' content={`${siteUrl}/${logo}`} />}
      {/* Twitter Graph - https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started */}
      <meta name='twitter:card' content='summary'></meta>
      <meta name='robots' content='index, follow'></meta>
      {twitter && <meta name='twitter:site' content={twitter} />}
      {twitterAuthor && <meta name='twitter:creator' content={twitterAuthor} />}
      {!tags && (
        <script type='application/ld+json'>
          {JSON.stringify(schemaWebPage)}
        </script>
      )}
      {tags && (
        <script type='application/ld+json'>
          {JSON.stringify(schemaArticle, schemaBreadcrumbs)}
        </script>
      )}
      {schemaBreadcrumbs && (
        <script type='application/ld+json'>
          {JSON.stringify(schemaBreadcrumbs)}
        </script>
      )}
    </>
  );
};

export default Seo;
