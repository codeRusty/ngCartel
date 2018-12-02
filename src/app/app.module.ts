import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarModule } from "./modules/navbar/navbar.module";
import { AppCommonModule } from "./modules/app-common/app-common.module";
import { AllMaterialModule } from "./modules/allmaterial/all.material.module";
import { CatalogModule } from './modules/catalog/catalog.module';
import { FooterModule } from './modules/footer/footer.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    AppCommonModule,
    AllMaterialModule,
    NavbarModule,
    CatalogModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
