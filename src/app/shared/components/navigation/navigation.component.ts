import { Component } from "@angular/core";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent {
  dropdownItems = [
    {
      name: "Recipes",
      url: "/recipes",
    },
    {
      name: "Planner",
      url: "/planner",
    },
  ];
}
