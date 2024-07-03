import React from "react";

const  CategoryFilter = ({categories, handleClick, selectCategory}) => {
  const mappedCategories = categories.map(category => <button className={category === selectCategory ? "selected" : ""} 
  key={category} onClick={handleClick} value={category}>{category}</button>)
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {mappedCategories}
    </div>
  );
}

export default CategoryFilter;
