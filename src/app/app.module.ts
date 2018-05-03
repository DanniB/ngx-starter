import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CustomCovalentModule } from "./shared/CustomCovalentModule";
import { CustomMaterialModule } from "./shared/CustomMaterialModule";
import { CustomPrimeNgModule } from "./shared/CustomPrimeNgModule";

@NgModule({
    declarations: [AppComponent],
    // Insert CustomCovalentModule, CustomPrimeNgModule after angular 6 support is offered
    imports: [BrowserModule, BrowserAnimationsModule, CustomMaterialModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
