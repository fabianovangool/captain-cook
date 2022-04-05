import { Injectable } from "@angular/core";

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
  ];
}
