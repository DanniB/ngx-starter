import { NgModule } from "@angular/core";
import { CustomClarityModule } from "./custom-clarity.module";
import { CustomCovalentModule } from "./custom-covalent.module";
import { CustomMaterialModule } from "./custom-material.module";
import { CustomPrimengModule } from "./custom-primeng.module";

@NgModule({
    imports: [CustomClarityModule, CustomCovalentModule, CustomMaterialModule, CustomPrimengModule],
    exports: [CustomClarityModule, CustomCovalentModule, CustomMaterialModule, CustomPrimengModule]
})
export class SharedModule {}
