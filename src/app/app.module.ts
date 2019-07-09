import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { CategoryComponent } from './category/category.component';

import {CategoryService} from './category/category.server';
import {DiscountsService} from './discounts/discount.server';
import {HeightService} from './height/height.service';
import {OverlayService} from './overlay/overlay.service';
import {TimeService} from './time/time.service';
import {UsersService} from './users/users.service';

import { TimeComponent } from './time/time.component';
import { OverlayComponent } from './overlay/overlay.component';
import { HeightComponent } from './height/height.component';
import { DiscountsComponent } from './discounts/discounts.component';
import { UsersComponent } from './users/users.component';
import { LikesComponent } from './likes/likes.component';
import { DiscountDetailsComponent } from './discount-details/discount-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    TimeComponent,
    OverlayComponent,
    HeightComponent,
    DiscountsComponent,
    UsersComponent,
    LikesComponent,
    DiscountDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CategoryService, DiscountsService, HeightService, OverlayService, TimeService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
