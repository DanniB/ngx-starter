import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MinPipe } from "./dashboard/min.pipe";
import { SharedModule } from "./shared/shared.module";

@NgModule({
    declarations: [AppComponent, DashboardComponent, MinPipe],
    imports: [BrowserModule, BrowserAnimationsModule, SharedModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
