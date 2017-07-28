import { NgModule } from "@angular/core";
import {
    MdAutocompleteModule, MdButtonModule, MdCheckboxModule, MdIconModule, MdInputModule, MdPaginatorModule,
    MdSortModule,
    MdTableModule
} from "@angular/material";

@NgModule({
    imports: [MdAutocompleteModule, MdButtonModule, MdCheckboxModule, MdIconModule, MdInputModule, MdPaginatorModule,
              MdSortModule, MdTableModule],
    exports: [MdAutocompleteModule, MdButtonModule, MdCheckboxModule, MdIconModule, MdInputModule, MdPaginatorModule,
              MdSortModule, MdTableModule]
})
export class CustomMaterialModule { }
