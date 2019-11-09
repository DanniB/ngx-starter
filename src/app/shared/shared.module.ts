import { NgModule } from "@angular/core";

import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";

import { CustomBootstrapModule } from "./custom-bootstrap.module";
import { CustomClarityModule } from "./custom-clarity.module";

import { CustomMaterialModule } from "./custom-material.module";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSlack } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import { DragAndDropModule } from "angular-draggable-droppable";

@NgModule({
    imports: [
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory
        }),
        CustomBootstrapModule,
        CustomClarityModule,
        CustomMaterialModule,
        DragAndDropModule,
        FontAwesomeModule
    ],
    exports: [
        CalendarModule,
        CustomBootstrapModule,
        CustomClarityModule,
        CustomMaterialModule,
        DragAndDropModule,
        FontAwesomeModule
    ]
})
export class SharedModule {
    constructor() {
        // Add an icon to the library for convenient access in other components
        library.add(faCoffee);
        library.add(faFilePdf);
        library.add(faSlack);
    }
}
