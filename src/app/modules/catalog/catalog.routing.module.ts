import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductHomeComponent } from "./product-home/product-home.component";
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: "", component: ProductHomeComponent },
  { path: "home", component: ProductHomeComponent },
  { path: "shop", component: ProductListComponent },
  { path: "shop/:id", component: ProductDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule {}
