import { NgModule } from "@angular/core";
import { CustomCovalentModule } from "./custom-covalent.module";
import { CustomMaterialModule } from "./custom-material.module";
import { CustomPrimengModule } from "./custom-primeng.module";
import { CustomClarityModule } from "./custom-clarity.module";

@NgModule({
    imports: [CustomClarityModule, CustomCovalentModule, CustomMaterialModule, CustomPrimengModule],
    exports: [CustomClarityModule, CustomCovalentModule, CustomMaterialModule,  CustomPrimengModule]
})
export class SharedModule {}
