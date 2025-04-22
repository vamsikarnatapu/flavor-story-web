
import { Link } from 'react-router-dom';
import { Recipe } from '@/types/recipe';
import { Clock, Users } from 'lucide-react';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <Link to={`/recipe/${recipe.id}`} className="recipe-card group animate-fade-in">
      <div className="recipe-image-container h-48">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="recipe-image"
        />
      </div>
      <div className="p-4">
        <h3 className="font-serif text-xl font-medium mb-2 text-recipe-text group-hover:text-recipe-primary transition-colors">
          {recipe.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {recipe.description}
        </p>
        <div className="flex flex-wrap mb-3">
          {recipe.categories.map(category => (
            <span key={category} className="recipe-tag">
              {category}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{recipe.prepTime + recipe.cookTime} min</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{recipe.servings} servings</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
