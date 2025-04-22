
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import RecipeForm from '@/components/RecipeForm';
import { Recipe } from '@/types/recipe';
import { toast } from '@/components/ui/use-toast';

const AddRecipe = () => {
  const navigate = useNavigate();

  const handleSubmit = (recipe: Omit<Recipe, 'id' | 'createdAt' | 'updatedAt'>) => {
    // In a real app, this would be an API call to save the recipe
    console.log('Submitting new recipe:', recipe);
    
    // Show success message
    toast({
      title: "Recipe Created",
      description: "Your recipe has been successfully created!",
    });
    
    // Redirect to home page
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-recipe-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-serif font-medium">Create New Recipe</h1>
          <p className="text-gray-600">Share your culinary creation with the world</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <RecipeForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
