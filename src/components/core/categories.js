import * as React from 'react';
import { Link } from 'gatsby';
import slugify from 'react-slugify';
import { CategoriesIcon, NextPageIcon } from './icons';

const Categories = ({ categories }) => {
  const categoriesList = categories;
  const categoryCount = categories.length;

  const categoryHeader = `${categoryCount} categor${
    categoryCount === 1 ? 'y' : 'ies'
  } for this post.`;

  return (
    <section className='categories-on-page'>
      <h3 className='h4'>
        <CategoriesIcon className='categories-icon' /> {categoryHeader}
      </h3>
      <ul>
        {categoriesList.map((category, index) => {
          let categorySlug = slugify(category);
          let categoryUrl = `/categories/${categorySlug}`;
          return (
            <li key={index}>
              <NextPageIcon /> <Link to={categoryUrl}>{category}</Link>
            </li>
          );
        })}
      </ul>
      <Link className='all-categories' to='/categories'>
        See all categories
      </Link>
    </section>
  );
};

export default Categories;
