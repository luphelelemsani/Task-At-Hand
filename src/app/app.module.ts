import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/header/cart/cart.component';
import { ProductSectionComponent } from './components/product-section/product-section.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeroComponent } from './components/hero/hero.component';
import { FilterComponent } from './components/product-section/filter/filter.component';
import { ProductsComponent } from './components/product-section/products/products.component';
import { ProductComponent } from './components/product-section/products/product/product.component';
import { SortNavComponent } from './components/product-section/sort-nav/sort-nav.component';
import { FeaturedProdComponent } from './components/hero/featured-prod/featured-prod.component';
import { MainComponent } from './components/hero/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductSectionComponent,
    HeroComponent,
    FilterComponent,
    ProductsComponent,
    ProductComponent,
    SortNavComponent,
    FeaturedProdComponent,
    MainComponent,
  ],
  imports: [
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
