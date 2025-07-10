import React, { useState } from "react";
import { recipes } from "./data/recipes";
import RecipeCard from "./components/RecipeCard";
import { Recipe } from "./types";

const App: React.FC = () => {
  const [currentRecipe, setCurrentRecipe] = useState<Recipe | null>(null);

  const generateRecipe = () => {
    const random = recipes[Math.floor(Math.random() * recipes.length)];
    setCurrentRecipe(random);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">🍽️ Recipe Generator</h1>
      <button
        onClick={generateRecipe}
        className="px-6 py-2 mb-4 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Generate Recipe
      </button>
      {currentRecipe && <RecipeCard recipe={currentRecipe} />}
    </div>
  );
};

export default App;
