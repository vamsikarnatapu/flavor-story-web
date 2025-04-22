
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChefHat, Home, PlusCircle, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <ChefHat className="h-8 w-8 text-recipe-primary" />
          <span className="text-2xl font-serif font-medium text-recipe-primary">FlavorStory</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-recipe-primary font-medium flex items-center">
            <Home className="mr-1 h-4 w-4" />
            Home
          </Link>
          <Link to="/categories" className="text-gray-700 hover:text-recipe-primary font-medium">
            Categories
          </Link>
          <Link to="/favorites" className="text-gray-700 hover:text-recipe-primary font-medium">
            Favorites
          </Link>
        </nav>
        
        <div className="flex items-center space-x-2">
          <Link to="/search">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/add-recipe">
            <Button className="bg-recipe-primary hover:bg-recipe-primary/90">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Recipe
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
