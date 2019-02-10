import { registerLocaleData } from "@angular/common";
import localeDE from "@angular/common/locales/de";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MinPipe } from "./dashboard/min.pipe";
import { DemoUtilsModule } from "./demo-utils/demo-utils";
import { SharedModule } from "./shared/shared.module";

registerLocaleData(localeDE);

@NgModule({
    declarations: [AppComponent, DashboardComponent, MinPipe],
    imports: [BrowserModule, BrowserAnimationsModule, DemoUtilsModule, SharedModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
