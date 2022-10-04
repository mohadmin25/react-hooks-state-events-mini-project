import React from "react";

function CategoryFilter({categories, category, selectCategory}) {
  const btn = categories.map((eachCategory) => {
  const className = eachCategory === category? 'selected' : null;
  return (
    <button
      className={className}
      onClick={(() => selectCategory(eachCategory))}
      key={eachCategory}> {eachCategory} </button>
  );
})

  return (
    <div className="categories">
      <h5>Category filters</h5>
     {btn}
    </div>
  );
}
export default CategoryFilter;