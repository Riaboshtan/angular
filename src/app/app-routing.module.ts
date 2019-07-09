import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import {DiscountsComponent} from './discounts/discounts.component';
import {DiscountDetailsComponent} from './discount-details/discount-details.component'
import {HeightComponent} from './height/height.component';
import {OverlayComponent} from './overlay/overlay.component';
import {TimeComponent} from './time/time.component';
import { UsersComponent } from './users/users.component';




const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'category', component: CategoryComponent},
  {path: 'discounts', component: DiscountsComponent},
  {path: 'discount/details', component: DiscountDetailsComponent},
  {path: 'height', component: HeightComponent},
  {path: 'overlay', component: OverlayComponent},
  {path: 'time', component: TimeComponent},
  {path: 'users', component: UsersComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
