import { ButtonModule, DataTableModule, SharedModule } from "primeng/primeng";
import { NgModule } from "@angular/core";

@NgModule({
    imports: [ButtonModule, DataTableModule, SharedModule],
    exports: [ButtonModule, DataTableModule, SharedModule],
})
export class CustomPrimeNgModule { }