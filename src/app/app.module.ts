import { registerLocaleData } from "@angular/common";
import localeDE from "@angular/common/locales/de";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { MinPipe } from "./core/min.pipe";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DemoUtilsModule } from "./demo-utils/demo-utils";
import { SharedModule } from "./shared/shared.module";

registerLocaleData(localeDE);

@NgModule({
    declarations: [AppComponent, DashboardComponent, MinPipe],
    imports: [BrowserModule, CoreModule, DemoUtilsModule, SharedModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
