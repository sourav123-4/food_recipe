import React from 'react'

function Recipe({recipe}) {
  return (
    <div className='recipe' onClick={()=>{
      window.open(recipe["recipe"]["url"])
    }}>
      <img src={recipe["recipe"]["image"]} alt='recipe img'/>
      <p>{recipe["recipe"]["label"]}</p>
    </div>
  )
}

export default Recipe