import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuComponent } from "./menu/menu.component";
import { AllMaterialModule } from "../allmaterial/all.material.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, AllMaterialModule, RouterModule],
  exports: [MenuComponent]
})
export class NavbarModule {}
