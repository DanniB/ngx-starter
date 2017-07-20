import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { CustomCovalentModule } from "./shared/CustomCovalentModule";
import { CustomMaterialModule } from "./shared/CustomMaterialModule";
import { CustomPrimeNgModule } from "./shared/CustomPrimeNgModule";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CustomMaterialModule, CustomCovalentModule, CustomPrimeNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
