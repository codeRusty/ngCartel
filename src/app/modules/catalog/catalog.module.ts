import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { AllMaterialModule } from '../allmaterial/all.material.module';
import { CatalogRoutingModule } from './catalog.routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductListComponent, ProductListItemComponent, ProductDetailComponent, ProductHomeComponent],
  imports: [
    CommonModule,
    AllMaterialModule,
    CatalogRoutingModule,
    FormsModule
  ]
})
export class CatalogModule { }
