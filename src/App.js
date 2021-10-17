import React,{useEffect,useState} from "react";
import './App.css';

function App() {
  const APP_ID = 'fec05e16'
  const APP_KEY = '59a5a32c19fbd4fc51f5d752b0b7b157'

  useEffect(() =>{
    getRecipes();
  }, [])

  const getRecipes =  async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);
  }
  

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default App;
