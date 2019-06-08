import { NgModule } from "@angular/core";

import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";

import { CustomBootstrapModule } from "./custom-bootstrap.module";
import { CustomClarityModule } from "./custom-clarity.module";
import { CustomCovalentModule } from "./custom-covalent.module";
import { CustomMaterialModule } from "./custom-material.module";
import { CustomPrimengModule } from "./custom-primeng.module";

import { DragAndDropModule } from "angular-draggable-droppable";

@NgModule({
    imports: [
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory
        }),
        CustomBootstrapModule,
        CustomClarityModule,
        CustomCovalentModule,
        CustomMaterialModule,
        // TODO Fix: CustomPrimengModule,
        DragAndDropModule
    ],
    exports: [
        CalendarModule,
        CustomBootstrapModule,
        CustomClarityModule,
        CustomCovalentModule,
        CustomMaterialModule,
        // TODO Fix: CustomPrimengModule,
        DragAndDropModule
    ]
})
export class SharedModule {}
