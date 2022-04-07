import React from 'react'

function Recipe({recipe}) {
//   const {label,image,url,ingredients}=recipe.recipe
  return (
    <div className='recipe' onClick={()=>{
      window.open(recipe["recipe"]["url"])
    }}>
      <img src={recipe["recipe"]["image"]} alt='recipe img'/>
      <p>{recipe["recipe"]["label"]}</p>
       {/* <img src={image} alt={label}/>
       <a href={url}  target="_blank"></a>     */}
    </div>
  )
}

export default Recipe