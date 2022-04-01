import { Component, OnInit } from "@angular/core";
import { PlannedService } from "src/app/shared/services/planned.service";

@Component({
  selector: "app-grocery-list",
  templateUrl: "./grocery-list.component.html",
  styleUrls: ["./grocery-list.component.scss"],
})
export class GroceryListComponent implements OnInit {
  ingredientsList: {
    name: string;
    unit: string;
    amount: string;
  }[][] = [];

  constructor(private plannedService: PlannedService) {}

  ngOnInit(): void {
    this.ingredientsList = this.plannedService.getIngredientsList();
  }
}
