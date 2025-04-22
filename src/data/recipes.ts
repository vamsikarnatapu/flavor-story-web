
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
  }
];
