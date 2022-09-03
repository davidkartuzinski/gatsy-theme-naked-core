const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const { paginate } = require(`gatsby-awesome-pagination`);

const toKebabCase = (str) => {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => '-' + chr)
    .trim();
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` }).replace(
      /\/$/,
      ''
    );
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // const blogPostTemplate = require.resolve(
  //   `./src/templates/single-blog-post.js`
  // )

  // create variable to use for each type of templates
  const tagTemplate = require.resolve(`./src/templates/single-tag.js`);
  const categoryTemplate = require.resolve(
    `./src/templates/single-category.js`
  );

  const result = await graphql(`
    query {
      postsRemark: allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
              categories
            }
          }
          next {
            frontmatter {
              slug
              title
            }
          }
          previous {
            frontmatter {
              slug
              title
            }
          }
        }
      }
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          field
          fieldValue
        }
      }
      categoriesGroup: allMdx(limit: 2000) {
        group(field: frontmatter___categories) {
          field
          fieldValue
        }
      }
    }
  `);
  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(
      `Error while running GraphQL query. Check gatsby-node.js file.`
    );
    return;
  }

  // http://codekarate.com/daily-dose-of-drupal/gatsby-pagination-gatsby-awesome-pagination

  // paginate({
  //   createPage,
  //   items: posts,
  //   itemsPerPage: 2, // number of blog posts per page
  //   pathPrefix: '/blog',
  //   component: path.resolve(`./src/templates/blog.js`),
  // });

  // extract tag data from the query
  const tags = result.data.tagsGroup.group;
  // make the tag pages
  tags.forEach((tag) => {
    createPage({
      path: `/tags/${toKebabCase(tag.fieldValue)}`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });

  // extract category data from the query
  const categories = result.data.categoriesGroup.group;
  // make the category pages
  categories.forEach((category) => {
    createPage({
      path: `/categories/${toKebabCase(category.fieldValue)}`,
      component: categoryTemplate,
      context: {
        category: category.fieldValue,
      },
    });
  });
};
