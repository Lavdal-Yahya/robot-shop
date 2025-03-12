import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { filter } from 'rxjs';

const routes: Routes = [
  {path: 'home', component: HomeComponent, title: "home - Robot shop"},
  {path: 'catalog', component: CatalogComponent, title: "catalog - Robot shop"},
  {path: 'cart', component: CartComponent, title: "cart - Robot shop"},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
