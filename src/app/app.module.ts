import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CategoryModule } from './modules/category/category.module';
import { ProductModule } from './modules/product/product.module';
import { CategoryService } from './services/category.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    CategoryModule,
    ProductModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    /*CategoryService*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
