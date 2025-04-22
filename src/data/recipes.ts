import { Recipe } from '@/types/recipe';

export const sampleRecipes: Recipe[] = [
  {
    id: '1',
    title: 'Classic Margherita Pizza',
    description: 'A simple yet delicious traditional pizza with fresh mozzarella, tomatoes, and basil.',
    ingredients: [
      { name: 'Pizza dough', amount: '1', unit: 'ball' },
      { name: 'Fresh mozzarella', amount: '200', unit: 'g' },
      { name: 'San Marzano tomatoes', amount: '400', unit: 'g' },
      { name: 'Fresh basil leaves', amount: '10' },
      { name: 'Extra virgin olive oil', amount: '2', unit: 'tbsp' },
      { name: 'Salt', amount: '1', unit: 'tsp' },
      { name: 'Black pepper', amount: '1/2', unit: 'tsp' }
    ],
    instructions: [
      { step: 1, description: 'Preheat your oven to 500°F (260°C) with a pizza stone or steel inside.' },
      { step: 2, description: 'Stretch the pizza dough into a 12-inch circle on a floured surface.' },
      { step: 3, description: 'Crush the tomatoes by hand and spread them over the dough, leaving a 1/2-inch border.' },
      { step: 4, description: 'Tear the mozzarella into pieces and distribute evenly over the tomatoes.' },
      { step: 5, description: 'Drizzle with olive oil and sprinkle with salt and pepper.' },
      { step: 6, description: 'Bake for 8-10 minutes until the crust is golden and the cheese is bubbly.' },
      { step: 7, description: 'Remove from the oven and immediately scatter fresh basil leaves on top.' }
    ],
    prepTime: 20,
    cookTime: 10,
    servings: 2,
    difficulty: 'medium',
    categories: ['dinner', 'main'],
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca',
    createdAt: new Date('2023-03-15'),
    updatedAt: new Date('2023-03-15')
  },
  {
    id: '2',
    title: 'Chocolate Chip Cookies',
    description: 'Perfectly chewy cookies with gooey chocolate chunks and a soft center.',
    ingredients: [
      { name: 'All-purpose flour', amount: '2 1/4', unit: 'cups' },
      { name: 'Baking soda', amount: '1', unit: 'tsp' },
      { name: 'Salt', amount: '1', unit: 'tsp' },
      { name: 'Unsalted butter', amount: '1', unit: 'cup' },
      { name: 'Brown sugar', amount: '3/4', unit: 'cup' },
      { name: 'Granulated sugar', amount: '3/4', unit: 'cup' },
      { name: 'Vanilla extract', amount: '1', unit: 'tsp' },
      { name: 'Eggs', amount: '2', unit: 'large' },
      { name: 'Chocolate chips', amount: '2', unit: 'cups' }
    ],
    instructions: [
      { step: 1, description: 'Preheat oven to 375°F (190°C).' },
      { step: 2, description: 'In a small bowl, mix flour, baking soda, and salt.' },
      { step: 3, description: 'In a large bowl, cream together butter and both sugars until fluffy.' },
      { step: 4, description: 'Beat in eggs one at a time, then add vanilla.' },
      { step: 5, description: 'Gradually mix in dry ingredients until just blended.' },
      { step: 6, description: 'Stir in chocolate chips.' },
      { step: 7, description: 'Drop by rounded tablespoons onto ungreased baking sheets.' },
      { step: 8, description: 'Bake for 9-11 minutes until golden brown.' },
      { step: 9, description: 'Let stand on baking sheet for 2 minutes before transferring to wire racks to cool.' }
    ],
    prepTime: 15,
    cookTime: 10,
    servings: 24,
    difficulty: 'easy',
    categories: ['dessert', 'snack'],
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35',
    createdAt: new Date('2023-02-10'),
    updatedAt: new Date('2023-02-10')
  },
  {
    id: '3',
    title: 'Fresh Spring Salad',
    description: 'A vibrant and nutritious salad packed with seasonal vegetables and a zesty lemon dressing.',
    ingredients: [
      { name: 'Mixed greens', amount: '6', unit: 'cups' },
      { name: 'Cherry tomatoes', amount: '1', unit: 'cup' },
      { name: 'Cucumber', amount: '1', unit: 'medium' },
      { name: 'Avocado', amount: '1', unit: 'ripe' },
      { name: 'Red onion', amount: '1/4', unit: 'cup' },
      { name: 'Fresh lemon juice', amount: '2', unit: 'tbsp' },
      { name: 'Extra virgin olive oil', amount: '3', unit: 'tbsp' },
      { name: 'Dijon mustard', amount: '1', unit: 'tsp' },
      { name: 'Honey', amount: '1', unit: 'tsp' },
      { name: 'Salt and pepper', amount: 'to taste' }
    ],
    instructions: [
      { step: 1, description: 'Wash and dry the mixed greens and place in a large salad bowl.' },
      { step: 2, description: 'Halve the cherry tomatoes and add to the bowl.' },
      { step: 3, description: 'Slice the cucumber and dice the avocado, add both to the bowl.' },
      { step: 4, description: 'Thinly slice the red onion and add to the salad.' },
      { step: 5, description: 'In a small jar, combine lemon juice, olive oil, Dijon mustard, honey, salt, and pepper.' },
      { step: 6, description: 'Shake the jar vigorously to emulsify the dressing.' },
      { step: 7, description: 'Pour the dressing over the salad just before serving and toss gently to coat.' }
    ],
    prepTime: 15,
    cookTime: 0,
    servings: 4,
    difficulty: 'easy',
    categories: ['lunch', 'side', 'appetizer'],
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999',
    createdAt: new Date('2023-04-20'),
    updatedAt: new Date('2023-04-20')
  },
  {
    id: '4',
    title: 'Creamy Mushroom Risotto',
    description: 'A luxurious Italian rice dish with sautéed mushrooms, white wine, and parmesan cheese.',
    ingredients: [
      { name: 'Arborio rice', amount: '1 1/2', unit: 'cups' },
      { name: 'Mixed mushrooms', amount: '300', unit: 'g' },
      { name: 'Shallots', amount: '2', unit: 'medium' },
      { name: 'Garlic cloves', amount: '2', unit: 'cloves' },
      { name: 'Vegetable broth', amount: '6', unit: 'cups' },
      { name: 'White wine', amount: '1/2', unit: 'cup' },
      { name: 'Butter', amount: '3', unit: 'tbsp' },
      { name: 'Olive oil', amount: '2', unit: 'tbsp' },
      { name: 'Parmesan cheese', amount: '1/2', unit: 'cup' },
      { name: 'Fresh thyme', amount: '2', unit: 'tsp' },
      { name: 'Salt and pepper', amount: 'to taste' }
    ],
    instructions: [
      { step: 1, description: 'In a saucepan, bring the vegetable broth to a simmer, then keep warm over low heat.' },
      { step: 2, description: 'In a large pan, heat 1 tbsp butter and olive oil over medium heat.' },
      { step: 3, description: 'Add the mushrooms and cook until browned, about 5 minutes. Remove and set aside.' },
      { step: 4, description: 'In the same pan, add the remaining butter. Add shallots and cook until translucent.' },
      { step: 5, description: 'Add garlic and thyme, cook for 30 seconds until fragrant.' },
      { step: 6, description: 'Add the arborio rice and stir to coat with butter for 1-2 minutes.' },
      { step: 7, description: 'Pour in the white wine and stir until absorbed.' },
      { step: 8, description: 'Add warm broth one ladle at a time, stirring constantly until absorbed before adding more.' },
      { step: 9, description: 'Continue adding broth and stirring for about 18-20 minutes until rice is creamy but still al dente.' },
      { step: 10, description: 'Stir in the mushrooms and parmesan cheese. Season with salt and pepper.' },
      { step: 11, description: 'Remove from heat, cover, and let rest for 2 minutes before serving.' }
    ],
    prepTime: 10,
    cookTime: 30,
    servings: 4,
    difficulty: 'medium',
    categories: ['dinner', 'main'],
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371',
    createdAt: new Date('2023-05-05'),
    updatedAt: new Date('2023-05-05')
  },
  {
    id: '5',
    title: 'Hyderabadi Chicken Biryani',
    description: 'Aromatic and spicy layered rice dish with tender chicken, herbs, and authentic Hyderabadi spices.',
    ingredients: [
      { name: 'Basmati rice', amount: '500', unit: 'g' },
      { name: 'Chicken', amount: '750', unit: 'g' },
      { name: 'Yogurt', amount: '1', unit: 'cup' },
      { name: 'Onions', amount: '3', unit: 'large' },
      { name: 'Ginger garlic paste', amount: '2', unit: 'tbsp' },
      { name: 'Biryani masala', amount: '2', unit: 'tbsp' },
      { name: 'Green chilies', amount: '4', unit: 'medium' },
      { name: 'Mint leaves', amount: '1', unit: 'cup' },
      { name: 'Coriander leaves', amount: '1', unit: 'cup' },
      { name: 'Saffron', amount: '1', unit: 'pinch' },
      { name: 'Ghee', amount: '1/2', unit: 'cup' }
    ],
    instructions: [
      { step: 1, description: 'Marinate chicken with yogurt, ginger garlic paste, and spices for 2 hours.' },
      { step: 2, description: 'Soak basmati rice for 30 minutes, then par-boil with whole spices.' },
      { step: 3, description: 'Layer marinated chicken and par-boiled rice in a heavy bottom pot.' },
      { step: 4, description: 'Add fried onions, herbs, and saffron milk between layers.' },
      { step: 5, description: 'Seal the pot with dough and cook on low heat for 25-30 minutes.' },
      { step: 6, description: 'Let it rest for 10 minutes before opening.' }
    ],
    prepTime: 180,
    cookTime: 45,
    servings: 6,
    difficulty: 'hard',
    categories: ['main', 'dinner'],
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0',
    createdAt: new Date('2024-04-22'),
    updatedAt: new Date('2024-04-22')
  },
  {
    id: '6',
    title: 'Chicken 65',
    description: 'Spicy and crispy deep-fried chicken, a popular South Indian restaurant style appetizer.',
    ingredients: [
      { name: 'Chicken boneless', amount: '500', unit: 'g' },
      { name: 'Red chili powder', amount: '2', unit: 'tsp' },
      { name: 'Ginger garlic paste', amount: '1', unit: 'tbsp' },
      { name: 'Corn flour', amount: '2', unit: 'tbsp' },
      { name: 'Egg', amount: '1', unit: 'large' },
      { name: 'Curry leaves', amount: '2', unit: 'sprigs' },
      { name: 'Yogurt', amount: '2', unit: 'tbsp' }
    ],
    instructions: [
      { step: 1, description: 'Marinate chicken with spices, ginger garlic paste, and egg for 2 hours.' },
      { step: 2, description: 'Mix corn flour into the marinated chicken.' },
      { step: 3, description: 'Deep fry the chicken pieces until golden and crispy.' },
      { step: 4, description: 'Prepare the tempering with curry leaves and spices.' },
      { step: 5, description: 'Toss fried chicken in the tempering.' }
    ],
    prepTime: 120,
    cookTime: 20,
    servings: 4,
    difficulty: 'medium',
    categories: ['appetizer', 'snack'],
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91',
    createdAt: new Date('2024-04-22'),
    updatedAt: new Date('2024-04-22')
  },
  {
    id: '7',
    title: 'Butter Chicken',
    description: 'Creamy, rich and mildly spiced chicken curry, a North Indian favorite.',
    ingredients: [
      { name: 'Chicken', amount: '750', unit: 'g' },
      { name: 'Butter', amount: '100', unit: 'g' },
      { name: 'Tomatoes', amount: '6', unit: 'medium' },
      { name: 'Cream', amount: '200', unit: 'ml' },
      { name: 'Cashew nuts', amount: '15', unit: 'whole' },
      { name: 'Ginger garlic paste', amount: '2', unit: 'tbsp' },
      { name: 'Garam masala', amount: '1', unit: 'tsp' }
    ],
    instructions: [
      { step: 1, description: 'Marinate chicken in yogurt and spices for 4 hours.' },
      { step: 2, description: 'Grill or tandoor the marinated chicken until cooked.' },
      { step: 3, description: 'Prepare tomato gravy with cashew paste and spices.' },
      { step: 4, description: 'Add butter and cream to the gravy.' },
      { step: 5, description: 'Combine grilled chicken with the creamy gravy.' }
    ],
    prepTime: 240,
    cookTime: 40,
    servings: 4,
    difficulty: 'medium',
    categories: ['main', 'dinner'],
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398',
    createdAt: new Date('2024-04-22'),
    updatedAt: new Date('2024-04-22')
  },
  {
    id: '8',
    title: 'Bhindi Fry (Okra)',
    description: 'Crispy and spicy okra stir-fry, a popular Indian vegetable dish.',
    ingredients: [
      { name: 'Okra (Bhindi)', amount: '500', unit: 'g' },
      { name: 'Onion', amount: '1', unit: 'medium' },
      { name: 'Turmeric powder', amount: '1/2', unit: 'tsp' },
      { name: 'Red chili powder', amount: '1', unit: 'tsp' },
      { name: 'Amchur powder', amount: '1/2', unit: 'tsp' },
      { name: 'Oil', amount: '3', unit: 'tbsp' }
    ],
    instructions: [
      { step: 1, description: 'Wash and dry okra thoroughly, then cut into rounds.' },
      { step: 2, description: 'Heat oil and fry okra until crispy.' },
      { step: 3, description: 'Add sliced onions and spices.' },
      { step: 4, description: 'Cook until okra is crispy and well-coated with spices.' }
    ],
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    difficulty: 'easy',
    categories: ['side', 'lunch'],
    image: 'https://images.unsplash.com/photo-1601576084861-5de423553c0f',
    createdAt: new Date('2024-04-22'),
    updatedAt: new Date('2024-04-22')
  },
  {
    id: '9',
    title: 'Masala Dosa',
    description: 'Crispy rice and lentil crepe filled with spiced potato filling, served with chutney and sambar.',
    ingredients: [
      { name: 'Rice', amount: '3', unit: 'cups' },
      { name: 'Urad dal', amount: '1', unit: 'cup' },
      { name: 'Potatoes', amount: '4', unit: 'medium' },
      { name: 'Onions', amount: '2', unit: 'medium' },
      { name: 'Mustard seeds', amount: '1', unit: 'tsp' },
      { name: 'Curry leaves', amount: '2', unit: 'sprigs' }
    ],
    instructions: [
      { step: 1, description: 'Soak rice and dal separately for 6 hours, then grind to a fine batter.' },
      { step: 2, description: 'Ferment the batter overnight.' },
      { step: 3, description: 'Prepare potato filling with spices and onions.' },
      { step: 4, description: 'Spread batter on hot griddle in a circular motion.' },
      { step: 5, description: 'Add potato filling and fold the dosa.' }
    ],
    prepTime: 720,
    cookTime: 30,
    servings: 6,
    difficulty: 'medium',
    categories: ['breakfast', 'main'],
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc',
    createdAt: new Date('2024-04-22'),
    updatedAt: new Date('2024-04-22')
  },
  {
    id: '10',
    title: 'Rose Falooda',
    description: 'A refreshing Indian dessert drink made with rose syrup, basil seeds, vermicelli, and milk.',
    ingredients: [
      { name: 'Milk', amount: '2', unit: 'cups' },
      { name: 'Rose syrup', amount: '4', unit: 'tbsp' },
      { name: 'Basil seeds', amount: '1', unit: 'tbsp' },
      { name: 'Falooda sev', amount: '1/2', unit: 'cup' },
      { name: 'Ice cream', amount: '2', unit: 'scoops' },
      { name: 'Nuts', amount: '2', unit: 'tbsp' }
    ],
    instructions: [
      { step: 1, description: 'Soak basil seeds in water for 30 minutes.' },
      { step: 2, description: 'Cook falooda sev according to package instructions.' },
      { step: 3, description: 'Layer glass with rose syrup, soaked basil seeds, and cooked falooda.' },
      { step: 4, description: 'Add chilled milk and top with ice cream.' },
      { step: 5, description: 'Garnish with chopped nuts.' }
    ],
    prepTime: 30,
    cookTime: 10,
    servings: 2,
    difficulty: 'easy',
    categories: ['dessert', 'drink'],
    image: 'https://images.unsplash.com/photo-1633383718081-85a8e051b91c',
    createdAt: new Date('2024-04-22'),
    updatedAt: new Date('2024-04-22')
  },
  {
    id: '11',
    title: 'French Toast',
    description: 'Classic breakfast dish made with bread slices dipped in egg and milk mixture, then pan-fried until golden.',
    ingredients: [
      { name: 'Bread slices', amount: '8', unit: 'slices' },
      { name: 'Eggs', amount: '4', unit: 'large' },
      { name: 'Milk', amount: '1', unit: 'cup' },
      { name: 'Vanilla extract', amount: '1', unit: 'tsp' },
      { name: 'Cinnamon', amount: '1', unit: 'tsp' },
      { name: 'Butter', amount: '2', unit: 'tbsp' },
      { name: 'Maple syrup', amount: '1/4', unit: 'cup' }
    ],
    instructions: [
      { step: 1, description: 'Whisk together eggs, milk, vanilla, and cinnamon.' },
      { step: 2, description: 'Dip bread slices in the egg mixture.' },
      { step: 3, description: 'Heat butter in a pan over medium heat.' },
      { step: 4, description: 'Cook bread until golden brown on both sides.' },
      { step: 5, description: 'Serve with maple syrup and fresh berries.' }
    ],
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    difficulty: 'easy',
    categories: ['breakfast'],
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929',
    createdAt: new Date('2024-04-22'),
    updatedAt: new Date('2024-04-22')
  }
];
