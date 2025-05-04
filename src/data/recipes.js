export const recipes = [
    {
        id: 1,
        name: "Spaghetti Carbonara",
        image: "/images/cards/carbonara.jpg",
        time: "25 min",
        difficulty: "Easy",
        prepTime: "10 min",
        cookTime: "15 min",
        serves: 2,
        description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper. Quick and delicious!",

        ingredients: [
            "Spaghetti",
            "Eggs",
            "Parmesan cheese",
            "Pancetta",
            "Black pepper",
            "Salt",
            "Garlic"
        ],

        instructions: [
            "Cook the spaghetti in salted boiling water until al dente. Reserve some pasta water.",
            "In a bowl, whisk together eggs and grated parmesan cheese.",
            "In a pan, cook pancetta until crispy. Optionally, add garlic and cook until fragrant.",
            "Drain the spaghetti and add it to the pan with pancetta.",
            "Remove from heat and quickly mix in the egg and cheese mixture.",
            "Add a bit of reserved pasta water to create a creamy sauce if needed.",
            "Season with black pepper and serve immediately."
        ]
    },
    {
        id: 2,
        name: "Salmon Florentine",
        image: "/images/cards/salmon-florentine.jpg",
        time: "35 min",
        prepTime: "5 min",
        cookTime: "30 min",
        difficulty: "Medium",
        serves: 4,
        description: "A delicious salmon dish served with a creamy spinach sauce, perfect for a quick weeknight dinner.",

        ingredients: [
            "Salmon fillets",
            "Spinach",
            "Heavy cream",
            "Parmesan cheese",
            "Butter",
            "Olive oil",
            "Garlic",
            "Onion",
            "Lemon juice",
            "Salt",
            "Black pepper"
        ],

        instructions: [
            "Season salmon fillets with salt and pepper.",
            "Sear the salmon in a pan with olive oil until golden brown on both sides. Set aside.",
            "In the same pan, add butter and sauté chopped onion and garlic until soft.",
            "Add fresh spinach and cook until wilted.",
            "Pour in heavy cream and stir in grated parmesan cheese. Simmer until slightly thickened.",
            "Add lemon juice and return the salmon to the pan to warm through.",
            "Serve the salmon topped with the creamy spinach sauce."
        ]
    },
    {
        id: 3,
        name: "Roast Chicken",
        image: "/images/cards/roast-chicken.png",
        time: "1h 15min",
        difficulty: "Medium",
        prepTime: "15 min",
        cookTime: "1h",
        serves: 4,
        description: "A tender and flavorful roast chicken, perfect for family dinners or special occasions.",

        ingredients: [
            "Whole chicken",
            "Olive oil",
            "Garlic",
            "Lemon",
            "Fresh rosemary",
            "Fresh thyme",
            "Salt",
            "Black pepper",
            "Carrots",
            "Potatoes",
            "Onion"
        ],

        instructions: [
            "Preheat the oven to 200°C (400°F).",
            "Season the chicken with olive oil, salt, pepper, garlic, rosemary, and thyme.",
            "Stuff the cavity with lemon halves and additional herbs if desired.",
            "Place the chicken in a roasting pan with chopped carrots, potatoes, and onions around it.",
            "Roast in the oven for about 1 hour, basting occasionally, until the chicken is golden and cooked through.",
            "Let the chicken rest for 10 minutes before carving and serving."
        ]
    },
    {
        id: 4,
        name: "Strawberry Cake",
        image: "/images/cards/strawbery-cake.jpg",
        time: "50 min",
        difficulty: "Medium",
        prepTime: "20 min",
        cookTime: "30 min",
        serves: 8,
        description: "A moist and delicious strawberry cake, perfect for dessert or celebrations.",

        ingredients: [
            "Strawberries",
            "Flour",
            "Sugar",
            "Eggs",
            "Milk",
            "Butter",
            "Baking powder",
            "Vanilla extract",
            "Salt",
            "Heavy cream"
        ],

        instructions: [
            "Preheat the oven to 180°C (350°F) and grease a cake pan.",
            "In a bowl, mix flour, baking powder, and salt.",
            "In another bowl, cream together butter and sugar until light and fluffy.",
            "Add eggs one at a time, then mix in vanilla extract.",
            "Alternate adding the dry ingredients and milk to the wet mixture, mixing until smooth.",
            "Fold in chopped strawberries.",
            "Pour the batter into the prepared pan and bake for 30 minutes or until a toothpick comes out clean.",
            "Let the cake cool before topping with whipped cream and fresh strawberries."
        ]
    },
    {
        id: 5,
        name: "Caesar Salad",
        image: "/images/cards/caesar-salad.jpg",
        time: "15 min",
        difficulty: "Easy",
        ingredients: ["Lettuce", "Chicken", "Croutons", "Egg", "Parmesan"],
        prepTime: "10 min",
        cookTime: "5 min",
        serves: 2,
        description: "A classic Caesar salad with crispy croutons, grilled chicken, and a creamy dressing.",

        instructions: [
            "Grill the chicken until fully cooked and slice into strips.",
            "Wash and chop the lettuce.",
            "Prepare the dressing by blending egg, olive oil, garlic, lemon juice, and anchovies (optional).",
            "Toss the lettuce with the dressing, croutons, and grated parmesan cheese.",
            "Top with the grilled chicken and serve immediately."
        ]
    },
    {
        id: 6,
        name: "Shrimp Stir Fry",
        image: "/images/cards/shrimp-stir-fry.jpg",
        time: "20 min",
        difficulty: "Medium",
        ingredients: ["Shrimp", "Vegetables", "Soy sauce", "Rice"],
        prepTime: "10 min",
        cookTime: "10 min",
        serves: 3,
        description: "A quick and healthy shrimp stir fry with fresh vegetables and a savory sauce.",

        instructions: [
            "Cook the rice according to package instructions and set aside.",
            "Heat oil in a wok or large pan and sauté shrimp until pink. Remove and set aside.",
            "Add chopped vegetables to the pan and stir-fry until tender-crisp.",
            "Return the shrimp to the pan and add soy sauce. Stir to combine.",
            "Serve the stir fry over the cooked rice."
        ]
    },
    {
        id: 7,
        name: "Beef Tacos",
        image: "/images/cards/beef-tacos.jpg",
        time: "25 min",
        difficulty: "Easy",
        ingredients: ["Beef", "Taco shells", "Lettuce", "Onion", "Cheese"],
        prepTime: "10 min",
        cookTime: "15 min",
        serves: 4,
        description: "Delicious beef tacos with fresh toppings, perfect for a quick and satisfying meal.",

        instructions: [
            "Cook the ground beef in a pan until browned. Season with taco seasoning.",
            "Warm the taco shells in the oven or on a skillet.",
            "Fill the taco shells with the cooked beef, lettuce, chopped onion, and shredded cheese.",
            "Serve with your favorite toppings like salsa or sour cream."
        ]
    },
    {
        id: 8,
        name: "Vegetable Soup",
        image: "/images/cards/vegetable-soup.jpg",
        time: "40 min",
        difficulty: "Easy",
        ingredients: ["Carrots", "Potatoes", "Celery", "Broth"],
        prepTime: "15 min",
        cookTime: "25 min",
        serves: 6,
        description: "A hearty and comforting vegetable soup, perfect for cold days or a light meal.",

        instructions: [
            "Chop all the vegetables into bite-sized pieces.",
            "In a large pot, sauté onions and garlic in olive oil until fragrant.",
            "Add the chopped vegetables and cook for a few minutes.",
            "Pour in the broth and bring to a boil. Reduce heat and simmer until the vegetables are tender.",
            "Season with salt and pepper to taste and serve hot."
        ]
    },
    {
        id: 9,
        name: "Blueberry Pancakes",
        image: "/images/cards/blueberry-pancakes.jpg",
        time: "20 min",
        difficulty: "Easy",
        ingredients: ["Flour", "Milk", "Eggs", "Syrup", "Blueberry", "Banana", "Honey"],
        prepTime: "10 min",
        cookTime: "10 min",
        serves: 4,
        description: "Fluffy blueberry pancakes with a hint of sweetness, perfect for breakfast or brunch.",

        instructions: [
            "In a bowl, mix flour, baking powder, and a pinch of salt.",
            "In another bowl, whisk together milk, eggs, and honey.",
            "Combine the wet and dry ingredients, then fold in blueberries.",
            "Heat a non-stick skillet and pour batter to form pancakes.",
            "Cook until bubbles form on the surface, then flip and cook until golden brown.",
            "Serve with syrup and sliced bananas."
        ]
    },
    {
        id: 10,
        name: "Lasagna Bolognese",
        image: "/images/cards/lasagna-bolognese.jpg",
        time: "1h 30min",
        difficulty: "Hard",
        ingredients: ["Pasta sheets", "Cheese", "Meat sauce", "Mince beef", "Bechamel"],
        prepTime: "30 min",
        cookTime: "1h",
        serves: 6,
        description: "A rich and hearty lasagna bolognese, layered with cheese and a flavorful meat sauce.",

        instructions: [
            "Prepare the meat sauce by cooking minced beef with onions, garlic, and tomato sauce.",
            "Make the béchamel sauce by whisking butter, flour, and milk until thickened.",
            "Preheat the oven to 180°C (350°F).",
            "Layer the lasagna in a baking dish: pasta sheets, meat sauce, béchamel, and cheese. Repeat.",
            "Bake for 1 hour or until the top is golden and bubbly.",
            "Let it rest for 10 minutes before serving."
        ]
    },
    {
        id: 11,
        name: "Greek Salad",
        image: "/images/cards/greek-salad.jpg",
        time: "15 min",
        difficulty: "Easy",
        ingredients: ["Tomatoes", "Cucumber", "Feta cheese", "Olives"],
        prepTime: "10 min",
        cookTime: "5 min",
        serves: 2,
        description: "A refreshing Greek salad with fresh vegetables, feta cheese, and a tangy dressing.",

        instructions: [
            "Chop the tomatoes and cucumber into bite-sized pieces.",
            "Combine the vegetables in a bowl with olives and crumbled feta cheese.",
            "Drizzle with olive oil and a splash of red wine vinegar.",
            "Season with salt, pepper, and oregano. Toss gently and serve."
        ]
    },
    {
        id: 12,
        name: "Chicken Curry",
        image: "/images/cards/chicken-curry.jpg",
        time: "45 min",
        difficulty: "Medium",
        ingredients: ["Chicken", "Curry powder", "Coconut milk", "Onions"],
        prepTime: "15 min",
        cookTime: "30 min",
        serves: 4,
        description: "A flavorful chicken curry with a creamy coconut milk base and aromatic spices.",

        instructions: [
            "Heat oil in a pan and sauté onions until golden.",
            "Add chicken pieces and cook until browned.",
            "Stir in curry powder and cook for 1 minute to release the aroma.",
            "Pour in coconut milk and simmer until the chicken is cooked through.",
            "Serve with rice or naan bread."
        ]
    }
];
