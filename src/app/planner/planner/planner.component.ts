import { Component } from "@angular/core";

@Component({
  selector: "app-planner",
  templateUrl: "./planner.component.html",
  styleUrls: ["./planner.component.scss"],
})
export class PlannerComponent {
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
          amount: "300",
        },
        {
          name: "Guanciale",
          unit: "grams",
          amount: "100",
        },
        {
          name: "Pecorino",
          unit: "grams",
          amount: "100",
        },
        {
          name: "Eggs",
          unit: "whole",
          amount: "3",
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
          amount: "3",
        },
        {
          name: "Tomatoes",
          unit: "whoe",
          amount: "2",
        },
        {
          name: "Tarragon",
          unit: "grams",
          amount: "20",
        },
        {
          name: "Eggs",
          unit: "whole",
          amount: "4",
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
          name: "Linguine",
          unit: "grams",
          amount: "300",
        },
        {
          name: "Guanciale",
          unit: "grams",
          amount: "100",
        },
        {
          name: "Pecorino",
          unit: "grams",
          amount: "100",
        },
        {
          name: "Eggs",
          unit: "whole",
          amount: "3",
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
          amount: "300",
        },
        {
          name: "Guanciale",
          unit: "grams",
          amount: "100",
        },
        {
          name: "Pecorino",
          unit: "grams",
          amount: "100",
        },
        {
          name: "Eggs",
          unit: "whole",
          amount: "3",
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
          amount: "300",
        },
        {
          name: "Guanciale",
          unit: "grams",
          amount: "100",
        },
        {
          name: "Pecorino",
          unit: "grams",
          amount: "100",
        },
        {
          name: "Eggs",
          unit: "whole",
          amount: "3",
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
          amount: "300",
        },
        {
          name: "Guanciale",
          unit: "grams",
          amount: "100",
        },
        {
          name: "Pecorino",
          unit: "grams",
          amount: "100",
        },
        {
          name: "Eggs",
          unit: "whole",
          amount: "3",
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
        amount: "300",
      },
      {
        name: "Guanciale",
        unit: "grams",
        amount: "100",
      },
      {
        name: "Pecorino",
        unit: "grams",
        amount: "100",
      },
      {
        name: "Eggs",
        unit: "whole",
        amount: "3",
      },
    ],
  };

  addMeal() {
    this.meals = [...this.meals, this.extraMeal];
  }

  removeMeal(id: number) {
    this.meals = this.meals.filter((meal) => meal.id !== id);
  }
}
