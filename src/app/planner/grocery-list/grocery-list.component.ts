import { Component, OnInit } from "@angular/core";
import { PlannedService } from "src/app/shared/services/planned.service";

@Component({
  selector: "app-grocery-list",
  templateUrl: "./grocery-list.component.html",
  styleUrls: ["./grocery-list.component.scss"],
})
export class GroceryListComponent implements OnInit {
  ingredientList: {
    name: string;
    unit: string;
    amount: number;
  }[] = [];

  constructor(private plannedService: PlannedService) {}

  ngOnInit() {
    this.ingredientList = this.plannedService.getIngredientList();
    this.plannedService.ingredientsChange.subscribe((value) => {
      this.ingredientList = value;
    });
  }
}
