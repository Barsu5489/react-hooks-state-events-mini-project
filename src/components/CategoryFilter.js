import React, { useState } from "react";

function CategoryFilter({categories}) {
  const [selected, setSelected] = useState({});
  function handleClick(index){
    setSelected({...selected, [index]:!selected[index]})
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */
      categories.map((btn,index)=>{
        return <button className={selected[index] ? 'selected':''} key={index} onClick={()=>handleClick(index)}>{btn}</button>
      })
      }
    </div>
  );
}

export default CategoryFilter;
