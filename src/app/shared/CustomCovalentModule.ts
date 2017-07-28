import { NgModule } from "@angular/core";
import { CovalentLayoutModule, CovalentStepsModule } from "@covalent/core";

@NgModule({
    imports: [
        CovalentLayoutModule,
        CovalentStepsModule
    ],
    exports: [
        CovalentLayoutModule,
        CovalentStepsModule
    ]
})
export class CustomCovalentModule { }