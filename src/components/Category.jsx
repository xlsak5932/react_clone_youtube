import React from 'react';
import Categorys from '../utils/content';

const Category = ({ selectCategory, setSelectCategory }) => {
  return (
    <div>
      {Categorys.map((category) => (
        <button
          style={{
            backgroundColor:
              category.name === selectCategory ? '#ca9e0e' : 'transparent',
          }}
          key={category.name}
          onClick={() => setSelectCategory(category.name)}
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default Category;
