
import { useState } from 'react';
import Header from '@/components/Header';
import RecipeList from '@/components/RecipeList';
import { sampleRecipes } from '@/data/recipes';
import { Button } from '@/components/ui/button';
import { ChefHat, Coffee, Cookie, UtensilsCrossed } from 'lucide-react';

const Index = () => {
  const [filter, setFilter] = useState<string | null>(null);

  const filteredRecipes = filter 
    ? sampleRecipes.filter(recipe => recipe.categories.includes(filter as any))
    : sampleRecipes;

  return (
    <div className="min-h-screen bg-recipe-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <section className="py-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-4 text-recipe-text">
            Your Cooking Journey Starts Here
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover, create, and share your favorite recipes. Keep all your culinary creations organized in one beautiful place.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            <Button 
              onClick={() => setFilter(null)} 
              variant={filter === null ? "default" : "outline"}
              className={filter === null ? "bg-recipe-primary" : ""}
            >
              <UtensilsCrossed className="mr-2 h-4 w-4" />
              All Recipes
            </Button>
            <Button 
              onClick={() => setFilter('breakfast')} 
              variant={filter === 'breakfast' ? "default" : "outline"}
              className={filter === 'breakfast' ? "bg-recipe-primary" : ""}
            >
              <Coffee className="mr-2 h-4 w-4" />
              Breakfast
            </Button>
            <Button 
              onClick={() => setFilter('dessert')} 
              variant={filter === 'dessert' ? "default" : "outline"}
              className={filter === 'dessert' ? "bg-recipe-primary" : ""}
            >
              <Cookie className="mr-2 h-4 w-4" />
              Desserts
            </Button>
            <Button 
              onClick={() => setFilter('main')} 
              variant={filter === 'main' ? "default" : "outline"}
              className={filter === 'main' ? "bg-recipe-primary" : ""}
            >
              <ChefHat className="mr-2 h-4 w-4" />
              Main Dishes
            </Button>
          </div>
        </section>
        
        <RecipeList 
          recipes={filteredRecipes} 
          title={filter ? `${filter.charAt(0).toUpperCase() + filter.slice(1)} Recipes` : "All Recipes"} 
        />
      </div>
    </div>
  );
};

export default Index;
