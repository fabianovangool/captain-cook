import { Component, OnInit } from "@angular/core";
import { RecipesService } from "src/app/shared/services/recipes.service";
import { ModalService } from "src/app/shared/services/modal.service";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.scss"],
})
export class RecipesComponent implements OnInit {
  recipes: {
    id: number;
    name: string;
    portionSize: string;
    image: string;
    method: string;
    ingredients: { name: string; unit: string; amount: number }[];
  }[] = [];

  ingredientList = [] as {
    name: string;
    unit: string;
    amount: number;
  }[];

  isModalOpen: boolean = false;

  constructor(private recipesService: RecipesService, private modalService: ModalService) {}

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
    this.recipesService.recipeChange.subscribe((value) => {
      this.ingredientList = value;
    });
    this.modalService.modalTriggered.subscribe((value) => {
      this.isModalOpen = value;
    });
    this.modalService.triggerModal();
  }

  getIngredients(id: number) {
    this.recipesService.getIngredients(id);
  }

  triggerModal() {
    this.modalService.triggerModal();
  }
}
