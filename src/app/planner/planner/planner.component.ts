import { Component, OnInit } from "@angular/core";
import { PlannedService } from "src/app/shared/services/planned.service";
import { ModalService } from "src/app/shared/services/modal.service";

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

  isModalOpen: boolean = false;

  selectedMeal: number = 0;

  constructor(private plannedService: PlannedService, private modalService: ModalService) {}

  ngOnInit() {
    this.meals = this.plannedService.getMeals();
    this.plannedService.mealsChange.subscribe((value) => {
      this.meals = value;
    });
    this.modalService.modalTriggered.subscribe((value) => {
      this.isModalOpen = value;
    });
    this.modalService.triggerModal();
  }

  addMeal(id: number) {
    this.plannedService.addMeal(id);
  }
  removeMeal(id: number) {
    this.plannedService.removeMeal(id);
  }

  triggerModal() {
    this.modalService.triggerModal();
  }

  selectChangeHandler(event: Event) {
    this.selectedMeal = Number((event.target as HTMLInputElement).value);
  }
}
