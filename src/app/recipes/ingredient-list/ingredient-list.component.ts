import { Component, Input } from "@angular/core";

@Component({
  selector: "app-ingredient-list",
  templateUrl: "./ingredient-list.component.html",
  styleUrls: ["./ingredient-list.component.scss"],
})
export class IngredientListComponent {
  @Input() name!: string;
  @Input() unit!: string;
  @Input() amount!: number;
}
