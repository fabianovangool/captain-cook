import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { ButtonComponent } from "./components/button/button.component";
import { DropdownComponent } from "./components/dropdown/dropdown.component";
import { AppRoutingModule } from "../app-routing.module";
import { AsideComponent } from "./components/aside/aside.component";

@NgModule({
  declarations: [NavigationComponent, ButtonComponent, DropdownComponent, AsideComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [NavigationComponent, ButtonComponent, DropdownComponent, AsideComponent],
})
export class SharedModule {}
