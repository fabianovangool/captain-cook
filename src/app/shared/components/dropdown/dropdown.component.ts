import { Component, Input } from "@angular/core";

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.scss"],
})
export class DropdownComponent {
  @Input() dropdownItems!: { name: string; url: string }[];

  show = false;
  handleClick() {
    this.show !== true ? (this.show = true) : (this.show = false);
  }
}
