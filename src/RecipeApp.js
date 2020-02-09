import React from 'react';
import Recipe from './Components/Recipe';
import './RecipeApp.css';
import Navbar from './Components/Navbar'
import PropTypes from 'prop-types';

function RecipeApp() {
  
  return (
    <div className="App">
      <Navbar />
      <Recipe 
        title="Spaghetti" 
        ingredients={['flour', 'water']}
        instructions="Mix Ingredients"
        img="spaghetti.jpg"
        />

    </div>
  );
}

export default RecipeApp;
