
export type RecipeCategory = 
  | 'breakfast'
  | 'lunch'
  | 'dinner'
  | 'dessert'
  | 'snack'
  | 'drink'
  | 'appetizer'
  | 'main'
  | 'side';

export type RecipeDifficulty = 'easy' | 'medium' | 'hard';

export interface Ingredient {
  name: string;
  amount: string;
  unit?: string;
}

export interface Instruction {
  step: number;
  description: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: Ingredient[];
  instructions: Instruction[];
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  servings: number;
  difficulty: RecipeDifficulty;
  categories: RecipeCategory[];
  image: string;
  createdAt: Date;
  updatedAt: Date;
}
