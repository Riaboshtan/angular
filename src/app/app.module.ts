import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { CategoryComponent } from './category/category.component';

import {CategoryService} from './category/category.server';
import {DiscountsService} from './discounts/discount.server';

import { TimeComponent } from './time/time.component';
import { OverlayComponent } from './overlay/overlay.component';
import { HeightComponent } from './height/height.component';
import { DiscountsComponent } from './discounts/discounts.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    TimeComponent,
    OverlayComponent,
    HeightComponent,
    DiscountsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CategoryService, DiscountsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
