import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { ButtonComponent } from "./components/button/button.component";
import { DropdownComponent } from "./components/dropdown/dropdown.component";
import { AppRoutingModule } from "../app-routing.module";
import { AsideComponent } from "./components/aside/aside.component";
import { ModalComponent } from "./components/modal/modal.component";

@NgModule({
  declarations: [
    NavigationComponent,
    ButtonComponent,
    DropdownComponent,
    AsideComponent,
    ModalComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
  exports: [
    NavigationComponent,
    ButtonComponent,
    DropdownComponent,
    AsideComponent,
    ModalComponent,
  ],
})
export class SharedModule {}
