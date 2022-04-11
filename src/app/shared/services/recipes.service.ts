import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { IngredientList } from "../models/ingredient-list.model";

@Injectable({
  providedIn: "root",
})
export class RecipesService {
  recipes = [
    {
      id: 1,
      name: "Vegetable Biryani",
      portionSize: "5p",
      image: "paddo.jpeg",
      method:
        "Heat three tablespoons of oil in a medium, preferably nonstick sauté pan. Add the onions, potatoes, chilli, sumac and some salt and pepper, and cook on medium heat for 20 minutes, stirring occasionally, until the onions are soft and golden-brown and the potatoes are cooked. Stir in the sugar and garlic, taste and add more salt and pepper if needed.",
      ingredients: [
        {
          name: "Paprika",
          unit: "grams",
          amount: 300,
        },
        {
          name: "Basmati Rice",
          unit: "grams",
          amount: 100,
        },
        {
          name: "Curcuma",
          unit: "grams",
          amount: 100,
        },
        {
          name: "Yoghurt",
          unit: "whole",
          amount: 3,
        },
      ],
    },
    {
      id: 2,
      name: "Mackerel",
      portionSize: "2p",
      image: "pfruit.jpeg",
      method:
        "Heat three tablespoons of oil in a medium, preferably nonstick sauté pan. Add the onions, potatoes, chilli, sumac and some salt and pepper, and cook on medium heat for 20 minutes, stirring occasionally, until the onions are soft and golden-brown and the potatoes are cooked. Stir in the sugar and garlic, taste and add more salt and pepper if needed.",
      ingredients: [
        {
          name: "Tahini",
          unit: "tablespoon",
          amount: 1,
        },
        {
          name: "Lemon",
          unit: "whole",
          amount: 2,
        },
        {
          name: "Mackerel",
          unit: "can",
          amount: 1,
        },
      ],
    },
    {
      id: 3,
      name: "Lemon Garlic Tofu",
      portionSize: "4p",
      image: "pompoen-soep.jpg",
      method:
        "Heat three tablespoons of oil in a medium, preferably nonstick sauté pan. Add the onions, potatoes, chilli, sumac and some salt and pepper, and cook on medium heat for 20 minutes, stirring occasionally, until the onions are soft and golden-brown and the potatoes are cooked. Stir in the sugar and garlic, taste and add more salt and pepper if needed.",
      ingredients: [
        {
          name: "Chickpeas",
          unit: "cans",
          amount: 2,
        },
        {
          name: "Coconut milk",
          unit: "cans",
          amount: 1,
        },
        {
          name: "Ginger",
          unit: "piece",
          amount: 1,
        },
        {
          name: "Fennel seeds",
          unit: "grams",
          amount: 10,
        },
      ],
    },
    {
      id: 4,
      name: "Lavas Icecream",
      portionSize: "1p",
      image: "roast.jpeg",
      method:
        "Heat three tablespoons of oil in a medium, preferably nonstick sauté pan. Add the onions, potatoes, chilli, sumac and some salt and pepper, and cook on medium heat for 20 minutes, stirring occasionally, until the onions are soft and golden-brown and the potatoes are cooked. Stir in the sugar and garlic, taste and add more salt and pepper if needed.",
      ingredients: [
        {
          name: "Glucose",
          unit: "tablespoon",
          amount: 3,
        },
        {
          name: "Milk",
          unit: "milliliters",
          amount: 100,
        },
        {
          name: "Lavas",
          unit: "grams",
          amount: 100,
        },
        {
          name: "Eggs",
          unit: "whole",
          amount: 3,
        },
      ],
    },
    {
      id: 5,
      name: "Vegetable Biryani",
      portionSize: "5p",
      image: "paddo.jpeg",
      method:
        "Heat three tablespoons of oil in a medium, preferably nonstick sauté pan. Add the onions, potatoes, chilli, sumac and some salt and pepper, and cook on medium heat for 20 minutes, stirring occasionally, until the onions are soft and golden-brown and the potatoes are cooked. Stir in the sugar and garlic, taste and add more salt and pepper if needed.",
      ingredients: [
        {
          name: "Paprika",
          unit: "grams",
          amount: 300,
        },
        {
          name: "Basmati Rice",
          unit: "grams",
          amount: 100,
        },
        {
          name: "Curcuma",
          unit: "grams",
          amount: 100,
        },
        {
          name: "Yoghurt",
          unit: "whole",
          amount: 3,
        },
      ],
    },
    {
      id: 6,
      name: "Vegetable Biryani",
      portionSize: "5p",
      image: "paddo.jpeg",
      method:
        "Heat three tablespoons of oil in a medium, preferably nonstick sauté pan. Add the onions, potatoes, chilli, sumac and some salt and pepper, and cook on medium heat for 20 minutes, stirring occasionally, until the onions are soft and golden-brown and the potatoes are cooked. Stir in the sugar and garlic, taste and add more salt and pepper if needed.",
      ingredients: [
        {
          name: "Paprika",
          unit: "grams",
          amount: 300,
        },
        {
          name: "Basmati Rice",
          unit: "grams",
          amount: 100,
        },
        {
          name: "Curcuma",
          unit: "grams",
          amount: 100,
        },
        {
          name: "Yoghurt",
          unit: "whole",
          amount: 3,
        },
      ],
    },
    {
      id: 7,
      name: "Vegetable Biryani",
      portionSize: "5p",
      image: "paddo.jpeg",
      method:
        "Heat three tablespoons of oil in a medium, preferably nonstick sauté pan. Add the onions, potatoes, chilli, sumac and some salt and pepper, and cook on medium heat for 20 minutes, stirring occasionally, until the onions are soft and golden-brown and the potatoes are cooked. Stir in the sugar and garlic, taste and add more salt and pepper if needed.",
      ingredients: [
        {
          name: "Paprika",
          unit: "grams",
          amount: 300,
        },
        {
          name: "Basmati Rice",
          unit: "grams",
          amount: 100,
        },
        {
          name: "Curcuma",
          unit: "grams",
          amount: 100,
        },
        {
          name: "Yoghurt",
          unit: "whole",
          amount: 3,
        },
      ],
    },
  ];

  recipeChange: Subject<IngredientList[]> = new Subject<IngredientList[]>();

  getRecipes() {
    return this.recipes;
  }

  ingredientList = {} as
    | {
        name: string;
        unit: string;
        amount: number;
      }[];

  getIngredients(id: number) {
    const chosenRecipe = this.recipes.find((recipe) => recipe.id === id);
    if (chosenRecipe) {
      this.ingredientList = chosenRecipe.ingredients;
      this.recipeChange.next(this.ingredientList);
    }
  }

  addRecipe() {}
}
