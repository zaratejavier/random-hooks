import React, {useState} from 'react';
import Recipe from './Recipe';
import RecipeForm from './RecipeForm'

export default function Javier () {
  
  const [recipes, setRecipes] = useState
  ([
      { id:1, name: "Shrimpy", ingridients:"Large shrip, Garlic, butter, Lemon, cilantro", time: "5"},
      { id:2, name: "Tacos", ingridients:"tortillas, meat, salsa, cilantro, union, tomatoes", time: "7"},
      { id:3, name: "Salmon", ingridients:"Salmon, Butter, Fresh herbs, Lemon", time: "5"},
      { id:4, name: "Chicken Alfredo", ingridients:"Chicken, butter, pasta, alfredo sauce", time: "5"},
  ])

  const renderRecipes = () => {
    return recipes.map((recipe) => <Recipe key={recipe.id} {...recipe}/>)
  }

  const addRecipe = (postRecipe) => {
    setRecipes([postRecipe, ...recipes])
  }

  return (
    <div>
      <h1>Secret Recipes</h1>
      <RecipeForm add={addRecipe}/>
      {renderRecipes()}
    </div>
  )

  }
  
