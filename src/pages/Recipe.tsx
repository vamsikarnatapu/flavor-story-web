
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import RecipeDetail from '@/components/RecipeDetail';
import { sampleRecipes } from '@/data/recipes';
import { Recipe as RecipeType } from '@/types/recipe';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Edit } from 'lucide-react';

const Recipe = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<RecipeType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch this from an API
    const foundRecipe = sampleRecipes.find(r => r.id === id);
    setRecipe(foundRecipe || null);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-recipe-background">
        <Header />
        <div className="container mx-auto px-4 py-12 flex justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-8 w-48 bg-gray-300 rounded mb-4"></div>
            <div className="h-4 w-64 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="min-h-screen bg-recipe-background">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-serif mb-4">Recipe Not Found</h1>
          <p className="text-gray-600 mb-6">We couldn't find the recipe you're looking for.</p>
          <Button onClick={() => navigate('/')} className="bg-recipe-primary hover:bg-recipe-primary/90">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Recipes
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-recipe-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex justify-between items-center">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="text-gray-600 hover:text-recipe-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <Button 
            variant="outline"
            onClick={() => navigate(`/edit-recipe/${recipe.id}`)}
            className="text-recipe-primary border-recipe-primary hover:bg-recipe-primary/10"
          >
            <Edit className="mr-2 h-4 w-4" />
            Edit Recipe
          </Button>
        </div>
        
        <RecipeDetail recipe={recipe} />
      </div>
    </div>
  );
};

export default Recipe;
