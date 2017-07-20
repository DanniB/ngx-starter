import { CovalentLayoutModule, CovalentStepsModule } from '@covalent/core';
import { NgModule } from "@angular/core";

@NgModule({
    imports: [
        CovalentLayoutModule,
        CovalentStepsModule
    ],
    exports: [
        CovalentLayoutModule,
        CovalentStepsModule,
    ]
})
export class CustomCovalentModule { }