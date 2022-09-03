import * as React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
import wordsCounter from 'word-counting';
import * as dayjs from 'dayjs';
import { useSiteMetadata } from '../../hooks/use-site-metadata';

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
  const {
    author: websiteAuthor,
    locale: websiteLocale,
    logo: websiteLogo,
    siteUrl,
    social,
    // textDirection: websiteTextDirection,
    websiteDescription: siteDescription,
    websiteName,
  } = useSiteMetadata();

  const author = websiteAuthor;
  const locale = websiteLocale;
  const logo = websiteLogo;
  const websiteUrl = siteUrl;
  const twitter = social.twitter;
  const twitterAuthor = social.twitterAuthor;
  const websiteDescription = siteDescription;
  const siteNameWebsite = websiteName;

  const schemaWebPage = {
    '@context': 'http://schema.org',
    '@id': `${websiteUrl}/${slug}`,
    '@type': 'WebPage',
    name: siteNameWebsite,
    description: websiteDescription,
    publisher: {
      type: 'blog',
      '@id': websiteUrl,
    },
    license: 'http://creativecommons.org/licenses/by-nc-sa/3.0/us/deed.en_US',
  };

  // https://jsonld-examples.com/schema.org/code/article-markup.php
  const schemaArticle = {
    '@context': 'http://schema.org',
    '@type': 'Article',
    author: author,
    datePublished: dayjs(date).toISOString(),
    datemodified: dayjs(dateModified).toISOString(),
    mainEntityOfPage: 'True',
    headline: headline,
    // https://schema.org/articleSection like a category
    articleSection: `${categories && categories.slice(1, 2)}`,
    image: {
      '@type': 'imageObject',
      url: `${websiteUrl}/${image}`,
      height: '600',
      width: '800',
    },
    publisher: {
      '@type': 'Organization',
      name: siteNameWebsite,
      logo: {
        '@type': 'imageObject',
        url: `${websiteUrl}/${logo}`,
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
      {canonical && (
        <link rel='canonical' href={`${websiteUrl}/${canonical} `} />
      )}
      {!canonical && <link rel='canonical' href={`${websiteUrl}/${slug}`} />}
      <title>
        {title} | {siteNameWebsite}
      </title>
      console.log(siteNameWebsite)
      <meta name='description' content={description} />
      <meta name='image' content={`${websiteUrl}/${logo}`} />
      <meta name='author' content={author} />
      {/* Reference: https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML */}
      {/* Open Graph https://ogp.me/ https://developers.facebook.com/docs/sharing/webmasters/ */}
      <meta property='og:locale' content={locale} />
      <meta property='og:site_name' content={siteNameWebsite} />
      {canonical && (
        <meta property='og:url' content={`${websiteUrl}/${canonical} `} />
      )}
      {!canonical && (
        <meta property='og:url' content={`${websiteUrl}/${slug}`} />
      )}
      {/* Only "articles" have tags, so check and make an article ... */}
      <meta property='og:type' content={tags ? 'article' : 'website'} />
      {/* If an article or not we show and image. Either from the article or the site logo.*/}
      {tags && (
        <meta
          property='article:published_time'
          content={dayjs(date).toISOString()}
        />
      )}
      {tags && (
        <meta
          property='article:modified_time'
          content={dayjs(dateModified).toISOString()}
        />
      )}
      {tags &&
        tags.map((tag, i) => (
          <meta property='article:tag' content={tag} key={i} />
        ))}
      {tags && <meta property='article:author' content={author} />}
      {tags && <meta property='og:image' content={`${websiteUrl}${image}`} />}
      {!tags && <meta property='og:image' content={`${websiteUrl}/${logo}`} />}
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
