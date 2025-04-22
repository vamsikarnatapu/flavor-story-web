
import { Recipe } from '@/types/recipe';
import { Clock, ChefHat, Users } from 'lucide-react';

interface RecipeDetailProps {
  recipe: Recipe;
}

const RecipeDetail = ({ recipe }: RecipeDetailProps) => {
  return (
    <div className="animate-fade-in">
      <div className="mb-8 relative rounded-xl overflow-hidden h-[40vh]">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-6 w-full">
            <h1 className="text-white text-4xl md:text-5xl font-serif mb-2">{recipe.title}</h1>
            <div className="flex flex-wrap">
              {recipe.categories.map(category => (
                <span key={category} className="recipe-tag bg-white/20 text-white backdrop-blur-sm">
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <p className="text-gray-700 text-lg mb-4">{recipe.description}</p>
            
            <div className="flex flex-wrap gap-4 py-4 border-t border-b border-gray-100">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-recipe-primary mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Prep Time</p>
                  <p className="font-medium">{recipe.prepTime} min</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-recipe-primary mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Cook Time</p>
                  <p className="font-medium">{recipe.cookTime} min</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-recipe-primary mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Servings</p>
                  <p className="font-medium">{recipe.servings}</p>
                </div>
              </div>
              <div className="flex items-center">
                <ChefHat className="h-5 w-5 text-recipe-primary mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Difficulty</p>
                  <p className="font-medium capitalize">{recipe.difficulty}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="section-title">Instructions</h2>
            <ol className="space-y-6">
              {recipe.instructions.map((instruction) => (
                <li key={instruction.step} className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-recipe-primary text-white font-medium">
                      {instruction.step}
                    </div>
                  </div>
                  <div className="pt-1">
                    <p className="text-gray-700">{instruction.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
            <h2 className="section-title">Ingredients</h2>
            <p className="text-sm text-gray-500 mb-4">For {recipe.servings} servings</p>
            <ul className="space-y-3">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start pb-2 border-b border-gray-100 last:border-0">
                  <div className="mr-2 flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-recipe-primary"></div>
                  </div>
                  <span>
                    <span className="font-medium">{ingredient.amount} {ingredient.unit} </span>
                    {ingredient.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
