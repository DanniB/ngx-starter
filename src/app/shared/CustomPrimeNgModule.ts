import { NgModule } from "@angular/core";
import { ButtonModule, DataTableModule, SharedModule } from "primeng/primeng";

@NgModule({
    imports: [ButtonModule, DataTableModule, SharedModule],
    exports: [ButtonModule, DataTableModule, SharedModule]
})
export class CustomPrimeNgModule {}
