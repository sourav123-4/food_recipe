import React from 'react'
import './App.css';
import Recipe from './Recipe';
function App() {
  const [search,setSearch]=React.useState('')
  const [input,setInput]=React.useState('')
  const [results,setResults]=React.useState([])
  React.useEffect(()=>{
    const fetchApi=async()=>{
      const url=`https://api.edamam.com/search?q=${search}&app_id=7341a903&app_key=81b0dca8ab2ef8fe59083546ad9884cf`
      const res=await fetch(url)
      const resjson=await res.json()
      console.log(resjson.hits)
      setResults(resjson.hits)
    }
    if(search.length>3)fetchApi()
  },[search])
  function handleclick(){
    setSearch(input)
  }
  return (
    <div className="App">
      <h1>FOOD RECIPEE</h1>
      <input
         type="search"
         className='search-input'
         name='searchinput'
         onChange={(event)=>{setInput(event.target.value)}}/>
         <button className='submit btn-primary' onClick={handleclick}>search</button>
      <div className='app_recipe'>
      {results.map((item)=>{
        return <Recipe recipe={item}/>
        // {console.log(item.recipe.label)}
        // return <p>{item["recipe"]["label"]}</p>
      })}
      </div>
    </div>
    
  );
}

export default App;
