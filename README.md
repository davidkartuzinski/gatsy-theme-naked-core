# A Naked Gatsby Theme (Updated 2022 for Gatsby v4)

<small>**Note: The previous version of this theme contained two features I did not bring over. I removed the Comments plugin (as these just get spam nowadays), and I could not get Search to function. I left the search.js component and the CSS if you want to add search. Just import it into the header.**</small>

## A truly production ready base Gatsby Theme

This theme is called Naked because I didn't tie you to any one type of CSS implementation. At this point you just need to add CSS and you're good to go. **You can see the demo:** [Gatsby Naked Theme](https://gatsythemenakedcore.gtsb.io/)

Basically styles can be added to in the [global.css](https://github.com/davidkartuzinski/gatsy-theme-naked-core-2022/tree/main/src/styles) file. I could have made CSS Modules for each of the Widgets and components that are Optional, but I kept them in the `global.css`. In this way, you can remove less if you want to implement `styled-components`, as an example.

## Developer friendly and full blog features, including:

- You can easily change the theme color scheme in the `global.css` file. Just change the colors.

```
/**** CSS Custom Variable for Color Scheme ****/

:root {
  --accent-color: #d77e00;
  --accent-color-shade: #8e4200;
  --dark-accent-color: #55433b;
  --grey-color: #dfe0df;
  --white-color: #fff7f0;
  --black-color: #040404;
  --success-green: #007c45;
  --error-red: #c4515c;
  --edges-width: calc((100% - 1280px) / 2);
}

```

- **Widgets**:
  - Text Widgets
  - Bio
  - Latest Posts
  - Social Follow Me
- **Typography implementation.** **Note:** `npm install --save --legacy-peer-deps` **and** `npm config set legacy-peer-deps` **were both invoked to be able to install [gatsby-plugin-typography](https://www.gatsbyjs.com/plugins/gatsby-plugin-typography/?=typogr#gatsby-plugin-typography)**
- **Tags for posts**, just add to the Frontmatter.
- **Categories for posts**, just add to the Frontmatter.
- **Blogroll** can be customized to show as many pages on it before creating additional pages for the blogroll.
- **Sitewide Breadcrumbs**
- **Instagram integration**. Just follow the instructions for getting your access token. [Video to watch](https://www.gatsbyjs.com/plugins/gatsby-source-instagram-all/?=gatsby-source-instagram-all). You **MUST** use `.env` variables or else Facebook will revoke the acces as soon as you commit and push to GitHub.
- **MailChimp plugin configured**. You just need to replace the ID from [Mailchimp.com](https://mailchimp.com/)
- **Comprehensive SEO implementation**. Special emphasis has been made to have a proper implementation of Schema.org and SEO best practices. For example, each different blog post, has it's own blog post schema.
- **Simple Contact Form**

## Using the theme is easy

1. Just clone or download it.
2. If you have any questions, feel free to ask.
3. Feel free to make pull requests.
