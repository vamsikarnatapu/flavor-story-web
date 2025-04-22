
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Recipe, RecipeCategory, RecipeDifficulty, Ingredient, Instruction } from '@/types/recipe';
import { PlusCircle, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

interface RecipeFormProps {
  initialRecipe?: Partial<Recipe>;
  onSubmit: (recipe: Omit<Recipe, 'id' | 'createdAt' | 'updatedAt'>) => void;
}

const RecipeForm = ({ initialRecipe, onSubmit }: RecipeFormProps) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState(initialRecipe?.title || '');
  const [description, setDescription] = useState(initialRecipe?.description || '');
  const [prepTime, setPrepTime] = useState(initialRecipe?.prepTime || 0);
  const [cookTime, setCookTime] = useState(initialRecipe?.cookTime || 0);
  const [servings, setServings] = useState(initialRecipe?.servings || 2);
  const [difficulty, setDifficulty] = useState<RecipeDifficulty>(initialRecipe?.difficulty || 'medium');
  const [categories, setCategories] = useState<RecipeCategory[]>(initialRecipe?.categories || []);
  const [imageUrl, setImageUrl] = useState(initialRecipe?.image || '');
  const [ingredients, setIngredients] = useState<Ingredient[]>(initialRecipe?.ingredients || [{ name: '', amount: '', unit: '' }]);
  const [instructions, setInstructions] = useState<Instruction[]>(initialRecipe?.instructions || [{ step: 1, description: '' }]);

  const categoryOptions: RecipeCategory[] = ['breakfast', 'lunch', 'dinner', 'dessert', 'snack', 'drink', 'appetizer', 'main', 'side'];
  const difficultyOptions: RecipeDifficulty[] = ['easy', 'medium', 'hard'];

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: '', amount: '', unit: '' }]);
  };

  const handleRemoveIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const handleIngredientChange = (index: number, field: keyof Ingredient, value: string) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = { ...newIngredients[index], [field]: value };
    setIngredients(newIngredients);
  };

  const handleAddInstruction = () => {
    const nextStep = instructions.length > 0 ? instructions[instructions.length - 1].step + 1 : 1;
    setInstructions([...instructions, { step: nextStep, description: '' }]);
  };

  const handleRemoveInstruction = (index: number) => {
    setInstructions(instructions.filter((_, i) => i !== index));
  };

  const handleInstructionChange = (index: number, description: string) => {
    const newInstructions = [...instructions];
    newInstructions[index] = { ...newInstructions[index], description };
    setInstructions(newInstructions);
  };

  const handleMoveInstructionUp = (index: number) => {
    if (index === 0) return;
    const newInstructions = [...instructions];
    [newInstructions[index - 1], newInstructions[index]] = [newInstructions[index], newInstructions[index - 1]];
    // Update steps
    newInstructions[index - 1].step = index;
    newInstructions[index].step = index + 1;
    setInstructions(newInstructions);
  };

  const handleMoveInstructionDown = (index: number) => {
    if (index === instructions.length - 1) return;
    const newInstructions = [...instructions];
    [newInstructions[index], newInstructions[index + 1]] = [newInstructions[index + 1], newInstructions[index]];
    // Update steps
    newInstructions[index].step = index + 1;
    newInstructions[index + 1].step = index + 2;
    setInstructions(newInstructions);
  };

  const handleToggleCategory = (category: RecipeCategory) => {
    setCategories(prevCategories => 
      prevCategories.includes(category)
        ? prevCategories.filter(c => c !== category)
        : [...prevCategories, category]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!title.trim()) {
      toast({ title: "Error", description: "Recipe title is required", variant: "destructive" });
      return;
    }
    
    if (ingredients.some(i => !i.name.trim() || !i.amount.trim())) {
      toast({ title: "Error", description: "All ingredients must have a name and amount", variant: "destructive" });
      return;
    }
    
    if (instructions.some(i => !i.description.trim())) {
      toast({ title: "Error", description: "All instructions must have a description", variant: "destructive" });
      return;
    }

    if (categories.length === 0) {
      toast({ title: "Error", description: "Please select at least one category", variant: "destructive" });
      return;
    }
    
    // Create recipe object
    const recipe = {
      title,
      description,
      ingredients,
      instructions: instructions.map((instruction, index) => ({
        ...instruction,
        step: index + 1 // Ensure steps are sequential
      })),
      prepTime,
      cookTime,
      servings,
      difficulty,
      categories,
      image: imageUrl || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c' // Default image if none provided
    };
    
    onSubmit(recipe);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6 md:col-span-2">
          <div className="form-group">
            <Label htmlFor="title">Recipe Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter recipe title"
              className="recipe-input mt-1"
            />
          </div>

          <div className="form-group">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your recipe"
              className="recipe-input mt-1 h-24"
            />
          </div>

          <div className="form-group">
            <Label htmlFor="imageUrl">Image URL</Label>
            <Input
              id="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Enter image URL"
              className="recipe-input mt-1"
            />
            {imageUrl && (
              <div className="mt-2 border rounded-lg overflow-hidden w-full max-w-xs h-40">
                <img src={imageUrl} alt="Recipe preview" className="w-full h-full object-cover" />
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="form-group">
            <Label htmlFor="prepTime">Preparation Time (minutes)</Label>
            <Input
              id="prepTime"
              type="number"
              min="0"
              value={prepTime}
              onChange={(e) => setPrepTime(parseInt(e.target.value) || 0)}
              className="recipe-input mt-1"
            />
          </div>

          <div className="form-group">
            <Label htmlFor="cookTime">Cooking Time (minutes)</Label>
            <Input
              id="cookTime"
              type="number"
              min="0"
              value={cookTime}
              onChange={(e) => setCookTime(parseInt(e.target.value) || 0)}
              className="recipe-input mt-1"
            />
          </div>

          <div className="form-group">
            <Label htmlFor="servings">Servings</Label>
            <Input
              id="servings"
              type="number"
              min="1"
              value={servings}
              onChange={(e) => setServings(parseInt(e.target.value) || 1)}
              className="recipe-input mt-1"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="form-group">
            <Label>Difficulty</Label>
            <div className="flex gap-2 mt-1">
              {difficultyOptions.map((option) => (
                <Button
                  key={option}
                  type="button"
                  variant={difficulty === option ? "default" : "outline"}
                  className={difficulty === option ? "bg-recipe-primary" : ""}
                  onClick={() => setDifficulty(option)}
                >
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </Button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <Label>Categories</Label>
            <div className="flex flex-wrap gap-2 mt-1">
              {categoryOptions.map((category) => (
                <Button
                  key={category}
                  type="button"
                  variant={categories.includes(category) ? "default" : "outline"}
                  className={categories.includes(category) ? "bg-recipe-primary" : ""}
                  onClick={() => handleToggleCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h2 className="section-title flex justify-between items-center">
          Ingredients
          <Button type="button" onClick={handleAddIngredient} variant="outline" size="sm">
            <PlusCircle className="w-4 h-4 mr-1" /> Add Ingredient
          </Button>
        </h2>
        <div className="space-y-4">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="flex flex-wrap items-end gap-2">
              <div className="w-full sm:w-[20%]">
                <Label htmlFor={`amount-${index}`}>Amount</Label>
                <Input
                  id={`amount-${index}`}
                  value={ingredient.amount}
                  onChange={(e) => handleIngredientChange(index, 'amount', e.target.value)}
                  placeholder="e.g. 1, 1/2"
                  className="recipe-input mt-1"
                />
              </div>
              <div className="w-full sm:w-[20%]">
                <Label htmlFor={`unit-${index}`}>Unit</Label>
                <Input
                  id={`unit-${index}`}
                  value={ingredient.unit || ''}
                  onChange={(e) => handleIngredientChange(index, 'unit', e.target.value)}
                  placeholder="e.g. cup, tbsp"
                  className="recipe-input mt-1"
                />
              </div>
              <div className="w-full sm:w-[45%]">
                <Label htmlFor={`name-${index}`}>Ingredient</Label>
                <Input
                  id={`name-${index}`}
                  value={ingredient.name}
                  onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
                  placeholder="e.g. flour, sugar"
                  className="recipe-input mt-1"
                />
              </div>
              {ingredients.length > 1 && (
                <Button
                  type="button"
                  onClick={() => handleRemoveIngredient(index)}
                  variant="ghost"
                  size="icon"
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="border-t pt-6">
        <h2 className="section-title flex justify-between items-center">
          Instructions
          <Button type="button" onClick={handleAddInstruction} variant="outline" size="sm">
            <PlusCircle className="w-4 h-4 mr-1" /> Add Step
          </Button>
        </h2>
        <div className="space-y-4">
          {instructions.map((instruction, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-recipe-primary text-white font-medium flex-shrink-0 mt-2">
                {instruction.step}
              </div>
              <div className="w-full">
                <Label htmlFor={`instruction-${index}`} className="sr-only">Step {instruction.step}</Label>
                <Textarea
                  id={`instruction-${index}`}
                  value={instruction.description}
                  onChange={(e) => handleInstructionChange(index, e.target.value)}
                  placeholder={`Describe step ${instruction.step}`}
                  className="recipe-input mt-1"
                />
              </div>
              <div className="flex flex-col">
                <Button
                  type="button"
                  onClick={() => handleMoveInstructionUp(index)}
                  variant="ghost"
                  size="icon"
                  disabled={index === 0}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <ChevronUp className="w-4 h-4" />
                </Button>
                <Button
                  type="button"
                  onClick={() => handleMoveInstructionDown(index)}
                  variant="ghost"
                  size="icon"
                  disabled={index === instructions.length - 1}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <ChevronDown className="w-4 h-4" />
                </Button>
                {instructions.length > 1 && (
                  <Button
                    type="button"
                    onClick={() => handleRemoveInstruction(index)}
                    variant="ghost"
                    size="icon"
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end gap-4 border-t pt-6">
        <Button type="button" variant="outline" onClick={() => navigate(-1)}>
          Cancel
        </Button>
        <Button type="submit" className="bg-recipe-primary hover:bg-recipe-primary/90">
          Save Recipe
        </Button>
      </div>
    </form>
  );
};

export default RecipeForm;
