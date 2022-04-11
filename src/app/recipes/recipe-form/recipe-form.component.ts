import { Component } from "@angular/core";

import { FormBuilder, Validators } from "@angular/forms";
import { RecipesService } from "src/app/shared/services/recipes.service";

@Component({
  selector: "app-recipe-form",
  templateUrl: "./recipe-form.component.html",
  styleUrls: ["./recipe-form.component.scss"],
})
export class RecipeFormComponent {
  ingredients = this.fb.array([
    this.fb.group({
      name: ["", Validators.required],
      unit: ["", Validators.required],
      amount: ["", Validators.required],
    }),
  ]);

  recipeForm = this.fb.group({
    name: ["", Validators.required],
    portionSize: ["", Validators.required],
    image: ["", Validators.required],
    method: ["", Validators.required],
    ingredients: this.ingredients,
  });

  constructor(private fb: FormBuilder, private recipesService: RecipesService) {}

  ngOnInit() {}

  addIngredient() {
    this.ingredients.push(
      this.fb.group({
        name: ["", Validators.required],
        unit: ["", Validators.required],
        amount: ["", Validators.required],
      }),
    );
  }

  addRecipe() {
    this.recipesService.addRecipe();
  }
}
