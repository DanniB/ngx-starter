import { NgModule } from "@angular/core";
import { ButtonModule, SharedModule } from "primeng/primeng";
import { TableModule } from "primeng/table";

@NgModule({
    imports: [ButtonModule, TableModule, SharedModule],
    exports: [ButtonModule, TableModule, SharedModule]
})
export class CustomPrimengModule {}
