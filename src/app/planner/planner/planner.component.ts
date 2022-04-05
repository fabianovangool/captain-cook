import { Component, OnInit } from "@angular/core";
import { PlannedService } from "src/app/shared/services/planned.service";

@Component({
  selector: "app-planner",
  templateUrl: "./planner.component.html",
  styleUrls: ["./planner.component.scss"],
})
export class PlannerComponent implements OnInit {
  meals: {
    id: number;
    name: string;
    portionSize: string;
    image: string;
    ingredients: { name: string; unit: string; amount: number }[];
  }[] = [];

  constructor(private plannedService: PlannedService) {}

  ngOnInit() {
    this.meals = this.plannedService.getMeals();
    this.plannedService.mealsChange.subscribe((value) => {
      this.meals = value;
    });
  }

  addMeal() {
    this.plannedService.addMeal();
  }
  removeMeal(id: number) {
    this.plannedService.removeMeal(id);
  }
}
