import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { GroceryList } from "../models/grocerylist.model";
import { Planner } from "../models/planner.model";

@Injectable({
  providedIn: "root",
})
export class PlannedService {
  meals = [
    {
      id: 1,
      name: "Pasta Carbonara",
      portionSize: "3p",
      image: "paddo.jpeg",
      ingredients: [
        {
          name: "Linguine",
          unit: "grams",
          amount: 300,
        },
        {
          name: "Guanciale",
          unit: "grams",
          amount: 100,
        },
        {
          name: "Pecorino",
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
      id: 2,
      name: "Omelet",
      portionSize: "2p",
      image: "pfruit.jpeg",
      ingredients: [
        {
          name: "Garlic",
          unit: "cloves",
          amount: 3,
        },
        {
          name: "Tomatoes",
          unit: "whole",
          amount: 2,
        },
        {
          name: "Tarragon",
          unit: "grams",
          amount: 20,
        },
        {
          name: "Eggs",
          unit: "whole",
          amount: 4,
        },
      ],
    },
    {
      id: 3,
      name: "Roasted Chickpeas",
      portionSize: "4p",
      image: "pompoen-soep.jpg",
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
      name: "Burnt Aubergine",
      portionSize: "1p",
      image: "roast.jpeg",
      ingredients: [
        {
          name: "Linguine",
          unit: "grams",
          amount: 300,
        },
        {
          name: "Guanciale",
          unit: "grams",
          amount: 100,
        },
        {
          name: "Pecorino",
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
      name: "Tabbouleh",
      portionSize: "4p",
      image: "pompoen-soep.jpg",
      ingredients: [
        {
          name: "Linguine",
          unit: "grams",
          amount: 300,
        },
        {
          name: "Guanciale",
          unit: "grams",
          amount: 100,
        },
        {
          name: "Pecorino",
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
      id: 6,
      name: "Ramen",
      portionSize: "1p",
      image: "paddo.jpeg",
      ingredients: [
        {
          name: "Linguine",
          unit: "grams",
          amount: 300,
        },
        {
          name: "Guanciale",
          unit: "grams",
          amount: 100,
        },
        {
          name: "Pecorino",
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
  ];

  extraMeal = {
    id: 7,
    name: "Saag Paneer",
    portionSize: "2p",
    image: "roast.jpeg",
    ingredients: [
      {
        name: "Linguine",
        unit: "grams",
        amount: 300,
      },
      {
        name: "Guanciale",
        unit: "grams",
        amount: 100,
      },
      {
        name: "Pecorino",
        unit: "grams",
        amount: 100,
      },
      {
        name: "Eggs",
        unit: "whole",
        amount: 3,
      },
    ],
  };

  mealsChange: Subject<Planner[]> = new Subject<Planner[]>();
  ingredientsChange: Subject<GroceryList[]> = new Subject<GroceryList[]>();

  getMeals() {
    return this.meals;
  }

  addedMeal = {} as
    | {
        id: number;
        name: string;
        portionSize: string;
        image: string;
        ingredients: { name: string; unit: string; amount: number }[];
      }
    | undefined;

  addMeal(id: number) {
    this.addedMeal = this.meals.find((meal) => meal.id == id);
    if (this.addedMeal) {
      this.meals = [this.addedMeal, ...this.meals];
      this.mealsChange.next(this.meals);
      this.getIngredientList();
    }
  }

  removeMeal(id: number) {
    this.meals = this.meals.filter((meal) => meal.id !== id);
    this.mealsChange.next(this.meals);
    this.getIngredientList();
  }

  ingredientList: {
    name: string;
    unit: string;
    amount: number;
  }[] = [];

  getIngredientList() {
    this.ingredientList = this.meals
      .map((meal) => meal.ingredients)
      .reduce((acc, curr) => acc.concat(curr))
      .reduce((acc: any, curr) => {
        const ingredient = acc.find((ingredient: any) => ingredient.name === curr.name);
        ingredient ? (ingredient.amount += curr.amount) : acc.push(curr);
        return acc;
      }, []);

    this.ingredientsChange.next(this.ingredientList);
    return this.ingredientList;
  }
}
