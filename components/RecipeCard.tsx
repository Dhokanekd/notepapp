import React from "react";
import { Recipe } from "../types";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="p-4 border rounded-md shadow-md w-full max-w-md bg-white">
      <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
      <h3 className="font-semibold">Ingredients:</h3>
      <ul className="list-disc pl-6 mb-2">
        {recipe.ingredients.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <h3 className="font-semibold">Instructions:</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeCard;
