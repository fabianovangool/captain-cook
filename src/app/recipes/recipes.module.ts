import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { SharedModule } from "../shared/shared.module";
import { RecipesComponent } from "./recipes/recipes.component";
import { TileComponent } from "./tile/tile.component";
import { IngredientListComponent } from "./ingredient-list/ingredient-list.component";
import { RecipeFormComponent } from "./recipe-form/recipe-form.component";

@NgModule({
  declarations: [RecipesComponent, TileComponent, IngredientListComponent, RecipeFormComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  exports: [TileComponent],
})
export class RecipesModule {}
